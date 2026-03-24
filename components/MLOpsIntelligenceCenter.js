// MLOps Intelligence Center - Machine Learning Operations & Model Performance Analytics
import { useState, useEffect } from 'react';
import { Brain, Zap, Shield, Activity, TrendingUp, AlertTriangle, CheckCircle, Clock, Users, BarChart3, Settings, Target } from 'lucide-react';

export default function MLOpsIntelligenceCenter() {
  const [mlopsData, setMLOpsData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    mlopsOverview: {
      totalModels: 156,
      activeModels: 142,
      dailyInferences: 2456789,
      trainingPipelines: 34,
      modelVersions: 892,
      avgInferenceLatency: 45.7,
      modelAccuracy: 94.2,
      dataProcessingJobs: 67,
      featureStores: 23,
      experimentTracking: 145,
      autoMLJobs: 12,
      modelMonitoring: 142,
      dataQualityScore: 96.8,
      mlComputeUtilization: 78.4,
      modelDeploymentSuccess: 91.7,
      costPerInference: 0.0023
    },
    modelPipelines: [
      {
        name: 'Recommendation Engine',
        modelType: 'Deep Learning',
        framework: 'TensorFlow',
        version: 'v3.2.1',
        status: 'PRODUCTION',
        accuracy: 94.6,
        lastTraining: '2026-03-17 23:45:00',
        trainingDuration: 3.2,
        inferenceLatency: 23.4,
        dailyInferences: 567890,
        datasetSize: '12.4 GB',
        features: 1024,
        modelSize: '456 MB',
        deployment: {
          environment: 'production',
          instances: 12,
          cpuUtilization: 67.8,
          memoryUtilization: 73.4,
          requestsPerSecond: 1234,
          errorRate: 0.08,
          availability: 99.97,
          lastDeploy: '2026-03-17 14:30:00'
        },
        performance: {
          precision: 94.6,
          recall: 92.1,
          f1Score: 93.3,
          auc: 96.7,
          drift: 1.2,
          bias: 0.15,
          explainability: 87.4
        },
        monitoring: {
          alerts: 0,
          predictions: 567890,
          predictionDrift: 1.2,
          dataDrift: 0.8,
          performanceDrift: 0.3,
          lastMonitoringCheck: '2026-03-18 10:30:00'
        }
      },
      {
        name: 'Fraud Detection',
        modelType: 'Ensemble',
        framework: 'XGBoost',
        version: 'v2.8.4',
        status: 'PRODUCTION',
        accuracy: 97.3,
        lastTraining: '2026-03-18 02:15:00',
        trainingDuration: 1.8,
        inferenceLatency: 12.7,
        dailyInferences: 234567,
        datasetSize: '8.7 GB',
        features: 256,
        modelSize: '89 MB',
        deployment: {
          environment: 'production',
          instances: 8,
          cpuUtilization: 45.2,
          memoryUtilization: 51.8,
          requestsPerSecond: 567,
          errorRate: 0.02,
          availability: 99.99,
          lastDeploy: '2026-03-18 03:00:00'
        },
        performance: {
          precision: 97.3,
          recall: 96.8,
          f1Score: 97.0,
          auc: 98.9,
          drift: 0.3,
          bias: 0.08,
          explainability: 92.1
        },
        monitoring: {
          alerts: 0,
          predictions: 234567,
          predictionDrift: 0.3,
          dataDrift: 0.2,
          performanceDrift: 0.1,
          lastMonitoringCheck: '2026-03-18 10:40:00'
        }
      },
      {
        name: 'Computer Vision',
        modelType: 'CNN',
        framework: 'PyTorch',
        version: 'v4.1.2',
        status: 'TRAINING',
        accuracy: 89.4,
        lastTraining: '2026-03-18 08:00:00',
        trainingDuration: 12.5,
        inferenceLatency: 156.8,
        dailyInferences: 45678,
        datasetSize: '234 GB',
        features: 2048,
        modelSize: '1.2 GB',
        deployment: {
          environment: 'staging',
          instances: 4,
          cpuUtilization: 89.7,
          memoryUtilization: 92.3,
          requestsPerSecond: 89,
          errorRate: 0.15,
          availability: 99.84,
          lastDeploy: '2026-03-17 16:45:00'
        },
        performance: {
          precision: 89.4,
          recall: 87.9,
          f1Score: 88.6,
          auc: 94.2,
          drift: 3.7,
          bias: 0.23,
          explainability: 67.8
        },
        monitoring: {
          alerts: 2,
          predictions: 45678,
          predictionDrift: 3.7,
          dataDrift: 2.1,
          performanceDrift: 1.8,
          lastMonitoringCheck: '2026-03-18 10:35:00'
        }
      },
      {
        name: 'NLP Sentiment',
        modelType: 'Transformer',
        framework: 'Hugging Face',
        version: 'v1.9.3',
        status: 'PRODUCTION',
        accuracy: 91.8,
        lastTraining: '2026-03-16 19:20:00',
        trainingDuration: 6.7,
        inferenceLatency: 89.3,
        dailyInferences: 123456,
        datasetSize: '45.6 GB',
        features: 768,
        modelSize: '334 MB',
        deployment: {
          environment: 'production',
          instances: 6,
          cpuUtilization: 56.4,
          memoryUtilization: 67.1,
          requestsPerSecond: 234,
          errorRate: 0.05,
          availability: 99.93,
          lastDeploy: '2026-03-16 20:15:00'
        },
        performance: {
          precision: 91.8,
          recall: 90.2,
          f1Score: 91.0,
          auc: 95.6,
          drift: 1.8,
          bias: 0.12,
          explainability: 78.9
        },
        monitoring: {
          alerts: 1,
          predictions: 123456,
          predictionDrift: 1.8,
          dataDrift: 1.1,
          performanceDrift: 0.7,
          lastMonitoringCheck: '2026-03-18 10:25:00'
        }
      },
      {
        name: 'Time Series Forecast',
        modelType: 'LSTM',
        framework: 'TensorFlow',
        version: 'v2.4.7',
        status: 'FAILED',
        accuracy: 76.3,
        lastTraining: '2026-03-18 06:30:00',
        trainingDuration: 8.9,
        inferenceLatency: 234.5,
        dailyInferences: 12345,
        datasetSize: '67.8 GB',
        features: 512,
        modelSize: '789 MB',
        deployment: {
          environment: 'staging',
          instances: 2,
          cpuUtilization: 23.4,
          memoryUtilization: 34.7,
          requestsPerSecond: 23,
          errorRate: 0.89,
          availability: 87.45,
          lastDeploy: '2026-03-17 11:20:00'
        },
        performance: {
          precision: 76.3,
          recall: 74.1,
          f1Score: 75.2,
          auc: 82.7,
          drift: 8.4,
          bias: 0.45,
          explainability: 56.2
        },
        monitoring: {
          alerts: 5,
          predictions: 12345,
          predictionDrift: 8.4,
          dataDrift: 6.7,
          performanceDrift: 4.2,
          lastMonitoringCheck: '2026-03-18 10:20:00'
        }
      }
    ],
    experimentTracking: [
      {
        experimentId: 'EXP-2026-0318-001',
        name: 'Hyperparameter Optimization',
        model: 'Recommendation Engine',
        status: 'RUNNING',
        progress: 67.8,
        runs: 145,
        bestMetric: 94.8,
        currentMetric: 94.2,
        parameters: {
          learningRate: 0.001,
          batchSize: 256,
          epochs: 100,
          dropout: 0.2,
          optimizer: 'Adam'
        },
        metrics: {
          accuracy: 94.2,
          loss: 0.089,
          valAccuracy: 93.6,
          valLoss: 0.094,
          f1Score: 93.8,
          precision: 94.1,
          recall: 93.5
        },
        resources: {
          gpuUtilization: 89.4,
          cpuUtilization: 67.8,
          memoryUsage: '23.4 GB',
          diskUsage: '456 GB',
          estimatedCost: '$234.56',
          timeRemaining: '2.3 hours'
        },
        startTime: '2026-03-18 08:15:00',
        estimatedCompletion: '2026-03-18 12:45:00'
      },
      {
        experimentId: 'EXP-2026-0318-002',
        name: 'Feature Engineering',
        model: 'Fraud Detection',
        status: 'COMPLETED',
        progress: 100,
        runs: 89,
        bestMetric: 97.5,
        currentMetric: 97.5,
        parameters: {
          featureSelection: 'mutual_info',
          scalingMethod: 'robust',
          encodingStrategy: 'target',
          featureCount: 256,
          crossValidation: 5
        },
        metrics: {
          accuracy: 97.5,
          precision: 97.8,
          recall: 97.2,
          f1Score: 97.5,
          auc: 99.1,
          featureImportance: 'calculated'
        },
        resources: {
          gpuUtilization: 0,
          cpuUtilization: 45.6,
          memoryUsage: '12.3 GB',
          diskUsage: '89 GB',
          totalCost: '$67.89',
          duration: '3.2 hours'
        },
        startTime: '2026-03-17 14:30:00',
        completionTime: '2026-03-17 17:42:00'
      },
      {
        experimentId: 'EXP-2026-0318-003',
        name: 'Architecture Search',
        model: 'Computer Vision',
        status: 'FAILED',
        progress: 23.4,
        runs: 12,
        bestMetric: 86.7,
        currentMetric: 0,
        parameters: {
          searchSpace: 'mobilenet_v3',
          maxLayers: 50,
          maxFilters: 512,
          optimizationTarget: 'accuracy',
          budgetHours: 24
        },
        metrics: {
          accuracy: 0,
          error: 'Out of memory',
          lastValidAccuracy: 86.7,
          resourceExhaustion: true
        },
        resources: {
          gpuUtilization: 0,
          cpuUtilization: 0,
          memoryUsage: '0 GB',
          diskUsage: '234 GB',
          wastedCost: '$145.67',
          failureTime: '2026-03-18 10:20:00'
        },
        startTime: '2026-03-18 06:00:00',
        failureTime: '2026-03-18 10:20:00'
      }
    ],
    dataOperations: [
      {
        pipeline: 'Feature Store Update',
        status: 'RUNNING',
        progress: 78.9,
        recordsProcessed: 2345678,
        totalRecords: 2976543,
        throughput: '45.6K records/sec',
        dataQuality: 96.8,
        anomalies: 23,
        missingValues: 0.12,
        duplicates: 0.05,
        schema: 'valid',
        latency: 234,
        errorRate: 0.03,
        startTime: '2026-03-18 09:30:00',
        estimatedCompletion: '2026-03-18 11:15:00'
      },
      {
        pipeline: 'Training Data Validation',
        status: 'COMPLETED',
        progress: 100,
        recordsProcessed: 1234567,
        totalRecords: 1234567,
        throughput: '67.8K records/sec',
        dataQuality: 98.4,
        anomalies: 5,
        missingValues: 0.02,
        duplicates: 0.01,
        schema: 'valid',
        latency: 156,
        errorRate: 0.00,
        startTime: '2026-03-18 08:00:00',
        completionTime: '2026-03-18 09:30:00'
      },
      {
        pipeline: 'Real-time Inference',
        status: 'HEALTHY',
        progress: 100,
        recordsProcessed: 987654,
        throughput: '234 requests/sec',
        dataQuality: 94.7,
        anomalies: 12,
        latency: 45.7,
        errorRate: 0.08,
        availability: 99.97,
        cacheHitRate: 87.3,
        scalingStatus: 'auto-scaling active'
      }
    ],
    modelMonitoring: {
      driftDetection: {
        totalModels: 142,
        modelsWithDrift: 8,
        criticalDrift: 2,
        moderateDrift: 3,
        minorDrift: 3,
        avgDriftScore: 1.8,
        driftThreshold: 5.0,
        lastCheck: '2026-03-18 10:30:00',
        alertsTriggered: 2
      },
      performanceMonitoring: {
        modelsMonitored: 142,
        performanceDegraded: 3,
        criticalDegradation: 1,
        moderateDegradation: 1,
        minorDegradation: 1,
        avgAccuracyDrop: 2.3,
        performanceThreshold: 5.0,
        lastCheck: '2026-03-18 10:40:00',
        alertsTriggered: 1
      },
      biasDetection: {
        modelsScanned: 142,
        biasDetected: 5,
        criticalBias: 0,
        moderateBias: 2,
        minorBias: 3,
        avgBiasScore: 0.18,
        biasThreshold: 0.3,
        lastScan: '2026-03-18 09:45:00',
        fairnessMetrics: 'calculated'
      },
      explainability: {
        modelsWithExplainability: 134,
        explanationsCoverage: 94.4,
        avgExplainabilityScore: 78.9,
        sharpValues: 'available',
        limeExplanations: 'available',
        featureImportance: 'calculated',
        lastUpdate: '2026-03-18 10:00:00'
      }
    },
    computeResources: [
      {
        cluster: 'ML Training Cluster',
        status: 'ACTIVE',
        nodes: 24,
        gpus: 96,
        cpuCores: 768,
        totalMemory: '6.1 TB',
        totalStorage: '48.5 TB',
        utilization: {
          gpu: 78.4,
          cpu: 45.6,
          memory: 67.3,
          storage: 34.7
        },
        performance: {
          jobsRunning: 12,
          jobsQueued: 8,
          avgWaitTime: '3.4 minutes',
          throughput: '234.5 TFLOPS',
          efficiency: 89.7
        },
        cost: {
          hourlyRate: '$456.78',
          dailyCost: '$10,962.72',
          monthlyCost: '$328,881.60',
          costPerJob: '$234.56'
        }
      },
      {
        cluster: 'Inference Cluster',
        status: 'ACTIVE',
        nodes: 18,
        gpus: 36,
        cpuCores: 432,
        totalMemory: '2.7 TB',
        totalStorage: '18.4 TB',
        utilization: {
          gpu: 56.7,
          cpu: 67.8,
          memory: 73.4,
          storage: 23.5
        },
        performance: {
          requestsPerSecond: 2345,
          avgLatency: '45.7ms',
          errorRate: 0.08,
          availability: 99.97,
          autoScaling: 'active'
        },
        cost: {
          hourlyRate: '$234.56',
          dailyCost: '$5,629.44',
          monthlyCost: '$168,883.20',
          costPerInference: '$0.0023'
        }
      },
      {
        cluster: 'Experiment Cluster',
        status: 'WARNING',
        nodes: 12,
        gpus: 48,
        cpuCores: 288,
        totalMemory: '1.8 TB',
        totalStorage: '12.3 TB',
        utilization: {
          gpu: 92.3,
          cpu: 78.9,
          memory: 89.4,
          storage: 67.8
        },
        performance: {
          experimentsRunning: 15,
          experimentsQueued: 23,
          avgWaitTime: '12.7 minutes',
          resourceContention: 'high',
          efficiency: 72.4
        },
        cost: {
          hourlyRate: '$345.67',
          dailyCost: '$8,296.08',
          monthlyCost: '$248,882.40',
          utilizationWarning: 'Cost spike detected'
        }
      }
    ],
    mlopsAlerts: [
      {
        type: 'CRITICAL',
        category: 'Model Performance',
        message: 'Time Series Forecast model experiencing severe performance degradation - accuracy dropped to 76.3%',
        model: 'Time Series Forecast',
        currentValue: '76.3% accuracy',
        threshold: '85% minimum',
        impact: 'Forecast predictions unreliable, business decisions affected, revenue forecasting compromised',
        degradationPattern: 'Steady decline over 48 hours',
        rootCause: 'Data drift detected: 8.4% distribution shift',
        severity: 'HIGH',
        timestamp: '10:42',
        trendDirection: 'DECLINING',
        detectedBy: 'Model Monitor',
        recommendation: 'Immediate model retraining required, investigate data pipeline changes, validate new data sources',
        urgency: 'IMMEDIATE',
        escalation: 'ML_ENGINEERING',
        affectedPredictions: 12345,
        businessImpact: 'Revenue forecasting accuracy compromised',
        lastGoodPerformance: '2026-03-16 14:20:00',
        rollbackAvailable: true
      },
      {
        type: 'HIGH',
        category: 'Resource Utilization',
        message: 'Experiment cluster approaching resource limits - 92.3% GPU utilization with high queue buildup',
        cluster: 'Experiment Cluster',
        currentValue: '92.3% GPU utilization',
        threshold: '85%',
        impact: 'Experiment delays, researcher productivity impact, increased costs due to resource contention',
        queueLength: '23 experiments',
        avgWaitTime: '12.7 minutes',
        severity: 'MEDIUM',
        timestamp: '10:40',
        trendDirection: 'INCREASING',
        detectedBy: 'Resource Monitor',
        recommendation: 'Scale up experiment cluster, implement resource quotas, optimize experiment scheduling',
        urgency: 'HIGH',
        escalation: 'INFRASTRUCTURE_TEAM',
        resourceContention: 'High across all resource types',
        costImpact: 'Cost spike warning triggered',
        efficiency: '72.4% (below 85% target)'
      },
      {
        type: 'WARNING',
        category: 'Data Drift',
        message: 'Computer Vision model showing significant data drift - 3.7% distribution shift detected',
        model: 'Computer Vision',
        currentValue: '3.7% data drift',
        threshold: '2.5%',
        impact: 'Model performance may degrade, prediction reliability decreased, retraining may be required',
        driftType: 'Feature distribution shift',
        affectedFeatures: ['image_brightness', 'contrast_ratio', 'color_histogram'],
        severity: 'MEDIUM',
        timestamp: '10:35',
        detectedBy: 'Drift Monitor',
        recommendation: 'Monitor closely, prepare retraining pipeline, investigate data source changes',
        urgency: 'MEDIUM',
        escalation: 'DATA_SCIENCE_TEAM',
        trendAnalysis: 'Gradual increase over 72 hours',
        mitigationOptions: ['Data augmentation', 'Adaptive learning', 'Immediate retraining']
      },
      {
        type: 'INFO',
        category: 'Model Performance',
        message: 'Fraud Detection model achieving exceptional performance - 97.3% accuracy with 0.02% error rate',
        model: 'Fraud Detection',
        currentValue: '97.3% accuracy, 0.02% error rate',
        benchmarkComparison: '12% better than industry standard',
        impact: 'Excellent fraud detection capability, reduced false positives, improved customer experience',
        optimizations: ['Feature engineering optimization', 'Ensemble method tuning', 'Real-time processing'],
        severity: 'POSITIVE',
        timestamp: '10:25',
        detectedBy: 'Performance Analytics',
        successFactors: ['High-quality training data', 'Advanced feature engineering', 'Robust model architecture'],
        opportunity: 'BEST_PRACTICE_SHARING',
        costSavings: '$45,670/month from reduced fraud',
        recommendation: 'Document success patterns for other models, consider expanding feature set'
      }
    ],
    costAnalytics: [
      {
        period: 'Last Hour',
        trainingCost: 456.78,
        inferenceCost: 234.56,
        storageCost: 89.12,
        computeCost: 678.90,
        totalCost: 1459.36,
        costPerModel: 10.28,
        costPerInference: 0.0024,
        efficiency: 89.7,
        trends: {
          trainingCost: '+12.4%',
          inferenceCost: '+3.7%',
          efficiency: '+2.1%'
        }
      },
      {
        period: 'Last 24 Hours',
        trainingCost: 10962.72,
        inferenceCost: 5629.44,
        storageCost: 2138.88,
        computeCost: 16296.08,
        totalCost: 35027.12,
        costPerModel: 246.67,
        costPerInference: 0.0023,
        efficiency: 87.3,
        trends: {
          trainingCost: '+18.9%',
          inferenceCost: '+5.2%',
          efficiency: '+1.8%'
        }
      },
      {
        period: 'Last 7 Days',
        trainingCost: 76739.04,
        inferenceCost: 39406.08,
        storageCost: 14972.16,
        computeCost: 114072.56,
        totalCost: 245189.84,
        costPerModel: 1727.39,
        costPerInference: 0.0022,
        efficiency: 91.2,
        trends: {
          trainingCost: '+8.7%',
          inferenceCost: '+2.1%',
          efficiency: '+4.3%'
        }
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMLOpsData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        mlopsOverview: {
          ...prev.mlopsOverview,
          dailyInferences: Math.max(2000000, Math.min(3000000, prev.mlopsOverview.dailyInferences + Math.floor((Math.random() - 0.5) * 100000))),
          avgInferenceLatency: Math.max(30.0, Math.min(60.0, prev.mlopsOverview.avgInferenceLatency + (Math.random() - 0.5) * 5.0)),
          modelAccuracy: Math.max(90.0, Math.min(98.0, prev.mlopsOverview.modelAccuracy + (Math.random() - 0.5) * 2.0)),
          mlComputeUtilization: Math.max(60.0, Math.min(90.0, prev.mlopsOverview.mlComputeUtilization + (Math.random() - 0.5) * 5.0))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'PRODUCTION': return 'text-green-400 bg-green-400/20';
      case 'COMPLETED': return 'text-green-400 bg-green-400/20';
      case 'HEALTHY': return 'text-green-400 bg-green-400/20';
      case 'ACTIVE': return 'text-green-400 bg-green-400/20';
      case 'TRAINING': return 'text-blue-400 bg-blue-400/20';
      case 'RUNNING': return 'text-blue-400 bg-blue-400/20';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20';
      case 'FAILED': return 'text-red-400 bg-red-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'IMMEDIATE': return 'text-red-500';
      case 'HIGH': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-blue-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount) => `$${amount.toLocaleString()}`;
  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatLatency = (ms) => `${ms.toFixed(1)}ms`;
  const formatDuration = (hours) => {
    if (hours >= 1) {
      return `${hours.toFixed(1)}h`;
    }
    return `${(hours * 60).toFixed(0)}m`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">MLOps Intelligence Center</h1>
              <p className="text-purple-300">Machine learning operations & model performance analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{mlopsData.currentTime}</div>
            <div className="text-purple-300">MLOps Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* MLOps Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                Models
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{mlopsData.mlopsOverview.activeModels}</div>
            <div className="text-purple-300 text-sm">{mlopsData.mlopsOverview.totalModels} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-blue-400 mr-2" />
                Inferences
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(mlopsData.mlopsOverview.dailyInferences)}</div>
            <div className="text-blue-300 text-sm">Daily</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-cyan-400 mr-2" />
                Accuracy
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(mlopsData.mlopsOverview.modelAccuracy)}</div>
            <div className="text-cyan-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                Latency
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatLatency(mlopsData.mlopsOverview.avgInferenceLatency)}</div>
            <div className="text-yellow-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                Data Quality
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(mlopsData.mlopsOverview.dataQualityScore)}</div>
            <div className="text-green-300 text-sm">Quality Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-orange-400 mr-2" />
                Compute
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(mlopsData.mlopsOverview.mlComputeUtilization)}</div>
            <div className="text-orange-300 text-sm">Utilization</div>
          </div>
        </div>

        {/* Model Pipelines */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Brain className="w-5 h-5 text-purple-400 mr-2" />
            ML Model Pipeline Analytics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Model</th>
                  <th className="text-center p-3 text-slate-300">Status</th>
                  <th className="text-center p-3 text-slate-300">Accuracy</th>
                  <th className="text-center p-3 text-slate-300">Latency</th>
                  <th className="text-center p-3 text-slate-300">Deployment</th>
                  <th className="text-center p-3 text-slate-300">Monitoring</th>
                </tr>
              </thead>
              <tbody>
                {mlopsData.modelPipelines.map((model, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium text-sm">{model.name}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        {model.modelType} • {model.framework} • v{model.version}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(model.status)}`}>
                        {model.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <div className={`font-medium ${model.accuracy >= 95 ? 'text-green-400' : model.accuracy >= 85 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {formatPercentage(model.accuracy)}
                      </div>
                      <div className="text-slate-400 text-xs">F1: {formatPercentage(model.performance.f1Score)}</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${model.inferenceLatency < 50 ? 'text-green-400' : model.inferenceLatency < 100 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {formatLatency(model.inferenceLatency)}
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-xs space-y-1">
                        <div className="text-blue-400">
                          {model.deployment.environment}
                        </div>
                        <div className="text-cyan-400">
                          {model.deployment.instances} instances
                        </div>
                        <div className={`${model.deployment.availability >= 99.9 ? 'text-green-400' : 'text-yellow-400'}`}>
                          {formatPercentage(model.deployment.availability)} uptime
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-xs space-y-1">
                        <div className={`${model.monitoring.alerts === 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {model.monitoring.alerts} alerts
                        </div>
                        <div className={`${model.monitoring.predictionDrift < 2 ? 'text-green-400' : model.monitoring.predictionDrift < 5 ? 'text-yellow-400' : 'text-red-400'}`}>
                          Drift: {formatPercentage(model.monitoring.predictionDrift)}
                        </div>
                        <div className="text-purple-400">
                          {formatNumber(model.monitoring.predictions)} preds
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Experiment Tracking & Data Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
              Experiment Tracking
            </h3>
            <div className="space-y-4">
              {mlopsData.experimentTracking.map((experiment, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{experiment.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(experiment.status)}`}>
                        {experiment.status}
                      </span>
                      <span className="text-slate-400 text-xs">{experiment.runs} runs</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Model: {experiment.model}</div>
                    <div className="text-yellow-400">Progress: {formatPercentage(experiment.progress)}</div>
                    <div className={`${experiment.status === 'COMPLETED' ? 'text-green-400' : experiment.status === 'FAILED' ? 'text-red-400' : 'text-blue-400'}`}>
                      Best: {formatPercentage(experiment.bestMetric)}
                    </div>
                  </div>
                  
                  {experiment.metrics && (
                    <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                      <div className="text-green-400">Acc: {formatPercentage(experiment.metrics.accuracy || 0)}</div>
                      <div className="text-purple-400">F1: {formatPercentage(experiment.metrics.f1Score || 0)}</div>
                      <div className="text-indigo-400">AUC: {experiment.metrics.auc ? formatPercentage(experiment.metrics.auc) : 'N/A'}</div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">GPU: {formatPercentage(experiment.resources.gpuUtilization || 0)}</div>
                    <div className="text-pink-400">Memory: {experiment.resources.memoryUsage}</div>
                  </div>
                  
                  <div className="text-slate-400 text-xs">
                    <strong>Cost:</strong> {experiment.resources.estimatedCost || experiment.resources.totalCost || experiment.resources.wastedCost || 'N/A'}
                    {experiment.resources.timeRemaining && <span> • <strong>ETA:</strong> {experiment.resources.timeRemaining}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-indigo-400 mr-2" />
              Data Operations Pipeline
            </h3>
            <div className="space-y-4">
              {mlopsData.dataOperations.map((operation, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{operation.pipeline}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(operation.status)}`}>
                        {operation.status}
                      </span>
                      <span className="text-slate-400 text-xs">{formatPercentage(operation.progress)}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Records: {formatNumber(operation.recordsProcessed)}</div>
                    <div className="text-green-400">Quality: {formatPercentage(operation.dataQuality)}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Throughput: {operation.throughput}</div>
                    <div className="text-yellow-400">Anomalies: {operation.anomalies}</div>
                    <div className="text-purple-400">Latency: {operation.latency}ms</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-orange-400">Missing: {formatPercentage(operation.missingValues)}</div>
                    <div className="text-red-400">Error Rate: {formatPercentage(operation.errorRate)}</div>
                  </div>
                  
                  {operation.availability && (
                    <div className="text-slate-400 text-xs mt-2">
                      <strong>Uptime:</strong> {formatPercentage(operation.availability)}
                      {operation.cacheHitRate && <span> • <strong>Cache:</strong> {formatPercentage(operation.cacheHitRate)}</span>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Model Monitoring */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-yellow-400 mr-2" />
              Drift Detection
            </h3>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{mlopsData.modelMonitoring.driftDetection.modelsWithDrift}</div>
                <div className="text-yellow-300 text-sm">Models with drift</div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-red-500">Critical: {mlopsData.modelMonitoring.driftDetection.criticalDrift}</div>
                <div className="text-orange-400">Moderate: {mlopsData.modelMonitoring.driftDetection.moderateDrift}</div>
                <div className="text-yellow-400">Minor: {mlopsData.modelMonitoring.driftDetection.minorDrift}</div>
              </div>
              
              <div className="text-slate-400 text-xs">
                <strong>Avg Score:</strong> {mlopsData.modelMonitoring.driftDetection.avgDriftScore} / {mlopsData.modelMonitoring.driftDetection.driftThreshold}
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Performance Monitor
            </h3>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{mlopsData.modelMonitoring.performanceMonitoring.performanceDegraded}</div>
                <div className="text-green-300 text-sm">Degraded models</div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-red-500">Critical: {mlopsData.modelMonitoring.performanceMonitoring.criticalDegradation}</div>
                <div className="text-orange-400">Moderate: {mlopsData.modelMonitoring.performanceMonitoring.moderateDegradation}</div>
                <div className="text-yellow-400">Minor: {mlopsData.modelMonitoring.performanceMonitoring.minorDegradation}</div>
              </div>
              
              <div className="text-slate-400 text-xs">
                <strong>Avg Drop:</strong> {formatPercentage(mlopsData.modelMonitoring.performanceMonitoring.avgAccuracyDrop)}
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-purple-400 mr-2" />
              Bias Detection
            </h3>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{mlopsData.modelMonitoring.biasDetection.biasDetected}</div>
                <div className="text-purple-300 text-sm">Models with bias</div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-red-500">Critical: {mlopsData.modelMonitoring.biasDetection.criticalBias}</div>
                <div className="text-orange-400">Moderate: {mlopsData.modelMonitoring.biasDetection.moderateBias}</div>
                <div className="text-yellow-400">Minor: {mlopsData.modelMonitoring.biasDetection.minorBias}</div>
              </div>
              
              <div className="text-slate-400 text-xs">
                <strong>Avg Score:</strong> {mlopsData.modelMonitoring.biasDetection.avgBiasScore}
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              Explainability
            </h3>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{mlopsData.modelMonitoring.explainability.modelsWithExplainability}</div>
                <div className="text-blue-300 text-sm">Explainable models</div>
              </div>
              
              <div className="text-xs space-y-1">
                <div className="text-cyan-400">Coverage: {formatPercentage(mlopsData.modelMonitoring.explainability.explanationsCoverage)}</div>
                <div className="text-indigo-400">Score: {formatPercentage(mlopsData.modelMonitoring.explainability.avgExplainabilityScore)}</div>
                <div className="text-purple-400">SHAP: Available</div>
              </div>
              
              <div className="text-slate-400 text-xs">
                <strong>Methods:</strong> LIME, SHAP, Feature Importance
              </div>
            </div>
          </div>
        </div>

        {/* Compute Resources & Cost Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-orange-400 mr-2" />
              ML Compute Resources
            </h3>
            <div className="space-y-4">
              {mlopsData.computeResources.map((cluster, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{cluster.cluster}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(cluster.status)}`}>
                        {cluster.status}
                      </span>
                      <span className="text-slate-400 text-xs">{cluster.nodes} nodes</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-xs mb-2">
                    <div className="text-purple-400">GPUs: {cluster.gpus}</div>
                    <div className="text-blue-400">CPUs: {cluster.cpuCores}</div>
                    <div className="text-cyan-400">RAM: {cluster.totalMemory}</div>
                    <div className="text-green-400">Storage: {cluster.totalStorage}</div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-xs mb-2">
                    <div className={`${cluster.utilization.gpu > 80 ? 'text-red-400' : cluster.utilization.gpu > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                      GPU: {formatPercentage(cluster.utilization.gpu)}
                    </div>
                    <div className={`${cluster.utilization.cpu > 80 ? 'text-red-400' : cluster.utilization.cpu > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                      CPU: {formatPercentage(cluster.utilization.cpu)}
                    </div>
                    <div className={`${cluster.utilization.memory > 80 ? 'text-red-400' : cluster.utilization.memory > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                      MEM: {formatPercentage(cluster.utilization.memory)}
                    </div>
                    <div className={`${cluster.utilization.storage > 80 ? 'text-red-400' : cluster.utilization.storage > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                      DISK: {formatPercentage(cluster.utilization.storage)}
                    </div>
                  </div>
                  
                  <div className="text-slate-400 text-xs">
                    <strong>Cost:</strong> {cluster.cost.hourlyRate}/hr • <strong>Daily:</strong> {cluster.cost.dailyCost}
                    {cluster.performance && cluster.performance.efficiency && (
                      <span> • <strong>Efficiency:</strong> {formatPercentage(cluster.performance.efficiency)}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
              ML Cost Analytics
            </h3>
            <div className="space-y-4">
              {mlopsData.costAnalytics.map((cost, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{cost.period}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm font-medium">{formatCurrency(cost.totalCost)}</span>
                      <span className="text-slate-400 text-xs">total</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Training: {formatCurrency(cost.trainingCost)}</div>
                    <div className="text-cyan-400">Inference: {formatCurrency(cost.inferenceCost)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Storage: {formatCurrency(cost.storageCost)}</div>
                    <div className="text-orange-400">Compute: {formatCurrency(cost.computeCost)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Per Model: {formatCurrency(cost.costPerModel)}</div>
                    <div className="text-indigo-400">Per Inference: ${cost.costPerInference.toFixed(4)}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-green-400">Training: {cost.trends.trainingCost}</div>
                    <div className="text-blue-400">Inference: {cost.trends.inferenceCost}</div>
                    <div className="text-cyan-400">Efficiency: {cost.trends.efficiency}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MLOps Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            MLOps System Alerts
          </h3>
          <div className="space-y-4">
            {mlopsData.mlopsAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                    {alert.urgency && <span className={`text-xs ${getUrgencyColor(alert.urgency)}`}>{alert.urgency}</span>}
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                
                <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                  {alert.model && <div className="text-slate-300">Model: {alert.model}</div>}
                  {alert.cluster && <div className="text-slate-300">Cluster: {alert.cluster}</div>}
                  {alert.currentValue && <div className="text-slate-300">Current: {alert.currentValue}</div>}
                  {alert.threshold && <div className="text-slate-300">Threshold: {alert.threshold}</div>}
                  {alert.queueLength && <div className="text-slate-300">Queue: {alert.queueLength}</div>}
                  {alert.driftType && <div className="text-yellow-400">Drift Type: {alert.driftType}</div>}
                  {alert.benchmarkComparison && <div className="text-green-400">Benchmark: {alert.benchmarkComparison}</div>}
                  {alert.costSavings && <div className="text-green-400">Savings: {alert.costSavings}</div>}
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