// Unified Security Operations Center - 2026 Enterprise Trends
// Inspired by Kyndryl Cyber Defense, Cisco XDR/Splunk, AI-driven SOCs, unified cyber-physical security
import { useState, useEffect } from 'react';
import { 
  Shield, AlertTriangle, Eye, Activity, Zap, Lock,
  Wifi, Server, Globe, Users, Brain, Target,
  TrendingUp, TrendingDown, Clock, CheckCircle, XCircle,
  Network, Database, Cloud, MonitorSpeaker, Camera,
  Bell, Settings, Terminal, GitBranch, Search, Filter
} from 'lucide-react';

export default function UnifiedSecurityOperationsCenter() {
  const [securityMetrics, setSecurityMetrics] = useState({
    threatLevel: 'ELEVATED',
    incidentsToday: 47,
    blockedAttacks: 2847,
    vulnerabilities: {
      critical: 3,
      high: 12,
      medium: 45,
      low: 89
    },
    complianceScore: 94.7,
    meanTimeToDetect: '4.2min',
    meanTimeToRespond: '12.8min'
  });

  const [unifiedOperations, setUnifiedOperations] = useState({
    networkSecurity: {
      status: 'protected',
      firewallRules: 15234,
      activeConnections: 4567,
      blockedIPs: 234,
      bandwidth: 87.3,
      intrusions: 23
    },
    cyberSecurity: {
      status: 'monitoring',
      endpointProtection: 1247,
      emailSecurity: 98.7,
      webFiltering: 94.2,
      dataLossPreventionRules: 567,
      malwareDetected: 12
    },
    physicalSecurity: {
      status: 'secured',
      accessPoints: 45,
      activeCameras: 128,
      badgeAccess: 1567,
      perimeter: 'intact',
      environmentalSensors: 34
    }
  });

  const [aiDrivenInsights, setAiDrivenInsights] = useState([
    {
      type: 'threat-correlation',
      confidence: 94.7,
      title: 'Advanced Persistent Threat Pattern Detected',
      description: 'Multiple lateral movement attempts across 3 workstations',
      severity: 'high',
      recommendation: 'Isolate affected systems and initiate incident response',
      timeDetected: '3m ago',
      affectedAssets: ['WS-001', 'WS-007', 'WS-012']
    },
    {
      type: 'behavioral-anomaly',
      confidence: 87.3,
      title: 'Unusual Data Access Pattern',
      description: 'User accessing files outside normal business hours',
      severity: 'medium',
      recommendation: 'Verify user identity and monitor activity',
      timeDetected: '12m ago',
      affectedAssets: ['DB-PROD-01']
    },
    {
      type: 'vulnerability-exploit',
      confidence: 92.1,
      title: 'Potential Zero-Day Exploitation Attempt',
      description: 'Unusual network traffic to newly discovered CVE endpoints',
      severity: 'critical',
      recommendation: 'Apply emergency patches and monitor endpoints',
      timeDetected: '5m ago',
      affectedAssets: ['CVE-2026-1234']
    },
    {
      type: 'compliance-drift',
      confidence: 88.9,
      title: 'Security Configuration Drift Detected',
      description: 'Multiple systems deviated from baseline security posture',
      severity: 'medium',
      recommendation: 'Initiate automated remediation and compliance scan',
      timeDetected: '25m ago',
      affectedAssets: ['CONFIG-BASELINE-v2.4']
    }
  ]);

  const [securityOperations, setSecurityOperations] = useState([
    {
      id: 'inc-001',
      type: 'Security Incident',
      title: 'Suspicious Network Activity',
      severity: 'high',
      status: 'investigating',
      assignee: 'SOC Analyst L2',
      timeToResolve: '45m',
      progress: 67,
      assets: ['FW-001', 'SW-CORE-01'],
      lastUpdate: '2m ago'
    },
    {
      id: 'vul-002',
      type: 'Vulnerability Management',
      title: 'Critical CVE Remediation',
      severity: 'critical',
      status: 'patching',
      assignee: 'Security Engineer',
      timeToResolve: '2h',
      progress: 34,
      assets: ['SRV-DB-001', 'SRV-WEB-02'],
      lastUpdate: '5m ago'
    },
    {
      id: 'com-003',
      type: 'Compliance Check',
      title: 'Quarterly SOX Audit Prep',
      severity: 'medium',
      status: 'in-progress',
      assignee: 'Compliance Officer',
      timeToResolve: '3d',
      progress: 78,
      assets: ['AUDIT-Q1-2026'],
      lastUpdate: '1h ago'
    },
    {
      id: 'acc-004',
      type: 'Access Review',
      title: 'Privileged Account Audit',
      severity: 'medium',
      status: 'reviewing',
      assignee: 'Identity Manager',
      timeToResolve: '1d',
      progress: 23,
      assets: ['AD-PRIVILEGED'],
      lastUpdate: '15m ago'
    }
  ]);

  const [threatIntelligence, setThreatIntelligence] = useState({
    globalThreatLevel: 'MODERATE',
    activeCampaigns: 12,
    iocs: {
      newToday: 234,
      total: 45678,
      confidence: 'high'
    },
    geopoliticalRisk: 'LOW',
    industryTargeting: 'MODERATE',
    attribution: {
      stateSponsored: 23,
      cybercriminal: 67,
      hacktivist: 8,
      unknown: 2
    }
  });

  useEffect(() => {
    // Real-time security operations updates
    const interval = setInterval(() => {
      // Update security metrics
      setSecurityMetrics(prev => ({
        ...prev,
        incidentsToday: prev.incidentsToday + Math.floor(Math.random() * 3),
        blockedAttacks: prev.blockedAttacks + Math.floor(Math.random() * 50),
        complianceScore: Math.max(85, Math.min(99, prev.complianceScore + (Math.random() - 0.4) * 1.5))
      }));

      // Update unified operations
      setUnifiedOperations(prev => ({
        ...prev,
        networkSecurity: {
          ...prev.networkSecurity,
          activeConnections: Math.max(3000, Math.min(8000, prev.networkSecurity.activeConnections + Math.floor((Math.random() - 0.5) * 200))),
          bandwidth: Math.max(60, Math.min(95, prev.networkSecurity.bandwidth + (Math.random() - 0.5) * 5))
        },
        cyberSecurity: {
          ...prev.cyberSecurity,
          emailSecurity: Math.max(95, Math.min(99.5, prev.cyberSecurity.emailSecurity + (Math.random() - 0.3) * 0.8))
        }
      }));

      // Update operations progress
      setSecurityOperations(prev => prev.map(op => ({
        ...op,
        progress: op.status === 'investigating' || op.status === 'patching' || op.status === 'in-progress' 
          ? Math.min(100, op.progress + Math.floor(Math.random() * 5)) 
          : op.progress
      })));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'high': return 'text-orange-400 bg-orange-900/20 border-orange-500/30';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'low': return 'text-green-400 bg-green-900/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'protected': case 'secured': return <Shield className="w-4 h-4 text-green-400" />;
      case 'monitoring': return <Eye className="w-4 h-4 text-blue-400" />;
      case 'investigating': return <Search className="w-4 h-4 text-yellow-400" />;
      case 'patching': return <Settings className="w-4 h-4 text-orange-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getThreatLevelColor = (level) => {
    switch(level) {
      case 'CRITICAL': return 'text-red-400 bg-red-900/30';
      case 'ELEVATED': return 'text-orange-400 bg-orange-900/30';
      case 'MODERATE': return 'text-yellow-400 bg-yellow-900/30';
      case 'LOW': return 'text-green-400 bg-green-900/30';
      default: return 'text-gray-400 bg-gray-900/30';
    }
  };

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-red-400 flex items-center">
            <Shield className="w-8 h-8 mr-3" />
            Unified Security Operations Center
          </h1>
          <div className="text-sm text-gray-400 flex items-center space-x-4">
            <div className={`px-3 py-1 rounded-full font-semibold ${getThreatLevelColor(securityMetrics.threatLevel)}`}>
              THREAT LEVEL: {securityMetrics.threatLevel}
            </div>
            <div>Last Update: {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        <p className="text-gray-300">AI-driven unified cyber-physical security operations with real-time threat intelligence</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Main Operations Dashboard */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Security Metrics Overview */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Security Posture
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Incidents Today</span>
                  <AlertTriangle className="w-4 h-4 text-orange-400" />
                </div>
                <div className="text-2xl font-bold text-orange-400">
                  {securityMetrics.incidentsToday}
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Attacks Blocked</span>
                  <Shield className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {securityMetrics.blockedAttacks.toLocaleString()}
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">MTTD</span>
                  <Clock className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {securityMetrics.meanTimeToDetect}
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Compliance</span>
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {securityMetrics.complianceScore.toFixed(1)}%
                </div>
              </div>
            </div>

            {/* Unified Operations Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(unifiedOperations).map(([domain, data]) => (
                <div key={domain} className={`border rounded-lg p-4 ${getSeverityColor('low')}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(data.status)}
                      <span className="font-semibold capitalize text-white">
                        {domain.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </div>
                    <span className="text-xs text-green-400 font-semibold uppercase">
                      {data.status}
                    </span>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    {Object.entries(data).slice(1).map(([metric, value]) => (
                      <div key={metric} className="flex justify-between">
                        <span className="text-gray-400 capitalize">
                          {metric.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-white">
                          {typeof value === 'number' ? 
                            (metric.includes('bandwidth') || metric.includes('Security') ? 
                              `${value.toFixed(1)}%` : value.toLocaleString()) : 
                            value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI-Driven Security Insights */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI-Driven Security Insights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiDrivenInsights.map((insight, index) => (
                <div key={index} className={`border rounded-lg p-4 ${getSeverityColor(insight.severity)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">{insight.title}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {insight.confidence.toFixed(1)}% confidence
                    </span>
                  </div>
                  
                  <div className="text-xs text-gray-300 mb-2">{insight.description}</div>
                  <div className="text-xs text-blue-400 mb-2">{insight.recommendation}</div>
                  
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Detected: {insight.timeDetected}</span>
                    <span>Assets: {insight.affectedAssets.length}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-4">
          
          {/* Active Operations */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Active Operations
            </h2>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {securityOperations.map((operation) => (
                <div key={operation.id} className={`border rounded p-3 ${getSeverityColor(operation.severity)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">{operation.title}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {operation.type}
                    </span>
                  </div>
                  
                  <div className="text-xs text-gray-400 mb-2">
                    Assignee: {operation.assignee}
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${operation.progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>ETA: {operation.timeToResolve}</span>
                    <span>{operation.lastUpdate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Threat Intelligence */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Threat Intelligence
            </h2>
            
            <div className="space-y-3">
              <div className={`p-3 rounded border ${getThreatLevelColor(threatIntelligence.globalThreatLevel)}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white text-sm">Global Threat Level</span>
                  <Eye className="w-4 h-4" />
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level:</span>
                    <span className="font-semibold">{threatIntelligence.globalThreatLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Active Campaigns:</span>
                    <span>{threatIntelligence.activeCampaigns}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">New IOCs Today:</span>
                    <span>{threatIntelligence.iocs.newToday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Industry Risk:</span>
                    <span>{threatIntelligence.industryTargeting}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vulnerability Status */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Vulnerabilities
            </h2>
            
            <div className="space-y-2">
              {Object.entries(securityMetrics.vulnerabilities).map(([severity, count]) => (
                <div key={severity} className="flex items-center justify-between">
                  <span className="text-sm capitalize text-gray-400">{severity}:</span>
                  <span className={`font-semibold ${
                    severity === 'critical' ? 'text-red-400' :
                    severity === 'high' ? 'text-orange-400' :
                    severity === 'medium' ? 'text-yellow-400' : 'text-green-400'
                  }`}>
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}