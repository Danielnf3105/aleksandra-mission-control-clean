// Quantum Computing & Advantage Monitoring Center - 2026 Quantum Supremacy Analytics
// Based on IBM, Google, IonQ quantum advantage tracking and fault-tolerant computing roadmaps
import { useState, useEffect } from 'react';
import { 
  Zap, Activity, BarChart3, TrendingUp, TrendingDown, Target, Clock,
  Monitor, Server, Network, Eye, Gauge, Settings, RefreshCw, Brain,
  AlertTriangle, CheckCircle, Info, Search, Play, Pause, StopCircle,
  ArrowRight, ArrowLeft, Minus, Plus, Shield, Key, Lock, Users,
  Code2, GitBranch, Package, Terminal, Database, HardDrive, Cpu,
  MemoryStick, Layers, FileCode, FileCheck, MapPin, Radar, Atom,
  FlashOff, Workflow, Sparkles, CircuitBoard, Binary, Hexagon
} from 'lucide-react';

export default function QuantumComputingAdvantageCenter() {
  const [quantumData, setQuantumData] = useState({
    currentTime: new Date().toISOString(),
    overallQuantumScore: 87.3,
    quantumAdvantageProgress: 76.4, // % to verified advantage by end 2026
    totalLogicalQubits: 156,
    physicalQubits: 2847,
    quantumVolume: 1024,
    quantumProviders: [
      {
        name: 'IBM Quantum',
        processor: 'Nighthawk',
        qubits: 1121,
        logicalQubits: 47,
        fidelity: 99.87,
        coherenceTime: 150.7, // microseconds
        gateErrorRate: 0.13,
        quantumVolume: 512,
        status: 'OPERATIONAL',
        advantageScore: 82.4,
        roadmapTarget: 'Advantage by 2026',
        algorithms: ['QAOA', 'VQE', 'Shor', 'Grover'],
        location: 'Yorktown Heights'
      },
      {
        name: 'Google Quantum AI',
        processor: 'Willow',
        qubits: 105,
        logicalQubits: 23,
        fidelity: 99.94,
        coherenceTime: 89.3,
        gateErrorRate: 0.06,
        quantumVolume: 256,
        status: 'OPERATIONAL',
        advantageScore: 94.7,
        roadmapTarget: 'Error correction',
        algorithms: ['Random Circuit', 'QAOA', 'HHL'],
        location: 'Santa Barbara'
      },
      {
        name: 'IonQ',
        processor: 'IonQ Forte',
        qubits: 64,
        logicalQubits: 18,
        fidelity: 99.8,
        coherenceTime: 245.6,
        gateErrorRate: 0.2,
        quantumVolume: 128,
        status: 'OPERATIONAL',
        advantageScore: 78.9,
        roadmapTarget: 'Photonic networking',
        algorithms: ['VQE', 'QAOA', 'Quantum ML'],
        location: 'College Park'
      },
      {
        name: 'Rigetti Computing',
        processor: 'Aspen-M-3',
        qubits: 80,
        logicalQubits: 12,
        fidelity: 98.9,
        coherenceTime: 67.2,
        gateErrorRate: 1.1,
        quantumVolume: 64,
        status: 'DEGRADED',
        advantageScore: 65.3,
        roadmapTarget: 'Modular scaling',
        algorithms: ['QAOA', 'VQE', 'Forest SDK'],
        location: 'Berkeley'
      }
    ],
    quantumAlgorithms: [
      {
        algorithm: 'Quantum Approximate Optimization (QAOA)',
        provider: 'IBM Quantum',
        problem: 'Portfolio optimization',
        runtime: '12.4s',
        classicalBaseline: '8.7h',
        advantageFactor: 2527,
        success: 94.7,
        status: 'ADVANTAGE_VERIFIED',
        qubits: 47,
        circuits: 1547
      },
      {
        algorithm: 'Variational Quantum Eigensolver (VQE)',
        provider: 'Google Quantum AI', 
        problem: 'Molecular simulation (LiH)',
        runtime: '8.9s',
        classicalBaseline: '4.2h',
        advantageFactor: 1697,
        success: 97.2,
        status: 'ADVANTAGE_VERIFIED',
        qubits: 23,
        circuits: 892
      },
      {
        algorithm: 'Quantum Machine Learning',
        provider: 'IonQ',
        problem: 'Feature mapping',
        runtime: '23.7s',
        classicalBaseline: '2.1h',
        advantageFactor: 318,
        success: 89.4,
        status: 'ADVANTAGE_PENDING',
        qubits: 18,
        circuits: 567
      },
      {
        algorithm: 'Shor\'s Algorithm',
        provider: 'IBM Quantum',
        problem: 'RSA-2048 factoring',
        runtime: 'N/A',
        classicalBaseline: 'Intractable',
        advantageFactor: null,
        success: 23.4,
        status: 'EXPERIMENTAL',
        qubits: 1121,
        circuits: 12847
      }
    ],
    errorCorrection: [
      {
        timestamp: '14:55',
        provider: 'Google Quantum AI',
        method: 'Surface Code',
        logicalQubits: 1,
        physicalQubits: 17,
        errorRate: 0.0006,
        correctionCycles: 25,
        fidelityImprovement: 12.7,
        status: 'SUCCESSFUL'
      },
      {
        timestamp: '14:48',
        provider: 'IBM Quantum',
        method: 'Repetition Code',
        logicalQubits: 3,
        physicalQubits: 15,
        errorRate: 0.0013,
        correctionCycles: 18,
        fidelityImprovement: 8.4,
        status: 'SUCCESSFUL'
      },
      {
        timestamp: '14:42',
        provider: 'IonQ',
        method: 'Color Code',
        logicalQubits: 1,
        physicalQubits: 7,
        errorRate: 0.002,
        correctionCycles: 12,
        fidelityImprovement: 6.8,
        status: 'PARTIAL'
      }
    ],
    quantumNetworks: [
      {
        network: 'IBM Quantum Network',
        nodes: 23,
        institutions: ['MIT', 'Oxford', 'Tokyo'], 
        connectivity: 'Cloud access',
        usage: 156789,
        experiments: 45678,
        entanglementFidelity: 87.3,
        status: 'ACTIVE'
      },
      {
        network: 'Google Quantum AI Collaboratory',
        nodes: 8,
        institutions: ['Caltech', 'NASA JPL', 'Harvard'],
        connectivity: 'Research partnership',
        usage: 34567,
        experiments: 12890,
        entanglementFidelity: 92.8,
        status: 'ACTIVE'
      },
      {
        network: 'European Quantum Internet',
        nodes: 15,
        institutions: ['CERN', 'TU Delft', 'INRIA'],
        connectivity: 'Photonic links',
        usage: 23456,
        experiments: 8905,
        entanglementFidelity: 78.4,
        status: 'EXPANDING'
      }
    ],
    quantumMetrics: [
      {
        metric: 'Quantum Advantage Score',
        value: 87.3,
        unit: '%',
        trend: 'improving',
        target: 95.0
      },
      {
        metric: 'Gate Fidelity',
        value: 99.87,
        unit: '%',
        trend: 'improving',
        target: 99.9
      },
      {
        metric: 'Coherence Time',
        value: 150.7,
        unit: 'μs',
        trend: 'improving',
        target: 200.0
      },
      {
        metric: 'Logical/Physical Ratio',
        value: 5.48,
        unit: '%',
        trend: 'improving',
        target: 10.0
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        overallQuantumScore: Math.max(80, Math.min(95, prev.overallQuantumScore + (Math.random() - 0.5) * 1)),
        quantumAdvantageProgress: Math.max(70, Math.min(90, prev.quantumAdvantageProgress + (Math.random() - 0.4) * 0.5)),
        quantumMetrics: prev.quantumMetrics.map(metric => ({
          ...metric,
          value: metric.metric === 'Gate Fidelity'
            ? Math.max(99.5, Math.min(99.99, metric.value + (Math.random() - 0.5) * 0.02))
            : metric.metric === 'Coherence Time'
            ? Math.max(50, Math.min(250, metric.value + (Math.random() - 0.5) * 5))
            : metric.metric === 'Logical/Physical Ratio'
            ? Math.max(3, Math.min(15, metric.value + (Math.random() - 0.5) * 0.2))
            : Math.max(75, Math.min(95, metric.value + (Math.random() - 0.5) * 1))
        })),
        quantumProviders: prev.quantumProviders.map(provider => ({
          ...provider,
          fidelity: Math.max(98.5, Math.min(99.99, provider.fidelity + (Math.random() - 0.5) * 0.05)),
          coherenceTime: Math.max(50, Math.min(300, provider.coherenceTime + (Math.random() - 0.5) * 5)),
          gateErrorRate: Math.max(0.01, Math.min(2, provider.gateErrorRate + (Math.random() - 0.5) * 0.1))
        }))
      }));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': case 'ADVANTAGE_VERIFIED': case 'SUCCESSFUL': case 'ACTIVE': return 'text-green-400';
      case 'DEGRADED': case 'ADVANTAGE_PENDING': case 'PARTIAL': case 'EXPANDING': return 'text-yellow-400';
      case 'OFFLINE': case 'EXPERIMENTAL': case 'FAILED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'OPERATIONAL': case 'ADVANTAGE_VERIFIED': case 'SUCCESSFUL': case 'ACTIVE': return 'bg-green-400/20';
      case 'DEGRADED': case 'ADVANTAGE_PENDING': case 'PARTIAL': case 'EXPANDING': return 'bg-yellow-400/20';
      case 'OFFLINE': case 'EXPERIMENTAL': case 'FAILED': return 'bg-red-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'declining': return <TrendingDown className="w-4 h-4 text-red-400" />;
      case 'stable': return <Minus className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getProviderIcon = (provider) => {
    const iconClass = "w-4 h-4";
    switch (provider) {
      case 'IBM Quantum': return <Hexagon className={`${iconClass} text-blue-400`} />;
      case 'Google Quantum AI': return <CircuitBoard className={`${iconClass} text-red-400`} />;
      case 'IonQ': return <Atom className={`${iconClass} text-purple-400`} />;
      case 'Rigetti Computing': return <Binary className={`${iconClass} text-green-400`} />;
      default: return <Monitor className={`${iconClass} text-gray-400`} />;
    }
  };

  const getQuantumScoreColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-blue-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num?.toString() || 'N/A';
  };

  const getAdvantageFactorColor = (factor) => {
    if (!factor) return 'text-gray-400';
    if (factor >= 2000) return 'text-green-400';
    if (factor >= 1000) return 'text-blue-400';
    if (factor >= 100) return 'text-yellow-400';
    return 'text-orange-400';
  };

  return (
    <div className="space-y-6">
      {/* Quantum Computing Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Atom className="w-8 h-8 text-purple-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Quantum Computing & Advantage Monitoring Center</h2>
              <div className="text-sm text-gray-400">IBM • Google • IonQ • Fault-Tolerant Systems • Quantum Advantage 2026</div>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm font-semibold">QUANTUM ADVANTAGE</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Quantum Score</div>
            <div className={`text-2xl font-mono font-bold ${getQuantumScoreColor(quantumData.overallQuantumScore)}`}>
              {quantumData.overallQuantumScore.toFixed(1)}%
            </div>
            <div className="text-xs text-emerald-400">
              {quantumData.totalLogicalQubits} logical qubits active
            </div>
          </div>
        </div>
        
        {/* Quantum Progress Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Advantage Progress</span>
              <Target className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {quantumData.quantumAdvantageProgress.toFixed(1)}<span className="text-sm text-gray-400 ml-1">%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-green-400 transition-all duration-300"
                style={{ width: `${Math.min(100, quantumData.quantumAdvantageProgress)}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">to 2026 target</div>
          </div>

          {quantumData.quantumMetrics.slice(0, 3).map((metric, index) => (
            <div key={index} className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">{metric.metric}</span>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="text-lg font-mono text-white">
                {metric.value.toFixed(metric.unit === '%' ? 2 : 1)}<span className="text-sm text-gray-400 ml-1">{metric.unit}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    metric.metric === 'Gate Fidelity' 
                      ? (metric.value >= 99.9 ? 'bg-green-400' : metric.value >= 99.5 ? 'bg-blue-400' : 'bg-yellow-400')
                      : metric.value >= metric.target ? 'bg-green-400' : 'bg-blue-400'
                  }`}
                  style={{ 
                    width: metric.metric === 'Gate Fidelity' 
                      ? `${Math.min(100, metric.value)}%`
                      : `${Math.min(100, (metric.value / metric.target) * 100)}%` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quantum Provider Status */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Hexagon className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Quantum Computing Providers</h3>
            <div className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs font-semibold rounded">
              4 SYSTEMS
            </div>
          </div>
          
          <div className="space-y-4">
            {quantumData.quantumProviders.map((provider, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getProviderIcon(provider.name)}
                    <div>
                      <h4 className="text-white font-medium">{provider.name}</h4>
                      <div className="text-xs text-gray-400">{provider.processor} • {provider.location}</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(provider.status)} ${getStatusBg(provider.status)}`}>
                      {provider.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Advantage Score</div>
                    <div className={`text-lg font-mono ${getQuantumScoreColor(provider.advantageScore)}`}>
                      {provider.advantageScore.toFixed(1)}%
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Physical Qubits</div>
                    <div className="text-blue-400 text-sm">{provider.qubits}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Logical Qubits</div>
                    <div className="text-green-400 text-sm">{provider.logicalQubits}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Fidelity</div>
                    <div className="text-purple-400 text-sm">{provider.fidelity.toFixed(2)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Quantum Volume</div>
                    <div className="text-cyan-400 text-sm">{provider.quantumVolume}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                  <div>
                    <span className="text-gray-400">Coherence:</span>
                    <span className="text-yellow-400 ml-1">{provider.coherenceTime.toFixed(1)}μs</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Gate Error:</span>
                    <span className="text-red-400 ml-1">{provider.gateErrorRate.toFixed(2)}%</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="text-xs text-gray-400 mb-1">Active Algorithms:</div>
                  <div className="flex flex-wrap gap-1">
                    {provider.algorithms.slice(0, 3).map((algo, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-purple-400/20 text-purple-400 rounded">
                        {algo}
                      </span>
                    ))}
                    {provider.algorithms.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-400/20 text-gray-400 rounded">
                        +{provider.algorithms.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-orange-400">{provider.roadmapTarget}</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        provider.status === 'OPERATIONAL' ? 'bg-green-400' : 'bg-yellow-400'
                      }`}
                      style={{ width: `${Math.min(100, provider.fidelity)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quantum Algorithm Performance */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Workflow className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Algorithm Performance</h3>
          </div>
          
          <div className="space-y-3">
            {quantumData.quantumAlgorithms.map((algo, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium text-sm">{algo.algorithm}</span>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(algo.status)} ${getStatusBg(algo.status)}`}>
                    {algo.status.replace('_', ' ')}
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{algo.problem}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Quantum:</span>
                    <span className="text-green-400 ml-1">{algo.runtime}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Classical:</span>
                    <span className="text-red-400 ml-1">{algo.classicalBaseline}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Advantage:</span>
                    <span className={`ml-1 ${getAdvantageFactorColor(algo.advantageFactor)}`}>
                      {algo.advantageFactor ? `${algo.advantageFactor}x` : 'N/A'}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Success:</span>
                    <span className="text-blue-400 ml-1">{algo.success.toFixed(1)}%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">{getProviderIcon(algo.provider)} {algo.qubits} qubits</span>
                  <span className="text-cyan-400">{formatNumber(algo.circuits)} circuits</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Error Correction Progress */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Error Correction</h3>
          </div>
          
          <div className="space-y-4">
            {quantumData.errorCorrection.map((correction, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">{correction.method}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">{correction.timestamp}</span>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(correction.status)} ${getStatusBg(correction.status)}`}>
                      {correction.status}
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{correction.provider}</div>
                
                <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                  <div>
                    <div className="text-xs text-gray-400">Logical Qubits</div>
                    <div className="text-green-400 font-mono">{correction.logicalQubits}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Physical Qubits</div>
                    <div className="text-blue-400 font-mono">{correction.physicalQubits}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Error Rate</div>
                    <div className="text-red-400 font-mono">{correction.errorRate.toFixed(4)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Improvement</div>
                    <div className="text-purple-400 font-mono">+{correction.fidelityImprovement.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      correction.status === 'SUCCESSFUL' ? 'bg-green-400' :
                      correction.status === 'PARTIAL' ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                    style={{ width: `${correction.correctionCycles * 4}%` }}
                  />
                </div>
                <div className="text-xs text-gray-400 mt-1">{correction.correctionCycles} cycles</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quantum Networks */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Network className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Quantum Networks</h3>
          </div>
          
          <div className="space-y-4">
            {quantumData.quantumNetworks.map((network, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">{network.network}</span>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(network.status)} ${getStatusBg(network.status)}`}>
                    {network.status}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                  <div>
                    <div className="text-xs text-gray-400">Nodes</div>
                    <div className="text-blue-400 font-mono">{network.nodes}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Usage</div>
                    <div className="text-green-400 font-mono">{formatNumber(network.usage)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Experiments</div>
                    <div className="text-purple-400 font-mono">{formatNumber(network.experiments)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Entanglement</div>
                    <div className="text-cyan-400 font-mono">{network.entanglementFidelity.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-xs text-gray-400 mb-1">Key Institutions:</div>
                  <div className="flex flex-wrap gap-1">
                    {network.institutions.map((inst, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-orange-400/20 text-orange-400 rounded">
                        {inst}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-blue-400">{network.connectivity}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}