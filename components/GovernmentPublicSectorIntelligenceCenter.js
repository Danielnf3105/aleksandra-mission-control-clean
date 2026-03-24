// Government & Public Sector Intelligence Center - Public Services, Citizen Engagement, Policy Analytics & Government Operations
import { useState, useEffect } from 'react';
import { Building2, Users, FileText, TrendingUp, TrendingDown, Shield, Vote, Clock, AlertTriangle, CheckCircle, BarChart3, PieChart } from 'lucide-react';

export default function GovernmentPublicSectorIntelligenceCenter() {
  const [govData, setGovData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    governmentOverview: {
      citizenSatisfaction: 73.4,
      serviceEfficiency: 81.7,
      digitalTransformation: 67.8,
      transparencyIndex: 78.9,
      publicTrust: 69.2,
      budgetUtilization: 94.3,
      policyImplementation: 76.5,
      regulatoryCompliance: 89.7,
      publicSafetyIndex: 87.4,
      economicIndicators: 82.1,
      socialWelfareIndex: 74.8,
      infrastructureScore: 79.3,
      environmentalPolicy: 71.6,
      internationalRelations: 85.2
    },
    publicServices: {
      totalServices: 147,
      digitalServices: 98,
      serviceAvailability: 97.8,
      averageProcessingTime: 4.7, // days
      citizenRequests: 23456,
      requestsProcessed: 21789,
      serviceCategories: [
        { category: 'Healthcare Services', requests: 6789, processed: 6234, satisfaction: 76.8, avgTime: 3.2 },
        { category: 'Education Services', requests: 4567, processed: 4123, satisfaction: 82.4, avgTime: 2.1 },
        { category: 'Social Services', requests: 3456, processed: 3189, satisfaction: 69.7, avgTime: 6.8 },
        { category: 'Tax & Revenue', requests: 2847, processed: 2798, satisfaction: 71.3, avgTime: 4.5 },
        { category: 'Permits & Licensing', requests: 2234, processed: 2067, satisfaction: 74.9, avgTime: 7.2 },
        { category: 'Public Safety', requests: 1789, processed: 1678, satisfaction: 89.4, avgTime: 1.8 },
        { category: 'Infrastructure', requests: 1234, processed: 1067, satisfaction: 78.2, avgTime: 12.4 },
        { category: 'Legal Services', requests: 540, processed: 433, satisfaction: 83.7, avgTime: 15.6 }
      ],
      serviceChannels: {
        onlinePortal: 67.8, // percentage usage
        mobileApp: 23.4,
        inPerson: 6.7,
        phoneCall: 2.1
      },
      digitalGovernment: {
        eGovernmentIndex: 78.9,
        onlineServiceMaturity: 82.4,
        digitalIdentityAdoption: 89.7,
        digitalPayments: 76.3,
        electronicDocuments: 84.2,
        cloudMigration: 67.8
      }
    },
    citizenEngagement: {
      registeredVoters: 8934567,
      voterTurnout: 78.9, // last election
      publicConsultations: 34,
      citizenFeedback: 12456,
      townHallMeetings: 89,
      onlineParticipation: 34567,
      petitionsSubmitted: 234,
      petitionsProcessed: 189,
      socialMediaEngagement: 567890,
      transparencyScore: 78.9,
      engagementChannels: [
        { channel: 'Public Forums', participants: 12456, satisfaction: 82.4, frequency: 'Monthly' },
        { channel: 'Online Surveys', participants: 34567, satisfaction: 76.8, frequency: 'Weekly' },
        { channel: 'Town Halls', participants: 8934, satisfaction: 89.2, frequency: 'Quarterly' },
        { channel: 'Citizen Panels', participants: 567, satisfaction: 91.7, frequency: 'Bi-annual' },
        { channel: 'Digital Platforms', participants: 234567, satisfaction: 74.3, frequency: 'Continuous' },
        { channel: 'Community Meetings', participants: 6789, satisfaction: 85.6, frequency: 'Monthly' }
      ],
      demographicEngagement: {
        youth18_35: 67.8,
        adults36_55: 82.4,
        seniors55plus: 74.9,
        ruralCommunities: 69.7,
        urbanCommunities: 87.3,
        minorities: 71.6
      }
    },
    budgetFinance: {
      totalBudget: 12456789000, // EUR
      budgetAllocated: 11789234000,
      budgetSpent: 9834567000,
      budgetUtilization: 94.3,
      revenue: 13789456000,
      deficit: -1332667000,
      debtToGdp: 67.8,
      taxEfficiency: 89.7,
      departments: [
        { department: 'Healthcare', budget: 3456789000, spent: 3234567000, utilization: 93.6 },
        { department: 'Education', budget: 2847653000, spent: 2678934000, utilization: 94.1 },
        { department: 'Defense', budget: 1789456000, spent: 1678923000, utilization: 93.8 },
        { department: 'Infrastructure', budget: 1456789000, spent: 1289456000, utilization: 88.5 },
        { department: 'Social Services', budget: 1234567000, spent: 1178934000, utilization: 95.5 },
        { department: 'Public Safety', budget: 987654000, spent: 923456000, utilization: 93.5 },
        { department: 'Environment', budget: 567890000, spent: 489345000, utilization: 86.2 },
        { department: 'Administration', budget: 345678000, spent: 298734000, utilization: 86.4 }
      ],
      fiscalHealth: {
        revenueGrowth: 2.3, // percentage
        expenditureControl: 89.7,
        debtManagement: 82.4,
        fiscalSustainability: 76.8,
        budgetTransparency: 91.3
      }
    },
    policyAnalytics: {
      activePolicies: 234,
      implementedPolicies: 189,
      policySuccessRate: 78.9,
      impactAssessments: 67,
      publicConsultations: 34,
      stakeholderEngagement: 456,
      policyAreas: [
        { area: 'Economic Policy', policies: 45, success: 82.4, impact: 89.7, public_support: 71.3 },
        { area: 'Social Policy', policies: 38, success: 76.8, impact: 84.2, public_support: 78.9 },
        { area: 'Environmental Policy', policies: 29, success: 71.6, impact: 76.8, public_support: 83.4 },
        { area: 'Healthcare Policy', policies: 31, success: 84.7, impact: 91.2, public_support: 74.6 },
        { area: 'Education Policy', policies: 27, success: 79.3, impact: 87.5, public_support: 81.7 },
        { area: 'Security Policy', policies: 24, success: 89.7, impact: 94.2, public_support: 69.8 },
        { area: 'Technology Policy', policies: 22, success: 67.9, impact: 72.4, public_support: 76.2 },
        { area: 'Trade Policy', policies: 18, success: 85.6, impact: 88.9, public_support: 73.1 }
      ],
      legislativeProcess: {
        billsIntroduced: 89,
        billsPassed: 67,
        passageRate: 75.3,
        averageProcessingTime: 127.4, // days
        committeeMeetings: 234,
        publicHearings: 56,
        amendments: 289
      }
    },
    publicSafety: {
      overallSafetyIndex: 87.4,
      crimePrevention: 82.7,
      emergencyResponse: 94.2,
      disasterPreparedness: 78.9,
      cybersecurityReadiness: 83.6,
      publicHealthSafety: 89.7,
      crimeStatistics: {
        totalCrimes: 12345,
        violentCrimes: 1234,
        propertyCrimes: 4567,
        cybercrimes: 789,
        solvedCases: 8934,
        clearanceRate: 72.4
      },
      emergencyServices: {
        responseTime: 6.8, // minutes average
        serviceAvailability: 99.7,
        resourceUtilization: 78.9,
        citizenSatisfaction: 91.3,
        emergencyCallsProcessed: 23456
      },
      lawEnforcement: {
        officerCount: 4567,
        communityPrograms: 89,
        trainingHours: 234567,
        technologyAdoption: 76.8,
        publicTrust: 73.4,
        performanceMetrics: {
          responseTime: 8.7, // minutes
          caseResolutionTime: 23.4, // days
          communityEngagement: 82.1,
          officerSafety: 96.7
        }
      }
    },
    regulatoryCompliance: {
      complianceScore: 89.7,
      regulatoryFrameworks: 67,
      activeRegulations: 234,
      complianceAudits: 23,
      violationsReported: 12,
      penaltiesIssued: 8,
      correctionsMade: 11,
      regulatoryAreas: [
        { area: 'Financial Regulation', compliance: 94.2, audits: 6, violations: 1 },
        { area: 'Environmental Regulation', compliance: 86.7, audits: 4, violations: 3 },
        { area: 'Health & Safety', compliance: 91.8, audits: 5, violations: 2 },
        { area: 'Data Protection', compliance: 87.3, audits: 3, violations: 2 },
        { area: 'Employment Law', compliance: 89.4, audits: 3, violations: 1 },
        { area: 'Consumer Protection', compliance: 92.6, audits: 2, violations: 1 }
      ],
      legalCompliance: {
        courtCases: 234,
        casesWon: 189,
        winRate: 80.8,
        legalCosts: 2345678,
        settlementRate: 23.4
      }
    },
    internationalRelations: {
      diplomaticIndex: 85.2,
      tradeRelations: 89.7,
      internationalAgreements: 156,
      bilateralTreaties: 89,
      multilateralTreaties: 67,
      foreignAid: 234567000,
      culturalExchange: 45,
      diplomaticMissions: 78,
      tradeBalance: 2345678000,
      foreignInvestment: 5678900000,
      internationalCooperation: [
        { organization: 'United Nations', participation: 98.9, contributions: 23456789 },
        { organization: 'European Union', participation: 97.8, contributions: 234567890 },
        { organization: 'NATO', participation: 94.2, contributions: 45678900 },
        { organization: 'World Bank', participation: 89.7, contributions: 12345678 },
        { organization: 'IMF', participation: 91.3, contributions: 8765432 },
        { organization: 'WHO', participation: 96.4, contributions: 6543210 }
      ]
    },
    governmentAlerts: [
      {
        type: 'WARNING',
        category: 'Budget Management',
        message: 'Defense department approaching 95% budget utilization - review spending controls',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Finance Ministry',
        timestamp: '02:05',
        recommendations: ['Review expenditure patterns', 'Implement cost controls', 'Reallocate resources']
      },
      {
        type: 'SUCCESS',
        category: 'Public Services',
        message: 'Digital service adoption reached 67.8% - exceeding Q1 target of 65%',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'Digital Government Office',
        timestamp: '02:00',
        recommendations: ['Expand digital offerings', 'Improve user experience', 'Train staff on digital tools']
      },
      {
        type: 'CRITICAL',
        category: 'Emergency Services',
        message: 'Emergency response time increased to 6.8 minutes - above 6 minute target',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'Emergency Management',
        timestamp: '01:55',
        recommendations: ['Deploy additional resources', 'Optimize dispatch algorithms', 'Review service coverage']
      },
      {
        type: 'INFO',
        category: 'Policy Implementation',
        message: 'New environmental policy achieving 71.6% success rate - within expected range',
        impact: 'LOW',
        actionRequired: false,
        assignedTo: 'Environmental Ministry',
        timestamp: '01:50',
        recommendations: ['Monitor implementation progress', 'Gather stakeholder feedback', 'Adjust as needed']
      }
    ],
    performanceIndicators: {
      governmentEffectiveness: 81.7,
      ruleOfLaw: 89.7,
      corruptionIndex: 78.9, // higher is better
      pressFreedommIndex: 84.2,
      humanDevelopmentIndex: 0.867,
      democracyIndex: 8.2,
      easeOfDoingBusiness: 76.8,
      competitivenessIndex: 82.4,
      innovationIndex: 74.9,
      sustainabilityIndex: 71.6,
      happinessIndex: 7.1,
      socialProgressIndex: 79.3
    },
    digitalGovernment: {
      eGovernmentDevelopmentIndex: 0.789,
      onlineServiceIndex: 0.834,
      telecommunicationIndex: 0.867,
      humanCapitalIndex: 0.756,
      digitalInfrastructure: 82.4,
      cybersecurityIndex: 76.8,
      digitalSkillsTraining: 234567,
      cloudServices: 67.8, // percentage migrated
      aiAdoption: 34.7,
      blockchainPilots: 12,
      openDataInitiatives: 89,
      digitalParticipation: 78.9
    },
    citizenServices: {
      serviceRequestVolume: 23456,
      averageSatisfaction: 76.8,
      firstContactResolution: 67.9,
      digitalChannelUsage: 78.9,
      multiChannelIntegration: 82.4,
      serviceAccessibility: 89.7,
      languageSupport: 12,
      disabilityAccessibility: 74.3,
      serviceCategories: {
        permits: { requests: 4567, satisfaction: 71.3, processing_time: 5.7 },
        benefits: { requests: 6789, satisfaction: 78.9, processing_time: 3.2 },
        taxes: { requests: 5234, satisfaction: 69.7, processing_time: 4.1 },
        healthcare: { requests: 3456, satisfaction: 82.4, processing_time: 2.8 },
        education: { requests: 2890, satisfaction: 84.7, processing_time: 3.5 },
        housing: { requests: 520, satisfaction: 76.2, processing_time: 8.9 }
      }
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setGovData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        governmentOverview: {
          ...prev.governmentOverview,
          citizenSatisfaction: Math.max(65, Math.min(85, prev.governmentOverview.citizenSatisfaction + (Math.random() - 0.5) * 2)),
          serviceEfficiency: Math.max(75, Math.min(90, prev.governmentOverview.serviceEfficiency + (Math.random() - 0.5) * 1.5)),
          digitalTransformation: Math.max(60, Math.min(80, prev.governmentOverview.digitalTransformation + (Math.random() - 0.5) * 1))
        },
        publicServices: {
          ...prev.publicServices,
          citizenRequests: Math.max(20000, Math.min(27000, prev.publicServices.citizenRequests + Math.floor(Math.random() * 200) - 100)),
          requestsProcessed: Math.max(18000, Math.min(25000, prev.publicServices.requestsProcessed + Math.floor(Math.random() * 150) - 75))
        }
      }));
    }, 19000);

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

  const getPerformanceColor = (value, good = 70, excellent = 80, reverse = false) => {
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

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="w-3 h-3 text-green-400" />;
      case 'decreasing': return <TrendingDown className="w-3 h-3 text-red-400" />;
      default: return <span className="w-3 h-3 text-gray-400">→</span>;
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
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-violet-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Government & Public Sector Intelligence Center</h1>
              <p className="text-blue-300">Public services, citizen engagement, policy analytics, government operations & civic intelligence</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{govData.currentTime}</div>
            <div className="text-blue-300">Government Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Government Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                Citizen Satisfaction
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(govData.governmentOverview.citizenSatisfaction)}</div>
            <div className="text-blue-300 text-sm">Public Trust: {formatPercentage(govData.governmentOverview.publicTrust)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Service Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(govData.governmentOverview.serviceEfficiency)}</div>
            <div className="text-green-300 text-sm">Availability: {formatPercentage(govData.publicServices.serviceAvailability)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <FileText className="w-5 h-5 text-purple-400 mr-2" />
                Digital Transform
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(govData.governmentOverview.digitalTransformation)}</div>
            <div className="text-purple-300 text-sm">eGov Index: {formatPercentage(govData.publicServices.digitalGovernment.eGovernmentIndex)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-orange-400 mr-2" />
                Public Safety
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(govData.publicSafety.overallSafetyIndex)}</div>
            <div className="text-orange-300 text-sm">Response: {govData.publicSafety.emergencyServices.responseTime.toFixed(1)}m</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
                Budget Utilization
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(govData.budgetFinance.budgetUtilization)}</div>
            <div className="text-cyan-300 text-sm">Spent: {formatCurrency(govData.budgetFinance.budgetSpent)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Vote className="w-5 h-5 text-emerald-400 mr-2" />
                Transparency
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatPercentage(govData.governmentOverview.transparencyIndex)}</div>
            <div className="text-emerald-300 text-sm">Engagement: {formatPercentage(govData.citizenEngagement.transparencyScore)}</div>
          </div>
        </div>

        {/* Public Services */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Building2 className="w-5 h-5 text-green-400 mr-2" />
            Public Services Intelligence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{formatNumber(govData.publicServices.citizenRequests)}</div>
              <div className="text-green-300 text-sm">Citizen Requests</div>
              <div className="text-gray-400 text-xs mt-1">Processed: {formatNumber(govData.publicServices.requestsProcessed)}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{govData.publicServices.totalServices}</div>
              <div className="text-blue-300 text-sm">Total Services</div>
              <div className="text-gray-400 text-xs mt-1">Digital: {govData.publicServices.digitalServices}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{govData.publicServices.averageProcessingTime.toFixed(1)}d</div>
              <div className="text-purple-300 text-sm">Avg Processing Time</div>
              <div className="text-gray-400 text-xs mt-1">Availability: {formatPercentage(govData.publicServices.serviceAvailability)}</div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Service Category</th>
                  <th className="text-center p-3 text-slate-300">Requests</th>
                  <th className="text-center p-3 text-slate-300">Processed</th>
                  <th className="text-center p-3 text-slate-300">Satisfaction</th>
                  <th className="text-center p-3 text-slate-300">Avg Time</th>
                </tr>
              </thead>
              <tbody>
                {govData.publicServices.serviceCategories.map((service, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3 text-white font-medium">{service.category}</td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(service.requests)}</td>
                    <td className="p-3 text-center text-green-400">{formatNumber(service.processed)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(service.satisfaction, 70, 80)}`}>
                      {formatPercentage(service.satisfaction)}
                    </td>
                    <td className="p-3 text-center text-purple-400">{service.avgTime.toFixed(1)}d</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Citizen Engagement & Budget Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-cyan-400 mr-2" />
              Citizen Engagement Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatNumber(govData.citizenEngagement.registeredVoters)}</div>
                <div className="text-cyan-300 text-sm">Registered Voters</div>
                <div className="text-gray-400 text-xs mt-1">Turnout: {formatPercentage(govData.citizenEngagement.voterTurnout)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatNumber(govData.citizenEngagement.onlineParticipation)}</div>
                <div className="text-blue-300 text-sm">Online Participation</div>
                <div className="text-gray-400 text-xs mt-1">Feedback: {formatNumber(govData.citizenEngagement.citizenFeedback)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Engagement Channels</h4>
              {govData.citizenEngagement.engagementChannels.slice(0, 4).map((channel, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{channel.channel}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm">{formatNumber(channel.participants)}</span>
                      <span className={`${getPerformanceColor(channel.satisfaction, 75, 85)}`}>
                        {formatPercentage(channel.satisfaction)}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">
                    Frequency: {channel.frequency}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{govData.citizenEngagement.publicConsultations}</div>
                <div className="text-slate-400">Consultations</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{govData.citizenEngagement.petitionsProcessed}</div>
                <div className="text-slate-400">Petitions Processed</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-purple-400 font-medium">{govData.citizenEngagement.townHallMeetings}</div>
                <div className="text-slate-400">Town Halls</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-orange-400 mr-2" />
              Budget & Finance Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{formatCurrency(govData.budgetFinance.totalBudget)}</div>
                <div className="text-orange-300 text-sm">Total Budget</div>
                <div className="text-gray-400 text-xs mt-1">Revenue: {formatCurrency(govData.budgetFinance.revenue)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(govData.budgetFinance.budgetUtilization)}</div>
                <div className="text-green-300 text-sm">Budget Utilization</div>
                <div className="text-gray-400 text-xs mt-1">Deficit: {formatCurrency(Math.abs(govData.budgetFinance.deficit))}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Department Budgets</h4>
              {govData.budgetFinance.departments.slice(0, 4).map((dept, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{dept.department}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{formatCurrency(dept.budget)}</span>
                    <span className="text-green-400">{formatCurrency(dept.spent)}</span>
                    <span className={`${getPerformanceColor(dept.utilization, 85, 95)}`}>
                      {formatPercentage(dept.utilization)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-red-400 font-medium">{formatPercentage(govData.budgetFinance.debtToGdp)}</div>
                <div className="text-slate-400">Debt to GDP</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{formatPercentage(govData.budgetFinance.taxEfficiency)}</div>
                <div className="text-slate-400">Tax Efficiency</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-blue-400 font-medium">{formatPercentage(govData.budgetFinance.fiscalHealth.revenueGrowth)}</div>
                <div className="text-slate-400">Revenue Growth</div>
              </div>
            </div>
          </div>
        </div>

        {/* Government Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Government & Public Sector Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {govData.governmentAlerts.map((alert, index) => (
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

        {/* Policy Analytics & Public Safety */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FileText className="w-5 h-5 text-purple-400 mr-2" />
              Policy Analytics Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{govData.policyAnalytics.activePolicies}</div>
                <div className="text-purple-300 text-sm">Active Policies</div>
                <div className="text-gray-400 text-xs mt-1">Implemented: {govData.policyAnalytics.implementedPolicies}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(govData.policyAnalytics.policySuccessRate)}</div>
                <div className="text-green-300 text-sm">Success Rate</div>
                <div className="text-gray-400 text-xs mt-1">Assessments: {govData.policyAnalytics.impactAssessments}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Policy Areas</h4>
              {govData.policyAnalytics.policyAreas.slice(0, 4).map((area, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-2 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white text-sm">{area.area}</span>
                    <span className="text-blue-400 text-sm">{area.policies} policies</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={`${getPerformanceColor(area.success, 70, 80)}`}>
                      Success: {formatPercentage(area.success)}
                    </span>
                    <span className={`${getPerformanceColor(area.impact, 75, 85)}`}>
                      Impact: {formatPercentage(area.impact)}
                    </span>
                    <span className={`${getPerformanceColor(area.public_support, 65, 75)}`}>
                      Support: {formatPercentage(area.public_support)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-blue-400 font-medium">{govData.policyAnalytics.legislativeProcess.billsIntroduced}</div>
                <div className="text-slate-400">Bills Introduced</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{govData.policyAnalytics.legislativeProcess.billsPassed}</div>
                <div className="text-slate-400">Bills Passed</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-purple-400 font-medium">{formatPercentage(govData.policyAnalytics.legislativeProcess.passageRate)}</div>
                <div className="text-slate-400">Passage Rate</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              Public Safety Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatPercentage(govData.publicSafety.overallSafetyIndex)}</div>
                <div className="text-red-300 text-sm">Safety Index</div>
                <div className="text-gray-400 text-xs mt-1">Response: {govData.publicSafety.emergencyServices.responseTime.toFixed(1)}m</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(govData.publicSafety.crimeStatistics.clearanceRate)}</div>
                <div className="text-green-300 text-sm">Crime Clearance</div>
                <div className="text-gray-400 text-xs mt-1">Cases: {formatNumber(govData.publicSafety.crimeStatistics.solvedCases)}</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Crime Statistics</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Total Crimes: {formatNumber(govData.publicSafety.crimeStatistics.totalCrimes)}</div>
                    <div className="text-slate-300">Violent: {formatNumber(govData.publicSafety.crimeStatistics.violentCrimes)}</div>
                    <div className="text-slate-300">Property: {formatNumber(govData.publicSafety.crimeStatistics.propertyCrimes)}</div>
                  </div>
                  <div>
                    <div className="text-orange-400">Cyber: {formatNumber(govData.publicSafety.crimeStatistics.cybercrimes)}</div>
                    <div className="text-green-400">Solved: {formatNumber(govData.publicSafety.crimeStatistics.solvedCases)}</div>
                    <div className="text-blue-400">Rate: {formatPercentage(govData.publicSafety.crimeStatistics.clearanceRate)}</div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Law Enforcement</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Officers: {formatNumber(govData.publicSafety.lawEnforcement.officerCount)}</div>
                    <div className="text-slate-300">Programs: {govData.publicSafety.lawEnforcement.communityPrograms}</div>
                  </div>
                  <div>
                    <div className="text-blue-400">Trust: {formatPercentage(govData.publicSafety.lawEnforcement.publicTrust)}</div>
                    <div className="text-green-400">Safety: {formatPercentage(govData.publicSafety.lawEnforcement.performanceMetrics.officerSafety)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}