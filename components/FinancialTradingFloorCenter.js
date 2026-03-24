// Financial Trading Floor & Risk Management Center - 2026 Market Intelligence
// Based on Nasdaq Trade Surveillance, Solidus Labs, LSEG, Eventus systems
import { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, DollarSign, BarChart3, Activity, AlertTriangle,
  CheckCircle, Eye, Monitor, Shield, Target, Clock, RefreshCw,
  ArrowRight, ArrowLeft, Plus, Minus, Play, Pause, StopCircle,
  Search, Settings, Info, MapPin, Users, Zap, Battery,
  Database, HardDrive, Cpu, MemoryStick, Layers, FileCode,
  Building, Home, Car, Truck, Plane, Ship, Network, Server,
  Globe, Wifi, Signal, Radio, Tower, Radar, Navigation,
  Calendar, Timer, PhoneCall, Mail, UserCheck, Package,
  Warehouse, Box, Store, CreditCard, ShoppingCart, Gauge,
  Thermometer, Droplets, Wind, Sun, Moon, Star, Circle
} from 'lucide-react';

export default function FinancialTradingFloorCenter() {
  const [tradingData, setTradingData] = useState({
    currentTime: new Date().toISOString(),
    marketStatus: 'OPEN',
    totalVolume: 2847293847, // shares
    totalValue: 89472837292, // USD
    activeTraders: 1847,
    riskAlerts: 23,
    pnl: 12487292.87, // daily P&L
    riskUtilization: 73.4, // %
    surveillanceAlerts: 156,
    tradingDesks: [
      {
        name: 'Equity Trading',
        location: 'Floor 42, Desk A1-A20',
        traders: 45,
        volume: 847293847,
        pnl: 2847292.50,
        riskLimit: 50000000,
        riskUsed: 34782942,
        utilization: 69.6,
        alerts: 8,
        status: 'ACTIVE',
        avgLatency: 0.23, // ms
        successRate: 99.7
      },
      {
        name: 'Fixed Income',
        location: 'Floor 42, Desk B1-B15',
        traders: 32,
        volume: 456789123,
        pnl: 1592847.25,
        riskLimit: 75000000,
        riskUsed: 52847392,
        utilization: 70.5,
        alerts: 3,
        status: 'ACTIVE',
        avgLatency: 0.18,
        successRate: 99.8
      },
      {
        name: 'FX Trading',
        location: 'Floor 43, Desk C1-C25',
        traders: 38,
        volume: 923847561,
        pnl: 3947582.30,
        riskLimit: 40000000,
        riskUsed: 31847293,
        utilization: 79.6,
        alerts: 12,
        status: 'HIGH_ACTIVITY',
        avgLatency: 0.15,
        successRate: 99.9
      },
      {
        name: 'Derivatives',
        location: 'Floor 44, Desk D1-D18',
        traders: 28,
        volume: 234856791,
        pnl: 4847392.82,
        riskLimit: 100000000,
        riskUsed: 67293847,
        utilization: 67.3,
        alerts: 0,
        status: 'OPTIMAL',
        avgLatency: 0.28,
        successRate: 99.6
      }
    ],
    marketPositions: [
      {
        symbol: 'SPY',
        position: 2847293,
        marketValue: 134782948.27,
        pnl: 2847291.50,
        risk: 'LOW',
        exposure: 12.4, // %
        delta: 0.78,
        gamma: 0.12,
        theta: -0.05,
        vega: 0.23
      },
      {
        symbol: 'QQQ',
        position: -1456789,
        marketValue: -89473628.92,
        pnl: -847392.25,
        risk: 'MEDIUM',
        exposure: 8.7,
        delta: -0.65,
        gamma: -0.09,
        theta: 0.08,
        vega: -0.18
      },
      {
        symbol: 'TSLA',
        position: 847293,
        marketValue: 178294763.84,
        pnl: 5847392.75,
        risk: 'HIGH',
        exposure: 15.2,
        delta: 0.89,
        gamma: 0.23,
        theta: -0.12,
        vega: 0.34
      },
      {
        symbol: 'MSFT',
        position: 1293847,
        marketValue: 523847293.47,
        pnl: 8472938.92,
        risk: 'LOW',
        exposure: 18.9,
        delta: 0.72,
        gamma: 0.08,
        theta: -0.04,
        vega: 0.15
      }
    ],
    riskMetrics: [
      {
        metric: 'Value at Risk (VaR)',
        current: 12847293.50,
        limit: 25000000,
        utilization: 51.4,
        confidence: '95%',
        timeframe: '1-day',
        trend: 'stable'
      },
      {
        metric: 'Expected Shortfall',
        current: 18472938.25,
        limit: 35000000,
        utilization: 52.8,
        confidence: '95%',
        timeframe: '1-day',
        trend: 'increasing'
      },
      {
        metric: 'Maximum Drawdown',
        current: 5847293.75,
        limit: 15000000,
        utilization: 39.0,
        confidence: 'N/A',
        timeframe: 'YTD',
        trend: 'decreasing'
      },
      {
        metric: 'Leverage Ratio',
        current: 2.34,
        limit: 4.0,
        utilization: 58.5,
        confidence: 'N/A',
        timeframe: 'Real-time',
        trend: 'stable'
      }
    ],
    surveillanceEvents: [
      {
        id: 'SUR-2026-001',
        timestamp: '15:38',
        priority: 'HIGH',
        type: 'SUSPICIOUS_PATTERN',
        trader: 'John M. (ID: T4729)',
        desk: 'FX Trading',
        symbol: 'EUR/USD',
        pattern: 'Layering detected',
        volume: 50000000,
        timeWindow: '2 minutes',
        confidence: 94.7,
        action: 'Trade halted, investigation initiated',
        status: 'INVESTIGATING'
      },
      {
        id: 'SUR-2026-002',
        timestamp: '15:35',
        priority: 'MEDIUM',
        type: 'LIMIT_BREACH',
        trader: 'Sarah L. (ID: T2847)',
        desk: 'Equity Trading',
        symbol: 'AAPL',
        pattern: 'Position limit approached',
        volume: 2000000,
        timeWindow: '15 minutes',
        confidence: 99.2,
        action: 'Risk team notified',
        status: 'MONITORING'
      },
      {
        id: 'SUR-2026-003',
        timestamp: '15:32',
        priority: 'LOW',
        type: 'UNUSUAL_TIMING',
        trader: 'Mike R. (ID: T1847)',
        desk: 'Fixed Income',
        symbol: 'US10Y',
        pattern: 'After-hours activity',
        volume: 10000000,
        timeWindow: '30 minutes',
        confidence: 87.3,
        action: 'Automated log entry',
        status: 'LOGGED'
      }
    ],
    marketData: [
      {
        symbol: 'S&P 500',
        price: 4847.29,
        change: +23.47,
        changePercent: +0.49,
        volume: '3.2B',
        volatility: 12.4,
        marketCap: '$39.2T'
      },
      {
        symbol: 'NASDAQ',
        price: 15294.73,
        change: +145.92,
        changePercent: +0.97,
        volume: '4.8B',
        volatility: 18.7,
        marketCap: '$18.4T'
      },
      {
        symbol: 'EUR/USD',
        price: 1.0847,
        change: -0.0023,
        changePercent: -0.21,
        volume: '847M',
        volatility: 8.9,
        marketCap: 'N/A'
      },
      {
        symbol: 'BTC/USD',
        price: 67829.45,
        change: +1847.23,
        changePercent: +2.80,
        volume: '23.4B',
        volatility: 45.2,
        marketCap: '$1.3T'
      },
      {
        symbol: '10Y Treasury',
        price: 4.287,
        change: +0.023,
        changePercent: +0.54,
        volume: '156B',
        volatility: 6.8,
        marketCap: 'N/A'
      }
    ],
    tradingAlerts: [
      {
        id: 'alert-trade001',
        timestamp: '15:38',
        priority: 'CRITICAL',
        type: 'RISK_LIMIT',
        desk: 'FX Trading',
        message: 'Risk utilization approaching 80% threshold',
        currentRisk: 31847293,
        riskLimit: 40000000,
        trader: 'Multiple traders',
        recommendation: 'Reduce position sizes or hedge exposure',
        autoAction: 'Risk alerts sent to all FX traders',
        status: 'ACTIVE'
      },
      {
        id: 'alert-trade002',
        timestamp: '15:35',
        priority: 'HIGH',
        type: 'MARKET_VOLATILITY',
        desk: 'All Desks',
        message: 'Unusual volatility spike detected in tech sector',
        volatility: 'NASDAQ up 25% from daily average',
        affectedSymbols: 'TSLA, NVDA, AAPL, MSFT',
        recommendation: 'Monitor positions closely, consider hedging',
        autoAction: 'Volatility alerts enabled',
        status: 'MONITORING'
      },
      {
        id: 'alert-trade003',
        timestamp: '15:30',
        priority: 'MEDIUM',
        type: 'SYSTEM_LATENCY',
        desk: 'Derivatives',
        message: 'Execution latency elevated above normal',
        currentLatency: 0.28,
        normalLatency: 0.18,
        affectedSystems: 'Options trading platform',
        recommendation: 'Consider manual order routing',
        autoAction: 'IT team notified',
        status: 'RESOLVING'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTradingData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        totalVolume: Math.max(2000000000, (prev?.totalVolume || 2847293847) + Math.floor(Math.random() * 10000000)),
        totalValue: Math.max(80000000000, (prev?.totalValue || 89472837292) + Math.floor(Math.random() * 100000000)),
        pnl: Math.max(-50000000, Math.min(50000000, (prev?.pnl || 12487292.87) + (Math.random() - 0.5) * 1000000)),
        riskUtilization: Math.max(60, Math.min(90, (prev?.riskUtilization || 73.4) + (Math.random() - 0.5) * 2)),
        tradingDesks: prev?.tradingDesks?.map(desk => ({
          ...desk,
          pnl: Math.max(-10000000, Math.min(10000000, (desk?.pnl || 0) + (Math.random() - 0.5) * 100000)),
          riskUsed: Math.max(0, Math.min(desk?.riskLimit || 50000000, (desk?.riskUsed || 25000000) + (Math.random() - 0.5) * 1000000)),
          utilization: Math.max(50, Math.min(95, (desk?.utilization || 70) + (Math.random() - 0.5) * 3))
        })) || prev.tradingDesks,
        marketPositions: prev?.marketPositions?.map(position => ({
          ...position,
          pnl: Math.max(-20000000, Math.min(20000000, (position?.pnl || 0) + (Math.random() - 0.5) * 500000)),
          delta: Math.max(-1, Math.min(1, (position?.delta || 0) + (Math.random() - 0.5) * 0.05))
        })) || prev.marketPositions,
        marketData: prev?.marketData?.map(market => ({
          ...market,
          price: Math.max(0.1, (market?.price || 100) + (market?.price || 100) * (Math.random() - 0.5) * 0.01),
          change: (Math.random() - 0.5) * (market?.price || 100) * 0.02,
          changePercent: (Math.random() - 0.5) * 2
        })) || prev.marketData
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPTIMAL': case 'ACTIVE': case 'OPEN': case 'LOGGED': return 'text-green-400';
      case 'HIGH_ACTIVITY': case 'MONITORING': case 'RESOLVING': case 'MEDIUM': return 'text-blue-400';
      case 'INVESTIGATING': case 'ACTIVE': case 'HIGH': return 'text-yellow-400';
      case 'CRITICAL': case 'SUSPENDED': case 'HALTED': case 'CLOSED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'OPTIMAL': case 'ACTIVE': case 'OPEN': case 'LOGGED': return 'bg-green-400/20';
      case 'HIGH_ACTIVITY': case 'MONITORING': case 'RESOLVING': case 'MEDIUM': return 'bg-blue-400/20';
      case 'INVESTIGATING': case 'ACTIVE': case 'HIGH': return 'bg-yellow-400/20';
      case 'CRITICAL': case 'SUSPENDED': case 'HALTED': case 'CLOSED': return 'bg-red-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'HIGH': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="w-4 h-4 text-red-400" />;
      case 'decreasing': return <TrendingDown className="w-4 h-4 text-green-400" />;
      case 'stable': return <Activity className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const formatCurrency = (num) => {
    if (Math.abs(num) >= 1000000000) return (num / 1000000000).toFixed(2) + 'B';
    if (Math.abs(num) >= 1000000) return (num / 1000000).toFixed(2) + 'M';
    if (Math.abs(num) >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toFixed(2);
  };

  const formatNumber = (num) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Trading Floor Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <DollarSign className="w-8 h-8 text-green-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Financial Trading Floor & Risk Management Center</h2>
              <div className="text-sm text-gray-400">Nasdaq • Solidus Labs • LSEG • Real-Time Market Surveillance</div>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className={`w-5 h-5 animate-pulse ${
                tradingData.marketStatus === 'OPEN' ? 'text-green-400' : 'text-red-400'
              }`} />
              <span className={`text-sm font-semibold ${getStatusColor(tradingData.marketStatus)}`}>
                MARKET {tradingData.marketStatus || 'UNKNOWN'}
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Daily P&L</div>
            <div className={`text-2xl font-mono font-bold ${
              (tradingData.pnl || 0) >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {(tradingData.pnl || 0) >= 0 ? '+' : ''}${formatCurrency(tradingData.pnl || 0)}
            </div>
            <div className="text-xs text-blue-400">
              Risk Utilization: {(tradingData.riskUtilization || 73.4).toFixed(1)}%
            </div>
          </div>
        </div>
        
        {/* Global Trading Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Total Volume</span>
              <BarChart3 className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {formatNumber(tradingData.totalVolume || 2847293847)}<span className="text-sm text-gray-400 ml-1">shares</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-blue-400 transition-all duration-300"
                style={{ width: `${Math.min(100, ((tradingData.totalVolume || 2847293847) / 5000000000) * 100)}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">daily trading</div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Total Value</span>
              <DollarSign className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-lg font-mono text-white">
              ${formatCurrency(tradingData.totalValue || 89472837292)}
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-green-400 transition-all duration-300"
                style={{ width: `${Math.min(100, ((tradingData.totalValue || 89472837292) / 150000000000) * 100)}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">notional value</div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Active Traders</span>
              <Users className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {tradingData.activeTraders || 1847}<span className="text-sm text-gray-400 ml-1">traders</span>
            </div>
            <div className="text-xs text-purple-400 mt-1">
              {tradingData.surveillanceAlerts || 156} surveillance alerts
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Risk Alerts</span>
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {tradingData.riskAlerts || 23}<span className="text-sm text-gray-400 ml-1">active</span>
            </div>
            <div className="text-xs text-red-400 mt-1">
              requires attention
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trading Desks */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Building className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Trading Desks Performance</h3>
            <div className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs font-semibold rounded">
              REAL-TIME
            </div>
          </div>
          
          <div className="space-y-4">
            {tradingData.tradingDesks?.map((desk, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Monitor className="w-5 h-5 text-blue-400" />
                    <div>
                      <h4 className="text-white font-medium">{desk?.name || 'Unknown Desk'}</h4>
                      <div className="text-xs text-gray-400">{desk?.location || 'Unknown Location'} • {desk?.traders || 0} traders</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(desk?.status)} ${getStatusBg(desk?.status)}`}>
                      {desk?.status?.replace('_', ' ') || 'UNKNOWN'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-mono font-bold ${
                      (desk?.pnl || 0) >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {(desk?.pnl || 0) >= 0 ? '+' : ''}${formatCurrency(desk?.pnl || 0)}
                    </div>
                    <div className="text-xs text-gray-400">daily P&L</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-3">
                  <div>
                    <span className="text-xs text-gray-400">Volume:</span>
                    <div className="text-white font-mono">{formatNumber(desk?.volume || 0)}</div>
                    <div className="text-xs text-blue-400">shares</div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">Risk Used:</span>
                    <div className="text-white font-mono">${formatCurrency(desk?.riskUsed || 0)}</div>
                    <div className="text-xs text-purple-400">of ${formatCurrency(desk?.riskLimit || 0)}</div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">Latency:</span>
                    <div className="text-white font-mono">{(desk?.avgLatency || 0).toFixed(2)}ms</div>
                    <div className="text-xs text-green-400">{(desk?.successRate || 0).toFixed(1)}% success</div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">Alerts:</span>
                    <div className="text-white font-mono">{desk?.alerts || 0}</div>
                    <div className="text-xs text-red-400">active</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-full bg-slate-700 rounded-full h-2 mr-4">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        (desk?.utilization || 0) < 70 ? 'bg-green-400' : 
                        (desk?.utilization || 0) < 80 ? 'bg-yellow-400' : 'bg-red-400'
                      }`}
                      style={{ width: `${Math.min(100, desk?.utilization || 0)}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 whitespace-nowrap">
                    Risk: {(desk?.utilization || 0).toFixed(1)}%
                  </div>
                </div>
              </div>
            )) || <div className="text-gray-400">No trading desk data available</div>}
          </div>
        </div>

        {/* Market Data */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Live Market Data</h3>
          </div>
          
          <div className="space-y-3">
            {tradingData.marketData?.map((market, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{market?.symbol || 'Unknown Symbol'}</span>
                  <div className={`flex items-center space-x-1 ${
                    (market?.changePercent || 0) >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {(market?.changePercent || 0) >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    <span className="text-xs">{(market?.changePercent || 0) >= 0 ? '+' : ''}{(market?.changePercent || 0).toFixed(2)}%</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Price:</span>
                    <div className="text-white font-mono">{(market?.price || 0).toFixed(2)}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Change:</span>
                    <div className={`font-mono ${
                      (market?.change || 0) >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {(market?.change || 0) >= 0 ? '+' : ''}{(market?.change || 0).toFixed(2)}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Volume:</span>
                    <div className="text-blue-400 font-mono">{market?.volume || 'N/A'}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Volatility:</span>
                    <div className="text-purple-400 font-mono">{(market?.volatility || 0).toFixed(1)}%</div>
                  </div>
                </div>
                
                {market?.marketCap && market?.marketCap !== 'N/A' && (
                  <div className="text-xs text-gray-400">
                    Market Cap: {market.marketCap}
                  </div>
                )}
              </div>
            )) || <div className="text-gray-400">No market data available</div>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Management */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Risk Management Metrics</h3>
          </div>
          
          <div className="space-y-4">
            {tradingData.riskMetrics?.map((risk, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-red-400" />
                    <span className="text-white font-medium text-sm">{risk?.metric || 'Unknown Metric'}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {getTrendIcon(risk?.trend)}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Current:</span>
                    <div className="text-white font-mono">
                      {risk?.metric === 'Leverage Ratio' ? 
                        (risk?.current || 0).toFixed(2) + 'x' : 
                        '$' + formatCurrency(risk?.current || 0)
                      }
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Limit:</span>
                    <div className="text-blue-400 font-mono">
                      {risk?.metric === 'Leverage Ratio' ? 
                        (risk?.limit || 0).toFixed(1) + 'x' : 
                        '$' + formatCurrency(risk?.limit || 0)
                      }
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Utilization:</span>
                    <div className={`font-mono ${
                      (risk?.utilization || 0) < 70 ? 'text-green-400' : 
                      (risk?.utilization || 0) < 85 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {(risk?.utilization || 0).toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Timeframe:</span>
                    <div className="text-purple-400">{risk?.timeframe || 'N/A'}</div>
                  </div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      (risk?.utilization || 0) < 70 ? 'bg-green-400' : 
                      (risk?.utilization || 0) < 85 ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                    style={{ width: `${Math.min(100, risk?.utilization || 0)}%` }}
                  />
                </div>

                {risk?.confidence && risk?.confidence !== 'N/A' && (
                  <div className="text-xs text-gray-400 mt-1">
                    Confidence: {risk.confidence}
                  </div>
                )}
              </div>
            )) || <div className="text-gray-400">No risk metrics available</div>}
          </div>
        </div>

        {/* Trading Alerts & Surveillance */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Eye className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">Surveillance & Alerts</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            {tradingData.surveillanceEvents?.slice(0, 2).map((event, index) => (
              <div key={index} className={`border rounded p-3 transition-all ${
                event?.priority === 'HIGH' ? 'border-red-400/50 bg-red-400/10' :
                event?.priority === 'MEDIUM' ? 'border-yellow-400/50 bg-yellow-400/10' :
                'border-blue-400/50 bg-blue-400/10'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-gray-400 font-mono">{event?.timestamp || 'No Time'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(event?.priority)} ${getStatusBg(event?.priority)}`}>
                      {event?.priority || 'UNKNOWN'}
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(event?.status)} ${getStatusBg(event?.status)}`}>
                      {event?.status?.replace('_', ' ') || 'UNKNOWN'}
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 mb-1">{event?.pattern || 'Unknown Pattern'}</div>
                <div className="text-xs text-blue-400 mb-1">
                  <strong>Trader:</strong> {event?.trader || 'Unknown'} • <strong>Desk:</strong> {event?.desk || 'Unknown'}
                </div>
                <div className="text-xs text-green-400">
                  <strong>Action:</strong> {event?.action || 'No action'} • Confidence: {event?.confidence || 0}%
                </div>
              </div>
            )) || <div className="text-gray-400">No surveillance events</div>}
          </div>

          <div className="space-y-3">
            <div className="text-sm text-gray-400 mb-2">Active Trading Alerts</div>
            {tradingData.tradingAlerts?.slice(0, 2).map((alert, index) => (
              <div key={index} className={`border rounded p-3 transition-all ${
                alert?.priority === 'CRITICAL' ? 'border-red-400/50 bg-red-400/10' :
                alert?.priority === 'HIGH' ? 'border-yellow-400/50 bg-yellow-400/10' :
                'border-blue-400/50 bg-blue-400/10'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-gray-400 font-mono">{alert?.timestamp || 'No Time'}</span>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(alert?.priority)} ${getStatusBg(alert?.priority)}`}>
                    {alert?.priority || 'UNKNOWN'}
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 mb-1">{alert?.message || 'No message'}</div>
                <div className="text-xs text-blue-400 mb-1"><strong>Desk:</strong> {alert?.desk || 'Unknown'}</div>
                <div className="text-xs text-green-400"><strong>Recommendation:</strong> {alert?.recommendation || 'None'}</div>
              </div>
            )) || <div className="text-gray-400">No trading alerts</div>}
          </div>
        </div>
      </div>
    </div>
  );
}