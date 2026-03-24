// Cybersecurity Operations Center - Advanced Security Monitoring & Incident Response
import { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Eye, Lock, Zap, Activity, Target, Users, Database, Globe, Server, Wifi } from 'lucide-react';

export default function CybersecurityOperationsCenter() {
  const [securityData, setSecurityData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    threatLevel: {
      current: 'ELEVATED',
      score: 73.4,
      trend: 'INCREASING',
      lastUpdate: '23:47',
      activeCampaigns: 12,
      blockedAttacks: 2847
    },
    realTimeThreats: [
      {
        id: 'TH-2024-0847',
        type: 'Brute Force Attack',
        source: '185.220.101.32',
        target: 'SSH Service',
        severity: 'HIGH',
        status: 'BLOCKED',
        duration: '00:23:45',
        attempts: 1247,
        country: 'Russia',
        timestamp: '23:46:12'
      },
      {
        id: 'TH-2024-0848',
        type: 'SQL Injection',
        source: '45.134.26.89',
        target: 'Web Application',
        severity: 'CRITICAL',
        status: 'INVESTIGATING',
        duration: '00:08:34',
        attempts: 156,
        country: 'China',
        timestamp: '23:39:18'
      },
      {
        id: 'TH-2024-0849',
        type: 'DDoS Attempt',
        source: '172.96.45.78',
        target: 'API Gateway',
        severity: 'MEDIUM',
        status: 'MITIGATED',
        duration: '00:45:22',
        attempts: 15680,
        country: 'United States',
        timestamp: '23:01:56'
      },
      {
        id: 'TH-2024-0850',
        type: 'Malware Download',
        source: '91.215.103.47',
        target: 'User Endpoint',
        severity: 'HIGH',
        status: 'QUARANTINED',
        duration: '00:12:15',
        attempts: 3,
        country: 'Iran',
        timestamp: '23:35:03'
      }
    ],
    securityMetrics: {
      incidents: {
        total: 156,
        resolved: 142,
        investigating: 8,
        escalated: 6,
        avgResolutionTime: 18.4, // minutes
        mttr: 34.7 // mean time to response
      },
      vulnerabilities: {
        critical: 2,
        high: 7,
        medium: 23,
        low: 45,
        total: 77,
        patchedThisWeek: 34
      },
      compliance: {
        soc2: 98.7,
        iso27001: 96.4,
        gdpr: 94.8,
        hipaa: 91.2,
        overallScore: 95.3
      },
      authentication: {
        mfaAdoption: 94.7,
        passwordStrength: 87.3,
        ssoCompliance: 98.2,
        failedLogins: 234,
        suspiciousLogins: 12
      }
    },
    networkSecurity: {
      firewallStatus: 'ACTIVE',
      blockedConnections: 15679,
      allowedConnections: 2847356,
      suspiciousTraffic: 147,
      bandwidth: {
        incoming: 234.7, // Mbps
        outgoing: 156.2,
        peak: 445.8,
        usage: 52.7 // percentage
      },
      vpnSessions: {
        active: 67,
        total: 156,
        failedAttempts: 23,
        countries: ['Portugal', 'Germany', 'United States', 'Canada', 'Brazil']
      },
      endpoints: {
        total: 234,
        secured: 227,
        vulnerable: 5,
        offline: 2,
        compliance: 97.0
      }
    },
    dataSecurity: {
      encryption: {
        atRest: 99.8,
        inTransit: 100.0,
        database: 98.9,
        backups: 97.4
      },
      dataLoss: {
        incidents: 0,
        lastIncident: '2024-01-15',
        preventedAttempts: 67,
        sensitiveDataExposure: 0
      },
      backups: {
        lastBackup: '23:30:00',
        status: 'SUCCESSFUL',
        size: '2.4TB',
        retention: '90 days',
        integrity: 99.9,
        offsite: true
      },
      access: {
        privilegedUsers: 12,
        adminActions: 34,
        fileAccess: 2847,
        suspiciousAccess: 3,
        dataClassification: 94.7
      }
    },
    securityAlerts: [
      {
        id: 'SA-847',
        type: 'CRITICAL',
        title: 'SQL Injection Attempt Detected',
        description: 'Multiple SQL injection attempts from Chinese IP targeting user database',
        source: '45.134.26.89',
        impact: 'HIGH',
        status: 'INVESTIGATING',
        assignedTo: 'SOC Team Alpha',
        timestamp: '23:39:18',
        actions: ['Block IP', 'Review Logs', 'Patch Application']
      },
      {
        id: 'SA-848',
        type: 'WARNING',
        title: 'Unusual Login Pattern',
        description: 'Admin user login from new geographic location',
        source: 'admin@company.com',
        impact: 'MEDIUM',
        status: 'MONITORING',
        assignedTo: 'SOC Team Beta',
        timestamp: '23:22:45',
        actions: ['Verify Identity', 'Monitor Activity']
      },
      {
        id: 'SA-849',
        type: 'INFO',
        title: 'Failed MFA Attempts',
        description: 'Multiple failed MFA attempts for user account',
        source: 'user@company.com',
        impact: 'LOW',
        status: 'RESOLVED',
        assignedTo: 'SOC Team Gamma',
        timestamp: '22:45:12',
        actions: ['User Notified', 'Account Secured']
      },
      {
        id: 'SA-850',
        type: 'WARNING',
        title: 'Suspicious File Upload',
        description: 'Potentially malicious file uploaded to document system',
        source: 'File Server',
        impact: 'MEDIUM',
        status: 'QUARANTINED',
        assignedTo: 'SOC Team Alpha',
        timestamp: '22:15:33',
        actions: ['File Quarantined', 'Scan Complete', 'User Education']
      }
    ],
    threatIntelligence: {
      ioCs: {
        maliciousIPs: 15847,
        malwareSamples: 2847,
        suspiciousDomains: 567,
        lastUpdate: '23:45:00'
      },
      campaigns: [
        {
          name: 'APT29 Cozy Bear',
          status: 'ACTIVE',
          targets: 'Government, Technology',
          lastSeen: '2024-03-17',
          severity: 'CRITICAL',
          confidence: 95.2
        },
        {
          name: 'Lazarus Group',
          status: 'MONITORING',
          targets: 'Financial Services',
          lastSeen: '2024-03-15',
          severity: 'HIGH',
          confidence: 87.6
        },
        {
          name: 'FIN7',
          status: 'HISTORICAL',
          targets: 'Retail, Restaurants',
          lastSeen: '2024-03-10',
          severity: 'MEDIUM',
          confidence: 73.4
        }
      ],
      riskScore: 73.4,
      geoPolitical: {
        riskLevel: 'ELEVATED',
        hotspots: ['Eastern Europe', 'Southeast Asia', 'Middle East'],
        sanctions: 34,
        advisories: 12
      }
    },
    incidentResponse: {
      activeIncidents: 3,
      avgResponseTime: 8.4, // minutes
      avgResolutionTime: 45.7, // minutes
      escalationRate: 12.3, // percentage
      falsePositiveRate: 4.7,
      runbooks: {
        total: 67,
        updated: 54,
        tested: 45,
        compliance: 80.6
      },
      team: {
        oncall: 'SOC Team Alpha',
        members: 12,
        availability: 24/7,
        certifications: ['CISSP', 'CEH', 'GCIH', 'SANS']
      }
    },
    securityTools: [
      {
        name: 'SIEM - Splunk',
        status: 'OPERATIONAL',
        version: '9.1.2',
        lastUpdate: '2024-03-15',
        coverage: 98.7,
        alerts: 234
      },
      {
        name: 'EDR - CrowdStrike',
        status: 'OPERATIONAL',
        version: '7.15.0',
        lastUpdate: '2024-03-16',
        coverage: 99.2,
        alerts: 45
      },
      {
        name: 'SOAR - Phantom',
        status: 'OPERATIONAL',
        version: '5.3.4',
        lastUpdate: '2024-03-14',
        coverage: 85.4,
        alerts: 67
      },
      {
        name: 'Vulnerability Scanner',
        status: 'SCANNING',
        version: '11.2.1',
        lastUpdate: '2024-03-17',
        coverage: 94.8,
        alerts: 156
      },
      {
        name: 'WAF - CloudFlare',
        status: 'OPERATIONAL',
        version: 'Latest',
        lastUpdate: '2024-03-17',
        coverage: 100.0,
        alerts: 89
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSecurityData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        threatLevel: {
          ...prev.threatLevel,
          score: Math.max(60, Math.min(90, prev.threatLevel.score + (Math.random() - 0.5) * 5)),
          blockedAttacks: prev.threatLevel.blockedAttacks + Math.floor(Math.random() * 10)
        },
        networkSecurity: {
          ...prev.networkSecurity,
          blockedConnections: prev.networkSecurity.blockedConnections + Math.floor(Math.random() * 50),
          bandwidth: {
            ...prev.networkSecurity.bandwidth,
            incoming: Math.max(100, Math.min(400, prev.networkSecurity.bandwidth.incoming + (Math.random() - 0.5) * 20)),
            outgoing: Math.max(80, Math.min(300, prev.networkSecurity.bandwidth.outgoing + (Math.random() - 0.5) * 15))
          }
        }
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getThreatColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-500 bg-red-500/20';
      case 'HIGH': return 'text-orange-500 bg-orange-500/20';
      case 'MEDIUM': return 'text-yellow-500 bg-yellow-500/20';
      case 'LOW': return 'text-green-500 bg-green-500/20';
      default: return 'text-gray-500 bg-gray-500/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'BLOCKED': return 'text-green-400 bg-green-400/20';
      case 'INVESTIGATING': return 'text-yellow-400 bg-yellow-400/20';
      case 'MITIGATED': return 'text-blue-400 bg-blue-400/20';
      case 'QUARANTINED': return 'text-purple-400 bg-purple-400/20';
      case 'RESOLVED': return 'text-green-400 bg-green-400/20';
      case 'MONITORING': return 'text-cyan-400 bg-cyan-400/20';
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'SCANNING': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getAlertTypeColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatNumber = (value) => value.toLocaleString();

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
              <h1 className="text-2xl font-bold text-white">Cybersecurity Operations Center</h1>
              <p className="text-red-300">Advanced security monitoring, threat intelligence & incident response</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-red-400">{securityData.currentTime}</div>
            <div className="text-red-300">Security Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Threat Level Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                Threat Level
              </h3>
            </div>
            <div className="text-3xl font-bold text-red-400">{securityData.threatLevel.current}</div>
            <div className="text-red-300 text-sm">Score: {securityData.threatLevel.score.toFixed(1)}/100</div>
            <div className="text-gray-400 text-xs mt-2">{securityData.threatLevel.activeCampaigns} active campaigns</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-orange-400 mr-2" />
                Blocked Attacks
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(securityData.threatLevel.blockedAttacks)}</div>
            <div className="text-orange-300 text-sm">Last 24 hours</div>
            <div className="text-gray-400 text-xs mt-2">Updated: {securityData.threatLevel.lastUpdate}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-cyan-400 mr-2" />
                Active Incidents
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{securityData.incidentResponse.activeIncidents}</div>
            <div className="text-cyan-300 text-sm">Avg Response: {securityData.incidentResponse.avgResponseTime.toFixed(1)}min</div>
            <div className="text-gray-400 text-xs mt-2">Team: {securityData.incidentResponse.team.oncall}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-purple-400 mr-2" />
                Compliance Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(securityData.securityMetrics.compliance.overallScore)}</div>
            <div className="text-purple-300 text-sm">SOC2: {formatPercentage(securityData.securityMetrics.compliance.soc2)}</div>
            <div className="text-gray-400 text-xs mt-2">ISO27001: {formatPercentage(securityData.securityMetrics.compliance.iso27001)}</div>
          </div>
        </div>

        {/* Real-Time Threats & Security Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-red-400 mr-2" />
              Real-Time Threats
            </h3>
            <div className="space-y-3">
              {securityData.realTimeThreats.map((threat, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getThreatColor(threat.severity)}`}>
                        {threat.severity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(threat.status)}`}>
                        {threat.status}
                      </span>
                    </div>
                    <span className="text-gray-400 text-xs">{threat.timestamp}</span>
                  </div>
                  <div className="text-white font-medium text-sm mb-2">{threat.type}</div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-gray-400">Source: </span>
                      <span className="text-red-400">{threat.source}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Target: </span>
                      <span className="text-orange-400">{threat.target}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Duration: </span>
                      <span className="text-cyan-400">{threat.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Attempts: </span>
                      <span className="text-yellow-400">{formatNumber(threat.attempts)}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs">
                    <span className="text-gray-400">Country: </span>
                    <span className="text-purple-400">{threat.country}</span>
                    <span className="text-gray-400 ml-3">ID: </span>
                    <span className="text-blue-400">{threat.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              Security Alerts
            </h3>
            <div className="space-y-3">
              {securityData.securityAlerts.map((alert, index) => (
                <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertTypeColor(alert.type)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm font-medium`}>
                        {alert.type}
                      </span>
                      <span className="text-gray-300 text-xs">{alert.id}</span>
                    </div>
                    <span className="text-gray-400 text-xs">{alert.timestamp}</span>
                  </div>
                  <div className="text-white font-medium text-sm mb-1">{alert.title}</div>
                  <div className="text-gray-300 text-xs mb-2">{alert.description}</div>
                  <div className="flex justify-between items-center text-xs">
                    <div>
                      <span className="text-gray-400">Impact: </span>
                      <span className={`${alert.impact === 'HIGH' ? 'text-red-400' : alert.impact === 'MEDIUM' ? 'text-yellow-400' : 'text-green-400'}`}>
                        {alert.impact}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Assigned: </span>
                      <span className="text-cyan-400">{alert.assignedTo}</span>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {alert.actions.map((action, actionIndex) => (
                      <span key={actionIndex} className="px-2 py-1 bg-slate-600/50 text-gray-300 rounded text-xs">
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Network Security & Data Security */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 text-blue-400 mr-2" />
              Network Security
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatNumber(securityData.networkSecurity.allowedConnections)}</div>
                <div className="text-green-300 text-sm">Allowed Connections</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatNumber(securityData.networkSecurity.blockedConnections)}</div>
                <div className="text-red-300 text-sm">Blocked Connections</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                <span className="text-gray-300">Firewall Status</span>
                <span className={`font-medium ${getStatusColor(securityData.networkSecurity.firewallStatus).split(' ')[0]}`}>
                  {securityData.networkSecurity.firewallStatus}
                </span>
              </div>
              <div className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                <span className="text-gray-300">Suspicious Traffic</span>
                <span className="text-yellow-400 font-medium">{securityData.networkSecurity.suspiciousTraffic}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                <span className="text-gray-300">VPN Sessions</span>
                <span className="text-cyan-400 font-medium">{securityData.networkSecurity.vpnSessions.active}/{securityData.networkSecurity.vpnSessions.total}</span>
              </div>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-3">
              <div className="text-white text-sm font-medium mb-2">Bandwidth Usage</div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Incoming</span>
                  <span className="text-green-400">{securityData.networkSecurity.bandwidth.incoming.toFixed(1)} Mbps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Outgoing</span>
                  <span className="text-blue-400">{securityData.networkSecurity.bandwidth.outgoing.toFixed(1)} Mbps</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Database className="w-5 h-5 text-green-400 mr-2" />
              Data Security
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(securityData.dataSecurity.encryption.atRest)}</div>
                <div className="text-green-300 text-sm">Encryption at Rest</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(securityData.dataSecurity.encryption.inTransit)}</div>
                <div className="text-cyan-300 text-sm">Encryption in Transit</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                <span className="text-gray-300">Data Loss Incidents</span>
                <span className="text-green-400 font-medium">{securityData.dataSecurity.dataLoss.incidents}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                <span className="text-gray-300">Last Backup</span>
                <span className="text-blue-400 font-medium">{securityData.dataSecurity.backups.lastBackup}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                <span className="text-gray-300">Backup Integrity</span>
                <span className="text-purple-400 font-medium">{formatPercentage(securityData.dataSecurity.backups.integrity)}</span>
              </div>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-3">
              <div className="text-white text-sm font-medium mb-2">Access Control</div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Privileged Users</span>
                  <span className="text-orange-400">{securityData.dataSecurity.access.privilegedUsers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Suspicious Access</span>
                  <span className="text-red-400">{securityData.dataSecurity.access.suspiciousAccess}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Threat Intelligence & Security Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-orange-400 mr-2" />
              Threat Intelligence
            </h3>
            <div className="mb-6">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-orange-400">{securityData.threatIntelligence.riskScore.toFixed(1)}</div>
                <div className="text-orange-300 text-sm">Risk Score</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Active Campaigns</h4>
              {securityData.threatIntelligence.campaigns.map((campaign, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{campaign.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getThreatColor(campaign.severity)}`}>
                      {campaign.severity}
                    </span>
                  </div>
                  <div className="text-gray-300 text-xs mb-2">{campaign.targets}</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Last Seen: {campaign.lastSeen}</span>
                    <span className="text-cyan-400">Confidence: {formatPercentage(campaign.confidence)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-700/50 rounded-lg p-3">
              <div className="text-white text-sm font-medium mb-2">Indicators of Compromise</div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Malicious IPs</span>
                  <span className="text-red-400">{formatNumber(securityData.threatIntelligence.ioCs.maliciousIPs)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Malware Samples</span>
                  <span className="text-orange-400">{formatNumber(securityData.threatIntelligence.ioCs.malwareSamples)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Server className="w-5 h-5 text-purple-400 mr-2" />
              Security Tools
            </h3>
            <div className="space-y-3">
              {securityData.securityTools.map((tool, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{tool.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tool.status)}`}>
                      {tool.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="text-gray-400">Version: </span>
                      <span className="text-cyan-400">{tool.version}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Coverage: </span>
                      <span className="text-green-400">{formatPercentage(tool.coverage)}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Alerts: </span>
                      <span className="text-yellow-400">{tool.alerts}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs">
                    <span className="text-gray-400">Last Update: </span>
                    <span className="text-purple-400">{tool.lastUpdate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Metrics Dashboard */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 text-cyan-400 mr-2" />
            Security Metrics Dashboard
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Incident Metrics</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Total Incidents</span>
                  <span className="text-cyan-400">{securityData.securityMetrics.incidents.total}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Resolved</span>
                  <span className="text-green-400">{securityData.securityMetrics.incidents.resolved}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Investigating</span>
                  <span className="text-yellow-400">{securityData.securityMetrics.incidents.investigating}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Escalated</span>
                  <span className="text-red-400">{securityData.securityMetrics.incidents.escalated}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Vulnerabilities</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Critical</span>
                  <span className="text-red-400">{securityData.securityMetrics.vulnerabilities.critical}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">High</span>
                  <span className="text-orange-400">{securityData.securityMetrics.vulnerabilities.high}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Medium</span>
                  <span className="text-yellow-400">{securityData.securityMetrics.vulnerabilities.medium}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Low</span>
                  <span className="text-green-400">{securityData.securityMetrics.vulnerabilities.low}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Authentication</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">MFA Adoption</span>
                  <span className="text-green-400">{formatPercentage(securityData.securityMetrics.authentication.mfaAdoption)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Password Strength</span>
                  <span className="text-cyan-400">{formatPercentage(securityData.securityMetrics.authentication.passwordStrength)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Failed Logins</span>
                  <span className="text-yellow-400">{securityData.securityMetrics.authentication.failedLogins}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Suspicious Logins</span>
                  <span className="text-red-400">{securityData.securityMetrics.authentication.suspiciousLogins}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Response Times</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Avg Resolution</span>
                  <span className="text-purple-400">{securityData.securityMetrics.incidents.avgResolutionTime.toFixed(1)}min</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">MTTR</span>
                  <span className="text-orange-400">{securityData.securityMetrics.incidents.mttr.toFixed(1)}min</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Escalation Rate</span>
                  <span className="text-cyan-400">{formatPercentage(securityData.incidentResponse.escalationRate)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">False Positive Rate</span>
                  <span className="text-green-400">{formatPercentage(securityData.incidentResponse.falsePositiveRate)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}