// Biotechnology & Pharmaceuticals Intelligence Center - Drug Development, Bioprocessing & Pharmaceutical Analytics
import { useState, useEffect } from 'react';
import { Activity, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Brain, Beaker, Heart } from 'lucide-react';

export default function BiotechnologyPharmaceuticalsIntelligenceCenter() {
  const [biotechData, setBiotechData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalBiotechMarket: 1567890123456, // EUR annually
      pharmaceuticalMarket: 1234567890123,
      drugDevelopmentInvestment: 234567890123,
      totalPipeline: 23456, // drugs in development
      activeFacilities: 5678,
      biotechWorkers: 2345678,
      globalTrade: 987654321012,
      rdInvestment: 345678901234,
      regulatoryApprovals: 2345, // annual approvals
      clinicalTrials: 45678, // active trials
      successRate: 12.4, // percentage
      timeToMarket: 156, // months average
      patentApplications: 78901
    },
    majorBiotechCompanies: [
      {
        company: 'Pfizer',
        category: 'Big Pharma',
        revenue: 81290000000, // EUR annual
        rdSpending: 13450000000,
        pipeline: 234,
        employees: 83000,
        countries: 125,
        products: ['Comirnaty', 'Paxlovid', 'Prevnar', 'Eliquis'],
        digitalMaturity: 87.4,
        sustainabilityScore: 8.2,
        regulatoryCompliance: 98.7,
        innovationScore: 9.1,
        stockPerformance: '+13.6%'
      },
      {
        company: 'Moderna',
        category: 'mRNA Technology',
        revenue: 18654000000,
        rdSpending: 4567000000,
        pipeline: 89,
        employees: 5400,
        countries: 38,
        products: ['Spikevax', 'mRNA-1273', 'CMV vaccine', 'RSV vaccine'],
        digitalMaturity: 94.8,
        sustainabilityScore: 8.6,
        regulatoryCompliance: 97.3,
        innovationScore: 9.8,
        stockPerformance: '+28.9%'
      },
      {
        company: 'Genentech',
        category: 'Biotechnology',
        revenue: 23456789012,
        rdSpending: 7890123456,
        pipeline: 156,
        employees: 14700,
        countries: 23,
        products: ['Avastin', 'Herceptin', 'Rituxan', 'Tecentriq'],
        digitalMaturity: 91.2,
        sustainabilityScore: 8.9,
        regulatoryCompliance: 99.1,
        innovationScore: 9.4,
        stockPerformance: '+19.7%'
      },
      {
        company: 'Gilead Sciences',
        category: 'Antiviral Specialist',
        revenue: 26890123456,
        rdSpending: 5234567890,
        pipeline: 78,
        employees: 14800,
        countries: 35,
        products: ['Remdesivir', 'Biktarvy', 'Truvada', 'Descovy'],
        digitalMaturity: 89.6,
        sustainabilityScore: 8.1,
        regulatoryCompliance: 98.4,
        innovationScore: 8.7,
        stockPerformance: '+15.2%'
      }
    ],
    therapeuticAreas: [
      {
        area: 'Oncology',
        pipelineDrugs: 8765, // number of drugs
        marketValue: 234567890123, // EUR
        growth: 7.8, // annual percentage
        trials: 12345,
        mainTargets: ['Solid tumors', 'Blood cancers', 'Immunotherapy'],
        successRate: 15.4,
        avgTimeToMarket: 168, // months
        investmentLevel: 89.7 // billions EUR
      },
      {
        area: 'Infectious Diseases',
        pipelineDrugs: 3456,
        marketValue: 123456789012,
        growth: 9.2,
        trials: 5678,
        mainTargets: ['Viral infections', 'Bacterial resistance', 'Vaccines'],
        successRate: 18.9,
        avgTimeToMarket: 132,
        investmentLevel: 45.6
      },
      {
        area: 'Neuroscience',
        pipelineDrugs: 4567,
        marketValue: 178901234567,
        growth: 6.4,
        trials: 7890,
        mainTargets: ['Alzheimer\'s', 'Parkinson\'s', 'Depression'],
        successRate: 8.7,
        avgTimeToMarket: 189,
        investmentLevel: 67.8
      },
      {
        area: 'Rare Diseases',
        pipelineDrugs: 2345,
        marketValue: 98765432109,
        growth: 12.3,
        trials: 3456,
        mainTargets: ['Genetic disorders', 'Orphan diseases', 'Gene therapy'],
        successRate: 21.7,
        avgTimeToMarket: 145,
        investmentLevel: 34.5
      }
    ],
    drugDevelopmentStages: {
      preclinical: {
        activePrograms: 15678,
        successRate: 31.2,
        avgDuration: 42, // months
        costPerProgram: 2.8, // million EUR
        throughputRate: 78.9,
        digitalTools: 67.4
      },
      phaseI: {
        activePrograms: 3456,
        successRate: 63.2,
        avgDuration: 18,
        costPerProgram: 15.6,
        enrollmentRate: 84.7,
        safetyClearance: 94.3
      },
      phaseII: {
        activePrograms: 2345,
        successRate: 30.7,
        avgDuration: 24,
        costPerProgram: 58.9,
        efficacyRate: 89.1,
        biomarkerValidation: 76.8
      },
      phaseIII: {
        activePrograms: 1234,
        successRate: 58.1,
        avgDuration: 36,
        costPerProgram: 234.5,
        regulatoryAlignment: 91.7,
        marketAccess: 87.3
      }
    },
    manufacturingMetrics: {
      bioreactorCapacity: 567890, // liters
      batchYield: 89.7, // percentage
      qualityCompliance: 98.4,
      contaminationRate: 0.23, // percentage
      processEfficiency: 91.8,
      automationLevel: 76.9,
      costOfGoods: 234.56, // EUR per gram
      supplyReliability: 94.2,
      scalabilityIndex: 82.7,
      technologyTransfer: 88.9,
      regulatoryCompliance: 97.8,
      sustainabilityScore: 79.4
    },
    regulatoryLandscape: {
      fdaApprovals: 89, // annual
      emaApprovals: 67,
      acceleratedApprovals: 23,
      breakthrough: 45,
      orphanDesignations: 156,
      fastTrack: 78,
      priorityReview: 34,
      approvalTimeline: 324, // days average
      regulatorySuccess: 87.6, // percentage
      globalHarmonization: 73.8,
      digitalSubmissions: 91.4,
      realWorldEvidence: 68.9
    },
    supplyChainMetrics: {
      rawMaterialSuppliers: 4567,
      onTimeDelivery: 91.8, // percentage
      qualityCompliance: 96.7,
      leadTime: 67.3, // days
      inventoryTurnover: 8.4,
      supplierDiversity: 45.6,
      riskManagement: 89.2,
      costOptimization: 84.7,
      traceability: 93.6,
      sustainability: 78.3,
      coldChainIntegrity: 97.9,
      globalDistribution: 86.4
    },
    innovationMetrics: {
      aiDrugDiscovery: 67.8, // adoption percentage
      digitalTherapeutics: 34.9,
      personalized: 45.7,
      geneTherapy: 23.6,
      cellTherapy: 18.9,
      nanotechnology: 29.4,
      biomarkersDx: 78.3,
      realWorldData: 82.6,
      digitalTrials: 56.8,
      quantumComputing: 8.7,
      syntheticBiology: 31.2,
      crispr: 41.5
    },
    biotechAlerts: [
      {
        type: 'CRITICAL',
        category: 'Regulatory',
        message: 'FDA places clinical hold on Phase II CAR-T trial due to severe adverse events',
        facility: 'Clinical Site 247',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '05:09',
        recommendations: ['Safety review', 'Protocol amendment', 'Investigator notification', 'Regulatory response']
      },
      {
        type: 'SUCCESS',
        category: 'Approval',
        message: 'Breakthrough therapy designation granted for novel Alzheimer\'s treatment',
        facility: 'FDA Review Division',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '05:06',
        recommendations: ['Accelerated development', 'Regulatory alignment', 'Manufacturing scale-up', 'Commercial preparation']
      },
      {
        type: 'WARNING',
        category: 'Manufacturing',
        message: 'Bioreactor contamination detected in batch BT-2024-156 - quarantine initiated',
        facility: 'Bioprocessing Plant B',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '05:03',
        recommendations: ['Root cause analysis', 'Facility decontamination', 'Process validation', 'Quality investigation']
      },
      {
        type: 'INFO',
        category: 'Innovation',
        message: 'AI drug discovery platform identifies 347 novel targets in rare disease research',
        facility: 'Computational Biology Center',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '05:00',
        recommendations: ['Target validation', 'Compound screening', 'Collaboration opportunities', 'Patent applications']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBiotechData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        drugDevelopmentStages: {
          ...prev.drugDevelopmentStages,
          phaseII: {
            ...prev.drugDevelopmentStages.phaseII,
            successRate: Math.max(28, Math.min(35, prev.drugDevelopmentStages.phaseII.successRate + (Math.random() - 0.5) * 1)),
            efficacyRate: Math.max(86, Math.min(92, prev.drugDevelopmentStages.phaseII.efficacyRate + (Math.random() - 0.5) * 1))
          }
        },
        manufacturingMetrics: {
          ...prev.manufacturingMetrics,
          batchYield: Math.max(87, Math.min(93, prev.manufacturingMetrics.batchYield + (Math.random() - 0.5) * 1))
        }
      }));
    }, 25000);

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
      case 'HIGH': return 'text-red-400 bg-red-400/20';
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

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Big Pharma': return 'text-blue-400 bg-blue-400/20';
      case 'mRNA Technology': return 'text-green-400 bg-green-400/20';
      case 'Biotechnology': return 'text-purple-400 bg-purple-400/20';
      case 'Antiviral Specialist': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getGrowthColor = (growth) => {
    if (growth > 8) return 'text-green-400';
    if (growth > 5) return 'text-blue-400';
    if (growth > 0) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSuccessRateColor = (rate) => {
    if (rate > 20) return 'text-green-400';
    if (rate > 15) return 'text-blue-400';
    if (rate > 10) return 'text-yellow-400';
    return 'text-red-400';
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
    <div className="h-full bg-gradient-to-br from-green-900 via-slate-900 to-teal-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-green-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl">
              <Beaker className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Biotechnology & Pharmaceuticals Intelligence Center</h1>
              <p className="text-green-300">Drug development, bioprocessing & pharmaceutical analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-green-400">{biotechData.currentTime}</div>
            <div className="text-green-300">Biotech Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Biotech Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(biotechData.industryOverview.globalBiotechMarket)}</div>
            <div className="text-green-300 text-sm">Pharma: {formatCurrency(biotechData.industryOverview.pharmaceuticalMarket)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-blue-400 mr-2" />
                R&D Investment
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatCurrency(biotechData.industryOverview.drugDevelopmentInvestment)}</div>
            <div className="text-blue-300 text-sm">Drug Development</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Beaker className="w-5 h-5 text-purple-400 mr-2" />
                Pipeline
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(biotechData.industryOverview.totalPipeline)}</div>
            <div className="text-purple-300 text-sm">Drugs in Development</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Heart className="w-5 h-5 text-red-400 mr-2" />
                Success Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-red-400">{formatPercentage(biotechData.industryOverview.successRate)}</div>
            <div className="text-red-300 text-sm">Drug Approval Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                Clinical Trials
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(biotechData.industryOverview.clinicalTrials)}</div>
            <div className="text-cyan-300 text-sm">Active Studies</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-orange-400 mr-2" />
                Employment
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(biotechData.industryOverview.biotechWorkers)}</div>
            <div className="text-orange-300 text-sm">Global Workforce</div>
          </div>
        </div>

        {/* Major Biotech Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Beaker className="w-5 h-5 text-green-400 mr-2" />
            Major Biotechnology Companies Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Company</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">R&D</th>
                  <th className="text-center p-3 text-slate-300">Pipeline</th>
                  <th className="text-center p-3 text-slate-300">Compliance</th>
                  <th className="text-center p-3 text-slate-300">Innovation</th>
                </tr>
              </thead>
              <tbody>
                {biotechData.majorBiotechCompanies.map((company, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{company.company}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(company.employees)} employees • {company.countries} countries • {company.stockPerformance}</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(company.category)}`}>
                        {company.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(company.revenue)}</td>
                    <td className="p-3 text-center text-blue-400">{formatCurrency(company.rdSpending)}</td>
                    <td className="p-3 text-center text-purple-400">{company.pipeline}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.regulatoryCompliance, 95, 98)}`}>
                      {formatPercentage(company.regulatoryCompliance)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.innovationScore, 8.0, 9.0)}`}>
                      {company.innovationScore.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Therapeutic Areas & Drug Development Stages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Heart className="w-5 h-5 text-red-400 mr-2" />
              Therapeutic Areas Intelligence
            </h3>
            <div className="space-y-4">
              {biotechData.therapeuticAreas.map((area, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{area.area}</span>
                      <span className={`text-sm ${getGrowthColor(area.growth)}`}>
                        +{formatPercentage(area.growth)}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatCurrency(area.marketValue)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-purple-400">Pipeline: {formatNumber(area.pipelineDrugs)} drugs</div>
                      <div className="text-cyan-400">Trials: {formatNumber(area.trials)}</div>
                      <div className={`${getSuccessRateColor(area.successRate)}`}>Success: {formatPercentage(area.successRate)}</div>
                    </div>
                    <div>
                      <div className="text-orange-400">Time: {area.avgTimeToMarket}m</div>
                      <div className="text-blue-400">Investment: €{area.investmentLevel.toFixed(1)}B</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {area.mainTargets.map((target, tIndex) => (
                      <span key={tIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-cyan-400 mr-2" />
              Drug Development Stages Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(biotechData.drugDevelopmentStages).map(([stage, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium capitalize">{stage.replace(/([A-Z])/g, ' $1')}</span>
                    </div>
                    <span className={`text-sm ${getSuccessRateColor(data.successRate)}`}>
                      {formatPercentage(data.successRate)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-blue-400">Programs: {formatNumber(data.activePrograms)}</div>
                      <div className="text-purple-400">Duration: {data.avgDuration}m</div>
                      {data.throughputRate && (
                        <div className="text-green-400">Throughput: {formatPercentage(data.throughputRate)}</div>
                      )}
                    </div>
                    <div>
                      <div className="text-orange-400">Cost: {formatCurrency(data.costPerProgram * 1000000)}</div>
                      {data.enrollmentRate && (
                        <div className="text-cyan-400">Enrollment: {formatPercentage(data.enrollmentRate)}</div>
                      )}
                      {data.efficacyRate && (
                        <div className="text-pink-400">Efficacy: {formatPercentage(data.efficacyRate)}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Manufacturing Metrics & Regulatory Landscape */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
              Manufacturing Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatNumber(biotechData.manufacturingMetrics.bioreactorCapacity)} L</div>
                <div className="text-blue-300 text-sm">Bioreactor Capacity</div>
                <div className="text-gray-400 text-xs mt-1">{formatPercentage(biotechData.manufacturingMetrics.batchYield)} yield</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(biotechData.manufacturingMetrics.qualityCompliance)}</div>
                <div className="text-green-300 text-sm">Quality Compliance</div>
                <div className="text-gray-400 text-xs mt-1">{biotechData.manufacturingMetrics.contaminationRate.toFixed(2)}% contamination</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Process Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Process Efficiency</span>
                  <span className="text-green-400">{formatPercentage(biotechData.manufacturingMetrics.processEfficiency)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Automation Level</span>
                  <span className="text-blue-400">{formatPercentage(biotechData.manufacturingMetrics.automationLevel)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Supply Reliability</span>
                  <span className="text-purple-400">{formatPercentage(biotechData.manufacturingMetrics.supplyReliability)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Scalability Index</span>
                  <span className="text-cyan-400">{formatPercentage(biotechData.manufacturingMetrics.scalabilityIndex)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-orange-400">€{biotechData.manufacturingMetrics.costOfGoods.toFixed(0)}</div>
                <div className="text-slate-300">Cost per Gram</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatPercentage(biotechData.manufacturingMetrics.sustainabilityScore)}</div>
                <div className="text-slate-300">Sustainability</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Regulatory Landscape Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{biotechData.regulatoryLandscape.fdaApprovals}</div>
                <div className="text-green-300 text-sm">FDA Approvals</div>
                <div className="text-gray-400 text-xs mt-1">{biotechData.regulatoryLandscape.emaApprovals} EMA approvals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{biotechData.regulatoryLandscape.approvalTimeline}</div>
                <div className="text-blue-300 text-sm">Approval Timeline</div>
                <div className="text-gray-400 text-xs mt-1">Days Average</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Special Designations</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Breakthrough</span>
                  <span className="text-green-400">{biotechData.regulatoryLandscape.breakthrough}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Orphan Designation</span>
                  <span className="text-blue-400">{biotechData.regulatoryLandscape.orphanDesignations}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Fast Track</span>
                  <span className="text-purple-400">{biotechData.regulatoryLandscape.fastTrack}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Priority Review</span>
                  <span className="text-cyan-400">{biotechData.regulatoryLandscape.priorityReview}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatPercentage(biotechData.regulatoryLandscape.digitalSubmissions)}</div>
                <div className="text-slate-300">Digital Submissions</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-blue-400">{formatPercentage(biotechData.regulatoryLandscape.realWorldEvidence)}</div>
                <div className="text-slate-300">Real World Evidence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Metrics & Supply Chain */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              Innovation Trends Intelligence
            </h3>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Technology Adoption</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Real World Data</span>
                  <span className="text-green-400">{formatPercentage(biotechData.innovationMetrics.realWorldData)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Biomarkers Dx</span>
                  <span className="text-blue-400">{formatPercentage(biotechData.innovationMetrics.biomarkersDx)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AI Drug Discovery</span>
                  <span className="text-purple-400">{formatPercentage(biotechData.innovationMetrics.aiDrugDiscovery)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Digital Trials</span>
                  <span className="text-cyan-400">{formatPercentage(biotechData.innovationMetrics.digitalTrials)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Personalized Medicine</span>
                  <span className="text-pink-400">{formatPercentage(biotechData.innovationMetrics.personalized)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">CRISPR</span>
                  <span className="text-orange-400">{formatPercentage(biotechData.innovationMetrics.crispr)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Digital Therapeutics</span>
                  <span className="text-teal-400">{formatPercentage(biotechData.innovationMetrics.digitalTherapeutics)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Synthetic Biology</span>
                  <span className="text-indigo-400">{formatPercentage(biotechData.innovationMetrics.syntheticBiology)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-orange-400 mr-2" />
              Supply Chain Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{formatNumber(biotechData.supplyChainMetrics.rawMaterialSuppliers)}</div>
                <div className="text-orange-300 text-sm">Raw Material Suppliers</div>
                <div className="text-gray-400 text-xs mt-1">{biotechData.supplyChainMetrics.leadTime.toFixed(1)} days lead time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(biotechData.supplyChainMetrics.onTimeDelivery)}</div>
                <div className="text-blue-300 text-sm">On-Time Delivery</div>
                <div className="text-gray-400 text-xs mt-1">{formatPercentage(biotechData.supplyChainMetrics.qualityCompliance)} quality</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Supply Chain Performance</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Inventory Turnover</span>
                  <span className="text-green-400">{biotechData.supplyChainMetrics.inventoryTurnover.toFixed(1)}x</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Risk Management</span>
                  <span className="text-blue-400">{formatPercentage(biotechData.supplyChainMetrics.riskManagement)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Traceability</span>
                  <span className="text-purple-400">{formatPercentage(biotechData.supplyChainMetrics.traceability)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cold Chain Integrity</span>
                  <span className="text-cyan-400">{formatPercentage(biotechData.supplyChainMetrics.coldChainIntegrity)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatPercentage(biotechData.supplyChainMetrics.sustainability)}</div>
                <div className="text-slate-300">Sustainability</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-blue-400">{formatPercentage(biotechData.supplyChainMetrics.globalDistribution)}</div>
                <div className="text-slate-300">Global Distribution</div>
              </div>
            </div>
          </div>
        </div>

        {/* Biotechnology Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Biotechnology Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {biotechData.biotechAlerts.map((alert, index) => (
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
                    <div className="text-slate-300">Facility: {alert.facility}</div>
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
      </div>
    </div>
  );
}