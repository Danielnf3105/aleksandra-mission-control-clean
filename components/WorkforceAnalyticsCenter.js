// Workforce Analytics Center - Employee Performance Monitoring & Human Capital Intelligence
import { useState, useEffect } from 'react';
import { Users, TrendingUp, Target, Clock, Award, Brain, AlertTriangle, CheckCircle, DollarSign, BarChart3, Zap } from 'lucide-react';

export default function WorkforceAnalyticsCenter() {
  const [wfData, setWfData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    workforceOverview: {
      totalEmployees: 1234,
      activeEmployees: 1178,
      newHires: 45,
      attrition: 23,
      retentionRate: 94.7,
      averageTenure: 3.8,
      employeeEngagement: 78.9,
      satisfactionScore: 4.2,
      productivityIndex: 87.4,
      utilization: 89.3,
      absenteeism: 2.4,
      overtimeHours: 234
    },
    departmentAnalytics: [
      {
        department: 'Engineering',
        employees: 245,
        productivity: 92.4,
        engagement: 84.7,
        satisfaction: 4.5,
        retention: 96.8,
        avgSalary: 89012,
        utilization: 91.2,
        skillsGap: 23.4,
        trainings: 67,
        performance: 'EXCELLENT',
        trend: 'IMPROVING',
        keySkills: ['Software Development', 'Data Science', 'Cloud Architecture', 'DevOps'],
        criticalRoles: ['Senior Engineer', 'Tech Lead', 'Solution Architect']
      },
      {
        department: 'Sales',
        employees: 89,
        productivity: 87.9,
        engagement: 78.3,
        satisfaction: 4.1,
        retention: 89.7,
        avgSalary: 67890,
        utilization: 94.5,
        skillsGap: 34.6,
        trainings: 45,
        performance: 'GOOD',
        trend: 'STABLE',
        keySkills: ['Sales Strategy', 'CRM Systems', 'Negotiation', 'Lead Generation'],
        criticalRoles: ['Account Executive', 'Sales Manager', 'Business Developer']
      },
      {
        department: 'Marketing',
        employees: 67,
        productivity: 83.6,
        engagement: 81.2,
        satisfaction: 4.3,
        retention: 91.4,
        avgSalary: 56789,
        utilization: 87.8,
        skillsGap: 45.7,
        trainings: 89,
        performance: 'GOOD',
        trend: 'IMPROVING',
        keySkills: ['Digital Marketing', 'Analytics', 'Content Creation', 'SEO/SEM'],
        criticalRoles: ['Marketing Manager', 'Digital Specialist', 'Content Manager']
      },
      {
        department: 'Operations',
        employees: 156,
        productivity: 79.8,
        engagement: 73.4,
        satisfaction: 3.9,
        retention: 87.2,
        avgSalary: 45678,
        utilization: 89.6,
        skillsGap: 56.8,
        trainings: 34,
        performance: 'FAIR',
        trend: 'DECLINING',
        keySkills: ['Process Management', 'Quality Control', 'Logistics', 'Automation'],
        criticalRoles: ['Operations Manager', 'Quality Lead', 'Process Analyst']
      },
      {
        department: 'Customer Success',
        employees: 45,
        productivity: 89.7,
        engagement: 87.3,
        satisfaction: 4.6,
        retention: 98.2,
        avgSalary: 54321,
        utilization: 93.4,
        skillsGap: 12.3,
        trainings: 78,
        performance: 'EXCELLENT',
        trend: 'IMPROVING',
        keySkills: ['Customer Management', 'Data Analysis', 'Communication', 'Problem Solving'],
        criticalRoles: ['Customer Success Manager', 'Support Specialist', 'Account Manager']
      }
    ],
    performanceMetrics: [
      {
        employee: 'Sarah Chen',
        department: 'Engineering',
        role: 'Senior Software Engineer',
        performance: 94.7,
        productivity: 96.2,
        engagement: 89.4,
        goalsAchieved: 95.6,
        skillsRating: 4.8,
        tenure: 2.3,
        lastReview: '2026-02-15',
        salary: 95000,
        status: 'HIGH_PERFORMER',
        potentialRisk: 'LOW',
        careerPath: 'Tech Lead Track'
      },
      {
        employee: 'Michael Rodriguez',
        department: 'Sales',
        role: 'Account Executive',
        performance: 87.3,
        productivity: 89.7,
        engagement: 78.9,
        goalsAchieved: 112.4,
        skillsRating: 4.2,
        tenure: 1.8,
        lastReview: '2026-02-20',
        salary: 72000,
        status: 'TOP_PERFORMER',
        potentialRisk: 'LOW',
        careerPath: 'Sales Manager Track'
      },
      {
        employee: 'Emma Thompson',
        department: 'Marketing',
        role: 'Digital Marketing Manager',
        performance: 82.6,
        productivity: 85.3,
        engagement: 84.7,
        goalsAchieved: 89.2,
        skillsRating: 4.4,
        tenure: 3.1,
        lastReview: '2026-01-30',
        salary: 65000,
        status: 'SOLID_PERFORMER',
        potentialRisk: 'LOW',
        careerPath: 'Marketing Director Track'
      },
      {
        employee: 'David Wilson',
        department: 'Operations',
        role: 'Operations Specialist',
        performance: 68.9,
        productivity: 72.4,
        engagement: 56.7,
        goalsAchieved: 67.8,
        skillsRating: 3.2,
        tenure: 4.2,
        lastReview: '2026-03-01',
        salary: 48000,
        status: 'NEEDS_IMPROVEMENT',
        potentialRisk: 'HIGH',
        careerPath: 'Performance Plan'
      },
      {
        employee: 'Lisa Anderson',
        department: 'Customer Success',
        role: 'Customer Success Manager',
        performance: 91.8,
        productivity: 93.5,
        engagement: 88.6,
        goalsAchieved: 105.7,
        skillsRating: 4.7,
        tenure: 1.5,
        lastReview: '2026-02-10',
        salary: 58000,
        status: 'HIGH_PERFORMER',
        potentialRisk: 'LOW',
        careerPath: 'Senior CSM Track'
      }
    ],
    skillsAnalysis: [
      {
        skill: 'Data Science',
        demand: 89.4,
        supply: 67.8,
        gap: -21.6,
        priority: 'CRITICAL',
        employees: 45,
        proficiency: 3.4,
        training: 23,
        marketValue: 95000,
        growthRate: 34.5,
        futureNeed: 'INCREASING'
      },
      {
        skill: 'Cloud Architecture',
        demand: 78.9,
        supply: 56.7,
        gap: -22.2,
        priority: 'HIGH',
        employees: 34,
        proficiency: 3.7,
        training: 18,
        marketValue: 87000,
        growthRate: 45.6,
        futureNeed: 'CRITICAL'
      },
      {
        skill: 'Digital Marketing',
        demand: 67.8,
        supply: 89.3,
        gap: +21.5,
        priority: 'LOW',
        employees: 56,
        proficiency: 4.1,
        training: 34,
        marketValue: 62000,
        growthRate: 12.3,
        futureNeed: 'STABLE'
      },
      {
        skill: 'DevOps Engineering',
        demand: 82.3,
        supply: 45.6,
        gap: -36.7,
        priority: 'CRITICAL',
        employees: 28,
        proficiency: 3.9,
        training: 12,
        marketValue: 92000,
        growthRate: 56.7,
        futureNeed: 'CRITICAL'
      },
      {
        skill: 'Product Management',
        demand: 73.4,
        supply: 67.8,
        gap: -5.6,
        priority: 'MEDIUM',
        employees: 23,
        proficiency: 3.6,
        training: 15,
        marketValue: 78000,
        growthRate: 23.4,
        futureNeed: 'INCREASING'
      }
    ],
    engagementTracking: [
      {
        period: 'Q1 2026',
        overall: 78.9,
        byDepartment: {
          'Engineering': 84.7,
          'Sales': 78.3,
          'Marketing': 81.2,
          'Operations': 73.4,
          'Customer Success': 87.3
        },
        drivers: ['Compensation', 'Work-life balance', 'Career growth'],
        concerns: ['Workload', 'Limited resources', 'Communication'],
        initiatives: ['Flexible hours', 'Skills training', 'Team building'],
        trend: 'IMPROVING',
        surveyResponse: 89.7
      },
      {
        period: 'Q4 2025',
        overall: 76.2,
        byDepartment: {
          'Engineering': 82.1,
          'Sales': 75.6,
          'Marketing': 78.9,
          'Operations': 71.8,
          'Customer Success': 85.4
        },
        drivers: ['Recognition', 'Autonomy', 'Innovation'],
        concerns: ['Burnout', 'Process inefficiency', 'Management'],
        initiatives: ['Recognition program', 'Process improvement', 'Leadership training'],
        trend: 'STABLE',
        surveyResponse: 87.3
      }
    ],
    talentPipeline: [
      {
        position: 'Senior Data Scientist',
        department: 'Engineering',
        urgency: 'CRITICAL',
        candidates: 12,
        interviewed: 8,
        offers: 2,
        timeToFill: 45,
        targetDate: '2026-04-15',
        budget: 105000,
        requirements: ['PhD/Masters', '5+ years ML', 'Python/R', 'Big Data'],
        status: 'ACTIVE',
        recruiter: 'Amanda Smith'
      },
      {
        position: 'DevOps Engineer',
        department: 'Engineering',
        urgency: 'HIGH',
        candidates: 18,
        interviewed: 12,
        offers: 3,
        timeToFill: 38,
        targetDate: '2026-04-20',
        budget: 92000,
        requirements: ['AWS/Azure', 'Kubernetes', 'CI/CD', 'Infrastructure as Code'],
        status: 'OFFER_PENDING',
        recruiter: 'James Wilson'
      },
      {
        position: 'Sales Director',
        department: 'Sales',
        urgency: 'MEDIUM',
        candidates: 6,
        interviewed: 4,
        offers: 1,
        timeToFill: 62,
        targetDate: '2026-05-10',
        budget: 125000,
        requirements: ['10+ years sales', 'Team leadership', 'SaaS experience', 'B2B sales'],
        status: 'INTERVIEWING',
        recruiter: 'Sarah Johnson'
      },
      {
        position: 'UX Designer',
        department: 'Engineering',
        urgency: 'MEDIUM',
        candidates: 15,
        interviewed: 9,
        offers: 0,
        timeToFill: 35,
        targetDate: '2026-04-25',
        budget: 68000,
        requirements: ['Portfolio', 'Figma/Sketch', 'User research', 'Prototyping'],
        status: 'SCREENING',
        recruiter: 'Emily Davis'
      }
    ],
    workforceAlerts: [
      {
        type: 'CRITICAL',
        category: 'Attrition Risk',
        message: 'David Wilson showing high attrition risk - performance 68.9%, engagement 56.7%',
        metric: 'Employee Risk Score',
        value: 'HIGH RISK',
        change: 'Performance declining',
        impact: 'MODERATE',
        timestamp: '08:44',
        employee: 'David Wilson',
        department: 'Operations',
        recommendation: 'Immediate manager intervention, performance improvement plan',
        urgency: 'CRITICAL',
        escalation: 'HR_MANAGER'
      },
      {
        type: 'WARNING',
        category: 'Skills Gap',
        message: 'DevOps Engineering showing 36.7% skills gap - demand exceeds supply significantly',
        metric: 'Skills Gap',
        value: '-36.7%',
        change: 'Critical shortage',
        impact: 'HIGH',
        timestamp: '08:43',
        skill: 'DevOps Engineering',
        affectedProjects: 8,
        recommendation: 'Accelerate hiring, external training, contractor support',
        urgency: 'HIGH',
        technicalAction: 'TALENT_ACQUISITION'
      },
      {
        type: 'SUCCESS',
        category: 'Performance',
        message: 'Customer Success department achieved 91.8% performance - highest across organization',
        metric: 'Department Performance',
        value: '91.8%',
        change: 'Leading performance',
        impact: 'POSITIVE',
        timestamp: '08:42',
        department: 'Customer Success',
        employees: 45,
        recommendation: 'Document best practices, share methodologies across teams',
        urgency: 'LOW',
        opportunity: 'KNOWLEDGE_SHARING'
      },
      {
        type: 'INFO',
        category: 'Engagement Trend',
        message: 'Overall employee engagement improved to 78.9% (+2.7% from Q4 2025)',
        metric: 'Employee Engagement',
        value: '78.9%',
        change: '+2.7% improvement',
        impact: 'POSITIVE',
        timestamp: '08:41',
        survey: 'Q1 2026',
        responseRate: '89.7%',
        recommendation: 'Continue flexible hours and training initiatives',
        urgency: 'LOW',
        opportunity: 'ENGAGEMENT_OPTIMIZATION'
      }
    ],
    compensationAnalysis: [
      {
        role: 'Software Engineer',
        employees: 67,
        avgSalary: 78000,
        marketRate: 82000,
        variance: -4.9,
        rangeMin: 65000,
        rangeMax: 95000,
        competitiveness: 'BELOW_MARKET',
        retentionRisk: 'MEDIUM',
        adjustmentNeeded: 8000,
        budgetImpact: 536000
      },
      {
        role: 'Data Scientist',
        employees: 23,
        avgSalary: 89000,
        marketRate: 95000,
        variance: -6.3,
        rangeMin: 75000,
        rangeMax: 110000,
        competitiveness: 'BELOW_MARKET',
        retentionRisk: 'HIGH',
        adjustmentNeeded: 12000,
        budgetImpact: 276000
      },
      {
        role: 'Sales Manager',
        employees: 12,
        avgSalary: 85000,
        marketRate: 88000,
        variance: -3.4,
        rangeMin: 70000,
        rangeMax: 120000,
        competitiveness: 'COMPETITIVE',
        retentionRisk: 'LOW',
        adjustmentNeeded: 3000,
        budgetImpact: 36000
      },
      {
        role: 'Marketing Manager',
        employees: 8,
        avgSalary: 72000,
        marketRate: 75000,
        variance: -4.0,
        rangeMin: 60000,
        rangeMax: 90000,
        competitiveness: 'COMPETITIVE',
        retentionRisk: 'LOW',
        adjustmentNeeded: 3000,
        budgetImpact: 24000
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setWfData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        workforceOverview: {
          ...prev.workforceOverview,
          activeEmployees: Math.max(1175, Math.min(1185, prev.workforceOverview.activeEmployees + Math.floor((Math.random() - 0.5) * 6))),
          employeeEngagement: Math.max(78.0, Math.min(80.0, prev.workforceOverview.employeeEngagement + (Math.random() - 0.5) * 0.4)),
          productivityIndex: Math.max(86.0, Math.min(89.0, prev.workforceOverview.productivityIndex + (Math.random() - 0.5) * 0.5))
        }
      }));
    }, 40000);

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

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'GOOD': return 'text-blue-400 bg-blue-400/20';
      case 'FAIR': return 'text-yellow-400 bg-yellow-400/20';
      case 'POOR': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'IMPROVING': return 'text-green-400';
      case 'STABLE': return 'text-blue-400';
      case 'DECLINING': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'HIGH_PERFORMER': return 'text-green-400 bg-green-400/20';
      case 'TOP_PERFORMER': return 'text-blue-400 bg-blue-400/20';
      case 'SOLID_PERFORMER': return 'text-cyan-400 bg-cyan-400/20';
      case 'NEEDS_IMPROVEMENT': return 'text-yellow-400 bg-yellow-400/20';
      case 'UNDERPERFORMING': return 'text-red-400 bg-red-400/20';
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

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getCompetitivenessColor = (comp) => {
    switch (comp) {
      case 'ABOVE_MARKET': return 'text-green-400 bg-green-400/20';
      case 'COMPETITIVE': return 'text-blue-400 bg-blue-400/20';
      case 'BELOW_MARKET': return 'text-red-400 bg-red-400/20';
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
    <div className="h-full bg-gradient-to-br from-rose-900 via-slate-900 to-pink-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-rose-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Workforce Analytics Center</h1>
              <p className="text-rose-300">Employee performance monitoring & human capital intelligence</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-rose-400">{wfData.currentTime}</div>
            <div className="text-rose-300">WF Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Workforce Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-rose-400 mr-2" />
                Employees
              </h3>
            </div>
            <div className="text-3xl font-bold text-rose-400">{wfData.workforceOverview.activeEmployees}</div>
            <div className="text-rose-300 text-sm">{wfData.workforceOverview.totalEmployees} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Productivity
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(wfData.workforceOverview.productivityIndex, 75, 85)}`}>
              {formatPercentage(wfData.workforceOverview.productivityIndex)}
            </div>
            <div className="text-green-300 text-sm">Index</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Award className="w-5 h-5 text-blue-400 mr-2" />
                Engagement
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(wfData.workforceOverview.employeeEngagement, 70, 80)}`}>
              {formatPercentage(wfData.workforceOverview.employeeEngagement)}
            </div>
            <div className="text-blue-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
                Retention
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(wfData.workforceOverview.retentionRate, 85, 95)}`}>
              {formatPercentage(wfData.workforceOverview.retentionRate)}
            </div>
            <div className="text-purple-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-orange-400 mr-2" />
                Tenure
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{wfData.workforceOverview.averageTenure.toFixed(1)}</div>
            <div className="text-orange-300 text-sm">Years Avg</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
                Satisfaction
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(wfData.workforceOverview.satisfactionScore * 20, 70, 85)}`}>
              {wfData.workforceOverview.satisfactionScore.toFixed(1)}
            </div>
            <div className="text-cyan-300 text-sm">out of 5</div>
          </div>
        </div>

        {/* Department Analytics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-rose-400 mr-2" />
            Department Performance Analytics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Department</th>
                  <th className="text-center p-3 text-slate-300">Employees</th>
                  <th className="text-center p-3 text-slate-300">Productivity</th>
                  <th className="text-center p-3 text-slate-300">Engagement</th>
                  <th className="text-center p-3 text-slate-300">Retention</th>
                  <th className="text-center p-3 text-slate-300">Performance</th>
                </tr>
              </thead>
              <tbody>
                {wfData.departmentAnalytics.map((dept, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{dept.department}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        Avg Salary: {formatCurrency(dept.avgSalary)} • Skills Gap: {formatPercentage(dept.skillsGap)}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-cyan-400 font-medium">{dept.employees}</div>
                      <div className="text-slate-400 text-xs">{formatPercentage(dept.utilization)} util</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(dept.productivity, 75, 85)}`}>
                      {formatPercentage(dept.productivity)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(dept.engagement, 70, 80)}`}>
                      {formatPercentage(dept.engagement)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(dept.retention, 85, 95)}`}>
                      {formatPercentage(dept.retention)}
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs ${getPerformanceColor(dept.performance)}`}>
                          {dept.performance}
                        </span>
                        <span className={`text-sm ${getTrendColor(dept.trend)}`}>
                          {dept.trend === 'IMPROVING' ? '↗' : dept.trend === 'DECLINING' ? '↘' : '→'}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Performers & Skills Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Award className="w-5 h-5 text-yellow-400 mr-2" />
              Employee Performance Intelligence
            </h3>
            <div className="space-y-4">
              {wfData.performanceMetrics.map((employee, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{employee.employee}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(employee.status)}`}>
                        {employee.status.replace('_', ' ')}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getRiskColor(employee.potentialRisk)}`}>
                        {employee.potentialRisk} Risk
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${getScoreColor(employee.performance, 70, 85)}`}>Performance: {formatPercentage(employee.performance)}</div>
                    <div className={`${getScoreColor(employee.productivity, 75, 90)}`}>Productivity: {formatPercentage(employee.productivity)}</div>
                    <div className={`${getScoreColor(employee.engagement, 70, 85)}`}>Engagement: {formatPercentage(employee.engagement)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Goals: {formatPercentage(employee.goalsAchieved)}</div>
                    <div className="text-purple-400">Skills: {employee.skillsRating.toFixed(1)}/5</div>
                    <div className="text-orange-400">Tenure: {employee.tenure.toFixed(1)}y</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Role:</strong> {employee.role} • <strong>Salary:</strong> {formatCurrency(employee.salary)} • <strong>Path:</strong> {employee.careerPath}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-green-400 mr-2" />
              Skills Gap Analysis Intelligence
            </h3>
            <div className="space-y-4">
              {wfData.skillsAnalysis.map((skill, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{skill.skill}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(skill.priority)}`}>
                        {skill.priority}
                      </span>
                      <span className={`text-sm ${skill.gap < 0 ? 'text-red-400' : 'text-green-400'}`}>
                        {skill.gap > 0 ? '+' : ''}{formatPercentage(skill.gap)}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Demand: {formatPercentage(skill.demand)}</div>
                    <div className="text-cyan-400">Supply: {formatPercentage(skill.supply)}</div>
                    <div className="text-green-400">Market: {formatCurrency(skill.marketValue)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Employees: {skill.employees}</div>
                    <div className="text-orange-400">Proficiency: {skill.proficiency.toFixed(1)}/5</div>
                    <div className="text-yellow-400">Training: {skill.training}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Growth:</strong> {formatPercentage(skill.growthRate)} • <strong>Future Need:</strong> {skill.futureNeed}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Talent Pipeline & Compensation Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-blue-400 mr-2" />
              Talent Pipeline Intelligence
            </h3>
            <div className="space-y-4">
              {wfData.talentPipeline.map((position, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{position.position}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(position.urgency)}`}>
                        {position.urgency}
                      </span>
                      <span className="text-green-400 text-xs">{formatCurrency(position.budget)}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Candidates: {position.candidates}</div>
                    <div className="text-purple-400">Interviewed: {position.interviewed}</div>
                    <div className="text-green-400">Offers: {position.offers}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Time to Fill: {position.timeToFill}d</div>
                    <div className="text-cyan-400">Target: {position.targetDate}</div>
                    <div className="text-yellow-400">Status: {position.status.replace('_', ' ')}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Recruiter:</strong> {position.recruiter} • <strong>Dept:</strong> {position.department} • <strong>Reqs:</strong> {position.requirements.slice(0, 2).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <DollarSign className="w-5 h-5 text-green-400 mr-2" />
              Compensation Analysis Intelligence
            </h3>
            <div className="space-y-4">
              {wfData.compensationAnalysis.map((comp, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{comp.role}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getCompetitivenessColor(comp.competitiveness)}`}>
                        {comp.competitiveness.replace('_', ' ')}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getRiskColor(comp.retentionRisk)}`}>
                        {comp.retentionRisk} Risk
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Avg Salary: {formatCurrency(comp.avgSalary)}</div>
                    <div className="text-purple-400">Market: {formatCurrency(comp.marketRate)}</div>
                    <div className={`${comp.variance < 0 ? 'text-red-400' : 'text-green-400'}`}>
                      Variance: {formatPercentage(comp.variance)}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Employees: {comp.employees}</div>
                    <div className="text-orange-400">Range: {formatCurrency(comp.rangeMin)}-{formatCurrency(comp.rangeMax)}</div>
                    <div className="text-yellow-400">Adjustment: {formatCurrency(comp.adjustmentNeeded)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Budget Impact:</strong> {formatCurrency(comp.budgetImpact)} total annual adjustment needed
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workforce Analytics Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Workforce Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {wfData.workforceAlerts.map((alert, index) => (
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
                    {alert.employee && <div className="text-slate-300">Employee: {alert.employee}</div>}
                    {alert.department && <div className="text-slate-300">Department: {alert.department}</div>}
                    {alert.skill && <div className="text-slate-300">Skill: {alert.skill}</div>}
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
  );
}