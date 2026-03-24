// Real-Time AI Agent Observability Center (2026 Advanced)
// Inspired by AgentOps, Langfuse, Google AI Trends 2026, and Gartner predictions
import { useState, useEffect } from 'react';

export default function RealTimeAIAgentObservabilityCenter() {
  const [observabilityData, setObservabilityData] = useState({
    // Google's 2026 AI Agent Transformation Metrics
    agentTransformation: {
      totalDeployedAgents: 847,
      taskSpecificAgents: 340, // 40% of enterprise apps (Gartner 2026)
      digitalCoworkerAgents: 156,
      autonomousDecisionAgents: 89,
      transformationProgress: 68.4, // % toward 2026 digital coworker goal
      enterpriseAdoption: 94.7,
      stakeholderTrustScore: 96.8,
      continuousMonitoringCoverage: 99.2
    },

    // AgentOps-inspired Evaluation Dashboard
    agentEvaluationMetrics: [
      {
        agentId: 'content-creation-agent',
        agentName: 'Content Creation Agent',
        goalsAchieved: 94.7, // % of achieved goals
        identityVerification: 98.9, // verified identity accuracy
        correctRepetition: 91.3, // correct repetition rate
        agentClarity: 96.1, // agent clarity score
        incorrectInformation: 2.3, // % incorrect information
        overallPerformance: 95.8,
        conversationsSim: 12456, // thousands simulated
        deploymentReadiness: 97.2,
        trustLevel: 'HIGH'
      },
      {
        agentId: 'research-analysis-agent',
        agentName: 'Research & Analysis Agent',
        goalsAchieved: 97.2,
        identityVerification: 99.4,
        correctRepetition: 89.7,
        agentClarity: 98.6,
        incorrectInformation: 1.8,
        overallPerformance: 97.8,
        conversationsSim: 8934,
        deploymentReadiness: 98.9,
        trustLevel: 'HIGH'
      },
      {
        agentId: 'customer-support-agent',
        agentName: 'Customer Support Agent',
        goalsAchieved: 89.4,
        identityVerification: 97.8,
        correctRepetition: 94.5,
        agentClarity: 92.1,
        incorrectInformation: 4.2,
        overallPerformance: 91.7,
        conversationsSim: 23456,
        deploymentReadiness: 89.3,
        trustLevel: 'MEDIUM'
      },
      {
        agentId: 'automation-orchestrator',
        agentName: 'Marketing Automation Orchestrator',
        goalsAchieved: 96.8,
        identityVerification: 98.2,
        correctRepetition: 93.9,
        agentClarity: 97.4,
        incorrectInformation: 1.9,
        overallPerformance: 96.2,
        conversationsSim: 15678,
        deploymentReadiness: 96.7,
        trustLevel: 'HIGH'
      }
    ],

    // Continuous Monitoring → Real-time Analysis Pipeline
    realTimeAnalysisPipeline: {
      continuousMonitoringActive: true,
      realTimeEventsPerSecond: 2456,
      autoInsightsGenerated: 89,
      executiveDecisionTime: '12.4 minutes', // vs hours traditionally
      dataStreamsActive: 16,
      anomalyDetectionAccuracy: 98.7,
      insightGenerationLatency: '0.3 seconds',
      decisionSupportScore: 94.9,
      actionableInsights: 234,
      automatedResponseRate: 87.6
    },

    // Langfuse-inspired Agent Conversation Analytics
    conversationAnalytics: {
      totalConversations: 456789,
      successfulInteractions: 94.8,
      averageConversationLength: '3.2 minutes',
      humanHandoffRate: 5.2,
      userSatisfactionScore: 92.6,
      conversationGoalCompletion: 89.3,
      multiTurnComplexity: 76.8,
      contextRetentionAccuracy: 97.1,
      personalizedResponseQuality: 91.7,
      emotionalIntelligenceScore: 88.4
    },

    // Agent Performance Tracking (PwC Continuous Monitoring)
    performanceTracking: {
      adoptionRate: 94.7, // % of target adoption achieved
      performanceScore: 96.2,
      errorDetectionSpeed: '1.3 seconds',
      errorResolutionTime: '4.2 minutes',
      stakeholderTrustIndex: 94.8,
      documentationCompleteness: 99.1,
      complianceScore: 97.6,
      auditTrailCoverage: 100.0,
      performanceImprovement: '+23.4%',
      reliabilityScore: 98.9
    },

    // Task-Specific AI Agent Monitoring (40% Enterprise Embedding)
    taskSpecificMonitoring: [
      {
        taskCategory: 'Data Analysis & Insights',
        agentsDeployed: 89,
        enterpriseAppsIntegrated: 234,
        embeddingProgress: 42.3, // % toward 40% goal
        performanceScore: 94.7,
        timeReductionVsAnalysts: 78.4,
        accuracyImprovement: '+12.6%',
        userAdoptionRate: 89.2
      },
      {
        taskCategory: 'Customer Service Automation',
        agentsDeployed: 156,
        enterpriseAppsIntegrated: 345,
        embeddingProgress: 38.9,
        performanceScore: 91.8,
        timeReductionVsAnalysts: 84.3,
        accuracyImprovement: '+19.7%',
        userAdoptionRate: 92.4
      },
      {
        taskCategory: 'Content Creation & Marketing',
        agentsDeployed: 67,
        enterpriseAppsIntegrated: 178,
        embeddingProgress: 45.7,
        performanceScore: 96.9,
        timeReductionVsAnalysts: 91.6,
        accuracyImprovement: '+34.8%',
        userAdoptionRate: 87.3
      },
      {
        taskCategory: 'Process Automation & Optimization',
        agentsDeployed: 123,
        enterpriseAppsIntegrated: 267,
        embeddingProgress: 41.2,
        performanceScore: 93.5,
        timeReductionVsAnalysts: 76.9,
        accuracyImprovement: '+28.1%',
        userAdoptionRate: 91.8
      }
    ],

    // Real-time Agent Health & Vitals Monitoring
    agentHealthMonitoring: [
      {
        agentId: 'AGT-001',
        agentName: 'Content Processor Alpha',
        healthScore: 98.7,
        cpuUsage: 34.7,
        memoryUsage: 67.3,
        responseTime: '0.7s',
        uptime: '99.97%',
        requestsPerMinute: 2456,
        errorRate: 0.3,
        status: 'OPTIMAL',
        lastHeartbeat: '2s ago',
        performanceTrend: '+3.4%'
      },
      {
        agentId: 'AGT-002',
        agentName: 'Research Engine Beta',
        healthScore: 96.4,
        cpuUsage: 45.2,
        memoryUsage: 78.9,
        responseTime: '1.2s',
        uptime: '99.94%',
        requestsPerMinute: 1789,
        errorRate: 0.6,
        status: 'GOOD',
        lastHeartbeat: '1s ago',
        performanceTrend: '+1.8%'
      },
      {
        agentId: 'AGT-003',
        agentName: 'Automation Hub Gamma',
        healthScore: 97.9,
        cpuUsage: 28.6,
        memoryUsage: 52.4,
        responseTime: '0.4s',
        uptime: '99.99%',
        requestsPerMinute: 3421,
        errorRate: 0.1,
        status: 'OPTIMAL',
        lastHeartbeat: '1s ago',
        performanceTrend: '+5.7%'
      },
      {
        agentId: 'AGT-004',
        agentName: 'Customer Support Delta',
        healthScore: 94.2,
        cpuUsage: 56.8,
        memoryUsage: 84.1,
        responseTime: '1.8s',
        uptime: '99.89%',
        requestsPerMinute: 987,
        errorRate: 1.2,
        status: 'WARNING',
        lastHeartbeat: '3s ago',
        performanceTrend: '-2.1%'
      }
    ],

    // Auto-Generated Executive Insights (Google 2026 Prediction)
    executiveInsights: [
      {
        id: 'INS-001',
        type: 'PERFORMANCE_BREAKTHROUGH',
        title: 'AI Agent Efficiency Breakthrough Detected',
        insight: 'Content Creation agents showing 34.8% performance improvement over 7 days. Suggest scaling this pattern to other task categories.',
        confidence: 97.3,
        impact: 'HIGH',
        recommendedAction: 'Immediate scaling to Customer Service and Data Analysis categories',
        timeToDecision: '8.2 minutes',
        potentialValue: '$456,789',
        implementationComplexity: 'MEDIUM'
      },
      {
        id: 'INS-002',
        type: 'ADOPTION_MILESTONE',
        title: '40% Enterprise Integration Milestone Approaching',
        insight: 'Current 41.8% average embedding progress exceeds Gartner 2026 prediction. Organization positioned for competitive advantage.',
        confidence: 94.8,
        impact: 'STRATEGIC',
        recommendedAction: 'Accelerate deployment in underperforming categories',
        timeToDecision: '15.7 minutes',
        potentialValue: '$2,340,000',
        implementationComplexity: 'HIGH'
      },
      {
        id: 'INS-003',
        type: 'TRUST_OPTIMIZATION',
        title: 'Stakeholder Trust Score Exceeds Industry Benchmark',
        insight: '96.8% trust score vs 78% industry average. Opportunity to leverage trust advantage for expanded deployment.',
        confidence: 91.7,
        impact: 'MEDIUM',
        recommendedAction: 'Document and share trust-building methodologies',
        timeToDecision: '4.3 minutes',
        potentialValue: '$189,345',
        implementationComplexity: 'LOW'
      }
    ],

    // Advanced Error Detection & Recovery
    errorDetectionRecovery: {
      totalErrorsDetected: 1247,
      errorsResolvedAutomatically: 1089,
      averageDetectionTime: '1.3 seconds',
      averageRecoveryTime: '4.2 minutes',
      falsePositiveRate: 2.1,
      criticalErrorsPrevented: 23,
      systemReliabilityScore: 98.9,
      predictiveErrorPrevention: 87.6,
      selfHealingCapability: 'ACTIVE',
      emergencyEscalationProtocols: 'ENABLED'
    },

    // Enterprise Application Integration Status
    enterpriseIntegration: {
      totalEnterpriseApps: 1024,
      appsWithAIAgents: 435, // 42.5% embedded (approaching 40% target)
      integrationSuccessRate: 94.7,
      averageIntegrationTime: '3.2 days',
      apiConnections: 2456,
      dataFlowIntegrity: 99.1,
      complianceAdherence: 97.8,
      securityValidation: 98.6,
      performanceImpact: '+23.4% efficiency gain',
      userTrainingSatisfaction: 91.8
    },

    // Real-time System Metrics
    systemMetrics: {
      overallSystemHealth: 97.8,
      dataProcessingLatency: '0.3 seconds',
      observabilityAccuracy: 99.2,
      monitoringCoverage: 100.0,
      alertResponseTime: '1.1 seconds',
      dashboardUpdateFrequency: '2 seconds',
      storageUtilization: 67.4,
      networkThroughput: '12.3 Gbps',
      concurrentUsers: 2456,
      systemUptime: 99.97
    }
  });

  const [realTimeEvents, setRealTimeEvents] = useState([
    {
      id: 'EVT-001',
      timestamp: new Date(Date.now() - 15000),
      type: 'PERFORMANCE_MILESTONE',
      agentId: 'AGT-001',
      message: 'Content Processor Alpha achieved 99% goal completion rate',
      severity: 'INFO',
      impact: 'POSITIVE'
    },
    {
      id: 'EVT-002',
      timestamp: new Date(Date.now() - 45000),
      type: 'INSIGHT_GENERATED',
      agentId: 'SYSTEM',
      message: 'Auto-generated insight: Scale successful automation patterns',
      severity: 'INFO',
      impact: 'STRATEGIC'
    },
    {
      id: 'EVT-003',
      timestamp: new Date(Date.now() - 78000),
      type: 'ERROR_RESOLVED',
      agentId: 'AGT-004',
      message: 'Customer Support Delta recovered from memory spike',
      severity: 'WARNING',
      impact: 'RECOVERED'
    },
    {
      id: 'EVT-004',
      timestamp: new Date(Date.now() - 123000),
      type: 'ADOPTION_UPDATE',
      agentId: 'SYSTEM',
      message: 'Enterprise embedding progress: 42.3% (Gartner 40% target)',
      severity: 'INFO',
      impact: 'MILESTONE'
    }
  ]);

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setObservabilityData(prev => ({
        ...prev,
        realTimeAnalysisPipeline: {
          ...prev.realTimeAnalysisPipeline,
          realTimeEventsPerSecond: Math.max(1000, Math.min(4000, prev.realTimeAnalysisPipeline.realTimeEventsPerSecond + (Math.random() - 0.5) * 100)),
          autoInsightsGenerated: prev.realTimeAnalysisPipeline.autoInsightsGenerated + Math.floor(Math.random() * 3),
          actionableInsights: prev.realTimeAnalysisPipeline.actionableInsights + Math.floor(Math.random() * 2)
        },
        agentTransformation: {
          ...prev.agentTransformation,
          transformationProgress: Math.min(100, prev.agentTransformation.transformationProgress + Math.random() * 0.1),
          stakeholderTrustScore: Math.max(90, Math.min(100, prev.agentTransformation.stakeholderTrustScore + (Math.random() - 0.5) * 0.2))
        }
      }));

      // Add real-time events
      if (Math.random() < 0.3) {
        const eventTypes = ['PERFORMANCE_UPDATE', 'INSIGHT_GENERATED', 'GOAL_ACHIEVED', 'OPTIMIZATION_COMPLETE'];
        const newEvent = {
          id: `EVT-${Date.now()}`,
          timestamp: new Date(),
          type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
          agentId: `AGT-${Math.floor(Math.random() * 4) + 1}`,
          message: `${eventTypes[Math.floor(Math.random() * eventTypes.length)].toLowerCase().replace('_', ' ')} completed`,
          severity: 'INFO',
          impact: 'POSITIVE'
        };
        
        setRealTimeEvents(prev => [newEvent, ...prev.slice(0, 9)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getHealthColor = (score) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPTIMAL': return 'text-green-400';
      case 'GOOD': return 'text-blue-400';
      case 'WARNING': return 'text-yellow-400';
      case 'CRITICAL': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTrustColor = (level) => {
    switch (level) {
      case 'HIGH': return 'text-green-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 min-h-screen text-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          👁️🤖 Real-Time AI Agent Observability Center
        </h1>
        <p className="text-gray-300 text-lg">
          2026 Advanced Agent Monitoring • Google AI Trends • AgentOps & Langfuse Analytics
        </p>
      </div>

      {/* Key Transformation Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-black/40 border border-purple-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-400 mb-2">🚀 Agent Transformation</h3>
          <div className="text-2xl font-bold text-white">{observabilityData.agentTransformation.transformationProgress.toFixed(1)}%</div>
          <div className="text-sm text-gray-300">→ Digital Coworkers 2026</div>
        </div>
        <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-cyan-400 mb-2">📊 Enterprise Embedding</h3>
          <div className="text-2xl font-bold text-white">
            {((observabilityData.enterpriseIntegration.appsWithAIAgents / observabilityData.enterpriseIntegration.totalEnterpriseApps) * 100).toFixed(1)}%
          </div>
          <div className="text-sm text-gray-300">{observabilityData.enterpriseIntegration.appsWithAIAgents}/{observabilityData.enterpriseIntegration.totalEnterpriseApps} apps</div>
        </div>
        <div className="bg-black/40 border border-green-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-400 mb-2">🎯 Stakeholder Trust</h3>
          <div className="text-2xl font-bold text-white">{observabilityData.agentTransformation.stakeholderTrustScore.toFixed(1)}%</div>
          <div className="text-sm text-gray-300">vs 78% industry avg</div>
        </div>
        <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">⚡ Real-time Events</h3>
          <div className="text-2xl font-bold text-white">{observabilityData.realTimeAnalysisPipeline.realTimeEventsPerSecond.toFixed(0)}/sec</div>
          <div className="text-sm text-gray-300">{observabilityData.realTimeAnalysisPipeline.autoInsightsGenerated} insights generated</div>
        </div>
      </div>

      {/* Agent Evaluation Dashboard (AgentOps/Langfuse inspired) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">📊 Agent Evaluation Dashboard (AgentOps Style)</h3>
          <div className="space-y-4">
            {observabilityData.agentEvaluationMetrics.map((agent, index) => (
              <div key={agent.agentId} className="border border-gray-600/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-white">{agent.agentName}</h4>
                  <div className={`px-2 py-1 rounded text-xs font-bold ${getTrustColor(agent.trustLevel)}`}>
                    {agent.trustLevel} TRUST
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="text-gray-300">Goals Achieved</div>
                    <div className={`font-semibold ${getHealthColor(agent.goalsAchieved)}`}>
                      {agent.goalsAchieved}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-300">Identity Verified</div>
                    <div className={`font-semibold ${getHealthColor(agent.identityVerification)}`}>
                      {agent.identityVerification}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-300">Agent Clarity</div>
                    <div className={`font-semibold ${getHealthColor(agent.agentClarity)}`}>
                      {agent.agentClarity}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-300">Correct Repetition</div>
                    <div className={`font-semibold ${getHealthColor(agent.correctRepetition)}`}>
                      {agent.correctRepetition}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-300">Incorrect Info</div>
                    <div className={`font-semibold ${agent.incorrectInformation < 3 ? 'text-green-400' : 'text-red-400'}`}>
                      {agent.incorrectInformation}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-300">Deployment Ready</div>
                    <div className={`font-semibold ${getHealthColor(agent.deploymentReadiness)}`}>
                      {agent.deploymentReadiness}%
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Conversations Simulated</span>
                    <span className="text-cyan-400">{agent.conversationsSim.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Overall Performance</span>
                    <span className={getHealthColor(agent.overallPerformance)}>{agent.overallPerformance}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Agent Health Monitoring */}
        <div className="bg-black/40 border border-green-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-400 mb-4">💓 Real-time Agent Health Vitals</h3>
          <div className="space-y-4">
            {observabilityData.agentHealthMonitoring.map((agent, index) => (
              <div key={agent.agentId} className="border border-gray-600/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-white">{agent.agentName}</h4>
                  <div className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(agent.status)}`}>
                    {agent.status}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-gray-300">Health Score</div>
                    <div className={`font-semibold ${getHealthColor(agent.healthScore)}`}>
                      {agent.healthScore}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-300">Response Time</div>
                    <div className="text-white font-semibold">{agent.responseTime}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">CPU Usage</div>
                    <div className={`font-semibold ${agent.cpuUsage > 80 ? 'text-red-400' : 'text-green-400'}`}>
                      {agent.cpuUsage}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-300">Memory Usage</div>
                    <div className={`font-semibold ${agent.memoryUsage > 85 ? 'text-red-400' : 'text-green-400'}`}>
                      {agent.memoryUsage}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-300">Requests/min</div>
                    <div className="text-cyan-400 font-semibold">{agent.requestsPerMinute.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Error Rate</div>
                    <div className={`font-semibold ${agent.errorRate < 1 ? 'text-green-400' : 'text-red-400'}`}>
                      {agent.errorRate}%
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex justify-between text-sm">
                  <span className="text-gray-400">Last Heartbeat: {agent.lastHeartbeat}</span>
                  <span className={`${agent.performanceTrend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {agent.performanceTrend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Google 2026 Auto-Generated Executive Insights */}
      <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-cyan-400 mb-4">🧠 Auto-Generated Executive Insights (Google 2026 AI)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {observabilityData.executiveInsights.map((insight, index) => (
            <div key={insight.id} className="border border-gray-600/30 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-semibold text-white">{insight.title}</h4>
                <div className={`px-2 py-1 rounded text-xs font-bold ${
                  insight.impact === 'HIGH' ? 'text-red-400' : 
                  insight.impact === 'STRATEGIC' ? 'text-purple-400' : 'text-green-400'
                }`}>
                  {insight.impact}
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">{insight.insight}</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-gray-400">Confidence</div>
                  <div className={getHealthColor(insight.confidence)}>{insight.confidence}%</div>
                </div>
                <div>
                  <div className="text-gray-400">Decision Time</div>
                  <div className="text-white">{insight.timeToDecision}</div>
                </div>
                <div>
                  <div className="text-gray-400">Potential Value</div>
                  <div className="text-green-400">{insight.potentialValue}</div>
                </div>
                <div>
                  <div className="text-gray-400">Complexity</div>
                  <div className="text-white">{insight.implementationComplexity}</div>
                </div>
              </div>
              <div className="mt-3 text-xs">
                <div className="text-gray-400">Recommended Action</div>
                <div className="text-blue-400">{insight.recommendedAction}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task-Specific AI Agent Monitoring (Gartner 40% Prediction) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">🎯 Task-Specific Agent Embedding (Gartner 40%)</h3>
          <div className="space-y-4">
            {observabilityData.taskSpecificMonitoring.map((category, index) => (
              <div key={index} className="border border-gray-600/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold text-white">{category.taskCategory}</h4>
                  <div className={`text-sm ${
                    category.embeddingProgress >= 40 ? 'text-green-400' : 'text-yellow-400'
                  }`}>
                    {category.embeddingProgress}% embedded
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="text-gray-300">Agents Deployed</div>
                    <div className="text-white font-semibold">{category.agentsDeployed}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Apps Integrated</div>
                    <div className="text-white font-semibold">{category.enterpriseAppsIntegrated}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Performance</div>
                    <div className={getHealthColor(category.performanceScore)}>{category.performanceScore}%</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Time Reduction</div>
                    <div className="text-green-400 font-semibold">{category.timeReductionVsAnalysts}%</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Accuracy Gain</div>
                    <div className="text-green-400 font-semibold">{category.accuracyImprovement}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">User Adoption</div>
                    <div className={getHealthColor(category.userAdoptionRate)}>{category.userAdoptionRate}%</div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        category.embeddingProgress >= 40 ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: `${category.embeddingProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Events Feed */}
        <div className="bg-black/40 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">📡 Real-time Events Feed</h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {realTimeEvents.map((event, index) => (
              <div key={event.id} className="border border-gray-600/30 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    event.severity === 'INFO' ? 'bg-blue-500/20 text-blue-400' :
                    event.severity === 'WARNING' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {event.type.replace('_', ' ')}
                  </span>
                  <span className="text-xs text-gray-400">
                    {event.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-white text-sm">{event.message}</p>
                <div className="flex justify-between items-center mt-2 text-xs">
                  <span className="text-gray-400">Agent: {event.agentId}</span>
                  <span className={`${
                    event.impact === 'POSITIVE' || event.impact === 'STRATEGIC' ? 'text-green-400' :
                    event.impact === 'RECOVERED' ? 'text-blue-400' : 'text-gray-400'
                  }`}>
                    {event.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-black/40 border border-indigo-500/30 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">📊 Observability System Performance</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{observabilityData.systemMetrics.observabilityAccuracy}%</div>
            <div className="text-sm text-gray-300">Observability Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{observabilityData.systemMetrics.monitoringCoverage}%</div>
            <div className="text-sm text-gray-300">Monitoring Coverage</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{observabilityData.systemMetrics.dataProcessingLatency}</div>
            <div className="text-sm text-gray-300">Processing Latency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{observabilityData.systemMetrics.alertResponseTime}</div>
            <div className="text-sm text-gray-300">Alert Response</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">{observabilityData.systemMetrics.systemUptime}%</div>
            <div className="text-sm text-gray-300">System Uptime</div>
          </div>
        </div>
      </div>

      {/* Footer with Live Status */}
      <div className="text-center text-gray-400 text-sm">
        <div className="flex justify-center items-center space-x-4">
          <span className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Continuous Monitoring: ACTIVE
          </span>
          <span className="flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            Real-time Analysis: {observabilityData.realTimeAnalysisPipeline.insightGenerationLatency}
          </span>
          <span className="flex items-center">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
            Gartner 2026: {((observabilityData.enterpriseIntegration.appsWithAIAgents / observabilityData.enterpriseIntegration.totalEnterpriseApps) * 100).toFixed(1)}% embedded
          </span>
        </div>
        <div className="mt-2">
          🚀 Real-Time AI Agent Observability Center - Google 2026 AI Trends • Last Updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}