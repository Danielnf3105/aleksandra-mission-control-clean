// DisasterRecoveryOperationsCenter.js - Disaster Recovery & Business Continuity Operations Center
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DisasterRecoveryOperationsCenter = () => {
  const [drStatus, setDrStatus] = useState({
    operationalStatus: 'DR_READY',
    coopLevel: 'LEVEL_1_NORMAL',
    totalSites: 47,
    primarySites: 23,
    backupSites: 24,
    sitesOperational: 46,
    activeIncidents: 2,
    rtoCompliance: 98.7, // Recovery Time Objective percentage
    rpoCompliance: 99.2, // Recovery Point Objective percentage
    businessContinuityScore: 94.8, // percentage
    lastDrTest: '2026-03-01',
    nextDrTest: '2026-03-15',
    lastUpdate: Date.now()
  });

  const [coopFramework, setCoopFramework] = useState({
    essential_functions: {
      mission_essential_functions: 12,
      mef_coverage: 95.8, // percentage
      primary_mission_essential_functions: 5,
      pmef_availability: 100.0, // percentage
      business_essential_functions: 28,
      bef_continuity_ready: 96.4, // percentage
      critical_processes: 45,
      process_documentation: 98.2 // percentage
    },
    continuity_capabilities: {
      alternate_facilities: 8,
      facilities_operational: 8,
      essential_personnel: 234,
      personnel_availability: 94.7, // percentage
      backup_systems: 67,
      systems_functional: 65,
      communication_systems: 15,
      comms_operational: 100.0, // percentage
      data_backup_systems: 12,
      backup_integrity: 99.8 // percentage
    },
    crisis_response: {
      emergency_action_team: 'ACTIVE',
      incident_commanders: 8,
      response_teams: 15,
      team_readiness: 97.3, // percentage
      evacuation_procedures: 'CURRENT',
      shelter_procedures: 'CURRENT',
      alert_systems: 12,
      alert_functionality: 100.0, // percentage
      decision_authority: 'DELEGATED',
      command_structure: 'ACTIVATED'
    },
    contingency_planning: {
      disaster_scenarios: 23,
      scenarios_planned: 23,
      threat_assessments: 'UPDATED',
      risk_mitigation_plans: 45,
      plans_current: 100.0, // percentage
      business_impact_analyses: 28,
      bia_completion: 100.0, // percentage
      recovery_strategies: 67,
      strategy_validation: 95.5 // percentage
    }
  });

  const [disasterScenarios, setDisasterScenarios] = useState([
    {
      scenario: 'CYBER_ATTACK',
      threat_level: 'HIGH',
      likelihood: 78.5, // percentage
      impact_severity: 'CRITICAL',
      rto_target: 4, // hours
      rpo_target: 1, // hours
      recovery_strategy: 'AUTOMATED_FAILOVER',
      backup_systems: 'HOT_STANDBY',
      last_tested: '2026-03-02',
      test_result: 'PASSED',
      mitigation_status: 'ACTIVE',
      affected_functions: ['IT_SYSTEMS', 'DATA_PROCESSING', 'CUSTOMER_ACCESS']
    },
    {
      scenario: 'NATURAL_DISASTER',
      threat_level: 'MEDIUM',
      likelihood: 23.7,
      impact_severity: 'HIGH',
      rto_target: 24, // hours
      rpo_target: 8, // hours
      recovery_strategy: 'COLD_SITE_ACTIVATION',
      backup_systems: 'OFFSITE_BACKUP',
      last_tested: '2026-02-28',
      test_result: 'PASSED',
      mitigation_status: 'ACTIVE',
      affected_functions: ['FACILITY_ACCESS', 'ON_PREMISE_SYSTEMS', 'PERSONNEL']
    },
    {
      scenario: 'PANDEMIC_OUTBREAK',
      threat_level: 'MEDIUM',
      likelihood: 34.2,
      impact_severity: 'HIGH',
      rto_target: 48, // hours
      rpo_target: 24, // hours
      recovery_strategy: 'REMOTE_OPERATIONS',
      backup_systems: 'CLOUD_INFRASTRUCTURE',
      last_tested: '2026-02-15',
      test_result: 'PASSED',
      mitigation_status: 'ACTIVE',
      affected_functions: ['WORKFORCE', 'PHYSICAL_OPERATIONS', 'SUPPLY_CHAIN']
    },
    {
      scenario: 'POWER_OUTAGE',
      threat_level: 'MEDIUM',
      likelihood: 45.8,
      impact_severity: 'MEDIUM',
      rto_target: 2, // hours
      rpo_target: 0.5, // hours
      recovery_strategy: 'GENERATOR_BACKUP',
      backup_systems: 'UPS_SYSTEMS',
      last_tested: '2026-03-01',
      test_result: 'PASSED',
      mitigation_status: 'ACTIVE',
      affected_functions: ['ELECTRICAL_SYSTEMS', 'DATA_CENTER', 'COMMUNICATIONS']
    },
    {
      scenario: 'SUPPLY_CHAIN_DISRUPTION',
      threat_level: 'MEDIUM',
      likelihood: 56.3,
      impact_severity: 'MEDIUM',
      rto_target: 72, // hours
      rpo_target: 24, // hours
      recovery_strategy: 'ALTERNATIVE_SUPPLIERS',
      backup_systems: 'INVENTORY_RESERVES',
      last_tested: '2026-02-20',
      test_result: 'PARTIAL',
      mitigation_status: 'ENHANCED',
      affected_functions: ['PROCUREMENT', 'MANUFACTURING', 'LOGISTICS']
    },
    {
      scenario: 'KEY_PERSONNEL_LOSS',
      threat_level: 'MEDIUM',
      likelihood: 42.1,
      impact_severity: 'MEDIUM',
      rto_target: 168, // hours (1 week)
      rpo_target: 48, // hours
      recovery_strategy: 'SUCCESSION_PLANNING',
      backup_systems: 'CROSS_TRAINING',
      last_tested: '2026-02-10',
      test_result: 'PASSED',
      mitigation_status: 'ACTIVE',
      affected_functions: ['LEADERSHIP', 'CRITICAL_EXPERTISE', 'DECISION_MAKING']
    },
    {
      scenario: 'TELECOMMUNICATIONS_FAILURE',
      threat_level: 'MEDIUM',
      likelihood: 28.9,
      impact_severity: 'HIGH',
      rto_target: 6, // hours
      rpo_target: 2, // hours
      recovery_strategy: 'REDUNDANT_CARRIERS',
      backup_systems: 'SATELLITE_BACKUP',
      last_tested: '2026-02-25',
      test_result: 'PASSED',
      mitigation_status: 'ACTIVE',
      affected_functions: ['VOICE_COMMS', 'DATA_COMMS', 'INTERNET_ACCESS']
    },
    {
      scenario: 'TERRORISM_ATTACK',
      threat_level: 'LOW',
      likelihood: 12.4,
      impact_severity: 'CRITICAL',
      rto_target: 72, // hours
      rpo_target: 24, // hours
      recovery_strategy: 'SECURE_RELOCATION',
      backup_systems: 'DISTRIBUTED_OPERATIONS',
      last_tested: '2026-01-15',
      test_result: 'PASSED',
      mitigation_status: 'ACTIVE',
      affected_functions: ['PHYSICAL_SECURITY', 'PERSONNEL_SAFETY', 'CRITICAL_ASSETS']
    }
  ]);

  const [recoveryOperations, setRecoveryOperations] = useState([
    {
      operation_id: 'DR_001_PRIMARY_DC',
      facility_name: 'Primary Data Center',
      location: 'New York, NY',
      type: 'PRIMARY_SITE',
      status: 'OPERATIONAL',
      capacity_utilization: 78.3, // percentage
      backup_power: 'ONLINE',
      cooling_systems: 'OPERATIONAL',
      network_connectivity: 'REDUNDANT',
      security_level: 'HIGH',
      last_maintenance: '2026-03-03',
      next_maintenance: '2026-03-17',
      staffing_level: 'FULL',
      rto_capability: 1.0, // hours
      rpo_capability: 0.25 // hours
    },
    {
      operation_id: 'DR_002_BACKUP_DC',
      facility_name: 'Backup Data Center',
      location: 'Chicago, IL',
      type: 'HOT_STANDBY',
      status: 'STANDBY',
      capacity_utilization: 15.7,
      backup_power: 'TESTED',
      cooling_systems: 'STANDBY',
      network_connectivity: 'ACTIVE',
      security_level: 'HIGH',
      last_maintenance: '2026-02-28',
      next_maintenance: '2026-03-14',
      staffing_level: 'SKELETON',
      rto_capability: 4.0,
      rpo_capability: 1.0
    },
    {
      operation_id: 'DR_003_COLD_SITE',
      facility_name: 'Disaster Recovery Site',
      location: 'Dallas, TX',
      type: 'COLD_SITE',
      status: 'READY',
      capacity_utilization: 0.0,
      backup_power: 'AVAILABLE',
      cooling_systems: 'AVAILABLE',
      network_connectivity: 'PROVISIONED',
      security_level: 'MEDIUM',
      last_maintenance: '2026-02-15',
      next_maintenance: '2026-03-29',
      staffing_level: 'ON_CALL',
      rto_capability: 24.0,
      rpo_capability: 8.0
    },
    {
      operation_id: 'DR_004_REMOTE_OPS',
      facility_name: 'Remote Operations Center',
      location: 'Denver, CO',
      type: 'REMOTE_FACILITY',
      status: 'ACTIVE',
      capacity_utilization: 45.2,
      backup_power: 'LOCAL_GRID',
      cooling_systems: 'HVAC_NORMAL',
      network_connectivity: 'FIBER_PRIMARY',
      security_level: 'MEDIUM',
      last_maintenance: '2026-03-01',
      next_maintenance: '2026-03-22',
      staffing_level: 'PARTIAL',
      rto_capability: 12.0,
      rpo_capability: 4.0
    },
    {
      operation_id: 'DR_005_CLOUD_INFRA',
      facility_name: 'Cloud Infrastructure',
      location: 'AWS Multi-Region',
      type: 'CLOUD_SERVICE',
      status: 'DISTRIBUTED',
      capacity_utilization: 62.8,
      backup_power: 'PROVIDER_SLA',
      cooling_systems: 'PROVIDER_SLA',
      network_connectivity: 'GLOBAL_MESH',
      security_level: 'HIGH',
      last_maintenance: 'CONTINUOUS',
      next_maintenance: 'CONTINUOUS',
      staffing_level: 'MANAGED_SERVICE',
      rto_capability: 0.5,
      rpo_capability: 0.1
    }
  ]);

  const [businessImpactAnalysis, setBiaBusiness] = useState({
    mission_essential_functions: [
      {
        function: 'CUSTOMER_TRANSACTIONS',
        criticality: 'CRITICAL',
        max_tolerable_downtime: 4, // hours
        financial_impact_per_hour: 450000, // USD
        regulatory_impact: 'HIGH',
        reputational_impact: 'HIGH',
        dependencies: ['PAYMENT_SYSTEMS', 'DATABASE', 'NETWORK'],
        recovery_priority: 1,
        current_rto: 2.5,
        current_rpo: 0.5
      },
      {
        function: 'DATA_PROCESSING',
        criticality: 'CRITICAL',
        max_tolerable_downtime: 8,
        financial_impact_per_hour: 125000,
        regulatory_impact: 'MEDIUM',
        reputational_impact: 'MEDIUM',
        dependencies: ['COMPUTE_SYSTEMS', 'STORAGE', 'APPLICATIONS'],
        recovery_priority: 2,
        current_rto: 6.0,
        current_rpo: 2.0
      },
      {
        function: 'COMMUNICATIONS',
        criticality: 'HIGH',
        max_tolerable_downtime: 12,
        financial_impact_per_hour: 75000,
        regulatory_impact: 'LOW',
        reputational_impact: 'HIGH',
        dependencies: ['TELEPHONY', 'EMAIL_SYSTEMS', 'MESSAGING'],
        recovery_priority: 3,
        current_rto: 8.0,
        current_rpo: 4.0
      },
      {
        function: 'SUPPLY_CHAIN',
        criticality: 'HIGH',
        max_tolerable_downtime: 24,
        financial_impact_per_hour: 85000,
        regulatory_impact: 'LOW',
        reputational_impact: 'MEDIUM',
        dependencies: ['ERP_SYSTEMS', 'LOGISTICS_SYSTEMS', 'VENDOR_PORTALS'],
        recovery_priority: 4,
        current_rto: 18.0,
        current_rpo: 8.0
      },
      {
        function: 'HUMAN_RESOURCES',
        criticality: 'MEDIUM',
        max_tolerable_downtime: 72,
        financial_impact_per_hour: 25000,
        regulatory_impact: 'MEDIUM',
        reputational_impact: 'LOW',
        dependencies: ['HRIS', 'PAYROLL_SYSTEMS', 'EMPLOYEE_PORTALS'],
        recovery_priority: 5,
        current_rto: 48.0,
        current_rpo: 24.0
      },
      {
        function: 'FINANCIAL_REPORTING',
        criticality: 'MEDIUM',
        max_tolerable_downtime: 168,
        financial_impact_per_hour: 35000,
        regulatory_impact: 'HIGH',
        reputational_impact: 'LOW',
        dependencies: ['ACCOUNTING_SYSTEMS', 'REPORTING_TOOLS', 'COMPLIANCE_SYSTEMS'],
        recovery_priority: 6,
        current_rto: 72.0,
        current_rpo: 24.0
      }
    ],
    risk_assessment: {
      total_risks_identified: 45,
      high_risks: 12,
      medium_risks: 23,
      low_risks: 10,
      mitigation_strategies: 67,
      strategies_implemented: 64,
      risk_appetite_score: 85.3, // percentage acceptable
      residual_risk_level: 'MEDIUM'
    }
  });

  const [drTesting, setDrTesting] = useState([
    {
      test_id: 'DRT_2026_003',
      test_type: 'FULL_FAILOVER',
      scenario: 'PRIMARY_DC_FAILURE',
      test_date: '2026-03-01',
      duration: 6.5, // hours
      objectives_met: 8,
      total_objectives: 10,
      success_rate: 80.0, // percentage
      rto_achieved: 4.2, // hours
      rpo_achieved: 1.1, // hours
      issues_identified: 3,
      issues_resolved: 2,
      next_test_date: '2026-03-15',
      test_status: 'COMPLETED'
    },
    {
      test_id: 'DRT_2026_002',
      test_type: 'TABLETOP_EXERCISE',
      scenario: 'CYBER_ATTACK_RESPONSE',
      test_date: '2026-02-15',
      duration: 4.0,
      objectives_met: 12,
      total_objectives: 12,
      success_rate: 100.0,
      rto_achieved: null,
      rpo_achieved: null,
      issues_identified: 1,
      issues_resolved: 1,
      next_test_date: '2026-05-15',
      test_status: 'COMPLETED'
    },
    {
      test_id: 'DRT_2026_001',
      test_type: 'COMMUNICATION_TEST',
      scenario: 'EMERGENCY_NOTIFICATION',
      test_date: '2026-02-01',
      duration: 2.0,
      objectives_met: 5,
      total_objectives: 5,
      success_rate: 100.0,
      rto_achieved: 0.5,
      rpo_achieved: 0.0,
      issues_identified: 0,
      issues_resolved: 0,
      next_test_date: '2026-04-01',
      test_status: 'COMPLETED'
    },
    {
      test_id: 'DRT_2026_004',
      test_type: 'DATA_RESTORATION',
      scenario: 'RANSOMWARE_RECOVERY',
      test_date: '2026-03-15',
      duration: null,
      objectives_met: null,
      total_objectives: 8,
      success_rate: null,
      rto_achieved: null,
      rpo_achieved: null,
      issues_identified: null,
      issues_resolved: null,
      next_test_date: null,
      test_status: 'SCHEDULED'
    }
  ]);

  const [drHistory, setDrHistory] = useState([]);

  const generateDrHistory = () => {
    const data = [];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30); // Last 30 days
    
    for (let i = 0; i <= 30; i++) {
      const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
      
      // Simulate realistic DR metrics
      const baseCompliance = 95;
      const variation = Math.random() * 6 - 3; // ±3%
      
      data.push({
        date: date.toISOString().split('T')[0],
        rto_compliance: Math.max(90, Math.min(100, baseCompliance + variation)),
        rpo_compliance: Math.max(92, Math.min(100, baseCompliance + 2 + variation)),
        backup_success_rate: Math.max(95, Math.min(100, 98 + Math.random() * 2 - 1)),
        system_availability: Math.max(98, Math.min(100, 99.5 + Math.random() * 0.5 - 0.25)),
        incident_count: Math.floor(Math.random() * 4), // 0-3 incidents per day
        test_score: i % 7 === 0 ? Math.max(75, Math.min(100, 90 + Math.random() * 15)) : null, // Weekly tests
        threat_level: Math.max(1, Math.min(5, 2.5 + Math.random() * 1.5 - 0.75)) // 1-5 scale
      });
    }
    return data;
  };

  useEffect(() => {
    setDrHistory(generateDrHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update DR status
      setDrStatus(prev => ({
        ...prev,
        sitesOperational: Math.max(42, Math.min(47, prev.sitesOperational + Math.floor((Math.random() - 0.5) * 2))),
        activeIncidents: Math.max(0, Math.min(8, prev.activeIncidents + Math.floor((Math.random() - 0.7) * 2))),
        rtoCompliance: Math.max(95.0, Math.min(100.0, prev.rtoCompliance + (Math.random() - 0.5) * 1.0)),
        rpoCompliance: Math.max(97.0, Math.min(100.0, prev.rpoCompliance + (Math.random() - 0.5) * 0.8)),
        businessContinuityScore: Math.max(90.0, Math.min(98.0, prev.businessContinuityScore + (Math.random() - 0.5) * 1.2)),
        lastUpdate: Date.now()
      }));

      // Update COOP framework metrics
      setCoopFramework(prev => ({
        ...prev,
        essential_functions: {
          ...prev.essential_functions,
          mef_coverage: Math.max(92.0, Math.min(98.0, prev.essential_functions.mef_coverage + (Math.random() - 0.5) * 0.8)),
          process_documentation: Math.max(95.0, Math.min(100.0, prev.essential_functions.process_documentation + (Math.random() - 0.5) * 0.5))
        },
        continuity_capabilities: {
          ...prev.continuity_capabilities,
          personnel_availability: Math.max(85.0, Math.min(98.0, prev.continuity_capabilities.personnel_availability + (Math.random() - 0.5) * 2.0)),
          backup_integrity: Math.max(98.0, Math.min(100.0, prev.continuity_capabilities.backup_integrity + (Math.random() - 0.5) * 0.3))
        }
      }));

      // Update recovery operations randomly
      setRecoveryOperations(prev => prev.map(op => {
        if (op.status === 'OPERATIONAL' || op.status === 'ACTIVE') {
          return {
            ...op,
            capacity_utilization: Math.max(0, Math.min(95, op.capacity_utilization + (Math.random() - 0.5) * 5))
          };
        }
        return op;
      }));

    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'DR_READY':
      case 'LEVEL_1_NORMAL':
      case 'OPERATIONAL':
      case 'ACTIVE':
      case 'STANDBY':
      case 'READY':
      case 'DISTRIBUTED':
      case 'ONLINE':
      case 'TESTED':
      case 'AVAILABLE':
      case 'CURRENT':
      case 'ACTIVATED':
      case 'DELEGATED':
      case 'UPDATED':
      case 'PASSED':
      case 'COMPLETED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'HOT_STANDBY':
      case 'COLD_SITE':
      case 'REMOTE_FACILITY':
      case 'CLOUD_SERVICE':
      case 'ENHANCED':
      case 'PARTIAL':
      case 'SCHEDULED':
      case 'HIGH':
      case 'CRITICAL': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LEVEL_2_ELEVATED':
      case 'MEDIUM': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'LEVEL_3_HIGH':
      case 'LEVEL_4_SEVERE':
      case 'LOW': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'FAILED':
      case 'OFFLINE': return 'text-red-500 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatNumber = (num, decimals = 1) => {
    return num.toFixed(decimals);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatHours = (hours) => {
    if (!hours) return 'N/A';
    if (hours < 1) return `${Math.round(hours * 60)}min`;
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return `${days}d ${remainingHours}h`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🛡️ DISASTER RECOVERY OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(drStatus.coopLevel)}`}>
            {drStatus.coopLevel.replace(/_/g, ' ')}
          </div>
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {drStatus.sitesOperational}/{drStatus.totalSites} Sites
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            RTO {formatNumber(drStatus.rtoCompliance)}%
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            BC Score {formatNumber(drStatus.businessContinuityScore)}%
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Business Continuity & COOP Management
          </div>
        </div>
      </div>

      {/* DR Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">RTO COMPLIANCE</div>
              <div className="text-2xl font-bold text-green-100">
                {formatNumber(drStatus.rtoCompliance)}%
              </div>
              <div className="text-xs text-green-300">
                Recovery Time Objectives
              </div>
            </div>
            <div className="text-3xl opacity-60">⏱️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">RPO COMPLIANCE</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatNumber(drStatus.rpoCompliance)}%
              </div>
              <div className="text-xs text-blue-300">
                Recovery Point Objectives
              </div>
            </div>
            <div className="text-3xl opacity-60">💾</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">BUSINESS CONTINUITY</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(drStatus.businessContinuityScore)}%
              </div>
              <div className="text-xs text-purple-300">
                Overall readiness score
              </div>
            </div>
            <div className="text-3xl opacity-60">🏢</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">ACTIVE INCIDENTS</div>
              <div className="text-2xl font-bold text-orange-100">
                {drStatus.activeIncidents}
              </div>
              <div className="text-xs text-orange-300">
                Current disruptions
              </div>
            </div>
            <div className="text-3xl opacity-60">🚨</div>
          </div>
        </div>
      </div>

      {/* COOP Framework */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📋 COOP FRAMEWORK & ESSENTIAL FUNCTIONS
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Essential Functions</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">MEFs:</span>
                <span className="text-blue-400">{coopFramework.essential_functions.mission_essential_functions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">MEF Coverage:</span>
                <span className="text-green-400">{formatNumber(coopFramework.essential_functions.mef_coverage)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">PMEFs:</span>
                <span className="text-purple-400">{coopFramework.essential_functions.primary_mission_essential_functions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">PMEF Availability:</span>
                <span className="text-green-400">{formatNumber(coopFramework.essential_functions.pmef_availability)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">BEFs:</span>
                <span className="text-orange-400">{coopFramework.essential_functions.business_essential_functions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">BEF Ready:</span>
                <span className="text-cyan-400">{formatNumber(coopFramework.essential_functions.bef_continuity_ready)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Critical Processes:</span>
                <span className="text-yellow-400">{coopFramework.essential_functions.critical_processes}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Documentation:</span>
                <span className="text-pink-400">{formatNumber(coopFramework.essential_functions.process_documentation)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Continuity Capabilities</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Alternate Facilities:</span>
                <span className="text-blue-400">{coopFramework.continuity_capabilities.facilities_operational}/{coopFramework.continuity_capabilities.alternate_facilities}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Essential Personnel:</span>
                <span className="text-green-400">{coopFramework.continuity_capabilities.essential_personnel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Personnel Avail:</span>
                <span className="text-purple-400">{formatNumber(coopFramework.continuity_capabilities.personnel_availability)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Backup Systems:</span>
                <span className="text-orange-400">{coopFramework.continuity_capabilities.systems_functional}/{coopFramework.continuity_capabilities.backup_systems}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Communications:</span>
                <span className="text-cyan-400">{coopFramework.continuity_capabilities.communication_systems} systems</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Comms Status:</span>
                <span className="text-green-400">{formatNumber(coopFramework.continuity_capabilities.comms_operational)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Data Backups:</span>
                <span className="text-yellow-400">{coopFramework.continuity_capabilities.data_backup_systems}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Backup Integrity:</span>
                <span className="text-pink-400">{formatNumber(coopFramework.continuity_capabilities.backup_integrity)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Crisis Response</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Action Team:</span>
                <span className={`${getStatusColor(coopFramework.crisis_response.emergency_action_team)?.split(' ')[0] || 'text-green-400'}`}>
                  {coopFramework.crisis_response.emergency_action_team}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Commanders:</span>
                <span className="text-blue-400">{coopFramework.crisis_response.incident_commanders}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Response Teams:</span>
                <span className="text-purple-400">{coopFramework.crisis_response.response_teams}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Team Readiness:</span>
                <span className="text-green-400">{formatNumber(coopFramework.crisis_response.team_readiness)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Evacuation:</span>
                <span className={`${getStatusColor(coopFramework.crisis_response.evacuation_procedures)?.split(' ')[0] || 'text-green-400'}`}>
                  {coopFramework.crisis_response.evacuation_procedures}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Alert Systems:</span>
                <span className="text-orange-400">{coopFramework.crisis_response.alert_systems}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Alert Function:</span>
                <span className="text-green-400">{formatNumber(coopFramework.crisis_response.alert_functionality)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Command Structure:</span>
                <span className={`${getStatusColor(coopFramework.crisis_response.command_structure)?.split(' ')[0] || 'text-green-400'}`}>
                  {coopFramework.crisis_response.command_structure}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Contingency Planning</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Scenarios:</span>
                <span className="text-blue-400">{coopFramework.contingency_planning.scenarios_planned}/{coopFramework.contingency_planning.disaster_scenarios}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Threat Assessments:</span>
                <span className={`${getStatusColor(coopFramework.contingency_planning.threat_assessments)?.split(' ')[0] || 'text-green-400'}`}>
                  {coopFramework.contingency_planning.threat_assessments}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Risk Mitigation:</span>
                <span className="text-purple-400">{coopFramework.contingency_planning.risk_mitigation_plans}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Plans Current:</span>
                <span className="text-green-400">{formatNumber(coopFramework.contingency_planning.plans_current)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">BIAs:</span>
                <span className="text-orange-400">{coopFramework.contingency_planning.business_impact_analyses}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">BIA Complete:</span>
                <span className="text-green-400">{formatNumber(coopFramework.contingency_planning.bia_completion)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Recovery Strategies:</span>
                <span className="text-yellow-400">{coopFramework.contingency_planning.recovery_strategies}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Strategy Validation:</span>
                <span className="text-cyan-400">{formatNumber(coopFramework.contingency_planning.strategy_validation)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recovery Operations */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🏗️ RECOVERY OPERATIONS & SITE STATUS
        </h3>
        <div className="space-y-3">
          {recoveryOperations.map((site) => (
            <div key={site.operation_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{site.operation_id}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(site.type)}`}>
                    {site.type.replace(/_/g, ' ')}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(site.status)}`}>
                    {site.status}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  {site.location}
                </div>
              </div>

              <div className="text-sm mb-2">
                <span className="text-gray-400">Facility: </span>
                <span className="text-cyan-400">{site.facility_name}</span>
                <span className="text-gray-400"> | Utilization: </span>
                <span className="text-green-400">{formatNumber(site.capacity_utilization)}%</span>
                <span className="text-gray-400"> | Security: </span>
                <span className={`${getStatusColor(site.security_level)?.split(' ')[0] || 'text-yellow-400'}`}>
                  {site.security_level}
                </span>
              </div>

              <div className="text-xs mb-2">
                <span className="text-gray-400">Power: </span>
                <span className={`${getStatusColor(site.backup_power)?.split(' ')[0] || 'text-green-400'}`}>
                  {site.backup_power.replace(/_/g, ' ')}
                </span>
                <span className="text-gray-400"> | Cooling: </span>
                <span className={`${getStatusColor(site.cooling_systems)?.split(' ')[0] || 'text-green-400'}`}>
                  {site.cooling_systems}
                </span>
                <span className="text-gray-400"> | Network: </span>
                <span className="text-blue-400">{site.network_connectivity.replace(/_/g, ' ')}</span>
              </div>

              <div className="text-xs">
                <span className="text-gray-400">Staffing: </span>
                <span className="text-purple-400">{site.staffing_level.replace(/_/g, ' ')}</span>
                <span className="text-gray-400"> | RTO: </span>
                <span className="text-orange-400">{formatHours(site.rto_capability)}</span>
                <span className="text-gray-400"> | RPO: </span>
                <span className="text-yellow-400">{formatHours(site.rpo_capability)}</span>
                {site.next_maintenance !== 'CONTINUOUS' && (
                  <>
                    <span className="text-gray-400"> | Next Maint: </span>
                    <span className="text-cyan-400">{formatDate(site.next_maintenance)}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DR Performance Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 DISASTER RECOVERY PERFORMANCE TRENDS (30 DAYS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={drHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="date" stroke="#9CA3AF" fontSize={10}/>
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
              dataKey="system_availability"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="System Availability %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="rto_compliance" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="RTO Compliance %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="rpo_compliance" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="RPO Compliance %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="backup_success_rate" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Backup Success %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="incident_count" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Daily Incidents"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="threat_level" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Threat Level (1-5)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Disaster Scenarios and Business Impact Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Disaster Scenarios */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚠️ DISASTER SCENARIOS & THREAT ASSESSMENT
          </h3>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {disasterScenarios.map((scenario, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">
                      {scenario.scenario.replace(/_/g, ' ')}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(scenario.threat_level)}`}>
                      {scenario.threat_level}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {formatNumber(scenario.likelihood)}% likely
                  </span>
                </div>
                
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Impact: </span>
                  <span className={`${getStatusColor(scenario.impact_severity)?.split(' ')[0] || 'text-red-400'}`}>
                    {scenario.impact_severity}
                  </span>
                  <span className="text-gray-400"> | RTO: </span>
                  <span className="text-blue-400">{formatHours(scenario.rto_target)}</span>
                  <span className="text-gray-400"> | RPO: </span>
                  <span className="text-purple-400">{formatHours(scenario.rpo_target)}</span>
                </div>
                
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Strategy: </span>
                  <span className="text-green-400">{scenario.recovery_strategy.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | Backup: </span>
                  <span className="text-orange-400">{scenario.backup_systems.replace(/_/g, ' ')}</span>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">Last Test: </span>
                  <span className="text-cyan-400">{formatDate(scenario.last_tested)}</span>
                  <span className="text-gray-400"> | Result: </span>
                  <span className={`${getStatusColor(scenario.test_result)?.split(' ')[0] || 'text-green-400'}`}>
                    {scenario.test_result}
                  </span>
                  <span className="text-gray-400"> | Status: </span>
                  <span className={`${getStatusColor(scenario.mitigation_status)?.split(' ')[0] || 'text-green-400'}`}>
                    {scenario.mitigation_status}
                  </span>
                </div>

                <div className="text-xs mt-1">
                  <span className="text-gray-400">Affected: </span>
                  {scenario.affected_functions.map((func, i) => (
                    <span key={i} className="text-yellow-400">
                      {func.replace(/_/g, ' ')}{i < scenario.affected_functions.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact Analysis */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            💼 BUSINESS IMPACT ANALYSIS & ESSENTIAL FUNCTIONS
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Risk Assessment Summary</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Risks:</span>
                  <span className="text-blue-400">{businessImpactAnalysis.risk_assessment.total_risks_identified}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">High Risks:</span>
                  <span className="text-red-400">{businessImpactAnalysis.risk_assessment.high_risks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Medium Risks:</span>
                  <span className="text-yellow-400">{businessImpactAnalysis.risk_assessment.medium_risks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Low Risks:</span>
                  <span className="text-green-400">{businessImpactAnalysis.risk_assessment.low_risks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Strategies:</span>
                  <span className="text-purple-400">{businessImpactAnalysis.risk_assessment.strategies_implemented}/{businessImpactAnalysis.risk_assessment.mitigation_strategies}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Risk Appetite:</span>
                  <span className="text-cyan-400">{formatNumber(businessImpactAnalysis.risk_assessment.risk_appetite_score)}%</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Mission Essential Functions</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {businessImpactAnalysis.mission_essential_functions.map((func, index) => (
                  <div key={index} className="bg-gray-600 rounded p-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">
                        {func.function.replace(/_/g, ' ')}
                      </span>
                      <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(func.criticality)}`}>
                        {func.criticality}
                      </span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Priority: </span>
                      <span className="text-blue-400">{func.recovery_priority}</span>
                      <span className="text-gray-400"> | MTD: </span>
                      <span className="text-orange-400">{formatHours(func.max_tolerable_downtime)}</span>
                      <span className="text-gray-400"> | Impact: </span>
                      <span className="text-green-400">{formatCurrency(func.financial_impact_per_hour)}/hr</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Current RTO: </span>
                      <span className="text-cyan-400">{formatHours(func.current_rto)}</span>
                      <span className="text-gray-400"> | Current RPO: </span>
                      <span className="text-purple-400">{formatHours(func.current_rpo)}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Dependencies: </span>
                      {func.dependencies.map((dep, i) => (
                        <span key={i} className="text-yellow-400">
                          {dep.replace(/_/g, ' ')}{i < func.dependencies.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DR Testing Results */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🧪 DISASTER RECOVERY TESTING & VALIDATION
        </h3>
        <div className="space-y-3">
          {drTesting.map((test) => (
            <div key={test.test_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{test.test_id}</div>
                  <span className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {test.test_type.replace(/_/g, ' ')}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(test.test_status)}`}>
                    {test.test_status}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  {formatDate(test.test_date)}
                </div>
              </div>

              <div className="text-sm mb-2">
                <span className="text-gray-400">Scenario: </span>
                <span className="text-cyan-400">{test.scenario.replace(/_/g, ' ')}</span>
                {test.duration && (
                  <>
                    <span className="text-gray-400"> | Duration: </span>
                    <span className="text-green-400">{formatHours(test.duration)}</span>
                  </>
                )}
                {test.success_rate && (
                  <>
                    <span className="text-gray-400"> | Success: </span>
                    <span className="text-purple-400">{formatNumber(test.success_rate)}%</span>
                  </>
                )}
              </div>

              {test.test_status === 'COMPLETED' && (
                <>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Objectives Met: </span>
                    <span className="text-blue-400">{test.objectives_met}/{test.total_objectives}</span>
                    {test.rto_achieved && (
                      <>
                        <span className="text-gray-400"> | RTO Achieved: </span>
                        <span className="text-orange-400">{formatHours(test.rto_achieved)}</span>
                      </>
                    )}
                    {test.rpo_achieved && (
                      <>
                        <span className="text-gray-400"> | RPO Achieved: </span>
                        <span className="text-yellow-400">{formatHours(test.rpo_achieved)}</span>
                      </>
                    )}
                  </div>
                  
                  <div className="text-xs">
                    <span className="text-gray-400">Issues: </span>
                    <span className="text-red-400">{test.issues_identified} identified</span>
                    <span className="text-gray-400">, </span>
                    <span className="text-green-400">{test.issues_resolved} resolved</span>
                    {test.next_test_date && (
                      <>
                        <span className="text-gray-400"> | Next Test: </span>
                        <span className="text-cyan-400">{formatDate(test.next_test_date)}</span>
                      </>
                    )}
                  </div>
                </>
              )}

              {test.test_status === 'SCHEDULED' && (
                <div className="text-xs">
                  <span className="text-gray-400">Planned Objectives: </span>
                  <span className="text-blue-400">{test.total_objectives}</span>
                  <span className="text-gray-400"> | Test pending execution</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisasterRecoveryOperationsCenter;