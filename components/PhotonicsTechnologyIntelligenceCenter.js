// Photonics Technology Intelligence Center - Optical Systems & Laser Analytics
import { useState, useEffect } from 'react';
import { Zap, Eye, Activity, BarChart3, Settings, Lock, AlertTriangle, TrendingUp, Radio, Layers, Sun } from 'lucide-react';

export default function PhotonicsTechnologyIntelligenceCenter() {
  const [photonicsData, setPhotonicsData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    photonicsOverview: {
      opticalSystems: 15678,
      laserSources: 23456,
      photonicDevices: 45789,
      fiberOpticNetworks: 12345,
      opticalManufacturing: 2345,
      lidarSystems: 8901,
      globalCoverage: 91.7,
      systemEfficiency: 94.2,
      powerOutput: 125000,
      wavelengthRange: 1550,
      beamQuality: 1.05,
      opticalLoss: 0.2,
      laserUptime: 97.8,
      fiberIntegrity: 99.1,
      quantumEfficiency: 87.6,
      opticalAmplifiers: 34567,
      photonicChips: 67890,
      holographicSystems: 5432,
      plasmonicDevices: 3456,
      metamaterials: 2109
    },
    laserSystems: [
      {
        systemName: 'TRUMPF TruLaser 5030',
        systemId: 'TRUMPF-TL5030-001',
        location: 'Stuttgart, Germany',
        manufacturer: 'TRUMPF Laser Technology',
        status: 'OPERATIONAL',
        laserType: 'FIBER LASER',
        powerOutput: 8000,
        wavelength: 1070,
        beamQuality: 1.05,
        efficiency: 35.2,
        uptime: 97.8,
        pulseFrequency: 50000,
        cuttingSpeed: 45,
        materialThickness: 25,
        coolingSystem: 'WATER COOLED',
        beamDelivery: 'FIBER OPTIC',
        focusSpotSize: 0.1,
        powerStability: 99.5,
        maintenanceHours: 156,
        operatingHours: 8567,
        safetyClass: 'CLASS 4',
        applicationArea: 'INDUSTRIAL CUTTING'
      },
      {
        systemName: 'IPG YLR-10000',
        systemId: 'IPG-YLR10K-002',
        location: 'Oxford, Massachusetts',
        manufacturer: 'IPG Photonics',
        status: 'OPERATIONAL',
        laserType: 'YTTERBIUM FIBER',
        powerOutput: 10000,
        wavelength: 1070,
        beamQuality: 1.08,
        efficiency: 40.1,
        uptime: 98.2,
        pulseFrequency: 25000,
        cuttingSpeed: 52,
        materialThickness: 30,
        coolingSystem: 'AIR COOLED',
        beamDelivery: 'SINGLE MODE FIBER',
        focusSpotSize: 0.08,
        powerStability: 99.7,
        maintenanceHours: 120,
        operatingHours: 9234,
        safetyClass: 'CLASS 4',
        applicationArea: 'AEROSPACE WELDING'
      },
      {
        systemName: 'Coherent Monaco 1035',
        systemId: 'COH-MON1035-003',
        location: 'Santa Clara, California',
        manufacturer: 'Coherent Corp',
        status: 'MAINTENANCE',
        laserType: 'ULTRAFAST FEMTOSECOND',
        powerOutput: 35,
        wavelength: 1035,
        beamQuality: 1.02,
        efficiency: 25.8,
        uptime: 0.0,
        pulseFrequency: 200000,
        cuttingSpeed: 0,
        materialThickness: 0,
        coolingSystem: 'CHILLED WATER',
        beamDelivery: 'GALVANOMETER',
        focusSpotSize: 0.02,
        powerStability: 0.0,
        maintenanceHours: 48,
        operatingHours: 6789,
        safetyClass: 'CLASS 4',
        applicationArea: 'PRECISION MICROMACHINING'
      },
      {
        systemName: 'Lumentum ROADMλ',
        systemId: 'LUM-ROADM-004',
        location: 'San Jose, California',
        manufacturer: 'Lumentum Operations',
        status: 'OPERATIONAL',
        laserType: 'TUNABLE LASER',
        powerOutput: 0.02,
        wavelength: 1550,
        beamQuality: 1.0,
        efficiency: 15.6,
        uptime: 99.9,
        pulseFrequency: 0,
        cuttingSpeed: 0,
        materialThickness: 0,
        coolingSystem: 'THERMOELECTRIC',
        beamDelivery: 'SILICON PHOTONIC',
        focusSpotSize: 0.001,
        powerStability: 99.99,
        maintenanceHours: 8760,
        operatingHours: 35040,
        safetyClass: 'CLASS 1',
        applicationArea: 'OPTICAL NETWORKING'
      }
    ],
    photonicApplications: [
      {
        applicationName: 'Autonomous Vehicle LiDAR',
        applicationId: 'LIDAR-AV-SOLID-001',
        developer: 'Velodyne Lidar Inc',
        technology: 'SOLID STATE LIDAR',
        status: 'PRODUCTION',
        wavelength: 905,
        range: 300,
        resolution: 0.1,
        scanRate: 20,
        powerConsumption: 8,
        detectionAccuracy: 99.7,
        environmentalRating: 'IP67',
        operatingTemperature: '-40 to 85°C',
        beamDivergence: 0.18,
        fieldOfView: 360,
        pointCloudDensity: 2300000,
        marketSegment: 'AUTOMOTIVE',
        safetyStandard: 'ISO 26262',
        productionVolume: 125000,
        unitCost: 4500,
        competitiveAdvantage: 'COST EFFECTIVE',
        customerBase: 'OEM AUTOMOTIVE'
      },
      {
        applicationName: 'Data Center Interconnect',
        applicationId: 'DCI-COHERENT-400G-001',
        developer: 'Infinera Corporation',
        technology: 'COHERENT OPTICAL',
        status: 'OPERATIONAL',
        wavelength: 1550,
        dataRate: 400,
        reachDistance: 2000,
        spectralEfficiency: 6.4,
        powerConsumption: 245,
        transmissionQuality: 99.99,
        errorCorrection: 'HARD DECISION FEC',
        modulation: 'DP-16QAM',
        amplification: 'EDFA',
        fiberType: 'SSMF',
        dispersionTolerance: 34000,
        marketSegment: 'TELECOMMUNICATIONS',
        deploymentScale: 'HYPERSCALE',
        operationalSavings: '35% CAPEX',
        networkReliability: 99.999,
        customerBase: 'CLOUD PROVIDERS'
      },
      {
        applicationName: 'Medical Laser Surgery',
        applicationId: 'MED-FEMTO-CATARACT-001',
        developer: 'Alcon Laboratories',
        technology: 'FEMTOSECOND LASER',
        status: 'CLINICAL',
        wavelength: 1030,
        pulseDuration: 350,
        pulseEnergy: 2.5,
        spotSize: 3,
        powerConsumption: 1200,
        surgicalPrecision: 99.8,
        treatmentTime: 15,
        complicationRate: 0.1,
        visualOutcome: 95.6,
        patientSafety: 'CLASS A',
        fDAApproval: 'FDA CLEARED',
        marketSegment: 'OPHTHALMOLOGY',
        proceduralVolume: 25000000,
        reimbursement: 'COVERED',
        competitiveAdvantage: 'MINIMAL INVASIVE',
        globalAdoption: 'WIDESPREAD'
      }
    ],
    opticalNetworks: [
      {
        networkName: 'Trans-Atlantic Cable TAT-14',
        networkId: 'TAT14-SUBSEA-001',
        operator: 'Consortium Partners',
        cableType: 'SUBMARINE FIBER',
        status: 'OPERATIONAL',
        totalLength: 15428,
        fiberPairs: 4,
        capacity: 40,
        wavelengthChannels: 160,
        amplifierSpacing: 50,
        repeatersCount: 308,
        landingPoints: 'USA-FRANCE-UK',
        transmissionTechnology: 'DWDM',
        errorCorrection: 'RAMAN + EDFA',
        designLife: 25,
        currentUtilization: 78.3,
        availabilityTarget: 99.9,
        latencyMs: 67.2,
        maintenanceWindow: 'ANNUAL',
        redundancy: 'DUAL PATH',
        securityEncryption: 'AES-256'
      },
      {
        networkName: 'Google Fiber Network',
        networkId: 'GOOG-FIBER-METRO-001',
        operator: 'Google LLC',
        cableType: 'METROPOLITAN FIBER',
        status: 'OPERATIONAL',
        totalLength: 12500,
        fiberPairs: 144,
        capacity: 400,
        wavelengthChannels: 96,
        amplifierSpacing: 80,
        repeatersCount: 0,
        landingPoints: 'MULTI-CITY',
        transmissionTechnology: 'COHERENT 400G',
        errorCorrection: 'SD-FEC',
        designLife: 20,
        currentUtilization: 34.7,
        availabilityTarget: 99.99,
        latencyMs: 12.5,
        maintenanceWindow: 'QUARTERLY',
        redundancy: 'RING TOPOLOGY',
        securityEncryption: 'QUANTUM SAFE'
      }
    ],
    photonicResearch: [
      {
        researchProject: 'Silicon Photonics Integration',
        projectId: 'SI-PHOT-CMOS-001',
        institution: 'MIT Photonic Systems Group',
        principalInvestigator: 'Prof. Rajeev Ram',
        status: 'ACTIVE',
        fundingAgency: 'DARPA, NSF',
        budgetMillion: 12.5,
        timeline: '2023-2026',
        researchGoal: 'CMOS PHOTONIC INTEGRATION',
        approach: 'SILICON ON INSULATOR',
        performanceTarget: '1TB/S',
        powerEfficiency: '10PJ/BIT',
        currentProgress: 68,
        majorMilestone: 'MONOLITHIC INTEGRATION',
        recentBreakthrough: 'ZERO-CHANGE CMOS',
        collaborations: 'INTEL, GLOBALFOUNDRIES',
        publications: 42,
        patents: 18,
        phDStudents: 14,
        postDocs: 6,
        industryPartners: 'CISCO, BROADCOM',
        nextPhase: 'MANUFACTURING PILOT'
      },
      {
        researchProject: 'Quantum Photonic Networks',
        projectId: 'QPHOT-NETWORK-001',
        institution: 'University of Vienna',
        principalInvestigator: 'Prof. Anton Zeilinger',
        status: 'ACTIVE',
        fundingAgency: 'EU QUANTUM, FWF',
        budgetMillion: 18.3,
        timeline: '2024-2027',
        researchGoal: 'QUANTUM INTERNET',
        approach: 'PHOTONIC ENTANGLEMENT',
        performanceTarget: 'GLOBAL NETWORK',
        powerEfficiency: 'SINGLE PHOTON',
        currentProgress: 75,
        majorMilestone: 'INTERCITY DEMONSTRATION',
        recentBreakthrough: '1000KM ENTANGLEMENT',
        collaborations: 'DELFT, HARVARD',
        publications: 67,
        patents: 23,
        phDStudents: 18,
        postDocs: 9,
        industryPartners: 'IBM, GOOGLE',
        nextPhase: 'CONTINENTAL NETWORK'
      }
    ],
    photonicsAlerts: [
      {
        type: 'CRITICAL',
        category: 'Laser System Failure',
        message: 'High power fiber laser experiencing thermal runaway - Emergency shutdown activated',
        system: 'TRUMPF TruLaser 5030 Line 3',
        location: 'Stuttgart Manufacturing',
        failureMode: 'THERMAL OVERLOAD',
        powerLevel: 8500,
        temperatureCelsius: 95,
        impact: 'PRODUCTION LINE HALT',
        severity: 'HIGH',
        timestamp: '13:12',
        detectedBy: 'Thermal Protection System',
        recommendation: 'Immediate cooling system inspection, replace thermal sensors',
        safetyStatus: 'LASER INTERLOCK ACTIVE',
        estimatedDowntime: '4 HOURS',
        productionLoss: '$45,000',
        rootCauseAnalysis: 'COOLING PUMP FAILURE',
        preventiveMeasures: 'REDUNDANT COOLING',
        operatorSafety: 'EVACUATED',
        maintenanceTeam: 'DISPATCHED',
        spareParts: 'IN STOCK'
      },
      {
        type: 'HIGH',
        category: 'Optical Signal Degradation',
        message: 'Fiber optic link showing 15% signal attenuation increase',
        system: 'Trans-Atlantic TAT-14 Segment 45',
        location: 'Mid-Atlantic Deep Sea',
        failureMode: 'FIBER BEND LOSS',
        powerLevel: -12,
        attenuationDb: 3.2,
        impact: 'REDUCED CAPACITY',
        severity: 'MODERATE',
        timestamp: '12:55',
        detectedBy: 'OTDR Monitoring',
        recommendation: 'Schedule cable inspection, possible repair ship deployment',
        signalQuality: 'DEGRADED',
        estimatedDowntime: 'NONE',
        capacityReduction: '15%',
        rootCauseAnalysis: 'CABLE STRESS',
        preventiveMeasures: 'ROUTE OPTIMIZATION',
        redundancyStatus: 'BACKUP ACTIVE',
        customerImpact: 'MINIMAL',
        repairWindow: '30 DAYS'
      },
      {
        type: 'MEDIUM',
        category: 'LiDAR Calibration Drift',
        message: 'Autonomous vehicle LiDAR showing 2-degree angular drift',
        system: 'Velodyne VLS-128 Fleet Vehicle',
        location: 'Phoenix Test Track',
        failureMode: 'GYROSCOPE DRIFT',
        powerLevel: 8.2,
        angularError: 2.1,
        impact: 'REDUCED ACCURACY',
        severity: 'LOW',
        timestamp: '11:30',
        detectedBy: 'Self-Calibration Algorithm',
        recommendation: 'Recalibration cycle, IMU inspection',
        detectionRange: 'UNAFFECTED',
        estimatedDowntime: '15 MINUTES',
        safetyImpact: 'NONE',
        rootCauseAnalysis: 'TEMPERATURE VARIATION',
        preventiveMeasures: 'THERMAL COMPENSATION',
        vehicleStatus: 'OPERATIONAL',
        automationLevel: 'LEVEL 3',
        softwareUpdate: 'AVAILABLE'
      },
      {
        type: 'INFO',
        category: 'Research Breakthrough',
        message: 'Zero-change CMOS photonic integration achieved',
        system: 'MIT Silicon Photonics Lab',
        location: 'Cambridge, Massachusetts',
        achievement: 'MONOLITHIC INTEGRATION',
        bandwidthTbps: 1.0,
        powerEfficiency: 8.5,
        significance: 'INDUSTRY MILESTONE',
        timestamp: '09:45',
        detectedBy: 'Performance Characterization',
        commercialImpact: 'DATACENTER REVOLUTION',
        technologyReadiness: 'TRL 6',
        industryInterest: 'EXTREMELY HIGH',
        publicationStatus: 'NATURE PHOTONICS',
        patentFiling: '5 PATENTS SUBMITTED',
        fundingIncrease: '$25M ADDITIONAL',
        collaborationRequests: '15 COMPANIES',
        timeToMarket: '3-5 YEARS',
        marketPotential: '$50B ANNUALLY'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        systemsOperational: 15678,
        totalPowerOutput: 125000,
        averageEfficiency: 94.2,
        systemUptime: 97.8,
        signalQuality: 99.1,
        opticalLoss: 0.2,
        maintenanceEvents: 3,
        energyConsumption: 2340
      },
      {
        period: 'Last 24 Hours',
        systemsOperational: 15567,
        totalPowerOutput: 2890000,
        averageEfficiency: 93.8,
        systemUptime: 97.4,
        signalQuality: 98.9,
        opticalLoss: 0.21,
        maintenanceEvents: 45,
        energyConsumption: 54600
      },
      {
        period: 'Last 7 Days',
        systemsOperational: 15234,
        totalPowerOutput: 19670000,
        averageEfficiency: 93.2,
        systemUptime: 96.9,
        signalQuality: 98.6,
        opticalLoss: 0.23,
        maintenanceEvents: 234,
        energyConsumption: 367800
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotonicsData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        photonicsOverview: {
          ...prev.photonicsOverview,
          systemEfficiency: Math.max(90.0, Math.min(96.0, prev.photonicsOverview.systemEfficiency + (Math.random() - 0.5) * 1.0)),
          opticalLoss: Math.max(0.15, Math.min(0.30, prev.photonicsOverview.opticalLoss + (Math.random() - 0.5) * 0.02))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20';
      case 'OFFLINE': return 'text-red-400 bg-red-400/20';
      case 'PRODUCTION': return 'text-green-400 bg-green-400/20';
      case 'CLINICAL': return 'text-blue-400 bg-blue-400/20';
      case 'ACTIVE': return 'text-green-400 bg-green-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'MEDIUM': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-green-500 bg-green-900/30 text-green-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
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
  const formatPower = (power) => `${formatNumber(power)}W`;
  const formatWavelength = (wl) => `${wl}nm`;

  return (
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Photonics Technology Intelligence Center</h1>
              <p className="text-blue-300">Optical systems & laser analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{photonicsData.currentTime}</div>
            <div className="text-blue-300">Photonics Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Photonics Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-blue-400 mr-2" />
                Systems
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(photonicsData.photonicsOverview.opticalSystems)}</div>
            <div className="text-blue-300 text-sm">{formatNumber(photonicsData.photonicsOverview.laserSources)} Lasers</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Power
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(photonicsData.photonicsOverview.powerOutput/1000)}</div>
            <div className="text-yellow-300 text-sm">kW Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(photonicsData.photonicsOverview.systemEfficiency)}</div>
            <div className="text-green-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Sun className="w-5 h-5 text-orange-400 mr-2" />
                Wavelength
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatWavelength(photonicsData.photonicsOverview.wavelengthRange)}</div>
            <div className="text-orange-300 text-sm">Primary</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Radio className="w-5 h-5 text-purple-400 mr-2" />
                Loss
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{photonicsData.photonicsOverview.opticalLoss.toFixed(2)}</div>
            <div className="text-purple-300 text-sm">dB/km</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Layers className="w-5 h-5 text-cyan-400 mr-2" />
                Uptime
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(photonicsData.photonicsOverview.laserUptime)}</div>
            <div className="text-cyan-300 text-sm">Laser</div>
          </div>
        </div>

        {/* Laser Systems & Photonic Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              Laser Systems
            </h3>
            <div className="space-y-4">
              {photonicsData.laserSystems.map((laser, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{laser.systemName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(laser.status)}`}>
                        {laser.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{laser.location}</div>
                    <div className="text-blue-400">{laser.manufacturer}</div>
                    <div className="text-green-400">{laser.systemId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Type: {laser.laserType}</div>
                    <div className="text-purple-400">Power: {formatPower(laser.powerOutput)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">λ: {formatWavelength(laser.wavelength)}</div>
                    <div className="text-pink-400">M²: {laser.beamQuality}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Uptime</span>
                      <span>{formatPercentage(laser.uptime)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-blue-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${laser.uptime}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Efficiency: {formatPercentage(laser.efficiency)}</div>
                    <div className="text-indigo-400">Stability: {formatPercentage(laser.powerStability)}</div>
                    <div className="text-cyan-400">Hours: {formatNumber(laser.operatingHours)}</div>
                    <div className="text-green-400">Application: {laser.applicationArea}</div>
                    <div className="text-blue-400">Safety: {laser.safetyClass}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-cyan-400 mr-2" />
              Photonic Applications
            </h3>
            <div className="space-y-4">
              {photonicsData.photonicApplications.map((app, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{app.applicationName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{app.developer}</div>
                    <div className="text-blue-400">{app.technology}</div>
                    <div className="text-green-400">{app.applicationId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">λ: {formatWavelength(app.wavelength)}</div>
                    <div className="text-purple-400">
                      {app.range && `Range: ${app.range}m`}
                      {app.dataRate && `Rate: ${app.dataRate}Gbps`}
                      {app.pulseDuration && `Pulse: ${app.pulseDuration}fs`}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">
                      {app.detectionAccuracy && `Accuracy: ${formatPercentage(app.detectionAccuracy)}`}
                      {app.transmissionQuality && `Quality: ${formatPercentage(app.transmissionQuality)}`}
                      {app.surgicalPrecision && `Precision: ${formatPercentage(app.surgicalPrecision)}`}
                    </div>
                    <div className="text-pink-400">Power: {formatPower(app.powerConsumption)}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Market: {app.marketSegment}</div>
                    <div className="text-indigo-400">
                      {app.environmentalRating && `Rating: ${app.environmentalRating}`}
                      {app.errorCorrection && `FEC: ${app.errorCorrection}`}
                      {app.fDAApproval && `Approval: ${app.fDAApproval}`}
                    </div>
                    <div className="text-cyan-400">
                      {app.productionVolume && `Volume: ${formatNumber(app.productionVolume)}`}
                      {app.operationalSavings && `Savings: ${app.operationalSavings}`}
                      {app.proceduralVolume && `Procedures: ${formatNumber(app.proceduralVolume)}`}
                    </div>
                    <div className="text-green-400">Advantage: {app.competitiveAdvantage}</div>
                    <div className="text-blue-400">Customer: {app.customerBase}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optical Networks & Research */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Radio className="w-5 h-5 text-purple-400 mr-2" />
              Optical Networks
            </h3>
            <div className="space-y-4">
              {photonicsData.opticalNetworks.map((network, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{network.networkName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(network.status)}`}>
                        {network.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{network.operator}</div>
                    <div className="text-blue-400">{network.cableType}</div>
                    <div className="text-green-400">{network.networkId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Length: {formatNumber(network.totalLength)}km</div>
                    <div className="text-purple-400">Capacity: {formatNumber(network.capacity)}Tbps</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Channels: {network.wavelengthChannels}</div>
                    <div className="text-pink-400">Latency: {network.latencyMs}ms</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Utilization</span>
                      <span>{formatPercentage(network.currentUtilization)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-purple-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${network.currentUtilization}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Technology: {network.transmissionTechnology}</div>
                    <div className="text-indigo-400">Points: {network.landingPoints}</div>
                    <div className="text-cyan-400">Target: {formatPercentage(network.availabilityTarget)}</div>
                    <div className="text-green-400">Redundancy: {network.redundancy}</div>
                    <div className="text-blue-400">Security: {network.securityEncryption}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-green-400 mr-2" />
              Photonics Research Programs
            </h3>
            <div className="space-y-4">
              {photonicsData.photonicResearch.map((research, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{research.researchProject}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(research.status)}`}>
                        {research.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{research.institution}</div>
                    <div className="text-blue-400">{research.principalInvestigator}</div>
                    <div className="text-green-400">{research.projectId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Budget: ${research.budgetMillion}M</div>
                    <div className="text-purple-400">Timeline: {research.timeline}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Progress</span>
                      <span>{formatPercentage(research.currentProgress)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-green-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${research.currentProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Goal: {research.researchGoal}</div>
                    <div className="text-indigo-400">Approach: {research.approach}</div>
                    <div className="text-cyan-400">Target: {research.performanceTarget}</div>
                    <div className="text-green-400">Milestone: {research.majorMilestone}</div>
                    <div className="text-blue-400">Publications: {research.publications}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
            Photonics Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {photonicsData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Systems: {formatNumber(metrics.systemsOperational)}</div>
                  <div className="text-green-400">Power: {formatPower(metrics.totalPowerOutput)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Efficiency: {formatPercentage(metrics.averageEfficiency)}</div>
                  <div className="text-yellow-400">Uptime: {formatPercentage(metrics.systemUptime)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Signal: {formatPercentage(metrics.signalQuality)}</div>
                  <div className="text-orange-400">Loss: {metrics.opticalLoss.toFixed(2)} dB/km</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Events: {metrics.maintenanceEvents}</div>
                  <div className="text-pink-400">Energy: {formatNumber(metrics.energyConsumption)}kWh</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photonics Technology Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Photonics Technology System Alerts
          </h3>
          <div className="space-y-4">
            {photonicsData.photonicsAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                
                <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                  {alert.system && <div className="text-slate-300">System: {alert.system}</div>}
                  {alert.location && <div className="text-cyan-400">Location: {alert.location}</div>}
                  {alert.failureMode && <div className="text-orange-400">Mode: {alert.failureMode}</div>}
                  {alert.powerLevel && <div className="text-red-400">Power: {alert.powerLevel}W</div>}
                  {alert.temperatureCelsius && <div className="text-purple-400">Temp: {alert.temperatureCelsius}°C</div>}
                  {alert.angularError && <div className="text-yellow-400">Error: {alert.angularError}°</div>}
                  {alert.achievement && <div className="text-green-400">Achievement: {alert.achievement}</div>}
                  {alert.bandwidthTbps && <div className="text-blue-400">Bandwidth: {alert.bandwidthTbps}Tbps</div>}
                </div>
                
                <div className="text-slate-300 text-xs mb-2">
                  <strong>Impact:</strong> {alert.impact || alert.commercialImpact}
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