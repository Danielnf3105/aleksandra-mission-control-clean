// Project Progress Tracker - Real-time monitoring of project milestones and deliverables
import { useState, useEffect } from 'react';
import { Target, Calendar, CheckCircle, AlertTriangle, Clock, TrendingUp, Users, Flag, Award, Zap, BarChart3, Star } from 'lucide-react';

export default function ProjectProgressTracker() {
  const [projectData, setProjectData] = useState({
    projectOverview: {
      activeProjects: 8,
      completedProjects: 23,
      totalMilestones: 47,
      completedMilestones: 34,
      onTrackProjects: 6,
      delayedProjects: 1,
      aheadProjects: 1,
      averageProgress: 72.4,
      totalDeliverables: 156,
      completedDeliverables: 118
    },
    activeProjects: [
      {
        id: 'proj-001',
        name: 'LinkedIn Carousel Automation',
        status: 'on-track',
        progress: 78,
        dueDate: '2026-03-20',
        priority: 'high',
        team: 'Content Team',
        milestones: 5,
        completedMilestones: 4,
        deliverables: 12,
        completedDeliverables: 9,
        budget: 15000,
        spent: 9800,
        lead: 'Content Processor Agent',
        description: 'Automated LinkedIn carousel generation pipeline',
        nextMilestone: 'Final testing and deployment',
        blockers: [],
        healthScore: 92
      },
      {
        id: 'proj-002',
        name: 'Instagram Story Automation',
        status: 'ahead',
        progress: 94,
        dueDate: '2026-03-25',
        priority: 'normal',
        team: 'Social Media Team',
        milestones: 4,
        completedMilestones: 4,
        deliverables: 8,
        completedDeliverables: 8,
        budget: 8500,
        spent: 6200,
        lead: 'Instagram Monitor Agent',
        description: 'Automated Instagram story content creation and scheduling',
        nextMilestone: 'Project completion',
        blockers: [],
        healthScore: 98
      },
      {
        id: 'proj-003',
        name: 'Spec Ad Creation System',
        status: 'on-track',
        progress: 65,
        dueDate: '2026-04-10',
        priority: 'high',
        team: 'Creative Team',
        milestones: 7,
        completedMilestones: 4,
        deliverables: 18,
        completedDeliverables: 11,
        budget: 25000,
        spent: 18400,
        lead: 'Spec Ad Creator Agent',
        description: 'AI-powered spec advertisement generation for prospects',
        nextMilestone: 'Voice synthesis integration',
        blockers: ['GPU availability constraints'],
        healthScore: 85
      },
      {
        id: 'proj-004',
        name: 'X Engagement Optimization',
        status: 'delayed',
        progress: 42,
        dueDate: '2026-03-18',
        priority: 'medium',
        team: 'Social Media Team',
        milestones: 6,
        completedMilestones: 2,
        deliverables: 14,
        completedDeliverables: 6,
        budget: 12000,
        spent: 8900,
        lead: 'X Engagement Bot',
        description: 'Enhanced Twitter/X engagement and reply automation',
        nextMilestone: 'Sentiment analysis implementation',
        blockers: ['API rate limiting issues', 'Content approval workflow'],
        healthScore: 67
      },
      {
        id: 'proj-005',
        name: 'Assembly AI Integration',
        status: 'on-track',
        progress: 89,
        dueDate: '2026-03-15',
        priority: 'critical',
        team: 'Infrastructure Team',
        milestones: 3,
        completedMilestones: 3,
        deliverables: 6,
        completedDeliverables: 5,
        budget: 5000,
        spent: 4200,
        lead: 'Assembly AI Manager',
        description: 'Streamlined transcription service integration',
        nextMilestone: 'Performance optimization',
        blockers: [],
        healthScore: 96
      },
      {
        id: 'proj-006',
        name: 'Cost Optimization Engine',
        status: 'on-track',
        progress: 73,
        dueDate: '2026-04-05',
        priority: 'normal',
        team: 'Operations Team',
        milestones: 5,
        completedMilestones: 3,
        deliverables: 10,
        completedDeliverables: 7,
        budget: 18000,
        spent: 12300,
        lead: 'Cost Optimizer Agent',
        description: 'Automated cost monitoring and resource optimization',
        nextMilestone: 'Real-time alerting system',
        blockers: [],
        healthScore: 88
      },
      {
        id: 'proj-007',
        name: 'Security Enhancement Suite',
        status: 'on-track',
        progress: 56,
        dueDate: '2026-04-30',
        priority: 'high',
        team: 'Security Team',
        milestones: 8,
        completedMilestones: 4,
        deliverables: 22,
        completedDeliverables: 12,
        budget: 30000,
        spent: 16800,
        lead: 'Security Monitor Agent',
        description: 'Comprehensive security monitoring and threat detection',
        nextMilestone: 'Anomaly detection algorithms',
        blockers: [],
        healthScore: 81
      },
      {
        id: 'proj-008',
        name: 'Content Pipeline Scaling',
        status: 'ahead',
        progress: 87,
        dueDate: '2026-03-28',
        priority: 'high',
        team: 'Infrastructure Team',
        milestones: 4,
        completedMilestones: 4,
        deliverables: 9,
        completedDeliverables: 8,
        budget: 20000,
        spent: 14500,
        lead: 'Content Processor Agent',
        description: 'Horizontal scaling of content processing infrastructure',
        nextMilestone: 'Load testing completion',
        blockers: [],
        healthScore: 94
      }
    ],
    milestoneTimeline: [
      {
        date: '2026-03-15',
        milestones: [
          { project: 'Assembly AI Integration', milestone: 'Performance optimization', status: 'upcoming' },
          { project: 'X Engagement Optimization', milestone: 'API rate limit resolution', status: 'delayed' }
        ]
      },
      {
        date: '2026-03-18',
        milestones: [
          { project: 'X Engagement Optimization', milestone: 'Project completion', status: 'at-risk' },
          { project: 'LinkedIn Carousel Automation', milestone: 'Beta testing', status: 'on-track' }
        ]
      },
      {
        date: '2026-03-20',
        milestones: [
          { project: 'LinkedIn Carousel Automation', milestone: 'Final deployment', status: 'on-track' }
        ]
      },
      {
        date: '2026-03-25',
        milestones: [
          { project: 'Instagram Story Automation', milestone: 'Project completion', status: 'ahead' },
          { project: 'Content Pipeline Scaling', milestone: 'Performance baseline', status: 'on-track' }
        ]
      },
      {
        date: '2026-03-28',
        milestones: [
          { project: 'Content Pipeline Scaling', milestone: 'Project completion', status: 'ahead' }
        ]
      }
    ],
    deliverableTypes: [
      {
        type: 'Content Automation',
        total: 45,
        completed: 38,
        inProgress: 5,
        pending: 2,
        successRate: 97.4
      },
      {
        type: 'Infrastructure',
        total: 38,
        completed: 28,
        inProgress: 7,
        pending: 3,
        successRate: 94.7
      },
      {
        type: 'Security & Compliance',
        total: 29,
        completed: 21,
        inProgress: 6,
        pending: 2,
        successRate: 96.5
      },
      {
        type: 'Social Media Tools',
        total: 34,
        completed: 25,
        inProgress: 8,
        pending: 1,
        successRate: 92.3
      },
      {
        type: 'Analytics & Reporting',
        total: 10,
        completed: 6,
        inProgress: 3,
        pending: 1,
        successRate: 89.1
      }
    ],
    teamPerformance: [
      { team: 'Content Team', projects: 2, avgProgress: 86, healthScore: 95, velocity: 'High' },
      { team: 'Social Media Team', projects: 2, avgProgress: 68, healthScore: 82, velocity: 'Medium' },
      { team: 'Creative Team', projects: 1, avgProgress: 65, healthScore: 85, velocity: 'Medium' },
      { team: 'Infrastructure Team', projects: 2, avgProgress: 88, healthScore: 95, velocity: 'High' },
      { team: 'Security Team', projects: 1, avgProgress: 56, healthScore: 81, velocity: 'Medium' },
      { team: 'Operations Team', projects: 1, avgProgress: 73, healthScore: 88, velocity: 'High' }
    ],
    budgetAnalysis: {
      totalBudget: 133500,
      totalSpent: 90800,
      utilizationRate: 68.0,
      projectedOverrun: 2400,
      costPerDeliverable: 770,
      budgetEfficiency: 92.1
    },
    riskAssessment: [
      {
        project: 'X Engagement Optimization',
        riskLevel: 'high',
        risks: ['Behind schedule', 'API limitations', 'Resource constraints'],
        mitigation: 'Additional developer resources, API optimization',
        impact: 'Medium'
      },
      {
        project: 'Spec Ad Creation System',
        riskLevel: 'medium',
        risks: ['GPU availability', 'Budget utilization'],
        mitigation: 'Cloud GPU scaling, cost monitoring',
        impact: 'Low'
      },
      {
        project: 'Security Enhancement Suite',
        riskLevel: 'low',
        risks: ['Complexity management'],
        mitigation: 'Phased implementation approach',
        impact: 'Low'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectData(prev => ({
        ...prev,
        projectOverview: {
          ...prev.projectOverview,
          averageProgress: Math.max(65, Math.min(85, prev.projectOverview.averageProgress + (Math.random() - 0.5) * 2)),
          completedDeliverables: prev.projectOverview.completedDeliverables + (Math.random() > 0.9 ? 1 : 0)
        },
        activeProjects: prev.activeProjects.map(project => 
          project.status === 'on-track' || project.status === 'ahead' ? {
            ...project,
            progress: Math.min(100, project.progress + Math.random() * 0.5),
            healthScore: Math.max(75, Math.min(100, project.healthScore + (Math.random() - 0.5) * 3))
          } : project
        )
      }));
    }, 18000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'on-track': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'ahead': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30';
      case 'delayed': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'at-risk': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'upcoming': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'high': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      case 'normal': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'low': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getVelocityColor = (velocity) => {
    switch (velocity) {
      case 'High': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatDaysUntil = (dateStr) => {
    const targetDate = new Date(dateStr);
    const today = new Date();
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return `${Math.abs(diffDays)} days overdue`;
    if (diffDays === 0) return 'Due today';
    if (diffDays === 1) return '1 day left';
    return `${diffDays} days left`;
  };

  const getHealthScoreColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Target className="w-8 h-8 text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Project Progress Tracker</h2>
            <p className="text-gray-400">Real-time monitoring of project milestones and deliverables</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{projectData.projectOverview.activeProjects}</div>
            <div className="text-xs text-gray-400">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">{projectData.projectOverview.averageProgress.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Avg Progress</div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-10 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{projectData.projectOverview.activeProjects}</div>
          <div className="text-xs text-gray-400">Active Projects</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{projectData.projectOverview.completedProjects}</div>
          <div className="text-xs text-gray-400">Completed</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{projectData.projectOverview.totalMilestones}</div>
          <div className="text-xs text-gray-400">Milestones</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{projectData.projectOverview.completedMilestones}</div>
          <div className="text-xs text-gray-400">Completed</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{projectData.projectOverview.onTrackProjects}</div>
          <div className="text-xs text-gray-400">On Track</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-red-400">{projectData.projectOverview.delayedProjects}</div>
          <div className="text-xs text-gray-400">Delayed</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{projectData.projectOverview.aheadProjects}</div>
          <div className="text-xs text-gray-400">Ahead</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{projectData.projectOverview.averageProgress.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Avg Progress</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-orange-400">{projectData.projectOverview.totalDeliverables}</div>
          <div className="text-xs text-gray-400">Deliverables</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-emerald-400">{projectData.projectOverview.completedDeliverables}</div>
          <div className="text-xs text-gray-400">Delivered</div>
        </div>
      </div>

      {/* Active Projects */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Flag className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-bold text-white">Active Projects</h3>
          <div className="ml-auto flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="text-xs text-blue-400">TRACKING</div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projectData.activeProjects.map((project, index) => (
            <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white font-medium">{project.name}</div>
                <div className="flex items-center space-x-1">
                  <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(project.status)}`}>
                    {project.status.toUpperCase().replace('-', ' ')}
                  </div>
                  <div className={`text-xs px-1 py-1 rounded border ${getPriorityColor(project.priority)}`}>
                    {project.priority.charAt(0).toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="text-gray-300 text-sm mb-3">{project.description}</div>

              <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                <div>
                  <div className="text-gray-400">Progress</div>
                  <div className="text-cyan-400 font-medium">{project.progress.toFixed(1)}%</div>
                </div>
                <div>
                  <div className="text-gray-400">Health Score</div>
                  <div className={`font-medium ${getHealthScoreColor(project.healthScore)}`}>{project.healthScore}</div>
                </div>
                <div>
                  <div className="text-gray-400">Due Date</div>
                  <div className="text-yellow-400 font-medium">{formatDaysUntil(project.dueDate)}</div>
                </div>
                <div>
                  <div className="text-gray-400">Lead Agent</div>
                  <div className="text-blue-400 font-medium">{project.lead}</div>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white font-bold">{project.progress.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <div className="text-gray-400">Milestones: {project.completedMilestones}/{project.milestones}</div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-emerald-400 h-1 rounded-full"
                        style={{ width: `${(project.completedMilestones / project.milestones) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Deliverables: {project.completedDeliverables}/{project.deliverables}</div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div 
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-1 rounded-full"
                        style={{ width: `${(project.completedDeliverables / project.deliverables) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-xs">
                <div className="text-cyan-400 mb-1">Next: {project.nextMilestone}</div>
                {project.blockers.length > 0 && (
                  <div className="text-red-400">Blockers: {project.blockers.join(', ')}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Milestone Timeline */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Upcoming Milestones</h3>
          </div>
          <div className="space-y-4">
            {projectData.milestoneTimeline.map((day, index) => (
              <div key={index} className="border-l-2 border-gray-600 pl-4">
                <div className="text-cyan-400 font-bold text-sm mb-2">{day.date}</div>
                <div className="space-y-2">
                  {day.milestones.map((milestone, mIndex) => (
                    <div key={mIndex} className="p-2 bg-gray-700/30 rounded border border-gray-600/30">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-white text-sm font-medium">{milestone.project}</div>
                        <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(milestone.status)}`}>
                          {milestone.status.toUpperCase().replace('-', ' ')}
                        </div>
                      </div>
                      <div className="text-gray-300 text-xs">{milestone.milestone}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Performance */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Team Performance</h3>
          </div>
          <div className="space-y-3">
            {projectData.teamPerformance.map((team, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{team.team}</div>
                  <div className={`text-xs px-2 py-1 rounded ${getVelocityColor(team.velocity)} bg-opacity-20`}>
                    {team.velocity.toUpperCase()}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-cyan-400">{team.projects}</div>
                    <div className="text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-400">{team.avgProgress}%</div>
                    <div className="text-gray-400">Avg Progress</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-bold ${getHealthScoreColor(team.healthScore)}`}>{team.healthScore}</div>
                    <div className="text-gray-400">Health</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverable Types & Budget Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deliverable Types */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Deliverable Types</h3>
          </div>
          <div className="space-y-3">
            {projectData.deliverableTypes.map((type, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{type.type}</div>
                  <div className="text-green-400 text-sm font-bold">{type.successRate.toFixed(1)}%</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs text-center">
                  <div>
                    <div className="font-bold text-cyan-400">{type.total}</div>
                    <div className="text-gray-400">Total</div>
                  </div>
                  <div>
                    <div className="font-bold text-green-400">{type.completed}</div>
                    <div className="text-gray-400">Done</div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-400">{type.inProgress}</div>
                    <div className="text-gray-400">In Progress</div>
                  </div>
                  <div>
                    <div className="font-bold text-yellow-400">{type.pending}</div>
                    <div className="text-gray-400">Pending</div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                      style={{ width: `${(type.completed / type.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Analysis */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Budget Analysis</h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                <div className="text-lg font-bold text-green-400">${projectData.budgetAnalysis.totalBudget.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Total Budget</div>
              </div>
              <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                <div className="text-lg font-bold text-blue-400">${projectData.budgetAnalysis.totalSpent.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Spent</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Budget Utilization</span>
                <span className="text-white font-bold">{projectData.budgetAnalysis.utilizationRate.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-cyan-500 h-3 rounded-full"
                  style={{ width: `${projectData.budgetAnalysis.utilizationRate}%` }}
                ></div>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-600/30">
              <div className="grid grid-cols-2 gap-3 text-center text-sm">
                <div>
                  <div className="text-orange-400 font-bold">${projectData.budgetAnalysis.costPerDeliverable}</div>
                  <div className="text-gray-400">Cost/Deliverable</div>
                </div>
                <div>
                  <div className="text-purple-400 font-bold">{projectData.budgetAnalysis.budgetEfficiency.toFixed(1)}%</div>
                  <div className="text-gray-400">Efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Assessment */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-400" />
          <h3 className="text-lg font-bold text-white">Risk Assessment</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectData.riskAssessment.map((risk, index) => (
            <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white font-medium">{risk.project}</div>
                <div className={`text-xs px-2 py-1 rounded ${getRiskColor(risk.riskLevel)} bg-opacity-20`}>
                  {risk.riskLevel.toUpperCase()} RISK
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="text-gray-400 text-xs">Risks:</div>
                  <div className="text-red-400">{risk.risks.join(', ')}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Mitigation:</div>
                  <div className="text-cyan-400">{risk.mitigation}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Impact: <span className="text-yellow-400">{risk.impact}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{projectData.projectOverview.activeProjects}</div>
              <div className="text-sm text-gray-300">Active Projects</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{projectData.projectOverview.averageProgress.toFixed(0)}%</div>
              <div className="text-sm text-gray-300">Average Progress</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{projectData.projectOverview.completedMilestones}</div>
              <div className="text-sm text-gray-300">Milestones Done</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 backdrop-blur-sm rounded-lg border border-yellow-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">{projectData.budgetAnalysis.budgetEfficiency.toFixed(0)}%</div>
              <div className="text-sm text-gray-300">Budget Efficiency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}