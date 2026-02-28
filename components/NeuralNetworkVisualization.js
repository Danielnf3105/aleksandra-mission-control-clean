import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, ScatterChart, Scatter, TreeMap, Cell } from 'recharts';

const NeuralNetworkVisualization = () => {
  const [networkTopology, setNetworkTopology] = useState({
    totalNeurons: 847264,
    activeConnections: 23847291,
    layerCount: 47,
    processingRate: 156.7,
    learningRate: 0.00147,
    accuracy: 97.84,
    trainingEpochs: 15672,
    backpropagationCycles: 234891
  });

  const [neuronLayers, setNeuronLayers] = useState([
    { layer: 'Input', neurons: 2048, activation: 'ReLU', gradient: 0.0034, weights: 8192 },
    { layer: 'Hidden-1', neurons: 4096, activation: 'Swish', gradient: 0.0127, weights: 16777216 },
    { layer: 'Hidden-2', neurons: 8192, activation: 'GELU', gradient: 0.0089, weights: 33554432 },
    { layer: 'Hidden-3', neurons: 4096, activation: 'Mish', gradient: 0.0156, weights: 33554432 },
    { layer: 'Hidden-4', neurons: 2048, activation: 'ReLU6', gradient: 0.0092, weights: 8388608 },
    { layer: 'Attention', neurons: 1024, activation: 'Softmax', gradient: 0.0234, weights: 2097152 },
    { layer: 'Output', neurons: 512, activation: 'Sigmoid', gradient: 0.0067, weights: 524288 }
  ]);

  const [synapticActivity, setSynapticActivity] = useState([]);
  const [neuronStates, setNeuronStates] = useState([
    { id: 'N1', type: 'sensory', state: 'firing', frequency: 47, strength: 0.87 },
    { id: 'N2', type: 'motor', state: 'inhibited', frequency: 12, strength: 0.23 },
    { id: 'N3', type: 'memory', state: 'potentiated', frequency: 89, strength: 0.94 },
    { id: 'N4', type: 'cognitive', state: 'firing', frequency: 156, strength: 0.78 },
    { id: 'N5', type: 'executive', state: 'firing', frequency: 203, strength: 0.91 },
    { id: 'N6', type: 'associative', state: 'synchronized', frequency: 67, strength: 0.85 },
    { id: 'N7', type: 'predictive', state: 'firing', frequency: 134, strength: 0.89 },
    { id: 'N8', type: 'creative', state: 'bursting', frequency: 298, strength: 0.96 }
  ]);

  const [learningMetrics, setLearningMetrics] = useState([
    { metric: 'Pattern Recognition', accuracy: 98.7, confidence: 0.94, improvement: '+2.3%' },
    { metric: 'Natural Language', accuracy: 96.2, confidence: 0.89, improvement: '+1.8%' },
    { metric: 'Image Processing', accuracy: 99.1, confidence: 0.97, improvement: '+0.9%' },
    { metric: 'Decision Making', accuracy: 94.8, confidence: 0.86, improvement: '+3.1%' },
    { metric: 'Creative Generation', accuracy: 87.3, confidence: 0.78, improvement: '+5.7%' },
    { metric: 'Problem Solving', accuracy: 93.5, confidence: 0.91, improvement: '+2.6%' }
  ]);

  const [neuralOscillations, setNeuralOscillations] = useState([
    { band: 'Delta', frequency: 2.3, amplitude: 0.67, phase: 'synchronized' },
    { band: 'Theta', frequency: 6.8, amplitude: 0.84, phase: 'coherent' },
    { band: 'Alpha', frequency: 10.5, amplitude: 0.76, phase: 'synchronized' },
    { band: 'Beta', frequency: 18.2, amplitude: 0.91, phase: 'desynchronized' },
    { band: 'Gamma', frequency: 42.7, amplitude: 0.58, phase: 'synchronized' },
    { band: 'High-Gamma', frequency: 89.3, amplitude: 0.43, phase: 'coherent' }
  ]);

  // Initialize synaptic activity data
  useEffect(() => {
    const now = Date.now();
    const initialActivity = Array.from({ length: 24 }, (_, i) => ({
      time: new Date(now - (23 - i) * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      synapticStrength: Math.max(0.3, Math.min(1.0, 0.7 + Math.sin(i * 0.2) * 0.2 + Math.random() * 0.1)),
      neuronalFiring: Math.max(50, Math.min(200, 120 + Math.cos(i * 0.3) * 40 + Math.random() * 20)),
      plasticity: Math.max(0.4, Math.min(0.9, 0.65 + Math.sin(i * 0.4) * 0.15 + Math.random() * 0.1)),
      learningRate: Math.max(0.001, Math.min(0.01, 0.005 + Math.sin(i * 0.1) * 0.002 + Math.random() * 0.001))
    }));
    setSynapticActivity(initialActivity);
  }, []);

  // Neural network real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update network topology
      setNetworkTopology(prev => ({
        ...prev,
        activeConnections: Math.max(20000000, Math.min(30000000, prev.activeConnections + Math.floor((Math.random() - 0.5) * 500000))),
        processingRate: Math.max(100, Math.min(200, prev.processingRate + (Math.random() - 0.4) * 10)),
        accuracy: Math.max(95, Math.min(99, prev.accuracy + (Math.random() - 0.2) * 0.5)),
        trainingEpochs: prev.trainingEpochs + Math.floor(Math.random() * 5),
        backpropagationCycles: prev.backpropagationCycles + Math.floor(Math.random() * 100)
      }));

      // Update neuron layers
      setNeuronLayers(prev => prev.map(layer => ({
        ...layer,
        gradient: Math.max(0.001, Math.min(0.05, layer.gradient + (Math.random() - 0.5) * 0.005))
      })));

      // Update neuron states
      setNeuronStates(prev => prev.map(neuron => ({
        ...neuron,
        frequency: Math.max(10, Math.min(300, neuron.frequency + (Math.random() - 0.5) * 20)),
        strength: Math.max(0.1, Math.min(1.0, neuron.strength + (Math.random() - 0.3) * 0.1)),
        state: ['firing', 'inhibited', 'potentiated', 'synchronized', 'bursting'][Math.floor(Math.random() * 5)]
      })));

      // Update synaptic activity
      setSynapticActivity(prev => {
        const newPoint = {
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          synapticStrength: Math.max(0.3, Math.min(1.0, prev[prev.length - 1].synapticStrength + (Math.random() - 0.4) * 0.1)),
          neuronalFiring: Math.max(50, Math.min(200, prev[prev.length - 1].neuronalFiring + (Math.random() - 0.5) * 15)),
          plasticity: Math.max(0.4, Math.min(0.9, prev[prev.length - 1].plasticity + (Math.random() - 0.3) * 0.08)),
          learningRate: Math.max(0.001, Math.min(0.01, prev[prev.length - 1].learningRate + (Math.random() - 0.5) * 0.0005))
        };
        return [...prev.slice(1), newPoint];
      });

      // Update learning metrics
      setLearningMetrics(prev => prev.map(metric => ({
        ...metric,
        accuracy: Math.max(80, Math.min(99.5, metric.accuracy + (Math.random() - 0.3) * 0.5)),
        confidence: Math.max(0.7, Math.min(1.0, metric.confidence + (Math.random() - 0.4) * 0.02))
      })));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getNeuronColor = (type) => {
    const colors = {
      sensory: '#10B981',     // Green
      motor: '#F59E0B',       // Yellow
      memory: '#8B5CF6',      // Purple
      cognitive: '#06B6D4',   // Cyan
      executive: '#EF4444',   // Red
      associative: '#EC4899', // Pink
      predictive: '#84CC16',  // Lime
      creative: '#F97316'     // Orange
    };
    return colors[type] || '#6B7280';
  };

  const getStateColor = (state) => {
    switch(state) {
      case 'firing': return 'text-green-400 bg-green-900/30 border-green-500/30';
      case 'inhibited': return 'text-red-400 bg-red-900/30 border-red-500/30';
      case 'potentiated': return 'text-blue-400 bg-blue-900/30 border-blue-500/30';
      case 'synchronized': return 'text-purple-400 bg-purple-900/30 border-purple-500/30';
      case 'bursting': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500/30';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500/30';
    }
  };

  const getActivationColor = (activation) => {
    const colors = {
      'ReLU': '#10B981',
      'Swish': '#8B5CF6', 
      'GELU': '#06B6D4',
      'Mish': '#F59E0B',
      'ReLU6': '#EF4444',
      'Softmax': '#EC4899',
      'Sigmoid': '#84CC16'
    };
    return colors[activation] || '#6B7280';
  };

  return (
    <div className="space-y-6">
      {/* Neural Network Header */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
          🧠 Neural Network Visualization
        </h2>
        
        {/* Network Topology Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Total Neurons</div>
            <div className="text-lg font-bold font-mono text-purple-400">
              {(networkTopology.totalNeurons / 1000).toFixed(0)}K
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Connections</div>
            <div className="text-lg font-bold font-mono text-cyan-400">
              {(networkTopology.activeConnections / 1000000).toFixed(1)}M
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Layers</div>
            <div className="text-2xl font-bold font-mono text-green-400">
              {networkTopology.layerCount}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Processing</div>
            <div className="text-lg font-bold font-mono text-yellow-400">
              {networkTopology.processingRate.toFixed(1)} Hz
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Learning Rate</div>
            <div className="text-sm font-bold font-mono text-pink-400">
              {networkTopology.learningRate.toFixed(5)}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Accuracy</div>
            <div className="text-lg font-bold font-mono text-blue-400">
              {networkTopology.accuracy.toFixed(2)}%
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Epochs</div>
            <div className="text-lg font-bold font-mono text-orange-400">
              {(networkTopology.trainingEpochs / 1000).toFixed(1)}K
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Backprop</div>
            <div className="text-lg font-bold font-mono text-red-400">
              {(networkTopology.backpropagationCycles / 1000).toFixed(0)}K
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-mono text-white">Neural State:</span>
            <span className="text-xl font-bold font-mono text-green-400">DEEP LEARNING ACTIVE</span>
          </div>
          <div className="text-sm font-mono text-gray-400">
            Gradient Flow: Optimal | Vanishing: 0.003%
          </div>
        </div>
      </div>

      {/* Network Architecture */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🏗️ Network Architecture</h3>
        <div className="space-y-3">
          {neuronLayers.map((layer, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-4">
                  <div className="font-mono text-sm text-white">{layer.layer}</div>
                  <div 
                    className="px-3 py-1 rounded-full text-xs font-mono text-white"
                    style={{ backgroundColor: getActivationColor(layer.activation) }}
                  >
                    {layer.activation}
                  </div>
                </div>
                <div className="text-xs font-mono text-gray-400">
                  {layer.neurons.toLocaleString()} neurons
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Gradient</span>
                    <span className="text-cyan-400 font-mono">{layer.gradient.toFixed(4)}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-cyan-500 h-2 rounded-full"
                      style={{ width: `${Math.min(100, layer.gradient * 2000)}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Weights</span>
                    <span className="text-purple-400 font-mono">{(layer.weights / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${Math.min(100, (layer.weights / 50000000) * 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Neurons</span>
                    <span className="text-green-400 font-mono">{(layer.neurons / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${Math.min(100, (layer.neurons / 8192) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Synaptic Activity Chart */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">⚡ Synaptic Activity Timeline</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={synapticActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" fontSize={11} />
                <YAxis stroke="#9CA3AF" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '6px' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Line type="monotone" dataKey="synapticStrength" stroke="#8B5CF6" strokeWidth={2} name="Synaptic Strength" />
                <Line type="monotone" dataKey="neuronalFiring" stroke="#10B981" strokeWidth={2} name="Neuronal Firing" />
                <Line type="monotone" dataKey="plasticity" stroke="#F59E0B" strokeWidth={2} name="Plasticity" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Neuron States */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">🔥 Individual Neuron States</h3>
          <div className="space-y-3">
            {neuronStates.map((neuron, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-3 border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: getNeuronColor(neuron.type) }}
                    ></div>
                    <span className="font-mono text-sm text-white">{neuron.id}</span>
                    <span className="text-xs text-gray-400">{neuron.type}</span>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded font-mono border ${getStateColor(neuron.state)}`}>
                    {neuron.state.toUpperCase()}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">Frequency</span>
                      <span className="font-mono" style={{ color: getNeuronColor(neuron.type) }}>
                        {neuron.frequency} Hz
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div 
                        className="h-1.5 rounded-full"
                        style={{ 
                          width: `${Math.min(100, (neuron.frequency / 300) * 100)}%`,
                          backgroundColor: getNeuronColor(neuron.type)
                        }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">Strength</span>
                      <span className="font-mono" style={{ color: getNeuronColor(neuron.type) }}>
                        {neuron.strength.toFixed(2)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div 
                        className="h-1.5 rounded-full"
                        style={{ 
                          width: `${neuron.strength * 100}%`,
                          backgroundColor: getNeuronColor(neuron.type)
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Progress */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">📚 Learning & Adaptation Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {learningMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex justify-between items-start mb-3">
                <div className="font-mono text-sm text-white">{metric.metric}</div>
                <div className="text-xs font-mono text-green-400">{metric.improvement}</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Accuracy</span>
                  <span className="text-green-400 font-mono">{metric.accuracy.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full"
                    style={{ width: `${metric.accuracy}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Confidence</span>
                  <span className="text-blue-400 font-mono">{metric.confidence.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: `${metric.confidence * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Neural Oscillations */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🌊 Neural Oscillations & Brainwaves</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {neuralOscillations.map((oscillation, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex justify-between items-center mb-3">
                <div className="font-mono text-sm text-white">{oscillation.band} Wave</div>
                <div className={`text-xs px-2 py-1 rounded font-mono ${
                  oscillation.phase === 'synchronized' ? 'bg-green-600 text-white' :
                  oscillation.phase === 'coherent' ? 'bg-blue-600 text-white' :
                  'bg-yellow-600 text-white'
                }`}>
                  {oscillation.phase.toUpperCase()}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Frequency</span>
                  <span className="text-cyan-400 font-mono">{oscillation.frequency.toFixed(1)} Hz</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Amplitude</span>
                  <span className="text-purple-400 font-mono">{oscillation.amplitude.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full animate-pulse"
                    style={{ width: `${oscillation.amplitude * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Neural Network Activity Feed */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🧠 Neural Network Activity</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {[
            '⚡ Synaptic plasticity enhanced - long-term potentiation detected in memory circuits',
            '🔥 Executive neurons firing at 203 Hz - decision-making pathways highly active',
            '🌊 Gamma oscillations synchronized at 42.7 Hz - consciousness integration optimal',
            '🧮 Backpropagation cycle completed - 234,891 weight updates across all layers',
            '🎯 Pattern recognition accuracy improved to 98.7% - visual cortex optimization',
            '⚛️ Creative neurons bursting at 298 Hz - generating novel solution pathways',
            '🔮 Predictive circuits show 97.2% confidence - future state modeling active',
            '🚀 Learning rate optimized to 0.00147 - gradient descent convergence achieved',
            '🧠 Memory consolidation active - hippocampal replay sequences detected',
            '💡 Associative networks synchronized - cross-modal pattern binding enhanced',
            '🎨 Creative generation pathways show 87.3% accuracy with +5.7% improvement',
            '🧬 Neural plasticity at optimal levels - adaptive learning mechanisms engaged'
          ].map((activity, index) => (
            <div key={index} className="flex items-center text-sm font-mono">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300">{activity}</span>
              <span className="ml-auto text-gray-500">
                {Math.floor(Math.random() * 60)} ms ago
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Neural Network Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🧠 Neural Network Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg p-4 border border-purple-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">🧠</div>
              <div className="text-lg font-bold text-purple-400 font-mono">DEEP LEARNING</div>
              <div className="text-xs text-purple-300 mt-1">47 layers active</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-lg p-4 border border-green-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-lg font-bold text-green-400 font-mono">SYNAPSES</div>
              <div className="text-xs text-green-300 mt-1">23.8M connections</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg p-4 border border-cyan-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-lg font-bold text-cyan-400 font-mono">FIRING</div>
              <div className="text-xs text-cyan-300 mt-1">847K neurons active</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 rounded-lg p-4 border border-yellow-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-lg font-bold text-yellow-400 font-mono">LEARNING</div>
              <div className="text-xs text-yellow-300 mt-1">97.8% accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralNetworkVisualization;