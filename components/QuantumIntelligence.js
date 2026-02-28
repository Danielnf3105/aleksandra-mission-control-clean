import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, ScatterChart, Scatter, RadialBarChart, RadialBar, ComposedChart, Bar } from 'recharts';

const QuantumIntelligence = () => {
  const [quantumMetrics, setQuantumMetrics] = useState({
    quantumCoherence: 94.7,
    entanglementStrength: 87.3,
    superpositionState: 'STABLE',
    quantumAdvantage: 156.8,
    parallelUniverses: 8,
    probabilityAccuracy: 97.2,
    quantumTunneling: 'ACTIVE'
  });

  const [dimensionalData, setDimensionalData] = useState([]);
  const [quantumStates, setQuantumStates] = useState([
    { state: '|0⟩', probability: 0.342, energy: 45, coherence: 96 },
    { state: '|1⟩', probability: 0.289, energy: 67, coherence: 94 },
    { state: '|+⟩', probability: 0.256, energy: 52, coherence: 98 },
    { state: '|-⟩', probability: 0.113, energy: 38, coherence: 91 }
  ]);

  const [parallelRealities, setParallelRealities] = useState([
    { universe: 'Alpha', timeline: 'Current', deviation: 0.00, probability: 1.000, status: 'PRIMARY' },
    { universe: 'Beta', timeline: '+2.3h', deviation: 0.23, probability: 0.847, status: 'PROBABLE' },
    { universe: 'Gamma', timeline: '-1.7h', deviation: -0.17, probability: 0.692, status: 'ALTERNATE' },
    { universe: 'Delta', timeline: '+5.1h', deviation: 0.51, probability: 0.534, status: 'POSSIBLE' },
    { universe: 'Epsilon', timeline: '+12.8h', deviation: 1.28, probability: 0.298, status: 'UNLIKELY' },
    { universe: 'Zeta', timeline: '-4.2h', deviation: -0.42, probability: 0.421, status: 'DIVERGENT' },
    { universe: 'Eta', timeline: '+24.0h', deviation: 2.40, probability: 0.156, status: 'SPECULATIVE' },
    { universe: 'Theta', timeline: '∞', deviation: 99.99, probability: 0.001, status: 'THEORETICAL' }
  ]);

  const [quantumComputing, setQuantumComputing] = useState([
    { qubit: 'Q1', state: '|0⟩', fidelity: 99.7, decoherence: 0.3, gate_ops: 1247 },
    { qubit: 'Q2', state: '|1⟩', fidelity: 99.4, decoherence: 0.6, gate_ops: 1089 },
    { qubit: 'Q3', state: '|+⟩', fidelity: 99.8, decoherence: 0.2, gate_ops: 1356 },
    { qubit: 'Q4', state: '|-⟩', fidelity: 99.1, decoherence: 0.9, gate_ops: 967 },
    { qubit: 'Q5', state: '|0⟩', fidelity: 99.6, decoherence: 0.4, gate_ops: 1178 },
    { qubit: 'Q6', state: '|1⟩', fidelity: 99.3, decoherence: 0.7, gate_ops: 1023 },
    { qubit: 'Q7', state: '|+⟩', fidelity: 99.9, decoherence: 0.1, gate_ops: 1445 },
    { qubit: 'Q8', state: '|-⟩', fidelity: 99.2, decoherence: 0.8, gate_ops: 891 }
  ]);

  const [quantumAlgorithms, setQuantumAlgorithms] = useState([
    { name: 'Quantum Fourier Transform', speedup: 'Exponential', applications: ['Signal Processing', 'Cryptography'], status: 'ACTIVE' },
    { name: "Grover's Search", speedup: 'Quadratic', applications: ['Database Search', 'Optimization'], status: 'ACTIVE' },
    { name: "Shor's Factorization", speedup: 'Exponential', applications: ['Cryptography', 'Security'], status: 'STANDBY' },
    { name: 'Quantum Simulation', speedup: 'Exponential', applications: ['Chemistry', 'Physics'], status: 'RESEARCH' },
    { name: 'Variational Quantum Eigensolver', speedup: 'Potential', applications: ['Optimization', 'ML'], status: 'ACTIVE' },
    { name: 'Quantum Approximate Optimization', speedup: 'Heuristic', applications: ['Scheduling', 'Routing'], status: 'TESTING' }
  ]);

  // Initialize dimensional data
  useEffect(() => {
    const now = Date.now();
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      dimension: `D${i + 1}`,
      coherence: Math.max(80, Math.min(99, 92 + Math.sin(i * 0.3) * 8 + Math.random() * 6)),
      entanglement: Math.max(70, Math.min(95, 85 + Math.cos(i * 0.4) * 10 + Math.random() * 8)),
      superposition: Math.max(60, Math.min(98, 80 + Math.sin(i * 0.2) * 15 + Math.random() * 10)),
      tunneling: Math.max(50, Math.min(90, 70 + Math.cos(i * 0.5) * 20 + Math.random() * 12))
    }));
    setDimensionalData(initialData);
  }, []);

  // Quantum real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update quantum metrics
      setQuantumMetrics(prev => ({
        quantumCoherence: Math.max(85, Math.min(99, prev.quantumCoherence + (Math.random() - 0.3) * 2)),
        entanglementStrength: Math.max(80, Math.min(95, prev.entanglementStrength + (Math.random() - 0.4) * 3)),
        superpositionState: ['STABLE', 'COHERENT', 'OSCILLATING'][Math.floor(Math.random() * 3)],
        quantumAdvantage: Math.max(100, Math.min(200, prev.quantumAdvantage + (Math.random() - 0.2) * 10)),
        parallelUniverses: Math.max(6, Math.min(12, prev.parallelUniverses + Math.floor((Math.random() - 0.5) * 2))),
        probabilityAccuracy: Math.max(90, Math.min(99, prev.probabilityAccuracy + (Math.random() - 0.3) * 1.5)),
        quantumTunneling: Math.random() > 0.2 ? 'ACTIVE' : 'FLUCTUATING'
      }));

      // Update quantum states
      setQuantumStates(prev => prev.map(state => ({
        ...state,
        probability: Math.max(0.05, Math.min(0.8, state.probability + (Math.random() - 0.5) * 0.1)),
        energy: Math.max(20, Math.min(80, state.energy + (Math.random() - 0.5) * 8)),
        coherence: Math.max(85, Math.min(100, state.coherence + (Math.random() - 0.3) * 2))
      })));

      // Update parallel realities
      setParallelRealities(prev => prev.map(reality => ({
        ...reality,
        probability: Math.max(0.001, Math.min(1, reality.probability + (Math.random() - 0.5) * 0.05)),
        deviation: reality.deviation + (Math.random() - 0.5) * 0.1
      })));

      // Update quantum computing
      setQuantumComputing(prev => prev.map(qubit => ({
        ...qubit,
        fidelity: Math.max(95, Math.min(100, qubit.fidelity + (Math.random() - 0.3) * 0.5)),
        decoherence: Math.max(0.1, Math.min(2, qubit.decoherence + (Math.random() - 0.5) * 0.2)),
        gate_ops: qubit.gate_ops + Math.floor(Math.random() * 20)
      })));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getQuantumColor = (value, type) => {
    if (type === 'coherence' && value > 95) return '#10B981';
    if (type === 'entanglement' && value > 90) return '#8B5CF6';
    if (type === 'tunneling' && value > 85) return '#06B6D4';
    if (value > 90) return '#10B981';
    if (value > 75) return '#F59E0B';
    return '#EF4444';
  };

  const getUniverseColor = (status) => {
    switch(status) {
      case 'PRIMARY': return 'text-green-400 bg-green-900/30 border-green-500/30';
      case 'PROBABLE': return 'text-blue-400 bg-blue-900/30 border-blue-500/30';
      case 'ALTERNATE': return 'text-purple-400 bg-purple-900/30 border-purple-500/30';
      case 'POSSIBLE': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500/30';
      case 'UNLIKELY': return 'text-orange-400 bg-orange-900/30 border-orange-500/30';
      case 'DIVERGENT': return 'text-red-400 bg-red-900/30 border-red-500/30';
      case 'SPECULATIVE': return 'text-pink-400 bg-pink-900/30 border-pink-500/30';
      case 'THEORETICAL': return 'text-gray-400 bg-gray-900/30 border-gray-500/30';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500/30';
    }
  };

  const getAlgorithmColor = (status) => {
    switch(status) {
      case 'ACTIVE': return 'text-green-400';
      case 'STANDBY': return 'text-blue-400';
      case 'RESEARCH': return 'text-purple-400';
      case 'TESTING': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Quantum Intelligence Header */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
          ⚛️ Quantum Intelligence Nexus
        </h2>
        
        {/* Quantum Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Coherence</div>
            <div className="text-2xl font-bold font-mono text-cyan-400">
              {quantumMetrics.quantumCoherence.toFixed(1)}%
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Entanglement</div>
            <div className="text-2xl font-bold font-mono text-purple-400">
              {quantumMetrics.entanglementStrength.toFixed(1)}%
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Superposition</div>
            <div className="text-sm font-bold font-mono text-blue-400">
              {quantumMetrics.superpositionState}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Advantage</div>
            <div className="text-2xl font-bold font-mono text-green-400">
              {quantumMetrics.quantumAdvantage.toFixed(1)}×
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Universes</div>
            <div className="text-2xl font-bold font-mono text-yellow-400">
              {quantumMetrics.parallelUniverses}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Probability</div>
            <div className="text-2xl font-bold font-mono text-pink-400">
              {quantumMetrics.probabilityAccuracy.toFixed(1)}%
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Tunneling</div>
            <div className="text-sm font-bold font-mono text-cyan-400">
              {quantumMetrics.quantumTunneling}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-mono text-white">Quantum State:</span>
            <span className="text-xl font-bold font-mono text-cyan-400">SUPERPOSITION MAINTAINED</span>
          </div>
          <div className="text-sm font-mono text-gray-400">
            Quantum Clock: {new Date().toISOString().split('T')[1].split('.')[0]} UTC±∞
          </div>
        </div>
      </div>

      {/* Parallel Universe Monitor */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🌌 Parallel Reality Monitor</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {parallelRealities.map((universe, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex justify-between items-start mb-3">
                <div className="font-mono text-sm text-white">Universe {universe.universe}</div>
                <div className={`text-xs px-2 py-1 rounded font-mono border ${getUniverseColor(universe.status)}`}>
                  {universe.status}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-xs text-gray-400">Timeline: {universe.timeline}</div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Probability</span>
                  <span className="font-mono text-cyan-400">{universe.probability.toFixed(3)}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-cyan-500 h-2 rounded-full transition-all"
                    style={{ width: `${universe.probability * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Deviation</span>
                  <span className={`font-mono ${universe.deviation > 0 ? 'text-red-400' : 'text-blue-400'}`}>
                    {universe.deviation > 0 ? '+' : ''}{universe.deviation.toFixed(2)}σ
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quantum State Visualization */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">⚛️ Quantum State Superposition</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart data={quantumStates}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="probability" name="Probability" stroke="#9CA3AF" fontSize={11} />
                <YAxis dataKey="energy" name="Energy" stroke="#9CA3AF" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '6px' }}
                  labelStyle={{ color: '#F3F4F6' }}
                  formatter={(value, name) => [
                    name === 'probability' ? value.toFixed(3) : 
                    name === 'energy' ? `${value} eV` : 
                    name === 'coherence' ? `${value}%` : value,
                    name === 'probability' ? 'Probability' :
                    name === 'energy' ? 'Energy Level' :
                    name === 'coherence' ? 'Coherence' : name
                  ]}
                />
                <Scatter 
                  dataKey="coherence" 
                  fill="#8B5CF6" 
                  fillOpacity={0.8}
                  strokeWidth={2}
                  stroke="#8B5CF6"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          
          {/* Quantum State Legend */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
            {quantumStates.map((state, index) => (
              <div key={index} className="bg-gray-900 rounded p-2 text-center">
                <div className="text-lg font-mono text-purple-400">{state.state}</div>
                <div className="text-xs text-gray-400">P: {state.probability.toFixed(3)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quantum Computing Array */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">🔬 Quantum Computing Array</h3>
          <div className="space-y-3">
            {quantumComputing.map((qubit, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-3 border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-sm text-white">{qubit.qubit}</span>
                    <span className="text-lg font-mono text-cyan-400">{qubit.state}</span>
                  </div>
                  <div className="text-xs font-mono text-gray-400">
                    {qubit.gate_ops.toLocaleString()} ops
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">Fidelity</span>
                      <span className="text-green-400 font-mono">{qubit.fidelity.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div 
                        className="bg-green-500 h-1.5 rounded-full"
                        style={{ width: `${qubit.fidelity}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">Decoherence</span>
                      <span className="text-red-400 font-mono">{qubit.decoherence.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div 
                        className="bg-red-500 h-1.5 rounded-full"
                        style={{ width: `${qubit.decoherence * 50}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quantum Algorithms */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🧮 Quantum Algorithm Suite</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quantumAlgorithms.map((algorithm, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex justify-between items-start mb-3">
                <div className="font-mono text-sm text-white">{algorithm.name}</div>
                <div className={`text-xs font-mono uppercase ${getAlgorithmColor(algorithm.status)}`}>
                  {algorithm.status}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-xs text-gray-400">
                  Speedup: <span className="text-cyan-400 font-mono">{algorithm.speedup}</span>
                </div>
                <div className="text-xs text-gray-400">Applications:</div>
                <div className="flex flex-wrap gap-1">
                  {algorithm.applications.map((app, appIndex) => (
                    <span key={appIndex} className="text-xs bg-gray-700 px-2 py-1 rounded font-mono text-purple-300">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quantum Intelligence Feed */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">⚛️ Quantum Intelligence Activity</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {[
            '🌌 Parallel universe Beta showing 84.7% probability convergence with current timeline',
            '⚛️ Quantum coherence maintained at 94.7% across all 8 qubit array systems',
            '🔮 Superposition state oscillation detected - exploring 47 simultaneous possibilities',
            '🚀 Quantum tunneling effect achieved 23% processing speed enhancement',
            '🧮 Grover\'s search algorithm optimized content discovery by 156× quantum advantage',
            '🌐 Quantum entanglement network established between 6 autonomous agents',
            '⚡ Quantum Fourier Transform accelerating signal processing by exponential factor',
            '🎯 Probability accuracy reached 97.2% for mission outcome predictions',
            '🔬 Qubit Q7 achieved 99.9% fidelity with 0.1% decoherence rate',
            '🌀 Dimensional coherence fluctuation detected across D1-D20 quantum space',
            '💫 Quantum simulation modeling 8 parallel universe scenarios simultaneously',
            '⚛️ Mission Control operating in quantum superposition of all possible states'
          ].map((activity, index) => (
            <div key={index} className="flex items-center text-sm font-mono">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300">{activity}</span>
              <span className="ml-auto text-gray-500">
                {Math.floor(Math.random() * 300)} ms ago
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quantum Reality Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🌌 Quantum Reality Interface</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg p-4 border border-cyan-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">⚛️</div>
              <div className="text-lg font-bold text-cyan-400 font-mono">QUANTUM COHERENT</div>
              <div className="text-xs text-cyan-300 mt-1">All qubits entangled</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg p-4 border border-purple-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">🌌</div>
              <div className="text-lg font-bold text-purple-400 font-mono">MULTIVERSE ACTIVE</div>
              <div className="text-xs text-purple-300 mt-1">8 parallel realities</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg p-4 border border-blue-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">🔮</div>
              <div className="text-lg font-bold text-blue-400 font-mono">SUPERPOSITION</div>
              <div className="text-xs text-blue-300 mt-1">All states simultaneous</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg p-4 border border-pink-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-lg font-bold text-pink-400 font-mono">TUNNELING</div>
              <div className="text-xs text-pink-300 mt-1">Reality barriers transcended</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumIntelligence;