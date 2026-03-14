// Enhanced Mobile Dashboard - 2026 Best Practices Implementation
// Mobile-first Mission Control with progressive disclosure and touch optimization
import { useState, useEffect, useRef } from 'react';
import { 
  Activity, AlertTriangle, Battery, Cpu, HardDrive, 
  Network, Zap, TrendingUp, Eye, Brain, Target,
  ChevronDown, ChevronUp, MoreHorizontal, RefreshCw,
  Maximize2, Minimize2, Settings, Bell, Search
} from 'lucide-react';

export default function EnhancedMobileDashboard() {
  const [expandedCards, setExpandedCards] = useState({});
  const [swipeDirection, setSwipeDirection] = useState('');
  const [orientation, setOrientation] = useState('portrait');
  const [refreshing, setRefreshing] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchEndRef = useRef({ x: 0, y: 0 });

  // Priority metrics - most critical shown first on mobile
  const [priorityMetrics, setPriorityMetrics] = useState({
    systemHealth: {
      value: 98.7,
      status: 'optimal',
      trend: 'stable',
      priority: 1,
      alerts: 0
    },
    agentPerformance: {
      value: 96.4,
      status: 'excellent',
      trend: 'improving',
      priority: 2,
      alerts: 0
    },
    contentProcessing: {
      value: 15,
      status: 'active',
      trend: 'increasing',
      priority: 3,
      alerts: 1
    },
    apiHealth: {
      value: 94.2,
      status: 'good',
      trend: 'stable',
      priority: 4,
      alerts: 0
    }
  });

  // Mobile-optimized alerts
  const [mobileAlerts, setMobileAlerts] = useState([
    {
      id: 1,
      type: 'info',
      title: 'Content Spike Incoming',
      message: 'Expected 28 videos in 45 min',
      timestamp: '2 min ago',
      priority: 'medium',
      actionable: true
    },
    {
      id: 2,
      type: 'optimization',
      title: 'Cost Optimization',
      message: '22% token efficiency available',
      timestamp: '15 min ago',
      priority: 'low',
      actionable: true
    }
  ]);

  useEffect(() => {
    // Detect orientation changes
    const handleOrientationChange = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    handleOrientationChange();
    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  useEffect(() => {
    // Real-time data updates optimized for mobile
    const interval = setInterval(() => {
      setPriorityMetrics(prev => ({
        ...prev,
        systemHealth: {
          ...prev.systemHealth,
          value: Math.max(95, Math.min(99.5, prev.systemHealth.value + (Math.random() - 0.4) * 1.2))
        },
        agentPerformance: {
          ...prev.agentPerformance,
          value: Math.max(90, Math.min(99, prev.agentPerformance.value + (Math.random() - 0.3) * 0.8))
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Touch gesture handlers
  const handleTouchStart = (e) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const handleTouchEnd = (e) => {
    touchEndRef.current = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    };

    const deltaX = touchEndRef.current.x - touchStartRef.current.x;
    const deltaY = touchEndRef.current.y - touchStartRef.current.y;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        setSwipeDirection('right');
        // Handle swipe right - maybe go to previous view
      } else {
        setSwipeDirection('left');
        // Handle swipe left - maybe go to next view
      }
      
      setTimeout(() => setSwipeDirection(''), 300);
    }

    // Pull-to-refresh detection
    if (deltaY > 100 && touchStartRef.current.y < 100) {
      handleRefresh();
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      // Update data here
    }, 1000);
  };

  const toggleCardExpansion = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'optimal': return 'text-green-400';
      case 'excellent': return 'text-green-300';
      case 'good': return 'text-blue-400';
      case 'active': return 'text-yellow-400';
      case 'warning': return 'text-orange-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityIcon = (priority) => {
    switch(priority) {
      case 1: return <Target className="w-4 h-4" />;
      case 2: return <Brain className="w-4 h-4" />;
      case 3: return <Activity className="w-4 h-4" />;
      case 4: return <Network className="w-4 h-4" />;
      default: return <Eye className="w-4 h-4" />;
    }
  };

  return (
    <div 
      className="min-h-screen bg-black text-white overflow-x-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Mobile Header - Compact but informative */}
      <div className="bg-gradient-to-r from-gray-900 to-black border-b border-gray-700 sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                🦾 Mission Control
              </div>
              {refreshing && (
                <RefreshCw className="w-4 h-4 text-blue-400 animate-spin" />
              )}
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Quick status indicators */}
              <div className="flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full ${priorityMetrics.systemHealth.value > 95 ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`}></div>
                <span className="text-xs font-mono">{priorityMetrics.systemHealth.value.toFixed(1)}%</span>
              </div>
              
              <button className="p-1 rounded-md hover:bg-gray-700 transition-colors">
                <Bell className="w-4 h-4 text-gray-400" />
                {mobileAlerts.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {mobileAlerts.length}
                  </span>
                )}
              </button>
            </div>
          </div>
          
          {/* Swipe feedback */}
          {swipeDirection && (
            <div className="mt-2 text-xs text-center text-gray-400">
              Swipe {swipeDirection} detected
            </div>
          )}
        </div>
      </div>

      {/* Priority Metrics Grid - Mobile-first design */}
      <div className="p-4 space-y-4">
        <div className="text-sm font-semibold text-gray-400 flex items-center justify-between">
          <span>Priority Metrics</span>
          <span className="text-xs">Pull down to refresh</span>
        </div>
        
        {Object.entries(priorityMetrics)
          .sort(([,a], [,b]) => a.priority - b.priority)
          .map(([key, metric]) => (
            <div 
              key={key} 
              className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden"
            >
              {/* Compact metric header */}
              <button
                onClick={() => toggleCardExpansion(key)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  {getPriorityIcon(metric.priority)}
                  <div className="text-left">
                    <div className="font-semibold capitalize text-white">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className={`text-lg font-mono ${getStatusColor(metric.status)}`}>
                      {typeof metric.value === 'number' 
                        ? metric.value.toFixed(1) + (key.includes('Health') || key.includes('Performance') ? '%' : '')
                        : metric.value}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {metric.alerts > 0 && (
                    <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {metric.alerts}
                    </div>
                  )}
                  <TrendingUp className={`w-4 h-4 ${
                    metric.trend === 'improving' ? 'text-green-400' :
                    metric.trend === 'stable' ? 'text-blue-400' :
                    'text-yellow-400'
                  }`} />
                  {expandedCards[key] ? 
                    <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  }
                </div>
              </button>

              {/* Expandable details - Progressive disclosure */}
              {expandedCards[key] && (
                <div className="px-4 pb-4 border-t border-gray-700 bg-gray-800">
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Status:</span>
                      <span className={`font-mono ${getStatusColor(metric.status)}`}>
                        {metric.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Trend:</span>
                      <span className="font-mono text-white">{metric.trend.toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Priority:</span>
                      <span className="font-mono text-white">#{metric.priority}</span>
                    </div>
                    
                    {/* Mobile-specific quick actions */}
                    <div className="mt-3 pt-3 border-t border-gray-600">
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-xs font-semibold">
                          View Details
                        </button>
                        <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-xs font-semibold">
                          Optimize
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        }
      </div>

      {/* Mobile Alerts Section */}
      {mobileAlerts.length > 0 && (
        <div className="p-4">
          <div className="text-sm font-semibold text-gray-400 mb-3 flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Active Alerts
          </div>
          
          <div className="space-y-3">
            {mobileAlerts.map((alert) => (
              <div key={alert.id} className="bg-gray-900 border border-gray-700 rounded-lg p-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-semibold text-white text-sm">{alert.title}</div>
                    <div className="text-gray-300 text-sm mt-1">{alert.message}</div>
                    <div className="text-gray-500 text-xs mt-2">{alert.timestamp}</div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-3">
                    <span className={`text-xs px-2 py-1 rounded ${{
                      'high': 'bg-red-600 text-white',
                      'medium': 'bg-yellow-600 text-white',
                      'low': 'bg-blue-600 text-white'
                    }[alert.priority] || 'bg-gray-600 text-white'}`}>
                      {alert.priority}
                    </span>
                    
                    {alert.actionable && (
                      <button className="p-1 rounded-md hover:bg-gray-700">
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Orientation-aware bottom actions */}
      <div className={`fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 ${
        orientation === 'landscape' ? 'py-2' : 'py-4'
      }`}>
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors">
            <Activity className="w-5 h-5" />
            <span className="text-xs">Status</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors">
            <Brain className="w-5 h-5" />
            <span className="text-xs">AI</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors">
            <Zap className="w-5 h-5" />
            <span className="text-xs">Alerts</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </div>

      {/* Bottom padding to prevent content hiding behind fixed navigation */}
      <div className="h-20"></div>
    </div>
  );
}