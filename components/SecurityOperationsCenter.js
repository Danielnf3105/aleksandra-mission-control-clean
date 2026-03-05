// SecurityOperationsCenter.js - Advanced Security Monitoring and Threat Detection for AI Systems
import { useState, useEffect } from 'react';

const SecurityOperationsCenter = () => {
  const [securityMetrics, setSecurityMetrics] = useState({
    threatLevel: 'LOW',
    activeThreatCount: 2,
    blockedAttacks: 147,
    securityScore: 94.7,
    aiRiskFactors: 3,
    complianceScore: 98.2,
    vulnerabilities: {
      critical: 0,
      high: 1,
      medium: 3,
      low: 8
    },
    lastScanTime: Date.now() - 15 * 60 * 1000 // 15 minutes ago
  });

  const [threatIntelligence, setThreatIntelligence] = useState([
    {
      id: 'THR001',
      type: 'Suspicious API Access',
      severity: 'MEDIUM',
      source: 'External IP: 192.168.1.100',
      target: 'Mission Control API',
      status: 'INVESTIGATING',
      timestamp: Date.now() - 5 * 60 * 1000,
      description: 'Unusual API request pattern detected from external source'
    },
    {
      id: 'THR002',
      type: 'AI Model Anomaly',
      severity: 'HIGH',
      source: 'Content Processor Agent',
      target: 'Data Processing Pipeline',
      status: 'MITIGATED',
      timestamp: Date.now() - 12 * 60 * 1000,
      description: 'Unexpected behavior pattern in AI content analysis'
    },
    {
      id: 'THR003',
      type: 'Unauthorized Access Attempt',
      severity: 'LOW',
      source: 'External Bot',
      target: 'Dashboard Login',
      status: 'BLOCKED',
      timestamp: Date.now() - 25 * 60 * 1000,
      description: 'Failed authentication attempts from automated source'
    }
  ]);

  const [aiSecurityRisks, setAiSecurityRisks] = useState([
    {
      id: 'AIR001',
      category: 'Data Privacy',
      risk: 'Sensitive data in prompts',
      severity: 'MEDIUM',
      affectedAgents: ['Content Agent', 'Analytics Agent'],
      mitigation: 'Data sanitization filters active',
      status: 'MONITORING'
    },
    {
      id: 'AIR002',
      category: 'Model Security',
      risk: 'Prompt injection attempts',
      severity: 'HIGH',
      affectedAgents: ['All AI Agents'],
      mitigation: 'Input validation enhanced',
      status: 'SECURED'
    },
    {
      id: 'AIR003',
      category: 'Access Control',
      risk: 'Unmanaged agent permissions',
      severity: 'LOW',
      affectedAgents: ['Analytics Agent'],
      mitigation: 'Permission audit scheduled',
      status: 'PENDING'
    }
  ]);

  const [networkSecurity, setNetworkSecurity] = useState({
    firewallStatus: 'ACTIVE',
    intrustionPrevention: 'ENABLED',
    ddosProtection: 'ACTIVE',
    sslCertificates: 'VALID',
    vpnConnections: 3,
    blockedIPs: 142,
    allowedDomains: 28,
    encryptionStatus: '256-bit AES'
  });

  const [complianceStatus, setComplianceStatus] = useState({
    gdprCompliance: 98.5,
    socCompliance: 96.7,
    iso27001: 94.3,
    aiEthicsGuidelines: 99.1,
    dataRetentionPolicy: 'COMPLIANT',
    auditTrail: 'COMPLETE',
    privacyControls: 'ACTIVE'
  });

  const [securityEvents, setSecurityEvents] = useState([
    { time: Date.now() - 2 * 60 * 1000, event: 'Firewall blocked suspicious traffic', severity: 'INFO' },
    { time: Date.now() - 5 * 60 * 1000, event: 'AI agent behavior analysis completed', severity: 'SUCCESS' },
    { time: Date.now() - 8 * 60 * 1000, event: 'Security scan initiated', severity: 'INFO' },
    { time: Date.now() - 12 * 60 * 1000, event: 'Threat intelligence updated', severity: 'SUCCESS' },
    { time: Date.now() - 15 * 60 * 1000, event: 'Vulnerability assessment completed', severity: 'INFO' }
  ]);

  const [realTimeMonitoring, setRealTimeMonitoring] = useState({
    activeMonitors: 15,
    alertsPerHour: 3.2,
    falsePositiveRate: 2.1,
    responseTime: '45ms',
    coveragePercentage: 99.7,
    monitoringStatus: 'OPTIMAL'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time security updates
      setSecurityMetrics(prev => ({
        ...prev,
        blockedAttacks: prev.blockedAttacks + Math.floor(Math.random() * 3),
        securityScore: Math.max(85, Math.min(99, prev.securityScore + (Math.random() - 0.5) * 1)),
        complianceScore: Math.max(95, Math.min(100, prev.complianceScore + (Math.random() - 0.5) * 0.5))
      }));

      // Add new security events occasionally
      if (Math.random() > 0.8) {
        const events = [
          'Security policy updated',
          'Network traffic analyzed',
          'AI model integrity verified',
          'Access control reviewed',
          'Threat signature updated',
          'Compliance check completed'
        ];
        
        const severities = ['INFO', 'SUCCESS', 'WARNING'];
        
        const newEvent = {
          time: Date.now(),
          event: events[Math.floor(Math.random() * events.length)],
          severity: severities[Math.floor(Math.random() * severities.length)]
        };
        
        setSecurityEvents(prev => [newEvent, ...prev.slice(0, 9)]);
      }

      // Update real-time monitoring metrics
      setRealTimeMonitoring(prev => ({
        ...prev,
        alertsPerHour: Math.max(0, Math.min(10, prev.alertsPerHour + (Math.random() - 0.5) * 0.5)),
        responseTime: Math.max(20, Math.min(100, parseInt(prev.responseTime) + (Math.random() - 0.5) * 5)) + 'ms',
        coveragePercentage: Math.max(95, Math.min(100, prev.coveragePercentage + (Math.random() - 0.5) * 0.2))
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'INFO': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE':
      case 'ENABLED':
      case 'SECURED':
      case 'COMPLIANT': return 'text-green-400';
      case 'INVESTIGATING':
      case 'MONITORING':
      case 'PENDING': return 'text-yellow-400';
      case 'BLOCKED':
      case 'MITIGATED': return 'text-blue-400';
      case 'CRITICAL':
      case 'FAILED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getThreatLevelColor = (level) => {
    switch (level) {
      case 'CRITICAL': return 'bg-red-500 animate-pulse';
      case 'HIGH': return 'bg-orange-500';
      case 'MEDIUM': return 'bg-yellow-500';
      case 'LOW': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🛡️ SECURITY OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border flex items-center space-x-2 ${
            securityMetrics.threatLevel === 'LOW' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
            securityMetrics.threatLevel === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
            securityMetrics.threatLevel === 'HIGH' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' :
            'bg-red-500/20 text-red-400 border-red-500/30'
          }`}>
            <div className={`w-2 h-2 rounded-full ${getThreatLevelColor(securityMetrics.threatLevel)}`}></div>
            <span>THREAT LEVEL: {securityMetrics.threatLevel}</span>
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Last scan: {formatTime(securityMetrics.lastScanTime)}
          </div>
        </div>
      </div>

      {/* Security Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-6 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SECURITY SCORE</div>
              <div className="text-2xl font-bold text-green-100">
                {securityMetrics.securityScore.toFixed(1)}%
              </div>
              <div className="text-xs text-green-300">Excellent rating</div>
            </div>
            <div className="text-3xl opacity-60">🛡️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-6 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">BLOCKED ATTACKS</div>
              <div className="text-2xl font-bold text-blue-100">
                {securityMetrics.blockedAttacks}
              </div>
              <div className="text-xs text-blue-300">Last 24 hours</div>
            </div>
            <div className="text-3xl opacity-60">🚫</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-6 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">AI RISKS</div>
              <div className="text-2xl font-bold text-purple-100">
                {securityMetrics.aiRiskFactors}
              </div>
              <div className="text-xs text-purple-300">Identified & mitigating</div>
            </div>
            <div className="text-3xl opacity-60">🤖</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 rounded-lg p-6 border border-cyan-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-cyan-200">COMPLIANCE</div>
              <div className="text-2xl font-bold text-cyan-100">
                {securityMetrics.complianceScore.toFixed(1)}%
              </div>
              <div className="text-xs text-cyan-300">GDPR, SOC, ISO27001</div>
            </div>
            <div className="text-3xl opacity-60">✅</div>
          </div>
        </div>
      </div>

      {/* Active Threats and AI Security Risks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Threat Intelligence */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎯 ACTIVE THREAT INTELLIGENCE
          </h3>
          <div className="space-y-3">
            {threatIntelligence.map((threat) => (
              <div key={threat.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{threat.type}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(threat.severity)}`}>
                      {threat.severity}
                    </span>
                  </div>
                  <span className={`text-xs font-mono ${getStatusColor(threat.status)}`}>
                    {threat.status}
                  </span>
                </div>
                <div className="text-xs text-gray-300 mb-2">{threat.description}</div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Source: <span className="text-cyan-400">{threat.source}</span></span>
                  <span className="text-gray-400">Target: <span className="text-purple-400">{threat.target}</span></span>
                  <span className="text-gray-500">{formatTime(threat.timestamp)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Security Risks */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🤖 AI SECURITY RISKS
          </h3>
          <div className="space-y-3">
            {aiSecurityRisks.map((risk) => (
              <div key={risk.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{risk.category}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(risk.severity)}`}>
                      {risk.severity}
                    </span>
                  </div>
                  <span className={`text-xs font-mono ${getStatusColor(risk.status)}`}>
                    {risk.status}
                  </span>
                </div>
                <div className="text-xs text-gray-300 mb-2">{risk.risk}</div>
                <div className="text-xs text-green-400 mb-2">Mitigation: {risk.mitigation}</div>
                <div className="text-xs text-gray-400">
                  Affected: <span className="text-purple-400">{risk.affectedAgents.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Network Security and Real-time Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Network Security Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌐 NETWORK SECURITY STATUS
          </h3>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Firewall</span>
                  <span className={`text-xs font-mono ${getStatusColor(networkSecurity.firewallStatus)}`}>
                    {networkSecurity.firewallStatus}
                  </span>
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">IDS/IPS</span>
                  <span className={`text-xs font-mono ${getStatusColor(networkSecurity.intrustionPrevention)}`}>
                    {networkSecurity.intrustionPrevention}
                  </span>
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">DDoS Protection</span>
                  <span className={`text-xs font-mono ${getStatusColor(networkSecurity.ddosProtection)}`}>
                    {networkSecurity.ddosProtection}
                  </span>
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">SSL/TLS</span>
                  <span className={`text-xs font-mono ${getStatusColor(networkSecurity.sslCertificates)}`}>
                    {networkSecurity.sslCertificates}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Blocked IPs</span>
                <span className="text-red-400 font-mono">{networkSecurity.blockedIPs}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Allowed Domains</span>
                <span className="text-green-400 font-mono">{networkSecurity.allowedDomains}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">VPN Connections</span>
                <span className="text-blue-400 font-mono">{networkSecurity.vpnConnections}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Encryption</span>
                <span className="text-purple-400 font-mono">{networkSecurity.encryptionStatus}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Security Monitoring */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📡 REAL-TIME MONITORING
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">Active Monitors</div>
                <div className="text-lg font-bold text-cyan-400">
                  {realTimeMonitoring.activeMonitors}
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">Coverage</div>
                <div className="text-lg font-bold text-green-400">
                  {realTimeMonitoring.coveragePercentage.toFixed(1)}%
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">Response Time</div>
                <div className="text-lg font-bold text-blue-400">
                  {realTimeMonitoring.responseTime}
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">Alerts/Hour</div>
                <div className="text-lg font-bold text-yellow-400">
                  {realTimeMonitoring.alertsPerHour.toFixed(1)}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-xs text-gray-400 mb-2">Vulnerability Summary</div>
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-red-500/20 text-red-400 text-center py-2 rounded text-xs">
                  Critical: {securityMetrics.vulnerabilities.critical}
                </div>
                <div className="bg-orange-500/20 text-orange-400 text-center py-2 rounded text-xs">
                  High: {securityMetrics.vulnerabilities.high}
                </div>
                <div className="bg-yellow-500/20 text-yellow-400 text-center py-2 rounded text-xs">
                  Medium: {securityMetrics.vulnerabilities.medium}
                </div>
                <div className="bg-green-500/20 text-green-400 text-center py-2 rounded text-xs">
                  Low: {securityMetrics.vulnerabilities.low}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Dashboard and Security Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Dashboard */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📋 COMPLIANCE DASHBOARD
          </h3>
          <div className="space-y-4">
            {[
              { name: 'GDPR Compliance', score: complianceStatus.gdprCompliance, color: 'blue' },
              { name: 'SOC Compliance', score: complianceStatus.socCompliance, color: 'green' },
              { name: 'ISO 27001', score: complianceStatus.iso27001, color: 'purple' },
              { name: 'AI Ethics Guidelines', score: complianceStatus.aiEthicsGuidelines, color: 'cyan' }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">{item.name}</span>
                  <span className={`text-sm font-bold text-${item.color}-400`}>
                    {item.score.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-${item.color}-400 h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
            
            <div className="mt-4 pt-4 border-t border-gray-600">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-gray-400">Data Retention</div>
                  <div className={`text-${getStatusColor(complianceStatus.dataRetentionPolicy).split('-')[1]}-400 font-mono`}>
                    {complianceStatus.dataRetentionPolicy}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Audit Trail</div>
                  <div className={`text-${getStatusColor(complianceStatus.auditTrail).split('-')[1]}-400 font-mono`}>
                    {complianceStatus.auditTrail}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Event Log */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📝 SECURITY EVENT LOG
          </h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {securityEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-3 text-sm">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  event.severity === 'SUCCESS' ? 'bg-green-400' :
                  event.severity === 'WARNING' ? 'bg-yellow-400' :
                  event.severity === 'ERROR' ? 'bg-red-400' :
                  'bg-blue-400'
                } animate-pulse`}></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-white">{event.event}</span>
                    <span className={`text-xs px-2 py-1 rounded ${getSeverityColor(event.severity)}`}>
                      {event.severity}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">{formatTime(event.time)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityOperationsCenter;