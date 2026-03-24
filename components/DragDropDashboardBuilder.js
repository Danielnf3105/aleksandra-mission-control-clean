// Drag & Drop Dashboard Builder - React Grid Layout Implementation
// Inspired by NASA OpenMCT composable views and modern dashboard builders
import React, { useState, useCallback } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout/legacy';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DragDropDashboardBuilder = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [dashboardLayouts, setDashboardLayouts] = useState({});
  const [currentBreakpoint, setCurrentBreakpoint] = useState('lg');
  const [widgets, setWidgets] = useState([
    { 
      i: 'system-health', 
      x: 0, y: 0, w: 3, h: 2, 
      type: 'system-health',
      title: '🖥️ System Health',
      minW: 2, maxW: 6, minH: 2, maxH: 4 
    },
    { 
      i: 'agent-metrics', 
      x: 3, y: 0, w: 3, h: 2, 
      type: 'agent-metrics',
      title: '🤖 Agent Metrics',
      minW: 2, maxW: 6, minH: 2, maxH: 4 
    },
    { 
      i: 'content-pipeline', 
      x: 6, y: 0, w: 2, h: 2, 
      type: 'content-pipeline',
      title: '🎥 Content Pipeline',
      minW: 2, maxW: 4, minH: 2, maxH: 3 
    },
    { 
      i: 'real-time-charts', 
      x: 0, y: 2, w: 4, h: 3, 
      type: 'real-time-charts',
      title: '📊 Real-Time Charts',
      minW: 3, maxW: 8, minH: 2, maxH: 4 
    },
    { 
      i: 'infrastructure', 
      x: 4, y: 2, w: 4, h: 3, 
      type: 'infrastructure',
      title: '🏗️ Infrastructure',
      minW: 3, maxW: 8, minH: 2, maxH: 4 
    }
  ]);

  const [availableWidgets] = useState([
    { type: 'telemetry', title: '📡 Telemetry Stream', icon: '📡', category: 'monitoring' },
    { type: 'security', title: '🔒 Security Monitor', icon: '🔒', category: 'security' },
    { type: 'performance', title: '⚡ Performance', icon: '⚡', category: 'analytics' },
    { type: 'alerts', title: '🚨 Alert Center', icon: '🚨', category: 'monitoring' },
    { type: 'logs', title: '📝 Log Stream', icon: '📝', category: 'debugging' },
    { type: 'network', title: '🌐 Network Status', icon: '🌐', category: 'infrastructure' },
    { type: 'database', title: '💽 Database Monitor', icon: '💽', category: 'infrastructure' },
    { type: 'analytics', title: '📈 Analytics', icon: '📈', category: 'analytics' }
  ]);

  // Simulated real-time data for widgets
  const generateWidgetData = (type) => {
    const baseData = {
      'system-health': {
        cpu: Math.random() * 100,
        memory: 60 + Math.random() * 30,
        disk: 40 + Math.random() * 20,
        uptime: '99.5%'
      },
      'agent-metrics': {
        active: Math.floor(Math.random() * 10) + 1,
        success: 95 + Math.random() * 5,
        queue: Math.floor(Math.random() * 50),
        response: Math.floor(100 + Math.random() * 200)
      },
      'content-pipeline': {
        processing: Math.floor(Math.random() * 20),
        completed: Math.floor(Math.random() * 100),
        queue: Math.floor(Math.random() * 30),
        errors: Math.floor(Math.random() * 5)
      },
      'real-time-charts': {
        dataPoints: Array.from({length: 20}, () => Math.random() * 100),
        trend: 'upward',
        lastUpdate: new Date().toLocaleTimeString()
      },
      'infrastructure': {
        servers: Math.floor(Math.random() * 10) + 5,
        services: Math.floor(Math.random() * 20) + 10,
        health: 'green',
        incidents: Math.floor(Math.random() * 3)
      }
    };
    return baseData[type] || {};
  };

  const handleLayoutChange = useCallback((layout, layouts) => {
    setDashboardLayouts(layouts);
    // In a real app, you'd save this to a backend/localStorage
    localStorage.setItem('missionControlLayout', JSON.stringify(layouts));
  }, []);

  const handleBreakpointChange = useCallback((breakpoint) => {
    setCurrentBreakpoint(breakpoint);
  }, []);

  const addWidget = (widgetType) => {
    const newWidget = {
      i: `${widgetType}-${Date.now()}`,
      x: 0,
      y: 0,
      w: 3,
      h: 2,
      type: widgetType,
      title: availableWidgets.find(w => w.type === widgetType)?.title || widgetType,
      minW: 2,
      maxW: 6,
      minH: 2,
      maxH: 4
    };
    setWidgets(prev => [...prev, newWidget]);
  };

  const removeWidget = (widgetId) => {
    setWidgets(prev => prev.filter(w => w.i !== widgetId));
  };

  const resetLayout = () => {
    setDashboardLayouts({});
    localStorage.removeItem('missionControlLayout');
    // Reset to default positions
    const defaultWidgets = widgets.map((widget, index) => ({
      ...widget,
      x: (index % 4) * 2,
      y: Math.floor(index / 4) * 2,
      w: 3,
      h: 2
    }));
    setWidgets(defaultWidgets);
  };

  const exportLayout = () => {
    const layoutData = {
      layouts: dashboardLayouts,
      widgets: widgets,
      timestamp: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(layoutData, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mission-control-layout-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Widget renderer component
  const WidgetRenderer = ({ widget, data, onRemove, editMode }) => {
    const getStatusColor = (value, thresholds) => {
      if (value > thresholds.critical) return 'text-red-400 bg-red-900/20 border-red-500';
      if (value > thresholds.warning) return 'text-yellow-400 bg-yellow-900/20 border-yellow-500';
      return 'text-green-400 bg-green-900/20 border-green-500';
    };

    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 h-full relative overflow-hidden group">
        {editMode && (
          <button
            onClick={() => onRemove(widget.i)}
            className="absolute top-2 right-2 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ×
          </button>
        )}
        
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-white">{widget.title}</h3>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        {widget.type === 'system-health' && (
          <div className="space-y-2">
            <div className={`flex justify-between p-2 rounded border ${getStatusColor(data.cpu, {warning: 70, critical: 85})}`}>
              <span>CPU:</span><span>{data.cpu?.toFixed(1)}%</span>
            </div>
            <div className={`flex justify-between p-2 rounded border ${getStatusColor(data.memory, {warning: 80, critical: 90})}`}>
              <span>Memory:</span><span>{data.memory?.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Uptime:</span><span>{data.uptime}</span>
            </div>
          </div>
        )}

        {widget.type === 'agent-metrics' && (
          <div className="space-y-2">
            <div className="flex justify-between text-green-300">
              <span>Active:</span><span className="font-mono">{data.active}</span>
            </div>
            <div className="flex justify-between text-blue-300">
              <span>Success:</span><span className="font-mono">{data.success?.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between text-yellow-300">
              <span>Queue:</span><span className="font-mono">{data.queue}</span>
            </div>
            <div className="flex justify-between text-cyan-300">
              <span>Response:</span><span className="font-mono">{data.response}ms</span>
            </div>
          </div>
        )}

        {widget.type === 'content-pipeline' && (
          <div className="space-y-2">
            <div className="flex justify-between text-orange-300">
              <span>Processing:</span><span>{data.processing}</span>
            </div>
            <div className="flex justify-between text-green-300">
              <span>Completed:</span><span>{data.completed}</span>
            </div>
            <div className="flex justify-between text-yellow-300">
              <span>Queue:</span><span>{data.queue}</span>
            </div>
            {data.errors > 0 && (
              <div className="flex justify-between text-red-300">
                <span>Errors:</span><span>{data.errors}</span>
              </div>
            )}
          </div>
        )}

        {widget.type === 'real-time-charts' && (
          <div className="h-full flex flex-col">
            <div className="flex-1 flex items-end justify-between space-x-1">
              {data.dataPoints?.slice(-12).map((point, i) => (
                <div
                  key={i}
                  className="bg-blue-500 w-2 opacity-80"
                  style={{ height: `${(point / 100) * 60}px` }}
                />
              ))}
            </div>
            <div className="text-xs text-gray-400 mt-2">
              Updated: {data.lastUpdate}
            </div>
          </div>
        )}

        {widget.type === 'infrastructure' && (
          <div className="space-y-2">
            <div className="flex justify-between text-cyan-300">
              <span>Servers:</span><span>{data.servers}</span>
            </div>
            <div className="flex justify-between text-purple-300">
              <span>Services:</span><span>{data.services}</span>
            </div>
            <div className={`flex justify-between p-1 rounded ${data.health === 'green' ? 'text-green-300' : 'text-red-300'}`}>
              <span>Health:</span><span className="capitalize">{data.health}</span>
            </div>
            {data.incidents > 0 && (
              <div className="flex justify-between text-red-300">
                <span>Incidents:</span><span>{data.incidents}</span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Dashboard Builder Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              🎛️ Mission Control Dashboard Builder
            </h1>
            <div className="text-sm text-gray-400">
              Breakpoint: <span className="text-cyan-400 font-mono">{currentBreakpoint}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`px-4 py-2 rounded font-medium transition-colors ${
                isEditMode 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
              }`}
            >
              {isEditMode ? '✅ Save Layout' : '✏️ Edit Mode'}
            </button>
            
            <button
              onClick={resetLayout}
              className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded font-medium"
            >
              🔄 Reset
            </button>
            
            <button
              onClick={exportLayout}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded font-medium"
            >
              💾 Export
            </button>
          </div>
        </div>
      </div>

      {/* Widget Palette - Show only in edit mode */}
      {isEditMode && (
        <div className="bg-gray-800 border-b border-gray-700 p-4">
          <h3 className="text-lg font-semibold mb-3 text-blue-300">📦 Available Widgets</h3>
          <div className="flex flex-wrap gap-3">
            {availableWidgets.map(widget => (
              <button
                key={widget.type}
                onClick={() => addWidget(widget.type)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg border border-gray-600 hover:border-gray-500 transition-all"
              >
                <span className="text-lg">{widget.icon}</span>
                <span className="font-medium">{widget.title}</span>
                <span className="text-xs text-gray-500">+</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Dashboard Grid */}
      <div className="p-4">
        <ResponsiveReactGridLayout
          className="layout"
          layouts={dashboardLayouts}
          onLayoutChange={handleLayoutChange}
          onBreakpointChange={handleBreakpointChange}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 8, md: 6, sm: 4, xs: 2, xxs: 1 }}
          rowHeight={80}
          isDraggable={isEditMode}
          isResizable={isEditMode}
          preventCollision={false}
          autoSize={true}
          margin={{ lg: [16, 16], md: [16, 16], sm: [16, 16], xs: [16, 16], xxs: [16, 16] }}
          containerPadding={{ lg: [0, 0], md: [0, 0], sm: [0, 0], xs: [0, 0], xxs: [0, 0] }}
        >
          {widgets.map((widget) => (
            <div key={widget.i}>
              <WidgetRenderer
                widget={widget}
                data={generateWidgetData(widget.type)}
                onRemove={removeWidget}
                editMode={isEditMode}
              />
            </div>
          ))}
        </ResponsiveReactGridLayout>
      </div>

      {/* Footer Status */}
      <div className="bg-gray-800 border-t border-gray-700 p-4 text-center">
        <div className="flex justify-center items-center space-x-6 text-sm">
          <div className="text-gray-400">
            Widgets: <span className="text-white font-mono">{widgets.length}</span>
          </div>
          <div className="text-gray-400">
            Mode: <span className={`font-mono ${isEditMode ? 'text-yellow-400' : 'text-green-400'}`}>
              {isEditMode ? 'EDIT' : 'VIEW'}
            </span>
          </div>
          <div className="text-gray-400">
            Layout: <span className="text-cyan-400">Responsive</span>
          </div>
          <div className="text-gray-400">
            🚀 NASA OpenMCT Inspired Composable Dashboard
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragDropDashboardBuilder;