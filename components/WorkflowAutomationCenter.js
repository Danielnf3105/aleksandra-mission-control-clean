// WorkflowAutomationCenter.js - Enterprise Workflow Automation and Process Management
import { useState, useEffect } from 'react';

const WorkflowAutomationCenter = () => {
  const [workflows, setWorkflows] = useState([
    {
      id: 'wf_001',
      name: 'Instagram Content Processing',
      description: 'Automated pipeline for video transcription and analysis',
      status: 'ACTIVE',
      type: 'CONTENT_PROCESSING',
      trigger: 'New video upload',
      steps: [
        { id: 1, name: 'Video Upload Detection', status: 'COMPLETED', duration: 2000 },
        { id: 2, name: 'Assembly AI Transcription', status: 'IN_PROGRESS', duration: 45000 },
        { id: 3, name: 'Content Analysis', status: 'PENDING', duration: 15000 },
        { id: 4, name: 'Database Storage', status: 'PENDING', duration: 3000 }
      ],
      totalExecutions: 247,
      successRate: 96.7,
      avgDuration: 65000,
      lastExecuted: Date.now() - 15 * 60 * 1000,
      enabled: true
    },
    {
      id: 'wf_002',
      name: 'Security Threat Response',
      description: 'Automated incident response for security threats',
      status: 'STANDBY',
      type: 'SECURITY',
      trigger: 'Threat detection alert',
      steps: [
        { id: 1, name: 'Threat Assessment', status: 'COMPLETED', duration: 5000 },
        { id: 2, name: 'Alert Generation', status: 'COMPLETED', duration: 2000 },
        { id: 3, name: 'Auto-Mitigation', status: 'COMPLETED', duration: 8000 },
        { id: 4, name: 'Report Generation', status: 'COMPLETED', duration: 10000 }
      ],
      totalExecutions: 12,
      successRate: 100.0,
      avgDuration: 25000,
      lastExecuted: Date.now() - 2 * 60 * 60 * 1000,
      enabled: true
    },
    {
      id: 'wf_003',
      name: 'System Health Monitoring',
      description: 'Continuous monitoring and auto-scaling workflow',
      status: 'ACTIVE',
      type: 'OPERATIONS',
      trigger: 'Performance threshold exceeded',
      steps: [
        { id: 1, name: 'Metrics Collection', status: 'COMPLETED', duration: 1000 },
        { id: 2, name: 'Threshold Analysis', status: 'IN_PROGRESS', duration: 3000 },
        { id: 3, name: 'Scaling Decision', status: 'PENDING', duration: 2000 },
        { id: 4, name: 'Resource Allocation', status: 'PENDING', duration: 5000 }
      ],
      totalExecutions: 89,
      successRate: 94.3,
      avgDuration: 11000,
      lastExecuted: Date.now() - 5 * 60 * 1000,
      enabled: true
    },
    {
      id: 'wf_004',
      name: 'Agent Task Distribution',
      description: 'Intelligent task routing to available AI agents',
      status: 'ACTIVE',
      type: 'AI_ORCHESTRATION',
      trigger: 'New task submission',
      steps: [
        { id: 1, name: 'Task Analysis', status: 'COMPLETED', duration: 2000 },
        { id: 2, name: 'Agent Selection', status: 'IN_PROGRESS', duration: 4000 },
        { id: 3, name: 'Task Assignment', status: 'PENDING', duration: 1000 },
        { id: 4, name: 'Progress Monitoring', status: 'PENDING', duration: 0 }
      ],
      totalExecutions: 156,
      successRate: 98.1,
      avgDuration: 7000,
      lastExecuted: Date.now() - 2 * 60 * 1000,
      enabled: true
    }
  ]);

  const [automationRules, setAutomationRules] = useState([
    {
      id: 'rule_001',
      name: 'High CPU Auto-Scale',
      condition: 'cpu_usage > 85% FOR 5min',
      action: 'Trigger resource scaling workflow',
      enabled: true,
      triggered: 3,
      lastTriggered: Date.now() - 30 * 60 * 1000
    },
    {
      id: 'rule_002', 
      name: 'Content Queue Processing',
      condition: 'content_queue_size > 10',
      action: 'Start additional processing workers',
      enabled: true,
      triggered: 8,
      lastTriggered: Date.now() - 2 * 60 * 60 * 1000
    },
    {
      id: 'rule_003',
      name: 'Security Alert Escalation',
      condition: 'threat_severity = HIGH',
      action: 'Execute immediate response workflow',
      enabled: true,
      triggered: 1,
      lastTriggered: Date.now() - 4 * 60 * 60 * 1000
    },
    {
      id: 'rule_004',
      name: 'Agent Failure Recovery',
      condition: 'agent_error_rate > 10%',
      action: 'Restart agent and redistribute tasks',
      enabled: true,
      triggered: 2,
      lastTriggered: Date.now() - 6 * 60 * 60 * 1000
    }
  ]);

  const [integrations, setIntegrations] = useState([
    {
      id: 'int_001',
      name: 'Assembly AI',
      type: 'API',
      status: 'CONNECTED',
      description: 'Speech-to-text transcription service',
      endpoint: 'https://api.assemblyai.com',
      lastSync: Date.now() - 5 * 60 * 1000,
      requestCount: 247,
      errorRate: 0.8
    },
    {
      id: 'int_002',
      name: 'Vercel Deployments',
      type: 'CI/CD',
      status: 'CONNECTED',
      description: 'Automated deployment pipeline',
      endpoint: 'https://api.vercel.com',
      lastSync: Date.now() - 15 * 60 * 1000,
      requestCount: 12,
      errorRate: 0.0
    },
    {
      id: 'int_003',
      name: 'GitHub Repository',
      type: 'SOURCE_CONTROL',
      status: 'CONNECTED',
      description: 'Code repository and issue tracking',
      endpoint: 'https://api.github.com',
      lastSync: Date.now() - 30 * 60 * 1000,
      requestCount: 45,
      errorRate: 2.2
    },
    {
      id: 'int_004',
      name: 'OpenClaw Gateway',
      type: 'AGENT_MANAGEMENT',
      status: 'CONNECTED',
      description: 'AI agent orchestration platform',
      endpoint: 'http://localhost:3000',
      lastSync: Date.now() - 2 * 60 * 1000,
      requestCount: 89,
      errorRate: 1.1
    }
  ]);

  const [processMetrics, setProcessMetrics] = useState({
    totalWorkflows: 4,
    activeWorkflows: 3,
    totalExecutions: 504,
    successfulExecutions: 487,
    avgExecutionTime: 27000,
    automationSavings: '14.7h',
    processingEfficiency: 96.6,
    errorRate: 3.4,
    queuedTasks: 7,
    completedToday: 23
  });

  const [workflowTemplates, setWorkflowTemplates] = useState([
    {
      id: 'template_001',
      name: 'Content Moderation Pipeline',
      category: 'CONTENT',
      description: 'Automated content review and approval process',
      estimatedSetup: '15 minutes',
      complexity: 'MEDIUM',
      integrations: ['Content API', 'Moderation Service', 'Database']
    },
    {
      id: 'template_002',
      name: 'Data Backup Automation',
      category: 'OPERATIONS',
      description: 'Scheduled backup and verification workflow',
      estimatedSetup: '10 minutes',
      complexity: 'LOW',
      integrations: ['Storage Service', 'Email Notifications']
    },
    {
      id: 'template_003',
      name: 'User Onboarding Flow',
      category: 'USER_MANAGEMENT',
      description: 'Automated user registration and welcome process',
      estimatedSetup: '20 minutes',
      complexity: 'HIGH',
      integrations: ['User Database', 'Email Service', 'Analytics']
    },
    {
      id: 'template_004',
      name: 'Performance Testing Suite',
      category: 'TESTING',
      description: 'Automated performance testing and reporting',
      estimatedSetup: '25 minutes',
      complexity: 'HIGH',
      integrations: ['Testing Framework', 'Metrics Collection', 'Reporting']
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update workflow progress
      setWorkflows(prev => prev.map(workflow => {
        if (workflow.status === 'ACTIVE') {
          return {
            ...workflow,
            steps: workflow.steps.map(step => {
              if (step.status === 'IN_PROGRESS') {
                // Sometimes complete the step
                if (Math.random() > 0.7) {
                  return { ...step, status: 'COMPLETED' };
                }
              } else if (step.status === 'PENDING' && Math.random() > 0.8) {
                // Sometimes start a pending step
                return { ...step, status: 'IN_PROGRESS' };
              }
              return step;
            })
          };
        }
        return workflow;
      }));

      // Update process metrics
      setProcessMetrics(prev => ({
        ...prev,
        totalExecutions: prev.totalExecutions + Math.floor(Math.random() * 3),
        successfulExecutions: prev.successfulExecutions + Math.floor(Math.random() * 3),
        queuedTasks: Math.max(0, Math.min(20, prev.queuedTasks + (Math.random() - 0.5) * 4)),
        completedToday: prev.completedToday + (Math.random() > 0.8 ? 1 : 0),
        processingEfficiency: Math.max(85, Math.min(99, prev.processingEfficiency + (Math.random() - 0.5) * 2))
      }));

      // Update integration sync times
      setIntegrations(prev => prev.map(integration => ({
        ...integration,
        lastSync: Math.random() > 0.9 ? Date.now() : integration.lastSync,
        requestCount: integration.requestCount + Math.floor(Math.random() * 2),
        errorRate: Math.max(0, Math.min(5, integration.errorRate + (Math.random() - 0.5) * 0.5))
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleWorkflow = (workflowId) => {
    setWorkflows(prev => prev.map(wf => 
      wf.id === workflowId ? { ...wf, enabled: !wf.enabled } : wf
    ));
  };

  const toggleAutomationRule = (ruleId) => {
    setAutomationRules(prev => prev.map(rule => 
      rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'STANDBY': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'PAUSED': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      case 'ERROR': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'COMPLETED': return 'text-green-400';
      case 'IN_PROGRESS': return 'text-blue-400';
      case 'PENDING': return 'text-gray-400';
      case 'CONNECTED': return 'text-green-400';
      case 'DISCONNECTED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'LOW': return 'text-green-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'HIGH': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatDuration = (ms) => {
    if (ms < 60000) return `${Math.floor(ms / 1000)}s`;
    if (ms < 3600000) return `${Math.floor(ms / 60000)}m`;
    return `${Math.floor(ms / 3600000)}h`;
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
          ⚙️ WORKFLOW AUTOMATION CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {processMetrics.activeWorkflows} ACTIVE
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Enterprise Process Automation
          </div>
        </div>
      </div>

      {/* Process Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">TOTAL WORKFLOWS</div>
              <div className="text-2xl font-bold text-blue-100">
                {processMetrics.totalWorkflows}
              </div>
              <div className="text-xs text-blue-300">{processMetrics.activeWorkflows} active</div>
            </div>
            <div className="text-3xl opacity-60">🔄</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">EFFICIENCY</div>
              <div className="text-2xl font-bold text-green-100">
                {processMetrics.processingEfficiency.toFixed(1)}%
              </div>
              <div className="text-xs text-green-300">Process success rate</div>
            </div>
            <div className="text-3xl opacity-60">📈</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">TIME SAVED</div>
              <div className="text-2xl font-bold text-purple-100">
                {processMetrics.automationSavings}
              </div>
              <div className="text-xs text-purple-300">This week</div>
            </div>
            <div className="text-3xl opacity-60">⏱️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded-lg p-4 border border-yellow-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-yellow-200">QUEUED TASKS</div>
              <div className="text-2xl font-bold text-yellow-100">
                {processMetrics.queuedTasks}
              </div>
              <div className="text-xs text-yellow-300">Awaiting processing</div>
            </div>
            <div className="text-3xl opacity-60">📋</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 rounded-lg p-4 border border-cyan-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-cyan-200">COMPLETED TODAY</div>
              <div className="text-2xl font-bold text-cyan-100">
                {processMetrics.completedToday}
              </div>
              <div className="text-xs text-cyan-300">Automated tasks</div>
            </div>
            <div className="text-3xl opacity-60">✅</div>
          </div>
        </div>
      </div>

      {/* Active Workflows and Automation Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Workflows */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔄 ACTIVE WORKFLOWS
          </h3>
          <div className="space-y-4">
            {workflows.map((workflow) => (
              <div key={workflow.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{workflow.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(workflow.status)}`}>
                      {workflow.status}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleWorkflow(workflow.id)}
                    className={`px-3 py-1 rounded text-xs font-mono ${
                      workflow.enabled 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-gray-600 hover:bg-gray-500 text-gray-300'
                    }`}
                  >
                    {workflow.enabled ? 'ENABLED' : 'DISABLED'}
                  </button>
                </div>
                
                <div className="text-xs text-gray-300 mb-3">{workflow.description}</div>
                
                {/* Workflow Steps */}
                <div className="space-y-2 mb-3">
                  {workflow.steps.map((step, index) => (
                    <div key={step.id} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        step.status === 'COMPLETED' ? 'bg-green-400' :
                        step.status === 'IN_PROGRESS' ? 'bg-blue-400 animate-pulse' :
                        'bg-gray-400'
                      }`}></div>
                      <span className={`text-xs ${getStatusColor(step.status)}`}>
                        {step.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({formatDuration(step.duration)})
                      </span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="text-center">
                    <div className="text-gray-400">Executions</div>
                    <div className="text-white font-bold">{workflow.totalExecutions}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Success Rate</div>
                    <div className="text-green-400 font-bold">{workflow.successRate.toFixed(1)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Avg Duration</div>
                    <div className="text-blue-400 font-bold">{formatDuration(workflow.avgDuration)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Automation Rules */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🤖 AUTOMATION RULES
          </h3>
          <div className="space-y-3">
            {automationRules.map((rule) => (
              <div key={rule.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{rule.name}</h4>
                    {rule.enabled && (
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <button
                    onClick={() => toggleAutomationRule(rule.id)}
                    className={`px-3 py-1 rounded text-xs font-mono ${
                      rule.enabled 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-gray-600 hover:bg-gray-500 text-gray-300'
                    }`}
                  >
                    {rule.enabled ? 'ACTIVE' : 'INACTIVE'}
                  </button>
                </div>
                
                <div className="text-xs text-cyan-400 mb-2 font-mono">
                  When: {rule.condition}
                </div>
                <div className="text-xs text-purple-400 mb-2">
                  Then: {rule.action}
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">
                    Triggered: <span className="text-white">{rule.triggered} times</span>
                  </span>
                  <span className="text-gray-400">
                    Last: {formatTime(rule.lastTriggered)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Integrations and Workflow Templates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Integrations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔗 SYSTEM INTEGRATIONS
          </h3>
          <div className="space-y-3">
            {integrations.map((integration) => (
              <div key={integration.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{integration.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(integration.status)}`}>
                      {integration.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {integration.type}
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{integration.description}</div>
                <div className="text-xs text-blue-400 mb-2 font-mono">{integration.endpoint}</div>
                
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-gray-400">Last Sync</div>
                    <div className="text-white">{formatTime(integration.lastSync)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Requests</div>
                    <div className="text-cyan-400">{integration.requestCount}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Error Rate</div>
                    <div className={`${integration.errorRate > 2 ? 'text-red-400' : 'text-green-400'}`}>
                      {integration.errorRate.toFixed(1)}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Templates */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📋 WORKFLOW TEMPLATES
          </h3>
          <div className="space-y-3">
            {workflowTemplates.map((template) => (
              <div key={template.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{template.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono ${getComplexityColor(template.complexity)}`}>
                      {template.complexity}
                    </span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs">
                    Deploy
                  </button>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{template.description}</div>
                <div className="text-xs text-purple-400 mb-2">
                  Category: {template.category.replace('_', ' ')}
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">
                    Setup: <span className="text-cyan-400">{template.estimatedSetup}</span>
                  </span>
                  <span className="text-gray-400">
                    Integrations: <span className="text-green-400">{template.integrations.length}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          ⚡ QUICK ACTIONS
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors">
            Create Workflow
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors">
            Add Integration
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors">
            Setup Rule
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkflowAutomationCenter;