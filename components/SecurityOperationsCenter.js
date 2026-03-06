import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Shield, AlertTriangle, Eye, Activity, Lock, Unlock, Zap, Clock, CheckCircle, XCircle, AlertCircle, TrendingUp, Target } from 'lucide-react';

const SecurityOperationsCenter = () => {
  const [securityStatus, setSecurityStatus] = useState({
    threatLevel: 'MODERATE',
    activeThreats: 7,
    blockedAttacks: 1247,
    vulnerabilities: 3,
    securityScore: 87.4,
    incidentResponse: 'GREEN'
  });

  const [threats, setThreats] = useState([
    {
      id: 'THREAT-001',
      type: 'Unusual Token Consumption',
      severity: 'HIGH',
      urgency: 94,
      source: 'AI Agent Monitoring',
      target: 'Research Agent',
      status: 'INVESTIGATING',
      timestamp: new Date(),
      description: 'Research Agent showing 340% above normal token usage patterns',
      attackSignal: 'ANOMALOUS_BEHAVIOR',
      mitigation: 'Rate limiting applied',
      analyst: 'Security AI'
    },
    {
      id: 'THREAT-002', 
      type: 'Suspicious Login Attempt',
      severity: 'MEDIUM',
      urgency: 67,
      source: 'Access Control',
      target: 'Mission Control Dashboard',
      status: 'BLOCKED',
      timestamp: new Date(Date.now() - 900000),
      description: 'Multiple failed authentication attempts from unknown IP',
      attackSignal: 'BRUTE_FORCE',
      mitigation: 'IP blocked for 24h',
      analyst: 'Auto-Response'
    },
    {
      id: 'THREAT-003',
      type: 'Data Exfiltration Pattern',
      severity: 'CRITICAL',
      urgency: 98,
      source: 'Network Monitor', 
      target: 'Agent Workspace',
      status: 'CONTAINED',
      timestamp: new Date(Date.now() - 1800000),
      description: 'Unusual outbound data transfer detected from workspace directory',
      attackSignal: 'DATA_LEAK',
      mitigation: 'Network isolation activated',
      analyst: 'SOC Tier 2'
    },
    {
      id: 'THREAT-004',
      type: 'Privilege Escalation',
      severity: 'LOW',
      urgency: 23,
      source: 'System Monitor',
      target: 'Content Processor',
      status: 'MONITORING',
      timestamp: new Date(Date.now() - 3600000),
      description: 'Agent attempting to access restricted system resources',
      attackSignal: 'PRIVILEGE_ABUSE',
      mitigation: 'Access restrictions enforced',
      analyst: 'Auto-Monitor'
    }
  ]);

  const [threatIntelligence, setThreatIntelligence] = useState([
    {
      id: 'INTEL-001',
      threat: 'AI Model Poisoning Campaign',
      confidence: 89,
      severity: 'HIGH',
      source: 'Global Threat Feed',
      indicators: ['Unusual training data', 'Model performance degradation'],
      recommendation: 'Implement model validation checks'
    },
    {
      id: 'INTEL-002', 
      threat: 'Agent Infrastructure Targeting',
      confidence: 76,
      severity: 'MEDIUM',
      source: 'Industry Reports',
      indicators: ['API abuse patterns', 'Resource exhaustion attacks'],
      recommendation: 'Enhance rate limiting and monitoring'
    },
    {
      id: 'INTEL-003',
      threat: 'Credential Harvesting Operations',
      confidence: 92,
      severity: 'CRITICAL',
      source: 'Dark Web Monitoring',
      indicators: ['Phishing campaigns', 'Social engineering'],
      recommendation: 'Mandatory 2FA and security training'
    }
  ]);

  const [securityMetrics, setSecurityMetrics] = useState([]);
  const [responseMetrics, setResponseMetrics] = useState([]);

  // Generate security metrics
  useEffect(() => {
    const generateSecurityMetrics = () => {
      const metrics = [];
      for (let i = 23; i >= 0; i--) {
        const hour = new Date();
        hour.setHours(hour.getHours() - i);
        
        metrics.push({
          time: hour.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          threats: Math.floor(Math.random() * 15) + 2,
          blocked: Math.floor(Math.random() * 50) + 10,
          investigated: Math.floor(Math.random() * 8) + 1,
          resolved: Math.floor(Math.random() * 12) + 3,
          securityScore: 85 + Math.random() * 10
        });
      }
      return metrics;
    };

    const generateResponseMetrics = () => {
      return [
        { metric: 'Mean Time to Detect', value: '2.3min', target: '<5min', status: 'good' },
        { metric: 'Mean Time to Respond', value: '8.7min', target: '<15min', status: 'good' },
        { metric: 'Mean Time to Contain', value: '23.4min', target: '<30min', status: 'good' },
        { metric: 'Mean Time to Resolve', value: '1.8hrs', target: '<4hrs', status: 'good' },
        { metric: 'False Positive Rate', value: '3.2%', target: '<5%', status: 'good' },
        { metric: 'Alert Fatigue Index', value: '12%', target: '<20%', status: 'good' }
      ];
    };

    setSecurityMetrics(generateSecurityMetrics());
    setResponseMetrics(generateResponseMetrics());
  }, []);

  // Real-time security updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update security status
      setSecurityStatus(prev => ({
        ...prev,
        securityScore: Math.max(80, Math.min(100, prev.securityScore + (Math.random() - 0.5) * 2)),
        blockedAttacks: prev.blockedAttacks + Math.floor(Math.random() * 3)
      }));

      // Occasionally add new threats
      if (Math.random() > 0.9) {
        const newThreat = {
          id: `THREAT-${Date.now()}`,
          type: ['API Abuse', 'Resource Exhaustion', 'Unauthorized Access'][Math.floor(Math.random() * 3)],
          severity: ['LOW', 'MEDIUM', 'HIGH'][Math.floor(Math.random() * 3)],
          urgency: Math.floor(Math.random() * 100),
          source: ['AI Monitor', 'Network Scanner', 'Endpoint Detection'][Math.floor(Math.random() * 3)],
          target: ['Agent Network', 'Mission Control', 'Data Storage'][Math.floor(Math.random() * 3)],
          status: 'NEW',
          timestamp: new Date(),
          description: 'Real-time threat detection alert',
          attackSignal: 'REAL_TIME_DETECTION',
          mitigation: 'Automated response initiated',
          analyst: 'AI Security'
        };
        
        setThreats(prev => [newThreat, ...prev.slice(0, 9)]);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return '#DC2626';
      case 'HIGH': return '#EF4444';
      case 'MEDIUM': return '#F59E0B';
      case 'LOW': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'RESOLVED': return '#10B981';
      case 'INVESTIGATING': return '#F59E0B';
      case 'BLOCKED': return '#3B82F6';
      case 'CONTAINED': return '#8B5CF6';
      case 'MONITORING': return '#6B7280';
      case 'NEW': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'RESOLVED': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'INVESTIGATING': return <Eye className="w-4 h-4 text-yellow-400" />;
      case 'BLOCKED': return <Lock className="w-4 h-4 text-blue-400" />;
      case 'CONTAINED': return <Shield className="w-4 h-4 text-purple-400" />;
      case 'MONITORING': return <Activity className="w-4 h-4 text-gray-400" />;
      case 'NEW': return <AlertCircle className="w-4 h-4 text-red-400" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getThreatLevelColor = () => {
    switch (securityStatus.threatLevel) {
      case 'LOW': return '#10B981';
      case 'MODERATE': return '#F59E0B';
      case 'HIGH': return '#EF4444';
      case 'CRITICAL': return '#DC2626';
      default: return '#6B7280';
    }
  };

  const threatDistribution = [
    { name: 'Network', value: 34, color: '#EF4444' },
    { name: 'Endpoint', value: 28, color: '#F59E0B' },
    { name: 'Application', value: 22, color: '#3B82F6' },
    { name: 'Identity', value: 16, color: '#10B981' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Shield className="w-8 h-8 text-red-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">SECURITY OPERATIONS CENTER</h1>
            <p className="text-gray-400">Real-time threat detection, incident response, and security intelligence</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: getThreatLevelColor() }}>
              {securityStatus.threatLevel}
            </div>
            <div className="text-xs text-gray-400">THREAT LEVEL</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">{securityStatus.activeThreats}</div>
            <div className="text-xs text-gray-400">ACTIVE THREATS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{securityStatus.securityScore.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">SECURITY SCORE</div>
          </div>
        </div>
      </div>

      {/* Security Status Cards */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className={`text-xs px-2 py-1 rounded-full ${
              securityStatus.incidentResponse === 'GREEN' ? 'bg-green-900 text-green-400' :
              securityStatus.incidentResponse === 'YELLOW' ? 'bg-yellow-900 text-yellow-400' : 
              'bg-red-900 text-red-400'
            }`}>
              {securityStatus.incidentResponse}
            </span>
          </div>
          <div className="text-lg font-bold text-white">{securityStatus.activeThreats}</div>
          <div className="text-xs text-gray-400">Active Incidents</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-5 h-5 text-blue-400" />
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>
          <div className="text-lg font-bold text-white">{securityStatus.blockedAttacks.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Blocked Today</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">CVE</span>
          </div>
          <div className="text-lg font-bold text-white">{securityStatus.vulnerabilities}</div>
          <div className="text-xs text-gray-400">Vulnerabilities</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">MTTD</span>
          </div>
          <div className="text-lg font-bold text-white">2.3min</div>
          <div className="text-xs text-gray-400">Detect Time</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">MTTR</span>
          </div>
          <div className="text-lg font-bold text-white">8.7min</div>
          <div className="text-xs text-gray-400">Response Time</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-5 h-5 text-cyan-400" />
            <span className="text-xs text-gray-400">UP</span>
          </div>
          <div className="text-lg font-bold text-white">99.8%</div>
          <div className="text-xs text-gray-400">Uptime</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Active Threats */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
            ACTIVE THREAT FEED
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {threats.map(threat => (
              <div key={threat.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getSeverityColor(threat.severity) }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(threat.status)}
                    <span className="text-white font-medium text-sm">{threat.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getSeverityColor(threat.severity)}20`, 
                      color: getSeverityColor(threat.severity) 
                    }}>
                      {threat.severity}
                    </span>
                    <span className="text-xs text-gray-400">U:{threat.urgency}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-xs mb-2">{threat.description}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-400">{threat.target}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">{threat.analyst}</span>
                    <span className="text-gray-500">
                      {new Date(threat.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
                
                <div className="mt-2 text-xs">
                  <span className="text-gray-400">Mitigation: </span>
                  <span className="text-green-400">{threat.mitigation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Metrics Timeline */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-blue-400" />
            SECURITY METRICS (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={securityMetrics.slice(-12)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={10} />
              <YAxis stroke="#9CA3AF" fontSize={10} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="threats" 
                stackId="1"
                stroke="#EF4444" 
                fill="#EF4444"
                fillOpacity={0.6}
                name="Threats"
              />
              <Area 
                type="monotone" 
                dataKey="blocked" 
                stackId="1"
                stroke="#10B981" 
                fill="#10B981"
                fillOpacity={0.6}
                name="Blocked"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Threat Intelligence */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Eye className="w-5 h-5 mr-2 text-purple-400" />
            THREAT INTELLIGENCE
          </h3>
          <div className="space-y-3">
            {threatIntelligence.map(intel => (
              <div key={intel.id} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{intel.threat}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getSeverityColor(intel.severity)}20`, 
                      color: getSeverityColor(intel.severity) 
                    }}>
                      {intel.severity}
                    </span>
                    <span className="text-xs text-gray-400">{intel.confidence}%</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-gray-400">Source: </span>
                    <span className="text-white">{intel.source}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Indicators: </span>
                    <span className="text-blue-400">{intel.indicators.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Action: </span>
                    <span className="text-green-400">{intel.recommendation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Response Metrics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">SOC PERFORMANCE METRICS</h3>
          <div className="grid grid-cols-2 gap-4">
            {responseMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">{metric.metric}</span>
                  <div className={`w-2 h-2 rounded-full ${
                    metric.status === 'good' ? 'bg-green-400' : 
                    metric.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                  }`} />
                </div>
                <div className="text-white font-bold">{metric.value}</div>
                <div className="text-xs text-gray-500">Target: {metric.target}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Threat Distribution */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">THREAT VECTOR ANALYSIS</h3>
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
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-3 mt-4">
              {threatDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-gray-400 text-sm">{item.name}</span>
                  </div>
                  <span className="text-white font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityOperationsCenter;