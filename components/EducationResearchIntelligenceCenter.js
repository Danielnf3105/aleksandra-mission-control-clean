// Education & Research Intelligence Center - Academic Operations, Research Programs, Educational Analytics & Knowledge Management
import { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, FlaskConical, TrendingUp, TrendingDown, Users, Award, AlertTriangle, CheckCircle, Target, BarChart3, PieChart } from 'lucide-react';

export default function EducationResearchIntelligenceCenter() {
  const [eduData, setEduData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    educationOverview: {
      totalStudents: 456789,
      totalInstitutions: 2345,
      graduationRate: 87.4,
      employmentRate: 91.2,
      researchBudget: 3456789000, // EUR
      activeResearchers: 67890,
      publishedPapers: 12456,
      citationIndex: 134.7,
      innovationIndex: 78.9,
      academicRanking: 23, // global position
      studentSatisfaction: 82.6,
      teacherStudentRatio: 12.4,
      digitalLearning: 89.7,
      internationalStudents: 23.4 // percentage
    },
    institutions: [
      {
        name: 'University of Lisbon',
        type: 'Public University',
        students: 45678,
        faculty: 3456,
        ranking: 156,
        researchGrants: 234567890,
        graduationRate: 89.7,
        employmentRate: 93.4,
        internationalStudents: 28.9,
        researchOutput: 2345
      },
      {
        name: 'University of Porto',
        type: 'Public University',
        students: 38967,
        faculty: 2890,
        ranking: 189,
        researchGrants: 187654321,
        graduationRate: 91.2,
        employmentRate: 89.6,
        internationalStudents: 24.7,
        researchOutput: 1987
      },
      {
        name: 'NOVA University Lisbon',
        type: 'Public University',
        students: 23456,
        faculty: 1789,
        ranking: 234,
        researchGrants: 123456789,
        graduationRate: 88.4,
        employmentRate: 92.1,
        internationalStudents: 31.2,
        researchOutput: 1456
      },
      {
        name: 'University of Aveiro',
        type: 'Public University',
        students: 15678,
        faculty: 1234,
        ranking: 298,
        researchGrants: 98765432,
        graduationRate: 85.9,
        employmentRate: 87.8,
        internationalStudents: 19.6,
        researchOutput: 987
      }
    ],
    researchPrograms: [
      {
        program: 'Artificial Intelligence & Machine Learning',
        budget: 456789000,
        researchers: 1234,
        projects: 89,
        publications: 567,
        patents: 45,
        impact: 'HIGH',
        collaboration: 'International',
        funding: 'EU Horizon',
        timeline: '2023-2027'
      },
      {
        program: 'Climate Change & Sustainability',
        budget: 345678000,
        researchers: 987,
        projects: 67,
        publications: 456,
        patents: 23,
        impact: 'CRITICAL',
        collaboration: 'Global',
        funding: 'Multiple Sources',
        timeline: '2022-2026'
      },
      {
        program: 'Biomedical Engineering',
        budget: 234567000,
        researchers: 765,
        projects: 45,
        publications: 345,
        patents: 34,
        impact: 'HIGH',
        collaboration: 'European',
        funding: 'ERC Grants',
        timeline: '2024-2028'
      },
      {
        program: 'Quantum Computing',
        budget: 123456000,
        researchers: 543,
        projects: 23,
        publications: 234,
        patents: 12,
        impact: 'EMERGING',
        collaboration: 'National',
        funding: 'National Science',
        timeline: '2025-2029'
      }
    ],
    academicPerformance: {
      primaryEducation: {
        enrollment: 98.7, // percentage
        literacyRate: 99.2,
        numeracyRate: 94.7,
        completion: 96.8,
        teacherQuality: 87.9,
        digitalSkills: 78.4
      },
      secondaryEducation: {
        enrollment: 94.2,
        graduationRate: 89.7,
        collegeReadiness: 76.8,
        vocationalTraining: 34.6,
        stemParticipation: 67.9,
        languageProficiency: 82.3
      },
      higherEducation: {
        enrollment: 67.8,
        graduationRate: 87.4,
        employmentRate: 91.2,
        advancedDegrees: 23.4,
        researchParticipation: 45.7,
        internationalMobility: 28.9
      }
    },
    researchMetrics: {
      totalPublications: 12456,
      h_index: 67.8,
      citationsPerPaper: 23.4,
      fieldWeightedCitation: 1.34,
      internationalCollaboration: 56.7,
      industryCollaboration: 34.2,
      patentApplications: 789,
      technologyTransfer: 234,
      startupsSpin_offs: 67,
      commercializedInventions: 123,
      researchImpact: {
        socialImpact: 78.9,
        economicImpact: 234567890,
        environmentalImpact: 67.4,
        healthImpact: 89.7,
        technologicalAdvancement: 92.3
      }
    },
    studentLifecycle: {
      applications: 123456,
      admissions: 67890,
      enrollment: 56789,
      retention: 89.7,
      graduation: 45678,
      employmentWithin6Months: 91.2,
      furtherEducation: 23.4,
      entrepreneurship: 8.9,
      studentDemographics: {
        international: 23.4,
        firstGeneration: 34.6,
        underrepresented: 45.7,
        partTime: 12.8,
        online: 67.9,
        adult_learners: 28.4
      }
    },
    digitalLearning: {
      onlinePrograms: 234,
      hybridCourses: 1567,
      digitalResources: 23456,
      learningManagementSystem: 98.7, // adoption rate
      virtualLabs: 789,
      aiTutoring: 34.6, // availability
      mobileAccess: 92.3,
      adaptiveLearning: 67.8,
      platformUsage: {
        dailyActiveUsers: 234567,
        courseCompletions: 78.9,
        engagement: 89.7,
        satisfaction: 84.2,
        technicalSupport: 91.3
      }
    },
    funding: {
      totalEducationBudget: 12345678900, // EUR
      governmentFunding: 8765432100,
      privateFunding: 2345678900,
      internationalGrants: 1234567900,
      tuitionFees: 4567890000,
      researchGrants: 3456789000,
      industryPartnerships: 987654321,
      fundingAllocation: {
        salaries: 67.8, // percentage
        infrastructure: 12.4,
        research: 8.9,
        technology: 6.7,
        student_support: 3.2,
        administration: 1.0
      },
      roi: {
        graduateEarnings: 45678, // EUR average
        economicContribution: 23456789000,
        societalValue: 156789000000,
        innovationValue: 98765432100
      }
    },
    internationalCooperation: {
      partnerInstitutions: 456,
      exchangePrograms: 123,
      jointDegrees: 45,
      researchCollaborations: 234,
      facultyExchange: 789,
      studyAbroadParticipation: 23.4,
      internationalProjects: [
        { project: 'Erasmus+ Mobility', participants: 12456, funding: 23456789, duration: '2021-2027' },
        { project: 'Horizon Europe Research', participants: 3456, funding: 45678901, duration: '2021-2027' },
        { project: 'Marie Curie Fellowship', participants: 789, funding: 12345678, duration: '2022-2026' },
        { project: 'COST Actions', participants: 2345, funding: 6789012, duration: '2020-2024' }
      ]
    },
    skillsDevelopment: {
      digitalSkills: {
        basicComputerLiteracy: 94.7,
        internetNavigation: 98.2,
        digitalContent: 87.9,
        programming: 45.6,
        dataAnalysis: 67.8,
        cybersecurity: 56.3,
        aiMachineLearning: 23.4
      },
      softSkills: {
        criticalThinking: 78.9,
        problemSolving: 82.4,
        communication: 89.7,
        collaboration: 91.2,
        leadership: 67.8,
        creativity: 74.5,
        adaptability: 86.3
      },
      professionalSkills: {
        projectManagement: 45.7,
        dataAnalysis: 67.9,
        digitalMarketing: 34.6,
        financialLiteracy: 56.8,
        entrepreneurship: 23.4,
        research: 78.9,
        technical: 89.3
      }
    },
    qualityAssurance: {
      accreditationCompliance: 96.8,
      teachingQuality: 87.9,
      learningOutcomes: 84.2,
      studentSatisfaction: 82.6,
      employerSatisfaction: 89.7,
      continuousImprovement: 91.3,
      qualityMetrics: [
        { metric: 'Course Completion Rate', value: 89.7, benchmark: 85.0, status: 'Above Target' },
        { metric: 'Graduate Employment Rate', value: 91.2, benchmark: 88.0, status: 'Above Target' },
        { metric: 'Student-Faculty Ratio', value: 12.4, benchmark: 15.0, status: 'Below Target' },
        { metric: 'Research Output per Faculty', value: 3.6, benchmark: 3.0, status: 'Above Target' },
        { metric: 'International Student %', value: 23.4, benchmark: 20.0, status: 'Above Target' }
      ]
    },
    educationAlerts: [
      {
        type: 'WARNING',
        category: 'Enrollment Trends',
        message: 'STEM program applications down 8% - review recruitment strategies and program appeal',
        institution: 'Multiple Universities',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '02:45',
        recommendations: ['Enhance STEM outreach', 'Review curriculum relevance', 'Increase industry partnerships']
      },
      {
        type: 'SUCCESS',
        category: 'Research Achievement',
        message: 'AI research program receives €50M EU Horizon grant - largest funding secured this year',
        institution: 'University of Lisbon',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '02:30',
        recommendations: ['Accelerate research timeline', 'Recruit top talent', 'Establish industry partnerships']
      },
      {
        type: 'CRITICAL',
        category: 'Digital Infrastructure',
        message: 'Learning management system experiencing high load - 15% performance degradation',
        institution: 'System-wide',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '02:40',
        recommendations: ['Scale server capacity', 'Optimize database queries', 'Implement load balancing']
      },
      {
        type: 'INFO',
        category: 'International Cooperation',
        message: 'New partnership agreement signed with 5 Asian universities - exchange programs starting 2026',
        institution: 'NOVA University',
        impact: 'LOW',
        actionRequired: false,
        timestamp: '02:20',
        recommendations: ['Develop exchange curricula', 'Prepare language support', 'Cultural orientation programs']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setEduData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        educationOverview: {
          ...prev.educationOverview,
          totalStudents: Math.max(400000, Math.min(500000, prev.educationOverview.totalStudents + Math.floor((Math.random() - 0.5) * 1000))),
          publishedPapers: Math.max(10000, Math.min(15000, prev.educationOverview.publishedPapers + Math.floor((Math.random() - 0.5) * 50)))
        },
        digitalLearning: {
          ...prev.digitalLearning,
          platformUsage: {
            ...prev.digitalLearning.platformUsage,
            dailyActiveUsers: Math.max(200000, Math.min(300000, prev.digitalLearning.platformUsage.dailyActiveUsers + Math.floor((Math.random() - 0.5) * 5000)))
          }
        }
      }));
    }, 25000);

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

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'POSITIVE': return 'text-green-400 bg-green-400/20';
      case 'EMERGING': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 80, excellent = 90, reverse = false) => {
    if (reverse) {
      if (value <= excellent / 2) return 'text-green-400';
      if (value <= good) return 'text-blue-400';
      if (value <= good * 1.2) return 'text-yellow-400';
      return 'text-red-400';
    } else {
      if (value >= excellent) return 'text-green-400';
      if (value >= good) return 'text-blue-400';
      if (value >= good * 0.8) return 'text-yellow-400';
      return 'text-red-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Above Target': return 'text-green-400';
      case 'On Target': return 'text-blue-400';
      case 'Below Target': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => {
    if (amount >= 1000000000) {
      return `€${(amount / 1000000000).toFixed(1)}B`;
    }
    if (amount >= 1000000) {
      return `€${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `€${(amount / 1000).toFixed(0)}K`;
    }
    return `€${amount.toLocaleString()}`;
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

  return (
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Education & Research Intelligence Center</h1>
              <p className="text-blue-300">Academic operations, research programs, educational analytics & knowledge management</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{eduData.currentTime}</div>
            <div className="text-blue-300">Education Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Education Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                Total Students
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(eduData.educationOverview.totalStudents)}</div>
            <div className="text-blue-300 text-sm">Institutions: {formatNumber(eduData.educationOverview.totalInstitutions)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <GraduationCap className="w-5 h-5 text-green-400 mr-2" />
                Graduation Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(eduData.educationOverview.graduationRate)}</div>
            <div className="text-green-300 text-sm">Employment: {formatPercentage(eduData.educationOverview.employmentRate)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <FlaskConical className="w-5 h-5 text-purple-400 mr-2" />
                Research Budget
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatCurrency(eduData.educationOverview.researchBudget)}</div>
            <div className="text-purple-300 text-sm">Researchers: {formatNumber(eduData.educationOverview.activeResearchers)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-cyan-400 mr-2" />
                Published Papers
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(eduData.educationOverview.publishedPapers)}</div>
            <div className="text-cyan-300 text-sm">Citation Index: {eduData.educationOverview.citationIndex.toFixed(1)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Award className="w-5 h-5 text-orange-400 mr-2" />
                Global Ranking
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">#{eduData.educationOverview.academicRanking}</div>
            <div className="text-orange-300 text-sm">Innovation: {formatPercentage(eduData.educationOverview.innovationIndex)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                Digital Learning
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatPercentage(eduData.educationOverview.digitalLearning)}</div>
            <div className="text-emerald-300 text-sm">Student Satisfaction: {formatPercentage(eduData.educationOverview.studentSatisfaction)}</div>
          </div>
        </div>

        {/* Institutions Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <GraduationCap className="w-5 h-5 text-green-400 mr-2" />
            Leading Educational Institutions
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Institution</th>
                  <th className="text-center p-3 text-slate-300">Students</th>
                  <th className="text-center p-3 text-slate-300">Faculty</th>
                  <th className="text-center p-3 text-slate-300">Global Rank</th>
                  <th className="text-center p-3 text-slate-300">Graduation Rate</th>
                  <th className="text-center p-3 text-slate-300">Research Output</th>
                </tr>
              </thead>
              <tbody>
                {eduData.institutions.map((institution, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{institution.name}</div>
                      <div className="text-slate-400 text-xs">{institution.type}</div>
                    </td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(institution.students)}</td>
                    <td className="p-3 text-center text-purple-400">{formatNumber(institution.faculty)}</td>
                    <td className="p-3 text-center text-orange-400">#{institution.ranking}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(institution.graduationRate, 85, 90)}`}>
                      {formatPercentage(institution.graduationRate)}
                    </td>
                    <td className="p-3 text-center text-cyan-400">{formatNumber(institution.researchOutput)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Research Programs & Academic Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FlaskConical className="w-5 h-5 text-purple-400 mr-2" />
              Major Research Programs
            </h3>
            <div className="space-y-4">
              {eduData.researchPrograms.map((program, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{program.program}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getImpactColor(program.impact)}`}>
                        {program.impact}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatCurrency(program.budget)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-slate-300">Researchers: {formatNumber(program.researchers)}</div>
                      <div className="text-slate-300">Projects: {program.projects}</div>
                      <div className="text-slate-300">Timeline: {program.timeline}</div>
                    </div>
                    <div>
                      <div className="text-blue-400">Publications: {program.publications}</div>
                      <div className="text-orange-400">Patents: {program.patents}</div>
                      <div className="text-purple-400">Funding: {program.funding}</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">
                    Collaboration: {program.collaboration}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
              Academic Performance Intelligence
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Primary Education</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Enrollment: {formatPercentage(eduData.academicPerformance.primaryEducation.enrollment)}</div>
                    <div className="text-slate-300">Literacy Rate: {formatPercentage(eduData.academicPerformance.primaryEducation.literacyRate)}</div>
                    <div className="text-slate-300">Numeracy Rate: {formatPercentage(eduData.academicPerformance.primaryEducation.numeracyRate)}</div>
                  </div>
                  <div>
                    <div className="text-green-400">Completion: {formatPercentage(eduData.academicPerformance.primaryEducation.completion)}</div>
                    <div className="text-blue-400">Teacher Quality: {formatPercentage(eduData.academicPerformance.primaryEducation.teacherQuality)}</div>
                    <div className="text-purple-400">Digital Skills: {formatPercentage(eduData.academicPerformance.primaryEducation.digitalSkills)}</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Secondary Education</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Enrollment: {formatPercentage(eduData.academicPerformance.secondaryEducation.enrollment)}</div>
                    <div className="text-slate-300">Graduation: {formatPercentage(eduData.academicPerformance.secondaryEducation.graduationRate)}</div>
                    <div className="text-slate-300">College Ready: {formatPercentage(eduData.academicPerformance.secondaryEducation.collegeReadiness)}</div>
                  </div>
                  <div>
                    <div className="text-orange-400">STEM: {formatPercentage(eduData.academicPerformance.secondaryEducation.stemParticipation)}</div>
                    <div className="text-cyan-400">Vocational: {formatPercentage(eduData.academicPerformance.secondaryEducation.vocationalTraining)}</div>
                    <div className="text-green-400">Languages: {formatPercentage(eduData.academicPerformance.secondaryEducation.languageProficiency)}</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Higher Education</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Enrollment: {formatPercentage(eduData.academicPerformance.higherEducation.enrollment)}</div>
                    <div className="text-slate-300">Graduation: {formatPercentage(eduData.academicPerformance.higherEducation.graduationRate)}</div>
                    <div className="text-slate-300">Employment: {formatPercentage(eduData.academicPerformance.higherEducation.employmentRate)}</div>
                  </div>
                  <div>
                    <div className="text-purple-400">Advanced Degrees: {formatPercentage(eduData.academicPerformance.higherEducation.advancedDegrees)}</div>
                    <div className="text-blue-400">Research: {formatPercentage(eduData.academicPerformance.higherEducation.researchParticipation)}</div>
                    <div className="text-orange-400">International: {formatPercentage(eduData.academicPerformance.higherEducation.internationalMobility)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Education & Research Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {eduData.educationAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                  <div>
                    <div className="text-slate-300">Institution: {alert.institution}</div>
                    <div className="text-slate-300">Action: {alert.actionRequired ? 'Required' : 'Monitoring'}</div>
                  </div>
                  <div>
                    <div className={`${getImpactColor(alert.impact).split(' ')[0]} text-xs`}>
                      Impact: {alert.impact}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
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

        {/* Digital Learning & Quality Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-emerald-400 mr-2" />
              Digital Learning Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatNumber(eduData.digitalLearning.platformUsage.dailyActiveUsers)}</div>
                <div className="text-emerald-300 text-sm">Daily Active Users</div>
                <div className="text-gray-400 text-xs mt-1">Engagement: {formatPercentage(eduData.digitalLearning.platformUsage.engagement)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{eduData.digitalLearning.onlinePrograms}</div>
                <div className="text-blue-300 text-sm">Online Programs</div>
                <div className="text-gray-400 text-xs mt-1">Hybrid Courses: {formatNumber(eduData.digitalLearning.hybridCourses)}</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Platform Performance</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">LMS Adoption: {formatPercentage(eduData.digitalLearning.learningManagementSystem)}</div>
                    <div className="text-slate-300">Mobile Access: {formatPercentage(eduData.digitalLearning.mobileAccess)}</div>
                    <div className="text-slate-300">Virtual Labs: {eduData.digitalLearning.virtualLabs}</div>
                  </div>
                  <div>
                    <div className="text-green-400">Course Completion: {formatPercentage(eduData.digitalLearning.platformUsage.courseCompletions)}</div>
                    <div className="text-blue-400">Satisfaction: {formatPercentage(eduData.digitalLearning.platformUsage.satisfaction)}</div>
                    <div className="text-purple-400">AI Tutoring: {formatPercentage(eduData.digitalLearning.aiTutoring)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PieChart className="w-5 h-5 text-orange-400 mr-2" />
              Quality Assurance Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{formatPercentage(eduData.qualityAssurance.accreditationCompliance)}</div>
                <div className="text-orange-300 text-sm">Accreditation</div>
                <div className="text-gray-400 text-xs mt-1">Teaching Quality: {formatPercentage(eduData.qualityAssurance.teachingQuality)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(eduData.qualityAssurance.studentSatisfaction)}</div>
                <div className="text-green-300 text-sm">Student Satisfaction</div>
                <div className="text-gray-400 text-xs mt-1">Employer Satisfaction: {formatPercentage(eduData.qualityAssurance.employerSatisfaction)}</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Quality Metrics</h4>
              {eduData.qualityAssurance.qualityMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{metric.metric}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{metric.value.toFixed(1)}</span>
                    <span className="text-slate-400">vs {metric.benchmark.toFixed(1)}</span>
                    <span className={`${getStatusColor(metric.status)}`}>
                      {metric.status}
                    </span>
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