import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Activity, AlertTriangle, Clock, Zap, Target, Eye, Phone, Users } from 'lucide-react';

const FinancialTradingFloorCenter = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [marketStatus, setMarketStatus] = useState({
    session: 'REGULAR',
    nyseStatus: 'OPEN',
    nasdaqStatus: 'OPEN',
    volumeToday: 2847392847,
    totalValue: 847392847293,
    activeTraders: 247,
    openPositions: 18947
  });

  const [majorIndices, setMajorIndices] = useState([
    { 
      symbol: 'SPX', 
      name: 'S&P 500', 
      price: 5847.23, 
      change: +23.45, 
      changePercent: +0.40, 
      volume: '2.8B',
      trend: 'up'
    },
    { 
      symbol: 'INDU', 
      name: 'Dow Jones', 
      price: 38924.17, 
      change: -89.23, 
      changePercent: -0.23, 
      volume: '1.2B',
      trend: 'down'
    },
    { 
      symbol: 'COMP', 
      name: 'NASDAQ', 
      price: 18234.67, 
      change: +156.78, 
      changePercent: +0.87, 
      volume: '3.1B',
      trend: 'up'
    },
    { 
      symbol: 'RUT', 
      name: 'Russell 2000', 
      price: 2087.45, 
      change: -12.34, 
      changePercent: -0.59, 
      volume: '892M',
      trend: 'down'
    }
  ]);

  const [topMovers, setTopMovers] = useState([
    { symbol: 'NVDA', price: 847.23, change: +47.89, changePercent: +5.99, volume: '89M' },
    { symbol: 'TSLA', price: 234.56, change: -12.34, changePercent: -5.01, volume: '67M' },
    { symbol: 'AAPL', price: 189.45, change: +3.78, changePercent: +2.03, volume: '45M' },
    { symbol: 'MSFT', price: 423.67, change: +8.92, changePercent: +2.15, volume: '34M' },
    { symbol: 'GOOGL', price: 167.89, change: -4.23, changePercent: -2.46, volume: '28M' },
    { symbol: 'META', price: 456.78, change: +19.45, changePercent: +4.45, volume: '41M' }
  ]);

  const [tradingActivity, setTradingActivity] = useState([
    { time: '15:34:23', trader: 'DESK-A1', action: 'BUY', symbol: 'NVDA', quantity: '5,000', price: '$847.20', value: '$4.2M' },
    { time: '15:34:18', trader: 'DESK-B3', action: 'SELL', symbol: 'TSLA', quantity: '2,500', price: '$234.60', value: '$586K' },
    { time: '15:34:12', trader: 'DESK-C2', action: 'BUY', symbol: 'SPY', quantity: '10,000', price: '$584.30', value: '$5.8M' },
    { time: '15:34:08', trader: 'ALGO-7', action: 'SELL', symbol: 'QQQ', quantity: '7,500', price: '$456.80', value: '$3.4M' },
    { time: '15:34:02', trader: 'DESK-A4', action: 'BUY', symbol: 'AAPL', quantity: '3,200', price: '$189.50', value: '$606K' }
  ]);

  const [riskMetrics, setRiskMetrics] = useState({
    var95: 2847392, // Value at Risk 95%
    portfolioValue: 847392847,
    exposure: 234789234,
    marginUsed: 89.3, // %
    availableMargin: 45782394,
    beta: 1.23,
    sharpeRatio: 1.87,
    maxDrawdown: -2.34 // %
  });

  const [alertSystem, setAlertSystem] = useState([
    { id: 1, level: 'HIGH', message: 'NVDA volatility spike detected - IV above 90th percentile', time: '15:32:45', acknowledged: false },
    { id: 2, level: 'MEDIUM', message: 'Sector rotation from Tech to Financials detected', time: '15:28:12', acknowledged: false },
    { id: 3, level: 'LOW', message: 'Volume surge in Energy sector +15% above average', time: '15:25:33', acknowledged: true },
    { id: 4, level: 'HIGH', message: 'Margin utilization approaching 90% threshold', time: '15:22:08', acknowledged: false }
  ]);

  const [currencyRates, setCurrencyRates] = useState({
    'EUR/USD': { rate: 1.0847, change: +0.0023, trend: 'up' },
    'GBP/USD': { rate: 1.2634, change: -0.0015, trend: 'down' },
    'USD/JPY': { rate: 149.67, change: +0.34, trend: 'up' },
    'USD/CHF': { rate: 0.8923, change: -0.0008, trend: 'down' }
  });

  const [sectorPerformance, setSectorPerformance] = useState([
    { name: 'Technology', change: +1.23, color: 'text-green-400' },
    { name: 'Healthcare', change: +0.87, color: 'text-green-400' },
    { name: 'Financials', change: +0.56, color: 'text-green-400' },
    { name: 'Consumer Disc', change: -0.34, color: 'text-red-400' },
    { name: 'Energy', change: -0.78, color: 'text-red-400' },
    { name: 'Utilities', change: -1.12, color: 'text-red-400' }
  ]);

  const [tradingDesks, setTradingDesks] = useState({
    equity: { traders: 12, pnl: +2847392, status: 'ACTIVE' },
    fixed: { traders: 8, pnl: +1234567, status: 'ACTIVE' },
    forex: { traders: 6, pnl: -234567, status: 'ACTIVE' },
    commodities: { traders: 5, pnl: +567890, status: 'ACTIVE' },
    derivatives: { traders: 10, pnl: +3456789, status: 'ACTIVE' },
    algo: { traders: 4, pnl: +5678901, status: 'ACTIVE' }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());

      // Update market indices with realistic fluctuations
      setMajorIndices(prev => prev.map(index => {
        const change = (Math.random() - 0.5) * 2; // Random change between -1 and +1
        const newChange = index.change + change;
        const newPrice = index.price + change;
        const newChangePercent = (newChange / (newPrice - newChange)) * 100;
        
        return {
          ...index,
          price: Math.max(0, newPrice),
          change: newChange,
          changePercent: newChangePercent,
          trend: newChange >= 0 ? 'up' : 'down'
        };
      }));

      // Update top movers
      setTopMovers(prev => prev.map(stock => ({
        ...stock,
        price: Math.max(0, stock.price + (Math.random() - 0.5) * 5),
        change: stock.change + (Math.random() - 0.5) * 2
      })));

      // Update risk metrics
      setRiskMetrics(prev => ({
        ...prev,
        marginUsed: Math.max(70, Math.min(95, prev.marginUsed + (Math.random() - 0.5) * 1)),
        beta: Math.max(0.8, Math.min(1.5, prev.beta + (Math.random() - 0.5) * 0.05)),
        sharpeRatio: Math.max(1.0, Math.min(2.5, prev.sharpeRatio + (Math.random() - 0.5) * 0.1))
      }));

      // Simulate new trading activity
      if (Math.random() > 0.7) {
        const actions = ['BUY', 'SELL'];
        const symbols = ['NVDA', 'TSLA', 'AAPL', 'MSFT', 'GOOGL', 'META', 'SPY', 'QQQ'];
        const desks = ['DESK-A1', 'DESK-A2', 'DESK-B1', 'DESK-B2', 'DESK-C1', 'ALGO-1', 'ALGO-2'];
        
        const newTrade = {
          time: new Date().toLocaleTimeString(),
          trader: desks[Math.floor(Math.random() * desks.length)],
          action: actions[Math.floor(Math.random() * actions.length)],
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          quantity: (Math.floor(Math.random() * 10000) + 1000).toLocaleString(),
          price: `$${(Math.random() * 500 + 50).toFixed(2)}`,
          value: `$${(Math.random() * 10 + 0.5).toFixed(1)}M`
        };

        setTradingActivity(prev => [newTrade, ...prev.slice(0, 19)]);
      }

      // Occasionally add new alerts
      if (Math.random() > 0.85) {
        const alertTypes = [
          { level: 'HIGH', message: 'Circuit breaker triggered on individual stock' },
          { level: 'MEDIUM', message: 'Unusual options activity detected' },
          { level: 'LOW', message: 'End-of-day position reconciliation required' }
        ];
        
        const newAlert = alertTypes[Math.floor(Math.random() * alertTypes.length)];
        setAlertSystem(prev => [
          {
            id: Date.now(),
            ...newAlert,
            time: new Date().toLocaleTimeString(),
            acknowledged: false
          },
          ...prev.slice(0, 9)
        ]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getChangeColor = (change) => {
    return change >= 0 ? 'text-green-400' : 'text-red-400';
  };

  const getAlertColor = (level) => {
    switch (level) {
      case 'HIGH': return 'text-red-400 bg-red-900/30 border-red-500';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500';
      case 'LOW': return 'text-blue-400 bg-blue-900/30 border-blue-500';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500';
    }
  };

  const formatCurrency = (value) => {
    if (value >= 1000000000) return `$${(value / 1000000000).toFixed(1)}B`;
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`;
    return `$${value.toFixed(0)}`;
  };

  return (
    <div className="bg-black text-white p-6 font-mono">
      <div className="mb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-yellow-400">FINANCIAL TRADING FLOOR CONTROL</h1>
          <div className="flex items-center text-sm text-gray-400">
            <span className="mr-4">SESSION: {marketStatus.session}</span>
            <span className="mr-4">NYSE: {marketStatus.nyseStatus}</span>
            <span>{new Date(timestamp).toLocaleTimeString()} EST</span>
          </div>
        </div>

        {/* Market Status Strip */}
        <div className="bg-yellow-900/30 border border-yellow-500 rounded-lg p-3 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <DollarSign className="w-6 h-6 text-yellow-400 mr-3" />
              <div>
                <span className="text-yellow-400 font-bold text-lg">MARKET STATUS</span>
                <div className="text-sm text-green-400">NYSE: {marketStatus.nyseStatus} | NASDAQ: {marketStatus.nasdaqStatus}</div>
              </div>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-gray-400">VOLUME TODAY</div>
                <div className="text-white font-bold">{formatCurrency(marketStatus.volumeToday)}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">TOTAL VALUE</div>
                <div className="text-white font-bold">{formatCurrency(marketStatus.totalValue)}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">ACTIVE TRADERS</div>
                <div className="text-yellow-400 font-bold">{marketStatus.activeTraders}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">OPEN POSITIONS</div>
                <div className="text-cyan-400 font-bold">{marketStatus.openPositions.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Major Indices */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {majorIndices.map((index) => (
            <div key={index.symbol} className="bg-gray-900 rounded border border-gray-700 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-400 font-bold text-lg">{index.symbol}</span>
                {index.trend === 'up' ? 
                  <TrendingUp className="w-5 h-5 text-green-400" /> : 
                  <TrendingDown className="w-5 h-5 text-red-400" />
                }
              </div>
              <div className="text-white text-2xl font-bold mb-1">{index.price.toFixed(2)}</div>
              <div className={`text-sm ${getChangeColor(index.change)}`}>
                {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)} ({index.changePercent.toFixed(2)}%)
              </div>
              <div className="text-xs text-gray-400 mt-2">Vol: {index.volume}</div>
            </div>
          ))}
        </div>

        {/* Main Trading Grid */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Top Movers */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-green-400" />
                TOP MOVERS
              </h3>
            </div>
            <div className="p-4 space-y-2 max-h-80 overflow-y-auto">
              {topMovers.map((stock) => (
                <div key={stock.symbol} className="bg-gray-800 p-2 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-400 font-bold">{stock.symbol}</span>
                    <span className="text-white">${stock.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className={`font-bold ${getChangeColor(stock.change)}`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                    </span>
                    <span className={getChangeColor(stock.change)}>
                      {stock.changePercent.toFixed(1)}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">Vol: {stock.volume}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trading Activity */}
          <div className="col-span-2 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Activity className="w-5 h-5 mr-2 text-yellow-400" />
                REAL-TIME TRADING ACTIVITY
              </h3>
            </div>
            <div className="p-4 max-h-80 overflow-y-auto">
              {tradingActivity.map((trade, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-800 p-2 rounded mb-2 text-xs">
                  <div className="flex items-center space-x-4">
                    <span className="text-blue-400 font-mono">{trade.time}</span>
                    <span className="text-purple-400">{trade.trader}</span>
                    <span className={`font-bold ${trade.action === 'BUY' ? 'text-green-400' : 'text-red-400'}`}>
                      {trade.action}
                    </span>
                    <span className="text-cyan-400">{trade.symbol}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-white">{trade.quantity}</span>
                    <span className="text-gray-400">{trade.price}</span>
                    <span className="text-yellow-400">{trade.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Management */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Target className="w-5 h-5 mr-2 text-red-400" />
                RISK METRICS
              </h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="space-y-2 text-xs">
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">VaR (95%):</div>
                  <div className="text-red-400 font-bold">{formatCurrency(riskMetrics.var95)}</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Portfolio Value:</div>
                  <div className="text-green-400 font-bold">{formatCurrency(riskMetrics.portfolioValue)}</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Margin Used:</div>
                  <div className={`font-bold ${riskMetrics.marginUsed > 90 ? 'text-red-400' : 'text-yellow-400'}`}>
                    {riskMetrics.marginUsed.toFixed(1)}%
                  </div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Beta:</div>
                  <div className="text-cyan-400 font-bold">{riskMetrics.beta.toFixed(2)}</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Sharpe Ratio:</div>
                  <div className="text-blue-400 font-bold">{riskMetrics.sharpeRatio.toFixed(2)}</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Max Drawdown:</div>
                  <div className="text-red-400 font-bold">{riskMetrics.maxDrawdown.toFixed(2)}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Sector Performance */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Eye className="w-5 h-5 mr-2 text-purple-400" />
                SECTOR PERFORMANCE
              </h3>
            </div>
            <div className="p-4 space-y-2">
              {sectorPerformance.map((sector, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">{sector.name}</span>
                  <span className={`font-bold ${sector.color}`}>
                    {sector.change >= 0 ? '+' : ''}{sector.change.toFixed(2)}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Currency Rates */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                FOREX RATES
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {Object.entries(currencyRates).map(([pair, data]) => (
                <div key={pair} className="bg-gray-800 p-2 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-400 font-bold">{pair}</span>
                    <div className="flex items-center">
                      {data.trend === 'up' ? 
                        <TrendingUp className="w-4 h-4 text-green-400 mr-1" /> : 
                        <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
                      }
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">{data.rate.toFixed(4)}</span>
                    <span className={getChangeColor(data.change)}>
                      {data.change >= 0 ? '+' : ''}{data.change.toFixed(4)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trading Desks */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-400" />
                TRADING DESKS P&L
              </h3>
            </div>
            <div className="p-4 space-y-2">
              {Object.entries(tradingDesks).map(([desk, data]) => (
                <div key={desk} className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <span className="text-white capitalize">{desk}</span>
                    <span className="text-gray-400 ml-2">({data.traders})</span>
                  </div>
                  <span className={`font-bold ${getChangeColor(data.pnl)}`}>
                    {formatCurrency(Math.abs(data.pnl))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alert System */}
        <div className="bg-gray-900 rounded border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-bold text-white flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
              TRADING ALERTS & RISK NOTIFICATIONS
            </h3>
          </div>
          <div className="p-4 max-h-48 overflow-y-auto">
            {alertSystem.map((alert) => (
              <div 
                key={alert.id} 
                className={`p-3 rounded border mb-2 ${getAlertColor(alert.level)} ${
                  !alert.acknowledged ? 'animate-pulse' : 'opacity-70'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="text-xs font-bold uppercase">{alert.level}</span>
                      <span className="text-xs ml-2 text-gray-400">{alert.time}</span>
                    </div>
                    <div className="text-sm">{alert.message}</div>
                  </div>
                  {!alert.acknowledged && (
                    <span className="text-xs bg-red-900 text-red-300 px-2 py-1 rounded">ACK</span>
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

export default FinancialTradingFloorCenter;