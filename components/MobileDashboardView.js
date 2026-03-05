// MobileDashboardView.js - Mobile-optimized dashboard overview
import { useState, useEffect } from 'react';
import { MobileCard, MobileGrid, TouchButton, MobileMetricCard } from './MobileResponsiveLayout';

const MobileDashboardView = () => {
  const [quickStats, setQuickStats] = useState({
    systemHealth: 98.7,
    activeAgents: 6,
    tasksCompleted: 47,
    securityStatus: 'SECURE',
    lastUpdate: new Date().toLocaleTimeString()
  });

  const [priorityAlerts, setPriorityAlerts] = useState([
    { id: 1, type: 'INFO', message: 'Mission control dashboard deployed successfully', time: '2m ago' },
    { id: 2, type: 'SUCCESS', message: 'Security scan completed - all clear', time: '15m ago' },
    { id: 3, type: 'WARNING', message: 'Disk usage at 89% - consider cleanup', time: '1h ago' }
  ]);

  const [quickActions, setQuickActions] = useState([
    { id: 1, icon: '🚀', label: 'Deploy', action: 'deploy' },
    { id: 2, icon: '📊', label: 'Analytics', action: 'analytics' },
    { id: 3, icon: '🔧', label: 'Terminal', action: 'terminal' },
    { id: 4, icon: '🛡️', label: 'Security', action: 'security' }
  ]);

  const [activeProcesses, setActiveProcesses] = useState([
    { name: 'Instagram Processing', progress: 87, status: 'RUNNING', eta: '5m' },
    { name: 'Data Visualization', progress: 100, status: 'COMPLETE', eta: 'Done' },
    { name: 'Security Scan', progress: 45, status: 'RUNNING', eta: '12m' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuickStats(prev => ({
        ...prev,
        systemHealth: Math.max(95, Math.min(99, prev.systemHealth + (Math.random() - 0.5) * 1)),
        tasksCompleted: prev.tasksCompleted + (Math.random() > 0.8 ? 1 : 0),
        lastUpdate: new Date().toLocaleTimeString()
      }));

      setActiveProcesses(prev => prev.map(process => 
        process.status === 'RUNNING' && process.progress < 100 ? {
          ...process,
          progress: Math.min(100, process.progress + Math.random() * 3)
        } : process
      ));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleQuickAction = (action) => {
    // Simulate quick action feedback
    const newAlert = {
      id: Date.now(),
      type: 'INFO',
      message: `${action.toUpperCase()} action triggered`,
      time: 'now'
    };
    setPriorityAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'RUNNING': return 'text-blue-400';
      case 'COMPLETE': return 'text-green-400';
      case 'ERROR': return 'text-red-400';
      case 'PENDING': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'SUCCESS': return 'border-green-500/30 bg-green-500/10';
      case 'WARNING': return 'border-yellow-500/30 bg-yellow-500/10';
      case 'ERROR': return 'border-red-500/30 bg-red-500/10';
      default: return 'border-blue-500/30 bg-blue-500/10';
    }
  };

  return (
    <div className="space-y-4 pb-20"> {/* Extra padding for mobile bottom nav */}
      {/* Mission Status Overview */}
      <MobileCard title="🎯 MISSION STATUS" className="border-green-500/30">
        <MobileGrid cols={2}>
          <MobileMetricCard
            title="SYSTEM HEALTH"
            value={`${quickStats.systemHealth.toFixed(1)}%`}
            subtitle="All systems operational"
            icon="🟢"
            color="green"
          />
          <MobileMetricCard
            title="ACTIVE AGENTS"
            value={quickStats.activeAgents}
            subtitle="AI agents online"
            icon="🤖"
            color="blue"
          />
          <MobileMetricCard
            title="TASKS COMPLETED"
            value={quickStats.tasksCompleted}
            subtitle="Today's progress"
            icon="✅"
            color="purple"
          />
          <MobileMetricCard
            title="SECURITY STATUS"
            value={quickStats.securityStatus}
            subtitle="Threat level: LOW"
            icon="🛡️"
            color="cyan"
          />
        </MobileGrid>
        <div className="mt-3 text-xs text-gray-400 text-center">
          Last updated: {quickStats.lastUpdate}
        </div>
      </MobileCard>

      {/* Quick Actions */}
      <MobileCard title="⚡ QUICK ACTIONS" className="border-blue-500/30">
        <MobileGrid cols={2}>
          {quickActions.map((action) => (
            <TouchButton
              key={action.id}
              onClick={() => handleQuickAction(action.action)}
              variant="secondary"
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-2xl">{action.icon}</span>
              <span className="text-sm">{action.label}</span>
            </TouchButton>
          ))}
        </MobileGrid>
      </MobileCard>

      {/* Active Processes */}
      <MobileCard title="🔄 ACTIVE PROCESSES" className="border-purple-500/30">
        <div className="space-y-3">
          {activeProcesses.map((process, index) => (
            <div key={index} className="bg-gray-700/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">{process.name}</span>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs font-mono ${getStatusColor(process.status)}`}>
                    {process.status}
                  </span>
                  <span className="text-xs text-gray-400">{process.eta}</span>
                </div>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    process.status === 'COMPLETE' ? 'bg-green-400' : 
                    process.status === 'RUNNING' ? 'bg-blue-400' : 'bg-gray-400'
                  }`}
                  style={{ width: `${process.progress}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-400 mt-1 text-right">
                {process.progress.toFixed(0)}%
              </div>
            </div>
          ))}
        </div>
      </MobileCard>

      {/* Priority Alerts */}
      <MobileCard title="🚨 PRIORITY ALERTS" className="border-yellow-500/30">
        <div className="space-y-2">
          {priorityAlerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`border rounded-lg p-3 ${getAlertColor(alert.type)}`}
            >
              <div className="flex items-start space-x-2">
                <span className="text-lg">
                  {alert.type === 'SUCCESS' ? '✅' : 
                   alert.type === 'WARNING' ? '⚠️' :
                   alert.type === 'ERROR' ? '❌' : 'ℹ️'}
                </span>
                <div className="flex-1">
                  <div className="text-sm text-white">{alert.message}</div>
                  <div className="text-xs text-gray-400 mt-1">{alert.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MobileCard>

      {/* System Resources */}
      <MobileCard title="📊 SYSTEM RESOURCES" className="border-cyan-500/30">
        <div className="space-y-4">
          {[
            { name: 'CPU Usage', value: 42, max: 100, color: 'blue', unit: '%' },
            { name: 'Memory', value: 78, max: 100, color: 'purple', unit: '%' },
            { name: 'Disk Space', value: 89, max: 100, color: 'yellow', unit: '%' },
            { name: 'Network', value: 34, max: 100, color: 'green', unit: '%' }
          ].map((resource, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">{resource.name}</span>
                <span className={`text-sm font-bold text-${resource.color}-400`}>
                  {resource.value}{resource.unit}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`bg-${resource.color}-400 h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${resource.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </MobileCard>

      {/* Mission Timeline */}
      <MobileCard title="📅 RECENT ACTIVITY" className="border-indigo-500/30">
        <div className="space-y-3">
          {[
            { time: '2m ago', event: 'Mobile responsive layout deployed', type: 'deploy' },
            { time: '15m ago', event: 'Security operations center enhanced', type: 'security' },
            { time: '30m ago', event: 'Data visualization center updated', type: 'update' },
            { time: '1h ago', event: 'Collaborative control features added', type: 'feature' }
          ].map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className={`w-2 h-2 rounded-full mt-2 ${
                activity.type === 'deploy' ? 'bg-green-400' :
                activity.type === 'security' ? 'bg-red-400' :
                activity.type === 'update' ? 'bg-blue-400' :
                'bg-purple-400'
              } animate-pulse`}></div>
              <div className="flex-1">
                <div className="text-sm text-white">{activity.event}</div>
                <div className="text-xs text-gray-400">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </MobileCard>
    </div>
  );
};

export default MobileDashboardView;