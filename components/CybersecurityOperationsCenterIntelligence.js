// Cybersecurity Operations Center Intelligence - Advanced SOC Operations, Threat Intelligence & Security Monitoring
import { useState, useEffect } from 'react';
import { Shield, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Eye, Activity, Zap } from 'lucide-react';

export default function CybersecurityOperationsCenterIntelligence() {
  const [socData, setSocData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    globalThreatLandscape: {
      globalCyberattacks: 4200000000, // annually
      dailyThreatDetections: 5678901,
      activeThreatActors: 234567,
      malwareSamples: 890123456,
      phishingAttempts: 1234567890,
      ransomwareAttacks: 2345678, // annually
      dataBreaches: 456789, // annually
      zerodayExploits: 23456,
      globalSecuritySpending: 189012345678, // EUR annually
      securityWorkforce: 4567890,
      skillsGap: 3456789, // unfilled positions
      averageBreachCost: 4567890, // EUR
      timeToDetection: 207, // days average
      timeToContainment: 73 // days average
    },
    majorSecurityVendors: [
      {
        vendor: 'CrowdStrike',
        category: 'Endpoint Protection',
        marketShare: 18.7, // percentage
        annualRevenue: 2890123456, // EUR
        customersProtected: 234567890, // endpoints
        threatsBlocked: 890123456789, // annually
        detectionAccuracy: 99.2, // percentage
        falsePositiveRate: 0.02, // percentage
        responseTime: 1.8, // minutes average
        services: ['Falcon Platform', 'Threat Hunting', 'Incident Response', 'Threat Intelligence', 'Cloud Security'],
        aiModels: 450,
        machineLearnig: 96.8, // AI/ML adoption
        customerSatisfaction: 92.4,
        marketGrowth: 34.5
      },
      {
        vendor: 'Palo Alto Networks',
        category: 'Network Security',
        marketShare: 16.3,
        annualRevenue: 6789012345,
        customersProtected: 567890123,
        threatsBlocked: 1234567890123,
        detectionAccuracy: 98.7,
        falsePositiveRate: 0.03,
        responseTime: 2.1,
        services: ['Prisma Cloud', 'Cortex XSOAR', 'WildFire', 'Threat Intelligence', 'Zero Trust'],
        aiModels: 380,
        machineLearnig: 94.2,
        customerSatisfaction: 89.7,
        marketGrowth: 28.9
      },
      {
        vendor: 'Microsoft Security',
        category: 'Cloud Security',
        marketShare: 14.8,
        annualRevenue: 5678901234,
        customersProtected: 890123456,
        threatsBlocked: 2345678901234,
        detectionAccuracy: 98.9,
        falsePositiveRate: 0.025,
        responseTime: 1.9,
        services: ['Defender Suite', 'Sentinel SIEM', 'Entra ID', 'Purview', 'Intune'],
        aiModels: 520,
        machineLearnig: 97.3,
        customerSatisfaction: 91.8,
        marketGrowth: 41.2
      },
      {
        vendor: 'Splunk',
        category: 'SIEM Platform',
        marketShare: 12.4,
        annualRevenue: 3456789012,
        customersProtected: 123456789,
        threatsBlocked: 567890123456,
        detectionAccuracy: 97.8,
        falsePositiveRate: 0.04,
        responseTime: 2.8,
        services: ['Enterprise Security', 'SOAR', 'User Behavior Analytics', 'Threat Intelligence', 'Cloud SIEM'],
        aiModels: 280,
        machineLearnig: 91.5,
        customerSatisfaction: 87.3,
        marketGrowth: 19.7
      }
    ],
    threatIntelligence: [
      {
        threatType: 'Advanced Persistent Threats (APTs)',
        activeGroups: 1234,
        attacksDetected: 45678901, // annually
        targetSectors: ['Government', 'Finance', 'Healthcare', 'Critical Infrastructure'],
        averageDwellTime: 287, // days
        detectionRate: 23.4, // percentage
        successRate: 67.8, // percentage of successful attacks
        geopoliticalMotivation: 78.9, // percentage
        sophisticationLevel: 9.2, // out of 10
        budgetEstimate: 12345678901, // EUR globally
        countermeasures: 89.4, // effectiveness percentage
        attribution: 34.5 // confidence percentage
      },
      {
        threatType: 'Ransomware Operations',
        activeGroups: 567,
        attacksDetected: 23456789,
        targetSectors: ['Healthcare', 'Education', 'Manufacturing', 'Municipal Services'],
        averageDwellTime: 18, // days
        detectionRate: 67.8,
        successRate: 23.4,
        geopoliticalMotivation: 12.3,
        sophisticationLevel: 7.8,
        budgetEstimate: 5678901234,
        countermeasures: 72.4,
        attribution: 56.7
      },
      {
        threatType: 'Cybercriminal Networks',
        activeGroups: 8901,
        attacksDetected: 234567890,
        targetSectors: ['Retail', 'Banking', 'E-commerce', 'Cryptocurrency'],
        averageDwellTime: 45,
        detectionRate: 78.9,
        successRate: 34.5,
        geopoliticalMotivation: 5.6,
        sophisticationLevel: 6.4,
        budgetEstimate: 8901234567,
        countermeasures: 67.8,
        attribution: 23.4
      },
      {
        threatType: 'Insider Threats',
        activeIncidents: 567890,
        attacksDetected: 1234567,
        targetSectors: ['All Sectors'],
        averageDwellTime: 365, // days
        detectionRate: 34.5,
        successRate: 78.9,
        geopoliticalMotivation: 1.2,
        sophisticationLevel: 4.5,
        budgetEstimate: 234567890,
        countermeasures: 45.6,
        attribution: 89.4
      }
    ],
    socOperations: {
      incidentResponse: {
        totalIncidents: 2345678, // annually
        criticalIncidents: 234567,
        averageResponseTime: 22.4, // minutes
        averageResolutionTime: 4.7, // hours
        escalationRate: 23.4, // percentage
        automatedResponse: 67.8, // percentage
        humanAnalystTime: 34.5, // percentage
        incidentRecurrence: 5.6, // percentage
        customerImpact: 12.3, // percentage high impact
        falsePositives: 8.9, // percentage
        effectivenessScore: 89.4,
        clientSatisfaction: 87.9
      },
      threatHunting: {
        huntingCampaigns: 12345, // annually
        proactiveDetections: 567890,
        campaignSuccessRate: 78.9, // percentage
        averageCampaignDuration: 7.3, // days
        threatDiscoveryRate: 23.4, // percentage
        falsePositiveReduction: 45.6, // percentage
        analystProductivity: 67.8, // percentage improvement
        advancedThreatDetection: 89.4, // percentage
        automatedHunting: 56.7, // percentage
        manualAnalysis: 43.3, // percentage
        huntingEffectiveness: 91.2,
        threatsNeutralized: 234567
      },
      vulnerabilityManagement: {
        vulnerabilitiesIdentified: 8901234, // annually
        criticalVulnerabilities: 567890,
        averagePatchTime: 15.6, // days
        patchingEffectiveness: 89.4, // percentage
        zeroDateDetection: 23.4, // hours average
        riskAssessmentAccuracy: 91.2, // percentage
        automatedScanning: 78.9, // percentage
        manualVerification: 21.1, // percentage
        complianceRate: 94.6, // percentage
        businessRiskReduction: 67.8, // percentage
        vulnerabilityRecurrence: 4.5, // percentage
        securityPosture: 87.9
      },
      threatIntelligence: {
        intelligenceFeeds: 234,
        dailyIndicators: 5678901,
        threatReports: 12345, // monthly
        iocMatches: 890123, // daily
        attributionAccuracy: 67.8, // percentage
        predictiveAnalytics: 78.9, // accuracy percentage
        automatedEnrichment: 89.4, // percentage
        humanAnalysis: 23.4, // percentage
        actionableIntelligence: 67.8, // percentage
        intelligenceSharing: 45.6, // percentage
        threatPrediction: 56.7, // accuracy percentage
        strategicInsights: 34.5
      }
    },
    securityAutomation: {
      soarPlatforms: 567,
      automatedPlaybooks: 12345,
      automationCoverage: 78.9, // percentage of processes
      responseTimeSavings: 89.4, // percentage improvement
      analystEfficiency: 156.7, // percentage improvement
      falsePositiveReduction: 67.8, // percentage
      orchestrationAccuracy: 94.6, // percentage
      integrationDepth: 45.6, // percentage of tools
      aiDecisionMaking: 34.5, // percentage automated
      humanOversight: 65.5, // percentage requiring approval
      workflowOptimization: 87.9, // percentage
      costSavings: 23.4 // percentage
    },
    complianceFrameworks: {
      iso27001: {
        organizationsCompliant: 234567,
        complianceRate: 78.9, // percentage
        averageImplementationTime: 18.6, // months
        annualAuditCost: 45678, // EUR average
        nonCompliancePenalties: 234567890, // EUR annually global
        certificationValue: 23.4, // percentage business value
        maintenanceEffort: 34.5, // hours monthly
        riskReduction: 67.8, // percentage
        customerTrust: 89.4, // percentage improvement
        competitiveAdvantage: 56.7,
        operationalEfficiency: 45.6,
        securityPosture: 91.2
      },
      gdpr: {
        organizationsCompliant: 567890,
        complianceRate: 67.8,
        averageImplementationTime: 24.3,
        annualAuditCost: 67890,
        nonCompliancePenalties: 1234567890,
        certificationValue: 34.5,
        maintenanceEffort: 67.8,
        riskReduction: 78.9,
        customerTrust: 94.6,
        competitiveAdvantage: 67.8,
        operationalEfficiency: 56.7,
        securityPosture: 89.4
      },
      sox: {
        organizationsCompliant: 123456,
        complianceRate: 89.4,
        averageImplementationTime: 12.8,
        annualAuditCost: 123456,
        nonCompliancePenalties: 567890123,
        certificationValue: 45.6,
        maintenanceEffort: 23.4,
        riskReduction: 91.2,
        customerTrust: 78.9,
        competitiveAdvantage: 45.6,
        operationalEfficiency: 67.8,
        securityPosture: 94.6
      },
      nist: {
        organizationsCompliant: 345678,
        complianceRate: 72.4,
        averageImplementationTime: 15.7,
        annualAuditCost: 78901,
        nonCompliancePenalties: 890123456,
        certificationValue: 56.7,
        maintenanceEffort: 45.6,
        riskReduction: 87.9,
        customerTrust: 89.4,
        competitiveAdvantage: 67.8,
        operationalEfficiency: 78.9,
        securityPosture: 91.2
      }
    },
    emergingThreats: {
      aiPoweredAttacks: {
        detectionIncidents: 234567,
        sophisticationGrowth: 145.6, // percentage annually
        automationLevel: 78.9, // percentage
        defenseEffectiveness: 56.7, // percentage
        investmentRequired: 2345678901, // EUR globally
        skillsGapImpact: 89.4
      },
      quantumThreats: {
        detectionIncidents: 123,
        sophisticationGrowth: 234.5,
        automationLevel: 12.3,
        defenseEffectiveness: 23.4,
        investmentRequired: 12345678901,
        skillsGapImpact: 94.6
      },
      cloudNativeAttacks: {
        detectionIncidents: 567890,
        sophisticationGrowth: 89.4,
        automationLevel: 67.8,
        defenseEffectiveness: 72.4,
        investmentRequired: 5678901234,
        skillsGapImpact: 67.8
      },
      iotBotnetAttacks: {
        detectionIncidents: 1234567,
        sophisticationGrowth: 67.8,
        automationLevel: 89.4,
        defenseEffectiveness: 45.6,
        investmentRequired: 3456789012,
        skillsGapImpact: 78.9
      }
    },
    socAlerts: [
      {
        type: 'CRITICAL',
        category: 'APT Campaign',
        message: 'Advanced persistent threat targeting financial institutions - novel zero-day exploit detected',
        location: 'Global Banking Sector',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '08:30',
        recommendations: ['Emergency patching', 'Network segmentation', 'Threat hunting', 'Customer notification'],
        severity: 10,
        affectedAssets: 245678,
        estimatedCost: 89012345
      },
      {
        type: 'WARNING',
        category: 'Ransomware',
        message: 'Ransomware campaign surge detected - 340% increase in healthcare targeting',
        location: 'Healthcare Sector',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '08:27',
        recommendations: ['Backup verification', 'Access controls review', 'Staff training', 'Incident response prep'],
        severity: 7,
        affectedAssets: 67890,
        estimatedCost: 12345678
      },
      {
        type: 'SUCCESS',
        category: 'Threat Hunting',
        message: 'Proactive threat hunting campaign neutralized 23 advanced threats before impact',
        location: 'Enterprise Networks',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '08:24',
        recommendations: ['Campaign expansion', 'Methodology documentation', 'Team training', 'Tool optimization'],
        severity: 0,
        affectedAssets: 0,
        estimatedCost: -5678901 // cost avoided
      },
      {
        type: 'INFO',
        category: 'Intelligence',
        message: 'New threat actor group identified - focus on supply chain attacks',
        location: 'Global Intelligence Network',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '08:21',
        recommendations: ['Intel briefing', 'IOC distribution', 'Detection rules update', 'Partner notification'],
        severity: 5,
        affectedAssets: 123456,
        estimatedCost: 2345678
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSocData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        globalThreatLandscape: {
          ...prev.globalThreatLandscape,
          dailyThreatDetections: Math.max(5000000, Math.min(6000000, prev.globalThreatLandscape.dailyThreatDetections + Math.floor((Math.random() - 0.5) * 100000))),
          timeToDetection: Math.max(180, Math.min(240, prev.globalThreatLandscape.timeToDetection + Math.floor((Math.random() - 0.5) * 10)))
        },
        socOperations: {
          ...prev.socOperations,
          incidentResponse: {
            ...prev.socOperations.incidentResponse,
            averageResponseTime: Math.max(15, Math.min(35, prev.socOperations.incidentResponse.averageResponseTime + (Math.random() - 0.5) * 3)),
            effectivenessScore: Math.max(85, Math.min(95, prev.socOperations.incidentResponse.effectivenessScore + (Math.random() - 0.5) * 2))
          }
        }
      }));
    }, 9000);

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

  const getSeverityColor = (severity) => {
    if (severity >= 9) return 'text-red-400';
    if (severity >= 7) return 'text-orange-400';
    if (severity >= 5) return 'text-yellow-400';
    if (severity >= 3) return 'text-blue-400';
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
      case 'Endpoint Protection': return 'text-orange-400 bg-orange-400/20';
      case 'Network Security': return 'text-blue-400 bg-blue-400/20';
      case 'Cloud Security': return 'text-cyan-400 bg-cyan-400/20';
      case 'SIEM Platform': return 'text-purple-400 bg-purple-400/20';
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
    <div className="h-full bg-gradient-to-br from-red-900 via-slate-900 to-orange-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-red-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Cybersecurity Operations Center Intelligence</h1>
              <p className="text-red-300">Advanced SOC operations, threat intelligence & security monitoring</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-red-400">{socData.currentTime}</div>
            <div className="text-red-300">SOC Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Global Threat Landscape */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                Global Attacks
              </h3>
            </div>
            <div className="text-3xl font-bold text-red-400">{formatNumber(socData.globalThreatLandscape.globalCyberattacks)}</div>
            <div className="text-red-300 text-sm">Annually</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-orange-400 mr-2" />
                Daily Detections
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(socData.globalThreatLandscape.dailyThreatDetections)}</div>
            <div className="text-orange-300 text-sm">Threats/Day</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-yellow-400 mr-2" />
                Threat Actors
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(socData.globalThreatLandscape.activeThreatActors)}</div>
            <div className="text-yellow-300 text-sm">Active Groups</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                Security Spending
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(socData.globalThreatLandscape.globalSecuritySpending)}</div>
            <div className="text-green-300 text-sm">Global Annual</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-blue-400 mr-2" />
                Detection Time
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{socData.globalThreatLandscape.timeToDetection}</div>
            <div className="text-blue-300 text-sm">Days Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-purple-400 mr-2" />
                Skills Gap
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(socData.globalThreatLandscape.skillsGap)}</div>
            <div className="text-purple-300 text-sm">Unfilled Positions</div>
          </div>
        </div>

        {/* Major Security Vendors */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 text-red-400 mr-2" />
            Major Security Vendors Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Vendor</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Market Share</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Detection Rate</th>
                  <th className="text-center p-3 text-slate-300">Response Time</th>
                  <th className="text-center p-3 text-slate-300">Growth</th>
                </tr>
              </thead>
              <tbody>
                {socData.majorSecurityVendors.map((vendor, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{vendor.vendor}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(vendor.customersProtected)} protected • {vendor.aiModels} AI models • {formatPercentage(vendor.machineLearnig)} ML</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(vendor.category)}`}>
                        {vendor.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-red-400">{formatPercentage(vendor.marketShare)}</td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(vendor.annualRevenue)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(vendor.detectionAccuracy, 95, 99)}`}>
                      {formatPercentage(vendor.detectionAccuracy)}
                    </td>
                    <td className="p-3 text-center text-blue-400">{vendor.responseTime.toFixed(1)}min</td>
                    <td className="p-3 text-center text-orange-400">{formatPercentage(vendor.marketGrowth)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Threat Intelligence & SOC Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-orange-400 mr-2" />
              Threat Intelligence Analysis
            </h3>
            <div className="space-y-4">
              {socData.threatIntelligence.map((threat, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{threat.threatType}</span>
                      <span className={`text-sm ${getSeverityColor(threat.sophisticationLevel)}`}>
                        {threat.sophisticationLevel.toFixed(1)}/10
                      </span>
                    </div>
                    <span className="text-red-400 text-sm">{formatNumber(threat.activeGroups)} groups</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Attacks: {formatNumber(threat.attacksDetected)}/year</div>
                      <div className="text-purple-400">Dwell Time: {threat.averageDwellTime} days</div>
                      <div className="text-cyan-400">Detection: {formatPercentage(threat.detectionRate)}</div>
                    </div>
                    <div>
                      <div className="text-red-400">Success: {formatPercentage(threat.successRate)}</div>
                      <div className="text-yellow-400">Attribution: {formatPercentage(threat.attribution)}</div>
                      <div className="text-green-400">Countermeasures: {formatPercentage(threat.countermeasures)}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {threat.targetSectors.map((sector, sIndex) => (
                      <span key={sIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-green-400 mr-2" />
              SOC Operations Intelligence
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3 flex items-center">
                  <Shield className="w-4 h-4 text-red-400 mr-2" />
                  Incident Response
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Total Incidents</span>
                    <span className="text-red-400">{formatNumber(socData.socOperations.incidentResponse.totalIncidents)}/year</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Response Time</span>
                    <span className="text-blue-400">{socData.socOperations.incidentResponse.averageResponseTime.toFixed(1)}min</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Resolution Time</span>
                    <span className="text-purple-400">{socData.socOperations.incidentResponse.averageResolutionTime.toFixed(1)}h</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Automation</span>
                    <span className="text-green-400">{formatPercentage(socData.socOperations.incidentResponse.automatedResponse)}</span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-lg font-bold text-green-400">{formatPercentage(socData.socOperations.incidentResponse.effectivenessScore)}</div>
                  <div className="text-slate-300 text-xs">Effectiveness Score</div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3 flex items-center">
                  <Eye className="w-4 h-4 text-orange-400 mr-2" />
                  Threat Hunting
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Campaigns</span>
                    <span className="text-orange-400">{formatNumber(socData.socOperations.threatHunting.huntingCampaigns)}/year</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Success Rate</span>
                    <span className="text-green-400">{formatPercentage(socData.socOperations.threatHunting.campaignSuccessRate)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Automated</span>
                    <span className="text-cyan-400">{formatPercentage(socData.socOperations.threatHunting.automatedHunting)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Neutralized</span>
                    <span className="text-red-400">{formatNumber(socData.socOperations.threatHunting.threatsNeutralized)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  Vulnerability Management
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Identified</span>
                    <span className="text-blue-400">{formatNumber(socData.socOperations.vulnerabilityManagement.vulnerabilitiesIdentified)}/year</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Patch Time</span>
                    <span className="text-yellow-400">{socData.socOperations.vulnerabilityManagement.averagePatchTime.toFixed(1)} days</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Effectiveness</span>
                    <span className="text-green-400">{formatPercentage(socData.socOperations.vulnerabilityManagement.patchingEffectiveness)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Compliance</span>
                    <span className="text-purple-400">{formatPercentage(socData.socOperations.vulnerabilityManagement.complianceRate)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Automation & Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-cyan-400 mr-2" />
              Security Automation Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(socData.securityAutomation.automationCoverage)}</div>
                <div className="text-cyan-300 text-sm">Process Coverage</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(socData.securityAutomation.automatedPlaybooks)} playbooks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(socData.securityAutomation.analystEfficiency)}</div>
                <div className="text-green-300 text-sm">Efficiency Gain</div>
                <div className="text-gray-400 text-xs mt-1">analyst productivity</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Automation Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Response Time Savings</span>
                  <span className="text-green-400">{formatPercentage(socData.securityAutomation.responseTimeSavings)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">False Positive Reduction</span>
                  <span className="text-blue-400">{formatPercentage(socData.securityAutomation.falsePositiveReduction)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Orchestration Accuracy</span>
                  <span className="text-purple-400">{formatPercentage(socData.securityAutomation.orchestrationAccuracy)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AI Decision Making</span>
                  <span className="text-orange-400">{formatPercentage(socData.securityAutomation.aiDecisionMaking)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Workflow Optimization</span>
                  <span className="text-cyan-400">{formatPercentage(socData.securityAutomation.workflowOptimization)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cost Savings</span>
                  <span className="text-green-400">{formatPercentage(socData.securityAutomation.costSavings)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
              Compliance Frameworks Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(socData.complianceFrameworks).map(([framework, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-white text-sm font-medium uppercase">{framework}</span>
                      <span className={`text-sm ${getPerformanceColor(data.complianceRate, 70, 85)}`}>
                        {formatPercentage(data.complianceRate)}
                      </span>
                    </div>
                    <span className="text-purple-400 text-sm">{formatNumber(data.organizationsCompliant)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-blue-400">Implementation: {data.averageImplementationTime.toFixed(1)} months</div>
                      <div className="text-green-400">Cost: {formatCurrency(data.annualAuditCost)}/audit</div>
                      <div className="text-orange-400">Trust: +{formatPercentage(data.customerTrust)}</div>
                    </div>
                    <div>
                      <div className="text-red-400">Penalties: {formatCurrency(data.nonCompliancePenalties)}</div>
                      <div className="text-purple-400">Value: +{formatPercentage(data.certificationValue)}</div>
                      <div className="text-cyan-400">Security: {formatPercentage(data.securityPosture)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emerging Threats */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-yellow-400 mr-2" />
            Emerging Threats Intelligence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {Object.entries(socData.emergingThreats).map(([threatType, data], index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-sm font-medium capitalize">{threatType.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                  <span className={`text-sm ${getSeverityColor(data.skillsGapImpact / 10)}`}>
                    {formatNumber(data.detectionIncidents)}
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Growth Rate</span>
                    <span className="text-red-400">+{formatPercentage(data.sophisticationGrowth)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Automation</span>
                    <span className="text-orange-400">{formatPercentage(data.automationLevel)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Defense</span>
                    <span className="text-green-400">{formatPercentage(data.defenseEffectiveness)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Investment</span>
                    <span className="text-blue-400">{formatCurrency(data.investmentRequired)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Skills Gap</span>
                    <span className="text-yellow-400">{formatPercentage(data.skillsGapImpact)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SOC Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            SOC Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {socData.socAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                    <span className={`text-xs ${getSeverityColor(alert.severity)}`}>
                      Severity: {alert.severity}/10
                    </span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                  <div>
                    <div className="text-slate-300">Location: {alert.location}</div>
                    <div className="text-slate-300">Action: {alert.actionRequired ? 'Required' : 'Monitoring'}</div>
                    <div className="text-slate-300">Assets: {formatNumber(alert.affectedAssets)}</div>
                  </div>
                  <div>
                    <div className={`${getImpactColor(alert.impact).split(' ')[0]} text-xs`}>
                      Impact: {alert.impact}
                    </div>
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