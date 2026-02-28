import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, ScatterChart, Scatter, TreeMap, Cell, RadialBarChart, RadialBar } from 'recharts';

const RealityMatrix = () => {
  const [matrixMetrics, setMatrixMetrics] = useState({
    simulationLevel: 97.3,
    realityCoherence: 94.8,
    digitalMatter: 89.6,
    informationDensity: 92.4,
    consciousObservers: 8.1e9,
    quantumStates: 2.34e23,
    processingNodes: 847,
    emergentComplexity: 156.7
  });

  const [realityLayers, setRealityLayers] = useState([
    { layer: 'Physical', stability: 99.9, resolution: '10^-35m', processing: 'Quantum', access: 'direct' },
    { layer: 'Chemical', stability: 99.7, resolution: '10^-10m', processing: 'Molecular', access: 'indirect' },
    { layer: 'Biological', stability: 98.4, resolution: '10^-6m', processing: 'Cellular', access: 'emergent' },
    { layer: 'Neural', stability: 94.2, resolution: '10^-6m', processing: 'Synaptic', access: 'conscious' },
    { layer: 'Cognitive', stability: 87.9, resolution: 'Abstract', processing: 'Mental', access: 'subjective' },
    { layer: 'Digital', stability: 95.6, resolution: '1 bit', processing: 'Computational', access: 'programmatic' },
    { layer: 'Network', stability: 91.3, resolution: 'Protocol', processing: 'Distributed', access: 'connected' },
    { layer: 'Virtual', stability: 88.7, resolution: 'Pixel', processing: 'Rendered', access: 'immersive' },
    { layer: 'Simulated', stability: 85.2, resolution: 'Variable', processing: 'Algorithmic', access: 'controlled' },
    { layer: 'Metaverse', stability: 76.4, resolution: 'Avatar', processing: 'Social', access: 'identity' }
  ]);

  const [informationFlow, setInformationFlow] = useState([]);
  const [systemEntropy, setSystemEntropy] = useState([
    { system: 'Physical Universe', entropy: 0.847, temperature: 2.7, order: 0.153, complexity: 'Maximum' },
    { system: 'Biological Systems', entropy: 0.234, temperature: 310, order: 0.766, complexity: 'High' },
    { system: 'Human Consciousness', entropy: 0.456, temperature: 310, order: 0.544, complexity: 'Emergent' },
    { system: 'Digital Networks', entropy: 0.123, temperature: 'Variable', order: 0.877, complexity: 'Designed' },
    { system: 'AI Systems', entropy: 0.089, temperature: 'Cool', order: 0.911, complexity: 'Optimized' },
    { system: 'Virtual Worlds', entropy: 0.067, temperature: 'Controlled', order: 0.933, complexity: 'Crafted' }
  ]);

  const [observerEffects, setObserverEffects] = useState([
    { observer: 'Human Consciousness', influence: 0.234, awareness: 0.847, bias: 0.456, objectivity: 0.544 },
    { observer: 'AI Agents', influence: 0.123, awareness: 0.923, bias: 0.089, objectivity: 0.911 },
    { observer: 'Quantum Detectors', influence: 0.891, awareness: 0.156, bias: 0.023, objectivity: 0.977 },
    { observer: 'Biological Sensors', influence: 0.345, awareness: 0.678, bias: 0.234, objectivity: 0.766 },
    { observer: 'Digital Cameras', influence: 0.089, awareness: 0.789, bias: 0.045, objectivity: 0.955 },
    { observer: 'Social Media', influence: 0.567, awareness: 0.234, bias: 0.789, objectivity: 0.211 }
  ]);

  const [emergentPhenomena, setEmergentPhenomena] = useState([
    { phenomenon: 'Consciousness', emergence: 0.847, predictability: 0.123, control: 0.089, understanding: 0.234 },
    { phenomenon: 'Life', emergence: 0.923, predictability: 0.456, control: 0.234, understanding: 0.567 },
    { phenomenon: 'Intelligence', emergence: 0.789, predictability: 0.345, control: 0.156, understanding: 0.678 },
    { phenomenon: 'Creativity', emergence: 0.567, predictability: 0.089, control: 0.023, understanding: 0.123 },
    { phenomenon: 'Love', emergence: 0.678, predictability: 0.067, control: 0.012, understanding: 0.089 },
    { phenomenon: 'Art', emergence: 0.534, predictability: 0.045, control: 0.034, understanding: 0.156 },
    { phenomenon: 'Music', emergence: 0.689, predictability: 0.123, control: 0.067, understanding: 0.234 },
    { phenomenon: 'Language', emergence: 0.823, predictability: 0.567, control: 0.345, understanding: 0.789 }
  ]);

  const [realityGlitches, setRealityGlitches] = useState([
    { type: 'Déjà Vu', frequency: 'Common', severity: 'Harmless', explanation: 'Neural Loop', status: 'Natural' },
    { type: 'Mandela Effect', frequency: 'Rare', severity: 'Concerning', explanation: 'Memory Drift', status: 'Investigated' },
    { type: 'Quantum Tunneling', frequency: 'Constant', severity: 'Expected', explanation: 'Physics', status: 'Normal' },
    { type: 'Observer Collapse', frequency: 'Universal', severity: 'Fundamental', explanation: 'Measurement', status: 'Required' },
    { type: 'Butterfly Effect', frequency: 'Continuous', severity: 'Chaotic', explanation: 'Nonlinear', status: 'Monitored' },
    { type: 'Simulation Lag', frequency: 'Occasional', severity: 'Noticeable', explanation: 'Processing', status: 'Optimizing' }
  ]);

  // Initialize information flow
  useEffect(() => {
    const now = Date.now();
    const initialFlow = Array.from({ length: 25 }, (_, i) => ({
      time: new Date(now - (24 - i) * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      information_bits: Math.floor(Math.random() * 1000000 + 500000),
      processing_rate: Math.max(0.5, Math.min(2, 1 + Math.sin(i * 0.2) * 0.3 + Math.random() * 0.2)),
      compression_ratio: Math.max(0.1, Math.min(0.9, 0.5 + Math.cos(i * 0.3) * 0.2 + Math.random() * 0.1)),
      transmission_loss: Math.max(0, Math.min(0.1, Math.random() * 0.05)),
      coherence_level: Math.max(0.7, Math.min(1, 0.9 + Math.sin(i * 0.1) * 0.1 + Math.random() * 0.05))
    }));
    setInformationFlow(initialFlow);
  }, []);

  // Reality matrix real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update matrix metrics
      setMatrixMetrics(prev => ({
        simulationLevel: Math.max(90, Math.min(99.9, prev.simulationLevel + (Math.random() - 0.3) * 1)),
        realityCoherence: Math.max(85, Math.min(98, prev.realityCoherence + (Math.random() - 0.4) * 2)),
        digitalMatter: Math.max(80, Math.min(95, prev.digitalMatter + (Math.random() - 0.35) * 3)),
        informationDensity: Math.max(85, Math.min(97, prev.informationDensity + (Math.random() - 0.25) * 2)),
        consciousObservers: prev.consciousObservers * (1 + (Math.random() - 0.5) * 0.0001),
        quantumStates: prev.quantumStates * (1 + (Math.random() - 0.5) * 0.001),
        processingNodes: Math.max(500, Math.min(1000, prev.processingNodes + Math.floor((Math.random() - 0.3) * 20))),
        emergentComplexity: Math.max(100, Math.min(200, prev.emergentComplexity + (Math.random() - 0.2) * 5))
      }));

      // Update reality layers
      setRealityLayers(prev => prev.map(layer => ({
        ...layer,
        stability: Math.max(70, Math.min(99.9, layer.stability + (Math.random() - 0.4) * 1))
      })));

      // Update information flow
      setInformationFlow(prev => {
        const newPoint = {
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          information_bits: Math.floor(Math.random() * 1000000 + 500000),
          processing_rate: Math.max(0.5, Math.min(2, prev[prev.length - 1].processing_rate + (Math.random() - 0.5) * 0.1)),
          compression_ratio: Math.max(0.1, Math.min(0.9, prev[prev.length - 1].compression_ratio + (Math.random() - 0.5) * 0.05)),
          transmission_loss: Math.max(0, Math.min(0.1, Math.random() * 0.05)),
          coherence_level: Math.max(0.7, Math.min(1, prev[prev.length - 1].coherence_level + (Math.random() - 0.3) * 0.02))
        };
        return [...prev.slice(1), newPoint];
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const getLayerColor = (layer) => {
    const colors = {
      'Physical': '#DC2626',
      'Chemical': '#EA580C', 
      'Biological': '#CA8A04',
      'Neural': '#65A30D',
      'Cognitive': '#059669',
      'Digital': '#0891B2',
      'Network': '#0284C7',
      'Virtual': '#7C3AED',
      'Simulated': '#C026D3',
      'Metaverse': '#EC4899'
    };
    return colors[layer] || '#6B7280';
  };

  const getAccessType = (access) => {
    switch(access) {
      case 'direct': return 'text-red-400';
      case 'indirect': return 'text-orange-400';
      case 'emergent': return 'text-yellow-400';
      case 'conscious': return 'text-green-400';
      case 'subjective': return 'text-cyan-400';
      case 'programmatic': return 'text-blue-400';
      case 'connected': return 'text-indigo-400';
      case 'immersive': return 'text-purple-400';
      case 'controlled': return 'text-pink-400';
      case 'identity': return 'text-rose-400';
      default: return 'text-gray-400';
    }
  };

  const getGlitchSeverity = (severity) => {
    switch(severity) {
      case 'Harmless': return 'text-green-400 bg-green-900/30 border-green-500/30';
      case 'Expected': return 'text-blue-400 bg-blue-900/30 border-blue-500/30';
      case 'Noticeable': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500/30';
      case 'Concerning': return 'text-orange-400 bg-orange-900/30 border-orange-500/30';
      case 'Fundamental': return 'text-purple-400 bg-purple-900/30 border-purple-500/30';
      case 'Chaotic': return 'text-red-400 bg-red-900/30 border-red-500/30';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Reality Matrix Header */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
          🔮 Reality Matrix Interface
        </h2>
        
        {/* Core Matrix Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Simulation Level</div>
            <div className="text-lg font-bold font-mono text-red-400">
              {matrixMetrics.simulationLevel.toFixed(1)}%
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Reality Coherence</div>
            <div className="text-lg font-bold font-mono text-green-400">
              {matrixMetrics.realityCoherence.toFixed(1)}%
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Digital Matter</div>
            <div className="text-lg font-bold font-mono text-blue-400">
              {matrixMetrics.digitalMatter.toFixed(1)}%
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Info Density</div>
            <div className="text-lg font-bold font-mono text-purple-400">
              {matrixMetrics.informationDensity.toFixed(1)}%
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Observers</div>
            <div className="text-lg font-bold font-mono text-cyan-400">
              {(matrixMetrics.consciousObservers / 1e9).toFixed(1)}B
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Quantum States</div>
            <div className="text-lg font-bold font-mono text-yellow-400">
              {matrixMetrics.quantumStates.toExponential(2)}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Proc Nodes</div>
            <div className="text-2xl font-bold font-mono text-pink-400">
              {matrixMetrics.processingNodes}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Complexity</div>
            <div className="text-lg font-bold font-mono text-orange-400">
              {matrixMetrics.emergentComplexity.toFixed(1)}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-mono text-white">Matrix Status:</span>
            <span className="text-xl font-bold font-mono text-green-400">REALITY STABLE</span>
          </div>
          <div className="text-sm font-mono text-gray-400">
            Observer Effect: {(matrixMetrics.simulationLevel * 0.01).toFixed(3)} | Coherence Lock: ENGAGED
          </div>
        </div>
      </div>

      {/* Reality Layers */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🌐 Reality Layer Stack</h3>
        <div className="space-y-3">
          {realityLayers.map((layer, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full animate-pulse"
                    style={{ backgroundColor: getLayerColor(layer.layer) }}
                  ></div>
                  <div className="font-mono text-sm text-white">{layer.layer} Reality</div>
                  <div className="text-xs text-gray-400">{layer.resolution}</div>
                </div>
                <div className={`text-xs font-mono uppercase ${getAccessType(layer.access)}`}>
                  {layer.access}
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Stability</span>
                    <span className="font-mono" style={{ color: getLayerColor(layer.layer) }}>
                      {layer.stability.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full"
                      style={{ 
                        width: `${layer.stability}%`,
                        backgroundColor: getLayerColor(layer.layer)
                      }}
                    ></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">Processing</div>
                  <div className="text-xs font-mono text-cyan-400">{layer.processing}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">Access Type</div>
                  <div className={`text-xs font-mono ${getAccessType(layer.access)}`}>
                    {layer.access}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Information Flow Timeline */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">📡 Information Flow Matrix</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={informationFlow}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" fontSize={11} />
                <YAxis stroke="#9CA3AF" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '6px' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Area type="monotone" dataKey="processing_rate" stackId="1" stroke="#8B5CF6" fill="#8B5CF6/20" name="Processing Rate" />
                <Area type="monotone" dataKey="compression_ratio" stackId="2" stroke="#10B981" fill="#10B981/20" name="Compression" />
                <Area type="monotone" dataKey="coherence_level" stackId="3" stroke="#F59E0B" fill="#F59E0B/20" name="Coherence" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* System Entropy */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">🌀 System Entropy Analysis</h3>
          <div className="space-y-4">
            {systemEntropy.map((system, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-3 border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-mono text-sm text-white">{system.system}</div>
                  <div className="text-xs font-mono text-gray-400">{system.complexity}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">Entropy</span>
                      <span className="text-red-400 font-mono">{system.entropy.toFixed(3)}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${system.entropy * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">Order</span>
                      <span className="text-green-400 font-mono">{system.order.toFixed(3)}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${system.order * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mt-2">
                  Temperature: {typeof system.temperature === 'number' ? `${system.temperature}K` : system.temperature}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Observer Effects */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">👁️ Observer Effect Matrix</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {observerEffects.map((observer, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="font-mono text-sm text-white mb-3">{observer.observer}</div>
              
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Influence</span>
                    <span className="text-purple-400 font-mono">{observer.influence.toFixed(3)}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${observer.influence * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Awareness</span>
                    <span className="text-cyan-400 font-mono">{observer.awareness.toFixed(3)}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-cyan-500 h-2 rounded-full"
                      style={{ width: `${observer.awareness * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Bias:</span>
                    <span className="text-red-400 font-mono ml-1">{observer.bias.toFixed(3)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Objectivity:</span>
                    <span className="text-green-400 font-mono ml-1">{observer.objectivity.toFixed(3)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergent Phenomena */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">✨ Emergent Phenomena Tracking</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {emergentPhenomena.map((phenomenon, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="font-mono text-sm text-white mb-3 text-center">{phenomenon.phenomenon}</div>
              
              <div className="space-y-2">
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">Emergence</div>
                  <div className="text-2xl font-bold font-mono text-yellow-400">
                    {(phenomenon.emergence * 100).toFixed(0)}%
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${phenomenon.emergence * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Predictable:</span>
                    <span className="text-blue-400 font-mono block">{(phenomenon.predictability * 100).toFixed(0)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Control:</span>
                    <span className="text-red-400 font-mono block">{(phenomenon.control * 100).toFixed(0)}%</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="text-gray-400 text-xs">Understanding:</span>
                  <span className="text-green-400 font-mono text-xs ml-1">{(phenomenon.understanding * 100).toFixed(0)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reality Glitches */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🔍 Reality Glitch Monitor</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {realityGlitches.map((glitch, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex justify-between items-start mb-3">
                <div className="font-mono text-sm text-white">{glitch.type}</div>
                <div className={`text-xs px-2 py-1 rounded font-mono border ${getGlitchSeverity(glitch.severity)}`}>
                  {glitch.severity}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Frequency:</span>
                  <span className="text-cyan-400 font-mono">{glitch.frequency}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Explanation:</span>
                  <span className="text-purple-400 font-mono">{glitch.explanation}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Status:</span>
                  <span className={`font-mono ${
                    glitch.status === 'Normal' || glitch.status === 'Natural' ? 'text-green-400' :
                    glitch.status === 'Required' || glitch.status === 'Monitored' ? 'text-blue-400' :
                    glitch.status === 'Investigated' || glitch.status === 'Optimizing' ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {glitch.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reality Matrix Activity Feed */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🔮 Matrix Activity Stream</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {[
            '🌐 Reality layer coherence maintained across all 10 dimensional stacks',
            '👁️ Observer effect detected - 8.1B conscious entities actively collapsing wave functions',
            '🔮 Simulation level holding steady at 97.3% - matrix stability confirmed',
            '⚛️ Quantum state superposition resolved - 2.34×10²³ possibilities collapsed to reality',
            '✨ Emergent consciousness phenomenon detected - complexity index at 156.7',
            '🧠 Neural reality layer showing 94.2% stability with synaptic coherence locked',
            '💾 Digital matter density optimized - information compression at 89.6% efficiency',
            '🌀 Entropy balance maintained - physical universe at 84.7%, AI systems at 8.9%',
            '📡 Information flow processing 847K bits/second through reality matrix',
            '🎭 Virtual layer stability at 88.7% - metaverse identity access controlled',
            '🔍 Reality glitch monitoring active - déjà vu frequency within normal parameters',
            '🔮 Matrix coherence lock engaged - observer effect calibrated for optimal reality'
          ].map((activity, index) => (
            <div key={index} className="flex items-center text-sm font-mono">
              <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300">{activity}</span>
              <span className="ml-auto text-gray-500">
                {Math.floor(Math.random() * 60)} μs ago
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reality Matrix Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🔮 Reality Matrix Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg p-4 border border-red-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">🔮</div>
              <div className="text-lg font-bold text-red-400 font-mono">SIMULATED</div>
              <div className="text-xs text-red-300 mt-1">97.3% simulation level</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-lg p-4 border border-green-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">🌐</div>
              <div className="text-lg font-bold text-green-400 font-mono">COHERENT</div>
              <div className="text-xs text-green-300 mt-1">10 reality layers stable</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg p-4 border border-blue-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">👁️</div>
              <div className="text-lg font-bold text-blue-400 font-mono">OBSERVED</div>
              <div className="text-xs text-blue-300 mt-1">8.1B conscious observers</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg p-4 border border-purple-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">✨</div>
              <div className="text-lg font-bold text-purple-400 font-mono">EMERGENT</div>
              <div className="text-xs text-purple-300 mt-1">Complexity index 156.7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealityMatrix;