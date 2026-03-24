// Pharmaceutical & Healthcare Intelligence Center - Drug Development, Clinical Trials, Regulatory Approvals & Medical Innovation
import { useState, useEffect } from 'react';
import { Pill, FlaskConical, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Brain, Activity, Zap } from 'lucide-react';

export default function PharmaceuticalHealthcareIntelligenceCenter() {
  const [pharmaData, setPharmaData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalMarketSize: 1678901234567, // EUR annually
      rdInvestment: 234567890123, // EUR annually
      activeDrugs: 34567890,
      clinicalTrials: 456789,
      approvedDrugs2024: 23456, // new approvals
      patentExpirations: 12345, // this year
      fdaApprovals: 1234, // this year
      employeeCount: 12345678,
      manufacturingFacilities: 34567,
      digitalHealthMarket: 456789012345, // EUR
      averageDevCost: 2345678901, // EUR per drug
      successRate: 12.3 // percentage from discovery to market
    },
    majorPharmaCompanies: [
      {
        company: 'Pfizer',
        category: 'Large Pharma',
        revenue: 89012345678, // EUR annual
        rdSpending: 12345678901,
        rdPercentage: 13.9,
        pipelineDrugs: 456,
        employees: 83000,
        countries: 125,
        approvals2024: 12,
        patentCliff: 'Low',
        digitalTransformation: 78.9,
        sustainabilityScore: 8.2,
        stockPerformance: '+12.4%'
      },
      {
        company: 'Roche',
        category: 'Pharma/Biotech',
        revenue: 67890123456,
        rdSpending: 14567890123,
        rdPercentage: 21.4,
        pipelineDrugs: 234,
        employees: 101000,
        countries: 100,
        approvals2024: 8,
        patentCliff: 'Medium',
        digitalTransformation: 82.1,
        sustainabilityScore: 8.7,
        stockPerformance: '+8.9%'
      },
      {
        company: 'Novartis',
        category: 'Large Pharma',
        revenue: 56789012345,
        rdSpending: 11234567890,
        rdPercentage: 19.8,
        pipelineDrugs: 345,
        employees: 108000,
        countries: 140,
        approvals2024: 15,
        patentCliff: 'High',
        digitalTransformation: 75.6,
        sustainabilityScore: 8.5,
        stockPerformance: '+6.7%'
      },
      {
        company: 'Johnson & Johnson',
        category: 'Diversified Healthcare',
        revenue: 78901234567,
        rdSpending: 15678901234,
        rdPercentage: 19.8,
        pipelineDrugs: 567,
        employees: 141000,
        countries: 60,
        approvals2024: 11,
        patentCliff: 'Medium',
        digitalTransformation: 71.3,
        sustainabilityScore: 8.8,
        stockPerformance: '+14.2%'
      }
    ],
    drugDevelopment: {
      phases: [
        {
          phase: 'Discovery',
          duration: '3-6 years',
          activeDrugs: 123456,
          successRate: 78.9,
          averageCost: 234567890, // EUR
          keyActivities: ['Target identification', 'Lead optimization', 'Preclinical testing']
        },
        {
          phase: 'Phase I',
          duration: '1-2 years',
          activeDrugs: 5678,
          successRate: 63.2,
          averageCost: 345678901,
          keyActivities: ['Safety testing', 'Dosage determination', 'Side effects']
        },
        {
          phase: 'Phase II',
          duration: '2-3 years',
          activeDrugs: 3456,
          successRate: 31.6,
          averageCost: 567890123,
          keyActivities: ['Efficacy testing', 'Optimal dosing', 'Additional safety']
        },
        {
          phase: 'Phase III',
          duration: '1-4 years',
          activeDrugs: 1234,
          successRate: 68.4,
          averageCost: 789012345,
          keyActivities: ['Large-scale testing', 'Comparative effectiveness', 'Regulatory prep']
        },
        {
          phase: 'FDA Review',
          duration: '6-12 months',
          activeDrugs: 567,
          successRate: 89.7,
          averageCost: 123456789,
          keyActivities: ['Regulatory submission', 'FDA review', 'Approval decision']
        }
      ],
      therapeuticAreas: [
        {
          area: 'Oncology',
          pipelineDrugs: 12345,
          marketSize: 234567890123, // EUR
          growthRate: 8.9, // annual percentage
          approvals2024: 89,
          averageDevTime: '12.4 years',
          successRate: 8.7,
          competitiveness: 'HIGH'
        },
        {
          area: 'Immunology',
          pipelineDrugs: 8901,
          marketSize: 156789012345,
          growthRate: 12.3,
          approvals2024: 67,
          averageDevTime: '11.2 years',
          successRate: 13.4,
          competitiveness: 'CRITICAL'
        },
        {
          area: 'Neurology',
          pipelineDrugs: 6789,
          marketSize: 123456789012,
          growthRate: 6.7,
          approvals2024: 34,
          averageDevTime: '15.8 years',
          successRate: 5.2,
          competitiveness: 'MEDIUM'
        },
        {
          area: 'Cardiovascular',
          pipelineDrugs: 4567,
          marketSize: 98765432109,
          growthRate: 4.2,
          approvals2024: 45,
          averageDevTime: '10.6 years',
          successRate: 11.8,
          competitiveness: 'MEDIUM'
        }
      ]
    },
    clinicalTrials: {
      globalTrials: 456789,
      recruitmentRate: 67.8, // percentage on target
      averageEnrollmentTime: 234, // days
      completionRate: 78.9,
      dataQuality: 94.2,
      regulatoryCompliance: 96.7,
      patientRetention: 82.1,
      trialsByPhase: {
        phaseI: 123456,
        phaseII: 89012,
        phaseIII: 45678,
        phaseIV: 23456
      },
      trialsByRegion: {
        northAmerica: 145678,
        europe: 123456,
        asia: 98765,
        restOfWorld: 89123
      },
      digitalTrials: {
        virtualTrials: 34.6, // percentage
        decentralizedTrials: 23.4,
        digitalEndpoints: 45.7,
        wearableDevices: 56.8,
        aiDataAnalysis: 67.9,
        blockchainSecurity: 12.3
      }
    },
    regulatoryApprovals: {
      globalApprovals: 2345, // this year
      avgApprovalTime: 345, // days
      approvalRate: 78.9, // percentage
      fastTrackDesignations: 234,
        orphanDrugDesignations: 567,
        breakthroughTherapyDesignations: 123,
        regions: [
        {
          region: 'FDA (USA)',
          approvals2024: 789,
          avgReviewTime: 312, // days
          approvalRate: 89.7,
          backlog: 1234,
          fastTrack: 89,
          orphanDrugs: 234,
          breakthrough: 45
        },
        {
          region: 'EMA (Europe)',
          approvals2024: 567,
          avgReviewTime: 398,
          approvalRate: 82.3,
          backlog: 987,
          fastTrack: 67,
          orphanDrugs: 189,
          breakthrough: 34
        },
        {
          region: 'PMDA (Japan)',
          approvals2024: 234,
          avgReviewTime: 445,
          approvalRate: 76.8,
          backlog: 456,
          fastTrack: 23,
          orphanDrugs: 78,
          breakthrough: 12
        },
        {
          region: 'NMPA (China)',
          approvals2024: 345,
          avgReviewTime: 567,
          approvalRate: 71.2,
          backlog: 789,
          fastTrack: 34,
          orphanDrugs: 123,
          breakthrough: 18
        }
      ]
    },
    medicalDevices: {
      globalMarketSize: 456789012345, // EUR
      rdInvestment: 45678901234,
      newLaunches: 23456, // this year
      recallsAndSafety: 1234,
      digitalHealthDevices: 78.9, // growth percentage
      aiEnabledDevices: 34.6,
      categories: [
        {
          category: 'Diagnostic Imaging',
          marketSize: 89012345678,
          growth: 6.7,
          innovations: 234,
          companies: 1234,
          regulatoryApprovals: 567
        },
        {
          category: 'Cardiovascular',
          marketSize: 67890123456,
          growth: 8.9,
          innovations: 189,
          companies: 987,
          regulatoryApprovals: 432
        },
        {
          category: 'Orthopedic',
          marketSize: 56789012345,
          growth: 5.4,
          innovations: 156,
          companies: 765,
          regulatoryApprovals: 321
        },
        {
          category: 'Neurology',
          marketSize: 45678901234,
          growth: 12.3,
          innovations: 234,
          companies: 543,
          regulatoryApprovals: 289
        }
      ]
    },
    digitalHealth: {
      telemedicine: 78.9, // adoption percentage
      aiDiagnostics: 45.6,
      digitalTherapeutics: 34.2,
      healthApps: 89.3,
      wearableDevices: 67.8,
      blockchainHealthRecords: 12.7,
      investment: 23456789012, // EUR annually
      startups: 12345,
      partnerships: 6789,
      patentsField: 23456,
      digitalTransformation: {
        bigPharma: 67.8, // digital maturity
        biotech: 78.9,
        medtech: 72.1,
        hospitals: 54.3,
        clinics: 45.6
      }
    },
    marketTrends: {
      personalizedMedicine: {
        marketSize: 123456789012, // EUR
        growth: 15.7, // annual
        companiesInvolved: 2345,
        approvedTherapies: 456,
        pipelineTherapies: 3456
      },
      geneTherapy: {
        marketSize: 45678901234,
        growth: 23.4,
        companiesInvolved: 789,
        approvedTherapies: 89,
        pipelineTherapies: 1234
      },
      biosimilars: {
        marketSize: 67890123456,
        growth: 12.8,
        companiesInvolved: 1567,
        approvedProducts: 2345,
        pipelineProducts: 4567
      },
      rareDiseases: {
        marketSize: 234567890123,
        growth: 11.2,
        companiesInvolved: 3456,
        approvedTreatments: 1234,
        pipelineTreatments: 5678
      }
    },
    pharmaAlerts: [
      {
        type: 'CRITICAL',
        category: 'Drug Safety',
        message: 'FDA black box warning issued for cardiovascular drug - 2.3M patients affected globally',
        region: 'Global',
        impact: 'CRITICAL',
        actionRequired: true,
        timestamp: '04:12',
        recommendations: ['Patient notification', 'Prescriber alerts', 'Safety monitoring', 'Regulatory response']
      },
      {
        type: 'SUCCESS',
        category: 'Regulatory Approval',
        message: 'Breakthrough oncology therapy approved by FDA - first-in-class treatment for rare cancer',
        region: 'North America',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '04:08',
        recommendations: ['Launch preparation', 'Market access', 'Patient programs', 'HCP education']
      },
      {
        type: 'WARNING',
        category: 'Supply Chain',
        message: 'Critical drug shortage for diabetes medication affecting 450K patients in Europe',
        region: 'Europe',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '04:05',
        recommendations: ['Alternative sourcing', 'Rationing protocols', 'Patient communication', 'Regulatory notification']
      },
      {
        type: 'INFO',
        category: 'Digital Innovation',
        message: 'AI-powered drug discovery platform identifies 67 new potential COVID-19 treatments',
        region: 'Global',
        impact: 'MEDIUM',
        actionRequired: false,
        timestamp: '04:02',
        recommendations: ['Partnership opportunities', 'Technology evaluation', 'IP assessment', 'Clinical planning']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPharmaData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        clinicalTrials: {
          ...prev.clinicalTrials,
          globalTrials: Math.max(400000, Math.min(500000, prev.clinicalTrials.globalTrials + Math.floor((Math.random() - 0.5) * 1000))),
          recruitmentRate: Math.max(60, Math.min(80, prev.clinicalTrials.recruitmentRate + (Math.random() - 0.5) * 2))
        },
        regulatoryApprovals: {
          ...prev.regulatoryApprovals,
          globalApprovals: Math.max(2000, Math.min(3000, prev.regulatoryApprovals.globalApprovals + Math.floor((Math.random() - 0.5) * 10)))
        }
      }));
    }, 45000);

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

  const getPerformanceColor = (value, good = 70, excellent = 80) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSuccessRateColor = (value) => {
    if (value >= 70) return 'text-green-400';
    if (value >= 50) return 'text-blue-400';
    if (value >= 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Large Pharma': return 'text-blue-400 bg-blue-400/20';
      case 'Pharma/Biotech': return 'text-green-400 bg-green-400/20';
      case 'Diversified Healthcare': return 'text-purple-400 bg-purple-400/20';
      case 'Biotech': return 'text-pink-400 bg-pink-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getCliffColor = (cliff) => {
    switch (cliff) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getCompetitivenessColor = (level) => {
    switch (level) {
      case 'CRITICAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-gray-400';
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
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <Pill className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Pharmaceutical & Healthcare Intelligence Center</h1>
              <p className="text-blue-300">Drug development, clinical trials, regulatory approvals & medical innovation</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{pharmaData.currentTime}</div>
            <div className="text-blue-300">Pharma Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-blue-400 mr-2" />
                Global Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatCurrency(pharmaData.industryOverview.globalMarketSize)}</div>
            <div className="text-blue-300 text-sm">R&D: {formatCurrency(pharmaData.industryOverview.rdInvestment)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <FlaskConical className="w-5 h-5 text-green-400 mr-2" />
                Clinical Trials
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(pharmaData.clinicalTrials.globalTrials)}</div>
            <div className="text-green-300 text-sm">Completion: {formatPercentage(pharmaData.clinicalTrials.completionRate)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                Drug Approvals
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(pharmaData.industryOverview.approvedDrugs2024)}</div>
            <div className="text-purple-300 text-sm">This Year</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-orange-400 mr-2" />
                Success Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(pharmaData.industryOverview.successRate)}</div>
            <div className="text-orange-300 text-sm">Discovery to Market</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-emerald-400 mr-2" />
                Digital Health
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatCurrency(pharmaData.industryOverview.digitalHealthMarket)}</div>
            <div className="text-emerald-300 text-sm">Market Size</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-yellow-400 mr-2" />
                Employment
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(pharmaData.industryOverview.employeeCount)}</div>
            <div className="text-yellow-300 text-sm">Global Workforce</div>
          </div>
        </div>

        {/* Major Pharmaceutical Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Pill className="w-5 h-5 text-blue-400 mr-2" />
            Major Pharmaceutical Companies Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Company</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">R&D Spending</th>
                  <th className="text-center p-3 text-slate-300">Pipeline</th>
                  <th className="text-center p-3 text-slate-300">Approvals 2024</th>
                  <th className="text-center p-3 text-slate-300">Digital Transform</th>
                </tr>
              </thead>
              <tbody>
                {pharmaData.majorPharmaCompanies.map((company, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{company.company}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(company.employees)} employees • {company.countries} countries • {company.stockPerformance} stock</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(company.category)}`}>
                        {company.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(company.revenue)}</td>
                    <td className="p-3 text-center">
                      <div className="text-purple-400">{formatCurrency(company.rdSpending)}</div>
                      <div className="text-slate-400 text-xs">{formatPercentage(company.rdPercentage)} of revenue</div>
                    </td>
                    <td className="p-3 text-center text-orange-400">{company.pipelineDrugs} drugs</td>
                    <td className="p-3 text-center text-blue-400">{company.approvals2024}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.digitalTransformation, 70, 80)}`}>
                      {formatPercentage(company.digitalTransformation)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Drug Development Pipeline & Therapeutic Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FlaskConical className="w-5 h-5 text-green-400 mr-2" />
              Drug Development Pipeline
            </h3>
            <div className="space-y-4">
              {pharmaData.drugDevelopment.phases.map((phase, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{phase.phase}</span>
                      <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {phase.duration}
                      </span>
                    </div>
                    <span className={`text-sm ${getSuccessRateColor(phase.successRate)}`}>{formatPercentage(phase.successRate)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Active Drugs: {formatNumber(phase.activeDrugs)}</div>
                      <div className="text-green-400">Avg Cost: {formatCurrency(phase.averageCost)}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {phase.keyActivities.map((activity, actIndex) => (
                      <span key={actIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
              Therapeutic Areas Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatCurrency(pharmaData.drugDevelopment.therapeuticAreas[0].marketSize)}</div>
                <div className="text-purple-300 text-sm">Oncology Market</div>
                <div className="text-gray-400 text-xs mt-1">Largest Segment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(pharmaData.drugDevelopment.therapeuticAreas[1].growthRate)}</div>
                <div className="text-cyan-300 text-sm">Immunology Growth</div>
                <div className="text-gray-400 text-xs mt-1">Annual Rate</div>
              </div>
            </div>
            <div className="space-y-3">
              {pharmaData.drugDevelopment.therapeuticAreas.map((area, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium">{area.area}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getCompetitivenessColor(area.competitiveness)} bg-opacity-20`}>
                        {area.competitiveness}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">+{formatPercentage(area.growthRate)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-blue-400">Pipeline: {formatNumber(area.pipelineDrugs)}</div>
                      <div className="text-purple-400">Market: {formatCurrency(area.marketSize)}</div>
                      <div className="text-orange-400">Dev Time: {area.averageDevTime}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Approvals: {area.approvals2024}</div>
                      <div className="text-red-400">Success: {formatPercentage(area.successRate)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clinical Trials & Regulatory Approvals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-emerald-400 mr-2" />
              Clinical Trials Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatNumber(pharmaData.clinicalTrials.globalTrials)}</div>
                <div className="text-emerald-300 text-sm">Active Trials</div>
                <div className="text-gray-400 text-xs mt-1">Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(pharmaData.clinicalTrials.recruitmentRate)}</div>
                <div className="text-blue-300 text-sm">Recruitment Rate</div>
                <div className="text-gray-400 text-xs mt-1">On Target</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Trials by Phase</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Phase I</span>
                  <span className="text-blue-400">{formatNumber(pharmaData.clinicalTrials.trialsByPhase.phaseI)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Phase II</span>
                  <span className="text-green-400">{formatNumber(pharmaData.clinicalTrials.trialsByPhase.phaseII)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Phase III</span>
                  <span className="text-orange-400">{formatNumber(pharmaData.clinicalTrials.trialsByPhase.phaseIII)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Phase IV</span>
                  <span className="text-purple-400">{formatNumber(pharmaData.clinicalTrials.trialsByPhase.phaseIV)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Digital Capabilities</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Virtual Trials</span>
                  <span className="text-emerald-400">{formatPercentage(pharmaData.clinicalTrials.digitalTrials.virtualTrials)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Wearable Devices</span>
                  <span className="text-cyan-400">{formatPercentage(pharmaData.clinicalTrials.digitalTrials.wearableDevices)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AI Data Analysis</span>
                  <span className="text-purple-400">{formatPercentage(pharmaData.clinicalTrials.digitalTrials.aiDataAnalysis)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Decentralized</span>
                  <span className="text-yellow-400">{formatPercentage(pharmaData.clinicalTrials.digitalTrials.decentralizedTrials)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Regulatory Approvals Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatNumber(pharmaData.regulatoryApprovals.globalApprovals)}</div>
                <div className="text-green-300 text-sm">Global Approvals</div>
                <div className="text-gray-400 text-xs mt-1">This Year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{pharmaData.regulatoryApprovals.avgApprovalTime}</div>
                <div className="text-blue-300 text-sm">Avg Approval Time</div>
                <div className="text-gray-400 text-xs mt-1">Days</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white text-sm font-medium">Regional Approvals</h4>
              {pharmaData.regulatoryApprovals.regions.map((region, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium">{region.region}</span>
                    </div>
                    <span className="text-green-400 text-sm">{formatPercentage(region.approvalRate)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-blue-400">Approvals: {region.approvals2024}</div>
                      <div className="text-purple-400">Review Time: {region.avgReviewTime} days</div>
                      <div className="text-orange-400">Backlog: {formatNumber(region.backlog)}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Fast Track: {region.fastTrack}</div>
                      <div className="text-cyan-400">Orphan: {region.orphanDrugs}</div>
                      <div className="text-pink-400">Breakthrough: {region.breakthrough}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Digital Health & Medical Devices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-cyan-400 mr-2" />
              Digital Health Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatCurrency(pharmaData.digitalHealth.investment)}</div>
                <div className="text-cyan-300 text-sm">Annual Investment</div>
                <div className="text-gray-400 text-xs mt-1">Digital Health</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatNumber(pharmaData.digitalHealth.startups)}</div>
                <div className="text-emerald-300 text-sm">Active Startups</div>
                <div className="text-gray-400 text-xs mt-1">Ecosystem</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Technology Adoption</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Health Apps</span>
                  <span className="text-green-400">{formatPercentage(pharmaData.digitalHealth.healthApps)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Telemedicine</span>
                  <span className="text-blue-400">{formatPercentage(pharmaData.digitalHealth.telemedicine)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Wearables</span>
                  <span className="text-purple-400">{formatPercentage(pharmaData.digitalHealth.wearableDevices)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AI Diagnostics</span>
                  <span className="text-orange-400">{formatPercentage(pharmaData.digitalHealth.aiDiagnostics)}</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <h4 className="text-white text-sm font-medium mb-2">Digital Transformation</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Biotech</span>
                  <span className="text-green-400">{formatPercentage(pharmaData.digitalHealth.digitalTransformation.biotech)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Medtech</span>
                  <span className="text-blue-400">{formatPercentage(pharmaData.digitalHealth.digitalTransformation.medtech)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Big Pharma</span>
                  <span className="text-purple-400">{formatPercentage(pharmaData.digitalHealth.digitalTransformation.bigPharma)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Hospitals</span>
                  <span className="text-orange-400">{formatPercentage(pharmaData.digitalHealth.digitalTransformation.hospitals)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-pink-400 mr-2" />
              Medical Devices Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">{formatCurrency(pharmaData.medicalDevices.globalMarketSize)}</div>
                <div className="text-pink-300 text-sm">Market Size</div>
                <div className="text-gray-400 text-xs mt-1">Medical Devices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatNumber(pharmaData.medicalDevices.newLaunches)}</div>
                <div className="text-cyan-300 text-sm">New Launches</div>
                <div className="text-gray-400 text-xs mt-1">This Year</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Device Categories</h4>
              {pharmaData.medicalDevices.categories.map((category, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium">{category.category}</span>
                    </div>
                    <span className="text-green-400 text-sm">+{formatPercentage(category.growth)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-blue-400">Market: {formatCurrency(category.marketSize)}</div>
                      <div className="text-purple-400">Companies: {formatNumber(category.companies)}</div>
                      <div className="text-orange-400">Innovations: {category.innovations}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Approvals: {category.regulatoryApprovals}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatPercentage(pharmaData.medicalDevices.digitalHealthDevices)}</div>
                <div className="text-slate-300">Digital Growth</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-purple-400">{formatPercentage(pharmaData.medicalDevices.aiEnabledDevices)}</div>
                <div className="text-slate-300">AI-Enabled</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pharmaceutical Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Pharmaceutical & Healthcare Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {pharmaData.pharmaAlerts.map((alert, index) => (
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

        {/* Market Trends */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
            Emerging Market Trends Intelligence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Object.entries(pharmaData.marketTrends).map(([trendKey, trend], index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium text-sm capitalize">{trendKey.replace(/([A-Z])/g, ' $1').trim()}</h4>
                  <span className="text-green-400 text-sm">+{formatPercentage(trend.growth)}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Market Size</span>
                    <span className="text-blue-400">{formatCurrency(trend.marketSize)}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Companies</span>
                    <span className="text-purple-400">{formatNumber(trend.companiesInvolved)}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Approved</span>
                    <span className="text-green-400">{formatNumber(trend.approvedTherapies || trend.approvedProducts || trend.approvedTreatments)}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Pipeline</span>
                    <span className="text-orange-400">{formatNumber(trend.pipelineTherapies || trend.pipelineProducts || trend.pipelineTreatments)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}