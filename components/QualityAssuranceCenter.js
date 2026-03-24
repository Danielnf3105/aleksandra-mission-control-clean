// Quality Assurance Center - Testing, Compliance & Quality Management
import { useState, useEffect } from 'react';
import { Shield, CheckCircle, AlertTriangle, Target, TrendingUp, Clock, Award, Bug, TestTube, FileCheck, BarChart3, Zap } from 'lucide-react';

export default function QualityAssuranceCenter() {
  const [qaData, setQaData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    qaOverview: {
      qualityScore: 96.8,
      testsExecuted: 12847,
      testsPassing: 12456,
      bugsFound: 247,
      bugsResolved: 231,
      codeReviews: 156,
      coveragePercent: 94.7,
      complianceScore: 98.2
    },
    testingMetrics: {
      automatedTests: 8934,
      manualTests: 3913,
      integrationTests: 2847,
      performanceTests: 1456,
      securityTests: 967,
      usabilityTests: 689,
      passRate: 97.0,
      executionTime: 247, // minutes
      testVelocity: 156 // tests per day
    },
    qualityGates: [
      {
        gate: 'Code Quality',
        status: 'PASSED',
        score: 94.7,
        criteria: 'Code coverage >90%, Complexity <10, Duplication <3%',
        lastCheck: '2026-03-17 19:45',
        threshold: 90
      },
      {
        gate: 'Security Scan',
        status: 'PASSED',
        score: 98.2,
        criteria: 'No critical vulnerabilities, OWASP compliance',
        lastCheck: '2026-03-17 19:30',
        threshold: 95
      },
      {
        gate: 'Performance',
        status: 'PASSED',
        score: 91.8,
        criteria: 'Response time <200ms, Throughput >1000 rps',
        lastCheck: '2026-03-17 19:40',
        threshold: 85
      },
      {
        gate: 'Accessibility',
        status: 'PASSED',
        score: 89.4,
        criteria: 'WCAG 2.1 AA compliance, Screen reader support',
        lastCheck: '2026-03-17 19:35',
        threshold: 85
      },
      {
        gate: 'Documentation',
        status: 'WARNING',
        score: 78.6,
        criteria: 'API docs complete, Code comments >70%',
        lastCheck: '2026-03-17 19:25',
        threshold: 80
      }
    ],
    bugTracking: [
      {
        id: 'BUG-2847',
        title: 'Dashboard refresh causes memory leak',
        severity: 'HIGH',
        priority: 'URGENT',
        status: 'IN_PROGRESS',
        assignee: 'Alex Chen',
        reportedDate: '2026-03-17',
        estimatedFix: '2026-03-18',
        component: 'Dashboard Core'
      },
      {
        id: 'BUG-2846',
        title: 'API timeout on large dataset queries',
        severity: 'MEDIUM',
        priority: 'HIGH',
        status: 'INVESTIGATING',
        assignee: 'Sarah Kim',
        reportedDate: '2026-03-16',
        estimatedFix: '2026-03-19',
        component: 'Data Layer'
      },
      {
        id: 'BUG-2845',
        title: 'Mobile UI alignment issues',
        severity: 'LOW',
        priority: 'MEDIUM',
        status: 'RESOLVED',
        assignee: 'Mike Rodriguez',
        reportedDate: '2026-03-15',
        estimatedFix: '2026-03-17',
        component: 'UI Framework'
      },
      {
        id: 'BUG-2844',
        title: 'Authentication token renewal fails',
        severity: 'CRITICAL',
        priority: 'CRITICAL',
        status: 'RESOLVED',
        assignee: 'David Wilson',
        reportedDate: '2026-03-14',
        estimatedFix: '2026-03-15',
        component: 'Auth Service'
      },
      {
        id: 'BUG-2843',
        title: 'Chart rendering performance degradation',
        severity: 'MEDIUM',
        priority: 'LOW',
        status: 'BACKLOG',
        assignee: 'Lisa Chang',
        reportedDate: '2026-03-13',
        estimatedFix: '2026-03-22',
        component: 'Visualization'
      }
    ],
    complianceStatus: [
      {
        framework: 'ISO 27001',
        status: 'COMPLIANT',
        lastAudit: '2026-01-15',
        nextAudit: '2026-07-15',
        score: 98.7,
        findings: 2,
        certificationLevel: 'CERTIFIED'
      },
      {
        framework: 'SOC 2 Type II',
        status: 'COMPLIANT',
        lastAudit: '2025-12-10',
        nextAudit: '2026-12-10',
        score: 96.4,
        findings: 3,
        certificationLevel: 'CERTIFIED'
      },
      {
        framework: 'GDPR',
        status: 'COMPLIANT',
        lastAudit: '2026-02-20',
        nextAudit: '2026-08-20',
        score: 94.8,
        findings: 1,
        certificationLevel: 'COMPLIANT'
      },
      {
        framework: 'NIST Cybersecurity Framework',
        status: 'COMPLIANT',
        lastAudit: '2026-03-01',
        nextAudit: '2026-09-01',
        score: 92.3,
        findings: 4,
        certificationLevel: 'COMPLIANT'
      },
      {
        framework: 'PCI DSS',
        status: 'IN_PROGRESS',
        lastAudit: '2025-11-30',
        nextAudit: '2026-05-30',
        score: 87.6,
        findings: 6,
        certificationLevel: 'PENDING'
      }
    ],
    testCoverage: {
      overall: 94.7,
      backend: 96.2,
      frontend: 92.8,
      integration: 89.4,
      critical: 98.9,
      components: [
        { name: 'Authentication', coverage: 98.7, tests: 156, criticalPath: true },
        { name: 'Data Processing', coverage: 96.4, tests: 234, criticalPath: true },
        { name: 'API Gateway', coverage: 95.8, tests: 189, criticalPath: true },
        { name: 'UI Components', coverage: 92.3, tests: 267, criticalPath: false },
        { name: 'Reporting Engine', coverage: 94.1, tests: 145, criticalPath: false },
        { name: 'Analytics Core', coverage: 97.6, tests: 178, criticalPath: true }
      ]
    },
    performanceMetrics: {
      responseTime: 142, // ms
      throughput: 2847, // requests/sec
      errorRate: 0.03, // %
      availability: 99.97, // %
      loadTestResults: [
        { scenario: 'Peak Load', users: 10000, success: 99.8, responseTime: 156, throughput: 2456 },
        { scenario: 'Stress Test', users: 25000, success: 97.2, responseTime: 287, throughput: 1894 },
        { scenario: 'Volume Test', users: 5000, success: 99.9, responseTime: 98, throughput: 3124 },
        { scenario: 'Spike Test', users: 50000, success: 94.6, responseTime: 445, throughput: 1567 }
      ]
    },
    codeQuality: {
      maintainabilityIndex: 87.4,
      cyclomaticComplexity: 6.2,
      duplication: 2.8,
      technicalDebt: 147, // hours
      codeSmells: 89,
      vulnerabilities: 3,
      securityHotspots: 12,
      reliabilityRating: 'A',
      maintainabilityRating: 'A',
      securityRating: 'B+'
    },
    reviewMetrics: {
      totalReviews: 156,
      avgReviewTime: 4.7, // hours
      approvalRate: 94.2,
      defectEscapeRate: 1.8,
      reviewCoverage: 98.9,
      reviewerLoad: [
        { reviewer: 'Senior Engineer A', reviews: 23, avgTime: 3.2, quality: 96.7 },
        { reviewer: 'Lead Developer B', reviews: 19, avgTime: 5.8, quality: 98.1 },
        { reviewer: 'Architect C', reviews: 15, avgTime: 7.2, quality: 99.4 },
        { reviewer: 'Senior Engineer D', reviews: 21, avgTime: 4.1, quality: 95.3 }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setQaData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        qaOverview: {
          ...prev.qaOverview,
          qualityScore: Math.max(90, Math.min(99, prev.qaOverview.qualityScore + (Math.random() - 0.5) * 1)),
          testsExecuted: prev.qaOverview.testsExecuted + Math.floor(Math.random() * 5),
          bugsResolved: Math.min(prev.qaOverview.bugsFound, prev.qaOverview.bugsResolved + Math.floor(Math.random() * 2))
        },
        testingMetrics: {
          ...prev.testingMetrics,
          passRate: Math.max(95, Math.min(99, prev.testingMetrics.passRate + (Math.random() - 0.5) * 0.5))
        }
      }));
    }, 4800);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'PASSED':
      case 'COMPLIANT':
      case 'RESOLVED':
      case 'CERTIFIED':
        return 'text-green-400 bg-green-400/20';
      case 'WARNING':
      case 'IN_PROGRESS':
      case 'PENDING':
      case 'INVESTIGATING':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'FAILED':
      case 'NON_COMPLIANT':
      case 'BACKLOG':
        return 'text-red-400 bg-red-400/20';
      case 'URGENT':
      case 'CRITICAL':
        return 'text-red-400 bg-red-400/20';
      case 'HIGH':
        return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW':
        return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getScoreColor = (score, threshold = 80) => {
    if (score >= threshold + 10) return 'text-green-400';
    if (score >= threshold) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getRatingColor = (rating) => {
    switch (rating) {
      case 'A': return 'text-green-400 bg-green-400/20';
      case 'B+': 
      case 'B': return 'text-yellow-400 bg-yellow-400/20';
      case 'C':
      case 'D': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const formatTime = (hours) => {
    if (hours < 1) return `${Math.round(hours * 60)}m`;
    return `${hours.toFixed(1)}h`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-emerald-900 via-slate-900 to-green-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-emerald-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Quality Assurance Center</h1>
              <p className="text-emerald-300">Testing oversight, compliance monitoring & quality management</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-emerald-400">{qaData.currentTime}</div>
            <div className="text-emerald-300">Quality Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* QA Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Award className="w-5 h-5 text-emerald-400 mr-2" />
                Quality Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{qaData.qaOverview.qualityScore.toFixed(1)}%</div>
            <div className="text-emerald-300 text-sm">Overall quality rating</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TestTube className="w-5 h-5 text-blue-400 mr-2" />
                Tests Executed
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{qaData.qaOverview.testsExecuted.toLocaleString()}</div>
            <div className="text-blue-300 text-sm">{qaData.qaOverview.testsPassing.toLocaleString()} passing</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Bug className="w-5 h-5 text-red-400 mr-2" />
                Bug Resolution
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{qaData.qaOverview.bugsResolved}</div>
            <div className="text-green-300 text-sm">of {qaData.qaOverview.bugsFound} found</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
                Test Coverage
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{qaData.qaOverview.coveragePercent.toFixed(1)}%</div>
            <div className="text-purple-300 text-sm">{qaData.qaOverview.codeReviews} code reviews</div>
          </div>
        </div>

        {/* Quality Gates & Testing Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Quality Gates
            </h3>
            <div className="space-y-3">
              {qaData.qualityGates.map((gate, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">{gate.gate}</h4>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(gate.status)}`}>
                        {gate.status}
                      </span>
                      <span className={`font-bold ${getScoreColor(gate.score, gate.threshold)}`}>
                        {gate.score.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <div className="text-slate-300 text-sm mb-2">{gate.criteria}</div>
                  <div className="text-slate-400 text-xs">Last Check: {gate.lastCheck}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-cyan-400 mr-2" />
              Testing Metrics
            </h3>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{qaData.testingMetrics.passRate.toFixed(1)}%</div>
                  <div className="text-cyan-300 text-sm">Pass Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">{qaData.testingMetrics.executionTime}m</div>
                  <div className="text-orange-300 text-sm">Execution Time</div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Automated Tests</span>
                <span className="text-green-400 font-medium">{qaData.testingMetrics.automatedTests.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Manual Tests</span>
                <span className="text-blue-400 font-medium">{qaData.testingMetrics.manualTests.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Integration Tests</span>
                <span className="text-purple-400 font-medium">{qaData.testingMetrics.integrationTests.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Security Tests</span>
                <span className="text-red-400 font-medium">{qaData.testingMetrics.securityTests.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Test Velocity</span>
                <span className="text-yellow-400 font-medium">{qaData.testingMetrics.testVelocity}/day</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bug Tracking & Compliance Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              Bug Tracking
            </h3>
            <div className="space-y-3">
              {qaData.bugTracking.map((bug, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-white text-sm">{bug.id}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bug.severity)}`}>
                        {bug.severity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bug.status)}`}>
                        {bug.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-slate-300 text-sm mb-1">{bug.title}</div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Assigned: {bug.assignee}</span>
                    <span>ETA: {bug.estimatedFix}</span>
                  </div>
                  <div className="text-xs text-slate-400">Component: {bug.component}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FileCheck className="w-5 h-5 text-purple-400 mr-2" />
              Compliance Status
            </h3>
            <div className="space-y-3">
              {qaData.complianceStatus.map((compliance, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-white text-sm">{compliance.framework}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(compliance.status)}`}>
                        {compliance.status}
                      </span>
                      <span className="text-green-400 text-sm">{compliance.score.toFixed(1)}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Last Audit: {compliance.lastAudit}</span>
                    <span>Next: {compliance.nextAudit}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Findings: {compliance.findings}</span>
                    <span className={`font-medium ${getStatusColor(compliance.certificationLevel)}`}>
                      {compliance.certificationLevel}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Test Coverage & Code Quality */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
              Test Coverage Analysis
            </h3>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{qaData.testCoverage.overall.toFixed(1)}%</div>
                  <div className="text-blue-300 text-sm">Overall Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{qaData.testCoverage.critical.toFixed(1)}%</div>
                  <div className="text-green-300 text-sm">Critical Path</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {qaData.testCoverage.components.map((component, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-300 text-sm">{component.name}</span>
                    {component.criticalPath && (
                      <Zap className="w-3 h-3 text-yellow-400" title="Critical Path" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          component.coverage >= 95 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          component.coverage >= 85 ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                          'bg-gradient-to-r from-yellow-500 to-orange-500'
                        }`}
                        style={{ width: `${component.coverage}%` }}
                      ></div>
                    </div>
                    <span className="text-white text-sm font-medium w-12 text-right">{component.coverage.toFixed(1)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Award className="w-5 h-5 text-gold-400 mr-2" />
              Code Quality Metrics
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Maintainability Index</span>
                <span className="text-green-400 font-medium">{qaData.codeQuality.maintainabilityIndex.toFixed(1)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Cyclomatic Complexity</span>
                <span className="text-cyan-400 font-medium">{qaData.codeQuality.cyclomaticComplexity.toFixed(1)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Code Duplication</span>
                <span className="text-yellow-400 font-medium">{qaData.codeQuality.duplication.toFixed(1)}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Technical Debt</span>
                <span className="text-orange-400 font-medium">{qaData.codeQuality.technicalDebt}h</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Code Smells</span>
                <span className="text-red-400 font-medium">{qaData.codeQuality.codeSmells}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Security Hotspots</span>
                <span className="text-purple-400 font-medium">{qaData.codeQuality.securityHotspots}</span>
              </div>
              <div className="pt-2 border-t border-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-300 text-sm">Quality Ratings</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-slate-400 text-xs">Reliability</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getRatingColor(qaData.codeQuality.reliabilityRating)}`}>
                    {qaData.codeQuality.reliabilityRating}
                  </span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-slate-400 text-xs">Security</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getRatingColor(qaData.codeQuality.securityRating)}`}>
                    {qaData.codeQuality.securityRating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics & Review Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Performance Testing
            </h3>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{qaData.performanceMetrics.responseTime}ms</div>
                  <div className="text-green-300 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{qaData.performanceMetrics.throughput.toLocaleString()}</div>
                  <div className="text-purple-300 text-sm">Requests/sec</div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {qaData.performanceMetrics.loadTestResults.map((test, index) => (
                <div key={index} className="bg-slate-700/30 rounded p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-medium text-sm">{test.scenario}</span>
                    <span className="text-green-400 text-sm">{test.success.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>{test.users.toLocaleString()} users</span>
                    <span>{test.responseTime}ms</span>
                    <span>{test.throughput.toLocaleString()} rps</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Clock className="w-5 h-5 text-cyan-400 mr-2" />
              Code Review Analytics
            </h3>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{qaData.reviewMetrics.totalReviews}</div>
                  <div className="text-cyan-300 text-sm">Total Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">{formatTime(qaData.reviewMetrics.avgReviewTime)}</div>
                  <div className="text-orange-300 text-sm">Avg Review Time</div>
                </div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Approval Rate</span>
                <span className="text-green-400 font-medium">{qaData.reviewMetrics.approvalRate.toFixed(1)}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Defect Escape Rate</span>
                <span className="text-red-400 font-medium">{qaData.reviewMetrics.defectEscapeRate.toFixed(1)}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Review Coverage</span>
                <span className="text-purple-400 font-medium">{qaData.reviewMetrics.reviewCoverage.toFixed(1)}%</span>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-2">Reviewer Performance</h4>
              <div className="space-y-1">
                {qaData.reviewMetrics.reviewerLoad.map((reviewer, index) => (
                  <div key={index} className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">{reviewer.reviewer.split(' ')[2]}</span>
                    <span className="text-slate-300">{reviewer.reviews} reviews</span>
                    <span className="text-cyan-400">{formatTime(reviewer.avgTime)}</span>
                    <span className="text-green-400">{reviewer.quality.toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}