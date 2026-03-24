// Blockchain & Cryptocurrency Intelligence Center - Crypto Operations, DeFi Analytics & Blockchain Monitoring
import { useState, useEffect } from 'react';
import { Coins, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Shield, Activity, Zap } from 'lucide-react';

export default function BlockchainCryptocurrencyIntelligenceCenter() {
  const [cryptoData, setCryptoData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalCryptoMarket: 2345678901234, // EUR market cap
      bitcoinMarketCap: 1234567890123,
      ethereumMarketCap: 567890123456,
      defiTvl: 123456789012, // Total Value Locked
      totalCryptocurrencies: 23456,
      activeWallets: 234567890,
      dailyTransactions: 12345678,
      totalMiners: 2345678,
      stakingParticipants: 89012345,
      nftMarketCap: 45678901234,
      defiProtocols: 3456,
      blockchainNetworks: 1234,
      adoptionRate: 23.4, // percentage globally
      institutionalAdoption: 67.8
    },
    majorCryptoExchanges: [
      {
        exchange: 'Binance',
        category: 'Centralized Exchange',
        dailyVolume: 23456789012, // EUR
        users: 150000000,
        supportedCoins: 600,
        countries: 180,
        employees: 8000,
        services: ['Spot Trading', 'Futures', 'Options', 'Staking', 'NFTs'],
        securityScore: 94.6,
        liquidityScore: 98.7,
        operationalEfficiency: 96.4,
        trustRating: 9.2,
        marketShare: 28.5
      },
      {
        exchange: 'Coinbase',
        category: 'Regulated Exchange',
        dailyVolume: 12345678901,
        users: 108000000,
        supportedCoins: 250,
        countries: 100,
        employees: 3800,
        services: ['Retail Trading', 'Pro Trading', 'Custody', 'Institutional', 'Wallet'],
        securityScore: 97.8,
        liquidityScore: 91.2,
        operationalEfficiency: 93.7,
        trustRating: 9.6,
        marketShare: 15.2
      },
      {
        exchange: 'Kraken',
        category: 'Security-Focused',
        dailyVolume: 5678901234,
        users: 13000000,
        supportedCoins: 190,
        countries: 190,
        employees: 2400,
        services: ['Spot Trading', 'Margin Trading', 'Staking', 'Futures', 'OTC'],
        securityScore: 98.9,
        liquidityScore: 87.4,
        operationalEfficiency: 94.1,
        trustRating: 9.8,
        marketShare: 8.3
      },
      {
        exchange: 'FTX (Historical)',
        category: 'Derivatives-Focused',
        dailyVolume: 0, // Post-collapse
        users: 0,
        supportedCoins: 0,
        countries: 0,
        employees: 0,
        services: ['Collapsed'],
        securityScore: 0.0,
        liquidityScore: 0.0,
        operationalEfficiency: 0.0,
        trustRating: 0.0,
        marketShare: 0.0
      }
    ],
    blockchainNetworks: [
      {
        network: 'Bitcoin',
        type: 'Proof of Work',
        transactions: 234567, // daily
        hashRate: 567.8, // EH/s
        activeAddresses: 1234567,
        averageBlockTime: 10.2, // minutes
        fees: 15.67, // EUR average
        energyConsumption: 150.2, // TWh annually
        securityLevel: 99.9,
        decentralization: 94.6,
        scalability: 7.2 // TPS
      },
      {
        network: 'Ethereum',
        type: 'Proof of Stake',
        transactions: 1234567,
        hashRate: 0, // N/A for PoS
        activeAddresses: 23456789,
        averageBlockTime: 0.2,
        fees: 8.45,
        energyConsumption: 2.6,
        securityLevel: 98.7,
        decentralization: 87.9,
        scalability: 15.8
      },
      {
        network: 'Solana',
        type: 'Proof of History',
        transactions: 23456789,
        hashRate: 0,
        activeAddresses: 5678901,
        averageBlockTime: 0.01,
        fees: 0.0003,
        energyConsumption: 0.1,
        securityLevel: 89.4,
        decentralization: 72.3,
        scalability: 65000
      },
      {
        network: 'Polygon',
        type: 'Proof of Stake',
        transactions: 34567890,
        hashRate: 0,
        activeAddresses: 8901234,
        averageBlockTime: 0.04,
        fees: 0.01,
        energyConsumption: 0.01,
        securityLevel: 85.2,
        decentralization: 78.6,
        scalability: 7200
      }
    ],
    defiOperations: {
      totalValueLocked: 123456789012,
      activeProtocols: 3456,
      dailyVolume: 12345678901,
      yieldFarming: {
        totalStaked: 23456789012,
        averageApy: 12.4, // percentage
        activeUsers: 2345678,
        protocolsOffering: 1234
      },
      liquidityPools: {
        totalLiquidity: 45678901234,
        activeProviders: 1234567,
        averageApr: 8.7,
        impermanentLoss: 2.3
      },
      lending: {
        totalLent: 34567890123,
        totalBorrowed: 23456789012,
        averageLendingRate: 5.6,
        averageBorrowingRate: 8.9,
        liquidationRisk: 3.4
      },
      derivatives: {
        openInterest: 56789012345,
        dailyVolume: 23456789012,
        averageLeverage: 3.2,
        liquidationRate: 1.8
      }
    },
    cryptoSecurity: {
      totalHacks: 234, // annually
      fundsLost: 2345678901, // EUR annually
      exchangeBreaches: 23,
      defiExploits: 156,
      bridgeAttacks: 34,
      smartContractBugs: 567,
      phishingAttempts: 2345678,
      ransomwarePayments: 567890123,
      securityAudits: 12345,
      bugBounties: 234567890,
      insuranceCoverage: 12345678901,
      securityScore: 78.9 // industry average
    },
    nftMarketplace: {
      marketCap: 45678901234,
      dailyVolume: 234567890,
      totalCollections: 234567,
      activeTraders: 2345678,
      averagePrice: 456.78, // EUR
      topSale: 23456789, // EUR
      royaltiesPaid: 1234567890,
      marketplaces: 234,
      creatorEarnings: 12345678901,
      utilityNfts: 23.4 // percentage with utility
    },
    miningOperations: {
      totalHashRate: 567.8, // EH/s global
      activeMiners: 2345678,
      miningPools: 234,
      energyConsumption: 150.2, // TWh annually
      electricityCost: 0.045, // EUR per kWh average
      miningReward: 6.25, // BTC per block
      difficulty: 62.046e12,
      networkSecurity: 99.9,
      geographicDistribution: 67.8, // decentralization
      renewableEnergy: 58.4, // percentage
      carbonFootprint: 65400000, // tonnes CO2 annually
      efficiency: 23.4 // J/TH
    },
    stakingOperations: {
      totalStaked: 89012345678, // EUR value
      stakingRatio: 67.8, // percentage of supply
      averageRewards: 5.2, // percentage annually
      activeValidators: 567890,
      slashingEvents: 234, // annually
      stakingPools: 2345,
      liquidStaking: 23456789012,
      stakingYield: 4.8,
      validatorUptime: 99.7,
      networkParticipation: 78.9,
      delegatedStake: 34.5, // percentage
      selfStake: 65.5
    },
    regulatoryLandscape: {
      countriesRegulated: 89,
      countriesBanned: 12,
      cbdcInDevelopment: 134,
      cbdcLaunched: 23,
      taxClarityCountries: 67,
      licensedExchanges: 234,
      complianceScore: 67.8, // global average
      regulatoryUncertainty: 34.5,
      institutionalClarity: 78.9,
      consumerProtection: 56.7,
      amlCompliance: 89.4,
      kycRequirements: 94.6
    },
    cryptoAlerts: [
      {
        type: 'CRITICAL',
        category: 'Security',
        message: 'DeFi protocol exploit detected - $45M drained from liquidity pool',
        location: 'Ethereum DeFi Protocol',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '08:25',
        recommendations: ['Protocol pause', 'Security audit', 'User notification', 'Funds recovery']
      },
      {
        type: 'WARNING',
        category: 'Market',
        message: 'Bitcoin volatility spike - 15% price movement in last 4 hours',
        location: 'Global Markets',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '08:22',
        recommendations: ['Risk management', 'Position monitoring', 'Liquidity check', 'Client alerts']
      },
      {
        type: 'SUCCESS',
        category: 'Adoption',
        message: 'Major bank announces Bitcoin custody services for institutional clients',
        location: 'JPMorgan Chase',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '08:19',
        recommendations: ['Market analysis', 'Partnership exploration', 'Service expansion', 'Client outreach']
      },
      {
        type: 'INFO',
        category: 'Regulation',
        message: 'EU finalizes MiCA regulation implementation - new compliance requirements',
        location: 'European Union',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '08:16',
        recommendations: ['Compliance review', 'Legal consultation', 'Process updates', 'Staff training']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        industryOverview: {
          ...prev.industryOverview,
          globalCryptoMarket: Math.max(2000000000000, Math.min(2500000000000, prev.industryOverview.globalCryptoMarket + (Math.random() - 0.5) * 50000000000)),
          dailyTransactions: Math.max(10000000, Math.min(15000000, prev.industryOverview.dailyTransactions + Math.floor((Math.random() - 0.5) * 500000)))
        },
        blockchainNetworks: prev.blockchainNetworks.map(network => ({
          ...network,
          transactions: network.network === 'Bitcoin' ? 
            Math.max(200000, Math.min(300000, network.transactions + Math.floor((Math.random() - 0.5) * 10000))) :
            network.network === 'Ethereum' ?
            Math.max(1000000, Math.min(1500000, network.transactions + Math.floor((Math.random() - 0.5) * 50000))) :
            network.transactions,
          fees: Math.max(0.01, network.fees + (Math.random() - 0.5) * (network.fees * 0.1))
        }))
      }));
    }, 12000);

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

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'POSITIVE': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 80, excellent = 90) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Centralized Exchange': return 'text-blue-400 bg-blue-400/20';
      case 'Regulated Exchange': return 'text-green-400 bg-green-400/20';
      case 'Security-Focused': return 'text-purple-400 bg-purple-400/20';
      case 'Derivatives-Focused': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getNetworkColor = (network) => {
    switch (network) {
      case 'Bitcoin': return 'text-orange-400';
      case 'Ethereum': return 'text-purple-400';
      case 'Solana': return 'text-green-400';
      case 'Polygon': return 'text-indigo-400';
      default: return 'text-gray-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000000) {
      return `${(num / 1000000000000).toFixed(1)}T`;
    }
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

  const formatCurrency = (amount) => {
    if (amount >= 1000000000000) {
      return `€${(amount / 1000000000000).toFixed(1)}T`;
    }
    if (amount >= 1000000000) {
      return `€${(amount / 1000000000).toFixed(1)}B`;
    }
    if (amount >= 1000000) {
      return `€${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `€${(amount / 1000).toFixed(0)}K`;
    }
    return `€${amount.toLocaleString()}`;
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-amber-900 via-slate-900 to-yellow-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-amber-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl">
              <Coins className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Blockchain & Cryptocurrency Intelligence Center</h1>
              <p className="text-amber-300">Crypto operations, DeFi analytics & blockchain monitoring</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-amber-400">{cryptoData.currentTime}</div>
            <div className="text-amber-300">Crypto Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Coins className="w-5 h-5 text-amber-400 mr-2" />
                Global Market Cap
              </h3>
            </div>
            <div className="text-3xl font-bold text-amber-400">{formatCurrency(cryptoData.industryOverview.globalCryptoMarket)}</div>
            <div className="text-amber-300 text-sm">BTC: {formatCurrency(cryptoData.industryOverview.bitcoinMarketCap)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Daily Transactions
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(cryptoData.industryOverview.dailyTransactions)}</div>
            <div className="text-green-300 text-sm">Global Volume</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                Active Wallets
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(cryptoData.industryOverview.activeWallets)}</div>
            <div className="text-blue-300 text-sm">User Wallets</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-purple-400 mr-2" />
                DeFi TVL
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatCurrency(cryptoData.industryOverview.defiTvl)}</div>
            <div className="text-purple-300 text-sm">Total Value Locked</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                Adoption Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(cryptoData.industryOverview.adoptionRate)}</div>
            <div className="text-cyan-300 text-sm">Global Adoption</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-orange-400 mr-2" />
                Cryptocurrencies
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(cryptoData.industryOverview.totalCryptocurrencies)}</div>
            <div className="text-orange-300 text-sm">Total Coins</div>
          </div>
        </div>

        {/* Major Crypto Exchanges */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Coins className="w-5 h-5 text-amber-400 mr-2" />
            Major Crypto Exchanges Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Exchange</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Daily Volume</th>
                  <th className="text-center p-3 text-slate-300">Users</th>
                  <th className="text-center p-3 text-slate-300">Security</th>
                  <th className="text-center p-3 text-slate-300">Trust Rating</th>
                  <th className="text-center p-3 text-slate-300">Market Share</th>
                </tr>
              </thead>
              <tbody>
                {cryptoData.majorCryptoExchanges.map((exchange, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{exchange.exchange}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(exchange.employees)} employees • {exchange.countries} countries • {exchange.supportedCoins} coins</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(exchange.category)}`}>
                        {exchange.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(exchange.dailyVolume)}</td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(exchange.users)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(exchange.securityScore, 85, 95)}`}>
                      {formatPercentage(exchange.securityScore)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(exchange.trustRating, 8.0, 9.0)}`}>
                      {exchange.trustRating.toFixed(1)}/10
                    </td>
                    <td className="p-3 text-center text-amber-400">{formatPercentage(exchange.marketShare)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Blockchain Networks & DeFi Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-blue-400 mr-2" />
              Blockchain Networks Intelligence
            </h3>
            <div className="space-y-4">
              {cryptoData.blockchainNetworks.map((network, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className={`text-white font-medium text-sm ${getNetworkColor(network.network)}`}>{network.network}</span>
                      <span className="text-slate-400 text-xs">{network.type}</span>
                      <span className={`text-sm ${getPerformanceColor(network.securityLevel, 85, 95)}`}>
                        {formatPercentage(network.securityLevel)}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatNumber(network.transactions)}/day</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Addresses: {formatNumber(network.activeAddresses)}</div>
                      <div className="text-purple-400">Block Time: {network.averageBlockTime.toFixed(2)}min</div>
                      <div className="text-cyan-400">Fees: €{network.fees.toFixed(2)}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Security: {formatPercentage(network.securityLevel)}</div>
                      <div className="text-orange-400">Decentralization: {formatPercentage(network.decentralization)}</div>
                      <div className="text-yellow-400">
                        {network.network === 'Bitcoin' ? `Hash: ${network.hashRate} EH/s` :
                         `TPS: ${network.scalability.toFixed(0)}`}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs">
                    <div className="text-red-400">Energy: {network.energyConsumption} TWh/year</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-purple-400 mr-2" />
              DeFi Operations Intelligence
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{formatCurrency(cryptoData.defiOperations.totalValueLocked)}</div>
                  <div className="text-purple-300 text-sm">Total Value Locked</div>
                  <div className="text-gray-400 text-xs mt-1">{formatNumber(cryptoData.defiOperations.activeProtocols)} protocols</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{formatCurrency(cryptoData.defiOperations.dailyVolume)}</div>
                  <div className="text-green-300 text-sm">Daily Volume</div>
                  <div className="text-gray-400 text-xs mt-1">24h trading</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-700/30 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium">Yield Farming</span>
                    <span className="text-green-400 text-sm">{formatPercentage(cryptoData.defiOperations.yieldFarming.averageApy)} APY</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-blue-400">Staked: {formatCurrency(cryptoData.defiOperations.yieldFarming.totalStaked)}</div>
                    <div className="text-purple-400">Users: {formatNumber(cryptoData.defiOperations.yieldFarming.activeUsers)}</div>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium">Liquidity Pools</span>
                    <span className="text-blue-400 text-sm">{formatPercentage(cryptoData.defiOperations.liquidityPools.averageApr)} APR</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-green-400">Liquidity: {formatCurrency(cryptoData.defiOperations.liquidityPools.totalLiquidity)}</div>
                    <div className="text-orange-400">IL Risk: {formatPercentage(cryptoData.defiOperations.liquidityPools.impermanentLoss)}</div>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium">Lending/Borrowing</span>
                    <span className="text-cyan-400 text-sm">{formatPercentage(cryptoData.defiOperations.lending.averageLendingRate)} Rate</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-green-400">Lent: {formatCurrency(cryptoData.defiOperations.lending.totalLent)}</div>
                    <div className="text-red-400">Risk: {formatPercentage(cryptoData.defiOperations.lending.liquidationRisk)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mining & Staking Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-orange-400 mr-2" />
              Mining Operations Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{cryptoData.miningOperations.totalHashRate} EH/s</div>
                <div className="text-orange-300 text-sm">Global Hash Rate</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(cryptoData.miningOperations.activeMiners)} miners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(cryptoData.miningOperations.renewableEnergy)}</div>
                <div className="text-blue-300 text-sm">Renewable Energy</div>
                <div className="text-gray-400 text-xs mt-1">sustainability</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Mining Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Energy Cost</span>
                  <span className="text-green-400">€{cryptoData.miningOperations.electricityCost.toFixed(3)}/kWh</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Block Reward</span>
                  <span className="text-blue-400">{cryptoData.miningOperations.miningReward} BTC</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Network Security</span>
                  <span className="text-green-400">{formatPercentage(cryptoData.miningOperations.networkSecurity)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Efficiency</span>
                  <span className="text-purple-400">{cryptoData.miningOperations.efficiency} J/TH</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-red-400">{cryptoData.miningOperations.energyConsumption} TWh</div>
                <div className="text-slate-300">Annual Energy</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-cyan-400">{formatNumber(cryptoData.miningOperations.carbonFootprint)}</div>
                <div className="text-slate-300">CO₂ Tonnes</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Coins className="w-5 h-5 text-green-400 mr-2" />
              Staking Operations Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatCurrency(cryptoData.stakingOperations.totalStaked)}</div>
                <div className="text-green-300 text-sm">Total Staked</div>
                <div className="text-gray-400 text-xs mt-1">{formatPercentage(cryptoData.stakingOperations.stakingRatio)} of supply</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatPercentage(cryptoData.stakingOperations.averageRewards)}</div>
                <div className="text-purple-300 text-sm">Average Rewards</div>
                <div className="text-gray-400 text-xs mt-1">annually</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Staking Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Active Validators</span>
                  <span className="text-green-400">{formatNumber(cryptoData.stakingOperations.activeValidators)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Validator Uptime</span>
                  <span className="text-blue-400">{formatPercentage(cryptoData.stakingOperations.validatorUptime)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Slashing Events</span>
                  <span className="text-red-400">{cryptoData.stakingOperations.slashingEvents}/year</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Staking Pools</span>
                  <span className="text-purple-400">{formatNumber(cryptoData.stakingOperations.stakingPools)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Liquid Staking</span>
                  <span className="text-cyan-400">{formatCurrency(cryptoData.stakingOperations.liquidStaking)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Network Participation</span>
                  <span className="text-orange-400">{formatPercentage(cryptoData.stakingOperations.networkParticipation)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Regulatory Landscape */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              Crypto Security Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatCurrency(cryptoData.cryptoSecurity.fundsLost)}</div>
                <div className="text-red-300 text-sm">Funds Lost (Annual)</div>
                <div className="text-gray-400 text-xs mt-1">{cryptoData.cryptoSecurity.totalHacks} incidents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{formatPercentage(cryptoData.cryptoSecurity.securityScore)}</div>
                <div className="text-orange-300 text-sm">Security Score</div>
                <div className="text-gray-400 text-xs mt-1">industry average</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Security Incidents</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Exchange Breaches</span>
                  <span className="text-red-400">{cryptoData.cryptoSecurity.exchangeBreaches}/year</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">DeFi Exploits</span>
                  <span className="text-orange-400">{cryptoData.cryptoSecurity.defiExploits}/year</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Bridge Attacks</span>
                  <span className="text-yellow-400">{cryptoData.cryptoSecurity.bridgeAttacks}/year</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Smart Contract Bugs</span>
                  <span className="text-purple-400">{cryptoData.cryptoSecurity.smartContractBugs}/year</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Phishing Attempts</span>
                  <span className="text-red-400">{formatNumber(cryptoData.cryptoSecurity.phishingAttempts)}/year</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Security Audits</span>
                  <span className="text-green-400">{formatNumber(cryptoData.cryptoSecurity.securityAudits)}/year</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatCurrency(cryptoData.cryptoSecurity.bugBounties)}</div>
                <div className="text-slate-300">Bug Bounties</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-blue-400">{formatCurrency(cryptoData.cryptoSecurity.insuranceCoverage)}</div>
                <div className="text-slate-300">Insurance Coverage</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
              Regulatory Landscape Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{cryptoData.regulatoryLandscape.countriesRegulated}</div>
                <div className="text-green-300 text-sm">Countries Regulated</div>
                <div className="text-gray-400 text-xs mt-1">{cryptoData.regulatoryLandscape.countriesBanned} banned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{cryptoData.regulatoryLandscape.cbdcInDevelopment}</div>
                <div className="text-purple-300 text-sm">CBDCs in Development</div>
                <div className="text-gray-400 text-xs mt-1">{cryptoData.regulatoryLandscape.cbdcLaunched} launched</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Regulatory Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Tax Clarity</span>
                  <span className="text-green-400">{cryptoData.regulatoryLandscape.taxClarityCountries} countries</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Licensed Exchanges</span>
                  <span className="text-blue-400">{cryptoData.regulatoryLandscape.licensedExchanges}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Compliance Score</span>
                  <span className="text-purple-400">{formatPercentage(cryptoData.regulatoryLandscape.complianceScore)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Consumer Protection</span>
                  <span className="text-cyan-400">{formatPercentage(cryptoData.regulatoryLandscape.consumerProtection)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AML Compliance</span>
                  <span className="text-green-400">{formatPercentage(cryptoData.regulatoryLandscape.amlCompliance)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">KYC Requirements</span>
                  <span className="text-orange-400">{formatPercentage(cryptoData.regulatoryLandscape.kycRequirements)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NFT Marketplace Intelligence */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Star className="w-5 h-5 text-pink-400 mr-2" />
            NFT Marketplace Intelligence
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <div className="text-center">
              <div className="text-xl font-bold text-pink-400">{formatCurrency(cryptoData.nftMarketplace.marketCap)}</div>
              <div className="text-pink-300 text-sm">Market Cap</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-400">{formatCurrency(cryptoData.nftMarketplace.dailyVolume)}</div>
              <div className="text-purple-300 text-sm">Daily Volume</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-400">{formatNumber(cryptoData.nftMarketplace.totalCollections)}</div>
              <div className="text-blue-300 text-sm">Collections</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-green-400">{formatNumber(cryptoData.nftMarketplace.activeTraders)}</div>
              <div className="text-green-300 text-sm">Active Traders</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-orange-400">€{cryptoData.nftMarketplace.averagePrice.toFixed(0)}</div>
              <div className="text-orange-300 text-sm">Average Price</div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-slate-700/30 rounded p-3 text-center">
              <div className="text-lg font-bold text-yellow-400">{formatCurrency(cryptoData.nftMarketplace.topSale)}</div>
              <div className="text-slate-300">Top Sale</div>
            </div>
            <div className="bg-slate-700/30 rounded p-3 text-center">
              <div className="text-lg font-bold text-cyan-400">{formatCurrency(cryptoData.nftMarketplace.royaltiesPaid)}</div>
              <div className="text-slate-300">Royalties Paid</div>
            </div>
            <div className="bg-slate-700/30 rounded p-3 text-center">
              <div className="text-lg font-bold text-indigo-400">{formatCurrency(cryptoData.nftMarketplace.creatorEarnings)}</div>
              <div className="text-slate-300">Creator Earnings</div>
            </div>
            <div className="bg-slate-700/30 rounded p-3 text-center">
              <div className="text-lg font-bold text-emerald-400">{formatPercentage(cryptoData.nftMarketplace.utilityNfts)}</div>
              <div className="text-slate-300">Utility NFTs</div>
            </div>
          </div>
        </div>

        {/* Crypto Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Crypto Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {cryptoData.cryptoAlerts.map((alert, index) => (
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
                    <div className="text-slate-300">Location: {alert.location}</div>
                    <div className="text-slate-300">Action: {alert.actionRequired ? 'Required' : 'Monitoring'}</div>
                  </div>
                  <div>
                    <div className={`${getImpactColor(alert.impact).split(' ')[0]} text-xs`}>
                      Impact: {alert.impact}
                    </div>
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
      </div>
    </div>
  );
}