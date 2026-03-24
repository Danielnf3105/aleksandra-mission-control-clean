// Education Technology & Learning Intelligence Center - Educational & Learning Analytics
import { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, Users, TrendingUp, Award, Monitor, BarChart3, Brain, Target, Lightbulb, Activity, Zap } from 'lucide-react';

export default function EducationTechnologyLearningIntelligenceCenter() {
  const [educationData, setEducationData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    educationOverview: {
      educationalInstitutions: 234567,
      learningPlatforms: 56789,
      students: 1234567890,
      educators: 89012345,
      courses: 12345678,
      enrollments: 5678901234,
      completionRate: 78.4,
      engagementScore: 82.7,
      learningOutcomes: 89.1,
      platformUptime: 99.96,
      contentQuality: 91.3,
      studentSatisfaction: 87.9,
      educatorSatisfaction: 84.2,
      technologyAdoption: 76.8,
      accessibilityCompliance: 94.5,
      dataPrivacy: 97.8,
      costEffectiveness: 85.6,
      innovationIndex: 88.4,
      globalReach: 92.3,
      skillsAlignment: 79.7
    },
    educationalInstitutions: [
      {
        institutionName: 'MIT OpenCourseWare',
        institutionId: 'MIT-OCW-001',
        location: 'Cambridge, Massachusetts, USA',
        type: 'OPEN EDUCATION',
        status: 'OPERATIONAL',
        foundedYear: 2001,
        studentsReached: 325000000,
        coursesOffered: 2400,
        languages: 15,
        downloads: 890000000,
        globalAccessibility: 'FREE',
        accreditation: 'MIT ACADEMIC STANDARDS',
        technologyPlatform: 'CUSTOM CMS',
        mobileOptimization: 'RESPONSIVE',
        engagementRate: 67.8,
        completionRate: 23.4,
        facultyParticipation: 95.6,
        contentFormats: 'Video, Text, Simulations',
        researchImpact: 'HIGH',
        sustainabilityModel: 'INSTITUTIONAL FUNDING',
        partnershipCount: 245,
        innovationScore: 96.4,
        digitalTransformation: 'LEADER'
      },
      {
        institutionName: 'Stanford Online',
        institutionId: 'STANFORD-ONLINE-002',
        location: 'Stanford, California, USA',
        type: 'UNIVERSITY EXTENSION',
        status: 'OPERATIONAL',
        foundedYear: 2012,
        studentsReached: 8500000,
        coursesOffered: 156,
        languages: 8,
        certificationsIssued: 890000,
        tuitionModel: 'PREMIUM',
        accreditation: 'WASC ACCREDITED',
        technologyPlatform: 'CUSTOM LMS',
        mobileOptimization: 'NATIVE APP',
        engagementRate: 89.4,
        completionRate: 76.8,
        facultyParticipation: 78.3,
        contentFormats: 'Video, Interactive Labs',
        researchImpact: 'VERY HIGH',
        sustainabilityModel: 'TUITION + RESEARCH',
        partnershipCount: 89,
        innovationScore: 94.7,
        digitalTransformation: 'PIONEER'
      },
      {
        institutionName: 'University of Phoenix Online',
        institutionId: 'UOP-ONLINE-003',
        location: 'Phoenix, Arizona, USA',
        type: 'FOR-PROFIT ONLINE',
        status: 'OPERATIONAL',
        foundedYear: 1976,
        studentsReached: 2500000,
        coursesOffered: 450,
        languages: 3,
        degreesAwarded: 1200000,
        tuitionModel: 'SUBSCRIPTION',
        accreditation: 'HLC ACCREDITED',
        technologyPlatform: 'APOLLO PLATFORM',
        mobileOptimization: 'MOBILE FIRST',
        engagementRate: 72.1,
        completionRate: 65.3,
        facultyParticipation: 89.7,
        contentFormats: 'Video, Discussion Forums',
        researchImpact: 'MODERATE',
        sustainabilityModel: 'STUDENT TUITION',
        partnershipCount: 234,
        innovationScore: 67.8,
        digitalTransformation: 'ESTABLISHED'
      },
      {
        institutionName: 'Khan Academy Global',
        institutionId: 'KHAN-ACADEMY-004',
        location: 'Mountain View, California, USA',
        type: 'NON-PROFIT EDUCATION',
        status: 'SCALING',
        foundedYear: 2008,
        studentsReached: 125000000,
        coursesOffered: 45000,
        languages: 50,
        exercisesCompleted: 15000000000,
        globalAccessibility: 'FREE',
        accreditation: 'EDUCATIONAL PARTNER',
        technologyPlatform: 'REACT/NODE.JS',
        mobileOptimization: 'PROGRESSIVE WEB APP',
        engagementRate: 78.9,
        completionRate: 45.6,
        facultyParticipation: 67.4,
        contentFormats: 'Interactive Exercises, Videos',
        researchImpact: 'HIGH',
        sustainabilityModel: 'DONATIONS + GRANTS',
        partnershipCount: 567,
        innovationScore: 91.2,
        digitalTransformation: 'DISRUPTOR'
      }
    ],
    learningPlatforms: [
      {
        platformName: 'Coursera Learning Platform',
        platformId: 'COURSERA-PLATFORM-001',
        headquarters: 'Mountain View, California, USA',
        category: 'MASSIVE OPEN ONLINE COURSES',
        status: 'OPERATIONAL',
        marketCap: 2.8,
        revenue: 0.52,
        registeredLearners: 118000000,
        courses: 5400,
        universities: 275,
        companies: 100,
        certificates: 89000000,
        degreePrograms: 45,
        languages: 35,
        platformUptime: 99.97,
        mobileAppRating: 4.6,
        completionRate: 85.6,
        employmentOutcomes: 76.3,
        pricingModel: 'FREEMIUM + SUBSCRIPTION',
        corporateClients: 7000,
        learnerSatisfaction: 89.4,
        instructorSatisfaction: 86.7,
        contentQuality: 92.8,
        technicalInnovation: 'AI RECOMMENDATIONS',
        marketShare: 23.4,
        growthRate: 34.7
      },
      {
        platformName: 'Udemy Learning Marketplace',
        platformId: 'UDEMY-MARKETPLACE-002',
        headquarters: 'San Francisco, California, USA',
        category: 'SKILL-BASED LEARNING',
        status: 'OPERATIONAL',
        marketCap: 1.9,
        revenue: 0.61,
        registeredLearners: 64000000,
        courses: 213000,
        instructors: 75000,
        languages: 75,
        certificationsIssued: 45000000,
        businessClients: 14000,
        platformUptime: 99.94,
        mobileAppRating: 4.5,
        completionRate: 72.3,
        skillsAlignment: 89.7,
        pricingModel: 'MARKETPLACE',
        instructorPayouts: 245000000,
        learnerSatisfaction: 84.2,
        instructorSatisfaction: 78.9,
        contentQuality: 87.1,
        technicalInnovation: 'MACHINE LEARNING PATHS',
        marketShare: 18.7,
        growthRate: 28.3
      },
      {
        platformName: 'Canvas Learning Management',
        platformId: 'CANVAS-LMS-003',
        headquarters: 'Salt Lake City, Utah, USA',
        category: 'LEARNING MANAGEMENT SYSTEM',
        status: 'OPERATIONAL',
        marketShare: 31.2,
        revenue: 0.89,
        institutions: 6000,
        students: 35000000,
        educators: 1200000,
        courses: 2300000,
        assignments: 890000000,
        platformUptime: 99.98,
        mobileAppRating: 4.4,
        gradingEfficiency: 78.9,
        communicationTools: 'INTEGRATED',
        pricingModel: 'INSTITUTIONAL LICENSE',
        integrations: 800,
        accessibility: 'WCAG 2.1 AA',
        dataAnalytics: 'COMPREHENSIVE',
        technicalInnovation: 'PREDICTIVE ANALYTICS',
        customerSatisfaction: 87.6,
        supportRating: 'EXCELLENT',
        marketPosition: 'MARKET LEADER'
      }
    ],
    aiLearningModels: [
      {
        modelName: 'Khan Academy GPT Tutor',
        modelId: 'KHAN-GPT-TUTOR-001',
        provider: 'Khan Academy + OpenAI',
        category: 'ADAPTIVE LEARNING AI',
        status: 'OPERATIONAL',
        accuracy: 94.8,
        subjectsSupported: 23,
        languagesSupported: 12,
        studentsUsing: 2500000,
        sessionsPerMonth: 45000000,
        avgSessionLength: 18.5,
        learningEffectiveness: 89.3,
        personalizedPaths: 'DYNAMIC',
        progressTracking: 'REAL-TIME',
        mistakeAnalysis: 'AUTOMATED',
        hintGeneration: 'CONTEXTUAL',
        difficultyAdjustment: 'ADAPTIVE',
        parentInsights: 'ENABLED',
        teacherDashboard: 'COMPREHENSIVE',
        privacyCompliance: 'COPPA, FERPA',
        costPerStudent: 0,
        outcomeImprovement: '23%'
      },
      {
        modelName: 'Coursera AI Content Curator',
        modelId: 'COURSERA-AI-CURATOR-002',
        provider: 'Coursera Machine Learning',
        category: 'CONTENT RECOMMENDATION',
        status: 'OPERATIONAL',
        accuracy: 91.7,
        contentLibrary: 5400,
        userProfiles: 118000000,
        recommendationsPerDay: 2400000,
        clickThroughRate: 34.7,
        courseCompletionLift: 45.6,
        skillsMatching: 'JOB MARKET ALIGNED',
        careerPathPlanning: 'ENABLED',
        industryTrends: 'REAL-TIME',
        skillGapAnalysis: 'AUTOMATED',
        learningTimeEstimation: 'ACCURATE',
        difficultyPrediction: 'ADVANCED',
        prerequisiteMapping: 'INTELLIGENT',
        outcomeTracking: 'EMPLOYMENT FOCUSED',
        businessValue: 'INCREASED RETENTION',
        roiMetrics: '156% ENGAGEMENT LIFT'
      },
      {
        modelName: 'Canvas Predictive Analytics',
        modelId: 'CANVAS-PREDICT-003',
        provider: 'Instructure Analytics',
        category: 'STUDENT SUCCESS PREDICTION',
        status: 'OPERATIONAL',
        accuracy: 87.9,
        studentsAnalyzed: 35000000,
        riskPredictionAccuracy: 89.4,
        earlyInterventionTriggers: 'AUTOMATED',
        dropoutPrevention: '34% REDUCTION',
        gradeImprovement: '18% AVERAGE',
        engagementScoring: 'REAL-TIME',
        attendanceCorrelation: 'STRONG',
        assignmentPatterns: 'ANALYZED',
        communicationMetrics: 'TRACKED',
        learningStyleAdaptation: 'ENABLED',
        instructorAlerts: 'PRIORITIZED',
        administrativeReporting: 'COMPREHENSIVE',
        institutionalImpact: 'RETENTION FOCUSED',
        costSavingsPerStudent: 2340
      }
    ],
    learningAnalytics: [
      {
        analyticsCategory: 'Learning Effectiveness Measurement',
        systemId: 'LEM-ANALYTICS-001',
        provider: 'Educational Testing Service',
        scope: 'COMPETENCY ASSESSMENT',
        status: 'OPERATIONAL',
        assessmentsAnalyzed: 125000000,
        learningObjectives: 450000,
        skillsMapped: 78900,
        competencyFrameworks: 234,
        masteryThreshold: 80.0,
        adaptiveQuestioning: 'ENABLED',
        realTimeScoring: '< 2 SECONDS',
        feedbackGeneration: 'INSTANT',
        learningGapIdentification: 'AUTOMATED',
        remediationSuggestions: 'PERSONALIZED',
        progressVisualization: 'INTERACTIVE',
        benchmarkComparisons: 'PEER + GLOBAL',
        predictionAccuracy: 89.7,
        learningAcceleration: '45% IMPROVEMENT',
        outcomeValidation: 'LONGITUDINAL STUDIES'
      },
      {
        analyticsCategory: 'Engagement Pattern Analysis',
        systemId: 'EPA-ANALYTICS-002',
        provider: 'Learning Analytics Consortium',
        scope: 'BEHAVIORAL INSIGHTS',
        status: 'OPERATIONAL',
        interactionEvents: 15000000000,
        behavioralPatterns: 2340000,
        engagementFactors: 156,
        timeOnTask: 'OPTIMIZED',
        clickstreamAnalysis: 'DEEP',
        navigationPatterns: 'MAPPED',
        contentConsumption: 'MEASURED',
        socialLearningMetrics: 'TRACKED',
        motivationalFactors: 'IDENTIFIED',
        dropoffPoints: 'ANALYZED',
        retentionDrivers: 'QUANTIFIED',
        engagementPrediction: 92.4,
        interventionEffectiveness: '67% SUCCESS',
        platformOptimization: 'CONTINUOUS',
        learnerExperienceImprovement: 'MEASURED'
      },
      {
        analyticsCategory: 'Skills Gap Assessment',
        systemId: 'SGA-ANALYTICS-003',
        provider: 'Future of Work Institute',
        scope: 'WORKFORCE READINESS',
        status: 'OPERATIONAL',
        skillsDatabase: 125000,
        jobRoles: 45000,
        industryMappings: 2340,
        marketDemandAnalysis: 'REAL-TIME',
        skillsShortageIdentification: 'AUTOMATED',
        emergingSkillsPrediction: 'AI-POWERED',
        careerPathOptimization: 'PERSONALIZED',
        trainingRecommendations: 'TARGETED',
        employabilityScoring: 'DYNAMIC',
        salaryImpactAnalysis: 'QUANTIFIED',
        geographicVariations: 'MAPPED',
        industryTrends: 'FORECASTED',
        reskillPrioritization: 'ALGORITHMIC',
        economicImpactMeasurement: '$2.8B VALUE',
        workforceTransformation: 'ACCELERATED'
      }
    ],
    accessibilityCompliance: [
      {
        standard: 'WCAG 2.1 Level AA',
        standardId: 'WCAG-2.1-AA-001',
        authority: 'World Wide Web Consortium',
        scope: 'WEB ACCESSIBILITY',
        status: 'COMPLIANT',
        platforms: 23400,
        usersSupported: 125000000,
        disabilityTypes: 'VISUAL, AUDITORY, MOTOR, COGNITIVE',
        screenReaderCompatibility: '100%',
        keyboardNavigation: 'FULL SUPPORT',
        captioning: 'AUTOMATED + HUMAN',
        altTextGeneration: 'AI-ASSISTED',
        colorContrastRatio: '4.5:1 MINIMUM',
        textScaling: 'UP TO 200%',
        cognitiveSupport: 'SIMPLIFIED INTERFACES',
        multimodalAccess: 'ENABLED',
        assistiveTechnology: 'INTEGRATED',
        complianceAuditing: 'QUARTERLY',
        userFeedback: 'ACCESSIBILITY PANEL',
        trainingProvided: 'MANDATORY',
        costOfCompliance: 34.5,
        usabilityImprovement: 'UNIVERSAL DESIGN'
      },
      {
        standard: 'Section 508 Compliance',
        standardId: 'SECTION-508-002',
        authority: 'US Access Board',
        scope: 'FEDERAL ACCESSIBILITY',
        status: 'COMPLIANT',
        federalInstitutions: 2340,
        studentsImpacted: 15000000,
        procurementRequirements: 'MANDATORY',
        vendorCompliance: 'VERIFIED',
        accessibilityTesting: 'AUTOMATED + MANUAL',
        documentAccessibility: 'PDF/UA COMPLIANT',
        videoAccessibility: 'CLOSED CAPTIONS',
        mobileAccessibility: 'RESPONSIVE',
        thirdPartyAuditing: 'ANNUAL',
        remediationTimeline: '90 DAYS',
        legalCompliance: '100%',
        penaltyAvoidance: 'PROACTIVE',
        inclusiveDesign: 'EMBEDDED',
        userTraining: 'COMPREHENSIVE',
        continuousMonitoring: 'ENABLED'
      },
      {
        standard: 'EN 301 549 European Standard',
        standardId: 'EN-301-549-003',
        authority: 'European Telecommunications Standards Institute',
        scope: 'EUROPEAN ACCESSIBILITY',
        status: 'COMPLIANT',
        euInstitutions: 5670,
        multilingualSupport: 24,
        culturalAdaptation: 'LOCALIZED',
        accessibilityStatement: 'MANDATORY',
        feedbackMechanism: 'ESTABLISHED',
        monitoringReports: 'ANNUAL',
        improvementPlans: 'DOCUMENTED',
        publicSectorCompliance: '95%',
        privateSectorAdoption: '67%',
        disabilityOrganizations: 'CONSULTED',
        userCenteredDesign: 'PRIORITIZED',
        technologyNeutrality: 'MAINTAINED',
        innovationEncouragement: 'BALANCED',
        implementationSupport: 'PROVIDED',
        harmonization: 'GLOBAL STANDARDS'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        students: 125000000,
        sessionsActive: 8900000,
        coursesAccessed: 234000,
        uptime: 99.96,
        engagementScore: 82.7,
        completions: 45000,
        errors: 23,
        incidents: 0
      },
      {
        period: 'Last 24 Hours',
        students: 890000000,
        sessionsActive: 156000000,
        coursesAccessed: 2340000,
        uptime: 99.94,
        engagementScore: 81.9,
        completions: 890000,
        errors: 456,
        incidents: 2
      },
      {
        period: 'Last 7 Days',
        students: 1234000000,
        sessionsActive: 890000000,
        coursesAccessed: 12340000,
        uptime: 99.91,
        engagementScore: 80.8,
        completions: 5670000,
        errors: 2890,
        incidents: 8
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setEducationData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        educationOverview: {
          ...prev.educationOverview,
          engagementScore: Math.max(75.0, Math.min(90.0, prev.educationOverview.engagementScore + (Math.random() - 0.5) * 1.0)),
          platformUptime: Math.max(99.0, Math.min(99.99, prev.educationOverview.platformUptime + (Math.random() - 0.5) * 0.01))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'SCALING': return 'text-blue-400 bg-blue-400/20';
      case 'COMPLIANT': return 'text-green-400 bg-green-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => `$${amount.toFixed(1)}B`;
  const formatMinutes = (min) => `${min.toFixed(1)}min`;

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Education Technology & Learning Intelligence Center</h1>
              <p className="text-slate-300">Educational & learning analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-slate-400">{educationData.currentTime}</div>
            <div className="text-slate-300">Education Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Education Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <GraduationCap className="w-5 h-5 text-blue-400 mr-2" />
                Institutions
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(educationData.educationOverview.educationalInstitutions)}</div>
            <div className="text-blue-300 text-sm">{formatNumber(educationData.educationOverview.learningPlatforms)} Platforms</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-green-400 mr-2" />
                Students
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(educationData.educationOverview.students)}</div>
            <div className="text-green-300 text-sm">{formatNumber(educationData.educationOverview.educators)} Educators</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BookOpen className="w-5 h-5 text-purple-400 mr-2" />
                Courses
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(educationData.educationOverview.courses)}</div>
            <div className="text-purple-300 text-sm">{formatNumber(educationData.educationOverview.enrollments)} Enrollments</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-yellow-400 mr-2" />
                Engagement
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(educationData.educationOverview.engagementScore)}</div>
            <div className="text-yellow-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Award className="w-5 h-5 text-orange-400 mr-2" />
                Completion
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(educationData.educationOverview.completionRate)}</div>
            <div className="text-orange-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-cyan-400 mr-2" />
                Uptime
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(educationData.educationOverview.platformUptime)}</div>
            <div className="text-cyan-300 text-sm">Reliability</div>
          </div>
        </div>

        {/* Educational Institutions & Learning Platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <GraduationCap className="w-5 h-5 text-blue-400 mr-2" />
              Educational Institutions
            </h3>
            <div className="space-y-4">
              {educationData.educationalInstitutions.map((institution, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{institution.institutionName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(institution.status)}`}>
                        {institution.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{institution.location}</div>
                    <div className="text-blue-400">{institution.type}</div>
                    <div className="text-green-400">Founded: {institution.foundedYear}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Students: {formatNumber(institution.studentsReached)}</div>
                    <div className="text-purple-400">Courses: {formatNumber(institution.coursesOffered)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Engagement Rate</span>
                      <span>{formatPercentage(institution.engagementRate)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-blue-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${institution.engagementRate}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Completion: {formatPercentage(institution.completionRate)}</div>
                    <div className="text-indigo-400">Languages: {institution.languages}</div>
                    <div className="text-cyan-400">Access: {institution.globalAccessibility}</div>
                    <div className="text-green-400">Innovation: {formatPercentage(institution.innovationScore)}</div>
                    <div className="text-blue-400">Platform: {institution.technologyPlatform}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Monitor className="w-5 h-5 text-green-400 mr-2" />
              Learning Platforms
            </h3>
            <div className="space-y-4">
              {educationData.learningPlatforms.map((platform, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{platform.platformName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(platform.status)}`}>
                        {platform.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{platform.headquarters}</div>
                    <div className="text-blue-400">{platform.category}</div>
                    <div className="text-green-400">
                      {platform.marketCap && `Cap: ${formatCurrency(platform.marketCap)}`}
                      {platform.marketShare && `Share: ${formatPercentage(platform.marketShare)}`}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">
                      {platform.registeredLearners && `Learners: ${formatNumber(platform.registeredLearners)}`}
                      {platform.students && `Students: ${formatNumber(platform.students)}`}
                    </div>
                    <div className="text-purple-400">
                      {platform.courses && `Courses: ${formatNumber(platform.courses)}`}
                      {platform.revenue && `Revenue: ${formatCurrency(platform.revenue)}`}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Platform Uptime</span>
                      <span>{formatPercentage(platform.platformUptime)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-green-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${platform.platformUptime}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {platform.completionRate && `Completion: ${formatPercentage(platform.completionRate)}`}
                      {platform.gradingEfficiency && `Grading: ${formatPercentage(platform.gradingEfficiency)}`}
                    </div>
                    <div className="text-indigo-400">
                      {platform.learnerSatisfaction && `Satisfaction: ${formatPercentage(platform.learnerSatisfaction)}`}
                      {platform.customerSatisfaction && `Customer Sat: ${formatPercentage(platform.customerSatisfaction)}`}
                    </div>
                    <div className="text-cyan-400">
                      {platform.employmentOutcomes && `Employment: ${formatPercentage(platform.employmentOutcomes)}`}
                      {platform.technicalInnovation}
                    </div>
                    <div className="text-green-400">
                      {platform.growthRate && `Growth: ${formatPercentage(platform.growthRate)}`}
                      {platform.accessibility && `Access: ${platform.accessibility}`}
                    </div>
                    <div className="text-blue-400">App Rating: {platform.mobileAppRating}/5</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Learning Models & Learning Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-yellow-400 mr-2" />
              AI Learning Models
            </h3>
            <div className="space-y-4">
              {educationData.aiLearningModels.map((model, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{model.modelName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(model.status)}`}>
                        {model.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{model.provider}</div>
                    <div className="text-blue-400">{model.category}</div>
                    <div className="text-green-400">{model.modelId}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Accuracy</span>
                      <span>{formatPercentage(model.accuracy)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-yellow-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${model.accuracy}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {model.studentsUsing && `Students: ${formatNumber(model.studentsUsing)}`}
                      {model.studentsAnalyzed && `Analyzed: ${formatNumber(model.studentsAnalyzed)}`}
                    </div>
                    <div className="text-indigo-400">
                      {model.subjectsSupported && `Subjects: ${model.subjectsSupported}`}
                      {model.contentLibrary && `Content: ${formatNumber(model.contentLibrary)}`}
                      {model.riskPredictionAccuracy && `Risk Prediction: ${formatPercentage(model.riskPredictionAccuracy)}`}
                    </div>
                    <div className="text-cyan-400">
                      {model.learningEffectiveness && `Effectiveness: ${formatPercentage(model.learningEffectiveness)}`}
                      {model.courseCompletionLift && `Completion Lift: ${formatPercentage(model.courseCompletionLift)}`}
                      {model.dropoutPrevention && `Dropout Prevention: ${model.dropoutPrevention}`}
                    </div>
                    <div className="text-green-400">
                      {model.outcomeImprovement && `Outcome: ${model.outcomeImprovement}`}
                      {model.roiMetrics && `ROI: ${model.roiMetrics}`}
                      {model.costSavingsPerStudent && `Savings: $${formatNumber(model.costSavingsPerStudent)}/student`}
                    </div>
                    <div className="text-blue-400">
                      {model.avgSessionLength && `Session: ${formatMinutes(model.avgSessionLength)}`}
                      {model.personalizedPaths && `Personalization: ${model.personalizedPaths}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
              Learning Analytics Systems
            </h3>
            <div className="space-y-4">
              {educationData.learningAnalytics.map((analytics, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{analytics.analyticsCategory}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(analytics.status)}`}>
                        {analytics.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{analytics.provider}</div>
                    <div className="text-blue-400">{analytics.scope}</div>
                    <div className="text-green-400">{analytics.systemId}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {analytics.assessmentsAnalyzed && `Assessments: ${formatNumber(analytics.assessmentsAnalyzed)}`}
                      {analytics.interactionEvents && `Interactions: ${formatNumber(analytics.interactionEvents)}`}
                      {analytics.skillsDatabase && `Skills: ${formatNumber(analytics.skillsDatabase)}`}
                    </div>
                    <div className="text-indigo-400">
                      {analytics.learningObjectives && `Objectives: ${formatNumber(analytics.learningObjectives)}`}
                      {analytics.behavioralPatterns && `Patterns: ${formatNumber(analytics.behavioralPatterns)}`}
                      {analytics.jobRoles && `Job Roles: ${formatNumber(analytics.jobRoles)}`}
                    </div>
                    <div className="text-cyan-400">
                      {analytics.predictionAccuracy && `Prediction: ${formatPercentage(analytics.predictionAccuracy)}`}
                      {analytics.engagementPrediction && `Engagement: ${formatPercentage(analytics.engagementPrediction)}`}
                    </div>
                    <div className="text-green-400">
                      {analytics.learningAcceleration && `Acceleration: ${analytics.learningAcceleration}`}
                      {analytics.interventionEffectiveness && `Intervention: ${analytics.interventionEffectiveness}`}
                      {analytics.economicImpactMeasurement && `Impact: ${analytics.economicImpactMeasurement}`}
                    </div>
                    <div className="text-blue-400">
                      {analytics.realTimeScoring && `Scoring: ${analytics.realTimeScoring}`}
                      {analytics.feedbackGeneration && `Feedback: ${analytics.feedbackGeneration}`}
                      {analytics.marketDemandAnalysis && `Analysis: ${analytics.marketDemandAnalysis}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accessibility Compliance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 text-cyan-400 mr-2" />
            Accessibility Compliance Standards
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {educationData.accessibilityCompliance.map((compliance, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{compliance.standard}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(compliance.status)}`}>
                      {compliance.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Authority: {compliance.authority}</div>
                  <div className="text-blue-400">Scope: {compliance.scope}</div>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-slate-300">
                    {compliance.platforms && `Platforms: ${formatNumber(compliance.platforms)}`}
                    {compliance.federalInstitutions && `Institutions: ${formatNumber(compliance.federalInstitutions)}`}
                    {compliance.euInstitutions && `EU Institutions: ${formatNumber(compliance.euInstitutions)}`}
                  </div>
                  <div className="text-indigo-400">
                    {compliance.usersSupported && `Users: ${formatNumber(compliance.usersSupported)}`}
                    {compliance.studentsImpacted && `Students: ${formatNumber(compliance.studentsImpacted)}`}
                  </div>
                  <div className="text-cyan-400">
                    {compliance.disabilityTypes && `Disabilities: ${compliance.disabilityTypes}`}
                    {compliance.multilingualSupport && `Languages: ${compliance.multilingualSupport}`}
                  </div>
                  <div className="text-green-400">
                    {compliance.screenReaderCompatibility && `Screen Reader: ${compliance.screenReaderCompatibility}`}
                    {compliance.colorContrastRatio && `Contrast: ${compliance.colorContrastRatio}`}
                    {compliance.publicSectorCompliance && `Public Compliance: ${compliance.publicSectorCompliance}`}
                  </div>
                  <div className="text-blue-400">
                    {compliance.costOfCompliance && `Cost: ${formatCurrency(compliance.costOfCompliance)}`}
                    {compliance.complianceAuditing && `Auditing: ${compliance.complianceAuditing}`}
                    {compliance.monitoringReports && `Reports: ${compliance.monitoringReports}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-slate-400 mr-2" />
            Education Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {educationData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Students: {formatNumber(metrics.students)}</div>
                  <div className="text-green-400">Sessions: {formatNumber(metrics.sessionsActive)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Courses: {formatNumber(metrics.coursesAccessed)}</div>
                  <div className="text-yellow-400">Uptime: {formatPercentage(metrics.uptime)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Engagement: {formatPercentage(metrics.engagementScore)}</div>
                  <div className="text-orange-400">Completions: {formatNumber(metrics.completions)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Errors: {metrics.errors}</div>
                  <div className="text-pink-400">Incidents: {metrics.incidents}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}