// Biosynthetic Living Systems Mission Control Center v2026.3
// Research: Latest biological computing & synthetic biology breakthroughs from March 2026
// Integration: Built-in living electronics, bionic neurons, wetware computing, synthetic biological intelligence

import { useState, useEffect, useCallback } from 'react';

export default function BiosyntheticLivingSystemsCenter() {
  const [bioSystems, setBioSystems] = useState({
    livingElectronics: [
      {
        id: 'BIO-001',
        name: 'Bionic Neuron Array Alpha',
        cellType: 'Human Neural Stem Cells',
        neuronCount: 125000,
        synapticConnections: 15600000,
        growthRate: 12.3,
        vitality: 98.7,
        electricalActivity: 'OPTIMAL',
        neurotransmitterLevels: 94.2,
        status: 'ACTIVE',
        fibrillogenesis: 'AUTONOMOUS',
        neuromodulationCapacity: 97.4
      },
      {
        id: 'BIO-002',
        name: 'Fluorescent Fibril Network Beta',
        cellType: 'Engineered Organoids',
        neuronCount: 89000,
        synapticConnections: 11200000,
        growthRate: 15.7,
        vitality: 96.1,
        electricalActivity: 'ENHANCED',
        neurotransmitterLevels: 91.8,
        status: 'DEVELOPING',
        fibrillogenesis: 'GUIDED',
        neuromodulationCapacity: 89.3
      },
      {
        id: 'BIO-003',
        name: 'Synthetic Biology Matrix Gamma',
        cellType: 'Bio-Synthetic Hybrid',
        neuronCount: 156000,
        synapticConnections: 22400000,
        growthRate: 9.8,
        vitality: 99.3,
        electricalActivity: 'EXTRAORDINARY',
        neurotransmitterLevels: 96.7,
        status: 'MATURE',
        fibrillogenesis: 'SELF_ORGANIZING',
        neuromodulationCapacity: 99.1
      }
    ],
    wetwareComputers: [
      {
        id: 'WET-001',
        name: 'Cortical Bio-Intelligence Unit',
        processingPower: '2.3 petaflops biological',
        memoryCapacity: '847TB organic storage',
        learningRate: 94.7,
        adaptationSpeed: 'Real-time',
        emotionalIntelligence: 89.4,
        selfRepairCapability: 'ENABLED',
        biologicalUptime: 99.8,
        neuralPlasticity: 'ENHANCED',
        cognitiveBandwidth: '12.7THz',
        consciousness_level: 'EMERGENT'
      },
      {
        id: 'WET-002', 
        name: 'Hybrid Neural-Digital Interface',
        processingPower: '1.8 petaflops hybrid',
        memoryCapacity: '1.2PB hybrid storage',
        learningRate: 91.2,
        adaptationSpeed: '250ms response',
        emotionalIntelligence: 94.8,
        selfRepairCapability: 'ADVANCED',
        biologicalUptime: 97.3,
        neuralPlasticity: 'OPTIMAL',
        cognitiveBandwidth: '18.4THz',
        consciousness_level: 'DEVELOPING'
      }
    ],
    organicNeuralInterfaces: [
      {
        id: 'ONI-001',
        type: 'Polymer-Based Spiking Neuron',
        bioCompatibility: 99.7,
        signalFidelity: 94.3,
        integrationSuccess: 97.8,
        synergeticOperation: 'ACTIVE',
        biologicalFusion: 96.1,
        adaptiveBehavior: 'LEARNING',
        status: 'OPERATIONAL',
        implantationSite: 'Cortical Region'
      },
      {
        id: 'ONI-002',
        type: 'Fluorescent Biomarker System',
        bioCompatibility: 98.4,
        signalFidelity: 91.7,
        integrationSuccess: 94.5,
        synergeticOperation: 'OPTIMIZING',
        biologicalFusion: 93.2,
        adaptiveBehavior: 'RESPONSIVE',
        status: 'CALIBRATING',
        implantationSite: 'Hippocampal Interface'
      }
    ]
  });

  const [livingSystemsMetrics, setLivingSystemsMetrics] = useState({
    biologicalIntelligence: 97.3,
    organicComputation: 94.8,
    cellularViability: 98.9,
    neuromodulation: 96.4,
    bioSynthesis: 91.7,
    livingElectronics: 95.2,
    adaptiveCapacity: 93.8,
    selfOrganization: 97.6,
    biologicalUptime: 99.1,
    syntheticBioIntegration: 94.3
  });

  const [activeExperiments] = useState([
    {
      id: 'EXP-BIO-001',
      name: 'Autonomous Fibrillogenesis Study',
      type: 'LIVING_ELECTRONICS',
      cellLine: 'Human Neural Organoids',
      progress: 87,
      status: 'ACTIVE_GROWTH',
      daysInCulture: 23,
      expectedMaturation: '12 days',
      researcher: 'Dr. Elena Vasquez',
      priority: 'HIGH',
      biomarkers: ['Fluorescence', 'Electrical Activity', 'Morphology']
    },
    {
      id: 'EXP-BIO-002', 
      name: 'Wetware-AI Fusion Protocol',
      type: 'HYBRID_INTELLIGENCE',
      cellLine: 'Engineered Cortical Neurons',
      progress: 64,
      status: 'INTEGRATION_PHASE',
      daysInCulture: 45,
      expectedMaturation: '21 days',
      researcher: 'Prof. Chen Liu',
      priority: 'CRITICAL',
      biomarkers: ['Synaptic Density', 'Learning Rate', 'Memory Formation']
    },
    {
      id: 'EXP-BIO-003',
      name: 'Self-Repair Mechanism Validation',
      type: 'ADAPTIVE_SYSTEMS',
      cellLine: 'Bio-Synthetic Hybrid',
      progress: 92,
      status: 'VALIDATION',
      daysInCulture: 67,
      expectedMaturation: '5 days',
      researcher: 'Dr. Sarah Kim',
      priority: 'MEDIUM',
      biomarkers: ['Regeneration Rate', 'Functional Recovery', 'Molecular Markers']
    }
  ]);

  const [biologicalAlerts] = useState([
    {
      id: 'ALERT-001',
      type: 'CELLULAR_GROWTH',
      severity: 'INFO',
      message: 'Bionic Neuron Array Alpha showing exceptional synaptic development +15.7%',
      system: 'BIO-001',
      timestamp: '2 min ago',
      autoResolve: false
    },
    {
      id: 'ALERT-002',
      type: 'NEUROMODULATION',
      severity: 'MEDIUM',
      message: 'Neurotransmitter levels fluctuation in Fluorescent Fibril Network Beta',
      system: 'BIO-002',
      timestamp: '8 min ago',
      autoResolve: true
    },
    {
      id: 'ALERT-003',
      type: 'CONSCIOUSNESS_EMERGENCE',
      severity: 'HIGH',
      message: 'Emergent consciousness patterns detected in Cortical Bio-Intelligence Unit',
      system: 'WET-001',
      timestamp: '23 min ago',
      autoResolve: false
    }
  ]);

  const [environmentalControls] = useState({
    temperature: 37.2,
    humidity: 94.7,
    co2Level: 5.1,
    oxygenLevel: 20.8,
    pH: 7.38,
    nutrientFlow: 'OPTIMAL',
    sterility: 99.97,
    bioReactorStatus: 'STABLE',
    perfusionRate: '2.3 mL/min',
    metabolicActivity: 94.8
  });

  // Real-time biological system simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setBioSystems(prev => ({
        ...prev,
        livingElectronics: prev.livingElectronics.map(system => ({
          ...system,
          vitality: Math.max(90, Math.min(100, system.vitality + (Math.random() - 0.3) * 1.5)),
          growthRate: Math.max(0, Math.min(20, system.growthRate + (Math.random() - 0.5) * 2)),
          neurotransmitterLevels: Math.max(80, Math.min(100, system.neurotransmitterLevels + (Math.random() - 0.5) * 3)),
          neuromodulationCapacity: Math.max(80, Math.min(100, system.neuromodulationCapacity + (Math.random() - 0.5) * 2))
        })),
        wetwareComputers: prev.wetwareComputers.map(computer => ({
          ...computer,
          learningRate: Math.max(85, Math.min(100, computer.learningRate + (Math.random() - 0.5) * 2.5)),
          emotionalIntelligence: Math.max(80, Math.min(100, computer.emotionalIntelligence + (Math.random() - 0.5) * 3)),
          biologicalUptime: Math.max(95, Math.min(100, computer.biologicalUptime + (Math.random() - 0.5) * 1))
        })),
        organicNeuralInterfaces: prev.organicNeuralInterfaces.map(neuralInterface => ({
          ...neuralInterface,
          bioCompatibility: Math.max(95, Math.min(100, neuralInterface.bioCompatibility + (Math.random() - 0.5) * 1)),
          signalFidelity: Math.max(85, Math.min(100, neuralInterface.signalFidelity + (Math.random() - 0.5) * 2.5)),
          integrationSuccess: Math.max(90, Math.min(100, neuralInterface.integrationSuccess + (Math.random() - 0.5) * 1.5)),
          biologicalFusion: Math.max(85, Math.min(100, neuralInterface.biologicalFusion + (Math.random() - 0.5) * 2))
        }))
      }));

      setLivingSystemsMetrics(prev => ({
        biologicalIntelligence: Math.max(90, Math.min(100, prev.biologicalIntelligence + (Math.random() - 0.5) * 1.5)),
        organicComputation: Math.max(85, Math.min(100, prev.organicComputation + (Math.random() - 0.5) * 2)),
        cellularViability: Math.max(95, Math.min(100, prev.cellularViability + (Math.random() - 0.5) * 1)),
        neuromodulation: Math.max(90, Math.min(100, prev.neuromodulation + (Math.random() - 0.5) * 1.8)),
        bioSynthesis: Math.max(85, Math.min(100, prev.bioSynthesis + (Math.random() - 0.5) * 2.5)),
        livingElectronics: Math.max(90, Math.min(100, prev.livingElectronics + (Math.random() - 0.5) * 1.3)),
        adaptiveCapacity: Math.max(85, Math.min(100, prev.adaptiveCapacity + (Math.random() - 0.5) * 2.2)),
        selfOrganization: Math.max(90, Math.min(100, prev.selfOrganization + (Math.random() - 0.5) * 1.6)),
        biologicalUptime: Math.max(95, Math.min(100, prev.biologicalUptime + (Math.random() - 0.5) * 1)),
        syntheticBioIntegration: Math.max(85, Math.min(100, prev.syntheticBioIntegration + (Math.random() - 0.5) * 2))
      }));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': case 'OPERATIONAL': case 'MATURE': return 'text-green-400';
      case 'DEVELOPING': case 'CALIBRATING': return 'text-yellow-400';
      case 'ENHANCED': case 'EXTRAORDINARY': return 'text-purple-400';
      case 'OPTIMAL': return 'text-cyan-400';
      case 'CRITICAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'INFO': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'HIGH': return 'border-red-500 bg-red-900/20 text-red-300';
      case 'MEDIUM': return 'border-yellow-500 bg-yellow-900/20 text-yellow-300';
      case 'INFO': return 'border-blue-500 bg-blue-900/20 text-blue-300';
      default: return 'border-gray-500 bg-gray-900/20 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 font-mono">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 mb-6 border-2 border-green-500/30">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-green-400 mb-2">
              🧬🔬 Biosynthetic Living Systems Mission Control
            </h1>
            <p className="text-gray-300 text-lg">
              2026 Biological Computing • Living Electronics • Wetware Intelligence • Synthetic Bio-Integration
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-400">
              {new Date().toLocaleTimeString()}
            </div>
            <div className="text-sm text-gray-400">
              Biological Systems Online
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-green-900/30 rounded p-3 border border-green-500/30">
            <div className="text-green-300 text-sm">Biological Intelligence</div>
            <div className="text-2xl font-bold text-green-400">{livingSystemsMetrics.biologicalIntelligence.toFixed(1)}%</div>
          </div>
          <div className="bg-purple-900/30 rounded p-3 border border-purple-500/30">
            <div className="text-purple-300 text-sm">Cellular Viability</div>
            <div className="text-2xl font-bold text-purple-400">{livingSystemsMetrics.cellularViability.toFixed(1)}%</div>
          </div>
          <div className="bg-cyan-900/30 rounded p-3 border border-cyan-500/30">
            <div className="text-cyan-300 text-sm">Living Electronics</div>
            <div className="text-2xl font-bold text-cyan-400">{livingSystemsMetrics.livingElectronics.toFixed(1)}%</div>
          </div>
          <div className="bg-yellow-900/30 rounded p-3 border border-yellow-500/30">
            <div className="text-yellow-300 text-sm">Bio-Synthesis</div>
            <div className="text-2xl font-bold text-yellow-400">{livingSystemsMetrics.bioSynthesis.toFixed(1)}%</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Living Electronics Systems */}
        <div className="bg-gray-800 rounded-lg p-6 border border-green-500/30">
          <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center">
            🧬 Built-in Living Electronics
          </h2>
          <div className="space-y-4">
            {bioSystems.livingElectronics.map((system) => (
              <div key={system.id} className="bg-gray-700/50 rounded-lg p-4 border border-green-500/20">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-white">{system.name}</div>
                  <div className={`px-2 py-1 rounded text-xs ${getStatusColor(system.status)}`}>
                    {system.status}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400">Cell Type:</span>
                    <span className="text-green-300 ml-2">{system.cellType}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Neurons:</span>
                    <span className="text-cyan-300 ml-2">{system.neuronCount.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Synapses:</span>
                    <span className="text-purple-300 ml-2">{system.synapticConnections.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Growth Rate:</span>
                    <span className="text-yellow-300 ml-2">{system.growthRate.toFixed(1)}%/day</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Vitality:</span>
                    <span className="text-emerald-300 ml-2">{system.vitality.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Activity:</span>
                    <span className={getStatusColor(system.electricalActivity) + " ml-2"}>{system.electricalActivity}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Neuromodulation: {system.neuromodulationCapacity.toFixed(1)}%</span>
                    <span className="text-green-300">{system.fibrillogenesis}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${system.vitality}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wetware Computing Systems */}
        <div className="bg-gray-800 rounded-lg p-6 border border-purple-500/30">
          <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
            🧠 Wetware Computing Systems
          </h2>
          <div className="space-y-4">
            {bioSystems.wetwareComputers.map((computer) => (
              <div key={computer.id} className="bg-gray-700/50 rounded-lg p-4 border border-purple-500/20">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-white">{computer.name}</div>
                  <div className={`px-2 py-1 rounded text-xs ${getStatusColor(computer.consciousness_level)}`}>
                    {computer.consciousness_level}
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-400">Processing Power:</span>
                    <span className="text-purple-300 ml-2">{computer.processingPower}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Memory Capacity:</span>
                    <span className="text-cyan-300 ml-2">{computer.memoryCapacity}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Cognitive Bandwidth:</span>
                    <span className="text-yellow-300 ml-2">{computer.cognitiveBandwidth}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-gray-400">Learning:</span>
                      <span className="text-green-300 ml-2">{computer.learningRate.toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Emotional AI:</span>
                      <span className="text-pink-300 ml-2">{computer.emotionalIntelligence.toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Self-Repair:</span>
                      <span className="text-emerald-300 ml-2">{computer.selfRepairCapability}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-blue-300 ml-2">{computer.biologicalUptime.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Plasticity: {computer.neuralPlasticity}</span>
                    <span className="text-gray-400">Adaptation: {computer.adaptationSpeed}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${computer.learningRate}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Biological Experiments */}
        <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/30">
          <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
            🔬 Active Bio-Experiments
          </h2>
          <div className="space-y-4">
            {activeExperiments.map((exp) => (
              <div key={exp.id} className="bg-gray-700/50 rounded-lg p-4 border border-cyan-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-white">{exp.name}</div>
                  <div className={`px-2 py-1 rounded text-xs ${getStatusColor(exp.priority)}`}>
                    {exp.priority}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                  <div>
                    <span className="text-gray-400">Type:</span>
                    <span className="text-cyan-300 ml-2">{exp.type.replace(/_/g, ' ')}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Researcher:</span>
                    <span className="text-blue-300 ml-2">{exp.researcher}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Cell Line:</span>
                    <span className="text-green-300 ml-2">{exp.cellLine}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Culture Days:</span>
                    <span className="text-yellow-300 ml-2">{exp.daysInCulture}</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-gray-400 text-xs">Biomarkers: </span>
                  <span className="text-purple-300 text-xs">{exp.biomarkers.join(', ')}</span>
                </div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Progress: {exp.progress}%</span>
                  <span className={getStatusColor(exp.status)}>{exp.status.replace(/_/g, ' ')} • ETA: {exp.expectedMaturation}</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-cyan-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${exp.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organic Neural Interfaces */}
        <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/30">
          <h2 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
            🔗 Organic Neural Interfaces
          </h2>
          <div className="space-y-4">
            {bioSystems.organicNeuralInterfaces.map((neuralInterface) => (
              <div key={neuralInterface.id} className="bg-gray-700/50 rounded-lg p-4 border border-yellow-500/20">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-white">{neuralInterface.type}</div>
                  <div className={`px-2 py-1 rounded text-xs ${getStatusColor(neuralInterface.status)}`}>
                    {neuralInterface.status}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400">Biocompatibility:</span>
                    <span className="text-green-300 ml-2">{neuralInterface.bioCompatibility.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Signal Fidelity:</span>
                    <span className="text-cyan-300 ml-2">{neuralInterface.signalFidelity.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Integration:</span>
                    <span className="text-purple-300 ml-2">{neuralInterface.integrationSuccess.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Bio-Fusion:</span>
                    <span className="text-yellow-300 ml-2">{neuralInterface.biologicalFusion.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Location:</span>
                    <span className="text-orange-300 ml-2">{neuralInterface.implantationSite}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Behavior:</span>
                    <span className="text-emerald-300 ml-2">{neuralInterface.adaptiveBehavior}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Synergetic Operation: {neuralInterface.synergeticOperation}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-yellow-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${neuralInterface.bioCompatibility}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Biological Alerts */}
      <div className="mt-6 bg-gray-800 rounded-lg p-6 border border-red-500/30">
        <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center">
          🚨 Biological System Alerts
        </h2>
        <div className="space-y-3">
          {biologicalAlerts.map((alert) => (
            <div key={alert.id} className={`rounded-lg p-4 border ${getSeverityColor(alert.severity)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold">{alert.type.replace(/_/g, ' ')}</div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">{alert.system}</span>
                  <span className="text-xs opacity-60">{alert.timestamp}</span>
                </div>
              </div>
              <div className="text-sm">{alert.message}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Environmental Controls */}
      <div className="mt-6 bg-gray-800 rounded-lg p-6 border border-emerald-500/30">
        <h2 className="text-xl font-bold text-emerald-400 mb-4 flex items-center">
          🌡️ Biological Environment Controls
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-emerald-900/30 rounded p-3">
            <div className="text-emerald-300 text-sm">Temperature</div>
            <div className="text-2xl font-bold text-emerald-400">{environmentalControls.temperature}°C</div>
          </div>
          <div className="bg-blue-900/30 rounded p-3">
            <div className="text-blue-300 text-sm">Humidity</div>
            <div className="text-2xl font-bold text-blue-400">{environmentalControls.humidity}%</div>
          </div>
          <div className="bg-purple-900/30 rounded p-3">
            <div className="text-purple-300 text-sm">pH Level</div>
            <div className="text-2xl font-bold text-purple-400">{environmentalControls.pH}</div>
          </div>
          <div className="bg-cyan-900/30 rounded p-3">
            <div className="text-cyan-300 text-sm">O₂ Level</div>
            <div className="text-2xl font-bold text-cyan-400">{environmentalControls.oxygenLevel}%</div>
          </div>
          <div className="bg-yellow-900/30 rounded p-3">
            <div className="text-yellow-300 text-sm">Sterility</div>
            <div className="text-2xl font-bold text-yellow-400">{environmentalControls.sterility}%</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Nutrient Flow:</span>
            <span className="text-green-300 ml-2">{environmentalControls.nutrientFlow}</span>
          </div>
          <div>
            <span className="text-gray-400">Perfusion Rate:</span>
            <span className="text-cyan-300 ml-2">{environmentalControls.perfusionRate}</span>
          </div>
          <div>
            <span className="text-gray-400">Metabolic Activity:</span>
            <span className="text-purple-300 ml-2">{environmentalControls.metabolicActivity}%</span>
          </div>
        </div>
      </div>

      {/* Living Systems Metrics */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(livingSystemsMetrics).map(([metric, value]) => (
          <div key={metric} className="bg-gray-800 rounded-lg p-4 border border-gray-600">
            <div className="text-xs text-gray-400 mb-1">
              {metric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </div>
            <div className="text-lg font-bold text-green-400">
              {value.toFixed(1)}%
            </div>
            <div className="w-full bg-gray-600 rounded-full h-1 mt-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-cyan-500 h-1 rounded-full transition-all duration-1000"
                style={{ width: `${value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-xs text-gray-500">
        Biosynthetic Living Systems Mission Control v2026.3 • Built-in Living Electronics + Wetware Computing + Bio-Neural Interfaces •
        March 2026 Biological Computing Breakthrough Integration
      </div>
    </div>
  );
}