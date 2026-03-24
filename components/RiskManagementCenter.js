// Risk Management Intelligence Center - Enterprise Risk Assessment & Compliance Analytics
import { useState, useEffect } from 'react';
import { Shield, AlertTriangle, TrendingUp, Target, Users, BarChart3, Eye, CheckCircle, Settings, Clock, Activity, AlertCircle } from 'lucide-react';

export default function RiskManagementCenter() {
  const [riskData, setRiskData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    riskOverview: {
      totalRisks: 247,
      activeRisks: 189,
      criticalRisks: 12,
      riskScore: 7.2,
      mitigationRate: 78.6,
      complianceScore: 94.7,
      incidentsThisMonth: 3,
      avgResolutionTime: 4.7,
      riskExposure: 45670000,
      mitigatedExposure: 32890000,
      residualRisk: 12780000,
      controlEffectiveness: 89.4
    },
    riskCategories: [
      {
        category: 'Cybersecurity',
        riskLevel: 'HIGH',
        activeRisks: 34,
        criticalRisks: 5,
        riskScore: 8.4,
        exposure: 15600000,
        mitigatedExposure: 11200000,
        controls: 156,
        effectiveness: 87.3,
        incidents: 2,
        trend: 'INCREASING',
        topRisks: ['Data Breach', 'Ransomware Attack', 'Insider Threat'],
        mitigation: 'Enhanced monitoring, Zero-trust architecture, Employee training',
        complianceGaps: ['SOC 2 Type II', 'ISO 27001'],
        nextReview: '2026-03-25'
      },
      {
        category: 'Operational',
        riskLevel: 'MEDIUM',
        activeRisks: 67,
        criticalRisks: 2,
        riskScore: 6.8,
        exposure: 8900000,
        mitigatedExposure: 7100000,
        controls: 234,
        effectiveness: 92.1,
        incidents: 1,
        trend: 'STABLE',
        topRisks: ['Supply Chain Disruption', 'System Failure', 'Process Breakdown'],
        mitigation: 'Backup suppliers, Redundant systems, Process automation',
        complianceGaps: ['Business Continuity Plan'],
        nextReview: '2026-04-01'
      },
      {
        category: 'Financial',
        riskLevel: 'MEDIUM',
        activeRisks: 23,
        criticalRisks: 1,
        riskScore: 5.9,
        exposure: 6700000,
        mitigatedExposure: 5400000,
        controls: 89,
        effectiveness: 94.6,
        incidents: 0,
        trend: 'DECREASING',
        topRisks: ['Credit Risk', 'Market Volatility', 'Liquidity Risk'],
        mitigation: 'Diversified portfolio, Hedging strategies, Cash reserves',
        complianceGaps: [],
        nextReview: '2026-03-30'
      },
      {
        category: 'Regulatory',
        riskLevel: 'LOW',
        activeRisks: 45,
        criticalRisks: 3,
        riskScore: 4.2,
        exposure: 3400000,
        mitigatedExposure: 2800000,
        controls: 178,
        effectiveness: 96.8,
        incidents: 0,
        trend: 'STABLE',
        topRisks: ['Regulatory Change', 'Compliance Violation', 'Audit Finding'],
        mitigation: 'Regulatory monitoring, Compliance training, Internal audits',
        complianceGaps: ['GDPR Documentation'],
        nextReview: '2026-04-15'
      },
      {
        category: 'Strategic',
        riskLevel: 'MEDIUM',
        activeRisks: 20,
        criticalRisks: 1,
        riskScore: 6.3,
        exposure: 11000000,
        mitigatedExposure: 6400000,
        controls: 67,
        effectiveness: 85.7,
        incidents: 0,
        trend: 'STABLE',
        topRisks: ['Market Competition', 'Technology Disruption', 'Key Personnel Loss'],
        mitigation: 'Competitive intelligence, Innovation investment, Succession planning',
        complianceGaps: ['Strategic Risk Framework'],
        nextReview: '2026-04-10'
      }
    ],
    riskMatrix: [
      { 
        impact: 'CATASTROPHIC',
        probability: 'VERY_HIGH',
        risks: 2,
        exposure: 8900000,
        level: 'EXTREME',
        action: 'IMMEDIATE',
        examples: ['Major Data Breach', 'System-wide Failure']
      },
      { 
        impact: 'CATASTROPHIC',
        probability: 'HIGH',
        risks: 5,
        exposure: 12300000,
        level: 'HIGH',
        action: 'URGENT',
        examples: ['Ransomware Attack', 'Regulatory Fine']
      },
      { 
        impact: 'MAJOR',
        probability: 'MEDIUM',
        risks: 23,
        exposure: 15600000,
        level: 'MEDIUM',
        action: 'MONITOR',
        examples: ['Supply Chain Disruption', 'Key Staff Departure']
      },
      { 
        impact: 'MODERATE',
        probability: 'LOW',
        risks: 87,
        exposure: 6700000,
        level: 'LOW',
        action: 'ACCEPT',
        examples: ['Minor Process Inefficiency', 'Equipment Maintenance']
      },
      { 
        impact: 'MINOR',
        probability: 'VERY_LOW',
        risks: 130,
        exposure: 2170000,
        level: 'VERY_LOW',
        action: 'MONITOR',
        examples: ['Documentation Updates', 'Training Refreshers']
      }
    ],
    complianceStatus: [
      {
        framework: 'SOX (Sarbanes-Oxley)',
        status: 'COMPLIANT',
        score: 98.4,
        lastAudit: '2026-01-15',
        nextAudit: '2026-07-15',
        findings: 2,
        criticalFindings: 0,
        remediation: 'Complete',
        certificationExpiry: '2026-12-31',
        riskAreas: ['Financial Controls', 'IT General Controls'],
        controlsTested: 234,
        controlsPassed: 230
      },
      {
        framework: 'ISO 27001',
        status: 'IN_PROGRESS',
        score: 87.6,
        lastAudit: '2025-11-20',
        nextAudit: '2026-05-20',
        findings: 8,
        criticalFindings: 1,
        remediation: '75% Complete',
        certificationExpiry: '2026-11-20',
        riskAreas: ['Access Management', 'Incident Response'],
        controlsTested: 114,
        controlsPassed: 100
      },
      {
        framework: 'GDPR',
        status: 'COMPLIANT',
        score: 94.2,
        lastAudit: '2026-02-10',
        nextAudit: '2026-08-10',
        findings: 3,
        criticalFindings: 0,
        remediation: 'Complete',
        certificationExpiry: 'Ongoing',
        riskAreas: ['Data Processing', 'Consent Management'],
        controlsTested: 67,
        controlsPassed: 64
      },
      {
        framework: 'PCI DSS',
        status: 'COMPLIANT',
        score: 96.8,
        lastAudit: '2026-01-30',
        nextAudit: '2026-07-30',
        findings: 1,
        criticalFindings: 0,
        remediation: 'Complete',
        certificationExpiry: '2027-01-30',
        riskAreas: ['Network Security', 'Card Data Protection'],
        controlsTested: 89,
        controlsPassed: 88
      },
      {
        framework: 'HIPAA',
        status: 'NON_APPLICABLE',
        score: 0,
        lastAudit: 'N/A',
        nextAudit: 'N/A',
        findings: 0,
        criticalFindings: 0,
        remediation: 'N/A',
        certificationExpiry: 'N/A',
        riskAreas: [],
        controlsTested: 0,
        controlsPassed: 0
      }
    ],
    incidentManagement: [
      {
        incident: 'Phishing Attempt Detection',
        category: 'Cybersecurity',
        severity: 'MEDIUM',
        status: 'RESOLVED',
        reportedDate: '2026-03-16',
        resolvedDate: '2026-03-17',
        duration: '18 hours',
        impact: 'LOW',
        affectedSystems: ['Email', 'User Accounts'],
        rootCause: 'Social engineering attempt targeting finance team',
        resolution: 'Enhanced email filtering, user re-training completed',
        lessonsLearned: 'Need automated phishing simulation program',
        preventiveMeasures: 'Monthly phishing tests, security awareness training',
        costOfIncident: 45000,
        riskReduction: 'Medium'
      },
      {
        incident: 'Supply Chain Delay',
        category: 'Operational',
        severity: 'LOW',
        status: 'RESOLVED',
        reportedDate: '2026-03-14',
        resolvedDate: '2026-03-16',
        duration: '48 hours',
        impact: 'MEDIUM',
        affectedSystems: ['Production', 'Logistics'],
        rootCause: 'Supplier transport strike in region',
        resolution: 'Activated backup supplier, expedited shipping',
        lessonsLearned: 'Need additional supplier diversity',
        preventiveMeasures: 'Supplier risk assessment, contingency planning',
        costOfIncident: 78000,
        riskReduction: 'High'
      },
      {
        incident: 'API Rate Limit Breach',
        category: 'Operational',
        severity: 'LOW',
        status: 'MONITORING',
        reportedDate: '2026-03-18',
        resolvedDate: 'In Progress',
        duration: 'Ongoing',
        impact: 'LOW',
        affectedSystems: ['External API', 'Integration Services'],
        rootCause: 'Unexpected traffic spike during campaign launch',
        resolution: 'Rate limiting adjustment, load balancing optimization',
        lessonsLearned: 'Need better capacity planning for marketing events',
        preventiveMeasures: 'Auto-scaling policies, traffic prediction models',
        costOfIncident: 12000,
        riskReduction: 'Low'
      }
    ],
    riskTrends: [
      {
        period: 'Last 30 Days',
        newRisks: 23,
        resolvedRisks: 18,
        avgRiskScore: 7.2,
        criticalIncidents: 3,
        complianceScore: 94.7,
        mitigationRate: 78.6,
        trendsAnalysis: {
          increasing: ['Cybersecurity threats', 'Supply chain volatility'],
          decreasing: ['Financial risks', 'Regulatory compliance gaps'],
          stable: ['Operational risks', 'Strategic risks']
        },
        riskVelocity: '+5 net risks',
        controlEffectiveness: 89.4
      },
      {
        period: 'Last 90 Days',
        newRisks: 67,
        resolvedRisks: 54,
        avgRiskScore: 6.8,
        criticalIncidents: 8,
        complianceScore: 91.2,
        mitigationRate: 74.3,
        trendsAnalysis: {
          increasing: ['Technology risks', 'Geopolitical risks'],
          decreasing: ['Process risks', 'Personnel risks'],
          stable: ['Market risks', 'Environmental risks']
        },
        riskVelocity: '+13 net risks',
        controlEffectiveness: 87.8
      },
      {
        period: 'Last 12 Months',
        newRisks: 234,
        resolvedRisks: 198,
        avgRiskScore: 6.4,
        criticalIncidents: 28,
        complianceScore: 88.9,
        mitigationRate: 69.7,
        trendsAnalysis: {
          increasing: ['Cyber risks', 'Regulatory complexity'],
          decreasing: ['Credit risks', 'Liquidity risks'],
          stable: ['Operational efficiency', 'Strategic positioning']
        },
        riskVelocity: '+36 net risks',
        controlEffectiveness: 84.2
      }
    ],
    riskAlerts: [
      {
        type: 'CRITICAL',
        category: 'Cybersecurity',
        message: 'New zero-day vulnerability detected in primary authentication system',
        riskScore: 9.2,
        impact: 'CATASTROPHIC',
        probability: 'HIGH',
        exposure: 8900000,
        timestamp: '09:09',
        affectedAssets: ['Authentication System', 'User Database', 'API Gateway'],
        immediateActions: ['Apply security patch', 'Monitor access logs', 'Alert security team'],
        owner: 'CISO',
        deadline: '2026-03-18 18:00',
        urgency: 'IMMEDIATE',
        escalation: 'C_SUITE'
      },
      {
        type: 'HIGH',
        category: 'Regulatory',
        message: 'New GDPR guidance published - compliance review required within 30 days',
        riskScore: 6.8,
        impact: 'MAJOR',
        probability: 'MEDIUM',
        exposure: 2300000,
        timestamp: '09:08',
        affectedAssets: ['Data Processing Systems', 'Privacy Policies', 'Consent Management'],
        immediateActions: ['Review guidance', 'Gap analysis', 'Update policies'],
        owner: 'Legal Team',
        deadline: '2026-04-17',
        urgency: 'HIGH',
        escalation: 'RISK_COMMITTEE'
      },
      {
        type: 'MEDIUM',
        category: 'Operational',
        message: 'Key supplier reported potential delivery delays due to labor shortage',
        riskScore: 5.4,
        impact: 'MODERATE',
        probability: 'MEDIUM',
        exposure: 1200000,
        timestamp: '09:07',
        affectedAssets: ['Production Line', 'Inventory', 'Customer Orders'],
        immediateActions: ['Contact backup suppliers', 'Assess inventory levels', 'Communicate with customers'],
        owner: 'Supply Chain Manager',
        deadline: '2026-03-22',
        urgency: 'MEDIUM',
        escalation: 'OPERATIONS_TEAM'
      },
      {
        type: 'INFO',
        category: 'Strategic',
        message: 'Competitor launched similar product - market positioning review recommended',
        riskScore: 4.1,
        impact: 'MODERATE',
        probability: 'LOW',
        exposure: 890000,
        timestamp: '09:06',
        affectedAssets: ['Product Portfolio', 'Market Share', 'Revenue Projections'],
        immediateActions: ['Competitive analysis', 'Product differentiation review', 'Marketing strategy update'],
        owner: 'Product Manager',
        deadline: '2026-04-01',
        urgency: 'LOW',
        escalation: 'PRODUCT_TEAM'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRiskData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        riskOverview: {
          ...prev.riskOverview,
          activeRisks: Math.max(185, Math.min(195, prev.riskOverview.activeRisks + Math.floor((Math.random() - 0.5) * 4))),
          riskScore: Math.max(6.8, Math.min(7.6, prev.riskOverview.riskScore + (Math.random() - 0.5) * 0.2)),
          complianceScore: Math.max(93.0, Math.min(96.0, prev.riskOverview.complianceScore + (Math.random() - 0.5) * 0.4))
        }
      }));
    }, 48000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'MEDIUM': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getRiskLevelColor = (level) => {
    switch (level) {
      case 'EXTREME': return 'text-red-500 bg-red-500/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'VERY_LOW': return 'text-green-500 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getComplianceStatusColor = (status) => {
    switch (status) {
      case 'COMPLIANT': return 'text-green-400 bg-green-400/20';
      case 'IN_PROGRESS': return 'text-yellow-400 bg-yellow-400/20';
      case 'NON_COMPLIANT': return 'text-red-400 bg-red-400/20';
      case 'NON_APPLICABLE': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
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

  const getIncidentStatusColor = (status) => {
    switch (status) {
      case 'RESOLVED': return 'text-green-400 bg-green-400/20';
      case 'MONITORING': return 'text-blue-400 bg-blue-400/20';
      case 'IN_PROGRESS': return 'text-yellow-400 bg-yellow-400/20';
      case 'OPEN': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'INCREASING': return 'text-red-400';
      case 'DECREASING': return 'text-green-400';
      case 'STABLE': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'IMMEDIATE': return 'text-red-500';
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

  const formatCurrency = (amount) => `$${formatNumber(amount)}`;
  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-red-900 via-slate-900 to-orange-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-red-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Risk Management Intelligence Center</h1>
              <p className="text-red-300">Enterprise risk assessment & compliance analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-red-400">{riskData.currentTime}</div>
            <div className="text-red-300">Risk Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Risk Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                Active Risks
              </h3>
            </div>
            <div className="text-3xl font-bold text-red-400">{riskData.riskOverview.activeRisks}</div>
            <div className="text-red-300 text-sm">{riskData.riskOverview.totalRisks} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-orange-400 mr-2" />
                Risk Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{riskData.riskOverview.riskScore.toFixed(1)}</div>
            <div className="text-orange-300 text-sm">0-10 Scale</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Compliance
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(riskData.riskOverview.complianceScore)}</div>
            <div className="text-green-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-blue-400 mr-2" />
                Mitigation
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(riskData.riskOverview.mitigationRate)}</div>
            <div className="text-blue-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-purple-400 mr-2" />
                Exposure
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatCurrency(riskData.riskOverview.riskExposure)}</div>
            <div className="text-purple-300 text-sm">Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-cyan-400 mr-2" />
                Incidents
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{riskData.riskOverview.incidentsThisMonth}</div>
            <div className="text-cyan-300 text-sm">This Month</div>
          </div>
        </div>

        {/* Risk Categories */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-red-400 mr-2" />
            Risk Category Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Risk Level</th>
                  <th className="text-center p-3 text-slate-300">Active</th>
                  <th className="text-center p-3 text-slate-300">Score</th>
                  <th className="text-center p-3 text-slate-300">Exposure</th>
                  <th className="text-center p-3 text-slate-300">Trend</th>
                </tr>
              </thead>
              <tbody>
                {riskData.riskCategories.map((category, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{category.category}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        Controls: {category.controls} ({formatPercentage(category.effectiveness)} effective)
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getRiskLevelColor(category.riskLevel)}`}>
                        {category.riskLevel}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-red-400 font-medium">{category.activeRisks}</div>
                      <div className="text-slate-400 text-xs">{category.criticalRisks} critical</div>
                    </td>
                    <td className="p-3 text-center text-orange-400 font-medium">
                      {category.riskScore.toFixed(1)}
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-purple-400 font-medium">{formatCurrency(category.exposure)}</div>
                      <div className="text-slate-400 text-xs">Mitigated: {formatCurrency(category.mitigatedExposure)}</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`font-medium ${getTrendColor(category.trend)}`}>
                        {category.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Risk Matrix & Compliance Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-orange-400 mr-2" />
              Risk Matrix Analysis
            </h3>
            <div className="space-y-4">
              {riskData.riskMatrix.map((matrix, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">{matrix.impact}</span>
                      <span className="text-slate-300 text-xs">× {matrix.probability.replace('_', ' ')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getRiskLevelColor(matrix.level)}`}>
                        {matrix.level}
                      </span>
                      <span className="text-blue-400 text-xs">{matrix.risks} risks</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div className="text-purple-400">Exposure: {formatCurrency(matrix.exposure)}</div>
                    <div className="text-orange-400">Action: {matrix.action}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Examples:</strong> {matrix.examples.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Compliance Framework Status
            </h3>
            <div className="space-y-4">
              {riskData.complianceStatus.map((compliance, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{compliance.framework}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getComplianceStatusColor(compliance.status)}`}>
                        {compliance.status.replace('_', ' ')}
                      </span>
                      <span className="text-green-400 text-xs">{formatPercentage(compliance.score)}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div className="text-blue-400">Last Audit: {compliance.lastAudit}</div>
                    <div className="text-orange-400">Findings: {compliance.findings} ({compliance.criticalFindings} critical)</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div className="text-purple-400">Controls: {compliance.controlsPassed}/{compliance.controlsTested}</div>
                    <div className="text-cyan-400">Remediation: {compliance.remediation}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Next Audit:</strong> {compliance.nextAudit} • <strong>Expiry:</strong> {compliance.certificationExpiry}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Incident Management & Risk Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
              Recent Incident Management
            </h3>
            <div className="space-y-4">
              {riskData.incidentManagement.map((incident, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{incident.incident}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getIncidentStatusColor(incident.status)}`}>
                        {incident.status}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Reported: {incident.reportedDate}</div>
                    <div className="text-green-400">Duration: {incident.duration}</div>
                    <div className="text-red-400">Cost: {formatCurrency(incident.costOfIncident)}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Root Cause:</strong> {incident.rootCause}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Resolution:</strong> {incident.resolution}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Prevention:</strong> {incident.preventiveMeasures}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
              Risk Trend Analysis
            </h3>
            <div className="space-y-4">
              {riskData.riskTrends.map((trend, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{trend.period}</span>
                    <span className="text-cyan-400 text-xs">{trend.riskVelocity}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-red-400">New: {trend.newRisks}</div>
                    <div className="text-green-400">Resolved: {trend.resolvedRisks}</div>
                    <div className="text-orange-400">Score: {trend.avgRiskScore.toFixed(1)}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div className="text-blue-400">Compliance: {formatPercentage(trend.complianceScore)}</div>
                    <div className="text-purple-400">Controls: {formatPercentage(trend.controlEffectiveness)}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Increasing:</strong> {trend.trendsAnalysis.increasing.join(', ')}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Decreasing:</strong> {trend.trendsAnalysis.decreasing.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Management Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
            Risk Management Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {riskData.riskAlerts.map((alert, index) => (
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
                    <div className="text-slate-300">Risk Score: {alert.riskScore.toFixed(1)}</div>
                    <div className="text-slate-300">Impact: {alert.impact}</div>
                    <div className="text-slate-300">Exposure: {formatCurrency(alert.exposure)}</div>
                  </div>
                  <div>
                    <div className="text-slate-300">Owner: {alert.owner}</div>
                    <div className="text-slate-300">Deadline: {alert.deadline}</div>
                    <div className="text-slate-300">Escalation: {alert.escalation.replace('_', ' ')}</div>
                  </div>
                </div>
                <div className="text-slate-300 text-xs mb-2">
                  <strong>Assets:</strong> {alert.affectedAssets.join(', ')}
                </div>
                <div className="text-slate-300 text-xs">
                  <strong>Actions:</strong> {alert.immediateActions.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}