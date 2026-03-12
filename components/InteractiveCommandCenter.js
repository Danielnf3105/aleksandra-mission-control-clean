// Interactive Command Center - Execute mission control operations and system commands
import { useState, useEffect } from 'react';
import { Terminal, Play, Square, RefreshCw, Settings, Zap, AlertTriangle, CheckCircle, Clock, Command, Code, Database } from 'lucide-react';

export default function InteractiveCommandCenter() {
  const [commandData, setCommandData] = useState({
    commandHistory: [
      {
        id: 'cmd-001',
        command: 'agent restart content-processor',
        status: 'completed',
        output: 'Content Processor agent restarted successfully. Status: ACTIVE',
        timestamp: '2026-03-12T21:45:23Z',
        executionTime: '2.34s',
        user: 'Mission Control',
        category: 'agent'
      },
      {
        id: 'cmd-002',
        command: 'system health-check --all',
        status: 'completed',
        output: 'All systems operational. Health score: 94.8%. No critical issues detected.',
        timestamp: '2026-03-12T21:43:15Z',
        executionTime: '1.12s',
        user: 'Mission Control',
        category: 'system'
      },
      {
        id: 'cmd-003',
        command: 'pipeline scale --workers=8',
        status: 'running',
        output: 'Scaling content processing pipeline to 8 workers... 75% complete',
        timestamp: '2026-03-12T21:42:07Z',
        executionTime: '45s',
        user: 'Mission Control',
        category: 'infrastructure'
      },
      {
        id: 'cmd-004',
        command: 'alert acknowledge --id=alert-12',
        status: 'completed',
        output: 'Alert ALT-12 acknowledged. Status changed to RESOLVED.',
        timestamp: '2026-03-12T21:40:33Z',
        executionTime: '0.89s',
        user: 'Mission Control',
        category: 'alert'
      },
      {
        id: 'cmd-005',
        command: 'backup create --type=full',
        status: 'failed',
        output: 'ERROR: Insufficient storage space. 15GB required, 8GB available.',
        timestamp: '2026-03-12T21:38:22Z',
        executionTime: '12.45s',
        user: 'Mission Control',
        category: 'maintenance'
      }
    ],
    quickActions: [
      {
        name: 'Restart All Agents',
        command: 'agent restart --all',
        category: 'agent',
        icon: RefreshCw,
        color: 'blue',
        description: 'Restart all AI agents in the network',
        estimatedTime: '30s'
      },
      {
        name: 'System Health Check',
        command: 'system health-check --comprehensive',
        category: 'system',
        icon: CheckCircle,
        color: 'green',
        description: 'Run comprehensive system diagnostics',
        estimatedTime: '15s'
      },
      {
        name: 'Scale Pipeline',
        command: 'pipeline scale --auto',
        category: 'infrastructure',
        icon: Zap,
        color: 'yellow',
        description: 'Auto-scale content processing pipeline',
        estimatedTime: '45s'
      },
      {
        name: 'Clear Cache',
        command: 'system cache clear --all',
        category: 'maintenance',
        icon: Database,
        color: 'purple',
        description: 'Clear all system caches',
        estimatedTime: '10s'
      },
      {
        name: 'Security Scan',
        command: 'security scan --full',
        category: 'security',
        icon: AlertTriangle,
        color: 'red',
        description: 'Full security vulnerability scan',
        estimatedTime: '2m'
      },
      {
        name: 'Update Configs',
        command: 'config update --sync',
        category: 'system',
        icon: Settings,
        color: 'cyan',
        description: 'Sync and update all configurations',
        estimatedTime: '20s'
      }
    ],
    availableCommands: [
      {
        category: 'Agent Operations',
        commands: [
          { cmd: 'agent list', desc: 'List all agents and their status' },
          { cmd: 'agent restart <name>', desc: 'Restart specific agent' },
          { cmd: 'agent logs <name>', desc: 'View agent execution logs' },
          { cmd: 'agent performance', desc: 'Show agent performance metrics' }
        ]
      },
      {
        category: 'System Management',
        commands: [
          { cmd: 'system status', desc: 'Display comprehensive system status' },
          { cmd: 'system health-check', desc: 'Run system health diagnostics' },
          { cmd: 'system resources', desc: 'Show resource utilization' },
          { cmd: 'system cleanup', desc: 'Clean temporary files and logs' }
        ]
      },
      {
        category: 'Infrastructure',
        commands: [
          { cmd: 'pipeline scale --workers=N', desc: 'Scale processing pipeline' },
          { cmd: 'infrastructure status', desc: 'Check infrastructure health' },
          { cmd: 'database optimize', desc: 'Optimize database performance' },
          { cmd: 'network diagnostics', desc: 'Run network connectivity tests' }
        ]
      },
      {
        category: 'Security',
        commands: [
          { cmd: 'security scan', desc: 'Run security vulnerability scan' },
          { cmd: 'security audit', desc: 'Generate security audit report' },
          { cmd: 'access review', desc: 'Review access permissions' },
          { cmd: 'threat analysis', desc: 'Analyze potential security threats' }
        ]
      },
      {
        category: 'Maintenance',
        commands: [
          { cmd: 'backup create', desc: 'Create system backup' },
          { cmd: 'backup restore <id>', desc: 'Restore from backup' },
          { cmd: 'maintenance schedule', desc: 'View maintenance schedule' },
          { cmd: 'logs archive', desc: 'Archive old log files' }
        ]
      }
    ],
    executionStats: {
      totalCommands: 247,
      successRate: 94.3,
      avgExecutionTime: '8.7s',
      commandsToday: 23,
      criticalCommands: 5,
      failedCommands: 8
    },
    activeTerminals: 3,
    connectionStatus: 'connected'
  });

  const [currentCommand, setCurrentCommand] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'system', content: 'Mission Control Interactive Command Center v2.1', timestamp: '21:59:00' },
    { type: 'system', content: 'Connected to mission control systems. Ready for commands.', timestamp: '21:59:01' },
    { type: 'prompt', content: 'mission-control >', timestamp: '21:59:01' }
  ]);
  const [isExecuting, setIsExecuting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCommandData(prev => ({
        ...prev,
        executionStats: {
          ...prev.executionStats,
          totalCommands: prev.executionStats.totalCommands + (Math.random() > 0.9 ? 1 : 0),
          successRate: Math.max(90, Math.min(98, prev.executionStats.successRate + (Math.random() - 0.5) * 1)),
          avgExecutionTime: `${Math.max(5, Math.min(15, parseFloat(prev.executionStats.avgExecutionTime) + (Math.random() - 0.5) * 2)).toFixed(1)}s`
        }
      }));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const executeCommand = async (command) => {
    setIsExecuting(true);
    const timestamp = new Date().toLocaleTimeString('en-GB', { hour12: false });
    
    // Add command to terminal output
    setTerminalOutput(prev => [
      ...prev,
      { type: 'command', content: `mission-control > ${command}`, timestamp }
    ]);

    // Simulate command execution
    setTimeout(() => {
      let output;
      let status = 'completed';

      if (command.includes('health-check')) {
        output = 'System health check completed. All systems operational. Health score: 95.2%';
      } else if (command.includes('restart')) {
        output = 'Restart operation initiated. All specified components restarted successfully.';
      } else if (command.includes('scale')) {
        output = 'Scaling operation in progress. Pipeline scaled to requested configuration.';
      } else if (command.includes('scan')) {
        output = 'Security scan completed. No vulnerabilities detected. System secure.';
      } else if (command.includes('backup')) {
        output = 'Backup operation initiated. Creating full system backup...';
      } else if (command.includes('cache clear')) {
        output = 'Cache cleared successfully. 2.3GB freed. Performance optimized.';
      } else {
        output = `Command '${command}' executed successfully. Operation completed.`;
      }

      setTerminalOutput(prev => [
        ...prev,
        { type: 'output', content: output, timestamp: new Date().toLocaleTimeString('en-GB', { hour12: false }) },
        { type: 'prompt', content: 'mission-control >', timestamp: new Date().toLocaleTimeString('en-GB', { hour12: false }) }
      ]);

      // Add to command history
      const newCommand = {
        id: `cmd-${Date.now()}`,
        command,
        status,
        output,
        timestamp: new Date().toISOString(),
        executionTime: `${(Math.random() * 30 + 1).toFixed(2)}s`,
        user: 'Mission Control',
        category: command.includes('agent') ? 'agent' : 
                 command.includes('system') ? 'system' : 
                 command.includes('security') ? 'security' : 'general'
      };

      setCommandData(prev => ({
        ...prev,
        commandHistory: [newCommand, ...prev.commandHistory.slice(0, 9)]
      }));

      setIsExecuting(false);
      setCurrentCommand('');
    }, Math.random() * 3000 + 1000);
  };

  const executeQuickAction = (action) => {
    executeCommand(action.command);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'running': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'failed': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'pending': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'agent': return 'text-blue-400';
      case 'system': return 'text-green-400';
      case 'infrastructure': return 'text-purple-400';
      case 'security': return 'text-red-400';
      case 'maintenance': return 'text-yellow-400';
      case 'alert': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getIconColor = (color) => {
    switch (color) {
      case 'blue': return 'text-blue-400';
      case 'green': return 'text-green-400';
      case 'yellow': return 'text-yellow-400';
      case 'purple': return 'text-purple-400';
      case 'red': return 'text-red-400';
      case 'cyan': return 'text-cyan-400';
      default: return 'text-gray-400';
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-GB', { hour12: false });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Terminal className="w-8 h-8 text-green-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Interactive Command Center</h2>
            <p className="text-gray-400">Execute mission control operations and system commands</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{commandData.activeTerminals}</div>
            <div className="text-xs text-gray-400">Active Terminals</div>
          </div>
          <div className="text-center">
            <div className={`text-lg font-bold px-3 py-1 rounded ${
              commandData.connectionStatus === 'connected' ? 'text-green-400 bg-green-400/20' : 'text-red-400 bg-red-400/20'
            }`}>
              {commandData.connectionStatus.toUpperCase()}
            </div>
            <div className="text-xs text-gray-400">Connection Status</div>
          </div>
        </div>
      </div>

      {/* Execution Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{commandData.executionStats.totalCommands}</div>
          <div className="text-xs text-gray-400">Total Commands</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{commandData.executionStats.successRate.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Success Rate</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{commandData.executionStats.avgExecutionTime}</div>
          <div className="text-xs text-gray-400">Avg Execution</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{commandData.executionStats.commandsToday}</div>
          <div className="text-xs text-gray-400">Today</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-orange-400">{commandData.executionStats.criticalCommands}</div>
          <div className="text-xs text-gray-400">Critical</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-red-400">{commandData.executionStats.failedCommands}</div>
          <div className="text-xs text-gray-400">Failed</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Interactive Terminal */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Terminal className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Command Terminal</h3>
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-xs text-green-400">LIVE</div>
            </div>
          </div>
          
          {/* Terminal Output */}
          <div className="bg-black/50 rounded-lg p-4 mb-4 h-64 overflow-y-auto font-mono text-sm">
            {terminalOutput.map((line, index) => (
              <div key={index} className="flex items-start space-x-2 mb-1">
                <span className="text-gray-500 text-xs w-16">{line.timestamp}</span>
                <span className={`flex-1 ${
                  line.type === 'system' ? 'text-cyan-400' :
                  line.type === 'command' ? 'text-green-400' :
                  line.type === 'output' ? 'text-white' :
                  'text-gray-400'
                }`}>
                  {line.content}
                </span>
              </div>
            ))}
          </div>

          {/* Command Input */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && currentCommand.trim() && !isExecuting) {
                  executeCommand(currentCommand.trim());
                }
              }}
              placeholder="Enter command..."
              disabled={isExecuting}
              className="flex-1 bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 font-mono text-sm"
            />
            <button
              onClick={() => currentCommand.trim() && executeCommand(currentCommand.trim())}
              disabled={isExecuting || !currentCommand.trim()}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-4 py-2 rounded text-white font-medium transition-colors duration-200"
            >
              {isExecuting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Quick Actions</h3>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {commandData.quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => executeQuickAction(action)}
                  disabled={isExecuting}
                  className="p-3 bg-gray-700/30 hover:bg-gray-700/50 disabled:bg-gray-700/20 rounded-lg border border-gray-600/30 transition-colors duration-200 text-left"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 ${getIconColor(action.color)} bg-opacity-20 rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-4 h-4 ${getIconColor(action.color)}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{action.name}</div>
                      <div className="text-gray-300 text-sm">{action.description}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Est. time: {action.estimatedTime} | Category: {action.category}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Command History & Available Commands */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Command History */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Command History</h3>
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {commandData.commandHistory.map((cmd, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-mono text-sm text-cyan-400">{cmd.command}</div>
                  <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(cmd.status)}`}>
                    {cmd.status.toUpperCase()}
                  </div>
                </div>
                <div className="text-gray-300 text-sm mb-2">{cmd.output}</div>
                <div className="flex items-center justify-between text-xs">
                  <span className={`${getCategoryColor(cmd.category)}`}>{cmd.category}</span>
                  <span className="text-gray-500">{formatTimestamp(cmd.timestamp)} | {cmd.executionTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Commands */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Code className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Available Commands</h3>
          </div>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {commandData.availableCommands.map((category, index) => (
              <div key={index}>
                <div className="text-white font-medium mb-2">{category.category}</div>
                <div className="space-y-1">
                  {category.commands.map((cmd, cmdIndex) => (
                    <div key={cmdIndex} className="p-2 bg-gray-700/20 rounded border border-gray-600/20">
                      <div className="flex items-center justify-between">
                        <div className="font-mono text-sm text-green-400">{cmd.cmd}</div>
                        <button
                          onClick={() => setCurrentCommand(cmd.cmd)}
                          className="text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                          Use
                        </button>
                      </div>
                      <div className="text-gray-300 text-xs">{cmd.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Command Center Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
              <Terminal className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{commandData.executionStats.totalCommands}</div>
              <div className="text-sm text-gray-300">Total Commands</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{commandData.executionStats.successRate.toFixed(0)}%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{commandData.executionStats.avgExecutionTime}</div>
              <div className="text-sm text-gray-300">Avg Execution</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 backdrop-blur-sm rounded-lg border border-yellow-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center">
              <Command className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">{commandData.activeTerminals}</div>
              <div className="text-sm text-gray-300">Active Terminals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}