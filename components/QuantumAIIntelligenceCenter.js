// Quantum AI Intelligence Center - Quantum Machine Learning & Quantum Computing Analytics
import { useState, useEffect } from 'react';
import { Atom, Zap, Brain, Cpu, Target, Activity, BarChart3, Settings, Lock, Shield, Eye, AlertTriangle } from 'lucide-react';

export default function QuantumAIIntelligenceCenter() {
  const [quantumData, setQuantumData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    quantumOverview: {
      totalQubits: 127,
      logicalQubits: 23,
      quantumVolume: 32768,
      fidelity: 99.7,
      coherenceTime: 150.4,
      gateErrors: 0.003,
      readoutErrors: 0.015,
      quantumAdvantage: 78.4,
      quantumSupremacy: 92.1,
      activeJobs: 45,
      quantumCircuits: 234,
      quantumAlgorithms: 67,
      errorCorrection: 94.8,
      entanglement: 96.3,
      quantumEntropy: 12.7,
      quantumCoherence: 87.9
    },
    quantumSystems: [
      {
        systemName: 'Q-Supremacy Alpha',
        systemType: 'Superconducting',
        provider: 'IBM Quantum',
        qubits: 127,
        connectivity: 'Heavy-Hex',
        status: 'OPERATIONAL',
        uptime: 99.8,
        quantumVolume: 32768,
        fidelity: 99.7,
        coherenceTime: 150.4,
        errorRate: 0.003,
        calibrationDate: '2026-03-18 09:00:00',
        location: 'IBM Quantum Network',
        accessType: 'Premium',
        usageHours: 23.4,
        jobsExecuted: 2847,
        queueLength: 12,
        estimatedWaitTime: '4 minutes',
        temperatureK: 0.015,
        operatingFrequency: '5.2 GHz'
      },
      {
        systemName: 'Q-ML Phoenix',
        systemType: 'Trapped Ion',
        provider: 'IonQ',
        qubits: 32,
        connectivity: 'All-to-All',
        status: 'MAINTENANCE',
        uptime: 97.3,
        quantumVolume: 4096,
        fidelity: 98.9,
        coherenceTime: 89.2,
        errorRate: 0.011,
        calibrationDate: '2026-03-17 14:30:00',
        location: 'IonQ Cloud',
        accessType: 'Standard',
        usageHours: 18.7,
        jobsExecuted: 1923,
        queueLength: 0,
        estimatedWaitTime: '2 hours (maintenance)',
        ionSpecies: 'Ytterbium-171',
        laserWavelength: '369.5 nm'
      },
      {
        systemName: 'Q-Advantage Beta',
        systemType: 'Photonic',
        provider: 'Xanadu',
        qubits: 216,
        connectivity: 'Photonic Graph',
        status: 'OPERATIONAL',
        uptime: 98.4,
        quantumVolume: 8192,
        fidelity: 97.8,
        coherenceTime: 45.6,
        errorRate: 0.022,
        calibrationDate: '2026-03-18 06:15:00',
        location: 'Xanadu Cloud',
        accessType: 'Research',
        usageHours: 31.2,
        jobsExecuted: 3456,
        queueLength: 8,
        estimatedWaitTime: '7 minutes',
        photonicMode: 'Squeezed Light',
        detectionEfficiency: '92.3%'
      },
      {
        systemName: 'Q-Neural Gamma',
        systemType: 'Neutral Atom',
        provider: 'QuEra',
        qubits: 256,
        connectivity: 'Programmable',
        status: 'CALIBRATING',
        uptime: 95.1,
        quantumVolume: 16384,
        fidelity: 96.4,
        coherenceTime: 67.8,
        errorRate: 0.036,
        calibrationDate: '2026-03-18 10:45:00',
        location: 'AWS Braket',
        accessType: 'Experimental',
        usageHours: 12.9,
        jobsExecuted: 876,
        queueLength: 3,
        estimatedWaitTime: '15 minutes (calibration)',
        atomSpecies: 'Rubidium-87',
        trapDepth: '1.2 mK'
      },
      {
        systemName: 'Q-Optimizer Delta',
        systemType: 'Annealer',
        provider: 'D-Wave',
        qubits: 5000,
        connectivity: 'Chimera Graph',
        status: 'OPERATIONAL',
        uptime: 99.2,
        quantumVolume: 1024,
        fidelity: 94.7,
        coherenceTime: 120.3,
        errorRate: 0.053,
        calibrationDate: '2026-03-17 20:00:00',
        location: 'D-Wave Cloud',
        accessType: 'Optimization',
        usageHours: 45.7,
        jobsExecuted: 5234,
        queueLength: 23,
        estimatedWaitTime: '2 minutes',
        annealingTime: '20 μs',
        programmingThermalization: '1 ms'
      }
    ],
    quantumAlgorithms: [
      {
        algorithmName: 'Quantum Neural Network',
        category: 'Machine Learning',
        complexity: 'O(log²N)',
        advantageType: 'Exponential',
        quantumSpeedup: 1024,
        applicationDomain: 'Pattern Recognition',
        status: 'PRODUCTION',
        accuracyImprovement: 34.7,
        trainingTime: '12 minutes',
        classicalTime: '8.4 hours',
        quantumCircuitDepth: 45,
        requiredQubits: 24,
        fidelityRequirement: 99.0,
        errorTolerance: 0.01,
        successRate: 94.3,
        resultsQuality: 'EXCELLENT',
        businessImpact: 'Drug discovery acceleration'
      },
      {
        algorithmName: 'Variational Quantum Eigensolver',
        category: 'Optimization',
        complexity: 'O(N⁴)',
        advantageType: 'Polynomial',
        quantumSpeedup: 256,
        applicationDomain: 'Material Science',
        status: 'EXPERIMENTAL',
        accuracyImprovement: 28.3,
        trainingTime: '45 minutes',
        classicalTime: '12.7 days',
        quantumCircuitDepth: 78,
        requiredQubits: 32,
        fidelityRequirement: 98.5,
        errorTolerance: 0.015,
        successRate: 87.9,
        resultsQuality: 'GOOD',
        businessImpact: 'Battery technology optimization'
      },
      {
        algorithmName: 'Quantum Approximate Optimization',
        category: 'Combinatorial',
        complexity: 'O(2^(N/2))',
        advantageType: 'Exponential',
        quantumSpeedup: 4096,
        applicationDomain: 'Logistics',
        status: 'PRODUCTION',
        accuracyImprovement: 45.2,
        trainingTime: '8 minutes',
        classicalTime: '3.2 weeks',
        quantumCircuitDepth: 32,
        requiredQubits: 20,
        fidelityRequirement: 97.5,
        errorTolerance: 0.025,
        successRate: 91.8,
        resultsQuality: 'EXCELLENT',
        businessImpact: 'Supply chain optimization'
      },
      {
        algorithmName: 'Quantum Support Vector Machine',
        category: 'Machine Learning',
        complexity: 'O(log N)',
        advantageType: 'Exponential',
        quantumSpeedup: 512,
        applicationDomain: 'Financial Modeling',
        status: 'TESTING',
        accuracyImprovement: 22.7,
        trainingTime: '18 minutes',
        classicalTime: '4.8 hours',
        quantumCircuitDepth: 56,
        requiredQubits: 28,
        fidelityRequirement: 98.8,
        errorTolerance: 0.012,
        successRate: 85.4,
        resultsQuality: 'GOOD',
        businessImpact: 'Risk assessment enhancement'
      },
      {
        algorithmName: 'Quantum Reinforcement Learning',
        category: 'AI/ML',
        complexity: 'O(polylog N)',
        advantageType: 'Exponential',
        quantumSpeedup: 2048,
        applicationDomain: 'Game Theory',
        status: 'RESEARCH',
        accuracyImprovement: 67.4,
        trainingTime: '35 minutes',
        classicalTime: '2.1 weeks',
        quantumCircuitDepth: 89,
        requiredQubits: 36,
        fidelityRequirement: 99.2,
        errorTolerance: 0.008,
        successRate: 78.6,
        resultsQuality: 'PROMISING',
        businessImpact: 'Strategic decision optimization'
      }
    ],
    quantumJobs: [
      {
        jobId: 'QML-2026-031801',
        jobName: 'Neural Network Training',
        algorithm: 'Quantum Neural Network',
        system: 'Q-Supremacy Alpha',
        status: 'RUNNING',
        progress: 67.3,
        submittedBy: 'Dr. Alice Chen',
        department: 'AI Research',
        priority: 'HIGH',
        qubitsUsed: 24,
        circuitDepth: 45,
        shots: 8192,
        estimatedRuntime: '15 minutes',
        elapsedTime: '10:12',
        remainingTime: '4:48',
        currentFidelity: 99.4,
        errorRate: 0.006,
        costEstimate: '$127.50',
        resultsPreview: 'Accuracy: 94.3%, Loss: 0.067',
        businessValue: 'Drug discovery pipeline acceleration'
      },
      {
        jobId: 'QAOA-2026-031802',
        jobName: 'Supply Chain Optimization',
        algorithm: 'Quantum Approximate Optimization',
        system: 'Q-Advantage Beta',
        status: 'QUEUED',
        progress: 0,
        submittedBy: 'Prof. Bob Kumar',
        department: 'Operations Research',
        priority: 'MEDIUM',
        qubitsUsed: 20,
        circuitDepth: 32,
        shots: 4096,
        estimatedRuntime: '8 minutes',
        queuePosition: 3,
        estimatedStart: '11:32 AM',
        costEstimate: '$89.20',
        businessValue: '15% logistics cost reduction expected'
      },
      {
        jobId: 'VQE-2026-031803',
        jobName: 'Battery Material Discovery',
        algorithm: 'Variational Quantum Eigensolver',
        system: 'Q-ML Phoenix',
        status: 'COMPLETED',
        progress: 100,
        submittedBy: 'Dr. Carol Zhang',
        department: 'Materials Science',
        priority: 'HIGH',
        qubitsUsed: 32,
        circuitDepth: 78,
        shots: 16384,
        actualRuntime: '43:27',
        completionTime: '10:47 AM',
        finalFidelity: 98.7,
        finalError: 0.013,
        actualCost: '$234.70',
        resultsQuality: 'EXCELLENT',
        keyFindings: 'New lithium compound identified, 23% capacity improvement',
        businessValue: 'Potential $50M market opportunity'
      },
      {
        jobId: 'QSVM-2026-031804',
        jobName: 'Risk Model Calibration',
        algorithm: 'Quantum Support Vector Machine',
        system: 'Q-Optimizer Delta',
        status: 'FAILED',
        progress: 45.7,
        submittedBy: 'Dr. David Kim',
        department: 'Quantitative Finance',
        priority: 'LOW',
        qubitsUsed: 28,
        circuitDepth: 56,
        shots: 2048,
        failureTime: '09:23 AM',
        errorType: 'DECOHERENCE',
        errorMessage: 'Quantum state lost due to environmental noise',
        retryScheduled: '11:45 AM',
        costCharged: '$0.00',
        mitigation: 'Increased error correction, reduced circuit depth'
      },
      {
        jobId: 'QRL-2026-031805',
        jobName: 'Strategy Game AI',
        algorithm: 'Quantum Reinforcement Learning',
        system: 'Q-Neural Gamma',
        status: 'CALIBRATING',
        progress: 0,
        submittedBy: 'Prof. Eve Rodriguez',
        department: 'Game Theory Lab',
        priority: 'EXPERIMENTAL',
        qubitsUsed: 36,
        circuitDepth: 89,
        shots: 32768,
        calibrationETA: '11:40 AM',
        systemCalibration: 'Required for >85% fidelity',
        costEstimate: '$456.80',
        researchGoal: 'Nash equilibrium computation acceleration'
      }
    ],
    errorCorrection: [
      {
        correctionScheme: 'Surface Code',
        logicalQubits: 23,
        physicalQubits: 1127,
        overheadRatio: 49.0,
        errorThreshold: 0.01,
        currentError: 0.003,
        correctionRate: 99.97,
        decodingTime: 0.5,
        stabilityMetric: 'EXCELLENT',
        implementationStatus: 'PRODUCTION',
        quantumMemoryTime: '10 seconds',
        faultTolerantOperations: ['CNOT', 'T-gate', 'Measurement'],
        magicStateDistillation: 'Level 3',
        logicalErrorRate: 1.2e-9
      },
      {
        correctionScheme: 'Color Code',
        logicalQubits: 8,
        physicalQubits: 384,
        overheadRatio: 48.0,
        errorThreshold: 0.011,
        currentError: 0.006,
        correctionRate: 99.45,
        decodingTime: 1.2,
        stabilityMetric: 'GOOD',
        implementationStatus: 'EXPERIMENTAL',
        quantumMemoryTime: '3.2 seconds',
        faultTolerantOperations: ['Clifford Gates', 'T-gate'],
        magicStateDistillation: 'Level 2',
        logicalErrorRate: 3.8e-7
      },
      {
        correctionScheme: 'Repetition Code',
        logicalQubits: 45,
        physicalQubits: 135,
        overheadRatio: 3.0,
        errorThreshold: 0.5,
        currentError: 0.022,
        correctionRate: 95.6,
        decodingTime: 0.1,
        stabilityMetric: 'BASIC',
        implementationStatus: 'LEGACY',
        quantumMemoryTime: '0.8 seconds',
        faultTolerantOperations: ['Bit-flip correction'],
        magicStateDistillation: 'None',
        logicalErrorRate: 2.2e-3
      }
    ],
    quantumPerformance: [
      {
        metric: 'Quantum Volume',
        currentValue: 32768,
        target: 1000000,
        progress: 3.3,
        trend: 'INCREASING',
        improvement: '+127% YoY',
        benchmark: 'Industry leading',
        nextMilestone: '65536 by Q2 2026'
      },
      {
        metric: 'Gate Fidelity',
        currentValue: 99.7,
        target: 99.9,
        progress: 97.0,
        trend: 'IMPROVING',
        improvement: '+0.3% QoQ',
        benchmark: 'Top 5% globally',
        nextMilestone: '99.8% by Q3 2026'
      },
      {
        metric: 'Coherence Time',
        currentValue: 150.4,
        target: 1000,
        progress: 15.0,
        trend: 'STABLE',
        improvement: '+12.4% YoY',
        benchmark: 'Above average',
        nextMilestone: '250μs by Q4 2026'
      },
      {
        metric: 'Error Correction',
        currentValue: 94.8,
        target: 99.99,
        progress: 94.8,
        trend: 'IMPROVING',
        improvement: '+4.2% YoY',
        benchmark: 'Research grade',
        nextMilestone: '98% by Q2 2027'
      }
    ],
    quantumApplications: [
      {
        application: 'Drug Discovery',
        quantumAdvantage: 'Exponential',
        timeReduction: 89.3,
        accuracyGain: 34.7,
        costSavings: 45600000,
        status: 'PRODUCTION',
        algorithms: ['QML', 'VQE', 'QAOA'],
        businessImpact: 'HIGH',
        adoptionRate: 78.4,
        roi: 340,
        marketSize: '$2.1B',
        keyMetrics: '12 new compounds identified, 3 in clinical trials'
      },
      {
        application: 'Financial Risk Modeling',
        quantumAdvantage: 'Polynomial',
        timeReduction: 67.8,
        accuracyGain: 22.7,
        costSavings: 12300000,
        status: 'PILOT',
        algorithms: ['QSVM', 'QNN', 'VQE'],
        businessImpact: 'MEDIUM',
        adoptionRate: 45.2,
        roi: 185,
        marketSize: '$890M',
        keyMetrics: 'VaR accuracy +23%, stress test runtime -68%'
      },
      {
        application: 'Supply Chain Optimization',
        quantumAdvantage: 'Exponential',
        timeReduction: 94.2,
        accuracyGain: 45.2,
        costSavings: 23800000,
        status: 'PRODUCTION',
        algorithms: ['QAOA', 'QA', 'QSVM'],
        businessImpact: 'HIGH',
        adoptionRate: 67.9,
        roi: 267,
        marketSize: '$1.4B',
        keyMetrics: '15% logistics cost reduction, 23% delivery time improvement'
      },
      {
        application: 'Cryptography',
        quantumAdvantage: 'Exponential',
        timeReduction: 99.8,
        accuracyGain: 100.0,
        costSavings: 5600000,
        status: 'RESEARCH',
        algorithms: ['Shor', 'Grover', 'QKD'],
        businessImpact: 'CRITICAL',
        adoptionRate: 12.3,
        roi: 'TBD',
        marketSize: '$3.8B',
        keyMetrics: 'RSA-2048 factorization capability, quantum-safe protocols'
      }
    ],
    quantumAlerts: [
      {
        type: 'CRITICAL',
        category: 'System Error',
        message: 'Q-ML Phoenix experiencing decoherence spike - immediate recalibration required',
        system: 'Q-ML Phoenix (Trapped Ion)',
        error: 'Coherence time dropped from 89.2μs to 23.4μs over last 15 minutes',
        impact: 'All queued jobs suspended, 6 experiments affected, estimated 2-hour recovery',
        severity: 'CRITICAL',
        timestamp: '11:23',
        detectedBy: 'Quantum Error Monitor',
        recommendation: 'Emergency laser recalibration, ion chain reinitialization, environmental isolation check',
        affectedJobs: ['VQE-2026-031803', 'QSVM-2026-031804', 'QNN-2026-031806'],
        estimatedDowntime: '120 minutes',
        escalation: 'QUANTUM_ENGINEERING',
        rootCause: 'Suspected magnetic field fluctuation',
        mitigationPlan: 'Activate backup system Q-Advantage Beta for critical jobs'
      },
      {
        type: 'HIGH',
        category: 'Resource Limit',
        message: 'Q-Supremacy Alpha approaching daily qubit-hour limit - jobs may be throttled',
        system: 'Q-Supremacy Alpha (IBM Quantum)',
        warning: 'Used 87.3% of daily 127-qubit allocation (23.4/26.8 hours)',
        impact: 'New job submissions may be delayed until tomorrow, priority queue activated',
        severity: 'HIGH',
        timestamp: '11:18',
        detectedBy: 'Resource Monitor',
        recommendation: 'Migrate non-urgent jobs to alternative systems, review priority assignments',
        remainingCapacity: '3.4 qubit-hours',
        queueLength: 12,
        escalation: 'RESOURCE_MANAGEMENT',
        alternativeSystems: ['Q-Advantage Beta', 'Q-Optimizer Delta'],
        costImplication: '+15% if using premium backup systems'
      },
      {
        type: 'MEDIUM',
        category: 'Performance Drift',
        message: 'Q-Neural Gamma showing gradual fidelity degradation - calibration recommended',
        system: 'Q-Neural Gamma (Neutral Atom)',
        drift: 'Gate fidelity decreased from 97.2% to 96.4% over 48 hours',
        impact: 'Algorithm success rates affected, research jobs showing reduced accuracy',
        severity: 'MEDIUM',
        timestamp: '11:12',
        detectedBy: 'Performance Monitor',
        recommendation: 'Schedule maintenance window, update atom trap parameters, verify laser stability',
        affectedAlgorithms: 'QRL algorithms showing 12% reduced convergence',
        trendAnalysis: 'Consistent 0.2% daily degradation pattern',
        escalation: 'QUANTUM_OPERATIONS',
        maintenanceWindow: 'Available 2:00-4:00 AM UTC',
        preventiveMaintenance: 'Due in 72 hours regardless'
      },
      {
        type: 'INFO',
        category: 'Achievement',
        message: 'Quantum Volume milestone achieved - Q-Supremacy Alpha now certified at QV-32768',
        system: 'Q-Supremacy Alpha (IBM Quantum)',
        achievement: 'Quantum Volume increased from QV-16384 to QV-32768 following upgrade',
        impact: 'Expanded algorithm capability, 2x problem complexity capacity, industry leadership',
        validation: 'IBM Quantum certification completed',
        timestamp: '11:05',
        detectedBy: 'Performance Benchmark',
        businessValue: 'Quantum supremacy demonstration capability, competitive advantage established',
        newCapabilities: ['Larger optimization problems', 'Deeper quantum circuits', 'More complex ML models'],
        marketPosition: 'Top 3 globally in quantum volume metrics',
        nextTarget: 'QV-65536 by Q2 2026',
        certificationValid: '12 months'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        jobsSubmitted: 12,
        jobsCompleted: 8,
        successRate: 83.3,
        totalQubitHours: 4.7,
        averageFidelity: 98.6,
        errorEvents: 3,
        calibrations: 1,
        quantumAdvantageAchieved: 7
      },
      {
        period: 'Last 24 Hours',
        jobsSubmitted: 234,
        jobsCompleted: 198,
        successRate: 84.6,
        totalQubitHours: 67.8,
        averageFidelity: 98.3,
        errorEvents: 45,
        calibrations: 6,
        quantumAdvantageAchieved: 89
      },
      {
        period: 'Last 7 Days',
        jobsSubmitted: 1567,
        jobsCompleted: 1289,
        successRate: 82.2,
        totalQubitHours: 456.3,
        averageFidelity: 97.9,
        errorEvents: 234,
        calibrations: 28,
        quantumAdvantageAchieved: 567
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        quantumOverview: {
          ...prev.quantumOverview,
          fidelity: Math.max(97.0, Math.min(99.9, prev.quantumOverview.fidelity + (Math.random() - 0.5) * 0.1)),
          coherenceTime: Math.max(100.0, Math.min(200.0, prev.quantumOverview.coherenceTime + (Math.random() - 0.5) * 5.0)),
          quantumVolume: Math.max(16384, Math.min(65536, prev.quantumOverview.quantumVolume + Math.floor((Math.random() - 0.3) * 100))),
          activeJobs: Math.max(30, Math.min(60, prev.quantumOverview.activeJobs + Math.floor((Math.random() - 0.5) * 5)))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'RUNNING': return 'text-blue-400 bg-blue-400/20';
      case 'COMPLETED': return 'text-green-400 bg-green-400/20';
      case 'PRODUCTION': return 'text-green-400 bg-green-400/20';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20';
      case 'CALIBRATING': return 'text-orange-400 bg-orange-400/20';
      case 'QUEUED': return 'text-blue-400 bg-blue-400/20';
      case 'TESTING': return 'text-purple-400 bg-purple-400/20';
      case 'EXPERIMENTAL': return 'text-cyan-400 bg-cyan-400/20';
      case 'RESEARCH': return 'text-indigo-400 bg-indigo-400/20';
      case 'FAILED': return 'text-red-400 bg-red-400/20';
      case 'PILOT': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'MEDIUM': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getAdvantageColor = (advantage) => {
    switch (advantage) {
      case 'Exponential': return 'text-green-400';
      case 'Polynomial': return 'text-yellow-400';
      case 'Linear': return 'text-orange-400';
      default: return 'text-slate-400';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'INCREASING': return 'text-green-400';
      case 'IMPROVING': return 'text-green-400';
      case 'STABLE': return 'text-yellow-400';
      case 'DECREASING': return 'text-orange-400';
      case 'DECLINING': return 'text-red-400';
      default: return 'text-slate-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount) => `$${amount.toLocaleString()}`;
  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl">
              <Atom className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Quantum AI Intelligence Center</h1>
              <p className="text-purple-300">Quantum machine learning & quantum computing analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{quantumData.currentTime}</div>
            <div className="text-purple-300">Quantum Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Quantum Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Atom className="w-5 h-5 text-purple-400 mr-2" />
                Qubits
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{quantumData.quantumOverview.logicalQubits}</div>
            <div className="text-purple-300 text-sm">{quantumData.quantumOverview.totalQubits} Physical</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Fidelity
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(quantumData.quantumOverview.fidelity)}</div>
            <div className="text-green-300 text-sm">Gate Accuracy</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-cyan-400 mr-2" />
                QV
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(quantumData.quantumOverview.quantumVolume)}</div>
            <div className="text-cyan-300 text-sm">Quantum Volume</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Coherence
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{quantumData.quantumOverview.coherenceTime.toFixed(1)}</div>
            <div className="text-yellow-300 text-sm">μs Time</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-blue-400 mr-2" />
                Error Correction
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(quantumData.quantumOverview.errorCorrection)}</div>
            <div className="text-blue-300 text-sm">Success Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-pink-400 mr-2" />
                Active Jobs
              </h3>
            </div>
            <div className="text-3xl font-bold text-pink-400">{quantumData.quantumOverview.activeJobs}</div>
            <div className="text-pink-300 text-sm">Running</div>
          </div>
        </div>

        {/* Quantum Systems & Algorithms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cpu className="w-5 h-5 text-purple-400 mr-2" />
              Quantum Computing Systems
            </h3>
            <div className="space-y-4">
              {quantumData.quantumSystems.map((system, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{system.systemName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(system.status)}`}>
                        {system.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">{system.systemType}</div>
                    <div className="text-cyan-400">{system.qubits} qubits</div>
                    <div className="text-blue-400">{system.provider}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">QV: {formatNumber(system.quantumVolume)}</div>
                    <div className="text-yellow-400">Fidelity: {formatPercentage(system.fidelity)}</div>
                    <div className="text-orange-400">Coherence: {system.coherenceTime.toFixed(1)}μs</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-indigo-400">Jobs: {system.jobsExecuted}</div>
                    <div className="text-pink-400">Queue: {system.queueLength}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              Quantum Algorithms Portfolio
            </h3>
            <div className="space-y-4">
              {quantumData.quantumAlgorithms.map((algorithm, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{algorithm.algorithmName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(algorithm.status)}`}>
                        {algorithm.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">{algorithm.category}</div>
                    <div className={`${getAdvantageColor(algorithm.advantageType)}`}>
                      {algorithm.advantageType}
                    </div>
                    <div className="text-blue-400">{algorithm.requiredQubits} qubits</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Speedup: {formatNumber(algorithm.quantumSpeedup)}x</div>
                    <div className="text-yellow-400">Accuracy: +{formatPercentage(algorithm.accuracyImprovement)}</div>
                    <div className="text-orange-400">Success: {formatPercentage(algorithm.successRate)}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Domain: {algorithm.applicationDomain}</div>
                    <div className="text-cyan-400">Impact: {algorithm.businessImpact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quantum Jobs & Error Correction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-green-400 mr-2" />
              Active Quantum Jobs
            </h3>
            <div className="space-y-4">
              {quantumData.quantumJobs.map((job, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{job.jobName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(job.status)}`}>
                        {job.status}
                      </span>
                      {job.priority && (
                        <span className={`px-2 py-1 rounded text-xs ${job.priority === 'HIGH' ? 'text-red-400 bg-red-400/20' : job.priority === 'MEDIUM' ? 'text-yellow-400 bg-yellow-400/20' : 'text-green-400 bg-green-400/20'}`}>
                          {job.priority}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">ID: {job.jobId}</div>
                    <div className="text-cyan-400">{job.qubitsUsed} qubits</div>
                    <div className="text-blue-400">Depth: {job.circuitDepth}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-green-400">By: {job.submittedBy}</div>
                    <div className="text-yellow-400">Cost: {job.costEstimate}</div>
                  </div>
                  
                  {job.progress > 0 && (
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Progress</span>
                        <span>{formatPercentage(job.progress)}</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-1">
                        <div 
                          className="bg-green-400 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${job.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">{job.algorithm} on {job.system}</div>
                    {job.businessValue && (
                      <div className="text-indigo-400">Value: {job.businessValue}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              Quantum Error Correction
            </h3>
            <div className="space-y-4">
              {quantumData.errorCorrection.map((scheme, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{scheme.correctionScheme}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(scheme.implementationStatus)}`}>
                        {scheme.implementationStatus}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Logical: {scheme.logicalQubits}</div>
                    <div className="text-cyan-400">Physical: {scheme.physicalQubits}</div>
                    <div className="text-orange-400">Overhead: {scheme.overheadRatio.toFixed(1)}x</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${scheme.currentError <= scheme.errorThreshold ? 'text-green-400' : 'text-red-400'}`}>
                      Error: {(scheme.currentError * 100).toFixed(3)}%
                    </div>
                    <div className="text-blue-400">Threshold: {(scheme.errorThreshold * 100).toFixed(1)}%</div>
                    <div className="text-yellow-400">Rate: {formatPercentage(scheme.correctionRate)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-indigo-400">Memory: {scheme.quantumMemoryTime}</div>
                    <div className="text-pink-400">
                      Stability: {scheme.stabilityMetric}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quantum Applications */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 text-green-400 mr-2" />
            Quantum AI Applications
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {quantumData.quantumApplications.map((app, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{app.application}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${app.businessImpact === 'HIGH' ? 'text-green-400 bg-green-400/20' : app.businessImpact === 'MEDIUM' ? 'text-yellow-400 bg-yellow-400/20' : 'text-red-400 bg-red-400/20'}`}>
                      {app.businessImpact}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                  <div className={`${getAdvantageColor(app.quantumAdvantage)}`}>
                    {app.quantumAdvantage}
                  </div>
                  <div className="text-blue-400">Time: -{formatPercentage(app.timeReduction)}</div>
                  <div className="text-green-400">Accuracy: +{formatPercentage(app.accuracyGain)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-green-400">Savings: {formatCurrency(app.costSavings)}</div>
                  <div className="text-purple-400">ROI: {app.roi}%</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-yellow-400">Adoption: {formatPercentage(app.adoptionRate)}</div>
                  <div className="text-cyan-400">Market: {app.marketSize}</div>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-slate-300">Algorithms: {app.algorithms.join(', ')}</div>
                  <div className="text-indigo-400">Metrics: {app.keyMetrics}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
            Quantum Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {quantumData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Submitted: {metrics.jobsSubmitted}</div>
                  <div className="text-green-400">Completed: {metrics.jobsCompleted}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Success: {formatPercentage(metrics.successRate)}</div>
                  <div className="text-yellow-400">Fidelity: {formatPercentage(metrics.averageFidelity)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Qubit-hrs: {metrics.totalQubitHours.toFixed(1)}</div>
                  <div className="text-red-400">Errors: {metrics.errorEvents}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-orange-400">Calibrations: {metrics.calibrations}</div>
                  <div className="text-indigo-400">QA Achieved: {metrics.quantumAdvantageAchieved}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quantum Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Quantum System Alerts
          </h3>
          <div className="space-y-4">
            {quantumData.quantumAlerts.map((alert, index) => (
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
                  {alert.system && <div className="text-slate-300">System: {alert.system}</div>}
                  {alert.error && <div className="text-red-400">Error: {alert.error}</div>}
                  {alert.warning && <div className="text-yellow-400">Warning: {alert.warning}</div>}
                  {alert.drift && <div className="text-orange-400">Drift: {alert.drift}</div>}
                  {alert.achievement && <div className="text-green-400">Achievement: {alert.achievement}</div>}
                  {alert.affectedJobs && <div className="text-purple-400">Jobs: {alert.affectedJobs.length} affected</div>}
                  {alert.estimatedDowntime && <div className="text-red-400">Downtime: {alert.estimatedDowntime}</div>}
                  {alert.businessValue && <div className="text-green-400">Value: {alert.businessValue}</div>}
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