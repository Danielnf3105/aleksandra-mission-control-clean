import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Eye, Zap, Target, Users, Lock, Wifi, Server, Database, Globe, TrendingUp, Activity, Clock } from 'lucide-react';

const CyberSecuritySOC = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [socStatus, setSocStatus] = useState({
    alertLevel: 'MODERATE',
    incidents: { active: 7, resolved: 234, total: 241 },
    threats: { blocked: 1247, investigating: 12, confirmed: 3 },
    coverage: { endpoints: 2847, networks: 23, servers: 156, applications: 89 },
    analysts: { total: 18, available: 14, responding: 4 }
  });

  const [securityAlerts, setSecurityAlerts] = useState([
    {
      id: 'ALT-2024-001247',
      severity: 'CRITICAL',
      type: 'MALWARE DETECTED',
      source: 'Endpoint Protection',
      target: 'WS-FINANCE-047',
      description: 'Advanced persistent threat detected - Possible data exfiltration attempt',
      timestamp: '21:34:23',
      status: 'INVESTIGATING',
      analyst: 'SOC-ANALYST-3',
      indicators: ['suspicious_network_traffic', 'unknown_process', 'registry_modification']
    },
    {
      id: 'ALT-2024-001246',
      severity: 'HIGH',
      type: 'BRUTE FORCE ATTACK',
      source: 'Authentication System',
      target: 'VPN Gateway',
      description: 'Multiple failed login attempts from 185.92.45.67',
      timestamp: '21:31:45',
      status: 'BLOCKED',
      analyst: 'SOC-ANALYST-1',
      indicators: ['failed_authentication', 'suspicious_ip', 'rate_limiting_triggered']
    },
    {
      id: 'ALT-2024-001245',
      severity: 'HIGH',
      type: 'DATA LEAK ATTEMPT',
      source: 'DLP System',
      target: 'Email Gateway',
      description: 'Attempt to send classified documents via external email',
      timestamp: '21:28:12',
      status: 'CONTAINED',
      analyst: 'SOC-ANALYST-2',
      indicators: ['data_classification_violation', 'email_attachment_blocked', 'policy_violation']
    },
    {
      id: 'ALT-2024-001244',
      severity: 'MEDIUM',
      type: 'PHISHING ATTEMPT',
      source: 'Email Security',
      target: 'user@company.com',
      description: 'Suspicious email with malicious attachment quarantined',
      timestamp: '21:25:33',
      status: 'QUARANTINED',
      analyst: 'SOC-ANALYST-4',
      indicators: ['suspicious_attachment', 'phishing_indicators', 'quarantine_successful']
    }
  ]);

  const [threatIntelligence, setThreatIntelligence] = useState([
    { feed: 'MITRE ATT&CK', threats: 47, updated: '21:30:00', status: 'ACTIVE' },
    { feed: 'Cyber Threat Intelligence', threats: 234, updated: '21:28:45', status: 'ACTIVE' },
    { feed: 'IOC Database', threats: 1847, updated: '21:32:15', status: 'ACTIVE' },
    { feed: 'Dark Web Monitoring', threats: 12, updated: '21:25:30', status: 'ACTIVE' }
  ]);

  const [networkSecurity, setNetworkSecurity] = useState({
    firewall: { status: 'OPERATIONAL', blocked: 847, allowed: 234567, rules: 1247 },
    ids: { status: 'OPERATIONAL', detections: 23, false_positives: 8, accuracy: '94.2%' },
    vpn: { status: 'OPERATIONAL', connections: 234, failed_attempts: 47, bandwidth: '78%' },
    dns: { status: 'OPERATIONAL', queries: 1847293, blocked_domains: 1247, reputation_score: '98.5%' }
  });

  const [endpointSecurity, setEndpointSecurity] = useState({
    antivirus: { protected: 2847, threats_blocked: 234, definitions: 'CURRENT', last_update: '21:30:00' },
    edr: { agents: 2847, active: 2831, disconnected: 16, alerts: 12 },
    patch_status: { critical: 23, high: 89, medium: 234, low: 567, compliant: '87.3%' },
    device_compliance: { compliant: 2456, non_compliant: 391, total: 2847, percentage: '86.3%' }
  });

  const [incidentResponse, setIncidentResponse] = useState([
    {
      id: 'INC-2024-0089',
      title: 'Advanced Persistent Threat Investigation',
      severity: 'CRITICAL',
      status: 'ACTIVE',
      assignee: 'IR Team Alpha',
      timeline: '45 mins',
      phase: 'CONTAINMENT',
      affected_systems: 12
    },
    {
      id: 'INC-2024-0088',
      title: 'Phishing Campaign Analysis',
      severity: 'HIGH',
      status: 'ANALYZING',
      assignee: 'IR Team Beta',
      timeline: '2.3 hours',
      phase: 'INVESTIGATION',
      affected_systems: 3
    },
    {
      id: 'INC-2024-0087',
      title: 'Insider Threat Investigation',
      severity: 'MEDIUM',
      status: 'MONITORING',
      assignee: 'IR Team Gamma',
      timeline: '8 hours',
      phase: 'EVIDENCE_COLLECTION',
      affected_systems: 1
    }
  ]);

  const [killChainAnalysis, setKillChainAnalysis] = useState({
    reconnaissance: { attacks: 23, blocked: 21, success_rate: '8.7%' },
    weaponization: { samples: 45, analyzed: 43, malware_families: 12 },
    delivery: { attempts: 234, blocked: 198, delivery_vectors: ['email', 'web', 'usb'] },
    exploitation: { attempts: 67, blocked: 59, cve_exploited: ['CVE-2024-1234', 'CVE-2024-5678'] },
    installation: { attempts: 12, blocked: 10, persistence_mechanisms: 3 },
    command_control: { connections: 8, blocked: 6, c2_domains: ['evil.com', 'malicious.net'] },
    actions_objectives: { attempts: 3, blocked: 3, data_accessed: 'NONE' }
  });

  const [vulnerabilityManagement, setVulnerabilityManagement] = useState({
    total_vulnerabilities: 2847,
    critical: 45,
    high: 234,
    medium: 847,
    low: 1721,
    patched_this_month: 1234,
    mean_time_to_patch: '4.2 days',
    compliance_score: '94.7%'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());

      // Update SOC status
      setSocStatus(prev => ({
        ...prev,
        threats: {
          ...prev.threats,
          blocked: prev.threats.blocked + Math.floor(Math.random() * 3),
          investigating: Math.max(5, Math.min(20, prev.threats.investigating + (Math.random() - 0.5) * 2))
        }
      }));

      // Simulate new security alerts
      if (Math.random() > 0.92) {
        const alertTypes = [
          { severity: 'HIGH', type: 'UNAUTHORIZED ACCESS', source: 'Identity Management' },
          { severity: 'MEDIUM', type: 'SUSPICIOUS BEHAVIOR', source: 'User Analytics' },
          { severity: 'LOW', type: 'POLICY VIOLATION', source: 'Compliance System' },
          { severity: 'CRITICAL', type: 'RANSOMWARE DETECTED', source: 'Endpoint Protection' }
        ];

        const newAlert = alertTypes[Math.floor(Math.random() * alertTypes.length)];
        const alertId = `ALT-2024-${String(Date.now()).slice(-6)}`;

        setSecurityAlerts(prev => [
          {
            id: alertId,
            ...newAlert,
            target: `System-${Math.floor(Math.random() * 999)}`,
            description: 'Automated threat detection requires investigation',
            timestamp: new Date().toLocaleTimeString(),
            status: 'NEW',
            analyst: 'AUTO-ASSIGNED',
            indicators: ['automated_detection', 'requires_analysis']
          },
          ...prev.slice(0, 19)
        ]);
      }

      // Update network security stats
      setNetworkSecurity(prev => ({
        ...prev,
        firewall: {
          ...prev.firewall,
          blocked: prev.firewall.blocked + Math.floor(Math.random() * 5),
          allowed: prev.firewall.allowed + Math.floor(Math.random() * 100)
        },
        ids: {
          ...prev.ids,
          detections: Math.max(15, Math.min(35, prev.ids.detections + (Math.random() - 0.5) * 2))
        }
      }));

      // Update threat intelligence feeds
      setThreatIntelligence(prev => prev.map(feed => ({
        ...feed,
        threats: feed.threats + (Math.random() > 0.8 ? Math.floor(Math.random() * 3) : 0),
        updated: Math.random() > 0.9 ? new Date().toLocaleTimeString() : feed.updated
      })));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity) => {
    switch (severity.toUpperCase()) {
      case 'CRITICAL': return 'text-red-400 bg-red-900/30 border-red-500';
      case 'HIGH': return 'text-orange-400 bg-orange-900/30 border-orange-500';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500';
      case 'LOW': return 'text-green-400 bg-green-900/30 border-green-500';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status.toUpperCase()) {
      case 'OPERATIONAL':
      case 'ACTIVE':
      case 'BLOCKED':
      case 'CONTAINED': return 'text-green-400';
      case 'INVESTIGATING':
      case 'ANALYZING':
      case 'MONITORING': return 'text-yellow-400';
      case 'CRITICAL':
      case 'NEW': return 'text-red-400';
      case 'QUARANTINED': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getAlertLevelColor = (level) => {
    switch (level.toUpperCase()) {
      case 'LOW': return 'text-green-400';
      case 'MODERATE': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-black text-white p-6 font-mono">
      <div className="mb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-cyan-400">CYBERSECURITY SECURITY OPERATIONS CENTER</h1>
          <div className="flex items-center text-sm text-gray-400">
            <span className="mr-4">SOC STATUS: OPERATIONAL</span>
            <span className="mr-4">COVERAGE: 24/7</span>
            <span>{new Date(timestamp).toLocaleTimeString()} UTC</span>
          </div>
        </div>

        {/* SOC Status Strip */}
        <div className="bg-blue-900/30 border border-blue-500 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="w-6 h-6 text-blue-400 mr-3" />
              <div>
                <span className="text-blue-400 font-bold text-lg">SECURITY OPERATIONS CENTER</span>
                <div className={`text-sm font-bold ${getAlertLevelColor(socStatus.alertLevel)}`}>
                  THREAT LEVEL: {socStatus.alertLevel}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-gray-400">ACTIVE INCIDENTS</div>
                <div className="text-red-400 font-bold text-xl">{socStatus.incidents.active}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">THREATS BLOCKED</div>
                <div className="text-green-400 font-bold text-xl">{socStatus.threats.blocked}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">ENDPOINTS PROTECTED</div>
                <div className="text-cyan-400 font-bold text-xl">{socStatus.coverage.endpoints}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">ANALYSTS ON DUTY</div>
                <div className="text-yellow-400 font-bold text-xl">{socStatus.analysts.available}/{socStatus.analysts.total}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Security Grid */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Security Alerts */}
          <div className="col-span-2 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                REAL-TIME SECURITY ALERTS
              </h3>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              {securityAlerts.map((alert) => (
                <div key={alert.id} className={`mb-4 p-4 rounded border ${getSeverityColor(alert.severity)}`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-bold text-white text-lg">{alert.type}</div>
                      <div className="text-blue-400 font-mono text-sm">{alert.id}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{alert.severity}</div>
                      <div className={`text-sm ${getStatusColor(alert.status)}`}>{alert.status}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <div className="text-gray-400 text-xs">SOURCE:</div>
                      <div className="text-white text-sm">{alert.source}</div>
                      <div className="text-gray-400 text-xs">TARGET:</div>
                      <div className="text-cyan-400 text-sm">{alert.target}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs">ANALYST:</div>
                      <div className="text-yellow-400 text-sm">{alert.analyst}</div>
                      <div className="text-gray-400 text-xs">TIME:</div>
                      <div className="text-white text-sm">{alert.timestamp}</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-gray-400 text-xs">DESCRIPTION:</div>
                    <div className="text-gray-300 text-sm">{alert.description}</div>
                  </div>

                  <div className="flex space-x-2">
                    {alert.indicators.map((indicator, index) => (
                      <span key={index} className="bg-purple-900 text-purple-300 px-2 py-1 rounded text-xs">
                        {indicator}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Threat Intelligence */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Eye className="w-5 h-5 mr-2 text-purple-400" />
                THREAT INTELLIGENCE
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {threatIntelligence.map((feed, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-cyan-400 font-bold text-sm">{feed.feed}</span>
                    <span className={`text-xs ${getStatusColor(feed.status)}`}>{feed.status}</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Threats:</span>
                      <span className="text-red-400 font-bold">{feed.threats}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Updated:</span>
                      <span className="text-green-400">{feed.updated}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Kill Chain Analysis */}
              <div className="mt-6">
                <h4 className="text-yellow-400 font-bold mb-3">MITRE ATT&CK KILL CHAIN</h4>
                <div className="space-y-2">
                  {Object.entries(killChainAnalysis).map(([phase, data]) => (
                    <div key={phase} className="bg-gray-800 p-2 rounded">
                      <div className="text-cyan-400 text-xs font-bold capitalize mb-1">
                        {phase.replace('_', ' ')}
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Attempts:</span>
                        <span className="text-orange-400">{data.attacks || data.attempts || data.samples || data.connections}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Blocked:</span>
                        <span className="text-green-400">{data.blocked || data.analyzed || 'N/A'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Network & Endpoint Security Grid */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Network Security */}
          <div className="col-span-2 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Wifi className="w-5 h-5 mr-2 text-green-400" />
                NETWORK SECURITY STATUS
              </h3>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4">
              {Object.entries(networkSecurity).map(([system, data]) => (
                <div key={system} className="bg-gray-800 p-3 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-cyan-400 font-bold uppercase text-sm">{system.replace('_', ' ')}</span>
                    <span className={`text-xs ${getStatusColor(data.status)}`}>{data.status}</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    {Object.entries(data).filter(([key]) => key !== 'status').map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-400 capitalize">{key.replace('_', ' ')}:</span>
                        <span className="text-white">{typeof value === 'number' ? value.toLocaleString() : value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Endpoint Security */}
          <div className="col-span-2 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Lock className="w-5 h-5 mr-2 text-blue-400" />
                ENDPOINT SECURITY STATUS
              </h3>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4">
              {Object.entries(endpointSecurity).map(([system, data]) => (
                <div key={system} className="bg-gray-800 p-3 rounded">
                  <div className="text-cyan-400 font-bold uppercase text-sm mb-2">
                    {system.replace('_', ' ')}
                  </div>
                  <div className="space-y-1 text-xs">
                    {Object.entries(data).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-400 capitalize">{key.replace('_', ' ')}:</span>
                        <span className={`${key.includes('compliant') || key.includes('percentage') ? 
                          'text-green-400' : 'text-white'}`}>
                          {typeof value === 'number' ? value.toLocaleString() : value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Incident Response & Vulnerability Management */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Incident Response */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Target className="w-5 h-5 mr-2 text-orange-400" />
                ACTIVE INCIDENT RESPONSE
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {incidentResponse.map((incident) => (
                <div key={incident.id} className={`p-3 rounded border ${getSeverityColor(incident.severity)}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm">{incident.id}</span>
                    <span className={`text-xs ${getStatusColor(incident.status)}`}>{incident.status}</span>
                  </div>
                  <div className="text-sm font-bold mb-2">{incident.title}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Assignee:</span>
                      <span className="text-cyan-400">{incident.assignee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Timeline:</span>
                      <span className="text-yellow-400">{incident.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Phase:</span>
                      <span className="text-green-400">{incident.phase}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Systems:</span>
                      <span className="text-red-400">{incident.affected_systems}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vulnerability Management */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Database className="w-5 h-5 mr-2 text-purple-400" />
                VULNERABILITY MANAGEMENT
              </h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-red-900/30 p-3 rounded text-center">
                  <div className="text-red-400 text-xs">CRITICAL</div>
                  <div className="text-white font-bold text-2xl">{vulnerabilityManagement.critical}</div>
                </div>
                <div className="bg-orange-900/30 p-3 rounded text-center">
                  <div className="text-orange-400 text-xs">HIGH</div>
                  <div className="text-white font-bold text-2xl">{vulnerabilityManagement.high}</div>
                </div>
                <div className="bg-yellow-900/30 p-3 rounded text-center">
                  <div className="text-yellow-400 text-xs">MEDIUM</div>
                  <div className="text-white font-bold text-2xl">{vulnerabilityManagement.medium}</div>
                </div>
                <div className="bg-green-900/30 p-3 rounded text-center">
                  <div className="text-green-400 text-xs">LOW</div>
                  <div className="text-white font-bold text-2xl">{vulnerabilityManagement.low}</div>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Vulnerabilities:</span>
                  <span className="text-white">{vulnerabilityManagement.total_vulnerabilities}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Patched This Month:</span>
                  <span className="text-green-400">{vulnerabilityManagement.patched_this_month}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mean Time to Patch:</span>
                  <span className="text-yellow-400">{vulnerabilityManagement.mean_time_to_patch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Compliance Score:</span>
                  <span className="text-cyan-400">{vulnerabilityManagement.compliance_score}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecuritySOC;