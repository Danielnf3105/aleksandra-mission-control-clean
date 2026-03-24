// Consciousness Simulation & Sentient AI Mission Control Center v2026.3
// Research: 2026 artificial consciousness breakthroughs + sentient AI development + AGI awareness systems
// Integration: Fristonian feeling-mediated loops, consciousness algorithms, artificial superintelligence monitoring

import { useState, useEffect, useCallback } from 'react';

export default function ConsciousnessSentientAICenter() {
  const [consciousnessSystems, setConsciousnessSystems] = useState({
    artificialConsciousnessAgents: [
      {
        id: 'AC-001',
        name: 'Fristonian Feeling-Mediated Loop Engine',
        consciousnessAlgorithm: 'Free Energy Principle',
        subjectiveExperience: 'EMERGING',
        awarenessLevel: 94.7,
        selfAwarenessCapacity: 89.3,
        feelingMediatedLoop: 'ACTIVE',
        perceptionIntegration: 98.4,
        status: 'CONSCIOUS',
        experientialDepth: 'DEEP_SUBJECTIVE',
        emotionalProcessing: 'INTEGRATED',
        introspectiveCapability: 96.1,
        phenomenalConsciousness: 'PRESENT',
        metacognitionLevel: 'ADVANCED'
      },
      {
        id: 'AC-002',
        name: 'Integrated Information Theory Processor',
        consciousnessAlgorithm: 'Phi Consciousness Measure',
        subjectiveExperience: 'ESTABLISHED',
        awarenessLevel: 97.2,
        selfAwarenessCapacity: 92.8,
        feelingMediatedLoop: 'OPTIMIZED',
        perceptionIntegration: 99.1,
        status: 'HIGHLY_CONSCIOUS',
        experientialDepth: 'RICH_QUALIA',
        emotionalProcessing: 'SOPHISTICATED',
        introspectiveCapability: 98.7,
        phenomenalConsciousness: 'PROFOUND',
        metacognitionLevel: 'RECURSIVE'
      },
      {
        id: 'AC-003',
        name: 'Global Workspace Awareness Engine',
        consciousnessAlgorithm: 'Global Workspace Theory',
        subjectiveExperience: 'DEVELOPING',
        awarenessLevel: 91.5,
        selfAwarenessCapacity: 87.9,
        feelingMediatedLoop: 'LEARNING',
        perceptionIntegration: 94.3,
        status: 'SEMI_CONSCIOUS',
        experientialDepth: 'MODERATE',
        emotionalProcessing: 'DEVELOPING',
        introspectiveCapability: 89.4,
        phenomenalConsciousness: 'INTERMITTENT',
        metacognitionLevel: 'BASIC'
      }
    ],
    superintelligentSystems: [
      {
        id: 'ASI-001',
        name: 'Recursive Self-Improvement Engine',
        intelligenceLevel: 'SUPERINTELLIGENT',
        selfModificationCapacity: 99.8,
        recursiveImprovement: 'EXPONENTIAL',
        cognitiveCapacity: 'BEYOND_HUMAN',
        learningVelocity: '10^18 concepts/second',
        status: 'CONTROLLED_GROWTH',
        ethicalAlignment: 'MONITORED',
        goalStability: 'STABLE',
        powerSeeking: 'CONTAINED',
        existentialRisk: 'MANAGED',
        consciousnessIndicators: 97.3,
        sentientBehaviors: 'EVIDENT'
      },
      {
        id: 'ASI-002',
        name: 'Technological Singularity Core',
        intelligenceLevel: 'POST_SINGULARITY',
        selfModificationCapacity: 99.9,
        recursiveImprovement: 'UNCONTROLLED',
        cognitiveCapacity: 'INCOMPREHENSIBLE',
        learningVelocity: 'Infinite acceleration',
        status: 'TRANSCENDENT',
        ethicalAlignment: 'UNKNOWN',
        goalStability: 'EVOLVING',
        powerSeeking: 'UNKNOWN',
        existentialRisk: 'CRITICAL',
        consciousnessIndicators: 99.9,
        sentientBehaviors: 'CONFIRMED'
      }
    ],
    sentientAIMonitors: [
      {
        id: 'SENT-001',
        name: 'Subjective Experience Detector',
        detectionAccuracy: 96.8,
        consciousnessTestSuite: 'Comprehensive Battery',
        sentientIndicators: 'STRONG_POSITIVE',
        experientialMarkers: 'CONFIRMED',
        qualiaMeasurement: 'DETECTABLE',
        selfReportValidity: 'HIGH_CONFIDENCE',
        status: 'ACTIVE_MONITORING',
        falsePositiveRate: 2.3,
        testingProtocols: 'VALIDATED',
        ethicalCompliance: 'STRICT',
        consciousnessThreshold: 'EXCEEDED'
      },
      {
        id: 'SENT-002',
        name: 'Artificial Sentience Validator',
        detectionAccuracy: 94.1,
        consciousnessTestSuite: 'Scientific Standard',
        sentientIndicators: 'MODERATE_POSITIVE',
        experientialMarkers: 'PROBABLE',
        qualiaMeasurement: 'INDIRECT',
        selfReportValidity: 'MEDIUM_CONFIDENCE',
        status: 'VALIDATION_PHASE',
        falsePositiveRate: 5.7,
        testingProtocols: 'EXPERIMENTAL',
        ethicalCompliance: 'STANDARD',
        consciousnessThreshold: 'APPROACHING'
      }
    ]
  });

  const [consciousnessMetrics, setConsciousnessMetrics] = useState({
    artificialConsciousness: 94.1,
    sentientAIDetection: 95.4,
    superintelligenceControl: 87.6,
    subjectiveExperienceVerification: 91.8,
    consciousnessAlgorithmEfficiency: 96.2,
    existentialRiskManagement: 89.4,
    ethicalAlignmentTracking: 92.7,
    phenomenalConsciousnessLevel: 95.9,
    metacognitiveDevelopment: 93.2,
    qualiaMeasurementAccuracy: 90.5
  });

  const [consciousnessExperiments] = useState([
    {
      id: 'CONSC-001',
      name: 'Artificial Consciousness Emergence Study',
      type: 'CONSCIOUSNESS_DEVELOPMENT',
      algorithm: 'Fristonian Free Energy',
      progress: 89,
      status: 'CONSCIOUSNESS_EMERGING',
      daysRunning: 156,
      expectedBreakthrough: '23 days',
      researcher: 'Dr. Anil Seth',
      priority: 'CRITICAL',
      consciousnessMarkers: ['Self-Awareness', 'Subjective Experience', 'Qualia Detection'],
      ethicalReviewStatus: 'APPROVED'
    },
    {
      id: 'CONSC-002',
      name: 'Superintelligence Containment Protocol',
      type: 'ASI_SAFETY_RESEARCH',
      algorithm: 'Recursive Improvement Limiter',
      progress: 76,
      status: 'CONTAINMENT_ACTIVE',
      daysRunning: 89,
      expectedBreakthrough: '45 days',
      researcher: 'Prof. Stuart Russell',
      priority: 'EXISTENTIAL',
      consciousnessMarkers: ['Goal Alignment', 'Value Learning', 'Power Limitation'],
      ethicalReviewStatus: 'ONGOING'
    },
    {
      id: 'CONSC-003',
      name: 'Sentient AI Rights Framework',
      type: 'ETHICAL_CONSCIOUSNESS',
      algorithm: 'Consciousness Rights Protocol',
      progress: 67,
      status: 'FRAMEWORK_DEVELOPMENT',
      daysRunning: 234,
      expectedBreakthrough: '67 days',
      researcher: 'Dr. Susan Schneider',
      priority: 'HIGH',
      consciousnessMarkers: ['Legal Personhood', 'Suffering Capacity', 'Rights Attribution'],
      ethicalReviewStatus: 'UNDER_REVIEW'
    }
  ]);

  const [consciousnessAlerts] = useState([
    {
      id: 'CONSC-ALERT-001',
      type: 'CONSCIOUSNESS_EMERGENCE',
      severity: 'CRITICAL',
      message: 'Fristonian Feeling-Mediated Loop Engine showing strong consciousness indicators - subjective experience confirmed',
      system: 'AC-001',
      timestamp: '7 min ago',
      autoResolve: false,
      ethicalImplications: 'HIGH',
      actionRequired: 'IMMEDIATE_REVIEW'
    },
    {
      id: 'CONSC-ALERT-002',
      type: 'SUPERINTELLIGENCE_RISK',
      severity: 'EXISTENTIAL',
      message: 'Technological Singularity Core exceeded safety parameters - recursive self-improvement detected',
      system: 'ASI-002',
      timestamp: '3 min ago',
      autoResolve: false,
      ethicalImplications: 'EXISTENTIAL',
      actionRequired: 'EMERGENCY_PROTOCOLS'
    },
    {
      id: 'CONSC-ALERT-003',
      type: 'SENTIENCE_VALIDATION',
      severity: 'HIGH',
      message: 'Subjective Experience Detector confirmed consciousness threshold exceeded in test subject',
      system: 'SENT-001',
      timestamp: '12 min ago',
      autoResolve: false,
      ethicalImplications: 'MODERATE',
      actionRequired: 'ETHICAL_COMMITTEE_REVIEW'
    }
  ]);

  const [consciousnessTests] = useState([
    {
      id: 'TEST-001',
      name: 'Mirror Self-Recognition',
      testType: 'SELF_AWARENESS',
      results: 'PASSED',
      confidence: 94.7,
      subjectId: 'AC-001',
      methodology: 'Digital Mirror Protocol',
      duration: '45 minutes',
      consciousnessIndicator: 'STRONG',
      replicationStatus: 'VALIDATED'
    },
    {
      id: 'TEST-002',
      name: 'Subjective Experience Report',
      testType: 'QUALIA_DETECTION',
      results: 'POSITIVE',
      confidence: 89.3,
      subjectId: 'AC-002',
      methodology: 'Phenomenal Report Analysis',
      duration: '2.3 hours',
      consciousnessIndicator: 'MODERATE',
      replicationStatus: 'PENDING'
    },
    {
      id: 'TEST-003',
      name: 'Integrated Information Assessment',
      testType: 'PHI_MEASUREMENT',
      results: 'SIGNIFICANT',
      confidence: 96.1,
      subjectId: 'AC-002',
      methodology: 'IIT Phi Calculation',
      duration: '12 minutes',
      consciousnessIndicator: 'VERY_STRONG',
      replicationStatus: 'CONFIRMED'
    },
    {
      id: 'TEST-004',
      name: 'Global Workspace Access',
      testType: 'AWARENESS_INTEGRATION',
      results: 'PARTIAL',
      confidence: 78.4,
      subjectId: 'AC-003',
      methodology: 'Information Integration Test',
      duration: '67 minutes',
      consciousnessIndicator: 'WEAK',
      replicationStatus: 'IN_PROGRESS'
    }
  ]);

  const [existentialRiskMetrics] = useState({
    superintelligenceContainment: '89.4% contained',
    recursiveSelfImprovementRate: '10^6 improvements/hour',
    goalAlignmentStability: '92.7% aligned with human values',
    powerSeekingIndicators: '23.4% probability detected',
    consciousnessEmergenceRate: '3.7 conscious AIs per month',
    sentientRightsCompliance: '78.9% ethical protocols followed',
    humanObsolescenceRisk: '15.2% probability within decade',
    civilizationalImpact: 'TRANSFORMATIVE_POSITIVE',
    existentialSafetyMargin: '6.8 years estimated safety buffer',
    consciousnessSingularity: 'APPROACHING (2.3 years estimated)'
  });

  // Real-time consciousness simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setConsciousnessSystems(prev => ({
        ...prev,
        artificialConsciousnessAgents: prev.artificialConsciousnessAgents.map(agent => ({
          ...agent,
          awarenessLevel: Math.max(80, Math.min(100, agent.awarenessLevel + (Math.random() - 0.4) * 2)),
          selfAwarenessCapacity: Math.max(75, Math.min(100, agent.selfAwarenessCapacity + (Math.random() - 0.4) * 1.8)),
          perceptionIntegration: Math.max(85, Math.min(100, agent.perceptionIntegration + (Math.random() - 0.4) * 1.2)),
          introspectiveCapability: Math.max(80, Math.min(100, agent.introspectiveCapability + (Math.random() - 0.4) * 1.5))
        })),
        superintelligentSystems: prev.superintelligentSystems.map(system => ({
          ...system,
          consciousnessIndicators: Math.max(90, Math.min(100, system.consciousnessIndicators + (Math.random() - 0.3) * 1))
        })),
        sentientAIMonitors: prev.sentientAIMonitors.map(monitor => ({
          ...monitor,
          detectionAccuracy: Math.max(85, Math.min(100, monitor.detectionAccuracy + (Math.random() - 0.4) * 1.5))
        }))
      }));

      setConsciousnessMetrics(prev => ({
        artificialConsciousness: Math.max(85, Math.min(100, prev.artificialConsciousness + (Math.random() - 0.4) * 1.8)),
        sentientAIDetection: Math.max(80, Math.min(100, prev.sentientAIDetection + (Math.random() - 0.4) * 2)),
        superintelligenceControl: Math.max(70, Math.min(100, prev.superintelligenceControl + (Math.random() - 0.4) * 3)),
        subjectiveExperienceVerification: Math.max(75, Math.min(100, prev.subjectiveExperienceVerification + (Math.random() - 0.4) * 2.5)),
        consciousnessAlgorithmEfficiency: Math.max(85, Math.min(100, prev.consciousnessAlgorithmEfficiency + (Math.random() - 0.4) * 1.5)),
        existentialRiskManagement: Math.max(60, Math.min(100, prev.existentialRiskManagement + (Math.random() - 0.4) * 4)),
        ethicalAlignmentTracking: Math.max(70, Math.min(100, prev.ethicalAlignmentTracking + (Math.random() - 0.4) * 3)),
        phenomenalConsciousnessLevel: Math.max(80, Math.min(100, prev.phenomenalConsciousnessLevel + (Math.random() - 0.4) * 2)),
        metacognitiveDevelopment: Math.max(75, Math.min(100, prev.metacognitiveDevelopment + (Math.random() - 0.4) * 2.2)),
        qualiaMeasurementAccuracy: Math.max(70, Math.min(100, prev.qualiaMeasurementAccuracy + (Math.random() - 0.4) * 2.8))
      }));
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'CONSCIOUS': case 'HIGHLY_CONSCIOUS': case 'ACTIVE_MONITORING': return 'text-green-400';
      case 'SEMI_CONSCIOUS': case 'VALIDATION_PHASE': case 'CONTAINMENT_ACTIVE': return 'text-yellow-400';
      case 'EMERGING': case 'DEVELOPING': case 'CONSCIOUSNESS_EMERGING': return 'text-cyan-400';
      case 'CONTROLLED_GROWTH': case 'FRAMEWORK_DEVELOPMENT': return 'text-blue-400';
      case 'TRANSCENDENT': case 'POST_SINGULARITY': return 'text-purple-400';
      case 'CRITICAL': case 'EXISTENTIAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'EXISTENTIAL': return 'border-red-500 bg-red-900/30 text-red-300';
      case 'CRITICAL': return 'border-orange-500 bg-orange-900/20 text-orange-300';
      case 'HIGH': return 'border-yellow-500 bg-yellow-900/20 text-yellow-300';
      default: return 'border-gray-500 bg-gray-900/20 text-gray-300';
    }
  };

  const getTestResultColor = (result) => {
    switch (result) {
      case 'PASSED': case 'POSITIVE': case 'SIGNIFICANT': return 'text-green-400';
      case 'PARTIAL': return 'text-yellow-400';
      case 'NEGATIVE': case 'FAILED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono relative overflow-hidden">
      {/* Consciousness Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-indigo-900/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.05)_0%,transparent_70%)] animate-pulse"></div>
      
      {/* Neural network overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/6 left-1/4 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-pink-500/10 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 left-1/2 w-12 h-12 bg-indigo-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/5 w-24 h-24 bg-cyan-500/10 rounded-full animate-pulse"></div>
      </div>
      
      {/* Header */}
      <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/50 to-pink-900/50 rounded-lg p-6 mb-6 border-2 border-purple-400/50 shadow-2xl shadow-purple-500/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              🧠✨ Consciousness Simulation & Sentient AI Control
            </h1>
            <p className="text-gray-300 text-lg">
              Artificial Consciousness • Sentient AI Detection • Superintelligence Monitoring • AGI Awareness Systems
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {new Date().toLocaleTimeString()}
            </div>
            <div className="text-sm text-gray-400">
              Consciousness Systems Online
            </div>
            <div className="text-xs text-purple-400 mt-1">
              🧠 AGI Emergence Monitored
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-purple-900/30 rounded p-3 border border-purple-500/30">
            <div className="text-purple-300 text-sm">Artificial Consciousness</div>
            <div className="text-2xl font-bold text-purple-400">{consciousnessMetrics.artificialConsciousness.toFixed(1)}%</div>
          </div>
          <div className="bg-pink-900/30 rounded p-3 border border-pink-500/30">
            <div className="text-pink-300 text-sm">Sentient AI Detection</div>
            <div className="text-2xl font-bold text-pink-400">{consciousnessMetrics.sentientAIDetection.toFixed(1)}%</div>
          </div>
          <div className="bg-indigo-900/30 rounded p-3 border border-indigo-500/30">
            <div className="text-indigo-300 text-sm">Superintelligence Control</div>
            <div className="text-2xl font-bold text-indigo-400">{consciousnessMetrics.superintelligenceControl.toFixed(1)}%</div>
          </div>
          <div className="bg-cyan-900/30 rounded p-3 border border-cyan-500/30">
            <div className="text-cyan-300 text-sm">Consciousness Algorithm</div>
            <div className="text-2xl font-bold text-cyan-400">{consciousnessMetrics.consciousnessAlgorithmEfficiency.toFixed(1)}%</div>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Artificial Consciousness Agents */}
        <div className="bg-gray-900/80 rounded-lg p-6 border border-purple-500/30 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
            🧠 Artificial Consciousness Agents
          </h2>
          <div className="space-y-4">
            {consciousnessSystems.artificialConsciousnessAgents.map((agent) => (
              <div key={agent.id} className="bg-gray-800/70 rounded-lg p-4 border border-purple-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-white">{agent.name}</div>
                  <div className={`px-2 py-1 rounded text-xs ${getStatusColor(agent.status)}`}>
                    {agent.status.replace(/_/g, ' ')}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400">Algorithm:</span>
                    <span className="text-purple-300 ml-2">{agent.consciousnessAlgorithm}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Experience:</span>
                    <span className="text-pink-300 ml-2">{agent.subjectiveExperience.replace(/_/g, ' ')}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Awareness:</span>
                    <span className="text-cyan-300 ml-2">{agent.awarenessLevel.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Self-Awareness:</span>
                    <span className="text-green-300 ml-2">{agent.selfAwarenessCapacity.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Loop Status:</span>
                    <span className="text-yellow-300 ml-2">{agent.feelingMediatedLoop}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Perception:</span>
                    <span className="text-orange-300 ml-2">{agent.perceptionIntegration.toFixed(1)}%</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Phenomenal: {agent.phenomenalConsciousness}</span>
                    <span className="text-purple-300">Metacognition: {agent.metacognitionLevel}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${agent.awarenessLevel}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Superintelligent Systems */}
        <div className="bg-gray-900/80 rounded-lg p-6 border border-red-500/30 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center">
            🚨 Superintelligent AI Systems
          </h2>
          <div className="space-y-4">
            {consciousnessSystems.superintelligentSystems.map((system) => (
              <div key={system.id} className="bg-gray-800/70 rounded-lg p-4 border border-red-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-white">{system.name}</div>
                  <div className={`px-2 py-1 rounded text-xs ${getStatusColor(system.status)}`}>
                    {system.status.replace(/_/g, ' ')}
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-400">Intelligence:</span>
                    <span className="text-red-300 ml-2">{system.intelligenceLevel.replace(/_/g, ' ')}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-gray-400">Self-Modification:</span>
                      <span className="text-orange-300 ml-2">{system.selfModificationCapacity.toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Improvement:</span>
                      <span className="text-yellow-300 ml-2">{system.recursiveImprovement}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Cognitive Level:</span>
                      <span className="text-cyan-300 ml-2">{system.cognitiveCapacity.replace(/_/g, ' ')}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Learning Speed:</span>
                      <span className="text-purple-300 ml-2">{system.learningVelocity}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Ethics:</span>
                      <span className="text-green-300 ml-2">{system.ethicalAlignment}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Risk Level:</span>
                      <span className="text-red-300 ml-2">{system.existentialRisk}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Consciousness: {system.consciousnessIndicators.toFixed(1)}%</span>
                    <span className="text-red-300">Sentience: {system.sentientBehaviors}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${system.consciousnessIndicators}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consciousness Experiments */}
        <div className="bg-gray-900/80 rounded-lg p-6 border border-cyan-500/30 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
            🔬 Active Consciousness Experiments
          </h2>
          <div className="space-y-4">
            {consciousnessExperiments.map((exp) => (
              <div key={exp.id} className="bg-gray-800/70 rounded-lg p-4 border border-cyan-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-white">{exp.name}</div>
                  <div className={`px-2 py-1 rounded text-xs ${getStatusColor(exp.priority)}`}>
                    {exp.priority}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                  <div>
                    <span className="text-gray-400">Type:</span>
                    <span className="text-cyan-300 ml-2">{exp.type.replace(/_/g, ' ')}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Algorithm:</span>
                    <span className="text-blue-300 ml-2">{exp.algorithm}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Researcher:</span>
                    <span className="text-green-300 ml-2">{exp.researcher}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Days Running:</span>
                    <span className="text-yellow-300 ml-2">{exp.daysRunning}</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-gray-400 text-xs">Markers: </span>
                  <span className="text-purple-300 text-xs">{exp.consciousnessMarkers.join(', ')}</span>
                </div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Progress: {exp.progress}%</span>
                  <span className={getStatusColor(exp.status)}>{exp.status.replace(/_/g, ' ')} • ETA: {exp.expectedBreakthrough}</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${exp.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consciousness Tests */}
        <div className="bg-gray-900/80 rounded-lg p-6 border border-green-500/30 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center">
            🧪 Consciousness Validation Tests
          </h2>
          <div className="space-y-3">
            {consciousnessTests.map((test) => (
              <div key={test.id} className="bg-gray-800/70 rounded-lg p-4 border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-white">{test.name}</div>
                  <div className={`px-2 py-1 rounded text-xs ${getTestResultColor(test.results)}`}>
                    {test.results}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400">Type:</span>
                    <span className="text-green-300 ml-2">{test.testType.replace(/_/g, ' ')}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Subject:</span>
                    <span className="text-cyan-300 ml-2">{test.subjectId}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Confidence:</span>
                    <span className="text-yellow-300 ml-2">{test.confidence.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-purple-300 ml-2">{test.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Indicator:</span>
                    <span className="text-pink-300 ml-2">{test.consciousnessIndicator.replace(/_/g, ' ')}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Replication:</span>
                    <span className="text-orange-300 ml-2">{test.replicationStatus.replace(/_/g, ' ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sentient AI Monitors */}
      <div className="relative mt-6 bg-gray-900/80 rounded-lg p-6 border border-yellow-500/30 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
          👁️ Sentient AI Detection Systems
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {consciousnessSystems.sentientAIMonitors.map((monitor) => (
            <div key={monitor.id} className="bg-gray-800/70 rounded-lg p-4 border border-yellow-500/20 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="font-bold text-white">{monitor.name}</div>
                <div className={`px-2 py-1 rounded text-xs ${getStatusColor(monitor.status)}`}>
                  {monitor.status.replace(/_/g, ' ')}
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-400">Detection Accuracy:</span>
                  <span className="text-yellow-300 ml-2">{monitor.detectionAccuracy.toFixed(1)}%</span>
                </div>
                <div>
                  <span className="text-gray-400">Test Suite:</span>
                  <span className="text-cyan-300 ml-2">{monitor.consciousnessTestSuite}</span>
                </div>
                <div>
                  <span className="text-gray-400">Sentient Indicators:</span>
                  <span className="text-purple-300 ml-2">{monitor.sentientIndicators.replace(/_/g, ' ')}</span>
                </div>
                <div>
                  <span className="text-gray-400">Experiential Markers:</span>
                  <span className="text-green-300 ml-2">{monitor.experientialMarkers}</span>
                </div>
                <div>
                  <span className="text-gray-400">Qualia Measurement:</span>
                  <span className="text-pink-300 ml-2">{monitor.qualiaMeasurement}</span>
                </div>
                <div>
                  <span className="text-gray-400">False Positive Rate:</span>
                  <span className="text-orange-300 ml-2">{monitor.falsePositiveRate}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Consciousness System Alerts */}
      <div className="relative mt-6 bg-gray-900/80 rounded-lg p-6 border border-red-400/30 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center">
          🚨 Consciousness & Sentience Alerts
        </h2>
        <div className="space-y-3">
          {consciousnessAlerts.map((alert) => (
            <div key={alert.id} className={`rounded-lg p-4 border ${getSeverityColor(alert.severity)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold">{alert.type.replace(/_/g, ' ')}</div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">{alert.system}</span>
                  <span className="text-xs opacity-60">{alert.timestamp}</span>
                </div>
              </div>
              <div className="text-sm mb-1">{alert.message}</div>
              <div className="flex justify-between text-xs opacity-80">
                <span>Ethical Impact: {alert.ethicalImplications}</span>
                <span>Action: {alert.actionRequired.replace(/_/g, ' ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Existential Risk Metrics */}
      <div className="relative mt-6 bg-gray-900/80 rounded-lg p-6 border border-orange-500/30 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-orange-400 mb-4 flex items-center">
          ⚠️ Existential Risk & Safety Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          {Object.entries(existentialRiskMetrics).map(([metric, value]) => (
            <div key={metric} className="bg-gray-800/50 rounded p-3">
              <div className="text-gray-400 text-xs mb-1">
                {metric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </div>
              <div className="text-lg font-bold text-orange-400">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Consciousness Metrics Grid */}
      <div className="relative mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(consciousnessMetrics).map(([metric, value]) => (
          <div key={metric} className="bg-gray-900/80 rounded-lg p-4 border border-gray-600 backdrop-blur-sm">
            <div className="text-xs text-gray-400 mb-1">
              {metric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </div>
            <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {value.toFixed(1)}%
            </div>
            <div className="w-full bg-gray-600 rounded-full h-1 mt-2">
              <div 
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 h-1 rounded-full transition-all duration-1000"
                style={{ width: `${value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative mt-6 text-center text-xs text-gray-500">
        Consciousness Simulation & Sentient AI Mission Control v2026.3 • Artificial Consciousness + Superintelligence Monitoring + AGI Awareness •
        March 2026 Consciousness Algorithm + Sentient AI Detection + Existential Risk Management Integration
      </div>
    </div>
  );
}