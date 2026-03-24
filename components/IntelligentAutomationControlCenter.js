// Intelligent Automation Control Center (2026 Enterprise Trends)
// Inspired by 2026 role-based dashboards, orchestration patterns, and machine-readable intelligence
import { useState, useEffect } from 'react';

export default function IntelligentAutomationControlCenter() {
  const [automationData, setAutomationData] = useState({
    // Role-Based Dashboard Intelligence (2026 Trend)
    roleBased: {
      currentRole: 'Automation Administrator',
      permissionLevel: 'FULL_CONTROL',
      personalizedWidgets: 12,
      automatedRoutineTasks: 45,
      smartAlertsActive: 23,
      dashboardEfficiency: 94.7,
      personalizedInsights: 67,
      roleSpecificMetrics: 156,
      adaptiveInterface: 'ENABLED',
      contextualRecommendations: 34
    },

    // Machine-Readable Intelligence Hub (Model Context Protocol - MCP)
    intelligenceHub: {
      mcpIntegration: 'ACTIVE',
      aiAgentsConnected: 23,
      realTimeGeneration: 'ENABLED',
      ticketsGenerated: 456,
      codeAutoGeneration: 234,
      documentationUpdates: 89,
      designSystemUnderstanding: 97.8,
      agentIntelligenceScore: 94.6,
      contextualAwareness: 96.2,
      adaptiveLearning: 91.4
    },

    // Enterprise Automation Orchestration Patterns (2026)
    orchestrationPatterns: {
      totalAutomationWorkflows: 156,
      orchestratedProcesses: 234,
      exceptionHandlingPatterns: 45,
      escalationDesign: 'ADVANCED',
      identityPermissioning: 'RBAC_ENABLED',
      auditEvidence: 'COMPREHENSIVE',
      performanceManagement: 'MEASURABLE',
      workflowResilience: 97.8,
      centralizedExecutionLogic: 'ACTIVE',
      operationalControl: 94.6
    },

    // Governance & Control Layer (Centralized Visibility)
    governanceControl: {
      centralizedVisibility: 'FULL_SPECTRUM',
      policyBasedExecution: 'ENABLED',
      endToEndAuditability: 99.7,
      automationSprawlReduction: 78.9,
      executionControlCentralization: 96.4,
      resilienceManagement: 'PROACTIVE',
      workflowDesignIntegration: 'SEAMLESS',
      operationalScaling: 187.3,
      valueShiftFromUI: 89.4,
      predictableScaling: 'OPTIMIZED'
    },

    // Intelligent Automation (IA) - RPA + AI + ML Integration
    intelligentAutomation: {
      rpaBotsActive: 67,
      aiMLModelsDeployed: 23,
      processMiningSystems: 8,
      businessProcessManagement: 'INTEGRATED',
      endToEndAutomation: 156,
      complexWorkAutomation: 89,
      autonomousEnterpriseAI: 'ADVANCING',
      highVolumeProcessing: 94.7,
      intelligentDecisionMaking: 91.8,
      cognitiveTaskHandling: 87.3
    },

    // Real-Time Automation Status
    automationStatus: [
      {
        workflowId: 'AUTO-001',
        workflowName: 'Content Processing Automation',
        status: 'RUNNING',
        completionRate: 94.7,
        processingSpeed: '2.3K items/hour',
        errorRate: 0.8,
        efficiency: 96.8,
        nextScheduled: '08:00',
        lastExecution: '07:00',
        automationLevel: 'FULL',
        governance: 'COMPLIANT'
      },
      {
        workflowId: 'AUTO-002',
        workflowName: 'AI Agent Task Orchestration',
        status: 'OPTIMIZING',
        completionRate: 89.3,
        processingSpeed: '847 tasks/hour',
        errorRate: 1.2,
        efficiency: 92.4,
        nextScheduled: '08:30',
        lastExecution: '06:30',
        automationLevel: 'INTELLIGENT',
        governance: 'MONITORED'
      },
      {
        workflowId: 'AUTO-003',
        workflowName: 'Exception Handling & Escalation',
        status: 'ACTIVE',
        completionRate: 97.8,
        processingSpeed: '156 exceptions/hour',
        errorRate: 0.3,
        efficiency: 98.9,
        nextScheduled: 'Continuous',
        lastExecution: 'Live',
        automationLevel: 'AUTONOMOUS',
        governance: 'ENFORCED'
      },
      {
        workflowId: 'AUTO-004',
        workflowName: 'Performance Analytics Generation',
        status: 'SCHEDULED',
        completionRate: 100.0,
        processingSpeed: '45 reports/hour',
        errorRate: 0.0,
        efficiency: 99.1,
        nextScheduled: '09:00',
        lastExecution: '06:00',
        automationLevel: 'INTELLIGENT',
        governance: 'VALIDATED'
      }
    ],

    // Smart Alerts & Exception Management (2026 Intelligence)
    smartAlerts: [
      {
        alertId: 'SMART-001',
        type: 'PERFORMANCE_OPTIMIZATION',
        title: 'Automation Efficiency Improvement Detected',
        description: 'Content Processing workflow showing 12% efficiency gain opportunity',
        intelligence: 'AI_RECOMMENDED',
        priority: 'MEDIUM',
        impact: 'PRODUCTIVITY',
        automatedAction: 'WORKFLOW_TUNING',
        estimatedValue: '$2,400/month',
        confidence: 94.7,
        implementationEffort: 'LOW'
      },
      {
        alertId: 'SMART-002',
        type: 'EXCEPTION_PATTERN',
        title: 'Recurring Exception Pattern Identified',
        description: 'Task orchestration showing predictable failure at step 7 - auto-fix available',
        intelligence: 'PATTERN_RECOGNITION',
        priority: 'HIGH',
        impact: 'RELIABILITY',
        automatedAction: 'AUTO_REMEDIATION',
        estimatedValue: '$8,900/month',
        confidence: 97.3,
        implementationEffort: 'AUTOMATED'
      },
      {
        alertId: 'SMART-003',
        type: 'GOVERNANCE_ENHANCEMENT',
        title: 'Audit Compliance Optimization Available',
        description: 'Enhanced audit trail configuration recommended for regulatory compliance',
        intelligence: 'COMPLIANCE_AI',
        priority: 'MEDIUM',
        impact: 'GOVERNANCE',
        automatedAction: 'CONFIG_UPDATE',
        estimatedValue: '$15,600/month',
        confidence: 89.4,
        implementationEffort: 'MEDIUM'
      }
    ],

    // Automation Orchestration Dashboard
    orchestrationDashboard: {
      totalWorkflowsManaged: 156,
      activeOrchestrations: 89,
      exceptionHandlingSuccess: 97.8,
      escalationEfficiency: 94.7,
      policyComplianceRate: 99.2,
      auditReadinessScore: 96.8,
      centralizedControlEfficiency: 91.4,
      resilienceScore: 98.3,
      operationalScalability: 187.3,
      valueOptimizationIndex: 94.6
    },

    // Real-Time Data Visualization (2026 Must-Have)
    realTimeVisualization: {
      liveDataStreams: 67,
      visualizationUpdateRate: '0.3s',
      interactiveDashboards: 23,
      personalizedViews: 12,
      contextualCharts: 45,
      predictiveVisualizations: 34,
      anomalyHighlighting: 'ACTIVE',
      trendAnalysisAccuracy: 96.7,
      visualIntelligence: 94.2,
      userEngagementScore: 91.8
    },

    // AI Agent Integration & Control
    aiAgentControl: [
      {
        agentId: 'AI-CTRL-001',
        agentName: 'Workflow Optimization Agent',
        status: 'ACTIVE',
        intelligence: 'ADVANCED',
        tasksCompleted: 1247,
        efficiency: 96.8,
        learningRate: 94.3,
        autonomyLevel: 'HIGH',
        governanceCompliance: 98.7,
        costOptimization: '$12,400',
        lastOptimization: '2 hours ago'
      },
      {
        agentId: 'AI-CTRL-002',
        agentName: 'Exception Resolution Agent',
        status: 'MONITORING',
        intelligence: 'EXPERT',
        tasksCompleted: 456,
        efficiency: 98.9,
        learningRate: 97.1,
        autonomyLevel: 'FULL',
        governanceCompliance: 99.4,
        costOptimization: '$8,900',
        lastOptimization: '1 hour ago'
      },
      {
        agentId: 'AI-CTRL-003',
        agentName: 'Performance Analytics Agent',
        status: 'GENERATING',
        intelligence: 'SPECIALIZED',
        tasksCompleted: 234,
        efficiency: 94.7,
        learningRate: 89.6,
        autonomyLevel: 'SUPERVISED',
        governanceCompliance: 96.8,
        costOptimization: '$5,600',
        lastOptimization: '30 minutes ago'
      }
    ],

    // Automation Performance Metrics
    performanceMetrics: {
      overallAutomationEfficiency: 94.7,
      timeToValue: '2.1 hours',
      costReductionAchieved: 67.8,
      humanWorkloadReduction: 78.9,
      errorReductionRate: 89.4,
      processAcceleration: 234.7,
      complianceScore: 98.6,
      auditReadiness: 96.8,
      scalabilityIndex: 187.3,
      businessValueGenerated: '$45,600/month'
    }
  });

  const [liveMetrics, setLiveMetrics] = useState({
    activeWorkflows: 89,
    smartAlerts: 23,
    aiAgents: 23,
    automationEfficiency: 94.7,
    governanceScore: 98.6
  });

  // Real-time automation data updates (2026 requirement)
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        activeWorkflows: Math.max(70, Math.min(120, prev.activeWorkflows + (Math.random() - 0.5) * 3)),
        smartAlerts: Math.max(15, Math.min(35, prev.smartAlerts + (Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0))),
        aiAgents: Math.max(18, Math.min(30, prev.aiAgents + (Math.random() > 0.8 ? (Math.random() > 0.5 ? 1 : -1) : 0))),
        automationEfficiency: Math.max(85, Math.min(99, prev.automationEfficiency + (Math.random() - 0.5) * 1)),
        governanceScore: Math.max(90, Math.min(100, prev.governanceScore + (Math.random() - 0.5) * 0.3))
      }));

      setAutomationData(prev => ({
        ...prev,
        orchestrationDashboard: {
          ...prev.orchestrationDashboard,
          activeOrchestrations: liveMetrics.activeWorkflows,
          centralizedControlEfficiency: Math.max(85, Math.min(98, prev.orchestrationDashboard.centralizedControlEfficiency + (Math.random() - 0.5) * 0.5))
        }
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [liveMetrics.activeWorkflows]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'RUNNING': case 'ACTIVE': return 'text-green-400';
      case 'OPTIMIZING': case 'MONITORING': return 'text-blue-400';
      case 'SCHEDULED': case 'GENERATING': return 'text-yellow-400';
      case 'ERROR': case 'FAILED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getEfficiencyColor = (score) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH': return 'border-l-red-500 bg-red-900/20';
      case 'MEDIUM': return 'border-l-yellow-500 bg-yellow-900/20';
      case 'LOW': return 'border-l-green-500 bg-green-900/20';
      default: return 'border-l-blue-500 bg-blue-900/20';
    }
  };

  const getAutonomyColor = (level) => {
    switch (level) {
      case 'FULL': case 'HIGH': return 'text-green-400';
      case 'SUPERVISED': case 'MEDIUM': return 'text-yellow-400';
      case 'MANUAL': case 'LOW': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 min-h-screen text-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          🤖⚙️ Intelligent Automation Control Center
        </h1>
        <p className="text-gray-300 text-lg">
          2026 Enterprise Trends • Role-Based Intelligence • Machine-Readable Hub • Orchestration Patterns
        </p>
      </div>

      {/* Live Automation Metrics (2026 Real-Time Requirement) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-black/40 border border-purple-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-400 mb-2">⚙️ Active Workflows</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.activeWorkflows}</div>
          <div className="text-sm text-gray-300">orchestrated processes</div>
        </div>
        <div className="bg-black/40 border border-blue-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-400 mb-2">🧠 Smart Alerts</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.smartAlerts}</div>
          <div className="text-sm text-gray-300">intelligent notifications</div>
        </div>
        <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-cyan-400 mb-2">🤖 AI Agents</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.aiAgents}</div>
          <div className="text-sm text-gray-300">connected via MCP</div>
        </div>
        <div className="bg-black/40 border border-green-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-400 mb-2">📈 Efficiency</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.automationEfficiency.toFixed(1)}%</div>
          <div className="text-sm text-gray-300">automation performance</div>
        </div>
        <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">🛡️ Governance</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.governanceScore.toFixed(1)}%</div>
          <div className="text-sm text-gray-300">compliance score</div>
        </div>
      </div>

      {/* Role-Based Dashboard & Machine-Readable Intelligence Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black/40 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">👤 Role-Based Dashboard Intelligence</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-white">Current Role: {automationData.roleBased.currentRole}</span>
              <span className="px-2 py-1 bg-green-600/30 rounded text-green-400 text-sm">{automationData.roleBased.permissionLevel}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-300">Personalized Widgets</div>
                <div className="text-xl font-bold text-white">{automationData.roleBased.personalizedWidgets}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Automated Tasks</div>
                <div className="text-xl font-bold text-cyan-400">{automationData.roleBased.automatedRoutineTasks}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Smart Alerts</div>
                <div className="text-xl font-bold text-blue-400">{automationData.roleBased.smartAlertsActive}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Dashboard Efficiency</div>
                <div className={`text-xl font-bold ${getEfficiencyColor(automationData.roleBased.dashboardEfficiency)}`}>
                  {automationData.roleBased.dashboardEfficiency}%
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Personalized Insights</div>
                <div className="text-xl font-bold text-purple-400">{automationData.roleBased.personalizedInsights}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Contextual Recommendations</div>
                <div className="text-xl font-bold text-green-400">{automationData.roleBased.contextualRecommendations}</div>
              </div>
            </div>
            <div className="border-t border-gray-600/30 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Adaptive Interface</span>
                <span className="text-green-400">{automationData.roleBased.adaptiveInterface}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Machine-Readable Intelligence Hub (MCP) */}
        <div className="bg-black/40 border border-indigo-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">🧠 Intelligence Hub (Model Context Protocol)</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-white">MCP Integration</span>
              <span className="px-2 py-1 bg-green-600/30 rounded text-green-400 text-sm">{automationData.intelligenceHub.mcpIntegration}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-300">AI Agents Connected</div>
                <div className="text-xl font-bold text-white">{automationData.intelligenceHub.aiAgentsConnected}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Tickets Generated</div>
                <div className="text-xl font-bold text-blue-400">{automationData.intelligenceHub.ticketsGenerated}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Code Auto-Generation</div>
                <div className="text-xl font-bold text-cyan-400">{automationData.intelligenceHub.codeAutoGeneration}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Documentation Updates</div>
                <div className="text-xl font-bold text-purple-400">{automationData.intelligenceHub.documentationUpdates}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Design System Understanding</div>
                <div className={`text-xl font-bold ${getEfficiencyColor(automationData.intelligenceHub.designSystemUnderstanding)}`}>
                  {automationData.intelligenceHub.designSystemUnderstanding}%
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Agent Intelligence</div>
                <div className={`text-xl font-bold ${getEfficiencyColor(automationData.intelligenceHub.agentIntelligenceScore)}`}>
                  {automationData.intelligenceHub.agentIntelligenceScore}%
                </div>
              </div>
            </div>
            <div className="border-t border-gray-600/30 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Real-Time Generation</span>
                <span className="text-green-400">{automationData.intelligenceHub.realTimeGeneration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time Automation Status */}
      <div className="bg-black/40 border border-green-500/30 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-green-400 mb-4">⚡ Real-Time Automation Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {automationData.automationStatus.map((workflow, index) => (
            <div key={workflow.workflowId} className="border border-gray-600/30 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-semibold text-white">{workflow.workflowName}</h4>
                <div className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(workflow.status)}`}>
                  {workflow.status}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <div className="text-gray-300">Completion Rate</div>
                  <div className={`font-bold ${getEfficiencyColor(workflow.completionRate)}`}>{workflow.completionRate}%</div>
                </div>
                <div>
                  <div className="text-gray-300">Processing Speed</div>
                  <div className="text-cyan-400 font-bold">{workflow.processingSpeed}</div>
                </div>
                <div>
                  <div className="text-gray-300">Error Rate</div>
                  <div className={`font-bold ${workflow.errorRate < 1 ? 'text-green-400' : 'text-red-400'}`}>{workflow.errorRate}%</div>
                </div>
                <div>
                  <div className="text-gray-300">Efficiency</div>
                  <div className={`font-bold ${getEfficiencyColor(workflow.efficiency)}`}>{workflow.efficiency}%</div>
                </div>
                <div>
                  <div className="text-gray-300">Automation Level</div>
                  <div className={`font-bold ${getAutonomyColor(workflow.automationLevel)}`}>{workflow.automationLevel}</div>
                </div>
                <div>
                  <div className="text-gray-300">Governance</div>
                  <div className="text-green-400 font-bold">{workflow.governance}</div>
                </div>
              </div>
              <div className="mt-3 flex justify-between text-sm">
                <span className="text-gray-400">Next: {workflow.nextScheduled}</span>
                <span className="text-gray-400">Last: {workflow.lastExecution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Alerts & AI Agent Control */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">🧠 Smart Alerts & Intelligence</h3>
          <div className="space-y-4">
            {automationData.smartAlerts.map((alert, index) => (
              <div key={alert.alertId} className={`border-l-4 p-4 rounded ${getPriorityColor(alert.priority)}`}>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold text-white">{alert.title}</h4>
                  <div className={`px-2 py-1 rounded text-xs font-bold ${
                    alert.priority === 'HIGH' ? 'text-red-400' :
                    alert.priority === 'MEDIUM' ? 'text-yellow-400' : 'text-green-400'
                  }`}>
                    {alert.priority}
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-3">{alert.description}</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-gray-400">Intelligence</div>
                    <div className="text-cyan-400">{alert.intelligence.replace('_', ' ')}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Estimated Value</div>
                    <div className="text-green-400">{alert.estimatedValue}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Confidence</div>
                    <div className={getEfficiencyColor(alert.confidence)}>{alert.confidence}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Implementation</div>
                    <div className="text-white">{alert.implementationEffort}</div>
                  </div>
                </div>
                <div className="mt-3 text-sm">
                  <div className="text-gray-400">Automated Action</div>
                  <div className="text-blue-400">{alert.automatedAction.replace('_', ' ')}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Agent Control & Integration */}
        <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">🤖 AI Agent Control & Integration</h3>
          <div className="space-y-4">
            {automationData.aiAgentControl.map((agent, index) => (
              <div key={agent.agentId} className="border border-gray-600/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-white">{agent.agentName}</h4>
                  <div className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(agent.status)}`}>
                    {agent.status}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="text-gray-300">Tasks Completed</div>
                    <div className="text-white font-bold">{agent.tasksCompleted}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Efficiency</div>
                    <div className={`font-bold ${getEfficiencyColor(agent.efficiency)}`}>{agent.efficiency}%</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Learning Rate</div>
                    <div className={`font-bold ${getEfficiencyColor(agent.learningRate)}`}>{agent.learningRate}%</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Autonomy Level</div>
                    <div className={`font-bold ${getAutonomyColor(agent.autonomyLevel)}`}>{agent.autonomyLevel}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Compliance</div>
                    <div className={`font-bold ${getEfficiencyColor(agent.governanceCompliance)}`}>{agent.governanceCompliance}%</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Cost Optimization</div>
                    <div className="text-green-400 font-bold">{agent.costOptimization}</div>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  Intelligence: <span className="text-cyan-400">{agent.intelligence}</span> • 
                  Last Optimization: <span className="text-white">{agent.lastOptimization}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Orchestration Dashboard Summary */}
      <div className="bg-black/40 border border-indigo-500/30 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">🎼 Orchestration & Governance Dashboard</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{automationData.orchestrationDashboard.totalWorkflowsManaged}</div>
            <div className="text-sm text-gray-300">Workflows Managed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{automationData.orchestrationDashboard.exceptionHandlingSuccess}%</div>
            <div className="text-sm text-gray-300">Exception Success</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{automationData.orchestrationDashboard.policyComplianceRate}%</div>
            <div className="text-sm text-gray-300">Policy Compliance</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{automationData.orchestrationDashboard.resilienceScore}%</div>
            <div className="text-sm text-gray-300">Resilience Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">{automationData.orchestrationDashboard.operationalScalability}%</div>
            <div className="text-sm text-gray-300">Scalability Index</div>
          </div>
        </div>
      </div>

      {/* Footer with Live Status */}
      <div className="text-center text-gray-400 text-sm">
        <div className="flex justify-center items-center space-x-4">
          <span className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Intelligent Automation: ACTIVE
          </span>
          <span className="flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            MCP Integration: {automationData.intelligenceHub.aiAgentsConnected} agents
          </span>
          <span className="flex items-center">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
            Orchestration: {liveMetrics.activeWorkflows} workflows
          </span>
        </div>
        <div className="mt-2">
          🚀 Intelligent Automation Control Center • 2026 Enterprise Trends • Last Updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}