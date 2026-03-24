// AI Governance Intelligence Center - AI Ethics, Compliance & Risk Management Analytics
import { useState, useEffect } from 'react';
import { Brain, Shield, Eye, CheckCircle, AlertTriangle, Users, BarChart3, Settings, Target, Scale, Lock, Activity } from 'lucide-react';

export default function AIGovernanceIntelligenceCenter() {
  const [aiGovData, setAIGovData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    governanceOverview: {
      totalAIModels: 267,
      governedModels: 245,
      ethicsCompliant: 89.4,
      biasDetected: 23,
      riskAssessments: 189,
      complianceViolations: 5,
      auditsPending: 12,
      modelRetirements: 8,
      fairnessScore: 91.7,
      explainabilityScore: 87.3,
      transparencyScore: 92.8,
      accountabilityScore: 94.2,
      dataPrivacyScore: 96.5,
      algorithmicAccountability: 88.9,
      ethicalDeployments: 92.1
    },
    modelCompliance: [
      {
        modelName: 'Credit Scoring Model',
        modelType: 'Classification',
        riskLevel: 'HIGH',
        complianceStatus: 'COMPLIANT',
        fairnessScore: 94.2,
        explainabilityScore: 91.8,
        biasMetrics: {
          demographicParity: 0.05,
          equalOpportunity: 0.03,
          disparateImpact: 1.12
        },
        regulatoryFrameworks: ['GDPR', 'Fair Credit Reporting Act', 'Equal Credit Opportunity Act'],
        lastAudit: '2026-03-15 14:30:00',
        nextReview: '2026-06-15',
        ethicsApproval: 'APPROVED',
        dataLineage: 'DOCUMENTED',
        modelCard: 'COMPLETE',
        riskMitigation: ['Bias monitoring', 'Regular retraining', 'Outcome tracking']
      },
      {
        modelName: 'Hiring Assessment AI',
        modelType: 'Recommendation',
        riskLevel: 'HIGH',
        complianceStatus: 'UNDER_REVIEW',
        fairnessScore: 76.4,
        explainabilityScore: 82.1,
        biasMetrics: {
          demographicParity: 0.15,
          equalOpportunity: 0.12,
          disparateImpact: 0.87
        },
        regulatoryFrameworks: ['GDPR', 'EU AI Act', 'Employment Standards Act'],
        lastAudit: '2026-03-10 10:00:00',
        nextReview: '2026-03-25',
        ethicsApproval: 'PENDING',
        dataLineage: 'PARTIAL',
        modelCard: 'IN_PROGRESS',
        riskMitigation: ['Bias correction', 'Human oversight', 'Regular monitoring']
      },
      {
        modelName: 'Medical Diagnosis Assistant',
        modelType: 'Classification',
        riskLevel: 'CRITICAL',
        complianceStatus: 'COMPLIANT',
        fairnessScore: 97.8,
        explainabilityScore: 95.6,
        biasMetrics: {
          demographicParity: 0.02,
          equalOpportunity: 0.01,
          disparateImpact: 1.03
        },
        regulatoryFrameworks: ['FDA 510(k)', 'HIPAA', 'GDPR', 'ISO 13485'],
        lastAudit: '2026-03-12 09:15:00',
        nextReview: '2026-04-12',
        ethicsApproval: 'APPROVED',
        dataLineage: 'COMPLETE',
        modelCard: 'COMPLETE',
        riskMitigation: ['Clinical validation', 'Physician oversight', 'Continuous monitoring']
      },
      {
        modelName: 'Fraud Detection System',
        modelType: 'Anomaly Detection',
        riskLevel: 'MEDIUM',
        complianceStatus: 'COMPLIANT',
        fairnessScore: 89.3,
        explainabilityScore: 78.9,
        biasMetrics: {
          demographicParity: 0.08,
          equalOpportunity: 0.06,
          disparateImpact: 1.09
        },
        regulatoryFrameworks: ['PCI-DSS', 'SOX', 'GDPR'],
        lastAudit: '2026-03-08 16:20:00',
        nextReview: '2026-09-08',
        ethicsApproval: 'APPROVED',
        dataLineage: 'DOCUMENTED',
        modelCard: 'COMPLETE',
        riskMitigation: ['False positive tracking', 'Appeal process', 'Regular validation']
      },
      {
        modelName: 'Content Moderation AI',
        modelType: 'Classification',
        riskLevel: 'HIGH',
        complianceStatus: 'NON_COMPLIANT',
        fairnessScore: 68.7,
        explainabilityScore: 71.2,
        biasMetrics: {
          demographicParity: 0.22,
          equalOpportunity: 0.18,
          disparateImpact: 0.73
        },
        regulatoryFrameworks: ['EU Digital Services Act', 'GDPR', 'First Amendment'],
        lastAudit: '2026-03-05 11:45:00',
        nextReview: '2026-03-20',
        ethicsApproval: 'REJECTED',
        dataLineage: 'INCOMPLETE',
        modelCard: 'REQUIRED',
        riskMitigation: ['Immediate retraining', 'Enhanced oversight', 'Bias correction']
      }
    ],
    ethicsAssessments: [
      {
        assessmentId: 'ETH-2026-0318-001',
        modelName: 'Hiring Assessment AI',
        assessmentType: 'Bias Audit',
        status: 'IN_PROGRESS',
        ethicsOfficer: 'Dr. Sarah Chen',
        startDate: '2026-03-10',
        expectedCompletion: '2026-03-25',
        findings: [
          'Gender bias detected in technical role recommendations',
          'Age discrimination patterns in senior positions',
          'Insufficient diversity in training data'
        ],
        recommendations: [
          'Implement fairness constraints in model training',
          'Expand training dataset diversity',
          'Add human oversight for sensitive decisions'
        ],
        riskLevel: 'HIGH',
        businessImpact: 'Legal liability, reputational damage',
        remediationPlan: 'Model retraining with fairness constraints',
        estimatedCost: 45000
      },
      {
        assessmentId: 'ETH-2026-0315-002',
        modelName: 'Content Moderation AI',
        assessmentType: 'Algorithm Audit',
        status: 'COMPLETED',
        ethicsOfficer: 'Prof. Michael Rodriguez',
        startDate: '2026-03-01',
        completionDate: '2026-03-15',
        findings: [
          'Systematic bias against minority viewpoints',
          'Inconsistent application of community guidelines',
          'Lack of cultural context in content evaluation'
        ],
        recommendations: [
          'Immediate model suspension pending fixes',
          'Cultural sensitivity training data integration',
          'Multi-stakeholder review process'
        ],
        riskLevel: 'CRITICAL',
        businessImpact: 'Regulatory violations, user trust erosion',
        remediationPlan: 'Complete model redesign with ethics-by-design',
        estimatedCost: 125000
      },
      {
        assessmentId: 'ETH-2026-0312-003',
        modelName: 'Medical Diagnosis Assistant',
        assessmentType: 'Clinical Ethics Review',
        status: 'COMPLETED',
        ethicsOfficer: 'Dr. Lisa Wang',
        startDate: '2026-03-05',
        completionDate: '2026-03-12',
        findings: [
          'Excellent performance across demographic groups',
          'Appropriate uncertainty quantification',
          'Strong physician-AI collaboration framework'
        ],
        recommendations: [
          'Continue current monitoring protocols',
          'Expand to additional medical specialties',
          'Document best practices for replication'
        ],
        riskLevel: 'LOW',
        businessImpact: 'Positive patient outcomes',
        remediationPlan: 'No remediation required',
        estimatedCost: 0
      }
    ],
    biasMonitoring: [
      {
        metric: 'Demographic Parity',
        currentValue: 0.08,
        threshold: 0.10,
        status: 'COMPLIANT',
        trend: 'IMPROVING',
        affectedModels: 12,
        lastMeasurement: '2026-03-18 10:00:00',
        riskLevel: 'LOW'
      },
      {
        metric: 'Equal Opportunity',
        currentValue: 0.06,
        threshold: 0.05,
        status: 'VIOLATION',
        trend: 'WORSENING',
        affectedModels: 8,
        lastMeasurement: '2026-03-18 10:00:00',
        riskLevel: 'MEDIUM'
      },
      {
        metric: 'Disparate Impact',
        currentValue: 1.15,
        threshold: 1.20,
        status: 'COMPLIANT',
        trend: 'STABLE',
        affectedModels: 15,
        lastMeasurement: '2026-03-18 10:00:00',
        riskLevel: 'LOW'
      },
      {
        metric: 'Calibration',
        currentValue: 0.95,
        threshold: 0.90,
        status: 'COMPLIANT',
        trend: 'IMPROVING',
        affectedModels: 23,
        lastMeasurement: '2026-03-18 10:00:00',
        riskLevel: 'LOW'
      }
    ],
    regulatoryCompliance: [
      {
        framework: 'EU AI Act',
        overallScore: 87.4,
        requirements: 45,
        compliant: 39,
        partialCompliant: 4,
        nonCompliant: 2,
        lastAssessment: '2026-03-01',
        nextAssessment: '2026-09-01',
        riskLevel: 'MEDIUM',
        findings: ['High-risk AI system documentation incomplete', 'Human oversight procedures need strengthening'],
        actionItems: 6,
        deadline: '2026-05-25'
      },
      {
        framework: 'GDPR',
        overallScore: 94.2,
        requirements: 28,
        compliant: 26,
        partialCompliant: 2,
        nonCompliant: 0,
        lastAssessment: '2026-02-15',
        nextAssessment: '2026-08-15',
        riskLevel: 'LOW',
        findings: ['Automated decision-making documentation needs minor updates'],
        actionItems: 2,
        deadline: '2026-04-15'
      },
      {
        framework: 'NIST AI RMF',
        overallScore: 91.8,
        requirements: 22,
        compliant: 20,
        partialCompliant: 2,
        nonCompliant: 0,
        lastAssessment: '2026-03-08',
        nextAssessment: '2026-12-08',
        riskLevel: 'LOW',
        findings: ['Risk management documentation complete', 'Monitoring protocols well established'],
        actionItems: 1,
        deadline: '2026-06-01'
      },
      {
        framework: 'ISO 23053',
        overallScore: 83.6,
        requirements: 18,
        compliant: 15,
        partialCompliant: 2,
        nonCompliant: 1,
        lastAssessment: '2026-02-28',
        nextAssessment: '2026-11-28',
        riskLevel: 'MEDIUM',
        findings: ['AI governance framework needs enhancement', 'Stakeholder engagement processes incomplete'],
        actionItems: 4,
        deadline: '2026-05-31'
      }
    ],
    aiRiskManagement: [
      {
        riskCategory: 'Algorithmic Bias',
        riskLevel: 'HIGH',
        likelihood: 7.2,
        impact: 8.5,
        riskScore: 61.2,
        affectedModels: 23,
        mitigationStrategy: 'Bias testing and fairness constraints',
        owner: 'AI Ethics Team',
        status: 'ACTIVE',
        lastReview: '2026-03-15',
        nextReview: '2026-04-15'
      },
      {
        riskCategory: 'Data Privacy Breach',
        riskLevel: 'MEDIUM',
        likelihood: 4.3,
        impact: 9.2,
        riskScore: 39.6,
        affectedModels: 45,
        mitigationStrategy: 'Data encryption and access controls',
        owner: 'Data Protection Officer',
        status: 'MONITORED',
        lastReview: '2026-03-12',
        nextReview: '2026-06-12'
      },
      {
        riskCategory: 'Model Drift',
        riskLevel: 'MEDIUM',
        likelihood: 6.8,
        impact: 5.7,
        riskScore: 38.8,
        affectedModels: 67,
        mitigationStrategy: 'Continuous monitoring and retraining',
        owner: 'MLOps Team',
        status: 'ACTIVE',
        lastReview: '2026-03-10',
        nextReview: '2026-04-10'
      },
      {
        riskCategory: 'Regulatory Non-Compliance',
        riskLevel: 'HIGH',
        likelihood: 5.9,
        impact: 8.8,
        riskScore: 51.9,
        affectedModels: 12,
        mitigationStrategy: 'Regular compliance audits and updates',
        owner: 'Legal & Compliance',
        status: 'ESCALATED',
        lastReview: '2026-03-17',
        nextReview: '2026-03-31'
      }
    ],
    aiGovernanceAlerts: [
      {
        type: 'CRITICAL',
        category: 'Compliance Violation',
        message: 'Content Moderation AI showing systematic bias violations - immediate action required',
        model: 'Content Moderation AI',
        violation: 'Demographic parity violation: 0.22 vs 0.10 threshold',
        impact: 'Legal liability under EU Digital Services Act, user discrimination, regulatory penalties',
        affectedUsers: 'Estimated 50,000+ users',
        severity: 'CRITICAL',
        timestamp: '11:20',
        detectedBy: 'Bias Monitor',
        recommendation: 'Suspend model immediately, initiate emergency bias correction, legal review required',
        urgency: 'IMMEDIATE',
        escalation: 'C_LEVEL',
        regulatoryRisk: 'EU DSA violation, potential €6M fine',
        businessImpact: 'Platform shutdown risk, reputation damage',
        ethicsOfficer: 'Prof. Michael Rodriguez'
      },
      {
        type: 'HIGH',
        category: 'Ethics Review',
        message: 'Hiring Assessment AI ethics review reveals significant gender bias in technical roles',
        model: 'Hiring Assessment AI',
        finding: 'Gender bias in technical role recommendations affecting 15% of candidates',
        impact: 'Hiring discrimination, legal liability, diversity goals compromised',
        affectedDecisions: 1247,
        severity: 'HIGH',
        timestamp: '11:15',
        detectedBy: 'Ethics Assessment',
        recommendation: 'Halt new deployments, implement fairness constraints, retrain with diverse data',
        urgency: 'HIGH',
        escalation: 'ETHICS_COMMITTEE',
        legalRisk: 'Employment discrimination lawsuits',
        remediationCost: '$45,000 estimated',
        ethicsOfficer: 'Dr. Sarah Chen'
      },
      {
        type: 'MEDIUM',
        category: 'Model Drift',
        message: 'Credit Scoring Model showing gradual performance drift affecting fairness metrics',
        model: 'Credit Scoring Model',
        drift: 'Fairness score decreased from 96.2% to 94.2% over 30 days',
        impact: 'Potential credit discrimination, regulatory scrutiny, model performance degradation',
        affectedApplications: 3456,
        severity: 'MEDIUM',
        timestamp: '11:10',
        detectedBy: 'Drift Monitor',
        recommendation: 'Schedule retraining within 2 weeks, enhance monitoring frequency, audit recent decisions',
        urgency: 'MEDIUM',
        escalation: 'ML_OPERATIONS',
        complianceRisk: 'Fair Credit Reporting Act potential violation',
        monitoringFrequency: 'Increase to daily'
      },
      {
        type: 'INFO',
        category: 'Best Practice',
        message: 'Medical Diagnosis Assistant achieving exemplary ethics compliance across all metrics',
        model: 'Medical Diagnosis Assistant',
        achievement: '97.8% fairness score, 95.6% explainability, zero bias violations',
        impact: 'Enhanced patient care, regulatory confidence, clinical adoption success',
        validationResults: 'Passed all clinical ethics reviews',
        severity: 'POSITIVE',
        timestamp: '11:05',
        detectedBy: 'Ethics Monitor',
        opportunity: 'BEST_PRACTICE_TEMPLATE',
        recognition: 'Model of ethical AI implementation',
        recommendation: 'Document practices for organizational learning, consider publication',
        ethicsOfficer: 'Dr. Lisa Wang'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        ethicsAssessments: 3,
        biasTests: 24,
        complianceChecks: 67,
        violationsDetected: 2,
        modelsAudited: 12,
        riskAssessments: 5,
        fairnessScore: 89.4,
        explainabilityScore: 87.3
      },
      {
        period: 'Last 24 Hours',
        ethicsAssessments: 15,
        biasTests: 234,
        complianceChecks: 567,
        violationsDetected: 8,
        modelsAudited: 45,
        riskAssessments: 23,
        fairnessScore: 88.7,
        explainabilityScore: 86.9
      },
      {
        period: 'Last 7 Days',
        ethicsAssessments: 78,
        biasTests: 1456,
        complianceChecks: 3421,
        violationsDetected: 34,
        modelsAudited: 189,
        riskAssessments: 124,
        fairnessScore: 89.1,
        explainabilityScore: 87.8
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAIGovData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        governanceOverview: {
          ...prev.governanceOverview,
          totalAIModels: Math.max(250, Math.min(300, prev.governanceOverview.totalAIModels + Math.floor((Math.random() - 0.5) * 10))),
          ethicsCompliant: Math.max(85.0, Math.min(95.0, prev.governanceOverview.ethicsCompliant + (Math.random() - 0.5) * 2.0)),
          fairnessScore: Math.max(85.0, Math.min(95.0, prev.governanceOverview.fairnessScore + (Math.random() - 0.5) * 1.0)),
          biasDetected: Math.max(15, Math.min(35, prev.governanceOverview.biasDetected + Math.floor((Math.random() - 0.5) * 3)))
        }
      }));
    }, 30000);

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'COMPLIANT': return 'text-green-400 bg-green-400/20';
      case 'APPROVED': return 'text-green-400 bg-green-400/20';
      case 'COMPLETE': return 'text-green-400 bg-green-400/20';
      case 'UNDER_REVIEW': return 'text-blue-400 bg-blue-400/20';
      case 'IN_PROGRESS': return 'text-blue-400 bg-blue-400/20';
      case 'PENDING': return 'text-yellow-400 bg-yellow-400/20';
      case 'VIOLATION': return 'text-yellow-400 bg-yellow-400/20';
      case 'NON_COMPLIANT': return 'text-red-400 bg-red-400/20';
      case 'REJECTED': return 'text-red-400 bg-red-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'LOW': return 'text-green-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-500';
      default: return 'text-slate-400';
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
  const formatCurrency = (amount) => `$${amount.toLocaleString()}`;

  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">AI Governance Intelligence Center</h1>
              <p className="text-indigo-300">AI ethics, compliance & risk management analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-indigo-400">{aiGovData.currentTime}</div>
            <div className="text-indigo-300">AI Ethics Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* AI Governance Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-indigo-400 mr-2" />
                AI Models
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{aiGovData.governanceOverview.governedModels}</div>
            <div className="text-indigo-300 text-sm">{aiGovData.governanceOverview.totalAIModels} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Ethics Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(aiGovData.governanceOverview.ethicsCompliant)}</div>
            <div className="text-green-300 text-sm">Compliant</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Scale className="w-5 h-5 text-cyan-400 mr-2" />
                Fairness
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(aiGovData.governanceOverview.fairnessScore)}</div>
            <div className="text-cyan-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-yellow-400 mr-2" />
                Transparency
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(aiGovData.governanceOverview.transparencyScore)}</div>
            <div className="text-yellow-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 text-orange-400 mr-2" />
                Bias Detected
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{aiGovData.governanceOverview.biasDetected}</div>
            <div className="text-orange-300 text-sm">Models</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Lock className="w-5 h-5 text-purple-400 mr-2" />
                Privacy Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(aiGovData.governanceOverview.dataPrivacyScore)}</div>
            <div className="text-purple-300 text-sm">Data Privacy</div>
          </div>
        </div>

        {/* Model Compliance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 text-indigo-400 mr-2" />
            AI Model Compliance Dashboard
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Model</th>
                  <th className="text-center p-3 text-slate-300">Risk Level</th>
                  <th className="text-center p-3 text-slate-300">Compliance</th>
                  <th className="text-center p-3 text-slate-300">Fairness</th>
                  <th className="text-center p-3 text-slate-300">Bias Metrics</th>
                  <th className="text-center p-3 text-slate-300">Ethics Status</th>
                </tr>
              </thead>
              <tbody>
                {aiGovData.modelCompliance.map((model, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium text-sm">{model.modelName}</div>
                      <div className="text-slate-400 text-xs mt-1">{model.modelType}</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(model.riskLevel)}`}>
                        {model.riskLevel}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(model.complianceStatus)}`}>
                        {model.complianceStatus}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-xs space-y-1">
                        <div className={`font-medium ${model.fairnessScore >= 90 ? 'text-green-400' : model.fairnessScore >= 75 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {formatPercentage(model.fairnessScore)}
                        </div>
                        <div className="text-blue-400">
                          Explain: {formatPercentage(model.explainabilityScore)}
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-xs space-y-1">
                        <div className={`${model.biasMetrics.demographicParity <= 0.10 ? 'text-green-400' : 'text-red-400'}`}>
                          DP: {model.biasMetrics.demographicParity.toFixed(2)}
                        </div>
                        <div className={`${model.biasMetrics.equalOpportunity <= 0.05 ? 'text-green-400' : 'text-red-400'}`}>
                          EO: {model.biasMetrics.equalOpportunity.toFixed(2)}
                        </div>
                        <div className={`${model.biasMetrics.disparateImpact >= 0.80 && model.biasMetrics.disparateImpact <= 1.20 ? 'text-green-400' : 'text-red-400'}`}>
                          DI: {model.biasMetrics.disparateImpact.toFixed(2)}
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-xs space-y-1">
                        <div className={`${getStatusColor(model.ethicsApproval).split(' ')[0]}`}>
                          {model.ethicsApproval}
                        </div>
                        <div className="text-purple-400">
                          Card: {model.modelCard}
                        </div>
                        <div className="text-cyan-400">
                          Lineage: {model.dataLineage}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ethics Assessments & Bias Monitoring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-cyan-400 mr-2" />
              Active Ethics Assessments
            </h3>
            <div className="space-y-4">
              {aiGovData.ethicsAssessments.map((assessment, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{assessment.assessmentType}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(assessment.status)}`}>
                        {assessment.status}
                      </span>
                      <span className={`text-xs ${getRiskColor(assessment.riskLevel)}`}>{assessment.riskLevel}</span>
                    </div>
                  </div>
                  
                  <div className="text-white text-sm mb-2">{assessment.modelName}</div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Officer: {assessment.ethicsOfficer}</div>
                    <div className="text-purple-400">ID: {assessment.assessmentId}</div>
                  </div>
                  
                  <div className="text-xs space-y-1 mb-2">
                    <div className="text-yellow-400">
                      <strong>Key Findings:</strong>
                    </div>
                    {assessment.findings.slice(0, 2).map((finding, idx) => (
                      <div key={idx} className="text-slate-300">• {finding}</div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-orange-400">
                      Cost: {formatCurrency(assessment.estimatedCost)}
                    </div>
                    <div className="text-green-400">
                      Target: {assessment.expectedCompletion || assessment.completionDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-yellow-400 mr-2" />
              Bias Monitoring Metrics
            </h3>
            <div className="space-y-4">
              {aiGovData.biasMonitoring.map((metric, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{metric.metric}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(metric.status)}`}>
                        {metric.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Current: {metric.currentValue.toFixed(2)}</div>
                    <div className="text-purple-400">Threshold: {metric.threshold.toFixed(2)}</div>
                    <div className="text-blue-400">Models: {metric.affectedModels}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className={`${metric.trend === 'IMPROVING' ? 'text-green-400' : metric.trend === 'WORSENING' ? 'text-red-400' : 'text-yellow-400'}`}>
                      Trend: {metric.trend}
                    </div>
                    <div className={`${getRiskColor(metric.riskLevel)}`}>
                      Risk: {metric.riskLevel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regulatory Compliance & Risk Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-green-400 mr-2" />
              Regulatory Compliance Status
            </h3>
            <div className="space-y-4">
              {aiGovData.regulatoryCompliance.map((compliance, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{compliance.framework}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-xs">{formatPercentage(compliance.overallScore)}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getRiskColor(compliance.riskLevel)} bg-slate-800/50`}>
                        {compliance.riskLevel}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Compliant: {compliance.compliant}</div>
                    <div className="text-yellow-400">Partial: {compliance.partialCompliant}</div>
                    <div className="text-red-400">Non-compliant: {compliance.nonCompliant}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Requirements: {compliance.requirements}</div>
                    <div className="text-orange-400">Actions: {compliance.actionItems}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-cyan-400">Last: {compliance.lastAssessment}</div>
                    <div className="text-purple-400">Deadline: {compliance.deadline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-red-400 mr-2" />
              AI Risk Management
            </h3>
            <div className="space-y-4">
              {aiGovData.aiRiskManagement.map((risk, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{risk.riskCategory}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getRiskColor(risk.riskLevel)} bg-slate-800/50`}>
                        {risk.riskLevel}
                      </span>
                      <span className="text-orange-400 text-xs">{risk.riskScore.toFixed(1)}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-red-400">Likelihood: {risk.likelihood}/10</div>
                    <div className="text-purple-400">Impact: {risk.impact}/10</div>
                    <div className="text-blue-400">Models: {risk.affectedModels}</div>
                  </div>
                  
                  <div className="text-slate-300 text-xs mb-2">
                    <strong>Strategy:</strong> {risk.mitigationStrategy}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-cyan-400">Owner: {risk.owner}</div>
                    <div className={`${getStatusColor(risk.status).split(' ')[0]}`}>
                      Status: {risk.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
            AI Governance Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {aiGovData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Assessments: {metrics.ethicsAssessments}</div>
                  <div className="text-purple-400">Bias Tests: {metrics.biasTests}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-green-400">Compliance: {metrics.complianceChecks}</div>
                  <div className="text-red-400">Violations: {metrics.violationsDetected}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Audited: {metrics.modelsAudited}</div>
                  <div className="text-yellow-400">Risk Assess: {metrics.riskAssessments}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Fairness: {formatPercentage(metrics.fairnessScore)}</div>
                  <div className="text-pink-400">Explain: {formatPercentage(metrics.explainabilityScore)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Governance Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            AI Governance System Alerts
          </h3>
          <div className="space-y-4">
            {aiGovData.aiGovernanceAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                    {alert.urgency && <span className={`text-xs ${getRiskColor(alert.urgency)}`}>{alert.urgency}</span>}
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                
                <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                  {alert.model && <div className="text-slate-300">Model: {alert.model}</div>}
                  {alert.violation && <div className="text-red-400">Violation: {alert.violation}</div>}
                  {alert.finding && <div className="text-yellow-400">Finding: {alert.finding}</div>}
                  {alert.drift && <div className="text-orange-400">Drift: {alert.drift}</div>}
                  {alert.achievement && <div className="text-green-400">Achievement: {alert.achievement}</div>}
                  {alert.affectedUsers && <div className="text-purple-400">Users: {alert.affectedUsers}</div>}
                  {alert.affectedDecisions && <div className="text-blue-400">Decisions: {alert.affectedDecisions}</div>}
                  {alert.regulatoryRisk && <div className="text-red-400">Regulatory: {alert.regulatoryRisk}</div>}
                  {alert.remediationCost && <div className="text-orange-400">Cost: {alert.remediationCost}</div>}
                  {alert.ethicsOfficer && <div className="text-cyan-400">Officer: {alert.ethicsOfficer}</div>}
                </div>
                
                <div className="text-slate-300 text-xs mb-2">
                  <strong>Impact:</strong> {alert.impact}
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