// Human Resources Intelligence Center - Workforce Analytics & Employee Management
import { useState, useEffect } from 'react';
import { Users, TrendingUp, TrendingDown, Award, Clock, Target, Heart, BookOpen, AlertCircle, CheckCircle, BarChart3, PieChart } from 'lucide-react';

export default function HumanResourcesIntelligenceCenter() {
  const [hrData, setHrData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    workforceOverview: {
      totalEmployees: 247,
      newHires: 15,
      departures: 8,
      netGrowth: 7,
      turnoverRate: 12.4,
      retentionRate: 87.6,
      employeeSatisfaction: 84.7,
      engagementScore: 78.9,
      diversityIndex: 72.3,
      avgTenure: 3.2 // years
    },
    departmentBreakdown: [
      {
        department: 'Engineering',
        employees: 89,
        percentage: 36.0,
        growth: 15.3,
        satisfaction: 87.2,
        turnover: 8.9,
        avgSalary: 125000,
        openPositions: 8,
        productivity: 94.2
      },
      {
        department: 'Sales & Marketing',
        employees: 45,
        percentage: 18.2,
        growth: 22.7,
        satisfaction: 82.4,
        turnover: 14.7,
        avgSalary: 85000,
        openPositions: 5,
        productivity: 91.8
      },
      {
        department: 'Product',
        employees: 32,
        percentage: 13.0,
        growth: 18.5,
        satisfaction: 89.1,
        turnover: 6.2,
        avgSalary: 115000,
        openPositions: 4,
        productivity: 96.3
      },
      {
        department: 'Operations',
        employees: 28,
        percentage: 11.3,
        growth: 7.7,
        satisfaction: 80.5,
        turnover: 17.9,
        avgSalary: 75000,
        openPositions: 3,
        productivity: 88.7
      },
      {
        department: 'Customer Success',
        employees: 24,
        percentage: 9.7,
        growth: 33.3,
        satisfaction: 85.8,
        turnover: 12.5,
        avgSalary: 68000,
        openPositions: 6,
        productivity: 92.4
      },
      {
        department: 'HR & Admin',
        employees: 15,
        percentage: 6.1,
        growth: -6.2,
        satisfaction: 78.9,
        turnover: 20.0,
        avgSalary: 65000,
        openPositions: 1,
        productivity: 85.3
      },
      {
        department: 'Finance & Legal',
        employees: 14,
        percentage: 5.7,
        growth: 16.7,
        satisfaction: 83.7,
        turnover: 7.1,
        avgSalary: 95000,
        openPositions: 2,
        productivity: 89.6
      }
    ],
    performanceMetrics: {
      topPerformers: 42, // employees in top 10%
      improvementRequired: 18, // employees needing support
      avgPerformanceScore: 82.4,
      performanceDistribution: {
        excellent: 17.0, // 90-100%
        good: 46.2, // 80-89%
        satisfactory: 28.7, // 70-79%
        needsImprovement: 6.9, // 60-69%
        unsatisfactory: 1.2 // <60%
      },
      goalAchievement: 76.8,
      feedbackFrequency: 2.3, // reviews per quarter
      promotionRate: 8.5,
      skillGapAnalysis: 23.4 // percentage of skills needing development
    },
    recruitmentPipeline: {
      openPositions: 29,
      applications: 1247,
      phoneScreens: 156,
      technicalInterviews: 89,
      finalInterviews: 34,
      offers: 18,
      acceptances: 15,
      conversionRate: 1.2, // applications to hires
      timeToHire: 32.5, // days
      costPerHire: 4750,
      sourceEffectiveness: [
        { source: 'Referrals', hires: 6, percentage: 40.0, costPerHire: 2500, quality: 94.2 },
        { source: 'LinkedIn', hires: 4, percentage: 26.7, costPerHire: 3800, quality: 87.5 },
        { source: 'Company Website', hires: 3, percentage: 20.0, costPerHire: 1200, quality: 89.3 },
        { source: 'Job Boards', hires: 1, percentage: 6.7, costPerHire: 5600, quality: 78.4 },
        { source: 'Recruiters', hires: 1, percentage: 6.7, costPerHire: 8900, quality: 85.7 }
      ]
    },
    compensationBenefits: {
      avgSalary: 92400,
      salaryGrowth: 8.7, // year over year
      payEquity: 96.3, // score
      benefitsUtilization: {
        healthInsurance: 98.4,
        dental: 89.5,
        vision: 82.7,
        retirement401k: 87.9,
        paidTimeOff: 94.2,
        flexibleWork: 91.8,
        learningStipend: 67.3,
        gymMembership: 45.2
      },
      bonusEligible: 89.5, // percentage of workforce
      stockOptionsEligible: 67.2,
      salaryBenchmark: 102.3, // percentage vs market
      totalRewardsCost: 127400 // per employee including benefits
    },
    learningDevelopment: {
      trainingHours: 42.3, // per employee per year
      completionRate: 87.6,
      skillCertifications: 156,
      internalPromotions: 89.3, // percentage filled internally
      mentoringParticipation: 72.1,
      learningBudgetUtilization: 84.7,
      courseCategories: [
        { category: 'Technical Skills', participants: 189, satisfaction: 89.4, impact: 92.1 },
        { category: 'Leadership Development', participants: 67, satisfaction: 91.2, impact: 88.7 },
        { category: 'Communication', participants: 134, satisfaction: 86.5, impact: 85.3 },
        { category: 'Project Management', participants: 89, satisfaction: 88.9, impact: 91.6 },
        { category: 'Industry Knowledge', participants: 156, satisfaction: 87.8, impact: 89.2 }
      ]
    },
    employeeWellbeing: {
      wellbeingScore: 78.4,
      workLifeBalance: 82.7,
      stressLevel: 34.2, // lower is better
      burnoutRisk: 18.5, // percentage at risk
      mentalHealthSupport: 67.3, // utilization
      physicalHealthPrograms: 54.8,
      flexibilityRating: 88.9,
      workloadManagement: 76.5,
      supportResources: [
        { resource: 'Employee Assistance Program', utilization: 23.4, satisfaction: 91.2 },
        { resource: 'Mental Health Days', utilization: 67.8, satisfaction: 94.5 },
        { resource: 'Flexible Hours', utilization: 89.1, satisfaction: 92.3 },
        { resource: 'Remote Work Options', utilization: 76.2, satisfaction: 89.7 },
        { resource: 'Wellness Coaching', utilization: 34.5, satisfaction: 87.9 }
      ]
    },
    diversityInclusion: {
      genderBalance: {
        male: 58.7,
        female: 39.8,
        nonBinary: 1.5
      },
      ethnicDiversity: {
        white: 52.3,
        asian: 24.7,
        hispanic: 12.6,
        black: 7.8,
        other: 2.6
      },
      ageDistribution: {
        gen_z: 23.5, // 18-26
        millennial: 51.8, // 27-42
        gen_x: 21.5, // 43-58
        boomer: 3.2 // 59+
      },
      leadershipDiversity: 68.4, // percentage diverse in leadership
      inclusionScore: 84.2,
      payGapAnalysis: {
        genderPayGap: 2.3, // percentage difference
        ethnicPayGap: 3.7,
        actionPlan: 'ACTIVE'
      }
    },
    hrAlerts: [
      {
        type: 'CRITICAL',
        category: 'Turnover',
        message: 'Operations department turnover increased to 17.9% (target: <12%)',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'HR Business Partner - Operations',
        timestamp: '23:45',
        recommendations: ['Exit interview analysis', 'Manager training', 'Workload review']
      },
      {
        type: 'WARNING',
        category: 'Performance',
        message: '18 employees requiring performance improvement support',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Performance Management Team',
        timestamp: '22:30',
        recommendations: ['PIP development', 'Coaching sessions', 'Skill gap training']
      },
      {
        type: 'SUCCESS',
        category: 'Satisfaction',
        message: 'Employee satisfaction increased to 84.7% (+3.2% QoQ)',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'Employee Experience Team',
        timestamp: '21:15',
        recommendations: ['Continue current initiatives', 'Share success factors']
      },
      {
        type: 'INFO',
        category: 'Recruitment',
        message: 'Q1 hiring target 87% complete with 15 new hires',
        impact: 'LOW',
        actionRequired: false,
        assignedTo: 'Talent Acquisition',
        timestamp: '20:45',
        recommendations: ['Maintain current pace', 'Focus on remaining roles']
      }
    ],
    teamDynamics: {
      collaborationScore: 81.7,
      crossFunctionalProjects: 34,
      teamSatisfaction: 79.8,
      leadershipEffectiveness: 82.4,
      communicationQuality: 77.9,
      conflictResolution: 88.2,
      teamBuilding: {
        activitiesPerQuarter: 12,
        participation: 78.5,
        impact: 84.7
      }
    },
    complianceRisk: {
      hrCompliance: 96.8,
      laborLawCompliance: 98.2,
      equalOpportunity: 94.7,
      safetyCompliance: 97.4,
      dataPrivacy: 99.1,
      auditReadiness: 92.3,
      riskAreas: [
        { area: 'Overtime Management', riskLevel: 'MEDIUM', mitigationStatus: 'IN_PROGRESS' },
        { area: 'Remote Work Policy', riskLevel: 'LOW', mitigationStatus: 'COMPLETED' },
        { area: 'Diversity Reporting', riskLevel: 'LOW', mitigationStatus: 'ONGOING' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setHrData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        workforceOverview: {
          ...prev.workforceOverview,
          employeeSatisfaction: Math.max(70, Math.min(95, prev.workforceOverview.employeeSatisfaction + (Math.random() - 0.5) * 2)),
          engagementScore: Math.max(65, Math.min(90, prev.workforceOverview.engagementScore + (Math.random() - 0.5) * 1.5)),
          turnoverRate: Math.max(8, Math.min(18, prev.workforceOverview.turnoverRate + (Math.random() - 0.5) * 1))
        },
        performanceMetrics: {
          ...prev.performanceMetrics,
          avgPerformanceScore: Math.max(75, Math.min(90, prev.performanceMetrics.avgPerformanceScore + (Math.random() - 0.5) * 1)),
          goalAchievement: Math.max(70, Math.min(85, prev.performanceMetrics.goalAchievement + (Math.random() - 0.5) * 2))
        }
      }));
    }, 7000);

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

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => {
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
  };

  const getPerformanceColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-blue-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Human Resources Intelligence Center</h1>
              <p className="text-blue-300">Workforce analytics, employee management, performance tracking & HR intelligence</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{hrData.currentTime}</div>
            <div className="text-blue-300">HR Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Workforce Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                Total Employees
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{hrData.workforceOverview.totalEmployees}</div>
            <div className="text-blue-300 text-sm">+{hrData.workforceOverview.netGrowth} net growth</div>
            <div className="text-gray-400 text-xs mt-2">Avg tenure: {hrData.workforceOverview.avgTenure} years</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Heart className="w-5 h-5 text-pink-400 mr-2" />
                Satisfaction
              </h3>
            </div>
            <div className="text-3xl font-bold text-pink-400">{formatPercentage(hrData.workforceOverview.employeeSatisfaction)}</div>
            <div className="text-pink-300 text-sm">Engagement: {formatPercentage(hrData.workforceOverview.engagementScore)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingDown className="w-5 h-5 text-orange-400 mr-2" />
                Turnover Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(hrData.workforceOverview.turnoverRate)}</div>
            <div className="text-orange-300 text-sm">Retention: {formatPercentage(hrData.workforceOverview.retentionRate)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Performance
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{hrData.performanceMetrics.avgPerformanceScore.toFixed(1)}</div>
            <div className="text-green-300 text-sm">Goal achievement: {formatPercentage(hrData.performanceMetrics.goalAchievement)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BookOpen className="w-5 h-5 text-purple-400 mr-2" />
                Open Positions
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{hrData.recruitmentPipeline.openPositions}</div>
            <div className="text-purple-300 text-sm">Time to hire: {hrData.recruitmentPipeline.timeToHire.toFixed(0)} days</div>
          </div>
        </div>

        {/* Department Breakdown & Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
              Department Breakdown
            </h3>
            <div className="space-y-3">
              {hrData.departmentBreakdown.map((dept, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">{dept.department}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-cyan-400 text-sm">{dept.employees} people</span>
                      <span className={`text-sm flex items-center ${dept.growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {dept.growth > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                        {formatPercentage(Math.abs(dept.growth))}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3 text-xs">
                    <div className="text-center">
                      <div className={`font-medium ${getPerformanceColor(dept.satisfaction)}`}>{formatPercentage(dept.satisfaction)}</div>
                      <div className="text-slate-400">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-400 font-medium">{formatPercentage(dept.turnover)}</div>
                      <div className="text-slate-400">Turnover</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-medium">{formatCurrency(dept.avgSalary)}</div>
                      <div className="text-slate-400">Avg Salary</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-medium">{dept.openPositions}</div>
                      <div className="text-slate-400">Open Roles</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Award className="w-5 h-5 text-gold-400 mr-2" />
              Performance Analytics
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{hrData.performanceMetrics.topPerformers}</div>
                <div className="text-green-300 text-sm">Top Performers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{hrData.performanceMetrics.improvementRequired}</div>
                <div className="text-orange-300 text-sm">Need Support</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white text-sm font-medium">Performance Distribution</h4>
              {Object.entries(hrData.performanceMetrics.performanceDistribution).map(([level, percentage], index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <span className="text-slate-300 text-sm capitalize">{level.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className={`font-medium text-sm ${getPerformanceColor(percentage > 30 ? 85 : percentage > 20 ? 75 : 65)}`}>
                    {formatPercentage(percentage)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-purple-400 font-medium">{formatPercentage(hrData.performanceMetrics.promotionRate)}</div>
                <div className="text-slate-400">Promotion Rate</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{formatPercentage(hrData.performanceMetrics.skillGapAnalysis)}</div>
                <div className="text-slate-400">Skill Gap</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recruitment Pipeline & Compensation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-emerald-400 mr-2" />
              Recruitment Pipeline
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-emerald-400">{hrData.recruitmentPipeline.applications.toLocaleString()}</div>
                <div className="text-emerald-300 text-sm">Applications</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">{hrData.recruitmentPipeline.offers}</div>
                <div className="text-blue-300 text-sm">Offers</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{hrData.recruitmentPipeline.acceptances}</div>
                <div className="text-green-300 text-sm">Hires</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Source Effectiveness</h4>
              {hrData.recruitmentPipeline.sourceEffectiveness.map((source, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{source.source}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-green-400">{source.hires} hires</span>
                    <span className="text-blue-400">{formatCurrency(source.costPerHire)}</span>
                    <span className="text-purple-400">{formatPercentage(source.quality)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{formatPercentage(hrData.recruitmentPipeline.conversionRate)}</div>
                <div className="text-slate-400">Conversion Rate</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-cyan-400 font-medium">{formatCurrency(hrData.recruitmentPipeline.costPerHire)}</div>
                <div className="text-slate-400">Cost Per Hire</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PieChart className="w-5 h-5 text-green-400 mr-2" />
              Compensation & Benefits
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatCurrency(hrData.compensationBenefits.avgSalary)}</div>
                <div className="text-green-300 text-sm">Avg Salary</div>
                <div className="text-gray-400 text-xs mt-1">+{formatPercentage(hrData.compensationBenefits.salaryGrowth)} YoY</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatPercentage(hrData.compensationBenefits.payEquity)}</div>
                <div className="text-purple-300 text-sm">Pay Equity</div>
                <div className="text-gray-400 text-xs mt-1">{formatPercentage(hrData.compensationBenefits.salaryBenchmark)} vs market</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Benefits Utilization</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(hrData.compensationBenefits.benefitsUtilization).slice(0, 6).map(([benefit, rate], index) => (
                  <div key={index} className="flex justify-between bg-slate-700/30 rounded px-2 py-1">
                    <span className="text-slate-300 capitalize">{benefit.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-cyan-400">{formatPercentage(rate)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{formatPercentage(hrData.compensationBenefits.bonusEligible)}</div>
                <div className="text-slate-400">Bonus Eligible</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-blue-400 font-medium">{formatCurrency(hrData.compensationBenefits.totalRewardsCost)}</div>
                <div className="text-slate-400">Total Rewards</div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning & Development and Wellbeing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BookOpen className="w-5 h-5 text-purple-400 mr-2" />
              Learning & Development
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-purple-400">{hrData.learningDevelopment.trainingHours.toFixed(1)}</div>
                <div className="text-purple-300 text-sm">Hours/Employee</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{formatPercentage(hrData.learningDevelopment.completionRate)}</div>
                <div className="text-green-300 text-sm">Completion</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-orange-400">{hrData.learningDevelopment.skillCertifications}</div>
                <div className="text-orange-300 text-sm">Certifications</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Course Categories</h4>
              {hrData.learningDevelopment.courseCategories.map((course, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{course.category}</span>
                    <span className="text-cyan-400 text-sm">{course.participants} participants</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-green-400">Satisfaction: {formatPercentage(course.satisfaction)}</span>
                    <span className="text-purple-400">Impact: {formatPercentage(course.impact)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Heart className="w-5 h-5 text-pink-400 mr-2" />
              Employee Wellbeing
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">{hrData.employeeWellbeing.wellbeingScore.toFixed(1)}</div>
                <div className="text-pink-300 text-sm">Wellbeing Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(hrData.employeeWellbeing.workLifeBalance)}</div>
                <div className="text-cyan-300 text-sm">Work-Life Balance</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center bg-slate-700/50 rounded p-3">
                <div className="text-orange-400 font-medium">{formatPercentage(hrData.employeeWellbeing.stressLevel)}</div>
                <div className="text-slate-400 text-xs">Stress Level</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-3">
                <div className="text-red-400 font-medium">{formatPercentage(hrData.employeeWellbeing.burnoutRisk)}</div>
                <div className="text-slate-400 text-xs">Burnout Risk</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Support Resources</h4>
              {hrData.employeeWellbeing.supportResources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{resource.resource}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{formatPercentage(resource.utilization)}</span>
                    <span className="text-green-400">{formatPercentage(resource.satisfaction)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HR Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
            HR Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {hrData.hrAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="text-slate-400 text-xs mb-2">Assigned: {alert.assignedTo}</div>
                {alert.actionRequired && (
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded text-xs">Action Required</span>
                  </div>
                )}
                <div className="mt-2 flex flex-wrap gap-1">
                  {alert.recommendations.map((rec, recIndex) => (
                    <span key={recIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diversity & Inclusion Analytics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Users className="w-5 h-5 text-rainbow mr-2" />
            Diversity & Inclusion Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Gender Balance</h4>
              <div className="space-y-2">
                {Object.entries(hrData.diversityInclusion.genderBalance).map(([gender, percentage], index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-slate-300 capitalize">{gender}</span>
                    <span className="text-cyan-400">{formatPercentage(percentage)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Ethnic Diversity</h4>
              <div className="space-y-2">
                {Object.entries(hrData.diversityInclusion.ethnicDiversity).map(([ethnicity, percentage], index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-slate-300 capitalize">{ethnicity}</span>
                    <span className="text-green-400">{formatPercentage(percentage)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Age Distribution</h4>
              <div className="space-y-2">
                {Object.entries(hrData.diversityInclusion.ageDistribution).map(([generation, percentage], index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-slate-300">{generation.replace('_', ' ').toUpperCase()}</span>
                    <span className="text-purple-400">{formatPercentage(percentage)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Key Metrics</h4>
              <div className="space-y-3">
                <div className="text-center bg-slate-700/50 rounded p-3">
                  <div className="text-orange-400 font-medium">{formatPercentage(hrData.diversityInclusion.leadershipDiversity)}</div>
                  <div className="text-slate-400 text-xs">Leadership Diversity</div>
                </div>
                <div className="text-center bg-slate-700/50 rounded p-3">
                  <div className="text-blue-400 font-medium">{hrData.diversityInclusion.inclusionScore.toFixed(1)}</div>
                  <div className="text-slate-400 text-xs">Inclusion Score</div>
                </div>
                <div className="text-center bg-slate-700/50 rounded p-3">
                  <div className="text-green-400 font-medium">{formatPercentage(hrData.diversityInclusion.payGapAnalysis.genderPayGap)}</div>
                  <div className="text-slate-400 text-xs">Gender Pay Gap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}