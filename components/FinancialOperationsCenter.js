import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { DollarSign, TrendingUp, Shield, AlertTriangle, Activity, Eye, BarChart3, PieChart as PieChartIcon, Target, Settings, Clock, Users } from 'lucide-react';

const FinancialOperationsCenter = () => {
  const [financialStatus, setFinancialStatus] = useState({
    totalPortfolioValue: 2847658934.47, // USD
    dailyPnL: 12847523.89,
    totalTrades: 234567,
    activePositions: 8947,
    riskExposure: 847532154.23,
    var95: 23847562.11, // Value at Risk 95%
    sharpeRatio: 2.47,
    maxDrawdown: -5.23 // %
  });

  const [tradingOperations, setTradingOperations] = useState([
    {
      id: 'TRADER-001',
      name: 'Michael Chen',
      desk: 'Equity Trading',
      pnl: 2847523.45,
      trades: 1247,
      winRate: 67.8,
      sharpe: 2.87,
      maxDrawdown: -3.2,
      riskLimit: 50000000,
      currentRisk: 34756821.23,
      status: 'active',
      avgTradeSize: 2845000
    },
    {
      id: 'TRADER-002',
      name: 'Sarah Williams',
      desk: 'Fixed Income',
      pnl: 1234567.89,
      trades: 847,
      winRate: 72.4,
      sharpe: 3.12,
      maxDrawdown: -2.1,
      riskLimit: 75000000,
      currentRisk: 45632891.47,
      status: 'active',
      avgTradeSize: 5230000
    },
    {
      id: 'TRADER-003',
      name: 'David Rodriguez',
      desk: 'FX Trading',
      pnl: 3456789.12,
      trades: 2847,
      winRate: 59.3,
      sharpe: 1.98,
      maxDrawdown: -6.7,
      riskLimit: 30000000,
      currentRisk: 28934567.89,
      status: 'risk_alert',
      avgTradeSize: 1850000
    },
    {
      id: 'TRADER-004',
      name: 'Amanda Kim',
      desk: 'Derivatives',
      pnl: 4567890.23,
      trades: 1567,
      winRate: 74.1,
      sharpe: 4.23,
      maxDrawdown: -1.8,
      riskLimit: 100000000,
      currentRisk: 67834521.45,
      status: 'active',
      avgTradeSize: 8945000
    },
    {
      id: 'TRADER-005',
      name: 'Robert Thompson',
      desk: 'Commodities',
      pnl: -456789.34,
      trades: 934,
      winRate: 45.2,
      sharpe: 0.67,
      maxDrawdown: -12.4,
      riskLimit: 40000000,
      currentRisk: 38567234.12,
      status: 'underperforming',
      avgTradeSize: 3250000
    }
  ]);

  const [riskMonitoring, setRiskMonitoring] = useState([
    {
      id: 'RISK-EQUITY',
      assetClass: 'Equity',
      exposure: 1234567890.45,
      var95: 12345678.90,
      expectedShortfall: 18234567.45,
      beta: 1.23,
      concentration: 34.7, // %
      stressTestResult: -45678901.23,
      status: 'normal',
      alerts: 0
    },
    {
      id: 'RISK-BOND',
      assetClass: 'Fixed Income',
      exposure: 987654321.23,
      var95: 9876543.21,
      expectedShortfall: 14567890.12,
      beta: 0.67,
      concentration: 28.4,
      stressTestResult: -23456789.01,
      status: 'normal',
      alerts: 0
    },
    {
      id: 'RISK-FX',
      assetClass: 'Foreign Exchange',
      exposure: 456789012.34,
      var95: 4567890.12,
      expectedShortfall: 6789012.34,
      beta: 0.45,
      concentration: 16.2,
      stressTestResult: -12345678.90,
      status: 'warning',
      alerts: 1
    },
    {
      id: 'RISK-DERIV',
      assetClass: 'Derivatives',
      exposure: 789012345.67,
      var95: 7890123.45,
      expectedShortfall: 11234567.89,
      beta: 1.89,
      concentration: 18.9,
      stressTestResult: -34567890.12,
      status: 'normal',
      alerts: 0
    },
    {
      id: 'RISK-COMM',
      assetClass: 'Commodities',
      exposure: 234567890.12,
      var95: 2345678.90,
      expectedShortfall: 3456789.12,
      beta: 0.89,
      concentration: 7.8,
      stressTestResult: -8901234.56,
      status: 'normal',
      alerts: 0
    }
  ]);

  const [marketSurveillance, setMarketSurveillance] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      pnl: 12234567.89,
      var95: 23456789.12,
      trades: 8947,
      riskUtilization: 76.8
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      pnl: 12456789.12,
      var95: 23567890.23,
      trades: 9123,
      riskUtilization: 77.2
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      pnl: 12567890.23,
      var95: 23678901.34,
      trades: 9234,
      riskUtilization: 76.9
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      pnl: 12678901.34,
      var95: 23789012.45,
      trades: 9345,
      riskUtilization: 77.5
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      pnl: 12789012.45,
      var95: 23890123.56,
      trades: 9456,
      riskUtilization: 77.1
    },
    {
      time: new Date().toLocaleTimeString(),
      pnl: 12847523.89,
      var95: 23847562.11,
      trades: 9521,
      riskUtilization: 76.8
    }
  ]);

  const [financialAlerts, setFinancialAlerts] = useState([
    {
      id: 'FIN-001',
      severity: 'warning',
      type: 'Risk Limit Breach',
      message: 'FX Trading desk approaching 95% of risk limit - immediate attention required',
      timestamp: new Date(),
      status: 'active',
      trader: 'David Rodriguez',
      impact: 'high'
    },
    {
      id: 'FIN-002',
      severity: 'caution',
      type: 'Performance Alert',
      message: 'Commodities desk underperforming - monthly P&L below threshold',
      timestamp: new Date(Date.now() - 180000),
      status: 'investigating',
      trader: 'Robert Thompson',
      impact: 'medium'
    },
    {
      id: 'FIN-003',
      severity: 'info',
      type: 'Market Opportunity',
      message: 'Volatility spike detected in equity markets - arbitrage opportunity identified',
      timestamp: new Date(Date.now() - 360000),
      status: 'resolved',
      trader: 'System Generated',
      impact: 'positive'
    }
  ]);

  const [complianceMonitoring, setComplianceMonitoring] = useState([
    {
      regulation: 'Dodd-Frank',
      status: 'compliant',
      lastCheck: new Date(),
      violations: 0,
      score: 98.7,
      nextReview: '2026-03-15'
    },
    {
      regulation: 'MiFID II',
      status: 'compliant',
      lastCheck: new Date(),
      violations: 0,
      score: 97.4,
      nextReview: '2026-03-10'
    },
    {
      regulation: 'Basel III',
      status: 'warning',
      lastCheck: new Date(),
      violations: 1,
      score: 94.2,
      nextReview: '2026-03-08'
    },
    {
      regulation: 'GDPR',
      status: 'compliant',
      lastCheck: new Date(),
      violations: 0,
      score: 99.1,
      nextReview: '2026-03-20'
    },
    {
      regulation: 'CCAR',
      status: 'compliant',
      lastCheck: new Date(),
      violations: 0,
      score: 96.8,
      nextReview: '2026-03-12'
    }
  ]);

  const [tradingTeam, setTradingTeam] = useState([
    {
      name: 'Head Trader Wilson',
      position: 'Head of Trading',
      shift: 'Market Hours',
      status: 'monitoring',
      location: 'Trading Floor',
      experience: '20 years'
    },
    {
      name: 'Risk Manager Martinez',
      position: 'Chief Risk Officer',
      shift: 'Extended Hours',
      status: 'analyzing',
      location: 'Risk Control',
      experience: '18 years'
    },
    {
      name: 'Compliance Officer Chen',
      position: 'Compliance Director',
      shift: 'Business Hours',
      status: 'auditing',
      location: 'Compliance Center',
      experience: '15 years'
    },
    {
      name: 'Portfolio Manager Kim',
      position: 'Portfolio Manager',
      shift: 'Market Hours',
      status: 'optimizing',
      location: 'Portfolio Desk',
      experience: '12 years'
    }
  ]);

  const [systemMetrics, setSystemMetrics] = useState({
    tradingSystems: 99.98, // uptime %
    riskEngine: 99.95,
    complianceSystem: 99.92,
    marketData: 99.99,
    executionLatency: 0.123, // ms
    riskCalculationTime: 45.7, // ms
    fraudDetection: 98.7, // accuracy %
    auditTrail: 100.0 // completeness %
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update financial status
      setFinancialStatus(prev => ({
        ...prev,
        dailyPnL: prev.dailyPnL + (Math.random() - 0.5) * 100000,
        totalTrades: prev.totalTrades + Math.floor(Math.random() * 50),
        activePositions: Math.max(8000, Math.min(10000, prev.activePositions + Math.floor((Math.random() - 0.5) * 100))),
        riskExposure: Math.max(prev.riskExposure * 0.95, Math.min(prev.riskExposure * 1.05, prev.riskExposure + (Math.random() - 0.5) * 10000000)),
        var95: Math.max(prev.var95 * 0.9, Math.min(prev.var95 * 1.1, prev.var95 + (Math.random() - 0.5) * 1000000)),
        sharpeRatio: Math.max(1.5, Math.min(4.0, prev.sharpeRatio + (Math.random() - 0.5) * 0.1))
      }));

      // Update trading operations
      setTradingOperations(prev => prev.map(trader => ({
        ...trader,
        pnl: trader.pnl + (Math.random() - 0.5) * 50000,
        trades: trader.trades + Math.floor(Math.random() * 10),
        currentRisk: Math.max(trader.riskLimit * 0.3, Math.min(trader.riskLimit * 0.98, trader.currentRisk + (Math.random() - 0.5) * 1000000)),
        winRate: Math.max(40, Math.min(80, trader.winRate + (Math.random() - 0.5) * 1)),
        sharpe: Math.max(0.5, Math.min(5.0, trader.sharpe + (Math.random() - 0.5) * 0.1))
      })));

      // Update risk monitoring
      setRiskMonitoring(prev => prev.map(risk => ({
        ...risk,
        var95: Math.max(risk.var95 * 0.8, Math.min(risk.var95 * 1.2, risk.var95 + (Math.random() - 0.5) * 500000)),
        expectedShortfall: Math.max(risk.expectedShortfall * 0.8, Math.min(risk.expectedShortfall * 1.2, risk.expectedShortfall + (Math.random() - 0.5) * 750000)),
        beta: Math.max(0.2, Math.min(2.5, risk.beta + (Math.random() - 0.5) * 0.05)),
        concentration: Math.max(5, Math.min(50, risk.concentration + (Math.random() - 0.5) * 1))
      })));

      // Update market surveillance
      const newSurveillanceData = {
        time: new Date().toLocaleTimeString(),
        pnl: financialStatus.dailyPnL,
        var95: financialStatus.var95 / 1000000, // Convert to millions for chart
        trades: financialStatus.activePositions,
        riskUtilization: (financialStatus.riskExposure / (financialStatus.totalPortfolioValue * 0.3)) * 100
      };
      
      setMarketSurveillance(prev => [...prev.slice(1), newSurveillanceData]);

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        tradingSystems: Math.max(99.8, Math.min(100, prev.tradingSystems + (Math.random() - 0.3) * 0.01)),
        riskEngine: Math.max(99.8, Math.min(100, prev.riskEngine + (Math.random() - 0.3) * 0.01)),
        executionLatency: Math.max(0.05, Math.min(0.5, prev.executionLatency + (Math.random() - 0.5) * 0.02)),
        riskCalculationTime: Math.max(20, Math.min(100, prev.riskCalculationTime + (Math.random() - 0.5) * 5)),
        fraudDetection: Math.max(95, Math.min(100, prev.fraudDetection + (Math.random() - 0.5) * 0.2))
      }));

      // Occasionally add new financial alerts
      if (Math.random() > 0.96) {
        const alertTypes = ['Risk Limit Breach', 'Performance Alert', 'Market Opportunity', 'Compliance Issue'];
        const severities = ['info', 'caution', 'warning', 'critical'];
        const traders = tradingOperations.map(t => t.name);
        
        const newAlert = {
          id: `FIN-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time financial operations alert',
          timestamp: new Date(),
          status: 'active',
          trader: traders[Math.floor(Math.random() * traders.length)],
          impact: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)]
        };
        
        setFinancialAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [financialStatus.dailyPnL, financialStatus.var95, financialStatus.activePositions, financialStatus.riskExposure, financialStatus.totalPortfolioValue]);

  const getTraderStatusColor = (status) => {
    switch (status) {
      case 'active': return '#10B981';
      case 'risk_alert': return '#F59E0B';
      case 'underperforming': return '#EF4444';
      case 'suspended': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getRiskStatusColor = (status) => {
    switch (status) {
      case 'normal': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'critical': return '#EF4444';
      case 'breach': return '#DC2626';
      default: return '#6B7280';
    }
  };

  const getComplianceStatusColor = (status) => {
    switch (status) {
      case 'compliant': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'violation': return '#EF4444';
      case 'review': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'caution': return '#3B82F6';
      case 'info': return '#10B981';
      default: return '#6B7280';
    }
  };

  const portfolioAllocation = [
    { name: 'Equity', value: 34.7, color: '#3B82F6' },
    { name: 'Fixed Income', value: 28.4, color: '#10B981' },
    { name: 'Derivatives', value: 18.9, color: '#8B5CF6' },
    { name: 'FX', value: 16.2, color: '#F59E0B' },
    { name: 'Commodities', value: 7.8, color: '#EF4444' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <DollarSign className="w-8 h-8 text-green-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">FINANCIAL OPERATIONS CENTER</h1>
            <p className="text-gray-400">Risk management, compliance monitoring, market surveillance, portfolio analytics & trading systems</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              ${(financialStatus.dailyPnL / 1000000).toFixed(1)}M
            </div>
            <div className="text-xs text-gray-400">DAILY P&L</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">
              ${(financialStatus.totalPortfolioValue / 1000000000).toFixed(2)}B
            </div>
            <div className="text-xs text-gray-400">PORTFOLIO</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{financialStatus.sharpeRatio.toFixed(2)}</div>
            <div className="text-xs text-gray-400">SHARPE RATIO</div>
          </div>
        </div>
      </div>

      {/* Financial KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <BarChart3 className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">TRADES</span>
          </div>
          <div className="text-xl font-bold text-white">{financialStatus.totalTrades.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Total Today</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">POSITIONS</span>
          </div>
          <div className="text-xl font-bold text-white">{financialStatus.activePositions.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Active</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">VAR 95%</span>
          </div>
          <div className="text-xl font-bold text-white">${(financialStatus.var95 / 1000000).toFixed(1)}M</div>
          <div className="text-xs text-gray-400">Risk</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">EXPOSURE</span>
          </div>
          <div className="text-xl font-bold text-white">${(financialStatus.riskExposure / 1000000000).toFixed(2)}B</div>
          <div className="text-xs text-gray-400">Total</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">DRAWDOWN</span>
          </div>
          <div className="text-xl font-bold text-white">{financialStatus.maxDrawdown.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">Max</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">UTILIZATION</span>
          </div>
          <div className="text-xl font-bold text-white">
            {((financialStatus.riskExposure / (financialStatus.totalPortfolioValue * 0.3)) * 100).toFixed(1)}%
          </div>
          <div className="text-xs text-gray-400">Risk</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Trading Operations */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-green-400" />
            TRADING OPERATIONS
          </h3>
          <div className="space-y-3">
            {tradingOperations.map(trader => (
              <div key={trader.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getTraderStatusColor(trader.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{trader.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getTraderStatusColor(trader.status)}20`, 
                      color: getTraderStatusColor(trader.status) 
                    }}>
                      {trader.status.toUpperCase().replace('_', ' ')}
                    </span>
                    <span className="text-xs text-gray-400">
                      {((trader.currentRisk / trader.riskLimit) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  Desk: <span className="text-blue-400">{trader.desk}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">P&L</span>
                    <span className={trader.pnl >= 0 ? "text-green-400" : "text-red-400"}>
                      ${(trader.pnl / 1000000).toFixed(2)}M
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Trades</span>
                    <span className="text-blue-400">{trader.trades.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Win Rate</span>
                    <span className="text-purple-400">{trader.winRate.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sharpe</span>
                    <span className="text-white">{trader.sharpe.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Risk: ${(trader.currentRisk / 1000000).toFixed(1)}M
                  </span>
                  <span className="text-gray-500">
                    Avg: ${(trader.avgTradeSize / 1000000).toFixed(1)}M
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Monitoring */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-yellow-400" />
            RISK MONITORING
          </h3>
          <div className="space-y-3">
            {riskMonitoring.map(risk => (
              <div key={risk.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getRiskStatusColor(risk.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{risk.assetClass}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getRiskStatusColor(risk.status)}20`, 
                      color: getRiskStatusColor(risk.status) 
                    }}>
                      {risk.status.toUpperCase()}
                    </span>
                    {risk.alerts > 0 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-red-900 text-red-400">
                        {risk.alerts} Alert{risk.alerts > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Exposure</span>
                    <span className="text-green-400">${(risk.exposure / 1000000000).toFixed(2)}B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">VaR 95%</span>
                    <span className="text-blue-400">${(risk.var95 / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Beta</span>
                    <span className="text-purple-400">{risk.beta.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Concentration</span>
                    <span className="text-white">{risk.concentration.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    ES: ${(risk.expectedShortfall / 1000000).toFixed(1)}M
                  </span>
                  <span className="text-gray-500">
                    Stress: ${(risk.stressTestResult / 1000000).toFixed(1)}M
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance & Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-orange-400" />
            COMPLIANCE & ALERTS
          </h3>
          <div className="space-y-3 mb-4">
            {complianceMonitoring.slice(0, 4).map((compliance, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{compliance.regulation}</span>
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: getComplianceStatusColor(compliance.status) }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Score</span>
                    <span className="text-blue-400">{compliance.score.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Violations</span>
                    <span className={compliance.violations > 0 ? "text-red-400" : "text-green-400"}>
                      {compliance.violations}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300">
                  Next Review: <span className="text-purple-400">{compliance.nextReview}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Financial Alerts */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">Trading Alerts</div>
            <div className="space-y-2">
              {financialAlerts.slice(0, 3).map(alert => (
                <div key={alert.id} className="bg-gray-800 rounded-lg p-2 border-l-2" style={{ borderLeftColor: getAlertSeverityColor(alert.severity) }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-white">{alert.type}</span>
                    <span className="text-xs px-1 py-0.5 rounded-full" style={{ 
                      backgroundColor: `${getAlertSeverityColor(alert.severity)}20`, 
                      color: getAlertSeverityColor(alert.severity) 
                    }}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mb-1">{alert.message}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400">{alert.trader}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Financial Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Market Surveillance */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME MARKET SURVEILLANCE</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketSurveillance}>
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
                dataKey="pnl" 
                stroke="#10B981" 
                strokeWidth={3}
                name="P&L ($M)"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="var95" 
                stroke="#EF4444" 
                strokeWidth={2}
                name="VaR 95% ($M)"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="riskUtilization" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Risk Utilization %"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Portfolio Allocation & System Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">PORTFOLIO ALLOCATION & SYSTEM STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={portfolioAllocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {portfolioAllocation.map((entry, index) => (
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
                  formatter={(value) => [`${value}%`, 'Portfolio Allocation']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-4">
              {portfolioAllocation.map((asset, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: asset.color }}
                    />
                    <span className="text-gray-400 text-sm">{asset.name}</span>
                  </div>
                  <span className="text-white font-semibold">{asset.value}%</span>
                </div>
              ))}
              
              {/* System Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">System Status</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Trading Systems</span>
                    <span className="text-green-400">{systemMetrics.tradingSystems.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Risk Engine</span>
                    <span className="text-blue-400">{systemMetrics.riskEngine.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Execution Latency</span>
                    <span className="text-purple-400">{systemMetrics.executionLatency.toFixed(3)}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fraud Detection</span>
                    <span className="text-green-400">{systemMetrics.fraudDetection.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Financial Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Financial Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <DollarSign className="w-3 h-3 inline mr-1" />
                  Trading Floor
                </button>
                <button className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 rounded text-xs transition-colors">
                  <Shield className="w-3 h-3 inline mr-1" />
                  Risk Management
                </button>
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Eye className="w-3 h-3 inline mr-1" />
                  Market Surveillance
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOperationsCenter;