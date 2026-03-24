// Artificial Intelligence Technology & MLOps Intelligence Center - AI & ML Operations Analytics
import { useState, useEffect } from 'react';
import { Brain, Cpu, BarChart3, Activity, TrendingUp, Zap, Target, Monitor, Globe, Settings, Eye, Code } from 'lucide-react';

export default function ArtificialIntelligenceTechnologyMLOpsIntelligenceCenter() {
  const [aiData, setAiData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    aiOverview: {
      aiPlatforms: 123456,
      mlModels: 4567890,
      trainingJobs: 789012,
      inferenceCalls: 567890123456,
      gpuClusters: 45678,
      datasetSize: 890123,
      modelAccuracy: 94.7,
      trainingTime: 45.6,
      inferenceLatency: 125.8,
      modelDrift: 2.3,
      dataQuality: 96.4,
      modelPerformance: 89.2,
      computeUtilization: 87.8,
      costOptimization: 78.9,
      automlAdoption: 65.4,
      edgeDeployment: 56.7,
      ethicalAiCompliance: 91.3,
      explainability: 73.2,
      fairnessScore: 88.7,
      privacyPreservation: 85.9
    },
    aiPlatforms: [
      {
        platformName: 'OpenAI Platform',
        platformId: 'OPENAI-PLATFORM-001',
        location: 'Global Cloud Infrastructure',
        platformType: 'LARGE LANGUAGE MODELS',
        status: 'OPERATIONAL',
        modelsDeployed: 25,
        apiCalls: 125000000000,
        activeUsers: 2500000,
        tokenProcessed: 890123456789,
        modelTypes: 'GPT-4, DALL-E, Whisper',
        capabilities: 'Text, Image, Audio, Code',
        maxContextLength: 128000,
        trainingDataSize: '45TB',
        parametersCount: '1.76T',
        computeInfrastructure: 'Azure',
        safetyMeasures: 'Constitutional AI',
        rateLimiting: 'Tier-based',
        fineTuning: 'Available',
        apiLatency: 2.5,
        uptime: 99.95,
        costPerToken: 0.00002,
        complianceStandards: 'SOC 2, GDPR',
        ethicalGuidelines: 'AI Safety',
        researchPartnerships: 'Leading Universities'
      },
      {
        platformName: 'Google AI Platform',
        platformId: 'GOOGLE-AI-PLATFORM-002',
        location: 'Multi-Region GCP',
        platformType: 'COMPREHENSIVE ML PLATFORM',
        status: 'OPERATIONAL',
        modelsDeployed: 450000,
        trainingJobs: 12500000,
        predictions: 890000000000,
        automlProjects: 125000,
        vertexAiUsers: 890000,
        tensorflowModels: 2500000,
        kubeflowPipelines: 89000,
        mlopsWorkflows: 156000,
        datasetStorage: '125PB',
        computeOptions: 'CPU, GPU, TPU',
        pretrainedModels: 850,
        customModels: 2340000,
        batchPredictions: 45000000,
        realTimePredictions: 125000000,
        modelMonitoring: 'Continuous',
        explainableAi: 'Integrated',
        fairnessTools: 'What-If Tool',
        privacyFeatures: 'Differential Privacy'
      },
      {
        platformName: 'AWS SageMaker',
        platformId: 'AWS-SAGEMAKER-003',
        location: 'Global AWS Regions',
        platformType: 'END-TO-END ML PLATFORM',
        status: 'OPERATIONAL',
        notebookInstances: 125000,
        trainingJobs: 8900000,
        endpointsDeployed: 450000,
        dataWrangling: 2500000,
        featureStore: 89000,
        modelRegistry: 156000,
        pipelineExecutions: 890000,
        autopilotJobs: 45000,
        groundTruthLabeling: 125000,
        edgeDeployments: 67000,
        multiModelEndpoints: 23000,
        batchTransform: 89000,
        realTimeInference: 156000000,
        modelMonitoring: 'Model Monitor',
        costOptimization: 'Spot Training',
        dataPrivacy: 'VPC, Encryption',
        compliance: 'HIPAA, PCI DSS',
        integrations: 'AWS Services'
      },
      {
        platformName: 'Microsoft Azure ML',
        platformId: 'AZURE-ML-004',
        location: 'Azure Global Network',
        platformType: 'ENTERPRISE ML PLATFORM',
        status: 'OPERATIONAL',
        workspaces: 89000,
        computeClusters: 23000,
        experiments: 4500000,
        models: 890000,
        datasets: 156000,
        pipelines: 67000,
        endpoints: 234000,
        automlRuns: 89000,
        designerPipelines: 23000,
        notebookSessions: 156000,
        dataStores: 45000,
        environments: 12000,
        modelInterpretability: 'Integrated',
        responsibleAi: 'Dashboard',
        mlopsIntegration: 'DevOps',
        hybridDeployment: 'Arc-enabled',
        costManagement: 'Cost Analysis',
        governance: 'Policy-driven'
      }
    ],
    mlModels: [
      {
        modelType: 'Large Language Models',
        modelId: 'LLM-MODELS-001',
        totalModels: 1250,
        activeDeployments: 890,
        averageParameters: '175B',
        trainingCost: '$4.6M',
        inferenceCost: '$0.002/1K tokens',
        applications: 'Chatbots, Content, Code',
        architectures: 'Transformer, GPT, BERT',
        trainingData: '570GB Text',
        contextLength: '32K-128K tokens',
        multimodal: 'Text, Code, Images',
        fineTuningTime: '2-7 days',
        accuracyBenchmark: 'MMLU: 86.4%',
        safetyRating: 'A',
        biasAssessment: 'Continuous',
        carbonFootprint: '284 tonnes CO2',
        computeRequirement: '1024 H100 GPUs',
        memoryRequirement: '80GB per GPU',
        inferenceOptimization: 'Quantization, Pruning'
      },
      {
        modelType: 'Computer Vision',
        modelId: 'CV-MODELS-002',
        totalModels: 45000,
        activeDeployments: 34000,
        averageParameters: '86M',
        trainingCost: '$12K',
        inferenceCost: '$0.001/image',
        applications: 'Detection, Classification, Segmentation',
        architectures: 'CNN, Vision Transformer',
        trainingData: '14M Images',
        inputResolution: '224x224 to 1024x1024',
        datasets: 'ImageNet, COCO, Open Images',
        trainingTime: '3-14 days',
        accuracyBenchmark: 'ImageNet: 88.5%',
        realTimeCapable: '60+ FPS',
        edgeDeployment: 'Mobile, IoT',
        hardwareOptimization: 'TensorRT, CoreML',
        memoryFootprint: '50-500MB',
        powerConsumption: '2-15W'
      },
      {
        modelType: 'Reinforcement Learning',
        modelId: 'RL-MODELS-003',
        totalModels: 8900,
        activeDeployments: 5600,
        averageParameters: '12M',
        trainingCost: '$89K',
        inferenceCost: '$0.01/action',
        applications: 'Games, Robotics, Trading',
        architectures: 'DQN, PPO, A3C',
        environmentTypes: 'Simulated, Real-world',
        trainingEpisodes: '1M-100M',
        rewardEngineering: 'Manual, Learned',
        trainingTime: '7-30 days',
        performanceBenchmark: 'Atari: Human-level',
        safetyConstraints: 'Constrained RL',
        explorationStrategy: 'Epsilon-greedy, UCB',
        transferLearning: 'Cross-domain',
        simulationFidelity: 'High',
        realWorldTesting: 'Gradual deployment'
      }
    ],
    mlopsMetrics: [
      {
        category: 'Model Performance',
        categoryId: 'MODEL-PERF-001',
        modelsInProduction: 234000,
        averageAccuracy: 94.7,
        precisionScore: 92.8,
        recallScore: 91.6,
        f1Score: 92.1,
        auc: 96.3,
        modelDriftDetected: 2890,
        performanceDegradation: 3.4,
        retrainingRequired: 1560,
        automaticRetraining: 76.8,
        abTestingActive: 45000,
        championChallengerTests: 8900,
        modelVersions: 4.7,
        rollbackEvents: 890,
        canaryDeployments: 12000,
        trafficSplitting: 'A/B Testing',
        performanceMonitoring: 'Real-time',
        alertThresholds: 'Custom',
        businessImpactTracking: 'Revenue, Cost'
      },
      {
        category: 'Infrastructure Utilization',
        categoryId: 'INFRA-UTIL-002',
        gpuUtilization: 87.8,
        cpuUtilization: 76.4,
        memoryUtilization: 82.3,
        storageUtilization: 68.9,
        networkBandwidth: 91.2,
        computeCost: '$12.5M/month',
        spotInstanceSavings: 67.8,
        autoScaling: 'Enabled',
        loadBalancing: 'Intelligent',
        queueManagement: 'Priority-based',
        resourceOptimization: 'AI-driven',
        costPrediction: 'ML-based',
        carbonFootprint: '1250 tonnes/month',
        sustainabilityScore: 78.9,
        greenComputing: 'Renewable energy',
        efficientArchitectures: 'Optimized',
        edgeComputing: '34% workloads',
        federatedLearning: '12% models'
      },
      {
        category: 'Data Pipeline Health',
        categoryId: 'DATA-PIPELINE-003',
        datasetsProcessed: 125000,
        dataQualityScore: 96.4,
        pipelineUptime: 99.2,
        dataFreshness: 15.7,
        schemaValidation: 98.9,
        dataLineage: 'Complete',
        dataCatalog: 'Maintained',
        dataGovernance: 'Enforced',
        privacyCompliance: 'GDPR, CCPA',
        dataAnonymization: 89.4,
        featureStoreUtilization: 78.6,
        realTimeStreaming: 45.2,
        batchProcessing: 89.7,
        dataVersioning: 'Git-based',
        experimentTracking: 'MLflow',
        artifactManagement: 'Centralized',
        metadataManagement: 'Automated',
        dataMonitoring: 'Continuous'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        trainingJobsStarted: 2500,
        inferenceCalls: 125000000,
        modelsDeployed: 450,
        dataProcessed: 12.5,
        computeHours: 890000,
        errors: 234,
        latency: 125.8,
        throughput: 45000
      },
      {
        period: 'Last 24 Hours',
        trainingJobsStarted: 58900,
        inferenceCalls: 2890000000,
        modelsDeployed: 8900,
        dataProcessed: 289.0,
        computeHours: 21400000,
        errors: 5670,
        latency: 128.7,
        throughput: 42000
      },
      {
        period: 'Last 7 Days',
        trainingJobsStarted: 412000,
        inferenceCalls: 19850000000,
        modelsDeployed: 56800,
        dataProcessed: 1956.0,
        computeHours: 149800000,
        errors: 39650,
        latency: 132.4,
        throughput: 39500
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAiData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        aiOverview: {
          ...prev.aiOverview,
          modelAccuracy: Math.max(90.0, Math.min(99.0, prev.aiOverview.modelAccuracy + (Math.random() - 0.5) * 1.0)),
          inferenceLatency: Math.max(100.0, Math.min(200.0, prev.aiOverview.inferenceLatency + (Math.random() - 0.5) * 10.0))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'TRAINING': return 'text-blue-400 bg-blue-400/20';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
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
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatLatency = (ms) => `${ms.toFixed(1)}ms`;
  const formatCurrency = (amount) => `$${amount}M`;
  const formatGB = (gb) => `${gb.toFixed(1)}GB`;

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Artificial Intelligence Technology & MLOps Intelligence Center</h1>
              <p className="text-slate-300">AI & ML operations analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-slate-400">{aiData.currentTime}</div>
            <div className="text-slate-300">AI Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* AI Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                Models
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(aiData.aiOverview.mlModels)}</div>
            <div className="text-purple-300 text-sm">{formatNumber(aiData.aiOverview.aiPlatforms)} Platforms</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-blue-400 mr-2" />
                Inference
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(aiData.aiOverview.inferenceCalls)}</div>
            <div className="text-blue-300 text-sm">Calls/day</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Accuracy
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(aiData.aiOverview.modelAccuracy)}</div>
            <div className="text-green-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-yellow-400 mr-2" />
                Latency
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatLatency(aiData.aiOverview.inferenceLatency)}</div>
            <div className="text-yellow-300 text-sm">Response</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Cpu className="w-5 h-5 text-cyan-400 mr-2" />
                Compute
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(aiData.aiOverview.computeUtilization)}</div>
            <div className="text-cyan-300 text-sm">Utilization</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-orange-400 mr-2" />
                Ethics
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(aiData.aiOverview.ethicalAiCompliance)}</div>
            <div className="text-orange-300 text-sm">Compliance</div>
          </div>
        </div>

        {/* AI Platforms & ML Models */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-purple-400 mr-2" />
              AI Platforms
            </h3>
            <div className="space-y-4">
              {aiData.aiPlatforms.map((platform, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{platform.platformName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(platform.status)}`}>
                        {platform.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{platform.location}</div>
                    <div className="text-blue-400">{platform.platformType}</div>
                    <div className="text-green-400">{platform.platformId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">
                      {platform.modelsDeployed && `Models: ${formatNumber(platform.modelsDeployed)}`}
                      {platform.notebookInstances && `Notebooks: ${formatNumber(platform.notebookInstances)}`}
                      {platform.workspaces && `Workspaces: ${formatNumber(platform.workspaces)}`}
                    </div>
                    <div className="text-purple-400">
                      {platform.apiCalls && `API Calls: ${formatNumber(platform.apiCalls)}`}
                      {platform.trainingJobs && `Training: ${formatNumber(platform.trainingJobs)}`}
                      {platform.experiments && `Experiments: ${formatNumber(platform.experiments)}`}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Uptime</span>
                      <span>
                        {platform.uptime && formatPercentage(platform.uptime)}
                        {!platform.uptime && '99.9%'}
                      </span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-purple-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${platform.uptime || 99.9}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {platform.activeUsers && `Users: ${formatNumber(platform.activeUsers)}`}
                      {platform.vertexAiUsers && `Users: ${formatNumber(platform.vertexAiUsers)}`}
                      {platform.computeClusters && `Clusters: ${formatNumber(platform.computeClusters)}`}
                    </div>
                    <div className="text-indigo-400">
                      {platform.modelTypes && `Types: ${platform.modelTypes}`}
                      {platform.pretrainedModels && `Pretrained: ${formatNumber(platform.pretrainedModels)}`}
                      {platform.automlJobs && `AutoML: ${formatNumber(platform.automlJobs)}`}
                    </div>
                    <div className="text-cyan-400">
                      {platform.apiLatency && `Latency: ${formatLatency(platform.apiLatency * 1000)}`}
                      {platform.parametersCount && `Parameters: ${platform.parametersCount}`}
                      {platform.datasetStorage && `Storage: ${platform.datasetStorage}`}
                    </div>
                    <div className="text-green-400">
                      {platform.safetyMeasures && `Safety: ${platform.safetyMeasures}`}
                      {platform.explainableAi && `Explainable: ${platform.explainableAi}`}
                      {platform.responsibleAi && `Responsible: ${platform.responsibleAi}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Code className="w-5 h-5 text-pink-400 mr-2" />
              ML Model Types
            </h3>
            <div className="space-y-4">
              {aiData.mlModels.map((model, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{model.modelType}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Total: {formatNumber(model.totalModels)}</div>
                    <div className="text-blue-400">Active: {formatNumber(model.activeDeployments)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Deployment Rate</span>
                      <span>{formatPercentage((model.activeDeployments / model.totalModels) * 100)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-pink-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${(model.activeDeployments / model.totalModels) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      Params: {model.averageParameters}
                    </div>
                    <div className="text-indigo-400">
                      Apps: {model.applications}
                    </div>
                    <div className="text-cyan-400">
                      Architecture: {model.architectures}
                    </div>
                    <div className="text-green-400">
                      Training: {model.trainingCost}
                    </div>
                    <div className="text-blue-400">
                      Inference: {model.inferenceCost}
                    </div>
                    <div className="text-orange-400">
                      {model.accuracyBenchmark && `Accuracy: ${model.accuracyBenchmark}`}
                      {model.performanceBenchmark && `Performance: ${model.performanceBenchmark}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MLOps Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Settings className="w-5 h-5 text-cyan-400 mr-2" />
            MLOps Operational Metrics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {aiData.mlopsMetrics.map((category, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{category.category}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">
                    {category.modelsInProduction && `Production: ${formatNumber(category.modelsInProduction)}`}
                    {category.gpuUtilization && `GPU: ${formatPercentage(category.gpuUtilization)}`}
                    {category.datasetsProcessed && `Datasets: ${formatNumber(category.datasetsProcessed)}`}
                  </div>
                  <div className="text-blue-400">
                    {category.averageAccuracy && `Accuracy: ${formatPercentage(category.averageAccuracy)}`}
                    {category.cpuUtilization && `CPU: ${formatPercentage(category.cpuUtilization)}`}
                    {category.dataQualityScore && `Quality: ${formatPercentage(category.dataQualityScore)}`}
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Performance Score</span>
                    <span>
                      {category.f1Score && formatPercentage(category.f1Score)}
                      {category.computeCost && category.computeCost}
                      {category.pipelineUptime && formatPercentage(category.pipelineUptime)}
                    </span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-1">
                    <div 
                      className="bg-cyan-400 h-1 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${
                          category.f1Score || 
                          (category.gpuUtilization && category.gpuUtilization) ||
                          (category.pipelineUptime && category.pipelineUptime) ||
                          85
                        }%` 
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-slate-300">
                    {category.modelDriftDetected && `Drift: ${formatNumber(category.modelDriftDetected)}`}
                    {category.memoryUtilization && `Memory: ${formatPercentage(category.memoryUtilization)}`}
                    {category.dataFreshness && `Freshness: ${formatLatency(category.dataFreshness * 1000)}`}
                  </div>
                  <div className="text-indigo-400">
                    {category.automaticRetraining && `Auto Retrain: ${formatPercentage(category.automaticRetraining)}`}
                    {category.autoScaling && `Scaling: ${category.autoScaling}`}
                    {category.dataLineage && `Lineage: ${category.dataLineage}`}
                  </div>
                  <div className="text-cyan-400">
                    {category.abTestingActive && `A/B Tests: ${formatNumber(category.abTestingActive)}`}
                    {category.spotInstanceSavings && `Savings: ${formatPercentage(category.spotInstanceSavings)}`}
                    {category.realTimeStreaming && `Real-time: ${formatPercentage(category.realTimeStreaming)}`}
                  </div>
                  <div className="text-green-400">
                    {category.canaryDeployments && `Canary: ${formatNumber(category.canaryDeployments)}`}
                    {category.sustainabilityScore && `Carbon: ${formatPercentage(category.sustainabilityScore)}`}
                    {category.privacyCompliance && `Privacy: ${category.privacyCompliance}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-slate-400 mr-2" />
            AI Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {aiData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Training: {formatNumber(metrics.trainingJobsStarted)}</div>
                  <div className="text-green-400">Inference: {formatNumber(metrics.inferenceCalls)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Deployed: {formatNumber(metrics.modelsDeployed)}</div>
                  <div className="text-yellow-400">Data: {formatGB(metrics.dataProcessed)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Compute: {formatNumber(metrics.computeHours)}h</div>
                  <div className="text-orange-400">Latency: {formatLatency(metrics.latency)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Throughput: {formatNumber(metrics.throughput)}/s</div>
                  <div className="text-pink-400">Errors: {formatNumber(metrics.errors)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}