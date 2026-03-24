// DevOps Kubernetes Operations Center - March 2026
// Modern DevOps monitoring dashboard inspired by Grafana, Datadog, and Kubernetes dashboards
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, TreeMap, Sankey } from 'recharts';

export default function DevOpsKubernetesOperationsCenter() {
  const [clusterMetrics, setClusterMetrics] = useState({
    clusterName: 'aleksandra-prod-cluster',
    nodes: 12,
    pods: 247,
    services: 89,
    deployments: 34,
    cpuUsage: 67.3,
    memoryUsage: 72.8,
    networkIO: 1.2,
    diskUsage: 45.7,
    podStatus: {
      running: 234,
      pending: 8,
      failed: 3,
      succeeded: 2
    },
    healthScore: 96.8
  });

  const [resourceMetrics, setResourceMetrics] = useState([
    { time: '04:18', cpu: 67.3, memory: 72.8, network: 1.2, disk: 45.7, pods: 247 },
    { time: '04:17', cpu: 65.1, memory: 71.2, network: 1.4, disk: 45.5, pods: 245 },
    { time: '04:16', cpu: 69.7, memory: 74.1, network: 0.9, disk: 45.3, pods: 246 },
    { time: '04:15', cpu: 71.2, memory: 73.5, network: 1.6, disk: 45.1, pods: 248 },
    { time: '04:14', cpu: 68.4, memory: 72.9, network: 1.3, disk: 44.9, pods: 244 }
  ]);

  const [deployments, setDeployments] = useState([
    { name: 'aleksandra-ai-engine', replicas: 6, ready: 6, status: 'Healthy', uptime: '15d 8h', cpu: 45.2, memory: 1.8 },
    { name: 'content-processor', replicas: 4, ready: 4, status: 'Healthy', uptime: '7d 12h', cpu: 78.9, memory: 2.4 },
    { name: 'instagram-analyzer', replicas: 3, ready: 3, status: 'Healthy', uptime: '3d 4h', cpu: 92.1, memory: 1.1 },
    { name: 'transcription-service', replicas: 8, ready: 7, status: 'Warning', uptime: '1d 16h', cpu: 156.7, memory: 3.2 },
    { name: 'api-gateway', replicas: 2, ready: 2, status: 'Healthy', uptime: '22d 6h', cpu: 23.4, memory: 0.8 },
    { name: 'mission-dashboard', replicas: 3, ready: 3, status: 'Healthy', uptime: '4h 18m', cpu: 34.7, memory: 1.5 }
  ]);

  const [alerts, setAlerts] = useState([
    { id: 'K8S-001', severity: 'WARNING', title: 'High CPU Usage', description: 'transcription-service pod using >150% CPU', time: '2m ago', source: 'Prometheus' },
    { id: 'K8S-002', severity: 'INFO', title: 'Deployment Scaled', description: 'instagram-analyzer scaled from 2 to 3 replicas', time: '15m ago', source: 'Kubernetes' },
    { id: 'K8S-003', severity: 'CRITICAL', title: 'Pod Restart Loop', description: 'content-processor-7f8b9-xs2f9 restarting', time: '45m ago', source: 'Kubelet' },
    { id: 'K8S-004', severity: 'INFO', title: 'Node Join', description: 'worker-node-13 joined cluster', time: '2h ago', source: 'Cluster Autoscaler' }
  ]);

  const [namespaces, setNamespaces] = useState([
    { name: 'production', pods: 156, cpu: 345.2, memory: 12.8, status: 'Healthy' },
    { name: 'staging', pods: 67, cpu: 123.7, memory: 4.2, status: 'Healthy' },
    { name: 'development', pods: 24, cpu: 45.1, memory: 1.8, status: 'Healthy' },
    { name: 'monitoring', pods: 12, cpu: 67.3, memory: 2.1, status: 'Healthy' },
    { name: 'ingress-nginx', pods: 6, cpu: 23.4, memory: 0.9, status: 'Healthy' }
  ]);

  const [nodeMetrics, setNodeMetrics] = useState([
    { node: 'master-1', role: 'control-plane', status: 'Ready', cpu: 23.4, memory: 45.7, pods: 12, age: '45d' },
    { node: 'worker-1', role: 'worker', status: 'Ready', cpu: 67.8, memory: 78.2, pods: 42, age: '45d' },
    { node: 'worker-2', role: 'worker', status: 'Ready', cpu: 72.1, memory: 81.5, pods: 38, age: '44d' },
    { node: 'worker-3', role: 'worker', status: 'Ready', cpu: 89.3, memory: 67.9, pods: 45, age: '43d' },
    { node: 'worker-4', role: 'worker', status: 'Ready', cpu: 56.7, memory: 72.3, pods: 41, age: '42d' }
  ]);

  const [cicdPipelines, setCicdPipelines] = useState([
    { pipeline: 'aleksandra-ai-engine', status: 'SUCCESS', duration: '8m 34s', commit: 'a1b2c3d', branch: 'main', triggered: '12m ago' },
    { pipeline: 'mission-dashboard', status: 'RUNNING', duration: '4m 18s', commit: '8cac5f1', branch: 'main', triggered: '4m ago' },
    { pipeline: 'content-processor', status: 'SUCCESS', duration: '6m 45s', commit: 'e4f5g6h', branch: 'feature/optimization', triggered: '1h ago' },
    { pipeline: 'instagram-analyzer', status: 'FAILED', duration: '2m 12s', commit: 'i7j8k9l', branch: 'hotfix/bug-123', triggered: '3h ago' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update cluster metrics
      setClusterMetrics(prev => ({
        ...prev,
        cpuUsage: Math.max(30, Math.min(95, prev.cpuUsage + (Math.random() - 0.5) * 5)),
        memoryUsage: Math.max(40, Math.min(90, prev.memoryUsage + (Math.random() - 0.5) * 4)),
        networkIO: Math.max(0.1, Math.min(5, prev.networkIO + (Math.random() - 0.5) * 0.5)),
        diskUsage: Math.max(20, Math.min(80, prev.diskUsage + (Math.random() - 0.5) * 2)),
        pods: prev.pods + Math.floor((Math.random() - 0.5) * 3),
        healthScore: Math.max(90, Math.min(100, prev.healthScore + (Math.random() - 0.5) * 1))
      }));

      // Update resource metrics
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setResourceMetrics(prev => {
        const newMetric = {
          time: currentTime,
          cpu: Math.max(30, Math.min(95, prev[prev.length - 1]?.cpu + (Math.random() - 0.5) * 5)) || 67,
          memory: Math.max(40, Math.min(90, prev[prev.length - 1]?.memory + (Math.random() - 0.5) * 4)) || 72,
          network: Math.max(0.1, Math.min(5, prev[prev.length - 1]?.network + (Math.random() - 0.5) * 0.5)) || 1.2,
          disk: Math.max(20, Math.min(80, prev[prev.length - 1]?.disk + (Math.random() - 0.5) * 2)) || 45,
          pods: Math.max(200, Math.min(300, prev[prev.length - 1]?.pods + Math.floor((Math.random() - 0.5) * 3))) || 247
        };
        
        return [...prev.slice(-19), newMetric]; // Keep last 20 data points
      });

      // Update deployment CPU/memory usage
      setDeployments(prev => prev.map(dep => ({
        ...dep,
        cpu: Math.max(10, Math.min(200, dep.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(0.5, Math.min(5, dep.memory + (Math.random() - 0.5) * 0.2))
      })));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'healthy': case 'ready': case 'success': case 'running': return 'text-green-400';
      case 'warning': case 'pending': return 'text-yellow-400';
      case 'critical': case 'failed': case 'error': return 'text-red-400';
      case 'info': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'info': return 'border-blue-500 bg-blue-900/20 text-blue-300';
      case 'warning': return 'border-yellow-500 bg-yellow-900/20 text-yellow-300';
      case 'critical': return 'border-red-500 bg-red-900/20 text-red-300';
      default: return 'border-gray-500 bg-gray-900/20 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* DevOps Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                ⚙️ DevOps Kubernetes Operations Center
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>CLUSTER: <span className="text-green-400 font-mono">{clusterMetrics.clusterName}</span></div>
                <div>NODES: <span className="text-blue-400">{clusterMetrics.nodes}</span></div>
                <div>PODS: <span className="text-purple-400">{clusterMetrics.pods}</span></div>
                <div>SERVICES: <span className="text-yellow-400">{clusterMetrics.services}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-400">{clusterMetrics.healthScore.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">CLUSTER HEALTH</div>
              <div className="text-xs text-green-300">ALL SYSTEMS OPERATIONAL</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Resource Usage Cards */}
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">CPU Usage</span>
              <span className="text-2xl">🔥</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{clusterMetrics.cpuUsage.toFixed(1)}%</div>
            <div className="bg-gray-700 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full transition-all duration-300" style={{ width: `${clusterMetrics.cpuUsage}%` }}></div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Memory Usage</span>
              <span className="text-2xl">💾</span>
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-1">{clusterMetrics.memoryUsage.toFixed(1)}%</div>
            <div className="bg-gray-700 rounded-full h-2">
              <div className="bg-purple-400 h-2 rounded-full transition-all duration-300" style={{ width: `${clusterMetrics.memoryUsage}%` }}></div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Network I/O</span>
              <span className="text-2xl">🌐</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{clusterMetrics.networkIO.toFixed(1)} GB/s</div>
            <div className="bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full transition-all duration-300" style={{ width: `${(clusterMetrics.networkIO / 5) * 100}%` }}></div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Disk Usage</span>
              <span className="text-2xl">💽</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{clusterMetrics.diskUsage.toFixed(1)}%</div>
            <div className="bg-gray-700 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full transition-all duration-300" style={{ width: `${clusterMetrics.diskUsage}%` }}></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Resource Metrics Chart */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Real-time Resource Metrics
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={resourceMetrics.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" tick={{ fontSize: 10 }} />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Legend />
                <Area type="monotone" dataKey="cpu" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="CPU %" />
                <Area type="monotone" dataKey="memory" stackId="2" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} name="Memory %" />
                <Area type="monotone" dataKey="network" stackId="3" stroke="#10b981" fill="#10b981" fillOpacity={0.4} name="Network GB/s" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Deployments Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚀 Deployment Status
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {deployments.map((deployment, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white">{deployment.name}</span>
                    <span className={`font-bold ${getStatusColor(deployment.status)}`}>{deployment.status}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-300">Replicas: {deployment.ready}/{deployment.replicas}</div>
                    <div className="text-gray-300">Uptime: {deployment.uptime}</div>
                    <div className="text-blue-400">CPU: {deployment.cpu.toFixed(1)}%</div>
                    <div className="text-purple-400">Memory: {deployment.memory.toFixed(1)}Gi</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Cluster Alerts */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Cluster Alerts
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {alerts.map((alert) => (
                <div key={alert.id} className={`p-3 rounded-lg border-l-4 ${getSeverityColor(alert.severity)}`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-sm">{alert.title}</span>
                    <span className="text-xs">{alert.time}</span>
                  </div>
                  <p className="text-sm mb-1">{alert.description}</p>
                  <div className="text-xs">{alert.id} - {alert.source}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Namespaces */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📦 Namespaces
            </h3>
            <div className="space-y-3">
              {namespaces.map((ns, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white">{ns.name}</span>
                    <span className={`text-sm ${getStatusColor(ns.status)}`}>{ns.status}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-gray-300">
                    <div>Pods: {ns.pods}</div>
                    <div>CPU: {ns.cpu}%</div>
                    <div>Mem: {ns.memory}Gi</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CI/CD Pipelines */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔄 CI/CD Pipelines
            </h3>
            <div className="space-y-3">
              {cicdPipelines.map((pipeline, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white text-sm">{pipeline.pipeline}</span>
                    <span className={`text-sm font-bold ${getStatusColor(pipeline.status)}`}>{pipeline.status}</span>
                  </div>
                  <div className="text-xs text-gray-300 space-y-1">
                    <div>Duration: {pipeline.duration} | {pipeline.triggered}</div>
                    <div>Commit: {pipeline.commit} | Branch: {pipeline.branch}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Node Metrics */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🖥️ Node Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {nodeMetrics.map((node, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-white">{node.node}</span>
                  <span className={`text-sm ${getStatusColor(node.status)}`}>{node.status}</span>
                </div>
                <div className="text-xs text-gray-300 space-y-1">
                  <div>Role: {node.role}</div>
                  <div>CPU: {node.cpu}% | Memory: {node.memory}%</div>
                  <div>Pods: {node.pods} | Age: {node.age}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            KUBERNETES OPERATIONS CENTER | ALEKSANDRA AI DEVOPS | REAL-TIME CLUSTER MONITORING
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Powered by Prometheus, Grafana, and Kubernetes APIs | Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}