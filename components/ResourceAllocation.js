// ResourceAllocation.js - Real-time Resource Usage & Allocation Monitor
import { useState, useEffect } from 'react';

const ResourceAllocation = () => {
  const [resources, setResources] = useState({
    cpu: { usage: 67.3, allocated: 8, available: 16, efficiency: 94.2 },
    memory: { usage: 78.9, allocated: 6.3, available: 8, efficiency: 87.1 },
    gpu: { usage: 45.2, allocated: 1, available: 1, efficiency: 98.5 },
    storage: { usage: 82.1, allocated: 189, available: 230, efficiency: 91.7 },
    network: { usage: 34.6, bandwidth: 1000, latency: 42, efficiency: 96.8 },
    tokens: { used: 2847291, limit: 5000000, rate: 450, efficiency: 89.3 }
  });

  const [allocations, setAllocations] = useState([
    { agent: 'Content Strategist', cpu: 25, memory: 32, gpu: 65, priority: 'high', status: 'active' },
    { agent: 'Infrastructure Manager', cpu: 15, memory: 28, gpu: 20, priority: 'medium', status: 'active' },
    { agent: 'Research Assistant', cpu: 35, memory: 25, gpu: 10, priority: 'medium', status: 'active' },
    { agent: 'Quality Assurance', cpu: 20, memory: 10, gpu: 5, priority: 'low', status: 'active' },
    { agent: 'Communication Agent', cpu: 5, memory: 5, gpu: 0, priority: 'low', status: 'standby' }
  ]);

  const [performanceHistory, setPerformanceHistory] = useState([
    { time: '18:45', cpu: 62, memory: 74, gpu: 41, tokens: 2.1 },
    { time: '18:46', cpu: 64, memory: 76, gpu: 43, tokens: 2.3 },
    { time: '18:47', cpu: 66, memory: 77, gpu: 44, tokens: 2.6 },
    { time: '18:48', cpu: 67, memory: 79, gpu: 45, tokens: 2.8 },
    { time: '18:49', cpu: 68, memory: 80, gpu: 46, tokens: 3.1 },
    { time: '18:50', cpu: 67, memory: 79, gpu: 45, tokens: 2.9 }
  ]);

  useEffect(() => {
    // Simulate real-time resource updates
    const interval = setInterval(() => {
      setResources(prev => ({
        cpu: {
          ...prev.cpu,
          usage: Math.max(20, Math.min(95, prev.cpu.usage + (Math.random() - 0.5) * 8)),
          efficiency: Math.max(80, Math.min(99, prev.cpu.efficiency + (Math.random() - 0.4) * 2))
        },
        memory: {
          ...prev.memory,
          usage: Math.max(30, Math.min(90, prev.memory.usage + (Math.random() - 0.5) * 6)),
          efficiency: Math.max(75, Math.min(95, prev.memory.efficiency + (Math.random() - 0.4) * 2))
        },
        gpu: {
          ...prev.gpu,
          usage: Math.max(10, Math.min(80, prev.gpu.usage + (Math.random() - 0.5) * 10)),
          efficiency: Math.max(90, Math.min(99, prev.gpu.efficiency + (Math.random() - 0.4) * 1))
        },
        storage: {
          ...prev.storage,
          usage: Math.max(70, Math.min(95, prev.storage.usage + (Math.random() - 0.5) * 2)),
          efficiency: Math.max(85, Math.min(98, prev.storage.efficiency + (Math.random() - 0.4) * 1))
        },
        network: {
          ...prev.network,
          usage: Math.max(10, Math.min(60, prev.network.usage + (Math.random() - 0.5) * 8)),
          latency: Math.max(20, Math.min(80, prev.network.latency + (Math.random() - 0.5) * 10)),
          efficiency: Math.max(90, Math.min(99, prev.network.efficiency + (Math.random() - 0.4) * 1))
        },
        tokens: {
          ...prev.tokens,
          used: Math.min(prev.tokens.limit, prev.tokens.used + Math.floor(Math.random() * 1000)),
          rate: Math.max(200, Math.min(800, prev.tokens.rate + (Math.random() - 0.5) * 100)),
          efficiency: Math.max(75, Math.min(95, prev.tokens.efficiency + (Math.random() - 0.4) * 3))
        }
      }));

      // Update performance history
      const currentTime = new Date().toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit' 
      });
      
      setPerformanceHistory(prev => [
        ...prev.slice(-5),
        {
          time: currentTime,
          cpu: Math.round(resources.cpu.usage),
          memory: Math.round(resources.memory.usage),
          gpu: Math.round(resources.gpu.usage),
          tokens: Math.round(resources.tokens.used / 1000000 * 10) / 10
        }
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, [resources]);

  const getStatusColor = (usage, type = 'usage') => {
    if (type === 'efficiency') {
      return usage >= 90 ? '#10B981' : usage >= 75 ? '#F59E0B' : '#EF4444';
    }
    return usage >= 80 ? '#EF4444' : usage >= 60 ? '#F59E0B' : '#10B981';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: '#EF4444',
      medium: '#F59E0B',
      low: '#10B981'
    };
    return colors[priority] || '#6B7280';
  };

  const getStatusIcon = (status) => {
    return status === 'active' ? '🟢' : status === 'standby' ? '🟡' : '🔴';
  };

  return (
    <div className="space-y-6">
      {/* Resource Overview Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* CPU Usage */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white font-medium flex items-center">
              🔥 CPU Usage
            </h3>
            <span className="text-xs text-gray-400">{resources.cpu.allocated}/{resources.cpu.available} cores</span>
          </div>
          <div className="text-2xl font-bold mb-2" style={{ color: getStatusColor(resources.cpu.usage) }}>
            {resources.cpu.usage.toFixed(1)}%
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
            <div 
              className="h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${resources.cpu.usage}%`,
                backgroundColor: getStatusColor(resources.cpu.usage)
              }}
            />
          </div>
          <div className="text-xs" style={{ color: getStatusColor(resources.cpu.efficiency, 'efficiency') }}>
            {resources.cpu.efficiency.toFixed(1)}% efficiency
          </div>
        </div>

        {/* Memory Usage */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white font-medium flex items-center">
              💾 Memory
            </h3>
            <span className="text-xs text-gray-400">{resources.memory.allocated.toFixed(1)}/{resources.memory.available}GB</span>
          </div>
          <div className="text-2xl font-bold mb-2" style={{ color: getStatusColor(resources.memory.usage) }}>
            {resources.memory.usage.toFixed(1)}%
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
            <div 
              className="h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${resources.memory.usage}%`,
                backgroundColor: getStatusColor(resources.memory.usage)
              }}
            />
          </div>
          <div className="text-xs" style={{ color: getStatusColor(resources.memory.efficiency, 'efficiency') }}>
            {resources.memory.efficiency.toFixed(1)}% efficiency
          </div>
        </div>

        {/* GPU Usage */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white font-medium flex items-center">
              🎮 GPU
            </h3>
            <span className="text-xs text-gray-400">{resources.gpu.allocated}/{resources.gpu.available} device</span>
          </div>
          <div className="text-2xl font-bold mb-2" style={{ color: getStatusColor(resources.gpu.usage) }}>
            {resources.gpu.usage.toFixed(1)}%
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
            <div 
              className="h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${resources.gpu.usage}%`,
                backgroundColor: getStatusColor(resources.gpu.usage)
              }}
            />
          </div>
          <div className="text-xs" style={{ color: getStatusColor(resources.gpu.efficiency, 'efficiency') }}>
            {resources.gpu.efficiency.toFixed(1)}% efficiency
          </div>
        </div>

        {/* Storage */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white font-medium flex items-center">
              💿 Storage
            </h3>
            <span className="text-xs text-gray-400">{resources.storage.allocated}/{resources.storage.available}GB</span>
          </div>
          <div className="text-2xl font-bold mb-2" style={{ color: getStatusColor(resources.storage.usage) }}>
            {resources.storage.usage.toFixed(1)}%
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
            <div 
              className="h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${resources.storage.usage}%`,
                backgroundColor: getStatusColor(resources.storage.usage)
              }}
            />
          </div>
          <div className="text-xs" style={{ color: getStatusColor(resources.storage.efficiency, 'efficiency') }}>
            {resources.storage.efficiency.toFixed(1)}% efficiency
          </div>
        </div>

        {/* Network */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white font-medium flex items-center">
              🌐 Network
            </h3>
            <span className="text-xs text-gray-400">{resources.network.latency.toFixed(0)}ms</span>
          </div>
          <div className="text-2xl font-bold mb-2" style={{ color: getStatusColor(resources.network.usage) }}>
            {resources.network.usage.toFixed(1)}%
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
            <div 
              className="h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${resources.network.usage}%`,
                backgroundColor: getStatusColor(resources.network.usage)
              }}
            />
          </div>
          <div className="text-xs" style={{ color: getStatusColor(resources.network.efficiency, 'efficiency') }}>
            {resources.network.efficiency.toFixed(1)}% efficiency
          </div>
        </div>

        {/* Token Usage */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white font-medium flex items-center">
              🎯 Tokens
            </h3>
            <span className="text-xs text-gray-400">{resources.tokens.rate}/min</span>
          </div>
          <div className="text-2xl font-bold mb-2 text-purple-400">
            {(resources.tokens.used / 1000000).toFixed(1)}M
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
            <div 
              className="h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${(resources.tokens.used / resources.tokens.limit) * 100}%`,
                backgroundColor: getStatusColor((resources.tokens.used / resources.tokens.limit) * 100)
              }}
            />
          </div>
          <div className="text-xs" style={{ color: getStatusColor(resources.tokens.efficiency, 'efficiency') }}>
            {resources.tokens.efficiency.toFixed(1)}% efficiency
          </div>
        </div>
      </div>

      {/* Agent Resource Allocation */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Agent Resource Allocation</h3>
        </div>
        <div className="p-4 space-y-4">
          {allocations.map((allocation, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">{getStatusIcon(allocation.status)}</span>
                <div>
                  <h4 className="text-white font-medium">{allocation.agent}</h4>
                  <div className="flex items-center space-x-2">
                    <span 
                      className="text-xs px-2 py-1 rounded"
                      style={{ 
                        backgroundColor: getPriorityColor(allocation.priority) + '20',
                        color: getPriorityColor(allocation.priority)
                      }}
                    >
                      {allocation.priority} priority
                    </span>
                    <span className="text-xs text-gray-400">{allocation.status}</span>
                  </div>
                </div>
              </div>
              <div className="text-right space-y-1">
                <div className="text-xs text-gray-400">CPU: {allocation.cpu}% | MEM: {allocation.memory}% | GPU: {allocation.gpu}%</div>
                <div className="flex space-x-1">
                  <div className="w-8 bg-gray-600 rounded h-1">
                    <div className="bg-red-400 h-1 rounded" style={{ width: `${allocation.cpu}%` }}></div>
                  </div>
                  <div className="w-8 bg-gray-600 rounded h-1">
                    <div className="bg-blue-400 h-1 rounded" style={{ width: `${allocation.memory}%` }}></div>
                  </div>
                  <div className="w-8 bg-gray-600 rounded h-1">
                    <div className="bg-green-400 h-1 rounded" style={{ width: `${allocation.gpu}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance History Chart */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Resource Usage History</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-6 gap-4">
            {performanceHistory.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-gray-400 mb-2">{point.time}</div>
                <div className="space-y-1">
                  <div className="bg-red-600 rounded" style={{ height: `${point.cpu}px`, maxHeight: '60px' }}></div>
                  <div className="bg-blue-600 rounded" style={{ height: `${point.memory}px`, maxHeight: '60px' }}></div>
                  <div className="bg-green-600 rounded" style={{ height: `${point.gpu}px`, maxHeight: '60px' }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-6 mt-4 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-600 rounded"></div>
              <span className="text-gray-400">CPU</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span className="text-gray-400">Memory</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded"></div>
              <span className="text-gray-400">GPU</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceAllocation;