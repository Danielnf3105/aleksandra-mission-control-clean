// Medical & Health Intelligence Center - Employee Health, Safety, Wellness & Medical Operations Analytics
import { useState, useEffect } from 'react';
import { Heart, Shield, Users, TrendingUp, TrendingDown, Activity, Thermometer, AlertTriangle, CheckCircle, Clock, BarChart3, PieChart } from 'lucide-react';

export default function MedicalHealthIntelligenceCenter() {
  const [healthData, setHealthData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    healthOverview: {
      overallHealthScore: 89.7,
      employeeWellbeing: 87.4,
      safetyCompliance: 94.2,
      healthProgramParticipation: 76.8,
      occupationalSafetyScore: 91.6,
      medicalClearance: 98.3,
      vaccineCompliance: 92.7,
      mentalHealthSupport: 83.9,
      fitnessPrograms: 68.5,
      healthInsuranceUtilization: 84.2,
      accidentRate: 2.3, // per 1000 employees
      sicknessAbsenteeism: 4.7, // percentage
      healthInsuranceClaims: 1247,
      totalHealthSpend: 2847000
    },
    occupationalSafety: {
      safetyIncidents: 12,
      nearMisses: 34,
      safetyTrainingCompletion: 96.4,
      ppeCompliance: 89.7,
      workplaceInspections: 23,
      safetyAudits: 8,
      emergencyDrills: 12,
      firstAidCertified: 156,
      safetyCommitteeMembers: 23,
      incidentCategories: [
        { category: 'Slip/Fall', incidents: 4, severity: 'Minor', trend: 'stable' },
        { category: 'Equipment Related', incidents: 3, severity: 'Minor', trend: 'decreasing' },
        { category: 'Chemical Exposure', incidents: 2, severity: 'Medium', trend: 'stable' },
        { category: 'Ergonomic Injury', incidents: 2, severity: 'Minor', trend: 'increasing' },
        { category: 'Burns', incidents: 1, severity: 'Medium', trend: 'stable' }
      ],
      safetyMetrics: {
        ltir: 1.8, // Lost Time Injury Rate
        trir: 2.3, // Total Recordable Injury Rate
        dart: 1.2, // Days Away, Restricted, or Transferred Rate
        emod: 0.87, // Experience Modification Rate
        rif: 2.1 // Recordable Injury Frequency
      }
    },
    employeeWellness: {
      wellnessProgramEnrollment: 784,
      fitnessTrackingUsers: 567,
      mentalHealthCounselingUsers: 234,
      nutritionProgramUsers: 456,
      smokingCessationUsers: 89,
      stressManagementUsers: 345,
      wellnessActivities: [
        { activity: 'Fitness Classes', participants: 234, satisfaction: 92.4, sessions: 156 },
        { activity: 'Stress Management', participants: 345, satisfaction: 89.7, sessions: 89 },
        { activity: 'Nutrition Counseling', participants: 456, satisfaction: 94.2, sessions: 234 },
        { activity: 'Mental Health Support', participants: 234, satisfaction: 91.8, sessions: 123 },
        { activity: 'Smoking Cessation', participants: 89, satisfaction: 87.3, sessions: 67 },
        { activity: 'Health Screenings', participants: 567, satisfaction: 96.7, sessions: 12 }
      ],
      healthMetrics: {
        averageBmi: 24.7,
        physicalFitnessScore: 78.9,
        stressLevels: 34.2, // lower is better
        sleepQuality: 76.4,
        nutritionScore: 82.1,
        hydrationCompliance: 71.8
      }
    },
    medicalServices: {
      onSiteMedicalStaff: 12,
      medicalFacilities: 4,
      medicalEquipment: 67,
      medicalSupplies: 234,
      emergencyResponseTime: 3.7, // minutes
      medicalClearances: 1234,
      healthAssessments: 567,
      occupationalHealthExams: 345,
      vaccinationCampaigns: 6,
      healthScreenings: 890,
      services: [
        { service: 'Annual Physical Exams', completed: 890, scheduled: 950, completion: 93.7 },
        { service: 'Vaccinations', completed: 1234, required: 1330, completion: 92.8 },
        { service: 'Vision Screenings', completed: 756, scheduled: 800, completion: 94.5 },
        { service: 'Hearing Tests', completed: 645, scheduled: 700, completion: 92.1 },
        { service: 'Drug Testing', completed: 567, required: 580, completion: 97.8 },
        { service: 'Mental Health Assessments', completed: 234, recommended: 300, completion: 78.0 }
      ],
      medicalEquipmentStatus: [
        { equipment: 'AED Units', count: 12, operational: 12, lastMaintenance: '1 week ago' },
        { equipment: 'First Aid Stations', count: 23, stocked: 21, lastRestock: '2 weeks ago' },
        { equipment: 'Eye Wash Stations', count: 18, functional: 18, lastInspection: '1 month ago' },
        { equipment: 'Emergency Oxygen', count: 8, ready: 8, lastCheck: '2 weeks ago' }
      ]
    },
    mentalHealthSupport: {
      mentalHealthPrograms: 12,
      counselorsAvailable: 8,
      therapySessionsProvided: 456,
      mentalHealthDays: 234,
      stressRelatedAbsences: 67,
      employeeAssistanceCalls: 123,
      mentalHealthTraining: 89.7, // completion percentage
      burnoutRiskAssessments: 345,
      workLifeBalanceScore: 78.9,
      mentalHealthServices: [
        { service: 'Individual Counseling', users: 234, sessions: 567, satisfaction: 94.2 },
        { service: 'Group Therapy', users: 89, sessions: 123, satisfaction: 89.7 },
        { service: 'Stress Management', users: 345, sessions: 234, satisfaction: 91.8 },
        { service: 'Crisis Intervention', users: 23, sessions: 34, satisfaction: 97.8 },
        { service: 'Peer Support Groups', users: 156, sessions: 89, satisfaction: 87.4 },
        { service: 'Mindfulness Programs', users: 267, sessions: 156, satisfaction: 85.9 }
      ],
      mentalHealthMetrics: {
        employeeSatisfaction: 83.9,
        workStressLevel: 34.2,
        burnoutRisk: 18.7, // percentage at risk
        resilienceScore: 76.8,
        engagementScore: 82.4,
        supportUtilization: 67.9
      }
    },
    healthInsurance: {
      enrolledEmployees: 1234,
      dependentsCovered: 2456,
      totalPremiums: 1890000,
      claimsProcessed: 2347,
      claimsPaid: 1567890,
      averageClaimAmount: 668,
      deniedClaims: 123,
      pendingClaims: 89,
      insurancePlans: [
        { plan: 'Health Plus', enrolled: 567, premium: 450, utilization: 78.9, satisfaction: 92.4 },
        { plan: 'Basic Health', enrolled: 345, premium: 280, utilization: 67.8, satisfaction: 87.3 },
        { plan: 'Premium Health', enrolled: 234, premium: 680, utilization: 89.7, satisfaction: 94.8 },
        { plan: 'Family Health', enrolled: 88, premium: 920, utilization: 92.1, satisfaction: 96.2 }
      ],
      commonClaims: [
        { type: 'Routine Checkups', claims: 456, amount: 68400, percentage: 19.4 },
        { type: 'Prescription Drugs', claims: 789, amount: 234567, percentage: 33.6 },
        { type: 'Specialist Visits', claims: 234, amount: 89456, percentage: 10.0 },
        { type: 'Emergency Room', claims: 67, amount: 134567, percentage: 2.9 },
        { type: 'Surgery', claims: 23, amount: 456789, percentage: 1.0 },
        { type: 'Dental Care', claims: 345, amount: 45678, percentage: 14.7 }
      ]
    },
    healthAlerts: [
      {
        type: 'WARNING',
        category: 'Ergonomic Injuries',
        message: 'Increase in ergonomic injuries +15% this quarter - review workplace ergonomics',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Occupational Health Team',
        timestamp: '01:40',
        recommendations: ['Ergonomic assessments', 'Workplace adjustments', 'Training on proper posture']
      },
      {
        type: 'SUCCESS',
        category: 'Vaccination Campaign',
        message: 'Flu vaccination campaign achieved 92.7% compliance (+7.2% vs last year)',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'Medical Team',
        timestamp: '01:35',
        recommendations: ['Continue awareness campaign', 'Maintain clinic hours', 'Track effectiveness']
      },
      {
        type: 'CRITICAL',
        category: 'Mental Health',
        message: 'Burnout risk assessments show 18.7% of employees at high risk',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'Mental Health Team',
        timestamp: '01:30',
        recommendations: ['Individual interventions', 'Workload review', 'Manager training']
      },
      {
        type: 'INFO',
        category: 'Wellness Programs',
        message: 'Fitness program participation at 68.5% - approaching Q1 target of 70%',
        impact: 'LOW',
        actionRequired: false,
        assignedTo: 'Wellness Team',
        timestamp: '01:25',
        recommendations: ['Promote benefits', 'Add new classes', 'Incentive programs']
      }
    ],
    pandemicPreparedness: {
      emergencyResponsePlan: 'Active',
      quarantineFacilities: 4,
      emergencyMedicalSupplies: 89.7, // percentage stocked
      contractTracingCapability: 94.2,
      remoteWorkCapability: 87.9,
      healthMonitoringProtocols: 'Implemented',
      vaccinationTracking: 92.7,
      healthScreeningCompliance: 96.4,
      pandemicMetrics: {
        activeHealthMonitoring: 1234,
        quarantineCases: 3,
        contactsTraced: 67,
        remoteWorkers: 456,
        healthScreeningsPassed: 1189,
        healthScreeningsFailed: 45
      },
      emergencyResources: [
        { resource: 'N95 Masks', stock: 12000, consumption: 234, daysSupply: 51 },
        { resource: 'Hand Sanitizer', stock: 567, consumption: 23, daysSupply: 25 },
        { resource: 'Thermometers', stock: 89, working: 87, calibrated: 87 },
        { resource: 'Test Kits', stock: 234, used: 45, remaining: 189 }
      ]
    },
    healthCompliance: {
      regulatoryCompliance: 97.8,
      oshaCompliance: 94.6,
      hipaaCompliance: 98.9,
      fdaCompliance: 91.3,
      cdcGuidelines: 96.7,
      complianceAudits: 12,
      complianceFindings: 8,
      correctedFindings: 7,
      outstandingFindings: 1,
      complianceTraining: 93.4,
      complianceAreas: [
        { area: 'OSHA Safety Standards', compliance: 94.6, lastAudit: '2 months ago', findings: 2 },
        { area: 'HIPAA Privacy', compliance: 98.9, lastAudit: '3 months ago', findings: 1 },
        { area: 'FDA Regulations', compliance: 91.3, lastAudit: '4 months ago', findings: 3 },
        { area: 'CDC Guidelines', compliance: 96.7, lastAudit: '1 month ago', findings: 1 },
        { area: 'DOT Medical Standards', compliance: 89.4, lastAudit: '5 months ago', findings: 1 }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setHealthData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        healthOverview: {
          ...prev.healthOverview,
          overallHealthScore: Math.max(85, Math.min(95, prev.healthOverview.overallHealthScore + (Math.random() - 0.5) * 1)),
          employeeWellbeing: Math.max(80, Math.min(92, prev.healthOverview.employeeWellbeing + (Math.random() - 0.5) * 2)),
          safetyCompliance: Math.max(90, Math.min(98, prev.healthOverview.safetyCompliance + (Math.random() - 0.5) * 1))
        },
        occupationalSafety: {
          ...prev.occupationalSafety,
          safetyIncidents: Math.max(8, Math.min(18, prev.occupationalSafety.safetyIncidents + Math.floor(Math.random() * 3) - 1)),
          nearMisses: Math.max(25, Math.min(45, prev.occupationalSafety.nearMisses + Math.floor(Math.random() * 5) - 2))
        }
      }));
    }, 15000);

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

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Minor': return 'text-green-400 bg-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'Major': return 'text-orange-400 bg-orange-400/20';
      case 'Critical': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 80, excellent = 90, reverse = false) => {
    if (reverse) {
      if (value <= excellent / 3) return 'text-green-400';
      if (value <= good / 2) return 'text-blue-400';
      if (value <= good) return 'text-yellow-400';
      return 'text-red-400';
    } else {
      if (value >= excellent) return 'text-green-400';
      if (value >= good) return 'text-blue-400';
      if (value >= good * 0.8) return 'text-yellow-400';
      return 'text-red-400';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="w-3 h-3 text-red-400" />;
      case 'decreasing': return <TrendingDown className="w-3 h-3 text-green-400" />;
      default: return <span className="w-3 h-3 text-gray-400">→</span>;
    }
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
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
    <div className="h-full bg-gradient-to-br from-red-900 via-slate-900 to-pink-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-red-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Medical & Health Intelligence Center</h1>
              <p className="text-red-300">Employee health, safety, wellness, medical operations & health analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-red-400">{healthData.currentTime}</div>
            <div className="text-red-300">Health Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Health Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Heart className="w-5 h-5 text-red-400 mr-2" />
                Health Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-red-400">{healthData.healthOverview.overallHealthScore.toFixed(1)}</div>
            <div className="text-red-300 text-sm">Wellbeing: {formatPercentage(healthData.healthOverview.employeeWellbeing)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-blue-400 mr-2" />
                Safety Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(healthData.healthOverview.safetyCompliance)}</div>
            <div className="text-blue-300 text-sm">Incidents: {healthData.occupationalSafety.safetyIncidents}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Wellness Participation
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(healthData.healthOverview.healthProgramParticipation)}</div>
            <div className="text-green-300 text-sm">Enrolled: {healthData.employeeWellness.wellnessProgramEnrollment}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                Medical Clearance
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(healthData.healthOverview.medicalClearance)}</div>
            <div className="text-purple-300 text-sm">Vaccines: {formatPercentage(healthData.healthOverview.vaccineCompliance)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-cyan-400 mr-2" />
                Mental Health
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(healthData.healthOverview.mentalHealthSupport)}</div>
            <div className="text-cyan-300 text-sm">Burnout Risk: {formatPercentage(healthData.mentalHealthSupport.mentalHealthMetrics.burnoutRisk)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                Absenteeism
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(healthData.healthOverview.sicknessAbsenteeism)}</div>
            <div className="text-yellow-300 text-sm">Accident Rate: {healthData.healthOverview.accidentRate}/1K</div>
          </div>
        </div>

        {/* Occupational Safety */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 text-blue-400 mr-2" />
            Occupational Safety Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">{healthData.occupationalSafety.safetyIncidents}</div>
              <div className="text-orange-300 text-sm">Safety Incidents</div>
              <div className="text-gray-400 text-xs mt-1">Near Misses: {healthData.occupationalSafety.nearMisses}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{formatPercentage(healthData.occupationalSafety.safetyTrainingCompletion)}</div>
              <div className="text-green-300 text-sm">Training Completion</div>
              <div className="text-gray-400 text-xs mt-1">PPE: {formatPercentage(healthData.occupationalSafety.ppeCompliance)}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{healthData.occupationalSafety.safetyMetrics.ltir}</div>
              <div className="text-cyan-300 text-sm">LTIR Rate</div>
              <div className="text-gray-400 text-xs mt-1">TRIR: {healthData.occupationalSafety.safetyMetrics.trir}</div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Incident Categories</h4>
              <div className="space-y-2">
                {healthData.occupationalSafety.incidentCategories.map((incident, index) => (
                  <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300 text-sm">{incident.category}</span>
                    <div className="flex items-center space-x-2 text-xs">
                      <span className="text-orange-400">{incident.incidents}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                      {getTrendIcon(incident.trend)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Safety Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-slate-700/50 rounded p-3">
                  <div className="text-blue-400 font-medium">{healthData.occupationalSafety.safetyMetrics.dart}</div>
                  <div className="text-slate-400 text-xs">DART Rate</div>
                </div>
                <div className="text-center bg-slate-700/50 rounded p-3">
                  <div className="text-green-400 font-medium">{healthData.occupationalSafety.safetyMetrics.emod}</div>
                  <div className="text-slate-400 text-xs">E-MOD</div>
                </div>
                <div className="text-center bg-slate-700/50 rounded p-3">
                  <div className="text-purple-400 font-medium">{healthData.occupationalSafety.firstAidCertified}</div>
                  <div className="text-slate-400 text-xs">First Aid Certified</div>
                </div>
                <div className="text-center bg-slate-700/50 rounded p-3">
                  <div className="text-cyan-400 font-medium">{healthData.occupationalSafety.emergencyDrills}</div>
                  <div className="text-slate-400 text-xs">Emergency Drills</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Wellness & Mental Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-green-400 mr-2" />
              Employee Wellness Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{healthData.employeeWellness.wellnessProgramEnrollment}</div>
                <div className="text-green-300 text-sm">Enrolled</div>
                <div className="text-gray-400 text-xs mt-1">Fitness: {healthData.employeeWellness.fitnessTrackingUsers}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{healthData.employeeWellness.healthMetrics.physicalFitnessScore.toFixed(1)}</div>
                <div className="text-blue-300 text-sm">Fitness Score</div>
                <div className="text-gray-400 text-xs mt-1">BMI: {healthData.employeeWellness.healthMetrics.averageBmi}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Wellness Activities</h4>
              {healthData.employeeWellness.wellnessActivities.slice(0, 4).map((activity, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{activity.activity}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm">{activity.participants}</span>
                      <span className="text-purple-400 text-sm">{formatPercentage(activity.satisfaction)}</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">
                    Sessions: {activity.sessions}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{formatPercentage(healthData.employeeWellness.healthMetrics.sleepQuality)}</div>
                <div className="text-slate-400">Sleep Quality</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-cyan-400 font-medium">{formatPercentage(healthData.employeeWellness.healthMetrics.nutritionScore)}</div>
                <div className="text-slate-400">Nutrition</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{formatPercentage(healthData.employeeWellness.healthMetrics.hydrationCompliance)}</div>
                <div className="text-slate-400">Hydration</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-cyan-400 mr-2" />
              Mental Health Support Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{healthData.mentalHealthSupport.mentalHealthPrograms}</div>
                <div className="text-cyan-300 text-sm">Programs</div>
                <div className="text-gray-400 text-xs mt-1">Counselors: {healthData.mentalHealthSupport.counselorsAvailable}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatPercentage(healthData.mentalHealthSupport.mentalHealthMetrics.burnoutRisk)}</div>
                <div className="text-red-300 text-sm">Burnout Risk</div>
                <div className="text-gray-400 text-xs mt-1">Stress: {healthData.mentalHealthSupport.mentalHealthMetrics.workStressLevel.toFixed(1)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Mental Health Services</h4>
              {healthData.mentalHealthSupport.mentalHealthServices.slice(0, 4).map((service, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{service.service}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{service.users}</span>
                    <span className="text-green-400">{service.sessions}</span>
                    <span className={`${getPerformanceColor(service.satisfaction, 85, 90)}`}>
                      {formatPercentage(service.satisfaction)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-purple-400 font-medium">{formatPercentage(healthData.mentalHealthSupport.mentalHealthMetrics.resilienceScore)}</div>
                <div className="text-slate-400">Resilience</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{formatPercentage(healthData.mentalHealthSupport.mentalHealthMetrics.engagementScore)}</div>
                <div className="text-slate-400">Engagement</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-blue-400 font-medium">{formatPercentage(healthData.mentalHealthSupport.workLifeBalanceScore)}</div>
                <div className="text-slate-400">Work-Life Balance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Health Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Medical & Health Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {healthData.healthAlerts.map((alert, index) => (
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

        {/* Medical Services & Health Insurance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Thermometer className="w-5 h-5 text-orange-400 mr-2" />
              Medical Services Intelligence
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-orange-400">{healthData.medicalServices.onSiteMedicalStaff}</div>
                <div className="text-orange-300 text-sm">Medical Staff</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{healthData.medicalServices.emergencyResponseTime.toFixed(1)}m</div>
                <div className="text-green-300 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-400">{healthData.medicalServices.medicalClearances}</div>
                <div className="text-purple-300 text-sm">Clearances</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Medical Services</h4>
              {healthData.medicalServices.services.slice(0, 4).map((service, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-2 border border-slate-600/30">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">{service.service}</span>
                    <div className="flex items-center space-x-2 text-xs">
                      <span className="text-green-400">{service.completed}</span>
                      <span className="text-blue-400">{service.scheduled || service.required}</span>
                      <span className={`font-medium ${getPerformanceColor(service.completion, 85, 95)}`}>
                        {formatPercentage(service.completion)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PieChart className="w-5 h-5 text-blue-400 mr-2" />
              Health Insurance Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{healthData.healthInsurance.enrolledEmployees}</div>
                <div className="text-blue-300 text-sm">Enrolled</div>
                <div className="text-gray-400 text-xs mt-1">Dependents: {formatNumber(healthData.healthInsurance.dependentsCovered)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatCurrency(healthData.healthInsurance.claimsPaid)}</div>
                <div className="text-green-300 text-sm">Claims Paid</div>
                <div className="text-gray-400 text-xs mt-1">Avg: {formatCurrency(healthData.healthInsurance.averageClaimAmount)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Insurance Plans</h4>
              {healthData.healthInsurance.insurancePlans.map((plan, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{plan.plan}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{plan.enrolled}</span>
                    <span className="text-green-400">{formatCurrency(plan.premium)}</span>
                    <span className={`${getPerformanceColor(plan.satisfaction, 85, 92)}`}>
                      {formatPercentage(plan.satisfaction)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-red-400 font-medium">{healthData.healthInsurance.deniedClaims}</div>
                <div className="text-slate-400">Denied Claims</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{healthData.healthInsurance.pendingClaims}</div>
                <div className="text-slate-400">Pending Claims</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}