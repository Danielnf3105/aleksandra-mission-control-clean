// LearningProgress.js - AI Agent Learning & Capability Evolution Tracker
import { useState, useEffect } from 'react';

const LearningProgress = () => {
  const [learningData, setLearningData] = useState({
    capabilities: [
      { name: 'Content Analysis', current: 94, target: 98, growth: +2.1, category: 'cognitive' },
      { name: 'Task Automation', current: 87, target: 95, growth: +4.3, category: 'operational' },
      { name: 'Pattern Recognition', current: 91, target: 96, growth: +1.8, category: 'cognitive' },
      { name: 'Error Recovery', current: 97, target: 99, growth: +0.8, category: 'resilience' },
      { name: 'Knowledge Synthesis', current: 82, target: 90, growth: +5.2, category: 'cognitive' },
      { name: 'Communication Efficiency', current: 89, target: 94, growth: +2.7, category: 'operational' }
    ],
    milestones: [
      { date: '2026-02-25', achievement: 'Transcription Pipeline Optimization', impact: '+12% processing speed' },
      { date: '2026-02-24', achievement: 'Multi-Agent Coordination Upgrade', impact: '+8% task routing efficiency' },
      { date: '2026-02-23', achievement: 'Error Pattern Analysis Implementation', impact: '+15% error prediction' },
      { date: '2026-02-22', achievement: 'Learning Rate Acceleration Protocol', impact: '+20% knowledge retention' }
    ]
  });

  const [weeklyProgress, setWeeklyProgress] = useState([
    { week: 'W1', cognitive: 78, operational: 72, resilience: 85 },
    { week: 'W2', cognitive: 82, operational: 76, resilience: 88 },
    { week: 'W3', cognitive: 86, operational: 81, resilience: 92 },
    { week: 'W4', cognitive: 91, operational: 87, resilience: 96 }
  ]);

  useEffect(() => {
    // Simulate learning progress updates
    const interval = setInterval(() => {
      setLearningData(prev => ({
        ...prev,
        capabilities: prev.capabilities.map(cap => ({
          ...cap,
          current: Math.min(cap.target, cap.current + (Math.random() * 0.2)),
          growth: cap.growth + (Math.random() - 0.5) * 0.1
        }))
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      cognitive: '#3B82F6',
      operational: '#10B981',
      resilience: '#F59E0B'
    };
    return colors[category] || '#6B7280';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      cognitive: '🧠',
      operational: '⚙️',
      resilience: '🛡️'
    };
    return icons[category] || '📊';
  };

  const getProgressPercentage = (current, target) => {
    return (current / target) * 100;
  };

  return (
    <div className="space-y-6">
      {/* Learning Overview */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-medium flex items-center">
              🧠 Cognitive Growth
            </h3>
            <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">+2.8%</span>
          </div>
          <div className="text-2xl font-bold text-blue-400 mb-2">88.7%</div>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div className="bg-blue-400 h-2 rounded-full" style={{ width: '88.7%' }}></div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-medium flex items-center">
              ⚙️ Operational Efficiency
            </h3>
            <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">+4.1%</span>
          </div>
          <div className="text-2xl font-bold text-green-400 mb-2">88.0%</div>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div className="bg-green-400 h-2 rounded-full" style={{ width: '88%' }}></div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-medium flex items-center">
              🛡️ Resilience & Recovery
            </h3>
            <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded-full">+0.8%</span>
          </div>
          <div className="text-2xl font-bold text-yellow-400 mb-2">97.0%</div>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '97%' }}></div>
          </div>
        </div>
      </div>

      {/* Detailed Capabilities */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Learning Capabilities Matrix</h3>
        </div>
        <div className="p-4 space-y-4">
          {learningData.capabilities.map((capability, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{getCategoryIcon(capability.category)}</span>
                  <div>
                    <h4 className="text-white font-medium">{capability.name}</h4>
                    <span 
                      className="text-xs px-2 py-1 rounded"
                      style={{ 
                        backgroundColor: getCategoryColor(capability.category) + '20',
                        color: getCategoryColor(capability.category)
                      }}
                    >
                      {capability.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">
                    {capability.current.toFixed(1)}%
                  </div>
                  <div className={`text-xs ${capability.growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {capability.growth > 0 ? '+' : ''}{capability.growth.toFixed(1)}% growth
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 items-center">
                <div className="flex-grow bg-gray-600 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${getProgressPercentage(capability.current, capability.target)}%`,
                      backgroundColor: getCategoryColor(capability.category)
                    }}
                  />
                </div>
                <span className="text-xs text-gray-400 min-w-[60px]">
                  Target: {capability.target}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Milestones */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            🏆 Recent Learning Milestones
            <span className="ml-2 text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
              {learningData.milestones.length} this week
            </span>
          </h3>
        </div>
        <div className="p-4 space-y-4">
          {learningData.milestones.map((milestone, index) => (
            <div key={index} className="flex items-start space-x-4 p-3 bg-gray-700 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {index + 1}
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-white font-medium">{milestone.achievement}</h4>
                  <span className="text-xs text-gray-400">{milestone.date}</span>
                </div>
                <p className="text-sm text-green-400">{milestone.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Velocity Chart */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Weekly Learning Velocity</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-4 gap-4">
            {weeklyProgress.map((week, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-gray-400 mb-2">{week.week}</div>
                <div className="space-y-2">
                  <div className="bg-blue-600 h-2 rounded" style={{ width: `${week.cognitive}%` }}></div>
                  <div className="bg-green-600 h-2 rounded" style={{ width: `${week.operational}%` }}></div>
                  <div className="bg-yellow-600 h-2 rounded" style={{ width: `${week.resilience}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-6 mt-4 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span className="text-gray-400">Cognitive</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded"></div>
              <span className="text-gray-400">Operational</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-600 rounded"></div>
              <span className="text-gray-400">Resilience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningProgress;