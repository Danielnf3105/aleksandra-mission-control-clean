// CybersecurityOperationsCenter.js - Cybersecurity Operations Center (SOC) & Threat Intelligence Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CybersecurityOperationsCenter = () => {
  const [socStatus, setSocStatus] = useState({
    operationalStatus: 'ACTIVE_MONITORING',
    threatLevel: 'ELEVATED',
    analystsOnDuty: 12,
    totalAnalysts: 18,
    incidentsToday: 47,
    criticalIncidents: 3,
    highSeverityIncidents: 8,
    threatsBlocked: 2847,
    meanTimeToDetection: 4.2, // minutes
    meanTimeToResponse: 12.7, // minutes
    securityScore: 87.3, // percentage
    lastUpdate: Date.now()
  });

  const [threatIntelligence, setThreatIntelligence] = useState({
    feeds_active: 23,
    feeds_total: 25,
    iocs_processed: 156743, // Indicators of Compromise
    cti_sources: ['MISP', 'STIX/TAXII', 'Commercial TI', 'Open Source', 'Internal'],
    threat_actors: [
      {
        actor: 'APT29 (Cozy Bear)',
        first_seen: '2024-12-15',
        last_activity: Date.now() - 3 * 24 * 60 * 60 * 1000,
        techniques: ['T1566.001', 'T1055', 'T1083', 'T1082'],
        targets: ['Government', 'Healthcare', 'Energy'],
        confidence: 'HIGH',
        severity: 'CRITICAL'
      },
      {
        actor: 'Lazarus Group',
        first_seen: '2024-11-28',
        last_activity: Date.now() - 7 * 24 * 60 * 60 * 1000,
        techniques: ['T1566.002', 'T1204.002', 'T1059.003'],
        targets: ['Financial', 'Cryptocurrency', 'Defense'],
        confidence: 'MEDIUM',
        severity: 'HIGH'
      },
      {
        actor: 'BlackCat (ALPHV)',
        first_seen: '2024-10-23',
        last_activity: Date.now() - 12 * 24 * 60 * 60 * 1000,
        techniques: ['T1486', 'T1490', 'T1552.001'],
        targets: ['Healthcare', 'Manufacturing', 'Legal'],
        confidence: 'HIGH',
        severity: 'HIGH'
      }
    ],
    malware_families: {
      'Emotet': { detections: 234, trend: 'INCREASING' },
      'Cobalt Strike': { detections: 156, trend: 'STABLE' },
      'LockBit': { detections: 89, trend: 'DECREASING' },
      'IcedID': { detections: 67, trend: 'STABLE' },
      'Qakbot': { detections: 45, trend: 'INCREASING' }
    }
  });

  const [siemAnalytics, setSiemAnalytics] = useState({
    total_events: 284739284, // events processed today
    events_per_second: 3456,
    correlated_alerts: 2847,
    high_priority_alerts: 89,
    false_positives: 234,
    true_positives: 67,
    accuracy_rate: 96.3, // percentage
    data_sources: 156,
    log_retention: 365, // days
    storage_utilization: 78.9, // percentage
    parsing_engines: [
      {
        engine: 'SYSLOG_PARSER',
        status: 'OPERATIONAL',
        throughput: 45623, // events/sec
        cpu_usage: 67.3,
        memory_usage: 78.9
      },
      {
        engine: 'WINDOWS_EVENT_PARSER',
        status: 'OPERATIONAL',
        throughput: 23456,
        cpu_usage: 45.7,
        memory_usage: 56.8
      },
      {
        engine: 'NETWORK_FLOW_PARSER',
        status: 'HIGH_LOAD',
        throughput: 89012,
        cpu_usage: 89.2,
        memory_usage: 91.4
      }
    ],
    risk_based_alerting: {
      asset_criticality: 'ENABLED',
      business_impact_scoring: 'ACTIVE',
      threat_intel_enrichment: 'OPERATIONAL',
      context_analysis: 'RUNNING'
    }
  });

  const [incidentResponse, setIncidentResponse] = useState([
    {
      incident_id: 'INC-2026-0305-001',
      title: 'Suspicious PowerShell Activity',
      severity: 'HIGH',
      status: 'INVESTIGATING',
      analyst: 'Sarah Chen',
      created: Date.now() - 2.5 * 60 * 60 * 1000,
      updated: Date.now() - 15 * 60 * 1000,
      affected_assets: ['WKS-001-HR', 'WKS-045-FIN', 'SRV-DC01'],
      mitre_tactics: ['T1059.001', 'T1055', 'T1083'],
      containment_status: 'PARTIAL',
      escalation_level: 'L2',
      estimated_impact: 'MEDIUM',
      source_ip: '192.168.1.45',
      indicators: ['powershell.exe', 'base64 encoding', 'WMI queries']
    },
    {
      incident_id: 'INC-2026-0305-002',
      title: 'Ransomware Encryption Attempt',
      severity: 'CRITICAL',
      status: 'CONTAINED',
      analyst: 'Mike Rodriguez',
      created: Date.now() - 6 * 60 * 60 * 1000,
      updated: Date.now() - 5 * 60 * 1000,
      affected_assets: ['SRV-FILE01', 'WKS-078-ENG'],
      mitre_tactics: ['T1486', 'T1490', 'T1547.001'],
      containment_status: 'COMPLETE',
      escalation_level: 'L3',
      estimated_impact: 'HIGH',
      source_ip: '10.0.0.87',
      indicators: ['LockBit signature', 'file encryption', '.lockbit extension'],
      recovery_time: 45 // minutes
    },
    {
      incident_id: 'INC-2026-0305-003',
      title: 'Phishing Campaign Detection',
      severity: 'MEDIUM',
      status: 'MONITORING',
      analyst: 'Lisa Zhang',
      created: Date.now() - 4 * 60 * 60 * 1000,
      updated: Date.now() - 30 * 60 * 1000,
      affected_assets: ['EMAIL-GATEWAY', 'USER-MAILBOXES'],
      mitre_tactics: ['T1566.001', 'T1204.002'],
      containment_status: 'MONITORING',
      escalation_level: 'L1',
      estimated_impact: 'LOW',
      source_ip: '203.0.113.45',
      indicators: ['fake microsoft login', 'credential harvesting', 'suspicious domains'],
      blocked_emails: 234
    },
    {
      incident_id: 'INC-2026-0305-004',
      title: 'Privilege Escalation Detected',
      severity: 'HIGH',
      status: 'ESCALATED',
      analyst: 'David Kim',
      created: Date.now() - 1.5 * 60 * 60 * 1000,
      updated: Date.now() - 8 * 60 * 1000,
      affected_assets: ['AD-CONTROLLER', 'DOMAIN-ADMIN'],
      mitre_tactics: ['T1068', 'T1078.002', 'T1136.001'],
      containment_status: 'INVESTIGATING',
      escalation_level: 'L3',
      estimated_impact: 'CRITICAL',
      source_ip: '10.0.0.156',
      indicators: ['unusual admin activity', 'new user creation', 'permission changes']
    }
  ]);

  const [securityControls, setSecurityControls] = useState({
    endpoint_protection: {
      total_endpoints: 2847,
      protected_endpoints: 2834,
      quarantined_files: 156,
      active_scans: 23,
      definition_updates: 'CURRENT',
      last_update: Date.now() - 2 * 60 * 60 * 1000
    },
    network_security: {
      firewalls: {
        total: 8,
        operational: 8,
        blocked_connections: 45623,
        policy_violations: 234
      },
      ids_ips: {
        sensors: 12,
        active: 12,
        intrusion_attempts: 567,
        signatures: 'UPDATED'
      },
      dns_filtering: {
        queries_analyzed: 2847392,
        malicious_domains_blocked: 567,
        category_blocks: 1247
      }
    },
    email_security: {
      emails_processed: 156743,
      spam_blocked: 8947,
      malware_detected: 234,
      phishing_attempts: 89,
      quarantined_emails: 345,
      safe_links_clicks: 2456
    },
    vulnerability_management: {
      assets_scanned: 2847,
      critical_vulnerabilities: 23,
      high_vulnerabilities: 156,
      medium_vulnerabilities: 567,
      patch_compliance: 94.7, // percentage
      scan_coverage: 98.2 // percentage
    }
  });

  const [soarPlaybooks, setSoarPlaybooks] = useState([
    {
      playbook_id: 'PB-PHISHING-001',
      name: 'Phishing Email Response',
      trigger: 'Email Classification',
      status: 'ACTIVE',
      executions_today: 23,
      success_rate: 96.7, // percentage
      avg_execution_time: 2.3, // minutes
      last_execution: Date.now() - 45 * 60 * 1000,
      steps: [
        'Extract email headers',
        'Analyze sender reputation', 
        'Check against threat intel',
        'Quarantine suspicious emails',
        'Notify security team'
      ]
    },
    {
      playbook_id: 'PB-MALWARE-002',
      name: 'Malware Containment',
      trigger: 'Endpoint Detection',
      status: 'ACTIVE',
      executions_today: 8,
      success_rate: 91.2,
      avg_execution_time: 4.7,
      last_execution: Date.now() - 2 * 60 * 60 * 1000,
      steps: [
        'Isolate affected endpoint',
        'Collect forensic data',
        'Analyze malware sample',
        'Update signatures',
        'Deploy remediation'
      ]
    },
    {
      playbook_id: 'PB-BRUTEFORCE-003',
      name: 'Brute Force Detection',
      trigger: 'Authentication Failures',
      status: 'ACTIVE',
      executions_today: 15,
      success_rate: 94.8,
      avg_execution_time: 1.8,
      last_execution: Date.now() - 20 * 60 * 1000,
      steps: [
        'Detect failed login patterns',
        'Block source IP',
        'Reset user passwords',
        'Enable MFA',
        'Generate incident report'
      ]
    }
  ]);

  const [operationsHistory, setOperationsHistory] = useState([]);

  const generateOperationsHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    
    for (let i = 0; i <= 23; i++) { // 24 hours
      const time = new Date(startOfDay.getTime() + i * 60 * 60 * 1000);
      
      // Simulate realistic SOC patterns
      const hour = time.getHours();
      let activityMultiplier = 0.7; // Base activity
      
      if (hour >= 9 && hour <= 17) activityMultiplier = 1.0; // Business hours peak
      if (hour >= 22 || hour <= 6) activityMultiplier = 0.4; // Night hours
      if (hour >= 18 && hour <= 21) activityMultiplier = 0.6; // Evening hours
      
      data.push({
        time: time.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        events_processed: Math.floor(8000000 + activityMultiplier * 4000000 + Math.random() * 1000000),
        threats_detected: Math.floor(activityMultiplier * 150 + Math.random() * 50),
        incidents_created: Math.floor(activityMultiplier * 8 + Math.random() * 4),
        alerts_generated: Math.floor(activityMultiplier * 200 + Math.random() * 100),
        false_positives: Math.floor(activityMultiplier * 25 + Math.random() * 15),
        response_time: 8 + (1 / activityMultiplier) * 5 + Math.random() * 3,
        threat_intel_matches: Math.floor(activityMultiplier * 12 + Math.random() * 8)
      });
    }
    return data;
  };

  useEffect(() => {
    setOperationsHistory(generateOperationsHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update SOC status
      setSocStatus(prev => ({
        ...prev,
        threatsBlocked: prev.threatsBlocked + Math.floor(Math.random() * 50),
        incidentsToday: prev.incidentsToday + Math.floor(Math.random() * 2),
        meanTimeToDetection: Math.max(2.0, Math.min(10.0, prev.meanTimeToDetection + (Math.random() - 0.5) * 1.0)),
        meanTimeToResponse: Math.max(5.0, Math.min(30.0, prev.meanTimeToResponse + (Math.random() - 0.5) * 2.0)),
        securityScore: Math.max(70.0, Math.min(95.0, prev.securityScore + (Math.random() - 0.5) * 2.0)),
        lastUpdate: Date.now()
      }));

      // Update SIEM analytics
      setSiemAnalytics(prev => ({
        ...prev,
        total_events: prev.total_events + Math.floor(Math.random() * 100000),
        events_per_second: Math.max(1000, Math.min(10000, prev.events_per_second + Math.floor((Math.random() - 0.5) * 500))),
        correlated_alerts: prev.correlated_alerts + Math.floor(Math.random() * 10),
        high_priority_alerts: Math.max(0, prev.high_priority_alerts + Math.floor((Math.random() - 0.8) * 3))
      }));

      // Update threat intelligence
      setThreatIntelligence(prev => ({
        ...prev,
        iocs_processed: prev.iocs_processed + Math.floor(Math.random() * 1000)
      }));

    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE_MONITORING':
      case 'OPERATIONAL':
      case 'ACTIVE':
      case 'ENABLED':
      case 'RUNNING':
      case 'COMPLETE':
      case 'CONTAINED':
      case 'CURRENT':
      case 'UPDATED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'INVESTIGATING':
      case 'MONITORING':
      case 'HIGH_LOAD':
      case 'MEDIUM':
      case 'PARTIAL': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'ESCALATED':
      case 'HIGH':
      case 'ELEVATED': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'LOW': return 'text-green-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'INCREASING': return 'text-red-400';
      case 'STABLE': return 'text-blue-400';
      case 'DECREASING': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const formatNumber = (num, decimals = 0) => {
    return num.toFixed(decimals);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toString();
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    const diff = timestamp - Date.now();
    if (Math.abs(diff) < 60000) return 'now';
    if (diff > 0) {
      if (diff < 3600000) return `in ${Math.floor(diff / 60000)}min`;
      if (diff < 86400000) return `in ${Math.floor(diff / 3600000)}h`;
      return `in ${Math.floor(diff / 86400000)}d`;
    } else {
      const absDiff = Math.abs(diff);
      if (absDiff < 3600000) return `${Math.floor(absDiff / 60000)}m ago`;
      if (absDiff < 86400000) return `${Math.floor(absDiff / 3600000)}h ago`;
      return `${Math.floor(absDiff / 86400000)}d ago`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🛡️ CYBERSECURITY OPERATIONS CENTER (SOC)
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {socStatus.threatsBlocked} Threats Blocked
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatNumber(socStatus.meanTimeToDetection, 1)}m MTTD
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(socStatus.threatLevel)}`}>
            Threat Level: {socStatus.threatLevel}
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Threat Intelligence & Incident Response
          </div>
        </div>
      </div>

      {/* SOC Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">INCIDENTS TODAY</div>
              <div className="text-2xl font-bold text-blue-100">
                {socStatus.incidentsToday}
              </div>
              <div className="text-xs text-blue-300">
                {socStatus.criticalIncidents} critical | {socStatus.highSeverityIncidents} high
              </div>
            </div>
            <div className="text-3xl opacity-60">🚨</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">THREATS BLOCKED</div>
              <div className="text-2xl font-bold text-green-100">
                {formatLargeNumber(socStatus.threatsBlocked)}
              </div>
              <div className="text-xs text-green-300">
                Last 24 hours
              </div>
            </div>
            <div className="text-3xl opacity-60">🛡️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">RESPONSE TIME</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(socStatus.meanTimeToResponse, 1)}m
              </div>
              <div className="text-xs text-purple-300">
                Mean Time to Response
              </div>
            </div>
            <div className="text-3xl opacity-60">⏱️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">SECURITY SCORE</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(socStatus.securityScore, 1)}%
              </div>
              <div className="text-xs text-orange-300">
                Overall Posture
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>
      </div>

      {/* Incident Response */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🚨 ACTIVE INCIDENT RESPONSE & INVESTIGATION
        </h3>
        <div className="space-y-3">
          {incidentResponse.map((incident) => (
            <div key={incident.incident_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{incident.incident_id}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(incident.severity)}`}>
                    {incident.severity}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(incident.status)}`}>
                    {incident.status}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {incident.escalation_level}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  Analyst: {incident.analyst}
                </div>
              </div>

              <div className="text-sm font-bold text-white mb-2">{incident.title}</div>

              <div className="text-xs mb-2">
                <span className="text-gray-400">Affected Assets: </span>
                <span className="text-cyan-400">{incident.affected_assets.join(', ')}</span>
                <span className="text-gray-400"> | Source IP: </span>
                <span className="text-orange-400">{incident.source_ip}</span>
                <span className="text-gray-400"> | Impact: </span>
                <span className={getSeverityColor(incident.estimated_impact)}>
                  {incident.estimated_impact}
                </span>
              </div>

              <div className="text-xs mb-2">
                <span className="text-gray-400">MITRE Tactics: </span>
                <span className="text-purple-400">{incident.mitre_tactics.join(', ')}</span>
                <span className="text-gray-400"> | Containment: </span>
                <span className={getStatusColor(incident.containment_status).split(' ')[0]}>
                  {incident.containment_status}
                </span>
              </div>

              <div className="text-xs mb-2">
                <span className="text-gray-400">Indicators: </span>
                <span className="text-yellow-400">{incident.indicators.join(', ')}</span>
              </div>

              <div className="text-xs">
                <span className="text-gray-400">Created: </span>
                <span className="text-green-400">{formatTime(incident.created)}</span>
                <span className="text-gray-400"> | Updated: </span>
                <span className="text-blue-400">{formatTime(incident.updated)}</span>
                {incident.recovery_time && (
                  <>
                    <span className="text-gray-400"> | Recovery: </span>
                    <span className="text-green-400">{incident.recovery_time} min</span>
                  </>
                )}
                {incident.blocked_emails && (
                  <>
                    <span className="text-gray-400"> | Blocked Emails: </span>
                    <span className="text-red-400">{incident.blocked_emails}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Threat Intelligence and SIEM Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Threat Intelligence */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🕵️ THREAT INTELLIGENCE & IOC ANALYSIS
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Intelligence Feeds</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Active Feeds:</span>
                <span className="text-green-400">{threatIntelligence.feeds_active}/{threatIntelligence.feeds_total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">IOCs Processed:</span>
                <span className="text-blue-400">{formatLargeNumber(threatIntelligence.iocs_processed)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sources:</span>
                <span className="text-purple-400">{threatIntelligence.cti_sources.join(', ')}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Active Threat Actors</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {threatIntelligence.threat_actors.map((actor, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{actor.actor}</span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(actor.severity)}`}>
                      {actor.severity}
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Last Activity: </span>
                    <span className="text-orange-400">{formatTime(actor.last_activity)}</span>
                    <span className="text-gray-400"> | Targets: </span>
                    <span className="text-cyan-400">{actor.targets.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Malware Families</h4>
            <div className="space-y-2">
              {Object.entries(threatIntelligence.malware_families).map(([family, data], index) => (
                <div key={index} className="flex items-center justify-between text-xs">
                  <span className="text-white">{family}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">{data.detections}</span>
                    <span className={getTrendColor(data.trend)}>
                      {data.trend === 'INCREASING' ? '↗' : data.trend === 'DECREASING' ? '↘' : '→'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIEM Analytics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 SIEM ANALYTICS & EVENT CORRELATION
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Event Processing</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Events Today:</span>
                <span className="text-blue-400">{formatLargeNumber(siemAnalytics.total_events)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Events/Second:</span>
                <span className="text-green-400">{formatLargeNumber(siemAnalytics.events_per_second)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Correlated Alerts:</span>
                <span className="text-yellow-400">{formatLargeNumber(siemAnalytics.correlated_alerts)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">High Priority:</span>
                <span className="text-red-400">{siemAnalytics.high_priority_alerts}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Accuracy Rate:</span>
                <span className="text-cyan-400">{formatNumber(siemAnalytics.accuracy_rate, 1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Parsing Engines</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {siemAnalytics.parsing_engines.map((engine, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">
                      {engine.engine.replace(/_/g, ' ')}
                    </span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(engine.status)}`}>
                      {engine.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Throughput: </span>
                    <span className="text-orange-400">{formatLargeNumber(engine.throughput)}/s</span>
                    <span className="text-gray-400"> | CPU: </span>
                    <span className="text-blue-400">{formatNumber(engine.cpu_usage, 1)}%</span>
                    <span className="text-gray-400"> | Mem: </span>
                    <span className="text-purple-400">{formatNumber(engine.memory_usage, 1)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Risk-Based Alerting</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Asset Criticality:</span>
                <span className={`${getStatusColor(siemAnalytics.risk_based_alerting.asset_criticality).split(' ')[0]}`}>
                  {siemAnalytics.risk_based_alerting.asset_criticality}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Business Impact:</span>
                <span className={`${getStatusColor(siemAnalytics.risk_based_alerting.business_impact_scoring).split(' ')[0]}`}>
                  {siemAnalytics.risk_based_alerting.business_impact_scoring}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">TI Enrichment:</span>
                <span className={`${getStatusColor(siemAnalytics.risk_based_alerting.threat_intel_enrichment).split(' ')[0]}`}>
                  {siemAnalytics.risk_based_alerting.threat_intel_enrichment}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SOC Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 SOC OPERATIONS TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={operationsHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="time" stroke="#9CA3AF" fontSize={10}/>
            <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12}/>
            <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12}/>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
            />
            <Legend />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="events_processed"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Events Processed"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="threats_detected" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Threats Detected"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="alerts_generated" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Alerts Generated"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="incidents_created" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Incidents Created"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="response_time" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Response Time (min)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="false_positives" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="False Positives"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="threat_intel_matches" 
              stroke="#F97316" 
              strokeWidth={2}
              name="Threat Intel Matches"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Security Controls and SOAR Playbooks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security Controls */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔒 SECURITY CONTROLS & PROTECTION STATUS
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Endpoint Protection</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Protected Endpoints:</span>
                <span className="text-green-400">{securityControls.endpoint_protection.protected_endpoints}/{securityControls.endpoint_protection.total_endpoints}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Quarantined Files:</span>
                <span className="text-yellow-400">{securityControls.endpoint_protection.quarantined_files}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Scans:</span>
                <span className="text-blue-400">{securityControls.endpoint_protection.active_scans}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Definitions:</span>
                <span className="text-green-400">{securityControls.endpoint_protection.definition_updates}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Network Security</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Firewalls:</span>
                <span className="text-green-400">{securityControls.network_security.firewalls.operational}/{securityControls.network_security.firewalls.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Blocked Connections:</span>
                <span className="text-red-400">{formatLargeNumber(securityControls.network_security.firewalls.blocked_connections)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">IDS/IPS Sensors:</span>
                <span className="text-blue-400">{securityControls.network_security.ids_ips.active}/{securityControls.network_security.ids_ips.sensors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Intrusion Attempts:</span>
                <span className="text-orange-400">{securityControls.network_security.ids_ips.intrusion_attempts}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Email Security</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Emails Processed:</span>
                <span className="text-blue-400">{formatLargeNumber(securityControls.email_security.emails_processed)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Spam Blocked:</span>
                <span className="text-yellow-400">{formatLargeNumber(securityControls.email_security.spam_blocked)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Malware Detected:</span>
                <span className="text-red-400">{securityControls.email_security.malware_detected}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Phishing Attempts:</span>
                <span className="text-orange-400">{securityControls.email_security.phishing_attempts}</span>
              </div>
            </div>
          </div>
        </div>

        {/* SOAR Playbooks */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🤖 SOAR PLAYBOOKS & AUTOMATION
          </h3>
          
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {soarPlaybooks.map((playbook, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">{playbook.name}</span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(playbook.status)}`}>
                      {playbook.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatNumber(playbook.success_rate, 1)}% Success
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Trigger: </span>
                  <span className="text-cyan-400">{playbook.trigger}</span>
                  <span className="text-gray-400"> | Executions Today: </span>
                  <span className="text-purple-400">{playbook.executions_today}</span>
                  <span className="text-gray-400"> | Avg Time: </span>
                  <span className="text-orange-400">{formatNumber(playbook.avg_execution_time, 1)}min</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Last Execution: </span>
                  <span className="text-green-400">{formatTime(playbook.last_execution)}</span>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">Steps: </span>
                  <span className="text-blue-400">{playbook.steps.join(' → ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityOperationsCenter;