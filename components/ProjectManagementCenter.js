// Project Management Center - Project Tracking & Development Management
import { useState, useEffect } from 'react';
import { FolderOpen, Target, Calendar, Users, CheckCircle, Clock, TrendingUp, AlertTriangle, Code, Rocket, GitBranch, FileText } from 'lucide-react';

export default function ProjectManagementCenter() {
  const [projectData, setProjectData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    projectOverview: {
      totalProjects: 12,
      activeProjects: 8,
      completedProjects: 4,
      totalTasks: 247,
      completedTasks: 189,
      overallProgress: 76.5,
      teamEfficiency: 94.7
    },
    activeProjects: [
      {
        id: 'mc-dashboard',
        name: 'Mission Control Dashboard',
        status: 'IN_PROGRESS',
        priority: 'HIGH',
        progress: 95.2,
        startDate: '2026-03-17',
        deadline: '2026-03-17',
        assignee: 'Aleksandra',
        completedTasks: 8,
        totalTasks: 8,
        lastUpdate: '1h ago',
        description: 'Comprehensive mission control interface with 8 intelligence centers'
      },
      {
        id: 'ig-pipeline',
        name: 'Instagram Content Pipeline',
        status: 'ACTIVE',
        priority: 'HIGH',
        progress: 89.3,
        startDate: '2026-02-15',
        deadline: '2026-03-20',
        assignee: 'Content Analyzer',
        completedTasks: 15,
        totalTasks: 17,
        lastUpdate: '2h ago',
        description: 'Automated video transcription and content processing system'
      },
      {
        id: 'ai-orchestration',
        name: 'AI Agent Orchestration',
        status: 'OPTIMIZING',
        priority: 'MEDIUM',
        progress: 87.6,
        startDate: '2026-02-20',
        deadline: '2026-03-25',
        assignee: 'System Admin',
        completedTasks: 12,
        totalTasks: 15,
        lastUpdate: '4h ago',
        description: 'Multi-agent coordination and task distribution platform'
      },
      {
        id: 'business-intel',
        name: 'Business Intelligence Suite',
        status: 'TESTING',
        priority: 'HIGH',
        progress: 92.1,
        startDate: '2026-02-10',
        deadline: '2026-03-15',
        assignee: 'BI Team',
        completedTasks: 18,
        totalTasks: 20,
        lastUpdate: '6h ago',
        description: 'Revenue tracking, ROI analysis and business metrics platform'
      },
      {
        id: 'security-monitoring',
        name: 'Security Monitoring System',
        status: 'DEPLOYED',
        priority: 'CRITICAL',
        progress: 98.7,
        startDate: '2026-01-15',
        deadline: '2026-03-01',
        assignee: 'Security Team',
        completedTasks: 22,
        totalTasks: 23,
        lastUpdate: '8h ago',
        description: 'Comprehensive threat detection and incident response platform'
      },
      {
        id: 'performance-opt',
        name: 'Performance Optimization',
        status: 'MONITORING',
        priority: 'MEDIUM',
        progress: 84.2,
        startDate: '2026-02-25',
        deadline: '2026-04-01',
        assignee: 'DevOps Team',
        completedTasks: 11,
        totalTasks: 14,
        lastUpdate: '12h ago',
        description: 'System performance monitoring and resource optimization tools'
      }
    ],
    taskActivity: [
      {
        time: '15:45',
        project: 'Mission Control Dashboard',
        task: 'Data Analytics Center deployed to production',
        type: 'deployment',
        status: 'completed',
        assignee: 'Aleksandra'
      },
      {
        time: '15:00',
        project: 'Mission Control Dashboard',
        task: 'Communication Hub component completed',
        type: 'development',
        status: 'completed',
        assignee: 'Aleksandra'
      },
      {
        time: '14:30',
        project: 'Instagram Pipeline',
        task: 'Transcription accuracy optimization',
        type: 'enhancement',
        status: 'in_progress',
        assignee: 'Content Analyzer'
      },
      {
        time: '14:15',
        project: 'Business Intelligence',
        task: 'Revenue forecasting model updated',
        type: 'data',
        status: 'completed',
        assignee: 'BI Team'
      },
      {
        time: '13:45',
        project: 'Security Monitoring',
        task: 'Weekly vulnerability scan completed',
        type: 'security',
        status: 'completed',
        assignee: 'Security Team'
      }
    ],
    milestones: [
      {
        title: 'Mission Control v1.0 Launch',
        date: '2026-03-17',
        status: 'ACHIEVED',
        progress: 100,
        description: '8 intelligence centers deployed successfully'
      },
      {
        title: 'Real-time Analytics Integration',
        date: '2026-03-20',
        status: 'ON_TRACK',
        progress: 85.4,
        description: 'Live data streams and predictive analytics'
      },
      {
        title: 'Mobile Dashboard Optimization',
        date: '2026-03-25',
        status: 'PLANNED',
        progress: 23.7,
        description: 'Mobile-first responsive design implementation'
      },
      {
        title: 'AI Agent Fleet Expansion',
        date: '2026-04-01',
        status: 'PLANNED',
        progress: 12.1,
        description: 'Scale to 15+ specialized AI agents'
      }
    ],
    developmentMetrics: {
      codeCommits: 247,
      deployments: 8,
      bugReports: 3,
      featureRequests: 12,
      codeReviews: 15,
      testCoverage: 87.3,
      buildSuccess: 98.7,
      deploymentTime: 52 // seconds average
    },
    teamPerformance: [
      {
        name: 'Aleksandra',
        role: 'Full-Stack AI Developer',
        tasksCompleted: 47,
        efficiency: 98.2,
        currentFocus: 'Mission Control Dashboard',
        status: 'active',
        contributions: 156
      },
      {
        name: 'Content Analyzer',
        role: 'AI Content Agent',
        tasksCompleted: 34,
        efficiency: 94.7,
        currentFocus: 'Instagram Pipeline',
        status: 'processing',
        contributions: 89
      },
      {
        name: 'Security Monitor',
        role: 'AI Security Agent',
        tasksCompleted: 28,
        efficiency: 96.8,
        currentFocus: 'Threat Detection',
        status: 'monitoring',
        contributions: 67
      },
      {
        name: 'Business Analyst',
        role: 'AI Analytics Agent',
        tasksCompleted: 31,
        efficiency: 93.4,
        currentFocus: 'Revenue Analytics',
        status: 'analyzing',
        contributions: 78
      },
      {
        name: 'Performance Optimizer',
        role: 'AI DevOps Agent',
        tasksCompleted: 22,
        efficiency: 91.2,
        currentFocus: 'System Optimization',
        status: 'optimizing',
        contributions: 45
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        projectOverview: {
          ...prev.projectOverview,
          overallProgress: Math.max(70, Math.min(95, prev.projectOverview.overallProgress + (Math.random() - 0.5) * 2)),
          teamEfficiency: Math.max(90, Math.min(99, prev.projectOverview.teamEfficiency + (Math.random() - 0.5) * 1))
        },
        developmentMetrics: {
          ...prev.developmentMetrics,
          deploymentTime: Math.max(40, Math.min(70, prev.developmentMetrics.deploymentTime + (Math.random() - 0.5) * 5))
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'COMPLETED':
      case 'DEPLOYED':
      case 'ACHIEVED':
        return 'text-green-400 bg-green-400/20';
      case 'IN_PROGRESS':
      case 'ACTIVE':
      case 'TESTING':
        return 'text-blue-400 bg-blue-400/20';
      case 'OPTIMIZING':
      case 'MONITORING':
      case 'ON_TRACK':
        return 'text-purple-400 bg-purple-400/20';
      case 'PLANNED':
        return 'text-gray-400 bg-gray-400/20';
      case 'DELAYED':
        return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTaskTypeIcon = (type) => {
    switch (type) {
      case 'deployment': return <Rocket className="w-4 h-4 text-green-400" />;
      case 'development': return <Code className="w-4 h-4 text-blue-400" />;
      case 'enhancement': return <TrendingUp className="w-4 h-4 text-purple-400" />;
      case 'data': return <FileText className="w-4 h-4 text-cyan-400" />;
      case 'security': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <Target className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-emerald-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
              <FolderOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Project Management Center</h1>
              <p className="text-emerald-300">Project tracking, development management & team coordination</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-emerald-400">{projectData.currentTime}</div>
            <div className="text-emerald-300">Project Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <FolderOpen className="w-5 h-5 text-emerald-400 mr-2" />
                Active Projects
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{projectData.projectOverview.activeProjects}</div>
            <div className="text-emerald-300 text-sm">of {projectData.projectOverview.totalProjects} total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Tasks Completed
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{projectData.projectOverview.completedTasks}</div>
            <div className="text-green-300 text-sm">of {projectData.projectOverview.totalTasks} total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                Overall Progress
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{projectData.projectOverview.overallProgress.toFixed(1)}%</div>
            <div className="text-cyan-300 text-sm">Completion rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Team Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{projectData.projectOverview.teamEfficiency.toFixed(1)}%</div>
            <div className="text-purple-300 text-sm">Performance score</div>
          </div>
        </div>

        {/* Active Projects */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 text-emerald-400 mr-2" />
            Active Projects
          </h3>
          <div className="space-y-4">
            {projectData.activeProjects.map((project, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-medium text-white">{project.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                      {project.priority}
                    </span>
                  </div>
                  <span className="text-slate-400 text-sm">{project.lastUpdate}</span>
                </div>
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Progress</span>
                    <span className="text-white font-medium text-sm">{project.progress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-600/50 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        project.progress >= 90 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                        project.progress >= 70 ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                        project.progress >= 50 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                        'bg-gradient-to-r from-red-500 to-orange-500'
                      }`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">
                    Tasks: {project.completedTasks}/{project.totalTasks} | 
                    Assigned: {project.assignee} | 
                    Deadline: {project.deadline}
                  </span>
                </div>
                <div className="text-slate-300 text-xs mt-2">{project.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Task Activity & Milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Clock className="w-5 h-5 text-blue-400 mr-2" />
              Recent Task Activity
            </h3>
            <div className="space-y-3">
              {projectData.taskActivity.map((activity, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30 flex items-center space-x-3">
                  {getTaskTypeIcon(activity.type)}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium text-sm">{activity.task}</span>
                      <span className="text-slate-400 text-xs">{activity.time}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-slate-400">
                      <span>Project: {activity.project}</span>
                      <span>By: {activity.assignee}</span>
                      <span className={`px-2 py-1 rounded-full ${getStatusColor(activity.status)}`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Calendar className="w-5 h-5 text-purple-400 mr-2" />
              Project Milestones
            </h3>
            <div className="space-y-3">
              {projectData.milestones.map((milestone, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-white text-sm">{milestone.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(milestone.status)}`}>
                        {milestone.status}
                      </span>
                    </div>
                    <span className="text-slate-400 text-xs">{milestone.date}</span>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">Progress</span>
                      <span className="text-white text-xs">{milestone.progress.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-slate-600/50 rounded-full h-1">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          milestone.progress === 100 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          milestone.progress >= 70 ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                          'bg-gradient-to-r from-gray-500 to-slate-500'
                        }`}
                        style={{ width: `${milestone.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-slate-300 text-xs">{milestone.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Development Metrics & Team Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <GitBranch className="w-5 h-5 text-orange-400 mr-2" />
              Development Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Code Commits</span>
                  <span className="text-white font-medium">{projectData.developmentMetrics.codeCommits}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Deployments</span>
                  <span className="text-green-400 font-medium">{projectData.developmentMetrics.deployments}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Bug Reports</span>
                  <span className="text-red-400 font-medium">{projectData.developmentMetrics.bugReports}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Feature Requests</span>
                  <span className="text-blue-400 font-medium">{projectData.developmentMetrics.featureRequests}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Code Reviews</span>
                  <span className="text-purple-400 font-medium">{projectData.developmentMetrics.codeReviews}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Test Coverage</span>
                  <span className="text-cyan-400 font-medium">{projectData.developmentMetrics.testCoverage}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Build Success</span>
                  <span className="text-green-400 font-medium">{projectData.developmentMetrics.buildSuccess}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Deploy Time</span>
                  <span className="text-orange-400 font-medium">{projectData.developmentMetrics.deploymentTime}s</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-cyan-400 mr-2" />
              Team Performance
            </h3>
            <div className="space-y-3">
              {projectData.teamPerformance.map((member, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-white text-sm">{member.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
                        {member.status}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{member.efficiency}%</span>
                  </div>
                  <div className="text-slate-400 text-xs mb-1">{member.role}</div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Tasks: {member.tasksCompleted}</span>
                    <span>Focus: {member.currentFocus}</span>
                    <span>Contributions: {member.contributions}</span>
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