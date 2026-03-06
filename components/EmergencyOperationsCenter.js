import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { AlertTriangle, Shield, Radio, MapPin, Clock, Users, Zap, Activity, Eye, Target, Phone, Siren } from 'lucide-react';

const EmergencyOperationsCenter = () => {
  const [eocStatus, setEocStatus] = useState({
    activationLevel: 'Level 2',
    activeIncidents: 3,
    deployedPersonnel: 247,
    emergencyVehicles: 89,
    sheltersOpen: 6,
    evacuatedPersons: 1247,
    responseTime: 6.4, // minutes
    coordinationEfficiency: 94.7
  });

  const [activeIncidents, setActiveIncidents] = useState([
    {
      id: 'INC-001',
      type: 'Wildfire',
      name: 'Canyon Ridge Fire',
      severity: 'high',
      status: 'active',
      location: 'Riverside County',
      startTime: new Date(Date.now() - 7200000),
      affectedArea: 2847, // acres
      evacuationZones: ['Zone A', 'Zone B'],
      assignedUnits: 12,
      icp: 'ICP-North',
      commander: 'Incident Commander Johnson'
    },
    {
      id: 'INC-002',
      type: 'Earthquake',
      name: 'San Andreas M5.2',
      severity: 'medium',
      status: 'monitoring',
      location: 'San Bernardino County',
      startTime: new Date(Date.now() - 3600000),
      affectedArea: 0,
      evacuationZones: [],
      assignedUnits: 8,
      icp: 'ICP-Central',
      commander: 'Incident Commander Martinez'
    },
    {
      id: 'INC-003',
      type: 'Flooding',
      name: 'Santa Ana River Flood',
      severity: 'medium',
      status: 'contained',
      location: 'Orange County',
      startTime: new Date(Date.now() - 10800000),
      affectedArea: 156, // square miles
      evacuationZones: ['Zone C'],
      assignedUnits: 6,
      icp: 'ICP-South',
      commander: 'Incident Commander Davis'
    }
  ]);

  const [emergencyAssets, setEmergencyAssets] = useState([
    {
      id: 'FIRE-001',
      type: 'Fire Engine',
      unit: 'Engine 47',
      status: 'deployed',
      location: 'Canyon Ridge Fire',
      personnel: 4,
      eta: 'On Scene',
      lastUpdate: new Date(),
      capabilities: ['Structure Protection', 'Wildland Suppression']
    },
    {
      id: 'RESCUE-001',
      type: 'Search & Rescue',
      unit: 'SAR Team Alpha',
      status: 'standby',
      location: 'Base Station',
      personnel: 8,
      eta: '15 min',
      lastUpdate: new Date(Date.now() - 300000),
      capabilities: ['Technical Rescue', 'Medical Support']
    },
    {
      id: 'MEDICAL-001',
      type: 'Emergency Medical',
      unit: 'Ambulance 23',
      status: 'en-route',
      location: 'Highway 91 & Main St',
      personnel: 2,
      eta: '8 min',
      lastUpdate: new Date(Date.now() - 120000),
      capabilities: ['Advanced Life Support', 'Patient Transport']
    },
    {
      id: 'POLICE-001',
      type: 'Law Enforcement',
      unit: 'Patrol Unit 456',
      status: 'deployed',
      location: 'Evacuation Zone A',
      personnel: 2,
      eta: 'On Scene',
      lastUpdate: new Date(),
      capabilities: ['Crowd Control', 'Traffic Management']
    },
    {
      id: 'HAZMAT-001',
      type: 'HAZMAT',
      unit: 'HAZMAT 12',
      status: 'available',
      location: 'Station 12',
      personnel: 3,
      eta: '12 min',
      lastUpdate: new Date(Date.now() - 600000),
      capabilities: ['Chemical Response', 'Decontamination']
    }
  ]);

  const [communicationChannels, setCommunicationChannels] = useState([
    {
      id: 'COMM-001',
      name: 'Fire Command',
      frequency: '154.430 MHz',
      status: 'active',
      traffic: 'high',
      units: 18,
      lastTransmission: 'Engine 47 requesting water drop',
      priority: 'high'
    },
    {
      id: 'COMM-002',
      name: 'Police Tactical',
      frequency: '460.250 MHz',
      status: 'active',
      traffic: 'medium',
      units: 12,
      lastTransmission: 'Unit 456 evacuation complete Zone A-7',
      priority: 'medium'
    },
    {
      id: 'COMM-003',
      name: 'EMS Dispatch',
      frequency: '155.340 MHz',
      status: 'active',
      traffic: 'low',
      units: 6,
      lastTransmission: 'Ambulance 23 transport to County General',
      priority: 'medium'
    },
    {
      id: 'COMM-004',
      name: 'Emergency Management',
      frequency: '453.212 MHz',
      status: 'active',
      traffic: 'medium',
      units: 8,
      lastTransmission: 'EOC to ICP-North shelter status update',
      priority: 'high'
    }
  ]);

  const [shelterStatus, setShelterStatus] = useState([
    {
      id: 'SHELTER-001',
      name: 'Riverside Community Center',
      status: 'open',
      capacity: 500,
      occupied: 247,
      available: 253,
      services: ['Food', 'Medical', 'Pet Care'],
      manager: 'Sarah Thompson',
      lastUpdate: new Date()
    },
    {
      id: 'SHELTER-002',
      name: 'Lincoln High School',
      status: 'open',
      capacity: 800,
      occupied: 456,
      available: 344,
      services: ['Food', 'Medical', 'Childcare'],
      manager: 'Michael Rodriguez',
      lastUpdate: new Date(Date.now() - 180000)
    },
    {
      id: 'SHELTER-003',
      name: 'St. Mary\'s Church',
      status: 'open',
      capacity: 300,
      occupied: 189,
      available: 111,
      services: ['Food', 'Medical'],
      manager: 'Pastor Williams',
      lastUpdate: new Date(Date.now() - 300000)
    },
    {
      id: 'SHELTER-004',
      name: 'Veterans Memorial Hall',
      status: 'standby',
      capacity: 400,
      occupied: 0,
      available: 400,
      services: ['Food', 'Medical'],
      manager: 'Janet Foster',
      lastUpdate: new Date(Date.now() - 600000)
    }
  ]);

  const [responseMetrics, setResponseMetrics] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      activeIncidents: 2,
      deployedUnits: 234,
      evacuatedPersons: 1156,
      shelterOccupancy: 847
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      activeIncidents: 3,
      deployedUnits: 241,
      evacuatedPersons: 1198,
      shelterOccupancy: 892
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      activeIncidents: 3,
      deployedUnits: 245,
      evacuatedPersons: 1223,
      shelterOccupancy: 903
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      activeIncidents: 3,
      deployedUnits: 247,
      evacuatedPersons: 1235,
      shelterOccupancy: 892
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      activeIncidents: 3,
      deployedUnits: 246,
      evacuatedPersons: 1242,
      shelterOccupancy: 889
    },
    {
      time: new Date().toLocaleTimeString(),
      activeIncidents: 3,
      deployedUnits: 247,
      evacuatedPersons: 1247,
      shelterOccupancy: 892
    }
  ]);

  const [eocAlerts, setEocAlerts] = useState([
    {
      id: 'ALERT-001',
      severity: 'critical',
      type: 'Evacuation Order',
      message: 'Mandatory evacuation Zone B due to advancing wildfire',
      timestamp: new Date(),
      status: 'active',
      agency: 'Fire Department',
      broadcast: true
    },
    {
      id: 'ALERT-002',
      severity: 'warning',
      type: 'Communication',
      message: 'Fire Command frequency experiencing intermittent issues',
      timestamp: new Date(Date.now() - 180000),
      status: 'monitoring',
      agency: 'Communications',
      broadcast: false
    },
    {
      id: 'ALERT-003',
      severity: 'info',
      type: 'Resource Update',
      message: 'Additional HAZMAT team en route from neighboring county',
      timestamp: new Date(Date.now() - 360000),
      status: 'resolved',
      agency: 'Mutual Aid',
      broadcast: false
    }
  ]);

  const [watchOfficers, setWatchOfficers] = useState([
    {
      position: 'EOC Manager',
      name: 'Director Patricia Kim',
      status: 'on-duty',
      shift: 'Day Watch',
      contact: 'Direct Line 1',
      experience: '20 years'
    },
    {
      position: 'Operations Chief',
      name: 'Chief Robert Taylor',
      status: 'on-duty',
      shift: 'Day Watch',
      contact: 'Ops Channel',
      experience: '15 years'
    },
    {
      position: 'Planning Chief',
      name: 'Analyst Jennifer Lee',
      status: 'on-duty',
      shift: 'Day Watch',
      contact: 'Planning Desk',
      experience: '12 years'
    },
    {
      position: 'Intelligence Officer',
      name: 'Detective Mark Wilson',
      status: 'on-call',
      shift: 'Day Watch',
      contact: 'Intel Line',
      experience: '18 years'
    }
  ]);

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update EOC status
      setEocStatus(prev => ({
        ...prev,
        deployedPersonnel: Math.max(200, Math.min(300, prev.deployedPersonnel + Math.floor((Math.random() - 0.5) * 10))),
        emergencyVehicles: Math.max(70, Math.min(120, prev.emergencyVehicles + Math.floor((Math.random() - 0.5) * 3))),
        evacuatedPersons: Math.max(1000, Math.min(1500, prev.evacuatedPersons + Math.floor((Math.random() - 0.3) * 20))),
        responseTime: Math.max(4, Math.min(12, prev.responseTime + (Math.random() - 0.5) * 0.5)),
        coordinationEfficiency: Math.max(85, Math.min(99, prev.coordinationEfficiency + (Math.random() - 0.5) * 1))
      }));

      // Update active incidents
      setActiveIncidents(prev => prev.map(incident => {
        if (incident.type === 'Wildfire' && incident.status === 'active') {
          return {
            ...incident,
            affectedArea: Math.max(2000, Math.min(5000, incident.affectedArea + Math.floor(Math.random() * 50))),
            assignedUnits: Math.max(8, Math.min(20, incident.assignedUnits + Math.floor((Math.random() - 0.5) * 2)))
          };
        }
        return incident;
      }));

      // Update emergency assets
      setEmergencyAssets(prev => prev.map(asset => {
        if (Math.random() > 0.8) {
          const statuses = ['deployed', 'en-route', 'standby', 'available'];
          const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
          return {
            ...asset,
            status: newStatus,
            eta: newStatus === 'deployed' ? 'On Scene' : `${Math.floor(Math.random() * 20) + 5} min`,
            lastUpdate: new Date()
          };
        }
        return asset;
      }));

      // Update communication channels
      setCommunicationChannels(prev => prev.map(channel => {
        const trafficLevels = ['low', 'medium', 'high'];
        return {
          ...channel,
          traffic: Math.random() > 0.7 ? trafficLevels[Math.floor(Math.random() * trafficLevels.length)] : channel.traffic,
          units: Math.max(3, Math.min(25, channel.units + Math.floor((Math.random() - 0.5) * 3)))
        };
      }));

      // Update response metrics
      const newMetrics = {
        time: new Date().toLocaleTimeString(),
        activeIncidents: eocStatus.activeIncidents,
        deployedUnits: eocStatus.deployedPersonnel,
        evacuatedPersons: eocStatus.evacuatedPersons,
        shelterOccupancy: shelterStatus.reduce((sum, shelter) => sum + shelter.occupied, 0)
      };
      
      setResponseMetrics(prev => [...prev.slice(1), newMetrics]);

      // Occasionally add new EOC alerts
      if (Math.random() > 0.96) {
        const alertTypes = ['Evacuation Order', 'Weather Alert', 'Resource Update', 'Communication'];
        const severities = ['info', 'warning', 'critical'];
        const agencies = ['Fire Department', 'Police Department', 'Emergency Management', 'Public Health'];
        
        const newAlert = {
          id: `ALERT-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time emergency operations alert',
          timestamp: new Date(),
          status: 'active',
          agency: agencies[Math.floor(Math.random() * agencies.length)],
          broadcast: Math.random() > 0.6
        };
        
        setEocAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [eocStatus.activeIncidents, eocStatus.deployedPersonnel, eocStatus.evacuatedPersons]);

  const getIncidentSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return '#EF4444';
      case 'medium': return '#F59E0B';
      case 'low': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const getAssetStatusColor = (status) => {
    switch (status) {
      case 'deployed': return '#EF4444';
      case 'en-route': return '#F59E0B';
      case 'standby': return '#3B82F6';
      case 'available': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'info': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const getShelterStatusColor = (status) => {
    switch (status) {
      case 'open': return '#10B981';
      case 'standby': return '#F59E0B';
      case 'closed': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getTrafficColor = (traffic) => {
    switch (traffic) {
      case 'high': return '#EF4444';
      case 'medium': return '#F59E0B';
      case 'low': return '#10B981';
      default: return '#6B7280';
    }
  };

  const incidentTypeDistribution = [
    { name: 'Wildfire', value: 40, color: '#EF4444' },
    { name: 'Earthquake', value: 25, color: '#F59E0B' },
    { name: 'Flooding', value: 20, color: '#3B82F6' },
    { name: 'Severe Weather', value: 10, color: '#8B5CF6' },
    { name: 'HAZMAT', value: 5, color: '#10B981' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Siren className="w-8 h-8 text-red-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">EMERGENCY OPERATIONS CENTER</h1>
            <p className="text-gray-400">Real-time disaster management, emergency response coordination, and all-hazards incident command</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">{eocStatus.activeIncidents}</div>
            <div className="text-xs text-gray-400">ACTIVE INCIDENTS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{eocStatus.deployedPersonnel}</div>
            <div className="text-xs text-gray-400">DEPLOYED PERSONNEL</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{eocStatus.activationLevel}</div>
            <div className="text-xs text-gray-400">ACTIVATION LEVEL</div>
          </div>
        </div>
      </div>

      {/* EOC Status KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">EVACUATED</span>
          </div>
          <div className="text-xl font-bold text-white">{eocStatus.evacuatedPersons.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Persons</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">VEHICLES</span>
          </div>
          <div className="text-xl font-bold text-white">{eocStatus.emergencyVehicles}</div>
          <div className="text-xs text-gray-400">Emergency</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">SHELTERS</span>
          </div>
          <div className="text-xl font-bold text-white">{eocStatus.sheltersOpen}</div>
          <div className="text-xs text-gray-400">Open</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">RESPONSE TIME</span>
          </div>
          <div className="text-xl font-bold text-white">{eocStatus.responseTime.toFixed(1)}</div>
          <div className="text-xs text-gray-400">Minutes</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">EFFICIENCY</span>
          </div>
          <div className="text-xl font-bold text-white">{eocStatus.coordinationEfficiency.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Coordination</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Radio className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">COMM STATUS</span>
          </div>
          <div className="text-xl font-bold text-white">OPERATIONAL</div>
          <div className="text-xs text-gray-400">All Channels</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Active Incidents */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
            ACTIVE INCIDENTS
          </h3>
          <div className="space-y-3">
            {activeIncidents.map(incident => (
              <div key={incident.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getIncidentSeverityColor(incident.severity) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{incident.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getIncidentSeverityColor(incident.severity)}20`, 
                      color: getIncidentSeverityColor(incident.severity) 
                    }}>
                      {incident.severity.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">{incident.type}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location</span>
                    <span className="text-blue-400">{incident.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Units</span>
                    <span className="text-green-400">{incident.assignedUnits}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white">{Math.floor((Date.now() - incident.startTime) / 60000)}m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Area</span>
                    <span className="text-purple-400">
                      {incident.affectedArea > 0 ? 
                        (incident.type === 'Wildfire' ? `${incident.affectedArea} ac` : `${incident.affectedArea} sq mi`) : 'N/A'}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">{incident.icp}</span>
                  <span className="text-gray-500">{incident.commander}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Assets */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-blue-400" />
            EMERGENCY ASSETS
          </h3>
          <div className="space-y-3">
            {emergencyAssets.map(asset => (
              <div key={asset.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getAssetStatusColor(asset.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{asset.unit}</span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ 
                    backgroundColor: `${getAssetStatusColor(asset.status)}20`, 
                    color: getAssetStatusColor(asset.status) 
                  }}>
                    {asset.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">{asset.type}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Personnel</span>
                    <span className="text-white">{asset.personnel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">ETA</span>
                    <span className="text-blue-400">{asset.eta}</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">
                  Location: <span className="text-yellow-400">{asset.location}</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {asset.capabilities.map((cap, index) => (
                    <span key={index} className="text-xs px-1 py-0.5 bg-gray-700 rounded text-gray-300">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communication Channels */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Radio className="w-5 h-5 mr-2 text-green-400" />
            COMMUNICATION CHANNELS
          </h3>
          <div className="space-y-3">
            {communicationChannels.map(channel => (
              <div key={channel.id} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{channel.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getTrafficColor(channel.traffic)}20`, 
                      color: getTrafficColor(channel.traffic) 
                    }}>
                      {channel.traffic.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">{channel.units} units</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  Frequency: <span className="text-blue-400">{channel.frequency}</span>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">
                  Last: <span className="text-white">{channel.lastTransmission}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-purple-400">Priority: {channel.priority}</span>
                  <span className={`w-2 h-2 rounded-full ${
                    channel.status === 'active' ? 'bg-green-400' : 'bg-red-400'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Watch Officers */}
          <div className="mt-4 pt-3 border-t border-gray-700">
            <div className="text-sm text-white font-semibold mb-2">Watch Officers</div>
            <div className="space-y-1 text-xs">
              {watchOfficers.slice(0, 3).map((officer, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-400">{officer.position}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white">{officer.name}</span>
                    <span 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: officer.status === 'on-duty' ? '#10B981' : '#F59E0B' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Response Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Response Metrics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME RESPONSE METRICS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={responseMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="deployedUnits" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="Deployed Units"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="evacuatedPersons" 
                stroke="#EF4444" 
                strokeWidth={2}
                name="Evacuated Persons"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="shelterOccupancy" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Shelter Occupancy"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Incident Analysis & Shelter Management */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">INCIDENT TYPE ANALYSIS & SHELTER STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={incidentTypeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {incidentTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value) => [`${value}%`, 'Incident Type']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-4">
              {incidentTypeDistribution.map((incident, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: incident.color }}
                    />
                    <span className="text-gray-400 text-sm">{incident.name}</span>
                  </div>
                  <span className="text-white font-semibold">{incident.value}%</span>
                </div>
              ))}
              
              {/* Shelter Summary */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">Active Shelters</div>
                <div className="space-y-1 text-xs">
                  {shelterStatus.filter(s => s.status === 'open').slice(0, 3).map((shelter, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-400">{shelter.name.split(' ')[0]} {shelter.name.split(' ')[1]}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white">{shelter.occupied}/{shelter.capacity}</span>
                        <span 
                          className="w-2 h-2 rounded-full" 
                          style={{ backgroundColor: getShelterStatusColor(shelter.status) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* EOC Command Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Emergency Operations Command</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-xs transition-colors">
                  <Siren className="w-3 h-3 inline mr-1" />
                  Emergency Alert
                </button>
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Phone className="w-3 h-3 inline mr-1" />
                  ICP Comms
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Eye className="w-3 h-3 inline mr-1" />
                  Situation Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyOperationsCenter;