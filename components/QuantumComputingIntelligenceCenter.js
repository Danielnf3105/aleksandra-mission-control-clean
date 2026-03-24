// Quantum Computing Intelligence Center - Quantum Operations, Hardware Monitoring & Quantum Analytics
import { useState, useEffect } from 'react';
import { Atom, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Zap, Activity, Cpu } from 'lucide-react';

export default function QuantumComputingIntelligenceCenter() {
  const [quantumData, setQuantumData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalQuantumMarket: 23456789012, // EUR annually
      quantumHardwareMarket: 8901234567,
      quantumSoftwareMarket: 5678901234,
      quantumServicesMarket: 8876543210,
      totalQuantumComputers: 1234, // quantum systems globally
      activeQubits: 89012345,
      quantumProfessionals: 67890,
      quantumAlgorithms: 23456789, // algorithms developed
      quantumExperiments: 456789012, // experiments run annually
      quantumVolume: 8192, // highest quantum volume achieved
      coherenceTime: 234.5, // microseconds average
      gateErrorRate: 0.0123, // percentage
      digitalAdoption: 45.6, // percentage
      automationLevel: 67.8
    },
    majorQuantumCompanies: [
      {
        company: 'IBM Quantum',
        category: 'Quantum Hardware & Software',
        revenue: 2345678901, // EUR annual (estimated quantum division)
        qubits: 1121, // max qubits in system
        quantumVolume: 512,
        employees: 2300,
        countries: 25,
        services: ['Quantum hardware', 'Qiskit', 'Quantum Network', 'Cloud services'],
        digitalMaturity: 94.7,
        sustainabilityScore: 8.6,
        operationalEfficiency: 89.3,
        innovationScore: 9.4,
        stockPerformance: '+12.4%'
      },
      {
        company: 'Google Quantum AI',
        category: 'Quantum Research & Computing',
        revenue: 1234567890, // estimated
        qubits: 70,
        quantumVolume: 16777216, // Sycamore achievement
        employees: 1200,
        countries: 8,
        services: ['Quantum processors', 'Cirq', 'Research', 'Quantum supremacy'],
        digitalMaturity: 97.8,
        sustainabilityScore: 9.1,
        operationalEfficiency: 94.2,
        innovationScore: 9.8,
        stockPerformance: '+27.8%'
      },
      {
        company: 'IonQ',
        category: 'Trapped Ion Quantum Computing',
        revenue: 11000000, // EUR actual revenue
        qubits: 32,
        quantumVolume: 4194304,
        employees: 182,
        countries: 3,
        services: ['Ion trap systems', 'Cloud access', 'Quantum software', 'Research'],
        digitalMaturity: 89.4,
        sustainabilityScore: 8.9,
        operationalEfficiency: 87.6,
        innovationScore: 9.2,
        stockPerformance: '-15.3%'
      },
      {
        company: 'Rigetti Computing',
        category: 'Superconducting Quantum Computing',
        revenue: 8900000,
        qubits: 80,
        quantumVolume: 320,
        employees: 156,
        countries: 2,
        services: ['Superconducting processors', 'Forest platform', 'Quantum cloud', 'Hybrid algorithms'],
        digitalMaturity: 91.2,
        sustainabilityScore: 8.2,
        operationalEfficiency: 84.7,
        innovationScore: 8.9,
        stockPerformance: '-8.7%'
      }
    ],
    quantumTechnologies: [
      {
        type: 'Superconducting Qubits',
        activeSystemsCount: 456,
        totalQubits: 45678,
        averageQubits: 100, // qubits per system
        coherenceTime: 89.4, // microseconds
        gateTime: 12.3, // nanoseconds
        fidelity: 99.1, // percentage
        errorRate: 0.0087, // percentage
        operatingTemp: 0.015, // Kelvin
        digitalAdoption: 89.7
      },
      {
        type: 'Trapped Ion',
        activeSystemsCount: 123,
        totalQubits: 3456,
        averageQubits: 28,
        coherenceTime: 156.7,
        gateTime: 234.5,
        fidelity: 99.8,
        errorRate: 0.0023,
        operatingTemp: 0.0001,
        digitalAdoption: 92.4
      },
      {
        type: 'Photonic Quantum',
        activeSystemsCount: 89,
        totalQubits: 890,
        averageQubits: 10,
        coherenceTime: 1000.0, // room temperature advantage
        gateTime: 0.1,
        fidelity: 95.6,
        errorRate: 0.044,
        operatingTemp: 293.15, // room temperature
        digitalAdoption: 76.8
      },
      {
        type: 'Topological Qubits',
        activeSystemsCount: 12,
        totalQubits: 48,
        averageQubits: 4,
        coherenceTime: 10000.0, // theoretical advantage
        gateTime: 45.6,
        fidelity: 97.8,
        errorRate: 0.022,
        operatingTemp: 0.01,
        digitalAdoption: 34.5
      }
    ],
    quantumOperations: {
      quantumExperiments: {
        experiments: 456789012, // experiments annually
        successRate: 78.9, // percentage
        averageRuntime: 2.4, // hours per experiment
        queueTime: 0.7, // hours average wait
        automationLevel: 89.4,
        digitalIntegration: 94.6
      },
      errorCorrection: {
        schemes: 23456, // error correction schemes deployed
        efficiency: 89.7, // error reduction percentage
        overhead: 234.5, // physical qubits per logical qubit
        latency: 12.3, // microseconds
        automationLevel: 67.8,
        digitalIntegration: 78.9
      },
      quantumNetworking: {
        networks: 345, // quantum networks globally
        entanglementRate: 1234.5, // entangled pairs per second
        fidelity: 89.3, // quantum channel fidelity
        distance: 1340.0, // kilometers max distance
        automationLevel: 56.7,
        digitalIntegration: 67.8
      },
      calibration: {
        procedures: 890123, // calibration procedures annually
        accuracy: 99.7, // calibration accuracy
        frequency: 4.2, // calibrations per day
        duration: 0.3, // hours per calibration
        automationLevel: 94.6,
        digitalIntegration: 97.2
      }
    },
    quantumPerformance: {
      quantumVolume: 8192, // best achieved quantum volume
      quantumSpeedUp: 1000000.0, // speedup over classical
      coherenceTime: 234.5, // microseconds average
      gateErrorRate: 0.0123, // percentage
      readoutFidelity: 98.7, // percentage
      crossTalkError: 0.0056, // percentage
      thermalError: 0.0089, // percentage
      dephasing: 345.6, // microseconds
      gateFidelity: 99.2, // percentage
      quantumEfficiency: 78.9, // percentage
      calibrationStability: 94.6, // percentage
      systemUptime: 97.8 // percentage
    },
    sustainabilityMetrics: {
      energyEfficiency: 34.5, // percentage improvement
      coolingEfficiency: 45.6, // percentage improvement
      carbonReduction: 23.4, // percentage vs baseline
      sustainableMaterials: 67.8, // percentage of components
      recyclingRate: 78.9, // percentage
      greenEnergy: 89.4, // percentage renewable energy
      wasteReduction: 56.7, // percentage improvement
      circularDesign: 34.2, // percentage circular economy principles
      carbonNeutral: 45.6, // percentage of operations
      greenInnovation: 89.7, // percentage green R&D
      sustainabilityInvestment: 234567890, // EUR annually
      environmentalCompliance: 97.8 // percentage
    },
    quantumApplications: {
      cryptography: {
        algorithms: 23456,
        securityLevel: 99.99,
        keyGeneration: 78.9,
        deploymentRate: 34.5,
        quantumAdvantage: 1000000.0,
        commercialReadiness: 67.8
      },
      optimization: {
        algorithms: 45678,
        problemSize: 10000,
        solutionQuality: 89.7,
        speedUp: 234.5,
        quantumAdvantage: 1000.0,
        commercialReadiness: 78.9
      },
      simulation: {
        algorithms: 34567,
        systemSize: 1000,
        accuracy: 94.6,
        speedUp: 567.8,
        quantumAdvantage: 10000.0,
        commercialReadiness: 56.7
      },
      machineLearning: {
        algorithms: 12345,
        featureSpace: 1024,
        accuracy: 87.3,
        trainingSpeed: 123.4,
        quantumAdvantage: 100.0,
        commercialReadiness: 23.4
      }
    },
    innovationTrends: {
      quantumSupremacy: 78.9, // adoption percentage
      errorCorrection: 67.8,
      quantumNetworking: 45.6,
      quantumSensors: 56.7,
      quantumSimulation: 89.4,
      quantumMachineLearning: 34.5,
      quantumCryptography: 76.8,
      faultTolerant: 23.4,
      quantumInternet: 12.3,
      quantumCloud: 89.7,
      hybridAlgorithms: 78.9,
      quantumAnnealing: 67.8
    },
    quantumAlerts: [
      {
        type: 'CRITICAL',
        category: 'Hardware',
        message: 'Quantum processor decoherence time dropped 23% - investigating environmental factors',
        location: 'IBM Quantum System One',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '06:47',
        recommendations: ['Environmental isolation', 'Recalibration', 'Hardware diagnostics', 'Backup system activation']
      },
      {
        type: 'WARNING',
        category: 'Error Correction',
        message: 'Logical qubit error rate exceeding threshold - optimization required',
        location: 'Surface Code Implementation',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '06:44',
        recommendations: ['Code optimization', 'Threshold adjustment', 'Syndrome detection', 'Decoding improvement']
      },
      {
        type: 'SUCCESS',
        category: 'Breakthrough',
        message: 'New quantum volume record achieved - 16384 QV demonstrated',
        location: 'Google Quantum AI Lab',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '06:41',
        recommendations: ['Results verification', 'Publication preparation', 'Scaling analysis', 'Commercial evaluation']
      },
      {
        type: 'INFO',
        category: 'Network',
        message: 'Quantum internet protocol test successful - 1000km entanglement maintained',
        location: 'Quantum Network Testbed',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '06:38',
        recommendations: ['Protocol standardization', 'Security analysis', 'Scalability testing', 'Commercial planning']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        quantumPerformance: {
          ...prev.quantumPerformance,
          coherenceTime: Math.max(200, Math.min(280, prev.quantumPerformance.coherenceTime + (Math.random() - 0.5) * 10)),
          gateErrorRate: Math.max(0.008, Math.min(0.018, prev.quantumPerformance.gateErrorRate + (Math.random() - 0.5) * 0.002))
        },
        quantumOperations: {
          ...prev.quantumOperations,
          quantumExperiments: {
            ...prev.quantumOperations.quantumExperiments,
            successRate: Math.max(70, Math.min(85, prev.quantumOperations.quantumExperiments.successRate + (Math.random() - 0.5) * 2)),
            queueTime: Math.max(0.3, Math.min(1.2, prev.quantumOperations.quantumExperiments.queueTime + (Math.random() - 0.5) * 0.1))
          }
        }
      }));
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'SUCCESS': return 'border-green-500 bg-green-900/30 text-green-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'POSITIVE': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 80, excellent = 90) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Quantum Hardware & Software': return 'text-blue-400 bg-blue-400/20';
      case 'Quantum Research & Computing': return 'text-green-400 bg-green-400/20';
      case 'Trapped Ion Quantum Computing': return 'text-purple-400 bg-purple-400/20';
      case 'Superconducting Quantum Computing': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTechnologyColor = (technology) => {
    switch (technology) {
      case 'Superconducting Qubits': return 'text-blue-400';
      case 'Trapped Ion': return 'text-green-400';
      case 'Photonic Quantum': return 'text-yellow-400';
      case 'Topological Qubits': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getApplicationColor = (application) => {
    switch (application) {
      case 'cryptography': return 'text-red-400 bg-red-400/20';
      case 'optimization': return 'text-green-400 bg-green-400/20';
      case 'simulation': return 'text-blue-400 bg-blue-400/20';
      case 'machineLearning': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000000) {
      return `${(num / 1000000000000).toFixed(1)}T`;
    }
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000000000) {
      return `€${(amount / 1000000000000).toFixed(1)}T`;
    }
    if (amount >= 1000000000) {
      return `€${(amount / 1000000000).toFixed(1)}B`;
    }
    if (amount >= 1000000) {
      return `€${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `€${(amount / 1000).toFixed(0)}K`;
    }
    return `€${amount.toLocaleString()}`;
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  const formatScientific = (value, decimals = 1) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(decimals)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(decimals)}K`;
    }
    return value.toFixed(decimals);
  };

  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
              <Atom className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Quantum Computing Intelligence Center</h1>
              <p className="text-indigo-300">Quantum operations, hardware monitoring & quantum analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-indigo-400">{quantumData.currentTime}</div>
            <div className="text-indigo-300">Quantum Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-indigo-400 mr-2" />
                Quantum Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{formatCurrency(quantumData.industryOverview.globalQuantumMarket)}</div>
            <div className="text-indigo-300 text-sm">Hardware: {formatCurrency(quantumData.industryOverview.quantumHardwareMarket)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Atom className="w-5 h-5 text-blue-400 mr-2" />
                Quantum Systems
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(quantumData.industryOverview.totalQuantumComputers)}</div>
            <div className="text-blue-300 text-sm">Active Globally</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Cpu className="w-5 h-5 text-green-400 mr-2" />
                Total Qubits
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(quantumData.industryOverview.activeQubits)}</div>
            <div className="text-green-300 text-sm">Active Qubits</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
                Quantum Volume
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(quantumData.industryOverview.quantumVolume)}</div>
            <div className="text-purple-300 text-sm">Best Achieved</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-orange-400 mr-2" />
                Digital Adoption
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(quantumData.industryOverview.digitalAdoption)}</div>
            <div className="text-orange-300 text-sm">Industry Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-yellow-400 mr-2" />
                Quantum Professionals
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(quantumData.industryOverview.quantumProfessionals)}</div>
            <div className="text-yellow-300 text-sm">Global Workforce</div>
          </div>
        </div>

        {/* Major Quantum Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Atom className="w-5 h-5 text-indigo-400 mr-2" />
            Major Quantum Companies Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Company</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Max Qubits</th>
                  <th className="text-center p-3 text-slate-300">Quantum Volume</th>
                  <th className="text-center p-3 text-slate-300">Efficiency</th>
                  <th className="text-center p-3 text-slate-300">Innovation</th>
                </tr>
              </thead>
              <tbody>
                {quantumData.majorQuantumCompanies.map((company, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{company.company}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(company.employees)} employees • {company.countries} countries • {company.stockPerformance}</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(company.category)}`}>
                        {company.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(company.revenue)}</td>
                    <td className="p-3 text-center text-blue-400">{company.qubits}</td>
                    <td className="p-3 text-center text-purple-400">{formatNumber(company.quantumVolume)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.operationalEfficiency, 85, 90)}`}>
                      {formatPercentage(company.operationalEfficiency)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.innovationScore, 8.0, 9.0)}`}>
                      {company.innovationScore.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quantum Technologies & Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cpu className="w-5 h-5 text-blue-400 mr-2" />
              Quantum Technologies Intelligence
            </h3>
            <div className="space-y-4">
              {quantumData.quantumTechnologies.map((tech, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className={`text-white font-medium text-sm ${getTechnologyColor(tech.type)}`}>{tech.type}</span>
                      <span className="text-green-400 text-sm">{formatPercentage(tech.fidelity)} fidelity</span>
                    </div>
                    <span className="text-blue-400 text-sm">{formatNumber(tech.activeSystemsCount)} systems</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-purple-400">Qubits: {formatNumber(tech.totalQubits)} total</div>
                      <div className="text-cyan-400">Avg: {tech.averageQubits} qubits/system</div>
                      <div className="text-blue-400">Coherence: {tech.coherenceTime.toFixed(1)}μs</div>
                      <div className="text-green-400">Gate Time: {tech.gateTime.toFixed(1)}ns</div>
                    </div>
                    <div>
                      <div className="text-orange-400">Error Rate: {formatPercentage(tech.errorRate)}</div>
                      <div className="text-red-400">Temp: {tech.operatingTemp}K</div>
                      <div className="text-yellow-400">Digital: {formatPercentage(tech.digitalAdoption)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-purple-400 mr-2" />
              Quantum Operations Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(quantumData.quantumOperations).map(([operation, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium capitalize">{operation.replace(/([A-Z])/g, ' $1')}</span>
                    </div>
                    <span className={`text-sm ${getPerformanceColor(data.efficiency || data.successRate || data.accuracy || data.entanglementRate, 70, 90)}`}>
                      {(data.efficiency || data.successRate || data.accuracy || data.entanglementRate || 0).toFixed(1)}
                      {operation.includes('experiments') ? '% success' : 
                       operation.includes('correction') ? '% efficiency' : 
                       operation.includes('networking') ? ' pairs/s' : 
                       operation.includes('calibration') ? '% accuracy' : ' rate'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-green-400">
                        {operation.includes('experiments') ? 'Experiments: ' + formatNumber(data.experiments) :
                         operation.includes('correction') ? 'Schemes: ' + formatNumber(data.schemes) :
                         operation.includes('networking') ? 'Networks: ' + data.networks :
                         operation.includes('calibration') ? 'Procedures: ' + formatNumber(data.procedures) : 'Volume'}
                      </div>
                      <div className="text-orange-400">
                        {operation.includes('experiments') ? 'Runtime: ' + data.averageRuntime + 'h' :
                         operation.includes('correction') ? 'Overhead: ' + data.overhead + 'x' :
                         operation.includes('networking') ? 'Distance: ' + data.distance + 'km' :
                         operation.includes('calibration') ? 'Duration: ' + data.duration + 'h' : 'Time'}
                      </div>
                      <div className="text-blue-400">
                        {operation.includes('experiments') ? 'Queue: ' + data.queueTime + 'h' :
                         operation.includes('correction') ? 'Latency: ' + data.latency + 'μs' :
                         operation.includes('networking') ? 'Fidelity: ' + formatPercentage(data.fidelity) :
                         operation.includes('calibration') ? 'Frequency: ' + data.frequency + '/day' : 'Metric'}
                      </div>
                    </div>
                    <div>
                      <div className="text-purple-400">Automation: {formatPercentage(data.automationLevel)}</div>
                      <div className="text-cyan-400">Digital: {formatPercentage(data.digitalIntegration)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quantum Performance & Sustainability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-blue-400 mr-2" />
              Quantum Performance Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{quantumData.quantumPerformance.coherenceTime.toFixed(1)}μs</div>
                <div className="text-blue-300 text-sm">Coherence Time</div>
                <div className="text-gray-400 text-xs mt-1">{formatPercentage(quantumData.quantumPerformance.gateErrorRate)} error</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatNumber(quantumData.quantumPerformance.quantumVolume)}</div>
                <div className="text-green-300 text-sm">Quantum Volume</div>
                <div className="text-gray-400 text-xs mt-1">{formatScientific(quantumData.quantumPerformance.quantumSpeedUp)}x speedup</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Performance Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Readout Fidelity</span>
                  <span className="text-green-400">{formatPercentage(quantumData.quantumPerformance.readoutFidelity)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Gate Fidelity</span>
                  <span className="text-blue-400">{formatPercentage(quantumData.quantumPerformance.gateFidelity)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cross Talk Error</span>
                  <span className="text-yellow-400">{formatPercentage(quantumData.quantumPerformance.crossTalkError)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Thermal Error</span>
                  <span className="text-orange-400">{formatPercentage(quantumData.quantumPerformance.thermalError)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Dephasing</span>
                  <span className="text-purple-400">{quantumData.quantumPerformance.dephasing.toFixed(1)}μs</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">System Uptime</span>
                  <span className="text-cyan-400">{formatPercentage(quantumData.quantumPerformance.systemUptime)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatPercentage(quantumData.quantumPerformance.quantumEfficiency)}</div>
                <div className="text-slate-300">Quantum Efficiency</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-indigo-400">{formatPercentage(quantumData.quantumPerformance.calibrationStability)}</div>
                <div className="text-slate-300">Calibration Stability</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Quantum Sustainability Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(quantumData.sustainabilityMetrics.energyEfficiency)}</div>
                <div className="text-green-300 text-sm">Energy Efficiency</div>
                <div className="text-gray-400 text-xs mt-1">improvement rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(quantumData.sustainabilityMetrics.greenEnergy)}</div>
                <div className="text-blue-300 text-sm">Green Energy</div>
                <div className="text-gray-400 text-xs mt-1">renewable sources</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Environmental Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cooling Efficiency</span>
                  <span className="text-green-400">{formatPercentage(quantumData.sustainabilityMetrics.coolingEfficiency)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Carbon Reduction</span>
                  <span className="text-blue-400">{formatPercentage(quantumData.sustainabilityMetrics.carbonReduction)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sustainable Materials</span>
                  <span className="text-purple-400">{formatPercentage(quantumData.sustainabilityMetrics.sustainableMaterials)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Recycling Rate</span>
                  <span className="text-cyan-400">{formatPercentage(quantumData.sustainabilityMetrics.recyclingRate)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Waste Reduction</span>
                  <span className="text-emerald-400">{formatPercentage(quantumData.sustainabilityMetrics.wasteReduction)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Circular Design</span>
                  <span className="text-indigo-400">{formatPercentage(quantumData.sustainabilityMetrics.circularDesign)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatPercentage(quantumData.sustainabilityMetrics.carbonNeutral)}</div>
                <div className="text-slate-300">Carbon Neutral Ops</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatCurrency(quantumData.sustainabilityMetrics.sustainabilityInvestment)}</div>
                <div className="text-slate-300">Green Investment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Applications & Innovation Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-orange-400 mr-2" />
              Quantum Applications Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(quantumData.quantumApplications).map(([application, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded text-sm ${getApplicationColor(application)}`}>
                        {application.charAt(0).toUpperCase() + application.slice(1)}
                      </span>
                      <span className="text-green-400 text-sm">{formatPercentage(data.commercialReadiness)} ready</span>
                    </div>
                    <span className="text-blue-400 text-sm">{formatNumber(data.algorithms)} algorithms</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">
                        {application.includes('cryptography') ? 'Security: ' + formatPercentage(data.securityLevel) :
                         application.includes('optimization') ? 'Problem Size: ' + formatNumber(data.problemSize) :
                         application.includes('simulation') ? 'System Size: ' + formatNumber(data.systemSize) :
                         application.includes('machineLearning') ? 'Feature Space: ' + formatNumber(data.featureSpace) : 'Metric'}
                      </div>
                      <div className="text-purple-400">
                        {application.includes('cryptography') ? 'Key Gen: ' + formatPercentage(data.keyGeneration) :
                         'Accuracy: ' + formatPercentage(data.accuracy)}
                      </div>
                    </div>
                    <div>
                      <div className="text-green-400">
                        Advantage: {formatScientific(data.quantumAdvantage)}x
                      </div>
                      <div className="text-orange-400">
                        {application.includes('cryptography') ? 'Deploy Rate: ' + formatPercentage(data.deploymentRate) :
                         application.includes('optimization') ? 'Quality: ' + formatPercentage(data.solutionQuality) :
                         application.includes('simulation') ? 'Speed Up: ' + formatScientific(data.speedUp) + 'x' :
                         application.includes('machineLearning') ? 'Training: ' + formatScientific(data.trainingSpeed) + 'x' : 'Performance'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Atom className="w-5 h-5 text-cyan-400 mr-2" />
              Quantum Innovation Trends Intelligence
            </h3>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Technology Adoption</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Quantum Simulation</span>
                  <span className="text-green-400">{formatPercentage(quantumData.innovationTrends.quantumSimulation)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Quantum Cloud</span>
                  <span className="text-blue-400">{formatPercentage(quantumData.innovationTrends.quantumCloud)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Hybrid Algorithms</span>
                  <span className="text-purple-400">{formatPercentage(quantumData.innovationTrends.hybridAlgorithms)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Quantum Supremacy</span>
                  <span className="text-cyan-400">{formatPercentage(quantumData.innovationTrends.quantumSupremacy)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Quantum Cryptography</span>
                  <span className="text-emerald-400">{formatPercentage(quantumData.innovationTrends.quantumCryptography)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Error Correction</span>
                  <span className="text-pink-400">{formatPercentage(quantumData.innovationTrends.errorCorrection)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Quantum Annealing</span>
                  <span className="text-orange-400">{formatPercentage(quantumData.innovationTrends.quantumAnnealing)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Quantum Sensors</span>
                  <span className="text-indigo-400">{formatPercentage(quantumData.innovationTrends.quantumSensors)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Quantum Networking</span>
                  <span className="text-lime-400">{formatPercentage(quantumData.innovationTrends.quantumNetworking)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Quantum ML</span>
                  <span className="text-violet-400">{formatPercentage(quantumData.innovationTrends.quantumMachineLearning)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Quantum Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {quantumData.quantumAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                  <div>
                    <div className="text-slate-300">Location: {alert.location}</div>
                    <div className="text-slate-300">Action: {alert.actionRequired ? 'Required' : 'Monitoring'}</div>
                  </div>
                  <div>
                    <div className={`${getImpactColor(alert.impact).split(' ')[0]} text-xs`}>
                      Impact: {alert.impact}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {alert.recommendations.map((rec, recIndex) => (
                    <span key={recIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}