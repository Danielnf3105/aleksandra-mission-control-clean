// FinancialOperationsCenter.js - Financial Operations Center & Trading Floor Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FinancialOperationsCenter = () => {
  const [tradingStatus, setTradingStatus] = useState({
    operationalStatus: 'MARKET_OPEN',
    marketHours: 'REGULAR_TRADING',
    totalVolume: 2847963420, // USD
    dailyTransactions: 1567834,
    activeTraders: 15647,
    systemsStatus: 'ALL_OPERATIONAL',
    latencyAverage: 0.85, // milliseconds
    uptimeToday: 99.97, // percentage
    riskExposure: 'WITHIN_LIMITS',
    complianceStatus: 'COMPLIANT',
    lastUpdate: Date.now()
  });

  const [riskManagement, setRiskManagement] = useState({
    market_risk: {
      var_95: 2847563, // USD Value at Risk 95%
      var_99: 4523890, // USD Value at Risk 99%
      stress_test_result: 'PASS',
      portfolio_beta: 1.23,
      sharpe_ratio: 1.45,
      maximum_drawdown: 8.7, // percentage
      risk_limit_utilization: 67.8 // percentage
    },
    credit_risk: {
      counterparty_exposure: 15647234, // USD
      credit_limit_utilization: 45.7, // percentage
      default_probability: 0.12, // percentage
      credit_rating_distribution: {
        'AAA': 23.4, 'AA': 34.7, 'A': 28.9, 'BBB': 8.9, 'BB': 3.1, 'B': 1.0
      },
      collateral_coverage: 156.7 // percentage
    },
    operational_risk: {
      incidents_today: 3,
      system_failures: 0,
      error_rate: 0.003, // percentage
      sla_compliance: 99.8, // percentage
      business_continuity: 'ACTIVE',
      disaster_recovery: 'TESTED'
    },
    liquidity_risk: {
      cash_position: 45678123, // USD
      funding_ratio: 112.3, // percentage
      liquidity_buffer: 23456789, // USD
      stress_liquidity: 'ADEQUATE',
      funding_sources: 12,
      maturity_mismatch: 'LOW'
    }
  });

  const [complianceMonitoring, setComplianceMonitoring] = useState({
    aml_monitoring: {
      transactions_screened: 1567834,
      alerts_generated: 234,
      false_positive_rate: 12.7, // percentage
      cases_investigated: 45,
      suspicious_activity_reports: 8,
      sanctions_screening: 'REAL_TIME',
      kyc_updates_required: 156,
      ai_detection_accuracy: 94.7 // percentage
    },
    regulatory_compliance: {
      mifid_ii_compliance: 'COMPLIANT',
      basel_iii_ratio: 16.8, // percentage
      dodd_frank_status: 'COMPLIANT',
      gdpr_data_protection: 'VERIFIED',
      sox_controls: 'TESTED',
      audit_findings: 2,
      regulatory_changes: 3,
      compliance_score: 96.4 // percentage
    },
    trade_surveillance: {
      market_abuse_alerts: 12,
      insider_trading_flags: 0,
      market_manipulation_checks: 15647,
      cross_market_surveillance: 'ACTIVE',
      best_execution_monitoring: 'COMPLIANT',
      transaction_cost_analysis: 'AUTOMATED',
      surveillance_coverage: 99.9 // percentage
    }
  });

  const [tradingOperations, setTradingOperations] = useState([
    {
      desk: 'EQUITY_TRADING',
      trader_count: 45,
      daily_volume: 856734523, // USD
      transactions: 234567,
      avg_trade_size: 3658, // USD
      success_rate: 98.7, // percentage
      latency: 0.62, // milliseconds
      pnl_today: 2847563, // USD
      var_utilization: 67.8, // percentage
      top_stocks: ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA'],
      market_making: 'ACTIVE'
    },
    {
      desk: 'FIXED_INCOME',
      trader_count: 32,
      daily_volume: 567234890,
      transactions: 89456,
      avg_trade_size: 6342,
      success_rate: 99.1,
      latency: 0.78,
      pnl_today: 1567234,
      var_utilization: 45.3,
      instruments: ['GOVT_BONDS', 'CORP_BONDS', 'MUNIS', 'TIPS', 'SWAPS'],
      yield_curve_risk: 'MONITORED'
    },
    {
      desk: 'FX_DERIVATIVES',
      trader_count: 28,
      daily_volume: 1234567890,
      transactions: 156234,
      avg_trade_size: 7903,
      success_rate: 97.9,
      latency: 0.95,
      pnl_today: 3456789,
      var_utilization: 72.1,
      currency_pairs: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'USD/CHF', 'AUD/USD'],
      volatility_exposure: 'MEDIUM'
    },
    {
      desk: 'COMMODITIES',
      trader_count: 18,
      daily_volume: 345678234,
      transactions: 45678,
      avg_trade_size: 7567,
      success_rate: 96.3,
      latency: 1.12,
      pnl_today: 567890,
      var_utilization: 58.9,
      commodities: ['CRUDE_OIL', 'GOLD', 'NATURAL_GAS', 'COPPER', 'WHEAT'],
      storage_capacity: 'OPTIMAL'
    },
    {
      desk: 'CRYPTO_DIGITAL',
      trader_count: 15,
      daily_volume: 123456789,
      transactions: 78923,
      avg_trade_size: 1564,
      success_rate: 94.8,
      latency: 2.34,
      pnl_today: 234567,
      var_utilization: 89.7,
      currencies: ['BTC', 'ETH', 'SOL', 'ADA', 'DOT'],
      custody_security: 'ENHANCED'
    }
  ]);

  const [fraudDetection, setFraudDetection] = useState({
    ai_fraud_engine: {
      transactions_analyzed: 1567834,
      fraud_detected: 89,
      prevention_rate: 99.4, // percentage
      false_positives: 234,
      machine_learning_models: 12,
      real_time_scoring: 'ENABLED',
      pattern_recognition: 'ADVANCED',
      detection_speed: 0.23 // seconds
    },
    transaction_patterns: [
      {
        pattern_type: 'UNUSUAL_VOLUME',
        alerts_today: 34,
        risk_level: 'MEDIUM',
        detection_accuracy: 87.3, // percentage
        false_positive_rate: 8.7, // percentage
        investigation_status: 'AUTOMATED'
      },
      {
        pattern_type: 'VELOCITY_SPIKE',
        alerts_today: 12,
        risk_level: 'HIGH',
        detection_accuracy: 94.2,
        false_positive_rate: 3.4,
        investigation_status: 'MANUAL_REVIEW'
      },
      {
        pattern_type: 'GEOLOCATION_ANOMALY',
        alerts_today: 67,
        risk_level: 'LOW',
        detection_accuracy: 92.8,
        false_positive_rate: 12.1,
        investigation_status: 'AUTOMATED'
      },
      {
        pattern_type: 'BEHAVIORAL_DEVIATION',
        alerts_today: 23,
        risk_level: 'MEDIUM',
        detection_accuracy: 89.6,
        false_positive_rate: 7.8,
        investigation_status: 'AI_ENHANCED'
      }
    ],
    identity_verification: {
      verifications_today: 3456,
      success_rate: 94.7, // percentage
      document_fraud_detected: 23,
      biometric_matches: 98.9, // percentage
      kyc_completions: 89.3, // percentage
      enhanced_due_diligence: 156
    }
  });

  const [systemsMonitoring, setSystemsMonitoring] = useState({
    trading_systems: [
      {
        system_name: 'CORE_TRADING_ENGINE',
        status: 'OPERATIONAL',
        uptime: 99.98, // percentage
        latency: 0.42, // milliseconds
        throughput: 50000, // transactions/second
        cpu_utilization: 45.7, // percentage
        memory_usage: 67.8, // percentage
        error_rate: 0.001 // percentage
      },
      {
        system_name: 'RISK_MANAGEMENT_SYSTEM',
        status: 'OPERATIONAL',
        uptime: 99.95,
        latency: 1.23,
        throughput: 25000,
        cpu_utilization: 52.3,
        memory_usage: 71.4,
        error_rate: 0.002
      },
      {
        system_name: 'MARKET_DATA_FEED',
        status: 'OPERATIONAL',
        uptime: 99.99,
        latency: 0.18,
        throughput: 100000,
        cpu_utilization: 38.9,
        memory_usage: 56.2,
        error_rate: 0.0001
      },
      {
        system_name: 'COMPLIANCE_ENGINE',
        status: 'OPERATIONAL',
        uptime: 99.92,
        latency: 2.45,
        throughput: 15000,
        cpu_utilization: 41.2,
        memory_usage: 63.7,
        error_rate: 0.003
      },
      {
        system_name: 'SETTLEMENT_SYSTEM',
        status: 'MAINTENANCE',
        maintenance_window: Date.now() + 30 * 60 * 1000,
        maintenance_type: 'SCHEDULED_UPGRADE',
        estimated_duration: 45, // minutes
        backup_system: 'ACTIVE'
      }
    ],
    data_feeds: {
      market_data_providers: 12,
      feeds_active: 234,
      data_quality: 99.8, // percentage
      latency_sla: 1.0, // milliseconds
      actual_latency: 0.67,
      redundancy: 'TRIPLE',
      failover_time: 0.05 // seconds
    }
  });

  const [financialHistory, setFinancialHistory] = useState([]);

  const generateFinancialHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(9, 0, 0, 0); // Markets open at 9 AM
    
    for (let i = 0; i <= 8; i++) { // 8 hours of trading
      const time = new Date(startOfDay.getTime() + i * 60 * 60 * 1000);
      
      // Simulate realistic trading patterns
      const hour = time.getHours();
      let volumeMultiplier = 0.6; // Base volume
      
      if (hour === 9 || hour === 16) volumeMultiplier = 1.0; // Opening/closing surge
      if (hour >= 10 && hour <= 15) volumeMultiplier = 0.8; // Steady trading
      if (hour >= 12 && hour <= 13) volumeMultiplier = 0.5; // Lunch lull
      
      data.push({
        time: time.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        trading_volume: Math.floor((200000000 + volumeMultiplier * 400000000) + Math.random() * 100000000),
        transactions: Math.floor((80000 + volumeMultiplier * 120000) + Math.random() * 20000),
        system_latency: 0.3 + (1 - volumeMultiplier) * 0.8 + Math.random() * 0.3,
        risk_utilization: 40 + volumeMultiplier * 40 + Math.random() * 15,
        compliance_alerts: Math.floor((1 - volumeMultiplier + 0.2) * 30 + Math.random() * 20),
        pnl: Math.floor((volumeMultiplier * 2000000) + (Math.random() - 0.5) * 1000000),
        fraud_score: 1 + (1 - volumeMultiplier) * 4 + Math.random() * 2
      });
    }
    return data;
  };

  useEffect(() => {
    setFinancialHistory(generateFinancialHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update trading status
      setTradingStatus(prev => ({
        ...prev,
        totalVolume: prev.totalVolume + Math.floor(Math.random() * 10000000),
        dailyTransactions: prev.dailyTransactions + Math.floor(Math.random() * 1000),
        latencyAverage: Math.max(0.3, Math.min(2.0, prev.latencyAverage + (Math.random() - 0.5) * 0.1)),
        uptimeToday: Math.max(99.5, Math.min(100.0, prev.uptimeToday + (Math.random() - 0.5) * 0.02)),
        lastUpdate: Date.now()
      }));

      // Update risk management
      setRiskManagement(prev => ({
        ...prev,
        market_risk: {
          ...prev.market_risk,
          risk_limit_utilization: Math.max(50.0, Math.min(85.0, prev.market_risk.risk_limit_utilization + (Math.random() - 0.5) * 3.0)),
          portfolio_beta: Math.max(0.8, Math.min(1.8, prev.market_risk.portfolio_beta + (Math.random() - 0.5) * 0.05))
        }
      }));

      // Update trading operations
      setTradingOperations(prev => prev.map(desk => ({
        ...desk,
        daily_volume: desk.daily_volume + Math.floor(Math.random() * 5000000),
        transactions: desk.transactions + Math.floor(Math.random() * 500),
        pnl_today: desk.pnl_today + Math.floor((Math.random() - 0.5) * 100000),
        latency: Math.max(0.1, Math.min(5.0, desk.latency + (Math.random() - 0.5) * 0.1))
      })));

      // Update fraud detection
      setFraudDetection(prev => ({
        ...prev,
        ai_fraud_engine: {
          ...prev.ai_fraud_engine,
          transactions_analyzed: prev.ai_fraud_engine.transactions_analyzed + Math.floor(Math.random() * 500),
          fraud_detected: prev.ai_fraud_engine.fraud_detected + Math.floor(Math.random() * 2),
          false_positives: prev.ai_fraud_engine.false_positives + Math.floor(Math.random() * 5)
        }
      }));

    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'MARKET_OPEN':
      case 'ALL_OPERATIONAL':
      case 'OPERATIONAL':
      case 'COMPLIANT':
      case 'WITHIN_LIMITS':
      case 'ACTIVE':
      case 'ENABLED':
      case 'PASS':
      case 'ADEQUATE':
      case 'TESTED':
      case 'VERIFIED':
      case 'ENHANCED':
      case 'ADVANCED':
      case 'AUTOMATED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'REGULAR_TRADING':
      case 'MONITORED':
      case 'MEDIUM':
      case 'MANUAL_REVIEW':
      case 'AI_ENHANCED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'HIGH':
      case 'MAINTENANCE':
      case 'SCHEDULED_UPGRADE': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'CRITICAL':
      case 'FAILED':
      case 'LOW': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatNumber = (num, decimals = 0) => {
    return num.toFixed(decimals);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toString();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    const diff = timestamp - Date.now();
    if (Math.abs(diff) < 60000) return 'now';
    if (diff > 0) {
      if (diff < 3600000) return `in ${Math.floor(diff / 60000)}min`;
      return `in ${Math.floor(diff / 3600000)}h`;
    } else {
      const absDiff = Math.abs(diff);
      if (absDiff < 3600000) return `${Math.floor(absDiff / 60000)}m ago`;
      return `${Math.floor(absDiff / 3600000)}h ago`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          💹 FINANCIAL OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {formatNumber(tradingStatus.uptimeToday, 2)}% Uptime
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatCurrency(tradingStatus.totalVolume)}
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatNumber(tradingStatus.latencyAverage, 2)}ms
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Trading Floor & Risk Management
          </div>
        </div>
      </div>

      {/* Trading Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">DAILY VOLUME</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatCurrency(tradingStatus.totalVolume)}
              </div>
              <div className="text-xs text-blue-300">
                {formatLargeNumber(tradingStatus.dailyTransactions)} transactions
              </div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SYSTEM UPTIME</div>
              <div className="text-2xl font-bold text-green-100">
                {formatNumber(tradingStatus.uptimeToday, 2)}%
              </div>
              <div className="text-xs text-green-300">
                All systems operational
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">AVG LATENCY</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(tradingStatus.latencyAverage, 2)}ms
              </div>
              <div className="text-xs text-purple-300">
                {formatLargeNumber(tradingStatus.activeTraders)} active traders
              </div>
            </div>
            <div className="text-3xl opacity-60">🚀</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">MARKET STATUS</div>
              <div className="text-2xl font-bold text-orange-100">
                {tradingStatus.marketHours.replace(/_/g, ' ')}
              </div>
              <div className="text-xs text-orange-300">
                {tradingStatus.operationalStatus.replace(/_/g, ' ')}
              </div>
            </div>
            <div className="text-3xl opacity-60">🏛️</div>
          </div>
        </div>
      </div>

      {/* Trading Desks Operations */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          💼 TRADING DESKS & PORTFOLIO OPERATIONS
        </h3>
        <div className="space-y-3">
          {tradingOperations.map((desk) => (
            <div key={desk.desk} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{desk.desk.replace(/_/g, ' ')}</div>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {desk.trader_count} Traders
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  Success Rate: {formatNumber(desk.success_rate, 1)}%
                </div>
              </div>

              <div className="text-sm mb-2">
                <span className="text-gray-400">Daily Volume: </span>
                <span className="text-cyan-400">{formatCurrency(desk.daily_volume)}</span>
                <span className="text-gray-400"> | Transactions: </span>
                <span className="text-blue-400">{formatLargeNumber(desk.transactions)}</span>
                <span className="text-gray-400"> | Avg Trade: </span>
                <span className="text-purple-400">{formatCurrency(desk.avg_trade_size)}</span>
              </div>

              <div className="text-xs mb-2">
                <span className="text-gray-400">Latency: </span>
                <span className="text-green-400">{formatNumber(desk.latency, 2)}ms</span>
                <span className="text-gray-400"> | P&L Today: </span>
                <span className={desk.pnl_today >= 0 ? 'text-green-400' : 'text-red-400'}>
                  {formatCurrency(desk.pnl_today)}
                </span>
                <span className="text-gray-400"> | VaR Utilization: </span>
                <span className="text-orange-400">{formatNumber(desk.var_utilization, 1)}%</span>
              </div>

              {desk.desk === 'EQUITY_TRADING' && (
                <div className="text-xs">
                  <span className="text-gray-400">Top Stocks: </span>
                  <span className="text-yellow-400">{desk.top_stocks?.join(', ')}</span>
                  <span className="text-gray-400"> | Market Making: </span>
                  <span className={`${getStatusColor(desk.market_making).split(' ')[0]}`}>
                    {desk.market_making}
                  </span>
                </div>
              )}

              {desk.desk === 'FIXED_INCOME' && (
                <div className="text-xs">
                  <span className="text-gray-400">Instruments: </span>
                  <span className="text-yellow-400">{desk.instruments?.join(', ')}</span>
                  <span className="text-gray-400"> | Yield Curve Risk: </span>
                  <span className={`${getStatusColor(desk.yield_curve_risk).split(' ')[0]}`}>
                    {desk.yield_curve_risk}
                  </span>
                </div>
              )}

              {desk.desk === 'FX_DERIVATIVES' && (
                <div className="text-xs">
                  <span className="text-gray-400">Currency Pairs: </span>
                  <span className="text-yellow-400">{desk.currency_pairs?.join(', ')}</span>
                  <span className="text-gray-400"> | Vol Exposure: </span>
                  <span className={`${getStatusColor(desk.volatility_exposure).split(' ')[0]}`}>
                    {desk.volatility_exposure}
                  </span>
                </div>
              )}

              {desk.desk === 'COMMODITIES' && (
                <div className="text-xs">
                  <span className="text-gray-400">Commodities: </span>
                  <span className="text-yellow-400">{desk.commodities?.join(', ')}</span>
                  <span className="text-gray-400"> | Storage: </span>
                  <span className={`${getStatusColor(desk.storage_capacity).split(' ')[0]}`}>
                    {desk.storage_capacity}
                  </span>
                </div>
              )}

              {desk.desk === 'CRYPTO_DIGITAL' && (
                <div className="text-xs">
                  <span className="text-gray-400">Currencies: </span>
                  <span className="text-yellow-400">{desk.currencies?.join(', ')}</span>
                  <span className="text-gray-400"> | Custody: </span>
                  <span className={`${getStatusColor(desk.custody_security).split(' ')[0]}`}>
                    {desk.custody_security}
                  </span>
                </div>
              )}

              <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                <div 
                  className={`h-2 rounded-full ${desk.var_utilization < 70 ? 'bg-green-400' : 
                                                   desk.var_utilization < 85 ? 'bg-yellow-400' : 'bg-orange-400'}`}
                  style={{ width: `${Math.min(desk.var_utilization, 100)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Management and Compliance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚠️ RISK MANAGEMENT & EXPOSURE MONITORING
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Market Risk</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">VaR 95%:</span>
                <span className="text-red-400">{formatCurrency(riskManagement.market_risk.var_95)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">VaR 99%:</span>
                <span className="text-red-400">{formatCurrency(riskManagement.market_risk.var_99)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Portfolio Beta:</span>
                <span className="text-blue-400">{formatNumber(riskManagement.market_risk.portfolio_beta, 2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sharpe Ratio:</span>
                <span className="text-green-400">{formatNumber(riskManagement.market_risk.sharpe_ratio, 2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Max Drawdown:</span>
                <span className="text-orange-400">{formatNumber(riskManagement.market_risk.maximum_drawdown, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Risk Utilization:</span>
                <span className="text-purple-400">{formatNumber(riskManagement.market_risk.risk_limit_utilization, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Stress Test:</span>
                <span className={`${getStatusColor(riskManagement.market_risk.stress_test_result).split(' ')[0]}`}>
                  {riskManagement.market_risk.stress_test_result}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Credit Risk</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Counterparty Exposure:</span>
                <span className="text-cyan-400">{formatCurrency(riskManagement.credit_risk.counterparty_exposure)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Credit Limit Usage:</span>
                <span className="text-yellow-400">{formatNumber(riskManagement.credit_risk.credit_limit_utilization, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Default Probability:</span>
                <span className="text-red-400">{formatNumber(riskManagement.credit_risk.default_probability, 2)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Collateral Coverage:</span>
                <span className="text-green-400">{formatNumber(riskManagement.credit_risk.collateral_coverage, 1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Operational Risk</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Incidents Today:</span>
                <span className="text-orange-400">{riskManagement.operational_risk.incidents_today}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">System Failures:</span>
                <span className="text-green-400">{riskManagement.operational_risk.system_failures}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Error Rate:</span>
                <span className="text-blue-400">{formatNumber(riskManagement.operational_risk.error_rate, 3)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SLA Compliance:</span>
                <span className="text-green-400">{formatNumber(riskManagement.operational_risk.sla_compliance, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Business Continuity:</span>
                <span className={`${getStatusColor(riskManagement.operational_risk.business_continuity).split(' ')[0]}`}>
                  {riskManagement.operational_risk.business_continuity}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Disaster Recovery:</span>
                <span className={`${getStatusColor(riskManagement.operational_risk.disaster_recovery).split(' ')[0]}`}>
                  {riskManagement.operational_risk.disaster_recovery}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Monitoring */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛡️ COMPLIANCE MONITORING & AML
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">AML Monitoring</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Transactions Screened:</span>
                <span className="text-blue-400">{formatLargeNumber(complianceMonitoring.aml_monitoring.transactions_screened)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Alerts Generated:</span>
                <span className="text-orange-400">{complianceMonitoring.aml_monitoring.alerts_generated}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">False Positive Rate:</span>
                <span className="text-yellow-400">{formatNumber(complianceMonitoring.aml_monitoring.false_positive_rate, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cases Investigated:</span>
                <span className="text-purple-400">{complianceMonitoring.aml_monitoring.cases_investigated}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SARs Filed:</span>
                <span className="text-red-400">{complianceMonitoring.aml_monitoring.suspicious_activity_reports}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">KYC Updates:</span>
                <span className="text-cyan-400">{complianceMonitoring.aml_monitoring.kyc_updates_required}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">AI Detection:</span>
                <span className="text-green-400">{formatNumber(complianceMonitoring.aml_monitoring.ai_detection_accuracy, 1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Regulatory Compliance</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">MiFID II:</span>
                <span className={`${getStatusColor(complianceMonitoring.regulatory_compliance.mifid_ii_compliance).split(' ')[0]}`}>
                  {complianceMonitoring.regulatory_compliance.mifid_ii_compliance}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Basel III Ratio:</span>
                <span className="text-green-400">{formatNumber(complianceMonitoring.regulatory_compliance.basel_iii_ratio, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Dodd-Frank:</span>
                <span className={`${getStatusColor(complianceMonitoring.regulatory_compliance.dodd_frank_status).split(' ')[0]}`}>
                  {complianceMonitoring.regulatory_compliance.dodd_frank_status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">GDPR:</span>
                <span className={`${getStatusColor(complianceMonitoring.regulatory_compliance.gdpr_data_protection).split(' ')[0]}`}>
                  {complianceMonitoring.regulatory_compliance.gdpr_data_protection}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SOX Controls:</span>
                <span className={`${getStatusColor(complianceMonitoring.regulatory_compliance.sox_controls).split(' ')[0]}`}>
                  {complianceMonitoring.regulatory_compliance.sox_controls}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Audit Findings:</span>
                <span className="text-yellow-400">{complianceMonitoring.regulatory_compliance.audit_findings}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Compliance Score:</span>
                <span className="text-green-400">{formatNumber(complianceMonitoring.regulatory_compliance.compliance_score, 1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Trade Surveillance</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Market Abuse Alerts:</span>
                <span className="text-red-400">{complianceMonitoring.trade_surveillance.market_abuse_alerts}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Insider Trading Flags:</span>
                <span className="text-green-400">{complianceMonitoring.trade_surveillance.insider_trading_flags}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Market Manipulation:</span>
                <span className="text-blue-400">{formatLargeNumber(complianceMonitoring.trade_surveillance.market_manipulation_checks)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cross Market:</span>
                <span className={`${getStatusColor(complianceMonitoring.trade_surveillance.cross_market_surveillance).split(' ')[0]}`}>
                  {complianceMonitoring.trade_surveillance.cross_market_surveillance}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Best Execution:</span>
                <span className={`${getStatusColor(complianceMonitoring.trade_surveillance.best_execution_monitoring).split(' ')[0]}`}>
                  {complianceMonitoring.trade_surveillance.best_execution_monitoring}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Coverage:</span>
                <span className="text-green-400">{formatNumber(complianceMonitoring.trade_surveillance.surveillance_coverage, 1)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 FINANCIAL OPERATIONS TRENDS (TRADING DAY)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={financialHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="time" stroke="#9CA3AF" fontSize={10}/>
            <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12}/>
            <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12}/>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
            />
            <Legend />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="trading_volume"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Trading Volume ($M)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="transactions" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Transactions (k)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="system_latency" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="System Latency (ms)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="risk_utilization" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Risk Utilization %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="compliance_alerts" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Compliance Alerts"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="pnl" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="P&L ($M)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="fraud_score" 
              stroke="#F97316" 
              strokeWidth={2}
              name="Fraud Risk Score"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Fraud Detection and Systems Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fraud Detection */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔍 AI FRAUD DETECTION & PREVENTION
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">AI Fraud Engine</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Transactions Analyzed:</span>
                <span className="text-blue-400">{formatLargeNumber(fraudDetection.ai_fraud_engine.transactions_analyzed)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fraud Detected:</span>
                <span className="text-red-400">{fraudDetection.ai_fraud_engine.fraud_detected}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Prevention Rate:</span>
                <span className="text-green-400">{formatNumber(fraudDetection.ai_fraud_engine.prevention_rate, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">False Positives:</span>
                <span className="text-yellow-400">{fraudDetection.ai_fraud_engine.false_positives}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ML Models:</span>
                <span className="text-purple-400">{fraudDetection.ai_fraud_engine.machine_learning_models}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Detection Speed:</span>
                <span className="text-cyan-400">{formatNumber(fraudDetection.ai_fraud_engine.detection_speed, 2)}s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Real-time Scoring:</span>
                <span className={`${getStatusColor(fraudDetection.ai_fraud_engine.real_time_scoring).split(' ')[0]}`}>
                  {fraudDetection.ai_fraud_engine.real_time_scoring}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Pattern Detection</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {fraudDetection.transaction_patterns.map((pattern, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{pattern.pattern_type.replace(/_/g, ' ')}</span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(pattern.risk_level)}`}>
                      {pattern.risk_level}
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Alerts Today: </span>
                    <span className="text-orange-400">{pattern.alerts_today}</span>
                    <span className="text-gray-400"> | Accuracy: </span>
                    <span className="text-green-400">{formatNumber(pattern.detection_accuracy, 1)}%</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">False Positive: </span>
                    <span className="text-yellow-400">{formatNumber(pattern.false_positive_rate, 1)}%</span>
                    <span className="text-gray-400"> | Investigation: </span>
                    <span className="text-cyan-400">{pattern.investigation_status.replace(/_/g, ' ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Systems Monitoring */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🖥️ TRADING SYSTEMS & INFRASTRUCTURE
          </h3>
          
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {systemsMonitoring.trading_systems.map((system, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white">{system.system_name.replace(/_/g, ' ')}</span>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(system.status)}`}>
                    {system.status}
                  </span>
                </div>

                {system.status === 'OPERATIONAL' ? (
                  <>
                    <div className="text-xs mb-1">
                      <span className="text-gray-400">Uptime: </span>
                      <span className="text-green-400">{formatNumber(system.uptime, 2)}%</span>
                      <span className="text-gray-400"> | Latency: </span>
                      <span className="text-blue-400">{formatNumber(system.latency, 2)}ms</span>
                      <span className="text-gray-400"> | Throughput: </span>
                      <span className="text-purple-400">{formatLargeNumber(system.throughput)}/s</span>
                    </div>
                    <div className="text-xs mb-1">
                      <span className="text-gray-400">CPU: </span>
                      <span className="text-orange-400">{formatNumber(system.cpu_utilization, 1)}%</span>
                      <span className="text-gray-400"> | Memory: </span>
                      <span className="text-yellow-400">{formatNumber(system.memory_usage, 1)}%</span>
                      <span className="text-gray-400"> | Error Rate: </span>
                      <span className="text-red-400">{formatNumber(system.error_rate, 3)}%</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-xs mb-1">
                      <span className="text-gray-400">Maintenance: </span>
                      <span className="text-orange-400">{system.maintenance_type?.replace(/_/g, ' ')}</span>
                      <span className="text-gray-400"> | ETA: </span>
                      <span className="text-yellow-400">{formatTime(system.maintenance_window)}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Duration: </span>
                      <span className="text-purple-400">{system.estimated_duration}min</span>
                      <span className="text-gray-400"> | Backup: </span>
                      <span className="text-green-400">{system.backup_system}</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mt-4">
            <h4 className="text-sm font-bold text-white mb-3">Market Data Feeds</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Data Providers:</span>
                <span className="text-blue-400">{systemsMonitoring.data_feeds.market_data_providers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Feeds:</span>
                <span className="text-green-400">{systemsMonitoring.data_feeds.feeds_active}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Data Quality:</span>
                <span className="text-purple-400">{formatNumber(systemsMonitoring.data_feeds.data_quality, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SLA/Actual Latency:</span>
                <span className="text-orange-400">
                  {formatNumber(systemsMonitoring.data_feeds.latency_sla, 1)}/{formatNumber(systemsMonitoring.data_feeds.actual_latency, 2)}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Redundancy:</span>
                <span className="text-cyan-400">{systemsMonitoring.data_feeds.redundancy}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Failover Time:</span>
                <span className="text-yellow-400">{formatNumber(systemsMonitoring.data_feeds.failover_time, 2)}s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOperationsCenter;