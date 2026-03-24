// Splunk Enterprise Security Dashboard - March 2026
// Advanced Security Information and Event Management (SIEM) dashboard inspired by Splunk for comprehensive security monitoring
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, RadialBarChart, RadialBar, PieChart, Pie, Cell, Treemap } from 'recharts';

export default function SplunkSecurityDashboard() {
  const [securityMetrics, setSecurityMetrics] = useState({
    totalEvents: 2456789,
    securityAlerts: 234,
    criticalThreats: 12,
    blockedAttacks: 45,
    riskScore: 7.3,
    complianceScore: 94.7,
    incidentsToday: 8,
    meanTimeToDetect: 4.2,
    meanTimeToResolve: 18.7,
    activeCorrelations: 156,
    falsePositiveRate: 8.4,
    threatIntelFeeds: 23
  });

  const [securityAlerts, setSecurityAlerts] = useState([
    {
      id: 'SEC-2026-001',
      severity: 'Critical',
      type: 'Malware Detection',
      source: 'aleksandra-ai-engine',
      description: 'Suspicious file execution detected in ML inference pipeline',
      timestamp: '05:48:15',
      status: 'Open',
      assignee: 'SOC Team',
      ttpMapping: ['T1055', 'T1059']
    },
    {
      id: 'SEC-2026-002',
      severity: 'High',
      type: 'Brute Force Attack',
      source: 'api-gateway',
      description: 'Multiple failed authentication attempts from 192.168.1.100',
      timestamp: '05:47:30',
      status: 'Investigating',
      assignee: 'Daniel F.',
      ttpMapping: ['T1110']
    },
    {
      id: 'SEC-2026-003',
      severity: 'Medium',
      type: 'Data Exfiltration',
      source: 'content-processor',
      description: 'Large volume data transfer to external endpoint detected',
      timestamp: '05:46:45',
      status: 'Acknowledged',
      assignee: 'Aleksandra AI',
      ttpMapping: ['T1041', 'T1020']
    },
    {
      id: 'SEC-2026-004',
      severity: 'Low',
      type: 'Privilege Escalation',
      source: 'transcription-service',
      description: 'User privilege modification outside business hours',
      timestamp: '05:45:20',
      status: 'Resolved',
      assignee: 'Auto-Response',
      ttpMapping: ['T1548']
    },
    {
      id: 'SEC-2026-005',
      severity: 'High',
      type: 'Lateral Movement',
      source: 'instagram-analyzer',
      description: 'Abnormal network connections to internal services',
      timestamp: '05:44:10',
      status: 'Open',
      assignee: 'SOC Team',
      ttpMapping: ['T1021', 'T1570']
    }
  ]);

  const [threatIntelligence, setThreatIntelligence] = useState([
    {
      indicator: '185.220.101.42',
      type: 'IP Address',
      threatType: 'Command & Control',
      confidence: 95,
      source: 'Threat Feed Alpha',
      lastSeen: '05:48:00',
      campaigns: ['APT29', 'Cozy Bear'],
      malwareFamily: 'Cobalt Strike'
    },
    {
      indicator: 'malicious-domain.evil',
      type: 'Domain',
      threatType: 'Phishing',
      confidence: 87,
      source: 'Internal Analysis',
      lastSeen: '05:47:15',
      campaigns: ['Business Email Compromise'],
      malwareFamily: 'Unknown'
    },
    {
      indicator: 'e3b0c44298fc1c149afbf4c8996fb924',
      type: 'File Hash',
      threatType: 'Trojan',
      confidence: 92,
      source: 'VirusTotal',
      lastSeen: '05:46:30',
      campaigns: ['Emotet'],
      malwareFamily: 'Emotet Loader'
    },
    {
      indicator: 'admin@fake-aleksandra.com',
      type: 'Email',
      threatType: 'Spear Phishing',
      confidence: 78,
      source: 'OSINT',
      lastSeen: '05:45:45',
      campaigns: ['Targeted Attack'],
      malwareFamily: 'Social Engineering'
    }
  ]);

  const [assetInventory, setAssetInventory] = useState([
    {
      asset: 'aleksandra-ai-engine',
      category: 'Application Server',
      criticality: 'Critical',
      vulnerabilities: 3,
      lastScan: '05:30:00',
      complianceStatus: 'Compliant',
      riskScore: 8.2,
      patchLevel: 'Current'
    },
    {
      asset: 'content-processor',
      category: 'Data Processing',
      criticality: 'High',
      vulnerabilities: 7,
      lastScan: '05:25:00',
      complianceStatus: 'Non-Compliant',
      riskScore: 6.5,
      patchLevel: 'Behind'
    },
    {
      asset: 'api-gateway',
      category: 'Network Infrastructure',
      criticality: 'Critical',
      vulnerabilities: 1,
      lastScan: '05:40:00',
      complianceStatus: 'Compliant',
      riskScore: 3.2,
      patchLevel: 'Current'
    },
    {
      asset: 'database-server',
      category: 'Data Storage',
      criticality: 'Critical',
      vulnerabilities: 5,
      lastScan: '05:35:00',
      complianceStatus: 'Partial',
      riskScore: 7.8,
      patchLevel: 'Current'
    },
    {
      asset: 'transcription-service',
      category: 'External Service',
      criticality: 'Medium',
      vulnerabilities: 2,
      lastScan: '05:20:00',
      complianceStatus: 'Compliant',
      riskScore: 4.1,
      patchLevel: 'Current'
    }
  ]);

  const [incidentTimeline, setIncidentTimeline] = useState([
    { time: '05:48', incidents: 8, resolved: 5, critical: 1, high: 2, medium: 3, low: 2 },
    { time: '05:47', incidents: 12, resolved: 8, critical: 2, high: 3, medium: 4, low: 3 },
    { time: '05:46', incidents: 15, resolved: 11, critical: 1, high: 4, medium: 6, low: 4 },
    { time: '05:45', incidents: 9, resolved: 7, critical: 0, high: 2, medium: 4, low: 3 },
    { time: '05:44', incidents: 18, resolved: 14, critical: 3, high: 5, medium: 6, low: 4 }
  ]);

  const [complianceFrameworks, setComplianceFrameworks] = useState([
    { framework: 'SOC 2 Type II', compliance: 96.8, controls: 187, failures: 6, lastAudit: '2026-02-15' },
    { framework: 'ISO 27001', compliance: 94.2, controls: 114, failures: 8, lastAudit: '2026-01-30' },
    { framework: 'GDPR', compliance: 98.1, controls: 45, failures: 1, lastAudit: '2026-02-28' },
    { framework: 'NIST Cybersecurity', compliance: 92.5, controls: 98, failures: 12, lastAudit: '2026-02-20' },
    { framework: 'PCI DSS', compliance: 89.7, controls: 78, failures: 15, lastAudit: '2026-01-15' }
  ]);

  const [mitreAttackMatrix, setMitreAttackMatrix] = useState([
    { tactic: 'Initial Access', techniques: 9, detected: 7, coverage: 77.8, alerts: 23 },
    { tactic: 'Execution', techniques: 13, detected: 11, coverage: 84.6, alerts: 45 },
    { tactic: 'Persistence', techniques: 19, detected: 15, coverage: 78.9, alerts: 34 },
    { tactic: 'Privilege Escalation', techniques: 13, detected: 10, coverage: 76.9, alerts: 12 },
    { tactic: 'Defense Evasion', techniques: 40, detected: 28, coverage: 70.0, alerts: 67 },
    { tactic: 'Credential Access', techniques: 15, detected: 12, coverage: 80.0, alerts: 28 },
    { tactic: 'Discovery', techniques: 29, detected: 22, coverage: 75.9, alerts: 19 },
    { tactic: 'Lateral Movement', techniques: 9, detected: 8, coverage: 88.9, alerts: 15 },
    { tactic: 'Collection', techniques: 17, detected: 14, coverage: 82.4, alerts: 8 },
    { tactic: 'Exfiltration', techniques: 9, detected: 7, coverage: 77.8, alerts: 5 },
    { tactic: 'Command and Control', techniques: 16, detected: 13, coverage: 81.3, alerts: 32 },
    { tactic: 'Impact', techniques: 13, detected: 11, coverage: 84.6, alerts: 6 }
  ]);

  const [userBehaviorAnalytics, setUserBehaviorAnalytics] = useState([
    { user: 'daniel@aleksandra.ai', riskScore: 2.3, anomalies: 1, lastLogin: '05:47:30', location: 'Lisbon, PT', devices: 3 },
    { user: 'admin@system.local', riskScore: 8.7, anomalies: 5, lastLogin: '05:45:20', location: 'Unknown', devices: 1 },
    { user: 'api-service@aleksandra.ai', riskScore: 1.2, anomalies: 0, lastLogin: '05:48:00', location: 'AWS-EU-West-1', devices: 1 },
    { user: 'backup@system.local', riskScore: 6.4, anomalies: 3, lastLogin: '05:30:15', location: 'Data Center', devices: 1 },
    { user: 'monitoring@aleksandra.ai', riskScore: 1.8, anomalies: 0, lastLogin: '05:47:55', location: 'Vercel-US', devices: 2 }
  ]);

  const [securityTimeline, setSecurityTimeline] = useState([
    { time: '05:48', events: 12456, threats: 23, blocked: 18, investigated: 5, riskScore: 7.3 },
    { time: '05:47', events: 11789, threats: 19, blocked: 15, investigated: 4, riskScore: 6.8 },
    { time: '05:46', events: 13245, threats: 28, blocked: 22, investigated: 6, riskScore: 8.1 },
    { time: '05:45', events: 10567, threats: 15, blocked: 12, investigated: 3, riskScore: 5.9 },
    { time: '05:44', events: 14678, threats: 34, blocked: 28, investigated: 6, riskScore: 9.2 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update security metrics
      setSecurityMetrics(prev => ({
        ...prev,
        totalEvents: prev.totalEvents + Math.floor(Math.random() * 5000) + 2000,
        securityAlerts: prev.securityAlerts + Math.floor(Math.random() * 10) + 2,
        criticalThreats: Math.max(0, prev.criticalThreats + Math.floor((Math.random() - 0.7) * 3)),
        blockedAttacks: prev.blockedAttacks + Math.floor(Math.random() * 8) + 1,
        riskScore: Math.max(1, Math.min(10, prev.riskScore + (Math.random() - 0.5) * 0.8)),
        complianceScore: Math.max(85, Math.min(100, prev.complianceScore + (Math.random() - 0.5) * 1)),
        incidentsToday: prev.incidentsToday + Math.floor(Math.random() * 3),
        meanTimeToDetect: Math.max(1, Math.min(30, prev.meanTimeToDetect + (Math.random() - 0.5) * 2)),
        meanTimeToResolve: Math.max(5, Math.min(60, prev.meanTimeToResolve + (Math.random() - 0.5) * 5)),
        activeCorrelations: Math.max(50, prev.activeCorrelations + Math.floor((Math.random() - 0.5) * 20)),
        falsePositiveRate: Math.max(2, Math.min(15, prev.falsePositiveRate + (Math.random() - 0.5) * 1))
      }));

      // Update security timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setSecurityTimeline(prev => {
        const newData = {
          time: currentTime,
          events: Math.floor(Math.random() * 5000) + 10000,
          threats: Math.floor(Math.random() * 20) + 10,
          blocked: Math.floor(Math.random() * 15) + 8,
          investigated: Math.floor(Math.random() * 8) + 2,
          riskScore: Math.max(1, Math.min(10, prev[prev.length - 1]?.riskScore + (Math.random() - 0.5) * 0.8)) || 7.3
        };
        
        return [...prev.slice(-19), newData]; // Keep last 20 points
      });

      // Update incident timeline
      setIncidentTimeline(prev => {
        const newIncidentData = {
          time: currentTime,
          incidents: Math.floor(Math.random() * 15) + 5,
          resolved: Math.floor(Math.random() * 12) + 3,
          critical: Math.floor(Math.random() * 3),
          high: Math.floor(Math.random() * 5) + 1,
          medium: Math.floor(Math.random() * 6) + 2,
          low: Math.floor(Math.random() * 4) + 1
        };
        
        return [...prev.slice(-19), newIncidentData]; // Keep last 20 points
      });

      // Update asset risk scores
      setAssetInventory(prev => prev.map(asset => ({
        ...asset,
        riskScore: Math.max(1, Math.min(10, asset.riskScore + (Math.random() - 0.5) * 0.5)),
        vulnerabilities: Math.max(0, asset.vulnerabilities + Math.floor((Math.random() - 0.8) * 2))
      })));

      // Update user behavior analytics
      setUserBehaviorAnalytics(prev => prev.map(user => ({
        ...user,
        riskScore: Math.max(0, Math.min(10, user.riskScore + (Math.random() - 0.5) * 0.3)),
        anomalies: Math.max(0, user.anomalies + Math.floor((Math.random() - 0.9) * 2))
      })));
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'critical': return 'text-red-500';
      case 'high': return 'text-orange-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'open': return 'text-red-400';
      case 'investigating': return 'text-yellow-400';
      case 'acknowledged': return 'text-blue-400';
      case 'resolved': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getRiskScoreColor = (score) => {
    if (score >= 8) return 'text-red-500';
    if (score >= 6) return 'text-orange-500';
    if (score >= 4) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getComplianceColor = (percentage) => {
    if (percentage >= 95) return 'text-green-400';
    if (percentage >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCriticalityColor = (level) => {
    switch(level.toLowerCase()) {
      case 'critical': return 'text-red-400';
      case 'high': return 'text-orange-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-gray-900 to-red-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Splunk Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🛡️ Splunk Enterprise Security Dashboard
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>EVENTS: <span className="text-orange-400 font-mono">{(securityMetrics.totalEvents / 1000).toFixed(1)}K</span></div>
                <div>ALERTS: <span className="text-red-400">{securityMetrics.securityAlerts}</span></div>
                <div>CRITICAL: <span className="text-red-500 font-bold">{securityMetrics.criticalThreats}</span></div>
                <div>BLOCKED: <span className="text-green-400">{securityMetrics.blockedAttacks}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${getRiskScoreColor(securityMetrics.riskScore)}`}>{securityMetrics.riskScore.toFixed(1)}</div>
              <div className="text-sm text-gray-300">Risk Score</div>
              <div className="text-xs text-orange-300">MTTR: {securityMetrics.meanTimeToResolve.toFixed(1)}min</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Security Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">MTTR</span>
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-1">{securityMetrics.meanTimeToResolve.toFixed(1)}min</div>
            <div className="text-xs text-gray-400">Mean time to resolve</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Compliance</span>
              <span className="text-2xl">✅</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{securityMetrics.complianceScore.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Overall compliance</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Incidents</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{securityMetrics.incidentsToday}</div>
            <div className="text-xs text-gray-400">Today's incidents</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Correlations</span>
              <span className="text-2xl">🔗</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{securityMetrics.activeCorrelations}</div>
            <div className="text-xs text-gray-400">Active rules</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Security Events Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Security Events Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={securityTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#f97316" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#f97316" />
                <YAxis yAxisId="right" orientation="right" stroke="#f97316" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #f97316' }}
                  labelStyle={{ color: '#f97316' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="events" fill="#f97316" fillOpacity={0.3} stroke="#f97316" name="Events" />
                <Bar yAxisId="right" dataKey="threats" fill="#ef4444" name="Threats" />
                <Line yAxisId="right" type="monotone" dataKey="blocked" stroke="#22c55e" strokeWidth={2} name="Blocked" />
                <Line yAxisId="right" type="monotone" dataKey="riskScore" stroke="#8b5cf6" strokeWidth={3} name="Risk Score" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Incident Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Incident Severity Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={incidentTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#f97316" tick={{ fontSize: 10 }} />
                <YAxis stroke="#f97316" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #f97316' }}
                  labelStyle={{ color: '#f97316' }}
                />
                <Legend />
                <Area type="monotone" dataKey="critical" stackId="1" stroke="#dc2626" fill="#dc2626" name="Critical" />
                <Area type="monotone" dataKey="high" stackId="1" stroke="#f59e0b" fill="#f59e0b" name="High" />
                <Area type="monotone" dataKey="medium" stackId="1" stroke="#eab308" fill="#eab308" name="Medium" />
                <Area type="monotone" dataKey="low" stackId="1" stroke="#22c55e" fill="#22c55e" name="Low" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Active Security Alerts */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Active Security Alerts
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {securityAlerts.map((alert, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{alert.id}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(alert.severity)}`}>{alert.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{alert.type}</div>
                  <div className="text-xs text-orange-300 mb-1">{alert.source}</div>
                  <div className="text-xs text-gray-300 mb-2">{alert.description}</div>
                  <div className="flex justify-between items-center text-xs">
                    <span className={getStatusColor(alert.status)}>{alert.status}</span>
                    <span className="text-gray-400">{alert.timestamp}</span>
                  </div>
                  <div className="text-xs text-purple-300 mt-1">MITRE: {alert.ttpMapping.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Threat Intelligence */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🎯 Threat Intelligence
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {threatIntelligence.map((intel, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{intel.indicator}</span>
                    <span className="text-xs text-orange-400">{intel.confidence}% conf</span>
                  </div>
                  <div className="text-xs text-orange-300 mb-1">{intel.type} • {intel.threatType}</div>
                  <div className="text-xs text-gray-300 mb-1">{intel.source}</div>
                  <div className="text-xs text-purple-300">Campaign: {intel.campaigns.join(', ')}</div>
                  <div className="text-xs text-red-300">Family: {intel.malwareFamily}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Asset Inventory & Risk */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🏗️ Asset Risk Assessment
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {assetInventory.map((asset, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{asset.asset}</span>
                    <span className={`text-xs ${getCriticalityColor(asset.criticality)}`}>{asset.criticality}</span>
                  </div>
                  <div className="text-xs text-orange-300 mb-1">{asset.category}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className={getRiskScoreColor(asset.riskScore)}>Risk: {asset.riskScore.toFixed(1)}</div>
                    <div className="text-red-400">Vulns: {asset.vulnerabilities}</div>
                    <div className={getComplianceColor(asset.complianceStatus === 'Compliant' ? 95 : 75)}>{asset.complianceStatus}</div>
                    <div className="text-blue-400">{asset.patchLevel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MITRE ATT&CK Coverage */}
        <div className="bg-gray-800 rounded-xl p-6 border border-orange-500 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            ⚔️ MITRE ATT&CK Coverage Matrix
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {mitreAttackMatrix.map((tactic, index) => (
              <div key={index} className="p-3 bg-gray-700 rounded-lg">
                <div className="text-sm font-bold text-white mb-2">{tactic.tactic}</div>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="text-orange-400">{tactic.techniques} techniques</div>
                  <div className="text-green-400">{tactic.detected} detected</div>
                  <div className={`${tactic.coverage >= 80 ? 'text-green-400' : tactic.coverage >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {tactic.coverage.toFixed(1)}% coverage
                  </div>
                  <div className="text-red-400">{tactic.alerts} alerts</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Compliance Frameworks */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📋 Compliance Framework Status
            </h3>
            <div className="space-y-3">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-white">{framework.framework}</span>
                    <span className={`text-sm font-bold ${getComplianceColor(framework.compliance)}`}>
                      {framework.compliance.toFixed(1)}%
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-blue-400">{framework.controls} controls</div>
                    <div className="text-red-400">{framework.failures} failures</div>
                    <div className="text-gray-400">Last: {framework.lastAudit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Behavior Analytics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              👤 User Behavior Analytics
            </h3>
            <div className="space-y-3">
              {userBehaviorAnalytics.map((user, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{user.user}</span>
                    <span className={`text-sm font-bold ${getRiskScoreColor(user.riskScore)}`}>
                      {user.riskScore.toFixed(1)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="text-red-400">{user.anomalies} anomalies</div>
                    <div className="text-blue-400">{user.devices} devices</div>
                    <div className="text-gray-300 truncate">{user.location}</div>
                    <div className="text-gray-400">{user.lastLogin}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            SPLUNK ENTERPRISE SECURITY | ALEKSANDRA AI SIEM | SECURITY INFORMATION & EVENT MANAGEMENT
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Threat Intelligence | Incident Response | MITRE ATT&CK | Compliance Monitoring | SIEM Analytics | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}