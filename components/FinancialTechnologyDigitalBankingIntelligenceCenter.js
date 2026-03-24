// Financial Technology & Digital Banking Intelligence Center - Fintech & Banking Analytics
import { useState, useEffect } from 'react';
import { DollarSign, CreditCard, TrendingUp, Shield, Users, Globe, BarChart3, Lock, Zap, AlertTriangle, Activity, Banknote } from 'lucide-react';

export default function FinancialTechnologyDigitalBankingIntelligenceCenter() {
  const [fintechData, setFintechData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    fintechOverview: {
      digitalBanks: 45678,
      fintechPlatforms: 123456,
      transactions: 890123456,
      totalVolume: 2.8,
      activeUsers: 234567890,
      merchantPartners: 12345678,
      cryptocurrencyPairs: 5678,
      tradingVolume: 1.2,
      complianceScore: 96.4,
      fraudDetection: 99.7,
      uptimeReliability: 99.95,
      customerSatisfaction: 94.8,
      regulatoryCompliance: 98.2,
      dataPrivacy: 97.6,
      crossBorderPayments: 87.3,
      realTimeProcessing: 95.8,
      apiLatency: 45,
      securityIncidents: 0,
      carbonFootprint: 12.4,
      digitalAdoption: 89.7
    },
    digitalBanks: [
      {
        bankName: 'JPMorgan Chase Digital',
        bankId: 'JPM-DIGITAL-001',
        headquarters: 'New York, USA',
        type: 'TRADITIONAL DIGITAL',
        status: 'OPERATIONAL',
        customers: 50000000,
        assets: 3200.5,
        revenue: 125.8,
        services: 'Consumer, Business, Investment Banking',
        digitalChannels: 'Mobile App, Web Portal, API',
        geographicPresence: '100+ Countries',
        regulatoryLicenses: 'Fed, OCC, FDIC, SEC',
        complianceRating: 'A+',
        customerSatisfaction: 94.2,
        uptimeReliability: 99.98,
        transactionVolume: 156.7,
        mobileUsers: 45000000,
        apiCalls: 250000000,
        fraudRate: 0.003,
        securityRating: 'EXCELLENT',
        innovationScore: 92.4,
        esgRating: 'AA',
        marketCap: 412.5
      },
      {
        bankName: 'Revolut Digital Bank',
        bankId: 'REV-DIGITAL-002',
        headquarters: 'London, UK',
        type: 'DIGITAL NATIVE',
        status: 'OPERATIONAL',
        customers: 30000000,
        assets: 18.4,
        revenue: 1.8,
        services: 'Personal Banking, Business, Trading',
        digitalChannels: 'Mobile-First, Web, API',
        geographicPresence: '38 Countries',
        regulatoryLicenses: 'FCA, EBA, ECB',
        complianceRating: 'A',
        customerSatisfaction: 89.6,
        uptimeReliability: 99.92,
        transactionVolume: 78.3,
        mobileUsers: 28500000,
        apiCalls: 180000000,
        fraudRate: 0.008,
        securityRating: 'HIGH',
        innovationScore: 96.8,
        esgRating: 'A',
        marketCap: 33.0
      },
      {
        bankName: 'Goldman Sachs Marcus',
        bankId: 'GS-MARCUS-003',
        headquarters: 'New York, USA',
        type: 'DIGITAL CONSUMER',
        status: 'OPERATIONAL',
        customers: 8000000,
        assets: 110.2,
        revenue: 6.4,
        services: 'Savings, Personal Loans, Credit Cards',
        digitalChannels: 'Mobile App, Web Platform',
        geographicPresence: 'USA, UK, Germany',
        regulatoryLicenses: 'Fed, OCC, FDIC',
        complianceRating: 'A+',
        customerSatisfaction: 91.8,
        uptimeReliability: 99.96,
        transactionVolume: 24.1,
        mobileUsers: 6500000,
        apiCalls: 95000000,
        fraudRate: 0.002,
        securityRating: 'EXCELLENT',
        innovationScore: 88.7,
        esgRating: 'A+',
        marketCap: 156.3
      },
      {
        bankName: 'N26 Digital Bank',
        bankId: 'N26-DIGITAL-004',
        headquarters: 'Berlin, Germany',
        type: 'DIGITAL NATIVE',
        status: 'SCALING',
        customers: 8000000,
        assets: 4.2,
        revenue: 0.2,
        services: 'Current Account, Savings, Premium',
        digitalChannels: 'Mobile-Only, API',
        geographicPresence: '25 European Countries',
        regulatoryLicenses: 'BaFin, EBA, ECB',
        complianceRating: 'B+',
        customerSatisfaction: 87.4,
        uptimeReliability: 99.89,
        transactionVolume: 18.6,
        mobileUsers: 7800000,
        apiCalls: 120000000,
        fraudRate: 0.012,
        securityRating: 'HIGH',
        innovationScore: 94.2,
        esgRating: 'A-',
        marketCap: 3.5
      }
    ],
    fintechPlatforms: [
      {
        platformName: 'Stripe Payment Processing',
        platformId: 'STRIPE-PAY-001',
        headquarters: 'San Francisco, USA',
        category: 'PAYMENT PROCESSING',
        status: 'OPERATIONAL',
        valuation: 95.0,
        revenue: 12.0,
        merchants: 4000000,
        transactions: 890000000,
        volume: 817.4,
        countries: 46,
        currencies: 135,
        integrations: 'E-commerce, Marketplaces, SaaS',
        paymentMethods: 'Cards, Wallets, Bank Transfers',
        developersUsing: 2500000,
        apiUptime: 99.99,
        processingTime: '2.3s',
        fraudPreventionAccuracy: 99.5,
        complianceStandards: 'PCI DSS Level 1',
        customerSupport: '24/7',
        innovationIndex: 96.3,
        marketShare: 23.4,
        growthRate: 38.7
      },
      {
        platformName: 'Square Seller Platform',
        platformId: 'SQ-SELLER-002',
        headquarters: 'San Francisco, USA',
        category: 'POINT OF SALE',
        status: 'OPERATIONAL',
        valuation: 42.0,
        revenue: 17.7,
        merchants: 2000000,
        transactions: 456000000,
        volume: 188.3,
        countries: 4,
        integrations: 'Retail, Restaurant, Appointment',
        paymentMethods: 'Contactless, Chip, Mobile',
        hardwareUnits: 3500000,
        softwareSubscriptions: 650000,
        apiUptime: 99.97,
        processingTime: '1.8s',
        fraudPreventionAccuracy: 99.2,
        complianceStandards: 'PCI DSS, EMV',
        customerSupport: 'Business Hours',
        innovationIndex: 89.6,
        marketShare: 8.7,
        growthRate: 22.1
      },
      {
        platformName: 'PayPal Global Payments',
        platformId: 'PAYPAL-GLOBAL-003',
        headquarters: 'San Jose, USA',
        category: 'DIGITAL WALLET',
        status: 'OPERATIONAL',
        valuation: 63.0,
        revenue: 27.5,
        users: 435000000,
        transactions: 22300000000,
        volume: 1354.0,
        countries: 200,
        currencies: 100,
        integrations: 'E-commerce, P2P, Business',
        paymentMethods: 'Wallet, Cards, Bank Transfer',
        merchantAccounts: 34000000,
        apiUptime: 99.95,
        processingTime: '3.1s',
        fraudPreventionAccuracy: 99.1,
        complianceStandards: 'PCI DSS, AML, KYC',
        customerSupport: '24/7',
        innovationIndex: 84.2,
        marketShare: 42.1,
        growthRate: 15.8
      }
    ],
    cryptocurrency: [
      {
        exchangeName: 'Coinbase Pro Exchange',
        exchangeId: 'COINBASE-PRO-001',
        headquarters: 'San Francisco, USA',
        status: 'OPERATIONAL',
        tradingPairs: 245,
        dailyVolume: 8.4,
        users: 108000000,
        assets: 240,
        countries: 100,
        regulatoryStatus: 'LICENSED',
        securityRating: 'INSTITUTIONAL',
        insuranceCoverage: 320.0,
        custodyAssets: 278.0,
        liquidityScore: 95.8,
        uptimeReliability: 99.94,
        tradingFees: '0.50%',
        withdrawalFees: 'NETWORK',
        kycCompliance: 'TIER 3',
        institutionalClients: 245000,
        retailClients: 107755000,
        apiLatency: 12,
        orderBookDepth: 94.6,
        marketMaking: 'ENABLED'
      },
      {
        exchangeName: 'Binance Global Exchange',
        exchangeId: 'BINANCE-GLOBAL-002',
        headquarters: 'Cayman Islands',
        status: 'OPERATIONAL',
        tradingPairs: 1400,
        dailyVolume: 24.7,
        users: 170000000,
        assets: 500,
        countries: 180,
        regulatoryStatus: 'MULTI-JURISDICTION',
        securityRating: 'HIGH',
        insuranceCoverage: 1000.0,
        custodyAssets: 65.0,
        liquidityScore: 98.2,
        uptimeReliability: 99.91,
        tradingFees: '0.10%',
        withdrawalFees: 'DYNAMIC',
        kycCompliance: 'TIER 2',
        institutionalClients: 89000,
        retailClients: 169911000,
        apiLatency: 8,
        orderBookDepth: 97.3,
        marketMaking: 'ENABLED'
      },
      {
        exchangeName: 'Kraken Digital Assets',
        exchangeId: 'KRAKEN-ASSETS-003',
        headquarters: 'San Francisco, USA',
        status: 'OPERATIONAL',
        tradingPairs: 380,
        dailyVolume: 3.2,
        users: 9000000,
        assets: 190,
        countries: 190,
        regulatoryStatus: 'BANK CHARTER',
        securityRating: 'INSTITUTIONAL',
        insuranceCoverage: 250.0,
        custodyAssets: 45.0,
        liquidityScore: 89.4,
        uptimeReliability: 99.97,
        tradingFees: '0.26%',
        withdrawalFees: 'FIXED',
        kycCompliance: 'TIER 3',
        institutionalClients: 125000,
        retailClients: 8875000,
        apiLatency: 15,
        orderBookDepth: 91.8,
        marketMaking: 'ENABLED'
      }
    ],
    riskManagement: [
      {
        riskCategory: 'Fraud Detection AI',
        systemId: 'FRAUD-AI-001',
        provider: 'Featurespace ARIC',
        deploymentScope: 'ENTERPRISE-WIDE',
        status: 'OPERATIONAL',
        accuracy: 99.7,
        falsePositiveRate: 0.8,
        detectionSpeed: '50ms',
        transactionsAnalyzed: 25000000000,
        fraudPrevented: 2.8,
        adaptiveLearning: 'REAL-TIME',
        riskModels: 245,
        behavioralPatterns: 1567890,
        alertsGenerated: 125000,
        investigationsTriggered: 2400,
        regulatoryReporting: 'AUTOMATED',
        customerImpact: 'MINIMAL',
        costSavings: 145.6,
        roiAchieved: '1250%',
        maintenanceRequired: 'LOW'
      },
      {
        riskCategory: 'AML Compliance Monitoring',
        systemId: 'AML-MONITOR-002',
        provider: 'NICE Actimize',
        deploymentScope: 'GLOBAL',
        status: 'OPERATIONAL',
        accuracy: 96.4,
        falsePositiveRate: 3.2,
        investigationTime: '4.5 days',
        transactionsMonitored: 18000000000,
        alertsGenerated: 450000,
        sarsFiled: 12400,
        regulatoryCompliance: '100%',
        jurisdictions: 156,
        watchlistScreening: 'REAL-TIME',
        customerRiskRating: 'DYNAMIC',
        riskScenarios: 890,
        investigationWorkflow: 'AUTOMATED',
        regulatorReporting: 'REAL-TIME',
        auditTrail: 'COMPLETE',
        costOfCompliance: 89.3
      },
      {
        riskCategory: 'Cyber Security Operations',
        systemId: 'CYBERSEC-OPS-003',
        provider: 'CrowdStrike Falcon',
        deploymentScope: 'INFRASTRUCTURE',
        status: 'OPERATIONAL',
        threatDetectionRate: 99.2,
        responseTime: '2.3 minutes',
        endpointsProtected: 125000,
        securityIncidents: 45,
        breachesBlocked: 2456,
        malwareDetection: 99.8,
        zeroTrustImplementation: '95%',
        vulnerabilityScore: 2.1,
        patchCompliance: 97.8,
        securityTraining: '100%',
        incidentResponse: 'AUTOMATED',
        threatIntelligence: 'REAL-TIME',
        securityPosture: 'EXCELLENT',
        regulatoryCompliance: '100%',
        businessImpact: 'ZERO'
      }
    ],
    regulatoryCompliance: [
      {
        regulation: 'PCI DSS Level 1',
        regulationId: 'PCI-DSS-L1-001',
        authority: 'PCI Security Standards Council',
        scope: 'PAYMENT PROCESSING',
        status: 'COMPLIANT',
        validUntil: '2026-12-31',
        lastAssessment: '2026-01-15',
        nextAssessment: '2027-01-15',
        requirements: 12,
        controlsImplemented: 300,
        findings: 'NONE',
        assessor: 'Qualified Security Assessor',
        attestationLevel: 'LEVEL 1',
        selfAssessment: 'NO',
        penetrationTesting: 'QUARTERLY',
        vulnerabilityScanning: 'QUARTERLY',
        riskLevel: 'LOW',
        automationLevel: 89.4,
        costOfCompliance: 2.4
      },
      {
        regulation: 'GDPR Privacy Regulation',
        regulationId: 'GDPR-PRIVACY-002',
        authority: 'European Data Protection Board',
        scope: 'DATA PROTECTION',
        status: 'COMPLIANT',
        validUntil: 'ONGOING',
        lastAssessment: '2026-02-28',
        nextAssessment: '2026-08-31',
        dataSubjects: 125000000,
        dataProcessingActivities: 1245,
        privacyRequests: 24500,
        dataBreaches: 0,
        dpoAssigned: 'YES',
        privacyByDesign: 'IMPLEMENTED',
        dataRetentionPolicies: 'DEFINED',
        consentManagement: 'AUTOMATED',
        riskLevel: 'LOW',
        automationLevel: 94.2,
        penalties: 0
      },
      {
        regulation: 'Basel III Capital Requirements',
        regulationId: 'BASEL-III-003',
        authority: 'Basel Committee on Banking Supervision',
        scope: 'CAPITAL ADEQUACY',
        status: 'COMPLIANT',
        validUntil: 'ONGOING',
        lastAssessment: '2025-12-31',
        nextAssessment: '2026-12-31',
        capitalAdequacyRatio: 14.2,
        tier1CapitalRatio: 12.8,
        leverageRatio: 5.4,
        liquidityCoverageRatio: 125.6,
        netStableFundingRatio: 118.4,
        riskWeightedAssets: 2456.7,
        stressTesting: 'ANNUAL',
        regulatoryReporting: 'QUARTERLY',
        riskLevel: 'LOW',
        bufferRequirements: 'MET',
        systemicImportance: 'MODERATE'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        transactions: 125000000,
        volume: 45.8,
        uptime: 99.97,
        fraudRate: 0.003,
        apiLatency: 45,
        activeUsers: 12500000,
        errors: 125,
        incidents: 0
      },
      {
        period: 'Last 24 Hours',
        transactions: 2800000000,
        volume: 1024.5,
        uptime: 99.94,
        fraudRate: 0.005,
        apiLatency: 48,
        activeUsers: 89000000,
        errors: 2840,
        incidents: 2
      },
      {
        period: 'Last 7 Days',
        transactions: 18500000000,
        volume: 6890.2,
        uptime: 99.91,
        fraudRate: 0.007,
        apiLatency: 52,
        activeUsers: 234000000,
        errors: 18500,
        incidents: 8
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFintechData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        fintechOverview: {
          ...prev.fintechOverview,
          fraudDetection: Math.max(99.0, Math.min(99.9, prev.fintechOverview.fraudDetection + (Math.random() - 0.5) * 0.1)),
          uptimeReliability: Math.max(99.0, Math.min(99.99, prev.fintechOverview.uptimeReliability + (Math.random() - 0.5) * 0.01))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'SCALING': return 'text-blue-400 bg-blue-400/20';
      case 'COMPLIANT': return 'text-green-400 bg-green-400/20';
      case 'LICENSED': return 'text-green-400 bg-green-400/20';
      case 'MULTI-JURISDICTION': return 'text-purple-400 bg-purple-400/20';
      case 'BANK CHARTER': return 'text-cyan-400 bg-cyan-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount) => `$${amount.toFixed(1)}B`;
  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatMilliseconds = (ms) => `${ms}ms`;

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Financial Technology & Digital Banking Intelligence Center</h1>
              <p className="text-slate-300">Fintech & banking analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-slate-400">{fintechData.currentTime}</div>
            <div className="text-slate-300">Financial Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Fintech Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Banknote className="w-5 h-5 text-green-400 mr-2" />
                Banks
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(fintechData.fintechOverview.digitalBanks)}</div>
            <div className="text-green-300 text-sm">{formatNumber(fintechData.fintechOverview.fintechPlatforms)} Platforms</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                Volume
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatCurrency(fintechData.fintechOverview.totalVolume * 1000)}</div>
            <div className="text-blue-300 text-sm">{formatNumber(fintechData.fintechOverview.transactions)} Transactions</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Users
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(fintechData.fintechOverview.activeUsers)}</div>
            <div className="text-purple-300 text-sm">{formatNumber(fintechData.fintechOverview.merchantPartners)} Merchants</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-cyan-400 mr-2" />
                Security
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(fintechData.fintechOverview.fraudDetection)}</div>
            <div className="text-cyan-300 text-sm">Fraud Detection</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-yellow-400 mr-2" />
                Uptime
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(fintechData.fintechOverview.uptimeReliability)}</div>
            <div className="text-yellow-300 text-sm">Reliability</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-orange-400 mr-2" />
                Latency
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{fintechData.fintechOverview.apiLatency}ms</div>
            <div className="text-orange-300 text-sm">API Response</div>
          </div>
        </div>

        {/* Digital Banks & Fintech Platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Banknote className="w-5 h-5 text-green-400 mr-2" />
              Digital Banks
            </h3>
            <div className="space-y-4">
              {fintechData.digitalBanks.map((bank, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{bank.bankName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(bank.status)}`}>
                        {bank.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{bank.headquarters}</div>
                    <div className="text-blue-400">{bank.type}</div>
                    <div className="text-green-400">{bank.complianceRating}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Customers: {formatNumber(bank.customers)}</div>
                    <div className="text-purple-400">Assets: {formatCurrency(bank.assets)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Customer Satisfaction</span>
                      <span>{formatPercentage(bank.customerSatisfaction)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-green-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${bank.customerSatisfaction}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Uptime: {formatPercentage(bank.uptimeReliability)}</div>
                    <div className="text-indigo-400">Revenue: {formatCurrency(bank.revenue)}</div>
                    <div className="text-cyan-400">Volume: {formatCurrency(bank.transactionVolume)}T/day</div>
                    <div className="text-green-400">Mobile Users: {formatNumber(bank.mobileUsers)}</div>
                    <div className="text-blue-400">Security: {bank.securityRating}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CreditCard className="w-5 h-5 text-blue-400 mr-2" />
              Fintech Platforms
            </h3>
            <div className="space-y-4">
              {fintechData.fintechPlatforms.map((platform, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{platform.platformName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(platform.status)}`}>
                        {platform.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{platform.headquarters}</div>
                    <div className="text-blue-400">{platform.category}</div>
                    <div className="text-green-400">Val: {formatCurrency(platform.valuation)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">
                      {platform.merchants ? `Merchants: ${formatNumber(platform.merchants)}` : `Users: ${formatNumber(platform.users)}`}
                    </div>
                    <div className="text-purple-400">Volume: {formatCurrency(platform.volume)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>API Uptime</span>
                      <span>{formatPercentage(platform.apiUptime)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-blue-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${platform.apiUptime}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Processing: {platform.processingTime}</div>
                    <div className="text-indigo-400">Revenue: {formatCurrency(platform.revenue)}</div>
                    <div className="text-cyan-400">Fraud Prevention: {formatPercentage(platform.fraudPreventionAccuracy)}</div>
                    <div className="text-green-400">Market Share: {formatPercentage(platform.marketShare)}</div>
                    <div className="text-blue-400">Growth: {formatPercentage(platform.growthRate)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cryptocurrency Exchanges */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Globe className="w-5 h-5 text-yellow-400 mr-2" />
            Cryptocurrency Exchanges
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {fintechData.cryptocurrency.map((exchange, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{exchange.exchangeName}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(exchange.status)}`}>
                      {exchange.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">{exchange.headquarters}</div>
                  <div className="text-blue-400">{exchange.regulatoryStatus}</div>
                  <div className="text-green-400">{exchange.securityRating}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-yellow-400">Users: {formatNumber(exchange.users)}</div>
                  <div className="text-purple-400">Volume: {formatCurrency(exchange.dailyVolume)}/day</div>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Uptime Reliability</span>
                    <span>{formatPercentage(exchange.uptimeReliability)}</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-1">
                    <div 
                      className="bg-yellow-400 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${exchange.uptimeReliability}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-slate-300">Trading Pairs: {exchange.tradingPairs}</div>
                  <div className="text-indigo-400">Assets: {exchange.assets}</div>
                  <div className="text-cyan-400">Liquidity: {formatPercentage(exchange.liquidityScore)}</div>
                  <div className="text-green-400">API Latency: {formatMilliseconds(exchange.apiLatency)}</div>
                  <div className="text-blue-400">Countries: {exchange.countries}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Management & Regulatory Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              Risk Management Systems
            </h3>
            <div className="space-y-4">
              {fintechData.riskManagement.map((risk, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{risk.riskCategory}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(risk.status)}`}>
                        {risk.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{risk.provider}</div>
                    <div className="text-blue-400">{risk.deploymentScope}</div>
                    <div className="text-green-400">{risk.systemId}</div>
                  </div>
                  
                  {risk.accuracy && (
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Accuracy</span>
                        <span>{formatPercentage(risk.accuracy)}</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-1">
                        <div 
                          className="bg-red-400 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${risk.accuracy}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {risk.detectionSpeed && `Detection: ${risk.detectionSpeed}`}
                      {risk.responseTime && `Response: ${risk.responseTime}`}
                      {risk.investigationTime && `Investigation: ${risk.investigationTime}`}
                    </div>
                    <div className="text-indigo-400">
                      {risk.fraudPrevented && `Prevented: ${formatCurrency(risk.fraudPrevented)}`}
                      {risk.alertsGenerated && `Alerts: ${formatNumber(risk.alertsGenerated)}`}
                      {risk.securityIncidents && `Incidents: ${risk.securityIncidents}`}
                    </div>
                    <div className="text-cyan-400">
                      {risk.costSavings && `Savings: ${formatCurrency(risk.costSavings)}`}
                      {risk.costOfCompliance && `Compliance: ${formatCurrency(risk.costOfCompliance)}`}
                    </div>
                    <div className="text-green-400">
                      {risk.roiAchieved && `ROI: ${risk.roiAchieved}`}
                      {risk.maintenanceRequired && `Maintenance: ${risk.maintenanceRequired}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Lock className="w-5 h-5 text-purple-400 mr-2" />
              Regulatory Compliance
            </h3>
            <div className="space-y-4">
              {fintechData.regulatoryCompliance.map((compliance, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{compliance.regulation}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(compliance.status)}`}>
                        {compliance.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{compliance.authority}</div>
                    <div className="text-blue-400">{compliance.scope}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Valid: {compliance.validUntil}</div>
                    <div className="text-purple-400">Next: {compliance.nextAssessment}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {compliance.requirements && `Requirements: ${compliance.requirements}`}
                      {compliance.dataSubjects && `Data Subjects: ${formatNumber(compliance.dataSubjects)}`}
                      {compliance.capitalAdequacyRatio && `CAR: ${formatPercentage(compliance.capitalAdequacyRatio)}`}
                    </div>
                    <div className="text-indigo-400">
                      {compliance.controlsImplemented && `Controls: ${compliance.controlsImplemented}`}
                      {compliance.dataProcessingActivities && `Activities: ${compliance.dataProcessingActivities}`}
                      {compliance.tier1CapitalRatio && `Tier 1: ${formatPercentage(compliance.tier1CapitalRatio)}`}
                    </div>
                    <div className="text-cyan-400">Findings: {compliance.findings}</div>
                    <div className="text-green-400">Risk: {compliance.riskLevel}</div>
                    <div className="text-blue-400">Automation: {formatPercentage(compliance.automationLevel)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-slate-400 mr-2" />
            Financial Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {fintechData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Transactions: {formatNumber(metrics.transactions)}</div>
                  <div className="text-green-400">Volume: {formatCurrency(metrics.volume)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Uptime: {formatPercentage(metrics.uptime)}</div>
                  <div className="text-yellow-400">Users: {formatNumber(metrics.activeUsers)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Fraud Rate: {formatPercentage(metrics.fraudRate)}</div>
                  <div className="text-orange-400">Latency: {formatMilliseconds(metrics.apiLatency)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Errors: {formatNumber(metrics.errors)}</div>
                  <div className="text-pink-400">Incidents: {metrics.incidents}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}