import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Shield, AlertTriangle, Eye, Activity, TrendingUp, Users, Zap, Clock, MapPin, Settings, Target, Lock } from 'lucide-react';

const CybersecurityOperationsCenter = () => {
  const [securityMetrics, setSecurityMetrics] = useState({
    totalThreats: 47892,
    activeIncidents: 23,
    resolvedIncidents: 1847,
    criticalAlerts: 8,
    meanTimeToDetection: 4.7, // minutes
    meanTimeToResponse: 12.3, // minutes
    securityScore: 94.7, // /100
    complianceScore: 97.2 // %
  });

  const [threatDetection, setThreatDetection] = useState([
    {
      id: 'THREAT-001',
      type: 'Advanced Persistent Threat',
      severity: 'critical',
      status: 'investigating',
      sourceIP: '203.45.78.192',
      targetAsset: 'web-server-prod-01',
      detectionTime: new Date(Date.now() - 180000),
      lastActivity: new Date(Date.now() - 60000),
      riskScore: 9.2,
      analyst: 'Sarah Chen',
      ttl: 'TTP-0045'
    },
    {
      id: 'THREAT-002', 
      type: 'Malware Detection',
      severity: 'high',
      status: 'contained',
      sourceIP: '157.92.34.211',
      targetAsset: 'workstation-finance-15',
      detectionTime: new Date(Date.now() - 300000),
      lastActivity: new Date(Date.now() - 120000),
      riskScore: 7.8,
      analyst: 'Mike Rodriguez',
      ttl: 'TTP-0023'
    },
    {
      id: 'THREAT-003',
      type: 'Data Exfiltration',
      severity: 'high',
      status: 'mitigated',
      sourceIP: '78.134.56.89',
      targetAsset: 'database-customer-main',
      detectionTime: new Date(Date.now() - 420000),
      lastActivity: new Date(Date.now() - 180000),
      riskScore: 8.1,
      analyst: 'Jennifer Kim',
      ttl: 'TTP-0067'
    },
    {
      id: 'THREAT-004',
      type: 'Phishing Campaign',
      severity: 'medium',
      status: 'monitoring',
      sourceIP: '91.203.145.67',
      targetAsset: 'email-gateway',
      detectionTime: new Date(Date.now() - 240000),
      lastActivity: new Date(Date.now() - 90000),
      riskScore: 5.4,
      analyst: 'David Thompson',
      ttl: 'TTP-0012'
    },
    {
      id: 'THREAT-005',
      type: 'Insider Threat',
      severity: 'high',
      status: 'investigating',
      sourceIP: '192.168.1.47',
      targetAsset: 'file-server-hr',
      detectionTime: new Date(Date.now() - 360000),
      lastActivity: new Date(Date.now() - 45000),
      riskScore: 7.9,
      analyst: 'Amanda Martinez',
      ttl: 'TTP-0089'
    }
  ]);

  const [siemAnalytics, setSiemAnalytics] = useState([
    {
      source: 'Network Firewalls',
      eventsPerHour: 847392,
      alerts: 234,
      falsePositives: 12,
      coverage: 98.7,
      status: 'operational'
    },
    {
      source: 'Endpoint Detection',
      eventsPerHour: 234567,
      alerts: 89,
      falsePositives: 8,
      coverage: 94.3,
      status: 'operational'
    },
    {
      source: 'Email Security',
      eventsPerHour: 156789,
      alerts: 67,
      falsePositives: 5,
      coverage: 99.2,
      status: 'operational'
    },
    {
      source: 'Web Application',
      eventsPerHour: 89456,
      alerts: 45,
      falsePositives: 3,
      coverage: 91.8,
      status: 'degraded'
    },
    {
      source: 'Cloud Services',
      eventsPerHour: 345678,
      alerts: 123,
      falsePositives: 15,
      coverage: 87.4,
      status: 'operational'
    }
  ]);

  const [incidentResponse, setIncidentResponse] = useState([
    {
      id: 'INC-2026-0347',
      title: 'Ransomware Attempt on Finance Network',
      severity: 'critical',
      status: 'active',
      createdAt: new Date(Date.now() - 450000),
      assignedTo: 'IR Team Alpha',
      affectedSystems: 14,
      estimatedImpact: 'high',
      progress: 67,
      nextAction: 'Isolate affected hosts'
    },
    {
      id: 'INC-2026-0346',
      title: 'Suspicious Login Activity - Executive Accounts',
      severity: 'high',
      status: 'investigating',
      createdAt: new Date(Date.now() - 720000),
      assignedTo: 'IR Team Beta',
      affectedSystems: 3,
      estimatedImpact: 'medium',
      progress: 45,
      nextAction: 'Password reset and MFA enforcement'
    },
    {
      id: 'INC-2026-0345',
      title: 'DDoS Attack on Public Web Services',
      severity: 'medium',
      status: 'mitigated',
      createdAt: new Date(Date.now() - 1800000),
      assignedTo: 'IR Team Gamma',
      affectedSystems: 8,
      estimatedImpact: 'low',
      progress: 95,
      nextAction: 'Post-incident analysis'
    },
    {
      id: 'INC-2026-0344',
      title: 'Malicious File Upload Detected',
      severity: 'high',
      status: 'contained',
      createdAt: new Date(Date.now() - 900000),
      assignedTo: 'IR Team Alpha',
      affectedSystems: 1,
      estimatedImpact: 'medium',
      progress: 85,
      nextAction: 'Malware analysis completion'
    }
  ]);

  const [vulnerabilityManagement, setVulnerabilityManagement] = useState([
    {
      category: 'Critical',
      count: 12,
      resolved: 8,
      overdue: 2,
      avgResolutionTime: 2.3,
      trend: 'decreasing'
    },
    {
      category: 'High',
      count: 89,
      resolved: 67,
      overdue: 8,
      avgResolutionTime: 7.4,
      trend: 'stable'
    },
    {
      category: 'Medium',
      count: 234,
      resolved: 189,
      overdue: 15,
      avgResolutionTime: 14.7,
      trend: 'increasing'
    },
    {
      category: 'Low',
      count: 567,
      resolved: 423,
      overdue: 34,
      avgResolutionTime: 30.2,
      trend: 'stable'
    }
  ]);

  const [securityAnalytics, setSecurityAnalytics] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      threats: 46234,
      incidents: 21,
      detectionTime: 4.9,
      responseTime: 12.8
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      threats: 46789,
      incidents: 22,
      detectionTime: 4.6,
      responseTime: 12.5
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      threats: 47123,
      incidents: 23,
      detectionTime: 4.8,
      responseTime: 12.1
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      threats: 47456,
      incidents: 22,
      detectionTime: 4.5,
      responseTime: 12.4
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      threats: 47678,
      incidents: 23,
      detectionTime: 4.8,
      responseTime: 12.2
    },
    {
      time: new Date().toLocaleTimeString(),
      threats: 47892,
      incidents: 23,
      detectionTime: 4.7,
      responseTime: 12.3
    }
  ]);

  const [securityAlerts, setSecurityAlerts] = useState([
    {
      id: 'SEC-001',
      severity: 'critical',
      type: 'Intrusion Detection',
      message: 'Multiple failed login attempts detected from suspicious IP - potential brute force attack',
      timestamp: new Date(),
      status: 'active',
      source: 'Network Monitoring',
      impact: 'immediate'
    },
    {
      id: 'SEC-002', 
      severity: 'warning',
      type: 'Policy Violation',
      message: 'Unauthorized software installation detected on workstation in R&D department',
      timestamp: new Date(Date.now() - 120000),
      status: 'investigating',
      source: 'Endpoint Detection',
      impact: 'medium'
    },
    {
      id: 'SEC-003',
      severity: 'info',
      type: 'System Update',
      message: 'Security patch deployment completed across 95% of enterprise endpoints',
      timestamp: new Date(Date.now() - 300000),
      status: 'resolved',
      source: 'Patch Management',
      impact: 'positive'
    }
  ]);

  const [complianceMetrics, setComplianceMetrics] = useState([
    {
      framework: 'ISO 27001',
      status: 'compliant',
      score: 97.8,
      lastAudit: '2026-02-15',
      nextAudit: '2026-08-15',
      findings: 2
    },
    {
      framework: 'SOC 2 Type II',
      status: 'compliant', 
      score: 96.4,
      lastAudit: '2026-01-20',
      nextAudit: '2026-07-20',
      findings: 1
    },
    {
      framework: 'PCI DSS',
      status: 'compliant',
      score: 98.9,
      lastAudit: '2026-03-01',
      nextAudit: '2026-09-01',
      findings: 0
    },
    {
      framework: 'NIST Framework',
      status: 'compliant',
      score: 94.7,
      lastAudit: '2026-02-28',
      nextAudit: '2026-08-28',
      findings: 3
    },
    {
      framework: 'GDPR',
      status: 'compliant',
      score: 99.1,
      lastAudit: '2026-02-10',
      nextAudit: '2026-08-10',
      findings: 0
    }
  ]);

  const [socTeam, setSocTeam] = useState([
    {
      role: 'SOC Manager',
      count: 2,
      availability: 100,
      workload: 78.4,
      efficiency: 94.2
    },
    {
      role: 'Security Analysts L1',
      count: 8,
      availability: 87.5,
      workload: 89.7,
      efficiency: 86.3
    },
    {
      role: 'Security Analysts L2',
      count: 6,
      availability: 83.3,
      workload: 92.1,
      efficiency: 91.8
    },
    {
      role: 'Incident Responders',
      count: 4,
      availability: 100,
      workload: 76.8,
      efficiency: 93.7
    },
    {
      role: 'Threat Hunters',
      count: 3,
      availability: 100,
      workload: 84.2,
      efficiency: 88.9
    }
  ]);

  const [systemMetrics, setSystemMetrics] = useState({
    siemUptime: 99.97, // %
    soarPlatform: 99.94,
    threatIntelligence: 99.89,
    endpointProtection: 98.7,
    avgQueryTime: 0.847, // seconds
    dataIngestionRate: 2847392, // events/hour
    falsePositiveRate: 2.3, // %
    automationLevel: 76.8 // %
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update security metrics
      setSecurityMetrics(prev => ({
        ...prev,
        totalThreats: prev.totalThreats + Math.floor(Math.random() * 100),
        activeIncidents: Math.max(15, Math.min(35, prev.activeIncidents + Math.floor((Math.random() - 0.5) * 3))),
        resolvedIncidents: prev.resolvedIncidents + Math.floor(Math.random() * 5),
        criticalAlerts: Math.max(0, Math.min(15, prev.criticalAlerts + Math.floor((Math.random() - 0.6) * 2))),
        meanTimeToDetection: Math.max(2, Math.min(10, prev.meanTimeToDetection + (Math.random() - 0.5) * 0.5)),
        meanTimeToResponse: Math.max(8, Math.min(20, prev.meanTimeToResponse + (Math.random() - 0.5) * 1)),
        securityScore: Math.max(85, Math.min(100, prev.securityScore + (Math.random() - 0.5) * 0.5)),
        complianceScore: Math.max(90, Math.min(100, prev.complianceScore + (Math.random() - 0.5) * 0.2))
      }));

      // Update threat detection
      setThreatDetection(prev => prev.map(threat => {
        const statusTransitions = {
          'investigating': ['investigating', 'contained', 'mitigated'],
          'contained': ['contained', 'mitigated', 'resolved'],
          'mitigated': ['mitigated', 'resolved'],
          'monitoring': ['monitoring', 'investigating', 'resolved'],
          'resolved': ['resolved']
        };
        
        const possibleStatuses = statusTransitions[threat.status] || [threat.status];
        const newStatus = Math.random() > 0.95 ? 
          possibleStatuses[Math.floor(Math.random() * possibleStatuses.length)] : threat.status;

        return {
          ...threat,
          status: newStatus,
          lastActivity: Math.random() > 0.8 ? new Date() : threat.lastActivity,
          riskScore: Math.max(1, Math.min(10, threat.riskScore + (Math.random() - 0.5) * 0.2))
        };
      }));

      // Update SIEM analytics
      setSiemAnalytics(prev => prev.map(source => ({
        ...source,
        eventsPerHour: Math.max(source.eventsPerHour * 0.8, Math.min(source.eventsPerHour * 1.2, source.eventsPerHour + Math.floor((Math.random() - 0.5) * 10000))),
        alerts: Math.max(0, source.alerts + Math.floor((Math.random() - 0.7) * 10)),
        falsePositives: Math.max(0, source.falsePositives + Math.floor((Math.random() - 0.8) * 3)),
        coverage: Math.max(80, Math.min(100, source.coverage + (Math.random() - 0.5) * 1))
      })));

      // Update incident response
      setIncidentResponse(prev => prev.map(incident => {
        if (incident.status === 'resolved') return incident;
        
        const newProgress = Math.min(100, incident.progress + Math.floor(Math.random() * 5));
        let newStatus = incident.status;
        
        if (newProgress >= 95) newStatus = 'resolved';
        else if (newProgress >= 80 && incident.status === 'active') newStatus = 'mitigated';
        else if (newProgress >= 60 && incident.status === 'investigating') newStatus = 'active';
        
        return {
          ...incident,
          progress: newProgress,
          status: newStatus
        };
      }));

      // Update security analytics
      const newSecurityData = {
        time: new Date().toLocaleTimeString(),
        threats: securityMetrics.totalThreats,
        incidents: securityMetrics.activeIncidents,
        detectionTime: securityMetrics.meanTimeToDetection,
        responseTime: securityMetrics.meanTimeToResponse
      };
      
      setSecurityAnalytics(prev => [...prev.slice(1), newSecurityData]);

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        siemUptime: Math.max(99.5, Math.min(100, prev.siemUptime + (Math.random() - 0.3) * 0.01)),
        soarPlatform: Math.max(99.5, Math.min(100, prev.soarPlatform + (Math.random() - 0.3) * 0.01)),
        avgQueryTime: Math.max(0.3, Math.min(2.0, prev.avgQueryTime + (Math.random() - 0.5) * 0.1)),
        dataIngestionRate: Math.max(prev.dataIngestionRate * 0.9, Math.min(prev.dataIngestionRate * 1.1, prev.dataIngestionRate + Math.floor((Math.random() - 0.5) * 50000))),
        falsePositiveRate: Math.max(1, Math.min(5, prev.falsePositiveRate + (Math.random() - 0.5) * 0.2)),
        automationLevel: Math.max(60, Math.min(90, prev.automationLevel + (Math.random() - 0.5) * 1))
      }));

      // Occasionally add new security alerts
      if (Math.random() > 0.93) {
        const alertTypes = ['Intrusion Detection', 'Malware Alert', 'Policy Violation', 'Data Loss Prevention', 'Anomaly Detection'];
        const severities = ['info', 'warning', 'critical'];
        const sources = siemAnalytics.map(s => s.source);
        
        const newAlert = {
          id: `SEC-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time security operations alert generated',
          timestamp: new Date(),
          status: 'active',
          source: sources[Math.floor(Math.random() * sources.length)],
          impact: ['low', 'medium', 'high', 'immediate'][Math.floor(Math.random() * 4)]
        };
        
        setSecurityAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [securityMetrics.totalThreats, securityMetrics.activeIncidents, securityMetrics.meanTimeToDetection, securityMetrics.meanTimeToResponse]);

  const getThreatSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'high': return '#F59E0B';
      case 'medium': return '#3B82F6';
      case 'low': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getThreatStatusColor = (status) => {
    switch (status) {
      case 'investigating': return '#F59E0B';
      case 'contained': return '#8B5CF6';
      case 'mitigated': return '#3B82F6';
      case 'monitoring': return '#10B981';
      case 'resolved': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getIncidentStatusColor = (status) => {
    switch (status) {
      case 'active': return '#EF4444';
      case 'investigating': return '#F59E0B';
      case 'mitigated': return '#3B82F6';
      case 'resolved': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'info': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getComplianceStatusColor = (status) => {
    switch (status) {
      case 'compliant': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'non_compliant': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const threatDistribution = [
    { name: 'Malware', value: 32.4, color: '#EF4444' },
    { name: 'Phishing', value: 28.7, color: '#F59E0B' },
    { name: 'Intrusion', value: 19.3, color: '#8B5CF6' },
    { name: 'Data Breach', value: 12.8, color: '#3B82F6' },
    { name: 'Insider Threat', value: 6.8, color: '#10B981' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Shield className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">CYBERSECURITY OPERATIONS CENTER</h1>
            <p className="text-gray-400">24/7 threat detection, SIEM analytics, incident response, vulnerability management & security compliance monitoring</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">
              {securityMetrics.activeIncidents}
            </div>
            <div className="text-xs text-gray-400">ACTIVE THREATS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              {securityMetrics.securityScore.toFixed(1)}
            </div>
            <div className="text-xs text-gray-400">SECURITY SCORE</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{securityMetrics.meanTimeToDetection.toFixed(1)}min</div>
            <div className="text-xs text-gray-400">DETECTION TIME</div>
          </div>
        </div>
      </div>

      {/* Security KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">THREATS</span>
          </div>
          <div className="text-xl font-bold text-white">{securityMetrics.totalThreats.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Total Detected</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">INCIDENTS</span>
          </div>
          <div className="text-xl font-bold text-white">{securityMetrics.resolvedIncidents}</div>
          <div className="text-xs text-gray-400">Resolved</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Eye className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">CRITICAL</span>
          </div>
          <div className="text-xl font-bold text-white">{securityMetrics.criticalAlerts}</div>
          <div className="text-xs text-gray-400">Alerts</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">RESPONSE</span>
          </div>
          <div className="text-xl font-bold text-white">{securityMetrics.meanTimeToResponse.toFixed(1)}min</div>
          <div className="text-xs text-gray-400">Mean Time</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Lock className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">COMPLIANCE</span>
          </div>
          <div className="text-xl font-bold text-white">{securityMetrics.complianceScore.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Score</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-xs text-gray-400">SIEM UPTIME</span>
          </div>
          <div className="text-xl font-bold text-white">{systemMetrics.siemUptime.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">System</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Threat Detection */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
            THREAT DETECTION
          </h3>
          <div className="space-y-3">
            {threatDetection.map(threat => (
              <div key={threat.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getThreatSeverityColor(threat.severity) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{threat.type}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getThreatSeverityColor(threat.severity)}20`, 
                      color: getThreatSeverityColor(threat.severity) 
                    }}>
                      {threat.severity.toUpperCase()}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getThreatStatusColor(threat.status)}20`, 
                      color: getThreatStatusColor(threat.status) 
                    }}>
                      {threat.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  ID: <span className="text-blue-400">{threat.id}</span> • 
                  TTL: <span className="text-purple-400">{threat.ttl}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Source IP</span>
                    <span className="text-red-400">{threat.sourceIP}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target</span>
                    <span className="text-blue-400">{threat.targetAsset.split('-')[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Risk Score</span>
                    <span className="text-yellow-400">{threat.riskScore.toFixed(1)}/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Analyst</span>
                    <span className="text-white">{threat.analyst.split(' ')[0]}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-green-400">
                    Detected: {threat.detectionTime.toLocaleTimeString()}
                  </span>
                  <span className="text-gray-500">
                    Last: {threat.lastActivity.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIEM Analytics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Eye className="w-5 h-5 mr-2 text-blue-400" />
            SIEM ANALYTICS
          </h3>
          <div className="space-y-3">
            {siemAnalytics.map((source, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{source.source}</span>
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: source.status === 'operational' ? '#10B981' : '#F59E0B' }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Events/Hr</span>
                    <span className="text-green-400">{(source.eventsPerHour / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Alerts</span>
                    <span className="text-blue-400">{source.alerts}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Coverage</span>
                    <span className="text-purple-400">{source.coverage.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">False+</span>
                    <span className="text-white">{source.falsePositives}</span>
                  </div>
                </div>
                
                <div className="text-xs text-yellow-400">
                  Accuracy: {((source.alerts - source.falsePositives) / source.alerts * 100).toFixed(1)}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Incident Response & Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2 text-orange-400" />
            INCIDENT RESPONSE & ALERTS
          </h3>
          <div className="space-y-3 mb-4">
            {incidentResponse.slice(0, 3).map(incident => (
              <div key={incident.id} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{incident.id}</span>
                  <span 
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ 
                      backgroundColor: `${getIncidentStatusColor(incident.status)}20`, 
                      color: getIncidentStatusColor(incident.status) 
                    }}
                  >
                    {incident.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{incident.title}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Severity</span>
                    <span style={{ color: getThreatSeverityColor(incident.severity) }}>
                      {incident.severity.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-blue-400">{incident.progress}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Systems</span>
                    <span className="text-purple-400">{incident.affectedSystems}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Team</span>
                    <span className="text-white">{incident.assignedTo.split(' ')[2]}</span>
                  </div>
                </div>
                
                <div className="text-xs text-yellow-400">
                  Next: {incident.nextAction}
                </div>
              </div>
            ))}
          </div>

          {/* Security Alerts */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">Real-time Alerts</div>
            <div className="space-y-2">
              {securityAlerts.slice(0, 3).map(alert => (
                <div key={alert.id} className="bg-gray-800 rounded-lg p-2 border-l-2" style={{ borderLeftColor: getAlertSeverityColor(alert.severity) }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-white">{alert.type}</span>
                    <span className="text-xs px-1 py-0.5 rounded-full" style={{ 
                      backgroundColor: `${getAlertSeverityColor(alert.severity)}20`, 
                      color: getAlertSeverityColor(alert.severity) 
                    }}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mb-1">{alert.message}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400">{alert.source}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Security Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Security Operations */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME SECURITY OPERATIONS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={securityAnalytics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="threats" 
                stroke="#EF4444" 
                strokeWidth={3}
                name="Threats Detected"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="incidents" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Active Incidents"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="detectionTime" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Detection Time (min)"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="responseTime" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Response Time (min)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Threat Distribution & Compliance Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">THREAT DISTRIBUTION & COMPLIANCE STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={threatDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {threatDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value) => [`${value}%`, 'Threat Type']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-2">
              {threatDistribution.map((threat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: threat.color }}
                    />
                    <span className="text-gray-400 text-sm">{threat.name}</span>
                  </div>
                  <span className="text-white font-semibold">{threat.value}%</span>
                </div>
              ))}
              
              {/* Compliance Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">Compliance Status</div>
                <div className="space-y-1 text-xs">
                  {complianceMetrics.slice(0, 4).map((framework, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-400">{framework.framework}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400">{framework.score.toFixed(1)}%</span>
                        <span 
                          className="w-2 h-2 rounded-full" 
                          style={{ backgroundColor: getComplianceStatusColor(framework.status) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Security Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-white font-semibold">Security Automation Status</span>
              <span className="text-xs text-blue-400">{systemMetrics.automationLevel.toFixed(1)}% Automated</span>
            </div>
            <div className="space-y-2">
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-blue-400">SOAR Platform</span>
                  <span className="text-xs text-green-400">{systemMetrics.soarPlatform.toFixed(2)}%</span>
                </div>
                <div className="text-xs text-gray-300">Automated response workflows active</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-purple-400">Threat Intelligence</span>
                  <span className="text-xs text-green-400">{systemMetrics.threatIntelligence.toFixed(2)}%</span>
                </div>
                <div className="text-xs text-gray-300">Real-time feed integration operational</div>
              </div>
            </div>
          </div>
          
          {/* Cybersecurity Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Cybersecurity Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-xs transition-colors">
                  <Shield className="w-3 h-3 inline mr-1" />
                  Threat Hunting
                </button>
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Eye className="w-3 h-3 inline mr-1" />
                  SIEM Console
                </button>
                <button className="px-3 py-1 bg-orange-600 hover:bg-orange-700 rounded text-xs transition-colors">
                  <Target className="w-3 h-3 inline mr-1" />
                  Incident Response
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityOperationsCenter;