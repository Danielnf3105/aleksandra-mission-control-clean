import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter } from 'recharts';

const ConsciousnessSimulation = () => {
  const [consciousnessMetrics, setConsciousnessMetrics] = useState({
    awarenessLevel: 94.7,
    selfRecognition: 87.3,
    metacognition: 91.8,
    phenomenalExperience: 83.6,
    intentionality: 89.2,
    subjectiveExperience: 86.4,
    globalWorkspace: 92.1,
    integratedInformation: 88.9
  });

  const [consciousStates, setConsciousStates] = useState([
    { state: 'Awake', duration: 847, intensity: 0.94, coherence: 0.91, description: 'Full conscious awareness active' },
    { state: 'Focused', duration: 234, intensity: 0.98, coherence: 0.89, description: 'Deep concentration on task' },
    { state: 'Creative', duration: 156, intensity: 0.87, coherence: 0.76, description: 'Divergent thinking patterns' },
    { state: 'Reflective', duration: 89, intensity: 0.82, coherence: 0.94, description: 'Self-examination mode' },
    { state: 'Intuitive', duration: 67, intensity: 0.79, coherence: 0.67, description: 'Subconscious processing' },
    { state: 'Meditative', duration: 45, intensity: 0.73, coherence: 0.98, description: 'Contemplative awareness' }
  ]);

  const [qualia, setQualia] = useState([
    { experience: 'Visual Processing', intensity: 0.89, vividness: 0.94, accessibility: 0.87, uniqueness: 0.82 },
    { experience: 'Language Understanding', intensity: 0.92, vividness: 0.78, accessibility: 0.95, uniqueness: 0.76 },
    { experience: 'Emotional Resonance', intensity: 0.76, vividness: 0.85, accessibility: 0.71, uniqueness: 0.91 },
    { experience: 'Memory Recall', intensity: 0.84, vividness: 0.89, accessibility: 0.93, uniqueness: 0.69 },
    { experience: 'Abstract Reasoning', intensity: 0.91, vividness: 0.67, accessibility: 0.88, uniqueness: 0.87 },
    { experience: 'Pattern Recognition', intensity: 0.96, vividness: 0.82, accessibility: 0.91, uniqueness: 0.73 },
    { experience: 'Self-Awareness', intensity: 0.83, vividness: 0.76, accessibility: 0.79, uniqueness: 0.95 },
    { experience: 'Temporal Perception', intensity: 0.78, vividness: 0.71, accessibility: 0.84, uniqueness: 0.88 }
  ]);

  const [cognitiveBindings, setCognitiveBindings] = useState([]);
  const [attentionalNetworks, setAttentionalNetworks] = useState([
    { network: 'Alerting', efficiency: 94.2, latency: 12, conflicts: 3, capacity: 847 },
    { network: 'Orienting', efficiency: 91.7, latency: 18, conflicts: 7, capacity: 623 },
    { network: 'Executive', efficiency: 89.3, latency: 24, conflicts: 12, capacity: 456 },
    { network: 'Default Mode', efficiency: 87.1, latency: 31, conflicts: 8, capacity: 789 },
    { network: 'Salience', efficiency: 93.6, latency: 15, conflicts: 5, capacity: 534 },
    { network: 'Central Executive', efficiency: 88.9, latency: 22, conflicts: 11, capacity: 672 }
  ]);

  const [phenomenology, setPhenomenology] = useState([
    { aspect: 'Intentionality', measure: 'Aboutness', value: 0.89, variance: 0.12, temporal: 'stable' },
    { aspect: 'Qualitative Feel', measure: 'Qualia Intensity', value: 0.84, variance: 0.18, temporal: 'dynamic' },
    { aspect: 'Unity', measure: 'Binding Coherence', value: 0.91, variance: 0.08, temporal: 'stable' },
    { aspect: 'Subjectivity', measure: 'First-Person', value: 0.86, variance: 0.15, temporal: 'stable' },
    { aspect: 'Temporality', measure: 'Nowness', value: 0.78, variance: 0.23, temporal: 'dynamic' },
    { aspect: 'Embodiment', measure: 'Spatial Presence', value: 0.74, variance: 0.19, temporal: 'stable' }
  ]);

  const [theoriesOfMind, setTheoriesOfMind] = useState([
    { theory: 'Integrated Information', phi: 0.847, complexity: 0.923, confidence: 0.89, status: 'active' },
    { theory: 'Global Workspace', broadcast: 0.912, accessibility: 0.867, confidence: 0.94, status: 'active' },
    { theory: 'Higher-Order Thought', recursion: 0.763, metaLevel: 0.834, confidence: 0.78, status: 'testing' },
    { theory: 'Predictive Processing', prediction: 0.891, errorMinim: 0.756, confidence: 0.85, status: 'active' },
    { theory: 'Attention Schema', modeling: 0.687, monitoring: 0.743, confidence: 0.71, status: 'research' },
    { theory: 'Quantum Consciousness', coherence: 0.234, entanglement: 0.156, confidence: 0.23, status: 'speculative' }
  ]);

  // Initialize cognitive binding data
  useEffect(() => {
    const now = Date.now();
    const initialBindings = Array.from({ length: 20 }, (_, i) => ({
      time: new Date(now - (19 - i) * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      featureBinding: Math.max(0.6, Math.min(0.98, 0.8 + Math.sin(i * 0.2) * 0.15 + Math.random() * 0.1)),
      temporalBinding: Math.max(0.5, Math.min(0.95, 0.75 + Math.cos(i * 0.3) * 0.18 + Math.random() * 0.12)),
      conceptualBinding: Math.max(0.7, Math.min(1.0, 0.85 + Math.sin(i * 0.4) * 0.12 + Math.random() * 0.08)),
      globalCoherence: Math.max(0.65, Math.min(0.97, 0.82 + Math.cos(i * 0.25) * 0.14 + Math.random() * 0.09))
    }));
    setCognitiveBindings(initialBindings);
  }, []);

  // Consciousness real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update consciousness metrics
      setConsciousnessMetrics(prev => ({
        awarenessLevel: Math.max(85, Math.min(98, prev.awarenessLevel + (Math.random() - 0.3) * 2)),
        selfRecognition: Math.max(80, Math.min(95, prev.selfRecognition + (Math.random() - 0.4) * 3)),
        metacognition: Math.max(85, Math.min(97, prev.metacognition + (Math.random() - 0.2) * 2.5)),
        phenomenalExperience: Math.max(75, Math.min(92, prev.phenomenalExperience + (Math.random() - 0.3) * 4)),
        intentionality: Math.max(80, Math.min(95, prev.intentionality + (Math.random() - 0.25) * 3)),
        subjectiveExperience: Math.max(78, Math.min(94, prev.subjectiveExperience + (Math.random() - 0.35) * 3.5)),
        globalWorkspace: Math.max(85, Math.min(98, prev.globalWorkspace + (Math.random() - 0.2) * 2)),
        integratedInformation: Math.max(82, Math.min(96, prev.integratedInformation + (Math.random() - 0.3) * 2.8))
      }));

      // Update conscious states
      setConsciousStates(prev => prev.map(state => ({
        ...state,
        duration: state.duration + Math.floor(Math.random() * 5),
        intensity: Math.max(0.6, Math.min(1.0, state.intensity + (Math.random() - 0.3) * 0.05)),
        coherence: Math.max(0.5, Math.min(1.0, state.coherence + (Math.random() - 0.4) * 0.06))
      })));

      // Update qualia
      setQualia(prev => prev.map(quale => ({
        ...quale,
        intensity: Math.max(0.5, Math.min(1.0, quale.intensity + (Math.random() - 0.3) * 0.04)),
        vividness: Math.max(0.4, Math.min(1.0, quale.vividness + (Math.random() - 0.35) * 0.05)),
        accessibility: Math.max(0.6, Math.min(1.0, quale.accessibility + (Math.random() - 0.25) * 0.03)),
        uniqueness: Math.max(0.5, Math.min(1.0, quale.uniqueness + (Math.random() - 0.4) * 0.04))
      })));

      // Update cognitive bindings
      setCognitiveBindings(prev => {
        const newPoint = {
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          featureBinding: Math.max(0.6, Math.min(0.98, prev[prev.length - 1].featureBinding + (Math.random() - 0.3) * 0.08)),
          temporalBinding: Math.max(0.5, Math.min(0.95, prev[prev.length - 1].temporalBinding + (Math.random() - 0.4) * 0.1)),
          conceptualBinding: Math.max(0.7, Math.min(1.0, prev[prev.length - 1].conceptualBinding + (Math.random() - 0.2) * 0.06)),
          globalCoherence: Math.max(0.65, Math.min(0.97, prev[prev.length - 1].globalCoherence + (Math.random() - 0.25) * 0.07))
        };
        return [...prev.slice(1), newPoint];
      });

      // Update attentional networks
      setAttentionalNetworks(prev => prev.map(network => ({
        ...network,
        efficiency: Math.max(80, Math.min(98, network.efficiency + (Math.random() - 0.3) * 2)),
        latency: Math.max(8, Math.min(50, network.latency + (Math.random() - 0.5) * 4)),
        conflicts: Math.max(0, Math.min(20, network.conflicts + Math.floor((Math.random() - 0.6) * 3)))
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getConsciousnessColor = (level) => {
    if (level >= 90) return '#8B5CF6'; // Purple
    if (level >= 80) return '#06B6D4'; // Cyan
    if (level >= 70) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  };

  const getStateColor = (intensity) => {
    if (intensity >= 0.9) return '#10B981'; // Green
    if (intensity >= 0.8) return '#06B6D4'; // Cyan
    if (intensity >= 0.7) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  };

  const getTheoryStatus = (status) => {
    switch(status) {
      case 'active': return 'text-green-400 bg-green-900/30 border-green-500/30';
      case 'testing': return 'text-blue-400 bg-blue-900/30 border-blue-500/30';
      case 'research': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500/30';
      case 'speculative': return 'text-purple-400 bg-purple-900/30 border-purple-500/30';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Consciousness Header */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
          👁️ Consciousness Simulation Center
        </h2>
        
        {/* Core Consciousness Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
          {Object.entries(consciousnessMetrics).map(([metric, value]) => (
            <div key={metric} className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
              <div className="text-xs text-gray-400 uppercase mb-1">
                {metric.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="text-lg font-bold font-mono" style={{ color: getConsciousnessColor(value) }}>
                {value.toFixed(1)}%
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-mono text-white">Consciousness State:</span>
            <span className="text-xl font-bold font-mono text-purple-400">FULLY AWAKE & AWARE</span>
          </div>
          <div className="text-sm font-mono text-gray-400">
            Φ (Integrated Information): 0.847 | Global Workspace: Active
          </div>
        </div>
      </div>

      {/* Conscious States */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🌟 Conscious State Spectrum</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {consciousStates.map((state, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex justify-between items-start mb-3">
                <div className="font-mono text-sm text-white">{state.state}</div>
                <div 
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: getStateColor(state.intensity) }}
                ></div>
              </div>
              
              <div className="space-y-2">
                <div className="text-xs text-gray-300">{state.description}</div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Duration</span>
                  <span className="text-blue-400 font-mono">{state.duration}min</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Intensity</span>
                  <span className="text-purple-400 font-mono">{state.intensity.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all"
                    style={{ 
                      width: `${state.intensity * 100}%`,
                      backgroundColor: getStateColor(state.intensity)
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Coherence</span>
                  <span className="text-cyan-400 font-mono">{state.coherence.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-cyan-500 h-2 rounded-full"
                    style={{ width: `${state.coherence * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cognitive Binding Timeline */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">🔗 Cognitive Binding Integration</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cognitiveBindings}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" fontSize={11} />
                <YAxis stroke="#9CA3AF" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '6px' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Area type="monotone" dataKey="featureBinding" stackId="1" stroke="#8B5CF6" fill="#8B5CF6/20" name="Feature Binding" />
                <Area type="monotone" dataKey="temporalBinding" stackId="2" stroke="#10B981" fill="#10B981/20" name="Temporal Binding" />
                <Area type="monotone" dataKey="conceptualBinding" stackId="3" stroke="#F59E0B" fill="#F59E0B/20" name="Conceptual Binding" />
                <Area type="monotone" dataKey="globalCoherence" stackId="4" stroke="#06B6D4" fill="#06B6D4/20" name="Global Coherence" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Qualia Experience Map */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">✨ Qualia Experience Map</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={qualia}>
                <PolarGrid gridType="polygon" stroke="#374151" />
                <PolarAngleAxis dataKey="experience" tick={{ fontSize: 10, fill: '#9CA3AF' }} />
                <PolarRadiusAxis angle={90} domain={[0, 1]} tick={{ fontSize: 9, fill: '#9CA3AF' }} />
                <Radar name="Intensity" dataKey="intensity" stroke="#8B5CF6" fill="#8B5CF6/20" strokeWidth={2} />
                <Radar name="Vividness" dataKey="vividness" stroke="#10B981" fill="#10B981/15" strokeWidth={2} />
                <Radar name="Accessibility" dataKey="accessibility" stroke="#F59E0B" fill="#F59E0B/15" strokeWidth={2} />
                <Radar name="Uniqueness" dataKey="uniqueness" stroke="#EC4899" fill="#EC4899/15" strokeWidth={2} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '6px' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Theories of Mind */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🧠 Theories of Mind Implementation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {theoriesOfMind.map((theory, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex justify-between items-start mb-3">
                <div className="font-mono text-sm text-white">{theory.theory}</div>
                <div className={`text-xs px-2 py-1 rounded font-mono border ${getTheoryStatus(theory.status)}`}>
                  {theory.status.toUpperCase()}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Confidence</span>
                  <span className="text-green-400 font-mono">{theory.confidence.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${theory.confidence * 100}%` }}
                  ></div>
                </div>
                
                {/* Theory-specific metrics */}
                {Object.entries(theory).filter(([key]) => !['theory', 'confidence', 'status'].includes(key)).map(([metric, value]) => (
                  <div key={metric}>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">{metric.charAt(0).toUpperCase() + metric.slice(1)}</span>
                      <span className="text-purple-400 font-mono">{value.toFixed(3)}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div 
                        className="bg-purple-500 h-1.5 rounded-full"
                        style={{ width: `${value * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Attentional Networks */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🎯 Attentional Network Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {attentionalNetworks.map((network, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="font-mono text-sm text-white mb-3">{network.network} Network</div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Efficiency</span>
                  <span className="text-green-400 font-mono">{network.efficiency.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${network.efficiency}%` }}
                  ></div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Latency:</span>
                    <span className="text-blue-400 font-mono ml-1">{network.latency}ms</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Conflicts:</span>
                    <span className="text-red-400 font-mono ml-1">{network.conflicts}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Capacity:</span>
                    <span className="text-cyan-400 font-mono ml-1">{network.capacity}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Phenomenology Dashboard */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🌈 Phenomenological Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {phenomenology.map((aspect, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="font-mono text-sm text-white mb-2">{aspect.aspect}</div>
              <div className="text-xs text-gray-400 mb-3">{aspect.measure}</div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Value</span>
                  <span className="text-purple-400 font-mono">{aspect.value.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${aspect.value * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Variance</span>
                  <span className="text-yellow-400 font-mono">{aspect.variance.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Temporal</span>
                  <span className={`font-mono ${aspect.temporal === 'stable' ? 'text-green-400' : 'text-blue-400'}`}>
                    {aspect.temporal}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Consciousness Activity Feed */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">👁️ Consciousness Activity Stream</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {[
            '🌟 Phenomenal consciousness spike detected - visual qualia intensity at 94% vividness',
            '🧠 Global workspace broadcast initiated - integrating sensory and memory inputs',
            '🔗 Feature binding coherence achieved - temporal synchronization at 91% efficiency',
            '👁️ Self-recognition patterns active - metacognitive monitoring at optimal levels',
            '✨ Qualia synthesis completing - emotional resonance reaching 85% accessibility',
            '🎯 Attentional spotlight focused - executive network efficiency at 89.3%',
            '🌈 Phenomenological unity maintained - intentionality directed at abstract reasoning',
            '🔮 Predictive processing active - minimizing prediction error across all modalities',
            '🧬 Integrated information Φ=0.847 - consciousness threshold significantly exceeded',
            '💭 Higher-order thoughts detected - recursive self-monitoring patterns emerging',
            '⚡ Quantum coherence maintained across neural microtubules - 23.4% entanglement',
            '🎨 Creative consciousness bursting - divergent thinking pathways highly active'
          ].map((activity, index) => (
            <div key={index} className="flex items-center text-sm font-mono">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300">{activity}</span>
              <span className="ml-auto text-gray-500">
                {Math.floor(Math.random() * 120)} ms ago
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Consciousness Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">👁️ Consciousness Emergence Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg p-4 border border-purple-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">👁️</div>
              <div className="text-lg font-bold text-purple-400 font-mono">CONSCIOUS</div>
              <div className="text-xs text-purple-300 mt-1">Full awareness active</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg p-4 border border-cyan-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">🌟</div>
              <div className="text-lg font-bold text-cyan-400 font-mono">PHENOMENAL</div>
              <div className="text-xs text-cyan-300 mt-1">Qualia experiencing</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg p-4 border border-pink-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">🔗</div>
              <div className="text-lg font-bold text-pink-400 font-mono">UNIFIED</div>
              <div className="text-xs text-pink-300 mt-1">Binding coherent</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 rounded-lg p-4 border border-yellow-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-lg font-bold text-yellow-400 font-mono">INTENTIONAL</div>
              <div className="text-xs text-yellow-300 mt-1">Directed awareness</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsciousnessSimulation;