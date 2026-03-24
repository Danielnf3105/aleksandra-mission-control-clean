// Holographic Digital Twin Mission Control Center v2026.3
// Research: 2026 computational holography + Berkeley Lab digital twins + interactive XR applications
// Integration: Real-time holographic interfaces, AI-informed digital twins, molecular machine modeling

import { useState, useEffect, useCallback } from 'react';

export default function HolographicDigitalTwinCenter() {
  const [holographicSystems, setHolographicSystems] = useState({
    holographicDisplays: [
      {
        id: 'HOLO-001',
        name: 'Primary Mission Holodeck',
        technology: 'Computational Light Field',
        resolution: '8K x 8K per eye',
        refreshRate: '240Hz',
        fieldOfView: '210° horizontal',
        depthLayers: 64,
        pixelDensity: '4000 PPI',
        status: 'ACTIVE',
        brightness: 12000,
        colorGamut: 'Rec. 2020+',
        holographicAccuracy: 99.7,
        realTimeModulation: 'ENABLED'
      },
      {
        id: 'HOLO-002',
        name: 'Tactical Holographic Array',
        technology: 'Volumetric Light Scattering',
        resolution: '4K x 4K volumetric',
        refreshRate: '120Hz',
        fieldOfView: '360° omnidirectional',
        depthLayers: 128,
        pixelDensity: '2500 PPI',
        status: 'OPERATIONAL',
        brightness: 8500,
        colorGamut: 'DCI-P3 Extended',
        holographicAccuracy: 96.3,
        realTimeModulation: 'OPTIMIZED'
      },
      {
        id: 'HOLO-003',
        name: 'Molecular Visualization Chamber',
        technology: 'Plasma Photonic Holography',
        resolution: '16K molecular detail',
        refreshRate: '480Hz',
        fieldOfView: 'Micro to Macro scaling',
        depthLayers: 256,
        pixelDensity: '8000 PPI',
        status: 'CALIBRATING',
        brightness: 15000,
        colorGamut: 'Full Spectrum+UV+IR',
        holographicAccuracy: 99.9,
        realTimeModulation: 'ULTRA_PRECISION'
      }
    ],
    digitalTwins: [
      {
        id: 'TWIN-001',
        name: 'AI Agent Infrastructure Twin',
        physicalSystem: 'Distributed Computing Cluster',
        twinAccuracy: 99.8,
        realTimeSynchronization: '1ms latency',
        aiModelIntegration: 'DEEP_LEARNING',
        predictiveCapability: 97.4,
        anomalyDetection: 'ENABLED',
        status: 'SYNCHRONIZED',
        dataPoints: 2847000,
        updateFrequency: '100Hz',
        virtualComponents: 456,
        digitalFidelity: 98.9,
        convergenceState: 'PERFECT_MIRROR'
      },
      {
        id: 'TWIN-002',
        name: 'Content Processing Pipeline Twin',
        physicalSystem: 'Instagram Analysis Network',
        twinAccuracy: 96.7,
        realTimeSynchronization: '2.5ms latency',
        aiModelIntegration: 'TRANSFORMER_MODELS',
        predictiveCapability: 94.8,
        anomalyDetection: 'LEARNING',
        status: 'ACTIVE_LEARNING',
        dataPoints: 1234000,
        updateFrequency: '60Hz',
        virtualComponents: 234,
        digitalFidelity: 94.3,
        convergenceState: 'ADAPTIVE_SYNC'
      },
      {
        id: 'TWIN-003',
        name: 'Molecular Machine Simulation Twin',
        physicalSystem: 'Biological Computing Matrix',
        twinAccuracy: 99.4,
        realTimeSynchronization: '0.1ms latency',
        aiModelIntegration: 'QUANTUM_NEURAL',
        predictiveCapability: 98.7,
        anomalyDetection: 'MOLECULAR_LEVEL',
        status: 'QUANTUM_ENTANGLED',
        dataPoints: 5678000,
        updateFrequency: '1000Hz',
        virtualComponents: 1247,
        digitalFidelity: 99.6,
        convergenceState: 'QUANTUM_SYNCHRONIZED'
      }
    ],
    extendedReality: [
      {
        id: 'XR-001',
        platform: 'Mixed Reality Command Interface',
        immersionLevel: 'Full Sensory',
        spatialTracking: '6DOF + Eye Tracking',
        handTracking: 'Precision Finger Detection',
        hapticFeedback: 'Ultrasonic + Thermal',
        latency: '8ms motion-to-photon',
        status: 'IMMERSIVE',
        userPresence: 'ACTIVE',
        environmentMapping: 'REAL_TIME',
        objectOcclusion: 'PERFECT',
        lightingMatching: 'PHOTOREALISTIC'
      },
      {
        id: 'XR-002',
        platform: 'Augmented Intelligence Overlay',
        immersionLevel: 'Cognitive Enhancement',
        spatialTracking: 'Neural Interface',
        handTracking: 'Thought-to-Action',
        hapticFeedback: 'Neural Stimulation',
        latency: '0.5ms thought-to-response',
        status: 'NEURAL_LINKED',
        userPresence: 'ENHANCED',
        environmentMapping: 'PREDICTIVE',
        objectOcclusion: 'QUANTUM_COMPUTED',
        lightingMatching: 'IMPOSSIBLE_PRECISION'
      }
    ]
  });

  const [holographicMetrics, setHolographicMetrics] = useState({
    holographicFidelity: 98.9,
    digitalTwinAccuracy: 97.6,
    realityConvergence: 96.8,
    spatialComputing: 98.4,
    computationalHolography: 94.7,
    molecularVisualization: 99.2,
    interactiveResponse: 95.8,
    quantumSynchronization: 97.3,
    immersivePresence: 96.1,
    aiInformedModeling: 98.7
  });

  const [realTimeSimulations] = useState([
    {
      id: 'SIM-001',
      name: 'Neural Network Topology Visualization',
      type: 'AI_ARCHITECTURE',
      complexity: 'Multi-dimensional',
      renderTime: '16.7ms',
      accuracy: 99.1,
      interactivity: 'FULL',
      status: 'RENDERING',
      particles: 2450000,
      connections: 15600000,
      dataFlow: 'REAL_TIME',
      visualFidelity: 'PHOTOREALISTIC'
    },
    {
      id: 'SIM-002',
      name: 'Molecular Machine Assembly Process',
      type: 'BIOLOGICAL_COMPUTING',
      complexity: 'Quantum molecular',
      renderTime: '8.3ms',
      accuracy: 99.8,
      interactivity: 'MOLECULAR',
      status: 'QUANTUM_SYNC',
      particles: 8970000,
      connections: 45600000,
      dataFlow: 'QUANTUM_ENTANGLED',
      visualFidelity: 'BEYOND_PHYSICAL'
    },
    {
      id: 'SIM-003',
      name: 'Multi-Agent Communication Network',
      type: 'DISTRIBUTED_INTELLIGENCE',
      complexity: 'Network topology',
      renderTime: '33.3ms',
      accuracy: 96.4,
      interactivity: 'COLLABORATIVE',
      status: 'ACTIVE_MESH',
      particles: 567000,
      connections: 3400000,
      dataFlow: 'BIDIRECTIONAL',
      visualFidelity: 'ENHANCED_REALITY'
    }
  ]);

  const [convergenceOperations] = useState([
    {
      id: 'CONV-001',
      operation: 'Physical-Digital Synchronization',
      convergenceLevel: 99.7,
      latencyMs: 0.8,
      dataIntegrity: 99.9,
      status: 'PERFECT_SYNC',
      bidirectionalFlow: 'ENABLED',
      realTimeUpdates: 'CONTINUOUS',
      errorCorrection: 'QUANTUM_LEVEL',
      fidelityMaintenance: 'AUTOMATED'
    },
    {
      id: 'CONV-002',
      operation: 'AI Model Reality Convergence',
      convergenceLevel: 97.3,
      latencyMs: 2.1,
      dataIntegrity: 98.6,
      status: 'CONVERGING',
      bidirectionalFlow: 'LEARNING',
      realTimeUpdates: 'ADAPTIVE',
      errorCorrection: 'ML_OPTIMIZED',
      fidelityMaintenance: 'IMPROVING'
    },
    {
      id: 'CONV-003',
      operation: 'Molecular-Digital Bridge',
      convergenceLevel: 98.8,
      latencyMs: 0.1,
      dataIntegrity: 99.7,
      status: 'QUANTUM_BRIDGED',
      bidirectionalFlow: 'QUANTUM_ENTANGLED',
      realTimeUpdates: 'INSTANTANEOUS',
      errorCorrection: 'MOLECULAR_PRECISION',
      fidelityMaintenance: 'PERFECT'
    }
  ]);

  const [holographicAlerts] = useState([
    {
      id: 'HOLO-ALERT-001',
      type: 'COMPUTATIONAL_OPTIMIZATION',
      severity: 'INFO',
      message: 'Holographic rendering efficiency increased by 23.7% with new light field algorithms',
      system: 'HOLO-001',
      timestamp: '3 min ago',
      autoResolve: true
    },
    {
      id: 'HOLO-ALERT-002',
      type: 'DIGITAL_TWIN_SYNC',
      severity: 'MEDIUM',
      message: 'Digital twin synchronization drift detected - compensating with AI prediction models',
      system: 'TWIN-002',
      timestamp: '7 min ago',
      autoResolve: true
    },
    {
      id: 'HOLO-ALERT-003',
      type: 'REALITY_CONVERGENCE',
      severity: 'HIGH',
      message: 'Perfect reality convergence achieved in molecular visualization chamber',
      system: 'HOLO-003',
      timestamp: '12 min ago',
      autoResolve: false
    }
  ]);

  const [processingMetrics] = useState({
    holographicProcessingPower: '47.2 ExaFLOPS',
    realTimeRenderingCapacity: '8.9 billion polygons/sec',
    digitalTwinProcessingLoad: '156.7 TFLOPS',
    spatialComputingThroughput: '2.3 billion spatial queries/sec',
    molecularSimulationSpeed: '890.4 molecular dynamics/ms',
    quantumSynchronizationBandwidth: '15.6 PB/sec',
    aiInferenceThroughput: '234.5 trillion parameters/sec',
    realityConvergenceLatency: '0.7ms average',
    immersiveResponseTime: '4.2ms end-to-end',
    holographicDataThroughput: '89.2 TB/sec'
  });

  // Real-time holographic system simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setHolographicSystems(prev => ({
        ...prev,
        holographicDisplays: prev.holographicDisplays.map(display => ({
          ...display,
          brightness: Math.max(8000, Math.min(16000, display.brightness + (Math.random() - 0.5) * 200)),
          holographicAccuracy: Math.max(95, Math.min(100, display.holographicAccuracy + (Math.random() - 0.5) * 1.5))
        })),
        digitalTwins: prev.digitalTwins.map(twin => ({
          ...twin,
          twinAccuracy: Math.max(92, Math.min(100, twin.twinAccuracy + (Math.random() - 0.5) * 1.8)),
          predictiveCapability: Math.max(90, Math.min(100, twin.predictiveCapability + (Math.random() - 0.5) * 2.2)),
          digitalFidelity: Math.max(90, Math.min(100, twin.digitalFidelity + (Math.random() - 0.5) * 1.5))
        }))
      }));

      setHolographicMetrics(prev => ({
        holographicFidelity: Math.max(90, Math.min(100, prev.holographicFidelity + (Math.random() - 0.5) * 1.5)),
        digitalTwinAccuracy: Math.max(85, Math.min(100, prev.digitalTwinAccuracy + (Math.random() - 0.5) * 2)),
        realityConvergence: Math.max(90, Math.min(100, prev.realityConvergence + (Math.random() - 0.5) * 1.8)),
        spatialComputing: Math.max(90, Math.min(100, prev.spatialComputing + (Math.random() - 0.5) * 1.3)),
        computationalHolography: Math.max(85, Math.min(100, prev.computationalHolography + (Math.random() - 0.5) * 2.5)),
        molecularVisualization: Math.max(95, Math.min(100, prev.molecularVisualization + (Math.random() - 0.5) * 1)),
        interactiveResponse: Math.max(90, Math.min(100, prev.interactiveResponse + (Math.random() - 0.5) * 1.7)),
        quantumSynchronization: Math.max(90, Math.min(100, prev.quantumSynchronization + (Math.random() - 0.5) * 1.6)),
        immersivePresence: Math.max(85, Math.min(100, prev.immersivePresence + (Math.random() - 0.5) * 2.3)),
        aiInformedModeling: Math.max(90, Math.min(100, prev.aiInformedModeling + (Math.random() - 0.5) * 1.4))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': case 'OPERATIONAL': case 'SYNCHRONIZED': return 'text-green-400';
      case 'CALIBRATING': case 'LEARNING': case 'CONVERGING': return 'text-yellow-400';
      case 'ENABLED': case 'OPTIMIZED': case 'IMMERSIVE': return 'text-cyan-400';
      case 'QUANTUM_ENTANGLED': case 'NEURAL_LINKED': case 'PERFECT_SYNC': return 'text-purple-400';
      case 'ULTRA_PRECISION': case 'BEYOND_PHYSICAL': case 'IMPOSSIBLE_PRECISION': return 'text-pink-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'INFO': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'HIGH': return 'border-purple-500 bg-purple-900/20 text-purple-300';
      case 'MEDIUM': return 'border-yellow-500 bg-yellow-900/20 text-yellow-300';
      case 'INFO': return 'border-blue-500 bg-blue-900/20 text-blue-300';
      default: return 'border-gray-500 bg-gray-900/20 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono relative overflow-hidden">
      {/* Holographic Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cyan-900/10 to-pink-900/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,69,19,0.1)_0%,transparent_50%)] animate-pulse"></div>
      
      {/* Header */}
      <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/50 to-cyan-900/50 rounded-lg p-6 mb-6 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              🌈✨ Holographic Digital Twin Mission Control
            </h1>
            <p className="text-gray-300 text-lg">
              2026 Computational Holography • AI-Informed Digital Twins • Reality Convergence • Molecular Visualization
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {new Date().toLocaleTimeString()}
            </div>
            <div className="text-sm text-gray-400">
              Holographic Systems Online
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-cyan-900/30 rounded p-3 border border-cyan-500/30">
            <div className="text-cyan-300 text-sm">Holographic Fidelity</div>
            <div className="text-2xl font-bold text-cyan-400">{holographicMetrics.holographicFidelity.toFixed(1)}%</div>
          </div>
          <div className="bg-purple-900/30 rounded p-3 border border-purple-500/30">
            <div className="text-purple-300 text-sm">Digital Twin Accuracy</div>
            <div className="text-2xl font-bold text-purple-400">{holographicMetrics.digitalTwinAccuracy.toFixed(1)}%</div>
          </div>
          <div className="bg-pink-900/30 rounded p-3 border border-pink-500/30">
            <div className="text-pink-300 text-sm">Reality Convergence</div>
            <div className="text-2xl font-bold text-pink-400">{holographicMetrics.realityConvergence.toFixed(1)}%</div>
          </div>
          <div className="bg-yellow-900/30 rounded p-3 border border-yellow-500/30">
            <div className="text-yellow-300 text-sm">Spatial Computing</div>
            <div className="text-2xl font-bold text-yellow-400">{holographicMetrics.spatialComputing.toFixed(1)}%</div>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Holographic Displays */}
        <div className="bg-gray-900/80 rounded-lg p-6 border border-cyan-500/30 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
            🌈 Computational Holographic Displays
          </h2>
          <div className="space-y-4">
            {holographicSystems.holographicDisplays.map((display) => (
              <div key={display.id} className="bg-gray-800/70 rounded-lg p-4 border border-cyan-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-white">{display.name}</div>
                  <div className={`px-2 py-1 rounded text-xs ${getStatusColor(display.status)}`}>
                    {display.status}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400">Technology:</span>
                    <span className="text-cyan-300 ml-2">{display.technology}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Resolution:</span>
                    <span className="text-purple-300 ml-2">{display.resolution}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Refresh Rate:</span>
                    <span className="text-green-300 ml-2">{display.refreshRate}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">FOV:</span>
                    <span className="text-yellow-300 ml-2">{display.fieldOfView}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Depth Layers:</span>
                    <span className="text-pink-300 ml-2">{display.depthLayers}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Pixel Density:</span>
                    <span className="text-orange-300 ml-2">{display.pixelDensity}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Brightness: {display.brightness.toLocaleString()} nits</span>
                    <span className="text-cyan-300">Accuracy: {display.holographicAccuracy.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${display.holographicAccuracy}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI-Informed Digital Twins */}
        <div className="bg-gray-900/80 rounded-lg p-6 border border-purple-500/30 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
            🤖 AI-Informed Digital Twins
          </h2>
          <div className="space-y-4">
            {holographicSystems.digitalTwins.map((twin) => (
              <div key={twin.id} className="bg-gray-800/70 rounded-lg p-4 border border-purple-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-white">{twin.name}</div>
                  <div className={`px-2 py-1 rounded text-xs ${getStatusColor(twin.convergenceState)}`}>
                    {twin.convergenceState.replace(/_/g, ' ')}
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-400">Physical System:</span>
                    <span className="text-purple-300 ml-2">{twin.physicalSystem}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-gray-400">Accuracy:</span>
                      <span className="text-green-300 ml-2">{twin.twinAccuracy.toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Sync Latency:</span>
                      <span className="text-cyan-300 ml-2">{twin.realTimeSynchronization}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">AI Integration:</span>
                      <span className="text-pink-300 ml-2">{twin.aiModelIntegration.replace(/_/g, ' ')}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Prediction:</span>
                      <span className="text-yellow-300 ml-2">{twin.predictiveCapability.toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Data Points:</span>
                      <span className="text-orange-300 ml-2">{twin.dataPoints.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Update Rate:</span>
                      <span className="text-emerald-300 ml-2">{twin.updateFrequency}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Digital Fidelity: {twin.digitalFidelity.toFixed(1)}%</span>
                    <span className="text-purple-300">Components: {twin.virtualComponents}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${twin.twinAccuracy}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-Time Simulations */}
        <div className="bg-gray-900/80 rounded-lg p-6 border border-green-500/30 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center">
            ⚡ Real-Time Holographic Simulations
          </h2>
          <div className="space-y-4">
            {realTimeSimulations.map((sim) => (
              <div key={sim.id} className="bg-gray-800/70 rounded-lg p-4 border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-white">{sim.name}</div>
                  <div className={`px-2 py-1 rounded text-xs ${getStatusColor(sim.status)}`}>
                    {sim.status.replace(/_/g, ' ')}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                  <div>
                    <span className="text-gray-400">Type:</span>
                    <span className="text-green-300 ml-2">{sim.type.replace(/_/g, ' ')}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Render Time:</span>
                    <span className="text-cyan-300 ml-2">{sim.renderTime}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Particles:</span>
                    <span className="text-purple-300 ml-2">{sim.particles.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Connections:</span>
                    <span className="text-yellow-300 ml-2">{sim.connections.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Data Flow:</span>
                    <span className="text-pink-300 ml-2">{sim.dataFlow.replace(/_/g, ' ')}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Fidelity:</span>
                    <span className="text-orange-300 ml-2">{sim.visualFidelity.replace(/_/g, ' ')}</span>
                  </div>
                </div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Accuracy: {sim.accuracy.toFixed(1)}%</span>
                  <span className="text-green-300">Complexity: {sim.complexity}</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${sim.accuracy}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reality Convergence Operations */}
        <div className="bg-gray-900/80 rounded-lg p-6 border border-pink-500/30 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-pink-400 mb-4 flex items-center">
            🔗 Reality Convergence Operations
          </h2>
          <div className="space-y-4">
            {convergenceOperations.map((op) => (
              <div key={op.id} className="bg-gray-800/70 rounded-lg p-4 border border-pink-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-white">{op.operation}</div>
                  <div className={`px-2 py-1 rounded text-xs ${getStatusColor(op.status)}`}>
                    {op.status.replace(/_/g, ' ')}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400">Convergence:</span>
                    <span className="text-pink-300 ml-2">{op.convergenceLevel.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Latency:</span>
                    <span className="text-cyan-300 ml-2">{op.latencyMs}ms</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Data Integrity:</span>
                    <span className="text-green-300 ml-2">{op.dataIntegrity.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Bidirectional:</span>
                    <span className="text-yellow-300 ml-2">{op.bidirectionalFlow.replace(/_/g, ' ')}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Updates:</span>
                    <span className="text-purple-300 ml-2">{op.realTimeUpdates}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Error Correction:</span>
                    <span className="text-orange-300 ml-2">{op.errorCorrection.replace(/_/g, ' ')}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Fidelity: {op.fidelityMaintenance}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${op.convergenceLevel}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extended Reality Interfaces */}
      <div className="relative mt-6 bg-gray-900/80 rounded-lg p-6 border border-yellow-500/30 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
          🥽 Extended Reality Interfaces
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {holographicSystems.extendedReality.map((xr) => (
            <div key={xr.id} className="bg-gray-800/70 rounded-lg p-4 border border-yellow-500/20 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="font-bold text-white">{xr.platform}</div>
                <div className={`px-2 py-1 rounded text-xs ${getStatusColor(xr.status)}`}>
                  {xr.status.replace(/_/g, ' ')}
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-400">Immersion:</span>
                  <span className="text-yellow-300 ml-2">{xr.immersionLevel}</span>
                </div>
                <div>
                  <span className="text-gray-400">Spatial Tracking:</span>
                  <span className="text-cyan-300 ml-2">{xr.spatialTracking}</span>
                </div>
                <div>
                  <span className="text-gray-400">Hand Tracking:</span>
                  <span className="text-purple-300 ml-2">{xr.handTracking}</span>
                </div>
                <div>
                  <span className="text-gray-400">Haptic Feedback:</span>
                  <span className="text-green-300 ml-2">{xr.hapticFeedback}</span>
                </div>
                <div>
                  <span className="text-gray-400">Latency:</span>
                  <span className="text-pink-300 ml-2">{xr.latency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Alerts */}
      <div className="relative mt-6 bg-gray-900/80 rounded-lg p-6 border border-red-500/30 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center">
          🚨 Holographic System Alerts
        </h2>
        <div className="space-y-3">
          {holographicAlerts.map((alert) => (
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

      {/* Processing Metrics */}
      <div className="relative mt-6 bg-gray-900/80 rounded-lg p-6 border border-emerald-500/30 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-emerald-400 mb-4 flex items-center">
          📊 Holographic Processing Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          {Object.entries(processingMetrics).map(([metric, value]) => (
            <div key={metric} className="bg-gray-800/50 rounded p-3">
              <div className="text-gray-400 text-xs mb-1">
                {metric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </div>
              <div className="text-lg font-bold text-emerald-400">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Holographic Metrics Grid */}
      <div className="relative mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(holographicMetrics).map(([metric, value]) => (
          <div key={metric} className="bg-gray-900/80 rounded-lg p-4 border border-gray-600 backdrop-blur-sm">
            <div className="text-xs text-gray-400 mb-1">
              {metric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </div>
            <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {value.toFixed(1)}%
            </div>
            <div className="w-full bg-gray-600 rounded-full h-1 mt-2">
              <div 
                className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 h-1 rounded-full transition-all duration-1000"
                style={{ width: `${value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative mt-6 text-center text-xs text-gray-500">
        Holographic Digital Twin Mission Control v2026.3 • Computational Holography + AI-Informed Digital Twins + Reality Convergence •
        March 2026 Berkeley Lab + CES 2026 + Interactive XR Integration
      </div>
    </div>
  );
}