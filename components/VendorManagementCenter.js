// Vendor Management Intelligence Center - Supplier Performance & Procurement Analytics
import { useState, useEffect } from 'react';
import { Users, TrendingUp, DollarSign, Shield, Clock, BarChart3, CheckCircle, AlertTriangle, Target, Settings, Star, Activity } from 'lucide-react';

export default function VendorManagementCenter() {
  const [vendorData, setVendorData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    vendorOverview: {
      totalVendors: 347,
      activeVendors: 289,
      preferredVendors: 45,
      avgVendorScore: 87.3,
      totalSpend: 45670000,
      contractsActive: 234,
      contractsExpiring: 23,
      savingsRealized: 3450000,
      onTimeDelivery: 94.7,
      qualityScore: 91.2,
      complianceRate: 96.8,
      riskExposure: 12.4
    },
    vendorCategories: [
      {
        category: 'IT & Technology',
        vendorCount: 67,
        spend: 15600000,
        spendPercentage: 34.2,
        avgScore: 89.4,
        topPerformers: 12,
        riskLevel: 'MEDIUM',
        contracts: 45,
        savingsOpportunity: 780000,
        keyVendors: ['Microsoft', 'AWS', 'Salesforce', 'Adobe'],
        performance: {
          delivery: 96.2,
          quality: 93.1,
          innovation: 87.9,
          support: 91.4
        },
        trends: 'Cloud migration driving increased spend',
        nextReview: '2026-04-15'
      },
      {
        category: 'Manufacturing',
        vendorCount: 89,
        spend: 12300000,
        spendPercentage: 27.0,
        avgScore: 85.7,
        topPerformers: 8,
        riskLevel: 'HIGH',
        contracts: 78,
        savingsOpportunity: 920000,
        keyVendors: ['Acme Manufacturing', 'Global Components', 'Precision Parts'],
        performance: {
          delivery: 91.8,
          quality: 88.6,
          innovation: 72.3,
          support: 84.2
        },
        trends: 'Supply chain volatility affecting performance',
        nextReview: '2026-03-30'
      },
      {
        category: 'Professional Services',
        vendorCount: 45,
        spend: 8900000,
        spendPercentage: 19.5,
        avgScore: 88.9,
        topPerformers: 15,
        riskLevel: 'LOW',
        contracts: 67,
        savingsOpportunity: 445000,
        keyVendors: ['McKinsey', 'Legal Partners', 'Audit Firm', 'Design Studio'],
        performance: {
          delivery: 95.4,
          quality: 94.2,
          innovation: 89.7,
          support: 96.1
        },
        trends: 'Increased demand for digital transformation expertise',
        nextReview: '2026-04-20'
      },
      {
        category: 'Facilities & Operations',
        vendorCount: 78,
        spend: 5400000,
        spendPercentage: 11.8,
        avgScore: 83.2,
        topPerformers: 6,
        riskLevel: 'LOW',
        contracts: 34,
        savingsOpportunity: 270000,
        keyVendors: ['CleanCorp', 'Security Services', 'Maintenance Pro'],
        performance: {
          delivery: 89.7,
          quality: 86.4,
          innovation: 65.8,
          support: 87.9
        },
        trends: 'Focus on sustainable and green services',
        nextReview: '2026-04-10'
      },
      {
        category: 'Marketing & Sales',
        vendorCount: 68,
        spend: 3470000,
        spendPercentage: 7.6,
        avgScore: 90.1,
        topPerformers: 18,
        riskLevel: 'LOW',
        contracts: 10,
        savingsOpportunity: 173000,
        keyVendors: ['Creative Agency', 'Media Partners', 'Event Management'],
        performance: {
          delivery: 97.3,
          quality: 95.8,
          innovation: 92.4,
          support: 93.7
        },
        trends: 'Shift towards digital and data-driven marketing',
        nextReview: '2026-05-01'
      }
    ],
    topVendors: [
      {
        name: 'Microsoft Corporation',
        category: 'IT & Technology',
        score: 96.4,
        spend: 2340000,
        contractValue: 3600000,
        contractEnd: '2026-12-31',
        relationship: 'STRATEGIC',
        riskLevel: 'LOW',
        performance: {
          delivery: 98.7,
          quality: 96.1,
          innovation: 94.8,
          support: 97.2,
          compliance: 99.1
        },
        kpis: {
          onTimeDelivery: 98.7,
          qualityScore: 96.1,
          costSavings: 245000,
          incidentCount: 2,
          slaCompliance: 99.1
        },
        strengths: ['Reliable delivery', 'Excellent support', 'Innovation leadership'],
        improvements: ['Cost optimization opportunities', 'Faster response times'],
        lastReview: '2026-02-15',
        nextReview: '2026-05-15'
      },
      {
        name: 'Acme Manufacturing',
        category: 'Manufacturing',
        score: 78.9,
        spend: 1890000,
        contractValue: 2400000,
        contractEnd: '2026-08-31',
        relationship: 'PREFERRED',
        riskLevel: 'MEDIUM',
        performance: {
          delivery: 84.3,
          quality: 81.7,
          innovation: 68.2,
          support: 76.4,
          compliance: 89.3
        },
        kpis: {
          onTimeDelivery: 84.3,
          qualityScore: 81.7,
          costSavings: 89000,
          incidentCount: 8,
          slaCompliance: 89.3
        },
        strengths: ['Cost competitive', 'Local presence', 'Flexible capacity'],
        improvements: ['Quality consistency', 'Delivery reliability', 'Innovation capability'],
        lastReview: '2026-02-28',
        nextReview: '2026-04-30'
      },
      {
        name: 'McKinsey & Company',
        category: 'Professional Services',
        score: 94.7,
        spend: 1560000,
        contractValue: 2100000,
        contractEnd: '2026-06-30',
        relationship: 'STRATEGIC',
        riskLevel: 'LOW',
        performance: {
          delivery: 97.8,
          quality: 96.4,
          innovation: 93.2,
          support: 91.8,
          compliance: 98.7
        },
        kpis: {
          onTimeDelivery: 97.8,
          qualityScore: 96.4,
          costSavings: 456000,
          incidentCount: 1,
          slaCompliance: 98.7
        },
        strengths: ['Deep expertise', 'Strategic insights', 'Executive access'],
        improvements: ['Cost efficiency', 'Knowledge transfer'],
        lastReview: '2026-03-01',
        nextReview: '2026-06-01'
      },
      {
        name: 'AWS',
        category: 'IT & Technology',
        score: 92.1,
        spend: 1340000,
        contractValue: 1800000,
        contractEnd: '2026-11-30',
        relationship: 'STRATEGIC',
        riskLevel: 'LOW',
        performance: {
          delivery: 99.2,
          quality: 94.6,
          innovation: 96.8,
          support: 88.7,
          compliance: 97.3
        },
        kpis: {
          onTimeDelivery: 99.2,
          qualityScore: 94.6,
          costSavings: 234000,
          incidentCount: 3,
          slaCompliance: 97.3
        },
        strengths: ['Reliability', 'Scalability', 'Innovation', 'Global reach'],
        improvements: ['Support responsiveness', 'Cost optimization'],
        lastReview: '2026-01-20',
        nextReview: '2026-04-20'
      },
      {
        name: 'Global Components Ltd',
        category: 'Manufacturing',
        score: 81.5,
        spend: 1120000,
        contractValue: 1500000,
        contractEnd: '2026-07-31',
        relationship: 'APPROVED',
        riskLevel: 'MEDIUM',
        performance: {
          delivery: 87.9,
          quality: 83.4,
          innovation: 71.6,
          support: 79.2,
          compliance: 85.7
        },
        kpis: {
          onTimeDelivery: 87.9,
          qualityScore: 83.4,
          costSavings: 67000,
          incidentCount: 12,
          slaCompliance: 85.7
        },
        strengths: ['Competitive pricing', 'Wide product range'],
        improvements: ['Quality control', 'Delivery consistency', 'Communication'],
        lastReview: '2026-02-10',
        nextReview: '2026-05-10'
      }
    ],
    contractManagement: [
      {
        vendor: 'Microsoft Corporation',
        contractType: 'Enterprise Agreement',
        value: 3600000,
        startDate: '2024-01-01',
        endDate: '2026-12-31',
        status: 'ACTIVE',
        renewalStatus: 'UNDER_REVIEW',
        autoRenewal: false,
        paymentTerms: 'Net 30',
        keyTerms: ['Volume discounts', 'Support included', 'Upgrade rights'],
        performanceClause: true,
        penaltyClause: true,
        nextMilestone: 'Renewal negotiation',
        riskFactors: ['Price increase', 'License compliance'],
        manager: 'IT Procurement'
      },
      {
        vendor: 'Acme Manufacturing',
        contractType: 'Supply Agreement',
        value: 2400000,
        startDate: '2025-09-01',
        endDate: '2026-08-31',
        status: 'ACTIVE',
        renewalStatus: 'PLANNING',
        autoRenewal: false,
        paymentTerms: 'Net 45',
        keyTerms: ['Quality guarantees', 'Delivery SLA', 'Volume commitments'],
        performanceClause: true,
        penaltyClause: true,
        nextMilestone: 'Performance review',
        riskFactors: ['Quality issues', 'Delivery delays', 'Capacity constraints'],
        manager: 'Procurement Manager'
      },
      {
        vendor: 'CleanCorp Services',
        contractType: 'Service Agreement',
        value: 480000,
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        status: 'ACTIVE',
        renewalStatus: 'AUTO_RENEW',
        autoRenewal: true,
        paymentTerms: 'Net 15',
        keyTerms: ['Daily service', 'Quality standards', 'Green cleaning'],
        performanceClause: false,
        penaltyClause: false,
        nextMilestone: 'Quarterly review',
        riskFactors: ['Staff turnover', 'Service quality'],
        manager: 'Facilities Manager'
      }
    ],
    riskAssessment: [
      {
        vendor: 'Acme Manufacturing',
        overallRisk: 'MEDIUM',
        financialRisk: 'LOW',
        operationalRisk: 'HIGH',
        reputationalRisk: 'MEDIUM',
        complianceRisk: 'MEDIUM',
        riskScore: 6.7,
        keyRisks: [
          'Quality control issues affecting product delivery',
          'Single-source dependency for critical components',
          'Limited financial transparency and reporting',
          'Recent management changes affecting stability'
        ],
        mitigationActions: [
          'Implement quality audits and inspections',
          'Develop alternative supplier sources',
          'Request financial statements and credit checks',
          'Increase communication frequency with new management'
        ],
        lastAssessment: '2026-02-28',
        nextAssessment: '2026-05-28',
        riskOwner: 'Supply Chain Manager'
      },
      {
        vendor: 'Global Components Ltd',
        overallRisk: 'MEDIUM',
        financialRisk: 'MEDIUM',
        operationalRisk: 'MEDIUM',
        reputationalRisk: 'LOW',
        complianceRisk: 'MEDIUM',
        riskScore: 5.8,
        keyRisks: [
          'Geographic concentration in single region',
          'Currency fluctuation exposure',
          'Limited disaster recovery capabilities',
          'Compliance gaps in emerging markets'
        ],
        mitigationActions: [
          'Diversify supplier base geographically',
          'Implement currency hedging strategies',
          'Require business continuity planning',
          'Enhanced due diligence for compliance'
        ],
        lastAssessment: '2026-02-15',
        nextAssessment: '2026-05-15',
        riskOwner: 'Risk Management'
      },
      {
        vendor: 'TechStart Innovation',
        overallRisk: 'HIGH',
        financialRisk: 'HIGH',
        operationalRisk: 'MEDIUM',
        reputationalRisk: 'MEDIUM',
        complianceRisk: 'HIGH',
        riskScore: 8.2,
        keyRisks: [
          'Early-stage company with limited track record',
          'Financial instability and funding concerns',
          'Intellectual property and patent risks',
          'Limited security and compliance framework'
        ],
        mitigationActions: [
          'Require financial guarantees and escrow',
          'Regular financial health monitoring',
          'IP indemnification clauses in contracts',
          'Security assessment and improvement plan'
        ],
        lastAssessment: '2026-03-10',
        nextAssessment: '2026-04-10',
        riskOwner: 'Legal & Compliance'
      }
    ],
    vendorAlerts: [
      {
        type: 'CRITICAL',
        category: 'Contract Expiration',
        message: 'Microsoft Enterprise Agreement expires in 9 months - renewal negotiation should begin',
        vendor: 'Microsoft Corporation',
        contractValue: 3600000,
        expiryDate: '2026-12-31',
        daysToExpiry: 288,
        timestamp: '09:25',
        priority: 'HIGH',
        owner: 'IT Procurement Manager',
        action: 'Initiate renewal discussions, assess current usage, negotiate terms',
        impact: 'Critical business systems dependent on Microsoft services',
        urgency: 'HIGH',
        escalation: 'PROCUREMENT_COMMITTEE'
      },
      {
        type: 'HIGH',
        category: 'Performance Alert',
        message: 'Acme Manufacturing delivery performance below 85% target for 3 consecutive months',
        vendor: 'Acme Manufacturing',
        metric: 'On-time Delivery',
        current: 84.3,
        target: 90.0,
        trend: 'DECLINING',
        timestamp: '09:24',
        priority: 'HIGH',
        owner: 'Supply Chain Manager',
        action: 'Schedule immediate performance review, implement improvement plan',
        impact: 'Production delays affecting customer commitments',
        urgency: 'HIGH',
        escalation: 'SUPPLIER_REVIEW_BOARD'
      },
      {
        type: 'WARNING',
        category: 'Risk Assessment',
        message: 'TechStart Innovation financial stability concerns - credit rating downgraded',
        vendor: 'TechStart Innovation',
        riskLevel: 'HIGH',
        riskScore: 8.2,
        previousScore: 6.9,
        change: '+1.3',
        timestamp: '09:23',
        priority: 'MEDIUM',
        owner: 'Risk Manager',
        action: 'Request updated financials, consider contract guarantees',
        impact: 'Innovation project timeline and deliverables at risk',
        urgency: 'MEDIUM',
        escalation: 'RISK_COMMITTEE'
      },
      {
        type: 'INFO',
        category: 'Savings Opportunity',
        message: 'IT & Technology category showing $780K potential savings through consolidation',
        category_name: 'IT & Technology',
        savingsAmount: 780000,
        savingsPercent: 5.0,
        method: 'Vendor consolidation and volume discounts',
        timestamp: '09:22',
        priority: 'LOW',
        owner: 'Procurement Analyst',
        action: 'Conduct spend analysis, identify consolidation opportunities',
        impact: 'Cost reduction without service degradation',
        urgency: 'LOW',
        opportunity: 'COST_OPTIMIZATION'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setVendorData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        vendorOverview: {
          ...prev.vendorOverview,
          activeVendors: Math.max(285, Math.min(295, prev.vendorOverview.activeVendors + Math.floor((Math.random() - 0.5) * 4))),
          avgVendorScore: Math.max(85.0, Math.min(90.0, prev.vendorOverview.avgVendorScore + (Math.random() - 0.5) * 0.8)),
          onTimeDelivery: Math.max(92.0, Math.min(97.0, prev.vendorOverview.onTimeDelivery + (Math.random() - 0.5) * 0.6))
        }
      }));
    }, 58000);

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

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getRelationshipColor = (relationship) => {
    switch (relationship) {
      case 'STRATEGIC': return 'text-purple-400 bg-purple-400/20';
      case 'PREFERRED': return 'text-green-400 bg-green-400/20';
      case 'APPROVED': return 'text-blue-400 bg-blue-400/20';
      case 'UNDER_REVIEW': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-400/20';
      case 'EXPIRED': return 'text-red-400 bg-red-400/20';
      case 'PENDING': return 'text-yellow-400 bg-yellow-400/20';
      case 'SUSPENDED': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getRenewalStatusColor = (renewalStatus) => {
    switch (renewalStatus) {
      case 'AUTO_RENEW': return 'text-green-400 bg-green-400/20';
      case 'UNDER_REVIEW': return 'text-yellow-400 bg-yellow-400/20';
      case 'PLANNING': return 'text-blue-400 bg-blue-400/20';
      case 'NEGOTIATING': return 'text-orange-400 bg-orange-400/20';
      case 'EXPIRED': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
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

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-blue-400';
    if (score >= 70) return 'text-yellow-400';
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
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Vendor Management Intelligence Center</h1>
              <p className="text-blue-300">Supplier performance & procurement analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{vendorData.currentTime}</div>
            <div className="text-blue-300">Vendor Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Vendor Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                Vendors
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{vendorData.vendorOverview.activeVendors}</div>
            <div className="text-blue-300 text-sm">{vendorData.vendorOverview.totalVendors} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                Spend
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(vendorData.vendorOverview.totalSpend)}</div>
            <div className="text-green-300 text-sm">Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                Score
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(vendorData.vendorOverview.avgVendorScore)}`}>
              {vendorData.vendorOverview.avgVendorScore.toFixed(1)}
            </div>
            <div className="text-yellow-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-orange-400 mr-2" />
                Delivery
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(vendorData.vendorOverview.onTimeDelivery)}`}>
              {formatPercentage(vendorData.vendorOverview.onTimeDelivery)}
            </div>
            <div className="text-orange-300 text-sm">On Time</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                Quality
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(vendorData.vendorOverview.qualityScore)}`}>
              {formatPercentage(vendorData.vendorOverview.qualityScore)}
            </div>
            <div className="text-purple-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                Savings
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatCurrency(vendorData.vendorOverview.savingsRealized)}</div>
            <div className="text-cyan-300 text-sm">Realized</div>
          </div>
        </div>

        {/* Vendor Categories */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
            Vendor Category Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Vendors</th>
                  <th className="text-center p-3 text-slate-300">Spend</th>
                  <th className="text-center p-3 text-slate-300">Score</th>
                  <th className="text-center p-3 text-slate-300">Risk</th>
                  <th className="text-center p-3 text-slate-300">Savings</th>
                </tr>
              </thead>
              <tbody>
                {vendorData.vendorCategories.map((category, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{category.category}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        {category.topPerformers} top performers • {category.contracts} contracts
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-blue-400 font-medium">{category.vendorCount}</div>
                      <div className="text-slate-400 text-xs">{formatPercentage(category.spendPercentage)}</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-green-400 font-medium">{formatCurrency(category.spend)}</div>
                      <div className="text-slate-400 text-xs">{formatPercentage(category.performance.delivery)} delivery</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(category.avgScore)}`}>
                      {category.avgScore.toFixed(1)}
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getRiskColor(category.riskLevel)}`}>
                        {category.riskLevel}
                      </span>
                    </td>
                    <td className="p-3 text-center text-cyan-400 font-medium">
                      {formatCurrency(category.savingsOpportunity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Vendors & Contract Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              Top Vendor Performance
            </h3>
            <div className="space-y-4">
              {vendorData.topVendors.map((vendor, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{vendor.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getRelationshipColor(vendor.relationship)}`}>
                        {vendor.relationship}
                      </span>
                      <span className={`text-sm font-bold ${getScoreColor(vendor.score)}`}>
                        {vendor.score.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Spend: {formatCurrency(vendor.spend)}</div>
                    <div className="text-blue-400">Contract: {formatCurrency(vendor.contractValue)}</div>
                    <div className="text-purple-400">Expires: {vendor.contractEnd}</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs mb-2">
                    <div className={`${getScoreColor(vendor.performance.delivery)}`}>Del: {formatPercentage(vendor.performance.delivery)}</div>
                    <div className={`${getScoreColor(vendor.performance.quality)}`}>Qual: {formatPercentage(vendor.performance.quality)}</div>
                    <div className={`${getScoreColor(vendor.performance.innovation)}`}>Innov: {formatPercentage(vendor.performance.innovation)}</div>
                    <div className={`${getScoreColor(vendor.performance.support)}`}>Supp: {formatPercentage(vendor.performance.support)}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Strengths:</strong> {vendor.strengths.slice(0, 2).join(', ')}{vendor.strengths.length > 2 ? '...' : ''}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Next Review:</strong> {vendor.nextReview} • <strong>Risk:</strong> {vendor.riskLevel}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-orange-400 mr-2" />
              Contract Management Dashboard
            </h3>
            <div className="space-y-4">
              {vendorData.contractManagement.map((contract, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{contract.vendor}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(contract.status)}`}>
                        {contract.status}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getRenewalStatusColor(contract.renewalStatus)}`}>
                        {contract.renewalStatus.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div className="text-green-400">Value: {formatCurrency(contract.value)}</div>
                    <div className="text-blue-400">Type: {contract.contractType}</div>
                    <div className="text-orange-400">Start: {contract.startDate}</div>
                    <div className="text-red-400">End: {contract.endDate}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Terms:</strong> {contract.paymentTerms}, {contract.keyTerms.join(', ')}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Next Milestone:</strong> {contract.nextMilestone}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Manager:</strong> {contract.manager} • <strong>Auto-Renew:</strong> {contract.autoRenewal ? 'Yes' : 'No'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Assessment & Vendor Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              Vendor Risk Assessment
            </h3>
            <div className="space-y-4">
              {vendorData.riskAssessment.map((risk, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{risk.vendor}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getRiskColor(risk.overallRisk)}`}>
                        {risk.overallRisk} RISK
                      </span>
                      <span className="text-red-400 text-xs">{risk.riskScore.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs mb-2">
                    <div className={`${getRiskColor(risk.financialRisk).split(' ')[0]}`}>Fin: {risk.financialRisk}</div>
                    <div className={`${getRiskColor(risk.operationalRisk).split(' ')[0]}`}>Ops: {risk.operationalRisk}</div>
                    <div className={`${getRiskColor(risk.reputationalRisk).split(' ')[0]}`}>Rep: {risk.reputationalRisk}</div>
                    <div className={`${getRiskColor(risk.complianceRisk).split(' ')[0]}`}>Comp: {risk.complianceRisk}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Key Risks:</strong> {risk.keyRisks.slice(0, 2).join('; ')}{risk.keyRisks.length > 2 ? '...' : ''}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Mitigation:</strong> {risk.mitigationActions.slice(0, 2).join('; ')}{risk.mitigationActions.length > 2 ? '...' : ''}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Owner:</strong> {risk.riskOwner} • <strong>Next Review:</strong> {risk.nextAssessment}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              Vendor Management Alerts
            </h3>
            <div className="space-y-4">
              {vendorData.vendorAlerts.map((alert, index) => (
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
                    <div className="text-slate-300">Vendor: {alert.vendor}</div>
                    <div className="text-slate-300">Owner: {alert.owner}</div>
                    {alert.contractValue && <div className="text-slate-300">Value: {formatCurrency(alert.contractValue)}</div>}
                    {alert.savingsAmount && <div className="text-slate-300">Savings: {formatCurrency(alert.savingsAmount)}</div>}
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