import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Heart, Activity, Users, AlertTriangle, TrendingUp, Eye, Shield, Clock, MapPin, Settings, Zap, Stethoscope } from 'lucide-react';

const HealthcareOperationsCenter = () => {
  const [hospitalMetrics, setHospitalMetrics] = useState({
    totalPatients: 1847,
    admissions: 247,
    discharges: 189,
    occupancyRate: 78.4, // %
    averageStayDuration: 4.2, // days
    emergencyWaitTime: 12.7, // minutes
    staffUtilization: 84.3, // %
    patientSatisfaction: 4.3 // /5.0
  });

  const [patientMonitoring, setPatientMonitoring] = useState([
    {
      id: 'ICU-001',
      patientId: 'PT-45789',
      name: 'Sarah Johnson',
      age: 67,
      condition: 'Post-Surgical Recovery',
      ward: 'ICU',
      vitals: {
        heartRate: 78,
        bloodPressure: '128/82',
        oxygenSat: 97,
        temperature: 98.6,
        respiratoryRate: 16
      },
      alerts: 0,
      status: 'stable',
      physician: 'Dr. Williams',
      admissionDate: '2026-03-04',
      riskScore: 2.3
    },
    {
      id: 'ICU-002',
      patientId: 'PT-23456',
      name: 'Michael Chen',
      age: 45,
      condition: 'Cardiac Monitoring',
      ward: 'CCU',
      vitals: {
        heartRate: 102,
        bloodPressure: '145/95',
        oxygenSat: 94,
        temperature: 99.2,
        respiratoryRate: 20
      },
      alerts: 2,
      status: 'elevated_risk',
      physician: 'Dr. Rodriguez',
      admissionDate: '2026-03-05',
      riskScore: 6.7
    },
    {
      id: 'MED-001',
      patientId: 'PT-67890',
      name: 'Emma Davis',
      age: 34,
      condition: 'Pneumonia Treatment',
      ward: 'Medical',
      vitals: {
        heartRate: 89,
        bloodPressure: '118/76',
        oxygenSat: 96,
        temperature: 100.4,
        respiratoryRate: 18
      },
      alerts: 1,
      status: 'monitoring',
      physician: 'Dr. Thompson',
      admissionDate: '2026-03-03',
      riskScore: 4.1
    },
    {
      id: 'ER-001',
      patientId: 'PT-12345',
      name: 'David Wilson',
      age: 52,
      condition: 'Chest Pain Evaluation',
      ward: 'Emergency',
      vitals: {
        heartRate: 115,
        bloodPressure: '165/98',
        oxygenSat: 98,
        temperature: 98.8,
        respiratoryRate: 22
      },
      alerts: 3,
      status: 'critical_watch',
      physician: 'Dr. Martinez',
      admissionDate: '2026-03-06',
      riskScore: 8.2
    },
    {
      id: 'PEDS-001',
      patientId: 'PT-98765',
      name: 'Lily Anderson',
      age: 8,
      condition: 'Asthma Exacerbation',
      ward: 'Pediatrics',
      vitals: {
        heartRate: 125,
        bloodPressure: '95/60',
        oxygenSat: 95,
        temperature: 99.1,
        respiratoryRate: 28
      },
      alerts: 1,
      status: 'monitoring',
      physician: 'Dr. Kim',
      admissionDate: '2026-03-05',
      riskScore: 5.4
    }
  ]);

  const [departmentMetrics, setDepartmentMetrics] = useState([
    {
      id: 'ICU',
      name: 'Intensive Care',
      totalBeds: 24,
      occupiedBeds: 19,
      totalStaff: 48,
      staffOnDuty: 12,
      averageStay: 3.8,
      mortalityRate: 5.2,
      nursePaitentRatio: 1.5,
      status: 'optimal',
      alerts: 0
    },
    {
      id: 'CCU',
      name: 'Cardiac Care',
      totalBeds: 16,
      occupiedBeds: 14,
      totalStaff: 32,
      staffOnDuty: 8,
      averageStay: 4.2,
      mortalityRate: 3.8,
      nursePaitentRatio: 1.8,
      status: 'attention',
      alerts: 2
    },
    {
      id: 'EMERGENCY',
      name: 'Emergency Dept',
      totalBeds: 32,
      occupiedBeds: 28,
      totalStaff: 64,
      staffOnDuty: 16,
      averageStay: 0.8,
      mortalityRate: 1.2,
      nursePaitentRatio: 3.5,
      status: 'busy',
      alerts: 1
    },
    {
      id: 'MEDICAL',
      name: 'General Medical',
      totalBeds: 120,
      occupiedBeds: 89,
      totalStaff: 96,
      staffOnDuty: 24,
      averageStay: 5.7,
      mortalityRate: 2.1,
      nursePaitentRatio: 4.2,
      status: 'optimal',
      alerts: 0
    },
    {
      id: 'SURGICAL',
      name: 'Surgical Ward',
      totalBeds: 80,
      occupiedBeds: 67,
      totalStaff: 72,
      staffOnDuty: 18,
      averageStay: 3.4,
      mortalityRate: 1.8,
      nursePaitentRatio: 3.7,
      status: 'optimal',
      alerts: 0
    }
  ]);

  const [medicalDeviceStatus, setMedicalDeviceStatus] = useState([
    {
      id: 'DEVICE-001',
      name: 'MRI Scanner #1',
      type: 'Imaging',
      location: 'Radiology A',
      status: 'operational',
      utilization: 89.4, // %
      lastMaintenance: '2026-02-28',
      nextMaintenance: '2026-03-15',
      operatingHours: 2847.5,
      faultCount: 2,
      availability: 97.8
    },
    {
      id: 'DEVICE-002',
      name: 'CT Scanner #2',
      type: 'Imaging',
      location: 'Radiology B',
      status: 'maintenance',
      utilization: 0,
      lastMaintenance: '2026-03-06',
      nextMaintenance: '2026-03-20',
      operatingHours: 3245.2,
      faultCount: 5,
      availability: 92.4
    },
    {
      id: 'DEVICE-003',
      name: 'Ventilator Bank ICU',
      type: 'Life Support',
      location: 'ICU',
      status: 'operational',
      utilization: 78.3,
      lastMaintenance: '2026-03-01',
      nextMaintenance: '2026-03-08',
      operatingHours: 8760.0,
      faultCount: 0,
      availability: 99.9
    },
    {
      id: 'DEVICE-004',
      name: 'Cardiac Monitors',
      type: 'Monitoring',
      location: 'CCU',
      status: 'alert',
      utilization: 94.7,
      lastMaintenance: '2026-02-25',
      nextMaintenance: '2026-03-10',
      operatingHours: 4356.8,
      faultCount: 8,
      availability: 89.2
    },
    {
      id: 'DEVICE-005',
      name: 'OR Equipment Suite',
      type: 'Surgical',
      location: 'OR 1-6',
      status: 'operational',
      utilization: 82.1,
      lastMaintenance: '2026-03-03',
      nextMaintenance: '2026-03-17',
      operatingHours: 2156.4,
      faultCount: 1,
      availability: 98.7
    }
  ]);

  const [emergencyMetrics, setEmergencyMetrics] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      admissions: 234,
      waitTime: 13.2,
      occupancy: 76.8,
      staffUtilization: 82.4
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      admissions: 238,
      waitTime: 13.8,
      occupancy: 77.1,
      staffUtilization: 83.2
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      admissions: 241,
      waitTime: 12.9,
      occupancy: 77.8,
      staffUtilization: 83.8
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      admissions: 244,
      waitTime: 12.5,
      occupancy: 78.2,
      staffUtilization: 84.1
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      admissions: 246,
      waitTime: 12.8,
      occupancy: 78.1,
      staffUtilization: 84.0
    },
    {
      time: new Date().toLocaleTimeString(),
      admissions: 247,
      waitTime: 12.7,
      occupancy: 78.4,
      staffUtilization: 84.3
    }
  ]);

  const [healthcareAlerts, setHealthcareAlerts] = useState([
    {
      id: 'MED-001',
      severity: 'critical',
      type: 'Patient Emergency',
      message: 'David Wilson (PT-12345) - elevated cardiac markers, chest pain assessment needed',
      timestamp: new Date(),
      status: 'active',
      department: 'Emergency',
      impact: 'immediate'
    },
    {
      id: 'MED-002',
      severity: 'warning',
      type: 'Equipment Alert',
      message: 'Cardiac monitors in CCU showing intermittent connectivity issues',
      timestamp: new Date(Date.now() - 120000),
      status: 'investigating',
      department: 'Cardiac Care',
      impact: 'high'
    },
    {
      id: 'MED-003',
      severity: 'info',
      type: 'Staffing Update',
      message: 'Night shift coverage at 95% - all departments adequately staffed',
      timestamp: new Date(Date.now() - 300000),
      status: 'resolved',
      department: 'Hospital-wide',
      impact: 'positive'
    }
  ]);

  const [clinicalDecisionSupport, setClinicalDecisionSupport] = useState([
    {
      patientId: 'PT-23456',
      recommendation: 'Consider beta-blocker adjustment based on BP trends',
      confidence: 87.3,
      category: 'Medication',
      physician: 'Dr. Rodriguez',
      aiModel: 'Clinical-AI-v2.1',
      timestamp: new Date(Date.now() - 60000)
    },
    {
      patientId: 'PT-67890',
      recommendation: 'Chest X-ray follow-up recommended within 24 hours',
      confidence: 92.1,
      category: 'Diagnostic',
      physician: 'Dr. Thompson',
      aiModel: 'Radiology-AI-v3.4',
      timestamp: new Date(Date.now() - 180000)
    },
    {
      patientId: 'PT-98765',
      recommendation: 'Nebulizer frequency may be reduced based on improved O2 sat',
      confidence: 78.9,
      category: 'Treatment',
      physician: 'Dr. Kim',
      aiModel: 'Pediatric-AI-v1.8',
      timestamp: new Date(Date.now() - 240000)
    },
    {
      patientId: 'PT-12345',
      recommendation: 'ECG monitoring suggest possible ST elevation - cardiology consult',
      confidence: 94.7,
      category: 'Emergency',
      physician: 'Dr. Martinez',
      aiModel: 'Cardiac-AI-v4.2',
      timestamp: new Date(Date.now() - 30000)
    }
  ]);

  const [staffMetrics, setStaffMetrics] = useState([
    {
      department: 'Nursing',
      totalStaff: 180,
      onDuty: 45,
      efficiency: 88.7,
      patientRatio: 3.2,
      overtimeHours: 23.4
    },
    {
      department: 'Physicians',
      totalStaff: 72,
      onDuty: 18,
      efficiency: 92.4,
      patientRatio: 10.3,
      overtimeHours: 8.7
    },
    {
      department: 'Technicians',
      totalStaff: 96,
      onDuty: 24,
      efficiency: 85.9,
      patientRatio: 7.7,
      overtimeHours: 12.6
    },
    {
      department: 'Support Staff',
      totalStaff: 124,
      onDuty: 31,
      efficiency: 79.2,
      patientRatio: 6.0,
      overtimeHours: 15.8
    }
  ]);

  const [systemMetrics, setSystemMetrics] = useState({
    ehrSystem: 99.94, // uptime %
    patientMonitoring: 99.97,
    medicalDevices: 97.83,
    labSystem: 99.89,
    averageResponseTime: 0.234, // seconds
    dataIntegrity: 99.97, // %
    aiAccuracy: 91.7, // %
    complianceScore: 98.2 // %
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update hospital metrics
      setHospitalMetrics(prev => ({
        ...prev,
        totalPatients: Math.max(1500, Math.min(2000, prev.totalPatients + Math.floor((Math.random() - 0.5) * 10))),
        admissions: prev.admissions + Math.floor(Math.random() * 3),
        discharges: prev.discharges + Math.floor(Math.random() * 3),
        occupancyRate: Math.max(70, Math.min(95, prev.occupancyRate + (Math.random() - 0.5) * 1)),
        emergencyWaitTime: Math.max(8, Math.min(25, prev.emergencyWaitTime + (Math.random() - 0.5) * 1)),
        staffUtilization: Math.max(75, Math.min(95, prev.staffUtilization + (Math.random() - 0.5) * 1)),
        patientSatisfaction: Math.max(3.5, Math.min(5.0, prev.patientSatisfaction + (Math.random() - 0.5) * 0.05))
      }));

      // Update patient monitoring
      setPatientMonitoring(prev => prev.map(patient => {
        const newVitals = { ...patient.vitals };
        
        // Simulate realistic vital sign changes
        if (patient.status === 'critical_watch') {
          newVitals.heartRate = Math.max(90, Math.min(140, patient.vitals.heartRate + (Math.random() - 0.4) * 8));
          newVitals.oxygenSat = Math.max(92, Math.min(100, patient.vitals.oxygenSat + (Math.random() - 0.6) * 2));
        } else if (patient.status === 'elevated_risk') {
          newVitals.heartRate = Math.max(80, Math.min(120, patient.vitals.heartRate + (Math.random() - 0.5) * 5));
          newVitals.oxygenSat = Math.max(94, Math.min(100, patient.vitals.oxygenSat + (Math.random() - 0.3) * 1));
        } else {
          newVitals.heartRate = Math.max(60, Math.min(100, patient.vitals.heartRate + (Math.random() - 0.5) * 3));
          newVitals.oxygenSat = Math.max(96, Math.min(100, patient.vitals.oxygenSat + (Math.random() - 0.2) * 1));
        }
        
        newVitals.temperature = Math.max(97.0, Math.min(103.0, patient.vitals.temperature + (Math.random() - 0.5) * 0.2));
        newVitals.respiratoryRate = Math.max(12, Math.min(35, patient.vitals.respiratoryRate + Math.floor((Math.random() - 0.5) * 2)));

        // Update risk score based on vitals
        let newRiskScore = patient.riskScore;
        if (newVitals.heartRate > 110 || newVitals.oxygenSat < 95 || newVitals.temperature > 101) {
          newRiskScore = Math.min(10, newRiskScore + 0.1);
        } else if (newVitals.heartRate < 90 && newVitals.oxygenSat > 97 && newVitals.temperature < 99) {
          newRiskScore = Math.max(1, newRiskScore - 0.05);
        }

        return {
          ...patient,
          vitals: newVitals,
          riskScore: newRiskScore,
          alerts: newRiskScore > 7 ? 3 : newRiskScore > 5 ? 2 : newRiskScore > 3 ? 1 : 0
        };
      }));

      // Update department metrics
      setDepartmentMetrics(prev => prev.map(dept => ({
        ...dept,
        occupiedBeds: Math.max(Math.floor(dept.totalBeds * 0.4), Math.min(dept.totalBeds, dept.occupiedBeds + Math.floor((Math.random() - 0.5) * 3))),
        staffOnDuty: Math.max(Math.floor(dept.totalStaff * 0.2), Math.min(Math.floor(dept.totalStaff * 0.4), dept.staffOnDuty + Math.floor((Math.random() - 0.5) * 2))),
        averageStay: Math.max(0.5, Math.min(10, dept.averageStay + (Math.random() - 0.5) * 0.1)),
        nursePaitentRatio: Math.max(1.0, Math.min(6.0, dept.nursePaitentRatio + (Math.random() - 0.5) * 0.1))
      })));

      // Update medical device status
      setMedicalDeviceStatus(prev => prev.map(device => ({
        ...device,
        utilization: device.status === 'operational' ? Math.max(60, Math.min(100, device.utilization + (Math.random() - 0.5) * 5)) : 0,
        operatingHours: device.status === 'operational' ? device.operatingHours + 0.1 : device.operatingHours,
        availability: Math.max(85, Math.min(100, device.availability + (Math.random() - 0.5) * 0.5))
      })));

      // Update emergency metrics
      const newEmergencyData = {
        time: new Date().toLocaleTimeString(),
        admissions: hospitalMetrics.admissions,
        waitTime: hospitalMetrics.emergencyWaitTime,
        occupancy: hospitalMetrics.occupancyRate,
        staffUtilization: hospitalMetrics.staffUtilization
      };
      
      setEmergencyMetrics(prev => [...prev.slice(1), newEmergencyData]);

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        ehrSystem: Math.max(99.8, Math.min(100, prev.ehrSystem + (Math.random() - 0.3) * 0.01)),
        patientMonitoring: Math.max(99.8, Math.min(100, prev.patientMonitoring + (Math.random() - 0.3) * 0.01)),
        medicalDevices: Math.max(95, Math.min(100, prev.medicalDevices + (Math.random() - 0.5) * 0.5)),
        averageResponseTime: Math.max(0.1, Math.min(1.0, prev.averageResponseTime + (Math.random() - 0.5) * 0.05)),
        aiAccuracy: Math.max(85, Math.min(95, prev.aiAccuracy + (Math.random() - 0.5) * 0.2))
      }));

      // Occasionally add new healthcare alerts
      if (Math.random() > 0.94) {
        const alertTypes = ['Patient Emergency', 'Equipment Alert', 'Staffing Update', 'System Alert', 'Compliance Issue'];
        const severities = ['info', 'warning', 'critical'];
        const departments = departmentMetrics.map(d => d.name);
        
        const newAlert = {
          id: `MED-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time healthcare operations alert generated',
          timestamp: new Date(),
          status: 'active',
          department: departments[Math.floor(Math.random() * departments.length)],
          impact: ['low', 'medium', 'high', 'immediate'][Math.floor(Math.random() * 4)]
        };
        
        setHealthcareAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [hospitalMetrics.admissions, hospitalMetrics.emergencyWaitTime, hospitalMetrics.occupancyRate, hospitalMetrics.staffUtilization]);

  const getPatientStatusColor = (status) => {
    switch (status) {
      case 'stable': return '#10B981';
      case 'monitoring': return '#3B82F6';
      case 'elevated_risk': return '#F59E0B';
      case 'critical_watch': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getDepartmentStatusColor = (status) => {
    switch (status) {
      case 'optimal': return '#10B981';
      case 'attention': return '#F59E0B';
      case 'busy': return '#8B5CF6';
      case 'critical': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getDeviceStatusColor = (status) => {
    switch (status) {
      case 'operational': return '#10B981';
      case 'maintenance': return '#F59E0B';
      case 'alert': return '#EF4444';
      case 'offline': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'info': return '#10B981';
      default: return '#6B7280';
    }
  };

  const patientDemographics = [
    { name: 'ICU', value: 19, color: '#EF4444' },
    { name: 'Medical', value: 89, color: '#3B82F6' },
    { name: 'Surgical', value: 67, color: '#8B5CF6' },
    { name: 'Emergency', value: 28, color: '#F59E0B' },
    { name: 'Cardiac', value: 14, color: '#10B981' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Heart className="w-8 h-8 text-red-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">HEALTHCARE OPERATIONS CENTER</h1>
            <p className="text-gray-400">Real-time patient monitoring, medical device integration, clinical decision support & hospital resource management</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">
              {hospitalMetrics.totalPatients}
            </div>
            <div className="text-xs text-gray-400">PATIENTS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              {hospitalMetrics.occupancyRate.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400">OCCUPANCY</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{hospitalMetrics.emergencyWaitTime.toFixed(1)}min</div>
            <div className="text-xs text-gray-400">ER WAIT</div>
          </div>
        </div>
      </div>

      {/* Healthcare KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">ADMISSIONS</span>
          </div>
          <div className="text-xl font-bold text-white">{hospitalMetrics.admissions}</div>
          <div className="text-xs text-gray-400">Today</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">DISCHARGES</span>
          </div>
          <div className="text-xl font-bold text-white">{hospitalMetrics.discharges}</div>
          <div className="text-xs text-gray-400">Today</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">AVG STAY</span>
          </div>
          <div className="text-xl font-bold text-white">{hospitalMetrics.averageStayDuration.toFixed(1)}d</div>
          <div className="text-xs text-gray-400">Duration</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">STAFF UTIL</span>
          </div>
          <div className="text-xl font-bold text-white">{hospitalMetrics.staffUtilization.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Rate</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">SATISFACTION</span>
          </div>
          <div className="text-xl font-bold text-white">{hospitalMetrics.patientSatisfaction.toFixed(1)}/5.0</div>
          <div className="text-xs text-gray-400">Score</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Stethoscope className="w-5 h-5 text-cyan-400" />
            <span className="text-xs text-gray-400">EHR UPTIME</span>
          </div>
          <div className="text-xl font-bold text-white">{systemMetrics.ehrSystem.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">System</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Patient Monitoring */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-red-400" />
            PATIENT MONITORING
          </h3>
          <div className="space-y-3">
            {patientMonitoring.map(patient => (
              <div key={patient.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getPatientStatusColor(patient.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{patient.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getPatientStatusColor(patient.status)}20`, 
                      color: getPatientStatusColor(patient.status) 
                    }}>
                      {patient.status.toUpperCase().replace('_', ' ')}
                    </span>
                    {patient.alerts > 0 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-red-900 text-red-400">
                        {patient.alerts} Alert{patient.alerts > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  ID: <span className="text-blue-400">{patient.patientId}</span> • 
                  Age: <span className="text-purple-400">{patient.age}</span> • 
                  Ward: <span className="text-green-400">{patient.ward}</span>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{patient.condition}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">HR</span>
                    <span className="text-red-400">{patient.vitals.heartRate} bpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">O2 Sat</span>
                    <span className="text-blue-400">{patient.vitals.oxygenSat}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">BP</span>
                    <span className="text-purple-400">{patient.vitals.bloodPressure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Temp</span>
                    <span className="text-white">{patient.vitals.temperature}°F</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Risk Score: {patient.riskScore.toFixed(1)}
                  </span>
                  <span className="text-gray-500">
                    {patient.physician}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Metrics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-400" />
            DEPARTMENT METRICS
          </h3>
          <div className="space-y-3">
            {departmentMetrics.map(dept => (
              <div key={dept.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getDepartmentStatusColor(dept.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{dept.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getDepartmentStatusColor(dept.status)}20`, 
                      color: getDepartmentStatusColor(dept.status) 
                    }}>
                      {dept.status.toUpperCase()}
                    </span>
                    {dept.alerts > 0 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-orange-900 text-orange-400">
                        {dept.alerts} Alert{dept.alerts > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Occupancy</span>
                    <span className="text-green-400">{Math.round((dept.occupiedBeds/dept.totalBeds)*100)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Beds</span>
                    <span className="text-blue-400">{dept.occupiedBeds}/{dept.totalBeds}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Staff</span>
                    <span className="text-purple-400">{dept.staffOnDuty}/{dept.totalStaff}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg Stay</span>
                    <span className="text-white">{dept.averageStay.toFixed(1)}d</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Nurse:Patient {dept.nursePaitentRatio.toFixed(1)}:1
                  </span>
                  <span className="text-gray-500">
                    Mortality: {dept.mortalityRate.toFixed(1)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Devices & Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            MEDICAL DEVICES & ALERTS
          </h3>
          <div className="space-y-3 mb-4">
            {medicalDeviceStatus.slice(0, 4).map(device => (
              <div key={device.id} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{device.name}</span>
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: getDeviceStatusColor(device.status) }}
                  />
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  {device.type} • <MapPin className="w-3 h-3 inline" /> {device.location}
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Utilization</span>
                    <span className="text-green-400">{device.utilization.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Availability</span>
                    <span className="text-blue-400">{device.availability.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Op Hours</span>
                    <span className="text-purple-400">{device.operatingHours.toFixed(0)}h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Faults</span>
                    <span className={device.faultCount > 3 ? "text-red-400" : "text-white"}>{device.faultCount}</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300">
                  Next Maintenance: <span className="text-yellow-400">{device.nextMaintenance}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Healthcare Alerts */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">Clinical Alerts</div>
            <div className="space-y-2">
              {healthcareAlerts.slice(0, 3).map(alert => (
                <div key={alert.id} className="bg-gray-800 rounded-lg p-2 border-l-2" style={{ borderLeftColor: getAlertSeverityColor(alert.severity) }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-white">{alert.type}</span>
                    <span className="text-xs px-1 py-0.5 rounded-full" style={{ 
                      backgroundColor: `${getAlertSeverityColor(alert.severity)}20`, 
                      color: getAlertSeverityColor(alert.severity) 
                    }}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mb-1">{alert.message}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400">{alert.department}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Healthcare Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Hospital Metrics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME HOSPITAL METRICS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={emergencyMetrics}>
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
                dataKey="admissions" 
                stroke="#10B981" 
                strokeWidth={3}
                name="Admissions"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="waitTime" 
                stroke="#EF4444" 
                strokeWidth={2}
                name="ER Wait (min)"
                dot={false}
              />
              <Line 
                yAxisid="right"
                type="monotone" 
                dataKey="occupancy" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Occupancy %"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="staffUtilization" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Staff Utilization %"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Patient Distribution & System Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">PATIENT DISTRIBUTION & SYSTEM STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={patientDemographics}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {patientDemographics.map((entry, index) => (
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
                  formatter={(value) => [`${value} patients`, 'Department Census']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-2">
              {patientDemographics.map((dept, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: dept.color }}
                    />
                    <span className="text-gray-400 text-sm">{dept.name}</span>
                  </div>
                  <span className="text-white font-semibold">{dept.value}</span>
                </div>
              ))}
              
              {/* System Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">System Status</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">EHR System</span>
                    <span className="text-green-400">{systemMetrics.ehrSystem.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Patient Monitoring</span>
                    <span className="text-blue-400">{systemMetrics.patientMonitoring.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time</span>
                    <span className="text-purple-400">{systemMetrics.averageResponseTime.toFixed(3)}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">AI Accuracy</span>
                    <span className="text-green-400">{systemMetrics.aiAccuracy.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Clinical Decision Support Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-white font-semibold">AI Clinical Decision Support</span>
              <span className="text-xs text-gray-400">Real-time Recommendations</span>
            </div>
            <div className="space-y-2">
              {clinicalDecisionSupport.slice(0, 2).map((rec, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-blue-400">{rec.patientId}</span>
                    <span className="text-xs text-green-400">{rec.confidence.toFixed(1)}%</span>
                  </div>
                  <p className="text-xs text-gray-300 mb-1">{rec.recommendation}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-purple-400">{rec.category}</span>
                    <span className="text-gray-500">{rec.aiModel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Healthcare Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Healthcare Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-xs transition-colors">
                  <Heart className="w-3 h-3 inline mr-1" />
                  Patient Care
                </button>
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Activity className="w-3 h-3 inline mr-1" />
                  Vital Monitoring
                </button>
                <button className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 rounded text-xs transition-colors">
                  <Zap className="w-3 h-3 inline mr-1" />
                  Device Status
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareOperationsCenter;