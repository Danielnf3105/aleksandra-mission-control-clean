// Financial Markets Intelligence Center - Market Monitoring, Trading Operations, Economic Intelligence & Financial Risk Analytics
import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, PieChart, Activity, AlertTriangle, CheckCircle, Target, Zap, Globe, LineChart } from 'lucide-react';

export default function FinancialMarketsIntelligenceCenter() {
  const [marketData, setMarketData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    marketOverview: {
      globalMarketCap: 89745600000000, // EUR
      totalVolume: 2345678000000, // EUR daily
      marketSentiment: 'BULLISH',
      volatilityIndex: 23.7,
      activeTradingSessions: 12,
      marketStatus: 'ACTIVE',
      riskLevel: 'MODERATE',
      economicIndicators: 'POSITIVE',
      inflationRate: 2.4, // percentage
      interestRates: 4.25,
      gdpGrowth: 2.8,
      unemploymentRate: 6.2,
      consumerConfidence: 78.9
    },
    majorIndices: [
      { index: 'FTSE Eurotop 100', value: 4567.89, change: 45.67, changePercent: 1.01, volume: 2345678000, status: 'OPEN' },
      { index: 'DAX 40', value: 15432.10, change: -123.45, changePercent: -0.79, volume: 3456789000, status: 'OPEN' },
      { index: 'CAC 40', value: 7234.56, change: 67.89, changePercent: 0.95, volume: 1234567000, status: 'OPEN' },
      { index: 'IBEX 35', value: 10987.65, change: 234.56, changePercent: 2.18, volume: 987654000, status: 'OPEN' },
      { index: 'FTSE MIB', value: 28456.78, change: -345.67, changePercent: -1.20, volume: 1567890000, status: 'OPEN' },
      { index: 'S&P 500', value: 4987.32, change: 78.90, changePercent: 1.61, volume: 4567890000, status: 'CLOSED' },
      { index: 'NASDAQ', value: 15678.90, change: 234.56, changePercent: 1.52, volume: 3456789000, status: 'CLOSED' },
      { index: 'Nikkei 225', value: 39876.54, change: -567.89, changePercent: -1.40, volume: 2345678000, status: 'CLOSED' }
    ],
    currencies: [
      { pair: 'EUR/USD', rate: 1.0876, change: 0.0034, changePercent: 0.31, volume: 5678900000 },
      { pair: 'EUR/GBP', rate: 0.8567, change: -0.0023, changePercent: -0.27, volume: 3456789000 },
      { pair: 'EUR/JPY', rate: 164.32, change: 1.45, changePercent: 0.89, volume: 2345678000 },
      { pair: 'EUR/CHF', rate: 0.9756, change: 0.0012, changePercent: 0.12, volume: 1234567000 },
      { pair: 'EUR/CAD', rate: 1.4567, change: -0.0078, changePercent: -0.53, volume: 987654000 },
      { pair: 'USD/JPY', rate: 151.23, change: 0.89, changePercent: 0.59, volume: 4567890000 }
    ],
    commodities: [
      { commodity: 'Gold', price: 1987.65, unit: 'USD/oz', change: 23.45, changePercent: 1.19, volume: 234567 },
      { commodity: 'Silver', price: 23.87, unit: 'USD/oz', change: -0.45, changePercent: -1.85, volume: 345678 },
      { commodity: 'Crude Oil (Brent)', price: 84.32, unit: 'USD/barrel', change: 2.34, changePercent: 2.86, volume: 567890 },
      { commodity: 'Natural Gas', price: 2.87, unit: 'USD/MMBtu', change: -0.12, changePercent: -4.01, volume: 123456 },
      { commodity: 'Copper', price: 8934.56, unit: 'USD/ton', change: 145.67, changePercent: 1.66, volume: 89456 },
      { commodity: 'Wheat', price: 634.23, unit: 'USD/bushel', change: -12.34, changePercent: -1.91, volume: 45678 }
    ],
    bonds: [
      { bond: 'German 10Y Bund', yield: 2.34, change: 0.05, changePercent: 2.18, duration: 8.7, rating: 'AAA' },
      { bond: 'US 10Y Treasury', yield: 4.25, change: 0.08, changePercent: 1.92, duration: 8.9, rating: 'AAA' },
      { bond: 'UK 10Y Gilt', yield: 3.87, change: -0.02, changePercent: -0.51, duration: 8.4, rating: 'AA' },
      { bond: 'French 10Y OAT', yield: 2.89, change: 0.03, changePercent: 1.05, duration: 8.6, rating: 'AA' },
      { bond: 'Italian 10Y BTP', yield: 4.12, change: 0.07, changePercent: 1.73, duration: 8.2, rating: 'BBB' },
      { bond: 'Spanish 10Y Bond', yield: 3.45, change: 0.04, changePercent: 1.17, duration: 8.3, rating: 'A' }
    ],
    tradingOperations: {
      totalPositions: 1234567,
      activeOrders: 234567,
      executedTrades: 567890,
      tradingVolume: 12345678900000, // EUR
      profitLoss: 234567890, // EUR
      riskExposure: 1234567890,
      marginUsed: 567890123,
      freeMargin: 1234567890,
      tradingPerformance: {
        winRate: 67.8,
        averageReturn: 12.4,
        sharpeRatio: 1.87,
        maxDrawdown: -8.9,
        volatility: 16.7,
        totalReturn: 234.5
      },
      portfolioAllocation: {
        equities: 45.7,
        bonds: 23.4,
        commodities: 12.8,
        currencies: 8.9,
        derivatives: 6.2,
        alternatives: 3.0
      }
    },
    marketSectors: [
      { sector: 'Technology', value: 1567890000000, change: 2.34, performance: 'OUTPERFORM', volume: 345678000 },
      { sector: 'Healthcare', value: 1234567000000, change: 1.67, performance: 'NEUTRAL', volume: 234567000 },
      { sector: 'Financial Services', value: 2345678000000, change: -0.89, performance: 'UNDERPERFORM', volume: 456789000 },
      { sector: 'Energy', value: 987654000000, change: 3.45, performance: 'OUTPERFORM', volume: 123456000 },
      { sector: 'Consumer Discretionary', value: 876543000000, change: 0.67, performance: 'NEUTRAL', volume: 187654000 },
      { sector: 'Industrials', value: 1098765000000, change: 1.23, performance: 'NEUTRAL', volume: 298765000 },
      { sector: 'Materials', value: 654321000000, change: 2.78, performance: 'OUTPERFORM', volume: 154321000 },
      { sector: 'Utilities', value: 543210000000, change: -0.45, performance: 'UNDERPERFORM', volume: 98765000 }
    ],
    economicCalendar: [
      {
        time: '09:00',
        event: 'ECB Interest Rate Decision',
        impact: 'HIGH',
        forecast: '4.25%',
        previous: '4.00%',
        actual: null,
        currency: 'EUR'
      },
      {
        time: '10:30',
        event: 'German GDP Growth Rate (QoQ)',
        impact: 'HIGH',
        forecast: '0.3%',
        previous: '0.1%',
        actual: null,
        currency: 'EUR'
      },
      {
        time: '14:30',
        event: 'US Unemployment Rate',
        impact: 'MEDIUM',
        forecast: '3.9%',
        previous: '3.7%',
        actual: null,
        currency: 'USD'
      },
      {
        time: '16:00',
        event: 'US Consumer Confidence Index',
        impact: 'MEDIUM',
        forecast: '110.5',
        previous: '106.7',
        actual: null,
        currency: 'USD'
      }
    ],
    riskMetrics: {
      systemicRisk: 'MODERATE',
      marketVolatility: 23.7,
      liquidityRisk: 'LOW',
      counterpartyRisk: 'MODERATE',
      operationalRisk: 'LOW',
      creditRisk: 'MODERATE',
      riskMetrics: [
        { metric: 'Value at Risk (1-day)', value: 12345678, confidence: 99, timeframe: '1 Day' },
        { metric: 'Expected Shortfall', value: 23456789, confidence: 95, timeframe: '1 Day' },
        { metric: 'Beta', value: 1.23, benchmark: 'Market Index', correlation: 0.87 },
        { metric: 'Correlation Risk', value: 0.45, description: 'Portfolio Correlation', status: 'NORMAL' }
      ],
      stressTests: {
        marketCrashScenario: -23.4, // percentage loss
        interestRateShock: -12.7,
        currencyDevaluation: -8.9,
        liquidityCrisis: -15.6,
        creditEvent: -11.2
      }
    },
    tradingSignals: [
      {
        signal: 'BUY',
        instrument: 'EUR/USD',
        strength: 'STRONG',
        confidence: 89.7,
        timeframe: '4H',
        price: 1.0876,
        target: 1.0950,
        stopLoss: 1.0820,
        reasoning: 'Technical breakout with strong momentum'
      },
      {
        signal: 'SELL',
        instrument: 'Gold',
        strength: 'MODERATE',
        confidence: 67.8,
        timeframe: '1D',
        price: 1987.65,
        target: 1945.00,
        stopLoss: 2010.00,
        reasoning: 'Overbought conditions with resistance at 2000'
      },
      {
        signal: 'HOLD',
        instrument: 'FTSE 100',
        strength: 'WEAK',
        confidence: 54.3,
        timeframe: '1W',
        price: 4567.89,
        target: null,
        stopLoss: null,
        reasoning: 'Mixed signals, waiting for clearer direction'
      }
    ],
    marketNews: [
      {
        time: '02:30',
        category: 'CENTRAL BANKS',
        headline: 'ECB signals potential rate pause as inflation shows signs of stabilization',
        impact: 'HIGH',
        affected: ['EUR', 'European Bonds', 'Banking Sector'],
        sentiment: 'NEUTRAL'
      },
      {
        time: '02:15',
        category: 'EARNINGS',
        headline: 'Major tech earnings beat expectations, sector rotation continues',
        impact: 'MEDIUM',
        affected: ['Technology Sector', 'Growth Stocks', 'NASDAQ'],
        sentiment: 'POSITIVE'
      },
      {
        time: '01:45',
        category: 'COMMODITIES',
        headline: 'Oil prices surge on supply disruption concerns, energy stocks rally',
        impact: 'MEDIUM',
        affected: ['Energy Sector', 'Oil Futures', 'Currency Pairs'],
        sentiment: 'POSITIVE'
      },
      {
        time: '01:20',
        category: 'GEOPOLITICS',
        headline: 'Trade negotiations progress boosts market sentiment, risk assets higher',
        impact: 'LOW',
        affected: ['Global Indices', 'Emerging Markets', 'Safe Havens'],
        sentiment: 'POSITIVE'
      }
    ],
    alerts: [
      {
        type: 'CRITICAL',
        category: 'Risk Management',
        message: 'Portfolio VaR exceeding daily limit - immediate position review required',
        instrument: 'Portfolio VaR',
        threshold: '€10M',
        current: '€12.3M',
        timestamp: '02:42',
        actionRequired: true,
        recommendations: ['Reduce position sizes', 'Hedge exposure', 'Review risk models']
      },
      {
        type: 'WARNING',
        category: 'Market Volatility',
        message: 'Volatility spike detected in European markets - increased monitoring activated',
        instrument: 'VSTOXX Index',
        threshold: '25.0',
        current: '27.8',
        timestamp: '02:35',
        actionRequired: true,
        recommendations: ['Adjust position sizes', 'Review stop losses', 'Monitor correlations']
      },
      {
        type: 'SUCCESS',
        category: 'Trading Performance',
        message: 'Monthly performance target achieved - portfolio up 3.2% vs 2.5% target',
        instrument: 'Portfolio Performance',
        threshold: '2.5%',
        current: '3.2%',
        timestamp: '02:20',
        actionRequired: false,
        recommendations: ['Document strategy success', 'Consider profit taking', 'Maintain discipline']
      },
      {
        type: 'INFO',
        category: 'Economic Calendar',
        message: 'High-impact ECB rate decision scheduled for 09:00 - prepare for volatility',
        instrument: 'EUR pairs',
        threshold: null,
        current: null,
        timestamp: '02:10',
        actionRequired: false,
        recommendations: ['Reduce position sizes', 'Set tighter stops', 'Monitor price action']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        marketOverview: {
          ...prev.marketOverview,
          volatilityIndex: Math.max(15, Math.min(35, prev.marketOverview.volatilityIndex + (Math.random() - 0.5) * 2)),
          totalVolume: Math.max(2000000000000, Math.min(3000000000000, prev.marketOverview.totalVolume + (Math.random() - 0.5) * 100000000000))
        },
        majorIndices: prev.majorIndices.map(index => ({
          ...index,
          value: Math.max(index.value * 0.95, Math.min(index.value * 1.05, index.value + (Math.random() - 0.5) * 50)),
          change: (Math.random() - 0.5) * 100,
          changePercent: (Math.random() - 0.5) * 3
        }))
      }));
    }, 24000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'SUCCESS': return 'border-green-500 bg-green-900/30 text-green-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getChangeColor = (change) => {
    if (change > 0) return 'text-green-400';
    if (change < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  const getChangeIcon = (change) => {
    if (change > 0) return <TrendingUp className="w-3 h-3 text-green-400" />;
    if (change < 0) return <TrendingDown className="w-3 h-3 text-red-400" />;
    return <span className="w-3 h-3 text-gray-400">→</span>;
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'POSITIVE': return 'text-green-400';
      case 'NEGATIVE': return 'text-red-400';
      case 'NEUTRAL': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getSignalColor = (signal) => {
    switch (signal) {
      case 'BUY': return 'text-green-400 bg-green-400/20';
      case 'SELL': return 'text-red-400 bg-red-400/20';
      case 'HOLD': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'HIGH': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'OUTPERFORM': return 'text-green-400';
      case 'UNDERPERFORM': return 'text-red-400';
      case 'NEUTRAL': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const formatCurrency = (amount, currency = 'EUR') => {
    const symbol = currency === 'USD' ? '$' : '€';
    if (amount >= 1000000000000) {
      return `${symbol}${(amount / 1000000000000).toFixed(1)}T`;
    }
    if (amount >= 1000000000) {
      return `${symbol}${(amount / 1000000000).toFixed(1)}B`;
    }
    if (amount >= 1000000) {
      return `${symbol}${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `${symbol}${(amount / 1000).toFixed(0)}K`;
    }
    return `${symbol}${amount.toLocaleString()}`;
  };

  const formatPercentage = (value) => `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  return (
    <div className="h-full bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-green-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Financial Markets Intelligence Center</h1>
              <p className="text-green-300">Market monitoring, trading operations, economic intelligence & financial risk analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-green-400">{marketData.currentTime}</div>
            <div className="text-green-300">Markets Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Market Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 text-green-400 mr-2" />
                Market Cap
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(marketData.marketOverview.globalMarketCap)}</div>
            <div className="text-green-300 text-sm">Global Markets</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-blue-400 mr-2" />
                Daily Volume
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatCurrency(marketData.marketOverview.totalVolume)}</div>
            <div className="text-blue-300 text-sm">Trading Volume</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-purple-400 mr-2" />
                Market Sentiment
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{marketData.marketOverview.marketSentiment}</div>
            <div className="text-purple-300 text-sm">Volatility: {marketData.marketOverview.volatilityIndex.toFixed(1)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
                Interest Rates
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{marketData.marketOverview.interestRates.toFixed(2)}%</div>
            <div className="text-cyan-300 text-sm">Inflation: {marketData.marketOverview.inflationRate.toFixed(1)}%</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <LineChart className="w-5 h-5 text-orange-400 mr-2" />
                GDP Growth
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(marketData.marketOverview.gdpGrowth)}</div>
            <div className="text-orange-300 text-sm">Unemployment: {marketData.marketOverview.unemploymentRate.toFixed(1)}%</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                Risk Level
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{marketData.marketOverview.riskLevel}</div>
            <div className="text-emerald-300 text-sm">Sessions: {marketData.marketOverview.activeTradingSessions}</div>
          </div>
        </div>

        {/* Major Indices */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
            Major Market Indices
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Index</th>
                  <th className="text-center p-3 text-slate-300">Price</th>
                  <th className="text-center p-3 text-slate-300">Change</th>
                  <th className="text-center p-3 text-slate-300">Change %</th>
                  <th className="text-center p-3 text-slate-300">Volume</th>
                  <th className="text-center p-3 text-slate-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {marketData.majorIndices.map((index, idx) => (
                  <tr key={idx} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3 text-white font-medium">{index.index}</td>
                    <td className="p-3 text-center text-blue-400 font-mono">{index.value.toFixed(2)}</td>
                    <td className={`p-3 text-center font-mono flex items-center justify-center ${getChangeColor(index.change)}`}>
                      {getChangeIcon(index.change)}
                      <span className="ml-1">{index.change >= 0 ? '+' : ''}{index.change.toFixed(2)}</span>
                    </td>
                    <td className={`p-3 text-center font-mono ${getChangeColor(index.changePercent)}`}>
                      {formatPercentage(index.changePercent)}
                    </td>
                    <td className="p-3 text-center text-purple-400">{formatCurrency(index.volume)}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${index.status === 'OPEN' ? 'text-green-400 bg-green-400/20' : 'text-gray-400 bg-gray-400/20'}`}>
                        {index.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trading Operations & Market Sectors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-cyan-400 mr-2" />
              Trading Operations Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatNumber(marketData.tradingOperations.totalPositions)}</div>
                <div className="text-cyan-300 text-sm">Total Positions</div>
                <div className="text-gray-400 text-xs mt-1">P&L: {formatCurrency(marketData.tradingOperations.profitLoss)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{marketData.tradingOperations.tradingPerformance.winRate.toFixed(1)}%</div>
                <div className="text-green-300 text-sm">Win Rate</div>
                <div className="text-gray-400 text-xs mt-1">Sharpe: {marketData.tradingOperations.tradingPerformance.sharpeRatio.toFixed(2)}</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Portfolio Performance</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Total Return: {formatPercentage(marketData.tradingOperations.tradingPerformance.totalReturn)}</div>
                    <div className="text-slate-300">Avg Return: {formatPercentage(marketData.tradingOperations.tradingPerformance.averageReturn)}</div>
                  </div>
                  <div>
                    <div className="text-red-400">Max Drawdown: {formatPercentage(marketData.tradingOperations.tradingPerformance.maxDrawdown)}</div>
                    <div className="text-blue-400">Volatility: {marketData.tradingOperations.tradingPerformance.volatility.toFixed(1)}%</div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Portfolio Allocation</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-slate-300">Equities: {marketData.tradingOperations.portfolioAllocation.equities.toFixed(1)}%</div>
                  <div className="text-slate-300">Bonds: {marketData.tradingOperations.portfolioAllocation.bonds.toFixed(1)}%</div>
                  <div className="text-slate-300">Commodities: {marketData.tradingOperations.portfolioAllocation.commodities.toFixed(1)}%</div>
                  <div className="text-slate-300">Currencies: {marketData.tradingOperations.portfolioAllocation.currencies.toFixed(1)}%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PieChart className="w-5 h-5 text-purple-400 mr-2" />
              Market Sectors Performance
            </h3>
            <div className="space-y-2">
              {marketData.marketSectors.map((sector, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium">{sector.sector}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`${getChangeColor(sector.change)} text-sm flex items-center`}>
                        {getChangeIcon(sector.change)}
                        <span className="ml-1">{formatPercentage(sector.change)}</span>
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getPerformanceColor(sector.performance) === 'text-green-400' ? 'bg-green-400/20' : getPerformanceColor(sector.performance) === 'text-red-400' ? 'bg-red-400/20' : 'bg-blue-400/20'} ${getPerformanceColor(sector.performance)}`}>
                        {sector.performance}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-blue-400">Value: {formatCurrency(sector.value)}</span>
                    <span className="text-purple-400">Volume: {formatCurrency(sector.volume)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Financial Markets Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {marketData.alerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                  <div>
                    <div className="text-slate-300">Instrument: {alert.instrument}</div>
                    {alert.threshold && <div className="text-slate-300">Threshold: {alert.threshold}</div>}
                  </div>
                  <div>
                    {alert.current && <div className="text-orange-400">Current: {alert.current}</div>}
                    <div className="text-slate-300">Action: {alert.actionRequired ? 'Required' : 'Monitoring'}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {alert.recommendations.map((rec, recIndex) => (
                    <span key={recIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trading Signals & Economic Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              Trading Signals Intelligence
            </h3>
            <div className="space-y-3">
              {marketData.tradingSignals.map((signal, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSignalColor(signal.signal)}`}>
                        {signal.signal}
                      </span>
                      <span className="text-white font-medium">{signal.instrument}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-400 text-sm">{signal.confidence.toFixed(1)}%</div>
                      <div className="text-slate-400 text-xs">{signal.timeframe}</div>
                    </div>
                  </div>
                  <div className="text-slate-300 text-sm mb-2">{signal.reasoning}</div>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <div className="text-slate-400">Price</div>
                      <div className="text-white font-mono">{signal.price}</div>
                    </div>
                    {signal.target && (
                      <div>
                        <div className="text-slate-400">Target</div>
                        <div className="text-green-400 font-mono">{signal.target}</div>
                      </div>
                    )}
                    {signal.stopLoss && (
                      <div>
                        <div className="text-slate-400">Stop Loss</div>
                        <div className="text-red-400 font-mono">{signal.stopLoss}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <DollarSign className="w-5 h-5 text-green-400 mr-2" />
              Economic Calendar & News
            </h3>
            <div className="space-y-3 mb-6">
              <h4 className="text-white text-sm font-medium">Today's Economic Events</h4>
              {marketData.economicCalendar.map((event, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white text-sm">{event.event}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getImpactColor(event.impact)}`}>
                        {event.impact}
                      </span>
                      <span className="text-slate-400 text-xs">{event.time}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Forecast: {event.forecast}</span>
                    <span className="text-slate-300">Previous: {event.previous}</span>
                    <span className="text-blue-400">{event.currency}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Market News</h4>
              {marketData.marketNews.slice(0, 3).map((news, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-2 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-blue-400 text-xs">{news.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`${getSentimentColor(news.sentiment)} text-xs`}>{news.sentiment}</span>
                      <span className="text-slate-400 text-xs">{news.time}</span>
                    </div>
                  </div>
                  <div className="text-white text-xs">{news.headline}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}