// Real-Time Data Streaming Component - NASA OpenMCT Inspired
// Implements customizable refresh rates, buffering, and telemetry streaming
import React, { useState, useEffect, useRef } from 'react';

const RealTimeDataStreaming = () => {
  const [telemetryData, setTelemetryData] = useState({});
  const [refreshRate, setRefreshRate] = useState(1000); // milliseconds
  const [isStreaming, setIsStreaming] = useState(true);
  const [buffer, setBuffer] = useState([]);
  const intervalRef = useRef(null);
  const maxBufferSize = 1000;

  // Simulated telemetry data streams
  const generateTelemetryData = () => {
    const timestamp = Date.now();
    return {
      timestamp,
      systemHealth: {
        cpu: Math.random() * 100,
        memory: 60 + Math.random() * 30,
        disk: 40 + Math.random() * 20,
        network: 95 + Math.random() * 5,
        temperature: 45 + Math.random() * 15
      },
      agentMetrics: {
        activeAgents: Math.floor(Math.random() * 10) + 1,
        taskQueue: Math.floor(Math.random() * 50),
        successRate: 95 + Math.random() * 5,
        responseTime: 100 + Math.random() * 200
      },
      contentPipeline: {
        videosProcessing: Math.floor(Math.random() * 20),
        transcriptsGenerated: Math.floor(Math.random() * 100),
        thumbnailsCreated: Math.floor(Math.random() * 50),
        uploadQueue: Math.floor(Math.random() * 30)
      },
      infrastructure: {
        vercelDeployments: Math.floor(Math.random() * 10),
        apiCalls: 1000 + Math.floor(Math.random() * 5000),
        errorRate: Math.random() * 2,
        uptime: 99.5 + Math.random() * 0.5
      }
    };
  };

  // Start/stop streaming
  useEffect(() => {
    if (isStreaming) {
      intervalRef.current = setInterval(() => {
        const newData = generateTelemetryData();
        setTelemetryData(newData);
        
        // Add to buffer with size limit
        setBuffer(prev => {
          const newBuffer = [...prev, newData];
          return newBuffer.length > maxBufferSize ? 
            newBuffer.slice(-maxBufferSize) : newBuffer;
        });
      }, refreshRate);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isStreaming, refreshRate]);

  // NASA-style status indicator
  const StatusIndicator = ({ value, threshold, label, unit }) => {
    const getColor = (val, thresh) => {
      if (val > thresh.critical) return '#FF6B6B';  // Red
      if (val > thresh.warning) return '#FFD93D';   // Yellow
      return '#6BCF7F';  // Green
    };

    return (
      <div className="bg-gray-900 border border-gray-700 rounded p-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-300 text-sm">{label}</span>
          <div 
            className="w-3 h-3 rounded-full border-2"
            style={{ 
              backgroundColor: getColor(value, threshold),
              borderColor: getColor(value, threshold),
              boxShadow: `0 0 10px ${getColor(value, threshold)}`
            }}
          />
        </div>
        <div className="text-2xl font-mono text-white">
          {typeof value === 'number' ? value.toFixed(1) : value}{unit}
        </div>
      </div>
    );
  };

  // Real-time chart component
  const MiniChart = ({ data, label, color }) => {
    const points = data.slice(-20); // Last 20 points
    const max = Math.max(...points, 1);
    const min = Math.min(...points, 0);
    
    const pathData = points.map((point, index) => {
      const x = (index / (points.length - 1)) * 200;
      const y = 50 - ((point - min) / (max - min)) * 40;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    return (
      <div className="bg-gray-900 border border-gray-700 rounded p-3">
        <div className="text-sm text-gray-300 mb-2">{label}</div>
        <svg width="200" height="50" className="text-blue-400">
          <path
            d={pathData}
            fill="none"
            stroke={color}
            strokeWidth="2"
            style={{ filter: `drop-shadow(0 0 3px ${color})` }}
          />
        </svg>
        <div className="text-xs text-gray-500 mt-1">
          Last: {points[points.length - 1]?.toFixed(1)} | Range: {min.toFixed(1)} - {max.toFixed(1)}
        </div>
      </div>
    );
  };

  // Extract data for charts
  const cpuHistory = buffer.map(d => d.systemHealth?.cpu || 0);
  const memoryHistory = buffer.map(d => d.systemHealth?.memory || 0);
  const agentHistory = buffer.map(d => d.agentMetrics?.activeAgents || 0);

  if (!telemetryData.timestamp) {
    return (
      <div className="bg-gray-800 text-white p-6 rounded-lg">
        <div className="animate-pulse">Initializing telemetry streams...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      {/* Header Controls */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          📡 Real-Time Telemetry Stream
          <span className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        </h2>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-gray-300 text-sm">Refresh Rate:</label>
            <select 
              value={refreshRate}
              onChange={(e) => setRefreshRate(Number(e.target.value))}
              className="bg-gray-700 text-white px-2 py-1 rounded text-sm"
            >
              <option value={100}>100ms</option>
              <option value={500}>500ms</option>
              <option value={1000}>1s</option>
              <option value={5000}>5s</option>
            </select>
          </div>
          
          <button
            onClick={() => setIsStreaming(!isStreaming)}
            className={`px-4 py-2 rounded text-sm font-medium ${
              isStreaming 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isStreaming ? '⏸️ Pause' : '▶️ Start'}
          </button>
        </div>
      </div>

      {/* System Health Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <StatusIndicator 
          value={telemetryData.systemHealth?.cpu || 0} 
          threshold={{ warning: 70, critical: 85 }}
          label="CPU Usage" 
          unit="%" 
        />
        <StatusIndicator 
          value={telemetryData.systemHealth?.memory || 0} 
          threshold={{ warning: 80, critical: 95 }}
          label="Memory" 
          unit="%" 
        />
        <StatusIndicator 
          value={telemetryData.systemHealth?.disk || 0} 
          threshold={{ warning: 70, critical: 85 }}
          label="Disk Space" 
          unit="%" 
        />
        <StatusIndicator 
          value={telemetryData.systemHealth?.network || 0} 
          threshold={{ warning: 90, critical: 95 }}
          label="Network" 
          unit="%" 
        />
        <StatusIndicator 
          value={telemetryData.systemHealth?.temperature || 0} 
          threshold={{ warning: 55, critical: 70 }}
          label="Temperature" 
          unit="°C" 
        />
      </div>

      {/* Real-Time Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <MiniChart data={cpuHistory} label="CPU Utilization" color="#60A5FA" />
        <MiniChart data={memoryHistory} label="Memory Usage" color="#34D399" />
        <MiniChart data={agentHistory} label="Active Agents" color="#F472B6" />
      </div>

      {/* Agent & Pipeline Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-700 rounded p-4">
          <h3 className="text-lg font-semibold mb-3 text-blue-300">🤖 Agent Metrics</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Active Agents:</span>
              <span className="font-mono text-white">{telemetryData.agentMetrics?.activeAgents}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Task Queue:</span>
              <span className="font-mono text-white">{telemetryData.agentMetrics?.taskQueue}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Success Rate:</span>
              <span className="font-mono text-white">{telemetryData.agentMetrics?.successRate.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Avg Response:</span>
              <span className="font-mono text-white">{telemetryData.agentMetrics?.responseTime.toFixed(0)}ms</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded p-4">
          <h3 className="text-lg font-semibold mb-3 text-green-300">🎥 Content Pipeline</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Videos Processing:</span>
              <span className="font-mono text-white">{telemetryData.contentPipeline?.videosProcessing}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Transcripts Generated:</span>
              <span className="font-mono text-white">{telemetryData.contentPipeline?.transcriptsGenerated}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Thumbnails Created:</span>
              <span className="font-mono text-white">{telemetryData.contentPipeline?.thumbnailsCreated}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Upload Queue:</span>
              <span className="font-mono text-white">{telemetryData.contentPipeline?.uploadQueue}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-6 pt-4 border-t border-gray-700 flex justify-between items-center text-xs text-gray-400">
        <div>
          Buffer: {buffer.length}/{maxBufferSize} samples | 
          Last Update: {new Date(telemetryData.timestamp).toLocaleTimeString()}
        </div>
        <div>
          🚀 NASA OpenMCT Inspired | Real-time telemetry streaming active
        </div>
      </div>
    </div>
  );
};

export default RealTimeDataStreaming;