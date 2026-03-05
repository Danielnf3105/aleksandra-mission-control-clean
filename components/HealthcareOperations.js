// HealthcareOperations.js - Healthcare Operations Control Center & Hospital Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const HealthcareOperations = () => {
  const [patients, setPatients] = useState([
    {
      id: 'pat_001',
      mrn: 'MRN-2026-04587',
      name: 'Sarah Johnson',
      age: 67,
      gender: 'Female',
      room: 'ICU-204',
      department: 'Intensive Care Unit',
      condition: 'Post-Surgical Recovery',
      severity: 'CRITICAL',
      admissionDate: Date.now() - 3 * 24 * 60 * 60 * 1000,
      expectedDischarge: Date.now() + 2 * 24 * 60 * 60 * 1000,
      attendingPhysician: 'Dr. Michael Chen',
      primaryNurse: 'Jennifer Martinez, RN',
      vitals: {
        heartRate: 78,
        bloodPressure: { systolic: 142, diastolic: 89 },
        temperature: 37.2, // Celsius
        respiratoryRate: 16,
        oxygenSaturation: 94,
        painLevel: 6 // 1-10 scale
      },
      medications: ['Morphine 5mg q4h PRN', 'Metoprolol 25mg BID', 'Furosemide 40mg daily'],
      allergies: ['Penicillin', 'Latex'],
      insuranceStatus: 'Active - Medicare',
      lastUpdate: Date.now() - 15 * 60 * 1000,
      alerts: ['High blood pressure', 'Pain management needed']
    },
    {
      id: 'pat_002',
      mrn: 'MRN-2026-04588',
      name: 'David Rodriguez',
      age: 34,
      gender: 'Male',
      room: 'ED-12',
      department: 'Emergency Department',
      condition: 'Chest Pain - Rule Out MI',
      severity: 'HIGH',
      admissionDate: Date.now() - 4 * 60 * 60 * 1000,
      expectedDischarge: null,
      attendingPhysician: 'Dr. Lisa Park',
      primaryNurse: 'Robert Kim, RN',
      vitals: {
        heartRate: 95,
        bloodPressure: { systolic: 155, diastolic: 92 },
        temperature: 36.8,
        respiratoryRate: 18,
        oxygenSaturation: 98,
        painLevel: 8
      },
      medications: ['Nitroglycerin SL PRN', 'Aspirin 325mg', 'Atorvastatin 40mg'],
      allergies: ['NKDA'],
      insuranceStatus: 'Active - Blue Cross',
      lastUpdate: Date.now() - 5 * 60 * 1000,
      tests: ['ECG', 'Troponin', 'CXR'],
      alerts: ['Chest pain ongoing', 'Cardiac monitoring']
    },
    {
      id: 'pat_003',
      mrn: 'MRN-2026-04589',
      name: 'Maria Garcia',
      age: 28,
      gender: 'Female',
      room: 'L&D-8',
      department: 'Labor & Delivery',
      condition: 'Active Labor - G2P1',
      severity: 'STABLE',
      admissionDate: Date.now() - 6 * 60 * 60 * 1000,
      expectedDischarge: Date.now() + 2 * 24 * 60 * 60 * 1000,
      attendingPhysician: 'Dr. Amanda Wilson',
      primaryNurse: 'Catherine Lee, CNM',
      vitals: {
        heartRate: 88,
        bloodPressure: { systolic: 125, diastolic: 78 },
        temperature: 37.0,
        respiratoryRate: 16,
        oxygenSaturation: 99,
        painLevel: 7
      },
      medications: ['Pitocin drip', 'Epidural anesthesia', 'Prenatal vitamins'],
      allergies: ['Shellfish'],
      insuranceStatus: 'Active - Aetna',
      lastUpdate: Date.now() - 8 * 60 * 1000,
      fetal: {
        heartRate: 145,
        contractions: '3 in 10 minutes',
        cervicalDilation: '8 cm'
      },
      alerts: []
    },
    {
      id: 'pat_004',
      mrn: 'MRN-2026-04590',
      name: 'Robert Thompson',
      age: 72,
      gender: 'Male',
      room: 'Med-315',
      department: 'Medical Floor',
      condition: 'Pneumonia',
      severity: 'MODERATE',
      admissionDate: Date.now() - 5 * 24 * 60 * 60 * 1000,
      expectedDischarge: Date.now() + 3 * 24 * 60 * 60 * 1000,
      attendingPhysician: 'Dr. Kevin Singh',
      primaryNurse: 'Patricia Brown, RN',
      vitals: {
        heartRate: 82,
        bloodPressure: { systolic: 132, diastolic: 84 },
        temperature: 38.1,
        respiratoryRate: 20,
        oxygenSaturation: 91,
        painLevel: 3
      },
      medications: ['Ceftriaxone 1g q24h', 'Albuterol inhaler q6h', 'Oxygen 2L nasal cannula'],
      allergies: ['Sulfa drugs'],
      insuranceStatus: 'Active - Medicare',
      lastUpdate: Date.now() - 12 * 60 * 1000,
      alerts: ['Low oxygen saturation', 'Fever trending up']
    },
    {
      id: 'pat_005',
      mrn: 'MRN-2026-04591',
      name: 'Emily Chen',
      age: 45,
      gender: 'Female',
      room: 'Surg-502',
      department: 'Surgical Floor',
      condition: 'Post-Laparoscopic Cholecystectomy',
      severity: 'STABLE',
      admissionDate: Date.now() - 1 * 24 * 60 * 60 * 1000,
      expectedDischarge: Date.now() + 1 * 24 * 60 * 60 * 1000,
      attendingPhysician: 'Dr. James Miller',
      primaryNurse: 'Michelle Wang, RN',
      vitals: {
        heartRate: 72,
        bloodPressure: { systolic: 118, diastolic: 76 },
        temperature: 36.9,
        respiratoryRate: 14,
        oxygenSaturation: 97,
        painLevel: 4
      },
      medications: ['Hydrocodone 5mg q4h PRN', 'Ondansetron 4mg q6h PRN', 'Ibuprofen 600mg q6h'],
      allergies: ['NKDA'],
      insuranceStatus: 'Active - United Healthcare',
      lastUpdate: Date.now() - 3 * 60 * 1000,
      alerts: []
    }
  ]);

  const [departments, setDepartments] = useState([
    {
      id: 'dept_001',
      name: 'Emergency Department',
      type: 'Critical Care',
      status: 'BUSY',
      capacity: 24,
      currentPatients: 18,
      occupancyRate: 75.0,
      staffOnDuty: 12,
      staffRequired: 15,
      averageWaitTime: 45, // minutes
      patientsWaiting: 6,
      bedAvailability: 6,
      averageLengthOfStay: 4.2, // hours
      patientSatisfaction: 87.3, // percentage
      lastUpdate: Date.now() - 5 * 60 * 1000,
      metrics: {
        admissions: 23,
        discharges: 19,
        transfers: 4,
        leftWithoutBeingSeen: 2
      },
      equipment: {
        monitors: { total: 24, available: 6, maintenance: 1 },
        ventilators: { total: 8, available: 3, inUse: 5 },
        defibrillators: { total: 6, available: 4, maintenance: 0 }
      }
    },
    {
      id: 'dept_002',
      name: 'Intensive Care Unit',
      type: 'Critical Care',
      status: 'FULL',
      capacity: 16,
      currentPatients: 16,
      occupancyRate: 100.0,
      staffOnDuty: 8,
      staffRequired: 8,
      averageWaitTime: 0,
      patientsWaiting: 0,
      bedAvailability: 0,
      averageLengthOfStay: 5.8, // days
      patientSatisfaction: 92.1,
      lastUpdate: Date.now() - 3 * 60 * 1000,
      metrics: {
        admissions: 3,
        discharges: 2,
        transfers: 1,
        mortality: 0
      },
      equipment: {
        monitors: { total: 16, available: 0, maintenance: 0 },
        ventilators: { total: 12, available: 1, inUse: 11 },
        dialysis: { total: 4, available: 2, inUse: 2 }
      }
    },
    {
      id: 'dept_003',
      name: 'Medical Floor',
      type: 'General Medicine',
      status: 'NORMAL',
      capacity: 40,
      currentPatients: 32,
      occupancyRate: 80.0,
      staffOnDuty: 16,
      staffRequired: 18,
      averageWaitTime: 15,
      patientsWaiting: 2,
      bedAvailability: 8,
      averageLengthOfStay: 4.6, // days
      patientSatisfaction: 89.7,
      lastUpdate: Date.now() - 8 * 60 * 1000,
      metrics: {
        admissions: 8,
        discharges: 12,
        transfers: 3,
        readmissions: 2
      },
      equipment: {
        monitors: { total: 40, available: 8, maintenance: 2 },
        oxygenPorts: { total: 40, available: 8, maintenance: 0 },
        wheelchairs: { total: 12, available: 4, maintenance: 1 }
      }
    },
    {
      id: 'dept_004',
      name: 'Surgical Floor',
      type: 'Surgery',
      status: 'NORMAL',
      capacity: 30,
      currentPatients: 22,
      occupancyRate: 73.3,
      staffOnDuty: 14,
      staffRequired: 16,
      averageWaitTime: 20,
      patientsWaiting: 1,
      bedAvailability: 8,
      averageLengthOfStay: 3.2,
      patientSatisfaction: 91.4,
      lastUpdate: Date.now() - 6 * 60 * 1000,
      metrics: {
        admissions: 6,
        discharges: 9,
        transfers: 2,
        surgeries: 8
      },
      equipment: {
        monitors: { total: 30, available: 8, maintenance: 1 },
        pumpsPCA: { total: 15, available: 7, inUse: 8 },
        mobilityAids: { total: 20, available: 8, maintenance: 2 }
      }
    },
    {
      id: 'dept_005',
      name: 'Labor & Delivery',
      type: 'Maternity',
      status: 'ACTIVE',
      capacity: 12,
      currentPatients: 8,
      occupancyRate: 66.7,
      staffOnDuty: 6,
      staffRequired: 8,
      averageWaitTime: 5,
      patientsWaiting: 0,
      bedAvailability: 4,
      averageLengthOfStay: 2.1,
      patientSatisfaction: 94.8,
      lastUpdate: Date.now() - 4 * 60 * 1000,
      metrics: {
        births: 3,
        admissions: 5,
        discharges: 4,
        cesareans: 1
      },
      equipment: {
        fetalMonitors: { total: 12, available: 4, inUse: 8 },
        deliveryTables: { total: 6, available: 2, inUse: 4 },
        infantWarmers: { total: 8, available: 3, inUse: 5 }
      }
    }
  ]);

  const [staff, setStaff] = useState([
    {
      id: 'staff_001',
      name: 'Dr. Michael Chen',
      role: 'Attending Physician',
      department: 'ICU',
      specialty: 'Critical Care Medicine',
      status: 'ON_DUTY',
      shiftStart: Date.now() - 8 * 60 * 60 * 1000,
      shiftEnd: Date.now() + 4 * 60 * 60 * 1000,
      patientsAssigned: 4,
      currentLocation: 'ICU-204',
      licensure: 'MD, Board Certified',
      yearsExperience: 12,
      patientLoad: 'HIGH',
      alerts: ['Patient in room 204 needs assessment'],
      lastUpdate: Date.now() - 10 * 60 * 1000,
      certifications: ['ACLS', 'PALS', 'Critical Care Board Certification'],
      contactInfo: 'Pager: 4527, Mobile: Available'
    },
    {
      id: 'staff_002',
      name: 'Jennifer Martinez, RN',
      role: 'Registered Nurse',
      department: 'ICU',
      specialty: 'Critical Care Nursing',
      status: 'ON_DUTY',
      shiftStart: Date.now() - 6 * 60 * 60 * 1000,
      shiftEnd: Date.now() + 6 * 60 * 60 * 1000,
      patientsAssigned: 2,
      currentLocation: 'ICU Nurses Station',
      licensure: 'RN, BSN',
      yearsExperience: 8,
      patientLoad: 'NORMAL',
      alerts: [],
      lastUpdate: Date.now() - 5 * 60 * 1000,
      certifications: ['BLS', 'ACLS', 'CCRN'],
      contactInfo: 'Extension: 2847'
    },
    {
      id: 'staff_003',
      name: 'Dr. Lisa Park',
      role: 'Emergency Physician',
      department: 'Emergency Department',
      specialty: 'Emergency Medicine',
      status: 'ON_DUTY',
      shiftStart: Date.now() - 10 * 60 * 60 * 1000,
      shiftEnd: Date.now() + 2 * 60 * 60 * 1000,
      patientsAssigned: 6,
      currentLocation: 'ED-12',
      licensure: 'MD, Board Certified',
      yearsExperience: 15,
      patientLoad: 'CRITICAL',
      alerts: ['Multiple high-acuity patients', 'Overtime approaching'],
      lastUpdate: Date.now() - 3 * 60 * 1000,
      certifications: ['ATLS', 'ACLS', 'PALS', 'Emergency Medicine Board Certification'],
      contactInfo: 'Code Phone: 911-ED, Pager: 5523'
    },
    {
      id: 'staff_004',
      name: 'Robert Kim, RN',
      role: 'Charge Nurse',
      department: 'Emergency Department',
      specialty: 'Emergency Nursing',
      status: 'ON_DUTY',
      shiftStart: Date.now() - 9 * 60 * 60 * 1000,
      shiftEnd: Date.now() + 3 * 60 * 60 * 1000,
      patientsAssigned: 0,
      currentLocation: 'ED Charge Station',
      licensure: 'RN, MSN',
      yearsExperience: 11,
      patientLoad: 'ADMIN',
      alerts: ['Department at capacity', 'Staffing shortage'],
      lastUpdate: Date.now() - 7 * 60 * 1000,
      certifications: ['BLS', 'ACLS', 'CEN', 'Trauma Nursing Core Course'],
      contactInfo: 'Extension: 3001, Mobile: On Call'
    },
    {
      id: 'staff_005',
      name: 'Dr. Amanda Wilson',
      role: 'OB/GYN Physician',
      department: 'Labor & Delivery',
      specialty: 'Obstetrics & Gynecology',
      status: 'ON_CALL',
      shiftStart: Date.now() - 2 * 60 * 60 * 1000,
      shiftEnd: Date.now() + 22 * 60 * 60 * 1000,
      patientsAssigned: 3,
      currentLocation: 'L&D-8',
      licensure: 'MD, Board Certified',
      yearsExperience: 9,
      patientLoad: 'MODERATE',
      alerts: ['Patient in active labor'],
      lastUpdate: Date.now() - 2 * 60 * 1000,
      certifications: ['OB/GYN Board Certification', 'NRP', 'ALSO'],
      contactInfo: 'OB Phone: 1-OB-CALL'
    }
  ]);

  const [equipment, setEquipment] = useState([
    {
      id: 'equip_001',
      name: 'MRI Machine - Main',
      type: 'Imaging Equipment',
      department: 'Radiology',
      status: 'IN_USE',
      location: 'Radiology Suite 1',
      manufacturer: 'Siemens',
      model: 'MAGNETOM Prisma 3T',
      serialNumber: 'SN-2024-MRI-001',
      nextMaintenance: Date.now() + 15 * 24 * 60 * 60 * 1000,
      lastMaintenance: Date.now() - 30 * 24 * 60 * 60 * 1000,
      utilizationRate: 87.5, // percentage
      currentPatient: 'MRN-2026-04592',
      estimatedCompletion: Date.now() + 45 * 60 * 1000,
      queue: 3,
      operatingHours: 16, // hours per day
      costPerUse: 485, // USD
      lastUpdate: Date.now() - 12 * 60 * 1000,
      technician: 'Sarah Kim, RT',
      alerts: []
    },
    {
      id: 'equip_002',
      name: 'CT Scanner - Emergency',
      type: 'Imaging Equipment',
      department: 'Emergency Radiology',
      status: 'AVAILABLE',
      location: 'ED Imaging',
      manufacturer: 'GE Healthcare',
      model: 'Revolution CT',
      serialNumber: 'GE-2023-CT-005',
      nextMaintenance: Date.now() + 7 * 24 * 60 * 60 * 1000,
      lastMaintenance: Date.now() - 23 * 24 * 60 * 60 * 1000,
      utilizationRate: 92.3,
      currentPatient: null,
      estimatedCompletion: null,
      queue: 1,
      operatingHours: 24,
      costPerUse: 245,
      lastUpdate: Date.now() - 8 * 60 * 1000,
      technician: 'Mike Rodriguez, RT',
      alerts: ['High utilization - maintenance due soon']
    },
    {
      id: 'equip_003',
      name: 'Ventilator Bank - ICU',
      type: 'Life Support',
      department: 'ICU',
      status: 'OPERATIONAL',
      location: 'ICU Central Supply',
      manufacturer: 'Medtronic',
      model: 'PB980 Ventilator',
      serialNumber: 'MDT-VNT-15-20',
      nextMaintenance: Date.now() + 45 * 24 * 60 * 60 * 1000,
      lastMaintenance: Date.now() - 15 * 24 * 60 * 60 * 1000,
      utilizationRate: 78.9,
      unitsTotal: 12,
      unitsAvailable: 3,
      unitsInUse: 9,
      averageUsageTime: 3.2, // days
      criticalAlerts: 0,
      lastUpdate: Date.now() - 5 * 60 * 1000,
      technician: 'Respiratory Therapy Team',
      alerts: ['2 units due for calibration']
    },
    {
      id: 'equip_004',
      name: 'OR Suite 3 - Robotic System',
      type: 'Surgical Equipment',
      department: 'Operating Room',
      status: 'SURGERY_IN_PROGRESS',
      location: 'OR-3',
      manufacturer: 'Intuitive Surgical',
      model: 'da Vinci Xi',
      serialNumber: 'IS-DVX-2024-003',
      nextMaintenance: Date.now() + 60 * 24 * 60 * 60 * 1000,
      lastMaintenance: Date.now() - 5 * 24 * 60 * 60 * 1000,
      utilizationRate: 65.4,
      currentProcedure: 'Laparoscopic Cholecystectomy',
      surgeonInCharge: 'Dr. James Miller',
      estimatedCompletion: Date.now() + 90 * 60 * 1000,
      proceduresTotal: 1247,
      averageProcedureTime: 185, // minutes
      lastUpdate: Date.now() - 18 * 60 * 1000,
      alerts: []
    },
    {
      id: 'equip_005',
      name: 'Pharmacy Automation',
      type: 'Automation System',
      department: 'Pharmacy',
      status: 'OPERATIONAL',
      location: 'Central Pharmacy',
      manufacturer: 'Omnicell',
      model: 'XT Series',
      serialNumber: 'OM-XT-2023-007',
      nextMaintenance: Date.now() + 90 * 24 * 60 * 60 * 1000,
      lastMaintenance: Date.now() - 10 * 24 * 60 * 60 * 1000,
      utilizationRate: 94.7,
      dispensationsToday: 2847,
      errorRate: 0.02, // percentage
      inventory: {
        totalMedications: 1250,
        lowStock: 23,
        outOfStock: 2,
            expiringSoon: 15
      },
      averageDispenseTime: 2.3, // minutes
      lastUpdate: Date.now() - 6 * 60 * 1000,
      pharmacist: 'Dr. Patricia Chang, PharmD',
      alerts: ['2 medications out of stock', '15 medications expiring within 30 days']
    }
  ]);

  const [hospitalAlerts, setHospitalAlerts] = useState([
    {
      id: 'alert_001',
      timestamp: Date.now() - 25 * 60 * 1000,
      severity: 'CRITICAL',
      type: 'CODE_BLUE',
      location: 'Medical Floor Room 315',
      patient: 'Robert Thompson (MRN-2026-04590)',
      description: 'Patient experiencing respiratory distress',
      responseTeam: ['Dr. Kevin Singh', 'Patricia Brown RN', 'Respiratory Therapist'],
      status: 'RESPONDING',
      estimatedResponse: '2 minutes',
      vitalsSnapshot: 'HR: 110, BP: 90/60, O2Sat: 88%',
      actionsTaken: ['Oxygen increased to 6L', 'IV access established', 'Chest X-ray ordered']
    },
    {
      id: 'alert_002',
      timestamp: Date.now() - 45 * 60 * 1000,
      severity: 'HIGH',
      type: 'CAPACITY_ALERT',
      location: 'ICU',
      patient: null,
      description: 'ICU at 100% capacity with 2 patients pending admission from ED',
      responseTeam: ['Charge Nurse', 'Bed Management', 'Administration'],
      status: 'ESCALATED',
      estimatedResponse: 'Ongoing',
      actionsTaken: ['Discharge planning accelerated', 'Transfer to partner facility arranged'],
      impact: 'Emergency surgeries may be delayed'
    },
    {
      id: 'alert_003',
      timestamp: Date.now() - 1 * 60 * 60 * 1000,
      severity: 'MEDIUM',
      type: 'STAFFING_SHORTAGE',
      location: 'Emergency Department',
      patient: null,
      description: 'Night shift nursing staff below minimum safe levels',
      responseTeam: ['Nursing Supervisor', 'HR', 'Administration'],
      status: 'IN_PROGRESS',
      estimatedResponse: '4 hours',
      actionsTaken: ['Float nurses called in', 'Per diem staff contacted', 'Registry agency contacted'],
      impact: 'Increased patient wait times possible'
    },
    {
      id: 'alert_004',
      timestamp: Date.now() - 2 * 60 * 60 * 1000,
      severity: 'LOW',
      type: 'EQUIPMENT_MAINTENANCE',
      location: 'Radiology CT Scanner',
      patient: null,
      description: 'CT Scanner showing minor calibration drift - maintenance recommended',
      responseTeam: ['Biomedical Engineering', 'Radiology Manager'],
      status: 'SCHEDULED',
      estimatedResponse: 'Next maintenance window',
      actionsTaken: ['Backup CT scanner on standby', 'Maintenance scheduled for 3 AM'],
      impact: 'No immediate impact on patient care'
    }
  ]);

  const [performanceTrends, setPerformanceTrends] = useState([]);
  const [qualityMetrics, setQualityMetrics] = useState([]);

  const generatePerformanceTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        admissions: Math.floor(Math.random() * 20) + 30, // 30-50 admissions
        discharges: Math.floor(Math.random() * 15) + 25, // 25-40 discharges
        bedOccupancy: Math.floor(Math.random() * 20) + 70, // 70-90%
        staffUtilization: Math.floor(Math.random() * 15) + 80, // 80-95%
        patientSatisfaction: Math.floor(Math.random() * 10) + 85, // 85-95%
        emergencyWaitTime: Math.floor(Math.random() * 30) + 30, // 30-60 minutes
        costPerPatient: Math.floor(Math.random() * 500) + 2500 // $2500-3000
      });
    }
    return data;
  };

  const generateQualityMetrics = () => {
    return [
      { metric: 'Patient Satisfaction', current: 89.7, target: 90.0, trend: 'IMPROVING' },
      { metric: 'Length of Stay', current: 4.2, target: 4.0, trend: 'STABLE' },
      { metric: 'Readmission Rate', current: 8.3, target: 7.5, trend: 'DECLINING' },
      { metric: 'Hospital Acquired Infections', current: 1.2, target: 1.0, trend: 'STABLE' },
      { metric: 'Medication Error Rate', current: 0.15, target: 0.10, trend: 'IMPROVING' },
      { metric: 'Staff Turnover', current: 12.4, target: 10.0, trend: 'IMPROVING' }
    ];
  };

  useEffect(() => {
    setPerformanceTrends(generatePerformanceTrends());
    setQualityMetrics(generateQualityMetrics());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update patient vitals
      setPatients(prev => prev.map(patient => ({
        ...patient,
        vitals: {
          ...patient.vitals,
          heartRate: Math.max(50, Math.min(150, patient.vitals.heartRate + (Math.random() - 0.5) * 10)),
          bloodPressure: {
            systolic: Math.max(80, Math.min(200, patient.vitals.bloodPressure.systolic + (Math.random() - 0.5) * 8)),
            diastolic: Math.max(50, Math.min(120, patient.vitals.bloodPressure.diastolic + (Math.random() - 0.5) * 6))
          },
          temperature: Math.max(35.0, Math.min(41.0, patient.vitals.temperature + (Math.random() - 0.5) * 0.5)),
          respiratoryRate: Math.max(8, Math.min(30, patient.vitals.respiratoryRate + (Math.random() - 0.5) * 3)),
          oxygenSaturation: Math.max(85, Math.min(100, patient.vitals.oxygenSaturation + (Math.random() - 0.5) * 3)),
          painLevel: Math.max(0, Math.min(10, patient.vitals.painLevel + (Math.random() - 0.5) * 2))
        },
        lastUpdate: Date.now()
      })));

      // Update departments
      setDepartments(prev => prev.map(dept => {
        const patientChange = Math.floor((Math.random() - 0.5) * 4);
        const newPatients = Math.max(0, Math.min(dept.capacity, dept.currentPatients + patientChange));
        const newOccupancy = (newPatients / dept.capacity) * 100;
        
        let newStatus = 'NORMAL';
        if (newOccupancy >= 95) newStatus = 'FULL';
        else if (newOccupancy >= 85) newStatus = 'BUSY';
        else if (dept.name === 'Labor & Delivery' && newPatients > dept.capacity * 0.5) newStatus = 'ACTIVE';
        
        return {
          ...dept,
          currentPatients: newPatients,
          occupancyRate: newOccupancy,
          status: newStatus,
          bedAvailability: dept.capacity - newPatients,
          averageWaitTime: Math.max(0, Math.min(120, dept.averageWaitTime + (Math.random() - 0.5) * 10)),
          metrics: {
            ...dept.metrics,
            admissions: Math.max(0, dept.metrics.admissions + Math.floor((Math.random() - 0.3) * 3)),
            discharges: Math.max(0, dept.metrics.discharges + Math.floor((Math.random() - 0.3) * 3))
          },
          lastUpdate: Date.now()
        };
      }));

      // Update equipment
      setEquipment(prev => prev.map(equip => {
        let newUtilization = equip.utilizationRate;
        if (equip.status === 'IN_USE' || equip.status === 'OPERATIONAL') {
          newUtilization = Math.max(60, Math.min(98, equip.utilizationRate + (Math.random() - 0.5) * 5));
        }

        return {
          ...equip,
          utilizationRate: newUtilization,
          queue: equip.queue ? Math.max(0, equip.queue + Math.floor((Math.random() - 0.6) * 2)) : undefined,
          dispensationsToday: equip.dispensationsToday ? equip.dispensationsToday + Math.floor(Math.random() * 5) : undefined,
          lastUpdate: Date.now()
        };
      }));

      // Occasionally generate new alerts
      if (Math.random() > 0.98) {
        const alertTypes = ['MEDICATION_ALLERGY', 'FALL_RISK', 'ISOLATION_PRECAUTION', 'DISCHARGE_PLANNING'];
        const severities = ['LOW', 'MEDIUM', 'HIGH'];
        const locations = ['ICU', 'Emergency Department', 'Medical Floor', 'Surgical Floor'];
        
        const newAlert = {
          id: `alert_${Date.now()}`,
          timestamp: Date.now(),
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          location: locations[Math.floor(Math.random() * locations.length)],
          patient: 'Anonymous Patient',
          description: 'Automated healthcare monitoring alert',
          responseTeam: ['Nursing Staff'],
          status: 'NEW',
          estimatedResponse: '15 minutes',
          actionsTaken: ['Assessment in progress']
        };
        
        setHospitalAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }

    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MODERATE':
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'STABLE':
      case 'LOW': return 'text-green-400 bg-green-400/20 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getDepartmentStatusColor = (status) => {
    switch (status) {
      case 'NORMAL': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'BUSY': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'FULL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getEquipmentStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL':
      case 'AVAILABLE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'IN_USE':
      case 'SURGERY_IN_PROGRESS': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'OUT_OF_ORDER': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getStaffStatusColor = (status) => {
    switch (status) {
      case 'ON_DUTY': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'ON_CALL': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'BREAK': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'OFF_DUTY': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getVitalColor = (type, value) => {
    switch (type) {
      case 'heartRate':
        if (value < 60 || value > 100) return 'text-red-400';
        if (value < 70 || value > 90) return 'text-yellow-400';
        return 'text-green-400';
      case 'bloodPressure':
        if (value.systolic > 140 || value.diastolic > 90) return 'text-red-400';
        if (value.systolic > 130 || value.diastolic > 85) return 'text-yellow-400';
        return 'text-green-400';
      case 'temperature':
        if (value > 38.5 || value < 36.0) return 'text-red-400';
        if (value > 37.5 || value < 36.5) return 'text-yellow-400';
        return 'text-green-400';
      case 'oxygenSaturation':
        if (value < 90) return 'text-red-400';
        if (value < 95) return 'text-yellow-400';
        return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatDuration = (milliseconds) => {
    const hours = Math.floor(milliseconds / (60 * 60 * 1000));
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days}d ${hours % 24}h`;
    return `${hours}h`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🏥 HEALTHCARE OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {patients.filter(p => p.severity === 'STABLE').length}/{patients.length} Stable
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {Math.floor(departments.reduce((sum, d) => sum + d.occupancyRate, 0) / departments.length)}% Occupancy
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Bold BI Hospital Command Center
          </div>
        </div>
      </div>

      {/* Healthcare Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">TOTAL PATIENTS</div>
              <div className="text-2xl font-bold text-green-100">
                {departments.reduce((sum, d) => sum + d.currentPatients, 0)}
              </div>
              <div className="text-xs text-green-300">
                Critical: {patients.filter(p => p.severity === 'CRITICAL').length} | High: {patients.filter(p => p.severity === 'HIGH').length}
              </div>
            </div>
            <div className="text-3xl opacity-60">👥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">BED OCCUPANCY</div>
              <div className="text-2xl font-bold text-blue-100">
                {Math.floor(departments.reduce((sum, d) => sum + d.occupancyRate, 0) / departments.length)}%
              </div>
              <div className="text-xs text-blue-300">
                Available: {departments.reduce((sum, d) => sum + d.bedAvailability, 0)} beds
              </div>
            </div>
            <div className="text-3xl opacity-60">🛏️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">STAFF ON DUTY</div>
              <div className="text-2xl font-bold text-purple-100">
                {departments.reduce((sum, d) => sum + d.staffOnDuty, 0)}
              </div>
              <div className="text-xs text-purple-300">
                Required: {departments.reduce((sum, d) => sum + d.staffRequired, 0)}
              </div>
            </div>
            <div className="text-3xl opacity-60">👩‍⚕️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">ACTIVE ALERTS</div>
              <div className="text-2xl font-bold text-orange-100">
                {hospitalAlerts.filter(a => a.severity === 'CRITICAL' || a.severity === 'HIGH').length}
              </div>
              <div className="text-xs text-orange-300">
                Total: {hospitalAlerts.length} alerts
              </div>
            </div>
            <div className="text-3xl opacity-60">🚨</div>
          </div>
        </div>
      </div>

      {/* Patients and Departments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient Monitoring */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🩺 PATIENT MONITORING
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {patients.map((patient) => (
              <div key={patient.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(patient.severity)}`}>
                      {patient.severity}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {patient.room}
                    </span>
                    {patient.alerts && patient.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                        {patient.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(patient.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{patient.name}</div>
                <div className="text-xs text-purple-400 mb-1">MRN: {patient.mrn} | Age: {patient.age} | {patient.gender}</div>
                <div className="text-xs text-cyan-400 mb-3">{patient.condition} | {patient.department}</div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Heart Rate</div>
                    <div className={getVitalColor('heartRate', patient.vitals.heartRate)}>
                      {patient.vitals.heartRate} bpm
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Blood Pressure</div>
                    <div className={getVitalColor('bloodPressure', patient.vitals.bloodPressure)}>
                      {patient.vitals.bloodPressure.systolic}/{patient.vitals.bloodPressure.diastolic}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Temperature</div>
                    <div className={getVitalColor('temperature', patient.vitals.temperature)}>
                      {patient.vitals.temperature.toFixed(1)}°C
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Resp Rate</div>
                    <div className="text-blue-400">{patient.vitals.respiratoryRate}/min</div>
                  </div>
                  <div>
                    <div className="text-gray-400">O₂ Saturation</div>
                    <div className={getVitalColor('oxygenSaturation', patient.vitals.oxygenSaturation)}>
                      {patient.vitals.oxygenSaturation}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Pain Level</div>
                    <div className={patient.vitals.painLevel > 7 ? 'text-red-400' : patient.vitals.painLevel > 4 ? 'text-yellow-400' : 'text-green-400'}>
                      {patient.vitals.painLevel}/10
                    </div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Attending: </span>
                  <span className="text-green-400">{patient.attendingPhysician}</span>
                  <span className="text-gray-400"> | Nurse: </span>
                  <span className="text-blue-400">{patient.primaryNurse}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Admission: </span>
                  <span className="text-yellow-400">{formatDuration(Date.now() - patient.admissionDate)} ago</span>
                  {patient.expectedDischarge && (
                    <>
                      <span className="text-gray-400"> | D/C Expected: </span>
                      <span className="text-indigo-400">{formatDuration(patient.expectedDischarge - Date.now())}</span>
                    </>
                  )}
                </div>

                {patient.allergies && (
                  <div className="text-xs mb-1">
                    <span className="text-gray-400">Allergies: </span>
                    <span className="text-red-400">{patient.allergies.join(', ')}</span>
                  </div>
                )}

                {patient.fetal && (
                  <div className="text-xs mb-1">
                    <span className="text-gray-400">Fetal HR: </span>
                    <span className="text-pink-400">{patient.fetal.heartRate} bpm</span>
                    <span className="text-gray-400"> | Contractions: </span>
                    <span className="text-purple-400">{patient.fetal.contractions}</span>
                    <span className="text-gray-400"> | Dilation: </span>
                    <span className="text-cyan-400">{patient.fetal.cervicalDilation}</span>
                  </div>
                )}

                {patient.alerts && patient.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Active Alerts:</div>
                    {patient.alerts.map((alert, index) => (
                      <div key={index} className="text-red-400">• {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Department Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏥 DEPARTMENT STATUS
          </h3>
          <div className="space-y-3">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getDepartmentStatusColor(dept.status)}`}>
                      {dept.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {dept.type}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(dept.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{dept.name}</div>
                <div className="text-xs text-cyan-400 mb-3">{dept.type}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Occupancy</div>
                    <div className={dept.occupancyRate > 90 ? 'text-red-400' : dept.occupancyRate > 75 ? 'text-yellow-400' : 'text-green-400'}>
                      {dept.currentPatients}/{dept.capacity} ({dept.occupancyRate.toFixed(1)}%)
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Available Beds</div>
                    <div className="text-blue-400">{dept.bedAvailability}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Wait Time</div>
                    <div className={dept.averageWaitTime > 60 ? 'text-red-400' : dept.averageWaitTime > 30 ? 'text-yellow-400' : 'text-green-400'}>
                      {dept.averageWaitTime} min
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Staff</div>
                    <div className={dept.staffOnDuty < dept.staffRequired ? 'text-red-400' : 'text-green-400'}>
                      {dept.staffOnDuty}/{dept.staffRequired}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Satisfaction</div>
                    <div className="text-purple-400">{dept.patientSatisfaction.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Avg LOS</div>
                    <div className="text-orange-400">{dept.averageLengthOfStay.toFixed(1)}d</div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Today: </span>
                  <span className="text-green-400">Admissions {dept.metrics.admissions}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">Discharges {dept.metrics.discharges}</span>
                  {dept.metrics.transfers > 0 && (
                    <>
                      <span className="text-gray-400"> | </span>
                      <span className="text-yellow-400">Transfers {dept.metrics.transfers}</span>
                    </>
                  )}
                </div>

                {/* Equipment summary */}
                {dept.equipment && (
                  <div className="text-xs">
                    <div className="text-gray-400">Equipment Status:</div>
                    <div className="grid grid-cols-3 gap-1">
                      {Object.entries(dept.equipment).map(([type, equip]) => (
                        <div key={type} className="text-center">
                          <div className="text-gray-300">{type}</div>
                          <div className="text-indigo-400">
                            {equip.available !== undefined ? `${equip.available}/${equip.total}` : `${equip.inUse}/${equip.total}`}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Staff and Equipment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Staff Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👩‍⚕️ STAFF MANAGEMENT
          </h3>
          <div className="space-y-3">
            {staff.map((member) => (
              <div key={member.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStaffStatusColor(member.status)}`}>
                      {member.status.replace('_', ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {member.role}
                    </span>
                    {member.patientLoad === 'CRITICAL' && (
                      <span className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                        HIGH LOAD
                      </span>
                    )}
                    {member.alerts && member.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {member.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(member.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{member.name}</div>
                <div className="text-xs text-purple-400 mb-2">{member.department} | {member.specialty}</div>
                <div className="text-xs text-cyan-400 mb-3">📍 {member.currentLocation}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Patients</div>
                    <div className="text-blue-400">{member.patientsAssigned}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Experience</div>
                    <div className="text-green-400">{member.yearsExperience}y</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Shift</div>
                    <div className="text-yellow-400">
                      {Math.floor((Date.now() - member.shiftStart) / (60 * 60 * 1000))}h/{Math.floor((member.shiftEnd - member.shiftStart) / (60 * 60 * 1000))}h
                    </div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">License: </span>
                  <span className="text-indigo-400">{member.licensure}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Certifications: </span>
                  <span className="text-pink-400">{member.certifications.join(', ')}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Contact: </span>
                  <span className="text-cyan-400">{member.contactInfo}</span>
                </div>

                {member.alerts && member.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {member.alerts.map((alert, index) => (
                      <div key={index} className="text-red-400">• {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔧 EQUIPMENT MANAGEMENT
          </h3>
          <div className="space-y-3">
            {equipment.map((equip) => (
              <div key={equip.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getEquipmentStatusColor(equip.status)}`}>
                      {equip.status.replace('_', ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {equip.type}
                    </span>
                    {equip.alerts && equip.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {equip.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(equip.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{equip.name}</div>
                <div className="text-xs text-purple-400 mb-2">{equip.department} | {equip.location}</div>
                <div className="text-xs text-cyan-400 mb-3">{equip.manufacturer} {equip.model}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Utilization</div>
                    <div className={equip.utilizationRate > 90 ? 'text-red-400' : equip.utilizationRate > 75 ? 'text-yellow-400' : 'text-green-400'}>
                      {equip.utilizationRate.toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Queue</div>
                    <div className="text-blue-400">{equip.queue || 0}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Next Maintenance</div>
                    <div className="text-orange-400">{formatDuration(equip.nextMaintenance - Date.now())}</div>
                  </div>
                </div>

                {equip.currentPatient && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Current Patient: </span>
                    <span className="text-green-400">{equip.currentPatient}</span>
                    {equip.estimatedCompletion && (
                      <>
                        <span className="text-gray-400"> | ETA: </span>
                        <span className="text-yellow-400">{formatDuration(equip.estimatedCompletion - Date.now())}</span>
                      </>
                    )}
                  </div>
                )}

                {equip.currentProcedure && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Procedure: </span>
                    <span className="text-indigo-400">{equip.currentProcedure}</span>
                    <span className="text-gray-400"> | Surgeon: </span>
                    <span className="text-pink-400">{equip.surgeonInCharge}</span>
                  </div>
                )}

                {equip.unitsTotal && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Units: </span>
                    <span className="text-blue-400">{equip.unitsInUse}/{equip.unitsTotal} in use</span>
                    <span className="text-gray-400"> | Available: </span>
                    <span className="text-green-400">{equip.unitsAvailable}</span>
                  </div>
                )}

                {equip.dispensationsToday && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Today: </span>
                    <span className="text-cyan-400">{equip.dispensationsToday} dispensations</span>
                    <span className="text-gray-400"> | Error Rate: </span>
                    <span className="text-green-400">{equip.errorRate}%</span>
                  </div>
                )}

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Serial: </span>
                  <span className="text-gray-300">{equip.serialNumber}</span>
                  <span className="text-gray-400"> | Tech: </span>
                  <span className="text-yellow-400">{equip.technician}</span>
                </div>

                {equip.alerts && equip.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {equip.alerts.map((alert, index) => (
                      <div key={index} className="text-red-400">• {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hospital Alerts and Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hospital Alerts */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 HOSPITAL ALERTS & INCIDENTS
          </h3>
          
          {hospitalAlerts.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-green-400 text-lg mb-2">✅</div>
              <div className="text-green-400 font-bold">NO ACTIVE ALERTS</div>
              <div className="text-gray-400 text-sm mt-2">All hospital operations normal</div>
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {hospitalAlerts.map((alert) => (
                <div key={alert.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                        {alert.type.replace(/_/g, ' ')}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        alert.status === 'RESPONDING' ? 'bg-red-500 text-white' :
                        alert.status === 'ESCALATED' ? 'bg-orange-500 text-white' :
                        alert.status === 'IN_PROGRESS' ? 'bg-blue-500 text-white' :
                        alert.status === 'SCHEDULED' ? 'bg-green-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {alert.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {formatTime(alert.timestamp)}
                    </div>
                  </div>
                  
                  <div className="text-sm text-white mb-2">{alert.description}</div>
                  <div className="text-xs text-cyan-400 mb-1">📍 {alert.location}</div>
                  {alert.patient && (
                    <div className="text-xs text-purple-400 mb-1">👤 {alert.patient}</div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                    <div>
                      <div className="text-gray-400">Response Team</div>
                      <div className="text-green-400">{alert.responseTeam.join(', ')}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">ETA</div>
                      <div className="text-yellow-400">{alert.estimatedResponse}</div>
                    </div>
                  </div>

                  {alert.vitalsSnapshot && (
                    <div className="text-xs mb-2">
                      <span className="text-gray-400">Vitals: </span>
                      <span className="text-red-400">{alert.vitalsSnapshot}</span>
                    </div>
                  )}

                  <div className="text-xs mb-2">
                    <div className="text-gray-400">Actions Taken:</div>
                    {alert.actionsTaken.map((action, index) => (
                      <div key={index} className="text-blue-400">• {action}</div>
                    ))}
                  </div>

                  {alert.impact && (
                    <div className="text-xs">
                      <span className="text-gray-400">Impact: </span>
                      <span className="text-orange-400">{alert.impact}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Performance Analytics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 HOSPITAL PERFORMANCE (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceTrends}>
              <defs>
                <linearGradient id="admissionsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="dischargesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={12}/>
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
              <Area 
                type="monotone" 
                dataKey="admissions" 
                stroke="#3B82F6" 
                fill="url(#admissionsGradient)" 
                name="Admissions"
              />
              <Area 
                type="monotone" 
                dataKey="discharges" 
                stroke="#10B981" 
                fill="url(#dischargesGradient)" 
                name="Discharges"
              />
              <Line 
                type="monotone" 
                dataKey="bedOccupancy" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Bed Occupancy %"
              />
              <Line 
                type="monotone" 
                dataKey="patientSatisfaction" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Patient Satisfaction %"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quality Metrics */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📊 QUALITY METRICS & HOSPITAL KPIs
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quality Indicators */}
          <div>
            <h4 className="text-sm font-bold text-white mb-2">Quality Indicators</h4>
            <div className="space-y-2">
              {qualityMetrics.map((metric, index) => (
                <div key={index} className="bg-gray-700 rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white">{metric.metric}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400">Current:</span>
                      <span className={`text-sm font-bold ${
                        metric.trend === 'IMPROVING' ? 'text-green-400' :
                        metric.trend === 'DECLINING' ? 'text-red-400' :
                        'text-yellow-400'
                      }`}>
                        {metric.current}
                        {metric.metric.includes('Rate') || metric.metric.includes('Satisfaction') || metric.metric.includes('Turnover') ? '%' : 
                         metric.metric.includes('Stay') ? ' days' : ''}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-3 mb-2">
                    <div 
                      className={`h-3 rounded-full ${
                        metric.current <= metric.target ? 'bg-green-400' : 'bg-yellow-400'
                      }`}
                      style={{ width: `${Math.min(100, (metric.current / metric.target) * 100)}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Target: </span>
                      <span className="text-blue-400">{metric.target}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Trend: </span>
                      <span className={`${
                        metric.trend === 'IMPROVING' ? 'text-green-400' :
                        metric.trend === 'DECLINING' ? 'text-red-400' :
                        'text-yellow-400'
                      }`}>{metric.trend}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Gap: </span>
                      <span className="text-purple-400">{Math.abs(metric.current - metric.target).toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hospital KPIs */}
          <div>
            <h4 className="text-sm font-bold text-white mb-2">Hospital KPIs</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-gray-700 rounded p-2">
                <div className="text-gray-400">Daily Census</div>
                <div className="text-white font-bold text-lg">{departments.reduce((sum, d) => sum + d.currentPatients, 0)}</div>
                <div className="text-green-400">vs capacity {departments.reduce((sum, d) => sum + d.capacity, 0)}</div>
              </div>
              <div className="bg-gray-700 rounded p-2">
                <div className="text-gray-400">ED Wait Time</div>
                <div className="text-white font-bold text-lg">{departments.find(d => d.name === 'Emergency Department')?.averageWaitTime || 0} min</div>
                <div className="text-yellow-400">Target: &lt;30 min</div>
              </div>
              <div className="bg-gray-700 rounded p-2">
                <div className="text-gray-400">OR Utilization</div>
                <div className="text-white font-bold text-lg">87.3%</div>
                <div className="text-blue-400">8 active suites</div>
              </div>
              <div className="bg-gray-700 rounded p-2">
                <div className="text-gray-400">Revenue/Day</div>
                <div className="text-white font-bold text-lg">$2.8M</div>
                <div className="text-green-400">↑ 5.2% vs LY</div>
              </div>
              <div className="bg-gray-700 rounded p-2">
                <div className="text-gray-400">Staff Coverage</div>
                <div className="text-white font-bold text-lg">{Math.floor((departments.reduce((sum, d) => sum + d.staffOnDuty, 0) / departments.reduce((sum, d) => sum + d.staffRequired, 0)) * 100)}%</div>
                <div className="text-orange-400">3 open positions</div>
              </div>
              <div className="bg-gray-700 rounded p-2">
                <div className="text-gray-400">Equipment Uptime</div>
                <div className="text-white font-bold text-lg">96.8%</div>
                <div className="text-purple-400">2 under maintenance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareOperations;