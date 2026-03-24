// Construction & Engineering Intelligence Center - Project Management, Safety Monitoring, Infrastructure Development & Building Analytics
import { useState, useEffect } from 'react';
import { Building, HardHat, Wrench, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Truck } from 'lucide-react';

export default function ConstructionEngineeringIntelligenceCenter() {
  const [constructionData, setConstructionData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalConstructionValue: 12345678901234, // EUR
      activeProjects: 2345678,
      totalWorkers: 123456789,
      projectsCompleted: 987654, // annually
      infrastructureSpending: 3456789012345,
      smartBuildingAdoption: 34.6, // percentage
      sustainableConstruction: 67.8,
      digitalTransformation: 56.7,
      safetyIncidents: 23456, // annual
      projectDelays: 34.2, // percentage
      costOverruns: 18.9,
      equipmentUtilization: 78.4
    },
    majorConstructionCompanies: [
      {
        company: 'China State Construction',
        category: 'Infrastructure',
        revenue: 123456789012, // EUR annual
        projects: 12000,
        countries: 45,
        employees: 300000,
        specialization: 'Infrastructure',
        projectValue: 234567890123,
        completionRate: 94.7,
        safetyScore: 8.6,
        sustainabilityRating: 7.8,
        digitalAdoption: 67.8
      },
      {
        company: 'Vinci',
        category: 'Construction & Services',
        revenue: 45678901234,
        projects: 8500,
        countries: 120,
        employees: 217000,
        specialization: 'Infrastructure & Energy',
        projectValue: 189012345678,
        completionRate: 92.3,
        safetyScore: 9.2,
        sustainabilityRating: 8.7,
        digitalAdoption: 78.9
      },
      {
        company: 'Bouygues Construction',
        category: 'Building & Civil Works',
        revenue: 34567890123,
        projects: 6200,
        countries: 60,
        employees: 55000,
        specialization: 'Sustainable Construction',
        projectValue: 145678901234,
        completionRate: 89.6,
        safetyScore: 8.9,
        sustainabilityRating: 9.1,
        digitalAdoption: 82.4
      },
      {
        company: 'Skanska',
        category: 'Construction & Development',
        revenue: 23456789012,
        projects: 4800,
        countries: 10,
        employees: 35000,
        specialization: 'Green Building',
        projectValue: 123456789012,
        completionRate: 91.8,
        safetyScore: 9.4,
        sustainabilityRating: 9.5,
        digitalAdoption: 89.3
      }
    ],
    projectManagement: {
      projectTypes: [
        {
          type: 'Residential',
          activeProjects: 567890,
          avgDuration: 18, // months
          avgValue: 1234567, // EUR
          completionRate: 87.3,
          delayRate: 23.4,
          profitMargin: 12.6,
          safetyIncidents: 156
        },
        {
          type: 'Commercial',
          activeProjects: 234567,
          avgDuration: 24,
          avgValue: 4567890,
          completionRate: 82.7,
          delayRate: 34.6,
          profitMargin: 18.9,
          safetyIncidents: 89
        },
        {
          type: 'Infrastructure',
          activeProjects: 123456,
          avgDuration: 48,
          avgValue: 12345678,
          completionRate: 78.9,
          delayRate: 45.7,
          profitMargin: 15.3,
          safetyIncidents: 234
        },
        {
          type: 'Industrial',
          activeProjects: 98765,
          avgDuration: 30,
          avgValue: 8901234,
          completionRate: 85.2,
          delayRate: 28.9,
          profitMargin: 22.1,
          safetyIncidents: 67
        }
      ],
      phases: {
        planning: 23.4, // percentage of projects
        design: 18.7,
        permitting: 12.3,
        construction: 34.6,
        finishing: 8.9,
        handover: 2.1
      },
      performance: {
        onTimeDelivery: 67.8,
        withinBudget: 71.2,
        qualityScore: 89.4,
        clientSatisfaction: 8.3,
        reworkRate: 8.7,
        changeOrderFrequency: 23.4
      }
    },
    safetyMonitoring: {
      incidentTypes: {
        fallsFromHeight: 34.6, // percentage of incidents
        struckByObject: 23.4,
        caughtInBetween: 18.9,
        electricalShock: 12.1,
        overexertion: 8.7,
        other: 2.3
      },
      safetyMetrics: {
        lostTimeInjuryRate: 2.3, // per 100 workers
        nearMissReports: 45678,
        safetyTrainingHours: 234567,
        complianceScore: 94.2,
        emergencyResponseTime: 4.5, // minutes
        ppeCompliance: 89.7
      },
      preventativeMeasures: {
        safetyInspections: 12345, // monthly
        hazardIdentifications: 23456,
        correctiveActions: 18907,
        safetyMeetings: 34567,
        toolboxTalks: 67890,
        safetyAudits: 1234
      }
    },
    smartBuildings: {
      technologies: [
        {
          technology: 'IoT Sensors',
          adoption: 67.8,
          applications: ['HVAC Control', 'Occupancy Detection', 'Energy Monitoring'],
          energySavings: 23.4,
          costReduction: 18.9,
          satisfaction: 8.6
        },
        {
          technology: 'BIM (Building Information Modeling)',
          adoption: 78.9,
          applications: ['Design Coordination', 'Clash Detection', 'Project Visualization'],
          energySavings: 12.3,
          costReduction: 34.6,
          satisfaction: 9.1
        },
        {
          technology: 'AI Automation',
          adoption: 45.6,
          applications: ['Predictive Maintenance', 'Resource Optimization', 'Quality Control'],
          energySavings: 34.7,
          costReduction: 28.9,
          satisfaction: 8.8
        },
        {
          technology: 'Digital Twins',
          adoption: 23.4,
          applications: ['Performance Monitoring', 'Simulation', 'Lifecycle Management'],
          energySavings: 45.2,
          costReduction: 56.7,
          satisfaction: 9.3
        }
      ],
      benefits: {
        energyEfficiency: 34.6,
        operationalCosts: -23.4, // reduction
        maintenanceCosts: -18.9,
        occupantSatisfaction: 67.8,
        carbonFootprint: -45.6,
        propertyValue: 12.3 // increase
      }
    },
    equipment: {
      fleetManagement: {
        totalEquipment: 234567,
        utilization: 78.4, // percentage
        availability: 89.7,
        maintenanceScheduled: 94.2,
        fuelEfficiency: 67.8,
        operatingCosts: 123456789, // EUR monthly
        depreciation: 12.3 // percentage annually
      },
      categories: [
        {
          category: 'Excavators',
          count: 45678,
          utilization: 82.3,
          avgAge: 5.6, // years
          maintenanceCost: 23456, // EUR/unit/year
          productivity: 89.4,
          fuelConsumption: 45.6 // L/hour
        },
        {
          category: 'Cranes',
          count: 23456,
          utilization: 76.8,
          avgAge: 8.2,
          maintenanceCost: 67890,
          productivity: 91.2,
          fuelConsumption: 78.9
        },
        {
          category: 'Concrete Mixers',
          count: 34567,
          utilization: 69.4,
          avgAge: 6.7,
          maintenanceCost: 12345,
          productivity: 87.6,
          fuelConsumption: 34.2
        },
        {
          category: 'Bulldozers',
          count: 18765,
          utilization: 84.1,
          avgAge: 7.3,
          maintenanceCost: 34567,
          productivity: 88.9,
          fuelConsumption: 56.7
        }
      ],
      predictiveMaintenance: {
        sensorCoverage: 67.8,
        predictiveAccuracy: 89.3,
        downtimeReduction: 34.6,
        costSavings: 23456789, // EUR annually
        maintenanceEfficiency: 78.9
      }
    },
    sustainability: {
      greenBuilding: {
        leedCertified: 34.6, // percentage of projects
        energyStarRated: 23.4,
        netZeroBuildings: 8.9,
        renewableEnergy: 45.6,
        waterConservation: 56.7,
        recycledMaterials: 67.8,
        carbonNeutralProjects: 12.3
      },
      environmentalImpact: {
        carbonEmissions: 234567890, // kg CO2 annually
        wasteGenerated: 123456789, // kg annually
        wasteRecycled: 67.8, // percentage
        waterUsage: 345678901, // liters annually
        energyConsumption: 234567890, // kWh annually
        renewableEnergyUse: 23.4 // percentage
      },
      circularEconomy: {
        materialReuse: 45.6,
        componentRecycling: 34.7,
        wasteToEnergy: 23.1,
        sustainableDesign: 78.9,
        lifeCycleAssessment: 56.2
      }
    },
    constructionAlerts: [
      {
        type: 'CRITICAL',
        category: 'Safety Incident',
        message: 'Fatal accident at commercial construction site - work halted, safety audit required',
        region: 'North America',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '03:58',
        recommendations: ['Site shutdown', 'Investigation', 'Safety review', 'Training update']
      },
      {
        type: 'WARNING',
        category: 'Material Shortage',
        message: 'Steel supply chain disruption - 45% price increase affecting 2,300+ active projects',
        region: 'Europe',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '03:55',
        recommendations: ['Alternative suppliers', 'Contract renegotiation', 'Timeline adjustment', 'Cost analysis']
      },
      {
        type: 'SUCCESS',
        category: 'Sustainability Milestone',
        message: 'Green building certifications increase 67% - company achieves carbon neutral target',
        region: 'Global',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '03:50',
        recommendations: ['Best practice sharing', 'Marketing campaign', 'Certification expansion', 'Stakeholder communication']
      },
      {
        type: 'INFO',
        category: 'Technology Adoption',
        message: 'BIM adoption reaches 78.9% - digital transformation accelerating across industry',
        region: 'Asia-Pacific',
        impact: 'LOW',
        actionRequired: false,
        timestamp: '03:45',
        recommendations: ['Training programs', 'Technology investment', 'Process optimization', 'Competitive analysis']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setConstructionData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        industryOverview: {
          ...prev.industryOverview,
          activeProjects: Math.max(2200000, Math.min(2500000, prev.industryOverview.activeProjects + Math.floor((Math.random() - 0.5) * 10000)))
        },
        equipment: {
          ...prev.equipment,
          fleetManagement: {
            ...prev.equipment.fleetManagement,
            utilization: Math.max(70, Math.min(85, prev.equipment.fleetManagement.utilization + (Math.random() - 0.5) * 2))
          }
        }
      }));
    }, 45000);

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
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 80, excellent = 90) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Infrastructure': return 'text-blue-400 bg-blue-400/20';
      case 'Construction & Services': return 'text-green-400 bg-green-400/20';
      case 'Building & Civil Works': return 'text-purple-400 bg-purple-400/20';
      case 'Construction & Development': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000000) {
      return `${(num / 1000000000000).toFixed(1)}T`;
    }
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000000000) {
      return `€${(amount / 1000000000000).toFixed(1)}T`;
    }
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

  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-orange-900 via-slate-900 to-yellow-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-orange-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl">
              <Building className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Construction & Engineering Intelligence Center</h1>
              <p className="text-orange-300">Project management, safety monitoring, infrastructure development & building analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-orange-400">{constructionData.currentTime}</div>
            <div className="text-orange-300">Construction Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-orange-400 mr-2" />
                Market Value
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatCurrency(constructionData.industryOverview.globalConstructionValue)}</div>
            <div className="text-orange-300 text-sm">Infrastructure: {formatCurrency(constructionData.industryOverview.infrastructureSpending)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Building className="w-5 h-5 text-blue-400 mr-2" />
                Active Projects
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(constructionData.industryOverview.activeProjects)}</div>
            <div className="text-blue-300 text-sm">Completed: {formatNumber(constructionData.industryOverview.projectsCompleted)}/year</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <HardHat className="w-5 h-5 text-green-400 mr-2" />
                Total Workers
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(constructionData.industryOverview.totalWorkers)}</div>
            <div className="text-green-300 text-sm">Safety Incidents: {formatNumber(constructionData.industryOverview.safetyIncidents)}/year</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Wrench className="w-5 h-5 text-purple-400 mr-2" />
                Smart Buildings
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(constructionData.industryOverview.smartBuildingAdoption)}</div>
            <div className="text-purple-300 text-sm">Digital Transform: {formatPercentage(constructionData.industryOverview.digitalTransformation)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                Sustainability
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatPercentage(constructionData.industryOverview.sustainableConstruction)}</div>
            <div className="text-emerald-300 text-sm">Green Building Adoption</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Truck className="w-5 h-5 text-cyan-400 mr-2" />
                Equipment
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(constructionData.industryOverview.equipmentUtilization)}</div>
            <div className="text-cyan-300 text-sm">Utilization Rate</div>
          </div>
        </div>

        {/* Major Construction Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Building className="w-5 h-5 text-orange-400 mr-2" />
            Major Construction Companies Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Company</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Projects</th>
                  <th className="text-center p-3 text-slate-300">Completion Rate</th>
                  <th className="text-center p-3 text-slate-300">Safety Score</th>
                  <th className="text-center p-3 text-slate-300">Digital Adoption</th>
                </tr>
              </thead>
              <tbody>
                {constructionData.majorConstructionCompanies.map((company, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{company.company}</div>
                      <div className="text-slate-400 text-xs">{company.countries} countries • {formatNumber(company.employees)} employees • {company.specialization}</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(company.category)}`}>
                        {company.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(company.revenue)}</td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(company.projects)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.completionRate, 85, 92)}`}>
                      {formatPercentage(company.completionRate)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.safetyScore * 10, 80, 90)}`}>
                      {company.safetyScore.toFixed(1)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.digitalAdoption, 70, 85)}`}>
                      {formatPercentage(company.digitalAdoption)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Project Management & Safety Monitoring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
              Project Management Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(constructionData.projectManagement.performance.onTimeDelivery)}</div>
                <div className="text-blue-300 text-sm">On-Time Delivery</div>
                <div className="text-gray-400 text-xs mt-1">Project Performance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(constructionData.projectManagement.performance.withinBudget)}</div>
                <div className="text-green-300 text-sm">Within Budget</div>
                <div className="text-gray-400 text-xs mt-1">Cost Control</div>
              </div>
            </div>
            <div className="space-y-4">
              {constructionData.projectManagement.projectTypes.map((project, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{project.type}</span>
                      <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {formatNumber(project.activeProjects)} projects
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{project.avgDuration} months</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-blue-400">Avg Value: {formatCurrency(project.avgValue)}</div>
                      <div className="text-green-400">Completion: {formatPercentage(project.completionRate)}</div>
                      <div className="text-purple-400">Profit Margin: {formatPercentage(project.profitMargin)}</div>
                    </div>
                    <div>
                      <div className="text-orange-400">Delay Rate: {formatPercentage(project.delayRate)}</div>
                      <div className="text-red-400">Safety Incidents: {project.safetyIncidents}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <HardHat className="w-5 h-5 text-red-400 mr-2" />
              Safety Monitoring Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{constructionData.safetyMonitoring.safetyMetrics.lostTimeInjuryRate.toFixed(1)}</div>
                <div className="text-red-300 text-sm">Injury Rate</div>
                <div className="text-gray-400 text-xs mt-1">Per 100 Workers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(constructionData.safetyMonitoring.safetyMetrics.complianceScore)}</div>
                <div className="text-green-300 text-sm">Compliance Score</div>
                <div className="text-gray-400 text-xs mt-1">Safety Standards</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Incident Types</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Falls from Height</span>
                  <span className="text-red-400">{formatPercentage(constructionData.safetyMonitoring.incidentTypes.fallsFromHeight)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Struck by Object</span>
                  <span className="text-orange-400">{formatPercentage(constructionData.safetyMonitoring.incidentTypes.struckByObject)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Caught In-Between</span>
                  <span className="text-yellow-400">{formatPercentage(constructionData.safetyMonitoring.incidentTypes.caughtInBetween)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Electrical Shock</span>
                  <span className="text-blue-400">{formatPercentage(constructionData.safetyMonitoring.incidentTypes.electricalShock)}</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <h4 className="text-white text-sm font-medium mb-2">Preventative Measures</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-blue-400">Inspections: {formatNumber(constructionData.safetyMonitoring.preventativeMeasures.safetyInspections)}/month</div>
                  <div className="text-green-400">Training Hours: {formatNumber(constructionData.safetyMonitoring.safetyMetrics.safetyTrainingHours)}</div>
                </div>
                <div>
                  <div className="text-purple-400">Near Miss Reports: {formatNumber(constructionData.safetyMonitoring.safetyMetrics.nearMissReports)}</div>
                  <div className="text-orange-400">PPE Compliance: {formatPercentage(constructionData.safetyMonitoring.safetyMetrics.ppeCompliance)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Buildings & Equipment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Wrench className="w-5 h-5 text-purple-400 mr-2" />
              Smart Buildings Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatPercentage(constructionData.smartBuildings.technologies[1].adoption)}</div>
                <div className="text-purple-300 text-sm">BIM Adoption</div>
                <div className="text-gray-400 text-xs mt-1">Design Technology</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(constructionData.smartBuildings.benefits.energyEfficiency)}</div>
                <div className="text-cyan-300 text-sm">Energy Efficiency</div>
                <div className="text-gray-400 text-xs mt-1">Smart Building Gain</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Technology Adoption</h4>
              {constructionData.smartBuildings.technologies.slice(0, 3).map((tech, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{tech.technology}</div>
                    <div className="text-slate-400 text-xs">★{tech.satisfaction.toFixed(1)} satisfaction • {formatPercentage(tech.costReduction)} cost reduction</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-green-400">{formatPercentage(tech.adoption)}</div>
                    <div className="text-blue-400">{formatPercentage(tech.energySavings)} energy</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Smart Building Benefits</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Operational Costs</span>
                  <span className="text-green-400">{formatPercentage(constructionData.smartBuildings.benefits.operationalCosts)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Occupant Satisfaction</span>
                  <span className="text-blue-400">{formatPercentage(constructionData.smartBuildings.benefits.occupantSatisfaction)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Carbon Footprint</span>
                  <span className="text-emerald-400">{formatPercentage(constructionData.smartBuildings.benefits.carbonFootprint)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Property Value</span>
                  <span className="text-yellow-400">+{formatPercentage(constructionData.smartBuildings.benefits.propertyValue)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Truck className="w-5 h-5 text-cyan-400 mr-2" />
              Equipment Management Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(constructionData.equipment.fleetManagement.utilization)}</div>
                <div className="text-cyan-300 text-sm">Fleet Utilization</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(constructionData.equipment.fleetManagement.totalEquipment)} units</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(constructionData.equipment.fleetManagement.availability)}</div>
                <div className="text-green-300 text-sm">Availability</div>
                <div className="text-gray-400 text-xs mt-1">Equipment Uptime</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Equipment Categories</h4>
              {constructionData.equipment.categories.map((equipment, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{equipment.category}</div>
                    <div className="text-slate-400 text-xs">{formatNumber(equipment.count)} units • {equipment.avgAge.toFixed(1)} yrs avg age</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-green-400">{formatPercentage(equipment.utilization)}</div>
                    <div className="text-blue-400">{formatPercentage(equipment.productivity)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <h4 className="text-white text-sm font-medium mb-2">Predictive Maintenance</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-blue-400">Sensor Coverage: {formatPercentage(constructionData.equipment.predictiveMaintenance.sensorCoverage)}</div>
                  <div className="text-green-400">Accuracy: {formatPercentage(constructionData.equipment.predictiveMaintenance.predictiveAccuracy)}</div>
                </div>
                <div>
                  <div className="text-purple-400">Downtime Reduction: {formatPercentage(constructionData.equipment.predictiveMaintenance.downtimeReduction)}</div>
                  <div className="text-orange-400">Cost Savings: {formatCurrency(constructionData.equipment.predictiveMaintenance.costSavings)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Construction Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Construction & Engineering Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {constructionData.constructionAlerts.map((alert, index) => (
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
                    <div className="text-slate-300">Region: {alert.region}</div>
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

        {/* Sustainability */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
            Sustainability Intelligence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">{formatPercentage(constructionData.sustainability.greenBuilding.leedCertified)}</div>
                  <div className="text-emerald-300 text-sm">LEED Certified</div>
                  <div className="text-gray-400 text-xs mt-1">Green Building Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{formatPercentage(constructionData.sustainability.environmentalImpact.wasteRecycled)}</div>
                  <div className="text-green-300 text-sm">Waste Recycled</div>
                  <div className="text-gray-400 text-xs mt-1">Environmental Impact</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-sm font-medium">Green Building Certifications</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Energy Star</span>
                    <span className="text-green-400">{formatPercentage(constructionData.sustainability.greenBuilding.energyStarRated)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Net Zero</span>
                    <span className="text-blue-400">{formatPercentage(constructionData.sustainability.greenBuilding.netZeroBuildings)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Renewable Energy</span>
                    <span className="text-purple-400">{formatPercentage(constructionData.sustainability.greenBuilding.renewableEnergy)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Recycled Materials</span>
                    <span className="text-orange-400">{formatPercentage(constructionData.sustainability.greenBuilding.recycledMaterials)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <h4 className="text-white text-sm font-medium">Circular Economy</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Material Reuse</span>
                    <span className="text-green-400">{formatPercentage(constructionData.sustainability.circularEconomy.materialReuse)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Component Recycling</span>
                    <span className="text-blue-400">{formatPercentage(constructionData.sustainability.circularEconomy.componentRecycling)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Sustainable Design</span>
                    <span className="text-purple-400">{formatPercentage(constructionData.sustainability.circularEconomy.sustainableDesign)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Lifecycle Assessment</span>
                    <span className="text-orange-400">{formatPercentage(constructionData.sustainability.circularEconomy.lifeCycleAssessment)}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Environmental Impact</h4>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Carbon Emissions</span>
                    <span className="text-red-400">{formatNumber(constructionData.sustainability.environmentalImpact.carbonEmissions)} kg CO2/yr</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Water Usage</span>
                    <span className="text-blue-400">{formatNumber(constructionData.sustainability.environmentalImpact.waterUsage)} L/yr</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Renewable Energy Use</span>
                    <span className="text-green-400">{formatPercentage(constructionData.sustainability.environmentalImpact.renewableEnergyUse)}</span>
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