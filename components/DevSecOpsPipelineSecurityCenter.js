// DevSecOps Pipeline Security & Compliance Center - 2026 Security Gate Integration
// Based on GitLeaks, Semgrep, Trivy, Snyk, Checkov, and modern DevSecOps standards
import { useState, useEffect } from 'react';
import { 
  Shield, Lock, Key, AlertTriangle, CheckCircle, Clock, Info,
  Target, Activity, Settings, RefreshCw, Eye, Search, Code2,
  GitBranch, Package, Monitor, Server, Database, Globe, Users,
  Terminal, Brain, Gauge, BarChart3, TrendingUp, TrendingDown,
  Minus, Plus, Play, Pause, StopCircle, ArrowRight, ArrowLeft,
  Zap, Network, HardDrive, Cpu, MemoryStick, Crosshair, Radar,
  Bug, FileCode, FileCheck, FileLock, FileSearch, FileX, Layers
} from 'lucide-react';

export default function DevSecOpsPipelineSecurityCenter() {
  const [securityData, setSecurityData] = useState({
    currentTime: new Date().toISOString(),
    overallSecurityScore: 92.8,
    pipelineSecurityLevel: 'HIGH',
    activePipelines: 24,
    securityGatesTotal: 156,
    securityGatesPassed: 149,
    securityGatesFailed: 7,
    securityTools: [
      {
        name: 'GitLeaks',
        type: 'SECRET_SCANNING',
        status: 'ACTIVE',
        version: 'v8.18.2',
        scanCount: 1247,
        issuesFound: 3,
        criticalIssues: 0,
        lastScan: '2m ago',
        coverage: '100%',
        performance: '1.2s avg',
        falsePositives: 2
      },
      {
        name: 'Semgrep',
        type: 'SAST',
        status: 'ACTIVE',
        version: 'v1.45.0',
        scanCount: 892,
        issuesFound: 23,
        criticalIssues: 2,
        lastScan: '4m ago',
        coverage: '95.7%',
        performance: '45s avg',
        falsePositives: 8
      },
      {
        name: 'Trivy',
        type: 'CONTAINER_SCAN',
        status: 'ACTIVE',
        version: 'v0.48.3',
        scanCount: 456,
        issuesFound: 67,
        criticalIssues: 5,
        lastScan: '6m ago',
        coverage: '100%',
        performance: '23s avg',
        falsePositives: 12
      },
      {
        name: 'Snyk',
        type: 'SCA',
        status: 'ACTIVE',
        version: 'v1.1293.0',
        scanCount: 634,
        issuesFound: 89,
        criticalIssues: 7,
        lastScan: '8m ago',
        coverage: '98.2%',
        performance: '18s avg',
        falsePositives: 15
      },
      {
        name: 'Checkov',
        type: 'IAC_SCAN',
        status: 'ACTIVE',
        version: 'v3.1.34',
        scanCount: 234,
        issuesFound: 45,
        criticalIssues: 3,
        lastScan: '12m ago',
        coverage: '92.1%',
        performance: '12s avg',
        falsePositives: 7
      }
    ],
    recentScans: [
      {
        id: 'scan-2026-001',
        pipeline: 'payment-service',
        branch: 'feature/auth-updates',
        commitHash: 'a7f2c9d',
        timestamp: '13:45',
        duration: '2m 34s',
        status: 'PASSED',
        totalChecks: 12,
        passedChecks: 12,
        failedChecks: 0,
        tools: ['GitLeaks', 'Semgrep', 'Trivy', 'Snyk'],
        securityScore: 96.7,
        findings: []
      },
      {
        id: 'scan-2026-002',
        pipeline: 'user-management',
        branch: 'main',
        commitHash: 'b8e1d4a',
        timestamp: '13:42',
        duration: '3m 18s',
        status: 'FAILED',
        totalChecks: 12,
        passedChecks: 10,
        failedChecks: 2,
        tools: ['GitLeaks', 'Semgrep', 'Trivy', 'Snyk', 'Checkov'],
        securityScore: 78.3,
        findings: [
          {
            tool: 'Semgrep',
            severity: 'HIGH',
            category: 'SQL_INJECTION',
            file: 'src/auth/login.js',
            line: 47,
            description: 'Potential SQL injection vulnerability in user authentication'
          },
          {
            tool: 'Trivy',
            severity: 'CRITICAL',
            category: 'CONTAINER_VULN',
            file: 'Dockerfile',
            line: 12,
            description: 'Base image contains critical vulnerability CVE-2026-1234'
          }
        ]
      },
      {
        id: 'scan-2026-003',
        pipeline: 'analytics-api',
        branch: 'develop',
        commitHash: 'c9f3e8b',
        timestamp: '13:38',
        duration: '2m 56s',
        status: 'WARNING',
        totalChecks: 12,
        passedChecks: 11,
        failedChecks: 1,
        tools: ['GitLeaks', 'Semgrep', 'Trivy', 'Snyk'],
        securityScore: 87.4,
        findings: [
          {
            tool: 'Snyk',
            severity: 'MEDIUM',
            category: 'DEPENDENCY_VULN',
            file: 'package.json',
            line: 23,
            description: 'Outdated dependency with known medium-severity vulnerability'
          }
        ]
      }
    ],
    sbomTracking: [
      {
        component: 'express',
        version: '4.18.2',
        license: 'MIT',
        vulnerabilities: 0,
        lastUpdated: '2026-03-15',
        riskScore: 'LOW',
        usage: 89,
        alternatives: 2
      },
      {
        component: 'lodash',
        version: '4.17.21',
        license: 'MIT',
        vulnerabilities: 1,
        lastUpdated: '2026-02-28',
        riskScore: 'MEDIUM',
        usage: 67,
        alternatives: 5
      },
      {
        component: 'react',
        version: '18.2.0',
        license: 'MIT',
        vulnerabilities: 0,
        lastUpdated: '2026-03-10',
        riskScore: 'LOW',
        usage: 156,
        alternatives: 3
      }
    ],
    policyCompliance: [
      {
        policy: 'OWASP Security Standards',
        compliance: 94.7,
        violations: 8,
        lastCheck: '13:30',
        status: 'COMPLIANT',
        frameworks: ['OWASP Top 10', 'SANS CWE'],
        automatedFixes: 5
      },
      {
        policy: 'SOC 2 Type II',
        compliance: 98.2,
        violations: 2,
        lastCheck: '13:25',
        status: 'COMPLIANT',
        frameworks: ['SOC 2', 'AICPA TSC'],
        automatedFixes: 1
      },
      {
        policy: 'PCI DSS Level 1',
        compliance: 91.8,
        violations: 12,
        lastCheck: '13:20',
        status: 'MINOR_ISSUES',
        frameworks: ['PCI DSS 4.0'],
        automatedFixes: 9
      }
    ],
    securityMetrics: [
      {
        metric: 'Mean Time to Detection',
        value: 4.7,
        unit: 'min',
        trend: 'improving',
        target: 5.0
      },
      {
        metric: 'Mean Time to Resolution', 
        value: 23.4,
        unit: 'min',
        trend: 'stable',
        target: 30.0
      },
      {
        metric: 'False Positive Rate',
        value: 8.2,
        unit: '%',
        trend: 'declining',
        target: 10.0
      },
      {
        metric: 'Security Gate Success Rate',
        value: 95.5,
        unit: '%',
        trend: 'improving',
        target: 95.0
      }
    ],
    threatIntelligence: [
      {
        id: 'threat-001',
        timestamp: '13:40',
        severity: 'HIGH',
        type: 'CVE_DISCLOSURE',
        title: 'Critical RCE vulnerability in OpenSSL 3.2.1',
        affectedComponents: ['nginx', 'nodejs-crypto'],
        description: 'CVE-2026-5678: Remote code execution in OpenSSL certificate parsing',
        recommendation: 'Update to OpenSSL 3.2.2 or apply security patch',
        automatedResponse: 'Dependency update PR created',
        status: 'MITIGATED'
      },
      {
        id: 'threat-002',
        timestamp: '13:35',
        severity: 'MEDIUM',
        type: 'SECURITY_ADVISORY',
        title: 'npm package typosquatting campaign detected',
        affectedComponents: ['package.json'],
        description: 'Malicious packages mimicking popular libraries found in npm registry',
        recommendation: 'Review and validate all new package installations',
        automatedResponse: 'Enhanced package verification enabled',
        status: 'MONITORING'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSecurityData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        overallSecurityScore: Math.max(85, Math.min(98, prev.overallSecurityScore + (Math.random() - 0.5) * 1)),
        securityMetrics: prev.securityMetrics.map(metric => ({
          ...metric,
          value: metric.metric === 'False Positive Rate'
            ? Math.max(5, Math.min(15, metric.value + (Math.random() - 0.6) * 0.5))
            : metric.metric === 'Security Gate Success Rate'
            ? Math.max(90, Math.min(99, metric.value + (Math.random() - 0.5) * 0.5))
            : metric.metric === 'Mean Time to Detection'
            ? Math.max(2, Math.min(8, metric.value + (Math.random() - 0.5) * 0.3))
            : Math.max(15, Math.min(40, metric.value + (Math.random() - 0.5) * 2))
        })),
        securityTools: prev.securityTools.map(tool => ({
          ...tool,
          scanCount: tool.scanCount + Math.floor(Math.random() * 3),
          lastScan: Math.random() > 0.7 ? 'Just now' : tool.lastScan
        }))
      }));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': case 'PASSED': case 'COMPLIANT': case 'MITIGATED': return 'text-green-400';
      case 'WARNING': case 'MINOR_ISSUES': case 'MONITORING': return 'text-yellow-400';
      case 'FAILED': case 'CRITICAL': case 'HIGH': case 'VULNERABLE': return 'text-red-400';
      case 'MEDIUM': case 'LOW': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'ACTIVE': case 'PASSED': case 'COMPLIANT': case 'MITIGATED': return 'bg-green-400/20';
      case 'WARNING': case 'MINOR_ISSUES': case 'MONITORING': return 'bg-yellow-400/20';
      case 'FAILED': case 'CRITICAL': case 'HIGH': case 'VULNERABLE': return 'bg-red-400/20';
      case 'MEDIUM': case 'LOW': return 'bg-blue-400/20';
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

  const getToolIcon = (type) => {
    const iconClass = "w-4 h-4";
    switch (type) {
      case 'SECRET_SCANNING': return <Key className={`${iconClass} text-red-400`} />;
      case 'SAST': return <FileCode className={`${iconClass} text-blue-400`} />;
      case 'CONTAINER_SCAN': return <Package className={`${iconClass} text-green-400`} />;
      case 'SCA': return <Layers className={`${iconClass} text-purple-400`} />;
      case 'IAC_SCAN': return <FileCheck className={`${iconClass} text-orange-400`} />;
      default: return <Shield className={`${iconClass} text-gray-400`} />;
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getSecurityScoreColor = (score) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 85) return 'text-blue-400';
    if (score >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getRiskScoreColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* DevSecOps Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Shield className="w-8 h-8 text-blue-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">DevSecOps Pipeline Security & Compliance Center</h2>
              <div className="text-sm text-gray-400">GitLeaks • Semgrep • Trivy • Snyk • Checkov • SBOM • Policy as Code</div>
            </div>
            <div className={`px-3 py-1 rounded text-sm font-semibold ${getStatusColor(securityData.pipelineSecurityLevel)} ${getStatusBg(securityData.pipelineSecurityLevel)}`}>
              {securityData.pipelineSecurityLevel} SECURITY
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Security Score</div>
            <div className={`text-2xl font-mono font-bold ${getSecurityScoreColor(securityData.overallSecurityScore)}`}>
              {securityData.overallSecurityScore.toFixed(1)}%
            </div>
            <div className="text-xs text-emerald-400">
              {securityData.securityGatesPassed}/{securityData.securityGatesTotal} gates passed
            </div>
          </div>
        </div>
        
        {/* Real-Time Security Metrics */}
        <div className="grid grid-cols-4 gap-4">
          {securityData.securityMetrics.map((metric, index) => (
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
                      ? (metric.value <= metric.target ? 'bg-green-400' : 'bg-red-400')
                      : metric.value >= metric.target ? 'bg-green-400' : 'bg-yellow-400'
                  }`}
                  style={{ 
                    width: metric.metric === 'False Positive Rate'
                      ? `${Math.min(100, (metric.target / Math.max(metric.value, metric.target)) * 100)}%`
                      : `${Math.min(100, (metric.value / metric.target) * 100)}%` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Security Tools Status */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Bug className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Security Tools Status</h3>
            <div className="px-2 py-1 bg-red-400/20 text-red-400 text-xs font-semibold rounded">
              5 ACTIVE TOOLS
            </div>
          </div>
          
          <div className="space-y-3">
            {securityData.securityTools.map((tool, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getToolIcon(tool.type)}
                    <div>
                      <h4 className="text-white font-medium">{tool.name}</h4>
                      <div className="text-xs text-gray-400">{tool.type.replace('_', ' ')} • v{tool.version}</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(tool.status)} ${getStatusBg(tool.status)}`}>
                      {tool.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Issues Found</div>
                    <div className="text-lg font-mono text-white">
                      {tool.issuesFound}
                      {tool.criticalIssues > 0 && (
                        <span className="text-red-400 text-sm ml-1">
                          ({tool.criticalIssues} critical)
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Scans</div>
                    <div className="text-blue-400 text-sm">{formatNumber(tool.scanCount)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Coverage</div>
                    <div className="text-green-400 text-sm">{tool.coverage}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Performance</div>
                    <div className="text-purple-400 text-sm">{tool.performance}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">False +</div>
                    <div className="text-yellow-400 text-sm">{tool.falsePositives}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Last scan: <span className="text-cyan-400">{tool.lastScan}</span></span>
                  <div className={`px-2 py-1 rounded text-xs ${
                    tool.criticalIssues > 0 ? 'bg-red-400/20 text-red-400' :
                    tool.issuesFound > 0 ? 'bg-yellow-400/20 text-yellow-400' :
                    'bg-green-400/20 text-green-400'
                  }`}>
                    {tool.criticalIssues > 0 ? 'CRITICAL ISSUES' :
                     tool.issuesFound > 0 ? 'ISSUES FOUND' : 'CLEAN'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Pipeline Scans */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <GitBranch className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Recent Scans</h3>
          </div>
          
          <div className="space-y-3">
            {securityData.recentScans.map((scan, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium text-sm">{scan.pipeline}</span>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(scan.status)} ${getStatusBg(scan.status)}`}>
                      {scan.status}
                    </div>
                  </div>
                  <div className={`text-sm font-mono ${getSecurityScoreColor(scan.securityScore)}`}>
                    {scan.securityScore.toFixed(1)}%
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  <div>{scan.branch} • {scan.commitHash}</div>
                  <div>{scan.timestamp} • {scan.duration}</div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Total:</span>
                    <span className="text-blue-400 ml-1">{scan.totalChecks}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Passed:</span>
                    <span className="text-green-400 ml-1">{scan.passedChecks}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Failed:</span>
                    <span className="text-red-400 ml-1">{scan.failedChecks}</span>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-xs text-gray-400 mb-1">Tools:</div>
                  <div className="flex flex-wrap gap-1">
                    {scan.tools.slice(0, 3).map((tool, idx) => (
                      <span key={idx} className="px-1 py-0.5 text-xs bg-purple-400/20 text-purple-400 rounded">
                        {tool}
                      </span>
                    ))}
                    {scan.tools.length > 3 && (
                      <span className="px-1 py-0.5 text-xs bg-gray-400/20 text-gray-400 rounded">
                        +{scan.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {scan.findings.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400 mb-1">Critical Findings:</div>
                    {scan.findings.slice(0, 2).map((finding, idx) => (
                      <div key={idx} className={`text-xs ${getSeverityColor(finding.severity)} mb-1`}>
                        • {finding.tool}: {finding.description.slice(0, 40)}...
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SBOM & Dependency Tracking */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Package className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">SBOM & Dependencies</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            {securityData.sbomTracking.map((component, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium text-sm">{component.component}</span>
                    <span className="text-xs text-gray-400">v{component.version}</span>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getRiskScoreColor(component.riskScore)} ${getStatusBg(component.riskScore)}`}>
                    {component.riskScore}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-gray-400">License:</span>
                    <span className="text-green-400 ml-1">{component.license}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Vulnerabilities:</span>
                    <span className={component.vulnerabilities > 0 ? 'text-red-400' : 'text-green-400'} >
                      {component.vulnerabilities}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Usage:</span>
                    <span className="text-blue-400 ml-1">{component.usage}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Alternatives:</span>
                    <span className="text-purple-400 ml-1">{component.alternatives}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-2">Updated: {component.lastUpdated}</div>
              </div>
            ))}
          </div>

          {/* Threat Intelligence */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">Recent Threat Intelligence</div>
            <div className="space-y-2">
              {securityData.threatIntelligence.map((threat, index) => (
                <div key={index} className="text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className={`font-medium ${getSeverityColor(threat.severity)}`}>
                      {threat.title.slice(0, 35)}...
                    </span>
                    <span className="text-gray-400">{threat.timestamp}</span>
                  </div>
                  <div className="text-gray-300">{threat.description.slice(0, 60)}...</div>
                  <div className={`${getStatusColor(threat.status)}`}>
                    Status: {threat.status.replace('_', ' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Policy Compliance */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <FileCheck className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">Policy Compliance</h3>
          </div>
          
          <div className="space-y-4">
            {securityData.policyCompliance.map((policy, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">{policy.policy}</span>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(policy.status)} ${getStatusBg(policy.status)}`}>
                    {policy.status.replace('_', ' ')}
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Compliance: {policy.compliance.toFixed(1)}%</span>
                    <span className="text-red-400">{policy.violations} violations</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        policy.compliance >= 95 ? 'bg-green-400' : 
                        policy.compliance >= 85 ? 'bg-blue-400' : 'bg-yellow-400'
                      }`}
                      style={{ width: `${Math.min(100, policy.compliance)}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Last Check:</span>
                    <span className="text-cyan-400 ml-1">{policy.lastCheck}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Auto Fixes:</span>
                    <span className="text-green-400 ml-1">{policy.automatedFixes}</span>
                  </div>
                </div>

                <div className="text-xs text-blue-400">
                  Frameworks: {policy.frameworks.join(' • ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}