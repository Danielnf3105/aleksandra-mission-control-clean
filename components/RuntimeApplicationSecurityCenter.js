// Runtime Application Security Center (RASP) - 2026 Real-Time Application Protection
// Based on Contrast Security, Imperva RASP, AccuKnox, and modern runtime security standards
import { useState, useEffect } from 'react';
import { 
  Shield, Zap, Eye, AlertTriangle, Target, Activity, Lock, Key,
  Code2, Database, Server, Globe, Users, Search, RefreshCw,
  TrendingUp, TrendingDown, BarChart3, Gauge, Settings, Info,
  CheckCircle, XCircle, AlertCircle, Clock, Play, Pause,
  StopCircle, Minus, Plus, ArrowRight, ArrowLeft, Terminal,
  FileText, GitBranch, Package, Monitor, Cpu, MemoryStick,
  Network, Layers, Bug, Crosshair, Radar, Brain, Flame
} from 'lucide-react';

export default function RuntimeApplicationSecurityCenter() {
  const [raspData, setRaspData] = useState({
    currentTime: new Date().toISOString(),
    overallSecurityScore: 87.3,
    raspStatus: 'ACTIVE_PROTECTION',
    protectedApplications: 23,
    vulnerableApplications: 5,
    totalApplications: 28,
    applications: [
      {
        name: 'user-authentication-api',
        language: 'Java',
        framework: 'Spring Boot',
        status: 'PROTECTED',
        raspAgent: 'Contrast Protect',
        securityScore: 94.7,
        vulnerabilities: {
          critical: 0,
          high: 1,
          medium: 3,
          low: 8,
          total: 12
        },
        attacks: {
          blocked: 156,
          mitigated: 23,
          detected: 12,
          last24h: 67
        },
        coverage: 96.8,
        performance: {
          latency: 2.3,
          throughput: 1247,
          overhead: 1.8
        }
      },
      {
        name: 'payment-processing-service',
        language: 'Python',
        framework: 'Django',
        status: 'VULNERABLE',
        raspAgent: 'Imperva RASP',
        securityScore: 62.4,
        vulnerabilities: {
          critical: 2,
          high: 5,
          medium: 8,
          low: 12,
          total: 27
        },
        attacks: {
          blocked: 89,
          mitigated: 45,
          detected: 23,
          last24h: 134
        },
        coverage: 78.2,
        performance: {
          latency: 4.7,
          throughput: 892,
          overhead: 3.2
        }
      },
      {
        name: 'data-analytics-platform',
        language: 'Node.js',
        framework: 'Express',
        status: 'PROTECTED',
        raspAgent: 'AccuKnox RASP',
        securityScore: 91.2,
        vulnerabilities: {
          critical: 0,
          high: 2,
          medium: 4,
          low: 6,
          total: 12
        },
        attacks: {
          blocked: 234,
          mitigated: 12,
          detected: 8,
          last24h: 45
        },
        coverage: 94.3,
        performance: {
          latency: 1.9,
          throughput: 2156,
          overhead: 1.2
        }
      }
    ],
    realTimeThreats: [
      {
        time: '11:28',
        severity: 'CRITICAL',
        type: 'SQL_INJECTION',
        application: 'payment-processing-service',
        attackVector: 'POST /api/transactions',
        sourceIP: '194.23.45.67',
        payload: "'; DROP TABLE users; --",
        action: 'BLOCKED',
        confidence: 98.7,
        impact: 'Data breach attempt prevented',
        mitigation: 'Input sanitization applied, SQL query blocked'
      },
      {
        time: '11:26',
        severity: 'HIGH',
        type: 'XSS_ATTACK',
        application: 'user-authentication-api',
        attackVector: 'GET /profile?name=<script>',
        sourceIP: '156.78.90.12',
        payload: '<script>alert(document.cookie)</script>',
        action: 'MITIGATED',
        confidence: 92.4,
        impact: 'Session hijack attempt neutralized',
        mitigation: 'Output encoding applied, script execution prevented'
      },
      {
        time: '11:25',
        severity: 'MEDIUM',
        type: 'COMMAND_INJECTION',
        application: 'data-analytics-platform',
        attackVector: 'POST /api/process',
        sourceIP: '203.45.67.89',
        payload: 'filename; rm -rf /',
        action: 'DETECTED',
        confidence: 87.9,
        impact: 'System command execution attempt logged',
        mitigation: 'Command validation enhanced, monitoring active'
      }
    ],
    vulnerabilityInsights: [
      {
        cve: 'CVE-2026-1234',
        severity: 'CRITICAL',
        type: 'Remote Code Execution',
        affectedApps: ['payment-processing-service', 'user-auth-api'],
        description: 'Deserialization vulnerability allows remote code execution',
        exploitability: 94.7,
        businessImpact: 'HIGH',
        patchAvailable: true,
        raspProtection: 'ACTIVE',
        firstDetected: '2026-03-19',
        lastSeen: '11:15',
        recommendation: 'Apply security patch and enable strict deserialization controls'
      },
      {
        cve: 'CVE-2026-5678',
        severity: 'HIGH',
        type: 'Authentication Bypass',
        affectedApps: ['user-authentication-api'],
        description: 'JWT token validation bypass in authentication flow',
        exploitability: 82.3,
        businessImpact: 'HIGH',
        patchAvailable: false,
        raspProtection: 'PARTIAL',
        firstDetected: '2026-03-18',
        lastSeen: '10:45',
        recommendation: 'Implement additional token validation layers via RASP rules'
      },
      {
        cve: 'CVE-2026-9012',
        severity: 'MEDIUM',
        type: 'Information Disclosure',
        affectedApps: ['data-analytics-platform'],
        description: 'Sensitive data exposure through error messages',
        exploitability: 65.1,
        businessImpact: 'MEDIUM',
        patchAvailable: true,
        raspProtection: 'ACTIVE',
        firstDetected: '2026-03-17',
        lastSeen: '09:30',
        recommendation: 'Update error handling and apply available security patch'
      }
    ],
    raspAgents: [
      {
        name: 'Contrast Protect',
        version: 'v4.2.1',
        status: 'OPERATIONAL',
        applications: 12,
        coverage: 96.4,
        performance: 'HIGH',
        lastUpdate: '2h ago',
        features: ['Code-level visibility', 'Zero-day protection', 'DevSecOps integration']
      },
      {
        name: 'Imperva RASP',
        version: 'v15.1.0',
        status: 'OPERATIONAL',
        applications: 8,
        coverage: 89.7,
        performance: 'MEDIUM',
        lastUpdate: '1h ago',
        features: ['WAF integration', 'ML-based detection', 'Compliance reporting']
      },
      {
        name: 'AccuKnox RASP',
        version: 'v2.8.3',
        status: 'DEGRADED',
        applications: 8,
        coverage: 82.1,
        performance: 'MEDIUM',
        lastUpdate: '4h ago',
        features: ['Container security', 'K8s native', 'Zero trust enforcement']
      }
    ],
    securityMetrics: {
      attacksBlocked24h: 1247,
      vulnerabilitiesDetected: 89,
      falsePositives: 23,
      meanTimeToDetection: 0.8,
      meanTimeToMitigation: 2.3,
      protectionAccuracy: 94.7,
      coveragePercentage: 91.2,
      performanceOverhead: 2.1
    },
    realTimeMetrics: {
      timestamp: new Date().toISOString(),
      performance: [
        { metric: 'Protection Accuracy', value: 94.7, unit: '%', trend: 'improving' },
        { metric: 'Attack Block Rate', value: 97.8, unit: '%', trend: 'stable' },
        { metric: 'False Positive Rate', value: 1.8, unit: '%', trend: 'declining' },
        { metric: 'Runtime Overhead', value: 2.1, unit: '%', trend: 'stable' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRaspData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        overallSecurityScore: Math.max(75, Math.min(95, prev.overallSecurityScore + (Math.random() - 0.5) * 2)),
        realTimeMetrics: {
          timestamp: new Date().toISOString(),
          performance: prev.realTimeMetrics.performance.map(metric => ({
            ...metric,
            value: metric.metric === 'False Positive Rate' || metric.metric === 'Runtime Overhead'
              ? Math.max(0.5, Math.min(5, metric.value + (Math.random() - 0.6) * 0.3))
              : Math.max(85, Math.min(99, metric.value + (Math.random() - 0.5) * 1))
          }))
        },
        applications: prev.applications.map(app => ({
          ...app,
          securityScore: Math.max(50, Math.min(100, app.securityScore + (Math.random() - 0.5) * 3)),
          attacks: {
            ...app.attacks,
            last24h: Math.max(10, Math.min(200, app.attacks.last24h + Math.floor((Math.random() - 0.7) * 10)))
          }
        }))
      }));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'PROTECTED': case 'OPERATIONAL': case 'ACTIVE_PROTECTION': case 'BLOCKED': case 'ACTIVE': return 'text-green-400';
      case 'VULNERABLE': case 'DEGRADED': case 'MITIGATED': case 'PARTIAL': case 'DETECTED': return 'text-yellow-400';
      case 'CRITICAL': case 'ERROR': case 'COMPROMISED': return 'text-red-400';
      case 'INFO': case 'MEDIUM': return 'text-blue-400';
      case 'HIGH': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'PROTECTED': case 'OPERATIONAL': case 'ACTIVE_PROTECTION': case 'BLOCKED': case 'ACTIVE': return 'bg-green-400/20';
      case 'VULNERABLE': case 'DEGRADED': case 'MITIGATED': case 'PARTIAL': case 'DETECTED': return 'bg-yellow-400/20';
      case 'CRITICAL': case 'ERROR': case 'COMPROMISED': return 'bg-red-400/20';
      case 'INFO': case 'MEDIUM': return 'bg-blue-400/20';
      case 'HIGH': return 'bg-orange-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'declining': return <TrendingDown className="w-4 h-4 text-green-400" />;
      case 'stable': return <Minus className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getSeverityIcon = (severity) => {
    const iconClass = "w-4 h-4";
    switch (severity) {
      case 'CRITICAL': return <AlertTriangle className={`${iconClass} text-red-400`} />;
      case 'HIGH': return <AlertTriangle className={`${iconClass} text-orange-400`} />;
      case 'MEDIUM': return <AlertCircle className={`${iconClass} text-yellow-400`} />;
      case 'LOW': return <Info className={`${iconClass} text-blue-400`} />;
      default: return <CheckCircle className={`${iconClass} text-green-400`} />;
    }
  };

  const getLanguageIcon = (language) => {
    const iconClass = "w-4 h-4";
    switch (language) {
      case 'Java': return <Code2 className={`${iconClass} text-orange-600`} />;
      case 'Python': return <Code2 className={`${iconClass} text-blue-500`} />;
      case 'Node.js': return <Code2 className={`${iconClass} text-green-500`} />;
      default: return <Code2 className={`${iconClass} text-gray-400`} />;
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getSecurityScoreColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 75) return 'text-yellow-400';
    if (score >= 60) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-6">
      {/* RASP Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Shield className="w-8 h-8 text-green-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Runtime Application Security Center</h2>
              <div className="text-sm text-gray-400">RASP • Real-time Protection • Code-level Security</div>
            </div>
            <div className={`px-3 py-1 rounded text-sm font-semibold ${getStatusColor(raspData.raspStatus)} ${getStatusBg(raspData.raspStatus)}`}>
              {raspData.raspStatus.replace('_', ' ')}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Security Score</div>
            <div className={`text-2xl font-mono font-bold ${getSecurityScoreColor(raspData.overallSecurityScore)}`}>
              {raspData.overallSecurityScore.toFixed(1)}%
            </div>
            <div className="text-xs text-emerald-400">
              {raspData.protectedApplications}/{raspData.totalApplications} apps protected
            </div>
          </div>
        </div>
        
        {/* Real-Time Security Metrics */}
        <div className="grid grid-cols-4 gap-4">
          {raspData.realTimeMetrics.performance.map((metric, index) => (
            <div key={index} className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">{metric.metric}</span>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="text-lg font-mono text-white">
                {metric.value.toFixed(1)}<span className="text-sm text-gray-400 ml-1">{metric.unit}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    metric.metric === 'False Positive Rate' || metric.metric === 'Runtime Overhead'
                      ? (metric.value < 2 ? 'bg-green-400' : metric.value < 4 ? 'bg-yellow-400' : 'bg-red-400')
                      : metric.value >= 95 ? 'bg-green-400' : metric.value >= 85 ? 'bg-blue-400' : 'bg-yellow-400'
                  }`}
                  style={{ 
                    width: metric.metric === 'False Positive Rate' || metric.metric === 'Runtime Overhead'
                      ? `${Math.min(100, (5 - metric.value) / 5 * 100)}%`
                      : `${Math.min(100, metric.value)}%` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Protected Applications */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Crosshair className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Protected Applications</h3>
            <div className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-semibold rounded">
              {raspData.applications.filter(app => app.status === 'PROTECTED').length}/{raspData.applications.length} PROTECTED
            </div>
          </div>
          
          <div className="space-y-4">
            {raspData.applications.map((app, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getLanguageIcon(app.language)}
                    <div>
                      <h4 className="text-white font-medium">{app.name}</h4>
                      <div className="text-xs text-gray-400">{app.language} • {app.framework}</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(app.status)} ${getStatusBg(app.status)}`}>
                      {app.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Security Score</div>
                    <div className={`font-mono text-lg ${getSecurityScoreColor(app.securityScore)}`}>
                      {app.securityScore.toFixed(1)}%
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Critical</div>
                    <div className={`font-mono text-lg ${app.vulnerabilities.critical === 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {app.vulnerabilities.critical}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">High</div>
                    <div className={`font-mono text-lg ${app.vulnerabilities.high < 3 ? 'text-yellow-400' : 'text-orange-400'}`}>
                      {app.vulnerabilities.high}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Total Vulns</div>
                    <div className="text-blue-400 font-mono text-lg">{app.vulnerabilities.total}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Blocked</div>
                    <div className="text-green-400 font-mono text-lg">{app.attacks.blocked}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Coverage</div>
                    <div className={`font-mono text-lg ${app.coverage >= 95 ? 'text-green-400' : app.coverage >= 85 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {app.coverage.toFixed(1)}%
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs mb-3">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">RASP Agent: <span className="text-purple-400">{app.raspAgent}</span></span>
                    <span className="text-gray-400">Overhead: <span className="text-yellow-400">{app.performance.overhead}%</span></span>
                  </div>
                  <div className="text-gray-400">Attacks 24h: <span className="text-red-400">{app.attacks.last24h}</span></div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${getSecurityScoreColor(app.securityScore).replace('text-', 'bg-').replace('-400', '-400')}`}
                    style={{ width: `${Math.min(100, app.securityScore)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RASP Agents Status */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Radar className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">RASP Agents</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            {raspData.raspAgents.map((agent, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <span className="text-white font-medium text-sm">{agent.name}</span>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(agent.status)} ${getStatusBg(agent.status)}`}>
                    {agent.status}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Apps:</span>
                    <span className="text-blue-400 ml-1">{agent.applications}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Coverage:</span>
                    <span className="text-green-400 ml-1">{agent.coverage.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Version:</span>
                    <span className="text-purple-400 ml-1">{agent.version}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Performance:</span>
                    <span className={`ml-1 ${agent.performance === 'HIGH' ? 'text-green-400' : agent.performance === 'MEDIUM' ? 'text-yellow-400' : 'text-red-400'}`}>
                      {agent.performance}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mb-1">Features:</div>
                <div className="flex flex-wrap gap-1">
                  {agent.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="px-1 py-0.5 text-xs bg-cyan-400/20 text-cyan-400 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-400 mt-2">Updated: {agent.lastUpdate}</div>
              </div>
            ))}
          </div>

          {/* Security Metrics Summary */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">Security Metrics (24h)</div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-gray-400">Attacks Blocked:</span>
                <span className="text-green-400 ml-1">{formatNumber(raspData.securityMetrics.attacksBlocked24h)}</span>
              </div>
              <div>
                <span className="text-gray-400">MTTD:</span>
                <span className="text-blue-400 ml-1">{raspData.securityMetrics.meanTimeToDetection}s</span>
              </div>
              <div>
                <span className="text-gray-400">MTTM:</span>
                <span className="text-purple-400 ml-1">{raspData.securityMetrics.meanTimeToMitigation}s</span>
              </div>
              <div>
                <span className="text-gray-400">Accuracy:</span>
                <span className="text-emerald-400 ml-1">{raspData.securityMetrics.protectionAccuracy}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Real-Time Threats */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Flame className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Real-Time Threats</h3>
          </div>
          
          <div className="space-y-4">
            {raspData.realTimeThreats.map((threat, index) => (
              <div key={index} className={`border rounded p-4 transition-all ${
                threat.severity === 'CRITICAL' ? 'border-red-400/50 bg-red-400/10' :
                threat.severity === 'HIGH' ? 'border-orange-400/50 bg-orange-400/10' :
                'border-yellow-400/50 bg-yellow-400/10'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400 font-mono">{threat.time}</span>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(threat.severity)} ${getStatusBg(threat.severity)}`}>
                      {threat.severity}
                    </div>
                    <div className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded">
                      {threat.type.replace('_', ' ')}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">Confidence:</span>
                    <span className={`text-xs font-semibold ${
                      threat.confidence > 90 ? 'text-green-400' :
                      threat.confidence > 80 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {threat.confidence.toFixed(1)}%
                    </span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 mb-2">{threat.impact}</div>
                
                <div className="bg-slate-900/50 p-2 rounded text-xs font-mono mb-2">
                  <div className="text-blue-300">Target: <span className="text-yellow-300">{threat.attackVector}</span></div>
                  <div className="text-blue-300">Payload: <span className="text-red-300 truncate">{threat.payload}</span></div>
                  <div className="text-blue-300">Source: <span className="text-orange-300">{threat.sourceIP}</span></div>
                </div>

                <div className="text-xs text-blue-400 mb-2">{threat.mitigation}</div>
                
                <div className="flex items-center justify-between">
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(threat.action)} ${getStatusBg(threat.action)}`}>
                    {threat.action}
                  </div>
                  <div className="text-xs text-gray-400">{threat.application}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vulnerability Insights */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Bug className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">Vulnerability Insights</h3>
          </div>
          
          <div className="space-y-4">
            {raspData.vulnerabilityInsights.map((vuln, index) => (
              <div key={index} className={`border rounded p-4 transition-all ${
                vuln.severity === 'CRITICAL' ? 'border-red-400/50 bg-red-400/10' :
                vuln.severity === 'HIGH' ? 'border-orange-400/50 bg-orange-400/10' :
                'border-yellow-400/50 bg-yellow-400/10'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(vuln.severity)} ${getStatusBg(vuln.severity)}`}>
                      {vuln.severity}
                    </div>
                    <span className="text-white font-medium text-sm">{vuln.cve}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">Exploitability:</span>
                    <span className={`text-xs font-semibold ${
                      vuln.exploitability > 90 ? 'text-red-400' :
                      vuln.exploitability > 70 ? 'text-orange-400' : 'text-yellow-400'
                    }`}>
                      {vuln.exploitability.toFixed(1)}%
                    </span>
                  </div>
                </div>
                
                <h4 className="text-white font-medium text-sm mb-2">{vuln.type}</h4>
                <p className="text-sm text-gray-300 mb-3">{vuln.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                  <div>
                    <span className="text-gray-400">Business Impact:</span>
                    <span className={`ml-1 ${getStatusColor(vuln.businessImpact)}`}>{vuln.businessImpact}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">RASP Protection:</span>
                    <span className={`ml-1 ${getStatusColor(vuln.raspProtection)}`}>{vuln.raspProtection}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Patch Available:</span>
                    <span className={`ml-1 ${vuln.patchAvailable ? 'text-green-400' : 'text-red-400'}`}>
                      {vuln.patchAvailable ? 'YES' : 'NO'}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Last Seen:</span>
                    <span className="text-yellow-400 ml-1">{vuln.lastSeen}</span>
                  </div>
                </div>

                <div className="text-xs text-blue-400 mb-2">{vuln.recommendation}</div>
                
                <div className="text-xs text-gray-400">
                  Affected: {vuln.affectedApps.slice(0, 2).join(', ')}
                  {vuln.affectedApps.length > 2 && ` +${vuln.affectedApps.length - 2} more`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}