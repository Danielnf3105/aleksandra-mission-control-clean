// Neural Interface Intelligence Center - Brain-Computer Interface & Neural Analytics
import { useState, useEffect } from 'react';
import { Brain, Zap, Activity, Cpu, Target, Eye, BarChart3, Settings, Lock, Shield, Waves, AlertTriangle } from 'lucide-react';

export default function NeuralInterfaceIntelligenceCenter() {
  const [neuralData, setNeuralData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    neuralOverview: {
      totalElectrodes: 1024,
      activeChannels: 896,
      signalQuality: 94.7,
      neuralDecoding: 91.3,
      thoughtAccuracy: 87.6,
      brainStates: 12,
      cognitiveLoad: 68.4,
      neuralLatency: 2.3,
      brainComputer: 89.2,
      neuralPlasticity: 76.8,
      activeSessions: 34,
      neuralPatterns: 567,
      adaptiveModels: 89,
      neuralSafety: 98.9,
      calibrationLevel: 92.4,
      neuralSynchrony: 85.7,
      brainwaveCoherence: 78.9
    },
    neuralSystems: [
      {
        systemName: 'NeuraLink N1 Array',
        interfaceType: 'Invasive BCI',
        manufacturer: 'Neuralink Corp',
        electrodes: 1024,
        channels: 'Full-bandwidth',
        status: 'OPERATIONAL',
        implantDate: '2026-02-15',
        batteryLevel: 87.3,
        signalQuality: 96.8,
        decodingAccuracy: 94.2,
        neuralLatency: 1.8,
        location: 'Motor Cortex',
        patientId: 'P001-Neural',
        sessionTime: '4.7 hours',
        dataRate: '200 Mbps',
        signalToNoise: 42.3,
        impedanceCheck: 'PASSED',
        biocompatibility: 'EXCELLENT',
        neuralAdaptation: 89.7
      },
      {
        systemName: 'Meta Neural Band Pro',
        interfaceType: 'Non-invasive EEG',
        manufacturer: 'Meta Reality Labs',
        electrodes: 64,
        channels: 'High-density',
        status: 'ACTIVE',
        setupDate: '2026-03-10',
        batteryLevel: 92.1,
        signalQuality: 89.4,
        decodingAccuracy: 78.6,
        neuralLatency: 12.4,
        location: 'Prefrontal Cortex',
        userId: 'U047-Meta',
        sessionTime: '2.3 hours',
        dataRate: '50 Mbps',
        signalToNoise: 28.7,
        impedanceCheck: 'GOOD',
        biocompatibility: 'SAFE',
        neuralAdaptation: 74.5
      },
      {
        systemName: 'Synchron Stentrode',
        interfaceType: 'Endovascular BCI',
        manufacturer: 'Synchron Inc',
        electrodes: 16,
        channels: 'Selective',
        status: 'CALIBRATING',
        implantDate: '2026-01-20',
        batteryLevel: 95.7,
        signalQuality: 91.2,
        decodingAccuracy: 86.4,
        neuralLatency: 3.2,
        location: 'Motor Cortex',
        patientId: 'P009-Sync',
        sessionTime: '1.8 hours',
        dataRate: '75 Mbps',
        signalToNoise: 35.4,
        impedanceCheck: 'CALIBRATING',
        biocompatibility: 'EXCELLENT',
        neuralAdaptation: 82.1
      },
      {
        systemName: 'Kernel Flow Headset',
        interfaceType: 'Non-invasive fNIRS',
        manufacturer: 'Kernel Inc',
        electrodes: 'Optical',
        channels: 'Hemodynamic',
        status: 'RESEARCH',
        setupDate: '2026-03-05',
        batteryLevel: 76.4,
        signalQuality: 82.7,
        decodingAccuracy: 71.3,
        neuralLatency: 150.0,
        location: 'Whole Brain',
        userId: 'R023-Kernel',
        sessionTime: '6.2 hours',
        dataRate: '25 Mbps',
        signalToNoise: 18.9,
        impedanceCheck: 'N/A',
        biocompatibility: 'NON-INVASIVE',
        neuralAdaptation: 67.8
      },
      {
        systemName: 'NextMind DevKit V3',
        interfaceType: 'Visual Cortex BCI',
        manufacturer: 'NextMind (Snap)',
        electrodes: 8,
        channels: 'Focused',
        status: 'EXPERIMENTAL',
        setupDate: '2026-02-28',
        batteryLevel: 83.9,
        signalQuality: 76.3,
        decodingAccuracy: 68.7,
        neuralLatency: 45.6,
        location: 'Visual Cortex',
        userId: 'E034-Next',
        sessionTime: '0.9 hours',
        dataRate: '15 Mbps',
        signalToNoise: 22.1,
        impedanceCheck: 'GOOD',
        biocompatibility: 'SAFE',
        neuralAdaptation: 59.4
      }
    ],
    neuralApplications: [
      {
        applicationName: 'Motor Intent Decoding',
        category: 'Motor Control',
        accuracy: 94.2,
        latency: 1.8,
        complexity: 'HIGH',
        status: 'PRODUCTION',
        users: 156,
        sessions: 2847,
        successRate: 91.3,
        adaptationTime: '12 minutes',
        calibrationRequired: 'Weekly',
        safetyRating: 'A+',
        clinicalApproval: 'FDA Approved',
        therapeuticBenefit: 'Paralysis restoration',
        businessImpact: 'Life-changing',
        costPerSession: '$125',
        revenueGenerated: '$356,875'
      },
      {
        applicationName: 'Speech Synthesis BCI',
        category: 'Communication',
        accuracy: 87.6,
        latency: 2.3,
        complexity: 'HIGH',
        status: 'CLINICAL_TRIAL',
        users: 89,
        sessions: 1923,
        successRate: 84.7,
        adaptationTime: '25 minutes',
        calibrationRequired: 'Daily',
        safetyRating: 'A',
        clinicalApproval: 'Phase III',
        therapeuticBenefit: 'Voice restoration',
        businessImpact: 'Transformative',
        costPerSession: '$200',
        revenueGenerated: '$384,600'
      },
      {
        applicationName: 'Cognitive State Monitor',
        category: 'Mental Health',
        accuracy: 78.4,
        latency: 12.4,
        complexity: 'MEDIUM',
        status: 'TESTING',
        users: 234,
        sessions: 4567,
        successRate: 76.8,
        adaptationTime: '8 minutes',
        calibrationRequired: 'As needed',
        safetyRating: 'B+',
        clinicalApproval: 'Research',
        therapeuticBenefit: 'Depression monitoring',
        businessImpact: 'Significant',
        costPerSession: '$75',
        revenueGenerated: '$342,525'
      },
      {
        applicationName: 'Memory Enhancement',
        category: 'Cognitive Augmentation',
        accuracy: 71.3,
        latency: 150.0,
        complexity: 'MEDIUM',
        status: 'RESEARCH',
        users: 67,
        sessions: 1234,
        successRate: 69.4,
        adaptationTime: '45 minutes',
        calibrationRequired: 'Continuous',
        safetyRating: 'B',
        clinicalApproval: 'Experimental',
        therapeuticBenefit: 'Cognitive enhancement',
        businessImpact: 'Promising',
        costPerSession: '$300',
        revenueGenerated: '$370,200'
      },
      {
        applicationName: 'Attention Control',
        category: 'Focus Training',
        accuracy: 68.7,
        latency: 45.6,
        complexity: 'LOW',
        status: 'PROTOTYPE',
        users: 145,
        sessions: 3456,
        successRate: 65.2,
        adaptationTime: '15 minutes',
        calibrationRequired: 'Weekly',
        safetyRating: 'B',
        clinicalApproval: 'Consumer',
        therapeuticBenefit: 'ADHD management',
        businessImpact: 'Growing',
        costPerSession: '$50',
        revenueGenerated: '$172,800'
      }
    ],
    brainwavePatterns: [
      {
        waveType: 'Delta (0.5-4 Hz)',
        frequency: 2.1,
        amplitude: 45.7,
        coherence: 82.4,
        location: 'Frontal',
        association: 'Deep Sleep',
        status: 'NORMAL',
        trend: 'STABLE',
        clinicalSignificance: 'Restorative processes',
        detectedPatterns: 67,
        anomalies: 2
      },
      {
        waveType: 'Theta (4-8 Hz)',
        frequency: 6.3,
        amplitude: 38.9,
        coherence: 76.8,
        location: 'Temporal',
        association: 'Memory Formation',
        status: 'ELEVATED',
        trend: 'INCREASING',
        clinicalSignificance: 'Enhanced learning state',
        detectedPatterns: 124,
        anomalies: 5
      },
      {
        waveType: 'Alpha (8-13 Hz)',
        frequency: 10.2,
        amplitude: 52.3,
        coherence: 89.1,
        location: 'Occipital',
        association: 'Relaxed Focus',
        status: 'OPTIMAL',
        trend: 'STABLE',
        clinicalSignificance: 'Ideal for BCI control',
        detectedPatterns: 234,
        anomalies: 1
      },
      {
        waveType: 'Beta (13-30 Hz)',
        frequency: 18.7,
        amplitude: 29.4,
        coherence: 71.5,
        location: 'Central',
        association: 'Active Thinking',
        status: 'HIGH',
        trend: 'FLUCTUATING',
        clinicalSignificance: 'Cognitive engagement',
        detectedPatterns: 189,
        anomalies: 12
      },
      {
        waveType: 'Gamma (30-100 Hz)',
        frequency: 42.8,
        amplitude: 15.6,
        coherence: 64.3,
        location: 'Parietal',
        association: 'Consciousness',
        status: 'MODERATE',
        trend: 'IMPROVING',
        clinicalSignificance: 'Neural binding',
        detectedPatterns: 78,
        anomalies: 8
      }
    ],
    neuralSafety: [
      {
        safetyCategory: 'Biocompatibility',
        riskLevel: 'LOW',
        score: 98.9,
        lastAssessment: '2026-03-15',
        findings: 'No inflammatory response detected',
        monitoring: 'Daily',
        compliance: 'ISO 10993',
        incidents: 0,
        mitigations: ['Titanium electrodes', 'Biocompatible coatings', 'Regular MRI scans'],
        nextReview: '2026-04-15'
      },
      {
        safetyCategory: 'Signal Safety',
        riskLevel: 'VERY_LOW',
        score: 99.7,
        lastAssessment: '2026-03-17',
        findings: 'All stimulation within safe parameters',
        monitoring: 'Continuous',
        compliance: 'FDA 21 CFR 882',
        incidents: 0,
        mitigations: ['Current limiting', 'Charge balancing', 'Automatic shutoff'],
        nextReview: '2026-04-17'
      },
      {
        safetyCategory: 'Infection Control',
        riskLevel: 'MEDIUM',
        score: 95.2,
        lastAssessment: '2026-03-12',
        findings: 'Routine sterility maintained',
        monitoring: 'Weekly',
        compliance: 'CDC Guidelines',
        incidents: 1,
        mitigations: ['Antibiotic protocols', 'Sterile procedures', 'Regular cleaning'],
        nextReview: '2026-03-26'
      },
      {
        safetyCategory: 'Data Privacy',
        riskLevel: 'MEDIUM',
        score: 92.4,
        lastAssessment: '2026-03-10',
        findings: 'Neural data encryption active',
        monitoring: 'Continuous',
        compliance: 'HIPAA/GDPR',
        incidents: 2,
        mitigations: ['End-to-end encryption', 'Access controls', 'Audit logging'],
        nextReview: '2026-04-10'
      }
    ],
    adaptiveLearning: [
      {
        modelName: 'Motor Intent Classifier',
        modelType: 'Deep Learning',
        accuracy: 94.2,
        adaptationRate: 89.7,
        trainingTime: '12 minutes',
        personalizedUsers: 156,
        lastUpdate: '2026-03-18 09:30:00',
        learningAlgorithm: 'Online Gradient Descent',
        featureExtraction: 'Wavelet Transform',
        adaptationTrigger: 'Performance degradation >5%',
        improvementMetric: '+23.7% accuracy over baseline',
        computationalLoad: 'MEDIUM',
        memoryUsage: '2.4 GB'
      },
      {
        modelName: 'Speech Decoder Network',
        modelType: 'Transformer',
        accuracy: 87.6,
        adaptationRate: 74.5,
        trainingTime: '25 minutes',
        personalizedUsers: 89,
        lastUpdate: '2026-03-17 14:15:00',
        learningAlgorithm: 'Meta-Learning',
        featureExtraction: 'Spectral Features',
        adaptationTrigger: 'Daily calibration',
        improvementMetric: '+18.4% WER reduction',
        computationalLoad: 'HIGH',
        memoryUsage: '5.7 GB'
      },
      {
        modelName: 'Cognitive State Estimator',
        modelType: 'Ensemble',
        accuracy: 78.4,
        adaptationRate: 67.8,
        trainingTime: '8 minutes',
        personalizedUsers: 234,
        lastUpdate: '2026-03-18 10:45:00',
        learningAlgorithm: 'Incremental Learning',
        featureExtraction: 'Power Spectral Density',
        adaptationTrigger: 'Context change',
        improvementMetric: '+15.2% state detection',
        computationalLoad: 'LOW',
        memoryUsage: '1.1 GB'
      }
    ],
    neuralAlerts: [
      {
        type: 'CRITICAL',
        category: 'Safety Alert',
        message: 'Electrode impedance spike detected on N1 Array - immediate inspection required',
        system: 'NeuraLink N1 Array',
        detail: 'Channel 47 impedance increased from 45kΩ to 180kΩ in 15 minutes',
        impact: 'Signal quality degraded, potential electrode displacement, patient safety concern',
        severity: 'CRITICAL',
        timestamp: '11:38',
        detectedBy: 'Impedance Monitor',
        recommendation: 'Suspend current session, perform impedance mapping, clinical evaluation needed',
        patientId: 'P001-Neural',
        affectedChannels: [47, 48, 49],
        safetyProtocol: 'Emergency Protocol A',
        escalation: 'MEDICAL_TEAM',
        estimatedDowntime: '4-6 hours',
        biocompatibilityRisk: 'MODERATE'
      },
      {
        type: 'HIGH',
        category: 'Performance Degradation',
        message: 'Speech Decoder accuracy dropped below 80% threshold - recalibration needed',
        system: 'Meta Neural Band Pro',
        detail: 'Accuracy decreased from 87.6% to 76.3% over last 2 hours',
        impact: 'Reduced communication effectiveness, user frustration, therapeutic value compromised',
        severity: 'HIGH',
        timestamp: '11:25',
        detectedBy: 'Performance Monitor',
        recommendation: 'Initiate adaptive recalibration, check electrode contact quality, review user fatigue',
        userId: 'U047-Meta',
        accuracyTrend: 'DECLINING',
        recalibrationETA: '25 minutes',
        escalation: 'CLINICAL_SUPPORT',
        userNotification: 'SENT',
        compensationStrategy: 'Backup communication mode'
      },
      {
        type: 'MEDIUM',
        category: 'Anomaly Detection',
        message: 'Unusual gamma wave pattern detected - monitoring for seizure activity',
        system: 'Synchron Stentrode',
        detail: 'Gamma frequency spike to 65Hz, amplitude 3x baseline, 45-second duration',
        impact: 'Potential neurological event, signal interpretation uncertainty, safety monitoring required',
        severity: 'MEDIUM',
        timestamp: '11:15',
        detectedBy: 'Anomaly Detector',
        recommendation: 'Continue monitoring, neurologist consultation, prepare emergency protocols',
        patientId: 'P009-Sync',
        waveformData: 'Archived for analysis',
        neurologistAlert: 'SENT',
        escalation: 'NEUROLOGY',
        monitoringFrequency: 'Increased to 1Hz',
        seizureRisk: 'LOW_MODERATE'
      },
      {
        type: 'INFO',
        category: 'Achievement',
        message: 'Motor Intent Decoder achieved new accuracy record of 94.2% - performance milestone',
        system: 'NeuraLink N1 Array',
        detail: 'Sustained 94%+ accuracy for 4.7 hours, 15% improvement over initial baseline',
        impact: 'Enhanced patient mobility, improved quality of life, clinical research advancement',
        validation: 'Independent verification completed',
        timestamp: '11:05',
        detectedBy: 'Performance Tracker',
        achievement: 'CLINICAL_MILESTONE',
        patientId: 'P001-Neural',
        clinicalValue: 'Significant improvement in paralysis restoration',
        researchImpact: 'Publishable results',
        nextGoal: '96% accuracy target',
        publicationPotential: 'High impact journal candidate'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        neuralSessions: 8,
        decodingAccuracy: 89.4,
        adaptations: 12,
        signalQuality: 94.7,
        latencyAverage: 12.8,
        safetyEvents: 1,
        calibrations: 3,
        therapeuticBenefit: 91.2
      },
      {
        period: 'Last 24 Hours',
        neuralSessions: 67,
        decodingAccuracy: 87.8,
        adaptations: 89,
        signalQuality: 93.1,
        latencyAverage: 15.4,
        safetyEvents: 5,
        calibrations: 18,
        therapeuticBenefit: 88.9
      },
      {
        period: 'Last 7 Days',
        neuralSessions: 456,
        decodingAccuracy: 86.3,
        adaptations: 567,
        signalQuality: 92.4,
        latencyAverage: 18.7,
        safetyEvents: 23,
        calibrations: 98,
        therapeuticBenefit: 87.2
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        neuralOverview: {
          ...prev.neuralOverview,
          signalQuality: Math.max(85.0, Math.min(98.0, prev.neuralOverview.signalQuality + (Math.random() - 0.5) * 2.0)),
          thoughtAccuracy: Math.max(80.0, Math.min(95.0, prev.neuralOverview.thoughtAccuracy + (Math.random() - 0.5) * 1.5)),
          cognitiveLoad: Math.max(50.0, Math.min(90.0, prev.neuralOverview.cognitiveLoad + (Math.random() - 0.5) * 5.0)),
          activeSessions: Math.max(25, Math.min(45, prev.neuralOverview.activeSessions + Math.floor((Math.random() - 0.5) * 3)))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20';
      case 'PRODUCTION': return 'text-green-400 bg-green-400/20';
      case 'CLINICAL_TRIAL': return 'text-cyan-400 bg-cyan-400/20';
      case 'CALIBRATING': return 'text-orange-400 bg-orange-400/20';
      case 'TESTING': return 'text-purple-400 bg-purple-400/20';
      case 'RESEARCH': return 'text-indigo-400 bg-indigo-400/20';
      case 'EXPERIMENTAL': return 'text-yellow-400 bg-yellow-400/20';
      case 'PROTOTYPE': return 'text-pink-400 bg-pink-400/20';
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

  const getRiskColor = (level) => {
    switch (level) {
      case 'VERY_LOW': return 'text-green-500';
      case 'LOW': return 'text-green-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-500';
      default: return 'text-slate-400';
    }
  };

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'LOW': return 'text-green-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'HIGH': return 'text-red-400';
      default: return 'text-slate-400';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'STABLE': return 'text-green-400';
      case 'IMPROVING': return 'text-cyan-400';
      case 'INCREASING': return 'text-blue-400';
      case 'FLUCTUATING': return 'text-yellow-400';
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
    <div className="h-full bg-gradient-to-br from-pink-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-pink-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Neural Interface Intelligence Center</h1>
              <p className="text-pink-300">Brain-computer interface & neural analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-pink-400">{neuralData.currentTime}</div>
            <div className="text-pink-300">Neural Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Neural Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-pink-400 mr-2" />
                Electrodes
              </h3>
            </div>
            <div className="text-3xl font-bold text-pink-400">{neuralData.neuralOverview.activeChannels}</div>
            <div className="text-pink-300 text-sm">{neuralData.neuralOverview.totalElectrodes} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Signal Quality
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(neuralData.neuralOverview.signalQuality)}</div>
            <div className="text-green-300 text-sm">Neural Clarity</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-cyan-400 mr-2" />
                Accuracy
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(neuralData.neuralOverview.thoughtAccuracy)}</div>
            <div className="text-cyan-300 text-sm">Thought Decode</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Latency
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{neuralData.neuralOverview.neuralLatency.toFixed(1)}</div>
            <div className="text-yellow-300 text-sm">ms Response</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Cpu className="w-5 h-5 text-blue-400 mr-2" />
                Cognitive Load
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(neuralData.neuralOverview.cognitiveLoad)}</div>
            <div className="text-blue-300 text-sm">Mental Effort</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Sessions
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{neuralData.neuralOverview.activeSessions}</div>
            <div className="text-purple-300 text-sm">Active</div>
          </div>
        </div>

        {/* Neural Systems & Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-pink-400 mr-2" />
              Neural Interface Systems
            </h3>
            <div className="space-y-4">
              {neuralData.neuralSystems.map((system, index) => (
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
                    <div className="text-pink-400">{system.interfaceType}</div>
                    <div className="text-cyan-400">{system.electrodes} electrodes</div>
                    <div className="text-blue-400">{system.manufacturer}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Signal: {formatPercentage(system.signalQuality)}</div>
                    <div className="text-yellow-400">Accuracy: {formatPercentage(system.decodingAccuracy)}</div>
                    <div className="text-orange-400">Battery: {formatPercentage(system.batteryLevel)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-indigo-400">Location: {system.location}</div>
                    <div className="text-purple-400">Session: {system.sessionTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-cyan-400 mr-2" />
              Neural Applications
            </h3>
            <div className="space-y-4">
              {neuralData.neuralApplications.map((app, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{app.applicationName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-pink-400">{app.category}</div>
                    <div className="text-green-400">Accuracy: {formatPercentage(app.accuracy)}</div>
                    <div className={`${getComplexityColor(app.complexity)}`}>
                      {app.complexity}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Users: {app.users}</div>
                    <div className="text-yellow-400">Sessions: {formatNumber(app.sessions)}</div>
                    <div className="text-blue-400">Success: {formatPercentage(app.successRate)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-orange-400">Revenue: {formatCurrency(parseInt(app.revenueGenerated.replace(/[$,]/g, '')))}</div>
                    <div className="text-purple-400">Safety: {app.safetyRating}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brainwave Patterns & Adaptive Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Waves className="w-5 h-5 text-cyan-400 mr-2" />
              Brainwave Pattern Analysis
            </h3>
            <div className="space-y-4">
              {neuralData.brainwavePatterns.map((wave, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{wave.waveType}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${wave.status === 'OPTIMAL' ? 'text-green-400 bg-green-400/20' : wave.status === 'NORMAL' ? 'text-blue-400 bg-blue-400/20' : wave.status === 'ELEVATED' ? 'text-yellow-400 bg-yellow-400/20' : 'text-orange-400 bg-orange-400/20'}`}>
                        {wave.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Freq: {wave.frequency.toFixed(1)} Hz</div>
                    <div className="text-yellow-400">Amp: {wave.amplitude.toFixed(1)} μV</div>
                    <div className="text-green-400">Coherence: {formatPercentage(wave.coherence)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Location: {wave.location}</div>
                    <div className={`${getTrendColor(wave.trend)}`}>Trend: {wave.trend}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Function: {wave.association}</div>
                    <div className="text-purple-400">Patterns: {wave.detectedPatterns} | Anomalies: {wave.anomalies}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-green-400 mr-2" />
              Adaptive Learning Models
            </h3>
            <div className="space-y-4">
              {neuralData.adaptiveLearning.map((model, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{model.modelName}</span>
                    <div className="text-green-400 text-xs">{formatPercentage(model.accuracy)}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-pink-400">{model.modelType}</div>
                    <div className="text-cyan-400">Users: {model.personalizedUsers}</div>
                    <div className="text-yellow-400">Training: {model.trainingTime}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Adaptation: {formatPercentage(model.adaptationRate)}</div>
                    <div className="text-orange-400">Memory: {model.memoryUsage}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Algorithm: {model.learningAlgorithm}</div>
                    <div className="text-green-400">Improvement: {model.improvementMetric}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Neural Safety */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 text-blue-400 mr-2" />
            Neural Safety Monitoring
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {neuralData.neuralSafety.map((safety, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{safety.safetyCategory}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${getRiskColor(safety.riskLevel)} bg-slate-800/50`}>
                      {safety.riskLevel}
                    </span>
                    <span className="text-green-400 text-xs">{formatPercentage(safety.score)}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Last Check: {safety.lastAssessment}</div>
                  <div className="text-purple-400">Incidents: {safety.incidents}</div>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-slate-300">Finding: {safety.findings}</div>
                  <div className="text-blue-400">Compliance: {safety.compliance}</div>
                  <div className="text-green-400">Next Review: {safety.nextReview}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
            Neural Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {neuralData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Sessions: {metrics.neuralSessions}</div>
                  <div className="text-green-400">Accuracy: {formatPercentage(metrics.decodingAccuracy)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Adaptations: {metrics.adaptations}</div>
                  <div className="text-yellow-400">Signal Q: {formatPercentage(metrics.signalQuality)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Latency: {metrics.latencyAverage.toFixed(1)}ms</div>
                  <div className="text-red-400">Safety: {metrics.safetyEvents}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-orange-400">Calibrations: {metrics.calibrations}</div>
                  <div className="text-indigo-400">Benefit: {formatPercentage(metrics.therapeuticBenefit)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Neural Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Neural Interface System Alerts
          </h3>
          <div className="space-y-4">
            {neuralData.neuralAlerts.map((alert, index) => (
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
                  {alert.detail && <div className="text-cyan-400">Detail: {alert.detail}</div>}
                  {alert.patientId && <div className="text-purple-400">Patient: {alert.patientId}</div>}
                  {alert.userId && <div className="text-purple-400">User: {alert.userId}</div>}
                  {alert.affectedChannels && <div className="text-orange-400">Channels: {alert.affectedChannels.join(', ')}</div>}
                  {alert.accuracyTrend && <div className="text-red-400">Trend: {alert.accuracyTrend}</div>}
                  {alert.achievement && <div className="text-green-400">Achievement: {alert.achievement}</div>}
                  {alert.estimatedDowntime && <div className="text-red-400">Downtime: {alert.estimatedDowntime}</div>}
                  {alert.recalibrationETA && <div className="text-blue-400">Recalibration: {alert.recalibrationETA}</div>}
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