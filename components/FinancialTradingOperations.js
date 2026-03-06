// FinancialTradingOperations.js - Financial Trading Operations Center & Risk Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FinancialTradingOperations = () => {
  const [tradingStatus, setTradingStatus] = useState({
    operationalStatus: 'MARKET_OPEN',
    marketSession: 'REGULAR_HOURS',
    totalVolume: 2847392847, // USD
    transactionCount: 156743,
    activeTraders: 234,
    systemLatency: 0.23, // milliseconds
    riskExposure: 156743289, // USD
    complianceAlerts: 8,
    positionsMonitored: 45623,
    marketDataFeeds: 'OPERATIONAL',
    tradingHalt: false,
    lastUpdate: Date.now()
  });

  const [portfolioRiskManagement, setPortfolioRiskManagement] = useState([
    {
      portfolio_id: 'EQUITY_LARGE_CAP',
      portfolio_name: 'Large Cap Equities',
      manager: 'Sarah Chen',
      total_value: 847392847, // USD
      pnl_today: 2847392,
      pnl_percentage: 0.34,
      var_95: 15647892, // 95% Value at Risk
      positions: 234,
      sector_exposure: {
        technology: 32.4,
        healthcare: 18.7,
        financials: 16.9,
        consumer_discretionary: 12.3,
        industrials: 9.8,
        energy: 5.6,
        utilities: 2.8,
        materials: 1.5
      },
      risk_metrics: {
        beta: 1.12,
        volatility: 18.7, // percentage
        sharpe_ratio: 1.43,
        max_drawdown: -8.9, // percentage
        tracking_error: 2.1
      },
      compliance_status: 'GREEN',
      concentration_alerts: 2,
      breach_notifications: 0
    },
    {
      portfolio_id: 'FIXED_INCOME_GOVT',
      portfolio_name: 'Government Bonds',
      manager: 'Michael Rodriguez',
      total_value: 456789234,
      pnl_today: -234567,
      pnl_percentage: -0.05,
      var_95: 4567892,
      positions: 89,
      duration_risk: 4.7, // years
      credit_exposure: {
        aaa: 67.8,
        aa: 18.9,
        a: 9.7,
        bbb: 3.6
      },
      risk_metrics: {
        duration: 4.7,
        volatility: 6.2,
        yield: 3.84,
        spread_duration: 2.1,
        convexity: 0.89
      },
      compliance_status: 'YELLOW',
      concentration_alerts: 0,
      breach_notifications: 1
    },
    {
      portfolio_id: 'ALTERNATIVES_HEDGE',
      portfolio_name: 'Hedge Fund Strategies',
      manager: 'Lisa Zhang',
      total_value: 234567890,
      pnl_today: 567890,
      pnl_percentage: 0.24,
      var_95: 8901234,
      positions: 567,
      strategy_allocation: {
        long_short_equity: 34.5,
        market_neutral: 23.8,
        event_driven: 18.7,
        global_macro: 12.6,
        distressed_debt: 10.4
      },
      risk_metrics: {
        alpha: 2.34,
        volatility: 12.8,
        correlation_to_market: 0.23,
        liquidity_score: 7.8,
        leverage_ratio: 2.1
      },
      compliance_status: 'GREEN',
      concentration_alerts: 1,
      breach_notifications: 0
    }
  ]);

  const [marketSurveillance, setMarketSurveillance] = useState({
    surveillance_systems: {
      nasdaq_smarts: 'ACTIVE',
      finra_oats: 'OPERATIONAL',
      sec_cat: 'CONNECTED', // Consolidated Audit Trail
      aml_monitoring: 'SCANNING',
      communications_surveillance: 'MONITORING'
    },
    pattern_detection: [
      {
        pattern_type: 'LAYERING',
        alerts_today: 3,
        risk_score: 7.2,
        status: 'UNDER_REVIEW',
        securities_affected: ['AAPL', 'MSFT'],
        time_window: '09:45-10:15'
      },
      {
        pattern_type: 'WASH_TRADING',
        alerts_today: 1,
        risk_score: 8.7,
        status: 'ESCALATED',
        securities_affected: ['CRYPTO_BTC'],
        time_window: '14:23-14:45'
      },
      {
        pattern_type: 'SPOOFING',
        alerts_today: 2,
        risk_score: 6.8,
        status: 'INVESTIGATING',
        securities_affected: ['ES_FUT', 'NQ_FUT'],
        time_window: '11:30-12:00'
      }
    ],
    threshold_breaches: 8,
    position_limits: 'MONITORED',
    large_trader_reporting: 'COMPLIANT',
    best_execution_analysis: 'ONGOING',
    reg_sho_monitoring: 'ACTIVE'
  });

  const [complianceMonitoring, setComplianceMonitoring] = useState({
    regulatory_frameworks: {
      finra_rules: 'COMPLIANT',
      sec_regulations: 'COMPLIANT',
      mifid_ii: 'COMPLIANT',
      dodd_frank: 'COMPLIANT',
      basel_iii: 'UNDER_REVIEW'
    },
    daily_reviews: {
      trade_reviews_pending: 45,
      exception_reports: 12,
      policy_violations: 3,
      escalated_issues: 2,
      completed_reviews: 1247
    },
    communications_compliance: {
      emails_scanned: 45623,
      chat_messages_analyzed: 156743,
      phone_calls_monitored: 567,
      ai_flagged_content: 23,
      manual_reviews_required: 8,
      compliance_keywords_detected: 156
    },
    training_compliance: {
      required_certifications: 89,
      completed_training: 234,
      pending_renewals: 12,
      overdue_certifications: 3,
      compliance_score: 94.7 // percentage
    },
    audit_trail: {
      transactions_logged: 156743,
      data_integrity: 99.97, // percentage
      retention_compliance: 'COMPLIANT',
      backup_systems: 'OPERATIONAL'
    }
  });

  const [tradingSystemsHealth, setTradingSystemsHealth] = useState({
    core_systems: [
      {
        system_name: 'ORDER_MANAGEMENT_SYSTEM',
        status: 'OPERATIONAL',
        uptime: 99.97, // percentage
        latency: 0.23, // milliseconds
        throughput: 156743, // orders/second
        cpu_usage: 67.3,
        memory_usage: 78.9,
        disk_usage: 45.6,
        network_utilization: 34.8,
        last_restart: Date.now() - 7 * 24 * 60 * 60 * 1000
      },
      {
        system_name: 'RISK_MANAGEMENT_ENGINE',
        status: 'OPERATIONAL',
        uptime: 99.94,
        latency: 0.45,
        calculations_per_second: 45623,
        cpu_usage: 89.2,
        memory_usage: 67.4,
        disk_usage: 56.7,
        network_utilization: 23.5,
        last_restart: Date.now() - 3 * 24 * 60 * 60 * 1000
      },
      {
        system_name: 'MARKET_DATA_PROCESSOR',
        status: 'OPERATIONAL',
        uptime: 99.99,
        latency: 0.12,
        messages_per_second: 2847392,
        cpu_usage: 45.7,
        memory_usage: 89.1,
        disk_usage: 23.4,
        network_utilization: 78.9,
        last_restart: Date.now() - 14 * 24 * 60 * 60 * 1000
      },
      {
        system_name: 'COMPLIANCE_MONITOR',
        status: 'MAINTENANCE',
        maintenance_window: '02:00-04:00',
        eta_completion: Date.now() + 2 * 60 * 60 * 1000,
        maintenance_type: 'SCHEDULED_UPGRADE',
        backup_system: 'ACTIVE'
      }
    ],
    connectivity: {
      market_data_feeds: 'CONNECTED',
      clearing_houses: 'OPERATIONAL',
      prime_brokers: 'CONNECTED',
      regulatory_reporting: 'TRANSMITTING',
      backup_connections: 'STANDBY'
    },
    circuit_breakers: {
      equity_market_breaker: 'ARMED',
      volatility_breaker: 'ACTIVE',
      individual_stock_halts: 'MONITORING',
      crypto_circuit_breakers: 'ARMED'
    }
  });

  const [traderPerformance, setTraderPerformance] = useState([
    {
      trader_id: 'TRD_001',
      name: 'Alex Thompson',
      desk: 'EQUITY_DERIVATIVES',
      pnl_today: 234567,
      pnl_mtd: 2847392,
      trades_today: 156,
      hit_ratio: 67.3, // percentage
      avg_trade_size: 45623, // USD
      risk_limit_utilization: 78.9, // percentage
      var_contribution: 2847392,
      compliance_score: 98.7,
      violations_ytd: 0,
      certifications_current: true
    },
    {
      trader_id: 'TRD_002',
      name: 'Maria Santos',
      desk: 'FIXED_INCOME',
      pnl_today: -45623,
      pnl_mtd: 567890,
      trades_today: 89,
      hit_ratio: 71.2,
      avg_trade_size: 156743,
      risk_limit_utilization: 45.6,
      var_contribution: 1234567,
      compliance_score: 94.2,
      violations_ytd: 1,
      certifications_current: true
    },
    {
      trader_id: 'TRD_003',
      name: 'David Kim',
      desk: 'COMMODITIES',
      pnl_today: 156789,
      pnl_mtd: 1234567,
      trades_today: 234,
      hit_ratio: 63.8,
      avg_trade_size: 78901,
      risk_limit_utilization: 89.3,
      var_contribution: 3456789,
      compliance_score: 96.8,
      violations_ytd: 0,
      certifications_current: false,
      cert_renewal_due: Date.now() + 7 * 24 * 60 * 60 * 1000
    }
  ]);

  const [operationsHistory, setOperationsHistory] = useState([]);

  const generateOperationsHistory = () => {
    const data = [];
    const marketOpen = new Date();
    marketOpen.setHours(9, 30, 0, 0); // Market opens at 9:30 AM
    
    for (let i = 0; i <= 7; i++) { // 7 hours of trading session
      const time = new Date(marketOpen.getTime() + i * 60 * 60 * 1000);
      
      // Simulate realistic trading patterns
      const hour = time.getHours();
      let volumeMultiplier = 0.5; // Base volume
      
      if (hour === 9) volumeMultiplier = 1.0; // Opening bell
      if (hour >= 10 && hour <= 11) volumeMultiplier = 0.7; // Morning activity
      if (hour >= 12 && hour <= 14) volumeMultiplier = 0.6; // Lunch period
      if (hour >= 15 && hour <= 16) volumeMultiplier = 0.9; // Closing activity
      
      data.push({
        time: time.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        volume: Math.floor(300000000 + volumeMultiplier * 500000000 + Math.random() * 100000000),
        pnl: Math.floor((Math.random() - 0.3) * 5000000),
        risk_exposure: Math.floor(100000000 + volumeMultiplier * 50000000 + Math.random() * 20000000),
        compliance_alerts: Math.floor(Math.random() * 8),
        system_latency: 0.1 + volumeMultiplier * 0.3 + Math.random() * 0.2,
        active_positions: Math.floor(30000 + volumeMultiplier * 20000 + Math.random() * 5000),
        var_95: Math.floor(10000000 + volumeMultiplier * 8000000 + Math.random() * 3000000)
      });
    }
    return data;
  };

  useEffect(() => {
    setOperationsHistory(generateOperationsHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update trading status
      setTradingStatus(prev => ({
        ...prev,
        totalVolume: prev.totalVolume + Math.floor(Math.random() * 50000000),
        transactionCount: prev.transactionCount + Math.floor(Math.random() * 500),
        riskExposure: Math.max(100000000, prev.riskExposure + Math.floor((Math.random() - 0.5) * 10000000)),
        systemLatency: Math.max(0.1, Math.min(2.0, prev.systemLatency + (Math.random() - 0.5) * 0.1)),
        complianceAlerts: Math.max(0, prev.complianceAlerts + Math.floor((Math.random() - 0.8) * 3)),
        lastUpdate: Date.now()
      }));

      // Update portfolio risk management
      setPortfolioRiskManagement(prev => prev.map(portfolio => ({
        ...portfolio,
        pnl_today: portfolio.pnl_today + Math.floor((Math.random() - 0.5) * 100000),
        pnl_percentage: portfolio.pnl_percentage + (Math.random() - 0.5) * 0.05,
        var_95: Math.max(1000000, portfolio.var_95 + Math.floor((Math.random() - 0.5) * 500000))
      })));

      // Update market surveillance
      setMarketSurveillance(prev => ({
        ...prev,
        threshold_breaches: Math.max(0, prev.threshold_breaches + Math.floor((Math.random() - 0.9) * 3))
      }));

    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'MARKET_OPEN':
      case 'OPERATIONAL':
      case 'ACTIVE':
      case 'CONNECTED':
      case 'COMPLIANT':
      case 'TRANSMITTING':
      case 'MONITORING':
      case 'GREEN': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'REGULAR_HOURS':
      case 'SCANNING':
      case 'ONGOING':
      case 'UNDER_REVIEW':
      case 'STANDBY':
      case 'ARMED':
      case 'YELLOW': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'INVESTIGATING':
      case 'ESCALATED':
      case 'MAINTENANCE': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'CRITICAL':
      case 'HALTED':
      case 'RED': return 'text-red-400 bg-red-400/20 border-red-400/30';
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
      if (diff < 86400000) return `in ${Math.floor(diff / 3600000)}h`;
      return `in ${Math.floor(diff / 86400000)}d`;
    } else {
      const absDiff = Math.abs(diff);
      if (absDiff < 3600000) return `${Math.floor(absDiff / 60000)}m ago`;
      if (absDiff < 86400000) return `${Math.floor(absDiff / 3600000)}h ago`;
      return `${Math.floor(absDiff / 86400000)}d ago`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          💹 FINANCIAL TRADING OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {formatCurrency(tradingStatus.totalVolume)} Volume
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatNumber(tradingStatus.systemLatency, 2)}ms Latency
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {tradingStatus.complianceAlerts} Alerts
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Risk Management & Regulatory Compliance
          </div>
        </div>
      </div>

      {/* Trading Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">TRADING VOLUME</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatLargeNumber(tradingStatus.totalVolume)}
              </div>
              <div className="text-xs text-blue-300">
                {formatLargeNumber(tradingStatus.transactionCount)} transactions
              </div>
            </div>
            <div className="text-3xl opacity-60">📈</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">RISK EXPOSURE</div>
              <div className="text-2xl font-bold text-green-100">
                {formatLargeNumber(tradingStatus.riskExposure)}
              </div>
              <div className="text-xs text-green-300">
                {formatLargeNumber(tradingStatus.positionsMonitored)} positions
              </div>
            </div>
            <div className="text-3xl opacity-60">⚠️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">ACTIVE TRADERS</div>
              <div className="text-2xl font-bold text-purple-100">
                {tradingStatus.activeTraders}
              </div>
              <div className="text-xs text-purple-300">
                {tradingStatus.marketSession.replace(/_/g, ' ')}
              </div>
            </div>
            <div className="text-3xl opacity-60">👤</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">SYSTEM LATENCY</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(tradingStatus.systemLatency, 2)}ms
              </div>
              <div className="text-xs text-orange-300">
                Real-time Performance
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>
      </div>

      {/* Portfolio Risk Management */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📊 PORTFOLIO RISK MANAGEMENT & VAR ANALYSIS
        </h3>
        <div className="space-y-3">
          {portfolioRiskManagement.map((portfolio) => (
            <div key={portfolio.portfolio_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{portfolio.portfolio_name}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(portfolio.compliance_status)}`}>
                    {portfolio.compliance_status}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {portfolio.positions} positions
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  Manager: {portfolio.manager}
                </div>
              </div>

              <div className="text-xs mb-2">
                <span className="text-gray-400">Total Value: </span>
                <span className="text-cyan-400">{formatCurrency(portfolio.total_value)}</span>
                <span className="text-gray-400"> | P&L Today: </span>
                <span className={portfolio.pnl_today >= 0 ? 'text-green-400' : 'text-red-400'}>
                  {formatCurrency(portfolio.pnl_today)} ({formatNumber(portfolio.pnl_percentage, 2)}%)
                </span>
                <span className="text-gray-400"> | VaR 95%: </span>
                <span className="text-orange-400">{formatCurrency(portfolio.var_95)}</span>
              </div>

              {portfolio.risk_metrics && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Risk Metrics: </span>
                  {portfolio.risk_metrics.beta && (
                    <>
                      <span className="text-purple-400">Beta: {formatNumber(portfolio.risk_metrics.beta, 2)}</span>
                      <span className="text-gray-400"> | </span>
                    </>
                  )}
                  <span className="text-blue-400">Vol: {formatNumber(portfolio.risk_metrics.volatility, 1)}%</span>
                  {portfolio.risk_metrics.sharpe_ratio && (
                    <>
                      <span className="text-gray-400"> | Sharpe: </span>
                      <span className="text-green-400">{formatNumber(portfolio.risk_metrics.sharpe_ratio, 2)}</span>
                    </>
                  )}
                  {portfolio.risk_metrics.max_drawdown && (
                    <>
                      <span className="text-gray-400"> | Max DD: </span>
                      <span className="text-red-400">{formatNumber(portfolio.risk_metrics.max_drawdown, 1)}%</span>
                    </>
                  )}
                </div>
              )}

              <div className="text-xs">
                <span className="text-gray-400">Concentration Alerts: </span>
                <span className={portfolio.concentration_alerts > 0 ? 'text-yellow-400' : 'text-green-400'}>
                  {portfolio.concentration_alerts}
                </span>
                <span className="text-gray-400"> | Breach Notifications: </span>
                <span className={portfolio.breach_notifications > 0 ? 'text-red-400' : 'text-green-400'}>
                  {portfolio.breach_notifications}
                </span>
                {portfolio.duration_risk && (
                  <>
                    <span className="text-gray-400"> | Duration Risk: </span>
                    <span className="text-pink-400">{formatNumber(portfolio.duration_risk, 1)} years</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Surveillance and Compliance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Market Surveillance */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👁️ MARKET SURVEILLANCE & PATTERN DETECTION
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Surveillance Systems</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">NASDAQ SMARTS:</span>
                <span className={`${getStatusColor(marketSurveillance.surveillance_systems.nasdaq_smarts).split(' ')[0]}`}>
                  {marketSurveillance.surveillance_systems.nasdaq_smarts}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">FINRA OATS:</span>
                <span className={`${getStatusColor(marketSurveillance.surveillance_systems.finra_oats).split(' ')[0]}`}>
                  {marketSurveillance.surveillance_systems.finra_oats}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SEC CAT:</span>
                <span className={`${getStatusColor(marketSurveillance.surveillance_systems.sec_cat).split(' ')[0]}`}>
                  {marketSurveillance.surveillance_systems.sec_cat}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">AML Monitoring:</span>
                <span className={`${getStatusColor(marketSurveillance.surveillance_systems.aml_monitoring).split(' ')[0]}`}>
                  {marketSurveillance.surveillance_systems.aml_monitoring}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Pattern Detection Alerts</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {marketSurveillance.pattern_detection.map((pattern, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{pattern.pattern_type.replace(/_/g, ' ')}</span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(pattern.status)}`}>
                      {pattern.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="text-xs mb-1">
                    <span className="text-gray-400">Alerts Today: </span>
                    <span className="text-yellow-400">{pattern.alerts_today}</span>
                    <span className="text-gray-400"> | Risk Score: </span>
                    <span className="text-red-400">{formatNumber(pattern.risk_score, 1)}/10</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Securities: </span>
                    <span className="text-cyan-400">{pattern.securities_affected.join(', ')}</span>
                    <span className="text-gray-400"> | Time: </span>
                    <span className="text-purple-400">{pattern.time_window}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Monitoring */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛡️ COMPLIANCE MONITORING & REGULATORY
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Regulatory Frameworks</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">FINRA Rules:</span>
                <span className={`${getStatusColor(complianceMonitoring.regulatory_frameworks.finra_rules).split(' ')[0]}`}>
                  {complianceMonitoring.regulatory_frameworks.finra_rules}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SEC Regulations:</span>
                <span className={`${getStatusColor(complianceMonitoring.regulatory_frameworks.sec_regulations).split(' ')[0]}`}>
                  {complianceMonitoring.regulatory_frameworks.sec_regulations}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">MiFID II:</span>
                <span className={`${getStatusColor(complianceMonitoring.regulatory_frameworks.mifid_ii).split(' ')[0]}`}>
                  {complianceMonitoring.regulatory_frameworks.mifid_ii}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Dodd-Frank:</span>
                <span className={`${getStatusColor(complianceMonitoring.regulatory_frameworks.dodd_frank).split(' ')[0]}`}>
                  {complianceMonitoring.regulatory_frameworks.dodd_frank}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Basel III:</span>
                <span className={`${getStatusColor(complianceMonitoring.regulatory_frameworks.basel_iii).split(' ')[0]}`}>
                  {complianceMonitoring.regulatory_frameworks.basel_iii}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Daily Reviews</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Trade Reviews Pending:</span>
                <span className="text-yellow-400">{complianceMonitoring.daily_reviews.trade_reviews_pending}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Exception Reports:</span>
                <span className="text-orange-400">{complianceMonitoring.daily_reviews.exception_reports}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Policy Violations:</span>
                <span className="text-red-400">{complianceMonitoring.daily_reviews.policy_violations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Completed Reviews:</span>
                <span className="text-green-400">{formatLargeNumber(complianceMonitoring.daily_reviews.completed_reviews)}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Communications Compliance</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Emails Scanned:</span>
                <span className="text-blue-400">{formatLargeNumber(complianceMonitoring.communications_compliance.emails_scanned)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">AI Flagged Content:</span>
                <span className="text-red-400">{complianceMonitoring.communications_compliance.ai_flagged_content}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Manual Reviews:</span>
                <span className="text-yellow-400">{complianceMonitoring.communications_compliance.manual_reviews_required}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Keywords Detected:</span>
                <span className="text-purple-400">{complianceMonitoring.communications_compliance.compliance_keywords_detected}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trading Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 TRADING OPERATIONS TRENDS (SESSION)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={operationsHistory}>
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
              dataKey="volume"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Trading Volume ($)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="pnl" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="P&L ($)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="risk_exposure" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Risk Exposure ($)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="var_95" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="VaR 95% ($)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="system_latency" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="System Latency (ms)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="compliance_alerts" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Compliance Alerts"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="active_positions" 
              stroke="#F97316" 
              strokeWidth={2}
              name="Active Positions"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Trading Systems and Trader Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trading Systems Health */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            💻 TRADING SYSTEMS HEALTH & INFRASTRUCTURE
          </h3>
          
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {tradingSystemsHealth.core_systems.map((system, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">
                      {system.system_name.replace(/_/g, ' ')}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(system.status)}`}>
                      {system.status}
                    </span>
                  </div>
                </div>

                {system.status === 'OPERATIONAL' && (
                  <>
                    <div className="text-xs mb-2">
                      <span className="text-gray-400">Uptime: </span>
                      <span className="text-green-400">{formatNumber(system.uptime, 2)}%</span>
                      <span className="text-gray-400"> | Latency: </span>
                      <span className="text-purple-400">{formatNumber(system.latency, 2)}ms</span>
                      {system.throughput && (
                        <>
                          <span className="text-gray-400"> | Throughput: </span>
                          <span className="text-orange-400">{formatLargeNumber(system.throughput)}/s</span>
                        </>
                      )}
                    </div>

                    <div className="text-xs mb-2">
                      <span className="text-gray-400">CPU: </span>
                      <span className="text-blue-400">{formatNumber(system.cpu_usage, 1)}%</span>
                      <span className="text-gray-400"> | Memory: </span>
                      <span className="text-cyan-400">{formatNumber(system.memory_usage, 1)}%</span>
                      <span className="text-gray-400"> | Disk: </span>
                      <span className="text-yellow-400">{formatNumber(system.disk_usage, 1)}%</span>
                      <span className="text-gray-400"> | Network: </span>
                      <span className="text-pink-400">{formatNumber(system.network_utilization, 1)}%</span>
                    </div>

                    <div className="text-xs">
                      <span className="text-gray-400">Last Restart: </span>
                      <span className="text-green-400">{formatTime(system.last_restart)}</span>
                    </div>
                  </>
                )}

                {system.status === 'MAINTENANCE' && (
                  <div className="text-xs">
                    <span className="text-gray-400">Maintenance: </span>
                    <span className="text-orange-400">{system.maintenance_type?.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | Window: </span>
                    <span className="text-yellow-400">{system.maintenance_window}</span>
                    {system.backup_system && (
                      <>
                        <span className="text-gray-400"> | Backup: </span>
                        <span className="text-green-400">{system.backup_system}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mt-4">
            <h4 className="text-sm font-bold text-white mb-3">Circuit Breakers & Connectivity</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Market Data Feeds:</span>
                <span className={`${getStatusColor(tradingSystemsHealth.connectivity.market_data_feeds).split(' ')[0]}`}>
                  {tradingSystemsHealth.connectivity.market_data_feeds}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Clearing Houses:</span>
                <span className={`${getStatusColor(tradingSystemsHealth.connectivity.clearing_houses).split(' ')[0]}`}>
                  {tradingSystemsHealth.connectivity.clearing_houses}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Equity Circuit Breaker:</span>
                <span className={`${getStatusColor(tradingSystemsHealth.circuit_breakers.equity_market_breaker).split(' ')[0]}`}>
                  {tradingSystemsHealth.circuit_breakers.equity_market_breaker}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trader Performance */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👤 TRADER PERFORMANCE & COMPLIANCE
          </h3>
          
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {traderPerformance.map((trader, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">{trader.name}</span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {trader.desk.replace(/_/g, ' ')}
                    </span>
                    {!trader.certifications_current && (
                      <span className="text-xs px-2 py-1 rounded bg-red-500 text-white animate-pulse">
                        CERT DUE
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    Score: {formatNumber(trader.compliance_score, 1)}%
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">P&L Today: </span>
                  <span className={trader.pnl_today >= 0 ? 'text-green-400' : 'text-red-400'}>
                    {formatCurrency(trader.pnl_today)}
                  </span>
                  <span className="text-gray-400"> | MTD: </span>
                  <span className={trader.pnl_mtd >= 0 ? 'text-green-400' : 'text-red-400'}>
                    {formatCurrency(trader.pnl_mtd)}
                  </span>
                  <span className="text-gray-400"> | Trades: </span>
                  <span className="text-cyan-400">{trader.trades_today}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Hit Ratio: </span>
                  <span className="text-purple-400">{formatNumber(trader.hit_ratio, 1)}%</span>
                  <span className="text-gray-400"> | Avg Size: </span>
                  <span className="text-blue-400">{formatCurrency(trader.avg_trade_size)}</span>
                  <span className="text-gray-400"> | Risk Util: </span>
                  <span className={trader.risk_limit_utilization > 90 ? 'text-red-400' : trader.risk_limit_utilization > 75 ? 'text-yellow-400' : 'text-green-400'}>
                    {formatNumber(trader.risk_limit_utilization, 1)}%
                  </span>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">VaR Contribution: </span>
                  <span className="text-orange-400">{formatCurrency(trader.var_contribution)}</span>
                  <span className="text-gray-400"> | Violations YTD: </span>
                  <span className={trader.violations_ytd === 0 ? 'text-green-400' : 'text-red-400'}>
                    {trader.violations_ytd}
                  </span>
                  {trader.cert_renewal_due && (
                    <>
                      <span className="text-gray-400"> | Cert Due: </span>
                      <span className="text-yellow-400">{formatTime(trader.cert_renewal_due)}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialTradingOperations;