import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { DollarSign, TrendingUp, TrendingDown, AlertTriangle, Zap, Clock, Shield, Activity, Target, BarChart3, Globe, Eye } from 'lucide-react';

const FinancialTradingFloorCenter = () => {
  const [marketOverview, setMarketOverview] = useState({
    spx: 5234.67,
    spxChange: 0.87,
    nasdaq: 16789.34,
    nasdaqChange: -0.23,
    dow: 39456.78,
    dowChange: 0.45,
    vix: 14.67,
    vixChange: -2.34,
    totalVolume: 3.47, // billion
    marketCap: 51.2 // trillion
  });

  const [tradingMetrics, setTradingMetrics] = useState({
    totalTrades: 847362,
    tradingVolume: 2.34, // billion USD
    averageLatency: 0.047, // milliseconds
    fillRate: 99.94,
    pnl: 1247800,
    dailyPnL: 34200,
    riskExposure: 67.8,
    leverageRatio: 3.2
  });

  const [portfolioPositions, setPortfolioPositions] = useState([
    {
      symbol: 'SPY',
      position: 15000,
      currentPrice: 523.45,
      pnl: 45600,
      pnlPercent: 3.2,
      riskWeight: 18.7,
      sector: 'ETF'
    },
    {
      symbol: 'AAPL',
      position: -8500,
      currentPrice: 189.67,
      pnl: -12300,
      pnlPercent: -0.8,
      riskWeight: 15.2,
      sector: 'Technology'
    },
    {
      symbol: 'MSFT',
      position: 12000,
      currentPrice: 456.23,
      pnl: 67800,
      pnlPercent: 2.1,
      riskWeight: 21.4,
      sector: 'Technology'
    },
    {
      symbol: 'TSLA',
      position: -3000,
      currentPrice: 201.45,
      pnl: -8900,
      pnlPercent: -1.5,
      riskWeight: 9.8,
      sector: 'Automotive'
    },
    {
      symbol: 'NVDA',
      position: 6500,
      currentPrice: 892.34,
      pnl: 156700,
      pnlPercent: 4.7,
      riskWeight: 25.3,
      sector: 'Technology'
    }
  ]);

  const [marketData, setMarketData] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      spx: 5231.23,
      volume: 3.2,
      volatility: 14.8,
      liquidity: 89.2
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      spx: 5229.87,
      volume: 3.4,
      volatility: 15.1,
      liquidity: 87.6
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      spx: 5232.45,
      volume: 3.1,
      volatility: 14.6,
      liquidity: 90.1
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      spx: 5233.78,
      volume: 3.6,
      volatility: 15.3,
      liquidity: 88.4
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      spx: 5234.12,
      volume: 3.3,
      volatility: 14.9,
      liquidity: 89.7
    },
    {
      time: new Date().toLocaleTimeString(),
      spx: 5234.67,
      volume: 3.47,
      volatility: 14.67,
      liquidity: 91.2
    }
  ]);

  const [riskAlerts, setRiskAlerts] = useState([
    {
      id: 'RISK-001',
      severity: 'high',
      type: 'Concentration Risk',
      symbol: 'NVDA',
      message: 'Position exceeds 25% risk weight limit - Consider reducing exposure',
      timestamp: new Date(),
      status: 'active',
      impact: 'portfolio'
    },
    {
      id: 'RISK-002',
      severity: 'medium',
      type: 'Market Volatility',
      symbol: 'VIX',
      message: 'Volatility spike detected - Review hedging strategies',
      timestamp: new Date(Date.now() - 180000),
      status: 'monitoring',
      impact: 'market'
    },
    {
      id: 'RISK-003',
      severity: 'low',
      type: 'Liquidity Warning',
      symbol: 'SPY',
      message: 'Reduced liquidity in pre-market hours',
      timestamp: new Date(Date.now() - 360000),
      status: 'resolved',
      impact: 'execution'
    }
  ]);

  const [tradingSystemStatus, setTradingSystemStatus] = useState([
    {
      system: 'Primary OMS',
      status: 'operational',
      latency: 0.045,
      uptime: 99.98,
      throughput: 45000,
      lastHeartbeat: new Date()
    },
    {
      system: 'Market Data Feed',
      status: 'operational',
      latency: 0.023,
      uptime: 99.99,
      throughput: 280000,
      lastHeartbeat: new Date()
    },
    {
      system: 'Risk Engine',
      status: 'warning',
      latency: 0.087,
      uptime: 99.95,
      throughput: 12000,
      lastHeartbeat: new Date(Date.now() - 5000)
    },
    {
      system: 'Execution Gateway',
      status: 'operational',
      latency: 0.056,
      uptime: 99.97,
      throughput: 38000,
      lastHeartbeat: new Date()
    },
    {
      system: 'Compliance Monitor',
      status: 'operational',
      latency: 0.134,
      uptime: 99.94,
      throughput: 8500,
      lastHeartbeat: new Date()
    }
  ]);

  const [orderFlowMetrics, setOrderFlowMetrics] = useState({
    totalOrders: 12847,
    filledOrders: 12831,
    rejectedOrders: 16,
    pendingOrders: 234,
    averageFillTime: 0.067, // milliseconds
    slippage: 0.0023, // basis points
    darkPoolRatio: 34.7,
    internalCrossRate: 23.4
  });

  const [fraudDetectionMetrics, setFraudDetectionMetrics] = useState({
    suspiciousTransactions: 0,
    anomaliesDetected: 3,
    complianceViolations: 0,
    watchlistHits: 2,
    riskScore: 2.3, // out of 10
    amlAlerts: 1,
    kycStatus: 98.7 // % compliant
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update market data
      setMarketOverview(prev => ({
        ...prev,
        spx: Math.max(5100, Math.min(5400, prev.spx + (Math.random() - 0.5) * 5)),
        nasdaq: Math.max(16000, Math.min(17500, prev.nasdaq + (Math.random() - 0.5) * 50)),
        dow: Math.max(38000, Math.min(41000, prev.dow + (Math.random() - 0.5) * 100)),
        vix: Math.max(12, Math.min(25, prev.vix + (Math.random() - 0.5) * 0.5)),
        totalVolume: Math.max(2, Math.min(6, prev.totalVolume + (Math.random() - 0.5) * 0.2))
      }));

      // Update trading metrics
      setTradingMetrics(prev => ({
        ...prev,
        totalTrades: prev.totalTrades + Math.floor(Math.random() * 100),
        tradingVolume: Math.max(1, Math.min(5, prev.tradingVolume + (Math.random() - 0.5) * 0.1)),
        averageLatency: Math.max(0.02, Math.min(0.15, prev.averageLatency + (Math.random() - 0.5) * 0.01)),
        fillRate: Math.max(99.5, Math.min(100, prev.fillRate + (Math.random() - 0.5) * 0.05)),
        dailyPnL: prev.dailyPnL + (Math.random() - 0.4) * 1000
      }));

      // Update portfolio positions
      setPortfolioPositions(prev => prev.map(position => ({
        ...position,
        currentPrice: Math.max(position.currentPrice * 0.95, Math.min(position.currentPrice * 1.05, position.currentPrice + (Math.random() - 0.5) * position.currentPrice * 0.02)),
        pnl: position.pnl + (Math.random() - 0.5) * 1000
      })));

      // Update market data timeline
      const newMarketData = {
        time: new Date().toLocaleTimeString(),
        spx: marketOverview.spx,
        volume: marketOverview.totalVolume,
        volatility: marketOverview.vix,
        liquidity: 85 + Math.random() * 10
      };
      
      setMarketData(prev => [...prev.slice(1), newMarketData]);

      // Update trading system status
      setTradingSystemStatus(prev => prev.map(system => ({
        ...system,
        latency: Math.max(0.02, Math.min(0.2, system.latency + (Math.random() - 0.5) * 0.01)),
        throughput: Math.max(system.throughput * 0.8, Math.min(system.throughput * 1.2, system.throughput + (Math.random() - 0.5) * 1000)),
        lastHeartbeat: Math.random() > 0.9 ? new Date() : system.lastHeartbeat
      })));

      // Update order flow
      setOrderFlowMetrics(prev => ({
        ...prev,
        totalOrders: prev.totalOrders + Math.floor(Math.random() * 50),
        filledOrders: prev.filledOrders + Math.floor(Math.random() * 48),
        rejectedOrders: prev.rejectedOrders + (Math.random() > 0.95 ? 1 : 0),
        pendingOrders: Math.max(100, Math.min(500, prev.pendingOrders + Math.floor((Math.random() - 0.5) * 10))),
        averageFillTime: Math.max(0.02, Math.min(0.15, prev.averageFillTime + (Math.random() - 0.5) * 0.005))
      }));

      // Occasionally add new risk alerts
      if (Math.random() > 0.97) {
        const alertTypes = ['Concentration Risk', 'Market Volatility', 'Liquidity Warning', 'Position Limit'];
        const severities = ['low', 'medium', 'high'];
        
        const newAlert = {
          id: `RISK-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          symbol: portfolioPositions[Math.floor(Math.random() * portfolioPositions.length)].symbol,
          message: 'Real-time risk monitoring alert',
          timestamp: new Date(),
          status: 'active',
          impact: ['portfolio', 'market', 'execution'][Math.floor(Math.random() * 3)]
        };
        
        setRiskAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [marketOverview.spx, marketOverview.totalVolume, marketOverview.vix, portfolioPositions]);

  const getSystemStatusColor = (status) => {
    switch (status) {
      case 'operational': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'critical': return '#EF4444';
      case 'maintenance': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getRiskSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return '#EF4444';
      case 'medium': return '#F59E0B';
      case 'low': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const getPnLColor = (pnl) => {
    return pnl >= 0 ? '#10B981' : '#EF4444';
  };

  const getChangeIcon = (change) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-400" />;
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-400" />;
    return <Activity className="w-4 h-4 text-gray-400" />;
  };

  const sectorDistribution = [
    { name: 'Technology', value: 62.5, color: '#3B82F6' },
    { name: 'ETF', value: 18.7, color: '#10B981' },
    { name: 'Automotive', value: 9.8, color: '#8B5CF6' },
    { name: 'Healthcare', value: 5.2, color: '#F59E0B' },
    { name: 'Energy', value: 3.8, color: '#EF4444' }
  ];

  const tradingVenues = [
    { name: 'NYSE', volume: 28.4, latency: 0.045 },
    { name: 'NASDAQ', volume: 34.7, latency: 0.052 },
    { name: 'Dark Pools', volume: 23.1, latency: 0.089 },
    { name: 'ECNs', volume: 13.8, latency: 0.034 }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <DollarSign className="w-8 h-8 text-green-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">FINANCIAL TRADING FLOOR OPERATIONS CENTER</h1>
            <p className="text-gray-400">Ultra-low latency trading infrastructure, real-time market monitoring, and risk management</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">${(tradingMetrics.tradingVolume).toFixed(2)}B</div>
            <div className="text-xs text-gray-400">VOLUME</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{tradingMetrics.averageLatency.toFixed(3)}ms</div>
            <div className="text-xs text-gray-400">LATENCY</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold" style={{color: getPnLColor(tradingMetrics.dailyPnL)}}>
              ${(tradingMetrics.dailyPnL / 1000).toFixed(0)}K
            </div>
            <div className="text-xs text-gray-400">DAILY P&L</div>
          </div>
        </div>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-white">S&P 500</span>
            {getChangeIcon(marketOverview.spxChange)}
          </div>
          <div className="text-xl font-bold text-white">{marketOverview.spx.toFixed(2)}</div>
          <div className="text-xs" style={{color: marketOverview.spxChange >= 0 ? '#10B981' : '#EF4444'}}>
            {marketOverview.spxChange >= 0 ? '+' : ''}{marketOverview.spxChange.toFixed(2)}%
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-white">NASDAQ</span>
            {getChangeIcon(marketOverview.nasdaqChange)}
          </div>
          <div className="text-xl font-bold text-white">{marketOverview.nasdaq.toFixed(2)}</div>
          <div className="text-xs" style={{color: marketOverview.nasdaqChange >= 0 ? '#10B981' : '#EF4444'}}>
            {marketOverview.nasdaqChange >= 0 ? '+' : ''}{marketOverview.nasdaqChange.toFixed(2)}%
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-white">DOW</span>
            {getChangeIcon(marketOverview.dowChange)}
          </div>
          <div className="text-xl font-bold text-white">{marketOverview.dow.toFixed(2)}</div>
          <div className="text-xs" style={{color: marketOverview.dowChange >= 0 ? '#10B981' : '#EF4444'}}>
            {marketOverview.dowChange >= 0 ? '+' : ''}{marketOverview.dowChange.toFixed(2)}%
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-white">VIX</span>
            <Activity className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-xl font-bold text-white">{marketOverview.vix.toFixed(2)}</div>
          <div className="text-xs" style={{color: marketOverview.vixChange >= 0 ? '#EF4444' : '#10B981'}}>
            {marketOverview.vixChange >= 0 ? '+' : ''}{marketOverview.vixChange.toFixed(2)}%
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-gray-400">VOLUME</span>
          </div>
          <div className="text-xl font-bold text-white">{marketOverview.totalVolume.toFixed(2)}B</div>
          <div className="text-xs text-gray-400">Shares Traded</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Globe className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-gray-400">MARKET CAP</span>
          </div>
          <div className="text-xl font-bold text-white">{marketOverview.marketCap.toFixed(1)}T</div>
          <div className="text-xs text-gray-400">Total Value</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Portfolio Positions */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2 text-blue-400" />
            PORTFOLIO POSITIONS
          </h3>
          <div className="space-y-3">
            {portfolioPositions.map((position, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getPnLColor(position.pnl) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{position.symbol}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                      {position.position > 0 ? 'LONG' : 'SHORT'}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getPnLColor(position.pnl)}20`, 
                      color: getPnLColor(position.pnl) 
                    }}>
                      {position.pnlPercent >= 0 ? '+' : ''}{position.pnlPercent.toFixed(1)}%
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Position</span>
                    <span className="text-white">{Math.abs(position.position).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price</span>
                    <span className="text-blue-400">${position.currentPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">P&L</span>
                    <span style={{color: getPnLColor(position.pnl)}}>${position.pnl.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Risk Weight</span>
                    <span className="text-purple-400">{position.riskWeight.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">{position.sector}</span>
                  <span className="text-gray-500">Market Value</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trading System Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            TRADING SYSTEM STATUS
          </h3>
          <div className="space-y-3">
            {tradingSystemStatus.map((system, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getSystemStatusColor(system.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{system.system}</span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ 
                    backgroundColor: `${getSystemStatusColor(system.status)}20`, 
                    color: getSystemStatusColor(system.status) 
                  }}>
                    {system.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Latency</span>
                    <span className="text-blue-400">{system.latency.toFixed(3)}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime</span>
                    <span className="text-green-400">{system.uptime.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Throughput</span>
                    <span className="text-purple-400">{system.throughput.toLocaleString()}/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last HB</span>
                    <span className="text-white">{system.lastHeartbeat.toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-red-400" />
            RISK ALERTS
          </h3>
          <div className="space-y-3">
            {riskAlerts.map(alert => (
              <div key={alert.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getRiskSeverityColor(alert.severity) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{alert.type}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getRiskSeverityColor(alert.severity)}20`, 
                      color: getRiskSeverityColor(alert.severity) 
                    }}>
                      {alert.severity.toUpperCase()}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      alert.status === 'active' ? 'bg-red-900 text-red-400' :
                      alert.status === 'resolved' ? 'bg-green-900 text-green-400' : 'bg-blue-900 text-blue-400'
                    }`}>
                      {alert.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-xs mb-2">{alert.message}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-400">{alert.symbol}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">Impact: {alert.impact}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fraud Detection Summary */}
          <div className="mt-4 pt-3 border-t border-gray-700">
            <div className="text-sm text-white font-semibold mb-2">Fraud Detection & Compliance</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Risk Score</span>
                <span className="text-green-400">{fraudDetectionMetrics.riskScore.toFixed(1)}/10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">AML Alerts</span>
                <span className="text-yellow-400">{fraudDetectionMetrics.amlAlerts}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Anomalies</span>
                <span className="text-blue-400">{fraudDetectionMetrics.anomaliesDetected}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">KYC Status</span>
                <span className="text-green-400">{fraudDetectionMetrics.kycStatus.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trading Analytics Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Market Data */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME MARKET PERFORMANCE</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="spx" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="S&P 500"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="volume" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Volume (B)"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="volatility" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="VIX"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Portfolio Analytics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">PORTFOLIO SECTOR DISTRIBUTION</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={sectorDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {sectorDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value) => [`${value}%`, 'Weight']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-4">
              {sectorDistribution.map((sector, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: sector.color }}
                    />
                    <span className="text-gray-400 text-sm">{sector.name}</span>
                  </div>
                  <span className="text-white font-semibold">{sector.value}%</span>
                </div>
              ))}
              
              {/* Trading Metrics */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">Order Flow Metrics</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fill Rate</span>
                    <span className="text-green-400">{tradingMetrics.fillRate.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg Fill Time</span>
                    <span className="text-blue-400">{orderFlowMetrics.averageFillTime.toFixed(3)}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Slippage</span>
                    <span className="text-yellow-400">{orderFlowMetrics.slippage.toFixed(4)}bps</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Dark Pool</span>
                    <span className="text-purple-400">{orderFlowMetrics.darkPoolRatio.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trading Floor Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Trading Floor Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Activity className="w-3 h-3 inline mr-1" />
                  Execute Order
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Shield className="w-3 h-3 inline mr-1" />
                  Risk Check
                </button>
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors">
                  <Eye className="w-3 h-3 inline mr-1" />
                  Market Watch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialTradingFloorCenter;