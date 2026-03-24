// Cloud Computing Intelligence Center - Cloud Operations, Multi-Cloud Analytics & Infrastructure Monitoring
import { useState, useEffect } from 'react';
import { Cloud, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Shield, Activity, Zap } from 'lucide-react';

export default function CloudComputingIntelligenceCenter() {
  const [cloudData, setCloudData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalCloudMarket: 567890123456, // EUR market size
      publicCloudRevenue: 345678901234,
      privateCloudRevenue: 123456789012,
      hybridCloudRevenue: 98765432109,
      cloudInfrastructure: 234567890123,
      cloudServices: 189012345678,
      cloudSoftware: 143567890123,
      cloudAdoption: 78.9, // percentage of enterprises
      multiCloudAdoption: 89.4, // percentage using multiple clouds
      cloudMigrationRate: 67.8, // percentage in migration
      cloudInvestmentGrowth: 23.4, // percentage annually
      edgeComputingMarket: 89012345678,
      serverlessMarket: 34567890123
    },
    majorCloudProviders: [
      {
        provider: 'Amazon Web Services',
        category: 'Public Cloud Leader',
        marketShare: 32.4, // percentage
        annualRevenue: 89012345678, // EUR
        regions: 32,
        availabilityZones: 102,
        services: 200,
        customers: 'Millions',
        services_list: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudWatch'],
        reliabilityScore: 99.99,
        securityScore: 97.8,
        performanceRating: 9.6,
        customerSatisfaction: 87.9,
        growthRate: 16.2
      },
      {
        provider: 'Microsoft Azure',
        category: 'Enterprise Cloud',
        marketShare: 23.1,
        annualRevenue: 67890123456,
        regions: 60,
        availabilityZones: 120,
        services: 600,
        customers: 'Millions',
        services_list: ['Virtual Machines', 'Storage', 'Functions', 'SQL Database', 'Monitor'],
        reliabilityScore: 99.95,
        securityScore: 96.7,
        performanceRating: 9.4,
        customerSatisfaction: 85.6,
        growthRate: 22.3
      },
      {
        provider: 'Google Cloud Platform',
        category: 'AI/ML Focused',
        marketShare: 9.8,
        annualRevenue: 23456789012,
        regions: 35,
        availabilityZones: 106,
        services: 100,
        customers: 'Millions',
        services_list: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'BigQuery', 'Stackdriver'],
        reliabilityScore: 99.95,
        securityScore: 95.9,
        performanceRating: 9.2,
        customerSatisfaction: 84.3,
        growthRate: 28.7
      },
      {
        provider: 'Alibaba Cloud',
        category: 'Asia-Pacific Leader',
        marketShare: 7.6,
        annualRevenue: 12345678901,
        regions: 27,
        availabilityZones: 84,
        services: 300,
        customers: '4M+',
        services_list: ['ECS', 'OSS', 'Function Compute', 'RDS', 'CloudMonitor'],
        reliabilityScore: 99.9,
        securityScore: 94.2,
        performanceRating: 8.9,
        customerSatisfaction: 82.7,
        growthRate: 19.5
      }
    ],
    cloudServices: [
      {
        service: 'Infrastructure as a Service (IaaS)',
        marketSize: 123456789012,
        growthRate: 18.5,
        adoptionRate: 89.4,
        topUseCases: ['Virtual Machines', 'Storage', 'Networking', 'Load Balancers'],
        averageUtilization: 67.8,
        costOptimization: 23.4,
        performanceScore: 91.2,
        securityCompliance: 94.6
      },
      {
        service: 'Platform as a Service (PaaS)',
        marketSize: 89012345678,
        growthRate: 24.7,
        adoptionRate: 67.8,
        topUseCases: ['App Development', 'Database Services', 'Analytics', 'Integration'],
        averageUtilization: 78.9,
        costOptimization: 34.5,
        performanceScore: 87.6,
        securityCompliance: 91.8
      },
      {
        service: 'Software as a Service (SaaS)',
        marketSize: 234567890123,
        growthRate: 16.3,
        adoptionRate: 94.6,
        topUseCases: ['CRM', 'ERP', 'Collaboration', 'Email'],
        averageUtilization: 89.7,
        costOptimization: 45.6,
        performanceScore: 89.4,
        securityCompliance: 88.9
      },
      {
        service: 'Serverless Computing',
        marketSize: 34567890123,
        growthRate: 45.6,
        adoptionRate: 56.7,
        topUseCases: ['Functions', 'Event Processing', 'APIs', 'Microservices'],
        averageUtilization: 45.6,
        costOptimization: 67.8,
        performanceScore: 85.3,
        securityCompliance: 87.4
      }
    ],
    cloudOperations: {
      resourceUtilization: {
        compute: 67.8, // percentage average
        storage: 78.9,
        network: 56.7,
        database: 89.4,
        overallEfficiency: 73.2
      },
      costManagement: {
        totalCloudSpend: 123456789012, // EUR annually
        optimizationSavings: 23.4, // percentage
        wastedResources: 34.5, // percentage
        costPerWorkload: 567.89, // EUR monthly average
        budgetCompliance: 78.9, // percentage
        reservedInstanceUsage: 45.6 // percentage
      },
      performance: {
        averageLatency: 45.6, // milliseconds
        throughput: 12345678, // requests per second
        availability: 99.95, // percentage
        responseTime: 234.5, // milliseconds
        errorRate: 0.05, // percentage
        scalabilityScore: 89.4
      },
      security: {
        securityScore: 87.9, // percentage
        complianceRate: 94.6, // percentage
        vulnerabilities: 234, // active
        securityIncidents: 45, // monthly
        dataEncryption: 96.7, // percentage
        accessControlCompliance: 91.2
      }
    },
    cloudMigration: {
      activeMigrations: 12345,
      completedMigrations: 89012,
      migrationSuccessRate: 87.9, // percentage
      averageMigrationTime: 123.4, // days
      costSavingsPostMigration: 34.5, // percentage
      performanceImprovement: 45.6, // percentage
      migratedWorkloads: 234567,
      legacySystemsRemaining: 45678,
      cloudNativeAdoption: 67.8, // percentage
      hybridDeployments: 56.7,
      migrationBudgetUtilization: 78.9,
      riskMitigationScore: 89.4
    },
    containerOrchestration: {
      kubernetesAdoption: 78.9, // percentage
      containerizedWorkloads: 567890, // number of workloads
      orchestrationPlatforms: ['Kubernetes', 'Docker Swarm', 'ECS', 'AKS', 'GKE'],
      averageClusterSize: 45,
      podDensity: 12.3, // pods per node
      resourceEfficiency: 67.8, // percentage
      deploymentFrequency: 234, // per day
      rollbackRate: 2.3, // percentage
      serviceUptime: 99.8, // percentage
      scalingEvents: 12345, // daily
      securityCompliance: 89.4,
      costOptimization: 34.5
    },
    multiCloudStrategy: {
      providersUsed: 3.2, // average per organization
      workloadDistribution: {
        'Primary Cloud': 67.8,
        'Secondary Cloud': 23.4,
        'Edge/Hybrid': 8.8
      },
      dataPortability: 78.9, // percentage
      vendorLockInRisk: 34.5, // percentage
      crossCloudNetworking: 89.4, // percentage enabled
      cloudInteroperability: 67.8,
      managementComplexity: 56.7, // difficulty score
      costOptimization: 45.6,
      disasterRecoveryReadiness: 91.2,
      complianceAlignment: 87.9,
      skillsGapImpact: 43.2,
      cloudGovernance: 78.9
    },
    sustainabilityMetrics: {
      carbonFootprintReduction: 34.5, // percentage
      energyEfficiency: 45.6, // percentage improvement
      renewableEnergyUsage: 67.8, // percentage
      greenCloudAdoption: 56.7, // percentage
      sustainabilityReporting: 78.9, // percentage automated
      carbonOffsetPrograms: 23.4, // percentage participation
      cloudOptimizationImpact: 34.5, // CO2 reduction percentage
      datacenterPUE: 1.15, // Power Usage Effectiveness
      waterUsageEfficiency: 89.4, // percentage optimization
      wasteReduction: 45.6, // percentage
      sustainabilityInvestment: 12345678901, // EUR annually
      environmentalCompliance: 91.2 // percentage
    },
    cloudAlerts: [
      {
        type: 'CRITICAL',
        category: 'Infrastructure',
        message: 'Multi-region outage detected in AWS us-east-1 - 23% of services affected',
        location: 'AWS US East Region',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '08:25',
        recommendations: ['Failover activation', 'Load redistribution', 'Customer notification', 'Recovery procedures']
      },
      {
        type: 'WARNING',
        category: 'Cost',
        message: 'Cloud spending exceeded budget by 35% - resource optimization needed',
        location: 'Global Cloud Resources',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '08:22',
        recommendations: ['Resource audit', 'Cost optimization', 'Budget reallocation', 'Usage monitoring']
      },
      {
        type: 'SUCCESS',
        category: 'Migration',
        message: 'Enterprise workload migration completed - 45% performance improvement achieved',
        location: 'Production Environment',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '08:19',
        recommendations: ['Performance monitoring', 'Cost analysis', 'Best practices documentation', 'Team training']
      },
      {
        type: 'INFO',
        category: 'Security',
        message: 'New cloud security compliance framework released - implementation required by Q2',
        location: 'Compliance Team',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '08:16',
        recommendations: ['Compliance assessment', 'Implementation planning', 'Training programs', 'Audit preparation']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCloudData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        cloudOperations: {
          ...prev.cloudOperations,
          resourceUtilization: {
            ...prev.cloudOperations.resourceUtilization,
            compute: Math.max(60, Math.min(80, prev.cloudOperations.resourceUtilization.compute + (Math.random() - 0.5) * 3)),
            storage: Math.max(70, Math.min(90, prev.cloudOperations.resourceUtilization.storage + (Math.random() - 0.5) * 2))
          },
          performance: {
            ...prev.cloudOperations.performance,
            averageLatency: Math.max(40, Math.min(60, prev.cloudOperations.performance.averageLatency + (Math.random() - 0.5) * 5)),
            availability: Math.max(99.90, Math.min(99.99, prev.cloudOperations.performance.availability + (Math.random() - 0.5) * 0.01))
          }
        }
      }));
    }, 8000);

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
      case 'Public Cloud Leader': return 'text-orange-400 bg-orange-400/20';
      case 'Enterprise Cloud': return 'text-blue-400 bg-blue-400/20';
      case 'AI/ML Focused': return 'text-purple-400 bg-purple-400/20';
      case 'Asia-Pacific Leader': return 'text-green-400 bg-green-400/20';
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
    <div className="h-full bg-gradient-to-br from-sky-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-sky-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Cloud Computing Intelligence Center</h1>
              <p className="text-sky-300">Cloud operations, multi-cloud analytics & infrastructure monitoring</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-sky-400">{cloudData.currentTime}</div>
            <div className="text-sky-300">Cloud Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Cloud className="w-5 h-5 text-sky-400 mr-2" />
                Cloud Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-sky-400">{formatCurrency(cloudData.industryOverview.globalCloudMarket)}</div>
            <div className="text-sky-300 text-sm">Global Market</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Public Cloud
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(cloudData.industryOverview.publicCloudRevenue)}</div>
            <div className="text-green-300 text-sm">Revenue</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-purple-400 mr-2" />
                Private Cloud
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatCurrency(cloudData.industryOverview.privateCloudRevenue)}</div>
            <div className="text-purple-300 text-sm">Revenue</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-blue-400 mr-2" />
                Hybrid Cloud
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatCurrency(cloudData.industryOverview.hybridCloudRevenue)}</div>
            <div className="text-blue-300 text-sm">Revenue</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-orange-400 mr-2" />
                Enterprise Adoption
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(cloudData.industryOverview.cloudAdoption)}</div>
            <div className="text-orange-300 text-sm">Adoption Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-cyan-400 mr-2" />
                Multi-Cloud
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(cloudData.industryOverview.multiCloudAdoption)}</div>
            <div className="text-cyan-300 text-sm">Adoption Rate</div>
          </div>
        </div>

        {/* Major Cloud Providers */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Cloud className="w-5 h-5 text-sky-400 mr-2" />
            Major Cloud Providers Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Provider</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Market Share</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Reliability</th>
                  <th className="text-center p-3 text-slate-300">Performance</th>
                  <th className="text-center p-3 text-slate-300">Growth</th>
                </tr>
              </thead>
              <tbody>
                {cloudData.majorCloudProviders.map((provider, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{provider.provider}</div>
                      <div className="text-slate-400 text-xs">{provider.regions} regions • {provider.availabilityZones} AZs • {provider.services}+ services</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(provider.category)}`}>
                        {provider.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-sky-400">{formatPercentage(provider.marketShare)}</td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(provider.annualRevenue)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(provider.reliabilityScore, 99.0, 99.9)}`}>
                      {formatPercentage(provider.reliabilityScore)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(provider.performanceRating, 8.0, 9.0)}`}>
                      {provider.performanceRating.toFixed(1)}/10
                    </td>
                    <td className="p-3 text-center text-orange-400">{formatPercentage(provider.growthRate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cloud Services & Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-purple-400 mr-2" />
              Cloud Services Intelligence
            </h3>
            <div className="space-y-4">
              {cloudData.cloudServices.map((service, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{service.service}</span>
                      <span className={`text-sm ${getPerformanceColor(service.adoptionRate, 70, 85)}`}>
                        {formatPercentage(service.adoptionRate)}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatCurrency(service.marketSize)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Growth: {formatPercentage(service.growthRate)}</div>
                      <div className="text-purple-400">Utilization: {formatPercentage(service.averageUtilization)}</div>
                      <div className="text-cyan-400">Performance: {formatPercentage(service.performanceScore)}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Cost Savings: {formatPercentage(service.costOptimization)}</div>
                      <div className="text-orange-400">Security: {formatPercentage(service.securityCompliance)}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.topUseCases.map((useCase, ucIndex) => (
                      <span key={ucIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-green-400 mr-2" />
              Cloud Operations Intelligence
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Resource Utilization</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Compute</span>
                    <span className="text-blue-400">{formatPercentage(cloudData.cloudOperations.resourceUtilization.compute)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Storage</span>
                    <span className="text-green-400">{formatPercentage(cloudData.cloudOperations.resourceUtilization.storage)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Network</span>
                    <span className="text-purple-400">{formatPercentage(cloudData.cloudOperations.resourceUtilization.network)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Database</span>
                    <span className="text-cyan-400">{formatPercentage(cloudData.cloudOperations.resourceUtilization.database)}</span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-lg font-bold text-orange-400">{formatPercentage(cloudData.cloudOperations.resourceUtilization.overallEfficiency)}</div>
                  <div className="text-slate-300 text-xs">Overall Efficiency</div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Cost Management</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Total Spend</span>
                    <span className="text-red-400">{formatCurrency(cloudData.cloudOperations.costManagement.totalCloudSpend)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Savings</span>
                    <span className="text-green-400">{formatPercentage(cloudData.cloudOperations.costManagement.optimizationSavings)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Waste</span>
                    <span className="text-orange-400">{formatPercentage(cloudData.cloudOperations.costManagement.wastedResources)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Reserved Usage</span>
                    <span className="text-blue-400">{formatPercentage(cloudData.cloudOperations.costManagement.reservedInstanceUsage)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Performance Metrics</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Latency</span>
                    <span className="text-yellow-400">{cloudData.cloudOperations.performance.averageLatency.toFixed(1)}ms</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Availability</span>
                    <span className="text-green-400">{formatPercentage(cloudData.cloudOperations.performance.availability)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Throughput</span>
                    <span className="text-blue-400">{formatNumber(cloudData.cloudOperations.performance.throughput)} RPS</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Error Rate</span>
                    <span className="text-red-400">{formatPercentage(cloudData.cloudOperations.performance.errorRate)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Migration & Container Orchestration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-orange-400 mr-2" />
              Cloud Migration Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{formatNumber(cloudData.cloudMigration.activeMigrations)}</div>
                <div className="text-orange-300 text-sm">Active Migrations</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(cloudData.cloudMigration.completedMigrations)} completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(cloudData.cloudMigration.migrationSuccessRate)}</div>
                <div className="text-green-300 text-sm">Success Rate</div>
                <div className="text-gray-400 text-xs mt-1">{cloudData.cloudMigration.averageMigrationTime.toFixed(0)} days avg</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Migration Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cost Savings</span>
                  <span className="text-green-400">{formatPercentage(cloudData.cloudMigration.costSavingsPostMigration)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Performance Gain</span>
                  <span className="text-blue-400">{formatPercentage(cloudData.cloudMigration.performanceImprovement)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cloud Native</span>
                  <span className="text-purple-400">{formatPercentage(cloudData.cloudMigration.cloudNativeAdoption)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Hybrid Deploy</span>
                  <span className="text-cyan-400">{formatPercentage(cloudData.cloudMigration.hybridDeployments)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Budget Utilization</span>
                  <span className="text-orange-400">{formatPercentage(cloudData.cloudMigration.migrationBudgetUtilization)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Risk Mitigation</span>
                  <span className="text-green-400">{formatPercentage(cloudData.cloudMigration.riskMitigationScore)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-indigo-400">{formatNumber(cloudData.cloudMigration.migratedWorkloads)}</div>
                <div className="text-slate-300">Migrated Workloads</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-yellow-400">{formatNumber(cloudData.cloudMigration.legacySystemsRemaining)}</div>
                <div className="text-slate-300">Legacy Systems</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              Container Orchestration Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(cloudData.containerOrchestration.kubernetesAdoption)}</div>
                <div className="text-blue-300 text-sm">Kubernetes Adoption</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(cloudData.containerOrchestration.containerizedWorkloads)} workloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(cloudData.containerOrchestration.serviceUptime)}</div>
                <div className="text-green-300 text-sm">Service Uptime</div>
                <div className="text-gray-400 text-xs mt-1">{cloudData.containerOrchestration.averageClusterSize} nodes avg</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Container Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Pod Density</span>
                  <span className="text-green-400">{cloudData.containerOrchestration.podDensity.toFixed(1)}/node</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Resource Efficiency</span>
                  <span className="text-blue-400">{formatPercentage(cloudData.containerOrchestration.resourceEfficiency)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Deployments/Day</span>
                  <span className="text-purple-400">{formatNumber(cloudData.containerOrchestration.deploymentFrequency)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Rollback Rate</span>
                  <span className="text-orange-400">{formatPercentage(cloudData.containerOrchestration.rollbackRate)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Scaling Events</span>
                  <span className="text-cyan-400">{formatNumber(cloudData.containerOrchestration.scalingEvents)}/day</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Security Compliance</span>
                  <span className="text-green-400">{formatPercentage(cloudData.containerOrchestration.securityCompliance)}</span>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <h4 className="text-white text-sm font-medium mb-2">Orchestration Platforms</h4>
              <div className="flex flex-wrap gap-1">
                {cloudData.containerOrchestration.orchestrationPlatforms.map((platform, index) => (
                  <span key={index} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Cloud Strategy & Sustainability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cloud className="w-5 h-5 text-purple-400 mr-2" />
              Multi-Cloud Strategy Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{cloudData.multiCloudStrategy.providersUsed.toFixed(1)}</div>
                <div className="text-purple-300 text-sm">Avg Providers Used</div>
                <div className="text-gray-400 text-xs mt-1">per organization</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(cloudData.multiCloudStrategy.disasterRecoveryReadiness)}</div>
                <div className="text-green-300 text-sm">DR Readiness</div>
                <div className="text-gray-400 text-xs mt-1">cross-cloud backup</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Workload Distribution</h4>
              <div className="space-y-2">
                {Object.entries(cloudData.multiCloudStrategy.workloadDistribution).map(([key, value], index) => (
                  <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2 text-xs">
                    <span className="text-slate-300">{key}</span>
                    <span className="text-cyan-400">{formatPercentage(value)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Strategy Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Data Portability</span>
                  <span className="text-green-400">{formatPercentage(cloudData.multiCloudStrategy.dataPortability)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Vendor Lock-in Risk</span>
                  <span className="text-red-400">{formatPercentage(cloudData.multiCloudStrategy.vendorLockInRisk)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cross-Cloud Network</span>
                  <span className="text-blue-400">{formatPercentage(cloudData.multiCloudStrategy.crossCloudNetworking)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Interoperability</span>
                  <span className="text-purple-400">{formatPercentage(cloudData.multiCloudStrategy.cloudInteroperability)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cost Optimization</span>
                  <span className="text-orange-400">{formatPercentage(cloudData.multiCloudStrategy.costOptimization)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cloud Governance</span>
                  <span className="text-cyan-400">{formatPercentage(cloudData.multiCloudStrategy.cloudGovernance)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Cloud Sustainability Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(cloudData.sustainabilityMetrics.carbonFootprintReduction)}</div>
                <div className="text-green-300 text-sm">Carbon Reduction</div>
                <div className="text-gray-400 text-xs mt-1">vs baseline</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(cloudData.sustainabilityMetrics.renewableEnergyUsage)}</div>
                <div className="text-blue-300 text-sm">Renewable Energy</div>
                <div className="text-gray-400 text-xs mt-1">usage rate</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Sustainability Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Energy Efficiency</span>
                  <span className="text-green-400">{formatPercentage(cloudData.sustainabilityMetrics.energyEfficiency)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Green Cloud Adoption</span>
                  <span className="text-blue-400">{formatPercentage(cloudData.sustainabilityMetrics.greenCloudAdoption)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Datacenter PUE</span>
                  <span className="text-orange-400">{cloudData.sustainabilityMetrics.datacenterPUE.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Water Efficiency</span>
                  <span className="text-cyan-400">{formatPercentage(cloudData.sustainabilityMetrics.waterUsageEfficiency)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Waste Reduction</span>
                  <span className="text-purple-400">{formatPercentage(cloudData.sustainabilityMetrics.wasteReduction)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Auto Reporting</span>
                  <span className="text-indigo-400">{formatPercentage(cloudData.sustainabilityMetrics.sustainabilityReporting)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatCurrency(cloudData.sustainabilityMetrics.sustainabilityInvestment)}</div>
                <div className="text-slate-300">Sustainability Investment</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatPercentage(cloudData.sustainabilityMetrics.environmentalCompliance)}</div>
                <div className="text-slate-300">Environmental Compliance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Cloud Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {cloudData.cloudAlerts.map((alert, index) => (
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
                    <div className="text-slate-300">Location: {alert.location}</div>
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