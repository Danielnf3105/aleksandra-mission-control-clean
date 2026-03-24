// Defense & Military Intelligence Center - Military Operations, Defense Strategy, Security Operations & Military Analytics
import { useState, useEffect } from 'react';
import { Shield, Target, Radar, Zap, TrendingUp, TrendingDown, Radio, AlertTriangle, CheckCircle, Crosshair, BarChart3, PieChart } from 'lucide-react';

export default function DefenseMilitaryIntelligenceCenter() {
  const [defenseData, setDefenseData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    defenseOverview: {
      threatLevel: 'ELEVATED',
      activeMissions: 47,
      deployedForces: 12456,
      readinessLevel: 'READY',
      defenseSpending: 12456789000, // EUR
      personnelActive: 156789,
      reserveForces: 67890,
      equipmentReadiness: 94.7,
      intelligenceAlerts: 23,
      securityClearances: 45678,
      operationalSecurity: 97.4,
      missionSuccessRate: 91.8,
      alliedCooperation: 89.3,
      domesticSecurity: 94.2
    },
    activeOperations: [
      {
        operationId: 'OP-GUARDIAN-2026',
        classification: 'CLASSIFIED',
        status: 'ACTIVE',
        priority: 'HIGH',
        theater: 'Mediterranean',
        missionType: 'Maritime Security',
        startDate: '2026-02-15',
        duration: 180, // days
        progress: 67.4,
        personnelDeployed: 2345,
        assetsDeployed: 23,
        commandingOfficer: 'Admiral Silva',
        objectives: ['Maritime patrol', 'Border security', 'Intelligence gathering'],
        riskLevel: 'MEDIUM'
      },
      {
        operationId: 'OP-SENTINEL-2026',
        classification: 'RESTRICTED',
        status: 'PLANNING',
        priority: 'CRITICAL',
        theater: 'Cyber Domain',
        missionType: 'Cyber Defense',
        startDate: '2026-03-25',
        duration: 90,
        progress: 23.7,
        personnelDeployed: 456,
        assetsDeployed: 67,
        commandingOfficer: 'Col. Ferreira',
        objectives: ['Network protection', 'Threat monitoring', 'Incident response'],
        riskLevel: 'HIGH'
      },
      {
        operationId: 'OP-PHOENIX-2026',
        classification: 'SECRET',
        status: 'OPERATIONAL',
        priority: 'MEDIUM',
        theater: 'Atlantic',
        missionType: 'Reconnaissance',
        startDate: '2026-01-10',
        duration: 365,
        progress: 89.3,
        personnelDeployed: 1234,
        assetsDeployed: 12,
        commandingOfficer: 'Capt. Santos',
        objectives: ['Intelligence collection', 'Surveillance', 'Maritime monitoring'],
        riskLevel: 'LOW'
      }
    ],
    militaryBranches: {
      army: {
        personnel: 67890,
        readiness: 94.2,
        equipment: {
          tanks: 234,
          vehicles: 1234,
          aircraft: 45,
          operational: 91.8
        },
        activeBases: 23,
        deployedUnits: 12
      },
      navy: {
        personnel: 23456,
        readiness: 96.7,
        equipment: {
          ships: 45,
          submarines: 8,
          aircraft: 67,
          operational: 94.3
        },
        activeBases: 8,
        deployedUnits: 15
      },
      airForce: {
        personnel: 34567,
        readiness: 93.8,
        equipment: {
          fighters: 89,
          transports: 23,
          helicopters: 67,
          operational: 92.1
        },
        activeBases: 12,
        deployedUnits: 8
      },
      specialForces: {
        personnel: 2345,
        readiness: 98.9,
        equipment: {
          specialized: 234,
          vehicles: 67,
          aircraft: 12,
          operational: 97.8
        },
        activeBases: 5,
        deployedUnits: 18
      }
    },
    intelligenceOperations: {
      activeIntelOps: 34,
      signalIntelligence: {
        status: 'OPERATIONAL',
        coverage: 97.8,
        dataProcessed: 23456, // TB daily
        threatsDetected: 89,
        accuracy: 94.7
      },
      humanIntelligence: {
        status: 'ACTIVE',
        networks: 156,
        activeAgents: 89,
        intelligenceReports: 234,
        reliability: 87.9
      },
      cyberIntelligence: {
        status: 'ENHANCED',
        threatsMonitored: 1234,
        attacksBlocked: 567,
        vulnerabilities: 23,
        securityLevel: 96.8
      },
      geospatialIntelligence: {
        status: 'OPERATIONAL',
        satelliteCoverage: 99.2,
        imageAnalysis: 456,
        mapUpdates: 89,
        accuracy: 98.4
      }
    },
    threatAssessment: {
      currentThreats: [
        { threat: 'Cyber Warfare', level: 'HIGH', probability: 78.9, impact: 'CRITICAL', source: 'State Actors' },
        { threat: 'Terrorism', level: 'MEDIUM', probability: 34.6, impact: 'HIGH', source: 'Non-State Actors' },
        { threat: 'Maritime Incursions', level: 'MEDIUM', probability: 45.7, impact: 'MEDIUM', source: 'Foreign Military' },
        { threat: 'Espionage', level: 'HIGH', probability: 67.8, impact: 'HIGH', source: 'Foreign Intelligence' },
        { threat: 'Drone Threats', level: 'MEDIUM', probability: 56.3, impact: 'MEDIUM', source: 'Various' },
        { threat: 'Economic Warfare', level: 'LOW', probability: 23.4, impact: 'HIGH', source: 'Economic Powers' }
      ],
      threatResponse: {
        preventionMeasures: 89.7,
        detectionCapability: 94.2,
        responseTime: 3.4, // minutes
        neutralizationRate: 87.6,
        recoveryCapability: 83.9
      },
      intelligenceFusion: {
        dataIntegration: 91.8,
        analysisSpeed: 94.3,
        predictionAccuracy: 78.9,
        actionableIntel: 86.7
      }
    },
    defenseSystems: {
      airDefense: {
        status: 'ACTIVE',
        coverage: 98.7,
        interceptors: 234,
        radarSites: 45,
        threatsTracked: 12,
        systemReadiness: 96.4
      },
      missileFalse: {
        status: 'STANDBY',
        systems: 23,
        range: '500+ km',
        accuracy: 94.7,
        readiness: 89.3
      },
      cyberDefense: {
        status: 'ENHANCED',
        firewallsActive: 156,
        intrusions: 23,
        incidentsBlocked: 789,
        securityLevel: 97.8
      },
      coastalDefense: {
        status: 'OPERATIONAL',
        coverage: 100.0,
        stations: 34,
        vessels: 67,
        aircraftPatrols: 23
      }
    },
    equipmentStatus: [
      {
        category: 'Combat Vehicles',
        total: 1234,
        operational: 1129,
        maintenance: 89,
        readiness: 91.5,
        modernization: 67.8
      },
      {
        category: 'Aircraft',
        total: 234,
        operational: 216,
        maintenance: 18,
        readiness: 92.3,
        modernization: 78.9
      },
      {
        category: 'Naval Vessels',
        total: 67,
        operational: 63,
        maintenance: 4,
        readiness: 94.0,
        modernization: 82.4
      },
      {
        category: 'Communication Systems',
        total: 456,
        operational: 441,
        maintenance: 15,
        readiness: 96.7,
        modernization: 89.3
      },
      {
        category: 'Surveillance Equipment',
        total: 189,
        operational: 181,
        maintenance: 8,
        readiness: 95.8,
        modernization: 91.6
      },
      {
        category: 'Weapons Systems',
        total: 890,
        operational: 847,
        maintenance: 43,
        readiness: 95.2,
        modernization: 74.6
      }
    ],
    personnelReadiness: {
      activePersonnel: 156789,
      reservePersonnel: 67890,
      deployedPersonnel: 12456,
      trainingCompliance: 94.7,
      medicalReadiness: 97.2,
      securityClearances: 45678,
      specializedSkills: 23456,
      experienceLevel: {
        veteran: 34567, // >10 years
        experienced: 67890, // 5-10 years
        intermediate: 45678, // 2-5 years
        recruit: 8654 // <2 years
      },
      morale: 87.9,
      retention: 89.3,
      recruitment: 92.7
    },
    logistics: {
      supplyChain: {
        readiness: 91.8,
        stockLevels: 87.4,
        deliveryTime: 2.3, // days average
        vendors: 234,
        warehousesOperational: 23
      },
      ammunition: {
        stockLevel: 89.7, // percentage of optimal
        consumption: 234, // tons monthly
        production: 345,
        reserves: 45678, // tons
        qualityControl: 97.8
      },
      fuel: {
        stockLevel: 92.4,
        consumption: 12345, // liters daily
        reserves: 2345678, // liters
        distributionPoints: 45,
        qualityControl: 98.9
      },
      spares: {
        availability: 87.9,
        criticalItems: 94.7,
        leadTime: 15.7, // days average
        suppliers: 156,
        qualityControl: 96.2
      }
    },
    alliedOperations: {
      natoCooperation: {
        activeExercises: 12,
        sharedIntelligence: 89.7,
        jointOperations: 23,
        interoperability: 94.2,
        communicationLinks: 45
      },
      bilateralAgreements: {
        activeAgreements: 67,
        exchangePrograms: 23,
        jointTraining: 34,
        sharedResources: 78.9,
        diplomaticRelations: 92.4
      },
      peacekeepingMissions: {
        activeMissions: 8,
        personnelDeployed: 1234,
        missionSuccess: 87.6,
        civilianProtection: 94.7,
        stabilityIndex: 78.9
      }
    },
    budgetAllocation: {
      totalBudget: 12456789000, // EUR
      personnel: 4567890000, // 36.7%
      equipment: 3456789000, // 27.8%
      operations: 2345678000, // 18.8%
      research: 1234567000, // 9.9%
      infrastructure: 852075000, // 6.8%
      utilizationRate: 94.3,
      costEffectiveness: 87.9,
      returnOnInvestment: 78.4
    },
    emergencyProtocols: {
      defcon: 'DEFCON 3',
      alertStatus: 'ELEVATED',
      responseTime: 15, // minutes
      activationThreshold: 'MEDIUM',
      protocolsActive: 23,
      emergencyReadiness: 97.8,
      commandStructure: 'ACTIVE',
      communicationChannels: 'SECURE'
    },
    defenseAlerts: [
      {
        type: 'CRITICAL',
        category: 'Cyber Security',
        message: 'Advanced persistent threat detected targeting defense networks - enhanced monitoring activated',
        classification: 'RESTRICTED',
        issued: '02:35',
        expires: '08:00',
        threatLevel: 'HIGH',
        actionRequired: true,
        respondingUnit: 'Cyber Command',
        recommendations: ['Isolate affected systems', 'Activate backup protocols', 'Monitor threat progression']
      },
      {
        type: 'WARNING',
        category: 'Intelligence Alert',
        message: 'Unusual maritime activity detected in territorial waters - increased patrol frequency',
        classification: 'CONFIDENTIAL',
        issued: '02:20',
        expires: '14:00',
        threatLevel: 'MEDIUM',
        actionRequired: true,
        respondingUnit: 'Naval Operations',
        recommendations: ['Deploy additional patrol vessels', 'Enhance radar coverage', 'Coordinate with allied forces']
      },
      {
        type: 'SUCCESS',
        category: 'Mission Update',
        message: 'Operation Guardian Phase 2 completed successfully - all objectives achieved',
        classification: 'RESTRICTED',
        issued: '02:10',
        expires: '08:00',
        threatLevel: 'LOW',
        actionRequired: false,
        respondingUnit: 'Mediterranean Command',
        recommendations: ['Transition to Phase 3', 'Document lessons learned', 'Maintain operational tempo']
      },
      {
        type: 'INFO',
        category: 'Training Exercise',
        message: 'Multi-branch exercise "Thunder Shield 2026" commencing tomorrow - air space restrictions active',
        classification: 'OFFICIAL',
        issued: '01:45',
        expires: '72:00',
        threatLevel: 'NONE',
        actionRequired: false,
        respondingUnit: 'Joint Training Command',
        recommendations: ['Coordinate with civilian aviation', 'Monitor exercise parameters', 'Ensure safety protocols']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDefenseData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        defenseOverview: {
          ...prev.defenseOverview,
          deployedForces: Math.max(10000, Math.min(15000, prev.defenseOverview.deployedForces + Math.floor((Math.random() - 0.5) * 100))),
          intelligenceAlerts: Math.max(15, Math.min(35, prev.defenseOverview.intelligenceAlerts + Math.floor((Math.random() - 0.5) * 4)))
        },
        threatAssessment: {
          ...prev.threatAssessment,
          threatResponse: {
            ...prev.threatAssessment.threatResponse,
            responseTime: Math.max(2.0, Math.min(8.0, prev.threatAssessment.threatResponse.responseTime + (Math.random() - 0.5) * 0.5))
          }
        }
      }));
    }, 23000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'SUCCESS': return 'border-green-500 bg-green-900/30 text-green-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getThreatLevelColor = (level) => {
    switch (level) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'NONE': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-400/20';
      case 'OPERATIONAL': return 'text-blue-400 bg-blue-400/20';
      case 'ENHANCED': return 'text-purple-400 bg-purple-400/20';
      case 'PLANNING': return 'text-yellow-400 bg-yellow-400/20';
      case 'STANDBY': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'CRITICAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getReadinessColor = (value, good = 85, excellent = 95) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => {
    if (amount >= 1000000000) {
      return `€${(amount / 1000000000).toFixed(1)}B`;
    }
    if (amount >= 1000000) {
      return `€${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `€${(amount / 1000).toFixed(0)}K`;
    }
    return `€${amount.toLocaleString()}`;
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-gray-900 to-green-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-gray-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-gray-600 to-green-600 rounded-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Defense & Military Intelligence Center</h1>
              <p className="text-gray-300">Military operations, defense strategy, security operations & military analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-green-400">{defenseData.currentTime}</div>
            <div className="text-green-300">Defense Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Defense Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 text-orange-400 mr-2" />
                Threat Level
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{defenseData.defenseOverview.threatLevel}</div>
            <div className="text-orange-300 text-sm">DEFCON: {defenseData.emergencyProtocols.defcon.split(' ')[1]}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-blue-400 mr-2" />
                Active Missions
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{defenseData.defenseOverview.activeMissions}</div>
            <div className="text-blue-300 text-sm">Success Rate: {formatPercentage(defenseData.defenseOverview.missionSuccessRate)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Crosshair className="w-5 h-5 text-green-400 mr-2" />
                Deployed Forces
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(defenseData.defenseOverview.deployedForces)}</div>
            <div className="text-green-300 text-sm">Active: {formatNumber(defenseData.defenseOverview.personnelActive)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                Equipment Ready
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(defenseData.defenseOverview.equipmentReadiness)}</div>
            <div className="text-purple-300 text-sm">Operational Security: {formatPercentage(defenseData.defenseOverview.operationalSecurity)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Radio className="w-5 h-5 text-cyan-400 mr-2" />
                Intel Alerts
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{defenseData.defenseOverview.intelligenceAlerts}</div>
            <div className="text-cyan-300 text-sm">Clearances: {formatNumber(defenseData.defenseOverview.securityClearances)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-emerald-400 mr-2" />
                Defense Budget
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatCurrency(defenseData.defenseOverview.defenseSpending)}</div>
            <div className="text-emerald-300 text-sm">Utilization: {formatPercentage(defenseData.budgetAllocation.utilizationRate)}</div>
          </div>
        </div>

        {/* Active Operations */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 text-blue-400 mr-2" />
            Active Military Operations
          </h3>
          <div className="space-y-4">
            {defenseData.activeOperations.map((operation, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-medium">{operation.operationId}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getThreatLevelColor(operation.priority)}`}>
                      {operation.priority}
                    </span>
                    <span className="text-blue-400 text-sm">{operation.missionType}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(operation.status)}`}>
                      {operation.status}
                    </span>
                    <span className="text-yellow-400 text-xs">{operation.classification}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-slate-300 text-sm">Theater: {operation.theater}</div>
                    <div className="text-slate-300 text-sm">Commander: {operation.commandingOfficer}</div>
                    <div className="text-slate-300 text-sm">Duration: {operation.duration} days</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-slate-300">Personnel: {formatNumber(operation.personnelDeployed)}</div>
                    <div className="text-slate-300">Assets: {operation.assetsDeployed} units</div>
                    <div className="text-slate-300">Risk Level: {operation.riskLevel}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {operation.objectives.map((objective, objIndex) => (
                    <span key={objIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      {objective}
                    </span>
                  ))}
                </div>
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 text-xs">Progress</span>
                    <span className="text-green-400 text-xs">{formatPercentage(operation.progress)}</span>
                  </div>
                  <div className="w-full bg-slate-600/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                      style={{ width: `${operation.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Military Branches & Intelligence Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-orange-400 mr-2" />
              Military Branches Intelligence
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white text-sm font-medium">Army</h4>
                  <span className={`text-sm ${getReadinessColor(defenseData.militaryBranches.army.readiness)}`}>
                    {formatPercentage(defenseData.militaryBranches.army.readiness)}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Personnel: {formatNumber(defenseData.militaryBranches.army.personnel)}</div>
                    <div className="text-slate-300">Tanks: {defenseData.militaryBranches.army.equipment.tanks}</div>
                  </div>
                  <div>
                    <div className="text-slate-300">Bases: {defenseData.militaryBranches.army.activeBases}</div>
                    <div className="text-green-400">Deployed: {defenseData.militaryBranches.army.deployedUnits} units</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white text-sm font-medium">Navy</h4>
                  <span className={`text-sm ${getReadinessColor(defenseData.militaryBranches.navy.readiness)}`}>
                    {formatPercentage(defenseData.militaryBranches.navy.readiness)}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Personnel: {formatNumber(defenseData.militaryBranches.navy.personnel)}</div>
                    <div className="text-slate-300">Ships: {defenseData.militaryBranches.navy.equipment.ships}</div>
                  </div>
                  <div>
                    <div className="text-slate-300">Submarines: {defenseData.militaryBranches.navy.equipment.submarines}</div>
                    <div className="text-blue-400">Deployed: {defenseData.militaryBranches.navy.deployedUnits} units</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white text-sm font-medium">Air Force</h4>
                  <span className={`text-sm ${getReadinessColor(defenseData.militaryBranches.airForce.readiness)}`}>
                    {formatPercentage(defenseData.militaryBranches.airForce.readiness)}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Personnel: {formatNumber(defenseData.militaryBranches.airForce.personnel)}</div>
                    <div className="text-slate-300">Fighters: {defenseData.militaryBranches.airForce.equipment.fighters}</div>
                  </div>
                  <div>
                    <div className="text-slate-300">Helicopters: {defenseData.militaryBranches.airForce.equipment.helicopters}</div>
                    <div className="text-purple-400">Deployed: {defenseData.militaryBranches.airForce.deployedUnits} units</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white text-sm font-medium">Special Forces</h4>
                  <span className={`text-sm ${getReadinessColor(defenseData.militaryBranches.specialForces.readiness)}`}>
                    {formatPercentage(defenseData.militaryBranches.specialForces.readiness)}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Personnel: {formatNumber(defenseData.militaryBranches.specialForces.personnel)}</div>
                    <div className="text-slate-300">Equipment: {defenseData.militaryBranches.specialForces.equipment.specialized}</div>
                  </div>
                  <div>
                    <div className="text-slate-300">Bases: {defenseData.militaryBranches.specialForces.activeBases}</div>
                    <div className="text-red-400">Deployed: {defenseData.militaryBranches.specialForces.deployedUnits} units</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Radar className="w-5 h-5 text-cyan-400 mr-2" />
              Intelligence Operations
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{defenseData.intelligenceOperations.activeIntelOps}</div>
                <div className="text-cyan-300 text-sm">Active Intel Ops</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(defenseData.intelligenceOperations.signalIntelligence.accuracy)}</div>
                <div className="text-green-300 text-sm">SIGINT Accuracy</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Signal Intelligence (SIGINT)</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Status: {defenseData.intelligenceOperations.signalIntelligence.status}</div>
                    <div className="text-slate-300">Coverage: {formatPercentage(defenseData.intelligenceOperations.signalIntelligence.coverage)}</div>
                  </div>
                  <div>
                    <div className="text-blue-400">Data: {formatNumber(defenseData.intelligenceOperations.signalIntelligence.dataProcessed)} TB/day</div>
                    <div className="text-orange-400">Threats: {defenseData.intelligenceOperations.signalIntelligence.threatsDetected}</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Human Intelligence (HUMINT)</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Networks: {defenseData.intelligenceOperations.humanIntelligence.networks}</div>
                    <div className="text-slate-300">Active Agents: {defenseData.intelligenceOperations.humanIntelligence.activeAgents}</div>
                  </div>
                  <div>
                    <div className="text-green-400">Reports: {defenseData.intelligenceOperations.humanIntelligence.intelligenceReports}</div>
                    <div className="text-blue-400">Reliability: {formatPercentage(defenseData.intelligenceOperations.humanIntelligence.reliability)}</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Cyber Intelligence</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Threats Monitored: {formatNumber(defenseData.intelligenceOperations.cyberIntelligence.threatsMonitored)}</div>
                    <div className="text-slate-300">Attacks Blocked: {defenseData.intelligenceOperations.cyberIntelligence.attacksBlocked}</div>
                  </div>
                  <div>
                    <div className="text-red-400">Vulnerabilities: {defenseData.intelligenceOperations.cyberIntelligence.vulnerabilities}</div>
                    <div className="text-green-400">Security Level: {formatPercentage(defenseData.intelligenceOperations.cyberIntelligence.securityLevel)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Defense Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Defense & Military Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {defenseData.defenseAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                    <span className="text-yellow-400 text-xs">{alert.classification}</span>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-slate-400">Issued: {alert.issued}</div>
                    <div className="text-slate-400">Expires: {alert.expires}</div>
                  </div>
                </div>
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                  <div>
                    <div className="text-slate-300">Unit: {alert.respondingUnit}</div>
                    <div className={`${getThreatLevelColor(alert.threatLevel).split(' ')[0]} text-xs`}>
                      Threat: {alert.threatLevel}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-300">Action: {alert.actionRequired ? 'Required' : 'Monitoring'}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {alert.recommendations.map((rec, recIndex) => (
                    <span key={recIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Status & Threat Assessment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
              Equipment Status Intelligence
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600/50">
                    <th className="text-left p-2 text-slate-300">Category</th>
                    <th className="text-center p-2 text-slate-300">Total</th>
                    <th className="text-center p-2 text-slate-300">Operational</th>
                    <th className="text-center p-2 text-slate-300">Readiness</th>
                  </tr>
                </thead>
                <tbody>
                  {defenseData.equipmentStatus.map((equipment, index) => (
                    <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                      <td className="p-2 text-white font-medium text-xs">{equipment.category}</td>
                      <td className="p-2 text-center text-blue-400 text-xs">{equipment.total}</td>
                      <td className="p-2 text-center text-green-400 text-xs">{equipment.operational}</td>
                      <td className={`p-2 text-center text-xs font-medium ${getReadinessColor(equipment.readiness, 85, 92)}`}>
                        {formatPercentage(equipment.readiness)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-red-400 mr-2" />
              Threat Assessment Intelligence
            </h3>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Current Threat Matrix</h4>
              {defenseData.threatAssessment.currentThreats.slice(0, 4).map((threat, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm">{threat.threat}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getThreatLevelColor(threat.level)}`}>
                      {threat.level}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <div className="text-slate-300">Probability</div>
                      <div className="text-orange-400">{formatPercentage(threat.probability)}</div>
                    </div>
                    <div>
                      <div className="text-slate-300">Impact</div>
                      <div className="text-red-400">{threat.impact}</div>
                    </div>
                    <div>
                      <div className="text-slate-300">Source</div>
                      <div className="text-blue-400">{threat.source}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <h4 className="text-white text-sm font-medium mb-2">Response Capability</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-slate-300">Detection: {formatPercentage(defenseData.threatAssessment.threatResponse.detectionCapability)}</div>
                  <div className="text-slate-300">Prevention: {formatPercentage(defenseData.threatAssessment.threatResponse.preventionMeasures)}</div>
                </div>
                <div>
                  <div className="text-green-400">Response Time: {defenseData.threatAssessment.threatResponse.responseTime.toFixed(1)}m</div>
                  <div className="text-blue-400">Neutralization: {formatPercentage(defenseData.threatAssessment.threatResponse.neutralizationRate)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}