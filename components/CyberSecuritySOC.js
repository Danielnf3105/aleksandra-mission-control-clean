// CyberSecuritySOC.js - Enterprise Security Operations Center (SOC) Command Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CyberSecuritySOC = () => {
  const [securityIncidents, setSecurityIncidents] = useState([
    {
      id: 'inc_001',
      title: 'Suspicious API Authentication Pattern',
      severity: 'HIGH',
      status: 'INVESTIGATING',
      category: 'AUTHENTICATION',
      assignedAnalyst: 'SOC-Alpha',
      createdAt: Date.now() - 45 * 60 * 1000,
      lastUpdate: Date.now() - 5 * 60 * 1000,
      affectedSystems: ['API Gateway', 'User Database'],
      sourceIP: '192.168.45.23',
      location: 'Unknown',
      attackVector: 'Credential Stuffing',
      mitreId: 'T1110.004',
      eventsCount: 2847,
      priority: 1,
      escalated: false
    },
    {
      id: 'inc_002',
      title: 'Anomalous Network Traffic Spike',
      severity: 'MEDIUM',
      status: 'CONTAINED',
      category: 'NETWORK',
      assignedAnalyst: 'SOC-Beta',
      createdAt: Date.now() - 2 * 60 * 60 * 1000,
      lastUpdate: Date.now() - 15 * 60 * 1000,
      affectedSystems: ['Load Balancer', 'CDN'],
      sourceIP: '10.0.34.156',
      location: 'Internal Network',
      attackVector: 'DDoS Attempt',
      mitreId: 'T1499',
      eventsCount: 15673,
      priority: 2,
      escalated: true
    },
    {
      id: 'inc_003',
      title: 'Malware Signature Detection',
      severity: 'CRITICAL',
      status: 'ACTIVE',
      category: 'MALWARE',
      assignedAnalyst: 'SOC-Gamma',
      createdAt: Date.now() - 30 * 60 * 1000,
      lastUpdate: Date.now() - 2 * 60 * 1000,
      affectedSystems: ['Workstation-047'],
      sourceIP: '172.16.22.89',
      location: 'Endpoint',
      attackVector: 'Email Attachment',
      mitreId: 'T1566.001',
      eventsCount: 156,
      priority: 1,
      escalated: true
    },
    {
      id: 'inc_004',
      title: 'Privilege Escalation Attempt',
      severity: 'HIGH',
      status: 'RESOLVED',
      category: 'PRIVILEGE_ESCALATION',
      assignedAnalyst: 'SOC-Delta',
      createdAt: Date.now() - 4 * 60 * 60 * 1000,
      lastUpdate: Date.now() - 1 * 60 * 60 * 1000,
      affectedSystems: ['Domain Controller'],
      sourceIP: '192.168.1.167',
      location: 'Internal Network',
      attackVector: 'Exploited Vulnerability',
      mitreId: 'T1068',
      eventsCount: 89,
      priority: 1,
      escalated: false
    }
  ]);

  const [threatIntelligence, setThreatIntelligence] = useState({
    activeThreats: [
      {
        id: 'threat_001',
        name: 'APT-2026-Neural',
        severity: 'CRITICAL',
        confidence: 94.7,
        firstSeen: Date.now() - 6 * 60 * 60 * 1000,
        lastSeen: Date.now() - 15 * 60 * 1000,
        ttp: 'Advanced Persistent Threat with AI-powered evasion',
        indicators: 156,
        associatedIncidents: 3,
        targetSectors: ['Technology', 'Finance', 'Healthcare'],
        attribution: 'Unknown Actor',
        riskScore: 9.2
      },
      {
        id: 'threat_002',
        name: 'Ransomware-DarkNova',
        severity: 'HIGH',
        confidence: 87.3,
        firstSeen: Date.now() - 12 * 60 * 60 * 1000,
        lastSeen: Date.now() - 45 * 60 * 1000,
        ttp: 'Ransomware with lateral movement capabilities',
        indicators: 89,
        associatedIncidents: 1,
        targetSectors: ['Manufacturing', 'Education'],
        attribution: 'DarkNova Group',
        riskScore: 8.1
      }
    ],
    totalIndicators: 2847,
    blockedThreats: 15673,
    threatHunting: {
      activeHunts: 4,
      completedHunts: 23,
      findings: 12,
      falsePositives: 3
    }
  });

  const [socMetrics, setSocMetrics] = useState({
    meanTimeToDetection: 8.4, // minutes
    meanTimeToResponse: 23.7, // minutes
    meanTimeToContainment: 47.2, // minutes
    meanTimeToResolution: 124.8, // minutes
    falsePositiveRate: 2.3, // percentage
    alertVolume: 15672,
    alertsTriaged: 14890,
    incidentsEscalated: 67,
    analystWorkload: 78.4, // percentage
    automationRate: 67.8, // percentage
    slaCompliance: 96.2, // percentage
    coverage: {
      endpoints: 97.8,
      network: 94.5,
      cloud: 89.2,
      email: 98.6,
      web: 91.7
    }
  });

  const [socAnalysts, setSocAnalysts] = useState([
    {
      id: 'analyst_001',
      callSign: 'SOC-Alpha',
      name: 'Primary Security Analyst',
      shift: 'DAY_SHIFT',
      status: 'ACTIVE',
      workstation: 'SOC-WS-001',
      specialization: 'Threat Hunting',
      currentIncidents: 3,
      resolvedToday: 12,
      certifications: ['GCIH', 'GCFA', 'CISSP'],
      alertsAssigned: 45,
      escalationRate: 5.2,
      efficiency: 94.7
    },
    {
      id: 'analyst_002',
      callSign: 'SOC-Beta',
      name: 'Network Security Analyst',
      shift: 'DAY_SHIFT',
      status: 'ACTIVE',
      workstation: 'SOC-WS-002',
      specialization: 'Network Analysis',
      currentIncidents: 2,
      resolvedToday: 8,
      certifications: ['GCNA', 'GMON', 'GSEC'],
      alertsAssigned: 38,
      escalationRate: 3.8,
      efficiency: 91.3
    },
    {
      id: 'analyst_003',
      callSign: 'SOC-Gamma',
      name: 'Malware Analyst',
      shift: 'DAY_SHIFT',
      status: 'BREAK',
      workstation: 'SOC-WS-003',
      specialization: 'Malware Analysis',
      currentIncidents: 1,
      resolvedToday: 6,
      certifications: ['GREM', 'GNFA', 'FOR610'],
      alertsAssigned: 23,
      escalationRate: 8.1,
      efficiency: 89.6
    },
    {
      id: 'analyst_004',
      callSign: 'SOC-Delta',
      name: 'Incident Response Lead',
      shift: 'NIGHT_SHIFT',
      status: 'STANDBY',
      workstation: 'SOC-WS-004',
      specialization: 'Incident Response',
      currentIncidents: 0,
      resolvedToday: 15,
      certifications: ['GCIH', 'GCFA', 'GNFA'],
      alertsAssigned: 0,
      escalationRate: 2.1,
      efficiency: 97.2
    }
  ]);

  const [securityDashboards, setSecurityDashboards] = useState({
    executive: {
      riskScore: 7.3,
      incidentsToday: 15,
      budgetUtilization: 78.4,
      complianceScore: 94.7,
      vendorRiskScore: 6.8
    },
    analyst: {
      queueDepth: 23,
      avgResponseTime: 8.4,
      toolsAvailable: 12,
      automationSuccess: 89.7,
      casesPerHour: 4.2
    },
    manager: {
      teamUtilization: 78.4,
      slaBreaches: 3,
      trainingNeeded: 2,
      budgetRemaining: 234567,
      shiftCoverage: 95.8
    }
  });

  const [cyberThreats, setCyberThreats] = useState([]);
  const [securityTrends, setSecurityTrends] = useState([]);

  const generateCyberThreats = () => {
    const data = [];
    const categories = ['Malware', 'Phishing', 'DDoS', 'Intrusion', 'Data Breach'];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setHours(date.getHours() - i * 4);
      data.push({
        time: date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        malware: Math.floor(Math.random() * 50) + 10,
        phishing: Math.floor(Math.random() * 30) + 5,
        ddos: Math.floor(Math.random() * 15) + 2,
        intrusion: Math.floor(Math.random() * 20) + 3,
        data_breach: Math.floor(Math.random() * 5) + 1
      });
    }
    return data;
  };

  const generateSecurityTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        threats_blocked: Math.floor(Math.random() * 200) + 100,
        alerts_generated: Math.floor(Math.random() * 150) + 50,
        incidents_created: Math.floor(Math.random() * 20) + 5,
        false_positives: Math.floor(Math.random() * 30) + 10,
        response_time: Math.random() * 20 + 5 // 5-25 minutes
      });
    }
    return data;
  };

  useEffect(() => {
    setCyberThreats(generateCyberThreats());
    setSecurityTrends(generateSecurityTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update security incidents
      setSecurityIncidents(prev => prev.map(incident => {
        let newStatus = incident.status;
        if (incident.status === 'INVESTIGATING' && Math.random() > 0.8) {
          newStatus = Math.random() > 0.5 ? 'CONTAINED' : 'ACTIVE';
        }
        if (incident.status === 'ACTIVE' && Math.random() > 0.9) {
          newStatus = 'CONTAINED';
        }
        if (incident.status === 'CONTAINED' && Math.random() > 0.95) {
          newStatus = 'RESOLVED';
        }
        
        return {
          ...incident,
          status: newStatus,
          lastUpdate: newStatus !== incident.status ? Date.now() : incident.lastUpdate,
          eventsCount: incident.eventsCount + Math.floor(Math.random() * 10)
        };
      }));

      // Update SOC metrics
      setSocMetrics(prev => ({
        ...prev,
        meanTimeToDetection: Math.max(3, Math.min(15, prev.meanTimeToDetection + (Math.random() - 0.5) * 0.5)),
        meanTimeToResponse: Math.max(10, Math.min(40, prev.meanTimeToResponse + (Math.random() - 0.5) * 2)),
        alertVolume: prev.alertVolume + Math.floor(Math.random() * 20),
        alertsTriaged: prev.alertsTriaged + Math.floor(Math.random() * 15),
        analystWorkload: Math.max(60, Math.min(95, prev.analystWorkload + (Math.random() - 0.5) * 3))
      }));

      // Update threat intelligence
      setThreatIntelligence(prev => ({
        ...prev,
        totalIndicators: prev.totalIndicators + Math.floor(Math.random() * 5),
        blockedThreats: prev.blockedThreats + Math.floor(Math.random() * 10),
        activeThreats: prev.activeThreats.map(threat => ({
          ...threat,
          lastSeen: Math.random() > 0.7 ? Date.now() : threat.lastSeen,
          indicators: threat.indicators + Math.floor(Math.random() * 3)
        }))
      }));

      // Update analysts
      setSocAnalysts(prev => prev.map(analyst => ({
        ...analyst,
        currentIncidents: Math.max(0, Math.min(5, analyst.currentIncidents + Math.floor(Math.random() * 3) - 1)),
        alertsAssigned: Math.max(0, Math.min(60, analyst.alertsAssigned + Math.floor(Math.random() * 6) - 2))
      })));

      // Occasionally create new incidents
      if (Math.random() > 0.97) {
        const severities = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
        const categories = ['AUTHENTICATION', 'NETWORK', 'MALWARE', 'DATA_BREACH', 'PHISHING'];
        const vectors = ['Credential Stuffing', 'DDoS', 'Email Attachment', 'Web Exploit', 'USB Device'];
        
        const newIncident = {
          id: `inc_${Date.now()}`,
          title: 'Automated Security Detection',
          severity: severities[Math.floor(Math.random() * severities.length)],
          status: 'NEW',
          category: categories[Math.floor(Math.random() * categories.length)],
          assignedAnalyst: socAnalysts[Math.floor(Math.random() * socAnalysts.length)].callSign,
          createdAt: Date.now(),
          lastUpdate: Date.now(),
          affectedSystems: ['System-' + Math.floor(Math.random() * 100)],
          sourceIP: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
          location: Math.random() > 0.5 ? 'Internal Network' : 'External',
          attackVector: vectors[Math.floor(Math.random() * vectors.length)],
          mitreId: `T${Math.floor(Math.random() * 1999) + 1000}`,
          eventsCount: Math.floor(Math.random() * 1000) + 50,
          priority: Math.floor(Math.random() * 3) + 1,
          escalated: false
        };
        
        setSecurityIncidents(prev => [newIncident, ...prev.slice(0, 9)]);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [socAnalysts]);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'NEW': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      case 'INVESTIGATING': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'ACTIVE': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'CONTAINED': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'RESOLVED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'STANDBY': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      case 'BREAK': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getRiskColor = (score) => {
    if (score >= 8) return 'text-red-400';
    if (score >= 6) return 'text-orange-400';
    if (score >= 4) return 'text-yellow-400';
    return 'text-green-400';
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatDuration = (minutes) => {
    if (minutes < 60) return `${minutes.toFixed(1)}m`;
    return `${(minutes / 60).toFixed(1)}h`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🛡️ CYBER SECURITY OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-mono border border-red-500/30">
            THREAT LEVEL: ELEVATED
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Enterprise SOC command dashboard
          </div>
        </div>
      </div>

      {/* SOC Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg p-4 border border-red-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-red-200">ACTIVE INCIDENTS</div>
              <div className="text-2xl font-bold text-red-100">
                {securityIncidents.filter(inc => inc.status !== 'RESOLVED').length}
              </div>
              <div className="text-xs text-red-300">
                {socMetrics.incidentsEscalated} escalated
              </div>
            </div>
            <div className="text-3xl opacity-60">🚨</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">MTTR</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatDuration(socMetrics.meanTimeToResolution)}
              </div>
              <div className="text-xs text-orange-300">
                {formatDuration(socMetrics.meanTimeToDetection)} MTTD
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">THREATS BLOCKED</div>
              <div className="text-2xl font-bold text-blue-100">
                {(threatIntelligence.blockedThreats / 1000).toFixed(1)}K
              </div>
              <div className="text-xs text-blue-300">today</div>
            </div>
            <div className="text-3xl opacity-60">🛡️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SLA COMPLIANCE</div>
              <div className="text-2xl font-bold text-green-100">
                {socMetrics.slaCompliance.toFixed(1)}%
              </div>
              <div className="text-xs text-green-300">
                {socMetrics.automationRate.toFixed(1)}% automated
              </div>
            </div>
            <div className="text-3xl opacity-60">✅</div>
          </div>
        </div>
      </div>

      {/* Active Incidents and SOC Analysts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Security Incidents */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 ACTIVE SECURITY INCIDENTS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {securityIncidents.map((incident) => (
              <div key={incident.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(incident.status)}`}>
                      {incident.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      P{incident.priority}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(incident.createdAt)}
                  </div>
                </div>
                
                <h4 className="font-bold text-white text-sm mb-2">{incident.title}</h4>
                
                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Analyst</div>
                    <div className="text-cyan-400">{incident.assignedAnalyst}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Category</div>
                    <div className="text-purple-400">{incident.category}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Source IP</div>
                    <div className="text-orange-400">{incident.sourceIP}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Events</div>
                    <div className="text-yellow-400">{incident.eventsCount.toLocaleString()}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Attack Vector</div>
                    <div className="text-red-400">{incident.attackVector}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">MITRE ID</div>
                    <div className="text-blue-400">{incident.mitreId}</div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-400 mb-1">Affected Systems:</div>
                  <div className="flex flex-wrap gap-1">
                    {incident.affectedSystems.map((system, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-600 rounded text-gray-300 text-xs">
                        {system}
                      </span>
                    ))}
                  </div>
                </div>

                {incident.escalated && (
                  <div className="mt-2 text-xs">
                    <span className="text-red-400">🔺 ESCALATED</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SOC Analysts */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👥 SOC ANALYSTS ON DUTY
          </h3>
          <div className="space-y-3">
            {socAnalysts.map((analyst) => (
              <div key={analyst.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{analyst.callSign}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(analyst.status)}`}>
                      {analyst.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {analyst.shift}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{analyst.name}</div>
                <div className="text-xs text-purple-400 mb-3">{analyst.specialization}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Active Cases</div>
                    <div className="text-red-400 font-bold">{analyst.currentIncidents}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Alerts</div>
                    <div className="text-yellow-400 font-bold">{analyst.alertsAssigned}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Resolved Today</div>
                    <div className="text-green-400 font-bold">{analyst.resolvedToday}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Workstation</div>
                    <div className="text-cyan-400">{analyst.workstation}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Efficiency</div>
                    <div className="text-blue-400">{analyst.efficiency.toFixed(1)}%</div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-400 mb-1">Certifications:</div>
                  <div className="flex flex-wrap gap-1">
                    {analyst.certifications.map((cert, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-600 rounded text-gray-300 text-xs">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Threat Intelligence and Security Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Threat Intelligence */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔍 THREAT INTELLIGENCE
          </h3>
          
          <div className="mb-6">
            <h4 className="text-sm font-bold text-white mb-3">Active Threat Actors</h4>
            {threatIntelligence.activeThreats.map((threat) => (
              <div key={threat.id} className="bg-gray-700 rounded-lg p-4 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-bold text-white text-sm">{threat.name}</h5>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(threat.severity)}`}>
                    {threat.severity}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Risk Score: </span>
                    <span className={`font-bold ${getRiskColor(threat.riskScore)}`}>
                      {threat.riskScore.toFixed(1)}/10
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Confidence: </span>
                    <span className="text-green-400 font-bold">{threat.confidence.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Indicators: </span>
                    <span className="text-purple-400">{threat.indicators}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Incidents: </span>
                    <span className="text-red-400">{threat.associatedIncidents}</span>
                  </div>
                </div>

                <div className="text-xs text-gray-300 mb-2">{threat.ttp}</div>
                <div className="text-xs">
                  <span className="text-gray-400">Attribution: </span>
                  <span className="text-cyan-400">{threat.attribution}</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-400">Last Seen: </span>
                  <span className="text-yellow-400">{formatTime(threat.lastSeen)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-700 rounded p-3">
              <div className="text-gray-400">Total Indicators</div>
              <div className="text-cyan-400 font-bold">{threatIntelligence.totalIndicators.toLocaleString()}</div>
            </div>
            <div className="bg-gray-700 rounded p-3">
              <div className="text-gray-400">Active Hunts</div>
              <div className="text-purple-400 font-bold">{threatIntelligence.threatHunting.activeHunts}</div>
            </div>
            <div className="bg-gray-700 rounded p-3">
              <div className="text-gray-400">Hunt Findings</div>
              <div className="text-yellow-400 font-bold">{threatIntelligence.threatHunting.findings}</div>
            </div>
            <div className="bg-gray-700 rounded p-3">
              <div className="text-gray-400">Blocked Today</div>
              <div className="text-green-400 font-bold">{threatIntelligence.blockedThreats.toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Security Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 SECURITY TRENDS (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={securityTrends}>
              <defs>
                <linearGradient id="threatsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="alertsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={12}/>
              <YAxis stroke="#9CA3AF" fontSize={12}/>
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
                type="monotone" 
                dataKey="threats_blocked" 
                stackId="1"
                stroke="#EF4444" 
                fill="url(#threatsGradient)" 
                name="Threats Blocked"
              />
              <Area 
                type="monotone" 
                dataKey="alerts_generated" 
                stackId="2"
                stroke="#F59E0B" 
                fill="url(#alertsGradient)" 
                name="Alerts Generated"
              />
              <Line 
                type="monotone" 
                dataKey="incidents_created" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Incidents"
              />
              <Line 
                type="monotone" 
                dataKey="response_time" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Response Time (min)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Role-Based Dashboards */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📊 ROLE-BASED OPERATIONAL DASHBOARDS
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Executive Dashboard */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">👔 Executive View</h4>
            <div className="space-y-3">
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Organization Risk Score</span>
                  <span className={`text-lg font-bold ${getRiskColor(securityDashboards.executive.riskScore)}`}>
                    {securityDashboards.executive.riskScore.toFixed(1)}/10
                  </span>
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Incidents Today</span>
                  <span className="text-lg font-bold text-red-400">{securityDashboards.executive.incidentsToday}</span>
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Compliance Score</span>
                  <span className="text-lg font-bold text-green-400">{securityDashboards.executive.complianceScore.toFixed(1)}%</span>
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Budget Utilization</span>
                  <span className="text-lg font-bold text-blue-400">{securityDashboards.executive.budgetUtilization.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Analyst Dashboard */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">🔍 Analyst View</h4>
            <div className="space-y-3">
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Queue Depth</span>
                  <span className="text-lg font-bold text-yellow-400">{securityDashboards.analyst.queueDepth}</span>
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Avg Response Time</span>
                  <span className="text-lg font-bold text-cyan-400">{securityDashboards.analyst.avgResponseTime.toFixed(1)}m</span>
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Cases/Hour</span>
                  <span className="text-lg font-bold text-purple-400">{securityDashboards.analyst.casesPerHour.toFixed(1)}</span>
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Automation Success</span>
                  <span className="text-lg font-bold text-green-400">{securityDashboards.analyst.automationSuccess.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Manager Dashboard */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">👨‍💼 Manager View</h4>
            <div className="space-y-3">
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Team Utilization</span>
                  <span className="text-lg font-bold text-orange-400">{securityDashboards.manager.teamUtilization.toFixed(1)}%</span>
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">SLA Breaches</span>
                  <span className="text-lg font-bold text-red-400">{securityDashboards.manager.slaBreaches}</span>
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Shift Coverage</span>
                  <span className="text-lg font-bold text-green-400">{securityDashboards.manager.shiftCoverage.toFixed(1)}%</span>
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Budget Remaining</span>
                  <span className="text-lg font-bold text-blue-400">${(securityDashboards.manager.budgetRemaining / 1000).toFixed(0)}K</span>
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