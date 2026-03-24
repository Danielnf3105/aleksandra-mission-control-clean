// Learning & Development Center - Training, Skill Development & Knowledge Management
import { useState, useEffect } from 'react';
import { BookOpen, Brain, Award, Target, Users, TrendingUp, Clock, Star, CheckCircle, PlayCircle, FileText, Lightbulb } from 'lucide-react';

export default function LearningDevelopmentCenter() {
  const [learningData, setLearningData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    overviewMetrics: {
      activeLearners: 247,
      coursesCompleted: 1847,
      skillsAcquired: 456,
      certificationRate: 94.7,
      averageScore: 87.3,
      learningHours: 2847,
      knowledgeBase: 12456,
      mentoringSessions: 189
    },
    activeCourses: [
      {
        id: 'course-1',
        title: 'Advanced AI Implementation Strategies',
        category: 'Artificial Intelligence',
        difficulty: 'Advanced',
        progress: 78.4,
        enrollees: 45,
        rating: 4.8,
        duration: '8 weeks',
        instructor: 'Dr. Sarah Chen',
        status: 'IN_PROGRESS',
        completionRate: 92.3,
        skills: ['Machine Learning', 'Neural Networks', 'Deep Learning', 'AI Ethics']
      },
      {
        id: 'course-2',
        title: 'Mission Control Systems Design',
        category: 'System Architecture',
        difficulty: 'Intermediate',
        progress: 89.7,
        enrollees: 67,
        rating: 4.9,
        duration: '6 weeks',
        instructor: 'Alex Rodriguez',
        status: 'ACTIVE',
        completionRate: 87.6,
        skills: ['System Design', 'Real-time Systems', 'UI/UX', 'Performance Optimization']
      },
      {
        id: 'course-3',
        title: 'Data Analytics & Business Intelligence',
        category: 'Data Science',
        difficulty: 'Intermediate',
        progress: 67.2,
        enrollees: 89,
        rating: 4.7,
        duration: '10 weeks',
        instructor: 'Maria Gonzalez',
        status: 'IN_PROGRESS',
        completionRate: 89.4,
        skills: ['Statistical Analysis', 'Data Visualization', 'Predictive Modeling', 'Business Intelligence']
      },
      {
        id: 'course-4',
        title: 'Cybersecurity Best Practices',
        category: 'Security',
        difficulty: 'Advanced',
        progress: 45.8,
        enrollees: 34,
        rating: 4.6,
        duration: '12 weeks',
        instructor: 'James Wilson',
        status: 'ACTIVE',
        completionRate: 78.9,
        skills: ['Threat Detection', 'Incident Response', 'Security Architecture', 'Risk Assessment']
      }
    ],
    skillDevelopment: [
      {
        skill: 'Artificial Intelligence',
        level: 'Advanced',
        progress: 87.6,
        learners: 156,
        demand: 'HIGH',
        growth: '+23.4%',
        courses: 8,
        certifications: 3
      },
      {
        skill: 'Data Science',
        level: 'Intermediate',
        progress: 79.3,
        learners: 234,
        demand: 'HIGH',
        growth: '+18.7%',
        courses: 12,
        certifications: 5
      },
      {
        skill: 'System Architecture',
        level: 'Advanced',
        progress: 82.1,
        learners: 89,
        demand: 'MEDIUM',
        growth: '+15.2%',
        courses: 6,
        certifications: 2
      },
      {
        skill: 'Project Management',
        level: 'Intermediate',
        progress: 91.4,
        learners: 167,
        demand: 'MEDIUM',
        growth: '+12.8%',
        courses: 10,
        certifications: 4
      },
      {
        skill: 'Cybersecurity',
        level: 'Advanced',
        progress: 74.8,
        learners: 78,
        demand: 'CRITICAL',
        growth: '+34.6%',
        courses: 7,
        certifications: 3
      },
      {
        skill: 'Cloud Computing',
        level: 'Intermediate',
        progress: 85.7,
        learners: 145,
        demand: 'HIGH',
        growth: '+21.3%',
        courses: 9,
        certifications: 4
      }
    ],
    learningPaths: [
      {
        name: 'AI Engineer Track',
        duration: '6 months',
        courses: 8,
        skills: 12,
        participants: 67,
        completionRate: 84.3,
        certification: 'AI Engineering Certificate',
        nextCohort: '2026-04-01',
        prerequisites: ['Python Programming', 'Statistics', 'Linear Algebra']
      },
      {
        name: 'Mission Control Specialist',
        duration: '4 months',
        courses: 6,
        skills: 9,
        participants: 89,
        completionRate: 91.7,
        certification: 'Mission Control Operations Certificate',
        nextCohort: '2026-03-25',
        prerequisites: ['Systems Thinking', 'Data Analysis', 'Communication']
      },
      {
        name: 'Data Science Professional',
        duration: '8 months',
        courses: 12,
        skills: 15,
        participants: 124,
        completionRate: 87.2,
        certification: 'Data Science Professional Certificate',
        nextCohort: '2026-04-15',
        prerequisites: ['Mathematics', 'Programming', 'Statistics']
      }
    ],
    knowledgeBase: {
      totalArticles: 12456,
      recentArticles: [
        {
          title: 'Implementing Real-time Data Pipelines',
          category: 'Data Engineering',
          author: 'Tech Team',
          date: '2026-03-17',
          views: 1247,
          rating: 4.8,
          readTime: '12 min'
        },
        {
          title: 'Best Practices for AI Model Deployment',
          category: 'Machine Learning',
          author: 'AI Research Team',
          date: '2026-03-16',
          views: 2156,
          rating: 4.9,
          readTime: '18 min'
        },
        {
          title: 'Mission Control Dashboard Design Principles',
          category: 'UI/UX',
          author: 'Design Team',
          date: '2026-03-15',
          views: 987,
          rating: 4.7,
          readTime: '8 min'
        },
        {
          title: 'Security Architecture for Modern Systems',
          category: 'Security',
          author: 'Security Team',
          date: '2026-03-14',
          views: 1534,
          rating: 4.6,
          readTime: '15 min'
        }
      ],
      popularTopics: [
        { topic: 'Artificial Intelligence', articles: 1247, views: 45678 },
        { topic: 'Data Science', articles: 2134, views: 67890 },
        { topic: 'System Design', articles: 987, views: 34567 },
        { topic: 'Cybersecurity', articles: 756, views: 23456 },
        { topic: 'Cloud Computing', articles: 1345, views: 56789 }
      ]
    },
    mentorshipProgram: {
      activeMentors: 45,
      activeMentees: 189,
      sessionsThisMonth: 267,
      satisfactionScore: 94.7,
      skillTransferRate: 87.3,
      careerAdvancement: 78.9,
      pairings: [
        { mentor: 'Senior AI Engineer', mentees: 8, specialty: 'Machine Learning' },
        { mentor: 'Lead Data Scientist', mentees: 12, specialty: 'Data Analytics' },
        { mentor: 'System Architect', mentees: 6, specialty: 'System Design' },
        { mentor: 'Security Expert', mentees: 5, specialty: 'Cybersecurity' }
      ]
    },
    learningAnalytics: {
      weeklyHours: 1847,
      completionTrend: '+15.7%',
      engagementScore: 89.4,
      retentionRate: 92.8,
      skillGapAnalysis: [
        { skill: 'Advanced AI', gap: 23.4, priority: 'HIGH', action: 'Expand AI courses' },
        { skill: 'Quantum Computing', gap: 67.8, priority: 'MEDIUM', action: 'Introduce foundational courses' },
        { skill: 'Edge Computing', gap: 34.7, priority: 'HIGH', action: 'Partner with industry experts' },
        { skill: 'Blockchain', gap: 45.2, priority: 'LOW', action: 'Monitor market demand' }
      ]
    },
    certifications: [
      {
        name: 'AI Engineering Certificate',
        earned: 67,
        inProgress: 134,
        passRate: 94.7,
        industryRecognition: 'HIGH',
        validityPeriod: '2 years',
        renewalRate: 87.3
      },
      {
        name: 'Mission Control Operations',
        earned: 89,
        inProgress: 156,
        passRate: 91.8,
        industryRecognition: 'MEDIUM',
        validityPeriod: '3 years',
        renewalRate: 92.1
      },
      {
        name: 'Data Science Professional',
        earned: 124,
        inProgress: 203,
        passRate: 89.4,
        industryRecognition: 'HIGH',
        validityPeriod: '2 years',
        renewalRate: 85.7
      },
      {
        name: 'Cybersecurity Specialist',
        earned: 45,
        inProgress: 78,
        passRate: 87.6,
        industryRecognition: 'CRITICAL',
        validityPeriod: '1 year',
        renewalRate: 96.3
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLearningData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        overviewMetrics: {
          ...prev.overviewMetrics,
          activeLearners: prev.overviewMetrics.activeLearners + Math.floor(Math.random() * 3),
          averageScore: Math.max(80, Math.min(95, prev.overviewMetrics.averageScore + (Math.random() - 0.5) * 2)),
          learningHours: prev.overviewMetrics.learningHours + Math.floor(Math.random() * 5)
        },
        learningAnalytics: {
          ...prev.learningAnalytics,
          engagementScore: Math.max(85, Math.min(95, prev.learningAnalytics.engagementScore + (Math.random() - 0.5) * 1))
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE':
      case 'COMPLETED':
        return 'text-green-400 bg-green-400/20';
      case 'IN_PROGRESS':
        return 'text-blue-400 bg-blue-400/20';
      case 'PLANNED':
        return 'text-purple-400 bg-purple-400/20';
      case 'PAUSED':
        return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getDemandColor = (demand) => {
    switch (demand) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-teal-900 via-slate-900 to-green-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-teal-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-teal-600 to-green-600 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Learning & Development Center</h1>
              <p className="text-teal-300">Training programs, skill development & knowledge management</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-teal-400">{learningData.currentTime}</div>
            <div className="text-teal-300">Learning Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Overview Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-teal-400 mr-2" />
                Active Learners
              </h3>
            </div>
            <div className="text-3xl font-bold text-teal-400">{learningData.overviewMetrics.activeLearners}</div>
            <div className="text-teal-300 text-sm">{learningData.overviewMetrics.learningHours} learning hours</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Courses Completed
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{learningData.overviewMetrics.coursesCompleted}</div>
            <div className="text-green-300 text-sm">{learningData.overviewMetrics.certificationRate}% certification rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                Average Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{learningData.overviewMetrics.averageScore.toFixed(1)}%</div>
            <div className="text-yellow-300 text-sm">{learningData.overviewMetrics.skillsAcquired} skills acquired</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <FileText className="w-5 h-5 text-purple-400 mr-2" />
                Knowledge Base
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{learningData.overviewMetrics.knowledgeBase.toLocaleString()}</div>
            <div className="text-purple-300 text-sm">{learningData.overviewMetrics.mentoringSessions} mentoring sessions</div>
          </div>
        </div>

        {/* Active Courses & Skill Development */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PlayCircle className="w-5 h-5 text-blue-400 mr-2" />
              Active Courses
            </h3>
            <div className="space-y-4">
              {learningData.activeCourses.map((course, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-medium text-white text-sm">{course.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                        {course.difficulty}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                        {course.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 text-sm">{course.rating}</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-sm">Progress</span>
                      <span className="text-white font-medium text-sm">{course.progress.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-slate-600/50 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          course.progress >= 80 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          course.progress >= 60 ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                          course.progress >= 40 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                          'bg-gradient-to-r from-red-500 to-orange-500'
                        }`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 mb-2">
                    <span>Category: {course.category}</span>
                    <span>Duration: {course.duration}</span>
                    <span>Enrollees: {course.enrollees}</span>
                  </div>
                  <div className="text-slate-300 text-xs mb-2">Instructor: {course.instructor}</div>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-teal-600/30 text-teal-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-orange-400 mr-2" />
              Skill Development
            </h3>
            <div className="space-y-3">
              {learningData.skillDevelopment.map((skill, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-white text-sm">{skill.skill}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDemandColor(skill.demand)}`}>
                        {skill.demand}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{skill.growth}</span>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">Progress</span>
                      <span className="text-white text-xs">{skill.progress.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-slate-600/50 rounded-full h-1">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full transition-all duration-300"
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Learners: {skill.learners}</span>
                    <span>Courses: {skill.courses}</span>
                    <span>Certs: {skill.certifications}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Paths & Knowledge Base */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-purple-400 mr-2" />
              Learning Paths
            </h3>
            <div className="space-y-3">
              {learningData.learningPaths.map((path, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white text-sm">{path.name}</h4>
                    <span className="text-green-400 text-sm">{path.completionRate.toFixed(1)}%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="text-center">
                      <div className="text-cyan-400 font-medium text-sm">{path.courses}</div>
                      <div className="text-slate-400 text-xs">Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-medium text-sm">{path.skills}</div>
                      <div className="text-slate-400 text-xs">Skills</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-400 font-medium text-sm">{path.participants}</div>
                      <div className="text-slate-400 text-xs">Participants</div>
                    </div>
                  </div>
                  <div className="text-slate-300 text-xs mb-2">
                    <div>Duration: {path.duration} | Next Cohort: {path.nextCohort}</div>
                    <div>Certification: {path.certification}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    Prerequisites: {path.prerequisites.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Lightbulb className="w-5 h-5 text-yellow-400 mr-2" />
              Knowledge Base
            </h3>
            <div className="mb-4">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-yellow-400">{learningData.knowledgeBase.totalArticles.toLocaleString()}</div>
                <div className="text-slate-400 text-sm">Total Articles</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-white text-sm">Recent Articles</h4>
              {learningData.knowledgeBase.recentArticles.map((article, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-medium text-white text-sm">{article.title}</h5>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-yellow-400 text-xs">{article.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Category: {article.category}</span>
                    <span>By: {article.author}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>{article.views.toLocaleString()} views</span>
                    <span>{article.readTime} read</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mentorship & Learning Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-cyan-400 mr-2" />
              Mentorship Program
            </h3>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{learningData.mentorshipProgram.activeMentors}</div>
                  <div className="text-cyan-300 text-sm">Active Mentors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{learningData.mentorshipProgram.activeMentees}</div>
                  <div className="text-green-300 text-sm">Active Mentees</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-400">{learningData.mentorshipProgram.sessionsThisMonth}</div>
                  <div className="text-orange-300 text-sm">Sessions This Month</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">{learningData.mentorshipProgram.satisfactionScore.toFixed(1)}%</div>
                  <div className="text-purple-300 text-sm">Satisfaction Score</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-white text-sm">Active Pairings</h4>
              {learningData.mentorshipProgram.pairings.map((pairing, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <div>
                    <span className="text-white text-sm">{pairing.mentor}</span>
                    <div className="text-slate-400 text-xs">{pairing.specialty}</div>
                  </div>
                  <span className="text-cyan-400 text-sm">{pairing.mentees} mentees</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Learning Analytics
            </h3>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{learningData.learningAnalytics.weeklyHours}</div>
                  <div className="text-green-300 text-sm">Weekly Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{learningData.learningAnalytics.engagementScore.toFixed(1)}%</div>
                  <div className="text-cyan-300 text-sm">Engagement Score</div>
                </div>
              </div>
              <div className="text-center mb-4">
                <div className="text-lg font-bold text-orange-400">{learningData.learningAnalytics.completionTrend}</div>
                <div className="text-orange-300 text-sm">Completion Trend</div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white text-sm mb-3">Skill Gap Analysis</h4>
              <div className="space-y-2">
                {learningData.learningAnalytics.skillGapAnalysis.map((gap, index) => (
                  <div key={index} className="bg-slate-700/30 rounded p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-medium text-sm">{gap.skill}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(gap.priority)}`}>
                        {gap.priority}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Gap: {gap.gap.toFixed(1)}%</span>
                    </div>
                    <div className="text-teal-400 text-xs">{gap.action}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Summary */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Award className="w-5 h-5 text-gold-400 mr-2" />
            Certification Programs
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {learningData.certifications.map((cert, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="font-medium text-white text-sm mb-3">{cert.name}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Earned</span>
                    <span className="text-green-400 font-medium">{cert.earned}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">In Progress</span>
                    <span className="text-blue-400 font-medium">{cert.inProgress}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Pass Rate</span>
                    <span className="text-yellow-400 font-medium">{cert.passRate.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Recognition</span>
                    <span className={`font-medium ${cert.industryRecognition === 'HIGH' ? 'text-green-400' : 
                      cert.industryRecognition === 'CRITICAL' ? 'text-red-400' : 'text-yellow-400'}`}>
                      {cert.industryRecognition}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 pt-1">
                    Valid: {cert.validityPeriod} | Renewal: {cert.renewalRate.toFixed(1)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}