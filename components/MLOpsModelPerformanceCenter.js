// MLOps Model Performance Center - 2026 Machine Learning Operations Dashboard
// Based on MLflow, Weights & Biases, and advanced drift detection research
import { useState, useEffect } from 'react';
import { 
  Brain, Activity, TrendingUp, TrendingDown, AlertTriangle, CheckCircle,
  Target, Zap, Clock, Database, Settings, Eye, BarChart3, LineChart,
  GitBranch, Package, Server, Gauge, Shield, Users, RefreshCw,
  ArrowUp, ArrowDown, Minus, Plus, Play, Pause, StopCircle,
  AlertCircle, Info, Award, Code2, Cpu, MemoryStick, HardDrive
} from 'lucide-react';

export default function MLOpsModelPerformanceCenter() {
  const [mlOpsData, setMlOpsData] = useState({
    currentTime: new Date().toISOString(),
    pipelineStatus: 'OPERATIONAL',
    totalModelsDeployed: 23,
    activeExperiments: 8,
    modelsInProduction: 15,
    models: [
      {
        name: 'content-classifier-v2.3',
        status: 'HEALTHY',
        accuracy: 94.7,
        latency: 89,
        throughput: 847,
        version: 'v2.3.1',
        framework: 'PyTorch',
        lastDeploy: '2h ago',
        driftStatus: 'STABLE',
        resourceUsage: {
          cpu: 68.4,
          memory: 72.1,
          gpu: 45.7
        },
        performanceMetrics: {
          precision: 94.2,
          recall: 93.8,
          f1Score: 94.0,
          auc: 0.97
        },
        predictions24h: 124567
      },
      {
        name: 'sentiment-analyzer-v1.8',
        status: 'WARNING',
        accuracy: 87.3,
        latency: 156,
        throughput: 523,
        version: 'v1.8.4',
        framework: 'TensorFlow',
        lastDeploy: '8h ago',
        driftStatus: 'DETECTED',
        resourceUsage: {
          cpu: 82.7,
          memory: 89.3,
          gpu: 91.2
        },
        performanceMetrics: {
          precision: 86.9,
          recall: 87.7,
          f1Score: 87.3,
          auc: 0.89
        },
        predictions24h: 89423
      },
      {
        name: 'recommendation-engine-v3.1',
        status: 'HEALTHY',
        accuracy: 91.8,
        latency: 234,
        throughput: 312,
        version: 'v3.1.0',
        framework: 'XGBoost',
        lastDeploy: '12h ago',
        driftStatus: 'STABLE',
        resourceUsage: {
          cpu: 54.2,
          memory: 67.8,
          gpu: 0
        },
        performanceMetrics: {
          precision: 91.5,
          recall: 92.1,
          f1Score: 91.8,
          auc: 0.94
        },
        predictions24h: 67834
      }
    ],
    experiments: [
      {
        name: 'content-classifier-v2.4',
        status: 'RUNNING',
        startedAt: '3h ago',
        progress: 67.3,
        researcher: 'aleksandra.ai',
        framework: 'PyTorch',
        currentMetrics: {
          trainAccuracy: 96.2,
          valAccuracy: 94.8,
          loss: 0.142
        },
        hyperparameters: {
          learningRate: 0.001,
          batchSize: 32,
          epochs: 50
        }
      },
      {
        name: 'multimodal-embeddings-v1.0',
        status: 'COMPLETED',
        startedAt: '8h ago',
        progress: 100,
        researcher: 'daniel.ferreira',
        framework: 'PyTorch',
        currentMetrics: {
          trainAccuracy: 92.4,
          valAccuracy: 90.7,
          loss: 0.198
        },
        hyperparameters: {
          learningRate: 0.0005,
          batchSize: 64,
          epochs: 30
        }
      }
    ],
    driftAnalysis: {
      overallDriftScore: 0.23,
      dataDriftDetected: 1,
      conceptDriftDetected: 0,
      featureDrift: [
        { feature: 'text_length', drift: 0.12, severity: 'LOW' },
        { feature: 'sentiment_polarity', drift: 0.45, severity: 'HIGH' },
        { feature: 'topic_distribution', drift: 0.08, severity: 'LOW' },
        { feature: 'user_engagement', drift: 0.34, severity: 'MEDIUM' }
      ]
    },
    modelRegistry: {
      totalVersions: 47,
      stagingModels: 5,
      productionModels: 15,
      archivedModels: 27,
      latestDeployment: {
        model: 'content-classifier-v2.3',
        environment: 'production',
        deployedAt: '2h ago',
        deployedBy: 'aleksandra.ai',
        rollbackAvailable: true
      }
    },
    systemMetrics: {
      inferenceVolume24h: 281824,
      averageLatency: 156,
      errorRate: 0.23,
      uptime: 99.97,
      scalingEvents: 12,
      autoRetrainingTriggers: 2
    },
    alerts: [
      {
        time: '04:56',
        severity: 'WARNING',
        model: 'sentiment-analyzer-v1.8',
        type: 'DRIFT_DETECTION',
        message: 'Data drift detected in sentiment_polarity feature (drift score: 0.45)',
        status: 'ACTIVE',
        recommendation: 'Consider retraining with recent data'
      },
      {
        time: '04:52',
        severity: 'INFO',
        model: 'content-classifier-v2.3',
        type: 'DEPLOYMENT',
        message: 'Model successfully deployed to production',
        status: 'RESOLVED',
        recommendation: 'Monitor performance metrics for 24h'
      },
      {
        time: '04:48',
        severity: 'CRITICAL',
        model: 'recommendation-engine-v3.0',
        type: 'PERFORMANCE',
        message: 'Accuracy dropped below threshold (85%)',
        status: 'RESOLVED',
        recommendation: 'Automatically triggered retraining pipeline'
      }
    ],
    realTimeMetrics: {
      timestamp: new Date().toISOString(),
      performance: [
        { metric: 'Overall Model Health', value: 92.4, unit: '%', trend: 'stable' },
        { metric: 'Average Accuracy', value: 91.3, unit: '%', trend: 'declining' },
        { metric: 'System Throughput', value: 1682, unit: 'req/s', trend: 'increasing' },
        { metric: 'MLOps Pipeline Health', value: 96.8, unit: '%', trend: 'stable' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMlOpsData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        systemMetrics: {
          ...prev.systemMetrics,
          inferenceVolume24h: Math.max(250000, Math.min(320000, prev.systemMetrics.inferenceVolume24h + Math.floor((Math.random() - 0.5) * 1000))),
          averageLatency: Math.max(80, Math.min(250, prev.systemMetrics.averageLatency + (Math.random() - 0.5) * 15))
        },
        realTimeMetrics: {
          timestamp: new Date().toISOString(),
          performance: prev.realTimeMetrics.performance.map(metric => ({
            ...metric,
            value: metric.metric === 'Average Accuracy' 
              ? Math.max(85, Math.min(98, metric.value + (Math.random() - 0.6) * 1.2))
              : Math.max(90, Math.min(100, metric.value + (Math.random() - 0.5) * 0.8))
          }))
        },
        models: prev.models.map(model => ({
          ...model,
          latency: Math.max(50, Math.min(300, model.latency + (Math.random() - 0.5) * 20)),
          throughput: Math.max(200, Math.min(1000, model.throughput + (Math.random() - 0.5) * 50))
        }))
      }));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'HEALTHY': case 'STABLE': case 'OPERATIONAL': case 'COMPLETED': case 'RESOLVED': return 'text-green-400';
      case 'WARNING': case 'DETECTED': case 'MEDIUM': case 'RUNNING': case 'ACTIVE': return 'text-yellow-400';
      case 'CRITICAL': case 'HIGH': case 'ERROR': return 'text-red-400';
      case 'LOW': case 'INFO': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'HEALTHY': case 'STABLE': case 'OPERATIONAL': case 'COMPLETED': case 'RESOLVED': return 'bg-green-400/20';
      case 'WARNING': case 'DETECTED': case 'MEDIUM': case 'RUNNING': case 'ACTIVE': return 'bg-yellow-400/20';
      case 'CRITICAL': case 'HIGH': case 'ERROR': return 'bg-red-400/20';
      case 'LOW': case 'INFO': return 'bg-blue-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'declining': return <TrendingDown className="w-4 h-4 text-red-400" />;
      case 'stable': return <Minus className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getFrameworkIcon = (framework) => {
    const iconClass = "w-4 h-4";
    switch (framework) {
      case 'PyTorch': return <Code2 className={`${iconClass} text-orange-400`} />;
      case 'TensorFlow': return <Code2 className={`${iconClass} text-blue-400`} />;
      case 'XGBoost': return <Code2 className={`${iconClass} text-green-400`} />;
      default: return <Code2 className={`${iconClass} text-gray-400`} />;
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* MLOps Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Brain className="w-8 h-8 text-purple-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">MLOps Model Performance Center</h2>
              <div className="text-sm text-gray-400">Machine Learning Operations • Real-time Model Monitoring</div>
            </div>
            <div className={`px-3 py-1 rounded text-sm font-semibold ${getStatusColor(mlOpsData.pipelineStatus)} ${getStatusBg(mlOpsData.pipelineStatus)}`}>
              {mlOpsData.pipelineStatus}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Models in Production</div>
            <div className="text-2xl font-mono text-purple-400 font-bold">
              {mlOpsData.modelsInProduction}
            </div>
            <div className="text-xs text-emerald-400">
              {formatNumber(mlOpsData.systemMetrics.inferenceVolume24h)} predictions/24h
            </div>
          </div>
        </div>
        
        {/* Real-Time MLOps Metrics */}
        <div className="grid grid-cols-4 gap-4">
          {mlOpsData.realTimeMetrics.performance.map((metric, index) => (
            <div key={index} className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">{metric.metric}</span>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="text-lg font-mono text-white">
                {metric.value.toFixed(1)}<span className="text-sm text-gray-400 ml-1">{metric.unit}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    metric.value >= 95 ? 'bg-green-400' : metric.value >= 80 ? 'bg-blue-400' : 'bg-yellow-400'
                  }`}
                  style={{ width: `${Math.min(100, metric.value)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Production Models Status */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Production Models</h3>
            <div className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-semibold rounded">
              {mlOpsData.models.filter(m => m.status === 'HEALTHY').length}/{mlOpsData.models.length} HEALTHY
            </div>
          </div>
          
          <div className="space-y-4">
            {mlOpsData.models.map((model, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getFrameworkIcon(model.framework)}
                    <h4 className="text-white font-medium">{model.name}</h4>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(model.status)} ${getStatusBg(model.status)}`}>
                      {model.status}
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(model.driftStatus)} ${getStatusBg(model.driftStatus)}`}>
                      {model.driftStatus}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Version {model.version}</div>
                    <div className="text-xs text-gray-400">Deployed {model.lastDeploy}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Accuracy</div>
                    <div className={`font-mono text-lg ${model.accuracy > 90 ? 'text-green-400' : model.accuracy > 80 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {model.accuracy.toFixed(1)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Latency</div>
                    <div className={`font-mono text-lg ${model.latency < 100 ? 'text-green-400' : model.latency < 200 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {model.latency}ms
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Throughput</div>
                    <div className="text-white font-mono text-lg">{model.throughput} req/s</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Predictions</div>
                    <div className="text-blue-400 font-mono text-lg">{formatNumber(model.predictions24h)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">F1-Score</div>
                    <div className="text-purple-400 font-mono text-lg">{model.performanceMetrics.f1Score.toFixed(1)}%</div>
                  </div>
                </div>

                {/* Resource Utilization */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">CPU</div>
                    <div className="w-full bg-slate-700 rounded-full h-2 mt-1">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          model.resourceUsage.cpu > 85 ? 'bg-red-400' : model.resourceUsage.cpu > 70 ? 'bg-yellow-400' : 'bg-green-400'
                        }`}
                        style={{ width: `${model.resourceUsage.cpu}%` }}
                      />
                    </div>
                    <div className="text-xs text-white mt-1">{model.resourceUsage.cpu.toFixed(1)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Memory</div>
                    <div className="w-full bg-slate-700 rounded-full h-2 mt-1">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          model.resourceUsage.memory > 85 ? 'bg-red-400' : model.resourceUsage.memory > 70 ? 'bg-yellow-400' : 'bg-green-400'
                        }`}
                        style={{ width: `${model.resourceUsage.memory}%` }}
                      />
                    </div>
                    <div className="text-xs text-white mt-1">{model.resourceUsage.memory.toFixed(1)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">GPU</div>
                    <div className="w-full bg-slate-700 rounded-full h-2 mt-1">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          model.resourceUsage.gpu > 85 ? 'bg-red-400' : model.resourceUsage.gpu > 70 ? 'bg-yellow-400' : 'bg-green-400'
                        }`}
                        style={{ width: `${model.resourceUsage.gpu}%` }}
                      />
                    </div>
                    <div className="text-xs text-white mt-1">{model.resourceUsage.gpu === 0 ? 'N/A' : `${model.resourceUsage.gpu.toFixed(1)}%`}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Drift Analysis */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Eye className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">Drift Detection</h3>
          </div>
          
          {/* Overall Drift Score */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30 mb-4">
            <div className="text-sm text-gray-400 mb-2">Overall Drift Score</div>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-slate-700 rounded-full h-3">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    mlOpsData.driftAnalysis.overallDriftScore > 0.5 ? 'bg-red-400' :
                    mlOpsData.driftAnalysis.overallDriftScore > 0.3 ? 'bg-yellow-400' : 'bg-green-400'
                  }`}
                  style={{ width: `${mlOpsData.driftAnalysis.overallDriftScore * 100}%` }}
                />
              </div>
              <span className={`text-sm font-mono ${
                mlOpsData.driftAnalysis.overallDriftScore > 0.5 ? 'text-red-400' :
                mlOpsData.driftAnalysis.overallDriftScore > 0.3 ? 'text-yellow-400' : 'text-green-400'
              }`}>
                {mlOpsData.driftAnalysis.overallDriftScore.toFixed(3)}
              </span>
            </div>
          </div>

          {/* Feature Drift */}
          <div className="mb-4">
            <div className="text-sm text-gray-400 mb-2">Feature Drift Analysis</div>
            <div className="space-y-2">
              {mlOpsData.driftAnalysis.featureDrift.map((feature, index) => (
                <div key={index} className="p-2 bg-slate-800/30 rounded border border-slate-600/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-300">{feature.feature}</span>
                    <div className={`px-1 py-0.5 text-xs font-semibold rounded ${getStatusColor(feature.severity)} ${getStatusBg(feature.severity)}`}>
                      {feature.severity}
                    </div>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1.5">
                    <div 
                      className={`h-full rounded-full ${
                        feature.drift > 0.4 ? 'bg-red-400' :
                        feature.drift > 0.2 ? 'bg-yellow-400' : 'bg-green-400'
                      }`}
                      style={{ width: `${feature.drift * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Drift: {feature.drift.toFixed(3)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Drift Summary */}
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-red-400/10 rounded border border-red-400/30">
              <div className="text-red-400 font-mono text-lg">{mlOpsData.driftAnalysis.dataDriftDetected}</div>
              <div className="text-xs text-gray-400">Data Drift</div>
            </div>
            <div className="text-center p-2 bg-green-400/10 rounded border border-green-400/30">
              <div className="text-green-400 font-mono text-lg">{mlOpsData.driftAnalysis.conceptDriftDetected}</div>
              <div className="text-xs text-gray-400">Concept Drift</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Experiments */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <GitBranch className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Active Experiments</h3>
          </div>
          
          <div className="space-y-3">
            {mlOpsData.experiments.map((experiment, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getFrameworkIcon(experiment.framework)}
                    <span className="text-white font-medium text-sm">{experiment.name}</span>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(experiment.status)} ${getStatusBg(experiment.status)}`}>
                    {experiment.status}
                  </div>
                </div>
                
                {experiment.status === 'RUNNING' && (
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{experiment.progress.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-1.5">
                      <div 
                        className="bg-blue-400 h-full rounded-full transition-all duration-300"
                        style={{ width: `${experiment.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Train Acc:</span>
                    <span className="text-green-400 ml-1">{experiment.currentMetrics.trainAccuracy}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Val Acc:</span>
                    <span className="text-blue-400 ml-1">{experiment.currentMetrics.valAccuracy}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Loss:</span>
                    <span className="text-purple-400 ml-1">{experiment.currentMetrics.loss}</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mt-1">
                  By {experiment.researcher} • Started {experiment.startedAt}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MLOps Alerts & Events */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">MLOps Alerts</h3>
          </div>
          
          <div className="space-y-3">
            {mlOpsData.alerts.map((alert, index) => (
              <div key={index} className={`p-3 rounded border transition-all ${
                alert.severity === 'CRITICAL' ? 'border-red-400/50 bg-red-400/10' :
                alert.severity === 'WARNING' ? 'border-yellow-400/50 bg-yellow-400/10' :
                'border-blue-400/50 bg-blue-400/10'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400 font-mono">{alert.time}</span>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${
                      alert.severity === 'CRITICAL' ? 'text-red-400 bg-red-400/20' :
                      alert.severity === 'WARNING' ? 'text-yellow-400 bg-yellow-400/20' :
                      'text-blue-400 bg-blue-400/20'
                    }`}>
                      {alert.severity}
                    </div>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(alert.status)} ${getStatusBg(alert.status)}`}>
                    {alert.status}
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-2">{alert.message}</div>
                <div className="text-xs text-blue-400 mb-1">{alert.recommendation}</div>
                <div className="text-xs text-gray-400">{alert.model} • {alert.type}</div>
              </div>
            ))}
          </div>

          {/* System Performance Summary */}
          <div className="mt-4 bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">System Performance (24h)</div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-gray-400">Uptime:</span>
                <span className="text-green-400 ml-1">{mlOpsData.systemMetrics.uptime}%</span>
              </div>
              <div>
                <span className="text-gray-400">Error Rate:</span>
                <span className="text-blue-400 ml-1">{mlOpsData.systemMetrics.errorRate}%</span>
              </div>
              <div>
                <span className="text-gray-400">Scaling Events:</span>
                <span className="text-purple-400 ml-1">{mlOpsData.systemMetrics.scalingEvents}</span>
              </div>
              <div>
                <span className="text-gray-400">Auto Retraining:</span>
                <span className="text-yellow-400 ml-1">{mlOpsData.systemMetrics.autoRetrainingTriggers}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}