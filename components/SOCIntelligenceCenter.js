// SOC Intelligence Center - Security Operations Center & Threat Intelligence Analytics
import { useState, useEffect } from 'react';
import { Shield, Zap, AlertTriangle, Activity, TrendingUp, Eye, Lock, Clock, Users, BarChart3, Settings, Target } from 'lucide-react';

export default function SOCIntelligenceCenter() {
  const [socData, setSOCData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    socOverview: {
      totalAlerts: 2456,
      criticalAlerts: 23,
      highPriorityAlerts: 67,
      mediumPriorityAlerts: 234,
      lowPriorityAlerts: 2132,
      threatsBlocked: 1234,
      incidentsActive: 12,
      incidentsResolved: 145,
      avgResponseTime: 8.7,
      threatIntelFeeds: 34,
      endpoints: 2567,
      networkDevices: 234,
      vulnerabilities: 567,
      securityScore: 94.7,
      complianceScore: 96.8,
      meanTimeToDetection: 4.2,
      meanTimeToResponse: 8.7,
      meanTimeToResolution: 156.3
    },
    threatHunting: [
      {
        huntId: 'HUNT-2026-0318-001',
        name: 'APT Lateral Movement Detection',
        status: 'ACTIVE',
        priority: 'CRITICAL',
        analyst: 'Sarah Chen',
        startTime: '2026-03-18 09:30:00',
        indicators: 45,
        matchedEvents: 234,
        suspiciousActivities: 12,
        techniques: ['T1021.001', 'T1078.003', 'T1003.001'],
        mitreTactics: ['Lateral Movement', 'Privilege Escalation', 'Credential Access'],
        confidence: 87.4,
        riskScore: 9.2,
        affectedAssets: ['SRV-DC01', 'WS-ADMIN-02', 'SRV-FILE01'],
        networkSegments: 3,
        dataExfiltration: 'SUSPECTED',
        timeframe: '72 hours',
        progress: 67.8
      },
      {
        huntId: 'HUNT-2026-0318-002',
        name: 'Ransomware Behavior Analysis',
        status: 'ACTIVE',
        priority: 'HIGH',
        analyst: 'Mike Johnson',
        startTime: '2026-03-18 08:15:00',
        indicators: 78,
        matchedEvents: 456,
        suspiciousActivities: 23,
        techniques: ['T1486', 'T1083', 'T1057'],
        mitreTactics: ['Impact', 'Discovery', 'Defense Evasion'],
        confidence: 92.1,
        riskScore: 8.7,
        affectedAssets: ['WS-USER-156', 'SRV-BACKUP02'],
        networkSegments: 2,
        dataExfiltration: 'NONE',
        timeframe: '24 hours',
        progress: 89.2
      },
      {
        huntId: 'HUNT-2026-0318-003',
        name: 'Cloud Infrastructure Anomalies',
        status: 'COMPLETED',
        priority: 'MEDIUM',
        analyst: 'Lisa Wang',
        startTime: '2026-03-17 14:20:00',
        indicators: 23,
        matchedEvents: 89,
        suspiciousActivities: 3,
        techniques: ['T1530', 'T1562.007'],
        mitreTactics: ['Collection', 'Defense Evasion'],
        confidence: 76.4,
        riskScore: 6.1,
        affectedAssets: ['AWS-S3-PROD', 'AZURE-VM-DB01'],
        networkSegments: 1,
        dataExfiltration: 'BENIGN',
        timeframe: '48 hours',
        progress: 100,
        resolution: 'False Positive - Legitimate admin activity'
      }
    ],
    incidentResponse: [
      {
        incidentId: 'INC-2026-0318-001',
        title: 'Suspected Data Breach - Customer Database',
        severity: 'CRITICAL',
        status: 'ACTIVE',
        category: 'Data Breach',
        assignee: 'IR Team Alpha',
        reportedBy: 'SOC Analyst',
        reportedTime: '2026-03-18 09:45:00',
        lastUpdate: '2026-03-18 10:30:00',
        affectedSystems: ['DB-CUSTOMER-01', 'WEB-APP-PROD'],
        impactedUsers: 15670,
        dataClassification: 'CONFIDENTIAL',
        businessImpact: 'HIGH',
        regulatoryImplications: 'GDPR, PCI-DSS',
        containmentStatus: 'PARTIAL',
        eradicationStatus: 'IN_PROGRESS',
        recoveryStatus: 'PLANNING',
        timeline: {
          detection: '2026-03-18 09:45:00',
          containment: '2026-03-18 10:15:00',
          eradication: null,
          recovery: null
        },
        evidence: [
          'Unusual database queries logged',
          'Elevated privilege usage detected',
          'Network traffic to unknown IPs'
        ],
        communicationPlan: 'LEGAL_REVIEW',
        estimatedResolution: '2026-03-18 18:00:00'
      },
      {
        incidentId: 'INC-2026-0318-002',
        title: 'Malware Detection - Finance Department',
        severity: 'HIGH',
        status: 'CONTAINMENT',
        category: 'Malware',
        assignee: 'IR Team Beta',
        reportedBy: 'EDR System',
        reportedTime: '2026-03-18 08:30:00',
        lastUpdate: '2026-03-18 10:45:00',
        affectedSystems: ['WS-FINANCE-12', 'WS-FINANCE-15'],
        impactedUsers: 23,
        dataClassification: 'INTERNAL',
        businessImpact: 'MEDIUM',
        regulatoryImplications: 'SOX',
        containmentStatus: 'COMPLETE',
        eradicationStatus: 'IN_PROGRESS',
        recoveryStatus: 'PENDING',
        timeline: {
          detection: '2026-03-18 08:30:00',
          containment: '2026-03-18 09:00:00',
          eradication: null,
          recovery: null
        },
        evidence: [
          'Suspicious executable identified',
          'Network beaconing detected',
          'Registry modifications found'
        ],
        communicationPlan: 'INTERNAL_ONLY',
        estimatedResolution: '2026-03-18 14:00:00'
      },
      {
        incidentId: 'INC-2026-0318-003',
        title: 'Phishing Campaign - HR Department',
        severity: 'MEDIUM',
        status: 'RESOLVED',
        category: 'Phishing',
        assignee: 'IR Team Gamma',
        reportedBy: 'Email Security',
        reportedTime: '2026-03-18 07:15:00',
        lastUpdate: '2026-03-18 10:00:00',
        affectedSystems: ['EMAIL-EXCHANGE'],
        impactedUsers: 156,
        dataClassification: 'INTERNAL',
        businessImpact: 'LOW',
        regulatoryImplications: 'NONE',
        containmentStatus: 'COMPLETE',
        eradicationStatus: 'COMPLETE',
        recoveryStatus: 'COMPLETE',
        timeline: {
          detection: '2026-03-18 07:15:00',
          containment: '2026-03-18 07:30:00',
          eradication: '2026-03-18 08:45:00',
          recovery: '2026-03-18 09:30:00'
        },
        evidence: [
          'Malicious email campaign identified',
          'URL filtering logs analyzed',
          'User awareness training initiated'
        ],
        communicationPlan: 'AWARENESS_CAMPAIGN',
        resolution: 'Phishing emails blocked, users educated'
      }
    ],
    threatIntelligence: [
      {
        feedName: 'VirusTotal Enterprise',
        status: 'ACTIVE',
        lastUpdate: '2026-03-18 10:50:00',
        indicators: 234567,
        malwareSignatures: 45678,
        ipReputation: 123456,
        domainIntel: 78901,
        hashAnalysis: 234567,
        confidence: 96.7,
        freshness: '5 minutes',
        coverage: 'GLOBAL',
        threatTypes: ['Malware', 'Phishing', 'C&C', 'Exploits']
      },
      {
        feedName: 'Mandiant Threat Intelligence',
        status: 'ACTIVE',
        lastUpdate: '2026-03-18 10:45:00',
        indicators: 89012,
        malwareSignatures: 12345,
        ipReputation: 34567,
        domainIntel: 56789,
        hashAnalysis: 89012,
        confidence: 98.2,
        freshness: '10 minutes',
        coverage: 'GLOBAL',
        threatTypes: ['APT', 'Targeted Attacks', 'Zero-days', 'Campaigns']
      },
      {
        feedName: 'IBM X-Force',
        status: 'ACTIVE',
        lastUpdate: '2026-03-18 10:40:00',
        indicators: 156789,
        malwareSignatures: 23456,
        ipReputation: 67890,
        domainIntel: 123456,
        hashAnalysis: 156789,
        confidence: 94.8,
        freshness: '15 minutes',
        coverage: 'ENTERPRISE',
        threatTypes: ['Vulnerabilities', 'Exploits', 'Botnet', 'Spam']
      },
      {
        feedName: 'CrowdStrike Falcon',
        status: 'WARNING',
        lastUpdate: '2026-03-18 10:20:00',
        indicators: 67890,
        malwareSignatures: 8901,
        ipReputation: 23456,
        domainIntel: 45678,
        hashAnalysis: 67890,
        confidence: 89.3,
        freshness: '35 minutes',
        coverage: 'ENDPOINT',
        threatTypes: ['Fileless Malware', 'Living off Land', 'Persistence']
      }
    ],
    vulnerabilityManagement: [
      {
        cveId: 'CVE-2026-1234',
        severity: 'CRITICAL',
        cvssScore: 9.8,
        title: 'Remote Code Execution in Web Framework',
        affectedSystems: 23,
        patchAvailable: true,
        exploitDetected: false,
        publicExploit: true,
        discoveredDate: '2026-03-15',
        patchedSystems: 18,
        pendingSystems: 5,
        riskScore: 95.7,
        businessImpact: 'CRITICAL',
        remediationTimeline: '24 hours',
        workaroundAvailable: false
      },
      {
        cveId: 'CVE-2026-5678',
        severity: 'HIGH',
        cvssScore: 8.1,
        title: 'Privilege Escalation in Operating System',
        affectedSystems: 156,
        patchAvailable: true,
        exploitDetected: false,
        publicExploit: false,
        discoveredDate: '2026-03-12',
        patchedSystems: 134,
        pendingSystems: 22,
        riskScore: 78.9,
        businessImpact: 'HIGH',
        remediationTimeline: '72 hours',
        workaroundAvailable: true
      },
      {
        cveId: 'CVE-2026-9012',
        severity: 'MEDIUM',
        cvssScore: 6.5,
        title: 'Information Disclosure in Database',
        affectedSystems: 45,
        patchAvailable: true,
        exploitDetected: false,
        publicExploit: false,
        discoveredDate: '2026-03-10',
        patchedSystems: 41,
        pendingSystems: 4,
        riskScore: 52.3,
        businessImpact: 'MEDIUM',
        remediationTimeline: '7 days',
        workaroundAvailable: true
      }
    ],
    networkSecurity: [
      {
        sensor: 'IDS-PERIMETER-01',
        location: 'DMZ',
        status: 'ACTIVE',
        throughput: '2.34 Gbps',
        packetsAnalyzed: 2345678901,
        alertsGenerated: 2345,
        threatsBlocked: 234,
        falsePositives: 145,
        accuracy: 93.8,
        lastUpdate: '2026-03-18 10:55:00',
        signatures: 456789,
        coverage: ['HTTP', 'HTTPS', 'DNS', 'SMTP', 'FTP'],
        topThreats: ['Port Scanning', 'SQL Injection', 'DDoS']
      },
      {
        sensor: 'IPS-INTERNAL-01',
        location: 'Internal Network',
        status: 'ACTIVE',
        throughput: '1.78 Gbps',
        packetsAnalyzed: 1789456123,
        alertsGenerated: 1678,
        threatsBlocked: 167,
        falsePositives: 89,
        accuracy: 95.2,
        lastUpdate: '2026-03-18 10:50:00',
        signatures: 234567,
        coverage: ['SMB', 'RDP', 'SSH', 'LDAP', 'Kerberos'],
        topThreats: ['Lateral Movement', 'Credential Theft', 'Data Exfiltration']
      },
      {
        sensor: 'WAF-WEB-01',
        location: 'Web Services',
        status: 'ACTIVE',
        throughput: '567 Mbps',
        packetsAnalyzed: 567890123,
        alertsGenerated: 567,
        threatsBlocked: 89,
        falsePositives: 23,
        accuracy: 97.1,
        lastUpdate: '2026-03-18 10:45:00',
        signatures: 123456,
        coverage: ['OWASP Top 10', 'Custom Rules', 'API Protection'],
        topThreats: ['XSS', 'CSRF', 'API Abuse']
      }
    ],
    complianceMonitoring: [
      {
        framework: 'ISO 27001',
        overallScore: 94.7,
        controls: 114,
        implemented: 108,
        partiallyImplemented: 4,
        notImplemented: 2,
        lastAudit: '2026-02-15',
        nextAudit: '2026-08-15',
        findings: 3,
        criticalFindings: 0,
        status: 'COMPLIANT',
        certificationValid: true
      },
      {
        framework: 'SOC 2 Type II',
        overallScore: 96.8,
        controls: 76,
        implemented: 74,
        partiallyImplemented: 2,
        notImplemented: 0,
        lastAudit: '2026-01-20',
        nextAudit: '2026-07-20',
        findings: 1,
        criticalFindings: 0,
        status: 'COMPLIANT',
        certificationValid: true
      },
      {
        framework: 'GDPR',
        overallScore: 92.4,
        controls: 89,
        implemented: 82,
        partiallyImplemented: 5,
        notImplemented: 2,
        lastAudit: '2026-03-01',
        nextAudit: '2026-09-01',
        findings: 5,
        criticalFindings: 1,
        status: 'CONDITIONAL',
        certificationValid: true
      },
      {
        framework: 'PCI-DSS',
        overallScore: 98.1,
        controls: 42,
        implemented: 41,
        partiallyImplemented: 1,
        notImplemented: 0,
        lastAudit: '2026-02-28',
        nextAudit: '2026-08-28',
        findings: 0,
        criticalFindings: 0,
        status: 'COMPLIANT',
        certificationValid: true
      }
    ],
    socAlerts: [
      {
        type: 'CRITICAL',
        category: 'Data Breach',
        message: 'Suspected unauthorized access to customer database - immediate investigation required',
        source: 'Database Monitoring',
        currentValue: '15,670 affected customers',
        impact: 'Customer data potentially compromised, regulatory reporting required, legal implications',
        detectionMethod: 'Anomalous database queries detected',
        affectedAssets: ['DB-CUSTOMER-01', 'WEB-APP-PROD'],
        severity: 'CRITICAL',
        timestamp: '10:45',
        trendDirection: 'ESCALATING',
        detectedBy: 'SIEM',
        recommendation: 'Activate incident response team, isolate affected systems, preserve evidence, notify legal',
        urgency: 'IMMEDIATE',
        escalation: 'C_LEVEL',
        businessImpact: 'Revenue at risk, reputation damage, regulatory fines possible',
        estimatedCost: '$2.4M potential impact',
        containmentStatus: 'PARTIAL',
        investigationStatus: 'ACTIVE'
      },
      {
        type: 'HIGH',
        category: 'Malware',
        message: 'Banking trojan detected on finance department workstations - credential theft suspected',
        source: 'Endpoint Detection',
        currentValue: '2 infected workstations',
        impact: 'Financial system access compromised, unauthorized transactions possible',
        detectionMethod: 'EDR behavioral analysis',
        affectedAssets: ['WS-FINANCE-12', 'WS-FINANCE-15'],
        severity: 'HIGH',
        timestamp: '10:30',
        trendDirection: 'CONTAINED',
        detectedBy: 'EDR',
        recommendation: 'Isolate infected systems, reset financial access credentials, scan all finance systems',
        urgency: 'HIGH',
        escalation: 'SECURITY_TEAM',
        businessImpact: 'Financial operations disrupted, audit trail compromised',
        containmentStatus: 'COMPLETE',
        investigationStatus: 'IN_PROGRESS'
      },
      {
        type: 'MEDIUM',
        category: 'Suspicious Activity',
        message: 'Unusual administrative activity detected during off-hours - potential privilege abuse',
        source: 'User Behavior Analytics',
        currentValue: 'Admin account active 02:00-04:00',
        impact: 'Potential unauthorized system changes, compliance violation',
        detectionMethod: 'Time-based anomaly detection',
        affectedAssets: ['SRV-DC01', 'SRV-EXCHANGE01'],
        severity: 'MEDIUM',
        timestamp: '10:15',
        trendDirection: 'INVESTIGATING',
        detectedBy: 'UBA',
        recommendation: 'Verify legitimate business need, review audit logs, confirm with administrator',
        urgency: 'MEDIUM',
        escalation: 'SOC_ANALYST',
        businessImpact: 'Potential compliance violation, system integrity concerns',
        investigationStatus: 'ASSIGNED'
      },
      {
        type: 'INFO',
        category: 'Threat Intelligence',
        message: 'New APT campaign targeting our industry sector - proactive hunting recommended',
        source: 'Threat Intel Feed',
        intelligence: 'APT29 targeting healthcare organizations with COVID-themed phishing',
        impact: 'Industry-specific threat, early warning for proactive defense',
        indicators: ['email domains', 'malware hashes', 'C&C infrastructure'],
        severity: 'INFO',
        timestamp: '10:00',
        detectedBy: 'Threat Intelligence',
        recommendation: 'Update email security rules, enhance user awareness, deploy additional monitoring',
        urgency: 'LOW',
        proactiveActions: 'Threat hunting initiated, IOCs deployed to security tools',
        preventiveMeasures: 'Email security enhanced, user training scheduled'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        alertsProcessed: 234,
        incidentsCreated: 3,
        incidentsResolved: 2,
        falsePositiveRate: 12.4,
        meanTimeToDetection: 4.2,
        meanTimeToResponse: 8.7,
        analystUtilization: 87.3,
        automationRate: 67.8,
        threatsCaught: 23,
        threatsBlocked: 45
      },
      {
        period: 'Last 24 Hours',
        alertsProcessed: 4567,
        incidentsCreated: 12,
        incidentsResolved: 8,
        falsePositiveRate: 15.7,
        meanTimeToDetection: 3.8,
        meanTimeToResponse: 12.4,
        analystUtilization: 84.6,
        automationRate: 71.2,
        threatsCaught: 234,
        threatsBlocked: 567
      },
      {
        period: 'Last 7 Days',
        alertsProcessed: 23456,
        incidentsCreated: 67,
        incidentsResolved: 59,
        falsePositiveRate: 18.2,
        meanTimeToDetection: 4.5,
        meanTimeToResponse: 15.6,
        analystUtilization: 89.1,
        automationRate: 69.4,
        threatsCaught: 1234,
        threatsBlocked: 2345
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSOCData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        socOverview: {
          ...prev.socOverview,
          totalAlerts: Math.max(2000, Math.min(3000, prev.socOverview.totalAlerts + Math.floor((Math.random() - 0.5) * 50))),
          criticalAlerts: Math.max(10, Math.min(50, prev.socOverview.criticalAlerts + Math.floor((Math.random() - 0.5) * 5))),
          threatsBlocked: Math.max(1000, Math.min(1500, prev.socOverview.threatsBlocked + Math.floor((Math.random() - 0.5) * 20))),
          avgResponseTime: Math.max(5.0, Math.min(15.0, prev.socOverview.avgResponseTime + (Math.random() - 0.5) * 1.0))
        }
      }));
    }, 20000);

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
      case 'ACTIVE': return 'text-green-400 bg-green-400/20';
      case 'COMPLIANT': return 'text-green-400 bg-green-400/20';
      case 'RESOLVED': return 'text-green-400 bg-green-400/20';
      case 'COMPLETE': return 'text-green-400 bg-green-400/20';
      case 'CONTAINMENT': return 'text-blue-400 bg-blue-400/20';
      case 'IN_PROGRESS': return 'text-blue-400 bg-blue-400/20';
      case 'CONDITIONAL': return 'text-yellow-400 bg-yellow-400/20';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'FAILED': return 'text-red-400 bg-red-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-500';
      case 'HIGH': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-blue-400';
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
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatMinutes = (minutes) => {
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours}h ${mins.toFixed(0)}m`;
    }
    return `${minutes.toFixed(1)}m`;
  };

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
              <h1 className="text-2xl font-bold text-white">SOC Intelligence Center</h1>
              <p className="text-red-300">Security operations center & threat intelligence analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-red-400">{socData.currentTime}</div>
            <div className="text-red-300">Security Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* SOC Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                Alerts
              </h3>
            </div>
            <div className="text-3xl font-bold text-red-400">{socData.socOverview.totalAlerts}</div>
            <div className="text-red-300 text-sm">{socData.socOverview.criticalAlerts} Critical</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-blue-400 mr-2" />
                Threats
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{socData.socOverview.threatsBlocked}</div>
            <div className="text-blue-300 text-sm">Blocked</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-cyan-400 mr-2" />
                Incidents
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{socData.socOverview.incidentsActive}</div>
            <div className="text-cyan-300 text-sm">Active</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                Response
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatMinutes(socData.socOverview.avgResponseTime)}</div>
            <div className="text-yellow-300 text-sm">MTTR</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Security Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(socData.socOverview.securityScore)}</div>
            <div className="text-green-300 text-sm">Overall</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-purple-400 mr-2" />
                Endpoints
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{socData.socOverview.endpoints}</div>
            <div className="text-purple-300 text-sm">Monitored</div>
          </div>
        </div>

        {/* Threat Hunting & Incident Response */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-orange-400 mr-2" />
              Active Threat Hunting
            </h3>
            <div className="space-y-4">
              {socData.threatHunting.map((hunt, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{hunt.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(hunt.status)}`}>
                        {hunt.status}
                      </span>
                      <span className={`text-xs ${getSeverityColor(hunt.priority)}`}>{hunt.priority}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Analyst: {hunt.analyst}</div>
                    <div className="text-yellow-400">Confidence: {formatPercentage(hunt.confidence)}</div>
                    <div className="text-red-400">Risk: {hunt.riskScore}/10</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Indicators: {hunt.indicators}</div>
                    <div className="text-purple-400">Events: {hunt.matchedEvents}</div>
                  </div>
                  
                  <div className="text-xs space-y-1 mb-2">
                    <div className="text-orange-400">MITRE: {hunt.mitreTactics.join(', ')}</div>
                    <div className="text-green-400">Assets: {hunt.affectedAssets.join(', ')}</div>
                  </div>
                  
                  {hunt.progress < 100 && (
                    <div className="text-slate-400 text-xs">
                      <strong>Progress:</strong> {formatPercentage(hunt.progress)} • <strong>Timeframe:</strong> {hunt.timeframe}
                    </div>
                  )}
                  
                  {hunt.resolution && (
                    <div className="text-green-400 text-xs">
                      <strong>Resolution:</strong> {hunt.resolution}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
              Incident Response
            </h3>
            <div className="space-y-4">
              {socData.incidentResponse.map((incident, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{incident.title}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(incident.status)}`}>
                        {incident.status}
                      </span>
                      <span className={`text-xs ${getSeverityColor(incident.severity)}`}>{incident.severity}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-purple-400">ID: {incident.incidentId}</div>
                    <div className="text-blue-400">Team: {incident.assignee}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Impact: {incident.businessImpact}</div>
                    <div className="text-yellow-400">Users: {incident.impactedUsers ? formatNumber(incident.impactedUsers) : 'N/A'}</div>
                  </div>
                  
                  <div className="text-xs space-y-1 mb-2">
                    <div className="text-cyan-400">Systems: {incident.affectedSystems.join(', ')}</div>
                    {incident.regulatoryImplications !== 'NONE' && (
                      <div className="text-red-400">Regulatory: {incident.regulatoryImplications}</div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className={`${incident.containmentStatus === 'COMPLETE' ? 'text-green-400' : incident.containmentStatus === 'PARTIAL' ? 'text-yellow-400' : 'text-red-400'}`}>
                      Contain: {incident.containmentStatus}
                    </div>
                    <div className={`${incident.eradicationStatus === 'COMPLETE' ? 'text-green-400' : incident.eradicationStatus === 'IN_PROGRESS' ? 'text-yellow-400' : 'text-red-400'}`}>
                      Eradicate: {incident.eradicationStatus}
                    </div>
                    <div className={`${incident.recoveryStatus === 'COMPLETE' ? 'text-green-400' : incident.recoveryStatus === 'PLANNING' || incident.recoveryStatus === 'PENDING' ? 'text-yellow-400' : 'text-red-400'}`}>
                      Recover: {incident.recoveryStatus}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Threat Intelligence & Network Security */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-indigo-400 mr-2" />
              Threat Intelligence Feeds
            </h3>
            <div className="space-y-4">
              {socData.threatIntelligence.map((feed, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{feed.feedName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(feed.status)}`}>
                        {feed.status}
                      </span>
                      <span className="text-slate-400 text-xs">{formatPercentage(feed.confidence)} confidence</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Indicators: {formatNumber(feed.indicators)}</div>
                    <div className="text-purple-400">Signatures: {formatNumber(feed.malwareSignatures)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">IP Intel: {formatNumber(feed.ipReputation)}</div>
                    <div className="text-yellow-400">Domain Intel: {formatNumber(feed.domainIntel)}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-green-400">Coverage: {feed.coverage} • Freshness: {feed.freshness}</div>
                    <div className="text-orange-400">Types: {feed.threatTypes.join(', ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-green-400 mr-2" />
              Network Security Sensors
            </h3>
            <div className="space-y-4">
              {socData.networkSecurity.map((sensor, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{sensor.sensor}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(sensor.status)}`}>
                        {sensor.status}
                      </span>
                      <span className="text-slate-400 text-xs">{sensor.location}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Throughput: {sensor.throughput}</div>
                    <div className="text-purple-400">Accuracy: {formatPercentage(sensor.accuracy)}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Packets: {formatNumber(sensor.packetsAnalyzed)}</div>
                    <div className="text-yellow-400">Alerts: {sensor.alertsGenerated}</div>
                    <div className="text-red-400">Blocked: {sensor.threatsBlocked}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-cyan-400">Protocols: {sensor.coverage.join(', ')}</div>
                    <div className="text-orange-400">Top Threats: {sensor.topThreats.join(', ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vulnerability Management & Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Lock className="w-5 h-5 text-yellow-400 mr-2" />
              Critical Vulnerabilities
            </h3>
            <div className="space-y-4">
              {socData.vulnerabilityManagement.map((vuln, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{vuln.cveId}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(vuln.severity)} bg-slate-800/50`}>
                        {vuln.severity}
                      </span>
                      <span className="text-slate-400 text-xs">CVSS: {vuln.cvssScore}</span>
                    </div>
                  </div>
                  
                  <div className="text-white text-sm mb-2">{vuln.title}</div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Affected: {vuln.affectedSystems} systems</div>
                    <div className="text-blue-400">Impact: {vuln.businessImpact}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className={`${vuln.patchedSystems === vuln.affectedSystems ? 'text-green-400' : 'text-yellow-400'}`}>
                      Patched: {vuln.patchedSystems}/{vuln.affectedSystems}
                    </div>
                    <div className="text-purple-400">Risk: {formatPercentage(vuln.riskScore)}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-cyan-400">Timeline: {vuln.remediationTimeline}</div>
                    <div className={`${vuln.publicExploit ? 'text-red-400' : 'text-green-400'}`}>
                      Public Exploit: {vuln.publicExploit ? 'Available' : 'None known'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-blue-400 mr-2" />
              Compliance Monitoring
            </h3>
            <div className="space-y-4">
              {socData.complianceMonitoring.map((compliance, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{compliance.framework}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(compliance.status)}`}>
                        {compliance.status}
                      </span>
                      <span className="text-slate-400 text-xs">{formatPercentage(compliance.overallScore)}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Implemented: {compliance.implemented}</div>
                    <div className="text-yellow-400">Partial: {compliance.partiallyImplemented}</div>
                    <div className="text-red-400">Missing: {compliance.notImplemented}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Total Controls: {compliance.controls}</div>
                    <div className={`${compliance.criticalFindings === 0 ? 'text-green-400' : 'text-red-400'}`}>
                      Critical Findings: {compliance.criticalFindings}
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-cyan-400">Last Audit: {compliance.lastAudit}</div>
                    <div className="text-purple-400">Next Audit: {compliance.nextAudit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SOC Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
            SOC Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {socData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Alerts: {formatNumber(metrics.alertsProcessed)}</div>
                  <div className="text-purple-400">Incidents: {metrics.incidentsCreated}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-green-400">Resolved: {metrics.incidentsResolved}</div>
                  <div className="text-yellow-400">FP Rate: {formatPercentage(metrics.falsePositiveRate)}</div>
                </div>
                
                <div className="grid grid-cols-1 gap-1 text-xs mb-2">
                  <div className="text-cyan-400">MTTD: {formatMinutes(metrics.meanTimeToDetection)}</div>
                  <div className="text-orange-400">MTTR: {formatMinutes(metrics.meanTimeToResponse)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Analyst Util: {formatPercentage(metrics.analystUtilization)}</div>
                  <div className="text-pink-400">Automation: {formatPercentage(metrics.automationRate)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SOC Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            SOC Security Alerts
          </h3>
          <div className="space-y-4">
            {socData.socAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                    {alert.urgency && <span className={`text-xs ${getSeverityColor(alert.urgency)}`}>{alert.urgency}</span>}
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                
                <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                  {alert.source && <div className="text-slate-300">Source: {alert.source}</div>}
                  {alert.currentValue && <div className="text-slate-300">Value: {alert.currentValue}</div>}
                  {alert.affectedAssets && <div className="text-slate-300">Assets: {alert.affectedAssets.join(', ')}</div>}
                  {alert.intelligence && <div className="text-blue-400">Intel: {alert.intelligence}</div>}
                  {alert.estimatedCost && <div className="text-red-400">Est. Cost: {alert.estimatedCost}</div>}
                  {alert.containmentStatus && <div className="text-yellow-400">Containment: {alert.containmentStatus}</div>}
                  {alert.investigationStatus && <div className="text-purple-400">Investigation: {alert.investigationStatus}</div>}
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