// Security Operations Center - Threat Detection & Cybersecurity Monitoring
import { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Lock, Eye, Activity, Zap, Users, Clock, TrendingUp, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function ThreatDetectionCenter() {
  const [securityData, setSecurityData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    threatLevel: 'LOW',
    securityStatus: 'SECURE',
    activeThreats: 0,
    blockedAttacks: 247,
    securityScore: 94.7,
    systemUptime: '99.97%',
    lastIncident: '14 days ago',
    realTimeEvents: [
      {
        time: '11:16',
        type: 'INFO',
        event: 'Mission Control deployment verified secure',
        source: 'Deployment Monitor',
        severity: 'LOW'
      },
      {
        time: '11:15',
        type: 'SUCCESS',
        event: 'Business Intelligence Center security scan passed',
        source: 'Code Scanner',
        severity: 'INFO'
      },
      {
        time: '11:14',
        type: 'INFO',
        event: 'SSL certificate validation completed',
        source: 'Certificate Monitor',
        severity: 'LOW'
      },
      {
        time: '11:12',
        type: 'WARNING',
        event: 'Unusual traffic pattern detected and resolved',
        source: 'Traffic Analyzer',
        severity: 'MEDIUM'
      },
      {
        time: '11:10',
        type: 'SUCCESS',
        event: 'Vercel deployment security validation passed',
        source: 'Deployment Scanner',
        severity: 'INFO'
      }
    ],
    threatIntelligence: {
      totalFirewallRules: 1247,
      activeFirewallRules: 847,
      malwareSignatures: 156789,
      phishingPrevention: 98.6,
      ddosProtection: 'ACTIVE',
      intrusionDetection: 'MONITORING',
      vpnConnections: 'SECURED',
      dataEncryption: '99.9%'
    },
    accessControl: {
      authorizedUsers: 3,
      activeSessions: 2,
      failedLogins: 0,
      privilegedAccess: 'CONTROLLED',
      twoFactorAuth: 'ENFORCED',
      sessionTimeouts: 'CONFIGURED',
      accessReviews: 'UP_TO_DATE',
      passwordPolicy: 'STRONG'
    },
    vulnerabilityAssessment: {
      lastScanDate: '2026-03-16',
      criticalVulns: 0,
      highVulns: 1,
      mediumVulns: 3,
      lowVulns: 7,
      patchLevel: 98.4,
      complianceScore: 96.8,
      securityRating: 'A+',
      nextScheduledScan: '2026-03-20'
    },
    networkSecurity: {
      firewallStatus: 'ACTIVE',
      ipsStatus: 'MONITORING',
      dnsFiltering: 'ENABLED',
      webApplicationFirewall: 'ACTIVE',
      antiMalware: 'SCANNING',
      emailSecurity: 'PROTECTED',
      endpointProtection: 'DEPLOYED',
      networkSegmentation: 'CONFIGURED'
    },
    complianceMetrics: {
      gdprCompliance: 97.2,
      iso27001: 94.8,
      socCompliance: 96.4,
      dataProtection: 98.1,
      auditReadiness: 95.7,
      incidentResponse: 'TESTED',
      businessContinuity: 'VERIFIED',
      disasterRecovery: 'READY'
    },
    incidentResponse: {
      responseTime: 'Sub 5 min',
      escalationProcedures: 'DEFINED',
      forensicCapability: 'AVAILABLE',
      communicationPlan: 'ACTIVE',
      recoveryProcedures: 'TESTED',
      lessonLearned: 'DOCUMENTED',
      teamReadiness: 'HIGH',
      toolsAvailable: 'OPERATIONAL'
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSecurityData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        securityScore: Math.max(90, Math.min(99, prev.securityScore + (Math.random() - 0.5) * 1)),
        blockedAttacks: prev.blockedAttacks + Math.floor(Math.random() * 3),
        vulnerabilityAssessment: {
          ...prev.vulnerabilityAssessment,
          patchLevel: Math.max(95, Math.min(99.5, prev.vulnerabilityAssessment.patchLevel + (Math.random() - 0.5) * 0.5))
        }
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getThreatLevelColor = (level) => {
    switch (level) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-green-400 bg-green-400/20 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'SUCCESS': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'WARNING': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'ERROR': return <XCircle className="w-4 h-4 text-red-400" />;
      case 'INFO': return <AlertCircle className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'SECURE': return 'text-green-400 bg-green-400/20';
      case 'ACTIVE': return 'text-green-400 bg-green-400/20';
      case 'MONITORING': return 'text-blue-400 bg-blue-400/20';
      case 'ENABLED': return 'text-cyan-400 bg-cyan-400/20';
      case 'PROTECTED': return 'text-purple-400 bg-purple-400/20';
      case 'DEPLOYED': return 'text-indigo-400 bg-indigo-400/20';
      case 'CONFIGURED': return 'text-emerald-400 bg-emerald-400/20';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getVulnColor = (count) => {
    if (count === 0) return 'text-green-400';
    if (count <= 2) return 'text-yellow-400';
    return 'text-red-400';
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
              <h1 className="text-2xl font-bold text-white">Security Operations Center</h1>
              <p className="text-red-300">Real-time threat detection, vulnerability management & cybersecurity monitoring</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-red-400">{securityData.currentTime}</div>
            <div className="text-red-300">Security Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Security Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-red-400 mr-2" />
                Threat Level
              </h3>
            </div>
            <div className={`text-3xl font-bold px-4 py-2 rounded-lg border ${getThreatLevelColor(securityData.threatLevel)}`}>
              {securityData.threatLevel}
            </div>
            <div className="text-red-300 text-sm mt-2">System Status: {securityData.securityStatus}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-blue-400 mr-2" />
                Security Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{securityData.securityScore}%</div>
            <div className="text-blue-300 text-sm">Overall Protection</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-green-400 mr-2" />
                Blocked Attacks
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{securityData.blockedAttacks}</div>
            <div className="text-green-300 text-sm">This month</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
                System Uptime
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{securityData.systemUptime}</div>
            <div className="text-purple-300 text-sm">Last 30 days</div>
          </div>
        </div>

        {/* Real-time Security Events */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 text-orange-400 mr-2" />
            Real-time Security Events
          </h3>
          <div className="space-y-3">
            {securityData.realTimeEvents.map((event, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30 flex items-center space-x-3">
                {getEventTypeIcon(event.type)}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{event.event}</span>
                    <span className="text-slate-400 text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-slate-400">Source: {event.source}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.severity)}`}>
                      {event.severity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Security & Access Control */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Lock className="w-5 h-5 text-cyan-400 mr-2" />
              Network Security Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Firewall</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(securityData.networkSecurity.firewallStatus)}`}>
                  {securityData.networkSecurity.firewallStatus}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Intrusion Prevention</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(securityData.networkSecurity.ipsStatus)}`}>
                  {securityData.networkSecurity.ipsStatus}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">DNS Filtering</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(securityData.networkSecurity.dnsFiltering)}`}>
                  {securityData.networkSecurity.dnsFiltering}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Web Application Firewall</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(securityData.networkSecurity.webApplicationFirewall)}`}>
                  {securityData.networkSecurity.webApplicationFirewall}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Anti-Malware Scanning</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(securityData.networkSecurity.antiMalware)}`}>
                  {securityData.networkSecurity.antiMalware}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              Access Control & Authentication
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Authorized Users</span>
                <span className="text-white font-medium">{securityData.accessControl.authorizedUsers}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Active Sessions</span>
                <span className="text-green-400 font-medium">{securityData.accessControl.activeSessions}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Failed Login Attempts</span>
                <span className="text-green-400 font-medium">{securityData.accessControl.failedLogins}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Two-Factor Authentication</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(securityData.accessControl.twoFactorAuth)}`}>
                  {securityData.accessControl.twoFactorAuth}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Password Policy</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(securityData.accessControl.passwordPolicy)}`}>
                  {securityData.accessControl.passwordPolicy}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Vulnerability Assessment & Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              Vulnerability Assessment
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${getVulnColor(securityData.vulnerabilityAssessment.criticalVulns)}`}>
                    {securityData.vulnerabilityAssessment.criticalVulns}
                  </div>
                  <div className="text-slate-400 text-xs">Critical</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${getVulnColor(securityData.vulnerabilityAssessment.highVulns)}`}>
                    {securityData.vulnerabilityAssessment.highVulns}
                  </div>
                  <div className="text-slate-400 text-xs">High</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${getVulnColor(securityData.vulnerabilityAssessment.mediumVulns)}`}>
                    {securityData.vulnerabilityAssessment.mediumVulns}
                  </div>
                  <div className="text-slate-400 text-xs">Medium</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${getVulnColor(securityData.vulnerabilityAssessment.lowVulns)}`}>
                    {securityData.vulnerabilityAssessment.lowVulns}
                  </div>
                  <div className="text-slate-400 text-xs">Low</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Patch Level</span>
                  <span className="text-green-400 font-medium">{securityData.vulnerabilityAssessment.patchLevel}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Security Rating</span>
                  <span className="text-green-400 font-medium">{securityData.vulnerabilityAssessment.securityRating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Last Scan</span>
                  <span className="text-slate-300 font-medium">{securityData.vulnerabilityAssessment.lastScanDate}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Compliance & Governance
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">GDPR Compliance</span>
                <span className="text-green-400 font-medium">{securityData.complianceMetrics.gdprCompliance}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">ISO 27001</span>
                <span className="text-cyan-400 font-medium">{securityData.complianceMetrics.iso27001}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">SOC Compliance</span>
                <span className="text-purple-400 font-medium">{securityData.complianceMetrics.socCompliance}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Data Protection</span>
                <span className="text-orange-400 font-medium">{securityData.complianceMetrics.dataProtection}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Audit Readiness</span>
                <span className="text-green-400 font-medium">{securityData.complianceMetrics.auditReadiness}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Threat Intelligence & Incident Response */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-blue-400 mr-2" />
              Threat Intelligence
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Firewall Rules</span>
                <span className="text-blue-400 font-medium">{securityData.threatIntelligence.activeFirewallRules} / {securityData.threatIntelligence.totalFirewallRules}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Malware Signatures</span>
                <span className="text-cyan-400 font-medium">{securityData.threatIntelligence.malwareSignatures.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Phishing Prevention</span>
                <span className="text-purple-400 font-medium">{securityData.threatIntelligence.phishingPrevention}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">DDoS Protection</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(securityData.threatIntelligence.ddosProtection)}`}>
                  {securityData.threatIntelligence.ddosProtection}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Data Encryption</span>
                <span className="text-green-400 font-medium">{securityData.threatIntelligence.dataEncryption}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Clock className="w-5 h-5 text-orange-400 mr-2" />
              Incident Response Readiness
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Response Time</span>
                <span className="text-green-400 font-medium">{securityData.incidentResponse.responseTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Escalation Procedures</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(securityData.incidentResponse.escalationProcedures)}`}>
                  {securityData.incidentResponse.escalationProcedures}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Forensic Capability</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(securityData.incidentResponse.forensicCapability)}`}>
                  {securityData.incidentResponse.forensicCapability}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Recovery Procedures</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(securityData.incidentResponse.recoveryProcedures)}`}>
                  {securityData.incidentResponse.recoveryProcedures}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Team Readiness</span>
                <span className="text-green-400 font-medium">{securityData.incidentResponse.teamReadiness}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Metrics Summary */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-red-400 mr-2" />
            Security Performance Summary
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{securityData.securityScore}%</div>
              <div className="text-slate-400 text-sm mb-3">Overall Security Score</div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full transition-all duration-300"
                  style={{ width: `${securityData.securityScore}%` }}
                ></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{securityData.vulnerabilityAssessment.patchLevel}%</div>
              <div className="text-slate-400 text-sm mb-3">System Patch Level</div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                  style={{ width: `${securityData.vulnerabilityAssessment.patchLevel}%` }}
                ></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{securityData.complianceMetrics.gdprCompliance}%</div>
              <div className="text-slate-400 text-sm mb-3">Compliance Score</div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                  style={{ width: `${securityData.complianceMetrics.gdprCompliance}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}