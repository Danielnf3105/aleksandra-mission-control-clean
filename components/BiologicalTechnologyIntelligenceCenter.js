// Biological Technology Intelligence Center - Life Sciences & Ecosystem Analytics
import { useState, useEffect } from 'react';
import { Leaf, Dna, TreePine, Heart, Eye, Activity, BarChart3, Settings, Lock, AlertTriangle, TrendingUp, Globe, Microscope } from 'lucide-react';

export default function BiologicalTechnologyIntelligenceCenter() {
  const [biologicalData, setBiologicalData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    biologicalOverview: {
      ecosystemMonitors: 45623,
      operationalMonitors: 44187,
      biodiversityStations: 12567,
      researchProjects: 2345,
      activeSpeciesTracking: 1234567,
      conservationPrograms: 567,
      biotechFacilities: 234,
      globalCoverage: 92.4,
      dataAccuracy: 97.3,
      activeAlerts: 23,
      climateMitigation: 456,
      habitatRestoration: 789,
      speciesReintroduction: 145,
      pollutionMonitoring: 678,
      geneticSequencing: 12345,
      microbiomeStudies: 3456,
      marineProtectedAreas: 234,
      forestConservation: 567
    },
    ecosystemMonitoring: [
      {
        ecosystemName: 'Amazon Rainforest',
        ecosystemId: 'AMZ-BR-2026',
        location: 'Brazil, South America',
        coordinates: '3.4653°S, 62.2159°W',
        areaSize: 5500000,
        status: 'CRITICAL',
        deforestationRate: 11500,
        biomassLoss: 23.7,
        speciesDiversity: 427000,
        endemicSpecies: 156000,
        carbonStorage: 120000000000,
        oxygenProduction: 20,
        precipitationCycle: 'DISRUPTED',
        temperatureAnomaly: 2.8,
        humanImpact: 'SEVERE',
        conservationEfforts: 'ENHANCED',
        illegalLogging: 'DETECTED',
        fireHotspots: 3456,
        tribalLands: 'PROTECTED',
        wildlifeMigration: 'AFFECTED',
        soilDegradation: 'ACCELERATING',
        waterQuality: 'DECLINING',
        biodiversityTrend: 'DECREASING',
        threatLevel: 'EXTREME'
      },
      {
        ecosystemName: 'Great Barrier Reef',
        ecosystemId: 'GBR-AU-2026',
        location: 'Queensland, Australia',
        coordinates: '18.2871°S, 147.6992°E',
        areaSize: 348000,
        status: 'DEGRADED',
        bleachingExtent: 67.4,
        coralCoverage: 23.8,
        speciesDiversity: 65000,
        endemicSpecies: 1625,
        carbonSequestration: 45000000,
        touristVisitation: 2400000,
        waterTemperature: 28.7,
        acidityLevel: 7.9,
        crownOfThorns: 'OUTBREAK',
        pollutionLevel: 'MODERATE',
        overfishing: 'REGULATED',
        coastalDevelopment: 'LIMITED',
        climateImpact: 'SEVERE',
        restorationEfforts: 'ACTIVE',
        marineParks: 'ESTABLISHED',
        biodiversityTrend: 'STABILIZING',
        threatLevel: 'HIGH'
      },
      {
        ecosystemName: 'Yellowstone National Park',
        ecosystemId: 'YNP-US-2026',
        location: 'Wyoming, USA',
        coordinates: '44.4280°N, 110.5885°W',
        areaSize: 8983,
        status: 'STABLE',
        wolfPopulation: 456,
        bisonPopulation: 4567,
        speciesDiversity: 1350,
        endemicSpecies: 67,
        forestCoverage: 80.2,
        geothermalFeatures: 10000,
        visitorImpact: 'MANAGED',
        wildfireRisk: 'MODERATE',
        invasiveSpecies: 'CONTROLLED',
        habitatFragmentation: 'MINIMAL',
        predatorPreyBalance: 'RESTORED',
        migrationCorridors: 'PROTECTED',
        airQuality: 'EXCELLENT',
        waterQuality: 'PRISTINE',
        biodiversityTrend: 'INCREASING',
        threatLevel: 'LOW'
      },
      {
        ecosystemName: 'Congo Basin',
        ecosystemId: 'CB-AF-2026',
        location: 'Central Africa',
        coordinates: '0.2280°N, 15.8277°E',
        areaSize: 3700000,
        status: 'THREATENED',
        deforestationRate: 7800,
        gorillPopulation: 125000,
        speciesDiversity: 75000,
        endemicSpecies: 8000,
        carbonStorage: 8000000000,
        localCommunities: 75000000,
        miningImpact: 'SIGNIFICANT',
        poaching: 'MONITORED',
        roadConstruction: 'EXPANDING',
        agriculturalPressure: 'INCREASING',
        conservationFunding: '$234M',
        antiPoachingEfforts: 'ACTIVE',
        sustainableLivelihoods: 'DEVELOPING',
        biodiversityTrend: 'DECLINING',
        threatLevel: 'HIGH'
      }
    ],
    speciesConservation: [
      {
        speciesName: 'Amur Leopard',
        scientificName: 'Panthera pardus orientalis',
        speciesId: 'PP-OR-2026',
        conservationStatus: 'CRITICALLY ENDANGERED',
        population: 156,
        trend: 'INCREASING',
        habitat: 'Russian Far East, China',
        primaryThreats: 'Poaching, habitat loss',
        conservationActions: 'Anti-poaching patrols',
        breedingProgram: 'ACTIVE',
        geneticDiversity: 'MODERATE',
        habitatQuality: 'IMPROVING',
        humanWildlifeConflict: 'MINIMAL',
        protectedArea: 'Land of the Leopard National Park',
        fundingStatus: '$12M allocated',
        monitoringTechnology: 'Camera traps, GPS collars',
        populationViability: '85% probability of survival',
        recoveryTimeline: '25-30 years',
        cooperationLevel: 'RUSSIA-CHINA',
        breedingSuccess: '78% survival rate',
        wildlifeCorridors: 'ESTABLISHED'
      },
      {
        speciesName: 'Vaquita Porpoise',
        scientificName: 'Phocoena sinus',
        speciesId: 'PS-GC-2026',
        conservationStatus: 'CRITICALLY ENDANGERED',
        population: 12,
        trend: 'DECLINING',
        habitat: 'Gulf of California, Mexico',
        primaryThreats: 'Gillnet fishing, bycatch',
        conservationActions: 'Fishing ban enforcement',
        breedingProgram: 'DISCONTINUED',
        geneticDiversity: 'EXTREMELY LOW',
        habitatQuality: 'STABLE',
        humanWildlifeConflict: 'INDIRECT',
        protectedArea: 'Vaquita Refuge Area',
        fundingStatus: '$45M emergency',
        monitoringTechnology: 'Acoustic monitoring',
        populationViability: '15% probability of survival',
        recoveryTimeline: 'UNCERTAIN',
        cooperationLevel: 'INTERNATIONAL',
        enforcementEfforts: 'ENHANCED',
        alternativeLivelihoods: 'DEVELOPING'
      },
      {
        speciesName: 'Snow Leopard',
        scientificName: 'Panthera uncia',
        speciesId: 'PU-AS-2026',
        conservationStatus: 'VULNERABLE',
        population: 4080,
        trend: 'STABLE',
        habitat: 'Central Asian mountains',
        primaryThreats: 'Retaliatory killing, poaching',
        conservationActions: 'Community-based conservation',
        breedingProgram: 'MULTIPLE SITES',
        geneticDiversity: 'GOOD',
        habitatQuality: 'VARIABLE',
        humanWildlifeConflict: 'SIGNIFICANT',
        protectedArea: '12 range countries',
        fundingStatus: '$67M range-wide',
        monitoringTechnology: 'Satellite telemetry',
        populationViability: '92% probability of survival',
        recoveryTimeline: '50+ years stability',
        cooperationLevel: 'GSLEP PARTNERSHIP',
        livestockProtection: 'PREDATOR-PROOF CORRALS',
        ecotourism: 'SUSTAINABLE DEVELOPMENT'
      }
    ],
    biotechResearch: [
      {
        projectName: 'CRISPR Coral Restoration',
        projectId: 'CCR-2026',
        institution: 'MIT/Woods Hole',
        funding: '$89M',
        duration: '7 years',
        progress: 67.8,
        objective: 'Heat-resistant coral development',
        methodology: 'Gene editing for thermal tolerance',
        targetGenes: 'Heat shock proteins',
        laboratoryTrials: 'SUCCESSFUL',
        fieldTrials: 'PHASE 2',
        ethicsApproval: 'GRANTED',
        environmentalImpact: 'POSITIVE',
        breedingSuccess: '89% improved tolerance',
        survivalRates: '78% in heated conditions',
        publicAcceptance: 'MODERATE',
        regulatoryStatus: 'APPROVED LIMITED',
        scalabilityScore: '94%',
        commercialPotential: 'HIGH',
        riskAssessment: 'LOW-MODERATE',
        collaborations: '15 international'
      },
      {
        projectName: 'Synthetic Biology Carbon Capture',
        projectId: 'SBCC-2026',
        institution: 'Stanford/Ginkgo Bioworks',
        funding: '$156M',
        duration: '5 years',
        progress: 45.3,
        objective: 'Engineered microorganisms for CO2',
        methodology: 'Metabolic pathway engineering',
        targetOrganisms: 'Cyanobacteria, algae',
        laboratoryTrials: 'PROMISING',
        fieldTrials: 'PHASE 1',
        ethicsApproval: 'PENDING',
        environmentalImpact: 'TO BE DETERMINED',
        carbonFixationRate: '23% improvement',
        biomassYield: '156% increase',
        containmentMeasures: 'MULTIPLE SAFEGUARDS',
        regulatoryStatus: 'UNDER REVIEW',
        scalabilityScore: '78%',
        commercialPotential: 'VERY HIGH',
        riskAssessment: 'MODERATE',
        biosafety: 'LEVEL 2 CONTAINMENT'
      },
      {
        projectName: 'De-extinction Initiative',
        projectId: 'DEI-2026',
        institution: 'Harvard/Revive & Restore',
        funding: '$234M',
        duration: '15 years',
        progress: 23.7,
        objective: 'Woolly mammoth resurrection',
        methodology: 'CRISPR Asian elephant editing',
        targetTraits: 'Cold adaptation, mammoth features',
        laboratoryTrials: 'EMBRYONIC STAGE',
        fieldTrials: 'NOT STARTED',
        ethicsApproval: 'CONTROVERSIAL',
        environmentalImpact: 'UNKNOWN',
        geneEditingSuccess: '156 trait modifications',
        embryoViability: '34% success rate',
        surrogacyProgram: 'ELEPHANT VOLUNTEERS',
        regulatoryStatus: 'COMPLEX APPROVAL',
        scalabilityScore: '45%',
        commercialPotential: 'TOURISM/RESEARCH',
        riskAssessment: 'HIGH',
        indigenousConsent: 'ONGOING DISCUSSIONS'
      }
    ],
    environmentalMonitoring: [
      {
        monitorType: 'Air Quality',
        monitorId: 'AQ-GLOBAL-2026',
        coverage: 'WORLDWIDE',
        stations: 15678,
        parameters: 'PM2.5, PM10, O3, NO2, SO2, CO',
        dataQuality: 'EXCELLENT',
        realTimeUpdates: 'CONTINUOUS',
        healthImpact: 'MODERATE RISK',
        pollutionSources: 'Transportation, industry',
        trendAnalysis: 'IMPROVING URBAN',
        hottestSpots: 'Delhi, Beijing, Cairo',
        cleanestAreas: 'Nordic countries, New Zealand',
        seasonalVariation: 'WINTER PEAKS',
        policyEffectiveness: '67% improvement',
        publicHealthCost: '$2.3T annually',
        prematureDeaths: '8.7M annually',
        regulatoryCompliance: '78% meeting WHO standards'
      },
      {
        monitorType: 'Water Quality',
        monitorId: 'WQ-RIVERS-2026',
        coverage: 'MAJOR RIVER SYSTEMS',
        stations: 23456,
        parameters: 'pH, dissolved oxygen, turbidity',
        dataQuality: 'GOOD',
        realTimeUpdates: 'HOURLY',
        pollutionLevel: 'MODERATE',
        pollutionSources: 'Agriculture, sewage, industrial',
        trendAnalysis: 'DECLINING QUALITY',
        mostPolluted: 'Ganges, Yangtze, Mississippi',
        cleanestRivers: 'Canadian, Scandinavian',
        eutrophication: '45% water bodies affected',
        plasticPollution: 'INCREASING',
        microplastics: '234 particles/L average',
        biodiversityImpact: 'FRESHWATER SPECIES DECLINE',
        treatmentEfficiency: '89% in developed countries'
      },
      {
        monitorType: 'Soil Health',
        monitorId: 'SH-AGRI-2026',
        coverage: 'AGRICULTURAL LANDS',
        stations: 34567,
        parameters: 'Organic matter, pH, nutrients',
        dataQuality: 'VARIABLE',
        realTimeUpdates: 'SEASONAL',
        degradationRate: '24 billion tons/year',
        erosionLevel: 'SEVERE IN 33% OF LAND',
        fertilizer: 'OVERUSE DETECTED',
        pesticides: 'CONTAMINATION WIDESPREAD',
        trendAnalysis: 'DECLINING FERTILITY',
        criticalRegions: 'Sub-Saharan Africa, parts of Asia',
        sustainablePractices: '23% adoption rate',
        carbonSequestration: 'POTENTIAL 2.6 Gt CO2',
        biodiversityLoss: 'SOIL ORGANISMS DECLINING',
        foodSecurity: 'THREATENED',
        restorationPrograms: '$45B investment needed'
      }
    ],
    biologicalAlerts: [
      {
        type: 'CRITICAL',
        category: 'Mass Die-off',
        message: 'Large-scale fish die-off in Oder River - 100+ tons dead fish, unknown toxin suspected',
        location: 'Oder River, Poland-Germany border',
        speciesAffected: 'Multiple fish species, mollusks',
        estimatedMortality: '100+ metric tons',
        impact: 'Ecosystem collapse, human health risk, economic losses',
        severity: 'EXTREME',
        timestamp: '12:15',
        detectedBy: 'Environmental monitoring network',
        recommendation: 'Immediate water use ban, source investigation, emergency response activation',
        waterQuality: 'HIGHLY CONTAMINATED',
        toxinType: 'UNKNOWN INDUSTRIAL',
        affectedLength: '500KM RIVER STRETCH',
        humanExposure: 'EVACUATION RECOMMENDED',
        wildlifeRescue: 'EMERGENCY TEAMS DEPLOYED',
        economicImpact: '$234M ESTIMATED',
        investigationStatus: 'URGENT PRIORITY'
      },
      {
        type: 'HIGH',
        category: 'Disease Outbreak',
        message: 'White-nose syndrome spreading in European bats - 67% mortality rate, fungal pathogen',
        species: 'Multiple European bat species',
        pathogen: 'Pseudogymnoascus destructans',
        mortalityRate: '67% affected populations',
        impact: 'Ecosystem service loss, agricultural pest increase, biodiversity decline',
        severity: 'HIGH',
        timestamp: '11:45',
        detectedBy: 'European bat monitoring network',
        recommendation: 'Cave closure, disinfection protocols, captive breeding programs',
        spreadRate: 'RAPID - 200KM/MONTH',
        treatmentOptions: 'EXPERIMENTAL ANTIFUNGALS',
        affectedCountries: '12 EUROPEAN NATIONS',
        ecosystemService: '$3.7B ANNUAL VALUE',
        conservationActions: 'EMERGENCY PROTOCOLS',
        researchPriority: 'URGENT FUNDING',
        publicHealth: 'NO HUMAN RISK'
      },
      {
        type: 'MEDIUM',
        category: 'Habitat Loss',
        message: 'Accelerated deforestation in Congo Basin - 15% increase from last year, mining expansion',
        location: 'Congo Basin, Central Africa',
        forestLoss: '15% annual increase',
        primaryDriver: 'Artisanal mining expansion',
        impact: 'Species displacement, carbon emissions, climate disruption',
        severity: 'MEDIUM',
        timestamp: '10:30',
        detectedBy: 'Satellite monitoring system',
        recommendation: 'Strengthen protected areas, community engagement, sustainable alternatives',
        affectedArea: '2,340 KM² ADDITIONAL',
        speciesAtRisk: '450 ENDEMIC SPECIES',
        carbonEmissions: '12.4 MT CO2 RELEASED',
        conservationFunding: '$156M NEEDED',
        localCommunities: '75,000 PEOPLE AFFECTED',
        alternativeLivelihoods: 'DEVELOPMENT REQUIRED',
        enforcement: 'RANGER PATROLS INCREASED'
      },
      {
        type: 'INFO',
        category: 'Conservation Success',
        message: 'California Condor population reaches 561 birds - Successful breeding program milestone',
        species: 'California Condor (Gymnogyps californianus)',
        population: '561 individuals',
        milestone: 'Highest population since 1980s',
        impact: 'Ecosystem restoration, conservation model success, species recovery',
        significance: 'CONSERVATION BREAKTHROUGH',
        timestamp: '09:15',
        detectedBy: 'California Condor Recovery Program',
        breedingSuccess: '89% HATCHING SUCCESS',
        wildPopulation: '347 BIRDS IN WILD',
        captivePopulation: '214 BREEDING BIRDS',
        leadPoisoning: 'STILL SIGNIFICANT THREAT',
        habitatRestoration: '2.3M ACRES PROTECTED',
        programCost: '$78M OVER 40 YEARS',
        geneticDiversity: 'MAINTAINED',
        futureGoals: '750 BIRDS BY 2035'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        monitorsOperational: 44187,
        dataPointsCollected: 2345678,
        speciesObservations: 156789,
        alertsGenerated: 6,
        researchUpdates: 234,
        conservationActions: 45,
        dataAccuracy: 97.3,
        systemReliability: 99.2
      },
      {
        period: 'Last 24 Hours',
        monitorsOperational: 44056,
        dataPointsCollected: 56789123,
        speciesObservations: 3456789,
        alertsGenerated: 89,
        researchUpdates: 1234,
        conservationActions: 567,
        dataAccuracy: 96.8,
        systemReliability: 98.9
      },
      {
        period: 'Last 7 Days',
        monitorsOperational: 43789,
        dataPointsCollected: 345678912,
        speciesObservations: 23456789,
        alertsGenerated: 456,
        researchUpdates: 6789,
        conservationActions: 2345,
        dataAccuracy: 96.2,
        systemReliability: 98.5
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBiologicalData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        biologicalOverview: {
          ...prev.biologicalOverview,
          dataAccuracy: Math.max(95.0, Math.min(99.0, prev.biologicalOverview.dataAccuracy + (Math.random() - 0.5) * 1.0)),
          globalCoverage: Math.max(90.0, Math.min(95.0, prev.biologicalOverview.globalCoverage + (Math.random() - 0.5) * 0.8)),
          activeSpeciesTracking: Math.max(1200000, Math.min(1300000, prev.biologicalOverview.activeSpeciesTracking + Math.floor((Math.random() - 0.5) * 1000)))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'STABLE': return 'text-green-400 bg-green-400/20';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'DEGRADED': return 'text-orange-400 bg-orange-400/20';
      case 'THREATENED': return 'text-yellow-400 bg-yellow-400/20';
      case 'CRITICALLY ENDANGERED': return 'text-red-500 bg-red-500/20';
      case 'VULNERABLE': return 'text-yellow-400 bg-yellow-400/20';
      case 'INCREASING': return 'text-green-400 bg-green-400/20';
      case 'DECLINING': return 'text-red-400 bg-red-400/20';
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'GOOD': return 'text-blue-400 bg-blue-400/20';
      case 'MODERATE': return 'text-yellow-400 bg-yellow-400/20';
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

  const getThreatColor = (level) => {
    switch (level) {
      case 'LOW': return 'text-green-400';
      case 'MODERATE': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'EXTREME': return 'text-red-500';
      default: return 'text-slate-400';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'INCREASING': return 'text-green-400';
      case 'STABLE': return 'text-yellow-400';
      case 'DECLINING': return 'text-red-400';
      case 'DECREASING': return 'text-red-400';
      case 'STABILIZING': return 'text-blue-400';
      default: return 'text-slate-400';
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
  const formatArea = (area) => `${formatNumber(area)} km²`;
  const formatTemperature = (temp) => `+${temp.toFixed(1)}°C`;

  return (
    <div className="h-full bg-gradient-to-br from-emerald-900 via-slate-900 to-green-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-emerald-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Biological Technology Intelligence Center</h1>
              <p className="text-emerald-300">Life sciences & ecosystem analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-emerald-400">{biologicalData.currentTime}</div>
            <div className="text-emerald-300">Biological Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Biological Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-emerald-400 mr-2" />
                Monitors
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatNumber(biologicalData.biologicalOverview.operationalMonitors)}</div>
            <div className="text-emerald-300 text-sm">{formatNumber(biologicalData.biologicalOverview.ecosystemMonitors)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Dna className="w-5 h-5 text-blue-400 mr-2" />
                Species
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(biologicalData.biologicalOverview.activeSpeciesTracking)}</div>
            <div className="text-blue-300 text-sm">Tracked</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TreePine className="w-5 h-5 text-green-400 mr-2" />
                Programs
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{biologicalData.biologicalOverview.conservationPrograms}</div>
            <div className="text-green-300 text-sm">Conservation</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 text-cyan-400 mr-2" />
                Coverage
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(biologicalData.biologicalOverview.globalCoverage)}</div>
            <div className="text-cyan-300 text-sm">Global</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-purple-400 mr-2" />
                Accuracy
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(biologicalData.biologicalOverview.dataAccuracy)}</div>
            <div className="text-purple-300 text-sm">Data Quality</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 text-orange-400 mr-2" />
                Alerts
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{biologicalData.biologicalOverview.activeAlerts}</div>
            <div className="text-orange-300 text-sm">Active</div>
          </div>
        </div>

        {/* Ecosystem Monitoring & Species Conservation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TreePine className="w-5 h-5 text-emerald-400 mr-2" />
              Ecosystem Monitoring
            </h3>
            <div className="space-y-4">
              {biologicalData.ecosystemMonitoring.map((ecosystem, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{ecosystem.ecosystemName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(ecosystem.status)}`}>
                        {ecosystem.status}
                      </span>
                      <span className={`text-xs ${getThreatColor(ecosystem.threatLevel)}`}>
                        {ecosystem.threatLevel}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{ecosystem.location}</div>
                    <div className="text-blue-400">Area: {formatArea(ecosystem.areaSize)}</div>
                    <div className="text-green-400">ID: {ecosystem.ecosystemId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Species: {formatNumber(ecosystem.speciesDiversity)}</div>
                    <div className="text-purple-400">Endemic: {formatNumber(ecosystem.endemicSpecies)}</div>
                  </div>
                  
                  {ecosystem.deforestationRate && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-red-400">Deforestation: {ecosystem.deforestationRate} km²/yr</div>
                      <div className="text-orange-400">Biomass Loss: {formatPercentage(ecosystem.biomassLoss)}</div>
                    </div>
                  )}
                  
                  {ecosystem.bleachingExtent && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-red-400">Bleaching: {formatPercentage(ecosystem.bleachingExtent)}</div>
                      <div className="text-orange-400">Coral Cover: {formatPercentage(ecosystem.coralCoverage)}</div>
                    </div>
                  )}
                  
                  {ecosystem.wolfPopulation && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-green-400">Wolves: {ecosystem.wolfPopulation}</div>
                      <div className="text-blue-400">Bison: {formatNumber(ecosystem.bisonPopulation)}</div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {ecosystem.humanImpact && `Human Impact: ${ecosystem.humanImpact}`}
                      {ecosystem.climateImpact && `Climate Impact: ${ecosystem.climateImpact}`}
                      {ecosystem.visitorImpact && `Visitor Impact: ${ecosystem.visitorImpact}`}
                      {ecosystem.miningImpact && `Mining Impact: ${ecosystem.miningImpact}`}
                    </div>
                    <div className={getTrendColor(ecosystem.biodiversityTrend)}>
                      Biodiversity: {ecosystem.biodiversityTrend}
                    </div>
                    <div className="text-indigo-400">
                      {ecosystem.conservationEfforts && `Conservation: ${ecosystem.conservationEfforts}`}
                      {ecosystem.restorationEfforts && `Restoration: ${ecosystem.restorationEfforts}`}
                      {ecosystem.conservationFunding && `Funding: ${ecosystem.conservationFunding}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Dna className="w-5 h-5 text-blue-400 mr-2" />
              Species Conservation Programs
            </h3>
            <div className="space-y-4">
              {biologicalData.speciesConservation.map((species, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{species.speciesName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(species.conservationStatus)}`}>
                        {species.conservationStatus}
                      </span>
                      <span className={`text-xs ${getTrendColor(species.trend)}`}>
                        {species.trend}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{species.scientificName}</div>
                    <div className="text-blue-400">Population: {species.population}</div>
                    <div className="text-green-400">ID: {species.speciesId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Habitat: {species.habitat}</div>
                    <div className="text-purple-400">Breeding: {species.breedingProgram}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Genetic: {species.geneticDiversity}</div>
                    <div className="text-pink-400">Viability: {species.populationViability}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Threats: {species.primaryThreats}</div>
                    <div className="text-indigo-400">Actions: {species.conservationActions}</div>
                    <div className="text-green-400">Funding: {species.fundingStatus}</div>
                    <div className="text-cyan-400">
                      {species.breedingSuccess && `Breeding Success: ${species.breedingSuccess}`}
                      {species.survivalRates && `Survival: ${species.survivalRates}`}
                    </div>
                    <div className="text-blue-400">Timeline: {species.recoveryTimeline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Biotech Research & Environmental Monitoring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Microscope className="w-5 h-5 text-purple-400 mr-2" />
              Biotechnology Research Projects
            </h3>
            <div className="space-y-4">
              {biologicalData.biotechResearch.map((project, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{project.projectName}</span>
                    <div className="text-green-400 text-xs">{project.funding}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{project.institution}</div>
                    <div className="text-blue-400">Duration: {project.duration}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Progress</span>
                      <span>{formatPercentage(project.progress)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-purple-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Method: {project.methodology}</div>
                    <div className="text-purple-400">Lab Trials: {project.laboratoryTrials}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Field: {project.fieldTrials}</div>
                    <div className="text-green-400">Ethics: {project.ethicsApproval}</div>
                  </div>
                  
                  {project.breedingSuccess && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-cyan-400">Success: {project.breedingSuccess}</div>
                      <div className="text-blue-400">Survival: {project.survivalRates}</div>
                    </div>
                  )}
                  
                  {project.carbonFixationRate && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-green-400">CO2 Fix: {project.carbonFixationRate}</div>
                      <div className="text-indigo-400">Biomass: {project.biomassYield}</div>
                    </div>
                  )}
                  
                  {project.geneEditingSuccess && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-pink-400">Edits: {project.geneEditingSuccess}</div>
                      <div className="text-yellow-400">Viability: {project.embryoViability}</div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Objective: {project.objective}</div>
                    <div className="text-indigo-400">Status: {project.regulatoryStatus}</div>
                    <div className="text-orange-400">Risk: {project.riskAssessment}</div>
                    <div className="text-green-400">Commercial: {project.commercialPotential}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 text-cyan-400 mr-2" />
              Environmental Monitoring Networks
            </h3>
            <div className="space-y-4">
              {biologicalData.environmentalMonitoring.map((monitor, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{monitor.monitorType}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(monitor.dataQuality)}`}>
                        {monitor.dataQuality}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{monitor.coverage}</div>
                    <div className="text-blue-400">Stations: {formatNumber(monitor.stations)}</div>
                    <div className="text-green-400">ID: {monitor.monitorId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Updates: {monitor.realTimeUpdates}</div>
                    <div className="text-purple-400">Parameters: {monitor.parameters.split(',').length} types</div>
                  </div>
                  
                  {monitor.healthImpact && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-orange-400">Health: {monitor.healthImpact}</div>
                      <div className="text-red-400">Deaths: {monitor.prematureDeaths}</div>
                    </div>
                  )}
                  
                  {monitor.degradationRate && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-red-400">Degradation: {monitor.degradationRate}</div>
                      <div className="text-orange-400">Erosion: {monitor.erosionLevel}</div>
                    </div>
                  )}
                  
                  {monitor.pollutionLevel && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-yellow-400">Pollution: {monitor.pollutionLevel}</div>
                      <div className="text-cyan-400">Trend: {monitor.trendAnalysis}</div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Sources: {monitor.pollutionSources}</div>
                    <div className="text-indigo-400">
                      Most Affected: {monitor.hottestSpots || monitor.mostPolluted || monitor.criticalRegions}
                    </div>
                    <div className="text-green-400">
                      Cleanest: {monitor.cleanestAreas || monitor.cleanestRivers}
                    </div>
                    {monitor.publicHealthCost && (
                      <div className="text-red-400">Economic Cost: {monitor.publicHealthCost}</div>
                    )}
                    {monitor.restorationPrograms && (
                      <div className="text-blue-400">Restoration: {monitor.restorationPrograms}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-emerald-400 mr-2" />
            Biological Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {biologicalData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Monitors: {formatNumber(metrics.monitorsOperational)}</div>
                  <div className="text-green-400">Data: {formatNumber(metrics.dataPointsCollected)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Species: {formatNumber(metrics.speciesObservations)}</div>
                  <div className="text-yellow-400">Alerts: {metrics.alertsGenerated}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Research: {formatNumber(metrics.researchUpdates)}</div>
                  <div className="text-orange-400">Actions: {metrics.conservationActions}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Accuracy: {formatPercentage(metrics.dataAccuracy)}</div>
                  <div className="text-pink-400">Uptime: {formatPercentage(metrics.systemReliability)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Biological Technology Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Biological Technology System Alerts
          </h3>
          <div className="space-y-4">
            {biologicalData.biologicalAlerts.map((alert, index) => (
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
                  {alert.location && <div className="text-slate-300">Location: {alert.location}</div>}
                  {alert.speciesAffected && <div className="text-red-400">Species: {alert.speciesAffected}</div>}
                  {alert.estimatedMortality && <div className="text-orange-400">Mortality: {alert.estimatedMortality}</div>}
                  {alert.species && <div className="text-blue-400">Species: {alert.species}</div>}
                  {alert.pathogen && <div className="text-purple-400">Pathogen: {alert.pathogen}</div>}
                  {alert.mortalityRate && <div className="text-red-400">Mortality Rate: {alert.mortalityRate}</div>}
                  {alert.forestLoss && <div className="text-yellow-400">Forest Loss: {alert.forestLoss}</div>}
                  {alert.primaryDriver && <div className="text-orange-400">Driver: {alert.primaryDriver}</div>}
                  {alert.population && <div className="text-green-400">Population: {alert.population}</div>}
                  {alert.milestone && <div className="text-cyan-400">Milestone: {alert.milestone}</div>}
                </div>
                
                <div className="text-slate-300 text-xs mb-2">
                  <strong>Impact:</strong> {alert.impact}
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