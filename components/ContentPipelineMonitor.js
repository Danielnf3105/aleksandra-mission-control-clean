// Content Pipeline Monitor - Real-time content processing and workflow tracking
import { useState, useEffect } from 'react';
import { PlayCircle, FileText, Video, Image, Globe, Clock, CheckCircle, AlertCircle, BarChart3, TrendingUp, Cpu, Database, Zap } from 'lucide-react';

export default function ContentPipelineMonitor() {
  const [pipelineData, setPipelineData] = useState({
    pipelineStatus: {
      totalJobs: 247,
      activeJobs: 12,
      completedJobs: 178,
      failedJobs: 3,
      queuedJobs: 54,
      processingRate: 23.4,
      successRate: 98.3,
      averageProcessingTime: '2m 34s'
    },
    activePipelines: [
      {
        id: 'pipeline-001',
        name: 'Instagram Video Processing',
        type: 'video',
        status: 'processing',
        progress: 67,
        currentStep: 'Transcription (Assembly AI)',
        totalSteps: 5,
        startTime: '2026-03-12T15:18:23Z',
        estimatedCompletion: '2026-03-12T15:35:00Z',
        inputSize: '24.7MB',
        outputSize: '18.2MB',
        quality: 'High',
        priority: 'normal'
      },
      {
        id: 'pipeline-002', 
        name: 'LinkedIn Carousel Generation',
        type: 'image',
        status: 'processing',
        progress: 89,
        currentStep: 'Final Rendering',
        totalSteps: 4,
        startTime: '2026-03-12T15:22:15Z',
        estimatedCompletion: '2026-03-12T15:33:45Z',
        inputSize: '1.2MB',
        outputSize: '3.8MB',
        quality: 'Premium',
        priority: 'high'
      },
      {
        id: 'pipeline-003',
        name: 'Spec Ad Creation',
        type: 'video',
        status: 'queued',
        progress: 0,
        currentStep: 'Waiting for GPU',
        totalSteps: 7,
        startTime: null,
        estimatedCompletion: '2026-03-12T16:15:00Z',
        inputSize: '45.1MB',
        outputSize: 'TBD',
        quality: 'Ultra',
        priority: 'high'
      },
      {
        id: 'pipeline-004',
        name: 'Content Transcription Batch',
        type: 'text',
        status: 'processing',
        progress: 34,
        currentStep: 'Audio Analysis',
        totalSteps: 3,
        startTime: '2026-03-12T15:25:07Z',
        estimatedCompletion: '2026-03-12T15:45:30Z',
        inputSize: '127.4MB',
        outputSize: '2.1MB',
        quality: 'Standard',
        priority: 'normal'
      },
      {
        id: 'pipeline-005',
        name: 'Instagram Story Assets',
        type: 'image',
        status: 'completed',
        progress: 100,
        currentStep: 'Complete',
        totalSteps: 3,
        startTime: '2026-03-12T15:10:12Z',
        estimatedCompletion: '2026-03-12T15:28:00Z',
        inputSize: '8.6MB',
        outputSize: '12.3MB',
        quality: 'High',
        priority: 'normal'
      },
      {
        id: 'pipeline-006',
        name: 'Outreach Video Compilation',
        type: 'video',
        status: 'failed',
        progress: 23,
        currentStep: 'Error: GPU Timeout',
        totalSteps: 6,
        startTime: '2026-03-12T15:12:45Z',
        estimatedCompletion: null,
        inputSize: '89.3MB',
        outputSize: '0MB',
        quality: 'High',
        priority: 'low'
      }
    ],
    resourceUtilization: {
      gpuUsage: 78.3,
      cpuUsage: 45.2,
      memoryUsage: 67.8,
      storageUsage: 23.4,
      networkBandwidth: 156.7,
      queueCapacity: 85.6
    },
    processingStats: [
      { time: '15:15', video: 8, image: 12, text: 15, audio: 6 },
      { time: '15:20', video: 6, image: 18, text: 12, audio: 9 },
      { time: '15:25', video: 11, image: 15, text: 8, audio: 4 },
      { time: '15:30', video: 9, image: 21, text: 18, audio: 7 },
      { time: '15:32', video: 12, image: 16, text: 14, audio: 5 }
    ],
    contentTypes: [
      {
        type: 'Video Processing',
        count: 89,
        avgTime: '4m 12s',
        successRate: 96.7,
        costPerUnit: '$0.23',
        trending: 'up'
      },
      {
        type: 'Image Generation',
        count: 156,
        avgTime: '1m 45s', 
        successRate: 99.1,
        costPerUnit: '$0.08',
        trending: 'up'
      },
      {
        type: 'Text Transcription',
        count: 234,
        avgTime: '2m 18s',
        successRate: 98.9,
        costPerUnit: '$0.04',
        trending: 'stable'
      },
      {
        type: 'Audio Processing',
        count: 67,
        avgTime: '3m 33s',
        successRate: 94.2,
        costPerUnit: '$0.15',
        trending: 'down'
      }
    ],
    qualityMetrics: {
      outputQuality: 96.4,
      processingAccuracy: 98.7,
      errorRate: 1.7,
      retryRate: 3.2,
      compressionRatio: 23.8,
      formatCompliance: 99.5
    },
    workflowSteps: [
      {
        step: 'Content Ingestion',
        status: 'healthy',
        throughput: 34.2,
        latency: '0.8s',
        errorRate: 0.1
      },
      {
        step: 'Quality Analysis',
        status: 'healthy',
        throughput: 31.7,
        latency: '1.2s',
        errorRate: 0.3
      },
      {
        step: 'Processing Engine',
        status: 'warning',
        throughput: 28.9,
        latency: '2.4s',
        errorRate: 1.2
      },
      {
        step: 'Post-Processing',
        status: 'healthy',
        throughput: 32.1,
        latency: '1.1s',
        errorRate: 0.2
      },
      {
        step: 'Output Delivery',
        status: 'healthy',
        throughput: 33.8,
        latency: '0.6s',
        errorRate: 0.1
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPipelineData(prev => {
        const currentTime = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        const newStatsPoint = {
          time: currentTime,
          video: Math.max(0, Math.floor(Math.random() * 15) + 5),
          image: Math.max(0, Math.floor(Math.random() * 20) + 10),
          text: Math.max(0, Math.floor(Math.random() * 15) + 8),
          audio: Math.max(0, Math.floor(Math.random() * 10) + 3)
        };

        return {
          ...prev,
          processingStats: [...prev.processingStats.slice(-4), newStatsPoint],
          pipelineStatus: {
            ...prev.pipelineStatus,
            totalJobs: prev.pipelineStatus.totalJobs + (Math.random() > 0.8 ? 1 : 0),
            activeJobs: Math.max(8, Math.min(18, prev.pipelineStatus.activeJobs + (Math.random() - 0.5) * 3)),
            processingRate: Math.max(15, Math.min(35, prev.pipelineStatus.processingRate + (Math.random() - 0.5) * 4))
          },
          activePipelines: prev.activePipelines.map(pipeline => 
            pipeline.status === 'processing' ? {
              ...pipeline,
              progress: Math.min(100, pipeline.progress + Math.random() * 5)
            } : pipeline
          ),
          resourceUtilization: {
            ...prev.resourceUtilization,
            gpuUsage: Math.max(50, Math.min(95, prev.resourceUtilization.gpuUsage + (Math.random() - 0.5) * 8)),
            cpuUsage: Math.max(30, Math.min(80, prev.resourceUtilization.cpuUsage + (Math.random() - 0.5) * 6))
          }
        };
      });
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'processing': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'completed': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'failed': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'queued': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'healthy': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4 text-purple-400" />;
      case 'image': return <Image className="w-4 h-4 text-cyan-400" />;
      case 'text': return <FileText className="w-4 h-4 text-blue-400" />;
      case 'audio': return <PlayCircle className="w-4 h-4 text-green-400" />;
      default: return <Globe className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'normal': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'low': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const formatDuration = (startTime) => {
    if (!startTime) return 'N/A';
    const now = new Date();
    const start = new Date(startTime);
    const diffMs = now - start;
    const diffMins = Math.floor(diffMs / 60000);
    const diffSecs = Math.floor((diffMs % 60000) / 1000);
    return `${diffMins}m ${diffSecs}s`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <BarChart3 className="w-8 h-8 text-cyan-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Content Pipeline Monitor</h2>
            <p className="text-gray-400">Real-time content processing and workflow tracking</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">{pipelineData.pipelineStatus.processingRate.toFixed(1)}</div>
            <div className="text-xs text-gray-400">Jobs/Hour</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-400">{pipelineData.pipelineStatus.activeJobs}</div>
            <div className="text-xs text-gray-400">Active Jobs</div>
          </div>
        </div>
      </div>

      {/* Pipeline Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-white">{pipelineData.pipelineStatus.totalJobs}</div>
          <div className="text-xs text-gray-400">Total Jobs</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{pipelineData.pipelineStatus.activeJobs}</div>
          <div className="text-xs text-gray-400">Active</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{pipelineData.pipelineStatus.completedJobs}</div>
          <div className="text-xs text-gray-400">Completed</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-red-400">{pipelineData.pipelineStatus.failedJobs}</div>
          <div className="text-xs text-gray-400">Failed</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{pipelineData.pipelineStatus.queuedJobs}</div>
          <div className="text-xs text-gray-400">Queued</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{pipelineData.pipelineStatus.processingRate.toFixed(1)}</div>
          <div className="text-xs text-gray-400">Rate/Hour</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{pipelineData.pipelineStatus.successRate.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Success Rate</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-orange-400">{pipelineData.pipelineStatus.averageProcessingTime}</div>
          <div className="text-xs text-gray-400">Avg Time</div>
        </div>
      </div>

      {/* Active Pipelines */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Cpu className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-bold text-white">Active Pipelines</h3>
          <div className="ml-auto flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="text-xs text-blue-400">PROCESSING</div>
          </div>
        </div>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {pipelineData.activePipelines.map((pipeline, index) => (
            <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(pipeline.type)}
                  <div className="text-white font-medium">{pipeline.name}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(pipeline.status)}`}>
                    {pipeline.status.toUpperCase()}
                  </div>
                  <div className={`text-xs px-2 py-1 rounded border ${getPriorityColor(pipeline.priority)}`}>
                    {pipeline.priority.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-xs">
                <div>
                  <div className="text-gray-400">Progress</div>
                  <div className="text-cyan-400 font-medium">{pipeline.progress}%</div>
                </div>
                <div>
                  <div className="text-gray-400">Step</div>
                  <div className="text-blue-400 font-medium">{pipeline.currentStep}</div>
                </div>
                <div>
                  <div className="text-gray-400">Duration</div>
                  <div className="text-yellow-400 font-medium">{formatDuration(pipeline.startTime)}</div>
                </div>
                <div>
                  <div className="text-gray-400">Quality</div>
                  <div className="text-purple-400 font-medium">{pipeline.quality}</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Input: {pipeline.inputSize}</span>
                  <span className="text-gray-400">Output: {pipeline.outputSize}</span>
                  <span className="text-gray-400">Steps: {pipeline.totalSteps}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${pipeline.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resource Utilization */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Resource Utilization</h3>
          </div>
          <div className="space-y-4">
            {Object.entries(pipelineData.resourceUtilization).map(([resource, usage], index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm text-gray-300 capitalize">{resource.replace(/([A-Z])/g, ' $1').trim()}</div>
                  <div className="text-sm font-bold text-white">{usage.toFixed(1)}%</div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      usage > 80 ? 'bg-gradient-to-r from-red-400 to-red-500' :
                      usage > 60 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                      'bg-gradient-to-r from-green-400 to-green-500'
                    }`}
                    style={{ width: `${usage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Processing Statistics */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Processing Trends</h3>
          </div>
          
          {/* Trend Chart */}
          <div className="h-32 flex items-end space-x-2 mb-4">
            {pipelineData.processingStats.map((stat, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col items-center space-y-1">
                  <div 
                    className="w-4 bg-gradient-to-t from-purple-400 to-purple-500 rounded-sm"
                    style={{ height: `${stat.video * 3}px` }}
                    title={`Video: ${stat.video}`}
                  ></div>
                  <div 
                    className="w-4 bg-gradient-to-t from-cyan-400 to-cyan-500 rounded-sm"
                    style={{ height: `${stat.image * 2}px` }}
                    title={`Image: ${stat.image}`}
                  ></div>
                  <div 
                    className="w-4 bg-gradient-to-t from-blue-400 to-blue-500 rounded-sm"
                    style={{ height: `${stat.text * 2}px` }}
                    title={`Text: ${stat.text}`}
                  ></div>
                  <div 
                    className="w-4 bg-gradient-to-t from-green-400 to-green-500 rounded-sm"
                    style={{ height: `${stat.audio * 4}px` }}
                    title={`Audio: ${stat.audio}`}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 mt-2">{stat.time}</div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded"></div>
              <span className="text-gray-400">Video</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded"></div>
              <span className="text-gray-400">Image</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded"></div>
              <span className="text-gray-400">Text</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded"></div>
              <span className="text-gray-400">Audio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Types & Workflow Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Types */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Database className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Content Types</h3>
          </div>
          <div className="space-y-3">
            {pipelineData.contentTypes.map((content, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{content.type}</div>
                  <div className={`text-xs px-2 py-1 rounded ${
                    content.trending === 'up' ? 'text-green-400 bg-green-400/10' :
                    content.trending === 'down' ? 'text-red-400 bg-red-400/10' :
                    'text-blue-400 bg-blue-400/10'
                  }`}>
                    {content.trending === 'up' ? '↗' : content.trending === 'down' ? '↘' : '→'} {content.trending.toUpperCase()}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-cyan-400">{content.count}</div>
                    <div className="text-gray-400">Processed</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-400">{content.avgTime}</div>
                    <div className="text-gray-400">Avg Time</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-400">{content.successRate.toFixed(1)}%</div>
                    <div className="text-gray-400">Success</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-yellow-400">{content.costPerUnit}</div>
                    <div className="text-gray-400">Cost/Unit</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Workflow Steps</h3>
          </div>
          <div className="space-y-3">
            {pipelineData.workflowSteps.map((step, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{step.step}</div>
                  <div className={`w-3 h-3 rounded-full ${
                    step.status === 'healthy' ? 'bg-green-400' :
                    step.status === 'warning' ? 'bg-yellow-400' :
                    'bg-red-400'
                  }`}></div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-cyan-400">{step.throughput}</div>
                    <div className="text-gray-400">Throughput</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-400">{step.latency}</div>
                    <div className="text-gray-400">Latency</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-orange-400">{step.errorRate.toFixed(1)}%</div>
                    <div className="text-gray-400">Error Rate</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Metrics Summary */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{pipelineData.qualityMetrics.outputQuality.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Output Quality</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{pipelineData.qualityMetrics.processingAccuracy.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Accuracy</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600/20 to-red-400/20 backdrop-blur-sm rounded-lg border border-red-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-400/20 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-red-400">{pipelineData.qualityMetrics.errorRate.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Error Rate</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 backdrop-blur-sm rounded-lg border border-yellow-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">{pipelineData.qualityMetrics.retryRate.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Retry Rate</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{pipelineData.qualityMetrics.compressionRatio.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Compression</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600/20 to-cyan-400/20 backdrop-blur-sm rounded-lg border border-cyan-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">{pipelineData.qualityMetrics.formatCompliance.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}