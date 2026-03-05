// FinancialTradingFloor.js - Financial Trading Floor Control Center & Risk Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const FinancialTradingFloor = () => {
  const [tradingPositions, setTradingPositions] = useState([
    {
      id: 'pos_001',
      symbol: 'AAPL',
      name: 'Apple Inc.',
      position: 'LONG',
      quantity: 15000,
      entryPrice: 172.45,
      currentPrice: 174.23,
      marketValue: 2613450,
      unrealizedPnL: 26700,
      unrealizedPnLPercent: 1.03,
      dayChange: 1.78,
      dayChangePercent: 1.03,
      trader: 'Mike Johnson',
      book: 'Tech Equity',
      sector: 'Technology',
      exchange: 'NASDAQ',
      lastUpdate: Date.now() - 30 * 1000,
      riskLimit: 5000000,
      riskUtilization: 52.3,
      stopLoss: 165.00,
      takeProfit: 185.00
    },
    {
      id: 'pos_002', 
      symbol: 'EUR/USD',
      name: 'Euro / US Dollar',
      position: 'SHORT',
      quantity: 5000000, // notional amount
      entryPrice: 1.0875,
      currentPrice: 1.0842,
      marketValue: 5421000,
      unrealizedPnL: 16500,
      unrealizedPnLPercent: 0.30,
      dayChange: -0.0033,
      dayChangePercent: -0.30,
      trader: 'Sarah Chen',
      book: 'FX Majors',
      sector: 'Foreign Exchange',
      exchange: 'SPOT',
      lastUpdate: Date.now() - 15 * 1000,
      riskLimit: 10000000,
      riskUtilization: 54.2,
      stopLoss: 1.0950,
      takeProfit: 1.0750
    },
    {
      id: 'pos_003',
      symbol: 'SPY',
      name: 'SPDR S&P 500 ETF',
      position: 'LONG',
      quantity: 8500,
      entryPrice: 498.75,
      currentPrice: 501.20,
      marketValue: 4260200,
      unrealizedPnL: 20825,
      unrealizedPnLPercent: 0.49,
      dayChange: 2.45,
      dayChangePercent: 0.49,
      trader: 'David Rodriguez',
      book: 'Index Arb',
      sector: 'ETF',
      exchange: 'NYSE',
      lastUpdate: Date.now() - 45 * 1000,
      riskLimit: 8000000,
      riskUtilization: 53.3,
      stopLoss: 485.00,
      takeProfit: 515.00
    },
    {
      id: 'pos_004',
      symbol: 'BTC/USD',
      name: 'Bitcoin / US Dollar',
      position: 'LONG',
      quantity: 25,
      entryPrice: 67850.00,
      currentPrice: 69234.50,
      marketValue: 1730862,
      unrealizedPnL: 34612,
      unrealizedPnLPercent: 2.04,
      dayChange: 1384.50,
      dayChangePercent: 2.04,
      trader: 'Jennifer Park',
      book: 'Digital Assets',
      sector: 'Cryptocurrency',
      exchange: 'COINBASE',
      lastUpdate: Date.now() - 10 * 1000,
      riskLimit: 3000000,
      riskUtilization: 57.7,
      stopLoss: 62000.00,
      takeProfit: 75000.00
    },
    {
      id: 'pos_005',
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      position: 'SHORT',
      quantity: 3500,
      entryPrice: 201.25,
      currentPrice: 198.75,
      marketValue: 695625,
      unrealizedPnL: 8750,
      unrealizedPnLPercent: 1.24,
      dayChange: -2.50,
      dayChangePercent: -1.24,
      trader: 'Alex Kim',
      book: 'EV Sector',
      sector: 'Automotive',
      exchange: 'NASDAQ',
      lastUpdate: Date.now() - 60 * 1000,
      riskLimit: 2000000,
      riskUtilization: 34.8,
      stopLoss: 215.00,
      takeProfit: 180.00
    }
  ]);

  const [traders, setTraders] = useState([
    {
      id: 'trader_001',
      name: 'Michael Johnson',
      role: 'Senior Equity Trader',
      book: 'Tech Equity',
      desk: 'North America Equities',
      status: 'ACTIVE',
      dailyPnL: 47500,
      weeklyPnL: 125000,
      monthlyPnL: 485000,
      yearlyPnL: 1250000,
      riskLimit: 15000000,
      riskUtilization: 67.8,
      positionsCount: 23,
      tradesCount: 156,
      winRate: 68.5, // percentage
      sharpeRatio: 1.85,
      maxDrawdown: -125000,
      averageTradeSize: 2500000,
      lastTrade: Date.now() - 5 * 60 * 1000,
      certifications: ['Series 7', 'Series 55', 'CFA Level II'],
      experience: '12 years'
    },
    {
      id: 'trader_002',
      name: 'Sarah Chen',
      role: 'FX Trader',
      book: 'FX Majors',
      desk: 'Foreign Exchange',
      status: 'ACTIVE',
      dailyPnL: 23400,
      weeklyPnL: 89500,
      monthlyPnL: 267000,
      yearlyPnL: 890000,
      riskLimit: 25000000,
      riskUtilization: 45.2,
      positionsCount: 18,
      tradesCount: 234,
      winRate: 71.2,
      sharpeRatio: 2.1,
      maxDrawdown: -89000,
      averageTradeSize: 5000000,
      lastTrade: Date.now() - 2 * 60 * 1000,
      certifications: ['Series 3', 'FRM', 'CFA Charter'],
      experience: '8 years'
    },
    {
      id: 'trader_003',
      name: 'David Rodriguez',
      role: 'Quantitative Trader',
      book: 'Index Arb',
      desk: 'Systematic Trading',
      status: 'ACTIVE',
      dailyPnL: 15750,
      weeklyPnL: 67200,
      monthlyPnL: 234500,
      yearlyPnL: 945000,
      riskLimit: 20000000,
      riskUtilization: 38.9,
      positionsCount: 47,
      tradesCount: 1247,
      winRate: 63.8,
      sharpeRatio: 2.45,
      maxDrawdown: -67000,
      averageTradeSize: 1200000,
      lastTrade: Date.now() - 30 * 1000,
      certifications: ['PhD Quant Finance', 'FRM', 'PRM'],
      experience: '15 years'
    },
    {
      id: 'trader_004',
      name: 'Jennifer Park',
      role: 'Digital Assets Trader',
      book: 'Digital Assets',
      desk: 'Alternative Investments',
      status: 'BREAK',
      dailyPnL: 67800,
      weeklyPnL: 145000,
      monthlyPnL: 456000,
      yearlyPnL: 1120000,
      riskLimit: 10000000,
      riskUtilization: 72.3,
      positionsCount: 12,
      tradesCount: 89,
      winRate: 74.2,
      sharpeRatio: 1.95,
      maxDrawdown: -145000,
      averageTradeSize: 1800000,
      lastTrade: Date.now() - 15 * 60 * 1000,
      certifications: ['CAIA', 'Blockchain Certificate', 'Series 7'],
      experience: '6 years'
    }
  ]);

  const [riskMetrics, setRiskMetrics] = useState({
    totalPnL: 182200, // daily P&L
    totalExposure: 45200000, // total notional exposure
    netExposure: 12800000, // net exposure
    grossExposure: 33400000, // gross exposure
    var95: 2450000, // 1-day 95% VaR
    var99: 3240000, // 1-day 99% VaR
    expectedShortfall: 3850000, // Expected Shortfall (CVaR)
    sharpeRatio: 2.15,
    sortinoRatio: 3.24,
    maxDrawdown: -890000,
    volatility: 12.5, // annualized volatility %
    beta: 0.85, // market beta
    correlationSPX: 0.72,
    leverageRatio: 2.8,
    liquidityRisk: 'LOW',
    concentrationRisk: 'MEDIUM',
    marginUtilization: 45.6, // percentage
    regulatoryCapital: 125000000,
    riskAdjustedReturn: 18.5 // percentage
  });

  const [marketData, setMarketData] = useState([
    {
      symbol: 'SPX',
      name: 'S&P 500 Index',
      price: 5018.39,
      change: 15.72,
      changePercent: 0.31,
      volume: 1250000000,
      volatility: 12.8,
      beta: 1.00,
      sector: 'Market Index',
      lastUpdate: Date.now() - 5 * 1000
    },
    {
      symbol: 'VIX',
      name: 'CBOE Volatility Index',
      price: 15.24,
      change: -0.67,
      changePercent: -4.21,
      volume: 0,
      volatility: 0,
      beta: -4.5,
      sector: 'Volatility',
      lastUpdate: Date.now() - 8 * 1000
    },
    {
      symbol: 'DXY',
      name: 'US Dollar Index',
      price: 103.45,
      change: 0.23,
      changePercent: 0.22,
      volume: 0,
      volatility: 8.5,
      beta: -0.25,
      sector: 'Currency',
      lastUpdate: Date.now() - 12 * 1000
    },
    {
      symbol: 'USDJPY',
      name: 'US Dollar / Japanese Yen',
      price: 148.75,
      change: 0.89,
      changePercent: 0.60,
      volume: 0,
      volatility: 11.2,
      beta: 0.15,
      sector: 'FX',
      lastUpdate: Date.now() - 3 * 1000
    },
    {
      symbol: 'GOLD',
      name: 'Gold Futures',
      price: 2034.50,
      change: -8.25,
      changePercent: -0.40,
      volume: 125000,
      volatility: 18.7,
      beta: -0.12,
      sector: 'Commodities',
      lastUpdate: Date.now() - 18 * 1000
    },
    {
      symbol: 'CRUDE',
      name: 'WTI Crude Oil',
      price: 78.95,
      change: 1.23,
      changePercent: 1.58,
      volume: 89000,
      volatility: 32.4,
      beta: 0.78,
      sector: 'Energy',
      lastUpdate: Date.now() - 25 * 1000
    }
  ]);

  const [complianceAlerts, setComplianceAlerts] = useState([
    {
      id: 'alert_001',
      timestamp: Date.now() - 15 * 60 * 1000,
      severity: 'HIGH',
      type: 'POSITION_LIMIT_BREACH',
      trader: 'Jennifer Park',
      book: 'Digital Assets',
      description: 'Position limit exceeded for BTC/USD by 15%',
      currentValue: 1730862,
      limitValue: 1500000,
      status: 'ACKNOWLEDGED',
      assignedTo: 'Risk Manager',
      regulatoryFlag: true,
      autoResolution: false
    },
    {
      id: 'alert_002',
      timestamp: Date.now() - 45 * 60 * 1000,
      severity: 'MEDIUM',
      type: 'VAR_THRESHOLD',
      trader: 'Michael Johnson',
      book: 'Tech Equity',
      description: '1-day VaR approaching 80% of limit',
      currentValue: 1960000,
      limitValue: 2500000,
      status: 'IN_PROGRESS',
      assignedTo: 'Desk Head',
      regulatoryFlag: false,
      autoResolution: false
    },
    {
      id: 'alert_003',
      timestamp: Date.now() - 2 * 60 * 60 * 1000,
      severity: 'LOW',
      type: 'CONCENTRATION_RISK',
      trader: 'All Traders',
      book: 'Portfolio',
      description: 'Technology sector concentration at 45%',
      currentValue: 45.2,
      limitValue: 50.0,
      status: 'MONITORING',
      assignedTo: 'Portfolio Manager',
      regulatoryFlag: false,
      autoResolution: true
    }
  ]);

  const [tradingTrends, setTradingTrends] = useState([]);
  const [riskTrends, setRiskTrends] = useState([]);

  const generateTradingTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        pnl: Math.floor((Math.random() - 0.3) * 100000), // -30K to +70K
        volume: Math.floor(Math.random() * 50000000) + 10000000, // 10M to 60M
        trades: Math.floor(Math.random() * 500) + 100, // 100 to 600 trades
        var: Math.floor(Math.random() * 1000000) + 2000000, // 2M to 3M VaR
        sharpe: Math.random() * 2 + 1, // 1 to 3 Sharpe
        volatility: Math.random() * 5 + 10 // 10% to 15% vol
      });
    }
    return data;
  };

  const generateRiskTrends = () => {
    return [
      { category: 'Equity', exposure: 15200000, var: 1200000, concentration: 34.5 },
      { category: 'FX', exposure: 12800000, var: 890000, concentration: 29.1 },
      { category: 'Fixed Income', exposure: 8600000, var: 450000, concentration: 19.6 },
      { category: 'Commodities', exposure: 5400000, var: 680000, concentration: 12.3 },
      { category: 'Crypto', exposure: 3200000, var: 820000, concentration: 7.3 }
    ];
  };

  useEffect(() => {
    setTradingTrends(generateTradingTrends());
    setRiskTrends(generateRiskTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update trading positions
      setTradingPositions(prev => prev.map(position => {
        let newPrice = position.currentPrice;
        let newDayChange = position.dayChange;
        
        // Simulate realistic price movements based on asset class
        if (position.sector === 'Foreign Exchange') {
          newPrice += (Math.random() - 0.5) * 0.002; // Small FX movements
          newDayChange = newPrice - position.entryPrice;
        } else if (position.sector === 'Cryptocurrency') {
          newPrice += (Math.random() - 0.5) * 1000; // Volatile crypto movements
          newDayChange = newPrice - position.entryPrice;
        } else {
          newPrice += (Math.random() - 0.5) * 2; // Stock movements
          newDayChange = newPrice - position.entryPrice;
        }

        const newMarketValue = position.quantity * newPrice;
        const newUnrealizedPnL = position.position === 'LONG' ? 
          (newPrice - position.entryPrice) * position.quantity :
          (position.entryPrice - newPrice) * position.quantity;

        return {
          ...position,
          currentPrice: Math.max(0, newPrice),
          dayChange: newDayChange,
          dayChangePercent: ((newPrice - position.entryPrice) / position.entryPrice) * 100,
          marketValue: Math.max(0, newMarketValue),
          unrealizedPnL: newUnrealizedPnL,
          unrealizedPnLPercent: (newUnrealizedPnL / (position.entryPrice * position.quantity)) * 100,
          lastUpdate: Date.now(),
          riskUtilization: Math.max(20, Math.min(80, position.riskUtilization + (Math.random() - 0.5) * 5))
        };
      }));

      // Update traders
      setTraders(prev => prev.map(trader => ({
        ...trader,
        dailyPnL: trader.dailyPnL + (Math.random() - 0.3) * 10000, // Slight positive bias
        tradesCount: trader.tradesCount + Math.floor(Math.random() * 3),
        riskUtilization: Math.max(30, Math.min(80, trader.riskUtilization + (Math.random() - 0.5) * 3))
      })));

      // Update market data
      setMarketData(prev => prev.map(market => {
        let priceChange = (Math.random() - 0.5) * 2;
        if (market.symbol === 'VIX') {
          priceChange = (Math.random() - 0.5) * 0.5; // VIX moves less
        } else if (market.symbol === 'DXY') {
          priceChange = (Math.random() - 0.5) * 0.2; // DXY moves very little
        }
        
        const newPrice = Math.max(0, market.price + priceChange);
        const newChange = newPrice - (market.price - market.change);
        const newChangePercent = (newChange / (newPrice - newChange)) * 100;

        return {
          ...market,
          price: newPrice,
          change: newChange,
          changePercent: newChangePercent,
          lastUpdate: Date.now()
        };
      }));

      // Update risk metrics
      setRiskMetrics(prev => ({
        ...prev,
        totalPnL: Math.max(-500000, Math.min(500000, prev.totalPnL + (Math.random() - 0.3) * 20000)),
        var95: Math.max(1000000, Math.min(5000000, prev.var95 + (Math.random() - 0.5) * 100000)),
        sharpeRatio: Math.max(0.5, Math.min(4.0, prev.sharpeRatio + (Math.random() - 0.5) * 0.1)),
        volatility: Math.max(8, Math.min(20, prev.volatility + (Math.random() - 0.5) * 0.5))
      }));

      // Occasionally generate new compliance alerts
      if (Math.random() > 0.98) {
        const alertTypes = ['POSITION_LIMIT_BREACH', 'VAR_THRESHOLD', 'CONCENTRATION_RISK', 'MARGIN_CALL'];
        const severities = ['LOW', 'MEDIUM', 'HIGH'];
        const traders = ['Michael Johnson', 'Sarah Chen', 'David Rodriguez', 'Jennifer Park'];
        
        const newAlert = {
          id: `alert_${Date.now()}`,
          timestamp: Date.now(),
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          trader: traders[Math.floor(Math.random() * traders.length)],
          book: 'Portfolio',
          description: 'Automated risk monitoring alert',
          currentValue: Math.random() * 1000000,
          limitValue: Math.random() * 2000000,
          status: 'NEW',
          assignedTo: 'Risk Manager',
          regulatoryFlag: Math.random() > 0.7,
          autoResolution: Math.random() > 0.5
        };
        
        setComplianceAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getPositionStatusColor = (position) => {
    switch (position) {
      case 'LONG': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'SHORT': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getTraderStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'BREAK': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'OFFLINE': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'HIGH': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPnLColor = (pnl) => {
    if (pnl > 0) return 'text-green-400';
    if (pnl < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  const getChangeColor = (change) => {
    if (change > 0) return 'text-green-400';
    if (change < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  const formatCurrency = (amount) => {
    if (Math.abs(amount) >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (Math.abs(amount) >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    } else {
      return `$${amount.toFixed(0)}`;
    }
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          💹 FINANCIAL TRADING FLOOR CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getPnLColor(riskMetrics.totalPnL).replace('text-', 'text-').includes('green') ? 'bg-green-500/20 border-green-500/30' : 
            getPnLColor(riskMetrics.totalPnL).includes('red') ? 'bg-red-500/20 border-red-500/30' : 'bg-gray-500/20 border-gray-500/30'
          }`}>
            P&L {formatCurrency(riskMetrics.totalPnL)}
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            VaR {formatCurrency(riskMetrics.var95)}
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Quod Financial Trading System
          </div>
        </div>
      </div>

      {/* Trading Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">TOTAL P&L</div>
              <div className={`text-2xl font-bold ${getPnLColor(riskMetrics.totalPnL).replace('text-', 'text-green-')}`}>
                {formatCurrency(riskMetrics.totalPnL)}
              </div>
              <div className="text-xs text-green-300">
                Sharpe {riskMetrics.sharpeRatio.toFixed(2)}
              </div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">TOTAL EXPOSURE</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatCurrency(riskMetrics.totalExposure)}
              </div>
              <div className="text-xs text-blue-300">
                Net {formatCurrency(riskMetrics.netExposure)}
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">VALUE AT RISK</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatCurrency(riskMetrics.var95)}
              </div>
              <div className="text-xs text-purple-300">
                95% 1-day VaR
              </div>
            </div>
            <div className="text-3xl opacity-60">⚠️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">VOLATILITY</div>
              <div className="text-2xl font-bold text-orange-100">
                {riskMetrics.volatility.toFixed(1)}%
              </div>
              <div className="text-xs text-orange-300">
                annualized vol
              </div>
            </div>
            <div className="text-3xl opacity-60">📈</div>
          </div>
        </div>
      </div>

      {/* Trading Positions and Active Traders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trading Positions */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            💹 ACTIVE TRADING POSITIONS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {tradingPositions.map((position) => (
              <div key={position.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{position.symbol}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getPositionStatusColor(position.position)}`}>
                      {position.position}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {position.exchange}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(position.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-xs text-purple-400 mb-2">{position.name}</div>
                <div className="text-xs text-cyan-400 mb-3">
                  {position.trader} | {position.book}
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Quantity</div>
                    <div className="text-blue-400">{position.quantity.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Entry Price</div>
                    <div className="text-yellow-400">{position.entryPrice.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Current Price</div>
                    <div className="text-green-400">{position.currentPrice.toFixed(2)}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Market Value</div>
                    <div className="text-cyan-400">{formatCurrency(position.marketValue)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Unrealized P&L</div>
                    <div className={getPnLColor(position.unrealizedPnL)}>
                      {formatCurrency(position.unrealizedPnL)}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Day Change</div>
                    <div className={getChangeColor(position.dayChange)}>
                      {position.dayChangePercent.toFixed(2)}%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Risk Utilization</div>
                    <div className="text-orange-400">{position.riskUtilization.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Stop Loss</div>
                    <div className="text-red-400">{position.stopLoss.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Take Profit</div>
                    <div className="text-green-400">{position.takeProfit.toFixed(2)}</div>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">Sector: </span>
                  <span className="text-pink-400">{position.sector}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Traders */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👨‍💼 ACTIVE TRADERS
          </h3>
          <div className="space-y-3">
            {traders.map((trader) => (
              <div key={trader.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{trader.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getTraderStatusColor(trader.status)}`}>
                      {trader.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(trader.lastTrade)}
                  </div>
                </div>
                
                <div className="text-xs text-purple-400 mb-2">{trader.role}</div>
                <div className="text-xs text-cyan-400 mb-3">{trader.desk} | {trader.book}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Daily P&L</div>
                    <div className={getPnLColor(trader.dailyPnL)}>
                      {formatCurrency(trader.dailyPnL)}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Weekly P&L</div>
                    <div className={getPnLColor(trader.weeklyPnL)}>
                      {formatCurrency(trader.weeklyPnL)}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Monthly P&L</div>
                    <div className={getPnLColor(trader.monthlyPnL)}>
                      {formatCurrency(trader.monthlyPnL)}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Positions</div>
                    <div className="text-blue-400">{trader.positionsCount}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Trades Today</div>
                    <div className="text-green-400">{trader.tradesCount}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Win Rate</div>
                    <div className="text-yellow-400">{trader.winRate.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Sharpe Ratio</div>
                    <div className="text-orange-400">{trader.sharpeRatio.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Risk Utilization</div>
                    <div className="text-red-400">{trader.riskUtilization.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Max Drawdown</div>
                    <div className="text-purple-400">{formatCurrency(trader.maxDrawdown)}</div>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">Experience: </span>
                  <span className="text-indigo-400">{trader.experience}</span>
                  <span className="text-gray-400"> | Avg Trade: </span>
                  <span className="text-pink-400">{formatCurrency(trader.averageTradeSize)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Data and Compliance Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Market Data */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 MARKET DATA FEED
          </h3>
          <div className="space-y-3">
            {marketData.map((market) => (
              <div key={market.symbol} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{market.symbol}</h4>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {market.sector}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(market.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-xs text-cyan-400 mb-3">{market.name}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Price</div>
                    <div className="text-white font-bold">{market.price.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Change</div>
                    <div className={getChangeColor(market.change)}>
                      {market.change.toFixed(2)} ({market.changePercent.toFixed(2)}%)
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Volatility</div>
                    <div className="text-orange-400">{market.volatility.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-gray-400">Volume</div>
                    <div className="text-blue-400">
                      {market.volume > 0 ? market.volume.toLocaleString() : 'N/A'}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Beta</div>
                    <div className="text-purple-400">{market.beta.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Status</div>
                    <div className="text-green-400">LIVE</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Alerts */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 COMPLIANCE & RISK ALERTS
          </h3>
          
          {complianceAlerts.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-green-400 text-lg mb-2">✅</div>
              <div className="text-green-400 font-bold">NO ACTIVE ALERTS</div>
              <div className="text-gray-400 text-sm mt-2">All positions within risk limits</div>
            </div>
          ) : (
            <div className="space-y-3">
              {complianceAlerts.map((alert) => (
                <div key={alert.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-mono border ${getAlertSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                        {alert.type.replace(/_/g, ' ')}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        alert.status === 'NEW' ? 'bg-red-500 text-white' :
                        alert.status === 'ACKNOWLEDGED' ? 'bg-yellow-500 text-black' :
                        alert.status === 'IN_PROGRESS' ? 'bg-blue-500 text-white' :
                        'bg-green-500 text-white'
                      }`}>
                        {alert.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {formatTime(alert.timestamp)}
                    </div>
                  </div>
                  
                  <div className="text-sm text-white mb-2">{alert.description}</div>
                  <div className="text-xs text-cyan-400 mb-1">👨‍💼 {alert.trader}</div>
                  <div className="text-xs text-purple-400 mb-1">📊 {alert.book}</div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                    <div>
                      <div className="text-gray-400">Current Value</div>
                      <div className="text-yellow-400">{formatCurrency(alert.currentValue)}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Limit Value</div>
                      <div className="text-orange-400">{formatCurrency(alert.limitValue)}</div>
                    </div>
                  </div>

                  <div className="text-xs">
                    <span className="text-gray-400">Assigned to: </span>
                    <span className="text-green-400">{alert.assignedTo}</span>
                    {alert.regulatoryFlag && (
                      <span className="ml-2 text-red-400">🏛️ REGULATORY</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Trading Trends and Risk Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trading Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 TRADING P&L TRENDS (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={tradingTrends}>
              <defs>
                <linearGradient id="pnlGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={12}/>
              <YAxis stroke="#9CA3AF" fontSize={12}/>
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
                type="monotone" 
                dataKey="pnl" 
                stroke="#10B981" 
                fill="url(#pnlGradient)" 
                name="P&L ($)"
              />
              <Line 
                type="monotone" 
                dataKey="sharpe" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Sharpe Ratio"
              />
              <Line 
                type="monotone" 
                dataKey="volatility" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Volatility %"
              />
              <Bar 
                dataKey="trades" 
                fill="#8B5CF6" 
                name="Trades Count"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Risk Analysis */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚠️ RISK ANALYSIS BY ASSET CLASS
          </h3>
          
          <div className="space-y-4">
            {/* Risk by Asset Class */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Exposure & VaR by Category</h4>
              <div className="space-y-2">
                {riskTrends.map((risk, index) => (
                  <div key={index} className="bg-gray-700 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white">{risk.category}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400">{formatCurrency(risk.exposure)}</span>
                        <span className="text-xs font-bold text-red-400">
                          VaR {formatCurrency(risk.var)}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 mb-1">
                      <div 
                        className="h-2 rounded-full bg-blue-400"
                        style={{ width: `${risk.concentration}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400">
                      Concentration: {risk.concentration.toFixed(1)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Metrics Summary */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Risk Metrics Summary</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Leverage Ratio</div>
                  <div className="text-orange-400 font-bold">{riskMetrics.leverageRatio.toFixed(1)}x</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Beta to Market</div>
                  <div className="text-blue-400 font-bold">{riskMetrics.beta.toFixed(2)}</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Correlation SPX</div>
                  <div className="text-purple-400 font-bold">{riskMetrics.correlationSPX.toFixed(2)}</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Margin Utilization</div>
                  <div className="text-yellow-400 font-bold">{riskMetrics.marginUtilization.toFixed(1)}%</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Max Drawdown</div>
                  <div className="text-red-400 font-bold">{formatCurrency(riskMetrics.maxDrawdown)}</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Expected Shortfall</div>
                  <div className="text-pink-400 font-bold">{formatCurrency(riskMetrics.expectedShortfall)}</div>
                </div>
              </div>
            </div>

            {/* Regulatory Capital */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Regulatory & Liquidity</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Regulatory Capital</div>
                  <div className="text-green-400 font-bold">{formatCurrency(riskMetrics.regulatoryCapital)}</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Liquidity Risk</div>
                  <div className={riskMetrics.liquidityRisk === 'LOW' ? 'text-green-400' : 'text-yellow-400'}>
                    {riskMetrics.liquidityRisk}
                  </div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Concentration Risk</div>
                  <div className={riskMetrics.concentrationRisk === 'MEDIUM' ? 'text-yellow-400' : 'text-green-400'}>
                    {riskMetrics.concentrationRisk}
                  </div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Risk Adj. Return</div>
                  <div className="text-cyan-400 font-bold">{riskMetrics.riskAdjustedReturn.toFixed(1)}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialTradingFloor;