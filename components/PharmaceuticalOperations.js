// PharmaceuticalOperations.js - Pharmaceutical Manufacturing Operations Control Center & GMP Compliance Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const PharmaceuticalOperations = () => {
  const [productionLines, setProductionLines] = useState([
    {
      id: 'line_001',
      name: 'Tablet Production Line A',
      product: 'Aspirin 325mg Tablets',
      batch: 'ASP240305001',
      status: 'PRODUCING',
      gmpCompliance: 98.4, // percentage
      location: 'Manufacturing Floor 2',
      operator: 'Sarah Chen, PharmD',
      currentStep: 'TABLET_COMPRESSION',
      stepProgress: 67.3, // percentage
      startTime: '2026-03-05T06:00:00Z',
      estimatedCompletion: '2026-03-05T18:30:00Z',
      capacity: {
        designCapacity: 450000, // tablets per batch
        currentOutput: 302550,
        utilizationRate: 67.3,
        productionRate: 24500 // tablets per hour
      },
      quality: {
        inProcessTests: {
          total: 12,
          passed: 11,
          failed: 1,
          passRate: 91.7
        },
        hardnessTest: {
          target: '8-12 kP',
          actual: '10.2 kP',
          status: 'COMPLIANT'
        },
        disintegrationTest: {
          target: '<15 min',
          actual: '8.7 min',
          status: 'COMPLIANT'
        },
        uniformityTest: {
          target: '±5%',
          actual: '±2.1%',
          status: 'COMPLIANT'
        }
      },
      environment: {
        cleanRoomClass: 'ISO 8',
        temperature: 21.4, // celsius
        humidity: 42.3, // percentage
        particleCount: 89234, // particles/m³
        pressureDiff: 12.3, // Pa
        airChanges: 18.7 // per hour
      },
      equipment: {
        tablet_press: {
          status: 'OPERATIONAL',
          efficiency: 96.7,
          punches: 'GOOD_CONDITION',
          compression_force: '18.2 kN',
          speed: '89 rpm'
        },
        granulator: {
          status: 'OPERATIONAL',
          temperature: '67.8°C',
          mixing_speed: '234 rpm',
          granule_size: '0.8-1.2 mm'
        },
        coating_machine: {
          status: 'STANDBY',
          spray_rate: '0.0 g/min',
          inlet_temp: '65°C',
          outlet_temp: '42°C'
        }
      },
      rawMaterials: {
        api: {
          name: 'Aspirin USP',
          lot: 'ASP-2024-078',
          remaining: 234.7, // kg
          purity: 99.8, // percentage
          expiry: '2026-12-15'
        },
        excipients: [
          { name: 'Microcrystalline Cellulose', lot: 'MCC-2024-156', remaining: 456.2, unit: 'kg' },
          { name: 'Corn Starch', lot: 'CS-2024-089', remaining: 189.4, unit: 'kg' },
          { name: 'Magnesium Stearate', lot: 'MS-2024-234', remaining: 12.8, unit: 'kg' }
        ]
      },
      compliance: {
        batchRecord: 'ELECTRONIC',
        deviations: 1,
        criticalDeviations: 0,
        capa: 'NONE_REQUIRED',
        validationStatus: 'VALIDATED',
        lastCalibration: '2026-02-28'
      },
      alerts: ['Minor weight variation detected in compression step'],
      lastUpdate: Date.now() - 4 * 60 * 1000
    },
    {
      id: 'line_002',
      name: 'Liquid Fill Line B',
      product: 'Amoxicillin Oral Suspension 250mg/5mL',
      batch: 'AMX240305002',
      status: 'FILLING',
      gmpCompliance: 99.2,
      location: 'Liquid Manufacturing Suite',
      operator: 'Michael Rodriguez, PharmD',
      currentStep: 'ASEPTIC_FILLING',
      stepProgress: 45.8,
      startTime: '2026-03-05T08:30:00Z',
      estimatedCompletion: '2026-03-05T16:45:00Z',
      capacity: {
        designCapacity: 12000, // bottles per batch
        currentOutput: 5496,
        utilizationRate: 45.8,
        productionRate: 1450 // bottles per hour
      },
      quality: {
        inProcessTests: {
          total: 15,
          passed: 15,
          failed: 0,
          passRate: 100.0
        },
        sterility: {
          status: 'STERILE',
          bioburden: '<10 CFU/mL',
          endotoxin: '<0.5 EU/mL'
        },
        assay: {
          target: '90-110% LC',
          actual: '98.7% LC',
          status: 'COMPLIANT'
        },
        viscosity: {
          target: '800-1200 cP',
          actual: '1050 cP',
          status: 'COMPLIANT'
        }
      },
      environment: {
        cleanRoomClass: 'ISO 5',
        temperature: 20.1,
        humidity: 45.8,
        particleCount: 3567, // particles/m³
        pressureDiff: 25.7,
        airChanges: 22.4
      },
      equipment: {
        filling_machine: {
          status: 'OPERATIONAL',
          fill_volume: '120.2 mL',
          accuracy: '±0.8%',
          speed: '1450 bottles/hr',
          nozzles: '12 active'
        },
        capping_machine: {
          status: 'OPERATIONAL',
          torque: '15.2 in-lb',
          cap_presence: '100%',
          alignment: 'GOOD'
        },
        labeling: {
          status: 'OPERATIONAL',
          print_quality: 'EXCELLENT',
          alignment: '±0.5mm',
          verification: '100%'
        }
      },
      rawMaterials: {
        api: {
          name: 'Amoxicillin Trihydrate',
          lot: 'AMX-2024-045',
          remaining: 89.6,
          purity: 99.4,
          expiry: '2026-09-22'
        },
        excipients: [
          { name: 'Purified Water', lot: 'PW-2024-034', remaining: 2340, unit: 'L' },
          { name: 'Sodium Benzoate', lot: 'SB-2024-167', remaining: 45.7, unit: 'kg' },
          { name: 'Citric Acid', lot: 'CA-2024-098', remaining: 23.4, unit: 'kg' }
        ]
      },
      compliance: {
        batchRecord: 'ELECTRONIC',
        deviations: 0,
        criticalDeviations: 0,
        capa: 'NONE_REQUIRED',
        validationStatus: 'VALIDATED',
        lastCalibration: '2026-03-01'
      },
      alerts: ['Excellent sterility test results', 'All quality parameters within specification'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'line_003',
      name: 'Injectable Production Line C',
      product: 'Morphine Injection 10mg/mL',
      batch: 'MOR240305003',
      status: 'STERILIZATION',
      gmpCompliance: 97.8,
      location: 'Sterile Manufacturing Suite',
      operator: 'Dr. Lisa Wang, PharmD',
      currentStep: 'TERMINAL_STERILIZATION',
      stepProgress: 78.5,
      startTime: '2026-03-05T04:00:00Z',
      estimatedCompletion: '2026-03-05T20:15:00Z',
      capacity: {
        designCapacity: 5000, // vials per batch
        currentOutput: 3925,
        utilizationRate: 78.5,
        productionRate: 625 // vials per hour
      },
      quality: {
        inProcessTests: {
          total: 18,
          passed: 17,
          failed: 1,
          passRate: 94.4
        },
        sterility: {
          status: 'IN_PROCESS',
          bioburden: '<1 CFU/mL',
          endotoxin: '<0.25 EU/mL'
        },
        assay: {
          target: '95-105% LC',
          actual: '101.2% LC',
          status: 'COMPLIANT'
        },
        particulate: {
          target: '<25 particles/mL ≥10μm',
          actual: '18 particles/mL',
          status: 'COMPLIANT'
        }
      },
      environment: {
        cleanRoomClass: 'ISO 5',
        temperature: 19.8,
        humidity: 48.2,
        particleCount: 2845,
        pressureDiff: 28.4,
        airChanges: 25.6
      },
      equipment: {
        filling_machine: {
          status: 'STANDBY',
          fill_volume: '1.02 mL',
          accuracy: '±0.5%',
          speed: '0 vials/hr',
          needles: '8 sterilized'
        },
        autoclave: {
          status: 'STERILIZING',
          temperature: '121.2°C',
          pressure: '15.8 PSI',
          cycle_time: '15 min',
          fo_value: '12.4'
        },
        integrity_tester: {
          status: 'OPERATIONAL',
          test_method: 'HVLD',
          reject_rate: '0.2%',
          sensitivity: '2 μA'
        }
      },
      rawMaterials: {
        api: {
          name: 'Morphine Sulfate USP',
          lot: 'MOR-2024-123',
          remaining: 4.8,
          purity: 99.9,
          expiry: '2027-01-15'
        },
        excipients: [
          { name: 'Sodium Chloride', lot: 'SC-2024-078', remaining: 12.4, unit: 'kg' },
          { name: 'Water for Injection', lot: 'WFI-2024-234', remaining: 150, unit: 'L' },
          { name: 'Sodium Metabisulfite', lot: 'SMS-2024-156', remaining: 2.8, unit: 'kg' }
        ]
      },
      compliance: {
        batchRecord: 'ELECTRONIC',
        deviations: 2,
        criticalDeviations: 0,
        capa: 'INVESTIGATING',
        validationStatus: 'VALIDATED',
        lastCalibration: '2026-02-25'
      },
      alerts: ['Sterilization cycle in progress', 'One failed particulate test under investigation'],
      lastUpdate: Date.now() - 6 * 60 * 1000
    },
    {
      id: 'line_004',
      name: 'Packaging Line D',
      product: 'Various Products - Secondary Packaging',
      batch: 'PKG240305004',
      status: 'MAINTENANCE',
      gmpCompliance: 95.1,
      location: 'Packaging Department',
      operator: 'Maintenance Team',
      currentStep: 'PREVENTIVE_MAINTENANCE',
      stepProgress: 60.0,
      startTime: '2026-03-05T14:00:00Z',
      estimatedCompletion: '2026-03-05T22:00:00Z',
      capacity: {
        designCapacity: 25000, // units per batch
        currentOutput: 0,
        utilizationRate: 0.0,
        productionRate: 0
      },
      quality: {
        inProcessTests: {
          total: 0,
          passed: 0,
          failed: 0,
          passRate: 0.0
        }
      },
      environment: {
        cleanRoomClass: 'Controlled (Non-classified)',
        temperature: 22.1,
        humidity: 55.2,
        particleCount: 0, // not monitored
        pressureDiff: 5.2,
        airChanges: 8.5
      },
      equipment: {
        cartoning_machine: {
          status: 'MAINTENANCE',
          efficiency: 0.0,
          speed: '0 cartons/min',
          reject_rate: '0.0%'
        },
        case_packer: {
          status: 'MAINTENANCE',
          speed: '0 cases/min',
          alignment: 'OFFLINE',
          glue_application: 'OFFLINE'
        },
        serialization: {
          status: 'MAINTENANCE',
          printing: 'OFFLINE',
          verification: 'OFFLINE',
          database_connection: 'OFFLINE'
        }
      },
      rawMaterials: {
        packagingMaterials: [
          { name: 'Carton Boxes', lot: 'CB-2024-234', remaining: 25000, unit: 'pieces' },
          { name: 'Patient Information Leaflets', lot: 'PIL-2024-167', remaining: 30000, unit: 'pieces' },
          { name: 'Blister Packs', lot: 'BP-2024-345', remaining: 15000, unit: 'pieces' }
        ]
      },
      compliance: {
        batchRecord: 'N/A',
        deviations: 0,
        criticalDeviations: 0,
        capa: 'NONE_REQUIRED',
        validationStatus: 'VALIDATED',
        lastCalibration: '2026-02-20'
      },
      alerts: ['Scheduled preventive maintenance in progress', 'Expected completion: 22:00'],
      lastUpdate: Date.now() - 15 * 60 * 1000
    }
  ]);

  const [qualityLabs, setQualityLabs] = useState([
    {
      id: 'lab_001',
      name: 'Quality Control Laboratory',
      type: 'QC_LAB',
      status: 'OPERATIONAL',
      manager: 'Dr. Robert Kim, PhD',
      workload: {
        totalSamples: 45,
        pendingSamples: 12,
        testingInProgress: 18,
        completedToday: 15,
        utilizationRate: 86.7
      },
      testing: {
        hplc: {
          instruments: 4,
          operational: 4,
          samplesQueued: 8,
          avgRunTime: '35 min',
          efficiency: 94.2
        },
        gc: {
          instruments: 2,
          operational: 2,
          samplesQueued: 3,
          avgRunTime: '28 min',
          efficiency: 91.8
        },
        dissolution: {
          instruments: 6,
          operational: 5,
          samplesQueued: 12,
          avgRunTime: '45 min',
          efficiency: 88.9
        },
        microbiology: {
          incubators: 8,
          operational: 8,
          samplesQueued: 15,
          avgIncubationTime: '48 hours',
          contamination_rate: 1.2 // percentage
        }
      },
      compliance: {
        calibrationCurrent: 96.8, // percentage of instruments
        methodValidation: 'CURRENT',
        stability_storage: {
          refrigerator: '2-8°C',
          freezer: '-20°C',
          accelerated: '40°C/75% RH',
          longterm: '25°C/60% RH'
        },
        deviations: 2,
        oos_investigations: 1,
        change_controls: 3
      },
      environment: {
        temperature: 21.8,
        humidity: 45.6,
        cleanRoomClass: 'Controlled',
        fume_hoods: 12,
        operational_hoods: 11
      },
      alerts: ['1 HPLC method validation due next week', 'OOS investigation in progress for batch AMX240302001'],
      lastUpdate: Date.now() - 3 * 60 * 1000
    },
    {
      id: 'lab_002',
      name: 'Research & Development Laboratory',
      type: 'RD_LAB',
      status: 'OPERATIONAL',
      manager: 'Dr. Elena Vasquez, PhD',
      workload: {
        totalProjects: 12,
        activeProjects: 8,
        formulationStudies: 5,
        stabilityStudies: 3,
        utilizationRate: 75.4
      },
      testing: {
        formulation_development: {
          batches_planned: 15,
          batches_completed: 9,
          success_rate: 67.3,
          optimization_cycles: 4
        },
        analytical_method_development: {
          methods_in_development: 6,
          methods_validated: 2,
          transfer_to_qc: 1,
          validation_timeline: '4-6 weeks'
        },
        stability_testing: {
          active_studies: 8,
          time_points_due: 24,
          completed_timepoints: 18,
          failure_rate: 8.3
        }
      },
      compliance: {
        protocols: 'GDP_COMPLIANT',
        data_integrity: 98.7,
        laboratory_notebook: 'ELECTRONIC',
        method_transfer: 'VALIDATED'
      },
      environment: {
        temperature: 22.4,
        humidity: 42.1,
        fume_hoods: 8,
        operational_hoods: 7
      },
      alerts: ['New product formulation showing promising results', '2 stability studies nearing completion'],
      lastUpdate: Date.now() - 5 * 60 * 1000
    }
  ]);

  const [complianceMetrics, setComplianceMetrics] = useState({
    gmp_compliance: {
      overall_score: 98.1, // percentage
      critical_deviations: 0,
      major_deviations: 3,
      minor_deviations: 12,
      capa_open: 8,
      capa_overdue: 1
    },
    fda_compliance: {
      last_inspection: '2025-11-15',
      inspection_classification: 'VAI', // Voluntary Action Indicated
      observations: 3,
      response_submitted: true,
      next_inspection_estimated: '2027-11-15'
    },
    validation_status: {
      equipment_qualified: 94.7, // percentage
      processes_validated: 96.2,
      cleaning_validated: 98.1,
      computer_systems: 91.5,
      utilities: 99.2
    },
    audit_management: {
      internal_audits: 12, // this year
      external_audits: 4,
      supplier_audits: 15,
      findings_closed: 89.4, // percentage
      audit_score: 91.8
    },
    documentation: {
      sop_current: 97.3, // percentage
      training_current: 94.8,
      batch_records: 'ELECTRONIC',
      electronic_signatures: 99.1,
      data_integrity: 98.4
    },
    regulatory: {
      drug_master_files: 8,
      andas_approved: 23,
      ndas_active: 3,
      annual_reports: 'SUBMITTED',
      adverse_events: 12 // reported this quarter
    }
  });

  const [supplyChain, setSupplyChain] = useState({
    serialization: {
      units_serialized: 2456789, // this month
      aggregation_complete: 98.7, // percentage
      verification_rate: 99.8,
      dscsa_compliance: 94.2,
      suspect_products: 0,
      investigation_requests: 3
    },
    inventory: {
      api_inventory: {
        total_skus: 156,
        low_stock_alerts: 8,
        expired_materials: 2,
        quarantine: 12,
        approved_for_use: 134
      },
      finished_goods: {
        total_skus: 89,
        ready_for_release: 67,
        pending_qc: 15,
        recalled_products: 0,
        expiry_within_6months: 23
      }
    },
    suppliers: {
      total_suppliers: 67,
      qualified_suppliers: 62,
      audited_this_year: 34,
      risk_rating: {
        low: 45,
        medium: 17,
        high: 5
      },
      supplier_score: 92.4
    },
    cold_chain: {
      controlled_shipments: 145, // this month
      temperature_excursions: 3,
      successful_deliveries: 98.9, // percentage
      monitoring_devices: 234,
      calibration_current: 96.7
    }
  });

  const [productionTrends, setProductionTrends] = useState([]);

  const generateProductionTrends = () => {
    const data = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}),
        tablets: Math.floor(Math.random() * 100000) + 350000, // 350-450k tablets
        liquids: Math.floor(Math.random() * 5000) + 10000, // 10-15k bottles
        injectables: Math.floor(Math.random() * 2000) + 3000, // 3-5k vials
        gmpScore: Math.floor(Math.random() * 4) + 96, // 96-100%
        qualityTests: Math.floor(Math.random() * 20) + 80, // 80-100 tests
        deviations: Math.floor(Math.random() * 3) + 0 // 0-3 deviations
      });
    }
    return data;
  };

  useEffect(() => {
    setProductionTrends(generateProductionTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update production lines
      setProductionLines(prev => prev.map(line => {
        if (line.status === 'PRODUCING' || line.status === 'FILLING' || line.status === 'STERILIZATION') {
          return {
            ...line,
            stepProgress: Math.min(100, line.stepProgress + Math.random() * 2),
            capacity: {
              ...line.capacity,
              currentOutput: Math.min(line.capacity.designCapacity, 
                line.capacity.currentOutput + Math.random() * 1000),
              productionRate: Math.max(0, line.capacity.productionRate + (Math.random() - 0.5) * 100)
            },
            environment: {
              ...line.environment,
              temperature: Math.max(18, Math.min(25, line.environment.temperature + (Math.random() - 0.5) * 0.5)),
              humidity: Math.max(40, Math.min(60, line.environment.humidity + (Math.random() - 0.5) * 2))
            },
            lastUpdate: Date.now()
          };
        }
        return { ...line, lastUpdate: Date.now() };
      }));

      // Update quality labs workload
      setQualityLabs(prev => prev.map(lab => ({
        ...lab,
        workload: {
          ...lab.workload,
          pendingSamples: Math.max(0, lab.workload.pendingSamples + Math.floor((Math.random() - 0.6) * 3)),
          completedToday: lab.workload.completedToday + Math.floor(Math.random() * 2)
        },
        lastUpdate: Date.now()
      })));

    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'PRODUCING':
      case 'FILLING':
      case 'OPERATIONAL':
      case 'COMPLIANT':
      case 'VALIDATED':
      case 'STERILE':
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'STERILIZATION':
      case 'IN_PROCESS':
      case 'INVESTIGATING':
      case 'CURRENT': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'MAINTENANCE':
      case 'STANDBY':
      case 'OFFLINE':
      case 'PENDING': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'CRITICAL':
      case 'FAILED':
      case 'CONTAMINATED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'GOOD':
      case 'GOOD_CONDITION':
      case 'ACTIVE': return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
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

  const getQualityColor = (value, target) => {
    if (value >= target * 0.98) return 'text-green-400';
    if (value >= target * 0.95) return 'text-blue-400';
    if (value >= target * 0.90) return 'text-yellow-400';
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
          💊 PHARMACEUTICAL OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            GMP {complianceMetrics.gmp_compliance.overall_score.toFixed(1)}% Compliant
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {productionLines.filter(line => line.status === 'PRODUCING' || line.status === 'FILLING' || line.status === 'STERILIZATION').length}/{productionLines.length} Lines Active
          </div>
          <div className="text-sm text-gray-400 font-mono">
            GMP Manufacturing & FDA Compliance
          </div>
        </div>
      </div>

      {/* Pharmaceutical Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">GMP COMPLIANCE</div>
              <div className="text-2xl font-bold text-blue-100">
                {complianceMetrics.gmp_compliance.overall_score.toFixed(1)}%
              </div>
              <div className="text-xs text-blue-300">
                Current Good Manufacturing
              </div>
            </div>
            <div className="text-3xl opacity-60">✅</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">ACTIVE BATCHES</div>
              <div className="text-2xl font-bold text-purple-100">
                {productionLines.filter(line => line.batch && line.status !== 'MAINTENANCE').length}
              </div>
              <div className="text-xs text-purple-300">
                In Production Today
              </div>
            </div>
            <div className="text-3xl opacity-60">🏭</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">QUALITY TESTS</div>
              <div className="text-2xl font-bold text-green-100">
                {qualityLabs.reduce((sum, lab) => sum + lab.workload.completedToday, 0)}
              </div>
              <div className="text-xs text-green-300">
                Completed Today
              </div>
            </div>
            <div className="text-3xl opacity-60">🧪</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">SERIALIZED UNITS</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(supplyChain.serialization.units_serialized / 1000, 1)}K
              </div>
              <div className="text-xs text-orange-300">
                This Month (DSCSA)
              </div>
            </div>
            <div className="text-3xl opacity-60">📦</div>
          </div>
        </div>
      </div>

      {/* Production Lines and Quality Labs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Production Lines */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏭 PRODUCTION LINES & BATCH MANUFACTURING
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {productionLines.map((line) => (
              <div key={line.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(line.status)}`}>
                      {line.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-blue-600 text-white">
                      GMP {line.gmpCompliance.toFixed(1)}%
                    </span>
                    {line.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {line.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(line.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{line.name}</div>
                <div className="text-xs text-cyan-400 mb-1">{line.product}</div>
                <div className="text-xs text-purple-400 mb-2">
                  Batch: {line.batch} | Operator: {line.operator}
                </div>

                {/* Production Progress */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Step: </span>
                  <span className="text-blue-400">{line.currentStep?.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | Progress: </span>
                  <span className={getComplianceColor(line.stepProgress)}>
                    {line.stepProgress?.toFixed(1)}%
                  </span>
                  <span className="text-gray-400"> | ETA: </span>
                  <span className="text-yellow-400">
                    {line.estimatedCompletion ? new Date(line.estimatedCompletion).toLocaleTimeString() : 'N/A'}
                  </span>
                </div>

                {/* Capacity and Output */}
                {line.capacity && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Output: </span>
                    <span className="text-green-400">{formatNumber(line.capacity.currentOutput)}</span>
                    <span className="text-gray-400"> / </span>
                    <span className="text-blue-400">{formatNumber(line.capacity.designCapacity)}</span>
                    <span className="text-gray-400"> | Rate: </span>
                    <span className="text-purple-400">{formatNumber(line.capacity.productionRate)}/hr</span>
                    <span className="text-gray-400"> | Util: </span>
                    <span className={getComplianceColor(line.capacity.utilizationRate)}>
                      {line.capacity.utilizationRate?.toFixed(1)}%
                    </span>
                  </div>
                )}

                {/* Quality Metrics */}
                {line.quality && line.quality.inProcessTests && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Quality: </span>
                    <span className="text-green-400">{line.quality.inProcessTests.passed}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-blue-400">{line.quality.inProcessTests.total} tests</span>
                    <span className="text-gray-400"> | Pass Rate: </span>
                    <span className={getComplianceColor(line.quality.inProcessTests.passRate)}>
                      {line.quality.inProcessTests.passRate.toFixed(1)}%
                    </span>
                  </div>
                )}

                {/* Specific Quality Tests */}
                {line.quality && (
                  <div className="text-xs mb-2">
                    <div className="text-gray-400">Test Results:</div>
                    {Object.entries(line.quality).filter(([key]) => key !== 'inProcessTests').map(([test, data]) => (
                      <div key={test} className="grid grid-cols-2 gap-1">
                        <div>
                          <span className="text-blue-400">{test.replace(/([A-Z])/g, ' $1').replace(/Test$/, '')}:</span>
                        </div>
                        <div>
                          {typeof data === 'object' && data.status ? (
                            <span className={getStatusColor(data.status)}>
                              {data.actual || data.status}
                            </span>
                          ) : (
                            <span className="text-white">{data}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Environment */}
                {line.environment && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Environment: </span>
                    <span className="text-blue-400">{line.environment.cleanRoomClass}</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-cyan-400">{line.environment.temperature?.toFixed(1)}°C</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-green-400">{line.environment.humidity?.toFixed(1)}% RH</span>
                    <span className="text-gray-400"> | ΔP: </span>
                    <span className="text-purple-400">{line.environment.pressureDiff?.toFixed(1)} Pa</span>
                  </div>
                )}

                {/* Equipment Status */}
                {line.equipment && (
                  <div className="text-xs mb-2">
                    <div className="text-gray-400">Equipment Status:</div>
                    <div className="grid grid-cols-2 gap-1">
                      {Object.entries(line.equipment).slice(0, 4).map(([equip, status]) => (
                        <div key={equip}>
                          <span className="text-orange-400">{equip.replace(/_/g, ' ')}:</span>
                          <span className={`ml-1 ${getStatusColor(typeof status === 'object' ? status.status : status)}`}>
                            {typeof status === 'object' ? status.status : status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Raw Materials */}
                {line.rawMaterials && line.rawMaterials.api && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">API: </span>
                    <span className="text-green-400">{line.rawMaterials.api.name}</span>
                    <span className="text-gray-400"> | Lot: </span>
                    <span className="text-blue-400">{line.rawMaterials.api.lot}</span>
                    <span className="text-gray-400"> | Remaining: </span>
                    <span className="text-purple-400">{line.rawMaterials.api.remaining.toFixed(1)} kg</span>
                    <span className="text-gray-400"> | Purity: </span>
                    <span className={getComplianceColor(line.rawMaterials.api.purity)}>
                      {line.rawMaterials.api.purity?.toFixed(1)}%
                    </span>
                  </div>
                )}

                {/* Compliance */}
                {line.compliance && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Compliance: </span>
                    <span className={getStatusColor(line.compliance.validationStatus)}>
                      {line.compliance.validationStatus}
                    </span>
                    <span className="text-gray-400"> | Deviations: </span>
                    <span className={line.compliance.deviations > 0 ? 'text-orange-400' : 'text-green-400'}>
                      {line.compliance.deviations}
                    </span>
                    <span className="text-gray-400"> | Critical: </span>
                    <span className={line.compliance.criticalDeviations > 0 ? 'text-red-400' : 'text-green-400'}>
                      {line.compliance.criticalDeviations}
                    </span>
                  </div>
                )}

                {line.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {line.alerts.slice(0, 2).map((alert, index) => (
                      <div key={index} className="text-orange-400">💊 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quality Control Labs */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🧪 QUALITY CONTROL LABORATORIES & TESTING
          </h3>
          
          {qualityLabs.map((lab) => (
            <div key={lab.id} className="bg-gray-700 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(lab.status)}`}>
                    {lab.status}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {lab.type.replace(/_/g, ' ')}
                  </span>
                  {lab.alerts.length > 0 && (
                    <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                      {lab.alerts.length} alerts
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-400">
                  {formatTime(lab.lastUpdate)}
                </div>
              </div>
              
              <div className="text-sm font-bold text-white mb-1">{lab.name}</div>
              <div className="text-xs text-cyan-400 mb-3">Manager: {lab.manager}</div>

              {/* Workload Status */}
              <div className="text-xs mb-3">
                <span className="text-gray-400">Workload: </span>
                <span className="text-green-400">{lab.workload.completedToday} completed</span>
                <span className="text-gray-400"> | </span>
                <span className="text-orange-400">{lab.workload.pendingSamples} pending</span>
                <span className="text-gray-400"> | </span>
                <span className="text-blue-400">{lab.workload.testingInProgress} in progress</span>
                <span className="text-gray-400"> | Util: </span>
                <span className={getComplianceColor(lab.workload.utilizationRate)}>
                  {lab.workload.utilizationRate.toFixed(1)}%
                </span>
              </div>

              {/* Testing Equipment */}
              {lab.testing && (
                <div className="text-xs mb-3">
                  <div className="text-gray-400">Testing Instruments:</div>
                  {Object.entries(lab.testing).map(([instrument, data]) => (
                    <div key={instrument} className="flex justify-between">
                      <span className="text-blue-400">{instrument.toUpperCase()}:</span>
                      <div>
                        {data.instruments && (
                          <>
                            <span className="text-green-400">{data.operational}/{data.instruments}</span>
                            <span className="text-gray-400"> | Queue: </span>
                            <span className="text-orange-400">{data.samplesQueued}</span>
                            {data.efficiency && (
                              <>
                                <span className="text-gray-400"> | Eff: </span>
                                <span className={getComplianceColor(data.efficiency)}>
                                  {data.efficiency.toFixed(1)}%
                                </span>
                              </>
                            )}
                          </>
                        )}
                        {data.batches_completed !== undefined && (
                          <>
                            <span className="text-green-400">{data.batches_completed}/{data.batches_planned}</span>
                            <span className="text-gray-400"> batches | Success: </span>
                            <span className={getComplianceColor(data.success_rate)}>
                              {data.success_rate.toFixed(1)}%
                            </span>
                          </>
                        )}
                        {data.active_studies !== undefined && (
                          <>
                            <span className="text-blue-400">{data.active_studies} studies</span>
                            <span className="text-gray-400"> | Timepoints: </span>
                            <span className="text-green-400">{data.completed_timepoints}/{data.time_points_due}</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Compliance */}
              {lab.compliance && (
                <div className="text-xs mb-3">
                  <div className="text-gray-400">Compliance Status:</div>
                  <div className="grid grid-cols-2 gap-1">
                    {Object.entries(lab.compliance).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-purple-400">{key.replace(/_/g, ' ')}:</span>
                        <span className={`ml-1 ${typeof value === 'number' ? getComplianceColor(value) : getStatusColor(value)}`}>
                          {typeof value === 'number' ? `${value.toFixed(1)}%` : value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Environment */}
              <div className="text-xs mb-2">
                <span className="text-gray-400">Environment: </span>
                <span className="text-cyan-400">{lab.environment.temperature.toFixed(1)}°C</span>
                <span className="text-gray-400"> | </span>
                <span className="text-green-400">{lab.environment.humidity.toFixed(1)}% RH</span>
                {lab.environment.fume_hoods && (
                  <>
                    <span className="text-gray-400"> | Hoods: </span>
                    <span className="text-blue-400">{lab.environment.operational_hoods}/{lab.environment.fume_hoods}</span>
                  </>
                )}
              </div>

              {lab.alerts.length > 0 && (
                <div className="text-xs">
                  <div className="text-gray-400">Alerts:</div>
                  {lab.alerts.map((alert, index) => (
                    <div key={index} className="text-orange-400">🧪 {alert}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Production Trends and Compliance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Production Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 PHARMACEUTICAL PRODUCTION TRENDS (30 DAYS)
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={productionTrends}>
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
                dataKey="tablets"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.1}
                strokeWidth={3}
                name="Tablets Produced"
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="liquids" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Liquid Bottles"
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="injectables" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Injectable Vials"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="gmpScore" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="GMP Score (%)"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="qualityTests" 
                stroke="#06B6D4" 
                strokeWidth={2}
                name="Quality Tests"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Compliance & Regulatory Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📋 COMPLIANCE & REGULATORY STATUS
          </h3>
          
          {/* GMP Compliance */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">GMP Compliance Overview</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Overall Score</div>
                <div className={getComplianceColor(complianceMetrics.gmp_compliance.overall_score)}>
                  {complianceMetrics.gmp_compliance.overall_score.toFixed(1)}%
                </div>
              </div>
              <div>
                <div className="text-gray-400">Critical Deviations</div>
                <div className={complianceMetrics.gmp_compliance.critical_deviations === 0 ? 'text-green-400' : 'text-red-400'}>
                  {complianceMetrics.gmp_compliance.critical_deviations}
                </div>
              </div>
              <div>
                <div className="text-gray-400">Major Deviations</div>
                <div className="text-orange-400">{complianceMetrics.gmp_compliance.major_deviations}</div>
              </div>
              <div>
                <div className="text-gray-400">Open CAPAs</div>
                <div className="text-blue-400">{complianceMetrics.gmp_compliance.capa_open}</div>
              </div>
            </div>
          </div>

          {/* FDA Status */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">FDA Inspection Status</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Last Inspection:</span>
                <span className="text-blue-400">{complianceMetrics.fda_compliance.last_inspection}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Classification:</span>
                <span className={getStatusColor(complianceMetrics.fda_compliance.inspection_classification)}>
                  {complianceMetrics.fda_compliance.inspection_classification}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Observations:</span>
                <span className="text-yellow-400">{complianceMetrics.fda_compliance.observations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Response Submitted:</span>
                <span className="text-green-400">{complianceMetrics.fda_compliance.response_submitted ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>

          {/* Validation Status */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Validation Status</h4>
            <div className="space-y-2 text-xs">
              {Object.entries(complianceMetrics.validation_status).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-400">{key.replace(/_/g, ' ')}:</span>
                  <span className={getComplianceColor(value)}>
                    {value.toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Supply Chain & Serialization */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Supply Chain & Serialization</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">DSCSA Compliance:</span>
                <span className={getComplianceColor(supplyChain.serialization.dscsa_compliance)}>
                  {supplyChain.serialization.dscsa_compliance.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Verification Rate:</span>
                <span className={getComplianceColor(supplyChain.serialization.verification_rate)}>
                  {supplyChain.serialization.verification_rate.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Qualified Suppliers:</span>
                <span className="text-green-400">{supplyChain.suppliers.qualified_suppliers}/{supplyChain.suppliers.total_suppliers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cold Chain Success:</span>
                <span className={getComplianceColor(supplyChain.cold_chain.successful_deliveries)}>
                  {supplyChain.cold_chain.successful_deliveries.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pharmaceutical KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 PHARMACEUTICAL MANUFACTURING KPIs & REGULATORY PERFORMANCE
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">GMP Compliance</div>
            <div className="text-white font-bold text-lg">
              {complianceMetrics.gmp_compliance.overall_score.toFixed(1)}%
            </div>
            <div className="text-green-400 text-xs">current GMP standards</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Equipment Qualified</div>
            <div className="text-white font-bold text-lg">
              {complianceMetrics.validation_status.equipment_qualified.toFixed(1)}%
            </div>
            <div className="text-blue-400 text-xs">validation status</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Quality Lab Utilization</div>
            <div className="text-white font-bold text-lg">
              {(qualityLabs.reduce((sum, lab) => sum + lab.workload.utilizationRate, 0) / qualityLabs.length).toFixed(1)}%
            </div>
            <div className="text-purple-400 text-xs">testing capacity</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">DSCSA Compliance</div>
            <div className="text-white font-bold text-lg">
              {supplyChain.serialization.dscsa_compliance.toFixed(1)}%
            </div>
            <div className="text-orange-400 text-xs">supply chain track</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Critical Deviations</div>
            <div className="text-white font-bold text-lg">
              {complianceMetrics.gmp_compliance.critical_deviations}
            </div>
            <div className="text-cyan-400 text-xs">this month</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Supplier Score</div>
            <div className="text-white font-bold text-lg">
              {supplyChain.suppliers.supplier_score.toFixed(1)}%
            </div>
            <div className="text-yellow-400 text-xs">qualified suppliers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmaceuticalOperations;