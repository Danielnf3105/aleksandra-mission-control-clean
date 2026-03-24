// Process Intelligence & Automation Center - Workflow Optimization & Process Mining Analytics
import { useState, useEffect } from 'react';
import { Workflow, Zap, TrendingUp, Clock, Target, Activity, AlertTriangle, CheckCircle, BarChart3, Settings, Layers } from 'lucide-react';

export default function ProcessIntelligenceCenter() {
  const [piData, setPiData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    processOverview: {
      totalProcesses: 156,
      activeProcesses: 134,
      automatedProcesses: 89,
      avgCycleTime: 4.7,
      processEfficiency: 87.4,
      automationRate: 67.8,
      slaCompliance: 94.3,
      errorRate: 2.1,
      throughput: 2345,
      backlogSize: 78,
      resourceUtilization: 89.6,
      costSavings: 234567
    },
    processCategories: [
      {
        category: 'Customer Onboarding',
        processes: 12,
        avgCycleTime: 2.8,
        efficiency: 92.1,
        automation: 78.9,
        compliance: 96.4,
        throughput: 345,
        bottlenecks: ['Document Verification', 'Credit Check'],
        status: 'OPTIMIZED',
        priority: 'HIGH',
        savingsPotential: 45678,
        lastOptimized: '2026-02-15'
      },
      {
        category: 'Invoice Processing',
        processes: 8,
        avgCycleTime: 1.4,
        efficiency: 89.7,
        automation: 94.3,
        compliance: 98.7,
        throughput: 1234,
        bottlenecks: ['Manual Approval', 'Vendor Verification'],
        status: 'EXCELLENT',
        priority: 'MEDIUM',
        savingsPotential: 23456,
        lastOptimized: '2026-03-01'
      },
      {
        category: 'Order Fulfillment',
        processes: 18,
        avgCycleTime: 6.7,
        efficiency: 76.8,
        automation: 45.6,
        compliance: 89.2,
        throughput: 567,
        bottlenecks: ['Inventory Check', 'Shipping Coordination', 'Quality Control'],
        status: 'NEEDS_IMPROVEMENT',
        priority: 'CRITICAL',
        savingsPotential: 89012,
        lastOptimized: '2025-12-10'
      },
      {
        category: 'Employee Requests',
        processes: 25,
        avgCycleTime: 3.2,
        efficiency: 82.4,
        automation: 67.9,
        compliance: 91.5,
        throughput: 789,
        bottlenecks: ['Manager Approval', 'HR Review'],
        status: 'GOOD',
        priority: 'MEDIUM',
        savingsPotential: 34567,
        lastOptimized: '2026-01-20'
      },
      {
        category: 'Financial Close',
        processes: 15,
        avgCycleTime: 12.4,
        efficiency: 69.3,
        automation: 34.7,
        compliance: 95.8,
        throughput: 123,
        bottlenecks: ['Data Reconciliation', 'Multi-level Approval', 'Audit Trail'],
        status: 'UNDERPERFORMING',
        priority: 'CRITICAL',
        savingsPotential: 67890,
        lastOptimized: '2025-11-05'
      }
    ],
    automationMetrics: [
      {
        process: 'Data Entry Automation',
        type: 'RPA',
        deployment: '2026-01-15',
        efficiency: 94.7,
        timeSaved: 234,
        costSaved: 23456,
        errorReduction: 87.3,
        volumeProcessed: 12345,
        availability: 99.2,
        roi: 234.5,
        status: 'ACTIVE',
        nextReview: '2026-04-15'
      },
      {
        process: 'Document Classification',
        type: 'AI/ML',
        deployment: '2026-02-01',
        efficiency: 89.3,
        timeSaved: 156,
        costSaved: 15678,
        errorReduction: 76.4,
        volumeProcessed: 8901,
        availability: 97.8,
        roi: 178.9,
        status: 'ACTIVE',
        nextReview: '2026-05-01'
      },
      {
        process: 'Approval Workflow',
        type: 'Workflow',
        deployment: '2025-11-20',
        efficiency: 76.8,
        timeSaved: 89,
        costSaved: 8901,
        errorReduction: 45.6,
        volumeProcessed: 4567,
        availability: 94.5,
        roi: 123.4,
        status: 'NEEDS_UPDATE',
        nextReview: '2026-03-20'
      },
      {
        process: 'Report Generation',
        type: 'Scheduled',
        deployment: '2026-03-01',
        efficiency: 98.4,
        timeSaved: 345,
        costSaved: 34567,
        errorReduction: 92.1,
        volumeProcessed: 2345,
        availability: 99.8,
        roi: 445.6,
        status: 'EXCELLENT',
        nextReview: '2026-06-01'
      }
    ],
    processBottlenecks: [
      {
        process: 'Order Fulfillment',
        bottleneck: 'Inventory Check',
        impact: 'HIGH',
        frequency: 67.8,
        avgDelay: 2.4,
        costImpact: 45678,
        affectedVolume: 234,
        rootCause: 'Manual inventory verification, system integration gaps',
        solution: 'Real-time inventory API, automated stock validation',
        effort: 'MEDIUM',
        timeline: '6 weeks'
      },
      {
        process: 'Financial Close',
        bottleneck: 'Data Reconciliation',
        impact: 'HIGH',
        frequency: 89.3,
        avgDelay: 4.7,
        costImpact: 78901,
        affectedVolume: 56,
        rootCause: 'Multiple data sources, manual comparison processes',
        solution: 'Automated data reconciliation tool, single source of truth',
        effort: 'HIGH',
        timeline: '12 weeks'
      },
      {
        process: 'Customer Onboarding',
        bottleneck: 'Document Verification',
        impact: 'MEDIUM',
        frequency: 45.6,
        avgDelay: 1.8,
        costImpact: 23456,
        affectedVolume: 123,
        rootCause: 'Manual document review, compliance checks',
        solution: 'OCR + AI document validation, automated compliance scoring',
        effort: 'MEDIUM',
        timeline: '8 weeks'
      },
      {
        process: 'Employee Requests',
        bottleneck: 'Manager Approval',
        impact: 'MEDIUM',
        frequency: 34.7,
        avgDelay: 1.2,
        costImpact: 12345,
        affectedVolume: 345,
        rootCause: 'Email-based approval, manager availability',
        solution: 'Mobile approval app, delegation rules, auto-approval thresholds',
        effort: 'LOW',
        timeline: '4 weeks'
      }
    ],
    processPerformance: [
      {
        period: 'Last 30 Days',
        totalVolume: 23456,
        avgCycleTime: 4.7,
        efficiency: 87.4,
        slaCompliance: 94.3,
        automation: 67.8,
        costPerProcess: 23.45,
        errorRate: 2.1,
        throughputTrend: '+12.4%',
        efficiencyTrend: '+5.6%',
        complianceTrend: '+2.1%'
      },
      {
        period: 'Last 90 Days',
        totalVolume: 67890,
        avgCycleTime: 5.2,
        efficiency: 82.7,
        slaCompliance: 91.8,
        automation: 62.3,
        costPerProcess: 26.78,
        errorRate: 2.8,
        throughputTrend: '+8.9%',
        efficiencyTrend: '+7.3%',
        complianceTrend: '+1.5%'
      },
      {
        period: 'Last 12 Months',
        totalVolume: 234567,
        avgCycleTime: 6.8,
        efficiency: 74.2,
        slaCompliance: 87.6,
        automation: 43.5,
        costPerProcess: 34.56,
        errorRate: 4.2,
        throughputTrend: '+23.7%',
        efficiencyTrend: '+18.4%',
        complianceTrend: '+12.8%'
      }
    ],
    processInnovation: [
      {
        initiative: 'AI-Powered Process Discovery',
        stage: 'Pilot',
        progress: 67.8,
        timeline: '8 weeks',
        investment: 89012,
        expectedRoi: 234.5,
        benefits: ['Automated process mapping', 'Hidden bottleneck detection', 'Optimization recommendations'],
        risks: ['Data quality dependency', 'Change management'],
        nextMilestone: 'Production deployment',
        owner: 'Process Excellence Team'
      },
      {
        initiative: 'Intelligent Document Processing',
        stage: 'Implementation',
        progress: 89.4,
        timeline: '4 weeks',
        investment: 45678,
        expectedRoi: 345.6,
        benefits: ['99% accuracy', '80% time reduction', 'Compliance automation'],
        risks: ['Integration complexity', 'Training requirements'],
        nextMilestone: 'Full rollout',
        owner: 'Digital Innovation Lab'
      },
      {
        initiative: 'Low-Code Process Builder',
        stage: 'Design',
        progress: 23.4,
        timeline: '16 weeks',
        investment: 123456,
        expectedRoi: 456.7,
        benefits: ['Citizen developer enablement', 'Rapid process creation', 'Governance integration'],
        risks: ['Security concerns', 'Governance complexity'],
        nextMilestone: 'Prototype completion',
        owner: 'IT Architecture Team'
      }
    ],
    processAlerts: [
      {
        type: 'CRITICAL',
        category: 'Process Performance',
        message: 'Financial Close process efficiency dropped to 69.3% - 25.7% below target',
        metric: 'Process Efficiency',
        value: '69.3%',
        change: '-25.7% below target',
        impact: 'HIGH',
        timestamp: '08:51',
        process: 'Financial Close',
        affectedTransactions: 56,
        recommendation: 'Immediate process review, automation implementation, bottleneck analysis',
        urgency: 'CRITICAL',
        escalation: 'PROCESS_OWNER'
      },
      {
        type: 'WARNING',
        category: 'Automation Coverage',
        message: 'Order Fulfillment automation at 45.6% - significantly below 75% target',
        metric: 'Automation Rate',
        value: '45.6%',
        change: '-29.4% below target',
        impact: 'MODERATE',
        timestamp: '08:50',
        process: 'Order Fulfillment',
        savingsPotential: '$89K',
        recommendation: 'Prioritize inventory automation, workflow optimization',
        urgency: 'HIGH',
        technicalAction: 'AUTOMATION_ROADMAP'
      },
      {
        type: 'SUCCESS',
        category: 'ROI Achievement',
        message: 'Report Generation automation achieved 445.6% ROI - exceeding 200% target',
        metric: 'Automation ROI',
        value: '445.6%',
        change: '+245.6% above target',
        impact: 'POSITIVE',
        timestamp: '08:49',
        process: 'Report Generation',
        costSaved: '$34.6K',
        recommendation: 'Scale successful automation pattern to similar processes',
        urgency: 'LOW',
        opportunity: 'AUTOMATION_SCALING'
      },
      {
        type: 'INFO',
        category: 'Process Innovation',
        message: 'Intelligent Document Processing at 89.4% completion - 4 weeks to production',
        metric: 'Implementation Progress',
        value: '89.4%',
        change: 'On track for completion',
        impact: 'POSITIVE',
        timestamp: '08:48',
        initiative: 'Intelligent Document Processing',
        expectedBenefits: '99% accuracy, 80% time reduction',
        recommendation: 'Prepare change management and training materials',
        urgency: 'MEDIUM',
        opportunity: 'INNOVATION_DELIVERY'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPiData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        processOverview: {
          ...prev.processOverview,
          throughput: Math.max(2340, Math.min(2350, prev.processOverview.throughput + Math.floor((Math.random() - 0.5) * 8))),
          processEfficiency: Math.max(86.0, Math.min(89.0, prev.processOverview.processEfficiency + (Math.random() - 0.5) * 0.6)),
          backlogSize: Math.max(75, Math.min(85, prev.processOverview.backlogSize + Math.floor((Math.random() - 0.5) * 4)))
        }
      }));
    }, 42000);

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'OPTIMIZED': return 'text-blue-400 bg-blue-400/20';
      case 'GOOD': return 'text-cyan-400 bg-cyan-400/20';
      case 'NEEDS_IMPROVEMENT': return 'text-yellow-400 bg-yellow-400/20';
      case 'UNDERPERFORMING': return 'text-red-400 bg-red-400/20';
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

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getAutomationStatusColor = (status) => {
    switch (status) {
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20';
      case 'NEEDS_UPDATE': return 'text-yellow-400 bg-yellow-400/20';
      case 'INACTIVE': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStageColor = (stage) => {
    switch (stage) {
      case 'Production': return 'text-green-400 bg-green-400/20';
      case 'Implementation': return 'text-blue-400 bg-blue-400/20';
      case 'Pilot': return 'text-yellow-400 bg-yellow-400/20';
      case 'Design': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
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

  const getScoreColor = (score, good = 70, excellent = 85) => {
    if (score >= excellent) return 'text-green-400';
    if (score >= good) return 'text-blue-400';
    if (score >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
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
    <div className="h-full bg-gradient-to-br from-amber-900 via-slate-900 to-yellow-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-amber-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl">
              <Workflow className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Process Intelligence & Automation Center</h1>
              <p className="text-amber-300">Workflow optimization & process mining analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-amber-400">{piData.currentTime}</div>
            <div className="text-amber-300">PI Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Process Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Workflow className="w-5 h-5 text-amber-400 mr-2" />
                Processes
              </h3>
            </div>
            <div className="text-3xl font-bold text-amber-400">{piData.processOverview.activeProcesses}</div>
            <div className="text-amber-300 text-sm">{piData.processOverview.totalProcesses} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Efficiency
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(piData.processOverview.processEfficiency, 75, 85)}`}>
              {formatPercentage(piData.processOverview.processEfficiency)}
            </div>
            <div className="text-green-300 text-sm">Overall</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-blue-400 mr-2" />
                Automation
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(piData.processOverview.automationRate, 60, 80)}`}>
              {formatPercentage(piData.processOverview.automationRate)}
            </div>
            <div className="text-blue-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                SLA
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(piData.processOverview.slaCompliance, 85, 95)}`}>
              {formatPercentage(piData.processOverview.slaCompliance)}
            </div>
            <div className="text-purple-300 text-sm">Compliance</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-orange-400 mr-2" />
                Throughput
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(piData.processOverview.throughput)}</div>
            <div className="text-orange-300 text-sm">Per Day</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-cyan-400 mr-2" />
                Cycle Time
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{piData.processOverview.avgCycleTime.toFixed(1)}</div>
            <div className="text-cyan-300 text-sm">Hours Avg</div>
          </div>
        </div>

        {/* Process Categories */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Layers className="w-5 h-5 text-amber-400 mr-2" />
            Process Category Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Processes</th>
                  <th className="text-center p-3 text-slate-300">Efficiency</th>
                  <th className="text-center p-3 text-slate-300">Automation</th>
                  <th className="text-center p-3 text-slate-300">Cycle Time</th>
                  <th className="text-center p-3 text-slate-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {piData.processCategories.map((category, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{category.category}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        Savings: {formatCurrency(category.savingsPotential)} • Last Optimized: {category.lastOptimized}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-cyan-400 font-medium">{category.processes}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(category.throughput)}/day</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(category.efficiency, 75, 85)}`}>
                      {formatPercentage(category.efficiency)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(category.automation, 60, 80)}`}>
                      {formatPercentage(category.automation)}
                    </td>
                    <td className="p-3 text-center text-orange-400">{category.avgCycleTime.toFixed(1)}h</td>
                    <td className="p-3 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs ${getStatusColor(category.status)}`}>
                          {category.status.replace('_', ' ')}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(category.priority)}`}>
                          {category.priority}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Automation Metrics & Process Bottlenecks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-blue-400 mr-2" />
              Automation Performance Intelligence
            </h3>
            <div className="space-y-4">
              {piData.automationMetrics.map((automation, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{automation.process}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getAutomationStatusColor(automation.status)}`}>
                        {automation.status.replace('_', ' ')}
                      </span>
                      <span className="text-green-400 text-xs">{formatPercentage(automation.roi)} ROI</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${getScoreColor(automation.efficiency, 80, 90)}`}>Efficiency: {formatPercentage(automation.efficiency)}</div>
                    <div className="text-green-400">Saved: {formatCurrency(automation.costSaved)}</div>
                    <div className="text-purple-400">Volume: {formatNumber(automation.volumeProcessed)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Time Saved: {automation.timeSaved}h</div>
                    <div className="text-yellow-400">Availability: {formatPercentage(automation.availability)}</div>
                    <div className="text-blue-400">Type: {automation.type}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Deployed:</strong> {automation.deployment} • <strong>Error Reduction:</strong> {formatPercentage(automation.errorReduction)} • <strong>Next Review:</strong> {automation.nextReview}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
              Process Bottleneck Analysis
            </h3>
            <div className="space-y-4">
              {piData.processBottlenecks.map((bottleneck, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{bottleneck.process}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getImpactColor(bottleneck.impact)}`}>
                        {bottleneck.impact} Impact
                      </span>
                      <span className="text-red-400 text-xs">{formatPercentage(bottleneck.frequency)} freq</span>
                    </div>
                  </div>
                  <div className="text-slate-300 text-sm mb-2">
                    <strong>Bottleneck:</strong> {bottleneck.bottleneck}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Delay: {bottleneck.avgDelay.toFixed(1)}h avg</div>
                    <div className="text-red-400">Cost: {formatCurrency(bottleneck.costImpact)}</div>
                    <div className="text-purple-400">Volume: {bottleneck.affectedVolume}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Root Cause:</strong> {bottleneck.rootCause}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Solution:</strong> {bottleneck.solution}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Effort:</strong> {bottleneck.effort} • <strong>Timeline:</strong> {bottleneck.timeline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Innovation & Performance Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-purple-400 mr-2" />
              Process Innovation Pipeline
            </h3>
            <div className="space-y-4">
              {piData.processInnovation.map((innovation, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{innovation.initiative}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStageColor(innovation.stage)}`}>
                        {innovation.stage}
                      </span>
                      <span className={`text-sm ${getScoreColor(innovation.progress, 50, 80)}`}>
                        {formatPercentage(innovation.progress)}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Investment: {formatCurrency(innovation.investment)}</div>
                    <div className="text-purple-400">ROI: {formatPercentage(innovation.expectedRoi)}</div>
                    <div className="text-orange-400">Timeline: {innovation.timeline}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Benefits:</strong> {innovation.benefits.slice(0, 2).join(', ')}{innovation.benefits.length > 2 ? '...' : ''}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Risks:</strong> {innovation.risks.join(', ')}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Owner:</strong> {innovation.owner} • <strong>Next:</strong> {innovation.nextMilestone}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Process Performance Trends
            </h3>
            <div className="space-y-4">
              {piData.processPerformance.map((period, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{period.period}</span>
                    <span className="text-cyan-400 text-xs">{formatNumber(period.totalVolume)} volume</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${getScoreColor(period.efficiency, 70, 85)}`}>Efficiency: {formatPercentage(period.efficiency)}</div>
                    <div className="text-orange-400">Cycle: {period.avgCycleTime.toFixed(1)}h</div>
                    <div className={`${getScoreColor(period.slaCompliance, 85, 95)}`}>SLA: {formatPercentage(period.slaCompliance)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Auto: {formatPercentage(period.automation)}</div>
                    <div className="text-purple-400">Cost: ${period.costPerProcess.toFixed(2)}</div>
                    <div className="text-red-400">Errors: {formatPercentage(period.errorRate)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-green-400">Throughput: {period.throughputTrend}</div>
                    <div className="text-cyan-400">Efficiency: {period.efficiencyTrend}</div>
                    <div className="text-yellow-400">Compliance: {period.complianceTrend}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Process Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {piData.processAlerts.map((alert, index) => (
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
                    {alert.process && <div className="text-slate-300">Process: {alert.process}</div>}
                    {alert.initiative && <div className="text-slate-300">Initiative: {alert.initiative}</div>}
                    {alert.savingsPotential && <div className="text-slate-300">Potential: {alert.savingsPotential}</div>}
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
  );
}