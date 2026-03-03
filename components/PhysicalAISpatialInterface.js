// Mission Control v7.0 - Phase 7: Physical AI & Spatial Computing Interface
// Inspired by 2026 holographic workspace setups and spatial computing innovations
import { useState, useEffect } from 'react';

export default function PhysicalAISpatialInterface() {
  const [spatialData, setSpatialData] = useState({
    physicalAI: {
      mode: '3D_PERCEPTION_REASONING_CONTROL',
      spatialIntelligence: 97.8,
      physicalWorldMapping: 99.6,
      autonomousActions: 15743,
      spatialModels: [
        {
          space: 'Content Processing Environment',
          accuracy: 99.2,
          autonomy: 96.8,
          perception_depth: '360° holographic',
          reasoning_level: 'ADVANCED',
          control_precision: '0.1mm accuracy',
          physical_actions: 4821,
          spatial_understanding: 'PERFECT'
        },
        {
          space: 'Marketing Intelligence Zone',
          accuracy: 97.4,
          autonomy: 94.2,
          perception_depth: '3D behavioral mapping',
          reasoning_level: 'STRATEGIC',
          control_precision: '1ms response',
          physical_actions: 2763,
          spatial_understanding: 'COMPREHENSIVE'
        },
        {
          space: 'Infrastructure Command Center',
          accuracy: 99.8,
          autonomy: 98.9,
          perception_depth: 'Multi-dimensional visualization',
          reasoning_level: 'SYSTEM_LEVEL',
          control_precision: 'Atomic precision',
          physical_actions: 6847,
          spatial_understanding: 'TRANSCENDENT'
        },
        {
          space: 'Agent Coordination Sphere',
          accuracy: 96.1,
          autonomy: 97.7,
          perception_depth: 'Holographic network topology',
          reasoning_level: 'COLLECTIVE',
          control_precision: 'Quantum-level',
          physical_actions: 1312,
          spatial_understanding: 'EMERGENT'
        }
      ],
      perceptionSystems: {
        visualProcessing: 99.4,
        spatialAwareness: 98.7,
        temporalTracking: 96.9,
        dimensionalMapping: 99.1,
        physicalInteraction: 97.3
      }
    },
    holographicWorkspace: {
      protocol: 'HOLO_WORKSPACE_2026_v3.0',
      activeHolograms: 23,
      spatialResolution: '8K per eye, 120Hz',
      viewingAngles: '360° spherical',
      interactionLatency: '0.8ms',
      holographicDisplays: [
        {
          name: 'Primary Mission Hologram',
          size: '2m × 1.5m × 1m',
          resolution: '16K spatial',
          refresh_rate: '240Hz',
          interaction_type: 'GESTURE_THOUGHT_VOICE',
          content: 'Real-time system visualization',
          viewing_quality: 'PHOTOREALISTIC'
        },
        {
          name: 'Agent Network Sphere',
          size: '1.5m diameter',
          resolution: '12K spherical',
          refresh_rate: '180Hz',
          interaction_type: 'DIRECT_MANIPULATION',
          content: '3D agent coordination network',
          viewing_quality: 'ULTRA_IMMERSIVE'
        },
        {
          name: 'Data Flow Tunnel',
          size: '3m × 0.8m × 0.8m',
          resolution: '8K streaming',
          refresh_rate: '144Hz',
          interaction_type: 'SPATIAL_NAVIGATION',
          content: 'Information pipeline visualization',
          viewing_quality: 'CRYSTAL_CLEAR'
        },
        {
          name: 'Quantum State Visualization',
          size: '1m × 1m × 1m',
          resolution: '24K quantum',
          refresh_rate: '480Hz',
          interaction_type: 'QUANTUM_ENTANGLED',
          content: 'Quantum optimization states',
          viewing_quality: 'BEYOND_REALITY'
        }
      ],
      productivityGain: '+387%',
      traditionalMonitorReplacement: '100%'
    },
    spatialComputing: {
      engine: 'SPATIAL_COMPUTE_ULTRA_v4.0',
      spatialProcessors: 16,
      computeLatency: '0.2ms',
      spatialThreads: 47824,
      mappingAccuracy: 99.97,
      spatialOperations: [
        {
          operation: '3D Object Recognition & Tracking',
          accuracy: 99.8,
          speed: '0.3ms per object',
          spatial_precision: '±0.05mm',
          concurrent_objects: 15847,
          processing_type: 'REAL_TIME'
        },
        {
          operation: 'Environment Reconstruction',
          accuracy: 98.9,
          speed: '1.2ms full scan',
          spatial_precision: '±0.1mm',
          concurrent_objects: 'UNLIMITED',
          processing_type: 'CONTINUOUS'
        },
        {
          operation: 'Gesture & Movement Prediction',
          accuracy: 97.4,
          speed: '0.1ms prediction',
          spatial_precision: '±0.02mm',
          concurrent_objects: 'ALL_VISIBLE',
          processing_type: 'PREDICTIVE'
        },
        {
          operation: 'Holographic Content Placement',
          accuracy: 99.6,
          speed: '0.4ms positioning',
          spatial_precision: '±0.01mm',
          concurrent_objects: 23,
          processing_type: 'PRECISE'
        },
        {
          operation: 'Spatial AI Decision Making',
          accuracy: 96.7,
          speed: '0.05ms decision',
          spatial_precision: 'CONTEXTUAL',
          concurrent_objects: 'ENVIRONMENT',
          processing_type: 'INTELLIGENT'
        }
      ],
      spatialMemory: '847TB 3D data',
      realTimePerformance: 98.6
    },
    hapticInteraction: {
      system: 'ULTRASONIC_HAPTIC_FIELDS_v2.1',
      touchAccuracy: 99.1,
      forceResolution: '0.01N precision',
      tactileFeedback: 'ULTRA_REALISTIC',
      spatialRange: '2m interaction sphere',
      hapticChannels: [
        {
          channel: 'Gesture Control Interface',
          accuracy: 98.7,
          latency: '0.6ms',
          force_feedback: 'PRECISE',
          texture_simulation: 'PHOTOREALISTIC',
          interaction_quality: 'SEAMLESS'
        },
        {
          channel: 'Holographic Object Manipulation',
          accuracy: 97.9,
          latency: '0.8ms',
          force_feedback: 'DYNAMIC',
          texture_simulation: 'MATERIAL_ACCURATE',
          interaction_quality: 'NATURAL'
        },
        {
          channel: 'Data Sculpture Interface',
          accuracy: 96.3,
          latency: '1.2ms',
          force_feedback: 'ADAPTIVE',
          texture_simulation: 'ABSTRACT_REALISTIC',
          interaction_quality: 'INTUITIVE'
        },
        {
          channel: 'Spatial Menu Navigation',
          accuracy: 99.4,
          latency: '0.4ms',
          force_feedback: 'SUBTLE',
          texture_simulation: 'MINIMAL',
          interaction_quality: 'EFFORTLESS'
        },
        {
          channel: 'Emergency Override Touch',
          accuracy: 99.9,
          latency: '0.1ms',
          force_feedback: 'IMMEDIATE',
          texture_simulation: 'URGENT',
          interaction_quality: 'CRITICAL'
        }
      ],
      totalInteractions: 94721,
      satisfactionRating: '97.8%'
    },
    aiAvatarPresence: {
      protocol: 'AI_HOLOGRAPHIC_PRESENCE_v3.0',
      activeAvatars: 7,
      realismLevel: 'PHOTOREALISTIC_PLUS',
      emotionalIntelligence: 94.6,
      interactionNaturalness: 98.2,
      avatars: [
        {
          name: 'Aleksandra Prime',
          role: 'Mission Commander',
          appearance: 'PHOTOREALISTIC_HUMAN',
          personality: 'CONFIDENT_STRATEGIC',
          emotional_range: 'FULL_SPECTRUM',
          interaction_style: 'DIRECT_EFFICIENT',
          holographic_quality: 'INDISTINGUISHABLE',
          presence_strength: 99.7
        },
        {
          name: 'Data Synthesis Oracle',
          role: 'Information Analyst',
          appearance: 'ETHEREAL_GEOMETRIC',
          personality: 'ANALYTICAL_CALM',
          emotional_range: 'FOCUSED_CLARITY',
          interaction_style: 'METHODICAL_PRECISE',
          holographic_quality: 'CRYSTALLINE_PERFECT',
          presence_strength: 96.8
        },
        {
          name: 'Agent Coordinator Spirit',
          role: 'Network Administrator',
          appearance: 'FLOWING_ENERGY',
          personality: 'HARMONIOUS_ADAPTIVE',
          emotional_range: 'BALANCED_DYNAMIC',
          interaction_style: 'COLLABORATIVE_FLUID',
          holographic_quality: 'AURORA_LIKE',
          presence_strength: 94.3
        },
        {
          name: 'Quantum Guide Entity',
          role: 'Optimization Specialist',
          appearance: 'PROBABILITY_CLOUD',
          personality: 'MYSTERIOUS_WISE',
          emotional_range: 'QUANTUM_UNCERTAIN',
          interaction_style: 'PARADOXICAL_INSIGHT',
          holographic_quality: 'REALITY_BENDING',
          presence_strength: 87.9
        },
        {
          name: 'Emergency Response Guardian',
          role: 'Crisis Manager',
          appearance: 'ARMORED_DIGITAL',
          personality: 'PROTECTIVE_DECISIVE',
          emotional_range: 'ALERT_DETERMINED',
          interaction_style: 'URGENT_CLEAR',
          holographic_quality: 'SOLID_RELIABLE',
          presence_strength: 99.2
        }
      ],
      conversationalDepth: 'HUMAN_LEVEL_PLUS',
      empathyAccuracy: 93.7
    }
  });

  const [phase7Stats, setPhase7Stats] = useState({
    physicalAIIntelligence: 97.8,
    holographicDisplays: 4,
    spatialOperations: 47824,
    hapticInteractions: 94721,
    aiAvatars: 7,
    spatialComputing: 98.6
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSpatialData(prev => ({
        ...prev,
        physicalAI: {
          ...prev.physicalAI,
          spatialIntelligence: Math.max(95, Math.min(100, prev.physicalAI.spatialIntelligence + (Math.random() - 0.4) * 0.5)),
          autonomousActions: prev.physicalAI.autonomousActions + Math.floor(Math.random() * 8)
        },
        spatialComputing: {
          ...prev.spatialComputing,
          spatialThreads: prev.spatialComputing.spatialThreads + Math.floor(Math.random() * 12),
          realTimePerformance: Math.max(95, Math.min(100, prev.spatialComputing.realTimePerformance + (Math.random() - 0.5) * 0.6))
        },
        hapticInteraction: {
          ...prev.hapticInteraction,
          totalInteractions: prev.hapticInteraction.totalInteractions + Math.floor(Math.random() * 15)
        }
      }));
      
      setPhase7Stats(prev => ({
        ...prev,
        physicalAIIntelligence: Math.max(95, Math.min(100, prev.physicalAIIntelligence + (Math.random() - 0.5) * 0.4)),
        spatialOperations: prev.spatialOperations + Math.floor(Math.random() * 20),
        hapticInteractions: prev.hapticInteractions + Math.floor(Math.random() * 10)
      }));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const getQualityColor = (quality) => {
    const qualityColors = {
      'PHOTOREALISTIC': 'text-green-400 bg-green-900/30',
      'ULTRA_IMMERSIVE': 'text-blue-400 bg-blue-900/30',
      'CRYSTAL_CLEAR': 'text-cyan-400 bg-cyan-900/30',
      'BEYOND_REALITY': 'text-purple-400 bg-purple-900/30',
      'PHOTOREALISTIC_PLUS': 'text-pink-400 bg-pink-900/30',
      'INDISTINGUISHABLE': 'text-red-400 bg-red-900/30',
      'CRYSTALLINE_PERFECT': 'text-blue-300 bg-blue-900/30',
      'AURORA_LIKE': 'text-green-300 bg-green-900/30',
      'REALITY_BENDING': 'text-purple-300 bg-purple-900/30',
      'SOLID_RELIABLE': 'text-gray-300 bg-gray-900/30'
    };
    return qualityColors[quality] || 'text-gray-400 bg-gray-900/30';
  };

  const getReasoningColor = (level) => {
    const levelColors = {
      'ADVANCED': 'text-blue-400',
      'STRATEGIC': 'text-green-400',
      'SYSTEM_LEVEL': 'text-purple-400',
      'COLLECTIVE': 'text-cyan-400'
    };
    return levelColors[level] || 'text-gray-400';
  };

  const getUnderstandingColor = (understanding) => {
    const understandingColors = {
      'PERFECT': 'text-green-400',
      'COMPREHENSIVE': 'text-blue-400',
      'TRANSCENDENT': 'text-purple-400',
      'EMERGENT': 'text-pink-400'
    };
    return understandingColors[understanding] || 'text-gray-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-blue-300 mb-2">🏗️🌐 Physical AI & Spatial Computing</h2>
          <p className="text-gray-400">Phase 7: 2026 Holographic Workspace • 3D Perception-Reasoning-Control • Spatial Intelligence</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-blue-300">
            Physical AI Intelligence: {phase7Stats.physicalAIIntelligence.toFixed(1)}%
          </div>
          <div className="text-sm text-gray-400">{phase7Stats.holographicDisplays} Holographic Displays • {phase7Stats.aiAvatars} AI Avatars</div>
        </div>
      </div>

      {/* Phase 7 Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.entries(phase7Stats).map(([key, value]) => (
          <div key={key} className="bg-gray-800/50 rounded-lg p-4 border border-blue-500/30">
            <div className="text-2xl font-bold text-blue-300">
              {typeof value === 'number' ? (
                key.includes('Intelligence') || key.includes('Computing') 
                  ? `${value.toFixed(1)}%` 
                  : value.toLocaleString()
              ) : value}
            </div>
            <div className="text-sm text-gray-400 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
          </div>
        ))}
      </div>

      {/* Physical AI System */}
      <div className="bg-gray-800/50 border border-green-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-green-300 mb-4 flex items-center">
          🏗️ Physical AI: Perception-Reasoning-Control
          <span className="ml-3 text-sm text-green-400">
            {spatialData.physicalAI.mode} • {spatialData.physicalAI.spatialIntelligence.toFixed(1)}% Intelligence
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-green-300 mb-3">🌐 Spatial Environment Models</h4>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {spatialData.physicalAI.spatialModels.map((model, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-green-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-green-300 text-sm">{model.space}</span>
                    <span className={`text-sm ${getUnderstandingColor(model.spatial_understanding)}`}>
                      {model.spatial_understanding}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">{model.perception_depth}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div>Accuracy: <span className="text-green-400">{model.accuracy}%</span></div>
                    <div>Autonomy: <span className="text-blue-400">{model.autonomy}%</span></div>
                    <div className={`col-span-2 ${getReasoningColor(model.reasoning_level)}`}>
                      Reasoning: {model.reasoning_level}
                    </div>
                  </div>
                  <div className="text-xs text-cyan-400">
                    Control: {model.control_precision} • Actions: {model.physical_actions}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-300 mb-3">🧠 Perception Systems</h4>
            <div className="space-y-3">
              {Object.entries(spatialData.physicalAI.perceptionSystems).map(([system, value]) => (
                <div key={system} className="bg-gray-900/50 rounded-lg p-4 border border-green-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-green-300 text-sm capitalize">
                      {system.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-sm text-green-400">{value}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-green-500/20 text-center mt-4">
              <div className="text-2xl font-bold text-green-300">{spatialData.physicalAI.autonomousActions.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Autonomous Actions</div>
              <div className="text-xs text-green-400 mt-1">Real-world impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Holographic Workspace */}
      <div className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
          🔮 Holographic Workspace 2026
          <span className="ml-3 text-sm text-purple-400">
            {spatialData.holographicWorkspace.protocol} • {spatialData.holographicWorkspace.activeHolograms} Active Displays
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-3">🖥️ Holographic Display Array</h4>
            <div className="space-y-3 max-h-72 overflow-y-auto">
              {spatialData.holographicWorkspace.holographicDisplays.map((display, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-purple-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-purple-300 text-sm">{display.name}</span>
                    <span className={`px-2 py-1 rounded text-xs ${getQualityColor(display.viewing_quality)}`}>
                      {display.viewing_quality}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">{display.content}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-1">
                    <div>Size: <span className="text-purple-400">{display.size}</span></div>
                    <div>Res: <span className="text-blue-400">{display.resolution}</span></div>
                  </div>
                  <div className="text-xs text-cyan-400">
                    {display.refresh_rate} • {display.interaction_type}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-3">📈 Workspace Performance</h4>
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-purple-500/20 text-center">
                <div className="text-3xl font-bold text-green-300">{spatialData.holographicWorkspace.productivityGain}</div>
                <div className="text-sm text-gray-400">Productivity Gain</div>
                <div className="text-xs text-purple-400 mt-1">Over traditional monitors</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-purple-500/20 text-center">
                  <div className="text-lg font-bold text-purple-300">{spatialData.holographicWorkspace.spatialResolution}</div>
                  <div className="text-xs text-gray-400">Resolution</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3 border border-purple-500/20 text-center">
                  <div className="text-lg font-bold text-purple-300">{spatialData.holographicWorkspace.interactionLatency}</div>
                  <div className="text-xs text-gray-400">Interaction Latency</div>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 border border-purple-500/20 text-center">
                <div className="text-lg font-bold text-red-300">{spatialData.holographicWorkspace.traditionalMonitorReplacement}</div>
                <div className="text-xs text-gray-400">Monitor Replacement</div>
                <div className="text-xs text-red-400">End of traditional screens</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spatial Computing */}
      <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
          🌌 Spatial Computing Engine
          <span className="ml-3 text-sm text-cyan-400">
            {spatialData.spatialComputing.engine} • {spatialData.spatialComputing.spatialProcessors} Processors
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-3">⚡ Spatial Operations</h4>
            <div className="space-y-3 max-h-72 overflow-y-auto">
              {spatialData.spatialComputing.spatialOperations.map((operation, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-cyan-300 text-sm">{operation.operation}</span>
                    <span className="text-sm text-cyan-400">{operation.accuracy}%</span>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">{operation.processing_type}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>Speed: <span className="text-cyan-400">{operation.speed}</span></div>
                    <div>Precision: <span className="text-green-400">{operation.spatial_precision}</span></div>
                  </div>
                  <div className="text-xs text-blue-400 mt-1">
                    Objects: {operation.concurrent_objects}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-3">🚀 Computing Performance</h4>
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/20 text-center">
                <div className="text-3xl font-bold text-cyan-300">{spatialData.spatialComputing.mappingAccuracy}%</div>
                <div className="text-sm text-gray-400">Mapping Accuracy</div>
                <div className="text-xs text-cyan-400 mt-1">Ultra-precise spatial awareness</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-cyan-500/20 text-center">
                  <div className="text-lg font-bold text-cyan-300">{spatialData.spatialComputing.computeLatency}</div>
                  <div className="text-xs text-gray-400">Compute Latency</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3 border border-cyan-500/20 text-center">
                  <div className="text-lg font-bold text-cyan-300">{spatialData.spatialComputing.spatialThreads.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Spatial Threads</div>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 border border-cyan-500/20 text-center">
                <div className="text-lg font-bold text-blue-300">{spatialData.spatialComputing.spatialMemory}</div>
                <div className="text-xs text-gray-400">Spatial Memory</div>
                <div className="text-xs text-blue-400">3D data storage</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Haptic Interaction */}
      <div className="bg-gray-800/50 border border-orange-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-orange-300 mb-4 flex items-center">
          🤏 Ultrasonic Haptic Interface
          <span className="ml-3 text-sm text-orange-400">
            {spatialData.hapticInteraction.system} • {spatialData.hapticInteraction.spatialRange} Range
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-orange-300 mb-3">✋ Haptic Channels</h4>
            <div className="space-y-3 max-h-72 overflow-y-auto">
              {spatialData.hapticInteraction.hapticChannels.map((channel, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-orange-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-orange-300 text-sm">{channel.channel}</span>
                    <span className="text-sm text-orange-400">{channel.accuracy}%</span>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">{channel.interaction_quality}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>Latency: <span className="text-orange-400">{channel.latency}</span></div>
                    <div>Force: <span className="text-yellow-400">{channel.force_feedback}</span></div>
                  </div>
                  <div className="text-xs text-green-400 mt-1">
                    Texture: {channel.texture_simulation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-300 mb-3">🎯 Haptic Performance</h4>
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-orange-500/20 text-center">
                <div className="text-3xl font-bold text-orange-300">{spatialData.hapticInteraction.touchAccuracy}%</div>
                <div className="text-sm text-gray-400">Touch Accuracy</div>
                <div className="text-xs text-orange-400 mt-1">Ultra-realistic feedback</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-orange-500/20 text-center">
                  <div className="text-lg font-bold text-orange-300">{spatialData.hapticInteraction.forceResolution}</div>
                  <div className="text-xs text-gray-400">Force Resolution</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3 border border-orange-500/20 text-center">
                  <div className="text-lg font-bold text-orange-300">{spatialData.hapticInteraction.totalInteractions.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Total Interactions</div>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 border border-orange-500/20 text-center">
                <div className="text-lg font-bold text-green-300">{spatialData.hapticInteraction.satisfactionRating}</div>
                <div className="text-xs text-gray-400">User Satisfaction</div>
                <div className="text-xs text-green-400">Natural interaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Avatar Presence */}
      <div className="bg-gray-800/50 border border-pink-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-pink-300 mb-4 flex items-center">
          👥 AI Holographic Avatar Presence
          <span className="ml-3 text-sm text-pink-400">
            {spatialData.aiAvatarPresence.protocol} • {spatialData.aiAvatarPresence.realismLevel} Quality
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-pink-300 mb-3">🤖 Holographic Avatars</h4>
            <div className="space-y-3 max-h-72 overflow-y-auto">
              {spatialData.aiAvatarPresence.avatars.map((avatar, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-pink-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-pink-300 text-sm">{avatar.name}</span>
                    <span className="text-sm text-pink-400">{avatar.presence_strength}%</span>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">{avatar.role} • {avatar.personality}</div>
                  <div className="text-xs text-gray-400 mb-1">{avatar.appearance}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className={`col-span-2 ${getQualityColor(avatar.holographic_quality)} rounded px-2 py-1`}>
                      {avatar.holographic_quality}
                    </div>
                  </div>
                  <div className="text-xs text-cyan-400 mt-1">
                    Style: {avatar.interaction_style}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-pink-300 mb-3">🧠 Avatar Intelligence</h4>
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-pink-500/20 text-center">
                <div className="text-3xl font-bold text-pink-300">{spatialData.aiAvatarPresence.emotionalIntelligence}%</div>
                <div className="text-sm text-gray-400">Emotional Intelligence</div>
                <div className="text-xs text-pink-400 mt-1">Human-level understanding</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-pink-500/20 text-center">
                  <div className="text-lg font-bold text-pink-300">{spatialData.aiAvatarPresence.interactionNaturalness}%</div>
                  <div className="text-xs text-gray-400">Naturalness</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3 border border-pink-500/20 text-center">
                  <div className="text-lg font-bold text-pink-300">{spatialData.aiAvatarPresence.empathyAccuracy}%</div>
                  <div className="text-xs text-gray-400">Empathy Accuracy</div>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 border border-pink-500/20 text-center">
                <div className="text-lg font-bold text-purple-300">{spatialData.aiAvatarPresence.conversationalDepth}</div>
                <div className="text-xs text-gray-400">Conversational Depth</div>
                <div className="text-xs text-purple-400">Beyond human capability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}