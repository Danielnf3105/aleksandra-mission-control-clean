// Financial Trading Floor Mission Control - 2026 Real-Time Risk Management
// Inspired by AI trading agents, MX.3 Platform, ultra-low latency requirements, NIST Privacy Framework
import { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, DollarSign, AlertTriangle, Zap, Clock,
  Activity, Target, Shield, Brain, Eye, Network, Database, Lock,
  BarChart3, PieChart, LineChart, Monitor, Settings, Bell,
  Play, Pause, RefreshCw, Maximize2, ArrowUpDown, ArrowUpRight,
  CheckCircle, XCircle, AlertCircle, Info, Users, Globe
} from 'lucide-react';

export default function FinancialTradingFloorControl() {
  const [marketStatus, setMarketStatus] = useState({
    session: 'OPEN',
    volatility: 'MODERATE',
    volume: 2847392,
    vwap: 156.73,
    lastPrice: 157.89,
    change: 1.16,
    changePercent: 0.74
  });

  const [aiTradingAgents, setAiTradingAgents] = useState([
    {
      id: 'agent-alpha-001',
      name: 'Alpha Momentum',
      strategy: 'momentum-following',
      status: 'active',
      pnl: 15467.89,
      sharpe: 2.34,
      maxDrawdown: -2.1,
      positions: 12,
      latency: 0.23,
      compliance: 'green',
      riskUtilization: 67.3
    },
    {
      id: 'agent-arb-002', 
      name: 'Arbitrage Hunter',
      strategy: 'statistical-arbitrage',
      status: 'active',
      pnl: 8934.12,
      sharpe: 1.87,
      maxDrawdown: -1.8,
      positions: 8,
      latency: 0.19,
      compliance: 'green',
      riskUtilization: 43.7
    },
    {
      id: 'agent-ml-003',
      name: 'ML Signal Gen',
      strategy: 'machine-learning',
      status: 'paused',
      pnl: -1234.56,
      sharpe: -0.12,
      maxDrawdown: -5.4,
      positions: 0,
      latency: 0.45,
      compliance: 'amber',
      riskUtilization: 0
    },
    {
      id: 'agent-news-004',
      name: 'News Sentiment',
      strategy: 'news-driven',
      status: 'active',
      pnl: 23456.78,
      sharpe: 3.21,
      maxDrawdown: -1.2,
      positions: 15,
      latency: 0.67,
      compliance: 'green',
      riskUtilization: 78.9
    }
  ]);

  const [riskMetrics, setRiskMetrics] = useState({
    portfolioVar: 1567890,
    expectedShortfall: 2134567,
    stressTestResult: 'PASS',
    concentrationRisk: 'MEDIUM',
    liquidityRisk: 'LOW',
    leverageRatio: 3.45,
    riskBudgetUtilization: 72.3,
    correlationBreakdown: 'NORMAL'
  });

  const [realTimeAlerts, setRealTimeAlerts] = useState([
    {
      id: 'alert-001',
      type: 'RISK',
      severity: 'HIGH',
      message: 'Portfolio VaR approaching daily limit',
      value: '$1.57M',
      threshold: '$1.75M', 
      timestamp: '3s ago',
      agent: 'Risk Monitor',
      action: 'Reduce position sizes'
    },
    {
      id: 'alert-002',
      type: 'LATENCY',
      severity: 'MEDIUM',
      message: 'ML Signal Gen latency spike detected',
      value: '0.45ms',
      threshold: '0.30ms',
      timestamp: '12s ago',
      agent: 'agent-ml-003',
      action: 'Performance optimization required'
    },
    {
      id: 'alert-003',
      type: 'COMPLIANCE',
      severity: 'LOW',
      message: 'Position concentration review needed',
      value: '12.7%',
      threshold: '15.0%',
      timestamp: '45s ago',
      agent: 'Compliance Monitor',
      action: 'Schedule review meeting'
    },
    {
      id: 'alert-004',
      type: 'MARKET',
      severity: 'INFO',
      message: 'Volatility regime change detected',
      value: '23.4%',
      threshold: '20.0%',
      timestamp: '1m ago',
      agent: 'Market Monitor',
      action: 'Adjust strategy parameters'
    }
  ]);

  const [complianceFramework, setComplianceFramework] = useState({
    nistControls: {
      total: 230,
      implemented: 218,
      compliant: 203,
      pending: 12,
      violations: 3
    },
    privacyEnhancingTech: {
      differentialPrivacy: 'ACTIVE',
      syntheticData: 'GENERATING',
      homomorphicEncryption: 'DEPLOYED',
      federatedLearning: 'TRAINING'
    },
    regualtoryReporting: {
      mifidII: 'COMPLIANT',
      doddFrank: 'COMPLIANT', 
      basel3: 'COMPLIANT',
      gdpr: 'COMPLIANT',
      ccpa: 'COMPLIANT'
    }
  });

  const [tradingPerformance, setTradingPerformance] = useState({
    totalPnL: 46624.23,
    dailyPnL: 12456.89,
    weeklyPnL: 34567.12,
    monthlyPnL: 156789.45,
    winRate: 67.8,
    avgWin: 2345.67,
    avgLoss: -1234.56,
    maxConsecutiveLosses: 3,
    tradesExecuted: 1247,
    fillRate: 99.7,
    slippage: 0.23
  });

  const [marketData, setMarketData] = useState({
    sp500: { price: 4567.89, change: 23.45, changePercent: 0.52 },
    nasdaq: { price: 15234.67, change: -45.67, changePercent: -0.30 },
    dow: { price: 34567.12, change: 156.78, changePercent: 0.46 },
    vix: { price: 18.45, change: -1.23, changePercent: -6.24 },
    gold: { price: 2045.67, change: 12.34, changePercent: 0.61 },
    bitcoin: { price: 67890.12, change: 1234.56, changePercent: 1.85 }
  });

  useEffect(() => {
    // Real-time trading floor updates
    const interval = setInterval(() => {
      // Update market data
      setMarketData(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(symbol => {
          const asset = updated[symbol];
          const volatility = symbol === 'vix' ? 0.15 : symbol === 'bitcoin' ? 0.08 : 0.03;
          const change = (Math.random() - 0.5) * volatility * asset.price;
          
          asset.price = Math.max(0, asset.price + change);
          asset.change = change;
          asset.changePercent = (change / (asset.price - change)) * 100;
        });
        return updated;
      });

      // Update AI agent performance
      setAiTradingAgents(prev => prev.map(agent => {
        if (agent.status === 'active') {
          const pnlChange = (Math.random() - 0.4) * 500;
          return {
            ...agent,
            pnl: agent.pnl + pnlChange,
            latency: Math.max(0.1, Math.min(1.0, agent.latency + (Math.random() - 0.5) * 0.1)),
            riskUtilization: Math.max(0, Math.min(100, agent.riskUtilization + (Math.random() - 0.5) * 5))
          };
        }
        return agent;
      }));

      // Update risk metrics
      setRiskMetrics(prev => ({
        ...prev,
        portfolioVar: prev.portfolioVar + (Math.random() - 0.5) * 50000,
        riskBudgetUtilization: Math.max(0, Math.min(100, prev.riskBudgetUtilization + (Math.random() - 0.5) * 3))
      }));

      // Update trading performance
      setTradingPerformance(prev => ({
        ...prev,
        dailyPnL: prev.dailyPnL + (Math.random() - 0.4) * 1000,
        tradesExecuted: prev.tradesExecuted + Math.floor(Math.random() * 5),
        fillRate: Math.max(95, Math.min(100, prev.fillRate + (Math.random() - 0.3) * 0.5))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'HIGH': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'LOW': return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
      case 'INFO': return 'text-green-400 bg-green-900/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getChangeColor = (change) => change >= 0 ? 'text-green-400' : 'text-red-400';
  const getChangeIcon = (change) => change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />;

  const getComplianceColor = (status) => {
    switch(status) {
      case 'green': return 'text-green-400 bg-green-900/20';
      case 'amber': return 'text-yellow-400 bg-yellow-900/20';
      case 'red': return 'text-red-400 bg-red-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* Trading Floor Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-green-400 flex items-center">
            <TrendingUp className="w-8 h-8 mr-3" />
            Financial Trading Floor Control
          </h1>
          <div className="text-sm text-gray-400 flex items-center space-x-4">
            <div className={`px-3 py-1 rounded-full font-semibold ${
              marketStatus.session === 'OPEN' ? 'text-green-400 bg-green-900/30' : 'text-red-400 bg-red-900/30'
            }`}>
              MARKET: {marketStatus.session}
            </div>
            <div className={`px-3 py-1 rounded-full font-semibold ${
              marketStatus.volatility === 'LOW' ? 'text-green-400 bg-green-900/30' :
              marketStatus.volatility === 'MODERATE' ? 'text-yellow-400 bg-yellow-900/30' :
              'text-red-400 bg-red-900/30'
            }`}>
              VOL: {marketStatus.volatility}
            </div>
            <div>Real-Time: {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        <p className="text-gray-300">Ultra-low latency AI trading with real-time risk management & compliance monitoring</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Main Trading Dashboard */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Market Overview */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Market Overview & Performance
            </h2>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
              {Object.entries(marketData).map(([symbol, data]) => (
                <div key={symbol} className="bg-gray-800 p-3 rounded-lg">
                  <div className="text-xs text-gray-400 uppercase font-semibold mb-1">{symbol}</div>
                  <div className="text-lg font-mono font-bold text-white">
                    ${data.price.toFixed(2)}
                  </div>
                  <div className={`flex items-center text-xs ${getChangeColor(data.change)}`}>
                    {getChangeIcon(data.change)}
                    <span className="ml-1">{data.changePercent.toFixed(2)}%</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Trading Performance Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Total P&L</span>
                  <DollarSign className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  ${tradingPerformance.totalPnL.toLocaleString()}
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Daily P&L</span>
                  <Activity className="w-4 h-4 text-blue-400" />
                </div>
                <div className={`text-2xl font-bold ${getChangeColor(tradingPerformance.dailyPnL)}`}>
                  ${tradingPerformance.dailyPnL.toLocaleString()}
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Win Rate</span>
                  <Target className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {tradingPerformance.winRate.toFixed(1)}%
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Fill Rate</span>
                  <Zap className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">
                  {tradingPerformance.fillRate.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>

          {/* AI Trading Agents */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Trading Agents
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiTradingAgents.map((agent) => (
                <div key={agent.id} className={`border rounded-lg p-4 ${
                  agent.status === 'active' ? 'border-green-500/30 bg-green-900/10' : 'border-gray-600 bg-gray-800'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-semibold text-white">{agent.name}</div>
                      <div className="text-xs text-gray-400 capitalize">{agent.strategy}</div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-semibold ${getComplianceColor(agent.compliance)}`}>
                      {agent.compliance.toUpperCase()}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">P&L:</span>
                      <span className={getChangeColor(agent.pnl)}>
                        ${agent.pnl.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sharpe:</span>
                      <span className="text-white">{agent.sharpe.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Positions:</span>
                      <span className="text-white">{agent.positions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Latency:</span>
                      <span className={agent.latency > 0.5 ? 'text-red-400' : 'text-green-400'}>
                        {agent.latency.toFixed(2)}ms
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Max DD:</span>
                      <span className="text-red-400">{agent.maxDrawdown.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Risk:</span>
                      <span className="text-white">{agent.riskUtilization.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-4">
          
          {/* Real-Time Alerts */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Real-Time Alerts
            </h2>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {realTimeAlerts.map((alert) => (
                <div key={alert.id} className={`border rounded p-3 ${getSeverityColor(alert.severity)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">{alert.type}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {alert.timestamp}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">{alert.message}</div>
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Value:</span>
                      <span className="text-white">{alert.value}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Threshold:</span>
                      <span className="text-gray-400">{alert.threshold}</span>
                    </div>
                    <div className="text-xs text-blue-400">{alert.action}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Management */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Risk Management
            </h2>
            
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Portfolio VaR</span>
                  <AlertTriangle className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="text-lg font-bold text-yellow-400">
                  ${riskMetrics.portfolioVar.toLocaleString()}
                </div>
              </div>
              
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm text-gray-400 mb-2">Risk Budget Utilization</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all ${
                      riskMetrics.riskBudgetUtilization > 80 ? 'bg-red-500' :
                      riskMetrics.riskBudgetUtilization > 60 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${riskMetrics.riskBudgetUtilization}%` }}
                  ></div>
                </div>
                <div className="text-sm text-white mt-1">
                  {riskMetrics.riskBudgetUtilization.toFixed(1)}%
                </div>
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Stress Test:</span>
                  <span className="text-green-400">{riskMetrics.stressTestResult}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Leverage Ratio:</span>
                  <span className="text-white">{riskMetrics.leverageRatio.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Liquidity Risk:</span>
                  <span className="text-green-400">{riskMetrics.liquidityRisk}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Framework */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <Lock className="w-5 h-5 mr-2" />
              Compliance (NIST)
            </h2>
            
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm text-gray-400 mb-2">Control Objectives</div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Compliant:</span>
                  <span className="text-green-400">
                    {complianceFramework.nistControls.compliant}/{complianceFramework.nistControls.total}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Pending:</span>
                  <span className="text-yellow-400">{complianceFramework.nistControls.pending}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Violations:</span>
                  <span className="text-red-400">{complianceFramework.nistControls.violations}</span>
                </div>
              </div>
              
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm text-gray-400 mb-2">Privacy-Enhancing Tech</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Differential Privacy:</span>
                    <span className="text-green-400">ACTIVE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Synthetic Data:</span>
                    <span className="text-yellow-400">GENERATING</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Homomorphic Encryption:</span>
                    <span className="text-green-400">DEPLOYED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}