// KnowledgeGraph.js - AI Agent Knowledge Sharing & Semantic Network Visualizer
import { useState, useEffect } from 'react';

const KnowledgeGraph = () => {
  const [knowledgeNodes, setKnowledgeNodes] = useState([
    {
      id: 'KN001',
      type: 'concept',
      label: 'Instagram Video Analysis',
      connections: 8,
      strength: 94,
      agent: 'Content Strategist',
      category: 'content_analysis',
      lastUpdated: '18:54:23',
      confidence: 96.8,
      usageFreq: 23
    },
    {
      id: 'KN002', 
      type: 'process',
      label: 'Task Routing Algorithm',
      connections: 12,
      strength: 87,
      agent: 'Infrastructure Manager',
      category: 'optimization',
      lastUpdated: '18:52:15',
      confidence: 94.2,
      usageFreq: 45
    },
    {
      id: 'KN003',
      type: 'pattern',
      label: 'Error Recovery Patterns',
      connections: 6,
      strength: 91,
      agent: 'Quality Assurance',
      category: 'resilience',
      lastUpdated: '18:47:38',
      confidence: 98.1,
      usageFreq: 12
    },
    {
      id: 'KN004',
      type: 'insight',
      label: 'Learning Velocity Optimization',
      connections: 15,
      strength: 89,
      agent: 'Research Assistant',
      category: 'learning',
      lastUpdated: '18:49:42',
      confidence: 92.3,
      usageFreq: 31
    },
    {
      id: 'KN005',
      type: 'protocol',
      label: 'Inter-Agent Communication',
      connections: 20,
      strength: 96,
      agent: 'Communication Agent',
      category: 'coordination',
      lastUpdated: '18:56:07',
      confidence: 97.5,
      usageFreq: 67
    }
  ]);

  const [semanticClusters, setSemanticClusters] = useState([
    {
      cluster: 'Content Processing',
      nodes: 8,
      coherence: 93.2,
      agents: ['Content Strategist', 'Quality Assurance'],
      keyTopics: ['video analysis', 'transcription', 'quality metrics'],
      growthRate: 12.3
    },
    {
      cluster: 'System Optimization',
      nodes: 12,
      coherence: 87.6,
      agents: ['Infrastructure Manager', 'Research Assistant'],
      keyTopics: ['resource allocation', 'performance tuning', 'predictive scaling'],
      growthRate: 8.7
    },
    {
      cluster: 'Learning & Adaptation',
      nodes: 15,
      coherence: 91.4,
      agents: ['Research Assistant', 'Content Strategist'],
      keyTopics: ['capability evolution', 'pattern recognition', 'knowledge synthesis'],
      growthRate: 15.8
    },
    {
      cluster: 'Communication Networks',
      nodes: 18,
      coherence: 89.1,
      agents: ['Communication Agent', 'Infrastructure Manager'],
      keyTopics: ['message routing', 'protocol optimization', 'network health'],
      growthRate: 6.2
    },
    {
      cluster: 'Error Management',
      nodes: 6,
      coherence: 95.8,
      agents: ['Quality Assurance', 'Infrastructure Manager'],
      keyTopics: ['failure detection', 'recovery strategies', 'resilience patterns'],
      growthRate: 4.1
    }
  ]);

  const [knowledgeFlow, setKnowledgeFlow] = useState([
    {
      from: 'Content Strategist',
      to: 'Quality Assurance',
      knowledge: 'Video analysis quality metrics',
      transferRate: 94,
      volume: 156,
      efficiency: 98.3,
      lastTransfer: '18:55:12'
    },
    {
      from: 'Research Assistant',
      to: 'Infrastructure Manager',
      knowledge: 'Performance optimization insights',
      transferRate: 87,
      volume: 203,
      efficiency: 91.7,
      lastTransfer: '18:53:45'
    },
    {
      from: 'Infrastructure Manager',
      to: 'Communication Agent',
      knowledge: 'Resource allocation patterns',
      transferRate: 91,
      volume: 178,
      efficiency: 95.2,
      lastTransfer: '18:54:33'
    },
    {
      from: 'Quality Assurance',
      to: 'Content Strategist',
      knowledge: 'Error pattern classification',
      transferRate: 89,
      volume: 134,
      efficiency: 92.8,
      lastTransfer: '18:51:28'
    },
    {
      from: 'Communication Agent',
      to: 'Research Assistant',
      knowledge: 'Network optimization findings',
      transferRate: 93,
      volume: 189,
      efficiency: 96.1,
      lastTransfer: '18:56:02'
    }
  ]);

  const [knowledgeStats, setKnowledgeStats] = useState({
    totalNodes: 247,
    activeConnections: 89,
    knowledgeGrowth: 18.5,
    transferEfficiency: 94.2,
    semanticCoherence: 91.7,
    noveltyRate: 12.3
  });

  useEffect(() => {
    // Simulate real-time knowledge graph updates
    const interval = setInterval(() => {
      // Update knowledge nodes
      setKnowledgeNodes(prev => prev.map(node => ({
        ...node,
        strength: Math.max(70, Math.min(99, node.strength + (Math.random() - 0.4) * 3)),
        confidence: Math.max(80, Math.min(99, node.confidence + (Math.random() - 0.3) * 2)),
        usageFreq: Math.max(1, node.usageFreq + Math.floor((Math.random() - 0.6) * 3)),
        connections: Math.max(1, Math.min(25, node.connections + (Math.random() > 0.8 ? 1 : 0)))
      })));

      // Update semantic clusters
      setSemanticClusters(prev => prev.map(cluster => ({
        ...cluster,
        coherence: Math.max(80, Math.min(98, cluster.coherence + (Math.random() - 0.4) * 2)),
        growthRate: Math.max(1, Math.min(25, cluster.growthRate + (Math.random() - 0.5) * 3))
      })));

      // Update knowledge stats
      setKnowledgeStats(prev => ({
        ...prev,
        totalNodes: Math.max(200, prev.totalNodes + Math.floor((Math.random() - 0.3) * 5)),
        activeConnections: Math.max(60, Math.min(120, prev.activeConnections + Math.floor((Math.random() - 0.4) * 4))),
        knowledgeGrowth: Math.max(5, Math.min(30, prev.knowledgeGrowth + (Math.random() - 0.4) * 3)),
        transferEfficiency: Math.max(85, Math.min(98, prev.transferEfficiency + (Math.random() - 0.3) * 1)),
        semanticCoherence: Math.max(80, Math.min(96, prev.semanticCoherence + (Math.random() - 0.4) * 2)),
        noveltyRate: Math.max(5, Math.min(20, prev.noveltyRate + (Math.random() - 0.5) * 2))
      }));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const getNodeTypeColor = (type) => {
    const colors = {
      concept: '#3B82F6',
      process: '#10B981',
      pattern: '#F59E0B',
      insight: '#8B5CF6',
      protocol: '#EF4444'
    };
    return colors[type] || '#6B7280';
  };

  const getNodeTypeIcon = (type) => {
    const icons = {
      concept: '💡',
      process: '⚙️',
      pattern: '🧩',
      insight: '🔍',
      protocol: '📡'
    };
    return icons[type] || '📊';
  };

  const getCategoryColor = (category) => {
    const colors = {
      content_analysis: '#3B82F6',
      optimization: '#10B981',
      resilience: '#F59E0B',
      learning: '#8B5CF6',
      coordination: '#EF4444'
    };
    return colors[category] || '#6B7280';
  };

  const getStrengthColor = (strength) => {
    if (strength >= 90) return '#10B981';
    if (strength >= 75) return '#F59E0B';
    return '#EF4444';
  };

  const getTransferEfficiencyColor = (efficiency) => {
    if (efficiency >= 95) return '#10B981';
    if (efficiency >= 85) return '#F59E0B';
    return '#EF4444';
  };

  return (
    <div className="space-y-6">
      {/* Knowledge Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Total Nodes</div>
          <div className="text-2xl font-bold text-blue-400 mb-1">
            {knowledgeStats.totalNodes}
          </div>
          <div className="text-xs text-green-400">↗ Growing knowledge base</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Active Connections</div>
          <div className="text-2xl font-bold text-green-400 mb-1">
            {knowledgeStats.activeConnections}
          </div>
          <div className="text-xs text-blue-400">Inter-agent links</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Knowledge Growth</div>
          <div className="text-2xl font-bold text-purple-400 mb-1">
            {knowledgeStats.knowledgeGrowth.toFixed(1)}%
          </div>
          <div className="text-xs text-green-400">Weekly rate</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Transfer Efficiency</div>
          <div className="text-2xl font-bold text-indigo-400 mb-1">
            {knowledgeStats.transferEfficiency.toFixed(1)}%
          </div>
          <div className="text-xs text-green-400">High performance</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Semantic Coherence</div>
          <div className="text-2xl font-bold text-yellow-400 mb-1">
            {knowledgeStats.semanticCoherence.toFixed(1)}%
          </div>
          <div className="text-xs text-blue-400">Well structured</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Novelty Rate</div>
          <div className="text-2xl font-bold text-red-400 mb-1">
            {knowledgeStats.noveltyRate.toFixed(1)}%
          </div>
          <div className="text-xs text-green-400">New insights/day</div>
        </div>
      </div>

      {/* Knowledge Nodes */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            🧠 Knowledge Node Network
            <span className="ml-2 text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
              {knowledgeNodes.length} core nodes
            </span>
          </h3>
        </div>
        <div className="p-4 space-y-3">
          {knowledgeNodes.map((node, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{getNodeTypeIcon(node.type)}</span>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-white font-medium">{node.label}</h4>
                    <span 
                      className="text-xs px-2 py-1 rounded font-medium"
                      style={{ 
                        backgroundColor: getNodeTypeColor(node.type) + '20',
                        color: getNodeTypeColor(node.type)
                      }}
                    >
                      {node.type}
                    </span>
                    <span 
                      className="text-xs px-2 py-1 rounded font-medium"
                      style={{ 
                        backgroundColor: getCategoryColor(node.category) + '20',
                        color: getCategoryColor(node.category)
                      }}
                    >
                      {node.category.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="text-sm text-blue-300 mb-1">{node.agent}</div>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span>Connections: {node.connections}</span>
                    <span>Usage: {node.usageFreq}/day</span>
                    <span>Updated: {node.lastUpdated}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold mb-1" style={{ color: getStrengthColor(node.strength) }}>
                  {node.strength}% strength
                </div>
                <div className="text-xs text-gray-400 mb-1">
                  Confidence: {node.confidence.toFixed(1)}%
                </div>
                <div className="w-20 bg-gray-600 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${node.strength}%`,
                      backgroundColor: getStrengthColor(node.strength)
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Semantic Clusters */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            🗂️ Semantic Knowledge Clusters
            <span className="ml-2 text-xs bg-indigo-600 text-white px-2 py-1 rounded-full">
              {semanticClusters.length} active clusters
            </span>
          </h3>
        </div>
        <div className="p-4 space-y-4">
          {semanticClusters.map((cluster, index) => (
            <div key={index} className="p-4 bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-medium">{cluster.cluster}</h4>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-blue-400">{cluster.nodes} nodes</span>
                  <span className="text-sm font-bold text-green-400">
                    {cluster.coherence.toFixed(1)}% coherence
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Contributing Agents:</div>
                  <div className="flex space-x-1">
                    {cluster.agents.map((agent, i) => (
                      <span key={i} className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Key Topics:</div>
                  <div className="flex space-x-1 flex-wrap">
                    {cluster.keyTopics.map((topic, i) => (
                      <span key={i} className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-green-400">
                  Growth Rate: +{cluster.growthRate.toFixed(1)}%/week
                </div>
                <div className="w-24 bg-gray-600 rounded-full h-1">
                  <div 
                    className="bg-green-400 h-1 rounded-full"
                    style={{ width: `${cluster.coherence}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Knowledge Flow */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            🔄 Inter-Agent Knowledge Transfer
            <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
              {knowledgeFlow.length} active flows
            </span>
          </h3>
        </div>
        <div className="p-4 space-y-3">
          {knowledgeFlow.map((flow, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">🔄</span>
                <div>
                  <div className="text-sm text-white mb-1">
                    <span className="text-blue-300">{flow.from}</span>
                    <span className="text-gray-400 mx-2">→</span>
                    <span className="text-green-300">{flow.to}</span>
                  </div>
                  <div className="text-xs text-gray-300 mb-1">{flow.knowledge}</div>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span>Volume: {flow.volume}</span>
                    <span>Rate: {flow.transferRate}%</span>
                    <span>Last: {flow.lastTransfer}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div 
                  className="text-sm font-bold mb-1"
                  style={{ color: getTransferEfficiencyColor(flow.efficiency) }}
                >
                  {flow.efficiency.toFixed(1)}%
                </div>
                <div className="text-xs text-gray-400">efficiency</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeGraph;