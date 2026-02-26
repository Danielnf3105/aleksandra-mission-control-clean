// CollaborativeIntelligence.js - Multi-Agent Problem Solving & Coordinated Decision Making
import { useState, useEffect } from 'react';

const CollaborativeIntelligence = () => {
  const [activeSessions, setActiveSessions] = useState([
    {
      id: 'CS001',
      title: 'Instagram Analysis Optimization',
      participants: ['Content Strategist', 'Quality Assurance', 'Research Assistant'],
      status: 'active',
      progress: 73,
      startTime: '18:45:23',
      objective: 'Optimize video transcription accuracy and processing speed',
      currentPhase: 'Analysis & Recommendations',
      insights: 12,
      decisions: 3,
      consensusLevel: 87.3
    },
    {
      id: 'CS002',
      title: 'Resource Allocation Strategy',
      participants: ['Infrastructure Manager', 'Research Assistant'],
      status: 'active',
      progress: 45,
      startTime: '19:02:15',
      objective: 'Develop predictive scaling algorithm for peak loads',
      currentPhase: 'Data Collection',
      insights: 8,
      decisions: 1,
      consensusLevel: 92.1
    },
    {
      id: 'CS003',
      title: 'Error Pattern Analysis',
      participants: ['Quality Assurance', 'Infrastructure Manager', 'Communication Agent'],
      status: 'completed',
      progress: 100,
      startTime: '17:30:12',
      objective: 'Identify and prevent recurring system failures',
      currentPhase: 'Implementation',
      insights: 15,
      decisions: 7,
      consensusLevel: 95.8
    },
    {
      id: 'CS004',
      title: 'Knowledge Transfer Optimization',
      participants: ['Research Assistant', 'Content Strategist'],
      status: 'planning',
      progress: 15,
      startTime: '19:12:45',
      objective: 'Improve cross-agent learning efficiency',
      currentPhase: 'Problem Definition',
      insights: 3,
      decisions: 0,
      consensusLevel: 78.4
    }
  ]);

  const [collaborationMetrics, setCollaborationMetrics] = useState({
    totalSessions: 47,
    activeNow: 2,
    averageConsensus: 88.4,
    successRate: 94.7,
    avgSessionTime: '2h 15m',
    innovationIndex: 76.8
  });

  const [decisionHistory, setDecisionHistory] = useState([
    {
      sessionId: 'CS003',
      decision: 'Implement circuit breaker pattern for API failures',
      timestamp: '19:15:23',
      participants: 3,
      consensusLevel: 96.2,
      implementation: 'approved',
      outcome: 'reduced error rate by 34%',
      impact: 'high'
    },
    {
      sessionId: 'CS001',
      decision: 'Batch video processing during low-utilization periods',
      timestamp: '19:08:17',
      participants: 3,
      consensusLevel: 91.5,
      implementation: 'in_progress',
      outcome: 'pending validation',
      impact: 'medium'
    },
    {
      sessionId: 'CS002',
      decision: 'Deploy predictive scaling model by Feb 28',
      timestamp: '19:05:42',
      participants: 2,
      consensusLevel: 89.3,
      implementation: 'approved',
      outcome: 'development started',
      impact: 'high'
    }
  ]);

  const [knowledgeSynthesis, setKnowledgeSynthesis] = useState([
    {
      concept: 'Adaptive Load Balancing',
      contributors: ['Infrastructure Manager', 'Research Assistant'],
      synthesizedFrom: ['historical performance data', 'ML predictions', 'real-time metrics'],
      confidence: 93.7,
      applications: ['resource allocation', 'task routing', 'error prevention'],
      novelty: 87.2,
      impact: 'breakthrough'
    },
    {
      concept: 'Context-Aware Error Recovery',
      contributors: ['Quality Assurance', 'Communication Agent'],
      synthesizedFrom: ['error patterns', 'system state', 'recovery success rates'],
      confidence: 91.4,
      applications: ['automated recovery', 'prevention strategies', 'resilience planning'],
      novelty: 82.6,
      impact: 'significant'
    },
    {
      concept: 'Semantic Task Optimization',
      contributors: ['Content Strategist', 'Research Assistant'],
      synthesizedFrom: ['task semantics', 'agent capabilities', 'performance history'],
      confidence: 88.9,
      applications: ['intelligent routing', 'capability matching', 'efficiency gains'],
      novelty: 79.3,
      impact: 'moderate'
    }
  ]);

  const [consensusFormation, setConsensusFormation] = useState([
    {
      topic: 'Video Processing Priority Algorithm',
      initialPositions: [
        { agent: 'Content Strategist', position: 'complexity-based priority', confidence: 85 },
        { agent: 'Quality Assurance', position: 'accuracy-first approach', confidence: 92 },
        { agent: 'Infrastructure Manager', position: 'resource-aware scheduling', confidence: 78 }
      ],
      evolutionSteps: [
        { step: 1, description: 'Initial position sharing', consensus: 34 },
        { step: 2, description: 'Evidence presentation', consensus: 67 },
        { step: 3, description: 'Hybrid approach proposal', consensus: 89 },
        { step: 4, description: 'Final agreement reached', consensus: 94 }
      ],
      finalDecision: 'Hybrid complexity-accuracy algorithm with resource constraints',
      timeToConsensus: '23 minutes',
      participantSatisfaction: 91.3
    }
  ]);

  useEffect(() => {
    // Simulate real-time collaboration updates
    const interval = setInterval(() => {
      // Update active sessions progress
      setActiveSessions(prev => prev.map(session => {
        if (session.status === 'active') {
          return {
            ...session,
            progress: Math.min(100, session.progress + Math.random() * 5),
            insights: session.insights + (Math.random() > 0.7 ? 1 : 0),
            consensusLevel: Math.max(70, Math.min(98, session.consensusLevel + (Math.random() - 0.3) * 3))
          };
        }
        return session;
      }));

      // Update collaboration metrics
      setCollaborationMetrics(prev => ({
        ...prev,
        averageConsensus: Math.max(80, Math.min(95, prev.averageConsensus + (Math.random() - 0.4) * 2)),
        successRate: Math.max(90, Math.min(99, prev.successRate + (Math.random() - 0.3) * 1)),
        innovationIndex: Math.max(70, Math.min(85, prev.innovationIndex + (Math.random() - 0.4) * 2))
      }));

      // Occasionally add new decisions
      if (Math.random() < 0.08) {
        const newDecision = {
          sessionId: activeSessions[Math.floor(Math.random() * activeSessions.length)].id,
          decision: 'Collaborative decision reached through agent consensus',
          timestamp: new Date().toLocaleTimeString(),
          participants: Math.floor(Math.random() * 3) + 2,
          consensusLevel: Math.floor(Math.random() * 20) + 80,
          implementation: ['approved', 'in_progress', 'pending'][Math.floor(Math.random() * 3)],
          outcome: 'AI-driven collaborative outcome',
          impact: ['high', 'medium', 'low'][Math.floor(Math.random() * 3)]
        };
        
        setDecisionHistory(prev => [newDecision, ...prev.slice(0, 2)]);
      }
    }, 9000);

    return () => clearInterval(interval);
  }, [activeSessions]);

  const getStatusColor = (status) => {
    const colors = {
      active: '#10B981',
      completed: '#3B82F6',
      planning: '#F59E0B',
      paused: '#6B7280'
    };
    return colors[status] || '#6B7280';
  };

  const getImplementationColor = (status) => {
    const colors = {
      approved: '#10B981',
      in_progress: '#F59E0B',
      pending: '#6B7280'
    };
    return colors[status] || '#6B7280';
  };

  const getImpactColor = (impact) => {
    const colors = {
      breakthrough: '#EF4444',
      significant: '#F59E0B',
      moderate: '#3B82F6',
      high: '#EF4444',
      medium: '#F59E0B',
      low: '#10B981'
    };
    return colors[impact] || '#6B7280';
  };

  const getConsensusColor = (level) => {
    if (level >= 90) return '#10B981';
    if (level >= 75) return '#F59E0B';
    return '#EF4444';
  };

  return (
    <div className="space-y-6">
      {/* Collaboration Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Active Sessions</div>
          <div className="text-2xl font-bold text-green-400 mb-1">
            {collaborationMetrics.activeNow}
          </div>
          <div className="text-xs text-blue-400">Multi-agent collaboration</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Avg Consensus</div>
          <div className="text-2xl font-bold text-purple-400 mb-1">
            {collaborationMetrics.averageConsensus.toFixed(1)}%
          </div>
          <div className="text-xs text-green-400">High agreement</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Success Rate</div>
          <div className="text-2xl font-bold text-indigo-400 mb-1">
            {collaborationMetrics.successRate.toFixed(1)}%
          </div>
          <div className="text-xs text-green-400">Excellent outcomes</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Total Sessions</div>
          <div className="text-2xl font-bold text-blue-400 mb-1">
            {collaborationMetrics.totalSessions}
          </div>
          <div className="text-xs text-blue-400">Collaborative decisions</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Avg Session Time</div>
          <div className="text-2xl font-bold text-yellow-400 mb-1">
            {collaborationMetrics.avgSessionTime}
          </div>
          <div className="text-xs text-green-400">Efficient collaboration</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Innovation Index</div>
          <div className="text-2xl font-bold text-red-400 mb-1">
            {collaborationMetrics.innovationIndex.toFixed(1)}
          </div>
          <div className="text-xs text-purple-400">Creative solutions</div>
        </div>
      </div>

      {/* Active Collaboration Sessions */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            🤝 Active Collaboration Sessions
            <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
              {activeSessions.filter(s => s.status === 'active').length} active
            </span>
          </h3>
        </div>
        <div className="p-4 space-y-4">
          {activeSessions.map((session, index) => (
            <div key={index} className="p-4 bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-medium">{session.title}</h4>
                <div className="flex items-center space-x-2">
                  <span 
                    className="text-xs px-2 py-1 rounded font-medium"
                    style={{ 
                      backgroundColor: getStatusColor(session.status) + '20',
                      color: getStatusColor(session.status)
                    }}
                  >
                    {session.status}
                  </span>
                  <span className="text-sm font-bold text-purple-400">{session.progress}%</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-300 mb-3">{session.objective}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="text-xs text-gray-400 mb-2">Participants:</div>
                  <div className="flex space-x-1 flex-wrap">
                    {session.participants.map((participant, i) => (
                      <span key={i} className="text-xs bg-blue-600 text-white px-2 py-1 rounded mb-1">
                        {participant}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Current Phase:</div>
                  <div className="text-sm text-blue-300">{session.currentPhase}</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="space-x-4 text-gray-400">
                  <span>Started: {session.startTime}</span>
                  <span>Insights: {session.insights}</span>
                  <span>Decisions: {session.decisions}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Consensus:</span>
                  <span 
                    className="font-bold"
                    style={{ color: getConsensusColor(session.consensusLevel) }}
                  >
                    {session.consensusLevel.toFixed(1)}%
                  </span>
                </div>
              </div>

              {session.status === 'active' && (
                <div className="mt-3">
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${session.progress}%`,
                        backgroundColor: getStatusColor(session.status)
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Knowledge Synthesis */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            🧠 Collaborative Knowledge Synthesis
            <span className="ml-2 text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
              {knowledgeSynthesis.length} new concepts
            </span>
          </h3>
        </div>
        <div className="p-4 space-y-4">
          {knowledgeSynthesis.map((concept, index) => (
            <div key={index} className="p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-medium">{concept.concept}</h4>
                <div className="flex items-center space-x-2">
                  <span 
                    className="text-xs px-2 py-1 rounded font-medium"
                    style={{ 
                      backgroundColor: getImpactColor(concept.impact) + '20',
                      color: getImpactColor(concept.impact)
                    }}
                  >
                    {concept.impact}
                  </span>
                  <span className="text-sm font-bold text-green-400">{concept.confidence.toFixed(1)}%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-gray-400 mb-1">Contributors:</div>
                  <div className="text-blue-300">{concept.contributors.join(', ')}</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Applications:</div>
                  <div className="text-green-300">{concept.applications.join(', ')}</div>
                </div>
              </div>
              
              <div className="mt-2 text-xs">
                <span className="text-gray-400">Synthesized from: </span>
                <span className="text-gray-300">{concept.synthesizedFrom.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decision History */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">📋 Collaborative Decision History</h3>
        </div>
        <div className="p-4 space-y-3">
          {decisionHistory.map((decision, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">⚖️</span>
                <div>
                  <div className="text-sm text-white mb-1">{decision.decision}</div>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span>Session: {decision.sessionId}</span>
                    <span>Participants: {decision.participants}</span>
                    <span>Time: {decision.timestamp}</span>
                  </div>
                  <div className="text-xs text-blue-300 mt-1">{decision.outcome}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold mb-1" style={{ color: getConsensusColor(decision.consensusLevel) }}>
                  {decision.consensusLevel.toFixed(1)}%
                </div>
                <div 
                  className="text-xs px-2 py-1 rounded font-medium"
                  style={{ 
                    backgroundColor: getImplementationColor(decision.implementation) + '20',
                    color: getImplementationColor(decision.implementation)
                  }}
                >
                  {decision.implementation.replace('_', ' ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Consensus Formation Example */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">🎯 Consensus Formation Process</h3>
        </div>
        <div className="p-4">
          {consensusFormation.map((process, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-white font-medium">{process.topic}</h4>
              
              <div className="space-y-2">
                <div className="text-xs text-gray-400 mb-2">Initial Positions:</div>
                {process.initialPositions.map((pos, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-gray-700 rounded text-xs">
                    <span className="text-blue-300">{pos.agent}</span>
                    <span className="text-gray-300">{pos.position}</span>
                    <span className="text-green-400">{pos.confidence}% confident</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-xs text-gray-400 mb-2">Consensus Evolution:</div>
                <div className="grid grid-cols-4 gap-2">
                  {process.evolutionSteps.map((step, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xs text-gray-400">Step {step.step}</div>
                      <div className="text-lg font-bold" style={{ color: getConsensusColor(step.consensus) }}>
                        {step.consensus}%
                      </div>
                      <div className="text-xs text-gray-300">{step.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-green-900 bg-opacity-20 rounded-lg">
                <div className="text-sm text-white mb-1">Final Decision:</div>
                <div className="text-xs text-green-300 mb-2">{process.finalDecision}</div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Time to consensus: {process.timeToConsensus}</span>
                  <span>Satisfaction: {process.participantSatisfaction}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollaborativeIntelligence;