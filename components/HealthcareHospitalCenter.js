// Healthcare & Hospital Management Center - 2026 Medical Intelligence
// Based on Philips, Vios Medical, VitalConnect patient monitoring, modern EMR/EHR systems
import { useState, useEffect } from 'react';
import { 
  Heart, Activity, Thermometer, Users, Monitor, AlertTriangle, CheckCircle,
  TrendingUp, TrendingDown, BarChart3, RefreshCw, Settings, Clock,
  MapPin, Info, Target, Eye, Search, Play, Pause, StopCircle,
  ArrowRight, ArrowLeft, Plus, Minus, Zap, Battery, Shield,
  Database, HardDrive, Cpu, MemoryStick, Layers, FileCode,
  Building2, Truck, Stethoscope, Pill, Syringe, Clipboard,
  PhoneCall, Mail, UserCheck, Calendar, Timer, DollarSign,
  Home, Car, Plane, Ship, Network, Server, Globe,
  Wifi, Signal, Radio, Tower, Radar, Navigation, Route,
  Droplets, Wind, Sun, Moon, Star, Circle, Square, Triangle
} from 'lucide-react';

export default function HealthcareHospitalCenter() {
  const [healthcareData, setHealthcareData] = useState({
    currentTime: new Date().toISOString(),
    hospitalOccupancy: 87.4, // %
    totalPatients: 1247,
    criticalPatients: 23,
    staffOnDuty: 342,
    emergencyQueue: 12,
    surgeryQueue: 8,
    avgResponseTime: 4.2, // minutes
    patientSatisfaction: 94.6, // %
    departments: [
      {
        name: 'Emergency Department',
        location: 'Wing A, Level 1',
        capacity: 45,
        currentPatients: 38,
        utilization: 84.4,
        avgWaitTime: 18, // minutes
        criticalCases: 4,
        staffCount: 23,
        equipmentStatus: 'OPTIMAL',
        lastUpdate: '2m ago'
      },
      {
        name: 'Intensive Care Unit',
        location: 'Wing B, Level 3',
        capacity: 32,
        currentPatients: 29,
        utilization: 90.6,
        avgWaitTime: 0,
        criticalCases: 12,
        staffCount: 18,
        equipmentStatus: 'OPTIMAL',
        lastUpdate: '1m ago'
      },
      {
        name: 'Surgical Unit',
        location: 'Wing C, Level 2',
        capacity: 12,
        currentPatients: 8,
        utilization: 66.7,
        avgWaitTime: 45,
        criticalCases: 3,
        staffCount: 15,
        equipmentStatus: 'MAINTENANCE',
        lastUpdate: '3m ago'
      },
      {
        name: 'Cardiology',
        location: 'Wing A, Level 4',
        capacity: 28,
        currentPatients: 24,
        utilization: 85.7,
        avgWaitTime: 12,
        criticalCases: 2,
        staffCount: 12,
        equipmentStatus: 'OPTIMAL',
        lastUpdate: '1m ago'
      }
    ],
    patientMonitoring: [
      {
        patientId: 'ICU-001',
        name: 'John D.',
        age: 67,
        condition: 'Cardiac Arrest Recovery',
        location: 'ICU Bed 12',
        vitals: {
          heartRate: 78,
          bloodPressure: '125/82',
          temperature: 98.6,
          oxygenSat: 96,
          respirationRate: 16
        },
        alerts: ['Low O2 Sat', 'Irregular HR'],
        status: 'STABLE',
        assignedStaff: 'Dr. Smith',
        lastUpdate: '30s ago',
        deviceConnected: true
      },
      {
        patientId: 'ICU-007',
        name: 'Maria S.',
        age: 45,
        condition: 'Post-Surgical Monitoring',
        location: 'ICU Bed 7',
        vitals: {
          heartRate: 85,
          bloodPressure: '132/78',
          temperature: 99.1,
          oxygenSat: 98,
          respirationRate: 18
        },
        alerts: ['Elevated Temp'],
        status: 'IMPROVING',
        assignedStaff: 'Dr. Johnson',
        lastUpdate: '45s ago',
        deviceConnected: true
      },
      {
        patientId: 'ED-023',
        name: 'Robert K.',
        age: 72,
        condition: 'Chest Pain Evaluation',
        location: 'ED Bay 3',
        vitals: {
          heartRate: 92,
          bloodPressure: '145/95',
          temperature: 98.2,
          oxygenSat: 94,
          respirationRate: 20
        },
        alerts: ['High BP', 'Tachycardia'],
        status: 'UNDER_OBSERVATION',
        assignedStaff: 'Dr. Wilson',
        lastUpdate: '1m ago',
        deviceConnected: true
      },
      {
        patientId: 'CARD-015',
        name: 'Linda M.',
        age: 58,
        condition: 'Arrhythmia Monitoring',
        location: 'Cardiology Room 5',
        vitals: {
          heartRate: 65,
          bloodPressure: '118/76',
          temperature: 98.4,
          oxygenSat: 97,
          respirationRate: 14
        },
        alerts: [],
        status: 'STABLE',
        assignedStaff: 'Dr. Brown',
        lastUpdate: '2m ago',
        deviceConnected: true
      }
    ],
    medicalEquipment: [
      {
        name: 'MRI Scanner #1',
        location: 'Radiology Wing',
        type: 'IMAGING',
        status: 'OPERATIONAL',
        utilizationRate: 89.3, // %
        nextMaintenance: '2026-03-25',
        currentPatient: 'Scheduled - Brain Scan',
        operatorStaff: 'Tech. Anderson',
        lastCalibration: '2026-03-18'
      },
      {
        name: 'CT Scanner #2',
        location: 'Emergency Radiology',
        type: 'IMAGING',
        status: 'OPERATIONAL',
        utilizationRate: 76.8,
        nextMaintenance: '2026-03-28',
        currentPatient: 'Available',
        operatorStaff: 'Tech. Davis',
        lastCalibration: '2026-03-19'
      },
      {
        name: 'Ventilator Bank A',
        location: 'ICU Wing B',
        type: 'LIFE_SUPPORT',
        status: 'CRITICAL_USE',
        utilizationRate: 94.1,
        nextMaintenance: '2026-03-22',
        currentPatient: '16 of 17 units active',
        operatorStaff: 'Respiratory Team',
        lastCalibration: '2026-03-20'
      },
      {
        name: 'Surgical Robot Da Vinci',
        location: 'OR Suite 3',
        type: 'SURGICAL',
        status: 'IN_USE',
        utilizationRate: 67.2,
        nextMaintenance: '2026-03-30',
        currentPatient: 'Laparoscopic Surgery',
        operatorStaff: 'Dr. Martinez',
        lastCalibration: '2026-03-17'
      }
    ],
    staffMetrics: [
      {
        department: 'Emergency Medicine',
        totalStaff: 45,
        onDutyNow: 23,
        shiftCoverage: 85.2, // %
        avgWorkload: 'HIGH',
        overtime: 12.3, // hours this week
        satisfaction: 78.4, // %
        certifications: 'Up to Date'
      },
      {
        department: 'Critical Care',
        totalStaff: 38,
        onDutyNow: 18,
        shiftCoverage: 94.7,
        avgWorkload: 'CRITICAL',
        overtime: 8.7,
        satisfaction: 82.1,
        certifications: 'Up to Date'
      },
      {
        department: 'Surgery',
        totalStaff: 32,
        onDutyNow: 15,
        shiftCoverage: 78.1,
        avgWorkload: 'MODERATE',
        overtime: 15.6,
        overtime: 6.2,
        satisfaction: 89.3,
        certifications: 'Renewal Due'
      },
      {
        department: 'Cardiology',
        totalStaff: 24,
        onDutyNow: 12,
        shiftCoverage: 91.7,
        avgWorkload: 'MODERATE',
        overtime: 4.1,
        satisfaction: 91.8,
        certifications: 'Up to Date'
      }
    ],
    medicalAlerts: [
      {
        id: 'alert-med001',
        timestamp: '15:30',
        priority: 'HIGH',
        type: 'PATIENT_CRITICAL',
        location: 'ICU Bed 12',
        message: 'Patient oxygen saturation dropping',
        patient: 'John D. (ICU-001)',
        currentValue: '89%',
        threshold: '95%',
        duration: '3 minutes',
        action: 'Respiratory therapist dispatched',
        assignedStaff: 'Dr. Smith',
        status: 'RESPONDING'
      },
      {
        id: 'alert-med002',
        timestamp: '15:28',
        priority: 'MEDIUM',
        type: 'EQUIPMENT',
        location: 'OR Suite 3',
        message: 'Surgical robot requires calibration check',
        equipment: 'Da Vinci Surgical System',
        nextMaintenance: '2026-03-30',
        currentProcedure: 'Laparoscopic Surgery',
        action: 'Post-surgery calibration scheduled',
        assignedStaff: 'Tech. Martinez',
        status: 'SCHEDULED'
      },
      {
        id: 'alert-med003',
        timestamp: '15:25',
        priority: 'LOW',
        type: 'STAFFING',
        location: 'Emergency Department',
        message: 'High patient volume, consider additional staff',
        currentStaff: 23,
        recommendedStaff: 27,
        patientCount: 38,
        avgWaitTime: '18 minutes',
        action: 'On-call staff contacted',
        assignedStaff: 'Charge Nurse Williams',
        status: 'MITIGATING'
      }
    ],
    hospitalResources: [
      {
        resource: 'Available Beds',
        total: 450,
        occupied: 393,
        available: 57,
        utilization: 87.3,
        trend: 'stable',
        emergencyReserve: 12
      },
      {
        resource: 'Blood Supply',
        total: '450 units',
        critical: 'O- (12 units)',
        adequate: 'A+, B+, AB+',
        surplus: 'O+',
        expirationAlert: '8 units expire in 2 days',
        trend: 'declining'
      },
      {
        resource: 'Pharmaceutical Inventory',
        total: '2,847 medications',
        lowStock: '23 medications',
        criticalShortage: '3 medications',
        ordersPending: '156 orders',
        avgReorderTime: '2.3 days',
        trend: 'improving'
      },
      {
        resource: 'Ambulance Fleet',
        total: 12,
        available: 7,
        enRoute: 3,
        maintenance: 2,
        avgResponseTime: '4.2 minutes',
        trend: 'improving'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setHealthcareData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        hospitalOccupancy: Math.max(75, Math.min(95, (prev?.hospitalOccupancy || 87.4) + (Math.random() - 0.5) * 2)),
        totalPatients: Math.max(1000, Math.min(1500, (prev?.totalPatients || 1247) + Math.floor((Math.random() - 0.5) * 20))),
        criticalPatients: Math.max(15, Math.min(35, (prev?.criticalPatients || 23) + Math.floor((Math.random() - 0.5) * 3))),
        avgResponseTime: Math.max(3, Math.min(8, (prev?.avgResponseTime || 4.2) + (Math.random() - 0.5) * 0.5)),
        patientMonitoring: prev.patientMonitoring?.map(patient => ({
          ...patient,
          vitals: {
            ...patient.vitals,
            heartRate: Math.max(50, Math.min(150, (patient?.vitals?.heartRate || 80) + Math.floor((Math.random() - 0.5) * 6))),
            temperature: Math.max(96, Math.min(102, (patient?.vitals?.temperature || 98.6) + (Math.random() - 0.5) * 0.8)),
            oxygenSat: Math.max(88, Math.min(100, (patient?.vitals?.oxygenSat || 96) + Math.floor((Math.random() - 0.5) * 4))),
            respirationRate: Math.max(10, Math.min(30, (patient?.vitals?.respirationRate || 16) + Math.floor((Math.random() - 0.5) * 2)))
          }
        })) || prev.patientMonitoring,
        departments: prev.departments?.map(dept => ({
          ...dept,
          currentPatients: Math.max(0, Math.min(dept?.capacity || 50, (dept?.currentPatients || 20) + Math.floor((Math.random() - 0.5) * 3))),
          utilization: Math.max(50, Math.min(100, (dept?.utilization || 80) + (Math.random() - 0.5) * 3))
        })) || prev.departments
      }));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPTIMAL': case 'OPERATIONAL': case 'STABLE': case 'IMPROVING': return 'text-green-400';
      case 'UNDER_OBSERVATION': case 'IN_USE': case 'RESPONDING': case 'MITIGATING': return 'text-blue-400';
      case 'MAINTENANCE': case 'SCHEDULED': case 'MEDIUM': return 'text-yellow-400';
      case 'CRITICAL_USE': case 'CRITICAL': case 'HIGH': case 'PATIENT_CRITICAL': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'OPTIMAL': case 'OPERATIONAL': case 'STABLE': case 'IMPROVING': return 'bg-green-400/20';
      case 'UNDER_OBSERVATION': case 'IN_USE': case 'RESPONDING': case 'MITIGATING': return 'bg-blue-400/20';
      case 'MAINTENANCE': case 'SCHEDULED': case 'MEDIUM': return 'bg-yellow-400/20';
      case 'CRITICAL_USE': case 'CRITICAL': case 'HIGH': case 'PATIENT_CRITICAL': return 'bg-red-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'declining': return <TrendingDown className="w-4 h-4 text-red-400" />;
      case 'stable': return <Activity className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getVitalStatusColor = (vital, value, type) => {
    switch (type) {
      case 'heartRate':
        if (value >= 60 && value <= 100) return 'text-green-400';
        if ((value >= 50 && value < 60) || (value > 100 && value <= 120)) return 'text-yellow-400';
        return 'text-red-400';
      case 'oxygenSat':
        if (value >= 95) return 'text-green-400';
        if (value >= 90) return 'text-yellow-400';
        return 'text-red-400';
      case 'temperature':
        if (value >= 97.0 && value <= 99.5) return 'text-green-400';
        if ((value >= 96.0 && value < 97.0) || (value > 99.5 && value <= 101.0)) return 'text-yellow-400';
        return 'text-red-400';
      default:
        return 'text-white';
    }
  };

  const getWorkloadColor = (workload) => {
    switch (workload) {
      case 'LOW': return 'text-green-400';
      case 'MODERATE': return 'text-blue-400';
      case 'HIGH': return 'text-yellow-400';
      case 'CRITICAL': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Healthcare Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Heart className="w-8 h-8 text-red-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Healthcare & Hospital Management Center</h2>
              <div className="text-sm text-gray-400">Philips • Vios Medical • VitalConnect • Real-Time Patient Intelligence</div>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-semibold">MONITORING ACTIVE</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Hospital Occupancy</div>
            <div className={`text-2xl font-mono font-bold ${
              (healthcareData.hospitalOccupancy || 87.4) < 85 ? 'text-green-400' : 
              (healthcareData.hospitalOccupancy || 87.4) < 90 ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {(healthcareData.hospitalOccupancy || 87.4).toFixed(1)}%
            </div>
            <div className="text-xs text-emerald-400">
              {healthcareData.totalPatients || 1247} patients • {healthcareData.criticalPatients || 23} critical
            </div>
          </div>
        </div>
        
        {/* Global Hospital Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Staff On Duty</span>
              <Users className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {healthcareData.staffOnDuty || 342}<span className="text-sm text-gray-400 ml-1">active</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-blue-400 transition-all duration-300"
                style={{ width: `${Math.min(100, ((healthcareData.staffOnDuty || 342) / 400) * 100)}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">across all departments</div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Emergency Queue</span>
              <Truck className="w-4 h-4 text-red-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {healthcareData.emergencyQueue || 12}<span className="text-sm text-gray-400 ml-1">patients</span>
            </div>
            <div className="text-xs text-red-400 mt-1">
              {(healthcareData.avgResponseTime || 4.2).toFixed(1)} min avg response
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Patient Satisfaction</span>
              <Heart className="w-4 h-4 text-pink-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {(healthcareData.patientSatisfaction || 94.6).toFixed(1)}<span className="text-sm text-gray-400 ml-1">%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-pink-400 transition-all duration-300"
                style={{ width: `${Math.min(100, healthcareData.patientSatisfaction || 94.6)}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">quality rating</div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Surgery Queue</span>
              <Clipboard className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {healthcareData.surgeryQueue || 8}<span className="text-sm text-gray-400 ml-1">scheduled</span>
            </div>
            <div className="text-xs text-purple-400 mt-1">
              next available: 2:30 PM
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient Monitoring */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Real-Time Patient Monitoring</h3>
            <div className="px-2 py-1 bg-green-400/20 text-green-400 text-xs font-semibold rounded">
              LIVE TELEMETRY
            </div>
          </div>
          
          <div className="space-y-4">
            {healthcareData.patientMonitoring?.map((patient, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Monitor className="w-5 h-5 text-blue-400" />
                    <div>
                      <h4 className="text-white font-medium">{patient?.name || 'Unknown Patient'} ({patient?.patientId || 'ID-000'})</h4>
                      <div className="text-xs text-gray-400">{patient?.condition || 'Unknown Condition'} • {patient?.location || 'Unknown Location'}</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(patient?.status)} ${getStatusBg(patient?.status)}`}>
                      {patient?.status?.replace('_', ' ') || 'UNKNOWN'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-300">Age {patient?.age || 0}</div>
                    <div className="text-xs text-gray-400">{patient?.assignedStaff || 'Unassigned'}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-5 gap-4 mb-3">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Heart className="w-4 h-4 text-red-400 mr-1" />
                      <span className="text-xs text-gray-400">HR</span>
                    </div>
                    <div className={`text-lg font-mono ${getVitalStatusColor(null, patient?.vitals?.heartRate, 'heartRate')}`}>
                      {patient?.vitals?.heartRate || 0}
                    </div>
                    <div className="text-xs text-gray-400">bpm</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Activity className="w-4 h-4 text-blue-400 mr-1" />
                      <span className="text-xs text-gray-400">BP</span>
                    </div>
                    <div className="text-sm font-mono text-white">
                      {patient?.vitals?.bloodPressure || '0/0'}
                    </div>
                    <div className="text-xs text-gray-400">mmHg</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Thermometer className="w-4 h-4 text-orange-400 mr-1" />
                      <span className="text-xs text-gray-400">Temp</span>
                    </div>
                    <div className={`text-sm font-mono ${getVitalStatusColor(null, patient?.vitals?.temperature, 'temperature')}`}>
                      {(patient?.vitals?.temperature || 0).toFixed(1)}°F
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Circle className="w-4 h-4 text-cyan-400 mr-1" />
                      <span className="text-xs text-gray-400">SpO₂</span>
                    </div>
                    <div className={`text-lg font-mono ${getVitalStatusColor(null, patient?.vitals?.oxygenSat, 'oxygenSat')}`}>
                      {patient?.vitals?.oxygenSat || 0}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Wind className="w-4 h-4 text-purple-400 mr-1" />
                      <span className="text-xs text-gray-400">RR</span>
                    </div>
                    <div className="text-lg font-mono text-white">
                      {patient?.vitals?.respirationRate || 0}
                    </div>
                    <div className="text-xs text-gray-400">/min</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${patient?.deviceConnected ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
                    <span className="text-xs text-gray-400">Device Connected • {patient?.lastUpdate || 'No update'}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {patient?.alerts?.map((alert, alertIndex) => (
                      <span key={alertIndex} className="px-2 py-1 bg-red-400/20 text-red-400 text-xs rounded">
                        {alert}
                      </span>
                    )) || null}
                  </div>
                </div>
              </div>
            )) || <div className="text-gray-400">No patient monitoring data available</div>}
          </div>
        </div>

        {/* Department Status */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Building2 className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Department Status</h3>
          </div>
          
          <div className="space-y-3">
            {healthcareData.departments?.map((dept, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{dept?.name || 'Unknown Department'}</span>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(dept?.equipmentStatus)} ${getStatusBg(dept?.equipmentStatus)}`}>
                    {dept?.equipmentStatus || 'UNKNOWN'}
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{dept?.location || 'Unknown Location'}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Occupancy:</span>
                    <div className="text-white font-mono">{dept?.currentPatients || 0}/{dept?.capacity || 0}</div>
                    <div className="text-blue-400">{(dept?.utilization || 0).toFixed(1)}%</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Staff:</span>
                    <div className="text-green-400 font-mono">{dept?.staffCount || 0}</div>
                    <div className="text-gray-400">on duty</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Critical:</span>
                    <div className="text-red-400 font-mono">{dept?.criticalCases || 0}</div>
                    <div className="text-gray-400">cases</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Wait Time:</span>
                    <div className="text-purple-400 font-mono">{dept?.avgWaitTime || 0}m</div>
                    <div className="text-gray-400">average</div>
                  </div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2 mb-1">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      (dept?.utilization || 0) < 70 ? 'bg-green-400' : 
                      (dept?.utilization || 0) < 85 ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                    style={{ width: `${Math.min(100, dept?.utilization || 0)}%` }}
                  />
                </div>

                <div className="text-xs text-gray-400">
                  Updated: {dept?.lastUpdate || 'No update'}
                </div>
              </div>
            )) || <div className="text-gray-400">No department data available</div>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Medical Equipment */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Monitor className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Medical Equipment Status</h3>
          </div>
          
          <div className="space-y-3">
            {healthcareData.medicalEquipment?.map((equipment, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-purple-400" />
                    <span className="text-white font-medium text-sm">{equipment?.name || 'Unknown Equipment'}</span>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(equipment?.status)} ${getStatusBg(equipment?.status)}`}>
                    {equipment?.status?.replace('_', ' ') || 'UNKNOWN'}
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{equipment?.location || 'Unknown Location'} • {equipment?.type?.replace('_', ' ') || 'Unknown Type'}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Utilization:</span>
                    <span className="text-blue-400 ml-1">{(equipment?.utilizationRate || 0).toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Operator:</span>
                    <span className="text-green-400 ml-1">{equipment?.operatorStaff || 'Unassigned'}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Next Maint.:</span>
                    <span className="text-yellow-400 ml-1">{equipment?.nextMaintenance || 'TBD'}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Current:</span>
                    <span className="text-cyan-400 ml-1">{equipment?.currentPatient || 'Available'}</span>
                  </div>
                </div>
                
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      equipment?.status === 'OPERATIONAL' ? 'bg-green-400' :
                      equipment?.status === 'IN_USE' ? 'bg-blue-400' :
                      equipment?.status === 'CRITICAL_USE' ? 'bg-red-400' : 'bg-yellow-400'
                    }`}
                    style={{ width: `${Math.min(100, equipment?.utilizationRate || 0)}%` }}
                  />
                </div>
              </div>
            )) || <div className="text-gray-400">No equipment data available</div>}
          </div>
        </div>

        {/* Medical Alerts & Resources */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Medical Alerts & Resources</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            {healthcareData.medicalAlerts?.slice(0, 3).map((alert, index) => (
              <div key={index} className={`border rounded p-3 transition-all ${
                alert?.priority === 'HIGH' ? 'border-red-400/50 bg-red-400/10' :
                alert?.priority === 'MEDIUM' ? 'border-yellow-400/50 bg-yellow-400/10' :
                'border-blue-400/50 bg-blue-400/10'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-gray-400 font-mono">{alert?.timestamp || 'No Time'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(alert?.priority)} ${getStatusBg(alert?.priority)}`}>
                      {alert?.priority || 'UNKNOWN'}
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(alert?.status)} ${getStatusBg(alert?.status)}`}>
                      {alert?.status?.replace('_', ' ') || 'UNKNOWN'}
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 mb-1">{alert?.message || 'No message'}</div>
                <div className="text-xs text-blue-400 mb-1"><strong>Location:</strong> {alert?.location || 'Unknown'}</div>
                <div className="text-xs text-green-400"><strong>Action:</strong> {alert?.action || 'No action'}</div>
              </div>
            )) || <div className="text-gray-400">No alerts available</div>}
          </div>

          {/* Hospital Resources Summary */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">Hospital Resources Status</div>
            <div className="space-y-2">
              {healthcareData.hospitalResources?.map((resource, index) => (
                <div key={index} className="flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-3 h-3 text-blue-400" />
                    <span className="text-gray-300">{resource?.resource || 'Unknown Resource'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {resource?.utilization ? (
                      <span className={`font-mono ${
                        resource.utilization < 75 ? 'text-green-400' : 
                        resource.utilization < 85 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {(resource?.utilization || 0).toFixed(1)}%
                      </span>
                    ) : (
                      <span className="text-gray-400">{resource?.available || resource?.total || 'N/A'}</span>
                    )}
                    {getTrendIcon(resource?.trend)}
                  </div>
                </div>
              )) || <div className="text-gray-400">No resource data available</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}