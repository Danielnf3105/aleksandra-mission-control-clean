// Enterprise Software & Digital Infrastructure Intelligence Center - Software & Cloud Analytics
import { useState, useEffect } from 'react';
import { Server, Cloud, Code, Database, Shield, Activity, BarChart3, Layers, Globe, Monitor, Cpu, HardDrive } from 'lucide-react';

export default function EnterpriseSoftwareDigitalInfrastructureIntelligenceCenter() {
  const [enterpriseData, setEnterpriseData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    infrastructureOverview: {
      cloudPlatforms: 156789,
      enterpriseApplications: 234567,
      microservices: 789012,
      databases: 345678,
      apiEndpoints: 567890,
      containers: 1234567,
      serverlessFunction: 890123,
      cicdPipelines: 123456,
      globalUptime: 99.97,
      performanceScore: 94.2,
      securityCompliance: 96.8,
      costOptimization: 87.5,
      scalabilityIndex: 92.1,
      innovationVelocity: 85.7,
      userSatisfaction: 89.4,
      dataIntegrity: 99.3,
      disasterRecovery: 95.6,
      automationLevel: 78.9,
      monitoringCoverage: 98.2,
      resourceUtilization: 83.4
    },
    cloudPlatforms: [
      {
        platformName: 'Microsoft Azure Global',
        platformId: 'AZURE-GLOBAL-001',
        provider: 'Microsoft Corporation',
        deploymentType: 'MULTI-CLOUD HYBRID',
        status: 'OPERATIONAL',
        region: 'WORLDWIDE',
        zones: 60,
        services: 200,
        compute: 'VM Series, AKS, Functions',
        storage: 'Blob, Files, Queue, Table',
        networking: 'VNet, Load Balancer, CDN',
        uptime: 99.95,
        performance: 94.7,
        cost: 8.5,
        utilization: 78.2,
        compliance: 'SOC 2, ISO 27001, GDPR',
        security: 'Advanced Threat Protection',
        monitoring: 'Azure Monitor, Log Analytics',
        backup: 'Geo-Redundant Storage',
        instances: 125000,
        activeUsers: 2500000,
        trafficVolume: 15.8,
        responseTime: 145,
        errorRate: 0.05
      },
      {
        platformName: 'Amazon Web Services',
        platformId: 'AWS-ENTERPRISE-002',
        provider: 'Amazon Web Services',
        deploymentType: 'PUBLIC CLOUD',
        status: 'OPERATIONAL',
        region: 'MULTI-REGION',
        zones: 84,
        services: 220,
        compute: 'EC2, ECS, Lambda',
        storage: 'S3, EBS, EFS, Glacier',
        networking: 'VPC, CloudFront, Route 53',
        uptime: 99.99,
        performance: 96.2,
        cost: 12.3,
        utilization: 85.6,
        compliance: 'PCI DSS, HIPAA, SOC 1/2/3',
        security: 'IAM, GuardDuty, Shield',
        monitoring: 'CloudWatch, X-Ray',
        backup: 'Cross-Region Replication',
        instances: 189000,
        activeUsers: 3200000,
        trafficVolume: 22.4,
        responseTime: 89,
        errorRate: 0.01
      },
      {
        platformName: 'Google Cloud Platform',
        platformId: 'GCP-ENTERPRISE-003',
        provider: 'Google LLC',
        deploymentType: 'HYBRID CLOUD',
        status: 'SCALING',
        region: 'GLOBAL',
        zones: 35,
        services: 150,
        compute: 'Compute Engine, GKE, Functions',
        storage: 'Cloud Storage, Persistent Disk',
        networking: 'VPC, Load Balancing, CDN',
        uptime: 99.92,
        performance: 93.1,
        cost: 7.9,
        utilization: 72.8,
        compliance: 'ISO 27001, SOC 2, GDPR',
        security: 'Cloud Security Command Center',
        monitoring: 'Stackdriver, Cloud Trace',
        backup: 'Multi-Regional Storage',
        instances: 78000,
        activeUsers: 1800000,
        trafficVolume: 11.2,
        responseTime: 112,
        errorRate: 0.08
      },
      {
        platformName: 'Oracle Enterprise Cloud',
        platformId: 'OCI-ENTERPRISE-004',
        provider: 'Oracle Corporation',
        deploymentType: 'PRIVATE CLOUD',
        status: 'MAINTENANCE',
        region: 'REGIONAL',
        zones: 20,
        services: 80,
        compute: 'Compute Instances, OKE',
        storage: 'Object Storage, Block Storage',
        networking: 'VCN, Load Balancer',
        uptime: 0.0,
        performance: 0.0,
        cost: 5.2,
        utilization: 0.0,
        compliance: 'SOX, PCI DSS, HIPAA',
        security: 'Cloud Guard, Security Zones',
        monitoring: 'Oracle Monitoring',
        backup: 'Cross-Region Backup',
        instances: 0,
        activeUsers: 0,
        trafficVolume: 0.0,
        responseTime: 0,
        errorRate: 0.0
      }
    ],
    enterpriseApplications: [
      {
        applicationName: 'SAP S/4HANA Enterprise',
        applicationId: 'SAP-S4-ENT-001',
        vendor: 'SAP SE',
        category: 'ENTERPRISE RESOURCE PLANNING',
        status: 'PRODUCTION',
        version: '2023.4.1',
        deployment: 'ON-PREMISE',
        users: 15000,
        modules: 'Finance, Sales, Procurement, Manufacturing',
        database: 'SAP HANA In-Memory',
        integrations: 'Salesforce, Office 365, Workday',
        uptime: 99.8,
        performance: 92.5,
        utilization: 78.9,
        licenseCompliance: 'COMPLIANT',
        securityRating: 'HIGH',
        lastUpdate: '2026-03-01',
        supportLevel: 'PREMIUM',
        businessCritical: 'YES',
        dataVolume: 45.6,
        transactionRate: 125000,
        responseTime: 2.3,
        concurrentUsers: 2400,
        peakUsage: '09:00-17:00'
      },
      {
        applicationName: 'Microsoft Dynamics 365',
        applicationId: 'MSF-D365-002',
        vendor: 'Microsoft Corporation',
        category: 'CUSTOMER RELATIONSHIP MANAGEMENT',
        status: 'PRODUCTION',
        version: '10.0.38',
        deployment: 'CLOUD SAAS',
        users: 8500,
        modules: 'Sales, Marketing, Service, Finance',
        database: 'Azure SQL Database',
        integrations: 'Teams, Power BI, Office 365',
        uptime: 99.95,
        performance: 94.8,
        utilization: 85.2,
        licenseCompliance: 'COMPLIANT',
        securityRating: 'VERY HIGH',
        lastUpdate: '2026-03-15',
        supportLevel: 'ENTERPRISE',
        businessCritical: 'YES',
        dataVolume: 23.8,
        transactionRate: 78000,
        responseTime: 1.8,
        concurrentUsers: 1500,
        peakUsage: '08:00-18:00'
      },
      {
        applicationName: 'ServiceNow IT Operations',
        applicationId: 'SNW-ITOPS-003',
        vendor: 'ServiceNow Inc',
        category: 'IT SERVICE MANAGEMENT',
        status: 'PRODUCTION',
        version: 'Tokyo Patch 10',
        deployment: 'CLOUD SAAS',
        users: 12000,
        modules: 'ITSM, ITOM, SecOps, HR',
        database: 'MySQL Enterprise',
        integrations: 'Active Directory, Slack, Jenkins',
        uptime: 99.9,
        performance: 96.1,
        utilization: 91.7,
        licenseCompliance: 'COMPLIANT',
        securityRating: 'HIGH',
        lastUpdate: '2026-03-10',
        supportLevel: 'PREMIER',
        businessCritical: 'YES',
        dataVolume: 18.4,
        transactionRate: 95000,
        responseTime: 1.2,
        concurrentUsers: 1800,
        peakUsage: '07:00-19:00'
      }
    ],
    softwareDevelopment: [
      {
        toolName: 'GitHub Enterprise Server',
        toolId: 'GHE-ENTERPRISE-001',
        provider: 'GitHub Inc (Microsoft)',
        category: 'SOURCE CODE MANAGEMENT',
        status: 'OPERATIONAL',
        version: '3.11.5',
        repositories: 25678,
        developers: 3400,
        commits: 156789,
        pullRequests: 4567,
        issues: 2345,
        projects: 890,
        collaborators: 12000,
        organizations: 45,
        cicdIntegration: 'GitHub Actions',
        securityScanning: 'CodeQL, Dependabot',
        uptime: 99.97,
        performance: 95.3,
        storageUsed: 2.8,
        bandwidth: 15.6,
        apiCalls: 2500000,
        webhooks: 12000,
        lastBackup: '2026-03-18 02:00'
      },
      {
        toolName: 'Jenkins Enterprise',
        toolId: 'JENKINS-ENT-002',
        provider: 'CloudBees Inc',
        category: 'CONTINUOUS INTEGRATION',
        status: 'OPERATIONAL',
        version: '2.440.1',
        pipelines: 1234,
        builds: 45678,
        nodes: 156,
        plugins: 890,
        jobs: 5678,
        queued: 23,
        running: 89,
        failed: 12,
        agents: 234,
        successRate: 94.2,
        avgBuildTime: 8.5,
        uptime: 99.5,
        performance: 91.7,
        cpuUsage: 65.8,
        memoryUsage: 78.2,
        diskUsage: 45.6,
        lastMaintenance: '2026-03-15'
      },
      {
        toolName: 'SonarQube Enterprise',
        toolId: 'SONAR-ENT-003',
        provider: 'SonarSource SA',
        category: 'CODE QUALITY ANALYSIS',
        status: 'OPERATIONAL',
        version: '10.3.0',
        projects: 2345,
        linesOfCode: 125000000,
        languages: 'Java, C#, JavaScript, Python, Go',
        qualityGates: 234,
        codeSmells: 45678,
        bugs: 1234,
        vulnerabilities: 89,
        coverage: 78.5,
        duplication: 3.2,
        maintainabilityRating: 'A',
        reliabilityRating: 'A',
        securityRating: 'A',
        uptime: 99.8,
        performance: 93.4,
        lastScan: '2026-03-18 06:00'
      }
    ],
    databaseSystems: [
      {
        databaseName: 'Oracle Database 19c',
        databaseId: 'ORA-19C-PROD-001',
        vendor: 'Oracle Corporation',
        type: 'RELATIONAL DATABASE',
        status: 'OPERATIONAL',
        version: '19.21.0.0',
        environment: 'PRODUCTION',
        instances: 12,
        size: 45.8,
        transactions: 2500000,
        connections: 1200,
        uptime: 99.95,
        performance: 94.6,
        cpu: 68.5,
        memory: 78.2,
        diskIo: 156.7,
        networkIo: 89.4,
        backupStatus: 'COMPLETED',
        lastBackup: '2026-03-18 01:00',
        replication: 'ACTIVE DATA GUARD',
        encryption: 'TRANSPARENT DATA ENCRYPTION',
        monitoring: 'Oracle Enterprise Manager'
      },
      {
        databaseName: 'MongoDB Enterprise Cluster',
        databaseId: 'MONGO-ENT-CLS-002',
        vendor: 'MongoDB Inc',
        type: 'DOCUMENT DATABASE',
        status: 'OPERATIONAL',
        version: '7.0.5',
        environment: 'PRODUCTION',
        instances: 9,
        size: 28.3,
        operations: 890000,
        connections: 450,
        uptime: 99.9,
        performance: 96.1,
        cpu: 45.2,
        memory: 62.8,
        diskIo: 234.1,
        networkIo: 112.6,
        backupStatus: 'COMPLETED',
        lastBackup: '2026-03-18 03:00',
        replication: 'REPLICA SET',
        sharding: 'ENABLED',
        monitoring: 'MongoDB Compass'
      },
      {
        databaseName: 'Redis Enterprise Cache',
        databaseId: 'REDIS-ENT-CACHE-003',
        vendor: 'Redis Labs',
        type: 'IN-MEMORY DATABASE',
        status: 'OPERATIONAL',
        version: '7.2.4',
        environment: 'PRODUCTION',
        instances: 6,
        size: 156.7,
        operations: 15000000,
        connections: 2800,
        uptime: 99.98,
        performance: 97.8,
        cpu: 34.5,
        memory: 89.4,
        hitRate: 95.6,
        networkIo: 345.2,
        backupStatus: 'SNAPSHOT',
        lastBackup: '2026-03-18 04:00',
        clustering: 'ENABLED',
        persistence: 'RDB + AOF',
        monitoring: 'RedisInsight'
      }
    ],
    securityCompliance: [
      {
        complianceFramework: 'SOC 2 Type II',
        frameworkId: 'SOC2-TYPEII-001',
        authority: 'AICPA',
        scope: 'ORGANIZATION-WIDE',
        status: 'COMPLIANT',
        validUntil: '2026-12-31',
        lastAudit: '2025-11-15',
        nextAudit: '2026-11-15',
        findings: 'NONE',
        controls: 156,
        exceptions: 0,
        auditFirm: 'Deloitte & Touche LLP',
        reportStatus: 'CLEAN OPINION',
        trustServices: 'Security, Availability, Confidentiality',
        riskLevel: 'LOW',
        remediationRequired: 'NO',
        continuousMonitoring: 'ENABLED',
        automatedControls: 89.7
      },
      {
        complianceFramework: 'ISO 27001:2022',
        frameworkId: 'ISO27001-2022-002',
        authority: 'International Organization for Standardization',
        scope: 'INFORMATION SECURITY',
        status: 'COMPLIANT',
        validUntil: '2027-06-30',
        lastAudit: '2025-05-20',
        nextAudit: '2026-05-20',
        findings: 'MINOR',
        controls: 114,
        exceptions: 2,
        auditFirm: 'BSI Group',
        reportStatus: 'CERTIFICATE ISSUED',
        riskLevel: 'LOW',
        remediationRequired: 'YES',
        continuousMonitoring: 'ENABLED',
        automatedControls: 76.3
      },
      {
        complianceFramework: 'GDPR',
        frameworkId: 'GDPR-EU-003',
        authority: 'European Union',
        scope: 'DATA PROTECTION',
        status: 'COMPLIANT',
        validUntil: 'ONGOING',
        lastAssessment: '2026-01-15',
        nextAssessment: '2026-07-15',
        findings: 'NONE',
        dataSubjects: 2500000,
        requests: 234,
        breaches: 0,
        dpoAssigned: 'YES',
        privacyByDesign: 'IMPLEMENTED',
        dataMapping: 'COMPLETE',
        riskLevel: 'LOW',
        automatedCompliance: 92.1
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        cloudPlatforms: 156789,
        applications: 234567,
        uptime: 99.97,
        performance: 94.2,
        transactions: 25000000,
        apiCalls: 5600000,
        errors: 1250,
        incidents: 2
      },
      {
        period: 'Last 24 Hours',
        cloudPlatforms: 156234,
        applications: 233987,
        uptime: 99.95,
        performance: 93.8,
        transactions: 580000000,
        apiCalls: 125000000,
        errors: 28000,
        incidents: 8
      },
      {
        period: 'Last 7 Days',
        cloudPlatforms: 155678,
        applications: 232456,
        uptime: 99.92,
        performance: 93.2,
        transactions: 3900000000,
        apiCalls: 850000000,
        errors: 195000,
        incidents: 23
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setEnterpriseData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        infrastructureOverview: {
          ...prev.infrastructureOverview,
          globalUptime: Math.max(99.0, Math.min(99.99, prev.infrastructureOverview.globalUptime + (Math.random() - 0.5) * 0.01)),
          performanceScore: Math.max(85.0, Math.min(98.0, prev.infrastructureOverview.performanceScore + (Math.random() - 0.5) * 1.0))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'PRODUCTION': return 'text-green-400 bg-green-400/20';
      case 'SCALING': return 'text-blue-400 bg-blue-400/20';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20';
      case 'COMPLIANT': return 'text-green-400 bg-green-400/20';
      case 'COMPLETED': return 'text-green-400 bg-green-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatGB = (gb) => `${gb.toFixed(1)} GB`;
  const formatTB = (tb) => `${tb.toFixed(1)} TB`;
  const formatMS = (ms) => `${ms.toFixed(0)}ms`;

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <Server className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Enterprise Software & Digital Infrastructure Intelligence Center</h1>
              <p className="text-slate-300">Software & cloud analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-slate-400">{enterpriseData.currentTime}</div>
            <div className="text-slate-300">Infrastructure Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Infrastructure Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Cloud className="w-5 h-5 text-blue-400 mr-2" />
                Platforms
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(enterpriseData.infrastructureOverview.cloudPlatforms)}</div>
            <div className="text-blue-300 text-sm">{formatNumber(enterpriseData.infrastructureOverview.enterpriseApplications)} Apps</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Uptime
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(enterpriseData.infrastructureOverview.globalUptime)}</div>
            <div className="text-green-300 text-sm">Global Availability</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
                Performance
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(enterpriseData.infrastructureOverview.performanceScore)}</div>
            <div className="text-purple-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-cyan-400 mr-2" />
                Security
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(enterpriseData.infrastructureOverview.securityCompliance)}</div>
            <div className="text-cyan-300 text-sm">Compliance</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Code className="w-5 h-5 text-yellow-400 mr-2" />
                Services
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(enterpriseData.infrastructureOverview.microservices)}</div>
            <div className="text-yellow-300 text-sm">Microservices</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Database className="w-5 h-5 text-orange-400 mr-2" />
                Databases
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(enterpriseData.infrastructureOverview.databases)}</div>
            <div className="text-orange-300 text-sm">Systems</div>
          </div>
        </div>

        {/* Cloud Platforms & Enterprise Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cloud className="w-5 h-5 text-blue-400 mr-2" />
              Cloud Platforms
            </h3>
            <div className="space-y-4">
              {enterpriseData.cloudPlatforms.map((platform, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{platform.platformName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(platform.status)}`}>
                        {platform.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{platform.provider}</div>
                    <div className="text-blue-400">{platform.deploymentType}</div>
                    <div className="text-green-400">{platform.region}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Zones: {platform.zones}</div>
                    <div className="text-purple-400">Services: {platform.services}</div>
                  </div>
                  
                  {platform.uptime > 0 && (
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Uptime</span>
                        <span>{formatPercentage(platform.uptime)}</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-1">
                        <div 
                          className="bg-blue-400 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${platform.uptime}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Performance: {formatPercentage(platform.performance)}</div>
                    <div className="text-indigo-400">Instances: {formatNumber(platform.instances)}</div>
                    <div className="text-cyan-400">Users: {formatNumber(platform.activeUsers)}</div>
                    <div className="text-green-400">Traffic: {formatTB(platform.trafficVolume)}/day</div>
                    <div className="text-blue-400">Response: {formatMS(platform.responseTime)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Monitor className="w-5 h-5 text-green-400 mr-2" />
              Enterprise Applications
            </h3>
            <div className="space-y-4">
              {enterpriseData.enterpriseApplications.map((app, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{app.applicationName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{app.vendor}</div>
                    <div className="text-blue-400">{app.category}</div>
                    <div className="text-green-400">{app.deployment}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Version: {app.version}</div>
                    <div className="text-purple-400">Users: {formatNumber(app.users)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Uptime</span>
                      <span>{formatPercentage(app.uptime)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-green-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${app.uptime}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Performance: {formatPercentage(app.performance)}</div>
                    <div className="text-indigo-400">Transactions: {formatNumber(app.transactionRate)}/day</div>
                    <div className="text-cyan-400">Response: {app.responseTime}s</div>
                    <div className="text-green-400">Data: {formatTB(app.dataVolume)}</div>
                    <div className="text-blue-400">Critical: {app.businessCritical}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Software Development Tools & Database Systems */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Code className="w-5 h-5 text-purple-400 mr-2" />
              Software Development Tools
            </h3>
            <div className="space-y-4">
              {enterpriseData.softwareDevelopment.map((tool, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{tool.toolName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(tool.status)}`}>
                        {tool.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{tool.provider}</div>
                    <div className="text-blue-400">{tool.category}</div>
                    <div className="text-green-400">v{tool.version}</div>
                  </div>
                  
                  {tool.uptime && (
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Uptime</span>
                        <span>{formatPercentage(tool.uptime)}</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-1">
                        <div 
                          className="bg-purple-400 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${tool.uptime}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {tool.repositories && `Repos: ${formatNumber(tool.repositories)}`}
                      {tool.pipelines && `Pipelines: ${formatNumber(tool.pipelines)}`}
                      {tool.projects && `Projects: ${formatNumber(tool.projects)}`}
                    </div>
                    <div className="text-indigo-400">
                      {tool.developers && `Developers: ${formatNumber(tool.developers)}`}
                      {tool.builds && `Builds: ${formatNumber(tool.builds)}`}
                      {tool.linesOfCode && `LoC: ${formatNumber(tool.linesOfCode)}`}
                    </div>
                    <div className="text-cyan-400">
                      {tool.successRate && `Success: ${formatPercentage(tool.successRate)}`}
                      {tool.coverage && `Coverage: ${formatPercentage(tool.coverage)}`}
                    </div>
                    <div className="text-green-400">Performance: {formatPercentage(tool.performance)}</div>
                    <div className="text-blue-400">
                      {tool.storageUsed && `Storage: ${formatTB(tool.storageUsed)}`}
                      {tool.avgBuildTime && `Avg Build: ${tool.avgBuildTime}min`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Database className="w-5 h-5 text-orange-400 mr-2" />
              Database Systems
            </h3>
            <div className="space-y-4">
              {enterpriseData.databaseSystems.map((db, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{db.databaseName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(db.status)}`}>
                        {db.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{db.vendor}</div>
                    <div className="text-blue-400">{db.type}</div>
                    <div className="text-green-400">{db.environment}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Uptime</span>
                      <span>{formatPercentage(db.uptime)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-orange-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${db.uptime}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Size: {formatTB(db.size)}</div>
                    <div className="text-indigo-400">Instances: {db.instances}</div>
                    <div className="text-cyan-400">
                      {db.transactions && `Txn: ${formatNumber(db.transactions)}/day`}
                      {db.operations && `Ops: ${formatNumber(db.operations)}/day`}
                    </div>
                    <div className="text-green-400">Connections: {db.connections}</div>
                    <div className="text-blue-400">Performance: {formatPercentage(db.performance)}</div>
                    {db.hitRate && <div className="text-purple-400">Hit Rate: {formatPercentage(db.hitRate)}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 text-cyan-400 mr-2" />
            Security & Compliance Frameworks
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {enterpriseData.securityCompliance.map((compliance, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{compliance.complianceFramework}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(compliance.status)}`}>
                      {compliance.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Authority: {compliance.authority}</div>
                  <div className="text-blue-400">Scope: {compliance.scope}</div>
                  {compliance.auditFirm && <div className="text-green-400">Auditor: {compliance.auditFirm}</div>}
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-yellow-400">
                    {compliance.validUntil !== 'ONGOING' ? `Valid Until: ${compliance.validUntil}` : 'Ongoing Compliance'}
                  </div>
                  <div className="text-purple-400">Next Audit: {compliance.nextAudit || compliance.nextAssessment}</div>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-slate-300">Findings: {compliance.findings}</div>
                  <div className="text-indigo-400">Controls: {compliance.controls || compliance.dataSubjects}</div>
                  <div className="text-cyan-400">Exceptions: {compliance.exceptions || compliance.requests || compliance.breaches}</div>
                  <div className="text-green-400">Risk: {compliance.riskLevel}</div>
                  <div className="text-blue-400">Automated: {formatPercentage(compliance.automatedControls || compliance.automatedCompliance)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-slate-400 mr-2" />
            Enterprise Infrastructure Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {enterpriseData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Platforms: {formatNumber(metrics.cloudPlatforms)}</div>
                  <div className="text-green-400">Apps: {formatNumber(metrics.applications)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Uptime: {formatPercentage(metrics.uptime)}</div>
                  <div className="text-yellow-400">Performance: {formatPercentage(metrics.performance)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Transactions: {formatNumber(metrics.transactions)}</div>
                  <div className="text-orange-400">API Calls: {formatNumber(metrics.apiCalls)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Errors: {formatNumber(metrics.errors)}</div>
                  <div className="text-pink-400">Incidents: {metrics.incidents}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}