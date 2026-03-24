// Business Continuity Intelligence Center - Disaster Recovery & Crisis Management Analytics
import { useState, useEffect } from 'react';
import { AlertTriangle, Shield, Activity, Clock, Users, BarChart3, CheckCircle, Target, Settings, Zap, Eye, TrendingUp } from 'lucide-react';

export default function BusinessContinuityCenter() {
  const [bcpData, setBcpData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    continuityOverview: {
      overallReadiness: 92.4,
      activePlans: 47,
      totalPlans: 52,
      criticalProcesses: 234,
      protectedProcesses: 216,
      rto: 2.3,
      rpo: 0.8,
      lastDrillDate: '2026-02-28',
      nextDrillDate: '2026-04-15',
      incidentsYtd: 8,
      recoveriesSuccessful: 7,
      avgRecoveryTime: 3.7,
      businessImpactScore: 15.6
    },
    criticalProcesses: [
      {
        process: 'E-commerce Platform',
        tier: 'TIER_1',
        rto: '15 minutes',
        rpo: '30 seconds',
        readinessScore: 97.8,
        lastTested: '2026-03-10',
        status: 'OPERATIONAL',
        dependencies: ['Payment Gateway', 'Inventory System', 'CDN'],
        backupStatus: 'CURRENT',
        drStatus: 'STANDBY_READY',
        impact: 'CRITICAL',
        priority: 'HIGHEST',
        owner: 'IT Operations',
        alternativeSite: 'AWS US-East',
        automatedFailover: true,
        estimatedLoss: 125000,
        customerImpact: 'HIGH'
      },
      {
        process: 'Customer Support',
        tier: 'TIER_1',
        rto: '30 minutes',
        rpo: '5 minutes',
        readinessScore: 94.2,
        lastTested: '2026-03-05',
        status: 'OPERATIONAL',
        dependencies: ['CRM System', 'Phone System', 'Knowledge Base'],
        backupStatus: 'CURRENT',
        drStatus: 'STANDBY_READY',
        impact: 'MAJOR',
        priority: 'HIGH',
        owner: 'Customer Operations',
        alternativeSite: 'Cloud Contact Center',
        automatedFailover: false,
        estimatedLoss: 45000,
        customerImpact: 'HIGH'
      },
      {
        process: 'Financial Reporting',
        tier: 'TIER_2',
        rto: '4 hours',
        rpo: '15 minutes',
        readinessScore: 89.6,
        lastTested: '2026-02-20',
        status: 'OPERATIONAL',
        dependencies: ['ERP System', 'Database', 'Reporting Tools'],
        backupStatus: 'CURRENT',
        drStatus: 'COLD_STANDBY',
        impact: 'MODERATE',
        priority: 'MEDIUM',
        owner: 'Finance Team',
        alternativeSite: 'Secondary Data Center',
        automatedFailover: false,
        estimatedLoss: 15000,
        customerImpact: 'LOW'
      },
      {
        process: 'Manufacturing Line A',
        tier: 'TIER_1',
        rto: '2 hours',
        rpo: '10 minutes',
        readinessScore: 91.3,
        lastTested: '2026-03-01',
        status: 'OPERATIONAL',
        dependencies: ['SCADA System', 'MES', 'Quality Systems'],
        backupStatus: 'CURRENT',
        drStatus: 'WARM_STANDBY',
        impact: 'CRITICAL',
        priority: 'HIGHEST',
        owner: 'Manufacturing',
        alternativeSite: 'Backup Production Facility',
        automatedFailover: true,
        estimatedLoss: 89000,
        customerImpact: 'MEDIUM'
      },
      {
        process: 'HR Systems',
        tier: 'TIER_3',
        rto: '24 hours',
        rpo: '1 hour',
        readinessScore: 85.7,
        lastTested: '2026-02-15',
        status: 'OPERATIONAL',
        dependencies: ['HRIS', 'Payroll System', 'Time Tracking'],
        backupStatus: 'CURRENT',
        drStatus: 'COLD_STANDBY',
        impact: 'MINOR',
        priority: 'LOW',
        owner: 'Human Resources',
        alternativeSite: 'Cloud HR Platform',
        automatedFailover: false,
        estimatedLoss: 5000,
        customerImpact: 'NONE'
      }
    ],
    drillResults: [
      {
        drillName: 'Q1 2026 Full DR Exercise',
        date: '2026-02-28',
        type: 'FULL_SCALE',
        duration: '6 hours',
        scope: 'All Tier 1 & 2 Processes',
        participants: 45,
        objectives: ['Test complete failover', 'Validate communications', 'Assess recovery times'],
        results: {
          overallScore: 87.3,
          rtoAchieved: 78,
          communicationEffectiveness: 92.1,
          processRecovery: 84.6,
          dataIntegrity: 95.2,
          issuesIdentified: 12,
          criticalIssues: 2
        },
        findings: [
          'Database failover took 23% longer than target',
          'Communication tree needs updating for remote staff',
          'Backup generator test successful',
          'Network connectivity restored within RTO'
        ],
        actionItems: [
          'Update database failover procedures',
          'Revise communication protocols',
          'Schedule additional network redundancy testing',
          'Review vendor SLAs for cloud services'
        ],
        nextDrill: '2026-05-30',
        status: 'COMPLETED'
      },
      {
        drillName: 'Cybersecurity Incident Response',
        date: '2026-03-10',
        type: 'TABLETOP',
        duration: '4 hours',
        scope: 'IT Security & Management',
        participants: 18,
        objectives: ['Test incident response plan', 'Evaluate communication', 'Assess decision making'],
        results: {
          overallScore: 91.7,
          rtoAchieved: 89,
          communicationEffectiveness: 94.3,
          processRecovery: 88.9,
          dataIntegrity: 96.1,
          issuesIdentified: 6,
          criticalIssues: 1
        },
        findings: [
          'Incident escalation procedures effective',
          'External communication plan needs refinement',
          'Technical response team well-coordinated',
          'Legal notification timeline unclear'
        ],
        actionItems: [
          'Update external communication templates',
          'Clarify legal notification requirements',
          'Schedule follow-up technical drill',
          'Review cyber insurance coverage'
        ],
        nextDrill: '2026-06-15',
        status: 'COMPLETED'
      },
      {
        drillName: 'Supply Chain Disruption',
        date: '2026-01-25',
        type: 'FUNCTIONAL',
        duration: '3 hours',
        scope: 'Operations & Procurement',
        participants: 22,
        objectives: ['Test supplier contingency', 'Validate inventory protocols', 'Assess impact'],
        results: {
          overallScore: 83.4,
          rtoAchieved: 75,
          communicationEffectiveness: 87.6,
          processRecovery: 81.2,
          dataIntegrity: 89.8,
          issuesIdentified: 15,
          criticalIssues: 3
        },
        findings: [
          'Alternative supplier list outdated',
          'Inventory tracking system performed well',
          'Cross-functional coordination needs improvement',
          'Customer notification process delayed'
        ],
        actionItems: [
          'Update supplier contact database',
          'Enhance cross-team communication protocols',
          'Automate customer notification system',
          'Review inventory buffer levels'
        ],
        nextDrill: '2026-04-20',
        status: 'ACTION_PENDING'
      }
    ],
    incidentHistory: [
      {
        incident: 'Data Center Power Outage',
        date: '2026-03-12',
        category: 'INFRASTRUCTURE',
        severity: 'HIGH',
        duration: '2.5 hours',
        impact: 'E-commerce platform offline, customer support degraded',
        rtoTarget: '15 minutes',
        rtoActual: '18 minutes',
        rpoTarget: '30 seconds',
        rpoActual: '45 seconds',
        causedBy: 'Primary UPS failure during maintenance',
        response: 'Automatic failover to AWS, manual customer service rerouting',
        lessonsLearned: ['UPS maintenance procedures need revision', 'Faster manual failover training required'],
        preventiveMeasures: ['Enhanced UPS monitoring', 'Backup UPS installation', 'Staff cross-training'],
        estimatedLoss: 78000,
        status: 'CLOSED'
      },
      {
        incident: 'Ransomware Attack Attempt',
        date: '2026-02-18',
        category: 'CYBERSECURITY',
        severity: 'MEDIUM',
        duration: '1.2 hours',
        impact: 'Email system quarantined, file shares isolated',
        rtoTarget: '30 minutes',
        rtoActual: '25 minutes',
        rpoTarget: '5 minutes',
        rpoActual: '3 minutes',
        causedBy: 'Phishing email with malicious attachment',
        response: 'Immediate isolation, forensic analysis, system restoration from backup',
        lessonsLearned: ['Endpoint detection working effectively', 'Rapid response team coordination excellent'],
        preventiveMeasures: ['Enhanced email filtering', 'Additional security awareness training', 'Zero-trust implementation'],
        estimatedLoss: 12000,
        status: 'CLOSED'
      },
      {
        incident: 'Third-party API Failure',
        date: '2026-01-30',
        category: 'EXTERNAL',
        severity: 'MEDIUM',
        duration: '4.1 hours',
        impact: 'Payment processing unavailable, order fulfillment delayed',
        rtoTarget: '15 minutes',
        rtoActual: '247 minutes',
        rpoTarget: '30 seconds',
        rpoActual: '0 seconds',
        causedBy: 'Payment provider regional outage',
        response: 'Manual order processing, alternative payment method activation',
        lessonsLearned: ['Need multiple payment processor redundancy', 'Manual processes too slow'],
        preventiveMeasures: ['Secondary payment processor integration', 'Automated failover for payments', 'Improved vendor SLAs'],
        estimatedLoss: 156000,
        status: 'CLOSED'
      }
    ],
    riskAssessment: [
      {
        threat: 'Natural Disaster',
        probability: 'LOW',
        impact: 'CATASTROPHIC',
        riskScore: 6.8,
        affectedProcesses: ['All operations at primary site'],
        mitigationStatus: 'ADEQUATE',
        controls: ['Geographic distribution', 'Cloud backup', 'Remote work capability'],
        gaps: ['Limited cold site capacity', 'Incomplete data replication'],
        recommendations: ['Expand DR site capacity', 'Implement real-time data sync'],
        lastReview: '2026-02-01',
        nextReview: '2026-08-01'
      },
      {
        threat: 'Cyber Attack',
        probability: 'HIGH',
        impact: 'MAJOR',
        riskScore: 8.4,
        affectedProcesses: ['All IT systems', 'Customer data', 'Operations'],
        mitigationStatus: 'STRONG',
        controls: ['Multi-layer security', 'Backup systems', 'Incident response team'],
        gaps: ['Legacy system vulnerabilities', 'Third-party security'],
        recommendations: ['Legacy system modernization', 'Enhanced vendor security requirements'],
        lastReview: '2026-03-01',
        nextReview: '2026-06-01'
      },
      {
        threat: 'Supply Chain Disruption',
        probability: 'MEDIUM',
        impact: 'MAJOR',
        riskScore: 7.2,
        affectedProcesses: ['Manufacturing', 'Product delivery', 'Inventory management'],
        mitigationStatus: 'MODERATE',
        controls: ['Multiple suppliers', 'Inventory buffers', 'Alternative sourcing'],
        gaps: ['Single-source critical components', 'Limited supplier monitoring'],
        recommendations: ['Diversify critical suppliers', 'Implement supplier risk monitoring'],
        lastReview: '2026-01-15',
        nextReview: '2026-07-15'
      },
      {
        threat: 'Key Personnel Loss',
        probability: 'MEDIUM',
        impact: 'MODERATE',
        riskScore: 5.6,
        affectedProcesses: ['Operations management', 'Technical expertise', 'Customer relationships'],
        mitigationStatus: 'ADEQUATE',
        controls: ['Cross-training', 'Documentation', 'Succession planning'],
        gaps: ['Limited technical depth', 'Incomplete knowledge transfer'],
        recommendations: ['Expand technical team', 'Enhance documentation standards'],
        lastReview: '2026-02-15',
        nextReview: '2026-08-15'
      }
    ],
    continuityAlerts: [
      {
        type: 'WARNING',
        category: 'Testing',
        message: 'Q2 2026 DR drill scheduled in 28 days - preparation phase should begin',
        process: 'All Tier 1 Processes',
        deadline: '2026-04-15',
        timestamp: '09:17',
        priority: 'MEDIUM',
        owner: 'BCP Coordinator',
        action: 'Begin drill planning and resource scheduling',
        impact: 'Missed testing could affect readiness certification',
        urgency: 'MEDIUM'
      },
      {
        type: 'CRITICAL',
        category: 'RTO Breach',
        message: 'Manufacturing Line A exceeded RTO target during last incident (+23% over target)',
        process: 'Manufacturing Line A',
        rtoTarget: '2 hours',
        rtoActual: '2.46 hours',
        timestamp: '09:16',
        priority: 'HIGH',
        owner: 'Manufacturing Manager',
        action: 'Review and update recovery procedures, additional training required',
        impact: 'Production delays affecting customer delivery commitments',
        urgency: 'HIGH'
      },
      {
        type: 'INFO',
        category: 'Success',
        message: 'E-commerce platform maintained 99.8% availability this quarter - exceeding target',
        process: 'E-commerce Platform',
        availabilityTarget: '99.5%',
        availabilityActual: '99.8%',
        timestamp: '09:15',
        priority: 'LOW',
        owner: 'IT Operations',
        action: 'Document best practices and share with other teams',
        impact: 'Positive customer experience and revenue protection',
        urgency: 'LOW'
      },
      {
        type: 'HIGH',
        category: 'Compliance',
        message: 'BCM audit scheduled for next month - 3 action items still pending completion',
        process: 'Business Continuity Program',
        auditDate: '2026-04-20',
        pendingItems: 3,
        timestamp: '09:14',
        priority: 'HIGH',
        owner: 'Compliance Team',
        action: 'Complete outstanding action items: supplier assessment, communication update, testing documentation',
        impact: 'Potential compliance findings affecting certification',
        urgency: 'HIGH'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBcpData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        continuityOverview: {
          ...prev.continuityOverview,
          overallReadiness: Math.max(90.0, Math.min(95.0, prev.continuityOverview.overallReadiness + (Math.random() - 0.5) * 0.6)),
          protectedProcesses: Math.max(214, Math.min(218, prev.continuityOverview.protectedProcesses + Math.floor((Math.random() - 0.5) * 2))),
          avgRecoveryTime: Math.max(3.2, Math.min(4.2, prev.continuityOverview.avgRecoveryTime + (Math.random() - 0.5) * 0.2))
        }
      }));
    }, 52000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getTierColor = (tier) => {
    switch (tier) {
      case 'TIER_1': return 'text-red-400 bg-red-400/20';
      case 'TIER_2': return 'text-yellow-400 bg-yellow-400/20';
      case 'TIER_3': return 'text-green-400 bg-green-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'DEGRADED': return 'text-yellow-400 bg-yellow-400/20';
      case 'DOWN': return 'text-red-400 bg-red-400/20';
      case 'MAINTENANCE': return 'text-blue-400 bg-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getDrStatusColor = (drStatus) => {
    switch (drStatus) {
      case 'STANDBY_READY': return 'text-green-400 bg-green-400/20';
      case 'WARM_STANDBY': return 'text-yellow-400 bg-yellow-400/20';
      case 'COLD_STANDBY': return 'text-blue-400 bg-blue-400/20';
      case 'NOT_READY': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-500 bg-red-500/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'CATASTROPHIC': return 'text-red-500 bg-red-500/20';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'MAJOR': return 'text-orange-400 bg-orange-400/20';
      case 'MODERATE': return 'text-yellow-400 bg-yellow-400/20';
      case 'MINOR': return 'text-green-400 bg-green-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getProbabilityColor = (probability) => {
    switch (probability) {
      case 'VERY_HIGH': return 'text-red-500 bg-red-500/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'VERY_LOW': return 'text-green-500 bg-green-500/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'HIGH': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-blue-400';
    }
  };

  const getReadinessColor = (score) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 85) return 'text-blue-400';
    if (score >= 75) return 'text-yellow-400';
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

  const formatCurrency = (amount) => `$${formatNumber(amount)}`;
  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-orange-900 via-slate-900 to-red-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-orange-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Business Continuity Intelligence Center</h1>
              <p className="text-orange-300">Disaster recovery & crisis management analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-orange-400">{bcpData.currentTime}</div>
            <div className="text-orange-300">Continuity Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Business Continuity Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Readiness
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getReadinessColor(bcpData.continuityOverview.overallReadiness)}`}>
              {formatPercentage(bcpData.continuityOverview.overallReadiness)}
            </div>
            <div className="text-green-300 text-sm">Overall</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-blue-400 mr-2" />
                Plans
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{bcpData.continuityOverview.activePlans}</div>
            <div className="text-blue-300 text-sm">{bcpData.continuityOverview.totalPlans} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-orange-400 mr-2" />
                RTO
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{bcpData.continuityOverview.rto.toFixed(1)}h</div>
            <div className="text-orange-300 text-sm">Avg Target</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-purple-400 mr-2" />
                RPO
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{bcpData.continuityOverview.rpo.toFixed(1)}h</div>
            <div className="text-purple-300 text-sm">Avg Target</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                Incidents
              </h3>
            </div>
            <div className="text-3xl font-bold text-red-400">{bcpData.continuityOverview.incidentsYtd}</div>
            <div className="text-red-300 text-sm">YTD</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                Recovery
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{bcpData.continuityOverview.avgRecoveryTime.toFixed(1)}h</div>
            <div className="text-cyan-300 text-sm">Avg Time</div>
          </div>
        </div>

        {/* Critical Processes */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Settings className="w-5 h-5 text-orange-400 mr-2" />
            Critical Process Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Process</th>
                  <th className="text-center p-3 text-slate-300">Tier</th>
                  <th className="text-center p-3 text-slate-300">RTO/RPO</th>
                  <th className="text-center p-3 text-slate-300">Readiness</th>
                  <th className="text-center p-3 text-slate-300">DR Status</th>
                  <th className="text-center p-3 text-slate-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {bcpData.criticalProcesses.map((process, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{process.process}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        Owner: {process.owner} • Loss: {formatCurrency(process.estimatedLoss)}/hour
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getTierColor(process.tier)}`}>
                        {process.tier.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-orange-400 text-sm">{process.rto}</div>
                      <div className="text-purple-400 text-xs">{process.rpo}</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${getReadinessColor(process.readinessScore)}`}>
                      {formatPercentage(process.readinessScore)}
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getDrStatusColor(process.drStatus)}`}>
                        {process.drStatus.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(process.status)}`}>
                        {process.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Drill Results & Incident History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              DR Drill Results
            </h3>
            <div className="space-y-4">
              {bcpData.drillResults.map((drill, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{drill.drillName}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400 text-xs">{drill.type.replace('_', ' ')}</span>
                      <span className={`text-sm font-bold ${getReadinessColor(drill.results.overallScore)}`}>
                        {formatPercentage(drill.results.overallScore)}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div className="text-slate-400">Date: {drill.date}</div>
                    <div className="text-slate-400">Duration: {drill.duration}</div>
                    <div className="text-slate-400">Participants: {drill.participants}</div>
                    <div className="text-slate-400">Issues: {drill.results.issuesIdentified} ({drill.results.criticalIssues} critical)</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div className="text-blue-400">RTO: {formatPercentage(drill.results.rtoAchieved)}</div>
                    <div className="text-green-400">Data: {formatPercentage(drill.results.dataIntegrity)}</div>
                    <div className="text-purple-400">Comm: {formatPercentage(drill.results.communicationEffectiveness)}</div>
                    <div className="text-orange-400">Recovery: {formatPercentage(drill.results.processRecovery)}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Key Findings:</strong> {drill.findings.slice(0, 2).join('; ')}{drill.findings.length > 2 ? '...' : ''}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Next Drill:</strong> {drill.nextDrill}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
              Recent Incident History
            </h3>
            <div className="space-y-4">
              {bcpData.incidentHistory.map((incident, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{incident.incident}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                      <span className="text-red-400 text-xs">{incident.duration}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div className="text-slate-400">Date: {incident.date}</div>
                    <div className="text-slate-400">Category: {incident.category}</div>
                    <div className="text-orange-400">RTO: {incident.rtoActual} (target: {incident.rtoTarget})</div>
                    <div className="text-purple-400">RPO: {incident.rpoActual} (target: {incident.rpoTarget})</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Impact:</strong> {incident.impact}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Cause:</strong> {incident.causedBy}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Response:</strong> {incident.response}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Loss:</strong> {formatCurrency(incident.estimatedLoss)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Assessment & BCP Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-purple-400 mr-2" />
              Business Impact Risk Assessment
            </h3>
            <div className="space-y-4">
              {bcpData.riskAssessment.map((risk, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{risk.threat}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getProbabilityColor(risk.probability)}`}>
                        {risk.probability}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getImpactColor(risk.impact)}`}>
                        {risk.impact}
                      </span>
                      <span className="text-orange-400 text-xs">{risk.riskScore.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Affected:</strong> {risk.affectedProcesses.join(', ')}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Controls:</strong> {risk.controls.join(', ')}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Gaps:</strong> {risk.gaps.join(', ')}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Status:</strong> {risk.mitigationStatus} • <strong>Next Review:</strong> {risk.nextReview}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              Business Continuity Alerts
            </h3>
            <div className="space-y-4">
              {bcpData.continuityAlerts.map((alert, index) => (
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
                  <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                    <div className="text-slate-300">Process: {alert.process}</div>
                    <div className="text-slate-300">Owner: {alert.owner}</div>
                    {alert.deadline && <div className="text-slate-300">Deadline: {alert.deadline}</div>}
                    {alert.rtoTarget && <div className="text-slate-300">Target: {alert.rtoTarget} → Actual: {alert.rtoActual}</div>}
                  </div>
                  <div className="text-slate-300 text-xs mb-2">
                    <strong>Action:</strong> {alert.action}
                  </div>
                  <div className="text-slate-300 text-xs">
                    <strong>Impact:</strong> {alert.impact}
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