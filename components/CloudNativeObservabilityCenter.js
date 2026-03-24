// Cloud-Native Observability Center v4.0
// Inspired by Kubernetes ServiceMonitors + OpenTelemetry + GitOps Workflows
import { useState, useEffect } from 'react';

const CloudNativeObservabilityCenter = () => {
  const [otelMetrics, setOtelMetrics] = useState({
    tracesCollected: 45892,
    metricsIngested: 234567,
    logsProcessed: 156789,
    spanCount: 89234,
    traceLatencyP95: 145,
    errorRate: 0.2,
    samplingRate: 85.3,
    collectorHealth: 99.4
  });

  const [serviceMonitors, setServiceMonitors] = useState([
    { 
      name: 'aleksandra-agent-monitor', 
      namespace: 'ai-agents', 
      status: 'Active', 
      targets: 6, 
      upMetrics: 23, 
      lastScrape: '2s ago',
      gitOpsStatus: 'Synced'
    },
    { 
      name: 'content-processor-monitor', 
      namespace: 'content-pipeline', 
      status: 'Active', 
      targets: 3, 
      upMetrics: 15, 
      lastScrape: '1s ago',
      gitOpsStatus: 'Synced'
    },
    { 
      name: 'intelligence-engine-monitor', 
      namespace: 'ai-intelligence', 
      status: 'Active', 
      targets: 4, 
      upMetrics: 28, 
      lastScrape: '3s ago',
      gitOpsStatus: 'Synced'
    },
    { 
      name: 'security-monitor', 
      namespace: 'security', 
      status: 'Active', 
      targets: 2, 
      upMetrics: 12, 
      lastScrape: '1s ago',
      gitOpsStatus: 'Synced'
    }
  ]);

  const [distributedTracing, setDistributedTracing] = useState([
    { traceId: 'trace-001', service: 'content-processor', duration: 145, spans: 8, status: 'Complete' },
    { traceId: 'trace-002', service: 'ai-agent-network', duration: 89, spans: 12, status: 'Complete' },
    { traceId: 'trace-003', service: 'intelligence-engine', duration: 234, spans: 6, status: 'Complete' },
    { traceId: 'trace-004', service: 'security-monitor', duration: 67, spans: 4, status: 'Complete' },
    { traceId: 'trace-005', service: 'analytics-pipeline', duration: 178, spans: 9, status: 'Complete' }
  ]);

  const [gitOpsWorkflows, setGitOpsWorkflows] = useState([
    { workflow: 'observability-config', status: 'Synced', lastCommit: '3m ago', version: 'v1.4.2' },
    { workflow: 'servicemonitors', status: 'Synced', lastCommit: '5m ago', version: 'v1.3.8' },
    { workflow: 'prometheus-rules', status: 'Synced', lastCommit: '8m ago', version: 'v1.2.1' },
    { workflow: 'grafana-dashboards', status: 'Synced', lastCommit: '12m ago', version: 'v1.5.0' }
  ]);

  const [collectorPipeline, setCollectorPipeline] = useState({
    receivers: [
      { name: 'otlp/grpc', status: 'Active', dataType: 'traces,metrics,logs', throughput: '2.3k/s' },
      { name: 'prometheus', status: 'Active', dataType: 'metrics', throughput: '1.8k/s' },
      { name: 'jaeger', status: 'Active', dataType: 'traces', throughput: '567/s' },
      { name: 'fluentd', status: 'Active', dataType: 'logs', throughput: '4.1k/s' }
    ],
    processors: [
      { name: 'batch', status: 'Active', function: 'Batching', latency: '50ms' },
      { name: 'resourcedetection', status: 'Active', function: 'Resource Detection', latency: '15ms' },
      { name: 'probabilistic_sampler', status: 'Active', function: 'Sampling', latency: '8ms' },
      { name: 'memory_limiter', status: 'Active', function: 'Memory Management', latency: '5ms' }
    ],
    exporters: [
      { name: 'prometheus', status: 'Active', destination: 'Prometheus TSDB', latency: '23ms' },
      { name: 'jaeger', status: 'Active', destination: 'Jaeger Backend', latency: '45ms' },
      { name: 'elasticsearch', status: 'Active', destination: 'Elastic Stack', latency: '67ms' },
      { name: 'datadog', status: 'Active', destination: 'Datadog APM', latency: '89ms' }
    ]
  });

  const [instrumentationStatus, setInstrumentationStatus] = useState([
    { service: 'Content Processor', auto: true, manual: false, coverage: 95.7, language: 'Node.js' },
    { service: 'AI Agent Network', auto: true, manual: true, coverage: 98.3, language: 'Python' },
    { service: 'Intelligence Engine', auto: true, manual: false, coverage: 92.1, language: 'Go' },
    { service: 'Analytics Pipeline', auto: false, manual: true, coverage: 87.4, language: 'Java' },
    { service: 'Security Monitor', auto: true, manual: false, coverage: 99.1, language: 'Rust' }
  ]);

  useEffect(() => {
    // Real-time OTEL metrics updates
    const otelInterval = setInterval(() => {
      setOtelMetrics(prev => ({
        tracesCollected: prev.tracesCollected + Math.floor(Math.random() * 100),
        metricsIngested: prev.metricsIngested + Math.floor(Math.random() * 500),
        logsProcessed: prev.logsProcessed + Math.floor(Math.random() * 300),
        spanCount: prev.spanCount + Math.floor(Math.random() * 150),
        traceLatencyP95: Math.max(100, Math.min(300, prev.traceLatencyP95 + (Math.random() - 0.5) * 20)),
        errorRate: Math.max(0, Math.min(2, prev.errorRate + (Math.random() - 0.8) * 0.1)),
        samplingRate: Math.max(70, Math.min(95, prev.samplingRate + (Math.random() - 0.4) * 2)),
        collectorHealth: Math.max(95, Math.min(99.9, prev.collectorHealth + (Math.random() - 0.3) * 1))
      }));
    }, 2000);

    // Update ServiceMonitor last scrape times
    const scrapeInterval = setInterval(() => {
      setServiceMonitors(prev => prev.map(monitor => ({
        ...monitor,
        lastScrape: `${Math.floor(Math.random() * 5) + 1}s ago`,
        upMetrics: Math.max(5, monitor.upMetrics + (Math.random() - 0.5) * 3)
      })));
    }, 5000);

    // Simulate new distributed traces
    const traceInterval = setInterval(() => {
      const services = ['content-processor', 'ai-agent-network', 'intelligence-engine', 'security-monitor', 'analytics-pipeline'];
      const newTrace = {
        traceId: `trace-${Math.floor(Math.random() * 9999).toString().padStart(3, '0')}`,
        service: services[Math.floor(Math.random() * services.length)],
        duration: Math.floor(Math.random() * 200) + 50,
        spans: Math.floor(Math.random() * 10) + 3,
        status: Math.random() > 0.95 ? 'Error' : 'Complete'
      };

      setDistributedTracing(prev => [newTrace, ...prev.slice(0, 9)]);
    }, 8000);

    return () => {
      clearInterval(otelInterval);
      clearInterval(scrapeInterval);
      clearInterval(traceInterval);
    };
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': case 'Synced': case 'Complete': return '#10B981';
      case 'Warning': case 'Pending': return '#F59E0B';
      case 'Error': case 'Failed': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num/1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num/1000).toFixed(1)}K`;
    return num.toFixed(0);
  };

  return (
    <div className="space-y-6 font-mono text-sm">
      {/* Cloud-Native Header */}
      <div className="bg-gray-900 rounded-lg border-2 border-green-500 p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-400 mb-2">CLOUD-NATIVE OBSERVABILITY CENTER</h1>
          <div className="text-lg text-white">Kubernetes ServiceMonitors + OpenTelemetry + GitOps • v4.0</div>
          <div className="text-sm text-green-300 mt-2">Zero-Code Instrumentation • Distributed Tracing • Declarative Monitoring</div>
        </div>
        
        {/* OTEL Global Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(otelMetrics).map(([key, value]) => (
            <div key={key} className="bg-green-900 rounded p-4 border border-green-400">
              <div className="text-center">
                <div className="text-green-400 text-xs mb-1 uppercase">
                  {key.replace(/([A-Z])/g, ' $1').replace(/P95/, ' P95').trim()}
                </div>
                <div className="text-lg font-bold text-white">
                  {typeof value === 'number' && key.includes('Rate') ? `${value.toFixed(1)}%` :
                   typeof value === 'number' && key.includes('Latency') ? `${value}ms` :
                   typeof value === 'number' && key.includes('Health') ? `${value.toFixed(1)}%` :
                   typeof value === 'number' && ['tracesCollected', 'metricsIngested', 'logsProcessed', 'spanCount'].includes(key) ? formatNumber(value) :
                   typeof value === 'number' ? value.toFixed(1) : value}
                </div>
                <div className="w-full bg-gray-600 rounded-full h-1.5 mt-2">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"
                    style={{ 
                      width: `${
                        key.includes('Health') || key.includes('Rate') ? value :
                        key.includes('Latency') ? Math.min(100, 100 - (value-100)/2) :
                        key.includes('errorRate') ? Math.min(100, 100 - value*10) :
                        Math.min(100, 75 + Math.random() * 25)
                      }%` 
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ServiceMonitor Configuration */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
          <h3 className="text-lg font-bold text-white mb-4">🔄 Kubernetes ServiceMonitors</h3>
          
          <div className="space-y-3">
            {serviceMonitors.map((monitor, index) => (
              <div key={index} className="bg-gray-700 rounded p-3 border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="text-white font-bold text-sm">{monitor.name}</div>
                    <div className="text-gray-400 text-xs">{monitor.namespace}</div>
                  </div>
                  <div className="text-right">
                    <div 
                      className="text-xs font-bold"
                      style={{ color: getStatusColor(monitor.status) }}
                    >
                      ● {monitor.status}
                    </div>
                    <div 
                      className="text-xs"
                      style={{ color: getStatusColor(monitor.gitOpsStatus) }}
                    >
                      GitOps: {monitor.gitOpsStatus}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="text-center">
                    <div className="text-white font-medium">{monitor.targets}</div>
                    <div className="text-gray-400">Targets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-medium">{monitor.upMetrics.toFixed(0)}</div>
                    <div className="text-gray-400">Metrics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-medium">{monitor.lastScrape}</div>
                    <div className="text-gray-400">Last Scrape</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distributed Tracing */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
          <h3 className="text-lg font-bold text-white mb-4">🔍 Distributed Tracing</h3>
          
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {distributedTracing.map((trace, index) => (
              <div key={index} className="bg-gray-700 rounded p-2 border border-gray-600">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium text-xs">{trace.traceId}</div>
                    <div className="text-gray-400 text-xs">{trace.service}</div>
                  </div>
                  
                  <div className="flex space-x-4 text-xs">
                    <div className="text-center">
                      <div className="text-white">{trace.duration}ms</div>
                      <div className="text-gray-400">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white">{trace.spans}</div>
                      <div className="text-gray-400">Spans</div>
                    </div>
                    <div className="text-center">
                      <div 
                        className="font-medium"
                        style={{ color: getStatusColor(trace.status) }}
                      >
                        {trace.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OTEL Collector Pipeline */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
        <h3 className="text-lg font-bold text-white mb-4">🚀 OpenTelemetry Collector Pipeline</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-white font-medium mb-3">📥 Receivers</h4>
            <div className="space-y-2">
              {collectorPipeline.receivers.map((receiver, index) => (
                <div key={index} className="bg-gray-700 rounded p-2 border border-gray-600">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white text-sm font-medium">{receiver.name}</div>
                      <div className="text-gray-400 text-xs">{receiver.dataType}</div>
                    </div>
                    <div className="text-right">
                      <div 
                        className="text-xs font-bold"
                        style={{ color: getStatusColor(receiver.status) }}
                      >
                        ● {receiver.status}
                      </div>
                      <div className="text-gray-300 text-xs">{receiver.throughput}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">⚙️ Processors</h4>
            <div className="space-y-2">
              {collectorPipeline.processors.map((processor, index) => (
                <div key={index} className="bg-gray-700 rounded p-2 border border-gray-600">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white text-sm font-medium">{processor.name}</div>
                      <div className="text-gray-400 text-xs">{processor.function}</div>
                    </div>
                    <div className="text-right">
                      <div 
                        className="text-xs font-bold"
                        style={{ color: getStatusColor(processor.status) }}
                      >
                        ● {processor.status}
                      </div>
                      <div className="text-gray-300 text-xs">{processor.latency}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">📤 Exporters</h4>
            <div className="space-y-2">
              {collectorPipeline.exporters.map((exporter, index) => (
                <div key={index} className="bg-gray-700 rounded p-2 border border-gray-600">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white text-sm font-medium">{exporter.name}</div>
                      <div className="text-gray-400 text-xs">{exporter.destination}</div>
                    </div>
                    <div className="text-right">
                      <div 
                        className="text-xs font-bold"
                        style={{ color: getStatusColor(exporter.status) }}
                      >
                        ● {exporter.status}
                      </div>
                      <div className="text-gray-300 text-xs">{exporter.latency}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* GitOps Workflows */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
          <h3 className="text-lg font-bold text-white mb-4">🔄 GitOps Workflows</h3>
          
          <div className="space-y-3">
            {gitOpsWorkflows.map((workflow, index) => (
              <div key={index} className="bg-gray-700 rounded p-3 border border-gray-600">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">{workflow.workflow}</div>
                    <div className="text-gray-400 text-xs">Version: {workflow.version}</div>
                  </div>
                  <div className="text-right">
                    <div 
                      className="text-sm font-bold"
                      style={{ color: getStatusColor(workflow.status) }}
                    >
                      ● {workflow.status}
                    </div>
                    <div className="text-gray-300 text-xs">{workflow.lastCommit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Zero-Code Instrumentation Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
          <h3 className="text-lg font-bold text-white mb-4">🔧 Instrumentation Coverage</h3>
          
          <div className="space-y-3">
            {instrumentationStatus.map((service, index) => (
              <div key={index} className="bg-gray-700 rounded p-3 border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="text-white font-medium">{service.service}</div>
                    <div className="text-gray-400 text-xs">{service.language}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">{service.coverage.toFixed(1)}%</div>
                    <div className="text-xs space-x-2">
                      <span style={{ color: service.auto ? '#10B981' : '#6B7280' }}>
                        Auto: {service.auto ? '✓' : '✗'}
                      </span>
                      <span style={{ color: service.manual ? '#10B981' : '#6B7280' }}>
                        Manual: {service.manual ? '✓' : '✗'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    style={{ width: `${service.coverage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status Footer */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
        <div className="flex justify-between items-center text-xs text-gray-400">
          <div>Cloud-Native Observability • v4.0 • Kubernetes + OpenTelemetry + GitOps</div>
          <div>ServiceMonitors: {serviceMonitors.length} Active • Traces: {distributedTracing.length} Recent</div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>OTEL COLLECTOR ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudNativeObservabilityCenter;