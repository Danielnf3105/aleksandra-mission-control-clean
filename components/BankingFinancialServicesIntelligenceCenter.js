// Banking & Financial Services Intelligence Center - Digital Banking, Risk Management, Payment Processing & Financial Analytics
import { useState, useEffect } from 'react';
import { CreditCard, DollarSign, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Shield } from 'lucide-react';

export default function BankingFinancialServicesIntelligenceCenter() {
  const [bankingData, setBankingData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalBankingAssets: 156789012345678, // EUR
      dailyTransactions: 4567890123,
      totalBanks: 23456,
      digitalBankingAdoption: 78.9, // percentage
      mobilePayments: 234567890123,
      creditCardSpending: 12345678901,
      totalDeposits: 89012345678901,
      totalLoans: 67890123456789,
      interestRates: 4.25, // average percentage
      regulatoryCompliance: 94.7,
      cybersecurityThreats: 45678, // daily attempts
      employeeCount: 23456789
    },
    majorBanks: [
      {
        bank: 'JPMorgan Chase',
        category: 'Global Investment Bank',
        assets: 3456789012345, // EUR
        revenue: 123456789012,
        customers: 67000000,
        branches: 4800,
        countries: 60,
        digitalAdoption: 67.8,
        riskScore: 2.1, // lower is better
        capitalRatio: 15.4,
        roaPercentage: 1.3,
        employeeCount: 293723,
        marketCap: 456789012345
      },
      {
        bank: 'Bank of America',
        category: 'Commercial Bank',
        assets: 3012345678901,
        revenue: 98765432109,
        customers: 68000000,
        branches: 3900,
        countries: 35,
        digitalAdoption: 72.4,
        riskScore: 2.3,
        capitalRatio: 14.8,
        roaPercentage: 1.1,
        employeeCount: 217000,
        marketCap: 234567890123
      },
      {
        bank: 'Wells Fargo',
        category: 'Commercial Bank',
        assets: 1987654321098,
        revenue: 76543210987,
        customers: 70000000,
        branches: 4700,
        countries: 32,
        digitalAdoption: 69.3,
        riskScore: 2.7,
        capitalRatio: 13.2,
        roaPercentage: 1.0,
        employeeCount: 238000,
        marketCap: 178901234567
      },
      {
        bank: 'HSBC',
        category: 'Global Investment Bank',
        assets: 2890123456789,
        revenue: 54321098765,
        customers: 41000000,
        branches: 3800,
        countries: 64,
        digitalAdoption: 74.6,
        riskScore: 2.4,
        capitalRatio: 14.1,
        roaPercentage: 0.8,
        employeeCount: 220000,
        marketCap: 145678901234
      }
    ],
    digitalBanking: {
      channelUsage: {
        mobileApp: 67.8, // percentage of transactions
        onlineBanking: 23.4,
        atm: 6.7,
        branches: 2.1
      },
      services: [
        {
          service: 'Mobile Payments',
          adoption: 78.9,
          dailyVolume: 234567890,
          averageAmount: 45.67,
          growth: 23.4,
          satisfaction: 8.7,
          securityScore: 94.2
        },
        {
          service: 'Digital Loans',
          adoption: 56.7,
          dailyVolume: 123456789,
          averageAmount: 12340.50,
          growth: 34.6,
          satisfaction: 8.1,
          securityScore: 96.8
        },
        {
          service: 'Investment Trading',
          adoption: 34.2,
          dailyVolume: 98765432,
          averageAmount: 2340.75,
          growth: 45.8,
          satisfaction: 7.9,
          securityScore: 98.1
        },
        {
          service: 'Cryptocurrency Exchange',
          adoption: 23.4,
          dailyVolume: 56789012,
          averageAmount: 567.89,
          growth: 89.7,
          satisfaction: 7.2,
          securityScore: 91.5
        }
      ],
      customerBehavior: {
        sessionDuration: 8.4, // minutes average
        transactionsPerSession: 2.3,
        peakHours: ['09:00-11:00', '13:00-14:00', '19:00-21:00'],
        preferredDevices: { mobile: 78.9, desktop: 18.7, tablet: 2.4 },
        biometricAuth: 67.8,
        contactlessPayment: 89.3
      }
    },
    riskManagement: {
      creditRisk: {
        defaultRate: 2.1, // percentage
        nonPerformingLoans: 3.4,
        creditScoreDistribution: {
          excellent: 34.6, // 750+
          good: 28.9, // 700-749
          fair: 23.4, // 650-699
          poor: 13.1 // <650
        },
        loanTypes: [
          { type: 'Mortgages', portfolio: 1234567890123, defaultRate: 1.2, avgAmount: 234567 },
          { type: 'Personal Loans', portfolio: 456789012345, defaultRate: 4.7, avgAmount: 23456 },
          { type: 'Credit Cards', portfolio: 789012345678, defaultRate: 3.9, avgAmount: 4567 },
          { type: 'Auto Loans', portfolio: 234567890123, defaultRate: 2.1, avgAmount: 34567 },
          { type: 'Business Loans', portfolio: 567890123456, defaultRate: 2.8, avgAmount: 123456 }
        ]
      },
      operationalRisk: {
        fraudAttempts: 234567, // daily
        fraudLosses: 12345678, // EUR daily
        preventionRate: 98.7, // percentage
        complianceScore: 94.2,
        systemUptime: 99.97,
        dataBreaches: 0, // monthly
        regulatoryFines: 0 // monthly EUR
      },
      marketRisk: {
        portfolioVar: 23456789, // EUR Value at Risk
        stressTestResults: 89.7, // percentage passed
        currencyExposure: 234567890,
        interestRateRisk: 12.4,
        liquidityRatio: 134.7,
        leverageRatio: 8.9
      }
    },
    paymentProcessing: {
      volumes: {
        creditCards: 1234567890, // daily transactions
        debitCards: 987654321,
        wireTransfers: 45678901,
        ach: 234567890,
        digitalWallets: 567890123,
        cryptocurrency: 23456789
      },
      performance: {
        processingSpeed: 1.2, // seconds average
        successRate: 99.94, // percentage
        chargebackRate: 0.87,
        feeRevenue: 123456789, // EUR daily
        crossBorderFees: 34567890,
        complianceChecks: 99.2 // percentage automated
      },
      innovations: {
        instantPayments: 67.8,
        qrCodePayments: 45.6,
        biometricPayments: 23.4,
        voicePayments: 8.9,
        iotPayments: 12.3,
        blockchainSettlement: 34.6
      }
    },
    regulatoryCompliance: {
      frameworks: [
        {
          regulation: 'Basel III',
          complianceScore: 96.7,
          capitalRequirement: 12.5, // percentage
          currentRatio: 15.4,
          status: 'Compliant',
          lastAudit: '2026-02-15',
          nextReview: '2026-08-15'
        },
        {
          regulation: 'PCI DSS',
          complianceScore: 98.9,
          requirements: 12,
          currentMet: 12,
          status: 'Compliant',
          lastAudit: '2026-01-20',
          nextReview: '2027-01-20'
        },
        {
          regulation: 'GDPR',
          complianceScore: 94.2,
          dataRequests: 234, // monthly
          breachReports: 0,
          status: 'Compliant',
          lastAudit: '2026-03-01',
          nextReview: '2026-09-01'
        },
        {
          regulation: 'KYC/AML',
          complianceScore: 97.8,
          customerChecks: 456789, // monthly
          suspiciousReports: 234,
          status: 'Compliant',
          lastAudit: '2026-02-28',
          nextReview: '2026-05-28'
        }
      ],
      monitoring: {
        transactionMonitoring: 99.8,
        sanctionsScreening: 99.9,
        riskAssessment: 94.7,
        reportingAccuracy: 98.4,
        auditReadiness: 96.8
      }
    },
    fintech: {
      partnerships: [
        { partner: 'PayPal', service: 'Digital Payments', integration: 89.7, revenue: 23456789 },
        { partner: 'Stripe', service: 'Payment Processing', integration: 78.9, revenue: 12345678 },
        { partner: 'Plaid', service: 'Open Banking', integration: 67.8, revenue: 8901234 },
        { partner: 'Coinbase', service: 'Crypto Services', integration: 45.6, revenue: 5678901 }
      ],
      innovations: {
        openBanking: 67.8,
        aiChatbots: 89.3,
        roboAdvisors: 45.6,
        blockchainKyc: 23.4,
        quantumEncryption: 12.1,
        biometricAuth: 78.9,
        predictiveAnalytics: 94.2,
        realTimeFraud: 96.8
      },
      investments: {
        aiMl: 234567890, // EUR annually
        blockchain: 123456789,
        cybersecurity: 345678901,
        cloudInfrastructure: 456789012,
        dataAnalytics: 189012345,
        customerExperience: 267890123
      }
    },
    bankingAlerts: [
      {
        type: 'CRITICAL',
        category: 'Cybersecurity Threat',
        message: 'Coordinated DDoS attack targeting payment systems - 347% increase in malicious traffic detected',
        region: 'Global',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '03:51',
        recommendations: ['Traffic filtering', 'Backup systems', 'Customer communication', 'Incident response']
      },
      {
        type: 'WARNING',
        category: 'Regulatory Change',
        message: 'New capital requirements effective Q2 2026 - banks must increase reserves by 2.3%',
        region: 'Europe',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '03:48',
        recommendations: ['Capital planning', 'Compliance review', 'Risk assessment', 'Regulatory filing']
      },
      {
        type: 'SUCCESS',
        category: 'Digital Innovation',
        message: 'AI fraud detection system reduces false positives by 67% while improving detection rate',
        region: 'North America',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '03:45',
        recommendations: ['Global rollout', 'Performance monitoring', 'Customer communication', 'Model optimization']
      },
      {
        type: 'INFO',
        category: 'Market Trend',
        message: 'Central Bank Digital Currency (CBDC) adoption accelerates - 12 countries announce pilot programs',
        region: 'Global',
        impact: 'LOW',
        actionRequired: false,
        timestamp: '03:40',
        recommendations: ['Strategic planning', 'Technology evaluation', 'Partnership assessment', 'Regulatory monitoring']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBankingData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        industryOverview: {
          ...prev.industryOverview,
          dailyTransactions: Math.max(4000000000, Math.min(5000000000, prev.industryOverview.dailyTransactions + Math.floor((Math.random() - 0.5) * 50000000))),
          cybersecurityThreats: Math.max(40000, Math.min(50000, prev.industryOverview.cybersecurityThreats + Math.floor((Math.random() - 0.5) * 2000)))
        },
        paymentProcessing: {
          ...prev.paymentProcessing,
          performance: {
            ...prev.paymentProcessing.performance,
            successRate: Math.max(99.8, Math.min(99.99, prev.paymentProcessing.performance.successRate + (Math.random() - 0.5) * 0.1))
          }
        }
      }));
    }, 40000);

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
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'POSITIVE': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 95, excellent = 98) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.9) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getRiskColor = (value, low = 2, medium = 4) => {
    if (value <= low) return 'text-green-400';
    if (value <= medium) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Global Investment Bank': return 'text-blue-400 bg-blue-400/20';
      case 'Commercial Bank': return 'text-green-400 bg-green-400/20';
      case 'Digital Bank': return 'text-purple-400 bg-purple-400/20';
      case 'Credit Union': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
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
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Banking & Financial Services Intelligence Center</h1>
              <p className="text-blue-300">Digital banking, risk management, payment processing & financial analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{bankingData.currentTime}</div>
            <div className="text-blue-300">Banking Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-blue-400 mr-2" />
                Banking Assets
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatCurrency(bankingData.industryOverview.globalBankingAssets)}</div>
            <div className="text-blue-300 text-sm">Banks: {formatNumber(bankingData.industryOverview.totalBanks)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                Daily Transactions
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(bankingData.industryOverview.dailyTransactions)}</div>
            <div className="text-green-300 text-sm">Mobile: {formatCurrency(bankingData.industryOverview.mobilePayments)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Digital Adoption
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(bankingData.industryOverview.digitalBankingAdoption)}</div>
            <div className="text-purple-300 text-sm">Interest Rate: {bankingData.industryOverview.interestRates.toFixed(2)}%</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-red-400 mr-2" />
                Cyber Threats
              </h3>
            </div>
            <div className="text-3xl font-bold text-red-400">{formatNumber(bankingData.industryOverview.cybersecurityThreats)}</div>
            <div className="text-red-300 text-sm">Daily Attempts</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                Compliance
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatPercentage(bankingData.industryOverview.regulatoryCompliance)}</div>
            <div className="text-emerald-300 text-sm">Regulatory Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                Employment
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(bankingData.industryOverview.employeeCount)}</div>
            <div className="text-yellow-300 text-sm">Global Workforce</div>
          </div>
        </div>

        {/* Major Banks */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <CreditCard className="w-5 h-5 text-blue-400 mr-2" />
            Major Banking Institutions Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Bank</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Assets</th>
                  <th className="text-center p-3 text-slate-300">Customers</th>
                  <th className="text-center p-3 text-slate-300">Digital Adoption</th>
                  <th className="text-center p-3 text-slate-300">Risk Score</th>
                  <th className="text-center p-3 text-slate-300">Capital Ratio</th>
                </tr>
              </thead>
              <tbody>
                {bankingData.majorBanks.map((bank, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{bank.bank}</div>
                      <div className="text-slate-400 text-xs">{bank.branches} branches • {bank.countries} countries • {formatNumber(bank.employeeCount)} employees</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(bank.category)}`}>
                        {bank.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(bank.assets)}</td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(bank.customers)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(bank.digitalAdoption, 60, 75)}`}>
                      {formatPercentage(bank.digitalAdoption)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getRiskColor(bank.riskScore, 2, 3)}`}>
                      {bank.riskScore.toFixed(1)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(bank.capitalRatio, 12, 15)}`}>
                      {formatPercentage(bank.capitalRatio)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Digital Banking & Risk Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              Digital Banking Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatPercentage(bankingData.digitalBanking.channelUsage.mobileApp)}</div>
                <div className="text-purple-300 text-sm">Mobile App Usage</div>
                <div className="text-gray-400 text-xs mt-1">Primary Channel</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(bankingData.digitalBanking.customerBehavior.contactlessPayment)}</div>
                <div className="text-cyan-300 text-sm">Contactless Payment</div>
                <div className="text-gray-400 text-xs mt-1">Adoption Rate</div>
              </div>
            </div>
            <div className="space-y-4">
              {bankingData.digitalBanking.services.map((service, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{service.service}</span>
                      <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {formatPercentage(service.adoption)} adoption
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">+{formatPercentage(service.growth)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-blue-400">Volume: {formatNumber(service.dailyVolume)}</div>
                      <div className="text-green-400">Avg Amount: €{service.averageAmount.toFixed(2)}</div>
                      <div className="text-yellow-400">Satisfaction: ★{service.satisfaction.toFixed(1)}</div>
                    </div>
                    <div>
                      <div className="text-purple-400">Security: {formatPercentage(service.securityScore)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              Risk Management Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatPercentage(bankingData.riskManagement.creditRisk.defaultRate)}</div>
                <div className="text-red-300 text-sm">Default Rate</div>
                <div className="text-gray-400 text-xs mt-1">Credit Risk</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(bankingData.riskManagement.operationalRisk.preventionRate)}</div>
                <div className="text-green-300 text-sm">Fraud Prevention</div>
                <div className="text-gray-400 text-xs mt-1">Success Rate</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Credit Portfolio</h4>
              {bankingData.riskManagement.creditRisk.loanTypes.slice(0, 4).map((loan, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{loan.type}</div>
                    <div className="text-slate-400 text-xs">Avg: €{formatNumber(loan.avgAmount)}</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-green-400">{formatCurrency(loan.portfolio)}</div>
                    <div className={`${getRiskColor(loan.defaultRate, 2, 4)} text-xs`}>
                      {formatPercentage(loan.defaultRate)} default
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <h4 className="text-white text-sm font-medium mb-2">Operational Metrics</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-red-400">Daily Fraud: {formatNumber(bankingData.riskManagement.operationalRisk.fraudAttempts)}</div>
                  <div className="text-orange-400">Fraud Losses: {formatCurrency(bankingData.riskManagement.operationalRisk.fraudLosses)}</div>
                </div>
                <div>
                  <div className="text-green-400">Uptime: {formatPercentage(bankingData.riskManagement.operationalRisk.systemUptime)}</div>
                  <div className="text-blue-400">Compliance: {formatPercentage(bankingData.riskManagement.operationalRisk.complianceScore)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Processing & Regulatory Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <DollarSign className="w-5 h-5 text-green-400 mr-2" />
              Payment Processing Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(bankingData.paymentProcessing.performance.successRate)}</div>
                <div className="text-green-300 text-sm">Success Rate</div>
                <div className="text-gray-400 text-xs mt-1">Payment Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{bankingData.paymentProcessing.performance.processingSpeed.toFixed(1)}s</div>
                <div className="text-cyan-300 text-sm">Processing Speed</div>
                <div className="text-gray-400 text-xs mt-1">Average Time</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Daily Volumes</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Credit Cards</span>
                  <span className="text-green-400">{formatNumber(bankingData.paymentProcessing.volumes.creditCards)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Digital Wallets</span>
                  <span className="text-blue-400">{formatNumber(bankingData.paymentProcessing.volumes.digitalWallets)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Wire Transfers</span>
                  <span className="text-purple-400">{formatNumber(bankingData.paymentProcessing.volumes.wireTransfers)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cryptocurrency</span>
                  <span className="text-orange-400">{formatNumber(bankingData.paymentProcessing.volumes.cryptocurrency)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Payment Innovations</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Instant Payments</span>
                  <span className="text-green-400">{formatPercentage(bankingData.paymentProcessing.innovations.instantPayments)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">QR Code</span>
                  <span className="text-blue-400">{formatPercentage(bankingData.paymentProcessing.innovations.qrCodePayments)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Biometric</span>
                  <span className="text-purple-400">{formatPercentage(bankingData.paymentProcessing.innovations.biometricPayments)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Blockchain</span>
                  <span className="text-cyan-400">{formatPercentage(bankingData.paymentProcessing.innovations.blockchainSettlement)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
              Regulatory Compliance Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatPercentage(bankingData.regulatoryCompliance.monitoring.transactionMonitoring)}</div>
                <div className="text-emerald-300 text-sm">Transaction Monitoring</div>
                <div className="text-gray-400 text-xs mt-1">Automated Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(bankingData.regulatoryCompliance.monitoring.auditReadiness)}</div>
                <div className="text-blue-300 text-sm">Audit Readiness</div>
                <div className="text-gray-400 text-xs mt-1">Compliance Score</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white text-sm font-medium">Regulatory Frameworks</h4>
              {bankingData.regulatoryCompliance.frameworks.map((framework, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium">{framework.regulation}</span>
                      <span className={`px-2 py-1 rounded text-xs ${framework.status === 'Compliant' ? 'text-green-400 bg-green-400/20' : 'text-red-400 bg-red-400/20'}`}>
                        {framework.status}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatPercentage(framework.complianceScore)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                    <div>Last Audit: {framework.lastAudit}</div>
                    <div>Next Review: {framework.nextReview}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Banking Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Banking & Financial Services Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {bankingData.bankingAlerts.map((alert, index) => (
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
                    <div className="text-slate-300">Region: {alert.region}</div>
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

        {/* Fintech Partnerships */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
            Fintech Innovation Intelligence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{formatPercentage(bankingData.fintech.innovations.aiChatbots)}</div>
                  <div className="text-cyan-300 text-sm">AI Chatbots</div>
                  <div className="text-gray-400 text-xs mt-1">Deployment Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{formatPercentage(bankingData.fintech.innovations.predictiveAnalytics)}</div>
                  <div className="text-purple-300 text-sm">Predictive Analytics</div>
                  <div className="text-gray-400 text-xs mt-1">Implementation</div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-white text-sm font-medium">Technology Innovations</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Real-time Fraud</span>
                    <span className="text-green-400">{formatPercentage(bankingData.fintech.innovations.realTimeFraud)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Biometric Auth</span>
                    <span className="text-blue-400">{formatPercentage(bankingData.fintech.innovations.biometricAuth)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Open Banking</span>
                    <span className="text-purple-400">{formatPercentage(bankingData.fintech.innovations.openBanking)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Robo Advisors</span>
                    <span className="text-orange-400">{formatPercentage(bankingData.fintech.innovations.roboAdvisors)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Blockchain KYC</span>
                    <span className="text-cyan-400">{formatPercentage(bankingData.fintech.innovations.blockchainKyc)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Quantum Encryption</span>
                    <span className="text-pink-400">{formatPercentage(bankingData.fintech.innovations.quantumEncryption)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-3 mb-4">
                <h4 className="text-white text-sm font-medium">Strategic Partnerships</h4>
                {bankingData.fintech.partnerships.map((partner, index) => (
                  <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                    <div>
                      <div className="text-white text-sm font-medium">{partner.partner}</div>
                      <div className="text-slate-400 text-xs">{partner.service} • {formatPercentage(partner.integration)} integrated</div>
                    </div>
                    <div className="text-right text-xs">
                      <div className="text-green-400">{formatCurrency(partner.revenue)}</div>
                      <div className="text-slate-300">Annual Revenue</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-sm font-medium">Technology Investments</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">AI/ML</span>
                    <span className="text-green-400">{formatCurrency(bankingData.fintech.investments.aiMl)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Cloud Infrastructure</span>
                    <span className="text-blue-400">{formatCurrency(bankingData.fintech.investments.cloudInfrastructure)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Cybersecurity</span>
                    <span className="text-red-400">{formatCurrency(bankingData.fintech.investments.cybersecurity)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Customer Experience</span>
                    <span className="text-purple-400">{formatCurrency(bankingData.fintech.investments.customerExperience)}</span>
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