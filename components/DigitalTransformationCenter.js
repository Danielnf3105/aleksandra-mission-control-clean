// Digital Transformation Center - Technology Adoption Analytics & Digital Maturity Intelligence
import { useState, useEffect } from 'react';
import { Cpu, Zap, TrendingUp, Target, Clock, Globe, AlertTriangle, CheckCircle, DollarSign, Users, BarChart3 } from 'lucide-react';

export default function DigitalTransformationCenter() {
  const [dtData, setDtData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    transformationOverview: {
      digitalMaturityScore: 78.4,
      transformationProgress: 67.8,
      adoptionRate: 82.3,
      roiRealized: 234567,
      roiProjected: 567890,
      activeProjects: 45,
      completedProjects: 123,
      totalInvestment: 1234567,
      timeToValue: 4.7,
      userAdoption: 89.3,
      changeReadiness: 73.6,
      innovationIndex: 85.2
    },
    digitalMaturityAreas: [
      {
        area: 'Data & Analytics',
        currentScore: 85.4,
        targetScore: 90.0,
        progress: 78.9,
        initiatives: 8,
        investment: 234567,
        roi: 145.7,
        timeline: '6 months',
        status: 'ON_TRACK',
        priority: 'HIGH',
        capabilities: ['Data Platform', 'AI/ML Models', 'Real-time Analytics', 'Self-service BI']
      },
      {
        area: 'Cloud Infrastructure',
        currentScore: 92.1,
        targetScore: 95.0,
        progress: 89.4,
        initiatives: 12,
        investment: 456789,
        roi: 189.3,
        timeline: '4 months',
        status: 'AHEAD',
        priority: 'HIGH',
        capabilities: ['Multi-cloud Strategy', 'Container Orchestration', 'Edge Computing', 'Security']
      },
      {
        area: 'Process Automation',
        currentScore: 67.8,
        targetScore: 85.0,
        progress: 45.6,
        initiatives: 15,
        investment: 345678,
        roi: 67.8,
        timeline: '12 months',
        status: 'BEHIND',
        priority: 'CRITICAL',
        capabilities: ['RPA Implementation', 'Workflow Automation', 'AI-powered Decisions', 'Process Mining']
      },
      {
        area: 'Customer Experience',
        currentScore: 74.3,
        targetScore: 88.0,
        progress: 62.4,
        initiatives: 9,
        investment: 123456,
        roi: 234.5,
        timeline: '8 months',
        status: 'ON_TRACK',
        priority: 'HIGH',
        capabilities: ['Omnichannel Platform', 'Personalization', 'CX Analytics', 'Self-service']
      },
      {
        area: 'Digital Workforce',
        currentScore: 56.7,
        targetScore: 80.0,
        progress: 34.8,
        initiatives: 18,
        investment: 567890,
        roi: 89.4,
        timeline: '18 months',
        status: 'AT_RISK',
        priority: 'CRITICAL',
        capabilities: ['Digital Skills Training', 'Change Management', 'Collaboration Tools', 'Remote Work']
      },
      {
        area: 'Innovation Ecosystem',
        currentScore: 89.2,
        targetScore: 92.0,
        progress: 87.6,
        initiatives: 6,
        investment: 234567,
        roi: 456.7,
        timeline: '3 months',
        status: 'AHEAD',
        priority: 'MEDIUM',
        capabilities: ['Innovation Labs', 'Startup Partnerships', 'R&D Digital', 'Agile Methods']
      }
    ],
    activeProjects: [
      {
        project: 'AI-Powered Customer Service',
        category: 'Customer Experience',
        phase: 'Implementation',
        progress: 78.9,
        budget: 456789,
        spent: 324567,
        timeline: '8 months',
        remaining: '3 months',
        roi: 234.5,
        riskLevel: 'MEDIUM',
        teamSize: 12,
        technologies: ['NLP', 'Machine Learning', 'Chatbots', 'Voice AI'],
        kpis: {
          responseTime: { current: 2.4, target: 1.5, unit: 'minutes' },
          satisfaction: { current: 4.2, target: 4.5, unit: 'score' },
          automation: { current: 67.8, target: 85.0, unit: 'percentage' }
        }
      },
      {
        project: 'Cloud-Native Architecture',
        category: 'Cloud Infrastructure',
        phase: 'Deployment',
        progress: 89.3,
        budget: 789012,
        spent: 567890,
        timeline: '12 months',
        remaining: '2 months',
        roi: 345.6,
        riskLevel: 'LOW',
        teamSize: 18,
        technologies: ['Kubernetes', 'Microservices', 'API Gateway', 'Service Mesh'],
        kpis: {
          uptime: { current: 99.7, target: 99.9, unit: 'percentage' },
          scalability: { current: 89.4, target: 95.0, unit: 'score' },
          cost: { current: -23.4, target: -30.0, unit: 'percentage' }
        }
      },
      {
        project: 'Robotic Process Automation',
        category: 'Process Automation',
        phase: 'Testing',
        progress: 45.6,
        budget: 234567,
        spent: 145678,
        timeline: '10 months',
        remaining: '6 months',
        roi: 145.7,
        riskLevel: 'HIGH',
        teamSize: 8,
        technologies: ['UiPath', 'Blue Prism', 'Process Mining', 'OCR'],
        kpis: {
          efficiency: { current: 34.5, target: 70.0, unit: 'percentage' },
          accuracy: { current: 92.3, target: 98.0, unit: 'percentage' },
          volume: { current: 1234, target: 3000, unit: 'processes/day' }
        }
      },
      {
        project: 'Data Analytics Platform',
        category: 'Data & Analytics',
        phase: 'Production',
        progress: 92.8,
        budget: 567890,
        spent: 489012,
        timeline: '6 months',
        remaining: '1 month',
        roi: 567.8,
        riskLevel: 'LOW',
        teamSize: 15,
        technologies: ['Snowflake', 'Databricks', 'Power BI', 'Apache Kafka'],
        kpis: {
          dataQuality: { current: 94.7, target: 98.0, unit: 'percentage' },
          insights: { current: 156, target: 200, unit: 'reports/month' },
          adoption: { current: 78.9, target: 85.0, unit: 'percentage' }
        }
      }
    ],
    adoptionMetrics: [
      {
        technology: 'Cloud Computing',
        adoption: 94.7,
        maturity: 'ADVANCED',
        userSatisfaction: 4.6,
        businessImpact: 'HIGH',
        investment: 789012,
        roi: 234.5,
        timeframe: '2 years',
        challenges: ['Security Concerns', 'Legacy Integration'],
        nextSteps: 'Multi-cloud Strategy'
      },
      {
        technology: 'Artificial Intelligence',
        adoption: 67.8,
        maturity: 'INTERMEDIATE',
        userSatisfaction: 4.1,
        businessImpact: 'MEDIUM',
        investment: 456789,
        roi: 145.6,
        timeframe: '18 months',
        challenges: ['Data Quality', 'Skills Gap'],
        nextSteps: 'ML Operations Platform'
      },
      {
        technology: 'Data Analytics',
        adoption: 89.3,
        maturity: 'ADVANCED',
        userSatisfaction: 4.4,
        businessImpact: 'HIGH',
        investment: 234567,
        roi: 345.7,
        timeframe: '1 year',
        challenges: ['Data Silos', 'Governance'],
        nextSteps: 'Real-time Analytics'
      },
      {
        technology: 'Automation Tools',
        adoption: 45.6,
        maturity: 'BASIC',
        userSatisfaction: 3.8,
        businessImpact: 'MEDIUM',
        investment: 123456,
        roi: 67.8,
        timeframe: '6 months',
        challenges: ['Change Resistance', 'Process Complexity'],
        nextSteps: 'RPA Center of Excellence'
      },
      {
        technology: 'Mobile Platforms',
        adoption: 92.4,
        maturity: 'ADVANCED',
        userSatisfaction: 4.7,
        businessImpact: 'HIGH',
        investment: 345678,
        roi: 456.7,
        timeframe: '3 years',
        challenges: ['Device Management', 'App Proliferation'],
        nextSteps: 'Progressive Web Apps'
      }
    ],
    changeManagement: [
      {
        initiative: 'Digital Skills Training',
        progress: 78.9,
        participants: 456,
        completed: 234,
        satisfaction: 4.3,
        competencyGain: 67.8,
        businessImpact: 'HIGH',
        budget: 123456,
        timeline: '6 months',
        challenges: ['Time Constraints', 'Engagement'],
        outcomes: 'Improved productivity by 23%'
      },
      {
        initiative: 'Agile Transformation',
        progress: 56.7,
        participants: 789,
        completed: 345,
        satisfaction: 4.0,
        competencyGain: 45.6,
        businessImpact: 'MEDIUM',
        budget: 234567,
        timeline: '12 months',
        challenges: ['Cultural Change', 'Leadership Buy-in'],
        outcomes: 'Faster time-to-market by 34%'
      },
      {
        initiative: 'Customer-Centric Culture',
        progress: 67.4,
        participants: 234,
        completed: 156,
        satisfaction: 4.5,
        competencyGain: 78.9,
        businessImpact: 'HIGH',
        budget: 89012,
        timeline: '9 months',
        challenges: ['Mindset Shift', 'Process Changes'],
        outcomes: 'Customer satisfaction up 45%'
      },
      {
        initiative: 'Data-Driven Decision Making',
        progress: 89.2,
        participants: 123,
        completed: 98,
        satisfaction: 4.7,
        competencyGain: 89.4,
        businessImpact: 'HIGH',
        budget: 67890,
        timeline: '4 months',
        challenges: ['Data Literacy', 'Tool Complexity'],
        outcomes: 'Decision speed improved 67%'
      }
    ],
    transformationAlerts: [
      {
        type: 'CRITICAL',
        category: 'Project Risk',
        message: 'Robotic Process Automation project at HIGH risk - 6 months behind schedule',
        metric: 'Project Timeline',
        value: '45.6% complete',
        change: '6 months delay',
        impact: 'HIGH',
        timestamp: '08:36',
        project: 'Robotic Process Automation',
        budget: '$234.5K',
        recommendation: 'Resource reallocation, scope review, vendor escalation',
        urgency: 'CRITICAL',
        escalation: 'PROJECT_DIRECTOR'
      },
      {
        type: 'WARNING',
        category: 'Adoption Rate',
        message: 'Digital Workforce maturity at 56.7% - well below 80% target',
        metric: 'Digital Maturity',
        value: '56.7%',
        change: '-23.3 points below target',
        impact: 'MODERATE',
        timestamp: '08:35',
        area: 'Digital Workforce',
        affectedUsers: 456,
        recommendation: 'Accelerate training programs, change management initiatives',
        urgency: 'HIGH',
        technicalAction: 'TRAINING_ACCELERATION'
      },
      {
        type: 'SUCCESS',
        category: 'ROI Achievement',
        message: 'Cloud Infrastructure ROI reached 189.3% - exceeding 150% target by 39.3%',
        metric: 'ROI Performance',
        value: '189.3%',
        change: '+39.3% above target',
        impact: 'MAJOR',
        timestamp: '08:34',
        area: 'Cloud Infrastructure',
        investment: '$456.8K',
        recommendation: 'Scale successful cloud strategies, document best practices',
        urgency: 'LOW',
        opportunity: 'STRATEGIC_EXPANSION'
      },
      {
        type: 'INFO',
        category: 'Innovation Pipeline',
        message: 'Innovation Ecosystem scored 89.2% maturity with 6 active R&D initiatives',
        metric: 'Innovation Score',
        value: '89.2%',
        change: 'Strong performance',
        impact: 'POSITIVE',
        timestamp: '08:33',
        area: 'Innovation Ecosystem',
        initiatives: 6,
        recommendation: 'Increase innovation budget, expand startup partnerships',
        urgency: 'LOW',
        opportunity: 'INNOVATION_SCALING'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDtData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        transformationOverview: {
          ...prev.transformationOverview,
          digitalMaturityScore: Math.max(77.0, Math.min(80.0, prev.transformationOverview.digitalMaturityScore + (Math.random() - 0.5) * 0.4)),
          userAdoption: Math.max(88.0, Math.min(91.0, prev.transformationOverview.userAdoption + (Math.random() - 0.5) * 0.3)),
          roiRealized: Math.max(230000, Math.min(240000, prev.transformationOverview.roiRealized + Math.floor((Math.random() - 0.5) * 3000)))
        }
      }));
    }, 35000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'SUCCESS': return 'border-green-500 bg-green-900/30 text-green-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'AHEAD': return 'text-green-400 bg-green-400/20';
      case 'ON_TRACK': return 'text-blue-400 bg-blue-400/20';
      case 'BEHIND': return 'text-yellow-400 bg-yellow-400/20';
      case 'AT_RISK': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getRiskLevelColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getMaturityColor = (maturity) => {
    switch (maturity) {
      case 'ADVANCED': return 'text-green-400 bg-green-400/20';
      case 'INTERMEDIATE': return 'text-blue-400 bg-blue-400/20';
      case 'BASIC': return 'text-yellow-400 bg-yellow-400/20';
      case 'EMERGING': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'HIGH': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'CRITICAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-blue-400';
    }
  };

  const getScoreColor = (score, good = 70, excellent = 85) => {
    if (score >= excellent) return 'text-green-400';
    if (score >= good) return 'text-blue-400';
    if (score >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => `$${formatNumber(amount)}`;

  return (
    <div className="h-full bg-gradient-to-br from-violet-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-violet-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Digital Transformation Center</h1>
              <p className="text-violet-300">Technology adoption analytics & digital maturity intelligence</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-violet-400">{dtData.currentTime}</div>
            <div className="text-violet-300">DT Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Transformation Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-violet-400 mr-2" />
                Maturity
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(dtData.transformationOverview.digitalMaturityScore, 70, 85)}`}>
              {formatPercentage(dtData.transformationOverview.digitalMaturityScore)}
            </div>
            <div className="text-violet-300 text-sm">Digital Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                ROI
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(dtData.transformationOverview.roiRealized)}</div>
            <div className="text-green-300 text-sm">{formatCurrency(dtData.transformationOverview.roiProjected)} Projected</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                Adoption
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(dtData.transformationOverview.userAdoption, 75, 90)}`}>
              {formatPercentage(dtData.transformationOverview.userAdoption)}
            </div>
            <div className="text-blue-300 text-sm">User Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
                Projects
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{dtData.transformationOverview.activeProjects}</div>
            <div className="text-purple-300 text-sm">{dtData.transformationOverview.completedProjects} Completed</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-orange-400 mr-2" />
                Time to Value
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{dtData.transformationOverview.timeToValue.toFixed(1)}</div>
            <div className="text-orange-300 text-sm">Months Avg</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                Innovation
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(dtData.transformationOverview.innovationIndex, 75, 85)}`}>
              {formatPercentage(dtData.transformationOverview.innovationIndex)}
            </div>
            <div className="text-cyan-300 text-sm">Index</div>
          </div>
        </div>

        {/* Digital Maturity Areas */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 text-violet-400 mr-2" />
            Digital Maturity Intelligence Dashboard
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {dtData.digitalMaturityAreas.map((area, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{area.area}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(area.status)}`}>
                      {area.status.replace('_', ' ')}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(area.priority)}`}>
                      {area.priority}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className={`${getScoreColor(area.currentScore, 70, 85)}`}>Current: {formatPercentage(area.currentScore)}</div>
                  <div className="text-slate-400">Target: {formatPercentage(area.targetScore)}</div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Progress: {formatPercentage(area.progress)}</div>
                  <div className="text-green-400">ROI: {formatPercentage(area.roi)}</div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Investment: {formatCurrency(area.investment)}</div>
                  <div className="text-orange-400">Timeline: {area.timeline}</div>
                </div>
                <div className="text-slate-400 text-xs">
                  <strong>Initiatives:</strong> {area.initiatives} • <strong>Capabilities:</strong> {area.capabilities.slice(0, 2).join(', ')}{area.capabilities.length > 2 ? '...' : ''}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Projects & Technology Adoption */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
              Active Transformation Projects
            </h3>
            <div className="space-y-4">
              {dtData.activeProjects.map((project, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{project.project}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getRiskLevelColor(project.riskLevel)}`}>
                        {project.riskLevel} Risk
                      </span>
                      <span className={`text-sm ${getScoreColor(project.progress, 60, 80)}`}>
                        {formatPercentage(project.progress)}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Budget: {formatCurrency(project.budget)}</div>
                    <div className="text-orange-400">Spent: {formatCurrency(project.spent)}</div>
                    <div className="text-purple-400">ROI: {formatPercentage(project.roi)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Phase: {project.phase}</div>
                    <div className="text-yellow-400">Team: {project.teamSize}</div>
                    <div className="text-blue-400">Remaining: {project.remaining}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Tech:</strong> {project.technologies.slice(0, 3).join(', ')}{project.technologies.length > 3 ? '...' : ''}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Category:</strong> {project.category} • <strong>Timeline:</strong> {project.timeline}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              Technology Adoption Analytics
            </h3>
            <div className="space-y-4">
              {dtData.adoptionMetrics.map((tech, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{tech.technology}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getMaturityColor(tech.maturity)}`}>
                        {tech.maturity}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getImpactColor(tech.businessImpact)}`}>
                        {tech.businessImpact}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${getScoreColor(tech.adoption, 60, 80)}`}>Adoption: {formatPercentage(tech.adoption)}</div>
                    <div className="text-yellow-400">Satisfaction: {tech.userSatisfaction.toFixed(1)}/5</div>
                    <div className="text-green-400">ROI: {formatPercentage(tech.roi)}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Investment: {formatCurrency(tech.investment)}</div>
                    <div className="text-orange-400">Timeline: {tech.timeframe}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-1">
                    <strong>Challenges:</strong> {tech.challenges.join(', ')}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Next:</strong> {tech.nextSteps}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Change Management & Transformation Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-green-400 mr-2" />
              Change Management Intelligence
            </h3>
            <div className="space-y-4">
              {dtData.changeManagement.map((initiative, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{initiative.initiative}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getImpactColor(initiative.businessImpact)}`}>
                        {initiative.businessImpact}
                      </span>
                      <span className={`text-sm ${getScoreColor(initiative.progress, 60, 80)}`}>
                        {formatPercentage(initiative.progress)}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Participants: {initiative.participants}</div>
                    <div className="text-green-400">Completed: {initiative.completed}</div>
                    <div className="text-yellow-400">Satisfaction: {initiative.satisfaction.toFixed(1)}/5</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Budget: {formatCurrency(initiative.budget)}</div>
                    <div className="text-orange-400">Timeline: {initiative.timeline}</div>
                    <div className={`${getScoreColor(initiative.competencyGain, 50, 70)}`}>Gain: {formatPercentage(initiative.competencyGain)}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-1">
                    <strong>Challenges:</strong> {initiative.challenges.join(', ')}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Outcomes:</strong> {initiative.outcomes}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              Digital Transformation Alerts
            </h3>
            <div className="space-y-4">
              {dtData.transformationAlerts.map((alert, index) => (
                <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{alert.type}</span>
                      <span className="text-slate-300 text-xs">{alert.category}</span>
                      <span className={`text-xs ${getUrgencyColor(alert.urgency)}`}>
                        {alert.urgency}
                      </span>
                    </div>
                    <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                  </div>
                  <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-3">
                    <div>
                      <div className="text-slate-300">Metric: {alert.metric}</div>
                      <div className="text-slate-300">Value: {alert.value}</div>
                      <div className="text-slate-300">Change: {alert.change}</div>
                    </div>
                    <div>
                      <div className="text-slate-300">Impact: {alert.impact}</div>
                      {alert.project && <div className="text-slate-300">Project: {alert.project}</div>}
                      {alert.area && <div className="text-slate-300">Area: {alert.area}</div>}
                      {alert.budget && <div className="text-slate-300">Budget: {alert.budget}</div>}
                    </div>
                  </div>
                  <div className="text-slate-300 text-xs">
                    <strong>Action:</strong> {alert.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}