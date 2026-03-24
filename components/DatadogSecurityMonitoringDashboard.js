// Datadog Security Monitoring Dashboard - March 2026
// Comprehensive Datadog Security-inspired SIEM and threat detection dashboard for security operations and incident response
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart, Treemap, RadialBarChart, RadialBar, Sankey } from 'recharts';

export default function DatadogSecurityMonitoringDashboard() {
  const [securityMetrics, setSecurityMetrics] = useState({
    totalLogs: 12847593,
    securityEvents: 45678,
    threatsDetected: 234,
    criticalThreats: 12,
    blockedAttacks: 567,
    investigationsActive: 18,
    incidentsOpen: 8,
    complianceScore: 94.7,
    riskScore: 23.4,
    mitigatedThreats: 189,
    falsePositives: 34,
    meanTimeToDetection: 4.2
  });

  const [threatIntelligence, setThreatIntelligence] = useState([
    {
      threatId: 'THR-2026-7890',
      type: 'Malware',
      severity: 'critical',
      source: 'External',
      targetAsset: 'aleksandra-web-server-01',
      technique: 'T1055 - Process Injection',
      status: 'active',
      firstSeen: '20:05:30',
      lastSeen: '20:07:15',
      attempts: 23,
      blocked: 21,
      successful: 2,
      confidence: 95,
      iocMatches: ['185.220.101.42', 'malware.exe', 'suspicious-domain.com']
    },
    {
      threatId: 'THR-2026-4567',
      type: 'Brute Force',
      severity: 'high',
      source: 'External',
      targetAsset: 'aleksandra-ssh-bastion',
      technique: 'T1110 - Brute Force',
      status: 'blocked',
      firstSeen: '19:58:45',
      lastSeen: '20:03:22',
      attempts: 1247,
      blocked: 1247,
      successful: 0,
      confidence: 89,
      iocMatches: ['192.168.1.200', 'admin', 'root']
    },
    {
      threatId: 'THR-2026-1234',
      type: 'Data Exfiltration',
      severity: 'critical',
      source: 'Internal',
      targetAsset: 'aleksandra-database-primary',
      technique: 'T1041 - Exfiltration Over C2 Channel',
      status: 'investigating',
      firstSeen: '19:45:12',
      lastSeen: '20:06:48',
      attempts: 5,
      blocked: 3,
      successful: 2,
      confidence: 78,
      iocMatches: ['user_account_db_admin', '10.0.1.250', 'unusual-query-pattern']
    },
    {
      threatId: 'THR-2026-9876',
      type: 'Privilege Escalation',
      severity: 'high',
      source: 'Internal',
      targetAsset: 'aleksandra-api-server-03',
      technique: 'T1068 - Exploitation for Privilege Escalation',
      status: 'mitigated',
      firstSeen: '19:30:08',
      lastSeen: '19:52:33',
      attempts: 8,
      blocked: 7,
      successful: 1,
      confidence: 82,
      iocMatches: ['sudo', 'privilege_escalation.sh', 'user_www-data']
    }
  ]);

  const [securityRules, setSecurityRules] = useState([
    {
      ruleId: 'RULE-SEC-001',
      name: 'Suspicious Login Activity',
      category: 'Authentication',
      severity: 'medium',
      triggers: 156,
      truePositives: 134,
      falsePositives: 22,
      accuracy: 85.9,
      lastTriggered: '20:06:45',
      status: 'active',
      description: 'Detects multiple failed login attempts from single source'
    },
    {
      ruleId: 'RULE-SEC-002',
      name: 'Malware Detection',
      category: 'Malware',
      severity: 'critical',
      triggers: 45,
      truePositives: 43,
      falsePositives: 2,
      accuracy: 95.6,
      lastTriggered: '20:05:30',
      status: 'active',
      description: 'Identifies known malware signatures and behaviors'
    },
    {
      ruleId: 'RULE-SEC-003',
      name: 'Data Access Anomaly',
      category: 'Data Protection',
      severity: 'high',
      triggers: 78,
      truePositives: 61,
      falsePositives: 17,
      accuracy: 78.2,
      lastTriggered: '20:04:12',
      status: 'active',
      description: 'Detects unusual database access patterns'
    },
    {
      ruleId: 'RULE-SEC-004',
      name: 'Network Traffic Anomaly',
      category: 'Network Security',
      severity: 'medium',
      triggers: 234,
      truePositives: 198,
      falsePositives: 36,
      accuracy: 84.6,
      lastTriggered: '20:03:58',
      status: 'tuning',
      description: 'Identifies suspicious network communication patterns'
    },
    {
      ruleId: 'RULE-SEC-005',
      name: 'Privilege Escalation',
      category: 'Authorization',
      severity: 'high',
      triggers: 23,
      truePositives: 21,
      falsePositives: 2,
      accuracy: 91.3,
      lastTriggered: '19:52:33',
      status: 'active',
      description: 'Detects unauthorized privilege escalation attempts'
    }
  ]);

  const [complianceStatus, setComplianceStatus] = useState([
    {
      framework: 'SOX',
      status: 'compliant',
      score: 97.8,
      lastAudit: '2026-03-20',
      violations: 2,
      remediated: 45,
      nextAudit: '2026-06-20',
      requirements: 156,
      covered: 152
    },
    {
      framework: 'PCI DSS',
      status: 'compliant',
      score: 94.2,
      lastAudit: '2026-03-15',
      violations: 5,
      remediated: 23,
      nextAudit: '2026-09-15',
      requirements: 78,
      covered: 73
    },
    {
      framework: 'GDPR',
      status: 'partially-compliant',
      score: 89.6,
      lastAudit: '2026-03-18',
      violations: 12,
      remediated: 34,
      nextAudit: '2026-06-18',
      requirements: 234,
      covered: 210
    },
    {
      framework: 'ISO 27001',
      status: 'compliant',
      score: 92.4,
      lastAudit: '2026-03-10',
      violations: 8,
      remediated: 67,
      nextAudit: '2026-09-10',
      requirements: 345,
      covered: 319
    },
    {
      framework: 'NIST',
      status: 'needs-attention',
      score: 76.8,
      lastAudit: '2026-03-12',
      violations: 34,
      remediated: 56,
      nextAudit: '2026-06-12',
      requirements: 456,
      covered: 350
    }
  ]);

  const [securityIncidents, setSecurityIncidents] = useState([
    {
      incidentId: 'INC-SEC-789',
      title: 'Attempted Data Breach',
      severity: 'critical',
      status: 'investigating',
      assignee: 'Security Team Alpha',
      affectedAssets: ['aleksandra-database-primary', 'aleksandra-api-gateway'],
      attackVector: 'SQL Injection',
      timeToDetection: 3.2,
      timeToResponse: 1.8,
      estimated_impact: 'high',
      created: '19:45:12',
      updated: '20:06:30'
    },
    {
      incidentId: 'INC-SEC-456',
      title: 'Malware Detection on Web Server',
      severity: 'high',
      status: 'contained',
      assignee: 'SOC Team Beta',
      affectedAssets: ['aleksandra-web-server-01'],
      attackVector: 'Email Attachment',
      timeToDetection: 2.1,
      timeToResponse: 0.5,
      estimated_impact: 'medium',
      created: '20:05:30',
      updated: '20:07:00'
    },
    {
      incidentId: 'INC-SEC-123',
      title: 'Privilege Escalation Attempt',
      severity: 'medium',
      status: 'resolved',
      assignee: 'Security Team Gamma',
      affectedAssets: ['aleksandra-api-server-03'],
      attackVector: 'Local Exploit',
      timeToDetection: 1.5,
      timeToResponse: 2.3,
      estimated_impact: 'low',
      created: '19:30:08',
      updated: '19:55:45'
    }
  ]);

  const [userBehaviorAnalytics, setUserBehaviorAnalytics] = useState([
    {
      user: 'admin@aleksandra.ai',
      riskScore: 78,
      anomalies: 5,
      loginPattern: 'unusual_time',
      dataAccess: 'elevated',
      geolocation: 'anomalous',
      deviceFingerprint: 'new_device',
      lastActivity: '20:06:45',
      status: 'monitoring'
    },
    {
      user: 'developer@aleksandra.ai',
      riskScore: 45,
      anomalies: 2,
      loginPattern: 'normal',
      dataAccess: 'standard',
      geolocation: 'normal',
      deviceFingerprint: 'known',
      lastActivity: '20:05:22',
      status: 'normal'
    },
    {
      user: 'contractor@external.com',
      riskScore: 92,
      anomalies: 8,
      loginPattern: 'suspicious',
      dataAccess: 'excessive',
      geolocation: 'high_risk_country',
      deviceFingerprint: 'multiple_devices',
      lastActivity: '20:04:18',
      status: 'flagged'
    },
    {
      user: 'analyst@aleksandra.ai',
      riskScore: 23,
      anomalies: 0,
      loginPattern: 'consistent',
      dataAccess: 'normal',
      geolocation: 'normal',
      deviceFingerprint: 'known',
      lastActivity: '20:07:10',
      status: 'normal'
    }
  ]);

  const [networkSecurity, setNetworkSecurity] = useState([
    {
      segment: 'DMZ',
      firewallStatus: 'active',
      blockedConnections: 1247,
      allowedConnections: 8934,
      suspiciousTraffic: 23,
      bandwidth: 234.5,
      ddosAttacks: 3,
      intrusions: 1,
      threatLevel: 'medium'
    },
    {
      segment: 'Internal Network',
      firewallStatus: 'active',
      blockedConnections: 345,
      allowedConnections: 15678,
      suspiciousTraffic: 8,
      bandwidth: 567.8,
      ddosAttacks: 0,
      intrusions: 2,
      threatLevel: 'low'
    },
    {
      segment: 'Database Tier',
      firewallStatus: 'active',
      blockedConnections: 89,
      allowedConnections: 4567,
      suspiciousTraffic: 12,
      bandwidth: 123.4,
      ddosAttacks: 1,
      intrusions: 0,
      threatLevel: 'low'
    },
    {
      segment: 'Management Network',
      firewallStatus: 'active',
      blockedConnections: 567,
      allowedConnections: 2345,
      suspiciousTraffic: 45,
      bandwidth: 89.1,
      ddosAttacks: 2,
      intrusions: 3,
      threatLevel: 'high'
    }
  ]);

  const [securityMetricsTimeline, setSecurityMetricsTimeline] = useState([
    { time: '20:07', threats: 234, blocked: 567, incidents: 8, riskScore: 23.4, investigations: 18, compliance: 94.7 },
    { time: '20:06', threats: 228, blocked: 534, incidents: 7, riskScore: 24.1, investigations: 16, compliance: 94.5 },
    { time: '20:05', threats: 245, blocked: 589, incidents: 9, riskScore: 22.8, investigations: 19, compliance: 94.9 },
    { time: '20:04', threats: 221, blocked: 512, incidents: 6, riskScore: 25.3, investigations: 15, compliance: 94.3 },
    { time: '20:03', threats: 256, blocked: 623, incidents: 10, riskScore: 21.7, investigations: 21, compliance: 95.1 },
    { time: '20:02', threats: 239, blocked: 578, incidents: 8, riskScore: 23.9, investigations: 17, compliance: 94.6 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update security metrics
      setSecurityMetrics(prev => ({
        ...prev,
        totalLogs: prev.totalLogs + Math.floor(Math.random() * 100000) + 50000,
        securityEvents: prev.securityEvents + Math.floor(Math.random() * 100) + 20,
        threatsDetected: Math.max(100, prev.threatsDetected + Math.floor((Math.random() - 0.3) * 20)),
        criticalThreats: Math.max(0, prev.criticalThreats + Math.floor((Math.random() - 0.7) * 5)),
        blockedAttacks: prev.blockedAttacks + Math.floor(Math.random() * 50) + 10,
        investigationsActive: Math.max(5, Math.min(30, prev.investigationsActive + Math.floor((Math.random() - 0.5) * 6))),
        incidentsOpen: Math.max(0, Math.min(20, prev.incidentsOpen + Math.floor((Math.random() - 0.6) * 4))),
        complianceScore: Math.max(85, Math.min(99, prev.complianceScore + (Math.random() - 0.5) * 2)),
        riskScore: Math.max(10, Math.min(50, prev.riskScore + (Math.random() - 0.5) * 5)),
        mitigatedThreats: prev.mitigatedThreats + Math.floor(Math.random() * 10) + 2,
        falsePositives: Math.max(10, prev.falsePositives + Math.floor((Math.random() - 0.6) * 5)),
        meanTimeToDetection: Math.max(1, prev.meanTimeToDetection + (Math.random() - 0.5) * 1)
      }));

      // Update security metrics timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setSecurityMetricsTimeline(prev => {
        const newData = {
          time: currentTime,
          threats: Math.max(150, prev[0]?.threats + Math.floor((Math.random() - 0.3) * 30)) || 234,
          blocked: Math.max(400, prev[0]?.blocked + Math.floor((Math.random() - 0.2) * 100)) || 567,
          incidents: Math.max(3, Math.min(15, prev[0]?.incidents + Math.floor((Math.random() - 0.6) * 4))) || 8,
          riskScore: Math.max(15, Math.min(40, prev[0]?.riskScore + (Math.random() - 0.5) * 5)) || 23.4,
          investigations: Math.max(10, Math.min(25, prev[0]?.investigations + Math.floor((Math.random() - 0.5) * 6))) || 18,
          compliance: Math.max(90, Math.min(98, prev[0]?.compliance + (Math.random() - 0.5) * 1)) || 94.7
        };
        
        return [newData, ...prev.slice(0, 19)]; // Keep last 20 points
      });

      // Update threat intelligence
      setThreatIntelligence(prev => prev.map(threat => ({
        ...threat,
        attempts: threat.status === 'active' ? threat.attempts + Math.floor(Math.random() * 5) : threat.attempts,
        blocked: threat.status === 'active' ? threat.blocked + Math.floor(Math.random() * 4) : threat.blocked,
        successful: threat.status === 'active' ? threat.successful + Math.floor(Math.random() * 2) : threat.successful,
        confidence: Math.max(60, Math.min(99, threat.confidence + Math.floor((Math.random() - 0.5) * 5))),
        status: Math.random() < 0.1 && threat.status === 'active' ? 'mitigated' : threat.status
      })));

      // Update security rules
      setSecurityRules(prev => prev.map(rule => ({
        ...rule,
        triggers: rule.status === 'active' ? rule.triggers + Math.floor(Math.random() * 5) : rule.triggers,
        truePositives: rule.triggers > 0 ? Math.floor(rule.triggers * (rule.accuracy / 100)) : rule.truePositives,
        falsePositives: rule.triggers > 0 ? rule.triggers - Math.floor(rule.triggers * (rule.accuracy / 100)) : rule.falsePositives,
        accuracy: Math.max(70, Math.min(98, rule.accuracy + (Math.random() - 0.5) * 2))
      })));

      // Update compliance status
      setComplianceStatus(prev => prev.map(framework => ({
        ...framework,
        score: Math.max(70, Math.min(99, framework.score + (Math.random() - 0.5) * 2)),
        violations: Math.max(0, framework.violations + Math.floor((Math.random() - 0.8) * 3)),
        remediated: framework.remediated + Math.floor(Math.random() * 3),
        covered: Math.max(framework.covered, Math.min(framework.requirements, framework.covered + Math.floor(Math.random() * 2)))
      })));

      // Update user behavior analytics
      setUserBehaviorAnalytics(prev => prev.map(user => ({
        ...user,
        riskScore: Math.max(10, Math.min(100, user.riskScore + Math.floor((Math.random() - 0.5) * 10))),
        anomalies: Math.max(0, user.anomalies + Math.floor((Math.random() - 0.7) * 3)),
        status: user.riskScore > 80 ? 'flagged' : user.riskScore > 50 ? 'monitoring' : 'normal'
      })));

      // Update network security
      setNetworkSecurity(prev => prev.map(segment => ({
        ...segment,
        blockedConnections: segment.blockedConnections + Math.floor(Math.random() * 50) + 10,
        allowedConnections: segment.allowedConnections + Math.floor(Math.random() * 200) + 50,
        suspiciousTraffic: Math.max(0, segment.suspiciousTraffic + Math.floor((Math.random() - 0.7) * 5)),
        bandwidth: Math.max(50, segment.bandwidth + (Math.random() - 0.5) * 50),
        ddosAttacks: Math.max(0, segment.ddosAttacks + Math.floor((Math.random() - 0.9) * 2)),
        intrusions: Math.max(0, segment.intrusions + Math.floor((Math.random() - 0.9) * 2)),
        threatLevel: segment.suspiciousTraffic > 30 || segment.intrusions > 2 ? 'high' :
                    segment.suspiciousTraffic > 15 || segment.intrusions > 0 ? 'medium' : 'low'
      })));

      // Occasionally update incident status
      if (Math.random() < 0.2) {
        setSecurityIncidents(prev => prev.map(incident => {
          const statuses = ['investigating', 'contained', 'resolved'];
          const currentIndex = statuses.indexOf(incident.status);
          const newStatus = Math.random() < 0.3 && currentIndex < statuses.length - 1 ? 
                           statuses[currentIndex + 1] : incident.status;
          return {
            ...incident,
            status: newStatus,
            updated: newStatus !== incident.status ? currentTime : incident.updated
          };
        }));
      }
    }, 50000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'active': case 'normal': case 'compliant': case 'resolved': return 'text-green-400';
      case 'critical': case 'flagged': case 'needs-attention': return 'text-red-400';
      case 'high': case 'investigating': case 'monitoring': case 'partially-compliant': return 'text-yellow-400';
      case 'medium': case 'contained': case 'tuning': return 'text-orange-400';
      case 'low': case 'mitigated': case 'blocked': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'critical': return 'text-red-400';
      case 'high': return 'text-orange-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getRiskColor = (risk) => {
    if (risk >= 80) return 'text-red-400';
    if (risk >= 60) return 'text-orange-400';
    if (risk >= 40) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getComplianceColor = (score) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getThreatLevelColor = (level) => {
    switch(level.toLowerCase()) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getAccuracyColor = (accuracy) => {
    if (accuracy >= 90) return 'text-green-400';
    if (accuracy >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-red-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Datadog Security Monitoring Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🛡️ Datadog Security Monitoring
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>EVENTS: <span className="text-purple-400 font-mono">{(securityMetrics.securityEvents / 1000).toFixed(1)}k</span></div>
                <div>THREATS: <span className="text-red-400">{securityMetrics.threatsDetected}</span></div>
                <div>BLOCKED: <span className="text-green-400">{securityMetrics.blockedAttacks}</span></div>
                <div>INVESTIGATIONS: <span className="text-orange-400">{securityMetrics.investigationsActive}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-purple-400">{securityMetrics.complianceScore.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Compliance Score</div>
              <div className="text-xs text-purple-300">Risk: {securityMetrics.riskScore.toFixed(1)}/100</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Security Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Critical Threats</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{securityMetrics.criticalThreats}</div>
            <div className="text-xs text-gray-400">Immediate attention required</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Blocked Attacks</span>
              <span className="text-2xl">🛡️</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{securityMetrics.blockedAttacks}</div>
            <div className="text-xs text-gray-400">Automated defense success</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Mean Time to Detection</span>
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-1">{securityMetrics.meanTimeToDetection.toFixed(1)}m</div>
            <div className="text-xs text-gray-400">Average response time</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Open Incidents</span>
              <span className="text-2xl">📋</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{securityMetrics.incidentsOpen}</div>
            <div className="text-xs text-gray-400">Active investigations</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Security Metrics Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Security Metrics Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={securityMetricsTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#8b5cf6" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#8b5cf6" />
                <YAxis yAxisId="right" orientation="right" stroke="#8b5cf6" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #8b5cf6' }}
                  labelStyle={{ color: '#8b5cf6' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="threats" fill="#ef4444" fillOpacity={0.3} stroke="#ef4444" name="Threats Detected" />
                <Area yAxisId="left" type="monotone" dataKey="blocked" fill="#22c55e" fillOpacity={0.3} stroke="#22c55e" name="Attacks Blocked" />
                <Line yAxisId="right" type="monotone" dataKey="riskScore" stroke="#f59e0b" strokeWidth={2} name="Risk Score" />
                <Bar yAxisId="right" dataKey="incidents" fill="#8b5cf6" name="Active Incidents" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Threat Intelligence Overview */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🎯 Active Threat Intelligence
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {threatIntelligence.map((threat, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{threat.threatId}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(threat.severity)}`}>{threat.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{threat.type}</div>
                  <div className="text-xs text-purple-300 mb-1">{threat.targetAsset}</div>
                  <div className="text-xs text-yellow-300 mb-1">{threat.technique}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-red-400">{threat.attempts} attempts</div>
                    <div className="text-green-400">{threat.blocked} blocked</div>
                    <div className="text-orange-400">{threat.successful} successful</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={getStatusColor(threat.status)}>{threat.status}</span>
                    <span className="text-blue-400">{threat.confidence}% confidence</span>
                  </div>
                  <div className="text-xs text-cyan-300 mt-1 truncate">
                    IOCs: {threat.iocMatches.slice(0, 2).join(', ')}{threat.iocMatches.length > 2 ? '...' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Security Rules Performance */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📋 Security Rules Performance
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {securityRules.map((rule, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{rule.name}</span>
                    <span className={`text-xs font-bold ${getStatusColor(rule.status)}`}>{rule.status}</span>
                  </div>
                  <div className="text-xs text-purple-300 mb-1">{rule.category} • {rule.ruleId}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-blue-400">{rule.triggers} triggers</div>
                    <div className="text-green-400">{rule.truePositives} TP</div>
                    <div className="text-red-400">{rule.falsePositives} FP</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={getAccuracyColor(rule.accuracy)}>Acc: {rule.accuracy.toFixed(1)}%</span>
                    <span className="text-gray-400">{rule.lastTriggered}</span>
                  </div>
                  <div className="text-xs text-cyan-300 mt-1 line-clamp-2">
                    {rule.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Security Incidents */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Active Security Incidents
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {securityIncidents.map((incident, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{incident.incidentId}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(incident.severity)}`}>{incident.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1 line-clamp-2">{incident.title}</div>
                  <div className="text-xs text-purple-300 mb-1">{incident.attackVector}</div>
                  <div className="text-xs text-orange-300 mb-1">
                    Assets: {incident.affectedAssets.slice(0, 2).join(', ')}{incident.affectedAssets.length > 2 ? '...' : ''}
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className="text-yellow-400">Detection: {incident.timeToDetection.toFixed(1)}m</div>
                    <div className="text-green-400">Response: {incident.timeToResponse.toFixed(1)}m</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={getStatusColor(incident.status)}>{incident.status}</span>
                    <span className="text-blue-400">{incident.assignee}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Behavior Analytics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              👤 User Behavior Analytics
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {userBehaviorAnalytics.map((user, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{user.user}</span>
                    <span className={`text-xs font-bold ${getStatusColor(user.status)}`}>{user.status}</span>
                  </div>
                  <div className={`text-lg font-bold mb-1 ${getRiskColor(user.riskScore)}`}>
                    Risk Score: {user.riskScore}
                  </div>
                  <div className="text-xs text-red-400 mb-1">{user.anomalies} anomalies detected</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="text-yellow-400">Login: {user.loginPattern}</div>
                    <div className="text-cyan-400">Access: {user.dataAccess}</div>
                    <div className="text-blue-400">Location: {user.geolocation}</div>
                    <div className="text-purple-400">Device: {user.deviceFingerprint}</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Last: {user.lastActivity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Status & Network Security */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Compliance Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📋 Compliance Framework Status
            </h3>
            <div className="space-y-3">
              {complianceStatus.map((framework, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{framework.framework}</span>
                    <span className={`text-xs font-bold ${getStatusColor(framework.status)}`}>{framework.status}</span>
                  </div>
                  <div className={`text-lg font-bold mb-1 ${getComplianceColor(framework.score)}`}>
                    {framework.score.toFixed(1)}% Compliant
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-green-400">{framework.covered}/{framework.requirements} req</div>
                    <div className="text-red-400">{framework.violations} violations</div>
                    <div className="text-blue-400">{framework.remediated} remediated</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-purple-400">Last audit: {framework.lastAudit}</span>
                    <span className="text-yellow-400">Next: {framework.nextAudit}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${getComplianceColor(framework.score) === 'text-green-400' ? 'bg-green-400' : 
                                                      getComplianceColor(framework.score) === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${framework.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Network Security Monitoring */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🌐 Network Security Monitoring
            </h3>
            <div className="space-y-3">
              {networkSecurity.map((segment, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{segment.segment}</span>
                    <span className={`text-xs font-bold ${getThreatLevelColor(segment.threatLevel)}`}>{segment.threatLevel} threat</span>
                  </div>
                  <div className="text-xs text-green-400 mb-1">Firewall: {segment.firewallStatus}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-red-400">{segment.blockedConnections} blocked</div>
                    <div className="text-green-400">{segment.allowedConnections} allowed</div>
                    <div className="text-yellow-400">{segment.suspiciousTraffic} suspicious</div>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className="text-cyan-400">{segment.bandwidth.toFixed(1)} Mbps</div>
                    <div className="text-orange-400">{segment.ddosAttacks} DDoS</div>
                    <div className="text-red-400">{segment.intrusions} intrusions</div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${getThreatLevelColor(segment.threatLevel) === 'text-green-400' ? 'bg-green-400' : 
                                                      getThreatLevelColor(segment.threatLevel) === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${Math.min(100, (segment.suspiciousTraffic / 50) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            DATADOG SECURITY MONITORING | ALEKSANDRA AI SECURITY OPERATIONS | THREAT INTELLIGENCE & INCIDENT RESPONSE
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Threat Detection | Security Analytics | Compliance Monitoring | User Behavior Analytics | Incident Response | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}