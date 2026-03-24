// Insurance & Risk Intelligence Center - Claims Processing, Risk Analytics, Fraud Detection & Policy Administration
import { useState, useEffect } from 'react';
import { Shield, FileText, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Brain } from 'lucide-react';

export default function InsuranceRiskIntelligenceCenter() {
  const [insuranceData, setInsuranceData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalPremiums: 6789012345678, // EUR annually
      totalPolicies: 4567890123,
      claimsProcessed: 234567890, // annually
      fraudDetectionRate: 94.2, // percentage
      averageClaimValue: 12345, // EUR
      customerSatisfaction: 8.1,
      digitalizationRate: 67.8,
      catastropheLosses: 234567890123, // EUR annually
      riskAssessmentAccuracy: 89.7,
      employeeCount: 23456789,
      regulatoryCompliance: 96.4,
      profitMargin: 8.9
    },
    majorInsurers: [
      {
        company: 'Allianz',
        category: 'Multi-line Insurance',
        revenue: 145678901234, // EUR annual
        premiums: 123456789012,
        policies: 89000000,
        countries: 70,
        claimsRatio: 67.8,
        digitalAdoption: 78.9,
        fraudDetection: 96.2,
        customerSatisfaction: 8.4,
        riskScore: 2.1, // lower is better
        employeeCount: 155000,
        marketShare: 12.4
      },
      {
        company: 'AXA',
        category: 'Life & General Insurance',
        revenue: 123456789012,
        premiums: 98765432109,
        policies: 76000000,
        countries: 50,
        claimsRatio: 69.3,
        digitalAdoption: 82.1,
        fraudDetection: 94.7,
        customerSatisfaction: 8.2,
        riskScore: 2.3,
        employeeCount: 149000,
        marketShare: 10.8
      },
      {
        company: 'Berkshire Hathaway',
        category: 'Property & Casualty',
        revenue: 234567890123,
        premiums: 189012345678,
        policies: 45000000,
        countries: 25,
        claimsRatio: 71.2,
        digitalAdoption: 65.4,
        fraudDetection: 91.8,
        customerSatisfaction: 8.6,
        riskScore: 1.8,
        employeeCount: 371000,
        marketShare: 8.9
      },
      {
        company: 'Zurich Insurance',
        category: 'Commercial Insurance',
        revenue: 67890123456,
        premiums: 54321098765,
        policies: 34000000,
        countries: 40,
        claimsRatio: 68.4,
        digitalAdoption: 76.3,
        fraudDetection: 93.5,
        customerSatisfaction: 8.3,
        riskScore: 2.0,
        employeeCount: 54000,
        marketShare: 6.7
      }
    ],
    claimsProcessing: {
      dailyVolume: 1234567,
      avgProcessingTime: 14.2, // days
      automationRate: 67.8, // percentage
      straightThroughProcessing: 34.6,
      appealRate: 12.3,
      settlementAccuracy: 94.7,
      customerPortalUsage: 78.9,
      mobileClaimSubmissions: 56.7,
      claimTypes: [
        {
          type: 'Auto Insurance',
          volume: 456789,
          avgValue: 4567, // EUR
          processingTime: 12.4, // days
          fraudRate: 8.9,
          settlementRate: 87.3,
          customerSatisfaction: 7.8
        },
        {
          type: 'Property Insurance',
          volume: 234567,
          avgValue: 12345,
          processingTime: 18.7,
          fraudRate: 6.2,
          settlementRate: 89.6,
          customerSatisfaction: 8.1
        },
        {
          type: 'Health Insurance',
          volume: 345678,
          avgValue: 2345,
          processingTime: 8.3,
          fraudRate: 12.7,
          settlementRate: 91.2,
          customerSatisfaction: 7.9
        },
        {
          type: 'Life Insurance',
          volume: 123456,
          avgValue: 34567,
          processingTime: 23.4,
          fraudRate: 3.1,
          settlementRate: 96.8,
          customerSatisfaction: 8.9
        }
      ]
    },
    riskAssessment: {
      underwritingModels: {
        traditionalActuarial: 34.6, // percentage of policies
        aiMlModels: 45.7,
        hybridApproach: 19.7
      },
      riskFactors: [
        {
          factor: 'Climate Risk',
          impact: 67.8,
          dataAvailability: 89.3,
          modelAccuracy: 78.9,
          businessImpact: 'HIGH',
          trends: '+23.4%'
        },
        {
          factor: 'Cyber Risk',
          impact: 89.4,
          dataAvailability: 67.2,
          modelAccuracy: 71.8,
          businessImpact: 'CRITICAL',
          trends: '+156.7%'
        },
        {
          factor: 'Economic Risk',
          impact: 56.7,
          dataAvailability: 94.1,
          modelAccuracy: 86.3,
          businessImpact: 'MEDIUM',
          trends: '+12.8%'
        },
        {
          factor: 'Demographic Risk',
          impact: 45.3,
          dataAvailability: 91.6,
          modelAccuracy: 82.7,
          businessImpact: 'MEDIUM',
          trends: '+8.9%'
        }
      ],
      catastropheModeling: {
        naturalDisasters: 78.9,
        pandemicModeling: 45.6,
        cyberAttacks: 34.2,
        economicDownturns: 67.8,
        climateChange: 89.3,
        geopoliticalEvents: 23.4
      }
    },
    fraudDetection: {
      detectionMethods: [
        {
          method: 'AI/ML Analytics',
          effectiveness: 89.7,
          implementation: 67.8,
          falsePositives: 8.3,
          costSavings: 123456789, // EUR annually
          detectionSpeed: 2.3 // hours
        },
        {
          method: 'Pattern Recognition',
          effectiveness: 78.9,
          implementation: 89.4,
          falsePositives: 12.6,
          costSavings: 98765432,
          detectionSpeed: 8.7
        },
        {
          method: 'Social Network Analysis',
          effectiveness: 67.3,
          implementation: 34.6,
          falsePositives: 15.2,
          costSavings: 45678901,
          detectionSpeed: 24.1
        },
        {
          method: 'Biometric Verification',
          effectiveness: 94.2,
          implementation: 23.4,
          falsePositives: 3.7,
          costSavings: 67890123,
          detectionSpeed: 0.8
        }
      ],
      fraudTypes: {
        staginAccidents: 23.4, // percentage of fraud cases
        exaggeratedClaims: 34.6,
        identityTheft: 18.9,
        documentForgery: 12.7,
        premiumFraud: 7.8,
        other: 2.6
      },
      investigation: {
        averageInvestigationTime: 45.6, // days
        investigationCosts: 23456789, // EUR annually
        recoveryRate: 67.8, // percentage
        prosecutionRate: 23.4,
        preventionSavings: 456789012
      }
    },
    digitalTransformation: {
      customerPortals: 78.9, // adoption percentage
      mobileApps: 67.3,
      chatbots: 89.4,
      aiUnderwriting: 45.6,
      blockchainVerification: 12.3,
      iotDevices: 34.7,
      telematics: 56.8,
      smartContracts: 18.9,
      apiIntegration: 67.8,
      cloudMigration: 78.2,
      dataAnalytics: 91.6,
      cybersecurityInvestment: 234567890 // EUR annually
    },
    regulatoryCompliance: {
      frameworks: [
        {
          regulation: 'Solvency II',
          complianceScore: 96.7,
          capitalRequirement: 234567890123, // EUR
          currentCapital: 345678901234,
          status: 'Compliant',
          lastAudit: '2026-02-15',
          nextReview: '2026-08-15'
        },
        {
          regulation: 'GDPR',
          complianceScore: 94.2,
          dataRequests: 2345, // monthly
          breachReports: 12,
          status: 'Compliant',
          lastAudit: '2026-01-20',
          nextReview: '2026-07-20'
        },
        {
          regulation: 'IFRS 17',
          complianceScore: 89.8,
          implementationProgress: 78.9,
          reportingAccuracy: 94.2,
          status: 'In Progress',
          lastAudit: '2026-03-01',
          nextReview: '2026-06-01'
        }
      ],
      monitoring: {
        capitalAdequacy: 145.7, // percentage
        liquidityRatio: 234.6,
        solvencyRatio: 189.3,
        reserveAdequacy: 112.4,
        riskBasedCapital: 167.8
      }
    },
    emergingRisks: [
      {
        risk: 'Climate Change',
        probability: 89.7,
        impact: 'CRITICAL',
        preparedness: 67.8,
        exposure: 234567890123, // EUR
        mitigation: 78.9,
        timeframe: '5-10 years'
      },
      {
        risk: 'Cyber Attacks',
        probability: 78.9,
        impact: 'HIGH',
        preparedness: 56.7,
        exposure: 123456789012,
        mitigation: 67.3,
        timeframe: '1-2 years'
      },
      {
        risk: 'Pandemic',
        probability: 34.6,
        impact: 'CRITICAL',
        preparedness: 78.4,
        exposure: 345678901234,
        mitigation: 82.1,
        timeframe: '2-5 years'
      },
      {
        risk: 'Economic Recession',
        probability: 56.8,
        impact: 'HIGH',
        preparedness: 89.3,
        exposure: 456789012345,
        mitigation: 91.6,
        timeframe: '1-3 years'
      }
    ],
    insuranceAlerts: [
      {
        type: 'CRITICAL',
        category: 'Catastrophe Event',
        message: 'Major hurricane approaching - estimated €2.3B in potential claims across affected regions',
        region: 'North America',
        impact: 'CRITICAL',
        actionRequired: true,
        timestamp: '04:05',
        recommendations: ['Reserve activation', 'Claims preparation', 'Customer communication', 'Reinsurance coordination']
      },
      {
        type: 'WARNING',
        category: 'Fraud Alert',
        message: 'Coordinated fraud ring detected - 234 suspicious claims flagged across multiple jurisdictions',
        region: 'Europe',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '04:02',
        recommendations: ['Investigation launch', 'Pattern analysis', 'Law enforcement', 'Prevention enhancement']
      },
      {
        type: 'SUCCESS',
        category: 'AI Implementation',
        message: 'New AI underwriting system reduces processing time by 67% while improving accuracy',
        region: 'Global',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '03:58',
        recommendations: ['Global rollout', 'Performance monitoring', 'Training programs', 'Customer communication']
      },
      {
        type: 'INFO',
        category: 'Regulatory Update',
        message: 'New ESG reporting requirements announced - implementation deadline Q4 2026',
        region: 'Europe',
        impact: 'LOW',
        actionRequired: false,
        timestamp: '03:55',
        recommendations: ['Compliance planning', 'System updates', 'Data collection', 'Reporting framework']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setInsuranceData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        claimsProcessing: {
          ...prev.claimsProcessing,
          dailyVolume: Math.max(1000000, Math.min(1500000, prev.claimsProcessing.dailyVolume + Math.floor((Math.random() - 0.5) * 50000)))
        },
        fraudDetection: {
          ...prev.fraudDetection,
          detectionMethods: prev.fraudDetection.detectionMethods.map(method => ({
            ...method,
            effectiveness: Math.max(method.effectiveness - 5, Math.min(method.effectiveness + 5, method.effectiveness + (Math.random() - 0.5) * 2))
          }))
        }
      }));
    }, 50000);

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

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'POSITIVE': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 80, excellent = 90) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getRiskColor = (value, low = 2, medium = 4) => {
    if (value <= low) return 'text-green-400';
    if (value <= medium) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Multi-line Insurance': return 'text-blue-400 bg-blue-400/20';
      case 'Life & General Insurance': return 'text-green-400 bg-green-400/20';
      case 'Property & Casualty': return 'text-purple-400 bg-purple-400/20';
      case 'Commercial Insurance': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000000) {
      return `${(num / 1000000000000).toFixed(1)}T`;
    }
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000000000) {
      return `€${(amount / 1000000000000).toFixed(1)}T`;
    }
    if (amount >= 1000000000) {
      return `€${(amount / 1000000000).toFixed(1)}B`;
    }
    if (amount >= 1000000) {
      return `€${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `€${(amount / 1000).toFixed(0)}K`;
    }
    return `€${amount.toLocaleString()}`;
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Insurance & Risk Intelligence Center</h1>
              <p className="text-indigo-300">Claims processing, risk analytics, fraud detection & policy administration</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-indigo-400">{insuranceData.currentTime}</div>
            <div className="text-indigo-300">Insurance Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-indigo-400 mr-2" />
                Global Premiums
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{formatCurrency(insuranceData.industryOverview.globalPremiums)}</div>
            <div className="text-indigo-300 text-sm">Policies: {formatNumber(insuranceData.industryOverview.totalPolicies)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <FileText className="w-5 h-5 text-green-400 mr-2" />
                Claims Processed
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(insuranceData.industryOverview.claimsProcessed)}</div>
            <div className="text-green-300 text-sm">Avg Value: {formatCurrency(insuranceData.industryOverview.averageClaimValue)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                Fraud Detection
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(insuranceData.industryOverview.fraudDetectionRate)}</div>
            <div className="text-purple-300 text-sm">Detection Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-orange-400 mr-2" />
                Customer Satisfaction
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{insuranceData.industryOverview.customerSatisfaction.toFixed(1)}</div>
            <div className="text-orange-300 text-sm">Rating Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                Digitalization
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatPercentage(insuranceData.industryOverview.digitalizationRate)}</div>
            <div className="text-emerald-300 text-sm">Digital Adoption</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                Employment
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(insuranceData.industryOverview.employeeCount)}</div>
            <div className="text-yellow-300 text-sm">Global Workforce</div>
          </div>
        </div>

        {/* Major Insurance Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 text-indigo-400 mr-2" />
            Major Insurance Companies Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Company</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Premiums</th>
                  <th className="text-center p-3 text-slate-300">Policies</th>
                  <th className="text-center p-3 text-slate-300">Claims Ratio</th>
                  <th className="text-center p-3 text-slate-300">Fraud Detection</th>
                  <th className="text-center p-3 text-slate-300">Digital Adoption</th>
                </tr>
              </thead>
              <tbody>
                {insuranceData.majorInsurers.map((insurer, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{insurer.company}</div>
                      <div className="text-slate-400 text-xs">{insurer.countries} countries • {formatNumber(insurer.employeeCount)} employees • {formatPercentage(insurer.marketShare)} market share</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(insurer.category)}`}>
                        {insurer.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(insurer.premiums)}</td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(insurer.policies)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(100 - insurer.claimsRatio, 25, 35)}`}>
                      {formatPercentage(insurer.claimsRatio)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(insurer.fraudDetection, 90, 95)}`}>
                      {formatPercentage(insurer.fraudDetection)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(insurer.digitalAdoption, 70, 80)}`}>
                      {formatPercentage(insurer.digitalAdoption)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Claims Processing & Risk Assessment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FileText className="w-5 h-5 text-green-400 mr-2" />
              Claims Processing Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatNumber(insuranceData.claimsProcessing.dailyVolume)}</div>
                <div className="text-green-300 text-sm">Daily Volume</div>
                <div className="text-gray-400 text-xs mt-1">Claims Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{insuranceData.claimsProcessing.avgProcessingTime.toFixed(1)} days</div>
                <div className="text-blue-300 text-sm">Processing Time</div>
                <div className="text-gray-400 text-xs mt-1">Average Duration</div>
              </div>
            </div>
            <div className="space-y-4">
              {insuranceData.claimsProcessing.claimTypes.map((claim, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{claim.type}</span>
                      <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {formatNumber(claim.volume)} claims
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">★{claim.customerSatisfaction.toFixed(1)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-blue-400">Avg Value: {formatCurrency(claim.avgValue)}</div>
                      <div className="text-purple-400">Processing: {claim.processingTime.toFixed(1)} days</div>
                      <div className="text-green-400">Settlement: {formatPercentage(claim.settlementRate)}</div>
                    </div>
                    <div>
                      <div className="text-red-400">Fraud Rate: {formatPercentage(claim.fraudRate)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
              Risk Assessment Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatPercentage(insuranceData.riskAssessment.underwritingModels.aiMlModels)}</div>
                <div className="text-purple-300 text-sm">AI/ML Models</div>
                <div className="text-gray-400 text-xs mt-1">Underwriting</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(insuranceData.industryOverview.riskAssessmentAccuracy)}</div>
                <div className="text-cyan-300 text-sm">Assessment Accuracy</div>
                <div className="text-gray-400 text-xs mt-1">Risk Models</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Risk Factors</h4>
              {insuranceData.riskAssessment.riskFactors.map((risk, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{risk.factor}</div>
                    <div className="text-slate-400 text-xs">Trend: {risk.trends} • Data: {formatPercentage(risk.dataAvailability)}</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className={`${getImpactColor(risk.businessImpact).split(' ')[0]} text-xs`}>{risk.businessImpact}</div>
                    <div className="text-blue-400">Accuracy: {formatPercentage(risk.modelAccuracy)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fraud Detection & Digital Transformation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-red-400 mr-2" />
              Fraud Detection Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatPercentage(insuranceData.fraudDetection.investigation.recoveryRate)}</div>
                <div className="text-red-300 text-sm">Recovery Rate</div>
                <div className="text-gray-400 text-xs mt-1">Fraud Investigation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatCurrency(insuranceData.fraudDetection.investigation.preventionSavings)}</div>
                <div className="text-green-300 text-sm">Prevention Savings</div>
                <div className="text-gray-400 text-xs mt-1">Annual Benefit</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Detection Methods</h4>
              {insuranceData.fraudDetection.detectionMethods.slice(0, 3).map((method, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{method.method}</div>
                    <div className="text-slate-400 text-xs">Speed: {method.detectionSpeed.toFixed(1)}h • FP: {formatPercentage(method.falsePositives)}</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-green-400">{formatPercentage(method.effectiveness)} effective</div>
                    <div className="text-blue-400">{formatCurrency(method.costSavings)}/yr</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Fraud Types</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Exaggerated Claims</span>
                  <span className="text-red-400">{formatPercentage(insuranceData.fraudDetection.fraudTypes.exaggeratedClaims)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Staged Accidents</span>
                  <span className="text-orange-400">{formatPercentage(insuranceData.fraudDetection.fraudTypes.staginAccidents)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Identity Theft</span>
                  <span className="text-yellow-400">{formatPercentage(insuranceData.fraudDetection.fraudTypes.identityTheft)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Document Forgery</span>
                  <span className="text-blue-400">{formatPercentage(insuranceData.fraudDetection.fraudTypes.documentForgery)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
              Digital Transformation Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatPercentage(insuranceData.digitalTransformation.dataAnalytics)}</div>
                <div className="text-emerald-300 text-sm">Data Analytics</div>
                <div className="text-gray-400 text-xs mt-1">Implementation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(insuranceData.digitalTransformation.cloudMigration)}</div>
                <div className="text-cyan-300 text-sm">Cloud Migration</div>
                <div className="text-gray-400 text-xs mt-1">Progress</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Digital Capabilities</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Chatbots</span>
                  <span className="text-green-400">{formatPercentage(insuranceData.digitalTransformation.chatbots)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Customer Portals</span>
                  <span className="text-blue-400">{formatPercentage(insuranceData.digitalTransformation.customerPortals)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">API Integration</span>
                  <span className="text-purple-400">{formatPercentage(insuranceData.digitalTransformation.apiIntegration)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Mobile Apps</span>
                  <span className="text-orange-400">{formatPercentage(insuranceData.digitalTransformation.mobileApps)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Telematics</span>
                  <span className="text-cyan-400">{formatPercentage(insuranceData.digitalTransformation.telematics)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AI Underwriting</span>
                  <span className="text-pink-400">{formatPercentage(insuranceData.digitalTransformation.aiUnderwriting)}</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <h4 className="text-white text-sm font-medium mb-2">Technology Investment</h4>
              <div className="text-center">
                <div className="text-lg font-bold text-red-400">{formatCurrency(insuranceData.digitalTransformation.cybersecurityInvestment)}</div>
                <div className="text-slate-300 text-xs">Annual Cybersecurity Investment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Insurance & Risk Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {insuranceData.insuranceAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                  <div>
                    <div className="text-slate-300">Region: {alert.region}</div>
                    <div className="text-slate-300">Action: {alert.actionRequired ? 'Required' : 'Monitoring'}</div>
                  </div>
                  <div>
                    <div className={`${getImpactColor(alert.impact).split(' ')[0]} text-xs`}>
                      Impact: {alert.impact}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
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

        {/* Emerging Risks & Regulatory Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingDown className="w-5 h-5 text-red-400 mr-2" />
              Emerging Risks Intelligence
            </h3>
            <div className="space-y-4">
              {insuranceData.emergingRisks.map((risk, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{risk.risk}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getImpactColor(risk.impact)}`}>
                        {risk.impact}
                      </span>
                    </div>
                    <span className="text-red-400 text-sm">{formatPercentage(risk.probability)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-blue-400">Exposure: {formatCurrency(risk.exposure)}</div>
                      <div className="text-green-400">Preparedness: {formatPercentage(risk.preparedness)}</div>
                      <div className="text-purple-400">Mitigation: {formatPercentage(risk.mitigation)}</div>
                    </div>
                    <div>
                      <div className="text-orange-400">Timeframe: {risk.timeframe}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
              Regulatory Compliance Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatPercentage(insuranceData.regulatoryCompliance.monitoring.capitalAdequacy)}</div>
                <div className="text-emerald-300 text-sm">Capital Adequacy</div>
                <div className="text-gray-400 text-xs mt-1">Regulatory Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(insuranceData.regulatoryCompliance.monitoring.solvencyRatio)}</div>
                <div className="text-blue-300 text-sm">Solvency Ratio</div>
                <div className="text-gray-400 text-xs mt-1">Risk Coverage</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white text-sm font-medium">Regulatory Frameworks</h4>
              {insuranceData.regulatoryCompliance.frameworks.map((framework, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium">{framework.regulation}</span>
                      <span className={`px-2 py-1 rounded text-xs ${framework.status === 'Compliant' ? 'text-green-400 bg-green-400/20' : framework.status === 'In Progress' ? 'text-yellow-400 bg-yellow-400/20' : 'text-red-400 bg-red-400/20'}`}>
                        {framework.status}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatPercentage(framework.complianceScore)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                    <div>Last Audit: {framework.lastAudit}</div>
                    <div>Next Review: {framework.nextReview}</div>
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