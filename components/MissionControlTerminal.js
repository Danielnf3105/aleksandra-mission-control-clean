// MissionControlTerminal.js - Interactive Command Terminal for Mission Control
import { useState, useEffect, useRef } from 'react';

const MissionControlTerminal = () => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'system', text: '🚀 Aleksandra Mission Control Terminal v2.1.0', timestamp: new Date() },
    { type: 'system', text: 'Type "help" for available commands', timestamp: new Date() },
    { type: 'prompt', text: 'aleksandra@mission-control:~$', timestamp: new Date() }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalRef = useRef(null);

  const availableCommands = {
    'help': {
      description: 'Show available commands',
      usage: 'help [command]'
    },
    'status': {
      description: 'Show system status overview',
      usage: 'status [component]'
    },
    'deploy': {
      description: 'Deploy current changes to Vercel',
      usage: 'deploy [--force]'
    },
    'build': {
      description: 'Build the mission control dashboard',
      usage: 'build [--production]'
    },
    'logs': {
      description: 'Show system logs',
      usage: 'logs [--tail] [component]'
    },
    'monitor': {
      description: 'Monitor real-time metrics',
      usage: 'monitor [system|agents|network]'
    },
    'agents': {
      description: 'Manage AI agents',
      usage: 'agents [list|status|restart] [agent-id]'
    },
    'git': {
      description: 'Git operations',
      usage: 'git [status|commit|push] [message]'
    },
    'ps': {
      description: 'Show running processes',
      usage: 'ps [aux]'
    },
    'clear': {
      description: 'Clear terminal output',
      usage: 'clear'
    },
    'uptime': {
      description: 'Show system uptime',
      usage: 'uptime'
    },
    'df': {
      description: 'Show disk space usage',
      usage: 'df [-h]'
    },
    'top': {
      description: 'Show resource usage',
      usage: 'top'
    },
    'ping': {
      description: 'Test network connectivity',
      usage: 'ping [host]'
    },
    'config': {
      description: 'Show/edit configuration',
      usage: 'config [get|set] [key] [value]'
    }
  };

  useEffect(() => {
    // Scroll to bottom when new output is added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  const addOutput = (type, text, timestamp = new Date()) => {
    setTerminalOutput(prev => [...prev, { type, text, timestamp }]);
  };

  const simulateCommandExecution = async (command, args) => {
    setIsProcessing(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));

    switch (command) {
      case 'help':
        if (args.length > 0) {
          const cmd = args[0];
          if (availableCommands[cmd]) {
            addOutput('success', `${cmd}: ${availableCommands[cmd].description}`);
            addOutput('info', `Usage: ${availableCommands[cmd].usage}`);
          } else {
            addOutput('error', `Unknown command: ${cmd}`);
          }
        } else {
          addOutput('info', 'Available commands:');
          Object.keys(availableCommands).forEach(cmd => {
            addOutput('info', `  ${cmd.padEnd(10)} - ${availableCommands[cmd].description}`);
          });
        }
        break;

      case 'status':
        addOutput('success', '🎯 Mission Control System Status');
        addOutput('info', '┌─ System Health ────────────────┐');
        addOutput('info', '│ CPU Usage:        42.1%        │');
        addOutput('info', '│ Memory Usage:     78.3%        │');
        addOutput('info', '│ Disk Usage:       89.0%        │');
        addOutput('info', '│ Network:          EXCELLENT    │');
        addOutput('info', '│ OpenClaw Gateway: RUNNING      │');
        addOutput('info', '│ Mission Control:  DEPLOYED     │');
        addOutput('info', '└────────────────────────────────┘');
        addOutput('success', 'All systems operational ✅');
        break;

      case 'deploy':
        addOutput('info', '🚀 Initiating deployment to Vercel...');
        addOutput('info', '📦 Building production bundle...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        addOutput('success', '✓ Build completed successfully');
        addOutput('info', '🌐 Uploading to Vercel...');
        await new Promise(resolve => setTimeout(resolve, 1500));
        addOutput('success', '✓ Deployment successful');
        addOutput('success', '🔗 https://aleksandra-mission-control.vercel.app');
        break;

      case 'build':
        addOutput('info', '🔨 Building mission control dashboard...');
        addOutput('info', '📁 Analyzing 43 components...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        addOutput('info', '⚡ Optimizing bundle size...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        addOutput('success', '✓ Build completed: 42.6 kB (optimized)');
        break;

      case 'agents':
        if (args[0] === 'list' || !args[0]) {
          addOutput('info', '🤖 Active AI Agents:');
          addOutput('info', '┌─ Agent Network ─────────────────┐');
          addOutput('info', '│ Aleksandra        [ACTIVE]      │');
          addOutput('info', '│ Content Processor [RUNNING]     │');
          addOutput('info', '│ System Monitor    [RUNNING]     │');
          addOutput('info', '│ Analytics Engine  [STANDBY]     │');
          addOutput('info', '│ Alert Manager     [RUNNING]     │');
          addOutput('info', '│ Auto Deploy       [ACTIVE]      │');
          addOutput('info', '└─────────────────────────────────┘');
        } else if (args[0] === 'status') {
          addOutput('success', '🤖 Agent Network Status: OPTIMAL');
          addOutput('info', 'Total Agents: 6 | Active: 5 | Standby: 1');
        }
        break;

      case 'ps':
        addOutput('info', '📋 Running Processes:');
        addOutput('info', 'PID    NAME                CPU   MEM   STATUS');
        addOutput('info', '1354   openclaw-gateway    2.1%  385M  RUNNING');
        addOutput('info', '2847   mission-control     0.0%  N/A   DEPLOYED');
        addOutput('info', '3421   workspace-monitor   0.0%  N/A   ACTIVE');
        addOutput('info', '4956   system-monitor      0.0%  N/A   RUNNING');
        break;

      case 'uptime':
        addOutput('success', '⏰ System Uptime:');
        addOutput('info', 'OpenClaw Gateway: 9h 28m');
        addOutput('info', 'Mission Control:  20m');
        addOutput('info', 'Load Average: 1.2, 1.5, 1.8');
        break;

      case 'df':
        addOutput('info', '💾 Disk Space Usage:');
        addOutput('info', 'Filesystem     Size  Used Avail Use%');
        addOutput('info', '/dev/disk1s1   256G  228G   28G  89%');
        addOutput('warning', '⚠️  Disk usage at 89% - consider cleanup');
        break;

      case 'top':
        addOutput('info', '⚡ Resource Usage Summary:');
        addOutput('info', 'CPU: 42.1% | Memory: 78.3% | Load: 1.2');
        addOutput('info', 'Active Processes: 247 | Network: EXCELLENT');
        break;

      case 'ping':
        const host = args[0] || 'vercel.com';
        addOutput('info', `🌐 Pinging ${host}...`);
        await new Promise(resolve => setTimeout(resolve, 500));
        addOutput('success', `✓ ${host}: 23ms response time`);
        break;

      case 'logs':
        addOutput('info', '📜 Recent System Logs:');
        addOutput('info', '[05:04] Mission Control deployed successfully');
        addOutput('info', '[05:03] System Process Monitoring added');
        addOutput('info', '[05:01] Workspace Monitoring deployed');
        addOutput('info', '[04:58] Build completed: 42.6 kB bundle');
        break;

      case 'git':
        if (args[0] === 'status' || !args[0]) {
          addOutput('info', '📂 Git Repository Status:');
          addOutput('success', 'On branch main');
          addOutput('success', 'Your branch is up to date with origin/main');
          addOutput('info', 'Last commit: Major Enhancement: Added System Process Monitoring');
        }
        break;

      case 'monitor':
        const monitorType = args[0] || 'system';
        addOutput('info', `🔍 Starting ${monitorType} monitoring...`);
        addOutput('success', '✓ Real-time monitoring active');
        addOutput('info', 'Press Ctrl+C to stop (simulated)');
        break;

      case 'clear':
        setTerminalOutput([
          { type: 'system', text: '🚀 Terminal cleared', timestamp: new Date() },
          { type: 'prompt', text: 'aleksandra@mission-control:~$', timestamp: new Date() }
        ]);
        setIsProcessing(false);
        return;

      case 'config':
        addOutput('info', '⚙️  Mission Control Configuration:');
        addOutput('info', 'dashboard.url=https://aleksandra-mission-control.vercel.app');
        addOutput('info', 'update.interval=2s');
        addOutput('info', 'components.count=43');
        addOutput('info', 'heartbeat.mode=mission-control');
        break;

      default:
        addOutput('error', `Command not found: ${command}`);
        addOutput('info', 'Type "help" for available commands');
        break;
    }

    addOutput('prompt', 'aleksandra@mission-control:~$');
    setIsProcessing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentCommand.trim() || isProcessing) return;

    const fullCommand = currentCommand.trim();
    addOutput('command', `$ ${fullCommand}`);
    setCommandHistory(prev => [...prev, fullCommand]);

    const [command, ...args] = fullCommand.split(' ');
    simulateCommandExecution(command.toLowerCase(), args);

    setCurrentCommand('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp' && commandHistory.length > 0) {
      e.preventDefault();
      const lastCommand = commandHistory[commandHistory.length - 1];
      setCurrentCommand(lastCommand);
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      // Simple tab completion for commands
      const matches = Object.keys(availableCommands).filter(cmd => 
        cmd.startsWith(currentCommand.toLowerCase())
      );
      if (matches.length === 1) {
        setCurrentCommand(matches[0]);
      }
    }
  };

  const getOutputColor = (type) => {
    switch (type) {
      case 'command': return 'text-cyan-400';
      case 'success': return 'text-green-400';
      case 'error': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      case 'info': return 'text-gray-300';
      case 'system': return 'text-purple-400';
      case 'prompt': return 'text-green-400';
      default: return 'text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          💻 MISSION CONTROL TERMINAL
        </h2>
        <div className="text-sm text-gray-400 font-mono">
          Interactive Command Interface • Type "help" for commands
        </div>
      </div>

      {/* Terminal Window */}
      <div className="bg-black rounded-lg border border-green-500 shadow-lg shadow-green-500/20">
        {/* Terminal Header */}
        <div className="bg-gray-800 rounded-t-lg px-4 py-2 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-sm text-gray-400 font-mono ml-4">
              aleksandra@mission-control:~ - Terminal
            </div>
          </div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          className="p-4 font-mono text-sm h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800"
        >
          {terminalOutput.map((line, index) => (
            <div key={index} className={`${getOutputColor(line.type)} mb-1`}>
              {line.type === 'command' && <span className="text-green-400">aleksandra@mission-control:~$ </span>}
              {line.text}
              {line.type === 'system' && (
                <span className="text-gray-500 ml-2 text-xs">
                  [{line.timestamp.toLocaleTimeString()}]
                </span>
              )}
            </div>
          ))}
          
          {/* Command Input */}
          {!isProcessing && (
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-green-400 mr-2">aleksandra@mission-control:~$ </span>
              <input
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none text-white flex-1"
                placeholder=""
                autoFocus
              />
            </form>
          )}
          
          {isProcessing && (
            <div className="flex items-center text-yellow-400">
              <span className="animate-pulse">Processing...</span>
            </div>
          )}
        </div>
      </div>

      {/* Quick Commands */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          ⚡ QUICK COMMANDS
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.entries(availableCommands).slice(0, 8).map(([cmd, info]) => (
            <button
              key={cmd}
              onClick={() => setCurrentCommand(cmd)}
              className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm font-mono transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Command Reference */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📚 COMMAND REFERENCE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-bold text-cyan-400 mb-2">SYSTEM COMMANDS</h4>
            <div className="space-y-1 text-xs">
              <div className="font-mono text-gray-300">status - System overview</div>
              <div className="font-mono text-gray-300">ps - Running processes</div>
              <div className="font-mono text-gray-300">uptime - System uptime</div>
              <div className="font-mono text-gray-300">df - Disk space</div>
              <div className="font-mono text-gray-300">top - Resource usage</div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-green-400 mb-2">MISSION CONTROL</h4>
            <div className="space-y-1 text-xs">
              <div className="font-mono text-gray-300">deploy - Deploy to Vercel</div>
              <div className="font-mono text-gray-300">build - Build dashboard</div>
              <div className="font-mono text-gray-300">agents - Manage AI agents</div>
              <div className="font-mono text-gray-300">monitor - Real-time monitoring</div>
              <div className="font-mono text-gray-300">logs - System logs</div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-xs text-gray-400">
          💡 Use ↑ arrow key for command history • Tab for auto-completion
        </div>
      </div>
    </div>
  );
};

export default MissionControlTerminal;