// Cybersecurity Technology & Threat Intelligence Center - Cybersecurity & Threat Analytics
import { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Eye, Lock, Activity, BarChart3, TrendingUp, Zap, Target, Monitor, Globe, Cpu } from 'lucide-react';

export default function CybersecurityTechnologyThreatIntelligenceCenter() {
  const [cybersecurityData, setCybersecurityData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    cybersecurityOverview: {
      securityPlatforms: 567890,
      protectedEndpoints: 234567890,
      threatsBlocked: 123456789,
      securityIncidents: 456789,
      vulnerabilities: 789012,
      securityTools: 123456,
      threatDetectionRate: 99.7,
      responseTime: 2.3,
      falsePositiveRate: 0.8,
      complianceScore: 96.4,
      securityPosture: 87.8,
      threatIntelligence: 94.2,
      incidentResolution: 92.6,
      vulnerabilityPatching: 89.5,
      userAwareness: 76.8,
      zeroTrustAdoption: 65.4,
      aiSecurityIntegration: 78.9,
      cloudSecurityScore: 91.3,
      networkSegmentation: 83.7,
      identityProtection: 95.1
    },
    securityPlatforms: [
      {
        platformName: 'CrowdStrike Falcon Platform',
        platformId: 'CROWDSTRIKE-FALCON-001',
        location: 'Global Cloud Infrastructure',
        platformType: 'ENDPOINT DETECTION & RESPONSE',
        status: 'OPERATIONAL',
        endpointsProtected: 25000000,
        threatsBlocked: 2500000000,
        detectionRate: 99.8,
        responseTime: 1.2,
        falsePositives: 0.02,
        malwareFamilies: 450000,
        aiModels: 125,
        cloudNative: true,
        realTimeProtection: true,
        threatHunting: 'Advanced',
        behaviorAnalysis: 'Machine Learning',
        fileAnalysis: 'Static & Dynamic',
        networkAnalysis: 'Flow-based',
        memoryProtection: 'Kernel-level',
        iotProtection: 'Supported',
        mobileProtection: 'iOS & Android',
        compliance: 'SOC 2, ISO 27001',
        customerSatisfaction: 96.7,
        threatIntelligence: 'Premium'
      },
      {
        platformName: 'Microsoft Sentinel',
        platformId: 'MICROSOFT-SENTINEL-002',
        location: 'Azure Cloud Worldwide',
        platformType: 'SECURITY INFORMATION & EVENT MANAGEMENT',
        status: 'OPERATIONAL',
        dataIngestion: 50000000000,
        securityEvents: 125000000000,
        detectionRules: 15000,
        playbooks: 2500,
        connectedSources: 125000,
        workspace: 45000,
        aiAnalytics: 'Machine Learning',
        userBehavior: 'UEBA Analytics',
        threatIntelligence: 'Microsoft Graph',
        incidentManagement: 'Automated',
        soarCapabilities: 'Logic Apps',
        complianceReporting: 'Built-in',
        costOptimization: 'Pay-as-you-go',
        integration: 'Microsoft 365',
        hunting: 'KQL Queries',
        visualization: 'Azure Workbooks',
        alertFidelity: 98.5,
        meanTimeToDetect: 3.7
      },
      {
        platformName: 'Palo Alto Cortex XDR',
        platformId: 'PALO-ALTO-CORTEX-003',
        location: 'Multi-Cloud Deployment',
        platformType: 'EXTENDED DETECTION & RESPONSE',
        status: 'OPERATIONAL',
        dataCollection: 15000000000,
        endpoints: 8500000,
        networks: 125000,
        cloudWorkloads: 2500000,
        detectionTechniques: 850,
        machineLearning: 'Behavioral AI',
        threatIntel: 'Unit 42',
        automation: 'Playbooks',
        investigation: 'Root Cause Analysis',
        response: 'Automated Remediation',
        integration: 'SOAR Platforms',
        compliance: 'GDPR, HIPAA',
        deployment: 'Cloud & On-Premise',
        apiConnections: 450,
        customDetections: 1200,
        alertCorrelation: 97.3,
        incidentPrioritization: 'Risk-based',
        falsePositiveReduction: 89.6
      },
      {
        platformName: 'IBM QRadar SIEM',
        platformId: 'IBM-QRADAR-004',
        location: 'Hybrid Cloud Infrastructure',
        platformType: 'SECURITY INTELLIGENCE PLATFORM',
        status: 'OPERATIONAL',
        eventsPerSecond: 1500000,
        flows: 2500000,
        logSources: 450,
        vulnerabilities: 125000,
        riskScoring: 'Advanced Analytics',
        correlationRules: 3500,
        offenses: 'Prioritized',
        dashboards: 150,
        reports: 250,
        apps: 125,
        userBehavior: 'UBA Module',
        riskManager: 'Integrated',
        incident: 'Forensics',
        threatIntelligence: 'X-Force',
        compliance: 'PCI DSS, SOX',
        deployment: 'Physical & Virtual',
        highAvailability: '99.99%',
        scalability: 'Horizontal',
        performance: 'Optimized'
      }
    ],
    threatIntelligence: [
      {
        threatType: 'Advanced Persistent Threats (APT)',
        threatId: 'APT-GROUPS-001',
        activeGroups: 450,
        campaigns: 2500,
        targetIndustries: 'Government, Financial, Healthcare',
        commonTactics: 'Spear Phishing, Zero-day Exploits',
        attribution: 'Nation-state Actors',
        geographicOrigin: 'China, Russia, North Korea, Iran',
        sophisticationLevel: 'Advanced',
        persistenceMethods: 'Living off the Land',
        lateralMovement: 'Credential Dumping',
        dataExfiltration: 'Encrypted Channels',
        detectionDifficulty: 'High',
        averageDwellTime: '207 days',
        costPerBreach: '$4.45M',
        preventionStrategies: 'Zero Trust, EDR',
        indicatorsOfCompromise: 'Behavioral',
        mitreTechniques: 'T1566, T1059, T1055',
        defensiveTools: 'SIEM, UEBA, NDR'
      },
      {
        threatType: 'Ransomware',
        threatId: 'RANSOMWARE-001',
        activeFamilies: 125,
        variants: 2500,
        targetIndustries: 'Healthcare, Education, Manufacturing',
        attackVectors: 'Phishing, RDP, Supply Chain',
        encryption: 'AES-256, RSA-2048',
        paymentMethod: 'Cryptocurrency',
        averageRansom: '$4.62M',
        paymentRate: '32%',
        recoveryTime: '287 hours',
        dataTheft: 'Double Extortion',
        leakSites: 'Dark Web',
        serviceDisruption: '21 days average',
        preventionTools: 'Backup, EDR, Email Security',
        detectionSigns: 'File Encryption Activity',
        responsePlaybook: 'Incident Response',
        recoveryCost: '$1.85M average'
      },
      {
        threatType: 'Supply Chain Attacks',
        threatId: 'SUPPLY-CHAIN-001',
        majorIncidents: 125,
        affectedOrganizations: 18000000,
        attackVectors: 'Software Updates, Hardware',
        targetedSoftware: 'SolarWinds, Kaseya, Log4j',
        impactRadius: 'Downstream Customers',
        detectionTime: '416 days average',
        attributedActors: 'APT29, APT40',
        preventionMethods: 'Software Bill of Materials',
        riskAssessment: 'Vendor Security',
        monitoringTools: 'Code Signing, SBOM',
        responseStrategy: 'Coordinated Disclosure',
        regulatoryImpact: 'Executive Orders',
        industryCollaboration: 'Information Sharing',
        technicalMitigation: 'Zero Trust Architecture',
        costImpact: '$11.1M average'
      }
    ],
    vulnerabilityManagement: [
      {
        category: 'Critical Vulnerabilities',
        categoryId: 'CRITICAL-VULNS-001',
        totalVulnerabilities: 28450,
        newVulnerabilities: 125,
        patchedVulnerabilities: 26890,
        unpatchedVulnerabilities: 1560,
        averagePatchTime: 15.7,
        criticityScore: 9.0,
        exploitability: 'High',
        publicExploits: 450,
        zeroDay: 25,
        affectedSystems: 'Windows, Linux, IoT',
        commonTypes: 'Remote Code Execution',
        industryImpact: 'Critical Infrastructure',
        complianceRequirement: '72 hours',
        automatedPatching: 67.8,
        riskPrioritization: 'CVSS 3.1',
        threatContext: 'Active Exploitation',
        businessImpact: 'High',
        remediationComplexity: 'Medium'
      },
      {
        category: 'Web Application Security',
        categoryId: 'WEBAPP-SEC-002',
        scannedApplications: 125000,
        vulnerabilities: 2500000,
        criticalFindings: 125000,
        owaspTop10: 'SQL Injection, XSS',
        apiVulnerabilities: 450000,
        authenticationFlaws: 89000,
        authorizationIssues: 156000,
        inputValidation: 67000,
        secureCodeReview: 78.9,
        penetrationTesting: 'Quarterly',
        webApplicationFirewall: 89.5,
        runtimeProtection: 'RASP',
        securityHeaders: 82.4,
        encryptionInTransit: 96.7,
        sessionManagement: 91.3,
        errorHandling: 87.2,
        complianceStatus: 'OWASP ASVS'
      },
      {
        category: 'Cloud Security Posture',
        categoryId: 'CLOUD-SEC-003',
        cloudAccounts: 125000,
        misconfigurations: 2100000,
        exposedResources: 450000,
        identityRisks: 780000,
        networkRisks: 340000,
        dataRisks: 560000,
        complianceFrameworks: 'CIS, NIST, SOC 2',
        multiCloudVisibility: 'AWS, Azure, GCP',
        infrastructureAsCode: 67.8,
        containerSecurity: 78.9,
        serverlessRisks: 125000,
        privilegedAccess: 89.4,
        encryptionStatus: 94.2,
        backupCompliance: 87.6,
        incidentResponse: 91.8,
        continuousMonitoring: 'Real-time',
        automatedRemediation: 76.5
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        threatsDetected: 2500000,
        attacksBlocked: 1890000,
        incidentsInvestigated: 450,
        vulnerabilitiesPatched: 125,
        falsePositives: 125,
        responseTime: 2.3,
        alerts: 45000,
        escalations: 234
      },
      {
        period: 'Last 24 Hours',
        threatsDetected: 58900000,
        attacksBlocked: 45600000,
        incidentsInvestigated: 8900,
        vulnerabilitiesPatched: 2890,
        falsePositives: 2340,
        responseTime: 2.7,
        alerts: 1890000,
        escalations: 5670
      },
      {
        period: 'Last 7 Days',
        threatsDetected: 412000000,
        attacksBlocked: 318000000,
        incidentsInvestigated: 56800,
        vulnerabilitiesPatched: 18900,
        falsePositives: 15600,
        responseTime: 3.1,
        alerts: 12500000,
        escalations: 34500
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCybersecurityData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        cybersecurityOverview: {
          ...prev.cybersecurityOverview,
          threatDetectionRate: Math.max(98.0, Math.min(99.9, prev.cybersecurityOverview.threatDetectionRate + (Math.random() - 0.5) * 0.1)),
          responseTime: Math.max(1.0, Math.min(5.0, prev.cybersecurityOverview.responseTime + (Math.random() - 0.5) * 0.2))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
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
  const formatTime = (hours) => `${hours.toFixed(1)}h`;
  const formatCurrency = (amount) => `$${amount}M`;

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Cybersecurity Technology & Threat Intelligence Center</h1>
              <p className="text-slate-300">Cybersecurity & threat analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-slate-400">{cybersecurityData.currentTime}</div>
            <div className="text-slate-300">Security Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Cybersecurity Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-red-400 mr-2" />
                Platforms
              </h3>
            </div>
            <div className="text-3xl font-bold text-red-400">{formatNumber(cybersecurityData.cybersecurityOverview.securityPlatforms)}</div>
            <div className="text-red-300 text-sm">{formatNumber(cybersecurityData.cybersecurityOverview.securityTools)} Tools</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Monitor className="w-5 h-5 text-blue-400 mr-2" />
                Endpoints
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(cybersecurityData.cybersecurityOverview.protectedEndpoints)}</div>
            <div className="text-blue-300 text-sm">Protected</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Detection
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(cybersecurityData.cybersecurityOverview.threatDetectionRate)}</div>
            <div className="text-green-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Response
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatTime(cybersecurityData.cybersecurityOverview.responseTime)}</div>
            <div className="text-yellow-300 text-sm">Time</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 text-orange-400 mr-2" />
                Threats
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(cybersecurityData.cybersecurityOverview.threatsBlocked)}</div>
            <div className="text-orange-300 text-sm">Blocked</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Lock className="w-5 h-5 text-purple-400 mr-2" />
                Compliance
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(cybersecurityData.cybersecurityOverview.complianceScore)}</div>
            <div className="text-purple-300 text-sm">Score</div>
          </div>
        </div>

        {/* Security Platforms & Threat Intelligence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              Security Platforms
            </h3>
            <div className="space-y-4">
              {cybersecurityData.securityPlatforms.map((platform, index) => (
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
                    <div className="text-cyan-400">{platform.location}</div>
                    <div className="text-blue-400">{platform.platformType}</div>
                    <div className="text-green-400">{platform.platformId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">
                      {platform.endpointsProtected && `Endpoints: ${formatNumber(platform.endpointsProtected)}`}
                      {platform.dataIngestion && `Data: ${formatNumber(platform.dataIngestion)}/day`}
                      {platform.endpoints && `Protected: ${formatNumber(platform.endpoints)}`}
                      {platform.eventsPerSecond && `Events: ${formatNumber(platform.eventsPerSecond)}/sec`}
                    </div>
                    <div className="text-purple-400">
                      {platform.threatsBlocked && `Blocked: ${formatNumber(platform.threatsBlocked)}`}
                      {platform.securityEvents && `Events: ${formatNumber(platform.securityEvents)}`}
                      {platform.networks && `Networks: ${formatNumber(platform.networks)}`}
                      {platform.flows && `Flows: ${formatNumber(platform.flows)}`}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Detection Rate</span>
                      <span>
                        {platform.detectionRate && formatPercentage(platform.detectionRate)}
                        {platform.alertFidelity && formatPercentage(platform.alertFidelity)}
                        {platform.alertCorrelation && formatPercentage(platform.alertCorrelation)}
                      </span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-red-400 h-1 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${
                            platform.detectionRate || 
                            platform.alertFidelity || 
                            platform.alertCorrelation || 
                            95
                          }%` 
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {platform.responseTime && `Response: ${formatTime(platform.responseTime)}`}
                      {platform.meanTimeToDetect && `MTTD: ${formatTime(platform.meanTimeToDetect)}`}
                      {platform.falsePositives && `FP Rate: ${formatPercentage(platform.falsePositives)}`}
                    </div>
                    <div className="text-indigo-400">
                      {platform.aiModels && `AI Models: ${platform.aiModels}`}
                      {platform.aiAnalytics && `Analytics: ${platform.aiAnalytics}`}
                      {platform.machineLearning && `ML: ${platform.machineLearning}`}
                    </div>
                    <div className="text-cyan-400">
                      {platform.threatIntelligence && `Intel: ${platform.threatIntelligence}`}
                      {platform.threatHunting && `Hunting: ${platform.threatHunting}`}
                      {platform.userBehavior && `UBA: ${platform.userBehavior}`}
                    </div>
                    <div className="text-green-400">
                      {platform.compliance && `Compliance: ${platform.compliance}`}
                      {platform.customerSatisfaction && `Satisfaction: ${formatPercentage(platform.customerSatisfaction)}`}
                      {platform.highAvailability && `HA: ${platform.highAvailability}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-orange-400 mr-2" />
              Threat Intelligence
            </h3>
            <div className="space-y-4">
              {cybersecurityData.threatIntelligence.map((threat, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{threat.threatType}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">
                      {threat.activeGroups && `Groups: ${threat.activeGroups}`}
                      {threat.activeFamilies && `Families: ${threat.activeFamilies}`}
                      {threat.majorIncidents && `Incidents: ${threat.majorIncidents}`}
                    </div>
                    <div className="text-blue-400">
                      {threat.campaigns && `Campaigns: ${formatNumber(threat.campaigns)}`}
                      {threat.variants && `Variants: ${formatNumber(threat.variants)}`}
                      {threat.affectedOrganizations && `Affected: ${formatNumber(threat.affectedOrganizations)}`}
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      Targets: {threat.targetIndustries}
                    </div>
                    <div className="text-indigo-400">
                      Tactics: {threat.commonTactics || threat.attackVectors}
                    </div>
                    <div className="text-cyan-400">
                      {threat.attribution && `Attribution: ${threat.attribution}`}
                      {threat.encryption && `Encryption: ${threat.encryption}`}
                      {threat.targetedSoftware && `Software: ${threat.targetedSoftware}`}
                    </div>
                    <div className="text-green-400">
                      {threat.averageDwellTime && `Dwell Time: ${threat.averageDwellTime}`}
                      {threat.averageRansom && `Avg Ransom: ${threat.averageRansom}`}
                      {threat.detectionTime && `Detection: ${threat.detectionTime}`}
                    </div>
                    <div className="text-blue-400">
                      {threat.costPerBreach && `Cost: ${threat.costPerBreach}`}
                      {threat.recoveryTime && `Recovery: ${threat.recoveryTime}`}
                      {threat.costImpact && `Impact: ${threat.costImpact}`}
                    </div>
                    <div className="text-orange-400">
                      Prevention: {threat.preventionStrategies || threat.preventionTools || threat.preventionMethods}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vulnerability Management */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Vulnerability Management
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cybersecurityData.vulnerabilityManagement.map((vuln, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{vuln.category}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">
                    {vuln.totalVulnerabilities && `Total: ${formatNumber(vuln.totalVulnerabilities)}`}
                    {vuln.scannedApplications && `Scanned: ${formatNumber(vuln.scannedApplications)}`}
                    {vuln.cloudAccounts && `Accounts: ${formatNumber(vuln.cloudAccounts)}`}
                  </div>
                  <div className="text-blue-400">
                    {vuln.newVulnerabilities && `New: ${vuln.newVulnerabilities}`}
                    {vuln.vulnerabilities && `Found: ${formatNumber(vuln.vulnerabilities)}`}
                    {vuln.misconfigurations && `Misconfig: ${formatNumber(vuln.misconfigurations)}`}
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Remediation Progress</span>
                    <span>
                      {vuln.automatedPatching && formatPercentage(vuln.automatedPatching)}
                      {vuln.secureCodeReview && formatPercentage(vuln.secureCodeReview)}
                      {vuln.infrastructureAsCode && formatPercentage(vuln.infrastructureAsCode)}
                    </span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-1">
                    <div 
                      className="bg-yellow-400 h-1 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${
                          vuln.automatedPatching || 
                          vuln.secureCodeReview ||
                          vuln.infrastructureAsCode ||
                          75
                        }%` 
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-slate-300">
                    {vuln.patchedVulnerabilities && `Patched: ${formatNumber(vuln.patchedVulnerabilities)}`}
                    {vuln.criticalFindings && `Critical: ${formatNumber(vuln.criticalFindings)}`}
                    {vuln.exposedResources && `Exposed: ${formatNumber(vuln.exposedResources)}`}
                  </div>
                  <div className="text-indigo-400">
                    {vuln.averagePatchTime && `Patch Time: ${formatTime(vuln.averagePatchTime * 24)}`}
                    {vuln.owaspTop10 && `OWASP: ${vuln.owaspTop10}`}
                    {vuln.complianceFrameworks && `Frameworks: ${vuln.complianceFrameworks}`}
                  </div>
                  <div className="text-cyan-400">
                    {vuln.exploitability && `Exploitability: ${vuln.exploitability}`}
                    {vuln.apiVulnerabilities && `API Issues: ${formatNumber(vuln.apiVulnerabilities)}`}
                    {vuln.identityRisks && `Identity: ${formatNumber(vuln.identityRisks)}`}
                  </div>
                  <div className="text-green-400">
                    {vuln.riskPrioritization && `Prioritization: ${vuln.riskPrioritization}`}
                    {vuln.penetrationTesting && `Pen Testing: ${vuln.penetrationTesting}`}
                    {vuln.continuousMonitoring && `Monitoring: ${vuln.continuousMonitoring}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-slate-400 mr-2" />
            Cybersecurity Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cybersecurityData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Detected: {formatNumber(metrics.threatsDetected)}</div>
                  <div className="text-green-400">Blocked: {formatNumber(metrics.attacksBlocked)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Investigated: {formatNumber(metrics.incidentsInvestigated)}</div>
                  <div className="text-yellow-400">Patched: {formatNumber(metrics.vulnerabilitiesPatched)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Response: {formatTime(metrics.responseTime)}</div>
                  <div className="text-orange-400">False Pos: {formatNumber(metrics.falsePositives)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Alerts: {formatNumber(metrics.alerts)}</div>
                  <div className="text-pink-400">Escalations: {formatNumber(metrics.escalations)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}