import { useState, useEffect } from 'react';

const HospitalOperationsCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hospitalData, setHospitalData] = useState({
    facilityStatus: 'NORMAL_OPERATIONS',
    totalBeds: 487,
    occupiedBeds: 423,
    edWaitTime: 18,
    traumaLevel: 'LEVEL_I',
    disasterStatus: 'GREEN',
    lastUpdate: new Date()
  });

  const [patientFlow, setPatientFlow] = useState({
    admissions: 34,
    discharges: 28,
    transfers: 12,
    edVolume: 67,
    surgicalVolume: 23,
    icuOccupancy: 89.4
  });

  const [departments, setDepartments] = useState([
    { id: 'ED', name: 'Emergency Department', capacity: 45, current: 38, waitTime: 18, alertLevel: 'MODERATE' },
    { id: 'ICU', name: 'Intensive Care Unit', capacity: 72, current: 64, waitTime: 0, alertLevel: 'HIGH' },
    { id: 'OR', name: 'Operating Rooms', capacity: 18, current: 14, waitTime: 45, alertLevel: 'NORMAL' },
    { id: 'NICU', name: 'Neonatal ICU', capacity: 24, current: 19, waitTime: 0, alertLevel: 'NORMAL' },
    { id: 'PICU', name: 'Pediatric ICU', capacity: 16, current: 11, waitTime: 0, alertLevel: 'LOW' },
    { id: 'CCU', name: 'Cardiac Care Unit', capacity: 28, current: 26, waitTime: 12, alertLevel: 'HIGH' },
    { id: 'MICU', name: 'Medical ICU', capacity: 32, current: 28, waitTime: 8, alertLevel: 'MODERATE' },
    { id: 'SICU', name: 'Surgical ICU', capacity: 20, current: 17, waitTime: 15, alertLevel: 'MODERATE' }
  ]);

  const [staffing, setStaffing] = useState([
    { department: 'Emergency Medicine', required: 28, onDuty: 26, callIns: 3, overtime: 4, status: 'ADEQUATE' },
    { department: 'Critical Care', required: 45, onDuty: 42, callIns: 2, overtime: 7, status: 'SHORT' },
    { department: 'Surgery', required: 32, onDuty: 31, callIns: 1, overtime: 3, status: 'OPTIMAL' },
    { department: 'Nursing', required: 156, onDuty: 149, callIns: 8, overtime: 12, status: 'SHORT' },
    { department: 'Pharmacy', required: 18, onDuty: 17, callIns: 1, overtime: 2, status: 'ADEQUATE' },
    { department: 'Laboratory', required: 24, onDuty: 23, callIns: 2, overtime: 1, status: 'OPTIMAL' }
  ]);

  const [emergencyAlerts, setEmergencyAlerts] = useState([
    { id: 'ED-001', time: '21:38', type: 'TRAUMA_ALERT', priority: 'HIGH', message: 'Level 1 Trauma - ETA 8 minutes - MVA with multiple casualties', status: 'ACTIVE' },
    { id: 'ICU-047', time: '21:35', type: 'CODE_BLUE', priority: 'CRITICAL', message: 'Cardiac arrest - Room 347 - Code team responding', status: 'RESPONDING' },
    { id: 'OR-023', time: '21:33', type: 'BLOOD_SHORTAGE', priority: 'URGENT', message: 'O-negative blood critically low - 2 units remaining', status: 'OPEN' },
    { id: 'NICU-089', time: '21:30', type: 'EQUIPMENT_ALERT', priority: 'MODERATE', message: 'Ventilator malfunction - Bed 12 - Backup activated', status: 'RESOLVED' },
    { id: 'PHARM-156', time: '21:28', type: 'MEDICATION_ALERT', priority: 'LOW', message: 'Insulin shortage anticipated - Alternative protocols ready', status: 'MONITORING' },
    { id: 'LAB-234', time: '21:25', type: 'CRITICAL_RESULT', priority: 'HIGH', message: 'Critical lab values - Patient ID 78942 - Physician notified', status: 'ACKNOWLEDGED' }
  ]);

  const [resourceStatus, setResourceStatus] = useState({
    ventilators: { total: 89, available: 12, inUse: 74, maintenance: 3, utilization: 83.1 },
    bloodBank: { 
      oPos: 24, oNeg: 2, aPos: 18, aNeg: 7, bPos: 15, bNeg: 4, abPos: 9, abNeg: 3,
      platelets: 34, plasma: 28, cryoPrecipitate: 12
    },
    pharmacy: { prescriptions: 847, ivPreps: 234, emergencyMeds: 98.4, narcotics: 94.7 },
    imaging: { 
      ct: { total: 4, available: 1, emergency: true },
      mri: { total: 3, available: 2, emergency: false },
      xray: { total: 12, available: 8, emergency: true },
      ultrasound: { total: 18, available: 11, emergency: true }
    }
  });

  const [surgicalSchedule, setSurgicalSchedule] = useState([
    { orNumber: 'OR-1', procedure: 'Emergency Craniotomy', surgeon: 'Dr. Martinez', startTime: '22:15', duration: '4h', priority: 'EMERGENT', status: 'PREP' },
    { orNumber: 'OR-3', procedure: 'Cardiac Bypass', surgeon: 'Dr. Thompson', startTime: '23:30', duration: '6h', priority: 'URGENT', status: 'SCHEDULED' },
    { orNumber: 'OR-7', procedure: 'Appendectomy', surgeon: 'Dr. Wilson', startTime: '22:00', duration: '2h', priority: 'ROUTINE', status: 'IN_PROGRESS' },
    { orNumber: 'OR-12', procedure: 'Hip Replacement', surgeon: 'Dr. Anderson', startTime: '06:00', duration: '3h', priority: 'ELECTIVE', status: 'SCHEDULED' },
    { orNumber: 'OR-15', procedure: 'Emergency Laparotomy', surgeon: 'Dr. Garcia', startTime: '21:45', duration: '3h', priority: 'EMERGENT', status: 'ACTIVE' }
  ]);

  const [qualityMetrics, setQualityMetrics] = useState({
    patientSafety: { fallRate: 2.1, infectionRate: 1.8, medicationErrors: 0.3 },
    clinicalOutcomes: { mortalityRate: 2.4, readmissionRate: 8.7, lengthOfStay: 4.2 },
    satisfaction: { patientScore: 4.3, familyScore: 4.1, staffSatisfaction: 3.8 },
    efficiency: { bedTurnover: 1.8, averageWait: 23, dischargeEfficiency: 87.4 }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      
      // Simulate real-time data updates
      setPatientFlow(prev => ({
        ...prev,
        admissions: Math.max(20, Math.min(50, prev.admissions + Math.floor((Math.random() - 0.5) * 3))),
        edVolume: Math.max(40, Math.min(80, prev.edVolume + Math.floor((Math.random() - 0.5) * 4))),
        icuOccupancy: Math.max(75, Math.min(95, prev.icuOccupancy + (Math.random() - 0.5) * 2))
      }));

      setHospitalData(prev => ({
        ...prev,
        occupiedBeds: Math.max(380, Math.min(470, prev.occupiedBeds + Math.floor((Math.random() - 0.5) * 5))),
        edWaitTime: Math.max(10, Math.min(45, prev.edWaitTime + Math.floor((Math.random() - 0.5) * 4))),
        lastUpdate: new Date()
      }));

      // Update department capacity randomly
      setDepartments(prev => prev.map(dept => ({
        ...dept,
        current: Math.max(Math.floor(dept.capacity * 0.6), Math.min(dept.capacity, dept.current + Math.floor((Math.random() - 0.5) * 2)))
      })));

    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      'NORMAL_OPERATIONS': 'text-green-400',
      'YELLOW_ALERT': 'text-yellow-400',
      'RED_ALERT': 'text-red-400',
      'CRITICAL': 'text-red-500',
      'HIGH': 'text-red-400',
      'MODERATE': 'text-yellow-400',
      'NORMAL': 'text-green-400',
      'LOW': 'text-blue-400',
      'OPTIMAL': 'text-green-400',
      'ADEQUATE': 'text-blue-400',
      'SHORT': 'text-yellow-400'
    };
    return colors[status] || 'text-gray-400';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'CRITICAL': 'text-red-500 bg-red-900/20',
      'HIGH': 'text-red-400 bg-red-900/10',
      'URGENT': 'text-orange-400 bg-orange-900/10',
      'MODERATE': 'text-yellow-400 bg-yellow-900/10',
      'LOW': 'text-blue-400 bg-blue-900/10'
    };
    return colors[priority] || 'text-gray-400';
  };

  const bedUtilization = ((hospitalData.occupiedBeds / hospitalData.totalBeds) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950 text-white p-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/80 to-cyan-900/80 backdrop-blur-sm rounded-lg p-6 mb-6 border border-blue-500/20">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-300 mb-2">🏥 HOSPITAL OPERATIONS CENTER</h1>
            <div className="text-blue-200">
              Metropolitan General Hospital | {currentTime.toLocaleDateString()} | {currentTime.toLocaleTimeString()}
            </div>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold ${getStatusColor(hospitalData.facilityStatus)}`}>
              {hospitalData.facilityStatus.replace(/_/g, ' ')}
            </div>
            <div className="text-blue-300">Trauma {hospitalData.traumaLevel}</div>
          </div>
        </div>
      </div>

      {/* Key Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4">
          <div className="text-blue-400 text-sm mb-1">Bed Utilization</div>
          <div className="text-2xl font-bold text-white">{bedUtilization}%</div>
          <div className="text-xs text-blue-300">{hospitalData.occupiedBeds}/{hospitalData.totalBeds} beds</div>
        </div>
        <div className="bg-red-900/30 backdrop-blur-sm border border-red-500/20 rounded-lg p-4">
          <div className="text-red-400 text-sm mb-1">ED Wait Time</div>
          <div className="text-2xl font-bold text-white">{hospitalData.edWaitTime} min</div>
          <div className="text-xs text-red-300">{patientFlow.edVolume} patients</div>
        </div>
        <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
          <div className="text-purple-400 text-sm mb-1">ICU Occupancy</div>
          <div className="text-2xl font-bold text-white">{patientFlow.icuOccupancy.toFixed(1)}%</div>
          <div className="text-xs text-purple-300">Critical Care Units</div>
        </div>
        <div className="bg-green-900/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-4">
          <div className="text-green-400 text-sm mb-1">Active ORs</div>
          <div className="text-2xl font-bold text-white">{surgicalSchedule.filter(s => s.status === 'ACTIVE' || s.status === 'IN_PROGRESS').length}</div>
          <div className="text-xs text-green-300">{surgicalSchedule.length} scheduled</div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        {/* Emergency Alerts */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-lg p-4">
          <h3 className="text-xl font-semibold text-red-400 mb-4">🚨 Emergency Alerts</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {emergencyAlerts.map(alert => (
              <div key={alert.id} className={`p-3 rounded border-l-4 ${
                alert.priority === 'CRITICAL' ? 'border-red-500 bg-red-900/20' :
                alert.priority === 'HIGH' ? 'border-red-400 bg-red-900/10' :
                alert.priority === 'URGENT' ? 'border-orange-400 bg-orange-900/10' :
                'border-yellow-400 bg-yellow-900/10'
              }`}>
                <div className="flex justify-between items-start mb-1">
                  <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(alert.priority)}`}>
                    {alert.priority}
                  </span>
                  <span className="text-xs text-gray-400">{alert.time} | {alert.id}</span>
                </div>
                <div className="text-sm text-white">{alert.message}</div>
                <div className="text-xs text-gray-400 mt-1">Status: {alert.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Status */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-lg p-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">🏥 Department Status</h3>
          <div className="space-y-3">
            {departments.map(dept => {
              const utilization = ((dept.current / dept.capacity) * 100).toFixed(1);
              return (
                <div key={dept.id} className="bg-slate-800/50 p-3 rounded border border-slate-600/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">{dept.name}</span>
                    <span className={`text-sm ${getStatusColor(dept.alertLevel)}`}>{dept.alertLevel}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Occupancy: {dept.current}/{dept.capacity} ({utilization}%)</span>
                    {dept.waitTime > 0 && <span className="text-yellow-400">Wait: {dept.waitTime}min</span>}
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${
                        utilization > 90 ? 'bg-red-500' : utilization > 75 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${utilization}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Surgical Schedule & Staffing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        {/* Surgical Schedule */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-lg p-4">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">⚕️ Surgical Schedule</h3>
          <div className="space-y-2">
            {surgicalSchedule.map((surgery, index) => (
              <div key={index} className="bg-slate-800/50 p-3 rounded border border-slate-600/20">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-white">{surgery.orNumber}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    surgery.status === 'ACTIVE' || surgery.status === 'IN_PROGRESS' ? 'bg-green-600 text-white' :
                    surgery.status === 'PREP' ? 'bg-yellow-600 text-white' :
                    'bg-blue-600 text-white'
                  }`}>
                    {surgery.status}
                  </span>
                </div>
                <div className="text-sm text-white mb-1">{surgery.procedure}</div>
                <div className="text-xs text-gray-400">
                  {surgery.surgeon} | {surgery.startTime} ({surgery.duration}) | {surgery.priority}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Staffing Levels */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-lg p-4">
          <h3 className="text-xl font-semibold text-green-400 mb-4">👥 Staffing Levels</h3>
          <div className="space-y-3">
            {staffing.map((staff, index) => {
              const availability = ((staff.onDuty / staff.required) * 100).toFixed(1);
              return (
                <div key={index} className="bg-slate-800/50 p-3 rounded border border-slate-600/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">{staff.department}</span>
                    <span className={`text-sm ${getStatusColor(staff.status)}`}>{staff.status}</span>
                  </div>
                  <div className="text-xs text-gray-400 grid grid-cols-2 gap-2">
                    <div>On Duty: {staff.onDuty}/{staff.required} ({availability}%)</div>
                    <div>Overtime: {staff.overtime} | Call-ins: {staff.callIns}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Resource Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Blood Bank */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-lg p-4">
          <h3 className="text-xl font-semibold text-red-400 mb-4">🩸 Blood Bank</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-red-900/20 p-2 rounded">
              <div className="text-red-400">O+</div>
              <div className="text-white font-bold">{resourceStatus.bloodBank.oPos} units</div>
            </div>
            <div className="bg-red-900/20 p-2 rounded">
              <div className="text-red-400">O-</div>
              <div className={`font-bold ${resourceStatus.bloodBank.oNeg < 5 ? 'text-red-500' : 'text-white'}`}>
                {resourceStatus.bloodBank.oNeg} units
              </div>
            </div>
            <div className="bg-red-900/20 p-2 rounded">
              <div className="text-red-400">A+</div>
              <div className="text-white font-bold">{resourceStatus.bloodBank.aPos} units</div>
            </div>
            <div className="bg-red-900/20 p-2 rounded">
              <div className="text-red-400">A-</div>
              <div className="text-white font-bold">{resourceStatus.bloodBank.aNeg} units</div>
            </div>
          </div>
          <div className="mt-3 text-xs space-y-1">
            <div className="flex justify-between">
              <span className="text-gray-400">Platelets:</span>
              <span className="text-white">{resourceStatus.bloodBank.platelets} units</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Plasma:</span>
              <span className="text-white">{resourceStatus.bloodBank.plasma} units</span>
            </div>
          </div>
        </div>

        {/* Equipment Status */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-lg p-4">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">🫁 Critical Equipment</h3>
          <div className="space-y-3">
            <div className="bg-cyan-900/20 p-2 rounded">
              <div className="flex justify-between mb-1">
                <span className="text-cyan-400">Ventilators</span>
                <span className="text-white">{resourceStatus.ventilators.utilization}%</span>
              </div>
              <div className="text-xs text-gray-400">
                Available: {resourceStatus.ventilators.available} | In Use: {resourceStatus.ventilators.inUse}
              </div>
            </div>
            <div className="space-y-2">
              {Object.entries(resourceStatus.imaging).map(([type, data]) => (
                <div key={type} className="bg-blue-900/20 p-2 rounded">
                  <div className="flex justify-between">
                    <span className="text-blue-400">{type.toUpperCase()}</span>
                    <span className={`text-xs ${data.emergency ? 'text-green-400' : 'text-yellow-400'}`}>
                      {data.available}/{data.total} available
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-lg p-4">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">📊 Quality Metrics</h3>
          <div className="space-y-2 text-sm">
            <div className="bg-yellow-900/20 p-2 rounded">
              <div className="text-yellow-400 mb-1">Patient Safety</div>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-400">Fall Rate:</span>
                  <span className="text-white">{qualityMetrics.patientSafety.fallRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Infection Rate:</span>
                  <span className="text-white">{qualityMetrics.patientSafety.infectionRate}%</span>
                </div>
              </div>
            </div>
            <div className="bg-green-900/20 p-2 rounded">
              <div className="text-green-400 mb-1">Patient Satisfaction</div>
              <div className="text-white font-bold">{qualityMetrics.satisfaction.patientScore}/5.0</div>
            </div>
            <div className="bg-blue-900/20 p-2 rounded">
              <div className="text-blue-400 mb-1">Avg Length of Stay</div>
              <div className="text-white font-bold">{qualityMetrics.clinicalOutcomes.lengthOfStay} days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-blue-400 text-sm">
        Hospital Operations Center | Real-time Patient Care Monitoring | Healthcare Command & Control
      </div>
    </div>
  );
};

export default HospitalOperationsCenter;