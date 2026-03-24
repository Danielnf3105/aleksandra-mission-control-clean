// Legal & Compliance Intelligence Center - Regulatory Compliance, Risk Management & Governance Analytics
import { useState, useEffect } from 'react';
import { Scale, Shield, FileText, AlertTriangle, CheckCircle, TrendingUp, TrendingDown, Eye, Clock, Users, BarChart3, PieChart } from 'lucide-react';

export default function LegalComplianceIntelligenceCenter() {
  const [legalData, setLegalData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    complianceOverview: {
      overallComplianceScore: 94.7,
      activeRegulations: 147,
      compliantRegulations: 139,
      complianceGaps: 8,
      riskScore: 23.4, // lower is better
      auditReadiness: 91.8,
      policyCompliance: 96.2,
      trainingCompletion: 87.9,
      incidentCount: 12,
      resolvedIncidents: 10,
      openIncidents: 2,
      avgResolutionTime: 15.7, // days
      lastAudit: '45 days ago',
      nextAudit: '23 days'
    },
    regulatoryFrameworks: [
      {
        framework: 'GDPR',
        compliance: 96.8,
        requirements: 45,
        compliant: 43,
        gaps: 2,
        riskLevel: 'LOW',
        lastAssessment: '2 weeks ago',
        nextReview: '3 months',
        responsibleTeam: 'Data Protection Team'
      },
      {
        framework: 'SOX',
        compliance: 94.2,
        requirements: 78,
        compliant: 73,
        gaps: 5,
        riskLevel: 'MEDIUM',
        lastAssessment: '1 month ago',
        nextReview: '2 months',
        responsibleTeam: 'Financial Controls Team'
      },
      {
        framework: 'ISO 27001',
        compliance: 92.1,
        requirements: 114,
        compliant: 105,
        gaps: 9,
        riskLevel: 'MEDIUM',
        lastAssessment: '3 weeks ago',
        nextReview: '6 months',
        responsibleTeam: 'Information Security Team'
      },
      {
        framework: 'HIPAA',
        compliance: 97.4,
        requirements: 56,
        compliant: 54,
        gaps: 2,
        riskLevel: 'LOW',
        lastAssessment: '1 week ago',
        nextReview: '1 year',
        responsibleTeam: 'Healthcare Compliance Team'
      },
      {
        framework: 'PCI DSS',
        compliance: 98.2,
        requirements: 12,
        compliant: 12,
        gaps: 0,
        riskLevel: 'LOW',
        lastAssessment: '2 weeks ago',
        nextReview: '1 year',
        responsibleTeam: 'Payment Security Team'
      },
      {
        framework: 'CCPA',
        compliance: 89.7,
        requirements: 34,
        compliant: 30,
        gaps: 4,
        riskLevel: 'HIGH',
        lastAssessment: '5 weeks ago',
        nextReview: '1 month',
        responsibleTeam: 'Privacy Team'
      }
    ],
    contractManagement: {
      totalContracts: 1247,
      activeContracts: 934,
      expiringSoon: 47, // next 90 days
      renewalsPending: 23,
      contractValue: 45678900,
      riskContracts: 12,
      complianceRate: 94.7,
      avgNegotiationTime: 34.7, // days
      contractTypes: [
        { type: 'Vendor Agreements', count: 456, value: 15678900, compliance: 96.2, expiring: 18 },
        { type: 'Customer Contracts', count: 289, value: 18945600, compliance: 97.8, expiring: 12 },
        { type: 'Employment Agreements', count: 234, value: 8934500, compliance: 98.9, expiring: 8 },
        { type: 'Partnership Agreements', count: 78, value: 1234567, compliance: 92.3, expiring: 5 },
        { type: 'Licensing Agreements', count: 67, value: 789456, compliance: 94.1, expiring: 3 },
        { type: 'Real Estate Leases', count: 23, value: 96567, compliance: 89.4, expiring: 1 }
      ]
    },
    riskManagement: {
      totalRisks: 89,
      criticalRisks: 3,
      highRisks: 12,
      mediumRisks: 34,
      lowRisks: 40,
      overallRiskScore: 23.4,
      riskTrend: 'decreasing',
      mitigatedRisks: 67,
      newRisks: 8,
      riskCategories: [
        {
          category: 'Regulatory Risk',
          count: 23,
          score: 34.7,
          trend: 'stable',
          mitigation: 78.9,
          lastAssessment: '1 week ago'
        },
        {
          category: 'Operational Risk',
          count: 18,
          score: 28.9,
          trend: 'decreasing',
          mitigation: 82.4,
          lastAssessment: '2 weeks ago'
        },
        {
          category: 'Financial Risk',
          count: 15,
          score: 19.7,
          trend: 'decreasing',
          mitigation: 91.2,
          lastAssessment: '1 week ago'
        },
        {
          category: 'Cybersecurity Risk',
          count: 12,
          score: 15.8,
          trend: 'stable',
          mitigation: 94.7,
          lastAssessment: '3 days ago'
        },
        {
          category: 'Reputational Risk',
          count: 11,
          score: 22.3,
          trend: 'increasing',
          mitigation: 67.8,
          lastAssessment: '1 month ago'
        },
        {
          category: 'Legal Risk',
          count: 10,
          score: 18.4,
          trend: 'stable',
          mitigation: 89.6,
          lastAssessment: '2 weeks ago'
        }
      ]
    },
    litigationManagement: {
      activeCases: 7,
      resolvedCases: 23,
      totalClaims: 145678,
      settledClaims: 89456,
      avgCaseValue: 234567,
      avgResolutionTime: 187.4, // days
      successRate: 78.9,
      outsideCounselSpend: 456789,
      cases: [
        {
          case: 'Employment Dispute #2847',
          type: 'Employment',
          status: 'ACTIVE',
          riskLevel: 'MEDIUM',
          value: 125000,
          duration: '145 days',
          counsel: 'External'
        },
        {
          case: 'IP Infringement #2834',
          type: 'Intellectual Property',
          status: 'SETTLEMENT',
          riskLevel: 'HIGH',
          value: 890000,
          duration: '234 days',
          counsel: 'External'
        },
        {
          case: 'Contract Breach #2823',
          type: 'Commercial',
          status: 'DISCOVERY',
          riskLevel: 'LOW',
          value: 45000,
          duration: '89 days',
          counsel: 'Internal'
        },
        {
          case: 'Data Breach Class Action',
          type: 'Privacy',
          status: 'MOTION',
          riskLevel: 'HIGH',
          value: 2340000,
          duration: '312 days',
          counsel: 'External'
        }
      ]
    },
    policyManagement: {
      totalPolicies: 156,
      activePolicies: 147,
      updatedThisYear: 89,
      overdueReviews: 12,
      policyCompliance: 96.2,
      acknowledgmentRate: 94.7,
      trainingLinked: 78,
      policyTypes: [
        { type: 'Security Policies', count: 34, compliance: 97.8, lastUpdate: '2 months ago' },
        { type: 'HR Policies', count: 28, compliance: 96.4, lastUpdate: '3 months ago' },
        { type: 'Financial Policies', count: 23, compliance: 98.2, lastUpdate: '1 month ago' },
        { type: 'Operations Policies', count: 19, compliance: 94.7, lastUpdate: '4 months ago' },
        { type: 'IT Policies', count: 18, compliance: 95.8, lastUpdate: '2 months ago' },
        { type: 'Legal Policies', count: 15, compliance: 99.1, lastUpdate: '1 week ago' },
        { type: 'Compliance Policies', count: 12, compliance: 97.3, lastUpdate: '3 weeks ago' },
        { type: 'Ethics Policies', count: 7, compliance: 98.9, lastUpdate: '6 months ago' }
      ]
    },
    auditManagement: {
      auditsThisYear: 23,
      internalAudits: 15,
      externalAudits: 8,
      auditFindings: 67,
      criticalFindings: 2,
      highFindings: 8,
      remediated: 56,
      overdue: 11,
      auditScore: 91.8,
      remediationRate: 83.6,
      upcomingAudits: [
        { audit: 'SOX Compliance Audit', date: '2 weeks', type: 'External', scope: 'Financial Controls' },
        { audit: 'Data Privacy Assessment', date: '1 month', type: 'Internal', scope: 'GDPR Compliance' },
        { audit: 'Security Audit', date: '6 weeks', type: 'External', scope: 'ISO 27001' },
        { audit: 'Operational Risk Review', date: '2 months', type: 'Internal', scope: 'Process Controls' }
      ]
    },
    complianceAlerts: [
      {
        type: 'CRITICAL',
        category: 'Regulatory',
        message: 'CCPA compliance gap identified - 4 requirements non-compliant (89.7% vs 95% target)',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'Privacy Team',
        timestamp: '01:30',
        recommendations: ['Update privacy policy', 'Implement data mapping', 'Train customer service team']
      },
      {
        type: 'WARNING',
        category: 'Contracts',
        message: '47 contracts expiring within 90 days - renewal process required',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Legal Operations',
        timestamp: '01:25',
        recommendations: ['Prioritize high-value contracts', 'Initiate renewal discussions', 'Update contract templates']
      },
      {
        type: 'SUCCESS',
        category: 'Audit',
        message: 'PCI DSS assessment completed with 98.2% compliance - no critical findings',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'Payment Security Team',
        timestamp: '01:20',
        recommendations: ['Maintain current controls', 'Share best practices', 'Schedule next assessment']
      },
      {
        type: 'INFO',
        category: 'Training',
        message: 'Q1 compliance training completion at 87.9% - target 90% by month end',
        impact: 'LOW',
        actionRequired: true,
        assignedTo: 'Compliance Training Team',
        timestamp: '01:15',
        recommendations: ['Send completion reminders', 'Follow up with managers', 'Extend deadline if needed']
      }
    ],
    governanceMetrics: {
      boardMeetings: 12, // this year
      committeesMeetings: 45,
      governanceScore: 92.4,
      independentDirectors: 67.8, // percentage
      diversityScore: 78.9,
      executiveCompensation: 2847000,
      shareholderApproval: 94.7,
      ethicsViolations: 3,
      whistleblowerReports: 7,
      investigationsCompleted: 5,
      governanceTraining: 91.2,
      boardCommittees: [
        { committee: 'Audit Committee', meetings: 8, attendance: 96.7, lastMeeting: '2 weeks ago' },
        { committee: 'Risk Committee', meetings: 6, attendance: 94.2, lastMeeting: '1 week ago' },
        { committee: 'Compensation Committee', meetings: 4, attendance: 100.0, lastMeeting: '3 weeks ago' },
        { committee: 'Governance Committee', meetings: 4, attendance: 91.7, lastMeeting: '1 month ago' }
      ]
    },
    intellectualProperty: {
      totalPatents: 234,
      activePatents: 189,
      pendingPatents: 45,
      trademarks: 67,
      copyrights: 156,
      tradeScerets: 89,
      ipValue: 12456789,
      infringementCases: 3,
      licensingRevenue: 567890,
      renewalsRequired: 23,
      ipPortfolio: [
        { type: 'Software Patents', count: 89, value: 5678900, status: 'Active', nextRenewal: '2 years' },
        { type: 'Process Patents', count: 67, value: 3456789, status: 'Active', nextRenewal: '1.5 years' },
        { type: 'Design Patents', count: 33, value: 1234567, status: 'Active', nextRenewal: '3 years' },
        { type: 'Trademarks', count: 67, value: 987654, status: 'Active', nextRenewal: '5 years' },
        { type: 'Copyrights', count: 156, value: 567890, status: 'Active', nextRenewal: '10 years' },
        { type: 'Trade Secrets', count: 89, value: 531000, status: 'Protected', nextRenewal: 'N/A' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLegalData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        complianceOverview: {
          ...prev.complianceOverview,
          overallComplianceScore: Math.max(90, Math.min(98, prev.complianceOverview.overallComplianceScore + (Math.random() - 0.5) * 0.5)),
          riskScore: Math.max(15, Math.min(35, prev.complianceOverview.riskScore + (Math.random() - 0.5) * 2)),
          auditReadiness: Math.max(85, Math.min(98, prev.complianceOverview.auditReadiness + (Math.random() - 0.5) * 1))
        },
        contractManagement: {
          ...prev.contractManagement,
          activeContracts: prev.contractManagement.activeContracts + Math.floor(Math.random() * 6) - 3,
          expiringSoon: Math.max(40, Math.min(55, prev.contractManagement.expiringSoon + Math.floor(Math.random() * 3) - 1))
        }
      }));
    }, 13000);

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

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20';
      case 'SETTLEMENT': return 'text-green-400 bg-green-400/20';
      case 'DISCOVERY': return 'text-yellow-400 bg-yellow-400/20';
      case 'MOTION': return 'text-purple-400 bg-purple-400/20';
      case 'RESOLVED': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 85, excellent = 95, reverse = false) => {
    if (reverse) {
      if (value <= excellent) return 'text-green-400';
      if (value <= good) return 'text-blue-400';
      if (value <= good * 1.5) return 'text-yellow-400';
      return 'text-red-400';
    } else {
      if (value >= excellent) return 'text-green-400';
      if (value >= good) return 'text-blue-400';
      if (value >= good * 0.8) return 'text-yellow-400';
      return 'text-red-400';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="w-3 h-3 text-red-400" />;
      case 'decreasing': return <TrendingDown className="w-3 h-3 text-green-400" />;
      default: return <span className="w-3 h-3 text-gray-400">→</span>;
    }
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
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
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Legal & Compliance Intelligence Center</h1>
              <p className="text-purple-300">Regulatory compliance, risk management, governance, contracts & legal intelligence</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{legalData.currentTime}</div>
            <div className="text-purple-300">Legal Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Compliance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Compliance Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(legalData.complianceOverview.overallComplianceScore)}</div>
            <div className="text-green-300 text-sm">Audit Ready: {formatPercentage(legalData.complianceOverview.auditReadiness)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <FileText className="w-5 h-5 text-blue-400 mr-2" />
                Regulations
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{legalData.complianceOverview.compliantRegulations}</div>
            <div className="text-blue-300 text-sm">Total: {legalData.complianceOverview.activeRegulations}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 text-orange-400 mr-2" />
                Risk Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{legalData.complianceOverview.riskScore.toFixed(1)}</div>
            <div className="text-orange-300 text-sm">Gaps: {legalData.complianceOverview.complianceGaps}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Scale className="w-5 h-5 text-purple-400 mr-2" />
                Active Cases
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{legalData.litigationManagement.activeCases}</div>
            <div className="text-purple-300 text-sm">Value: {formatCurrency(legalData.litigationManagement.avgCaseValue)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <FileText className="w-5 h-5 text-cyan-400 mr-2" />
                Active Contracts
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{legalData.contractManagement.activeContracts}</div>
            <div className="text-cyan-300 text-sm">Expiring: {legalData.contractManagement.expiringSoon}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-emerald-400 mr-2" />
                Training
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatPercentage(legalData.complianceOverview.trainingCompletion)}</div>
            <div className="text-emerald-300 text-sm">Policy: {formatPercentage(legalData.complianceOverview.policyCompliance)}</div>
          </div>
        </div>

        {/* Regulatory Frameworks */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 text-green-400 mr-2" />
            Regulatory Framework Compliance
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Framework</th>
                  <th className="text-center p-3 text-slate-300">Compliance</th>
                  <th className="text-center p-3 text-slate-300">Requirements</th>
                  <th className="text-center p-3 text-slate-300">Compliant</th>
                  <th className="text-center p-3 text-slate-300">Gaps</th>
                  <th className="text-center p-3 text-slate-300">Risk Level</th>
                  <th className="text-center p-3 text-slate-300">Next Review</th>
                  <th className="text-center p-3 text-slate-300">Owner</th>
                </tr>
              </thead>
              <tbody>
                {legalData.regulatoryFrameworks.map((framework, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3 text-white font-medium">{framework.framework}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(framework.compliance, 90, 95)}`}>
                      {formatPercentage(framework.compliance)}
                    </td>
                    <td className="p-3 text-center text-blue-400">{framework.requirements}</td>
                    <td className="p-3 text-center text-green-400">{framework.compliant}</td>
                    <td className="p-3 text-center text-red-400">{framework.gaps}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(framework.riskLevel)}`}>
                        {framework.riskLevel}
                      </span>
                    </td>
                    <td className="p-3 text-center text-purple-400">{framework.nextReview}</td>
                    <td className="p-3 text-center text-slate-400 text-sm">{framework.responsibleTeam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Risk Management & Contract Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-orange-400 mr-2" />
              Risk Management Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{legalData.riskManagement.totalRisks}</div>
                <div className="text-orange-300 text-sm">Total Risks</div>
                <div className="text-gray-400 text-xs mt-1">Score: {legalData.riskManagement.overallRiskScore.toFixed(1)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{legalData.riskManagement.mitigatedRisks}</div>
                <div className="text-green-300 text-sm">Mitigated</div>
                <div className="text-gray-400 text-xs mt-1">New: {legalData.riskManagement.newRisks}</div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 mb-4 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-red-400 font-medium">{legalData.riskManagement.criticalRisks}</div>
                <div className="text-slate-400">Critical</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{legalData.riskManagement.highRisks}</div>
                <div className="text-slate-400">High</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{legalData.riskManagement.mediumRisks}</div>
                <div className="text-slate-400">Medium</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{legalData.riskManagement.lowRisks}</div>
                <div className="text-slate-400">Low</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Risk Categories</h4>
              {legalData.riskManagement.riskCategories.slice(0, 4).map((category, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{category.category}</span>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-blue-400">{category.count}</span>
                    <span className={`${getPerformanceColor(category.score, 30, 20, true)}`}>
                      {category.score.toFixed(1)}
                    </span>
                    <span className="text-green-400">{formatPercentage(category.mitigation)}</span>
                    {getTrendIcon(category.trend)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FileText className="w-5 h-5 text-cyan-400 mr-2" />
              Contract Management Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{legalData.contractManagement.activeContracts}</div>
                <div className="text-cyan-300 text-sm">Active Contracts</div>
                <div className="text-gray-400 text-xs mt-1">Value: {formatCurrency(legalData.contractManagement.contractValue)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{legalData.contractManagement.expiringSoon}</div>
                <div className="text-orange-300 text-sm">Expiring (90d)</div>
                <div className="text-gray-400 text-xs mt-1">Renewals: {legalData.contractManagement.renewalsPending}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Contract Types</h4>
              {legalData.contractManagement.contractTypes.slice(0, 4).map((type, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{type.type}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm">{formatCurrency(type.value)}</span>
                      <span className="text-orange-400 text-sm">{type.expiring} exp</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-blue-400">Count: {type.count}</span>
                    <span className={`${getPerformanceColor(type.compliance, 92, 96)}`}>
                      Compliance: {formatPercentage(type.compliance)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-purple-400 font-medium">{formatPercentage(legalData.contractManagement.complianceRate)}</div>
                <div className="text-slate-400">Compliance Rate</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{legalData.contractManagement.avgNegotiationTime.toFixed(0)}d</div>
                <div className="text-slate-400">Avg Negotiation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Legal & Compliance Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {legalData.complianceAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="text-slate-400 text-xs mb-2">Assigned: {alert.assignedTo}</div>
                {alert.actionRequired && (
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded text-xs">Action Required</span>
                  </div>
                )}
                <div className="mt-2 flex flex-wrap gap-1">
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

        {/* Litigation & IP Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Scale className="w-5 h-5 text-red-400 mr-2" />
              Litigation Management
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-red-400">{legalData.litigationManagement.activeCases}</div>
                <div className="text-red-300 text-sm">Active Cases</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{formatPercentage(legalData.litigationManagement.successRate)}</div>
                <div className="text-green-300 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-orange-400">{legalData.litigationManagement.avgResolutionTime.toFixed(0)}d</div>
                <div className="text-orange-300 text-sm">Avg Resolution</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Active Cases</h4>
              {legalData.litigationManagement.cases.map((case_, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{case_.case}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(case_.status)}`}>
                        {case_.status}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(case_.riskLevel)}`}>
                        {case_.riskLevel}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">{case_.type}</span>
                    <span className="text-green-400">{formatCurrency(case_.value)}</span>
                    <span className="text-purple-400">{case_.duration}</span>
                    <span className="text-blue-400">{case_.counsel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-blue-400 mr-2" />
              Intellectual Property Portfolio
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{legalData.intellectualProperty.activePatents}</div>
                <div className="text-blue-300 text-sm">Active Patents</div>
                <div className="text-gray-400 text-xs mt-1">Pending: {legalData.intellectualProperty.pendingPatents}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatCurrency(legalData.intellectualProperty.ipValue)}</div>
                <div className="text-green-300 text-sm">IP Portfolio Value</div>
                <div className="text-gray-400 text-xs mt-1">Revenue: {formatCurrency(legalData.intellectualProperty.licensingRevenue)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">IP Portfolio</h4>
              {legalData.intellectualProperty.ipPortfolio.slice(0, 4).map((ip, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{ip.type}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{ip.count}</span>
                    <span className="text-green-400">{formatCurrency(ip.value)}</span>
                    <span className="text-purple-400">{ip.nextRenewal}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{legalData.intellectualProperty.infringementCases}</div>
                <div className="text-slate-400">Infringements</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-cyan-400 font-medium">{legalData.intellectualProperty.renewalsRequired}</div>
                <div className="text-slate-400">Renewals Due</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-purple-400 font-medium">{legalData.intellectualProperty.tradeScerets}</div>
                <div className="text-slate-400">Trade Secrets</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}