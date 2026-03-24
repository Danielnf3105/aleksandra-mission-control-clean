// CrowdStrike Endpoint Protection Dashboard - March 2026
// Comprehensive CrowdStrike Falcon-inspired endpoint security dashboard for threat detection and endpoint protection
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart, Treemap, RadialBarChart, RadialBar } from 'recharts';

export default function CrowdStrikeEndpointProtectionDashboard() {
  const [falconMetrics, setFalconMetrics] = useState({
    totalEndpoints: 2847,
    protectedEndpoints: 2789,
    unprotectedEndpoints: 58,
    threatsDetected: 1456,
    threatsBlocked: 1398,
    activeThreatHunts: 23,
    malwareDetections: 678,
    exploitAttempts: 234,
    randsomwareBlocked: 12,
    zeroDay: 3,
    falconScore: 94.7,
    meanTime: 2.8
  });

  const [endpointStatus, setEndpointStatus] = useState([
    {
      endpoint: 'aleksandra-workstation-01',
      os: 'Windows 11',
      status: 'protected',
      lastSeen: '20:13:45',
      threats: 0,
      riskScore: 12,
      agent: '7.12.18903',
      policies: 'Standard_Policy',
      networkLocation: 'Corporate',
      user: 'aleksandra.ai\\admin'
    },
    {
      endpoint: 'aleksandra-server-db-01',
      os: 'Ubuntu 22.04',
      status: 'protected',
      lastSeen: '20:14:02',
      threats: 3,
      riskScore: 45,
      agent: '7.12.18903',
      policies: 'Server_Policy',
      networkLocation: 'Data_Center',
      user: 'root'
    },
    {
      endpoint: 'aleksandra-laptop-dev-02',
      os: 'macOS Sonoma',
      status: 'warning',
      lastSeen: '19:45:22',
      threats: 1,
      riskScore: 67,
      agent: '7.11.18701',
      policies: 'Developer_Policy',
      networkLocation: 'Remote_VPN',
      user: 'developer'
    },
    {
      endpoint: 'aleksandra-workstation-03',
      os: 'Windows 10',
      status: 'critical',
      lastSeen: '20:12:18',
      threats: 8,
      riskScore: 89,
      agent: '7.10.18502',
      policies: 'Standard_Policy',
      networkLocation: 'Guest_Network',
      user: 'contractor'
    },
    {
      endpoint: 'aleksandra-server-web-02',
      os: 'CentOS 7',
      status: 'offline',
      lastSeen: '18:30:15',
      threats: 0,
      riskScore: 78,
      agent: '7.09.18201',
      policies: 'Web_Server_Policy',
      networkLocation: 'DMZ',
      user: 'nginx'
    }
  ]);

  const [threatDetections, setThreatDetections] = useState([
    {
      detectionId: 'DET-2026-8901',
      severity: 'critical',
      type: 'Ransomware',
      endpoint: 'aleksandra-workstation-03',
      technique: 'T1486 - Data Encrypted for Impact',
      status: 'blocked',
      firstSeen: '20:12:18',
      confidence: 98,
      processName: 'cryptolocker.exe',
      commandLine: '--encrypt C:\\Users\\*',
      parentProcess: 'explorer.exe',
      iocs: ['192.168.1.100', 'ransom-c2.evil.com', 'crypto.key']
    },
    {
      detectionId: 'DET-2026-7823',
      severity: 'high',
      type: 'Malware',
      endpoint: 'aleksandra-server-db-01',
      technique: 'T1055 - Process Injection',
      status: 'quarantined',
      firstSeen: '20:08:45',
      confidence: 92,
      processName: 'svchost.exe',
      commandLine: '-k netsvcs',
      parentProcess: 'services.exe',
      iocs: ['185.220.102.55', 'malicious.dll', 'persistence_reg_key']
    },
    {
      detectionId: 'DET-2026-5647',
      severity: 'medium',
      type: 'Exploit',
      endpoint: 'aleksandra-laptop-dev-02',
      technique: 'T1203 - Exploitation for Client Execution',
      status: 'investigating',
      firstSeen: '19:45:22',
      confidence: 78,
      processName: 'java',
      commandLine: '-jar exploit.jar',
      parentProcess: 'firefox',
      iocs: ['exploit-kit.com', 'CVE-2024-1234', 'shellcode.bin']
    },
    {
      detectionId: 'DET-2026-4521',
      severity: 'high',
      type: 'Credential Theft',
      endpoint: 'aleksandra-workstation-01',
      technique: 'T1003 - OS Credential Dumping',
      status: 'prevented',
      firstSeen: '20:05:10',
      confidence: 89,
      processName: 'lsass.exe',
      commandLine: 'mimikatz.exe sekurlsa::logonpasswords',
      parentProcess: 'powershell.exe',
      iocs: ['mimikatz', 'sekurlsa', 'credential_dump']
    }
  ]);

  const [huntingActivities, setHuntingActivities] = useState([
    {
      huntId: 'HUNT-2026-234',
      name: 'Advanced Persistent Threat Detection',
      status: 'active',
      hunter: 'Threat Intelligence Team',
      targets: 'All Endpoints',
      indicators: 67,
      matches: 12,
      falsePositives: 3,
      startTime: '2026-03-24 18:00:00',
      estimatedCompletion: '2026-03-24 22:00:00',
      description: 'Hunting for APT29 TTPs using MITRE framework'
    },
    {
      huntId: 'HUNT-2026-189',
      name: 'Ransomware Behavior Analysis',
      status: 'completed',
      hunter: 'SOC Analyst Alpha',
      targets: 'Windows Endpoints',
      indicators: 34,
      matches: 5,
      falsePositives: 1,
      startTime: '2026-03-24 16:30:00',
      estimatedCompletion: '2026-03-24 19:30:00',
      description: 'Proactive search for ransomware precursor activities'
    },
    {
      huntId: 'HUNT-2026-156',
      name: 'Lateral Movement Detection',
      status: 'active',
      hunter: 'Incident Response Team',
      targets: 'Server Infrastructure',
      indicators: 89,
      matches: 23,
      falsePositives: 8,
      startTime: '2026-03-24 19:15:00',
      estimatedCompletion: '2026-03-24 23:15:00',
      description: 'Detecting unauthorized lateral movement patterns'
    }
  ]);

  const [policyCompliance, setPolicyCompliance] = useState([
    {
      policyName: 'Standard_Policy',
      endpoints: 1456,
      compliant: 1398,
      nonCompliant: 58,
      complianceRate: 95.9,
      lastUpdated: '2026-03-20',
      violations: ['Disabled Real-Time Protection', 'Outdated Sensor Version'],
      enforced: true
    },
    {
      policyName: 'Server_Policy',
      endpoints: 234,
      compliant: 228,
      nonCompliant: 6,
      complianceRate: 97.4,
      lastUpdated: '2026-03-22',
      violations: ['Missing Security Patches', 'Unauthorized Software'],
      enforced: true
    },
    {
      policyName: 'Developer_Policy',
      endpoints: 567,
      compliant: 523,
      nonCompliant: 44,
      complianceRate: 92.2,
      lastUpdated: '2026-03-18',
      violations: ['Development Tools Whitelisting', 'Elevated Privileges'],
      enforced: false
    },
    {
      policyName: 'Web_Server_Policy',
      endpoints: 89,
      compliant: 85,
      nonCompliant: 4,
      complianceRate: 95.5,
      lastUpdated: '2026-03-21',
      violations: ['Unsecured Web Services', 'Excessive Permissions'],
      enforced: true
    }
  ]);

  const [falconIntelligence, setFalconIntelligence] = useState([
    {
      indicator: '192.168.100.50',
      type: 'IP Address',
      severity: 'high',
      confidence: 95,
      threatType: 'Command & Control',
      source: 'CrowdStrike Intelligence',
      firstSeen: '2026-03-24 19:30:00',
      lastSeen: '2026-03-24 20:12:00',
      tags: ['APT29', 'Cozy Bear', 'Government'],
      reports: 3,
      malwareFamilies: ['Nobelium', 'SolarWinds']
    },
    {
      indicator: 'evil-domain.com',
      type: 'Domain',
      severity: 'critical',
      confidence: 98,
      threatType: 'Malware Distribution',
      source: 'Falcon X Intelligence',
      firstSeen: '2026-03-24 18:45:00',
      lastSeen: '2026-03-24 20:10:00',
      tags: ['Ransomware', 'Financial', 'Targeted'],
      reports: 7,
      malwareFamilies: ['Ryuk', 'Conti', 'LockBit']
    },
    {
      indicator: 'SHA256:a1b2c3d4e5f6...',
      type: 'File Hash',
      severity: 'critical',
      confidence: 99,
      threatType: 'Backdoor',
      source: 'Machine Learning Detection',
      firstSeen: '2026-03-24 20:05:00',
      lastSeen: '2026-03-24 20:13:00',
      tags: ['Zero-Day', 'Supply Chain', 'Critical Infrastructure'],
      reports: 1,
      malwareFamilies: ['Unknown']
    }
  ]);

  const [networkActivity, setNetworkActivity] = useState([
    {
      endpoint: 'aleksandra-workstation-03',
      srcIP: '192.168.1.103',
      dstIP: '185.220.102.55',
      protocol: 'HTTPS',
      port: 443,
      direction: 'outbound',
      bytes: 2048576,
      packets: 1567,
      flagged: true,
      riskScore: 87,
      category: 'C2 Communication'
    },
    {
      endpoint: 'aleksandra-server-db-01',
      srcIP: '10.0.1.15',
      dstIP: '192.168.1.200',
      protocol: 'SMB',
      port: 445,
      direction: 'inbound',
      bytes: 5242880,
      packets: 3456,
      flagged: true,
      riskScore: 72,
      category: 'Lateral Movement'
    },
    {
      endpoint: 'aleksandra-laptop-dev-02',
      srcIP: '172.16.0.45',
      dstIP: '8.8.8.8',
      protocol: 'DNS',
      port: 53,
      direction: 'outbound',
      bytes: 512,
      packets: 4,
      flagged: false,
      riskScore: 5,
      category: 'Normal Activity'
    }
  ]);

  const [detectionTimeline, setDetectionTimeline] = useState([
    { time: '20:14', threats: 1456, blocked: 1398, quarantined: 45, prevented: 234, investigated: 23, falconScore: 94.7 },
    { time: '20:13', threats: 1448, blocked: 1392, quarantined: 43, prevented: 231, investigated: 22, falconScore: 94.5 },
    { time: '20:12', threats: 1465, blocked: 1405, quarantined: 47, prevented: 238, investigated: 25, falconScore: 94.9 },
    { time: '20:11', threats: 1442, blocked: 1386, quarantined: 41, prevented: 228, investigated: 21, falconScore: 94.3 },
    { time: '20:10', threats: 1471, blocked: 1411, quarantined: 49, prevented: 241, investigated: 27, falconScore: 95.1 },
    { time: '20:09', threats: 1459, blocked: 1401, quarantined: 46, prevented: 235, investigated: 24, falconScore: 94.6 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update Falcon metrics
      setFalconMetrics(prev => ({
        ...prev,
        threatsDetected: prev.threatsDetected + Math.floor(Math.random() * 20) + 5,
        threatsBlocked: prev.threatsBlocked + Math.floor(Math.random() * 18) + 4,
        activeThreatHunts: Math.max(10, Math.min(35, prev.activeThreatHunts + Math.floor((Math.random() - 0.5) * 6))),
        malwareDetections: prev.malwareDetections + Math.floor(Math.random() * 10) + 2,
        exploitAttempts: prev.exploitAttempts + Math.floor(Math.random() * 8) + 1,
        randsomwareBlocked: prev.randsomwareBlocked + Math.floor((Math.random() - 0.8) * 3),
        zeroDay: Math.max(0, prev.zeroDay + Math.floor((Math.random() - 0.95) * 2)),
        falconScore: Math.max(85, Math.min(99, prev.falconScore + (Math.random() - 0.5) * 2)),
        meanTime: Math.max(1, prev.meanTime + (Math.random() - 0.5) * 1)
      }));

      // Update detection timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setDetectionTimeline(prev => {
        const newData = {
          time: currentTime,
          threats: Math.max(1200, prev[0]?.threats + Math.floor((Math.random() - 0.3) * 40)) || 1456,
          blocked: Math.max(1100, prev[0]?.blocked + Math.floor((Math.random() - 0.2) * 35)) || 1398,
          quarantined: Math.max(30, prev[0]?.quarantined + Math.floor((Math.random() - 0.5) * 10)) || 45,
          prevented: Math.max(200, prev[0]?.prevented + Math.floor((Math.random() - 0.4) * 20)) || 234,
          investigated: Math.max(15, Math.min(35, prev[0]?.investigated + Math.floor((Math.random() - 0.5) * 6))) || 23,
          falconScore: Math.max(90, Math.min(98, prev[0]?.falconScore + (Math.random() - 0.5) * 1)) || 94.7
        };
        
        return [newData, ...prev.slice(0, 19)]; // Keep last 20 points
      });

      // Update endpoint status
      setEndpointStatus(prev => prev.map(endpoint => ({
        ...endpoint,
        threats: endpoint.status === 'critical' ? 
                Math.max(0, endpoint.threats + Math.floor((Math.random() - 0.6) * 3)) : 
                Math.max(0, endpoint.threats + Math.floor((Math.random() - 0.8) * 2)),
        riskScore: Math.max(5, Math.min(95, endpoint.riskScore + Math.floor((Math.random() - 0.5) * 10))),
        status: endpoint.riskScore > 80 ? 'critical' : 
               endpoint.riskScore > 60 ? 'warning' : 
               endpoint.riskScore > 30 ? 'protected' : 'protected'
      })));

      // Update threat detections
      setThreatDetections(prev => prev.map(detection => ({
        ...detection,
        confidence: Math.max(70, Math.min(99, detection.confidence + Math.floor((Math.random() - 0.5) * 5))),
        status: Math.random() < 0.1 && detection.status === 'investigating' ? 
                (Math.random() < 0.7 ? 'blocked' : 'prevented') : detection.status
      })));

      // Update hunting activities
      setHuntingActivities(prev => prev.map(hunt => ({
        ...hunt,
        matches: hunt.status === 'active' ? hunt.matches + Math.floor(Math.random() * 3) : hunt.matches,
        falsePositives: hunt.status === 'active' ? 
                       Math.max(0, hunt.falsePositives + Math.floor((Math.random() - 0.7) * 2)) : hunt.falsePositives,
        status: Math.random() < 0.05 && hunt.status === 'active' ? 'completed' : hunt.status
      })));

      // Update policy compliance
      setPolicyCompliance(prev => prev.map(policy => ({
        ...policy,
        compliant: Math.min(policy.endpoints, policy.compliant + Math.floor(Math.random() * 3)),
        nonCompliant: Math.max(0, policy.endpoints - policy.compliant - Math.floor(Math.random() * 3)),
        complianceRate: (policy.compliant / policy.endpoints) * 100
      })));

      // Update Falcon Intelligence
      setFalconIntelligence(prev => prev.map(intel => ({
        ...intel,
        confidence: Math.max(80, Math.min(99, intel.confidence + Math.floor((Math.random() - 0.5) * 3))),
        reports: intel.reports + Math.floor(Math.random() * 2)
      })));

      // Update network activity
      setNetworkActivity(prev => prev.map(activity => ({
        ...activity,
        bytes: activity.bytes + Math.floor(Math.random() * 1048576),
        packets: activity.packets + Math.floor(Math.random() * 100),
        riskScore: Math.max(0, Math.min(100, activity.riskScore + Math.floor((Math.random() - 0.5) * 8))),
        flagged: activity.riskScore > 60
      })));

    }, 52000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'protected': case 'normal': case 'completed': case 'blocked': case 'prevented': return 'text-green-400';
      case 'critical': case 'offline': return 'text-red-400';
      case 'warning': case 'investigating': case 'active': return 'text-yellow-400';
      case 'quarantined': return 'text-orange-400';
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

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'text-green-400';
    if (confidence >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getComplianceColor = (rate) => {
    if (rate >= 95) return 'text-green-400';
    if (rate >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getFalconScoreColor = (score) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 90) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-black text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* CrowdStrike Falcon Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🦅 CrowdStrike Falcon Endpoint Protection
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>ENDPOINTS: <span className="text-red-400 font-mono">{falconMetrics.protectedEndpoints}/{falconMetrics.totalEndpoints}</span></div>
                <div>THREATS: <span className="text-orange-400">{falconMetrics.threatsDetected.toLocaleString()}</span></div>
                <div>BLOCKED: <span className="text-green-400">{falconMetrics.threatsBlocked.toLocaleString()}</span></div>
                <div>HUNTS: <span className="text-yellow-400">{falconMetrics.activeThreatHunts}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-red-400">{falconMetrics.falconScore.toFixed(1)}</div>
              <div className="text-sm text-gray-300">Falcon Score</div>
              <div className="text-xs text-red-300">MTTR: {falconMetrics.meanTime.toFixed(1)}min</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Falcon Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Ransomware Blocked</span>
              <span className="text-2xl">🛡️</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{falconMetrics.randsomwareBlocked}</div>
            <div className="text-xs text-gray-400">Critical protection</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Malware Detections</span>
              <span className="text-2xl">🦠</span>
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-1">{falconMetrics.malwareDetections}</div>
            <div className="text-xs text-gray-400">Automated response</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Zero-Day Exploits</span>
              <span className="text-2xl">⚡</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{falconMetrics.zeroDay}</div>
            <div className="text-xs text-gray-400">Unknown threats</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Mean Time to Response</span>
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{falconMetrics.meanTime.toFixed(1)}m</div>
            <div className="text-xs text-gray-400">Response efficiency</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Detection Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Threat Detection Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={detectionTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#ef4444" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#ef4444" />
                <YAxis yAxisId="right" orientation="right" stroke="#ef4444" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #ef4444' }}
                  labelStyle={{ color: '#ef4444' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="threats" fill="#ef4444" fillOpacity={0.3} stroke="#ef4444" name="Threats Detected" />
                <Area yAxisId="left" type="monotone" dataKey="blocked" fill="#22c55e" fillOpacity={0.3} stroke="#22c55e" name="Blocked" />
                <Line yAxisId="left" type="monotone" dataKey="quarantined" stroke="#f97316" strokeWidth={2} name="Quarantined" />
                <Bar yAxisId="right" dataKey="investigated" fill="#eab308" name="Investigated" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Endpoint Status Overview */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              💻 Endpoint Status Overview
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {endpointStatus.map((endpoint, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{endpoint.endpoint}</span>
                    <span className={`text-xs font-bold ${getStatusColor(endpoint.status)}`}>{endpoint.status}</span>
                  </div>
                  <div className="text-xs text-red-300 mb-1">{endpoint.os} • {endpoint.user}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-orange-400">{endpoint.threats} threats</div>
                    <div className={getRiskColor(endpoint.riskScore)}>Risk: {endpoint.riskScore}</div>
                    <div className="text-cyan-400">{endpoint.agent}</div>
                  </div>
                  <div className="text-xs text-yellow-300 mb-1">{endpoint.policies}</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-blue-400">{endpoint.networkLocation}</span>
                    <span className="text-gray-400">{endpoint.lastSeen}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Active Threat Detections */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🎯 Active Threat Detections
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {threatDetections.map((detection, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-orange-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{detection.detectionId}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(detection.severity)}`}>{detection.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{detection.type}</div>
                  <div className="text-xs text-red-300 mb-1">{detection.endpoint}</div>
                  <div className="text-xs text-yellow-300 mb-1 line-clamp-1">{detection.technique}</div>
                  <div className="text-xs text-cyan-300 mb-1 truncate">Process: {detection.processName}</div>
                  <div className="flex justify-between text-xs">
                    <span className={getStatusColor(detection.status)}>{detection.status}</span>
                    <span className={getConfidenceColor(detection.confidence)}>{detection.confidence}%</span>
                  </div>
                  <div className="text-xs text-purple-300 mt-1 truncate">
                    IOCs: {detection.iocs.slice(0, 2).join(', ')}{detection.iocs.length > 2 ? '...' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Threat Hunting Activities */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔍 Active Threat Hunts
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {huntingActivities.map((hunt, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{hunt.huntId}</span>
                    <span className={`text-xs font-bold ${getStatusColor(hunt.status)}`}>{hunt.status}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1 line-clamp-2">{hunt.name}</div>
                  <div className="text-xs text-red-300 mb-1">{hunt.hunter}</div>
                  <div className="text-xs text-yellow-300 mb-1">{hunt.targets}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-cyan-400">{hunt.indicators} IOCs</div>
                    <div className="text-green-400">{hunt.matches} matches</div>
                    <div className="text-orange-400">{hunt.falsePositives} FPs</div>
                  </div>
                  <div className="text-xs text-blue-300 line-clamp-2">
                    {hunt.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Policy Compliance */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📋 Policy Compliance Status
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {policyCompliance.map((policy, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{policy.policyName}</span>
                    <span className={policy.enforced ? 'text-green-400' : 'text-yellow-400'}>
                      {policy.enforced ? 'Enforced' : 'Monitor'}
                    </span>
                  </div>
                  <div className={`text-lg font-bold mb-1 ${getComplianceColor(policy.complianceRate)}`}>
                    {policy.complianceRate.toFixed(1)}% Compliant
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className="text-green-400">{policy.compliant} compliant</div>
                    <div className="text-red-400">{policy.nonCompliant} non-compliant</div>
                  </div>
                  <div className="text-xs text-gray-400 mb-1">Updated: {policy.lastUpdated}</div>
                  <div className="text-xs text-yellow-300 line-clamp-2">
                    Top violations: {policy.violations.slice(0, 2).join(', ')}
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${getComplianceColor(policy.complianceRate) === 'text-green-400' ? 'bg-green-400' : 
                                                      getComplianceColor(policy.complianceRate) === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${policy.complianceRate}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Falcon Intelligence & Network Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Falcon Intelligence */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🧠 Falcon Intelligence Feed
            </h3>
            <div className="space-y-3">
              {falconIntelligence.map((intel, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{intel.indicator}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(intel.severity)}`}>{intel.severity}</span>
                  </div>
                  <div className="text-xs text-red-300 mb-1">{intel.type} • {intel.threatType}</div>
                  <div className="text-xs text-yellow-300 mb-1">{intel.source}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className={getConfidenceColor(intel.confidence)}>Conf: {intel.confidence}%</div>
                    <div className="text-blue-400">{intel.reports} reports</div>
                    <div className="text-purple-400">First: {intel.firstSeen.split(' ')[1]}</div>
                  </div>
                  <div className="text-xs text-cyan-300 mb-1">
                    Tags: {intel.tags.slice(0, 3).join(', ')}{intel.tags.length > 3 ? '...' : ''}
                  </div>
                  <div className="text-xs text-orange-300 truncate">
                    Families: {intel.malwareFamilies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Network Activity Monitor */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🌐 Suspicious Network Activity
            </h3>
            <div className="space-y-3">
              {networkActivity.map((activity, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{activity.endpoint}</span>
                    <span className={activity.flagged ? 'text-red-400' : 'text-green-400'}>
                      {activity.flagged ? 'FLAGGED' : 'Normal'}
                    </span>
                  </div>
                  <div className="text-xs text-red-300 mb-1">
                    {activity.srcIP} → {activity.dstIP}
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-cyan-400">{activity.protocol}:{activity.port}</div>
                    <div className="text-yellow-400">{activity.direction}</div>
                    <div className="text-blue-400">{(activity.bytes / 1024 / 1024).toFixed(1)}MB</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={getRiskColor(activity.riskScore)}>Risk: {activity.riskScore}</span>
                    <span className="text-orange-300">{activity.category}</span>
                  </div>
                  <div className="text-xs text-purple-300 mt-1">
                    {activity.packets.toLocaleString()} packets
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            CROWDSTRIKE FALCON ENDPOINT PROTECTION | ALEKSANDRA AI SECURITY OPERATIONS | THREAT HUNTING & ENDPOINT SECURITY
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Endpoint Protection | Threat Detection | Falcon Intelligence | Policy Compliance | Threat Hunting | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}