// Robotics Automation Technology & Control Systems Intelligence Center - Robotics & Automation Analytics
import { useState, useEffect } from 'react';
import { Bot, Settings, Cpu, Zap, Activity, BarChart3, TrendingUp, Target, Monitor, Globe, Eye, Gauge } from 'lucide-react';

export default function RoboticsAutomationTechnologyControlSystemsIntelligenceCenter() {
  const [roboticsData, setRoboticsData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    roboticsOverview: {
      roboticSystems: 2345678,
      automationPlatforms: 456789,
      industrialRobots: 3456789,
      serviceRobots: 1234567,
      humanoidRobots: 89012,
      autonomousVehicles: 567890,
      operationalUptime: 94.8,
      automationEfficiency: 87.6,
      roboticAccuracy: 99.2,
      maintenancePrediction: 91.4,
      safetyCompliance: 99.7,
      energyEfficiency: 82.3,
      productivityGain: 156.7,
      costReduction: 34.8,
      qualityImprovement: 28.9,
      humanCollaboration: 73.4,
      adaptability: 68.9,
      learningCapability: 76.5,
      swarmCoordination: 45.2,
      edgeComputing: 59.8
    },
    roboticSystems: [
      {
        systemName: 'Boston Dynamics Atlas',
        systemId: 'ATLAS-HUMANOID-001',
        location: 'Boston Dynamics HQ, USA',
        systemType: 'HUMANOID RESEARCH ROBOT',
        status: 'OPERATIONAL',
        unitsDeployed: 125,
        height: 1.5,
        weight: 89,
        mobility: 'Bipedal Walking',
        dexterity: 'Advanced Manipulation',
        sensors: 'LiDAR, Cameras, IMU',
        actuators: 'Hydraulic',
        batteryLife: 1.0,
        maxSpeed: 1.5,
        payloadCapacity: 11,
        operatingTemp: '-20°C to +45°C',
        communicationRange: '1km',
        autonomyLevel: 'Semi-autonomous',
        applications: 'Research, Demo',
        aiCapabilities: 'Computer Vision, SLAM',
        safetyFeatures: 'Emergency Stop',
        maintenanceSchedule: 'Weekly',
        costPerUnit: 150000,
        developmentStatus: 'Prototype',
        commercialAvailability: 'Limited'
      },
      {
        systemName: 'Tesla Optimus Gen 2',
        systemId: 'OPTIMUS-HUMANOID-002',
        location: 'Tesla Gigafactory, Texas',
        systemType: 'GENERAL PURPOSE HUMANOID',
        status: 'DEVELOPMENT',
        unitsDeployed: 25,
        height: 1.73,
        weight: 57,
        mobility: 'Human-like Walking',
        dexterity: '11 DOF Hands',
        sensors: 'FSD Computer, Cameras',
        actuators: 'Electric',
        batteryLife: 8.0,
        maxSpeed: 1.4,
        payloadCapacity: 20,
        operatingTemp: '-10°C to +50°C',
        communicationRange: 'WiFi/5G',
        autonomyLevel: 'Autonomous',
        applications: 'Manufacturing, Household',
        aiCapabilities: 'Neural Networks, Planning',
        safetyFeatures: 'Collision Avoidance',
        maintenanceSchedule: 'Monthly',
        costPerUnit: 20000,
        developmentStatus: 'Beta Testing',
        commercialAvailability: '2025 Target'
      },
      {
        systemName: 'ABB YuMi Collaborative Robot',
        systemId: 'YUMI-COLLABORATIVE-003',
        location: 'ABB Facilities Worldwide',
        systemType: 'COLLABORATIVE INDUSTRIAL ROBOT',
        status: 'OPERATIONAL',
        unitsDeployed: 12500,
        reach: 0.559,
        weight: 38,
        mobility: 'Dual Arm Fixed Base',
        dexterity: '7 DOF per Arm',
        sensors: 'Force/Torque, Vision',
        actuators: 'Electric Servo',
        batteryLife: 'N/A (Mains)',
        maxSpeed: 1.5,
        payloadCapacity: 0.5,
        operatingTemp: '+5°C to +45°C',
        communicationRange: 'Ethernet',
        autonomyLevel: 'Programmed',
        applications: 'Small Parts Assembly',
        aiCapabilities: 'Vision System',
        safetyFeatures: 'ISO 10218 Compliant',
        maintenanceSchedule: 'Quarterly',
        costPerUnit: 40000,
        developmentStatus: 'Commercial',
        commercialAvailability: 'Available'
      },
      {
        systemName: 'Amazon Warehouse Robotics',
        systemId: 'AMAZON-WAREHOUSE-004',
        location: 'Amazon Fulfillment Centers',
        systemType: 'WAREHOUSE AUTOMATION SYSTEM',
        status: 'OPERATIONAL',
        unitsDeployed: 350000,
        dimensions: '0.76 x 1.02 x 0.41m',
        weight: 145,
        mobility: 'Wheeled AGV',
        dexterity: 'Shelf Lifting',
        sensors: 'LiDAR, Cameras, QR',
        actuators: 'Electric Drive',
        batteryLife: 16.0,
        maxSpeed: 1.7,
        payloadCapacity: 320,
        operatingTemp: '+10°C to +40°C',
        communicationRange: 'WiFi Network',
        autonomyLevel: 'Fully Autonomous',
        applications: 'Inventory Management',
        aiCapabilities: 'Path Planning, Coordination',
        safetyFeatures: 'Emergency Stop, Sensors',
        maintenanceSchedule: 'Daily Checks',
        costPerUnit: 15000,
        developmentStatus: 'Commercial',
        commercialAvailability: 'Deployed'
      }
    ],
    automationPlatforms: [
      {
        platformName: 'Universal Robots PolyScope',
        platformId: 'UR-POLYSCOPE-001',
        provider: 'Universal Robots',
        category: 'COLLABORATIVE ROBOT PLATFORM',
        status: 'OPERATIONAL',
        robotsSupported: 750000,
        programmingInterface: 'Graphical',
        deploymentSites: 89000,
        applications: 450,
        integrationPartners: 350,
        supportedLanguages: 25,
        cloudConnectivity: 'UR+',
        realTimeMonitoring: 'Remote Dashboard',
        predictiveMaintenance: 'Enabled',
        safetyStandards: 'ISO 13849',
        programmingTime: '30 minutes average',
        deploymentTime: '1 hour average',
        roiTimeframe: '195 days',
        reliabilityScore: 99.5,
        energyEfficiency: 'Low Power',
        flexibilityRating: 'High',
        userTrainingTime: '1 day',
        supportQuality: 'Excellent',
        updateFrequency: 'Monthly'
      },
      {
        platformName: 'KUKA.Connect',
        platformId: 'KUKA-CONNECT-002',
        provider: 'KUKA Robotics',
        category: 'INDUSTRIAL IOT PLATFORM',
        status: 'OPERATIONAL',
        robotsConnected: 125000,
        dataPointsCollected: 15000000000,
        manufacturingSites: 5600,
        digitalServices: 125,
        analyticsModules: 45,
        predictionAccuracy: 94.7,
        uptimeImprovement: 12.8,
        maintenanceCostReduction: 25.4,
        productivityIncrease: 18.6,
        qualityImprovement: 8.9,
        energySavings: 15.7,
        machinelearningModels: 67,
        edgeComputingNodes: 2500,
        cloudInfrastructure: 'Azure',
        cybersecurityLevel: 'Enterprise',
        dataRetention: '7 years',
        complianceStandards: 'GDPR, ISO 27001',
        customerSatisfaction: 91.3
      },
      {
        platformName: 'Fanuc FIELD System',
        platformId: 'FANUC-FIELD-003',
        provider: 'Fanuc Corporation',
        category: 'FACTORY AUTOMATION PLATFORM',
        status: 'OPERATIONAL',
        connectedDevices: 2500000,
        factoriesMonitored: 12000,
        cnc: 1800000,
        robots: 700000,
        applications: 890,
        edgeComputers: 45000,
        aiModels: 125,
        predictiveAnalytics: 'Advanced',
        processOptimization: 'Real-time',
        qualityControl: 'Automated',
        energyManagement: 'Smart Grid',
        maintenanceScheduling: 'Predictive',
        productionPlanning: 'AI-driven',
        inventoryManagement: 'Just-in-time',
        performanceMonitoring: '24/7',
        anomalyDetection: 'ML-based',
        rootCauseAnalysis: 'Automated',
        digitalTwinCapability: 'Full',
        interoperability: 'Open Standards'
      }
    ],
    roboticApplications: [
      {
        applicationType: 'Industrial Manufacturing',
        applicationId: 'INDUSTRIAL-MFG-001',
        totalRobots: 3456789,
        marketShare: 78.9,
        primaryUses: 'Assembly, Welding, Painting',
        averageRoi: 187,
        productivityGain: 234.7,
        qualityImprovement: 45.8,
        safetyImprovement: 67.9,
        costSavings: 28.4,
        paybackPeriod: 1.8,
        mainIndustries: 'Automotive, Electronics, Metals',
        robotDensity: 126,
        growthRate: 12.4,
        technologicalTrends: 'AI Integration, Collaborative',
        challenges: 'Skills Gap, Integration',
        futureOutlook: 'Strong Growth',
        employmentImpact: 'Job Transformation',
        sustainabilityBenefits: 'Energy Efficiency',
        innovationAreas: 'Vision, ML'
      },
      {
        applicationType: 'Service Robotics',
        applicationId: 'SERVICE-ROBOTICS-002',
        totalRobots: 1234567,
        marketShare: 15.2,
        primaryUses: 'Cleaning, Security, Delivery',
        averageRoi: 145,
        productivityGain: 89.4,
        qualityImprovement: 23.6,
        safetyImprovement: 34.7,
        costSavings: 18.9,
        paybackPeriod: 2.3,
        mainIndustries: 'Hospitality, Retail, Healthcare',
        robotDensity: 12,
        growthRate: 23.7,
        technologicalTrends: 'Autonomous Navigation, AI',
        challenges: 'Human Acceptance, Regulations',
        futureOutlook: 'Rapid Expansion',
        employmentImpact: 'New Service Models',
        sustainabilityBenefits: 'Resource Optimization',
        innovationAreas: 'HRI, Perception'
      },
      {
        applicationType: 'Healthcare Robotics',
        applicationId: 'HEALTHCARE-ROBOTICS-003',
        totalRobots: 89012,
        marketShare: 3.4,
        primaryUses: 'Surgery, Rehabilitation, Care',
        averageRoi: 276,
        productivityGain: 156.8,
        qualityImprovement: 67.9,
        safetyImprovement: 89.4,
        costSavings: 34.7,
        paybackPeriod: 3.2,
        mainIndustries: 'Hospitals, Clinics, Care Facilities',
        robotDensity: 8,
        growthRate: 18.9,
        technologicalTrends: 'Precision Surgery, Telemedicine',
        challenges: 'Regulatory Approval, Cost',
        futureOutlook: 'Promising Growth',
        employmentImpact: 'Skill Enhancement',
        sustainabilityBenefits: 'Reduced Waste',
        innovationAreas: 'Haptics, AI Diagnosis'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        robotsOperational: 2345678,
        tasksCompleted: 4567890,
        systemUptime: 94.8,
        energyConsumed: 125.6,
        maintenanceEvents: 234,
        safetyIncidents: 2,
        errors: 456,
        efficiency: 87.6
      },
      {
        period: 'Last 24 Hours',
        robotsOperational: 2341000,
        tasksCompleted: 109630000,
        systemUptime: 94.3,
        energyConsumed: 3014.4,
        maintenanceEvents: 5678,
        safetyIncidents: 45,
        errors: 10890,
        efficiency: 86.9
      },
      {
        period: 'Last 7 Days',
        robotsOperational: 2338000,
        tasksCompleted: 767410000,
        systemUptime: 93.8,
        energyConsumed: 21100.8,
        maintenanceEvents: 39750,
        safetyIncidents: 312,
        errors: 76230,
        efficiency: 86.2
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoboticsData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        roboticsOverview: {
          ...prev.roboticsOverview,
          operationalUptime: Math.max(90.0, Math.min(99.0, prev.roboticsOverview.operationalUptime + (Math.random() - 0.5) * 1.0)),
          automationEfficiency: Math.max(80.0, Math.min(95.0, prev.roboticsOverview.automationEfficiency + (Math.random() - 0.5) * 0.5))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'DEVELOPMENT': return 'text-blue-400 bg-blue-400/20';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20';
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
  const formatCurrency = (amount) => `$${formatNumber(amount)}`;
  const formatMWh = (mwh) => `${mwh.toFixed(1)} MWh`;
  const formatMeters = (m) => `${m.toFixed(2)}m`;
  const formatKg = (kg) => `${kg}kg`;

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Robotics Automation Technology & Control Systems Intelligence Center</h1>
              <p className="text-slate-300">Robotics & automation analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-slate-400">{roboticsData.currentTime}</div>
            <div className="text-slate-300">Robotics Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Robotics Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Bot className="w-5 h-5 text-orange-400 mr-2" />
                Robots
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(roboticsData.roboticsOverview.roboticSystems)}</div>
            <div className="text-orange-300 text-sm">{formatNumber(roboticsData.roboticsOverview.industrialRobots)} Industrial</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Settings className="w-5 h-5 text-blue-400 mr-2" />
                Platforms
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(roboticsData.roboticsOverview.automationPlatforms)}</div>
            <div className="text-blue-300 text-sm">{formatNumber(roboticsData.roboticsOverview.serviceRobots)} Service</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Uptime
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(roboticsData.roboticsOverview.operationalUptime)}</div>
            <div className="text-green-300 text-sm">Operational</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Gauge className="w-5 h-5 text-yellow-400 mr-2" />
                Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(roboticsData.roboticsOverview.automationEfficiency)}</div>
            <div className="text-yellow-300 text-sm">Automation</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-purple-400 mr-2" />
                Accuracy
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(roboticsData.roboticsOverview.roboticAccuracy)}</div>
            <div className="text-purple-300 text-sm">Precision</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                Productivity
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">+{formatPercentage(roboticsData.roboticsOverview.productivityGain)}</div>
            <div className="text-cyan-300 text-sm">Gain</div>
          </div>
        </div>

        {/* Robotic Systems & Automation Platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Bot className="w-5 h-5 text-orange-400 mr-2" />
              Robotic Systems
            </h3>
            <div className="space-y-4">
              {roboticsData.roboticSystems.map((system, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{system.systemName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(system.status)}`}>
                        {system.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{system.location}</div>
                    <div className="text-blue-400">{system.systemType}</div>
                    <div className="text-green-400">Units: {formatNumber(system.unitsDeployed)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">
                      {system.height && `Height: ${formatMeters(system.height)}`}
                      {system.reach && `Reach: ${formatMeters(system.reach)}`}
                      {system.dimensions && `Size: ${system.dimensions}`}
                    </div>
                    <div className="text-purple-400">
                      Weight: {formatKg(system.weight)}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Battery Life</span>
                      <span>
                        {system.batteryLife && `${system.batteryLife.toFixed(1)}h`}
                        {!system.batteryLife && 'Mains Power'}
                      </span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-orange-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${system.batteryLife ? (system.batteryLife / 16) * 100 : 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      Mobility: {system.mobility}
                    </div>
                    <div className="text-indigo-400">
                      Dexterity: {system.dexterity}
                    </div>
                    <div className="text-cyan-400">
                      Sensors: {system.sensors}
                    </div>
                    <div className="text-green-400">
                      Applications: {system.applications}
                    </div>
                    <div className="text-blue-400">
                      Cost: {formatCurrency(system.costPerUnit)}
                    </div>
                    <div className="text-orange-400">
                      Status: {system.developmentStatus}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cpu className="w-5 h-5 text-blue-400 mr-2" />
              Automation Platforms
            </h3>
            <div className="space-y-4">
              {roboticsData.automationPlatforms.map((platform, index) => (
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
                    <div className="text-cyan-400">{platform.provider}</div>
                    <div className="text-blue-400">{platform.category}</div>
                    <div className="text-green-400">{platform.platformId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">
                      {platform.robotsSupported && `Robots: ${formatNumber(platform.robotsSupported)}`}
                      {platform.robotsConnected && `Connected: ${formatNumber(platform.robotsConnected)}`}
                      {platform.connectedDevices && `Devices: ${formatNumber(platform.connectedDevices)}`}
                    </div>
                    <div className="text-purple-400">
                      {platform.deploymentSites && `Sites: ${formatNumber(platform.deploymentSites)}`}
                      {platform.manufacturingSites && `Sites: ${formatNumber(platform.manufacturingSites)}`}
                      {platform.factoriesMonitored && `Factories: ${formatNumber(platform.factoriesMonitored)}`}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Reliability</span>
                      <span>
                        {platform.reliabilityScore && formatPercentage(platform.reliabilityScore)}
                        {platform.customerSatisfaction && formatPercentage(platform.customerSatisfaction)}
                        {!platform.reliabilityScore && !platform.customerSatisfaction && '99.0%'}
                      </span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-blue-400 h-1 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${
                            platform.reliabilityScore || 
                            platform.customerSatisfaction || 
                            99
                          }%` 
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {platform.programmingInterface && `Interface: ${platform.programmingInterface}`}
                      {platform.predictiveMaintenance && `Maintenance: ${platform.predictiveMaintenance}`}
                      {platform.predictiveAnalytics && `Analytics: ${platform.predictiveAnalytics}`}
                    </div>
                    <div className="text-indigo-400">
                      {platform.roiTimeframe && `ROI: ${platform.roiTimeframe}`}
                      {platform.uptimeImprovement && `Uptime: +${formatPercentage(platform.uptimeImprovement)}`}
                      {platform.productivityIncrease && `Productivity: +${formatPercentage(platform.productivityIncrease)}`}
                    </div>
                    <div className="text-cyan-400">
                      {platform.programmingTime && `Programming: ${platform.programmingTime}`}
                      {platform.predictionAccuracy && `Accuracy: ${formatPercentage(platform.predictionAccuracy)}`}
                      {platform.aiModels && `AI Models: ${platform.aiModels}`}
                    </div>
                    <div className="text-green-400">
                      {platform.safetyStandards && `Safety: ${platform.safetyStandards}`}
                      {platform.maintenanceCostReduction && `Cost Reduction: ${formatPercentage(platform.maintenanceCostReduction)}`}
                      {platform.energySavings && `Energy Savings: ${formatPercentage(platform.energySavings)}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Robotic Applications */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Globe className="w-5 h-5 text-purple-400 mr-2" />
            Robotic Application Domains
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {roboticsData.roboticApplications.map((application, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{application.applicationType}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Robots: {formatNumber(application.totalRobots)}</div>
                  <div className="text-blue-400">Share: {formatPercentage(application.marketShare)}</div>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>ROI</span>
                    <span>{application.averageRoi}%</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-1">
                    <div 
                      className="bg-purple-400 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(application.averageRoi / 3, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-slate-300">
                    Uses: {application.primaryUses}
                  </div>
                  <div className="text-indigo-400">
                    Industries: {application.mainIndustries}
                  </div>
                  <div className="text-cyan-400">
                    Productivity: +{formatPercentage(application.productivityGain)}
                  </div>
                  <div className="text-green-400">
                    Quality: +{formatPercentage(application.qualityImprovement)}
                  </div>
                  <div className="text-blue-400">
                    Safety: +{formatPercentage(application.safetyImprovement)}
                  </div>
                  <div className="text-orange-400">
                    Growth: +{formatPercentage(application.growthRate)}/year
                  </div>
                  <div className="text-yellow-400">
                    Payback: {application.paybackPeriod} years
                  </div>
                  <div className="text-pink-400">
                    Trends: {application.technologicalTrends}
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
            Robotics Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {roboticsData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Operational: {formatNumber(metrics.robotsOperational)}</div>
                  <div className="text-green-400">Tasks: {formatNumber(metrics.tasksCompleted)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Uptime: {formatPercentage(metrics.systemUptime)}</div>
                  <div className="text-yellow-400">Efficiency: {formatPercentage(metrics.efficiency)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Energy: {formatMWh(metrics.energyConsumed)}</div>
                  <div className="text-orange-400">Maintenance: {formatNumber(metrics.maintenanceEvents)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Errors: {formatNumber(metrics.errors)}</div>
                  <div className="text-pink-400">Safety: {metrics.safetyIncidents}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}