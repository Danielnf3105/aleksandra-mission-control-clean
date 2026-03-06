// ConstructionOperations.js - Construction Operations Control Center & Project Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const ConstructionOperations = () => {
  const [activeProjects, setActiveProjects] = useState([
    {
      id: 'proj_001',
      name: 'Downtown Office Complex',
      type: 'COMMERCIAL',
      client: 'Metro Development Corp',
      contractor: 'BuildTech Construction',
      projectManager: 'Sarah Chen',
      location: 'Downtown Financial District',
      status: 'IN_PROGRESS',
      phase: 'CONSTRUCTION',
      startDate: '2025-06-15',
      plannedCompletion: '2026-08-30',
      actualProgress: 67.8, // percentage
      budget: {
        total: 45000000, // $45M
        spent: 28350000, // $28.35M
        remaining: 16650000, // $16.65M
        variance: -350000, // $350K over budget
        cpi: 0.985, // Cost Performance Index
        spi: 1.023 // Schedule Performance Index
      },
      schedule: {
        totalDays: 441,
        daysElapsed: 264,
        daysRemaining: 177,
        percentageComplete: 67.8,
        criticalPath: 'Foundation → Structure → MEP → Finishes',
        delayDays: -7 // 7 days ahead of schedule
      },
      workforce: {
        onSite: 156,
        planned: 160,
        contractors: 89,
        subcontractors: 67,
        supervisors: 12,
        engineers: 8
      },
      safety: {
        daysWithoutIncident: 34,
        incidentsYTD: 3,
        nearMisses: 12,
        safetyScore: 92.4,
        lastIncident: '2026-01-28',
        inspections: 8 // this month
      },
      materials: {
        deliveredOnTime: 87.3, // percentage
        wastage: 3.2, // percentage
        costVariance: 2.1, // percentage over budget
        criticalShortages: 0,
        pendingDeliveries: 5
      },
      quality: {
        inspectionsPassed: 94.7, // percentage
        reworkRequired: 2.1, // percentage
        defects: 8,
        qualityScore: 93.8,
        lastInspection: '2026-03-04'
      },
      weather: {
        currentConditions: 'Clear',
        temperature: 22, // celsius
        windSpeed: 8, // km/h
        precipitation: 0, // mm
        workableHours: 8.0,
        weatherDelay: 0
      },
      alerts: ['Budget variance exceeding 2%', 'Material delivery pending'],
      lastUpdate: Date.now() - 15 * 60 * 1000
    },
    {
      id: 'proj_002',
      name: 'Riverside Residential Complex',
      type: 'RESIDENTIAL',
      client: 'Harmony Living Properties',
      contractor: 'Green Valley Builders',
      projectManager: 'Michael Rodriguez',
      location: 'Riverside District',
      status: 'IN_PROGRESS',
      phase: 'FINISHING',
      startDate: '2025-03-20',
      plannedCompletion: '2026-04-15',
      actualProgress: 89.5,
      budget: {
        total: 28500000, // $28.5M
        spent: 24680000, // $24.68M
        remaining: 3820000, // $3.82M
        variance: 120000, // $120K under budget
        cpi: 1.035,
        spi: 1.078
      },
      schedule: {
        totalDays: 391,
        daysElapsed: 350,
        daysRemaining: 41,
        percentageComplete: 89.5,
        criticalPath: 'Interior Finishes → Landscaping → Final Inspections',
        delayDays: 15 // 15 days behind schedule
      },
      workforce: {
        onSite: 89,
        planned: 95,
        contractors: 45,
        subcontractors: 44,
        supervisors: 8,
        engineers: 4
      },
      safety: {
        daysWithoutIncident: 127,
        incidentsYTD: 1,
        nearMisses: 6,
        safetyScore: 97.2,
        lastIncident: '2025-10-18',
        inspections: 6
      },
      materials: {
        deliveredOnTime: 93.8,
        wastage: 2.1,
        costVariance: -1.8, // 1.8% under budget
        criticalShortages: 0,
        pendingDeliveries: 3
      },
      quality: {
        inspectionsPassed: 97.1,
        reworkRequired: 1.4,
        defects: 3,
        qualityScore: 96.8,
        lastInspection: '2026-03-05'
      },
      weather: {
        currentConditions: 'Partly Cloudy',
        temperature: 19,
        windSpeed: 12,
        precipitation: 2,
        workableHours: 7.5,
        weatherDelay: 0.5
      },
      alerts: ['Excellent safety record', 'On track for completion'],
      lastUpdate: Date.now() - 8 * 60 * 1000
    },
    {
      id: 'proj_003',
      name: 'Highway Bridge Expansion',
      type: 'INFRASTRUCTURE',
      client: 'State Transportation Department',
      contractor: 'Heavy Infrastructure Ltd',
      projectManager: 'David Kim',
      location: 'Interstate 95 - Mile Marker 245',
      status: 'IN_PROGRESS',
      phase: 'STRUCTURAL',
      startDate: '2025-09-10',
      plannedCompletion: '2027-02-28',
      actualProgress: 45.2,
      budget: {
        total: 67500000, // $67.5M
        spent: 28125000, // $28.125M
        remaining: 39375000, // $39.375M
        variance: -1250000, // $1.25M over budget
        cpi: 0.956,
        spi: 0.987
      },
      schedule: {
        totalDays: 537,
        daysElapsed: 176,
        daysRemaining: 361,
        percentageComplete: 45.2,
        criticalPath: 'Foundation Piers → Deck Construction → Approach Work',
        delayDays: 12 // 12 days behind
      },
      workforce: {
        onSite: 234,
        planned: 240,
        contractors: 156,
        subcontractors: 78,
        supervisors: 18,
        engineers: 15
      },
      safety: {
        daysWithoutIncident: 89,
        incidentsYTD: 2,
        nearMisses: 18,
        safetyScore: 89.7,
        lastIncident: '2025-12-15',
        inspections: 12
      },
      materials: {
        deliveredOnTime: 81.4,
        wastage: 4.1,
        costVariance: 5.8, // 5.8% over budget
        criticalShortages: 2,
        pendingDeliveries: 12
      },
      quality: {
        inspectionsPassed: 91.2,
        reworkRequired: 3.7,
        defects: 15,
        qualityScore: 88.9,
        lastInspection: '2026-03-03'
      },
      weather: {
        currentConditions: 'Light Rain',
        temperature: 14,
        windSpeed: 25,
        precipitation: 8,
        workableHours: 4.0,
        weatherDelay: 4.0
      },
      alerts: ['Weather delays affecting schedule', 'Material shortages - steel beams', 'Budget variance exceeding 5%'],
      lastUpdate: Date.now() - 20 * 60 * 1000
    },
    {
      id: 'proj_004',
      name: 'Medical Center Renovation',
      type: 'HEALTHCARE',
      client: 'City General Hospital',
      contractor: 'MedBuild Specialists',
      projectManager: 'Dr. Lisa Park',
      location: 'Hospital Campus - East Wing',
      status: 'IN_PROGRESS',
      phase: 'MEP_INSTALLATION',
      startDate: '2025-11-15',
      plannedCompletion: '2026-07-30',
      actualProgress: 38.7,
      budget: {
        total: 12500000, // $12.5M
        spent: 4200000, // $4.2M
        remaining: 8300000, // $8.3M
        variance: 150000, // $150K under budget
        cpi: 1.042,
        spi: 1.015
      },
      schedule: {
        totalDays: 257,
        daysElapsed: 110,
        daysRemaining: 147,
        percentageComplete: 38.7,
        criticalPath: 'MEP → Medical Gas → Clean Room → Equipment Install',
        delayDays: -3 // 3 days ahead
      },
      workforce: {
        onSite: 67,
        planned: 70,
        contractors: 34,
        subcontractors: 33,
        supervisors: 6,
        engineers: 5
      },
      safety: {
        daysWithoutIncident: 198,
        incidentsYTD: 0,
        nearMisses: 4,
        safetyScore: 99.1,
        lastIncident: 'None',
        inspections: 15 // healthcare requires more inspections
      },
      materials: {
        deliveredOnTime: 95.7,
        wastage: 1.8,
        costVariance: -2.4, // 2.4% under budget
        criticalShortages: 0,
        pendingDeliveries: 2
      },
      quality: {
        inspectionsPassed: 98.9,
        reworkRequired: 0.8,
        defects: 1,
        qualityScore: 98.7,
        lastInspection: '2026-03-05'
      },
      weather: {
        currentConditions: 'Indoor Work Only',
        temperature: 20,
        windSpeed: 0,
        precipitation: 0,
        workableHours: 8.0,
        weatherDelay: 0
      },
      alerts: ['Perfect safety record', 'Outstanding quality scores'],
      lastUpdate: Date.now() - 5 * 60 * 1000
    }
  ]);

  const [equipmentFleet, setEquipmentFleet] = useState([
    {
      id: 'equip_001',
      name: 'Tower Crane TC-1',
      type: 'TOWER_CRANE',
      project: 'Downtown Office Complex',
      operator: 'Jake Morrison',
      status: 'OPERATIONAL',
      location: 'Grid Position A-3',
      specifications: {
        maxCapacity: 12000, // kg
        maxRadius: 60, // meters
        maxHeight: 180, // meters
        manufacturer: 'Liebherr',
        model: 'EC-B 180'
      },
      performance: {
        hoursOperated: 8234.5,
        utilization: 87.3, // percentage
        cyclesCompleted: 156, // today
        efficiency: 92.1, // percentage
        lastMaintenance: '2026-02-28',
        nextMaintenance: '2026-03-15'
      },
      systems: {
        hoist: { load: 8500, status: 'NORMAL', capacity: 12000 }, // kg
        slew: { angle: 245, status: 'NORMAL' }, // degrees
        trolley: { position: 45, status: 'NORMAL' }, // meters from center
        engine: { hours: 8234, status: 'GOOD' }
      },
      safety: {
        loadMoment: 85.2, // percentage of limit
        windSpeed: 8, // km/h (limit 50)
        overloadProtection: 'ACTIVE',
        antiCollision: 'ACTIVE',
        lastInspection: '2026-03-01'
      },
      alerts: ['Maintenance due in 7 days'],
      lastUpdate: Date.now() - 10 * 60 * 1000
    },
    {
      id: 'equip_002',
      name: 'Excavator EX-240',
      type: 'EXCAVATOR',
      project: 'Highway Bridge Expansion',
      operator: 'Maria Santos',
      status: 'OPERATIONAL',
      location: 'Pier Foundation Site 3',
      specifications: {
        operatingWeight: 24500, // kg
        bucketCapacity: 1.2, // cubic meters
        engine: 'Caterpillar C7.1',
        maxDigDepth: 6.8, // meters
        manufacturer: 'Caterpillar'
      },
      performance: {
        hoursOperated: 3456.8,
        utilization: 94.6,
        cyclesCompleted: 89,
        efficiency: 88.7,
        lastMaintenance: '2026-03-01',
        nextMaintenance: '2026-03-22'
      },
      systems: {
        hydraulics: { pressure: 320, temperature: 68, status: 'NORMAL' }, // bar, celsius
        engine: { rpm: 1750, temperature: 89, status: 'NORMAL' },
        tracks: { tension: 'OPTIMAL', wear: 'MODERATE' },
        boom: { position: 35, status: 'ACTIVE' } // degrees
      },
      safety: {
        seatbelt: 'ENGAGED',
        rops: 'CERTIFIED',
        backup_alarm: 'FUNCTIONAL',
        lights: 'OPERATIONAL',
        lastInspection: '2026-03-04'
      },
      alerts: ['All systems operating normally'],
      lastUpdate: Date.now() - 7 * 60 * 1000
    },
    {
      id: 'equip_003',
      name: 'Concrete Pump CP-58',
      type: 'CONCRETE_PUMP',
      project: 'Riverside Residential Complex',
      operator: 'Tony Garcia',
      status: 'ACTIVE',
      location: 'Building C - Level 12',
      specifications: {
        maxOutput: 180, // cubic meters per hour
        maxPressure: 85, // bar
        pipelineLength: 58, // meters
        manufacturer: 'Putzmeister',
        model: 'BSF 58Z.20H'
      },
      performance: {
        hoursOperated: 2156.3,
        utilization: 76.8,
        volumePumped: 156.7, // cubic meters today
        efficiency: 85.4,
        lastMaintenance: '2026-02-25',
        nextMaintenance: '2026-03-18'
      },
      systems: {
        pump: { pressure: 62, output: 145, status: 'ACTIVE' }, // bar, m³/h
        boom: { extension: 45, height: 32, status: 'EXTENDED' }, // meters
        engine: { rpm: 2150, temperature: 92, status: 'NORMAL' },
        hydraulics: { pressure: 280, temperature: 74, status: 'NORMAL' }
      },
      safety: {
        emergencyStop: 'READY',
        pressureRelief: 'ACTIVE',
        stabilizers: 'DEPLOYED',
        proximity: 'CLEAR',
        lastInspection: '2026-03-02'
      },
      alerts: ['High concrete output today'],
      lastUpdate: Date.now() - 3 * 60 * 1000
    },
    {
      id: 'equip_004',
      name: 'Scissor Lift SL-32',
      type: 'SCISSOR_LIFT',
      project: 'Medical Center Renovation',
      operator: 'Ahmed Hassan',
      status: 'OPERATIONAL',
      location: 'OR Suite 5 - Ceiling Work',
      specifications: {
        maxHeight: 10, // meters
        platform: { length: 2.4, width: 1.2 }, // meters
        maxCapacity: 450, // kg
        manufacturer: 'Genie',
        model: 'GS-3268RT'
      },
      performance: {
        hoursOperated: 1234.7,
        utilization: 68.9,
        cyclesCompleted: 34,
        efficiency: 91.2,
        lastMaintenance: '2026-02-20',
        nextMaintenance: '2026-03-25'
      },
      systems: {
        hydraulics: { pressure: 210, status: 'NORMAL' },
        platform: { height: 8.5, tilt: 0.5, status: 'ELEVATED' }, // meters, degrees
        engine: { hours: 1234, status: 'GOOD' },
        controls: { operator: 'PRESENT', deadman: 'ACTIVE' }
      },
      safety: {
        harness: 'ENGAGED',
        guardrails: 'RAISED',
        proximity: 'MONITORED',
        tilt: 'WITHIN_LIMITS',
        lastInspection: '2026-03-03'
      },
      alerts: ['Operator safety systems all active'],
      lastUpdate: Date.now() - 12 * 60 * 1000
    }
  ]);

  const [sitePersonnel, setSitePersonnel] = useState([
    {
      id: 'person_001',
      employeeId: 'PM001',
      name: 'Sarah Chen',
      position: 'Project Manager',
      project: 'Downtown Office Complex',
      shift: 'Day Shift',
      status: 'ON_SITE',
      location: 'Site Office',
      checkIn: '07:00',
      lastActivity: Date.now() - 5 * 60 * 1000,
      certifications: {
        pmp: '2026-12-31',
        safetyTraining: '2026-06-15',
        firstAid: '2026-09-20',
        confined_space: '2026-04-30'
      },
      safety: {
        ppe: {
          hardhat: 'ACTIVE',
          vest: 'ACTIVE',
          boots: 'ACTIVE',
          glasses: 'ACTIVE'
        },
        training: {
          lastUpdate: '2026-02-15',
          score: 96.8,
          modules: ['Fall Protection', 'Hazmat', 'Emergency Response']
        }
      },
      tasks: [
        'Review daily progress reports',
        'Client meeting at 10:00 AM',
        'Safety walkthrough with supervisor',
        'Budget review - cost variance analysis'
      ],
      alerts: ['Client meeting in 2 hours'],
      lastUpdate: Date.now() - 5 * 60 * 1000
    },
    {
      id: 'person_002',
      employeeId: 'SS002',
      name: 'Mike Thompson',
      position: 'Site Supervisor',
      project: 'Highway Bridge Expansion',
      shift: 'Day Shift',
      status: 'ON_SITE',
      location: 'Pier Foundation Area',
      checkIn: '06:30',
      lastActivity: Date.now() - 2 * 60 * 1000,
      certifications: {
        supervisor: '2026-08-15',
        safetyTraining: '2026-05-20',
        firstAid: '2026-07-10',
        crane_signaling: '2026-11-30'
      },
      safety: {
        ppe: {
          hardhat: 'ACTIVE',
          vest: 'ACTIVE',
          boots: 'ACTIVE',
          glasses: 'ACTIVE'
        },
        training: {
          lastUpdate: '2026-01-20',
          score: 94.2,
          modules: ['Heavy Equipment Safety', 'Fall Protection', 'Traffic Control']
        }
      },
      tasks: [
        'Coordinate concrete pour - Pier 3',
        'Equipment inspection walkthrough',
        'Weather monitoring - rain forecast',
        'Quality control check - rebar placement'
      ],
      alerts: ['Weather delay possible - monitor conditions'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'person_003',
      employeeId: 'QC003',
      name: 'Jennifer Lee',
      position: 'Quality Control Inspector',
      project: 'Medical Center Renovation',
      shift: 'Day Shift',
      status: 'INSPECTING',
      location: 'OR Suite 7 - MEP Installation',
      checkIn: '07:15',
      lastActivity: Date.now() - 1 * 60 * 1000,
      certifications: {
        qualityControl: '2026-10-25',
        medicalFacilities: '2026-12-20',
        safetyTraining: '2026-04-10',
        cleanRoom: '2026-08-05'
      },
      safety: {
        ppe: {
          hardhat: 'ACTIVE',
          vest: 'ACTIVE',
          boots: 'ACTIVE',
          glasses: 'ACTIVE'
        },
        training: {
          lastUpdate: '2026-02-28',
          score: 98.5,
          modules: ['Healthcare Compliance', 'Infection Control', 'Clean Room Protocol']
        }
      },
      tasks: [
        'Medical gas system inspection',
        'Clean room certification testing',
        'MEP rough-in quality check',
        'Document compliance requirements'
      ],
      alerts: ['Clean room testing in progress'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'person_004',
      employeeId: 'SF004',
      name: 'Carlos Rodriguez',
      position: 'Safety Officer',
      project: 'Riverside Residential Complex',
      shift: 'Day Shift',
      status: 'PATROL',
      location: 'Building B - Level 8',
      checkIn: '06:45',
      lastActivity: Date.now() - 8 * 60 * 1000,
      certifications: {
        safetyOfficer: '2026-11-15',
        oshaTrainer: '2026-09-30',
        firstAid: '2026-06-25',
        emergencyResponse: '2026-07-20'
      },
      safety: {
        ppe: {
          hardhat: 'ACTIVE',
          vest: 'ACTIVE',
          boots: 'ACTIVE',
          glasses: 'ACTIVE'
        },
        training: {
          lastUpdate: '2026-03-01',
          score: 99.2,
          modules: ['OSHA Compliance', 'Incident Investigation', 'Risk Assessment']
        }
      },
      tasks: [
        'Daily safety walkthrough',
        'PPE compliance check',
        'Near miss investigation - slip hazard',
        'Safety training session preparation'
      ],
      alerts: ['127 days without incident - excellent record'],
      lastUpdate: Date.now() - 8 * 60 * 1000
    }
  ]);

  const [materialTracking, setMaterialTracking] = useState([
    {
      id: 'mat_001',
      material: 'Reinforcing Steel (Rebar)',
      project: 'Downtown Office Complex',
      supplier: 'Metro Steel Supply',
      quantity: {
        ordered: 450, // tonnes
        delivered: 378, // tonnes
        installed: 312, // tonnes
        remaining: 66, // tonnes on site
        pending: 72 // tonnes awaiting delivery
      },
      schedule: {
        deliveryDate: '2026-03-07',
        installationRate: 15.6, // tonnes/day
        daysToComplete: 9,
        criticalPath: true
      },
      cost: {
        unitPrice: 890, // $ per tonne
        totalValue: 400500, // $400.5K
        variance: 2.3, // percentage over budget
        payments: {
          paid: 336420, // $336.42K
          pending: 64080 // $64.08K
        }
      },
      quality: {
        grade: 'Grade 60',
        certifications: 'Mill Test Certificates',
        inspectionsPassed: 347,
        rejections: 8,
        passRate: 97.7 // percentage
      },
      storage: {
        location: 'Laydown Area B',
        condition: 'GOOD',
        weatherProtected: true,
        inventory: 'TRACKED'
      },
      alerts: ['Critical path material - monitor delivery'],
      lastUpdate: Date.now() - 6 * 60 * 1000
    },
    {
      id: 'mat_002',
      material: 'Ready-Mix Concrete',
      project: 'Highway Bridge Expansion',
      supplier: 'QuickMix Concrete Corp',
      quantity: {
        ordered: 2840, // cubic meters
        delivered: 2156, // cubic meters
        placed: 2089, // cubic meters
        remaining: 67, // cubic meters ready
        pending: 684 // cubic meters awaiting delivery
      },
      schedule: {
        deliveryDate: '2026-03-06',
        placementRate: 125, // cubic meters/day
        daysToComplete: 6,
        criticalPath: true
      },
      cost: {
        unitPrice: 145, // $ per cubic meter
        totalValue: 411800, // $411.8K
        variance: -1.2, // percentage under budget
        payments: {
          paid: 312620, // $312.62K
          pending: 99180 // $99.18K
        }
      },
      quality: {
        grade: '30 MPa',
        slumpTest: 'PASS',
        strengthTests: 45,
        failures: 1,
        passRate: 97.8
      },
      storage: {
        location: 'Batch Plant On-Site',
        condition: 'FRESH',
        weatherProtected: true,
        inventory: 'REAL_TIME'
      },
      alerts: ['Large pour scheduled tomorrow - verify delivery'],
      lastUpdate: Date.now() - 10 * 60 * 1000
    },
    {
      id: 'mat_003',
      material: 'Medical Grade HVAC Equipment',
      project: 'Medical Center Renovation',
      supplier: 'MedAir Systems Inc',
      quantity: {
        ordered: 24, // units
        delivered: 18, // units
        installed: 12, // units
        remaining: 6, // units on site
        pending: 6 // units awaiting delivery
      },
      schedule: {
        deliveryDate: '2026-03-08',
        installationRate: 2, // units/day
        daysToComplete: 6,
        criticalPath: false
      },
      cost: {
        unitPrice: 45000, // $ per unit
        totalValue: 1080000, // $1.08M
        variance: -3.1, // percentage under budget
        payments: {
          paid: 810000, // $810K
          pending: 270000 // $270K
        }
      },
      quality: {
        grade: 'FDA Approved',
        certifications: 'ISO 13485',
        inspectionsPassed: 18,
        rejections: 0,
        passRate: 100.0
      },
      storage: {
        location: 'Clean Storage Room',
        condition: 'STERILE',
        weatherProtected: true,
        inventory: 'SERIALIZED'
      },
      alerts: ['Perfect quality record maintained'],
      lastUpdate: Date.now() - 4 * 60 * 1000
    }
  ]);

  const [safetyIncidents, setSafetyIncidents] = useState([
    {
      id: 'inc_001',
      type: 'NEAR_MISS',
      project: 'Downtown Office Complex',
      date: '2026-03-04',
      time: '14:30',
      location: 'Level 15 - North Side',
      description: 'Material hoist load swayed due to wind',
      reportedBy: 'Jake Morrison',
      severity: 'LOW',
      status: 'INVESTIGATED',
      actions: [
        'Wind speed monitoring implemented',
        'Load securing procedure revised',
        'Additional training scheduled'
      ],
      rootCause: 'Inadequate wind speed monitoring',
      corrective: 'Install wind speed meter on crane',
      preventive: 'Wind speed limits in operating procedures',
      daysOpen: 1,
      assignedTo: 'Safety Team',
      followUp: '2026-03-07'
    },
    {
      id: 'inc_002',
      type: 'FIRST_AID',
      project: 'Highway Bridge Expansion',
      date: '2026-03-02',
      time: '10:15',
      location: 'Pier Foundation Site 2',
      description: 'Minor cut on hand from rebar handling',
      reportedBy: 'Maria Santos',
      severity: 'MINOR',
      status: 'CLOSED',
      actions: [
        'First aid administered on site',
        'Cut-resistant gloves provided',
        'Tool box talk on hand protection'
      ],
      rootCause: 'Improper PPE usage',
      corrective: 'Mandatory cut-resistant gloves',
      preventive: 'Enhanced PPE training',
      daysOpen: 1,
      assignedTo: 'Site Supervisor',
      followUp: 'Completed'
    },
    {
      id: 'inc_003',
      type: 'ENVIRONMENTAL',
      project: 'Riverside Residential Complex',
      date: '2026-03-01',
      time: '16:45',
      location: 'Storm Water Management Pond',
      description: 'Turbid water discharge noted during inspection',
      reportedBy: 'Environmental Inspector',
      severity: 'MEDIUM',
      status: 'CORRECTIVE_ACTION',
      actions: [
        'Sediment barriers reinforced',
        'Water quality testing increased',
        'Contractor training on erosion control'
      ],
      rootCause: 'Inadequate erosion control during rain',
      corrective: 'Additional sediment barriers installed',
      preventive: 'Weather-based erosion control plan',
      daysOpen: 4,
      assignedTo: 'Environmental Team',
      followUp: '2026-03-08'
    }
  ]);

  const [projectMetrics, setProjectMetrics] = useState({
    portfolio: {
      totalProjects: 4,
      activeProjects: 4,
      completedProjects: 12, // this year
      totalValue: 153500000, // $153.5M
      averageCompletion: 60.3 // percentage
    },
    schedule: {
      onTime: 75.0, // percentage of projects
      ahead: 25.0,
      behind: 0.0,
      averageDelay: -2.3 // days (negative = ahead)
    },
    budget: {
      onBudget: 75.0, // percentage
      underBudget: 50.0,
      overBudget: 25.0,
      averageVariance: -0.8 // percentage (negative = under)
    },
    safety: {
      totalIncidents: 6, // YTD
      incidentRate: 0.89, // per 100 workers
      daysWithoutIncident: 34,
      safetyScore: 94.7,
      trainingCompliance: 96.8 // percentage
    },
    quality: {
      averageScore: 94.6,
      inspectionPassRate: 95.2, // percentage
      reworkRate: 2.0, // percentage
      customerSatisfaction: 4.7 // out of 5
    },
    productivity: {
      laborEfficiency: 89.3, // percentage
      equipmentUtilization: 84.7, // percentage
      materialWastage: 2.8, // percentage
      energyEfficiency: 87.1 // percentage
    },
    lastUpdate: Date.now() - 3 * 60 * 1000
  });

  const [projectTrends, setProjectTrends] = useState([]);

  const generateProjectTrends = () => {
    const data = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}),
        completion: Math.floor(Math.random() * 10) + 55, // 55-65% average completion
        safety: Math.floor(Math.random() * 5) + 90, // 90-95% safety score
        budget: Math.floor(Math.random() * 6) + 92, // 92-98% budget performance
        quality: Math.floor(Math.random() * 5) + 93, // 93-98% quality score
        productivity: Math.floor(Math.random() * 8) + 85, // 85-93% productivity
        incidents: Math.floor(Math.random() * 3) + 0 // 0-3 incidents per day
      });
    }
    return data;
  };

  useEffect(() => {
    setProjectTrends(generateProjectTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update active projects
      setActiveProjects(prev => prev.map(project => ({
        ...project,
        actualProgress: Math.max(0, Math.min(100, project.actualProgress + (Math.random() - 0.3) * 0.5)),
        budget: {
          ...project.budget,
          cpi: Math.max(0.8, Math.min(1.2, project.budget.cpi + (Math.random() - 0.5) * 0.01)),
          spi: Math.max(0.8, Math.min(1.2, project.budget.spi + (Math.random() - 0.5) * 0.01))
        },
        workforce: {
          ...project.workforce,
          onSite: Math.max(0, project.workforce.onSite + Math.floor((Math.random() - 0.5) * 6))
        },
        weather: project.weather.currentConditions !== 'Indoor Work Only' ? {
          ...project.weather,
          temperature: Math.max(-5, Math.min(35, project.weather.temperature + (Math.random() - 0.5) * 2)),
          windSpeed: Math.max(0, Math.min(60, project.weather.windSpeed + (Math.random() - 0.5) * 3))
        } : project.weather,
        lastUpdate: Date.now()
      })));

      // Update equipment
      setEquipmentFleet(prev => prev.map(equipment => ({
        ...equipment,
        performance: {
          ...equipment.performance,
          utilization: Math.max(60, Math.min(98, equipment.performance.utilization + (Math.random() - 0.5) * 2)),
          efficiency: Math.max(70, Math.min(98, equipment.performance.efficiency + (Math.random() - 0.5) * 1.5))
        },
        systems: equipment.type === 'TOWER_CRANE' ? {
          ...equipment.systems,
          hoist: {
            ...equipment.systems.hoist,
            load: Math.max(0, Math.min(12000, equipment.systems.hoist.load + (Math.random() - 0.5) * 1000))
          }
        } : equipment.systems,
        safety: equipment.safety.windSpeed !== undefined ? {
          ...equipment.safety,
          windSpeed: Math.max(0, Math.min(50, equipment.safety.windSpeed + (Math.random() - 0.5) * 3))
        } : equipment.safety,
        lastUpdate: Date.now()
      })));

      // Update project metrics
      setProjectMetrics(prev => ({
        ...prev,
        productivity: {
          ...prev.productivity,
          laborEfficiency: Math.max(80, Math.min(95, prev.productivity.laborEfficiency + (Math.random() - 0.5) * 1.5)),
          equipmentUtilization: Math.max(75, Math.min(95, prev.productivity.equipmentUtilization + (Math.random() - 0.5) * 2))
        },
        safety: {
          ...prev.safety,
          safetyScore: Math.max(85, Math.min(99, prev.safety.safetyScore + (Math.random() - 0.5) * 0.5))
        },
        lastUpdate: Date.now()
      }));

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'IN_PROGRESS':
      case 'OPERATIONAL':
      case 'ON_SITE':
      case 'ACTIVE':
      case 'NORMAL':
      case 'GOOD':
      case 'PASS':
      case 'CLOSED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'SCHEDULED':
      case 'PENDING':
      case 'STANDBY': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'CONSTRUCTION':
      case 'FINISHING':
      case 'STRUCTURAL':
      case 'MEP_INSTALLATION':
      case 'INSPECTING':
      case 'PATROL': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'EXTENDED':
      case 'ELEVATED': return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      case 'INVESTIGATED':
      case 'CORRECTIVE_ACTION': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'DELAYED':
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 90) return 'text-green-400';
    if (percentage >= 75) return 'text-blue-400';
    if (percentage >= 50) return 'text-yellow-400';
    if (percentage >= 25) return 'text-orange-400';
    return 'text-red-400';
  };

  const getBudgetColor = (variance) => {
    if (variance <= -2) return 'text-green-400'; // Under budget
    if (variance <= 0) return 'text-blue-400';   // On budget
    if (variance <= 2) return 'text-yellow-400'; // Slight over
    return 'text-red-400'; // Significantly over
  };

  const getPerformanceColor = (cpi, spi) => {
    const avg = (cpi + spi) / 2;
    if (avg >= 1.05) return 'text-green-400';
    if (avg >= 0.95) return 'text-blue-400';
    if (avg >= 0.9) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatNumber = (num, decimals = 0) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(decimals)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(decimals)}K`;
    }
    return num.toFixed(decimals);
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toFixed(0)}`;
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🏗️ CONSTRUCTION OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {activeProjects.filter(p => p.status === 'IN_PROGRESS').length}/{activeProjects.length} Active
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {projectMetrics.portfolio.averageCompletion.toFixed(1)}% Complete
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Project Management Command Center
          </div>
        </div>
      </div>

      {/* Construction Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">PORTFOLIO VALUE</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatCurrency(projectMetrics.portfolio.totalValue)}
              </div>
              <div className="text-xs text-blue-300">
                {projectMetrics.portfolio.activeProjects} Active Projects
              </div>
            </div>
            <div className="text-3xl opacity-60">🏗️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">ON-TIME PERFORMANCE</div>
              <div className="text-2xl font-bold text-green-100">
                {projectMetrics.schedule.onTime.toFixed(1)}%
              </div>
              <div className="text-xs text-green-300">
                Avg: {Math.abs(projectMetrics.schedule.averageDelay).toFixed(1)} days {projectMetrics.schedule.averageDelay < 0 ? 'ahead' : 'behind'}
              </div>
            </div>
            <div className="text-3xl opacity-60">⏰</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">SAFETY RECORD</div>
              <div className="text-2xl font-bold text-purple-100">
                {projectMetrics.safety.daysWithoutIncident}
              </div>
              <div className="text-xs text-purple-300">
                Days Without Incident
              </div>
            </div>
            <div className="text-3xl opacity-60">🛡️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded-lg p-4 border border-yellow-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-yellow-200">BUDGET PERFORMANCE</div>
              <div className="text-2xl font-bold text-yellow-100">
                {projectMetrics.budget.onBudget.toFixed(1)}%
              </div>
              <div className="text-xs text-yellow-300">
                On Budget | {Math.abs(projectMetrics.budget.averageVariance).toFixed(1)}% {projectMetrics.budget.averageVariance < 0 ? 'under' : 'over'}
              </div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>
      </div>

      {/* Active Projects and Equipment Fleet */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Projects */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏢 ACTIVE CONSTRUCTION PROJECTS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {activeProjects.map((project) => (
              <div key={project.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(project.status)}`}>
                      {project.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {project.type}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(project.phase)}`}>
                      {project.phase.replace(/_/g, ' ')}
                    </span>
                    {project.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {project.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(project.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{project.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{project.client} | PM: {project.projectManager}</div>
                <div className="text-xs text-purple-400 mb-3">
                  {project.location} | {project.contractor}
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Progress</div>
                    <div className={getProgressColor(project.actualProgress)}>
                      {project.actualProgress.toFixed(1)}%
                    </div>
                    <div className="text-gray-500">{project.schedule.daysRemaining} days left</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Budget Status</div>
                    <div className={getBudgetColor((project.budget.variance / project.budget.total) * 100)}>
                      {formatCurrency(project.budget.remaining)}
                    </div>
                    <div className="text-gray-500">
                      {((project.budget.variance / project.budget.total) * 100).toFixed(1)}% var
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Performance</div>
                    <div className={getPerformanceColor(project.budget.cpi, project.budget.spi)}>
                      CPI: {project.budget.cpi.toFixed(3)}
                    </div>
                    <div className="text-gray-500">SPI: {project.budget.spi.toFixed(3)}</div>
                  </div>
                </div>

                {/* Workforce */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Workforce: </span>
                  <span className="text-green-400">{project.workforce.onSite}</span>
                  <span className="text-gray-400"> on site | </span>
                  <span className="text-blue-400">{project.workforce.contractors} contractors</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-purple-400">{project.workforce.subcontractors} subcontractors</span>
                </div>

                {/* Safety */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Safety: </span>
                  <span className="text-green-400">{project.safety.daysWithoutIncident} days</span>
                  <span className="text-gray-400"> | Score: </span>
                  <span className="text-blue-400">{project.safety.safetyScore.toFixed(1)}</span>
                  <span className="text-gray-400"> | YTD Incidents: </span>
                  <span className="text-orange-400">{project.safety.incidentsYTD}</span>
                </div>

                {/* Quality & Materials */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Quality: </span>
                  <span className="text-green-400">{project.quality.inspectionsPassed.toFixed(1)}% pass</span>
                  <span className="text-gray-400"> | Materials: </span>
                  <span className="text-blue-400">{project.materials.deliveredOnTime.toFixed(1)}% on-time</span>
                  <span className="text-gray-400"> | Waste: </span>
                  <span className="text-orange-400">{project.materials.wastage.toFixed(1)}%</span>
                </div>

                {/* Weather (if applicable) */}
                {project.weather.currentConditions !== 'Indoor Work Only' && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Weather: </span>
                    <span className="text-blue-400">{project.weather.currentConditions}</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-cyan-400">{project.weather.temperature}°C</span>
                    <span className="text-gray-400"> | Wind: </span>
                    <span className="text-green-400">{project.weather.windSpeed} km/h</span>
                    <span className="text-gray-400"> | Workable: </span>
                    <span className="text-yellow-400">{project.weather.workableHours}h</span>
                  </div>
                )}

                {project.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {project.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">🏢 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Fleet */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚧 CONSTRUCTION EQUIPMENT FLEET
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {equipmentFleet.map((equipment) => (
              <div key={equipment.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(equipment.status)}`}>
                      {equipment.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {equipment.type.replace(/_/g, ' ')}
                    </span>
                    {equipment.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                        {equipment.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(equipment.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{equipment.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{equipment.project} | {equipment.operator}</div>
                <div className="text-xs text-purple-400 mb-3">
                  {equipment.location} | {equipment.specifications.manufacturer}
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Utilization</div>
                    <div className="text-green-400">{equipment.performance.utilization.toFixed(1)}%</div>
                    <div className="text-gray-500">Hours: {equipment.performance.hoursOperated.toFixed(1)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Efficiency</div>
                    <div className="text-blue-400">{equipment.performance.efficiency.toFixed(1)}%</div>
                    <div className="text-gray-500">Cycles: {equipment.performance.cyclesCompleted}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Maintenance</div>
                    <div className="text-orange-400">{equipment.performance.nextMaintenance}</div>
                    <div className="text-gray-500">Due next service</div>
                  </div>
                </div>

                {/* Specifications */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Specs: </span>
                  {equipment.specifications.maxCapacity && (
                    <span className="text-blue-400">Cap: {formatNumber(equipment.specifications.maxCapacity)}kg </span>
                  )}
                  {equipment.specifications.bucketCapacity && (
                    <span className="text-green-400">Bucket: {equipment.specifications.bucketCapacity}m³ </span>
                  )}
                  {equipment.specifications.maxHeight && (
                    <span className="text-purple-400">Height: {equipment.specifications.maxHeight}m </span>
                  )}
                  {equipment.specifications.maxOutput && (
                    <span className="text-cyan-400">Output: {equipment.specifications.maxOutput}m³/h</span>
                  )}
                </div>

                {/* Systems Status */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Systems Status:</div>
                  {Object.entries(equipment.systems).slice(0, 3).map(([system, data]) => (
                    <div key={system} className="grid grid-cols-3 gap-1">
                      <span className="text-indigo-400 capitalize">{system}:</span>
                      <span className={getStatusColor(data.status)}>{data.status}</span>
                      {data.load && (
                        <span className="text-yellow-400">{formatNumber(data.load)}kg</span>
                      )}
                      {data.pressure && (
                        <span className="text-cyan-400">{data.pressure} bar</span>
                      )}
                      {data.temperature && (
                        <span className="text-orange-400">{data.temperature}°C</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Safety specific */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Safety: </span>
                  {equipment.safety.windSpeed !== undefined && (
                    <>
                      <span className="text-blue-400">Wind: {equipment.safety.windSpeed} km/h</span>
                      <span className="text-gray-400"> | </span>
                    </>
                  )}
                  {equipment.safety.loadMoment && (
                    <>
                      <span className="text-purple-400">Load: {equipment.safety.loadMoment.toFixed(1)}%</span>
                      <span className="text-gray-400"> | </span>
                    </>
                  )}
                  <span className="text-green-400">Inspected: {equipment.safety.lastInspection}</span>
                </div>

                {equipment.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {equipment.alerts.map((alert, index) => (
                      <div key={index} className="text-yellow-400">🚧 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Site Personnel and Material Tracking */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Site Personnel */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👷 SITE PERSONNEL & WORKFORCE MANAGEMENT
          </h3>
          <div className="space-y-3">
            {sitePersonnel.map((person) => (
              <div key={person.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(person.status)}`}>
                      {person.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {person.position}
                    </span>
                    {person.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-blue-500 text-white">
                        {person.alerts.length} notifications
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(person.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{person.name} ({person.employeeId})</div>
                <div className="text-xs text-cyan-400 mb-2">{person.project} | {person.shift}</div>
                <div className="text-xs text-purple-400 mb-3">
                  {person.location} | Check-in: {person.checkIn} | Activity: {formatTime(person.lastActivity)}
                </div>

                {/* PPE Status */}
                <div className="text-xs mb-3 bg-gray-600 rounded p-2">
                  <div className="text-gray-400">PPE Status:</div>
                  <div className="grid grid-cols-4 gap-1">
                    {Object.entries(person.safety.ppe).map(([item, status]) => (
                      <div key={item} className="text-center">
                        <div className={getStatusColor(status).split(' ')[0]}>{item}</div>
                        <div className="text-xs">{status}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Certifications:</div>
                  {Object.entries(person.certifications).slice(0, 2).map(([cert, expiry]) => (
                    <div key={cert} className="grid grid-cols-2 gap-1">
                      <span className="text-blue-400 capitalize">{cert.replace(/_/g, ' ')}:</span>
                      <span className="text-white">{expiry}</span>
                    </div>
                  ))}
                </div>

                {/* Safety Training */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Safety Training: </span>
                  <span className="text-green-400">Score: {person.safety.training.score.toFixed(1)}</span>
                  <span className="text-gray-400"> | Updated: </span>
                  <span className="text-blue-400">{person.safety.training.lastUpdate}</span>
                </div>

                {/* Current Tasks */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Current Tasks:</div>
                  {person.tasks.slice(0, 3).map((task, index) => (
                    <div key={index} className="text-cyan-400">• {task}</div>
                  ))}
                </div>

                {person.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Notifications:</div>
                    {person.alerts.map((alert, index) => (
                      <div key={index} className="text-blue-400">👷 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Material Tracking */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📦 MATERIAL TRACKING & SUPPLY CHAIN
          </h3>
          <div className="space-y-3">
            {materialTracking.map((material) => (
              <div key={material.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {material.schedule.criticalPath && (
                      <span className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                        CRITICAL
                      </span>
                    )}
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {material.material}
                    </span>
                    {material.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        Alert
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(material.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{material.material}</div>
                <div className="text-xs text-cyan-400 mb-2">{material.project} | {material.supplier}</div>

                {/* Quantity Status */}
                <div className="grid grid-cols-4 gap-2 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Ordered</div>
                    <div className="text-blue-400">{formatNumber(material.quantity.ordered)}</div>
                    <div className="text-gray-500">{material.material.includes('Concrete') ? 'm³' : material.material.includes('Steel') ? 't' : 'units'}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Delivered</div>
                    <div className="text-green-400">{formatNumber(material.quantity.delivered)}</div>
                    <div className="text-gray-500">{((material.quantity.delivered / material.quantity.ordered) * 100).toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Installed</div>
                    <div className="text-purple-400">{formatNumber(material.quantity.installed)}</div>
                    <div className="text-gray-500">{((material.quantity.installed / material.quantity.delivered) * 100).toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Pending</div>
                    <div className="text-orange-400">{formatNumber(material.quantity.pending)}</div>
                    <div className="text-gray-500">ETA: {material.schedule.deliveryDate}</div>
                  </div>
                </div>

                {/* Cost Information */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Cost: </span>
                  <span className="text-green-400">{formatCurrency(material.cost.totalValue)}</span>
                  <span className="text-gray-400"> | Variance: </span>
                  <span className={getBudgetColor(material.cost.variance)}>
                    {material.cost.variance > 0 ? '+' : ''}{material.cost.variance.toFixed(1)}%
                  </span>
                  <span className="text-gray-400"> | Pending: </span>
                  <span className="text-yellow-400">{formatCurrency(material.cost.payments.pending)}</span>
                </div>

                {/* Schedule */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Schedule: </span>
                  <span className="text-blue-400">{material.schedule.installationRate} {material.material.includes('Concrete') ? 'm³' : material.material.includes('Steel') ? 't' : 'units'}/day</span>
                  <span className="text-gray-400"> | Completion: </span>
                  <span className="text-green-400">{material.schedule.daysToComplete} days</span>
                </div>

                {/* Quality */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Quality: </span>
                  <span className="text-green-400">Pass Rate: {material.quality.passRate.toFixed(1)}%</span>
                  <span className="text-gray-400"> | Grade: </span>
                  <span className="text-blue-400">{material.quality.grade}</span>
                  <span className="text-gray-400"> | Cert: </span>
                  <span className="text-purple-400">{material.quality.certifications}</span>
                </div>

                {/* Storage */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Storage: </span>
                  <span className="text-cyan-400">{material.storage.location}</span>
                  <span className="text-gray-400"> | Condition: </span>
                  <span className={getStatusColor(material.storage.condition)}>{material.storage.condition}</span>
                  <span className="text-gray-400"> | Protected: </span>
                  <span className="text-green-400">{material.storage.weatherProtected ? 'Yes' : 'No'}</span>
                </div>

                {material.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {material.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">📦 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety Incidents and Project Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Safety Incidents */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 SAFETY INCIDENTS & RISK MANAGEMENT
          </h3>
          <div className="space-y-3">
            {safetyIncidents.map((incident) => (
              <div key={incident.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(incident.status)}`}>
                      {incident.status.replace(/_/g, ' ')}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      incident.severity === 'LOW' ? 'bg-green-500 text-white' :
                      incident.severity === 'MINOR' ? 'bg-yellow-500 text-black' :
                      incident.severity === 'MEDIUM' ? 'bg-orange-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {incident.severity}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {incident.type.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {incident.date} {incident.time}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">Incident #{incident.id}</div>
                <div className="text-xs text-cyan-400 mb-2">{incident.project} | {incident.location}</div>
                <div className="text-xs text-purple-400 mb-3">
                  Reported by: {incident.reportedBy} | Assigned: {incident.assignedTo}
                </div>

                <div className="text-xs mb-3 bg-gray-600 rounded p-2">
                  <div className="text-gray-400">Description:</div>
                  <div className="text-white">{incident.description}</div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Root Cause: </span>
                  <span className="text-orange-400">{incident.rootCause}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Corrective Action: </span>
                  <span className="text-green-400">{incident.corrective}</span>
                </div>

                {incident.actions.length > 0 && (
                  <div className="text-xs mb-2">
                    <div className="text-gray-400">Actions Taken:</div>
                    {incident.actions.slice(0, 2).map((action, index) => (
                      <div key={index} className="text-blue-400">• {action}</div>
                    ))}
                  </div>
                )}

                <div className="text-xs">
                  <span className="text-gray-400">Days Open: </span>
                  <span className="text-yellow-400">{incident.daysOpen}</span>
                  <span className="text-gray-400"> | Follow-up: </span>
                  <span className="text-cyan-400">{incident.followUp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 PROJECT PERFORMANCE TRENDS (30 DAYS)
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={projectTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12}/>
              <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12}/>
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12}/>
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
                yAxisId="left"
                type="monotone"
                dataKey="completion"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.1}
                strokeWidth={3}
                name="Completion (%)"
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="safety" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Safety Score (%)"
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="budget" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Budget Performance (%)"
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="quality" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Quality Score (%)"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="incidents" 
                stroke="#EF4444" 
                strokeWidth={2}
                name="Daily Incidents"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Construction Operations KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 CONSTRUCTION OPERATIONS KPIs & PERFORMANCE INDICATORS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Labor Efficiency</div>
            <div className="text-white font-bold text-lg">
              {projectMetrics.productivity.laborEfficiency.toFixed(1)}%
            </div>
            <div className="text-green-400 text-xs">productivity target</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Equipment Utilization</div>
            <div className="text-white font-bold text-lg">
              {projectMetrics.productivity.equipmentUtilization.toFixed(1)}%
            </div>
            <div className="text-blue-400 text-xs">fleet average</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Quality Score</div>
            <div className="text-white font-bold text-lg">
              {projectMetrics.quality.averageScore.toFixed(1)}
            </div>
            <div className="text-purple-400 text-xs">inspection average</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Material Wastage</div>
            <div className="text-white font-bold text-lg">
              {projectMetrics.productivity.materialWastage.toFixed(1)}%
            </div>
            <div className="text-orange-400 text-xs">below target</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Incident Rate</div>
            <div className="text-white font-bold text-lg">
              {projectMetrics.safety.incidentRate.toFixed(2)}
            </div>
            <div className="text-cyan-400 text-xs">per 100 workers</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Total Workforce</div>
            <div className="text-white font-bold text-lg">
              {activeProjects.reduce((sum, p) => sum + p.workforce.onSite, 0)}
            </div>
            <div className="text-yellow-400 text-xs">personnel on site</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionOperations;