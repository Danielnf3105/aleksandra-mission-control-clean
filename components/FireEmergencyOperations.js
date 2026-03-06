// FireEmergencyOperations.js - Fire Emergency Operations Center & Incident Command Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FireEmergencyOperations = () => {
  const [operationsStatus, setOperationsStatus] = useState({
    operationalReadiness: 'READY',
    activeIncidents: 7,
    availableUnits: 42,
    totalPersonnel: 156,
    responseTime: 4.2,
    alertLevel: 'NORMAL'
  });

  const [activeIncidents, setActiveIncidents] = useState([
    {
      id: 'INC-2026-001247',
      type: 'STRUCTURE_FIRE',
      priority: 'HIGH',
      status: 'ACTIVE',
      address: '1247 Oak Street',
      district: 'District 3',
      dispatchTime: Date.now() - 25 * 60 * 1000,
      assignedUnits: 8,
      personnel: 24,
      stage: 'INTERIOR_ATTACK'
    },
    {
      id: 'INC-2026-001248',
      type: 'MEDICAL_EMERGENCY',
      priority: 'HIGH',
      status: 'ENROUTE',
      address: '789 Pine Avenue',
      district: 'District 1',
      dispatchTime: Date.now() - 8 * 60 * 1000,
      assignedUnits: 3,
      personnel: 6,
      stage: 'RESPONSE'
    }
  ]);

  const [availableUnits, setAvailableUnits] = useState([
    {
      id: 'ENG-01',
      callsign: 'Engine 1',
      type: 'ENGINE',
      status: 'AVAILABLE',
      location: 'Station 1',
      staffing: 4
    },
    {
      id: 'LAD-02',
      callsign: 'Ladder 2',
      type: 'LADDER',
      status: 'AVAILABLE',
      location: 'Station 2',
      staffing: 4
    }
  ]);

  const [responseTimeHistory, setResponseTimeHistory] = useState([]);

  const generateResponseTimeHistory = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const hour = new Date();
      hour.setHours(hour.getHours() - i);
      
      data.push({
        time: hour.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        response_time: 3.5 + Math.random() * 2.5,
        call_volume: Math.floor(1 + Math.random() * 4),
        target: 5.0
      });
    }
    return data;
  };

  useEffect(() => {
    setResponseTimeHistory(generateResponseTimeHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOperationsStatus(prev => ({
        ...prev,
        responseTime: Math.max(3.0, Math.min(6.0, prev.responseTime + (Math.random() - 0.5) * 0.3))
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'AVAILABLE':
      case 'READY':
      case 'OPERATIONAL':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'ACTIVE':
      case 'ENROUTE':
      case 'ON_SCENE':
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'HIGH':
      case 'CRITICAL':
        return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MEDIUM':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatNumber = (num, decimals = 1) => {
    return num.toFixed(decimals);
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return `${Math.floor(diff / 1000)}s ago`;
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🚒 FIRE EMERGENCY OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-mono border border-red-500/30">
            {operationsStatus.activeIncidents} Active Incidents
          </div>
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {operationsStatus.availableUnits} Available Units
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatNumber(operationsStatus.responseTime)}min Response
          </div>
        </div>
      </div>

      {/* Operations Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg p-4 border border-red-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-red-200">ACTIVE INCIDENTS</div>
              <div className="text-2xl font-bold text-red-100">
                {operationsStatus.activeIncidents}
              </div>
              <div className="text-xs text-red-300">
                Current Emergency Calls
              </div>
            </div>
            <div className="text-3xl opacity-60">🚨</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">AVAILABLE UNITS</div>
              <div className="text-2xl font-bold text-green-100">
                {operationsStatus.availableUnits}
              </div>
              <div className="text-xs text-green-300">
                Ready for Dispatch
              </div>
            </div>
            <div className="text-3xl opacity-60">🚒</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">RESPONSE TIME</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatNumber(operationsStatus.responseTime)}
              </div>
              <div className="text-xs text-blue-300">
                Minutes Average
              </div>
            </div>
            <div className="text-3xl opacity-60">⏱️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">PERSONNEL</div>
              <div className="text-2xl font-bold text-purple-100">
                {operationsStatus.totalPersonnel}
              </div>
              <div className="text-xs text-purple-300">
                Total On Duty
              </div>
            </div>
            <div className="text-3xl opacity-60">👨‍🚒</div>
          </div>
        </div>
      </div>

      {/* Active Incidents */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🔥 ACTIVE INCIDENTS & INCIDENT COMMAND STATUS
        </h3>
        <div className="space-y-4">
          {activeIncidents.map((incident) => (
            <div key={incident.id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-mono">
                    {incident.id.split('-')[2]}
                  </div>
                  <div className="text-sm font-bold text-white">{incident.type.replace(/_/g, ' ')}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(incident.status)}`}>
                    {incident.status}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-mono ${getStatusColor(incident.priority)}`}>
                    {incident.priority}
                  </span>
                </div>
              </div>

              <div className="text-sm mb-3">
                <div className="text-white font-bold">{incident.address}</div>
                <div className="text-cyan-400 text-xs">{incident.district}</div>
              </div>

              <div className="text-xs mb-3">
                <span className="text-gray-400">Dispatch: </span>
                <span className="text-blue-400">{formatTime(incident.dispatchTime)}</span>
                <span className="text-gray-400"> | Resources: </span>
                <span className="text-green-400">{incident.assignedUnits} units</span>
                <span className="text-gray-400"> | </span>
                <span className="text-purple-400">{incident.personnel} personnel</span>
                <span className="text-gray-400"> | Stage: </span>
                <span className="text-orange-400">{incident.stage.replace(/_/g, ' ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Units and Response Times */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Available Units */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚛 AVAILABLE UNITS & APPARATUS STATUS
          </h3>
          <div className="space-y-3">
            {availableUnits.map((unit) => (
              <div key={unit.id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(unit.status)}`}>
                      {unit.status}
                    </span>
                    <span className="text-sm font-bold text-white">{unit.callsign}</span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {unit.type.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="text-xs text-cyan-400">{unit.location}</div>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">Staffing: </span>
                  <span className="text-green-400">{unit.staffing}</span>
                  <span className="text-gray-400"> personnel</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 RESPONSE TIME PERFORMANCE (24 HOURS)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={responseTimeHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={10}/>
              <YAxis stroke="#9CA3AF" fontSize={12}/>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="response_time" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Response Time (min)"
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#EF4444" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Target (5 min)"
              />
              <Line 
                type="monotone" 
                dataKey="call_volume" 
                stroke="#10B981" 
                strokeWidth={1}
                name="Call Volume"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 FIRE DEPARTMENT KPIs & OPERATIONAL READINESS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Response Time</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(operationsStatus.responseTime)}
            </div>
            <div className="text-green-400 text-xs">minutes average</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Unit Availability</div>
            <div className="text-white font-bold text-lg">
              {formatNumber((operationsStatus.availableUnits / 50) * 100)}%
            </div>
            <div className="text-blue-400 text-xs">apparatus ready</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Active Incidents</div>
            <div className="text-white font-bold text-lg">
              {operationsStatus.activeIncidents}
            </div>
            <div className="text-purple-400 text-xs">emergency calls</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Personnel On Duty</div>
            <div className="text-white font-bold text-lg">
              {operationsStatus.totalPersonnel}
            </div>
            <div className="text-orange-400 text-xs">firefighters/EMS</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Alert Level</div>
            <div className="text-white font-bold text-lg">
              {operationsStatus.alertLevel}
            </div>
            <div className="text-cyan-400 text-xs">operational status</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Readiness</div>
            <div className="text-white font-bold text-lg">
              {operationsStatus.operationalReadiness}
            </div>
            <div className="text-yellow-400 text-xs">system status</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireEmergencyOperations;