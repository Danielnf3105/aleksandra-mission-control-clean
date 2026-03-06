// FoodSafetyOperations.js - Food Safety Operations Control Center & HACCP Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const FoodSafetyOperations = () => {
  const [facilityLocations, setFacilityLocations] = useState([
    {
      id: 'facility_001',
      name: 'Central Kitchen Hub - Downtown',
      type: 'CENTRAL_KITCHEN',
      location: 'New York, NY',
      manager: 'Sarah Chen',
      status: 'OPERATIONAL',
      certifications: ['HACCP', 'ISO 22000', 'SQF Level 2'],
      lastAudit: '2026-02-15',
      nextAudit: '2026-05-15',
      capacity: {
        dailyMeals: 15000,
        currentProduction: 11200,
        utilizationRate: 74.7
      },
      criticalControlPoints: {
        total: 12,
        monitored: 12,
        inCompliance: 11,
        violations: 1,
        complianceRate: 91.7
      },
      temperatureZones: {
        refrigeration: {
          zones: 8,
          inRange: 7,
          avgTemp: 2.1, // celsius
          targetRange: '0-4°C',
          status: 'MOSTLY_COMPLIANT',
          violations: ['Zone 3: 6.2°C - Out of range']
        },
        freezer: {
          zones: 4,
          inRange: 4,
          avgTemp: -18.3,
          targetRange: '-18 to -15°C',
          status: 'COMPLIANT',
          violations: []
        },
        hotHolding: {
          zones: 6,
          inRange: 6,
          avgTemp: 65.4,
          targetRange: '60-70°C',
          status: 'COMPLIANT',
          violations: []
        }
      },
      qualityMetrics: {
        microbiological: {
          totalTests: 156,
          passed: 152,
          failed: 4,
          passRate: 97.4,
          lastFailure: 'E.coli detected - Prep Station 3',
          correctedActions: 4
        },
        allergenControl: {
          allergenIncidents: 0,
          allergenTests: 89,
          crossContamEvents: 1,
          cleaningVerifications: 45,
          complianceScore: 98.9
        },
        chemicals: {
          residueTests: 67,
          detectedLevels: 'WITHIN_LIMITS',
          cleaningChemicals: 'PROPERLY_STORED',
          sanitizerConcentrations: 'OPTIMAL'
        }
      },
      staff: {
        totalStaff: 87,
        certifiedStaff: 82,
        certificationRate: 94.3,
        trainingHours: 234,
        hygieneViolations: 3,
        lastTraining: '2026-03-01'
      },
      equipment: {
        totalEquipment: 145,
        operational: 142,
        maintenance: 3,
        cleaningCompliance: 96.7,
        calibrationDue: 12,
        lastDeepClean: '2026-03-04'
      },
      suppliers: {
        approvedSuppliers: 23,
        auditedSuppliers: 20,
        riskRating: 'LOW',
        deliveriesToday: 8,
        rejectedDeliveries: 1,
        supplierScore: 94.2
      },
      incidents: {
        totalIncidents: 3,
        resolved: 2,
        pending: 1,
        severity: ['LOW', 'LOW', 'MEDIUM'],
        lastIncident: 'Temperature deviation - Walk-in Cooler 3'
      },
      alerts: [
        'Zone 3 refrigeration unit exceeding temperature range',
        '12 equipment calibrations due within 7 days',
        'Supplier ABC Foods audit due next week'
      ],
      lastUpdate: Date.now() - 8 * 60 * 1000
    },
    {
      id: 'facility_002',
      name: 'Restaurant Chain - Times Square',
      type: 'RESTAURANT',
      location: 'New York, NY',
      manager: 'Mike Rodriguez',
      status: 'OPERATIONAL',
      certifications: ['HACCP', 'NYC Health Permit'],
      lastAudit: '2026-02-28',
      nextAudit: '2026-05-28',
      capacity: {
        dailyMeals: 1200,
        currentProduction: 890,
        utilizationRate: 74.2
      },
      criticalControlPoints: {
        total: 8,
        monitored: 8,
        inCompliance: 8,
        violations: 0,
        complianceRate: 100.0
      },
      temperatureZones: {
        refrigeration: {
          zones: 3,
          inRange: 3,
          avgTemp: 1.8,
          targetRange: '0-4°C',
          status: 'COMPLIANT',
          violations: []
        },
        freezer: {
          zones: 2,
          inRange: 2,
          avgTemp: -17.9,
          targetRange: '-18 to -15°C',
          status: 'COMPLIANT',
          violations: []
        },
        hotHolding: {
          zones: 4,
          inRange: 4,
          avgTemp: 63.2,
          targetRange: '60-70°C',
          status: 'COMPLIANT',
          violations: []
        }
      },
      qualityMetrics: {
        microbiological: {
          totalTests: 45,
          passed: 45,
          failed: 0,
          passRate: 100.0,
          lastFailure: 'None',
          correctedActions: 0
        },
        allergenControl: {
          allergenIncidents: 0,
          allergenTests: 23,
          crossContamEvents: 0,
          cleaningVerifications: 15,
          complianceScore: 100.0
        },
        chemicals: {
          residueTests: 18,
          detectedLevels: 'WITHIN_LIMITS',
          cleaningChemicals: 'PROPERLY_STORED',
          sanitizerConcentrations: 'OPTIMAL'
        }
      },
      staff: {
        totalStaff: 32,
        certifiedStaff: 32,
        certificationRate: 100.0,
        trainingHours: 96,
        hygieneViolations: 0,
        lastTraining: '2026-02-28'
      },
      equipment: {
        totalEquipment: 45,
        operational: 45,
        maintenance: 0,
        cleaningCompliance: 100.0,
        calibrationDue: 2,
        lastDeepClean: '2026-03-05'
      },
      suppliers: {
        approvedSuppliers: 12,
        auditedSuppliers: 12,
        riskRating: 'LOW',
        deliveriesToday: 3,
        rejectedDeliveries: 0,
        supplierScore: 98.7
      },
      incidents: {
        totalIncidents: 0,
        resolved: 0,
        pending: 0,
        severity: [],
        lastIncident: 'None'
      },
      alerts: [
        '2 equipment calibrations due next week',
        'Perfect compliance achieved - 30 days!'
      ],
      lastUpdate: Date.now() - 5 * 60 * 1000
    },
    {
      id: 'facility_003',
      name: 'Processing Plant - Distribution',
      type: 'PROCESSING_PLANT',
      location: 'Newark, NJ',
      manager: 'Elena Vasquez',
      status: 'OPERATIONAL',
      certifications: ['HACCP', 'ISO 22000', 'SQF Level 3', 'FSMA', 'BRCGS'],
      lastAudit: '2026-03-01',
      nextAudit: '2026-06-01',
      capacity: {
        dailyMeals: 45000,
        currentProduction: 38200,
        utilizationRate: 84.9
      },
      criticalControlPoints: {
        total: 18,
        monitored: 18,
        inCompliance: 16,
        violations: 2,
        complianceRate: 88.9
      },
      temperatureZones: {
        refrigeration: {
          zones: 12,
          inRange: 10,
          avgTemp: 3.2,
          targetRange: '0-4°C',
          status: 'MOSTLY_COMPLIANT',
          violations: ['Zone 7: 5.1°C', 'Zone 12: 4.8°C']
        },
        freezer: {
          zones: 6,
          inRange: 6,
          avgTemp: -17.1,
          targetRange: '-18 to -15°C',
          status: 'COMPLIANT',
          violations: []
        },
        hotHolding: {
          zones: 8,
          inRange: 7,
          avgTemp: 68.9,
          targetRange: '60-70°C',
          status: 'MOSTLY_COMPLIANT',
          violations: ['Line 3: 58.2°C - Below minimum']
        }
      },
      qualityMetrics: {
        microbiological: {
          totalTests: 289,
          passed: 283,
          failed: 6,
          passRate: 97.9,
          lastFailure: 'Yeast count elevated - Production Line 2',
          correctedActions: 6
        },
        allergenControl: {
          allergenIncidents: 1,
          allergenTests: 145,
          crossContamEvents: 2,
          cleaningVerifications: 87,
          complianceScore: 96.1
        },
        chemicals: {
          residueTests: 134,
          detectedLevels: 'WITHIN_LIMITS',
          cleaningChemicals: 'PROPERLY_STORED',
          sanitizerConcentrations: 'SUBOPTIMAL'
        }
      },
      staff: {
        totalStaff: 234,
        certifiedStaff: 224,
        certificationRate: 95.7,
        trainingHours: 789,
        hygieneViolations: 8,
        lastTraining: '2026-02-20'
      },
      equipment: {
        totalEquipment: 456,
        operational: 442,
        maintenance: 14,
        cleaningCompliance: 94.2,
        calibrationDue: 34,
        lastDeepClean: '2026-03-03'
      },
      suppliers: {
        approvedSuppliers: 67,
        auditedSuppliers: 58,
        riskRating: 'MEDIUM',
        deliveriesToday: 15,
        rejectedDeliveries: 2,
        supplierScore: 91.4
      },
      incidents: {
        totalIncidents: 7,
        resolved: 5,
        pending: 2,
        severity: ['LOW', 'LOW', 'MEDIUM', 'LOW', 'HIGH', 'MEDIUM', 'LOW'],
        lastIncident: 'Allergen cross-contamination - Packaging Line A'
      },
      alerts: [
        'High severity allergen incident under investigation',
        '34 equipment calibrations overdue',
        'Sanitizer concentrations below optimal levels',
        'Supplier XYZ Corp requires immediate audit'
      ],
      lastUpdate: Date.now() - 12 * 60 * 1000
    },
    {
      id: 'facility_004',
      name: 'Catering Services - Airport Hub',
      type: 'CATERING',
      location: 'JFK Airport, NY',
      manager: 'David Kim',
      status: 'OPERATIONAL',
      certifications: ['HACCP', 'FAA Catering Cert', 'Halal Certified'],
      lastAudit: '2026-02-20',
      nextAudit: '2026-05-20',
      capacity: {
        dailyMeals: 28000,
        currentProduction: 22400,
        utilizationRate: 80.0
      },
      criticalControlPoints: {
        total: 14,
        monitored: 14,
        inCompliance: 13,
        violations: 1,
        complianceRate: 92.9
      },
      temperatureZones: {
        refrigeration: {
          zones: 10,
          inRange: 9,
          avgTemp: 2.8,
          targetRange: '0-4°C',
          status: 'MOSTLY_COMPLIANT',
          violations: ['Zone 6: 4.5°C - Slightly high']
        },
        freezer: {
          zones: 5,
          inRange: 5,
          avgTemp: -16.7,
          targetRange: '-18 to -15°C',
          status: 'COMPLIANT',
          violations: []
        },
        hotHolding: {
          zones: 12,
          inRange: 11,
          avgTemp: 64.8,
          targetRange: '60-70°C',
          status: 'MOSTLY_COMPLIANT',
          violations: ['Cart 7: 59.1°C - Below minimum']
        }
      },
      qualityMetrics: {
        microbiological: {
          totalTests: 198,
          passed: 194,
          failed: 4,
          passRate: 98.0,
          lastFailure: 'Aerobic plate count high - Salad station',
          correctedActions: 4
        },
        allergenControl: {
          allergenIncidents: 0,
          allergenTests: 89,
          crossContamEvents: 1,
          cleaningVerifications: 67,
          complianceScore: 98.2
        },
        chemicals: {
          residueTests: 87,
          detectedLevels: 'WITHIN_LIMITS',
          cleaningChemicals: 'PROPERLY_STORED',
          sanitizerConcentrations: 'OPTIMAL'
        }
      },
      staff: {
        totalStaff: 156,
        certifiedStaff: 148,
        certificationRate: 94.9,
        trainingHours: 456,
        hygieneViolations: 5,
        lastTraining: '2026-02-25'
      },
      equipment: {
        totalEquipment: 234,
        operational: 228,
        maintenance: 6,
        cleaningCompliance: 97.4,
        calibrationDue: 18,
        lastDeepClean: '2026-03-04'
      },
      suppliers: {
        approvedSuppliers: 34,
        auditedSuppliers: 31,
        riskRating: 'LOW',
        deliveriesToday: 12,
        rejectedDeliveries: 1,
        supplierScore: 95.8
      },
      incidents: {
        totalIncidents: 4,
        resolved: 3,
        pending: 1,
        severity: ['LOW', 'MEDIUM', 'LOW', 'LOW'],
        lastIncident: 'Temperature deviation during transport'
      },
      alerts: [
        'Transport temperature monitoring required',
        '18 equipment calibrations due this week',
        'Excellent microbiological test results'
      ],
      lastUpdate: Date.now() - 6 * 60 * 1000
    }
  ]);

  const [haccp] = useState({
    globalCompliance: 93.2, // percentage
    totalCCPs: 52, // across all facilities
    compliantCCPs: 48,
    violatingCCPs: 4,
    monitoringFrequency: '15 min intervals',
    correctiveActions: {
      total: 23,
      completed: 19,
      pending: 4,
      avgResolutionTime: '2.4 hours'
    },
    hazardAnalysis: {
      biologicalHazards: 15,
      chemicalHazards: 8,
      physicalHazards: 5,
      allergens: 14,
      riskLevel: 'MEDIUM'
    },
    documentation: {
      proceduresUpdated: '2026-03-01',
      recordsCompliance: 97.8,
      auditTrails: 'COMPLETE',
      deviationLogs: 12
    },
    verification: {
      internalAudits: 8,
      externalAudits: 4,
      calibrationVerification: 94.2,
      validationStatus: 'CURRENT'
    }
  });

  const [qualityTesting, setQualityTesting] = useState({
    microbiological: {
      totalTests: 688,
      passedTests: 674,
      failedTests: 14,
      passRate: 97.9,
      pathogensDetected: ['E.coli', 'Salmonella'],
      indicatorOrganisms: ['Aerobic Plate Count', 'Coliform'],
      environmentalMonitoring: 156,
      trendAnalysis: 'IMPROVING'
    },
    chemical: {
      residueTests: 306,
      withinLimits: 302,
      exceedLimits: 4,
      complianceRate: 98.7,
      pesticides: 'BELOW_DETECTION',
      sanitizers: 'OPTIMAL_LEVELS',
      allergenTesting: 346,
      heavyMetals: 'WITHIN_SPECS'
    },
    physical: {
      foreignObjectTests: 123,
      metalDetection: 'OPERATIONAL',
      xRayInspection: 'ACTIVE',
      visualInspections: 456,
      packagingIntegrity: 97.8,
      contaminationEvents: 2
    },
    nutritional: {
      labelAccuracy: 99.1,
      calorieVerification: 'COMPLIANT',
      allergenLabeling: 98.9,
      nutritionClaims: 'VERIFIED'
    }
  });

  const [supplyChain, setSupplyChain] = useState({
    suppliers: {
      totalSuppliers: 136,
      approvedSuppliers: 124,
      auditedSuppliers: 111,
      riskAssessments: 136,
      highRiskSuppliers: 8,
      mediumRiskSuppliers: 23,
      lowRiskSuppliers: 105,
      avgSupplierScore: 94.3
    },
    traceability: {
      lotTracking: 'COMPLETE',
      ingredientTracing: 98.7,
      finishedProductTracing: 99.4,
      recallReadiness: 'EXCELLENT',
      recordRetention: '7 years',
      tracebackTime: '2.3 hours'
    },
    receiving: {
      deliveriesToday: 38,
      acceptedDeliveries: 34,
      rejectedDeliveries: 4,
      acceptanceRate: 89.5,
      inspectionCompliance: 97.2,
      temperatureVerification: 'MONITORED'
    },
    storage: {
      warehouseFacilities: 12,
      temperatureZones: 45,
      humidityControl: 'MAINTAINED',
      pestControl: 'ACTIVE',
      inventoryRotation: 'FIFO_ENFORCED',
      crossContaminationPrevention: 95.8
    }
  });

  const [complianceMetrics, setComplianceMetrics] = useState({
    certifications: {
      haccp: { status: 'ACTIVE', expiry: '2026-12-31', compliance: 93.2 },
      iso22000: { status: 'ACTIVE', expiry: '2026-11-15', compliance: 96.7 },
      sqf: { status: 'ACTIVE', expiry: '2026-10-20', compliance: 94.8 },
      brcgs: { status: 'ACTIVE', expiry: '2026-09-30', compliance: 92.4 },
      fsma: { status: 'ACTIVE', expiry: '2027-03-15', compliance: 95.1 }
    },
    audits: {
      scheduledAudits: 16,
      completedAudits: 12,
      pendingAudits: 4,
      auditScore: 91.8,
      nonConformities: 23,
      correctiveActions: 19,
      openActions: 4
    },
    regulations: {
      fdaCompliance: 94.7,
      usdaCompliance: 93.2,
      localHealthDept: 97.8,
      customsCompliance: 98.1,
      laborCompliance: 95.5
    },
    documentation: {
      sopCompliance: 96.8,
      recordsManagement: 98.2,
      trainingRecords: 94.5,
      deviceCalibration: 93.7,
      changeControl: 97.1
    }
  });

  const [incidentTracking, setIncidentTracking] = useState([
    {
      id: 'INC_001',
      facilityId: 'facility_003',
      facility: 'Processing Plant - Distribution',
      type: 'ALLERGEN_CONTAMINATION',
      severity: 'HIGH',
      status: 'INVESTIGATING',
      description: 'Potential peanut cross-contamination in gluten-free product line',
      reportedBy: 'Quality Manager - Jane Smith',
      reportedTime: '2026-03-05T14:30:00Z',
      affectedProducts: ['Gluten-Free Crackers Lot #GF2603051'],
      customerComplaints: 3,
      rootCause: 'Under investigation',
      correctiveActions: [
        'Immediate line shutdown and cleaning',
        'Product recall initiated',
        'Enhanced allergen training scheduled'
      ],
      timeline: [
        { time: '2026-03-05T14:30:00Z', event: 'Incident reported by QA inspector' },
        { time: '2026-03-05T14:45:00Z', event: 'Production line halted immediately' },
        { time: '2026-03-05T15:00:00Z', event: 'Management notification completed' },
        { time: '2026-03-05T15:30:00Z', event: 'Investigation team assembled' }
      ],
      estimatedResolution: '2026-03-07T12:00:00Z',
      preventiveActions: 'Pending investigation completion'
    },
    {
      id: 'INC_002',
      facilityId: 'facility_001',
      facility: 'Central Kitchen Hub - Downtown',
      type: 'TEMPERATURE_DEVIATION',
      severity: 'MEDIUM',
      status: 'RESOLVED',
      description: 'Refrigeration unit Zone 3 temperature exceeded 4°C threshold',
      reportedBy: 'Kitchen Supervisor - Mark Johnson',
      reportedTime: '2026-03-05T09:15:00Z',
      affectedProducts: ['Fresh vegetables in Zone 3'],
      customerComplaints: 0,
      rootCause: 'Refrigeration compressor malfunction',
      correctiveActions: [
        'Emergency repair completed',
        'Products temperature checked and approved',
        'Backup refrigeration activated'
      ],
      timeline: [
        { time: '2026-03-05T09:15:00Z', event: 'Temperature alarm triggered' },
        { time: '2026-03-05T09:20:00Z', event: 'Maintenance team notified' },
        { time: '2026-03-05T10:30:00Z', event: 'Repair completed' },
        { time: '2026-03-05T11:00:00Z', event: 'Temperature normalized' }
      ],
      estimatedResolution: 'COMPLETED',
      preventiveActions: 'Preventive maintenance schedule updated'
    },
    {
      id: 'INC_003',
      facilityId: 'facility_004',
      facility: 'Catering Services - Airport Hub',
      type: 'HYGIENE_VIOLATION',
      severity: 'LOW',
      status: 'RESOLVED',
      description: 'Employee observed not following proper hand washing protocol',
      reportedBy: 'Shift Lead - Anna Martinez',
      reportedTime: '2026-03-05T08:00:00Z',
      affectedProducts: [],
      customerComplaints: 0,
      rootCause: 'Insufficient training reinforcement',
      correctiveActions: [
        'Immediate retraining for employee',
        'Team reminder on hygiene protocols',
        'Additional monitoring implemented'
      ],
      timeline: [
        { time: '2026-03-05T08:00:00Z', event: 'Violation observed and documented' },
        { time: '2026-03-05T08:15:00Z', event: 'Employee counseled immediately' },
        { time: '2026-03-05T09:00:00Z', event: 'Retraining session conducted' },
        { time: '2026-03-05T10:00:00Z', event: 'Compliance verified' }
      ],
      estimatedResolution: 'COMPLETED',
      preventiveActions: 'Monthly hygiene audits increased to weekly'
    }
  ]);

  const [temperatureTrends, setTemperatureTrends] = useState([]);

  const generateTemperatureTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const hour = new Date();
      hour.setHours(hour.getHours() - i);
      data.push({
        time: hour.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        refrigeration: Math.random() * 2 + 1.5, // 1.5-3.5°C
        freezer: Math.random() * 2 - 18, // -18 to -16°C
        hotHolding: Math.random() * 8 + 62, // 62-70°C
        ambient: Math.random() * 4 + 20 // 20-24°C
      });
    }
    return data;
  };

  useEffect(() => {
    setTemperatureTrends(generateTemperatureTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update facility metrics
      setFacilityLocations(prev => prev.map(facility => ({
        ...facility,
        capacity: {
          ...facility.capacity,
          currentProduction: Math.max(0, Math.min(facility.capacity.dailyMeals, 
            facility.capacity.currentProduction + Math.floor((Math.random() - 0.5) * 500))),
          utilizationRate: facility.capacity.currentProduction / facility.capacity.dailyMeals * 100
        },
        temperatureZones: {
          refrigeration: {
            ...facility.temperatureZones.refrigeration,
            avgTemp: Math.max(0, Math.min(6, facility.temperatureZones.refrigeration.avgTemp + (Math.random() - 0.5) * 0.3))
          },
          freezer: {
            ...facility.temperatureZones.freezer,
            avgTemp: Math.max(-20, Math.min(-15, facility.temperatureZones.freezer.avgTemp + (Math.random() - 0.5) * 0.5))
          },
          hotHolding: {
            ...facility.temperatureZones.hotHolding,
            avgTemp: Math.max(60, Math.min(70, facility.temperatureZones.hotHolding.avgTemp + (Math.random() - 0.5) * 1.0))
          }
        },
        lastUpdate: Date.now()
      })));

      // Update quality testing metrics
      setQualityTesting(prev => ({
        ...prev,
        microbiological: {
          ...prev.microbiological,
          totalTests: prev.microbiological.totalTests + Math.floor(Math.random() * 5),
          passedTests: prev.microbiological.passedTests + Math.floor(Math.random() * 5)
        },
        chemical: {
          ...prev.chemical,
          residueTests: prev.chemical.residueTests + Math.floor(Math.random() * 3),
          withinLimits: prev.chemical.withinLimits + Math.floor(Math.random() * 3)
        }
      }));

    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL':
      case 'COMPLIANT':
      case 'RESOLVED':
      case 'ACTIVE':
      case 'COMPLETE':
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'MOSTLY_COMPLIANT':
      case 'INVESTIGATING':
      case 'PENDING':
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'NON_COMPLIANT':
      case 'CRITICAL':
      case 'HIGH':
      case 'FAILED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'LOW':
      case 'MAINTENANCE': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getComplianceColor = (percentage) => {
    if (percentage >= 98) return 'text-green-400';
    if (percentage >= 95) return 'text-blue-400';
    if (percentage >= 90) return 'text-yellow-400';
    if (percentage >= 80) return 'text-orange-400';
    return 'text-red-400';
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'HIGH': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatNumber = (num, decimals = 0) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(decimals)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(decimals)}K`;
    }
    return num.toFixed(decimals);
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
          🍽️ FOOD SAFETY OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            HACCP {haccp.globalCompliance.toFixed(1)}% Compliant
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {facilityLocations.filter(f => f.status === 'OPERATIONAL').length}/{facilityLocations.length} Operational
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Food Safety & Quality Assurance
          </div>
        </div>
      </div>

      {/* Food Safety Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">HACCP COMPLIANCE</div>
              <div className="text-2xl font-bold text-green-100">
                {haccp.globalCompliance.toFixed(1)}%
              </div>
              <div className="text-xs text-green-300">
                {haccp.compliantCCPs}/{haccp.totalCCPs} CCPs
              </div>
            </div>
            <div className="text-3xl opacity-60">✅</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">QUALITY TESTS</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatNumber(qualityTesting.microbiological.totalTests)}
              </div>
              <div className="text-xs text-blue-300">
                {qualityTesting.microbiological.passRate.toFixed(1)}% Pass Rate
              </div>
            </div>
            <div className="text-3xl opacity-60">🧪</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">ACTIVE FACILITIES</div>
              <div className="text-2xl font-bold text-purple-100">
                {facilityLocations.filter(f => f.status === 'OPERATIONAL').length}
              </div>
              <div className="text-xs text-purple-300">
                Multi-Location Monitoring
              </div>
            </div>
            <div className="text-3xl opacity-60">🏭</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">OPEN INCIDENTS</div>
              <div className="text-2xl font-bold text-orange-100">
                {incidentTracking.filter(i => i.status !== 'RESOLVED').length}
              </div>
              <div className="text-xs text-orange-300">
                Requires Attention
              </div>
            </div>
            <div className="text-3xl opacity-60">⚠️</div>
          </div>
        </div>
      </div>

      {/* Facility Operations and HACCP Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Facility Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏭 FACILITY OPERATIONS & COMPLIANCE STATUS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {facilityLocations.map((facility) => (
              <div key={facility.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(facility.status)}`}>
                      {facility.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {facility.type.replace(/_/g, ' ')}
                    </span>
                    {facility.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {facility.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(facility.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{facility.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{facility.location} | Manager: {facility.manager}</div>

                {/* Certifications */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Certifications: </span>
                  {facility.certifications.map((cert, index) => (
                    <span key={index} className="text-green-400 bg-green-400/20 px-1 rounded mr-1">
                      {cert}
                    </span>
                  ))}
                </div>

                {/* Production Capacity */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Production: </span>
                  <span className="text-green-400">{formatNumber(facility.capacity.currentProduction)} meals</span>
                  <span className="text-gray-400"> / </span>
                  <span className="text-blue-400">{formatNumber(facility.capacity.dailyMeals)} capacity</span>
                  <span className="text-gray-400"> | Utilization: </span>
                  <span className={getComplianceColor(facility.capacity.utilizationRate)}>
                    {facility.capacity.utilizationRate.toFixed(1)}%
                  </span>
                </div>

                {/* HACCP Critical Control Points */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">HACCP CCPs: </span>
                  <span className="text-green-400">{facility.criticalControlPoints.inCompliance}</span>
                  <span className="text-gray-400"> / </span>
                  <span className="text-blue-400">{facility.criticalControlPoints.total}</span>
                  <span className="text-gray-400"> | Compliance: </span>
                  <span className={getComplianceColor(facility.criticalControlPoints.complianceRate)}>
                    {facility.criticalControlPoints.complianceRate.toFixed(1)}%
                  </span>
                </div>

                {/* Temperature Zones */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Temperature Zones:</div>
                  <div className="grid grid-cols-3 gap-1">
                    <div>
                      <span className="text-blue-400">Cold:</span> <span className="text-white">{facility.temperatureZones.refrigeration.avgTemp.toFixed(1)}°C</span>
                      <div className={`text-xs ${getStatusColor(facility.temperatureZones.refrigeration.status)}`}>
                        {facility.temperatureZones.refrigeration.inRange}/{facility.temperatureZones.refrigeration.zones}
                      </div>
                    </div>
                    <div>
                      <span className="text-cyan-400">Frozen:</span> <span className="text-white">{facility.temperatureZones.freezer.avgTemp.toFixed(1)}°C</span>
                      <div className={`text-xs ${getStatusColor(facility.temperatureZones.freezer.status)}`}>
                        {facility.temperatureZones.freezer.inRange}/{facility.temperatureZones.freezer.zones}
                      </div>
                    </div>
                    <div>
                      <span className="text-orange-400">Hot:</span> <span className="text-white">{facility.temperatureZones.hotHolding.avgTemp.toFixed(1)}°C</span>
                      <div className={`text-xs ${getStatusColor(facility.temperatureZones.hotHolding.status)}`}>
                        {facility.temperatureZones.hotHolding.inRange}/{facility.temperatureZones.hotHolding.zones}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quality Metrics */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Quality: </span>
                  <span className="text-green-400">Micro: {facility.qualityMetrics.microbiological.passRate.toFixed(1)}%</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">Allergen: {facility.qualityMetrics.allergenControl.complianceScore.toFixed(1)}%</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-purple-400">Staff: {facility.staff.certificationRate.toFixed(1)}%</span>
                </div>

                {/* Equipment Status */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Equipment: </span>
                  <span className="text-green-400">{facility.equipment.operational}</span>
                  <span className="text-gray-400"> / </span>
                  <span className="text-blue-400">{facility.equipment.totalEquipment}</span>
                  <span className="text-gray-400"> operational | Cleaning: </span>
                  <span className={getComplianceColor(facility.equipment.cleaningCompliance)}>
                    {facility.equipment.cleaningCompliance.toFixed(1)}%
                  </span>
                </div>

                {/* Supplier Information */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Suppliers: </span>
                  <span className="text-green-400">{facility.suppliers.approvedSuppliers} approved</span>
                  <span className="text-gray-400"> | Score: </span>
                  <span className={getComplianceColor(facility.suppliers.supplierScore)}>
                    {facility.suppliers.supplierScore.toFixed(1)}%
                  </span>
                  <span className="text-gray-400"> | Risk: </span>
                  <span className={getRiskColor(facility.suppliers.riskRating)}>
                    {facility.suppliers.riskRating}
                  </span>
                </div>

                {/* Recent Incidents */}
                {facility.incidents.totalIncidents > 0 && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Incidents: </span>
                    <span className="text-orange-400">{facility.incidents.totalIncidents} total</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-green-400">{facility.incidents.resolved} resolved</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-red-400">{facility.incidents.pending} pending</span>
                  </div>
                )}

                {facility.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {facility.alerts.slice(0, 2).map((alert, index) => (
                      <div key={index} className="text-orange-400">🚨 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* HACCP & Quality Monitoring */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📋 HACCP & QUALITY MONITORING SYSTEMS
          </h3>
          
          {/* HACCP Overview */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">HACCP Global Status</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Total CCPs Monitored</div>
                <div className="text-blue-400">{haccp.totalCCPs}</div>
              </div>
              <div>
                <div className="text-gray-400">Compliance Rate</div>
                <div className={getComplianceColor(haccp.globalCompliance)}>
                  {haccp.globalCompliance.toFixed(1)}%
                </div>
              </div>
              <div>
                <div className="text-gray-400">Monitoring Frequency</div>
                <div className="text-green-400">{haccp.monitoringFrequency}</div>
              </div>
              <div>
                <div className="text-gray-400">Corrective Actions</div>
                <div className="text-orange-400">{haccp.correctiveActions.pending}/{haccp.correctiveActions.total}</div>
              </div>
            </div>
          </div>

          {/* Quality Testing Results */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Quality Testing Results</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Microbiological Tests:</span>
                <span className={getComplianceColor(qualityTesting.microbiological.passRate)}>
                  {qualityTesting.microbiological.passedTests}/{qualityTesting.microbiological.totalTests} ({qualityTesting.microbiological.passRate.toFixed(1)}%)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Chemical Residue Tests:</span>
                <span className={getComplianceColor(qualityTesting.chemical.complianceRate)}>
                  {qualityTesting.chemical.withinLimits}/{qualityTesting.chemical.residueTests} ({qualityTesting.chemical.complianceRate.toFixed(1)}%)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Allergen Tests:</span>
                <span className="text-green-400">{qualityTesting.chemical.allergenTesting} completed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Physical Inspections:</span>
                <span className="text-blue-400">{qualityTesting.physical.visualInspections} completed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Packaging Integrity:</span>
                <span className={getComplianceColor(qualityTesting.physical.packagingIntegrity)}>
                  {qualityTesting.physical.packagingIntegrity.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {/* Supply Chain Metrics */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Supply Chain & Traceability</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Approved Suppliers:</span>
                <span className="text-green-400">{supplyChain.suppliers.approvedSuppliers}/{supplyChain.suppliers.totalSuppliers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Average Supplier Score:</span>
                <span className={getComplianceColor(supplyChain.suppliers.avgSupplierScore)}>
                  {supplyChain.suppliers.avgSupplierScore.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">High Risk Suppliers:</span>
                <span className="text-red-400">{supplyChain.suppliers.highRiskSuppliers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Traceability Completeness:</span>
                <span className="text-green-400">{supplyChain.traceability.finishedProductTracing.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Traceback Time:</span>
                <span className="text-blue-400">{supplyChain.traceability.tracebackTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Delivery Acceptance Rate:</span>
                <span className={getComplianceColor(supplyChain.receiving.acceptanceRate)}>
                  {supplyChain.receiving.acceptanceRate.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {/* Compliance Certifications */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Compliance Certifications</h4>
            <div className="space-y-2 text-xs">
              {Object.entries(complianceMetrics.certifications).map(([cert, details]) => (
                <div key={cert} className="flex justify-between">
                  <span className="text-gray-400">{cert.toUpperCase()}:</span>
                  <div className="flex items-center space-x-2">
                    <span className={`${getStatusColor(details.status)} px-1 rounded`}>
                      {details.status}
                    </span>
                    <span className={getComplianceColor(details.compliance)}>
                      {details.compliance.toFixed(1)}%
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex justify-between pt-2 border-t border-gray-600">
                <span className="text-gray-400">Audit Score:</span>
                <span className={getComplianceColor(complianceMetrics.audits.auditScore)}>
                  {complianceMetrics.audits.auditScore.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Temperature Trends and Incident Tracking */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Temperature Monitoring Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌡️ TEMPERATURE MONITORING TRENDS (24 HOURS)
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={temperatureTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12}/>
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
                dataKey="refrigeration" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Refrigeration (°C)"
              />
              <Line 
                type="monotone" 
                dataKey="freezer" 
                stroke="#06B6D4" 
                strokeWidth={2}
                name="Freezer (°C)"
              />
              <Line 
                type="monotone" 
                dataKey="hotHolding" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Hot Holding (°C)"
              />
              <Line 
                type="monotone" 
                dataKey="ambient" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Ambient (°C)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Incident Tracking */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 INCIDENT TRACKING & INVESTIGATION STATUS
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {incidentTracking.map((incident) => (
              <div key={incident.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(incident.status)}`}>
                      {incident.status}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {incident.type.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {incident.id}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{incident.description}</div>
                <div className="text-xs text-cyan-400 mb-2">{incident.facility}</div>
                <div className="text-xs text-purple-400 mb-3">
                  Reported by: {incident.reportedBy}
                </div>

                {/* Affected Products */}
                {incident.affectedProducts.length > 0 && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Affected Products: </span>
                    {incident.affectedProducts.map((product, index) => (
                      <span key={index} className="text-orange-400">{product}</span>
                    ))}
                  </div>
                )}

                {/* Root Cause */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Root Cause: </span>
                  <span className="text-yellow-400">{incident.rootCause}</span>
                </div>

                {/* Corrective Actions */}
                {incident.correctiveActions.length > 0 && (
                  <div className="text-xs mb-2">
                    <div className="text-gray-400">Corrective Actions:</div>
                    {incident.correctiveActions.slice(0, 2).map((action, index) => (
                      <div key={index} className="text-green-400">• {action}</div>
                    ))}
                  </div>
                )}

                {/* Timeline */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Recent Timeline:</div>
                  {incident.timeline.slice(-2).map((event, index) => (
                    <div key={index} className="text-blue-400">
                      • {new Date(event.time).toLocaleString()} - {event.event}
                    </div>
                  ))}
                </div>

                {/* Customer Impact */}
                {incident.customerComplaints > 0 && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Customer Complaints: </span>
                    <span className="text-red-400">{incident.customerComplaints}</span>
                  </div>
                )}

                {/* Resolution Timeline */}
                {incident.estimatedResolution !== 'COMPLETED' && (
                  <div className="text-xs">
                    <span className="text-gray-400">Est. Resolution: </span>
                    <span className="text-yellow-400">
                      {new Date(incident.estimatedResolution).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Food Safety KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 FOOD SAFETY KPIs & QUALITY ASSURANCE METRICS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">HACCP Compliance</div>
            <div className="text-white font-bold text-lg">
              {haccp.globalCompliance.toFixed(1)}%
            </div>
            <div className="text-green-400 text-xs">critical control points</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Quality Test Pass Rate</div>
            <div className="text-white font-bold text-lg">
              {qualityTesting.microbiological.passRate.toFixed(1)}%
            </div>
            <div className="text-blue-400 text-xs">microbiological safety</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Supplier Score</div>
            <div className="text-white font-bold text-lg">
              {supplyChain.suppliers.avgSupplierScore.toFixed(1)}%
            </div>
            <div className="text-purple-400 text-xs">supply chain quality</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Traceability</div>
            <div className="text-white font-bold text-lg">
              {supplyChain.traceability.finishedProductTracing.toFixed(1)}%
            </div>
            <div className="text-orange-400 text-xs">product tracking</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Audit Score</div>
            <div className="text-white font-bold text-lg">
              {complianceMetrics.audits.auditScore.toFixed(1)}%
            </div>
            <div className="text-cyan-400 text-xs">compliance rating</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Active Incidents</div>
            <div className="text-white font-bold text-lg">
              {incidentTracking.filter(i => i.status !== 'RESOLVED').length}
            </div>
            <div className="text-yellow-400 text-xs">under investigation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSafetyOperations;