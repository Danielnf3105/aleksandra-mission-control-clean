// Marketing Automation Intelligence Center - Workflow Analytics, Lead Nurturing & Campaign Automation
import { useState, useEffect } from 'react';
import { Zap, TrendingUp, Users, Target, BarChart3, Clock, ArrowRight, GitBranch, AlertTriangle, CheckCircle, Play } from 'lucide-react';

export default function MarketingAutomationIntelligenceCenter() {
  const [automationData, setAutomationData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    automationOverview: {
      activeWorkflows: 156,
      totalContacts: 89234,
      activeContacts: 34567,
      nurturingContacts: 12345,
      workflowsExecuted: 234567,
      emailsSent: 1234567,
      avgOpenRate: 24.8,
      avgClickRate: 4.2,
      conversionRate: 3.7,
      leadScore: 78.9,
      automationRevenue: 456789,
      avgDealSize: 234.56,
      salesVelocity: 21.5,
      customerLifetime: 890.23,
      mqls: 2345,
      sqls: 567,
      closedWon: 89,
      roi: 456.7
    },
    activeWorkflows: [
      {
        id: 'WF001',
        name: 'Welcome Email Sequence',
        type: 'Lead Nurturing',
        status: 'ACTIVE',
        contacts: 5678,
        completionRate: 67.8,
        avgTimeToComplete: '14 days',
        triggers: ['Form Submission', 'Newsletter Signup'],
        steps: 7,
        completedSteps: 5,
        openRate: 32.4,
        clickRate: 6.8,
        conversionRate: 4.5,
        revenue: 23456,
        goal: 'Lead Education',
        startDate: '2026-01-15',
        lastModified: '2026-03-10',
        performance: 'EXCELLENT',
        nextAction: 'A/B test subject lines',
        branches: 3,
        conditions: 12
      },
      {
        id: 'WF002',
        name: 'Demo Request Follow-up',
        type: 'Sales Enablement',
        status: 'ACTIVE',
        contacts: 1234,
        completionRate: 89.2,
        avgTimeToComplete: '7 days',
        triggers: ['Demo Request', 'Product Page Visit'],
        steps: 5,
        completedSteps: 5,
        openRate: 45.6,
        clickRate: 12.3,
        conversionRate: 18.7,
        revenue: 67890,
        goal: 'Demo Scheduling',
        startDate: '2026-02-01',
        lastModified: '2026-03-15',
        performance: 'OUTSTANDING',
        nextAction: 'Scale to more segments',
        branches: 2,
        conditions: 8
      },
      {
        id: 'WF003',
        name: 'Abandoned Cart Recovery',
        type: 'E-commerce',
        status: 'ACTIVE',
        contacts: 2345,
        completionRate: 45.6,
        avgTimeToComplete: '3 days',
        triggers: ['Cart Abandonment', 'Checkout Exit'],
        steps: 4,
        completedSteps: 4,
        openRate: 38.9,
        clickRate: 15.7,
        conversionRate: 23.4,
        revenue: 34567,
        goal: 'Cart Recovery',
        startDate: '2026-02-20',
        lastModified: '2026-03-12',
        performance: 'GOOD',
        nextAction: 'Test discount amounts',
        branches: 1,
        conditions: 5
      },
      {
        id: 'WF004',
        name: 'Customer Onboarding',
        type: 'Customer Success',
        status: 'ACTIVE',
        contacts: 567,
        completionRate: 78.9,
        avgTimeToComplete: '21 days',
        triggers: ['Purchase', 'Account Creation'],
        steps: 9,
        completedSteps: 9,
        openRate: 52.3,
        clickRate: 18.9,
        conversionRate: 34.5,
        revenue: 12345,
        goal: 'User Activation',
        startDate: '2026-01-30',
        lastModified: '2026-03-08',
        performance: 'EXCELLENT',
        nextAction: 'Add upsell sequence',
        branches: 4,
        conditions: 15
      }
    ],
    leadScoringMetrics: [
      {
        segment: 'Hot Leads (80-100)',
        count: 234,
        percentage: 12.3,
        avgScore: 92.4,
        conversionRate: 45.6,
        avgDealSize: 456.78,
        salesVelocity: 12.5,
        topSources: ['Demo Request', 'Pricing Page', 'Contact Sales'],
        nextAction: 'Immediate sales follow-up',
        priority: 'CRITICAL'
      },
      {
        segment: 'Warm Leads (60-79)',
        count: 567,
        percentage: 29.7,
        avgScore: 68.9,
        conversionRate: 23.4,
        avgDealSize: 289.45,
        salesVelocity: 18.7,
        topSources: ['Webinar Attendance', 'Content Downloads', 'Email Engagement'],
        nextAction: 'Nurture with case studies',
        priority: 'HIGH'
      },
      {
        segment: 'Cool Leads (40-59)',
        count: 789,
        percentage: 41.3,
        avgScore: 48.7,
        conversionRate: 8.9,
        avgDealSize: 167.23,
        salesVelocity: 34.2,
        topSources: ['Blog Visits', 'Social Media', 'Referral'],
        nextAction: 'Educational content sequence',
        priority: 'MEDIUM'
      },
      {
        segment: 'Cold Leads (0-39)',
        count: 321,
        percentage: 16.7,
        avgScore: 23.5,
        conversionRate: 2.1,
        avgDealSize: 89.67,
        salesVelocity: 67.8,
        topSources: ['Organic Search', 'Generic Forms', 'Low Engagement'],
        nextAction: 'Re-engagement campaign',
        priority: 'LOW'
      }
    ],
    customerJourney: [
      {
        stage: 'Awareness',
        contacts: 12345,
        avgTime: '14 days',
        conversionRate: 8.9,
        dropoffRate: 91.1,
        topContent: ['Blog Posts', 'Social Media', 'SEO Content'],
        keyActions: ['Page Views', 'Content Consumption', 'Newsletter Signup'],
        automationTriggers: 4,
        nextStage: 'Interest',
        optimization: 'Increase content engagement'
      },
      {
        stage: 'Interest',
        contacts: 1098,
        avgTime: '7 days',
        conversionRate: 23.4,
        dropoffRate: 76.6,
        topContent: ['Webinars', 'Whitepapers', 'Product Videos'],
        keyActions: ['Download Content', 'Attend Webinar', 'Visit Pricing'],
        automationTriggers: 6,
        nextStage: 'Consideration',
        optimization: 'Enhance lead magnets'
      },
      {
        stage: 'Consideration',
        contacts: 257,
        avgTime: '10 days',
        conversionRate: 34.6,
        dropoffRate: 65.4,
        topContent: ['Case Studies', 'Product Demos', 'Free Trials'],
        keyActions: ['Demo Request', 'Trial Signup', 'Talk to Sales'],
        automationTriggers: 8,
        nextStage: 'Purchase',
        optimization: 'Reduce friction in demo booking'
      },
      {
        stage: 'Purchase',
        contacts: 89,
        avgTime: '5 days',
        conversionRate: 67.4,
        dropoffRate: 32.6,
        topContent: ['Proposals', 'Contract Terms', 'Implementation Plans'],
        keyActions: ['Proposal Review', 'Contract Signature', 'Payment'],
        automationTriggers: 3,
        nextStage: 'Onboarding',
        optimization: 'Streamline contract process'
      },
      {
        stage: 'Onboarding',
        contacts: 60,
        avgTime: '21 days',
        conversionRate: 89.2,
        dropoffRate: 10.8,
        topContent: ['Welcome Series', 'Setup Guides', 'Training Videos'],
        keyActions: ['Account Setup', 'Feature Usage', 'Support Interaction'],
        automationTriggers: 12,
        nextStage: 'Advocacy',
        optimization: 'Reduce time to first value'
      }
    ],
    triggerPerformance: [
      {
        trigger: 'Form Submission',
        activations: 12345,
        successRate: 89.7,
        avgResponseTime: '2 minutes',
        workflowsUsed: 23,
        conversionImpact: '+23.4%',
        revenue: 67890,
        optimization: 'EXCELLENT',
        lastOptimized: '2026-03-10'
      },
      {
        trigger: 'Email Engagement',
        activations: 8901,
        successRate: 76.3,
        avgResponseTime: '15 minutes',
        workflowsUsed: 18,
        conversionImpact: '+18.7%',
        revenue: 45678,
        optimization: 'GOOD',
        lastOptimized: '2026-03-05'
      },
      {
        trigger: 'Website Behavior',
        activations: 6789,
        successRate: 82.4,
        avgResponseTime: '5 minutes',
        workflowsUsed: 15,
        conversionImpact: '+15.6%',
        revenue: 34567,
        optimization: 'EXCELLENT',
        lastOptimized: '2026-03-12'
      },
      {
        trigger: 'Purchase Event',
        activations: 2345,
        successRate: 94.6,
        avgResponseTime: '1 minute',
        workflowsUsed: 8,
        conversionImpact: '+34.5%',
        revenue: 89012,
        optimization: 'OUTSTANDING',
        lastOptimized: '2026-03-08'
      },
      {
        trigger: 'Score Threshold',
        activations: 1567,
        successRate: 87.9,
        avgResponseTime: '30 seconds',
        workflowsUsed: 12,
        conversionImpact: '+28.9%',
        revenue: 56789,
        optimization: 'EXCELLENT',
        lastOptimized: '2026-03-14'
      }
    ],
    performanceAlerts: [
      {
        type: 'SUCCESS',
        category: 'Workflow Performance',
        message: 'Demo Request Follow-up workflow achieved 18.7% conversion rate (+67% above target)',
        metric: 'Workflow Conversion',
        value: '18.7%',
        change: '+67% above target',
        impact: 'MAJOR',
        timestamp: '07:56',
        workflow: 'Demo Request Follow-up (WF002)',
        affectedContacts: 1234,
        recommendation: 'Scale successful elements to other demo workflows',
        urgency: 'HIGH',
        opportunity: 'SCALE_SUCCESS'
      },
      {
        type: 'WARNING',
        category: 'Lead Scoring',
        message: 'Cold Leads segment growing 23% - may indicate targeting issues',
        metric: 'Cold Leads Percentage',
        value: '16.7%',
        change: '+23% growth',
        impact: 'MODERATE',
        timestamp: '07:54',
        segment: 'Cold Leads (0-39)',
        affectedContacts: 321,
        recommendation: 'Review lead sources, improve qualification criteria',
        urgency: 'MEDIUM',
        technicalAction: 'REVIEW_TARGETING'
      },
      {
        type: 'CRITICAL',
        category: 'Automation Failure',
        message: 'Welcome Email Sequence step 6 failing - 89% delivery failure rate',
        metric: 'Step Success Rate',
        value: '11%',
        change: '-89% from normal',
        impact: 'HIGH',
        timestamp: '07:58',
        workflow: 'Welcome Email Sequence (WF001)',
        step: 'Step 6: Product Feature Introduction',
        affectedContacts: 567,
        recommendation: 'Immediate technical investigation, backup sequence activation',
        urgency: 'CRITICAL',
        escalation: 'TECHNICAL_TEAM'
      },
      {
        type: 'INFO',
        category: 'Customer Journey',
        message: 'Consideration stage showing +12.4% improvement in conversion rate',
        metric: 'Stage Conversion Rate',
        value: '34.6%',
        change: '+12.4% improvement',
        impact: 'POSITIVE',
        timestamp: '07:52',
        stage: 'Consideration',
        optimization: 'Case study content performing well',
        recommendation: 'Expand successful case study strategy',
        urgency: 'LOW',
        opportunity: 'CONTENT_SCALING'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAutomationData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        automationOverview: {
          ...prev.automationOverview,
          activeContacts: Math.max(34000, Math.min(35000, prev.automationOverview.activeContacts + Math.floor((Math.random() - 0.5) * 50))),
          avgOpenRate: Math.max(23.0, Math.min(26.0, prev.automationOverview.avgOpenRate + (Math.random() - 0.5) * 0.2)),
          conversionRate: Math.max(3.5, Math.min(4.0, prev.automationOverview.conversionRate + (Math.random() - 0.5) * 0.1))
        }
      }));
    }, 22000);

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

  const getWorkflowTypeColor = (type) => {
    switch (type) {
      case 'Lead Nurturing': return 'text-green-400 bg-green-400/20';
      case 'Sales Enablement': return 'text-blue-400 bg-blue-400/20';
      case 'E-commerce': return 'text-purple-400 bg-purple-400/20';
      case 'Customer Success': return 'text-cyan-400 bg-cyan-400/20';
      case 'Re-engagement': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400';
      case 'PAUSED': return 'text-yellow-400';
      case 'DRAFT': return 'text-blue-400';
      case 'ARCHIVED': return 'text-gray-400';
      case 'ERROR': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'OUTSTANDING': return 'text-green-400 bg-green-400/20';
      case 'EXCELLENT': return 'text-blue-400 bg-blue-400/20';
      case 'GOOD': return 'text-cyan-400 bg-cyan-400/20';
      case 'AVERAGE': return 'text-yellow-400 bg-yellow-400/20';
      case 'POOR': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getOptimizationColor = (optimization) => {
    switch (optimization) {
      case 'OUTSTANDING': return 'text-green-400';
      case 'EXCELLENT': return 'text-blue-400';
      case 'GOOD': return 'text-cyan-400';
      case 'FAIR': return 'text-yellow-400';
      case 'POOR': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getScoreColor = (score, good = 70, excellent = 85) => {
    if (score >= excellent) return 'text-green-400';
    if (score >= good) return 'text-blue-400';
    if (score >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'CRITICAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-blue-400';
    }
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

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => `$${formatNumber(amount)}`;

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Marketing Automation Intelligence Center</h1>
              <p className="text-purple-300">Workflow analytics, lead nurturing & campaign automation</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{automationData.currentTime}</div>
            <div className="text-purple-300">Automation Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Automation Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-purple-400 mr-2" />
                Workflows
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{automationData.automationOverview.activeWorkflows}</div>
            <div className="text-purple-300 text-sm">Active</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-indigo-400 mr-2" />
                Contacts
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{formatNumber(automationData.automationOverview.activeContacts)}</div>
            <div className="text-indigo-300 text-sm">{formatNumber(automationData.automationOverview.totalContacts)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-cyan-400 mr-2" />
                Conversion
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(automationData.automationOverview.conversionRate, 2, 4)}`}>
              {formatPercentage(automationData.automationOverview.conversionRate)}
            </div>
            <div className="text-cyan-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                ROI
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(automationData.automationOverview.roi)}</div>
            <div className="text-green-300 text-sm">Return</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-orange-400 mr-2" />
                Lead Score
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(automationData.automationOverview.leadScore, 60, 80)}`}>
              {automationData.automationOverview.leadScore.toFixed(0)}
            </div>
            <div className="text-orange-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                Revenue
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatCurrency(automationData.automationOverview.automationRevenue)}</div>
            <div className="text-yellow-300 text-sm">Automation</div>
          </div>
        </div>

        {/* Active Workflows */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <GitBranch className="w-5 h-5 text-purple-400 mr-2" />
            Active Workflow Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Workflow</th>
                  <th className="text-center p-3 text-slate-300">Contacts</th>
                  <th className="text-center p-3 text-slate-300">Completion</th>
                  <th className="text-center p-3 text-slate-300">Conversion</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Performance</th>
                </tr>
              </thead>
              <tbody>
                {automationData.activeWorkflows.map((workflow, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{workflow.name}</div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-1 rounded text-xs ${getWorkflowTypeColor(workflow.type)}`}>
                          {workflow.type}
                        </span>
                        <span className={`text-sm ${getStatusColor(workflow.status)}`}>{workflow.status}</span>
                      </div>
                      <div className="text-slate-400 text-xs mt-1">
                        ID: {workflow.id} • Steps: {workflow.completedSteps}/{workflow.steps} • Branches: {workflow.branches}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-indigo-400 font-medium">{formatNumber(workflow.contacts)}</div>
                      <div className="text-slate-400 text-xs">{workflow.avgTimeToComplete}</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(workflow.completionRate, 50, 75)}`}>
                      {formatPercentage(workflow.completionRate)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(workflow.conversionRate, 3, 10)}`}>
                      {formatPercentage(workflow.conversionRate)}
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(workflow.revenue)}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getPerformanceColor(workflow.performance)}`}>
                        {workflow.performance}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lead Scoring & Customer Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-cyan-400 mr-2" />
              Lead Scoring Intelligence
            </h3>
            <div className="space-y-4">
              {automationData.leadScoringMetrics.map((segment, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{segment.segment}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(segment.priority)}`}>
                        {segment.priority}
                      </span>
                      <span className="text-cyan-400 text-sm">{segment.count} leads</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Avg Score: {segment.avgScore.toFixed(0)}</div>
                    <div className="text-green-400">Conv Rate: {formatPercentage(segment.conversionRate)}</div>
                    <div className="text-yellow-400">Deal Size: {formatCurrency(segment.avgDealSize)}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Velocity: {segment.salesVelocity.toFixed(1)} days</div>
                    <div className="text-indigo-400">Share: {formatPercentage(segment.percentage)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Top Sources:</strong> {segment.topSources.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <ArrowRight className="w-5 h-5 text-indigo-400 mr-2" />
              Customer Journey Analytics
            </h3>
            <div className="space-y-4">
              {automationData.customerJourney.map((stage, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{stage.stage}</span>
                    <span className={`text-sm ${getScoreColor(stage.conversionRate, 15, 30)}`}>
                      {formatPercentage(stage.conversionRate)} Conv
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">Contacts: {formatNumber(stage.contacts)}</div>
                    <div className="text-orange-400">Time: {stage.avgTime}</div>
                    <div className="text-red-400">Dropoff: {formatPercentage(stage.dropoffRate)}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Triggers: {stage.automationTriggers}</div>
                    <div className="text-cyan-400">Next: {stage.nextStage}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Top Content:</strong> {stage.topContent.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trigger Performance & Performance Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Play className="w-5 h-5 text-green-400 mr-2" />
              Trigger Performance Intelligence
            </h3>
            <div className="space-y-4">
              {automationData.triggerPerformance.map((trigger, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{trigger.trigger}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getOptimizationColor(trigger.optimization)}`}>
                        {trigger.optimization}
                      </span>
                      <span className={`text-sm ${getScoreColor(trigger.successRate, 70, 85)}`}>
                        {formatPercentage(trigger.successRate)}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Activations: {formatNumber(trigger.activations)}</div>
                    <div className="text-cyan-400">Response: {trigger.avgResponseTime}</div>
                    <div className="text-green-400">Impact: {trigger.conversionImpact}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Workflows: {trigger.workflowsUsed}</div>
                    <div className="text-indigo-400">Revenue: {formatCurrency(trigger.revenue)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Last Optimized:</strong> {trigger.lastOptimized}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              Automation Intelligence Alerts
            </h3>
            <div className="space-y-4">
              {automationData.performanceAlerts.map((alert, index) => (
                <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{alert.type}</span>
                      <span className="text-slate-300 text-xs">{alert.category}</span>
                      <span className={`text-xs ${getUrgencyColor(alert.urgency)}`}>
                        {alert.urgency}
                      </span>
                    </div>
                    <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                  </div>
                  <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-3">
                    <div>
                      <div className="text-slate-300">Metric: {alert.metric}</div>
                      <div className="text-slate-300">Value: {alert.value}</div>
                      <div className="text-slate-300">Change: {alert.change}</div>
                    </div>
                    <div>
                      <div className="text-slate-300">Impact: {alert.impact}</div>
                      {alert.workflow && <div className="text-slate-300">Workflow: {alert.workflow}</div>}
                      {alert.segment && <div className="text-slate-300">Segment: {alert.segment}</div>}
                      {alert.stage && <div className="text-slate-300">Stage: {alert.stage}</div>}
                    </div>
                  </div>
                  <div className="text-slate-300 text-xs">
                    <strong>Action:</strong> {alert.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}