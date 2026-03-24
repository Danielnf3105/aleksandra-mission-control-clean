// Enterprise Observability Center v3.0
// Inspired by Azure Monitor + Grafana + Enterprise DevOps Best Practices
import { useState, useEffect } from 'react';

const EnterpriseObservabilityCenter = () => {
  const [observabilityData, setObservabilityData] = useState({
    globalMetrics: {
      totalOperations: 15847,
      successRate: 99.7,
      latencyP95: 145,
      errorRate: 0.3,
      throughput: 1247.8,
      activeAgents: 6
    },
    alertSummary: {
      critical: 0,
      warning: 2,
      info: 5,
      resolved: 23
    },
    serviceHealth: [
      { service: 'Content Processing', health: 99.8, latency: 89, throughput: 247 },
      { service: 'AI Agent Network', health: 98.9, latency: 156, throughput: 89 },
      { service: 'Intelligence Engine', health: 99.1, latency: 203, throughput: 134 },
      { service: 'Analytics Pipeline', health: 97.4, latency: 276, throughput: 167 },
      { service: 'Security Monitor', health: 99.6, latency: 67, throughput: 45 },
      { service: 'Resource Manager', health: 98.3, latency: 234, throughput: 78 }
    ],
    performanceTimeline: []
  });

  const [hierarchicalView, setHierarchicalView] = useState('overview');
  const [selectedService, setSelectedService] = useState(null);
  const [timeRange, setTimeRange] = useState('1h');

  const [aiObservability, setAiObservability] = useState({
    tokenConsumption: 45678,
    qualityScores: 96.8,
    modelLatency: 234,
    inferenceRate: 89.4,
    costEfficiency: 94.7,
    contextualAccuracy: 97.1
  });

  const [operationalIntelligence, setOperationalIntelligence] = useState([
    { timestamp: '05:50:15', metric: 'System Optimization', value: 'Auto-scaling triggered +25%', impact: 'POSITIVE' },
    { timestamp: '05:49:42', metric: 'Performance Tuning', value: 'Latency reduced by 15ms', impact: 'POSITIVE' },
    { timestamp: '05:48:18', metric: 'Resource Allocation', value: 'Memory utilization optimized', impact: 'NEUTRAL' },
    { timestamp: '05:47:33', metric: 'Quality Assurance', value: 'All health checks passed', impact: 'POSITIVE' },
    { timestamp: '05:46:59', metric: 'Security Audit', value: 'Zero vulnerabilities detected', impact: 'POSITIVE' }
  ]);

  const [drillDownData, setDrillDownData] = useState({
    'Content Processing': {
      subServices: ['Video Transcription', 'Image Analysis', 'Text Processing'],
      metrics: { cpu: 67.3, memory: 78.9, disk: 45.2, network: 123.4 }
    },
    'AI Agent Network': {
      subServices: ['Agent Coordinator', 'Task Dispatcher', 'Communication Hub'],
      metrics: { cpu: 23.7, memory: 56.3, disk: 67.8, network: 234.5 }
    },
    'Intelligence Engine': {
      subServices: ['Pattern Recognition', 'Anomaly Detection', 'Predictive Analysis'],
      metrics: { cpu: 89.1, memory: 67.4, disk: 23.9, network: 178.2 }
    }
  });

  useEffect(() => {
    // Real-time data updates
    const dataInterval = setInterval(() => {
      // Update global metrics
      setObservabilityData(prev => ({
        ...prev,
        globalMetrics: {
          ...prev.globalMetrics,
          totalOperations: prev.globalMetrics.totalOperations + Math.floor(Math.random() * 20),
          successRate: Math.max(95, Math.min(99.9, prev.globalMetrics.successRate + (Math.random() - 0.5) * 0.5)),
          latencyP95: Math.max(100, Math.min(300, prev.globalMetrics.latencyP95 + (Math.random() - 0.5) * 20)),
          errorRate: Math.max(0, Math.min(2, prev.globalMetrics.errorRate + (Math.random() - 0.7) * 0.2)),
          throughput: Math.max(800, prev.globalMetrics.throughput + (Math.random() - 0.5) * 100)
        },
        serviceHealth: prev.serviceHealth.map(service => ({
          ...service,
          health: Math.max(95, Math.min(99.9, service.health + (Math.random() - 0.3) * 1)),
          latency: Math.max(50, Math.min(400, service.latency + (Math.random() - 0.5) * 30)),
          throughput: Math.max(20, service.throughput + (Math.random() - 0.5) * 20)
        }))
      }));

      // Update AI observability metrics
      setAiObservability(prev => ({
        tokenConsumption: prev.tokenConsumption + Math.floor(Math.random() * 50),
        qualityScores: Math.max(90, Math.min(99, prev.qualityScores + (Math.random() - 0.3) * 1)),
        modelLatency: Math.max(150, Math.min(400, prev.modelLatency + (Math.random() - 0.5) * 20)),
        inferenceRate: Math.max(70, Math.min(95, prev.inferenceRate + (Math.random() - 0.4) * 2)),
        costEfficiency: Math.max(85, Math.min(98, prev.costEfficiency + (Math.random() - 0.3) * 1.5)),
        contextualAccuracy: Math.max(90, Math.min(99, prev.contextualAccuracy + (Math.random() - 0.3) * 0.8))
      }));
    }, 3000);

    // Performance timeline updates
    const timelineInterval = setInterval(() => {
      const newEvent = {
        timestamp: new Date().toLocaleTimeString(),
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        latency: Math.random() * 400 + 100,
        throughput: Math.random() * 300 + 100
      };

      setObservabilityData(prev => ({
        ...prev,
        performanceTimeline: [newEvent, ...prev.performanceTimeline.slice(0, 49)]
      }));
    }, 5000);

    // Operational intelligence feed
    const intelligenceInterval = setInterval(() => {
      const insights = [
        { metric: 'Auto-Optimization', value: 'Resource allocation optimized', impact: 'POSITIVE' },
        { metric: 'Predictive Analysis', value: 'Load spike predicted in 2h', impact: 'NEUTRAL' },
        { metric: 'Quality Assurance', value: 'SLA compliance at 99.8%', impact: 'POSITIVE' },
        { metric: 'Cost Management', value: 'Efficiency improved by 3%', impact: 'POSITIVE' },
        { metric: 'Security Monitoring', value: 'All systems secure', impact: 'POSITIVE' }
      ];

      const newInsight = {
        timestamp: new Date().toLocaleTimeString(),
        ...insights[Math.floor(Math.random() * insights.length)]
      };

      setOperationalIntelligence(prev => [newInsight, ...prev.slice(0, 7)]);
    }, 18000);

    return () => {
      clearInterval(dataInterval);
      clearInterval(timelineInterval);
      clearInterval(intelligenceInterval);
    };
  }, []);

  const getHealthColor = (health) => {
    if (health >= 99) return '#10B981';
    if (health >= 95) return '#F59E0B';
    return '#EF4444';
  };

  const getImpactColor = (impact) => {
    switch(impact) {
      case 'POSITIVE': return '#10B981';
      case 'NEGATIVE': return '#EF4444';
      case 'NEUTRAL': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num/1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num/1000).toFixed(1)}K`;
    return num.toFixed(0);
  };

  const renderServiceDrillDown = () => {
    if (!selectedService || !drillDownData[selectedService]) return null;
    
    const data = drillDownData[selectedService];
    
    return (
      <div className="mt-6 bg-gray-700 rounded-lg p-6 border border-gray-600">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-bold text-white">{selectedService} - Detailed View</h4>
          <button 
            onClick={() => setSelectedService(null)}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h5 className="text-white font-medium mb-3">Sub-Services</h5>
            <div className="space-y-2">
              {data.subServices.map((sub, index) => (
                <div key={index} className="bg-gray-800 rounded p-2 text-gray-300 text-sm">
                  {sub}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-medium mb-3">Resource Metrics</h5>
            <div className="space-y-3">
              {Object.entries(data.metrics).map(([metric, value]) => (
                <div key={metric} className="flex justify-between items-center">
                  <span className="text-gray-300 capitalize">{metric}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium">
                      {metric === 'network' ? `${value.toFixed(1)} MB/s` : `${value.toFixed(1)}%`}
                    </span>
                    <div className="w-16 bg-gray-600 rounded-full h-2">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${metric === 'network' ? Math.min(100, value/3) : value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 font-mono text-sm">
      {/* Enterprise Header */}
      <div className="bg-gray-900 rounded-lg border-2 border-blue-500 p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-400 mb-2">ENTERPRISE OBSERVABILITY CENTER</h1>
          <div className="text-lg text-white">Azure Monitor + Grafana Inspired • v3.0</div>
          <div className="text-sm text-blue-300 mt-2">Hierarchical Dashboards • Real-Time Intelligence • AI Observability</div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex space-x-4 justify-center">
          {['overview', 'services', 'ai-metrics', 'intelligence'].map((view) => (
            <button
              key={view}
              onClick={() => setHierarchicalView(view)}
              className={`px-4 py-2 rounded transition-colors ${
                hierarchicalView === view 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {view.charAt(0).toUpperCase() + view.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Global Metrics Overview */}
      {hierarchicalView === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(observabilityData.globalMetrics).map(([key, value]) => (
              <div key={key} className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="text-center">
                  <div className="text-gray-400 text-xs mb-1 uppercase">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="text-xl font-bold text-white">
                    {typeof value === 'number' && key.includes('Rate') ? `${value.toFixed(1)}%` :
                     typeof value === 'number' && key.includes('Operations') ? formatNumber(value) :
                     typeof value === 'number' && key.includes('Latency') ? `${value}ms` :
                     typeof value === 'number' ? value.toFixed(1) : value}
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-1.5 mt-2">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                      style={{ 
                        width: `${
                          key.includes('Rate') && value < 50 ? 100 - value : 
                          key.includes('Rate') ? value :
                          key.includes('Latency') ? Math.min(100, 100 - (value-100)/3) :
                          typeof value === 'number' ? Math.min(100, value/20) : 50
                        }%` 
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alert Summary */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
            <h3 className="text-lg font-bold text-white mb-4">🚨 Alert Overview</h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(observabilityData.alertSummary).map(([level, count]) => (
                <div key={level} className="text-center">
                  <div 
                    className="text-3xl font-bold"
                    style={{ 
                      color: level === 'critical' ? '#EF4444' :
                             level === 'warning' ? '#F59E0B' :
                             level === 'info' ? '#3B82F6' : '#10B981'
                    }}
                  >
                    {count}
                  </div>
                  <div className="text-gray-400 capitalize text-sm">{level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Service Health Matrix */}
      {hierarchicalView === 'services' && (
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
            <h3 className="text-lg font-bold text-white mb-4">🔄 Service Health Matrix</h3>
            
            <div className="space-y-3">
              {observabilityData.serviceHealth.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-gray-700 rounded p-4 border border-gray-600 hover:bg-gray-650 cursor-pointer transition-colors"
                  onClick={() => setSelectedService(service.service)}
                >
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getHealthColor(service.health) }}
                      />
                      <span className="text-white font-medium">{service.service}</span>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{service.health.toFixed(1)}%</div>
                      <div className="text-xs text-gray-400">Health</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{service.latency}ms</div>
                      <div className="text-xs text-gray-400">Latency</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{service.throughput.toFixed(1)}</div>
                      <div className="text-xs text-gray-400">Throughput</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {renderServiceDrillDown()}
        </div>
      )}

      {/* AI Observability */}
      {hierarchicalView === 'ai-metrics' && (
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
            <h3 className="text-lg font-bold text-white mb-4">🤖 AI Workload Observability</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {Object.entries(aiObservability).map(([metric, value]) => (
                <div key={metric} className="bg-gray-700 rounded p-4 border border-gray-600">
                  <div className="text-center">
                    <div className="text-gray-400 text-xs mb-2 uppercase">
                      {metric.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">
                      {metric.includes('Consumption') ? formatNumber(value) :
                       metric.includes('Latency') ? `${value}ms` :
                       `${value.toFixed(1)}${metric.includes('Rate') || metric.includes('Score') || metric.includes('Efficiency') || metric.includes('Accuracy') ? '%' : ''}`}
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${
                            metric.includes('Consumption') ? Math.min(100, value/1000) :
                            metric.includes('Latency') ? Math.min(100, 100 - (value-150)/3) :
                            value
                          }%` 
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Operational Intelligence Feed */}
      {hierarchicalView === 'intelligence' && (
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
            <h3 className="text-lg font-bold text-white mb-4">🧠 Operational Intelligence Feed</h3>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {operationalIntelligence.map((insight, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-700 rounded border border-gray-600">
                  <div className="text-gray-400 text-xs min-w-[60px]">{insight.timestamp}</div>
                  
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm">{insight.metric}</div>
                    <div className="text-gray-300 text-sm">{insight.value}</div>
                  </div>
                  
                  <div 
                    className="px-2 py-1 rounded text-xs font-bold"
                    style={{ 
                      backgroundColor: `${getImpactColor(insight.impact)}20`,
                      color: getImpactColor(insight.impact),
                      border: `1px solid ${getImpactColor(insight.impact)}`
                    }}
                  >
                    {insight.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer Status */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
        <div className="flex justify-between items-center text-xs text-gray-400">
          <div>Enterprise Observability Center • v3.0 • Real-Time Intelligence</div>
          <div>Hierarchical View: {hierarchicalView.charAt(0).toUpperCase() + hierarchicalView.slice(1)}</div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>LIVE MONITORING</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseObservabilityCenter;