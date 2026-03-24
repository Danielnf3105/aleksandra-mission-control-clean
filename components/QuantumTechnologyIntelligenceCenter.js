// Quantum Technology Intelligence Center - Quantum Computing & Research Analytics
import { useState, useEffect } from 'react';
import { Zap, Atom, Activity, Eye, BarChart3, Settings, Lock, AlertTriangle, TrendingUp, Layers, Radio, Cpu } from 'lucide-react';

export default function QuantumTechnologyIntelligenceCenter() {
  const [quantumData, setQuantumData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    quantumOverview: {
      quantumSystems: 127,
      operationalQubits: 65432,
      quantumComputers: 89,
      researchFacilities: 156,
      commercialSystems: 45,
      cloudQuantumServices: 23,
      globalCoverage: 92.8,
      systemUptime: 97.3,
      quantumVolume: 2048,
      errorRate: 0.001,
      coherenceTime: 150,
      gateTime: 25,
      quantumAdvantage: 'DEMONSTRATED',
      faultTolerance: 'RESEARCH PHASE',
      networkConnectivity: 67,
      quantumInternet: 12,
      quantumCrypto: 234,
      quantumSensors: 1567,
      quantumSimulation: 89,
      quantumML: 156
    },
    quantumComputers: [
      {
        systemName: 'IBM Quantum Heron',
        systemId: 'IBM-Q-HERON-001',
        location: 'Yorktown Heights, NY',
        provider: 'IBM Quantum',
        status: 'OPERATIONAL',
        architecture: 'SUPERCONDUCTING',
        qubitCount: 1121,
        quantumVolume: 2048,
        errorRate: 0.0008,
        coherenceTime: 185,
        gateTime: 20,
        connectivity: 'HEAVY-HEX',
        calibrationDate: '2026-03-17',
        temperatureK: 0.015,
        availabilityHours: 168,
        jobsExecuted: 45678,
        avgWaitTime: 23,
        successRate: 97.8,
        userAccess: 'CLOUD PREMIUM',
        quantumCircuits: 12345,
        measurementFidelity: 99.2,
        crossTalkError: 0.005,
        gateSetComplexity: 'UNIVERSAL'
      },
      {
        systemName: 'Google Sycamore',
        systemId: 'GOOG-SYCAMORE-070',
        location: 'Santa Barbara, CA',
        provider: 'Google Quantum AI',
        status: 'OPERATIONAL',
        architecture: 'SUPERCONDUCTING',
        qubitCount: 70,
        quantumVolume: 512,
        errorRate: 0.002,
        coherenceTime: 100,
        gateTime: 12,
        connectivity: '2D SQUARE',
        calibrationDate: '2026-03-16',
        temperatureK: 0.020,
        availabilityHours: 144,
        jobsExecuted: 23456,
        avgWaitTime: 45,
        successRate: 95.6,
        userAccess: 'RESEARCH ONLY',
        quantumCircuits: 8901,
        measurementFidelity: 98.7,
        crossTalkError: 0.008,
        gateSetComplexity: 'UNIVERSAL'
      },
      {
        systemName: 'IonQ Forte',
        systemId: 'IONQ-FORTE-032',
        location: 'College Park, MD',
        provider: 'IonQ',
        status: 'OPERATIONAL',
        architecture: 'TRAPPED ION',
        qubitCount: 32,
        quantumVolume: 1024,
        errorRate: 0.0005,
        coherenceTime: 10000,
        gateTime: 50,
        connectivity: 'ALL-TO-ALL',
        calibrationDate: '2026-03-18',
        temperatureK: 0.0001,
        availabilityHours: 156,
        jobsExecuted: 34567,
        avgWaitTime: 12,
        successRate: 98.9,
        userAccess: 'CLOUD PUBLIC',
        quantumCircuits: 15678,
        measurementFidelity: 99.5,
        crossTalkError: 0.001,
        gateSetComplexity: 'UNIVERSAL'
      },
      {
        systemName: 'Rigetti Aspen-M-3',
        systemId: 'RIGETTI-ASPEN-M3-080',
        location: 'Berkeley, CA',
        provider: 'Rigetti Computing',
        status: 'MAINTENANCE',
        architecture: 'SUPERCONDUCTING',
        qubitCount: 80,
        quantumVolume: 256,
        errorRate: 0.003,
        coherenceTime: 75,
        gateTime: 35,
        connectivity: 'OCTAGONAL',
        calibrationDate: '2026-03-15',
        temperatureK: 0.012,
        availabilityHours: 0,
        jobsExecuted: 0,
        avgWaitTime: 0,
        successRate: 0.0,
        userAccess: 'OFFLINE',
        quantumCircuits: 0,
        measurementFidelity: 0.0,
        crossTalkError: 0.000,
        gateSetComplexity: 'UNIVERSAL'
      }
    ],
    quantumApplications: [
      {
        applicationName: 'Quantum Chemistry Simulation',
        applicationId: 'QCS-MOL-DRUG-001',
        domain: 'PHARMACEUTICAL',
        organization: 'Roche Quantum Labs',
        status: 'ACTIVE',
        algorithm: 'VQE',
        problemSize: 'H2O + 24 ATOMS',
        qubitRequirement: 156,
        circuitDepth: 1024,
        quantumAdvantage: 'CONFIRMED',
        classicalComparison: '10^6x SPEEDUP',
        executionTime: 45,
        accuracyGained: 99.7,
        resourceOptimization: 'ADAPTIVE VQE',
        errorMitigation: 'ZERO NOISE EXTRAPOLATION',
        applicationImpact: 'DRUG DISCOVERY',
        commercialValue: '$2.3B POTENTIAL',
        publicationStatus: 'NATURE SUBMITTED',
        collaborations: 'HARVARD, MIT',
        nextMilestone: 'PROTEIN FOLDING',
        technologyReadiness: 'TRL 6'
      },
      {
        applicationName: 'Quantum Machine Learning',
        applicationId: 'QML-FINTECH-001',
        domain: 'FINANCIAL SERVICES',
        organization: 'Goldman Sachs Quantum',
        status: 'ACTIVE',
        algorithm: 'QSVM',
        problemSize: 'PORTFOLIO OPTIMIZATION',
        qubitRequirement: 64,
        circuitDepth: 512,
        quantumAdvantage: 'DEMONSTRATED',
        classicalComparison: '100x SPEEDUP',
        executionTime: 120,
        accuracyGained: 94.2,
        resourceOptimization: 'QAOA HYBRID',
        errorMitigation: 'SYMMETRY VERIFICATION',
        applicationImpact: 'RISK MANAGEMENT',
        commercialValue: '$450M ANNUAL',
        publicationStatus: 'QUANTUM SCI TECH',
        collaborations: 'JPMORGAN, CAMBRIDGE',
        nextMilestone: 'CREDIT RISK MODELING',
        technologyReadiness: 'TRL 7'
      },
      {
        applicationName: 'Quantum Cryptography Network',
        applicationId: 'QKD-NETWORK-EU-001',
        domain: 'CYBERSECURITY',
        organization: 'EU Quantum Flagship',
        status: 'OPERATIONAL',
        algorithm: 'BB84 PROTOCOL',
        problemSize: 'PAN-EUROPEAN NETWORK',
        qubitRequirement: 2048,
        circuitDepth: 1,
        quantumAdvantage: 'UNCONDITIONAL SECURITY',
        classicalComparison: 'INFORMATION THEORETIC',
        executionTime: 'CONTINUOUS',
        accuracyGained: 100.0,
        resourceOptimization: 'TRUSTED NODE',
        errorMitigation: 'DECOY STATE',
        applicationImpact: 'QUANTUM INTERNET',
        commercialValue: '€1.2B INFRASTRUCTURE',
        publicationStatus: 'OPERATIONAL',
        collaborations: 'CERN, TELECOM EUROPA',
        nextMilestone: 'SATELLITE QKD',
        technologyReadiness: 'TRL 9'
      }
    ],
    quantumResearch: [
      {
        researchProject: 'Quantum Error Correction',
        projectId: 'QEC-SURFACE-CODE-001',
        institution: 'MIT Center for Quantum Engineering',
        principalInvestigator: 'Dr. Peter Shor',
        status: 'ACTIVE',
        fundingAgency: 'NSF, DARPA',
        budgetMillion: 25.4,
        timeline: '2024-2028',
        researchGoal: 'LOGICAL QUBIT DEMONSTRATION',
        approach: 'SURFACE CODE',
        qubitTarget: 1000000,
        errorThreshold: 0.001,
        currentProgress: 67,
        majorMilestones: 'LOGICAL QUBIT ACHIEVED',
        recentBreakthrough: 'SUB-THRESHOLD ERROR RATE',
        collaborations: 'GOOGLE, IBM, HARVARD',
        publications: 23,
        patents: 12,
        phDStudents: 18,
        postDocs: 8,
        industryPartners: 'QUANTUM CIRCUITS, ATOM COMPUTING',
        nextPhase: 'FAULT-TOLERANT COMPUTATION'
      },
      {
        researchProject: 'Quantum Internet Architecture',
        projectId: 'QI-ENTANGLEMENT-NET-001',
        institution: 'Delft University of Technology',
        principalInvestigator: 'Prof. Ronald Hanson',
        status: 'ACTIVE',
        fundingAgency: 'EU HORIZON, NWO',
        budgetMillion: 18.7,
        timeline: '2023-2027',
        researchGoal: 'QUANTUM NETWORK PROTOCOL',
        approach: 'NV CENTER NODES',
        qubitTarget: 50,
        errorThreshold: 0.01,
        currentProgress: 78,
        majorMilestones: '4-NODE NETWORK DEMO',
        recentBreakthrough: 'REMOTE ENTANGLEMENT',
        collaborations: 'HARVARD, CHICAGO, VIENNA',
        publications: 31,
        patents: 8,
        phDStudents: 12,
        postDocs: 6,
        industryPartners: 'QTECH, MICROSOFT',
        nextPhase: 'INTERCITY QUANTUM LINK'
      }
    ],
    quantumMarket: [
      {
        segment: 'Quantum Computing Hardware',
        marketSizeBillion: 12.3,
        growthRate: 145.2,
        leadingCompanies: 'IBM, GOOGLE, IONQ',
        keyApplications: 'OPTIMIZATION, SIMULATION',
        investmentBillion: 4.2,
        timeToMarket: '2-5 YEARS',
        technicalChallenges: 'ERROR CORRECTION, SCALING',
        regulatoryStatus: 'EMERGING',
        competitiveAdvantage: 'QUANTUM SUPREMACY',
        marketDrivers: 'CLOUD ACCESS, PARTNERSHIPS',
        geographicLeaders: 'USA, EU, CHINA',
        patentActivity: 'EXPONENTIAL',
        talentPool: 'RAPIDLY GROWING',
        infrastructureReq: 'SPECIALIZED FACILITIES'
      },
      {
        segment: 'Quantum Software & Algorithms',
        marketSizeBillion: 8.7,
        growthRate: 178.9,
        leadingCompanies: 'MICROSOFT, IBM, RIGETTI',
        keyApplications: 'MACHINE LEARNING, CHEMISTRY',
        investmentBillion: 2.8,
        timeToMarket: '1-3 YEARS',
        technicalChallenges: 'NISQ ALGORITHMS, COMPILATION',
        regulatoryStatus: 'DEVELOPING',
        competitiveAdvantage: 'ALGORITHM IP',
        marketDrivers: 'HYBRID COMPUTING, CLOUD',
        geographicLeaders: 'USA, CANADA, UK',
        patentActivity: 'HIGH',
        talentPool: 'ACADEMIC TRANSITION',
        infrastructureReq: 'CLASSICAL HPC'
      },
      {
        segment: 'Quantum Communication',
        marketSizeBillion: 5.4,
        growthRate: 89.3,
        leadingCompanies: 'ID QUANTIQUE, TOSHIBA',
        keyApplications: 'SECURE COMMUNICATIONS',
        investmentBillion: 1.9,
        timeToMarket: 'AVAILABLE',
        technicalChallenges: 'DISTANCE LIMITATIONS',
        regulatoryStatus: 'ESTABLISHED',
        competitiveAdvantage: 'SECURITY GUARANTEE',
        marketDrivers: 'CYBERSECURITY, GOVERNMENT',
        geographicLeaders: 'CHINA, EU, SINGAPORE',
        patentActivity: 'MATURE',
        talentPool: 'SPECIALIZED',
        infrastructureReq: 'FIBER NETWORKS'
      }
    ],
    quantumAlerts: [
      {
        type: 'CRITICAL',
        category: 'System Error',
        message: 'Quantum decoherence event detected - Error correction protocols activated',
        system: 'IBM Quantum Heron System',
        location: 'Yorktown Heights Data Center',
        errorType: 'CORRELATED DECOHERENCE',
        qubitAffected: 156,
        severity: 'HIGH',
        timestamp: '12:55',
        detectedBy: 'Quantum Error Monitoring',
        recommendation: 'Immediate recalibration required, suspend current jobs',
        impactAssessment: 'COMPUTATION INTEGRITY COMPROMISED',
        mitigationActions: 'ERROR CORRECTION, RECALIBRATION',
        systemStatus: 'RECOVERY MODE',
        estimatedDowntime: '45 MINUTES',
        rootCauseAnalysis: 'ELECTROMAGNETIC INTERFERENCE',
        preventiveMeasures: 'SHIELDING UPGRADE',
        userNotification: 'ALL USERS NOTIFIED',
        dataIntegrity: 'CHECKPOINT RECOVERY'
      },
      {
        type: 'HIGH',
        category: 'Performance Degradation',
        message: 'Quantum volume benchmark shows 15% performance decrease',
        system: 'Google Sycamore Quantum Processor',
        location: 'Santa Barbara Quantum Lab',
        errorType: 'CALIBRATION DRIFT',
        qubitAffected: 70,
        severity: 'MODERATE',
        timestamp: '11:23',
        detectedBy: 'Performance Monitoring',
        recommendation: 'Schedule maintenance calibration cycle',
        impactAssessment: 'REDUCED COMPUTATIONAL FIDELITY',
        mitigationActions: 'CALIBRATION OPTIMIZATION',
        systemStatus: 'OPERATIONAL DEGRADED',
        estimatedDowntime: '2 HOURS',
        rootCauseAnalysis: 'THERMAL FLUCTUATION',
        preventiveMeasures: 'ENHANCED COOLING',
        userNotification: 'PERFORMANCE WARNING',
        dataIntegrity: 'VALIDATION REQUIRED'
      },
      {
        type: 'MEDIUM',
        category: 'Network Connectivity',
        message: 'Quantum network latency increased by 200ms on EU-US quantum link',
        system: 'Quantum Internet Backbone',
        location: 'Transatlantic Quantum Link',
        errorType: 'ENTANGLEMENT DEGRADATION',
        qubitAffected: 8,
        severity: 'LOW',
        timestamp: '10:45',
        detectedBy: 'Network Performance Monitor',
        recommendation: 'Investigate entanglement distribution protocols',
        impactAssessment: 'SLOWER QUANTUM COMMUNICATION',
        mitigationActions: 'PROTOCOL OPTIMIZATION',
        systemStatus: 'OPERATIONAL',
        estimatedDowntime: 'NONE',
        rootCauseAnalysis: 'FIBER ATTENUATION',
        preventiveMeasures: 'REPEATER UPGRADE',
        userNotification: 'LATENCY ADVISORY',
        dataIntegrity: 'UNAFFECTED'
      },
      {
        type: 'INFO',
        category: 'Research Milestone',
        message: 'Quantum advantage demonstrated in financial portfolio optimization',
        system: 'Hybrid Quantum-Classical Platform',
        location: 'Goldman Sachs Quantum Lab',
        achievement: 'QUANTUM SPEEDUP',
        magnitude: '100x CLASSICAL',
        significance: 'COMMERCIAL VIABILITY',
        timestamp: '09:30',
        detectedBy: 'Algorithm Performance Analysis',
        businessImpact: '$450M ANNUAL VALUE',
        technicalDetails: 'QAOA ALGORITHM, 64 QUBITS',
        publicationStatus: 'PEER REVIEW SUBMITTED',
        industryResponse: 'HIGH INTEREST',
        nextSteps: 'SCALE TO LARGER PORTFOLIOS',
        collaborations: 'JPMORGAN, CAMBRIDGE',
        intellectualProperty: '3 PATENTS FILED',
        mediaAttention: 'FRONT PAGE WSJ'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        systemsOperational: 89,
        jobsExecuted: 2456,
        quantumVolume: 2048,
        avgErrorRate: 0.0012,
        coherenceTime: 135,
        successRate: 96.8,
        queueLength: 345,
        activeUsers: 1234
      },
      {
        period: 'Last 24 Hours',
        systemsOperational: 87,
        jobsExecuted: 56789,
        quantumVolume: 1987,
        avgErrorRate: 0.0015,
        coherenceTime: 132,
        successRate: 95.4,
        queueLength: 2345,
        activeUsers: 5678
      },
      {
        period: 'Last 7 Days',
        systemsOperational: 85,
        jobsExecuted: 345678,
        quantumVolume: 1876,
        avgErrorRate: 0.0018,
        coherenceTime: 128,
        successRate: 94.2,
        queueLength: 12345,
        activeUsers: 23456
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        quantumOverview: {
          ...prev.quantumOverview,
          errorRate: Math.max(0.0005, Math.min(0.003, prev.quantumOverview.errorRate + (Math.random() - 0.5) * 0.0001)),
          coherenceTime: Math.max(100, Math.min(200, prev.quantumOverview.coherenceTime + (Math.random() - 0.5) * 5))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20';
      case 'OFFLINE': return 'text-red-400 bg-red-400/20';
      case 'ACTIVE': return 'text-green-400 bg-green-400/20';
      case 'RESEARCH PHASE': return 'text-purple-400 bg-purple-400/20';
      case 'DEMONSTRATED': return 'text-blue-400 bg-blue-400/20';
      case 'CONFIRMED': return 'text-green-400 bg-green-400/20';
      case 'RECOVERY MODE': return 'text-orange-400 bg-orange-400/20';
      case 'DEGRADED': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'MEDIUM': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-green-500 bg-green-900/30 text-green-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatTime = (time) => `${time}μs`;
  const formatError = (error) => `${(error * 100).toFixed(3)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
              <Atom className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Quantum Technology Intelligence Center</h1>
              <p className="text-purple-300">Quantum computing & research analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{quantumData.currentTime}</div>
            <div className="text-purple-300">Quantum Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Quantum Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Cpu className="w-5 h-5 text-purple-400 mr-2" />
                Qubits
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(quantumData.quantumOverview.operationalQubits)}</div>
            <div className="text-purple-300 text-sm">{quantumData.quantumOverview.quantumSystems} Systems</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-blue-400 mr-2" />
                Volume
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{quantumData.quantumOverview.quantumVolume}</div>
            <div className="text-blue-300 text-sm">Benchmark</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Uptime
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(quantumData.quantumOverview.systemUptime)}</div>
            <div className="text-green-300 text-sm">Systems</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Radio className="w-5 h-5 text-cyan-400 mr-2" />
                Error Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatError(quantumData.quantumOverview.errorRate)}</div>
            <div className="text-cyan-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Layers className="w-5 h-5 text-orange-400 mr-2" />
                Coherence
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatTime(quantumData.quantumOverview.coherenceTime)}</div>
            <div className="text-orange-300 text-sm">T2 Time</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Lock className="w-5 h-5 text-pink-400 mr-2" />
                Advantage
              </h3>
            </div>
            <div className="text-3xl font-bold text-pink-400">{quantumData.quantumOverview.quantumAdvantage === 'DEMONSTRATED' ? 'YES' : 'NO'}</div>
            <div className="text-pink-300 text-sm">Proven</div>
          </div>
        </div>

        {/* Quantum Computers & Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cpu className="w-5 h-5 text-purple-400 mr-2" />
              Quantum Computing Systems
            </h3>
            <div className="space-y-4">
              {quantumData.quantumComputers.map((computer, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{computer.systemName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(computer.status)}`}>
                        {computer.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{computer.location}</div>
                    <div className="text-blue-400">{computer.provider}</div>
                    <div className="text-green-400">{computer.systemId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Qubits: {computer.qubitCount}</div>
                    <div className="text-purple-400">Volume: {computer.quantumVolume}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Error: {formatError(computer.errorRate)}</div>
                    <div className="text-pink-400">T2: {formatTime(computer.coherenceTime)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Success Rate</span>
                      <span>{formatPercentage(computer.successRate)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-purple-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${computer.successRate}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Architecture: {computer.architecture}</div>
                    <div className="text-indigo-400">Connectivity: {computer.connectivity}</div>
                    <div className="text-cyan-400">Temperature: {computer.temperatureK} K</div>
                    <div className="text-green-400">Jobs: {formatNumber(computer.jobsExecuted)}</div>
                    <div className="text-blue-400">Wait: {computer.avgWaitTime} sec</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-blue-400 mr-2" />
              Quantum Applications
            </h3>
            <div className="space-y-4">
              {quantumData.quantumApplications.map((app, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{app.applicationName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{app.domain}</div>
                    <div className="text-blue-400">{app.organization}</div>
                    <div className="text-green-400">{app.applicationId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Algorithm: {app.algorithm}</div>
                    <div className="text-purple-400">Qubits: {app.qubitRequirement}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Advantage: {app.quantumAdvantage}</div>
                    <div className="text-pink-400">Speedup: {app.classicalComparison}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Problem: {app.problemSize}</div>
                    <div className="text-indigo-400">Impact: {app.applicationImpact}</div>
                    <div className="text-cyan-400">Value: {app.commercialValue}</div>
                    <div className="text-green-400">TRL: {app.technologyReadiness}</div>
                    <div className="text-blue-400">Partners: {app.collaborations}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quantum Research & Market Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-green-400 mr-2" />
              Quantum Research Programs
            </h3>
            <div className="space-y-4">
              {quantumData.quantumResearch.map((research, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{research.researchProject}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(research.status)}`}>
                        {research.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{research.institution}</div>
                    <div className="text-blue-400">{research.principalInvestigator}</div>
                    <div className="text-green-400">{research.projectId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Budget: ${research.budgetMillion}M</div>
                    <div className="text-purple-400">Timeline: {research.timeline}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Progress</span>
                      <span>{formatPercentage(research.currentProgress)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-green-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${research.currentProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Goal: {research.researchGoal}</div>
                    <div className="text-indigo-400">Approach: {research.approach}</div>
                    <div className="text-cyan-400">Milestone: {research.majorMilestones}</div>
                    <div className="text-green-400">Breakthrough: {research.recentBreakthrough}</div>
                    <div className="text-blue-400">Publications: {research.publications}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-orange-400 mr-2" />
              Quantum Market Intelligence
            </h3>
            <div className="space-y-4">
              {quantumData.quantumMarket.map((segment, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{segment.segment}</span>
                    <div className="text-green-400 text-xs">${segment.marketSizeBillion}B</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Growth: +{formatPercentage(segment.growthRate)}</div>
                    <div className="text-blue-400">Investment: ${segment.investmentBillion}B</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Leaders: {segment.leadingCompanies}</div>
                    <div className="text-purple-400">TTM: {segment.timeToMarket}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Applications: {segment.keyApplications}</div>
                    <div className="text-indigo-400">Challenges: {segment.technicalChallenges}</div>
                    <div className="text-cyan-400">Regions: {segment.geographicLeaders}</div>
                    <div className="text-green-400">Drivers: {segment.marketDrivers}</div>
                    <div className="text-blue-400">Patents: {segment.patentActivity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
            Quantum Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {quantumData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Systems: {metrics.systemsOperational}</div>
                  <div className="text-green-400">Jobs: {formatNumber(metrics.jobsExecuted)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Volume: {metrics.quantumVolume}</div>
                  <div className="text-yellow-400">Error: {formatError(metrics.avgErrorRate)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">T2: {formatTime(metrics.coherenceTime)}</div>
                  <div className="text-orange-400">Success: {formatPercentage(metrics.successRate)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Queue: {formatNumber(metrics.queueLength)}</div>
                  <div className="text-pink-400">Users: {formatNumber(metrics.activeUsers)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quantum Technology Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Quantum Technology System Alerts
          </h3>
          <div className="space-y-4">
            {quantumData.quantumAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                
                <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                  {alert.system && <div className="text-slate-300">System: {alert.system}</div>}
                  {alert.location && <div className="text-cyan-400">Location: {alert.location}</div>}
                  {alert.errorType && <div className="text-orange-400">Error: {alert.errorType}</div>}
                  {alert.qubitAffected && <div className="text-red-400">Qubits: {alert.qubitAffected}</div>}
                  {alert.achievement && <div className="text-green-400">Achievement: {alert.achievement}</div>}
                  {alert.magnitude && <div className="text-purple-400">Magnitude: {alert.magnitude}</div>}
                  {alert.businessImpact && <div className="text-blue-400">Value: {alert.businessImpact}</div>}
                </div>
                
                <div className="text-slate-300 text-xs mb-2">
                  <strong>Impact:</strong> {alert.impactAssessment || alert.technicalDetails}
                </div>
                
                <div className="text-slate-300 text-xs">
                  <strong>Action:</strong> {alert.recommendation || alert.nextSteps}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}