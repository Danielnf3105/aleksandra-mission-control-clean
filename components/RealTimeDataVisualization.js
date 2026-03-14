// Real-Time Data Visualization Dashboard - 2026 Best Practices Implementation
// Interactive charts with live data streams and embedded analytics
import { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, TrendingDown, BarChart3, PieChart, Activity,
  Zap, Cpu, HardDrive, Network, Clock, Target, Brain,
  Play, Pause, RotateCcw, Maximize2, Settings, Filter
} from 'lucide-react';

export default function RealTimeDataVisualization() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('1h');
  const [selectedMetrics, setSelectedMetrics] = useState(['systemHealth', 'agentPerformance', 'contentProcessing']);
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  // Real-time data streams with 2026 best practices
  const [dataStreams, setDataStreams] = useState({
    systemHealth: {
      values: Array.from({length: 60}, (_, i) => 95 + Math.random() * 4),
      color: '#10B981', // Emerald-500
      unit: '%',
      current: 97.3,
      trend: 'stable',
      icon: Cpu
    },
    agentPerformance: {
      values: Array.from({length: 60}, (_, i) => 90 + Math.random() * 8),
      color: '#3B82F6', // Blue-500  
      unit: '%',
      current: 96.7,
      trend: 'improving',
      icon: Brain
    },
    contentProcessing: {
      values: Array.from({length: 60}, (_, i) => 10 + Math.random() * 20),
      color: '#F59E0B', // Amber-500
      unit: ' items/min',
      current: 15,
      trend: 'increasing',
      icon: Activity
    },
    apiLatency: {
      values: Array.from({length: 60}, (_, i) => 100 + Math.random() * 50),
      color: '#EF4444', // Red-500
      unit: 'ms',
      current: 127,
      trend: 'stable',
      icon: Network
    },
    memoryUsage: {
      values: Array.from({length: 60}, (_, i) => 60 + Math.random() * 25),
      color: '#8B5CF6', // Violet-500
      unit: '%',
      current: 73.2,
      trend: 'stable',
      icon: HardDrive
    },
    costEfficiency: {
      values: Array.from({length: 60}, (_, i) => 80 + Math.random() * 15),
      color: '#06B6D4', // Cyan-500
      unit: '%',
      current: 89.1,
      trend: 'improving',
      icon: Target
    }
  });

  // Interactive chart rendering with HTML5 Canvas
  const drawChart = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // Draw grid lines (2026 best practice: subtle guidance)
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 0.5;
    
    // Horizontal grid lines
    for (let i = 0; i <= 4; i++) {
      const y = (height / 4) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Vertical grid lines
    for (let i = 0; i <= 6; i++) {
      const x = (width / 6) * i;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Draw data lines for selected metrics
    selectedMetrics.forEach((metricKey) => {
      const metric = dataStreams[metricKey];
      if (!metric) return;

      const values = metric.values;
      const maxValue = Math.max(...Object.values(dataStreams).map(m => Math.max(...m.values)));
      const minValue = Math.min(...Object.values(dataStreams).map(m => Math.min(...m.values)));

      ctx.strokeStyle = metric.color;
      ctx.lineWidth = 2;
      ctx.beginPath();

      values.forEach((value, index) => {
        const x = (width / (values.length - 1)) * index;
        const y = height - ((value - minValue) / (maxValue - minValue)) * height;
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // Add glow effect (2026 modern aesthetic)
      ctx.shadowColor = metric.color;
      ctx.shadowBlur = 3;
      ctx.stroke();
      ctx.shadowBlur = 0;
    });

    // Draw current value indicators
    selectedMetrics.forEach((metricKey, index) => {
      const metric = dataStreams[metricKey];
      if (!metric) return;

      const x = width - 5;
      const maxValue = Math.max(...Object.values(dataStreams).map(m => Math.max(...m.values)));
      const minValue = Math.min(...Object.values(dataStreams).map(m => Math.min(...m.values)));
      const y = height - ((metric.current - minValue) / (maxValue - minValue)) * height;

      // Draw current value dot
      ctx.fillStyle = metric.color;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fill();

      // Add pulsing animation
      ctx.strokeStyle = metric.color;
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.6;
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.globalAlpha = 1;
    });
  };

  useEffect(() => {
    // Real-time data updates with smooth animation
    const interval = setInterval(() => {
      if (!isPlaying) return;

      setDataStreams(prev => {
        const updated = { ...prev };
        
        Object.keys(updated).forEach(key => {
          const metric = updated[key];
          // Add new data point
          const baseValue = metric.current;
          const variance = baseValue * 0.1; // 10% variance
          const newValue = Math.max(0, baseValue + (Math.random() - 0.5) * variance);
          
          metric.values = [...metric.values.slice(1), newValue];
          metric.current = newValue;
          
          // Update trend based on recent values
          const recent = metric.values.slice(-5);
          const average = recent.reduce((a, b) => a + b, 0) / recent.length;
          const previousAverage = metric.values.slice(-10, -5).reduce((a, b) => a + b, 0) / 5;
          
          if (average > previousAverage * 1.02) {
            metric.trend = 'improving';
          } else if (average < previousAverage * 0.98) {
            metric.trend = 'declining';
          } else {
            metric.trend = 'stable';
          }
        });

        return updated;
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    // Redraw chart when data or selections change
    drawChart();
  }, [dataStreams, selectedMetrics]);

  const toggleMetric = (metricKey) => {
    setSelectedMetrics(prev => {
      if (prev.includes(metricKey)) {
        return prev.filter(m => m !== metricKey);
      } else {
        return [...prev, metricKey];
      }
    });
  };

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'declining': return <TrendingDown className="w-4 h-4 text-red-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const resetChart = () => {
    setDataStreams(prev => {
      const reset = { ...prev };
      Object.keys(reset).forEach(key => {
        reset[key].values = Array.from({length: 60}, (_, i) => 
          reset[key].current + (Math.random() - 0.5) * reset[key].current * 0.2
        );
      });
      return reset;
    });
  };

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* Header with Controls */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-cyan-400 flex items-center">
            <BarChart3 className="w-8 h-8 mr-3" />
            Real-Time Data Visualization
          </h1>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                isPlaying 
                  ? 'bg-red-600 hover:bg-red-500 text-white' 
                  : 'bg-green-600 hover:bg-green-500 text-white'
              }`}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            
            <button
              onClick={resetChart}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>
        
        <p className="text-gray-300">Interactive real-time metrics with embedded analytics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Main Chart Area */}
        <div className="lg:col-span-3">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Live Performance Metrics</h2>
              <div className="flex items-center space-x-4">
                <select
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="bg-gray-800 border border-gray-600 rounded px-3 py-1 text-sm"
                >
                  <option value="1h">Last Hour</option>
                  <option value="6h">Last 6 Hours</option>
                  <option value="24h">Last 24 Hours</option>
                </select>
                <div className="text-sm text-gray-400">
                  {isPlaying ? 'Streaming Live' : 'Paused'} • Updates every 2s
                </div>
              </div>
            </div>
            
            {/* Canvas Chart */}
            <div className="relative h-[calc(100%-100px)] bg-black rounded border border-gray-600">
              <canvas
                ref={canvasRef}
                width={800}
                height={400}
                className="w-full h-full"
                style={{ imageRendering: 'crisp-edges' }}
              />
              
              {/* Chart Legend */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-3">
                {selectedMetrics.map((metricKey) => {
                  const metric = dataStreams[metricKey];
                  return (
                    <div key={metricKey} className="flex items-center space-x-2 bg-gray-800/80 px-2 py-1 rounded">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: metric.color }}
                      ></div>
                      <span className="text-xs font-medium">
                        {metricKey.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-xs text-gray-400">
                        {metric.current.toFixed(1)}{metric.unit}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Panel */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Metrics Panel
          </h2>
          
          <div className="space-y-3 max-h-[500px] overflow-y-auto">
            {Object.entries(dataStreams).map(([key, metric]) => {
              const IconComponent = metric.icon;
              const isSelected = selectedMetrics.includes(key);
              
              return (
                <div
                  key={key}
                  onClick={() => toggleMetric(key)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-gray-800 border-gray-600 shadow-lg'
                      : 'bg-gray-900 border-gray-700 hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="p-2 rounded-full"
                        style={{ backgroundColor: `${metric.color}20`, border: `1px solid ${metric.color}` }}
                      >
                        <IconComponent className="w-4 h-4" style={{ color: metric.color }} />
                      </div>
                      <div>
                        <div className="font-semibold text-white capitalize text-sm">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-xs text-gray-400">
                          Real-time monitoring
                        </div>
                      </div>
                    </div>
                    
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}}
                      className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-400"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-mono" style={{ color: metric.color }}>
                      {metric.current.toFixed(1)}{metric.unit}
                    </div>
                    {getTrendIcon(metric.trend)}
                  </div>
                  
                  {isSelected && (
                    <div className="mt-2 pt-2 border-t border-gray-600">
                      <div className="text-xs text-gray-400">
                        Trend: <span className="capitalize">{metric.trend}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Quick Actions */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-600">
            <h3 className="font-semibold text-white mb-3 text-sm">Quick Actions</h3>
            <div className="space-y-2">
              <button 
                onClick={() => setSelectedMetrics(Object.keys(dataStreams))}
                className="w-full text-left text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                • Select All Metrics
              </button>
              <button 
                onClick={() => setSelectedMetrics(['systemHealth', 'agentPerformance'])}
                className="w-full text-left text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                • Performance Focus
              </button>
              <button 
                onClick={() => setSelectedMetrics(['contentProcessing', 'apiLatency'])}
                className="w-full text-left text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                • Processing Focus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}