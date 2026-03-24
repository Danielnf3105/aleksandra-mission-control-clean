// Security Operations Center (SOC) - 2026 Advanced Threat Detection & Security Analytics
// Based on SIEM, UEBA, XDR, SOAR, and modern AI-driven security monitoring standards
import { useState, useEffect } from 'react';
import { 
  Shield, AlertTriangle, Eye, Target, Zap, Activity, Clock, Info,
  Users, UserCheck, Lock, Key, Search, Brain, Network, Globe,
  TrendingUp, TrendingDown, BarChart3, Gauge, Settings, Database,
  Server, Monitor, Cpu, FileText, GitBranch, RefreshCw, Play,
  Pause, StopCircle, CheckCircle, XCircle, AlertCircle, Minus,
  Plus, ArrowRight, ArrowLeft, Code2, Terminal, Package
} from 'lucide-react';

export default function SecurityOperationsCenter() {
  const [securityData, setSecurityData] = useState({
    currentTime: new Date().toISOString(),
    overallThreatLevel: 'ELEVATED',
    activeThreatScore: 76.4,
    totalAssets: 2847,
    protectedAssets: 2698,
    vulnerableAssets: 149,
    threatHunting: {
      activeHunts: 12,
      completedHunts: 89,
      avgHuntDuration: 4.2,
      threatsFound: 23,
      falsePositives: 8,
      huntSuccess: 94.7
    },
    siemAlerts: [
      {
        time: '09:18',
        severity: 'CRITICAL',
        type: 'LATERAL_MOVEMENT',
        source: '192.168.1.45',
        destination: '192.168.1.100-120',
        title: 'Suspicious Network Scanning Activity Detected',
        description: 'Unusual port scanning pattern from compromised workstation',
        confidence: 94.7,
        status: 'ACTIVE',
        mitreTactic: 'TA0008 - Lateral Movement',
        playbook: 'INCIDENT_CONTAINMENT_L3',
        assignedTo: 'SOC-Analyst-3'
      },
      {
        time: '09:15',
        severity: 'HIGH',
        type: 'PRIVILEGE_ESCALATION',
        source: 'AD-CONTROLLER-01',
        destination: 'Domain Admins',
        title: 'Abnormal Administrative Access Pattern',
        description: 'Service account elevated to domain admin outside normal hours',
        confidence: 87.3,
        status: 'INVESTIGATING',
        mitreTactic: 'TA0004 - Privilege Escalation',
        playbook: 'PRIVILEGE_ABUSE_RESPONSE',
        assignedTo: 'SOC-Analyst-1'
      },
      {
        time: '09:12',
        severity: 'MEDIUM',
        type: 'DATA_EXFILTRATION',
        source: 'FILE-SERVER-03',
        destination: 'external-195.23.45.67',
        title: 'Unusual Data Transfer Volume Detected',
        description: 'Large file transfer to suspicious external IP during off-hours',
        confidence: 72.8,
        status: 'CONTAINED',
        mitreTactic: 'TA0010 - Exfiltration',
        playbook: 'DATA_BREACH_RESPONSE',
        assignedTo: 'SOC-Analyst-2'
      }
    ],
    uebaInsights: [
      {
        entity: 'john.doe@company.com',
        entityType: 'USER',
        anomalyScore: 92.4,
        riskLevel: 'HIGH',
        behavior: 'UNUSUAL_LOGIN_PATTERN',
        description: 'Login from 5 different countries within 2 hours',
        firstSeen: '08:45',
        lastActivity: '09:17',
        actions: ['Multiple VPN connections', 'Data access outside normal hours', 'Unusual file downloads'],
        recommendation: 'Immediate account review and multi-factor authentication'
      },
      {
        entity: 'WEB-SERVER-07',
        entityType: 'ASSET',
        anomalyScore: 78.9,
        riskLevel: 'MEDIUM',
        behavior: 'ABNORMAL_NETWORK_TRAFFIC',
        description: 'Increased outbound traffic to suspicious domains',
        firstSeen: '08:30',
        lastActivity: '09:19',
        actions: ['DNS queries to malicious domains', 'Encrypted communications', 'Process injection detected'],
        recommendation: 'Isolate asset and perform forensic analysis'
      },
      {
        entity: 'api-service-account',
        entityType: 'SERVICE',
        anomalyScore: 65.2,
        riskLevel: 'MEDIUM',
        behavior: 'CREDENTIAL_MISUSE',
        description: 'Service account used for interactive login',
        firstSeen: '07:45',
        lastActivity: '09:10',
        actions: ['Interactive console access', 'Manual file operations', 'Script execution'],
        recommendation: 'Review service account permissions and usage'
      }
    ],
    xdrTelemetry: {
      endpoints: 1247,
      networks: 45,
      emails: 89234,
      clouds: 23,
      identities: 2847,
      detectionsLast24h: 156,
      blockedThreats: 89,
      quarantinedFiles: 23,
      isolatedEndpoints: 7
    },
    soarPlaybooks: [
      {
        name: 'Phishing Email Response',
        triggerCount: 23,
        avgExecutionTime: 2.3,
        successRate: 96.7,
        status: 'ACTIVE',
        lastRun: '5m ago',
        automationLevel: 85
      },
      {
        name: 'Malware Containment',
        triggerCount: 15,
        avgExecutionTime: 1.8,
        successRate: 94.2,
        status: 'ACTIVE',
        lastRun: '12m ago',
        automationLevel: 92
      },
      {
        name: 'Insider Threat Investigation',
        triggerCount: 7,
        avgExecutionTime: 8.7,
        successRate: 89.5,
        status: 'ACTIVE',
        lastRun: '34m ago',
        automationLevel: 65
      }
    ],
    threatIntelligence: {
      iocFeeds: 24,
      activeIndicators: 45789,
      newThreats24h: 234,
      blockedIPs: 5678,
      malwareSamples: 1234,
      lastUpdate: '2m ago',
      feedSources: ['CrowdStrike', 'FireEye', 'Microsoft', 'MISP', 'AlienVault']
    },
    complianceStatus: [
      { framework: 'SOC 2 Type II', compliance: 97.8, findings: 12, severity: 'LOW' },
      { framework: 'ISO 27001', compliance: 94.5, findings: 23, severity: 'MEDIUM' },
      { framework: 'PCI DSS', compliance: 99.2, findings: 3, severity: 'LOW' },
      { framework: 'GDPR', compliance: 96.1, findings: 18, severity: 'MEDIUM' },
      { framework: 'HIPAA', compliance: 98.7, findings: 7, severity: 'LOW' }
    ],
    realTimeMetrics: {
      timestamp: new Date().toISOString(),
      performance: [
        { metric: 'Threat Detection Rate', value: 94.7, unit: '%', trend: 'improving' },
        { metric: 'False Positive Rate', value: 2.3, unit: '%', trend: 'declining' },
        { metric: 'Mean Time to Detection', value: 4.7, unit: 'min', trend: 'declining' },
        { metric: 'Mean Time to Response', value: 12.4, unit: 'min', trend: 'stable' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSecurityData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        activeThreatScore: Math.max(40, Math.min(95, prev.activeThreatScore + (Math.random() - 0.5) * 3)),
        realTimeMetrics: {
          timestamp: new Date().toISOString(),
          performance: prev.realTimeMetrics.performance.map(metric => ({
            ...metric,
            value: metric.metric === 'False Positive Rate'
              ? Math.max(1, Math.min(8, metric.value + (Math.random() - 0.6) * 0.5))
              : metric.metric.includes('Time to')
              ? Math.max(2, Math.min(30, metric.value + (Math.random() - 0.5) * 2))
              : Math.max(85, Math.min(98, metric.value + (Math.random() - 0.5) * 1))
          }))
        },
        uebaInsights: prev.uebaInsights.map(insight => ({
          ...insight,
          anomalyScore: Math.max(30, Math.min(100, insight.anomalyScore + (Math.random() - 0.3) * 5))
        }))
      }));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': case 'ELEVATED': return 'text-yellow-400';
      case 'LOW': case 'INFO': return 'text-blue-400';
      case 'ACTIVE': case 'INVESTIGATING': return 'text-yellow-400';
      case 'CONTAINED': case 'RESOLVED': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityBg = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'bg-red-400/20';
      case 'HIGH': return 'bg-orange-400/20';
      case 'MEDIUM': case 'ELEVATED': return 'bg-yellow-400/20';
      case 'LOW': case 'INFO': return 'bg-blue-400/20';
      case 'ACTIVE': case 'INVESTIGATING': return 'bg-yellow-400/20';
      case 'CONTAINED': case 'RESOLVED': return 'bg-green-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'declining': return <TrendingDown className="w-4 h-4 text-green-400" />;
      case 'increasing': return <TrendingUp className="w-4 h-4 text-red-400" />;
      case 'stable': return <Minus className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getRiskIcon = (riskLevel) => {
    const iconClass = "w-4 h-4";
    switch (riskLevel) {
      case 'HIGH': return <AlertTriangle className={`${iconClass} text-red-400`} />;
      case 'MEDIUM': return <AlertCircle className={`${iconClass} text-yellow-400`} />;
      case 'LOW': return <Info className={`${iconClass} text-blue-400`} />;
      default: return <CheckCircle className={`${iconClass} text-green-400`} />;
    }
  };

  const getEntityIcon = (entityType) => {
    const iconClass = "w-4 h-4";
    switch (entityType) {
      case 'USER': return <Users className={`${iconClass} text-blue-400`} />;
      case 'ASSET': return <Server className={`${iconClass} text-green-400`} />;
      case 'SERVICE': return <Settings className={`${iconClass} text-purple-400`} />;
      default: return <Eye className={`${iconClass} text-gray-400`} />;
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getThreatLevelColor = (score) => {
    if (score >= 80) return 'text-red-400';
    if (score >= 60) return 'text-orange-400';
    if (score >= 40) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="space-y-6">
      {/* Security Operations Center Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Shield className="w-8 h-8 text-red-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Security Operations Center</h2>
              <div className="text-sm text-gray-400">SIEM • UEBA • XDR • SOAR • AI-Driven Threat Detection</div>
            </div>
            <div className={`px-3 py-1 rounded text-sm font-semibold ${getSeverityColor(securityData.overallThreatLevel)} ${getSeverityBg(securityData.overallThreatLevel)}`}>
              {securityData.overallThreatLevel}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Threat Score</div>
            <div className={`text-2xl font-mono font-bold ${getThreatLevelColor(securityData.activeThreatScore)}`}>
              {securityData.activeThreatScore.toFixed(1)}
            </div>
            <div className="text-xs text-emerald-400">
              {securityData.protectedAssets}/{securityData.totalAssets} assets protected
            </div>
          </div>
        </div>
        
        {/* Real-Time Security Metrics */}
        <div className="grid grid-cols-4 gap-4">
          {securityData.realTimeMetrics.performance.map((metric, index) => (
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
                    metric.metric === 'False Positive Rate' 
                      ? (metric.value < 3 ? 'bg-green-400' : metric.value < 6 ? 'bg-yellow-400' : 'bg-red-400')
                      : metric.metric.includes('Time to')
                      ? (metric.value < 10 ? 'bg-green-400' : metric.value < 20 ? 'bg-yellow-400' : 'bg-red-400')
                      : metric.value >= 90 ? 'bg-green-400' : metric.value >= 80 ? 'bg-blue-400' : 'bg-yellow-400'
                  }`}
                  style={{ 
                    width: metric.metric === 'False Positive Rate' 
                      ? `${Math.min(100, (10 - metric.value) / 10 * 100)}%`
                      : metric.metric.includes('Time to')
                      ? `${Math.min(100, (30 - metric.value) / 30 * 100)}%`
                      : `${Math.min(100, metric.value)}%` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Security Alerts */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Active Security Alerts</h3>
            <div className="px-2 py-1 bg-red-400/20 text-red-400 text-xs font-semibold rounded">
              {securityData.siemAlerts.filter(alert => alert.status === 'ACTIVE').length} ACTIVE
            </div>
          </div>
          
          <div className="space-y-4">
            {securityData.siemAlerts.map((alert, index) => (
              <div key={index} className={`border rounded p-4 transition-all ${
                alert.severity === 'CRITICAL' ? 'border-red-400/50 bg-red-400/10' :
                alert.severity === 'HIGH' ? 'border-orange-400/50 bg-orange-400/10' :
                'border-yellow-400/50 bg-yellow-400/10'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-gray-400 font-mono">{alert.time}</span>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getSeverityColor(alert.severity)} ${getSeverityBg(alert.severity)}`}>
                      {alert.severity}
                    </div>
                    <div className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded">
                      {alert.type.replace('_', ' ')}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">Confidence:</span>
                    <span className={`text-xs font-semibold ${
                      alert.confidence > 90 ? 'text-green-400' :
                      alert.confidence > 70 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {alert.confidence.toFixed(1)}%
                    </span>
                  </div>
                </div>
                
                <h4 className="text-white font-medium mb-2">{alert.title}</h4>
                <p className="text-sm text-gray-300 mb-3">{alert.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                  <div>
                    <span className="text-gray-400">Source:</span>
                    <span className="text-blue-400 ml-1 font-mono">{alert.source}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">MITRE:</span>
                    <span className="text-purple-400 ml-1">{alert.mitreTactic}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Playbook:</span>
                    <span className="text-green-400 ml-1">{alert.playbook}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Assigned:</span>
                    <span className="text-cyan-400 ml-1">{alert.assignedTo}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getSeverityColor(alert.status)} ${getSeverityBg(alert.status)}`}>
                    {alert.status}
                  </div>
                  <div className="text-xs text-gray-400">
                    Destination: <span className="text-orange-400">{alert.destination}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* XDR Telemetry Overview */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">XDR Telemetry</h3>
          </div>
          
          {/* XDR Coverage */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30 mb-4">
            <div className="text-sm text-gray-400 mb-2">Coverage Statistics</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Endpoints</span>
                <span className="text-green-400 font-mono">{formatNumber(securityData.xdrTelemetry.endpoints)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Networks</span>
                <span className="text-blue-400 font-mono">{securityData.xdrTelemetry.networks}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Emails</span>
                <span className="text-purple-400 font-mono">{formatNumber(securityData.xdrTelemetry.emails)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Cloud Assets</span>
                <span className="text-orange-400 font-mono">{securityData.xdrTelemetry.clouds}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Identities</span>
                <span className="text-cyan-400 font-mono">{formatNumber(securityData.xdrTelemetry.identities)}</span>
              </div>
            </div>
          </div>

          {/* Detection Summary */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30 mb-4">
            <div className="text-sm text-gray-400 mb-2">Detection Summary (24h)</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Detections</span>
                <span className="text-red-400 font-mono">{securityData.xdrTelemetry.detectionsLast24h}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Blocked Threats</span>
                <span className="text-green-400 font-mono">{securityData.xdrTelemetry.blockedThreats}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Quarantined Files</span>
                <span className="text-yellow-400 font-mono">{securityData.xdrTelemetry.quarantinedFiles}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Isolated Endpoints</span>
                <span className="text-orange-400 font-mono">{securityData.xdrTelemetry.isolatedEndpoints}</span>
              </div>
            </div>
          </div>

          {/* Threat Hunting Status */}
          <div>
            <div className="text-sm text-gray-400 mb-2">Threat Hunting</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-gray-400">Active Hunts:</span>
                <span className="text-blue-400 ml-1">{securityData.threatHunting.activeHunts}</span>
              </div>
              <div>
                <span className="text-gray-400">Success Rate:</span>
                <span className="text-green-400 ml-1">{securityData.threatHunting.huntSuccess.toFixed(1)}%</span>
              </div>
              <div>
                <span className="text-gray-400">Completed:</span>
                <span className="text-purple-400 ml-1">{securityData.threatHunting.completedHunts}</span>
              </div>
              <div>
                <span className="text-gray-400">Avg Duration:</span>
                <span className="text-cyan-400 ml-1">{securityData.threatHunting.avgHuntDuration}h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* UEBA Behavioral Analytics */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">UEBA Behavioral Analytics</h3>
          </div>
          
          <div className="space-y-3">
            {securityData.uebaInsights.map((insight, index) => (
              <div key={index} className={`border rounded p-3 transition-all ${
                insight.riskLevel === 'HIGH' ? 'border-red-400/50 bg-red-400/10' :
                insight.riskLevel === 'MEDIUM' ? 'border-yellow-400/50 bg-yellow-400/10' :
                'border-blue-400/50 bg-blue-400/10'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getEntityIcon(insight.entityType)}
                    <span className="text-white font-medium text-sm">{insight.entity}</span>
                    <div className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded">
                      {insight.entityType}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getRiskIcon(insight.riskLevel)}
                    <span className={`text-xs font-semibold ${getSeverityColor(insight.riskLevel)}`}>
                      {insight.riskLevel}
                    </span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 mb-2">{insight.description}</div>
                
                <div className="mb-2">
                  <div className="text-xs text-gray-400 mb-1">Anomaly Score</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          insight.anomalyScore > 80 ? 'bg-red-400' :
                          insight.anomalyScore > 60 ? 'bg-orange-400' :
                          insight.anomalyScore > 40 ? 'bg-yellow-400' : 'bg-green-400'
                        }`}
                        style={{ width: `${Math.min(100, insight.anomalyScore)}%` }}
                      />
                    </div>
                    <span className={`text-sm font-mono ${
                      insight.anomalyScore > 80 ? 'text-red-400' :
                      insight.anomalyScore > 60 ? 'text-orange-400' :
                      insight.anomalyScore > 40 ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      {insight.anomalyScore.toFixed(1)}
                    </span>
                  </div>
                </div>

                <div className="text-xs">
                  <div className="text-gray-400 mb-1">Suspicious Actions:</div>
                  <div className="flex flex-wrap gap-1">
                    {insight.actions.slice(0, 2).map((action, idx) => (
                      <span key={idx} className="px-1 py-0.5 text-xs bg-red-400/20 text-red-400 rounded">
                        {action}
                      </span>
                    ))}
                  </div>
                  <div className="text-blue-400 mt-1">{insight.recommendation}</div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                  <span>First seen: {insight.firstSeen}</span>
                  <span>Last activity: {insight.lastActivity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SOAR Automation Status */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">SOAR Automation</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            {securityData.soarPlaybooks.map((playbook, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{playbook.name}</span>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getSeverityColor(playbook.status)} ${getSeverityBg(playbook.status)}`}>
                    {playbook.status}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Triggers:</span>
                    <span className="text-blue-400 ml-1">{playbook.triggerCount}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Success Rate:</span>
                    <span className="text-green-400 ml-1">{playbook.successRate.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Avg Time:</span>
                    <span className="text-purple-400 ml-1">{playbook.avgExecutionTime.toFixed(1)}m</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Automation:</span>
                    <span className="text-cyan-400 ml-1">{playbook.automationLevel}%</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400">Last run: {playbook.lastRun}</div>
              </div>
            ))}
          </div>

          {/* Threat Intelligence */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">Threat Intelligence</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-gray-400">Active IOCs:</span>
                <span className="text-red-400 ml-1">{formatNumber(securityData.threatIntelligence.activeIndicators)}</span>
              </div>
              <div>
                <span className="text-gray-400">Blocked IPs:</span>
                <span className="text-orange-400 ml-1">{formatNumber(securityData.threatIntelligence.blockedIPs)}</span>
              </div>
              <div>
                <span className="text-gray-400">New Threats:</span>
                <span className="text-yellow-400 ml-1">{securityData.threatIntelligence.newThreats24h}</span>
              </div>
              <div>
                <span className="text-gray-400">Feeds:</span>
                <span className="text-green-400 ml-1">{securityData.threatIntelligence.iocFeeds}</span>
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              Sources: {securityData.threatIntelligence.feedSources.slice(0, 3).join(', ')}
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Status */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Lock className="w-5 h-5 text-green-400" />
          <h3 className="text-lg font-semibold text-white">Compliance Status</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {securityData.complianceStatus.map((compliance, index) => (
            <div key={index} className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
              <div className="text-white font-medium text-sm mb-2">{compliance.framework}</div>
              <div className={`text-2xl font-mono mb-2 ${
                compliance.compliance > 95 ? 'text-green-400' :
                compliance.compliance > 90 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {compliance.compliance.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-400">
                {compliance.findings} findings ({compliance.severity.toLowerCase()})
              </div>
              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    compliance.compliance > 95 ? 'bg-green-400' :
                    compliance.compliance > 90 ? 'bg-yellow-400' : 'bg-red-400'
                  }`}
                  style={{ width: `${Math.min(100, compliance.compliance)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}