// Security & Compliance Center - Advanced security monitoring and compliance tracking
import { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle, Eye, Lock, Users, FileText, Activity, TrendingUp, Settings } from 'lucide-react';

export default function SecurityComplianceCenter() {
  const [securityData, setSecurityData] = useState({
    securityMetrics: {
      threatLevel: 'LOW',
      activeThreatDetectors: 8,
      blockedAttacks: 0,
      vulnerabilitiesFound: 2,
      complianceScore: 94.7,
      lastSecurityScan: '2h ago',
      encryptionStatus: 'ENABLED',
      accessControlsActive: 12
    },
    complianceFrameworks: [
      {
        name: 'GDPR',
        status: 'compliant',
        score: 96.2,
        lastAudit: '2024-02-15',
        requirements: 45,
        fulfilled: 43,
        pending: 2,
        critical: 0
      },
      {
        name: 'SOC 2 Type II',
        status: 'compliant',
        score: 92.8,
        lastAudit: '2024-01-20',
        requirements: 32,
        fulfilled: 30,
        pending: 1,
        critical: 1
      },
      {
        name: 'ISO 27001',
        status: 'partial',
        score: 87.4,
        lastAudit: '2024-03-01',
        requirements: 58,
        fulfilled: 51,
        pending: 5,
        critical: 2
      },
      {
        name: 'HIPAA',
        status: 'not-applicable',
        score: 0,
        lastAudit: 'N/A',
        requirements: 0,
        fulfilled: 0,
        pending: 0,
        critical: 0
      }
    ],
    securityControls: [
      {
        category: 'Access Control',
        controls: [
          { name: 'Multi-Factor Authentication', status: 'enabled', coverage: '100%', lastCheck: '1h ago' },
          { name: 'Role-Based Access Control', status: 'enabled', coverage: '100%', lastCheck: '30m ago' },
          { name: 'Session Management', status: 'enabled', coverage: '98%', lastCheck: '15m ago' },
          { name: 'API Key Rotation', status: 'enabled', coverage: '95%', lastCheck: '2h ago' }
        ]
      },
      {
        category: 'Data Protection',
        controls: [
          { name: 'Data Encryption at Rest', status: 'enabled', coverage: '100%', lastCheck: '1h ago' },
          { name: 'Data Encryption in Transit', status: 'enabled', coverage: '100%', lastCheck: '45m ago' },
          { name: 'Data Loss Prevention', status: 'enabled', coverage: '94%', lastCheck: '1h ago' },
          { name: 'Backup Encryption', status: 'enabled', coverage: '100%', lastCheck: '3h ago' }
        ]
      },
      {
        category: 'Network Security',
        controls: [
          { name: 'Firewall Protection', status: 'enabled', coverage: '100%', lastCheck: '20m ago' },
          { name: 'Intrusion Detection', status: 'enabled', coverage: '98%', lastCheck: '10m ago' },
          { name: 'VPN Access Control', status: 'enabled', coverage: '100%', lastCheck: '1h ago' },
          { name: 'DDoS Protection', status: 'enabled', coverage: '100%', lastCheck: '30m ago' }
        ]
      },
      {
        category: 'Monitoring & Logging',
        controls: [
          { name: 'Security Event Logging', status: 'enabled', coverage: '100%', lastCheck: '5m ago' },
          { name: 'Real-time Monitoring', status: 'enabled', coverage: '99%', lastCheck: '1m ago' },
          { name: 'Anomaly Detection', status: 'enabled', coverage: '96%', lastCheck: '15m ago' },
          { name: 'Audit Trail Management', status: 'enabled', coverage: '100%', lastCheck: '1h ago' }
        ]
      }
    ],
    recentSecurityEvents: [
      {
        id: 'sec-001',
        timestamp: '14:05',
        type: 'Authentication',
        severity: 'low',
        event: 'Multiple failed login attempts from new IP address',
        action: 'IP temporarily blocked - investigating',
        status: 'investigating'
      },
      {
        id: 'sec-002',
        timestamp: '13:42',
        type: 'API Security',
        severity: 'medium',
        event: 'Unusual API request pattern detected',
        action: 'Rate limiting applied - monitoring continues',
        status: 'monitoring'
      },
      {
        id: 'sec-003',
        timestamp: '13:15',
        type: 'Data Access',
        severity: 'low',
        event: 'Successful admin access from verified location',
        action: 'Access logged - no action required',
        status: 'resolved'
      },
      {
        id: 'sec-004',
        timestamp: '12:30',
        type: 'System Update',
        severity: 'info',
        event: 'Security patch applied to API gateway',
        action: 'System restart completed successfully',
        status: 'completed'
      }
    ],
    vulnerabilities: [
      {
        id: 'vuln-001',
        severity: 'medium',
        component: 'Third-party dependency',
        description: 'Outdated JavaScript library with known vulnerability',
        cvss: 5.7,
        discovered: '2024-03-10',
        status: 'patching',
        eta: '2024-03-15'
      },
      {
        id: 'vuln-002',
        severity: 'low',
        component: 'API endpoint',
        description: 'Information disclosure through error messages',
        cvss: 3.1,
        discovered: '2024-03-08',
        status: 'under-review',
        eta: '2024-03-20'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSecurityData(prev => ({
        ...prev,
        securityMetrics: {
          ...prev.securityMetrics,
          complianceScore: Math.min(100, Math.max(90, prev.securityMetrics.complianceScore + (Math.random() - 0.5) * 0.5)),
          activeThreatDetectors: prev.securityMetrics.activeThreatDetectors + (Math.random() > 0.8 ? 1 : 0),
          blockedAttacks: prev.securityMetrics.blockedAttacks + (Math.random() > 0.9 ? 1 : 0)
        }
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'compliant': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'partial': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'non-compliant': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'not-applicable': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      case 'enabled': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'disabled': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'warning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-400';
      case 'high': return 'text-orange-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      case 'info': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getThreatLevelColor = (level) => {
    switch (level) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20 border-orange-400';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400';
      case 'LOW': return 'text-green-400 bg-green-400/20 border-green-400';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Shield className="w-8 h-8 text-green-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Security & Compliance Center</h2>
            <p className="text-gray-400">Advanced security monitoring and compliance tracking</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{securityData.securityMetrics.complianceScore.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Compliance Score</div>
          </div>
          <div className="text-center">
            <div className={`text-lg font-bold px-3 py-1 rounded border ${getThreatLevelColor(securityData.securityMetrics.threatLevel)}`}>
              {securityData.securityMetrics.threatLevel}
            </div>
            <div className="text-xs text-gray-400 mt-1">Threat Level</div>
          </div>
        </div>
      </div>

      {/* Security Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{securityData.securityMetrics.activeThreatDetectors}</div>
          <div className="text-xs text-gray-400">Threat Detectors</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{securityData.securityMetrics.blockedAttacks}</div>
          <div className="text-xs text-gray-400">Blocked Attacks</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{securityData.securityMetrics.vulnerabilitiesFound}</div>
          <div className="text-xs text-gray-400">Vulnerabilities</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{securityData.securityMetrics.complianceScore.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Compliance</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{securityData.securityMetrics.accessControlsActive}</div>
          <div className="text-xs text-gray-400">Access Controls</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className={`text-lg font-bold ${securityData.securityMetrics.encryptionStatus === 'ENABLED' ? 'text-green-400' : 'text-red-400'}`}>
            {securityData.securityMetrics.encryptionStatus}
          </div>
          <div className="text-xs text-gray-400">Encryption</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{securityData.securityMetrics.lastSecurityScan}</div>
          <div className="text-xs text-gray-400">Last Scan</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className={`text-lg font-bold ${getThreatLevelColor(securityData.securityMetrics.threatLevel).split(' ')[0]}`}>
            {securityData.securityMetrics.threatLevel}
          </div>
          <div className="text-xs text-gray-400">Threat Level</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Frameworks */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <FileText className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Compliance Frameworks</h3>
          </div>
          <div className="space-y-4">
            {securityData.complianceFrameworks.map((framework, index) => (
              <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-white font-medium">{framework.name}</div>
                  <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(framework.status)}`}>
                    {framework.status.toUpperCase()}
                  </div>
                </div>
                
                {framework.status !== 'not-applicable' && (
                  <>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                      <div className="text-center">
                        <div className="text-sm font-bold text-blue-400">{framework.score.toFixed(1)}%</div>
                        <div className="text-xs text-gray-400">Score</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-green-400">{framework.fulfilled}</div>
                        <div className="text-xs text-gray-400">Fulfilled</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-yellow-400">{framework.pending}</div>
                        <div className="text-xs text-gray-400">Pending</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-red-400">{framework.critical}</div>
                        <div className="text-xs text-gray-400">Critical</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-white font-bold">{((framework.fulfilled / framework.requirements) * 100).toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                          style={{ width: `${(framework.fulfilled / framework.requirements) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500">Last audit: {framework.lastAudit}</div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Security Controls */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Settings className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Security Controls</h3>
          </div>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {securityData.securityControls.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border border-gray-600/30 rounded-lg p-3">
                <div className="text-cyan-400 font-medium mb-3">{category.category}</div>
                <div className="space-y-2">
                  {category.controls.map((control, controlIndex) => (
                    <div key={controlIndex} className="flex items-center justify-between p-2 bg-gray-800/30 rounded">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${control.status === 'enabled' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                        <div className="text-white text-sm">{control.name}</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-xs text-green-400">{control.coverage}</div>
                        <div className="text-xs text-gray-500">{control.lastCheck}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Events & Vulnerabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Security Events */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Eye className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Recent Security Events</h3>
          </div>
          <div className="space-y-3">
            {securityData.recentSecurityEvents.map((event, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="text-cyan-400 text-sm font-medium">{event.type}</div>
                    <div className={`text-xs ${getSeverityColor(event.severity)}`}>
                      {event.severity.toUpperCase()}
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs">{event.timestamp}</div>
                </div>
                <div className="text-white text-sm mb-2">{event.event}</div>
                <div className="text-gray-300 text-sm mb-2">{event.action}</div>
                <div className={`text-xs px-2 py-1 rounded ${getStatusColor(event.status)}`}>
                  {event.status.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vulnerabilities */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-bold text-white">Vulnerabilities</h3>
          </div>
          <div className="space-y-3">
            {securityData.vulnerabilities.map((vuln, index) => (
              <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-white font-medium">{vuln.component}</div>
                  <div className={`text-xs px-2 py-1 rounded bg-opacity-20 ${getSeverityColor(vuln.severity)}`}>
                    {vuln.severity.toUpperCase()}
                  </div>
                </div>
                <div className="text-gray-300 text-sm mb-2">{vuln.description}</div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div className="text-center">
                    <div className="text-sm font-bold text-red-400">{vuln.cvss}</div>
                    <div className="text-xs text-gray-400">CVSS Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-blue-400">{vuln.discovered}</div>
                    <div className="text-xs text-gray-400">Discovered</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className={`px-2 py-1 rounded ${getStatusColor(vuln.status)}`}>
                    {vuln.status.toUpperCase()}
                  </div>
                  <div className="text-gray-400">ETA: {vuln.eta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{securityData.securityMetrics.complianceScore.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Overall Compliance Score</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <Lock className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{securityData.securityMetrics.activeThreatDetectors}</div>
              <div className="text-sm text-gray-300">Active Security Controls</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{securityData.securityMetrics.blockedAttacks}</div>
              <div className="text-sm text-gray-300">Threats Blocked Today</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}