// Data Science & Analytics Intelligence Center - Advanced Analytics, MLOps & Data Engineering Monitoring
import { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, Database, Eye, Activity, Zap } from 'lucide-react';

export default function DataScienceAnalyticsIntelligenceCenter() {
  const [dataData, setDataData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalDataMarket: 345678901234, // EUR market size
      dataGeneratedDaily: 328000000, // GB per day globally
      dataScientists: 6789012, // globally
      analyticsSpending: 234567890123, // EUR annually
      dataStorageMarket: 123456789012,
      businessIntelligenceMarket: 89012345678,
      mlopsMarket: 45678901234,
      dataEngineeringMarket: 67890123456,
      cloudAnalyticsMarket: 98765432109,
      realTimeAnalyticsMarket: 34567890123,
      dataGovernanceMarket: 23456789012,
      dataVisualizationMarket: 12345678901,
      enterpriseAdoption: 89.4, // percentage
      dataLiteracyRate: 34.5, // percentage of workforce
      automationLevel: 56.7, // percentage of processes
      dataQualityScore: 67.8 // industry average
    },
    majorDataPlatforms: [
      {
        platform: 'Snowflake',
        category: 'Cloud Data Warehouse',
        marketShare: 24.7, // percentage
        annualRevenue: 2890123456, // EUR
        customersServed: 890123,
        dataProcessedDaily: 345000000, // GB
        queryPerformance: 4.2, // seconds average
        uptimePercentage: 99.96,
        storageEfficiency: 89.4, // percentage
        services: ['Data Warehouse', 'Data Lake', 'Data Engineering', 'Data Science', 'Data Apps'],
        aiIntegration: 94.6,
        customerSatisfaction: 92.8,
        growthRate: 45.6,
        scalabilityScore: 96.7
      },
      {
        platform: 'Databricks',
        category: 'Unified Analytics',
        marketShare: 18.9,
        annualRevenue: 1890123456,
        customersServed: 567890,
        dataProcessedDaily: 234000000,
        queryPerformance: 3.8,
        uptimePercentage: 99.94,
        storageEfficiency: 87.9,
        services: ['Lakehouse', 'MLflow', 'Delta Lake', 'AutoML', 'Collaborative Notebooks'],
        aiIntegration: 97.3,
        customerSatisfaction: 91.4,
        growthRate: 52.1,
        scalabilityScore: 94.8
      },
      {
        platform: 'Google BigQuery',
        category: 'Serverless Analytics',
        marketShare: 16.3,
        annualRevenue: 1567890123,
        customersServed: 1234567,
        dataProcessedDaily: 567000000,
        queryPerformance: 2.9,
        uptimePercentage: 99.98,
        storageEfficiency: 92.1,
        services: ['BigQuery', 'DataFlow', 'DataPrep', 'AutoML', 'AI Platform'],
        aiIntegration: 98.7,
        customerSatisfaction: 89.6,
        growthRate: 38.4,
        scalabilityScore: 98.2
      },
      {
        platform: 'Amazon Redshift',
        category: 'Enterprise DW',
        marketShare: 14.2,
        annualRevenue: 1345678901,
        customersServed: 678901,
        dataProcessedDaily: 189000000,
        queryPerformance: 5.6,
        uptimePercentage: 99.92,
        storageEfficiency: 84.7,
        services: ['Redshift', 'Spectrum', 'ML', 'Data API', 'Concurrency Scaling'],
        aiIntegration: 89.3,
        customerSatisfaction: 87.2,
        growthRate: 23.8,
        scalabilityScore: 91.5
      }
    ],
    dataEngineeringOps: [
      {
        operation: 'Data Ingestion',
        dailyVolume: 145000000, // GB
        sourcesConnected: 12345,
        pipelineReliability: 94.6, // percentage
        latencyAverage: 8.9, // minutes
        errorRate: 0.8, // percentage
        automationLevel: 78.9, // percentage
        costPerGB: 0.045, // EUR
        scalingCapability: 89.4,
        dataQuality: 87.6,
        complianceScore: 91.2,
        monitoringCoverage: 96.7,
        alertResponse: 4.2 // minutes
      },
      {
        operation: 'Data Processing',
        dailyVolume: 234000000,
        sourcesConnected: 8901,
        pipelineReliability: 91.8,
        latencyAverage: 15.4,
        errorRate: 1.2,
        automationLevel: 89.4,
        costPerGB: 0.078,
        scalingCapability: 92.3,
        dataQuality: 89.7,
        complianceScore: 88.9,
        monitoringCoverage: 94.2,
        alertResponse: 6.7
      },
      {
        operation: 'Data Storage',
        dailyVolume: 567000000,
        sourcesConnected: 23456,
        pipelineReliability: 98.9,
        latencyAverage: 2.1,
        errorRate: 0.3,
        automationLevel: 67.8,
        costPerGB: 0.023,
        scalingCapability: 96.7,
        dataQuality: 94.6,
        complianceScore: 97.3,
        monitoringCoverage: 98.9,
        alertResponse: 1.8
      },
      {
        operation: 'Data Analytics',
        dailyVolume: 89000000,
        sourcesConnected: 5678,
        pipelineReliability: 89.4,
        latencyAverage: 45.6,
        errorRate: 2.1,
        automationLevel: 56.7,
        costPerGB: 0.156,
        scalingCapability: 84.2,
        dataQuality: 91.8,
        complianceScore: 89.4,
        monitoringCoverage: 87.6,
        alertResponse: 12.4
      }
    ],
    mlopsOperations: {
      modelDevelopment: {
        activeProjects: 234567,
        modelsInProduction: 89012,
        deploymentSuccessRate: 87.9, // percentage
        averageDevTime: 67.8, // days
        modelAccuracy: 91.2, // percentage average
        automatedTesting: 78.9, // percentage coverage
        versionControl: 94.6, // percentage adoption
        collaborationScore: 89.4,
        experimentTracking: 91.8,
        hyperparameterTuning: 67.8,
        featureEngineering: 84.2,
        dataValidation: 89.7
      },
      modelOperations: {
        totalInferences: 567890123456, // daily
        averageLatency: 45.6, // milliseconds
        throughput: 234567, // inferences per second
        modelUptime: 99.7, // percentage
        scalingEvents: 12345, // daily
        errorRate: 0.8, // percentage
        driftDetection: 23.4, // percentage models monitored
        retrainingFrequency: 30, // days average
        costPerInference: 0.0012, // EUR
        automatedDeployment: 67.8, // percentage
        rollbackCapability: 94.6,
        monitoringCoverage: 89.4
      },
      dataValidation: {
        validationRules: 45678,
        dataQualityScore: 89.4, // percentage
        anomalyDetection: 67.8, // coverage percentage
        schemaValidation: 94.6, // percentage
        dataLineage: 78.9, // tracking coverage
        biasDetection: 34.5, // models monitored
        fairnessMetrics: 23.4, // models evaluated
        explainabilityScore: 56.7, // percentage
        complianceChecks: 91.2, // percentage automated
        alertGeneration: 234, // daily
        falsePositiveRate: 5.6, // percentage
        resolutionTime: 2.8 // hours average
      }
    },
    businessIntelligence: {
      dashboardsActive: 567890,
      reportsGenerated: 2345678, // monthly
      userAdoption: 78.9, // percentage
      selfServiceAnalytics: 67.8, // percentage
      dataFreshness: 89.4, // percentage real-time
      queryPerformance: 3.2, // seconds average
      visualizationTypes: 145,
      interactiveFeatures: 89.4, // percentage
      mobilAccessibility: 67.8, // percentage
      embeddedAnalytics: 45.6, // percentage
      aiAugmentedInsights: 34.5, // percentage
      decisionMaking: 91.2, // impact score
      timeToInsight: 15.6, // minutes average
      dataAccuracy: 94.6,
      userSatisfaction: 87.9,
      costEffectiveness: 78.9
    },
    dataGovernance: {
      dataCatalogCoverage: 78.9, // percentage
      metadataQuality: 89.4, // percentage
      accessControlPolicies: 12345,
      dataClassification: 67.8, // percentage automated
      privacyCompliance: 94.6, // percentage
      retentionPolicies: 23456,
      dataLineageTracking: 87.9, // percentage
      qualityRules: 34567,
      stewardshipProgram: 56.7, // maturity score
      auditTrails: 98.9, // percentage coverage
      regulatoryCompliance: 91.2, // percentage
      dataSecurityScore: 89.4,
      masterDataManagement: 67.8,
      referenceDataQuality: 84.2,
      governanceMaturity: 78.9,
      policyEnforcement: 87.6
    },
    realTimeAnalytics: {
      streamingDataVolume: 234000000, // GB daily
      eventProcessingLatency: 23.4, // milliseconds
      streamingPipelines: 12345,
      eventThroughput: 567890, // events per second
      streamReliability: 94.6, // percentage
      complexEventProcessing: 78.9, // capability score
      windowOperations: 67.8, // efficiency score
      backpressureHandling: 89.4, // effectiveness
      stateManagement: 84.2, // efficiency
      faultTolerance: 91.8, // recovery capability
      scalingAgility: 87.9, // auto-scaling score
      costOptimization: 67.8,
      monitoringGranularity: 94.6,
      alertingSpeed: 1.2, // seconds
      dataConsistency: 89.7,
      deliveryGuarantees: 96.7
    },
    dataAlerts: [
      {
        type: 'CRITICAL',
        category: 'Data Quality',
        message: 'Major data quality degradation detected - 45% accuracy drop in customer analytics pipeline',
        location: 'Customer Data Warehouse',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '08:40',
        recommendations: ['Pipeline rollback', 'Data validation', 'Source investigation', 'Stakeholder notification'],
        affectedRecords: 2345678,
        businessImpact: 'Revenue reporting affected',
        estimatedCost: 567890,
        urgency: 9
      },
      {
        type: 'WARNING',
        category: 'Performance',
        message: 'ML model inference latency increased 67% - SLA breach imminent',
        location: 'Production ML Platform',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '08:37',
        recommendations: ['Resource scaling', 'Model optimization', 'Caching review', 'Load balancing'],
        affectedRecords: 123456,
        businessImpact: 'User experience degraded',
        estimatedCost: 123456,
        urgency: 6
      },
      {
        type: 'SUCCESS',
        category: 'Optimization',
        message: 'Data pipeline optimization completed - 34% cost reduction achieved',
        location: 'ETL Infrastructure',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '08:34',
        recommendations: ['Best practices documentation', 'Template creation', 'Team training', 'Rollout planning'],
        affectedRecords: 5678901,
        businessImpact: 'Cost savings realized',
        estimatedCost: -234567,
        urgency: 0
      },
      {
        type: 'INFO',
        category: 'Compliance',
        message: 'New GDPR data retention policies require implementation across 23 data sources',
        location: 'Data Governance',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '08:31',
        recommendations: ['Policy review', 'Technical implementation', 'Audit preparation', 'Training update'],
        affectedRecords: 12345678,
        businessImpact: 'Regulatory compliance',
        estimatedCost: 89012,
        urgency: 4
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDataData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        industryOverview: {
          ...prev.industryOverview,
          dataGeneratedDaily: Math.max(300000000, Math.min(350000000, prev.industryOverview.dataGeneratedDaily + Math.floor((Math.random() - 0.5) * 5000000))),
          dataQualityScore: Math.max(60, Math.min(75, prev.industryOverview.dataQualityScore + (Math.random() - 0.5) * 2))
        },
        mlopsOperations: {
          ...prev.mlopsOperations,
          modelOperations: {
            ...prev.mlopsOperations.modelOperations,
            averageLatency: Math.max(40, Math.min(60, prev.mlopsOperations.modelOperations.averageLatency + (Math.random() - 0.5) * 3)),
            modelUptime: Math.max(99.5, Math.min(99.9, prev.mlopsOperations.modelOperations.modelUptime + (Math.random() - 0.5) * 0.1))
          }
        }
      }));
    }, 7000);

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

  const getUrgencyColor = (urgency) => {
    if (urgency >= 8) return 'text-red-400';
    if (urgency >= 6) return 'text-orange-400';
    if (urgency >= 4) return 'text-yellow-400';
    if (urgency >= 2) return 'text-blue-400';
    return 'text-green-400';
  };

  const getPerformanceColor = (value, good = 80, excellent = 90) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Cloud Data Warehouse': return 'text-blue-400 bg-blue-400/20';
      case 'Unified Analytics': return 'text-purple-400 bg-purple-400/20';
      case 'Serverless Analytics': return 'text-green-400 bg-green-400/20';
      case 'Enterprise DW': return 'text-orange-400 bg-orange-400/20';
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
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Data Science & Analytics Intelligence Center</h1>
              <p className="text-indigo-300">Advanced analytics, MLOps & data engineering monitoring</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-indigo-400">{dataData.currentTime}</div>
            <div className="text-indigo-300">Data Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Database className="w-5 h-5 text-indigo-400 mr-2" />
                Data Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{formatCurrency(dataData.industryOverview.globalDataMarket)}</div>
            <div className="text-indigo-300 text-sm">Global Market</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Daily Data
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(dataData.industryOverview.dataGeneratedDaily)}GB</div>
            <div className="text-green-300 text-sm">Generated Daily</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Data Scientists
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(dataData.industryOverview.dataScientists)}</div>
            <div className="text-purple-300 text-sm">Globally</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                Analytics Spend
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatCurrency(dataData.industryOverview.analyticsSpending)}</div>
            <div className="text-blue-300 text-sm">Annually</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-orange-400 mr-2" />
                Enterprise Adoption
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(dataData.industryOverview.enterpriseAdoption)}</div>
            <div className="text-orange-300 text-sm">Adoption Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-cyan-400 mr-2" />
                Data Quality
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(dataData.industryOverview.dataQualityScore)}</div>
            <div className="text-cyan-300 text-sm">Industry Average</div>
          </div>
        </div>

        {/* Major Data Platforms */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Database className="w-5 h-5 text-indigo-400 mr-2" />
            Major Data Platforms Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Platform</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Market Share</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Performance</th>
                  <th className="text-center p-3 text-slate-300">Uptime</th>
                  <th className="text-center p-3 text-slate-300">Growth</th>
                </tr>
              </thead>
              <tbody>
                {dataData.majorDataPlatforms.map((platform, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{platform.platform}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(platform.customersServed)} customers • {formatNumber(platform.dataProcessedDaily)}GB/day • {formatPercentage(platform.aiIntegration)} AI</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(platform.category)}`}>
                        {platform.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-indigo-400">{formatPercentage(platform.marketShare)}</td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(platform.annualRevenue)}</td>
                    <td className="p-3 text-center text-blue-400">{platform.queryPerformance.toFixed(1)}s</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(platform.uptimePercentage, 99.0, 99.9)}`}>
                      {formatPercentage(platform.uptimePercentage)}
                    </td>
                    <td className="p-3 text-center text-orange-400">{formatPercentage(platform.growthRate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Data Engineering Operations & MLOps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-green-400 mr-2" />
              Data Engineering Operations
            </h3>
            <div className="space-y-4">
              {dataData.dataEngineeringOps.map((operation, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{operation.operation}</span>
                      <span className={`text-sm ${getPerformanceColor(operation.pipelineReliability, 85, 95)}`}>
                        {formatPercentage(operation.pipelineReliability)}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatNumber(operation.dailyVolume)}GB</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Sources: {formatNumber(operation.sourcesConnected)}</div>
                      <div className="text-purple-400">Latency: {operation.latencyAverage.toFixed(1)}min</div>
                      <div className="text-cyan-400">Cost: €{operation.costPerGB.toFixed(3)}/GB</div>
                    </div>
                    <div>
                      <div className="text-green-400">Automation: {formatPercentage(operation.automationLevel)}</div>
                      <div className="text-orange-400">Scaling: {formatPercentage(operation.scalingCapability)}</div>
                      <div className="text-red-400">Error Rate: {formatPercentage(operation.errorRate)}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Quality: {formatPercentage(operation.dataQuality)}</span>
                    <span className="text-slate-400">Alert: {operation.alertResponse.toFixed(1)}min</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-purple-400 mr-2" />
              MLOps Operations Intelligence
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3 flex items-center">
                  <Target className="w-4 h-4 text-blue-400 mr-2" />
                  Model Development
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Active Projects</span>
                    <span className="text-blue-400">{formatNumber(dataData.mlopsOperations.modelDevelopment.activeProjects)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">In Production</span>
                    <span className="text-green-400">{formatNumber(dataData.mlopsOperations.modelDevelopment.modelsInProduction)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Success Rate</span>
                    <span className="text-purple-400">{formatPercentage(dataData.mlopsOperations.modelDevelopment.deploymentSuccessRate)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Dev Time</span>
                    <span className="text-orange-400">{dataData.mlopsOperations.modelDevelopment.averageDevTime.toFixed(0)} days</span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-lg font-bold text-green-400">{formatPercentage(dataData.mlopsOperations.modelDevelopment.modelAccuracy)}</div>
                  <div className="text-slate-300 text-xs">Average Model Accuracy</div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3 flex items-center">
                  <Activity className="w-4 h-4 text-green-400 mr-2" />
                  Model Operations
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Daily Inferences</span>
                    <span className="text-green-400">{formatNumber(dataData.mlopsOperations.modelOperations.totalInferences)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Latency</span>
                    <span className="text-blue-400">{dataData.mlopsOperations.modelOperations.averageLatency.toFixed(1)}ms</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Uptime</span>
                    <span className="text-purple-400">{formatPercentage(dataData.mlopsOperations.modelOperations.modelUptime)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Error Rate</span>
                    <span className="text-red-400">{formatPercentage(dataData.mlopsOperations.modelOperations.errorRate)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  Data Validation
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Validation Rules</span>
                    <span className="text-cyan-400">{formatNumber(dataData.mlopsOperations.dataValidation.validationRules)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Quality Score</span>
                    <span className="text-green-400">{formatPercentage(dataData.mlopsOperations.dataValidation.dataQualityScore)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Anomaly Detection</span>
                    <span className="text-orange-400">{formatPercentage(dataData.mlopsOperations.dataValidation.anomalyDetection)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Resolution Time</span>
                    <span className="text-yellow-400">{dataData.mlopsOperations.dataValidation.resolutionTime.toFixed(1)}h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Intelligence & Real-time Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
              Business Intelligence Operations
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatNumber(dataData.businessIntelligence.dashboardsActive)}</div>
                <div className="text-blue-300 text-sm">Active Dashboards</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(dataData.businessIntelligence.reportsGenerated)} reports/month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(dataData.businessIntelligence.userAdoption)}</div>
                <div className="text-green-300 text-sm">User Adoption</div>
                <div className="text-gray-400 text-xs mt-1">{dataData.businessIntelligence.queryPerformance.toFixed(1)}s avg query</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">BI Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Self-Service Analytics</span>
                  <span className="text-green-400">{formatPercentage(dataData.businessIntelligence.selfServiceAnalytics)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Data Freshness</span>
                  <span className="text-blue-400">{formatPercentage(dataData.businessIntelligence.dataFreshness)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Mobile Access</span>
                  <span className="text-purple-400">{formatPercentage(dataData.businessIntelligence.mobilAccessibility)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AI Insights</span>
                  <span className="text-cyan-400">{formatPercentage(dataData.businessIntelligence.aiAugmentedInsights)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Time to Insight</span>
                  <span className="text-orange-400">{dataData.businessIntelligence.timeToInsight.toFixed(1)}min</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Decision Impact</span>
                  <span className="text-green-400">{formatPercentage(dataData.businessIntelligence.decisionMaking)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-orange-400 mr-2" />
              Real-time Analytics Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{formatNumber(dataData.realTimeAnalytics.streamingDataVolume)}GB</div>
                <div className="text-orange-300 text-sm">Streaming Data/Day</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(dataData.realTimeAnalytics.streamingPipelines)} pipelines</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{dataData.realTimeAnalytics.eventProcessingLatency.toFixed(1)}ms</div>
                <div className="text-cyan-300 text-sm">Processing Latency</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(dataData.realTimeAnalytics.eventThroughput)}/sec</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Streaming Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Stream Reliability</span>
                  <span className="text-green-400">{formatPercentage(dataData.realTimeAnalytics.streamReliability)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Event Processing</span>
                  <span className="text-blue-400">{formatPercentage(dataData.realTimeAnalytics.complexEventProcessing)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Fault Tolerance</span>
                  <span className="text-purple-400">{formatPercentage(dataData.realTimeAnalytics.faultTolerance)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Auto Scaling</span>
                  <span className="text-cyan-400">{formatPercentage(dataData.realTimeAnalytics.scalingAgility)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Data Consistency</span>
                  <span className="text-orange-400">{formatPercentage(dataData.realTimeAnalytics.dataConsistency)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Alerting Speed</span>
                  <span className="text-yellow-400">{dataData.realTimeAnalytics.alertingSpeed.toFixed(1)}s</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Governance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 text-green-400 mr-2" />
            Data Governance Intelligence
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-xl font-bold text-green-400">{formatPercentage(dataData.dataGovernance.dataCatalogCoverage)}</div>
              <div className="text-green-300 text-sm">Catalog Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-400">{formatPercentage(dataData.dataGovernance.privacyCompliance)}</div>
              <div className="text-blue-300 text-sm">Privacy Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-400">{formatPercentage(dataData.dataGovernance.dataLineageTracking)}</div>
              <div className="text-purple-300 text-sm">Lineage Tracking</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-orange-400">{formatPercentage(dataData.dataGovernance.auditTrails)}</div>
              <div className="text-orange-300 text-sm">Audit Coverage</div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
            <div className="bg-slate-700/30 rounded p-3 text-center">
              <div className="text-lg font-bold text-cyan-400">{formatNumber(dataData.dataGovernance.accessControlPolicies)}</div>
              <div className="text-slate-300">Access Policies</div>
            </div>
            <div className="bg-slate-700/30 rounded p-3 text-center">
              <div className="text-lg font-bold text-indigo-400">{formatNumber(dataData.dataGovernance.retentionPolicies)}</div>
              <div className="text-slate-300">Retention Policies</div>
            </div>
            <div className="bg-slate-700/30 rounded p-3 text-center">
              <div className="text-lg font-bold text-emerald-400">{formatNumber(dataData.dataGovernance.qualityRules)}</div>
              <div className="text-slate-300">Quality Rules</div>
            </div>
            <div className="bg-slate-700/30 rounded p-3 text-center">
              <div className="text-lg font-bold text-yellow-400">{formatPercentage(dataData.dataGovernance.governanceMaturity)}</div>
              <div className="text-slate-300">Maturity Score</div>
            </div>
          </div>
        </div>

        {/* Data Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Data Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {dataData.dataAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                    <span className={`text-xs ${getUrgencyColor(alert.urgency)}`}>
                      Urgency: {alert.urgency}/10
                    </span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                  <div>
                    <div className="text-slate-300">Location: {alert.location}</div>
                    <div className="text-slate-300">Action: {alert.actionRequired ? 'Required' : 'Monitoring'}</div>
                    <div className="text-slate-300">Records: {formatNumber(alert.affectedRecords)}</div>
                  </div>
                  <div>
                    <div className={`${getImpactColor(alert.impact).split(' ')[0]} text-xs`}>
                      Impact: {alert.impact}
                    </div>
                    <div className="text-slate-300">Business: {alert.businessImpact}</div>
                    <div className="text-slate-300">
                      Cost: {alert.estimatedCost >= 0 ? formatCurrency(alert.estimatedCost) : formatCurrency(Math.abs(alert.estimatedCost)) + ' saved'}
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