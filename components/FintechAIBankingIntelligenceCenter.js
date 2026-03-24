import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const FintechAIBankingIntelligenceCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [financePhase, setFinancePhase] = useState('AI_BANKING_DEPLOYMENT');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate fintech phase changes
      const phases = ['AI_BANKING_DEPLOYMENT', 'NEOBANK_EXPANSION', 'BLOCKCHAIN_INTEGRATION', 'DEFI_MAINSTREAM', 'AGENTIC_PAYMENTS'];
      setFinancePhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Fintech Market Data
  const fintechSegments = [
    { segment: 'Digital Payments', market_b: 134.7, growth_rate: 24.8, ai_integration: 89, user_adoption: 87 },
    { segment: 'Digital Banking & Neobanks', market_b: 78.9, growth_rate: 32.4, ai_integration: 94, user_adoption: 76 },
    { segment: 'AI-Powered Financial Services', market_b: 36.6, growth_rate: 22.0, ai_integration: 98, user_adoption: 68 },
    { segment: 'Blockchain & Cryptocurrency', market_b: 67.8, growth_rate: 45.7, ai_integration: 67, user_adoption: 58 },
    { segment: 'RegTech & Compliance', market_b: 23.4, growth_rate: 28.9, ai_integration: 92, user_adoption: 84 },
    { segment: 'InsurTech', market_b: 34.6, growth_rate: 18.6, ai_integration: 78, user_adoption: 72 },
    { segment: 'WealthTech & Robo-Advisors', market_b: 28.7, growth_rate: 26.3, ai_integration: 96, user_adoption: 69 },
    { segment: 'BNPL & Lending', market_b: 45.8, growth_rate: 34.2, ai_integration: 84, user_adoption: 91 }
  ];

  const fintechMarketEvolution = [
    { year: '2024', total_b: 323.4, investment_b: 95.6, digital_payments_t: 8.9, ai_fintech_b: 24.8 },
    { year: '2025', total_b: 394.9, investment_b: 116.0, digital_payments_t: 9.7, ai_fintech_b: 30.2 },
    { year: '2026', total_b: 460.8, investment_b: 137.8, digital_payments_t: 10.1, ai_fintech_b: 36.6 },
    { year: '2027E', total_b: 567.9, investment_b: 168.4, digital_payments_t: 11.2, ai_fintech_b: 45.8 },
    { year: '2028E', total_b: 689.4, investment_b: 203.7, digital_payments_t: 12.8, ai_fintech_b: 58.9 },
    { year: '2030E', total_b: 1045.6, investment_b: 312.8, digital_payments_t: 16.7, ai_fintech_b: 89.3 }
  ];

  const aiBankingApplications = [
    { application: 'Fraud Detection & Prevention', accuracy: 97.8, deployment_rate: 89, cost_reduction: 45.7, banks_using: 2340 },
    { application: 'Credit Risk Assessment', accuracy: 94.6, deployment_rate: 78, cost_reduction: 38.9, banks_using: 1890 },
    { application: 'Algorithmic Trading', accuracy: 92.4, deployment_rate: 67, cost_reduction: 67.8, banks_using: 567 },
    { application: 'Customer Service Chatbots', accuracy: 89.7, deployment_rate: 94, cost_reduction: 52.3, banks_using: 3456 },
    { application: 'Robo-Advisory Services', accuracy: 91.2, deployment_rate: 72, cost_reduction: 78.9, banks_using: 1234 },
    { application: 'Anti-Money Laundering (AML)', accuracy: 96.3, deployment_rate: 85, cost_reduction: 34.8, banks_using: 2789 }
  ];

  const leadingNeobanks = [
    { neobank: 'Revolut', users_m: 45.7, valuation_b: 45.0, countries: 38, ai_features: 92 },
    { neobank: 'Nubank', users_m: 94.2, valuation_b: 30.0, countries: 3, ai_features: 87 },
    { neobank: 'Chime', users_m: 23.8, valuation_b: 25.0, countries: 1, ai_features: 84 },
    { neobank: 'N26', users_m: 9.7, valuation_b: 9.0, countries: 27, ai_features: 89 },
    { neobank: 'Starling Bank', users_m: 4.2, valuation_b: 2.5, countries: 2, ai_features: 94 },
    { neobank: 'Monzo', users_m: 8.9, valuation_b: 4.2, countries: 2, ai_features: 91 },
    { neobank: 'SoFi', users_m: 7.8, valuation_b: 8.7, countries: 1, ai_features: 86 }
  ];

  const blockchainAdoption = [
    { application: 'Cross-Border Payments', adoption_rate: 67.8, cost_reduction: 85, transaction_time_reduction: 95, volume_b: 234.6 },
    { application: 'Trade Finance', adoption_rate: 45.2, cost_reduction: 67, transaction_time_reduction: 78, volume_b: 89.4 },
    { application: 'Digital Asset Custody', adoption_rate: 89.7, cost_reduction: 45, transaction_time_reduction: 23, volume_b: 567.8 },
    { application: 'Smart Contracts', adoption_rate: 56.9, cost_reduction: 78, transaction_time_reduction: 89, volume_b: 123.4 },
    { application: 'Central Bank Digital Currencies', adoption_rate: 34.8, cost_reduction: 56, transaction_time_reduction: 92, volume_b: 345.7 },
    { application: 'Tokenization of Assets', adoption_rate: 23.6, cost_reduction: 89, transaction_time_reduction: 67, volume_b: 78.9 }
  ];

  const digitalPaymentTrends = [
    { payment_method: 'Mobile Wallets', market_share: 48.7, growth_rate: 23.4, security_score: 94, user_satisfaction: 89 },
    { payment_method: 'Contactless Cards', market_share: 32.8, growth_rate: 12.6, security_score: 97, user_satisfaction: 92 },
    { payment_method: 'QR Code Payments', market_share: 18.9, growth_rate: 45.8, security_score: 91, user_satisfaction: 87 },
    { payment_method: 'Cryptocurrency Payments', market_share: 7.4, growth_rate: 89.4, security_score: 85, user_satisfaction: 76 },
    { payment_method: 'BNPL Services', market_share: 15.6, growth_rate: 67.9, security_score: 89, user_satisfaction: 94 },
    { payment_method: 'Real-Time Bank Transfers', market_share: 24.3, growth_rate: 34.7, security_score: 98, user_satisfaction: 91 }
  ];

  const fintechMetrics = {
    global_fintech_market_b: 460.8,
    fintech_investment_2026_b: 137.8,
    digital_payments_market_t: 10.1,
    ai_fintech_market_b: 36.6,
    neobank_users_global_m: 267.8,
    mobile_banking_users_b: 3.2,
    blockchain_transaction_volume_t: 1.4,
    defi_total_value_locked_b: 245.7,
    fintech_unicorns_count: 189,
    digital_payment_penetration: 87.4,
    ai_banking_adoption_rate: 78.9,
    cryptocurrency_users_m: 520.6,
    regtech_compliance_automation: 84.7,
    cross_border_payment_reduction_cost: 85.3
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'AI_BANKING_DEPLOYMENT': return 'text-blue-400';
      case 'NEOBANK_EXPANSION': return 'text-purple-400';
      case 'BLOCKCHAIN_INTEGRATION': return 'text-orange-400';
      case 'DEFI_MAINSTREAM': return 'text-green-400';
      case 'AGENTIC_PAYMENTS': return 'text-cyan-400';
      default: return 'text-white';
    }
  };

  const getNeobankColor = (bank) => {
    const colors = {
      'Revolut': 'text-blue-400',
      'Nubank': 'text-purple-400',
      'Chime': 'text-green-400',
      'N26': 'text-orange-400',
      'Starling Bank': 'text-cyan-400',
      'Monzo': 'text-yellow-400',
      'SoFi': 'text-red-400'
    };
    return colors[bank] || 'text-white';
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-green-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-green-400 mb-2">💳🤖 FINTECH & AI BANKING INTELLIGENCE CENTER</h1>
            <p className="text-green-300">2026 Digital Banking Revolution | AI Financial Services | Neobanks | Blockchain | DeFi | Digital Payments | Financial Innovation</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(financePhase)}`}>{financePhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Fintech Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">💰 MARKET SIZE</h3>
          <div className="text-2xl text-cyan-400">${fintechMetrics.global_fintech_market_b}B</div>
          <div className="text-sm text-gray-400">Global Fintech Market 2026</div>
        </div>
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">🏦 AI BANKING</h3>
          <div className="text-2xl text-purple-400">{fintechMetrics.ai_banking_adoption_rate}%</div>
          <div className="text-sm text-gray-400">AI Banking Adoption Rate</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">📱 PAYMENTS</h3>
          <div className="text-2xl text-yellow-400">${fintechMetrics.digital_payments_market_t}T</div>
          <div className="text-sm text-gray-400">Digital Payments Market</div>
        </div>
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">👥 USERS</h3>
          <div className="text-2xl text-green-400">{fintechMetrics.mobile_banking_users_b}B</div>
          <div className="text-sm text-gray-400">Mobile Banking Users</div>
        </div>
      </div>

      {/* Main Fintech Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Fintech Market Segments */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🏦 FINTECH MARKET SEGMENTS 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fintechSegments}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="segment" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #06b6d4', color: '#06b6d4' }}
                formatter={(value, name) => [`${value}${name === 'market_b' ? 'B' : '%'}`, name]}
              />
              <Bar dataKey="market_b" fill="#06b6d4" name="Market Size ($B)" />
              <Bar dataKey="growth_rate" fill="#22c55e" name="Growth Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Fintech Market Evolution */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📈 FINTECH MARKET EVOLUTION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={fintechMarketEvolution}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="total_b" fill="#22c55e" name="Total Market ($B)" />
              <Line type="monotone" dataKey="investment_b" stroke="#0ea5e9" strokeWidth={3} name="Investment ($B)" />
              <Line type="monotone" dataKey="digital_payments_t" stroke="#8b5cf6" strokeWidth={2} name="Digital Payments ($T)" />
              <Line type="monotone" dataKey="ai_fintech_b" stroke="#f59e0b" strokeWidth={2} name="AI Fintech ($B)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Banking Applications & Leading Neobanks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🤖 AI BANKING APPLICATIONS PERFORMANCE</h2>
          <div className="space-y-3">
            {aiBankingApplications.map((app, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-sm">{app.application}</span>
                  <span className={getStatusColor(app.accuracy)}>{app.accuracy}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Deployment</div>
                    <div className="text-cyan-400">{app.deployment_rate}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cost Reduction</div>
                    <div className="text-green-400">{app.cost_reduction}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Banks Using</div>
                    <div className="text-purple-400">{app.banks_using}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leading Neobanks */}
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🏛️ LEADING NEOBANKS 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={leadingNeobanks}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="users_m" tick={{ fill: '#fff' }} name="Users (M)" />
              <YAxis dataKey="valuation_b" tick={{ fill: '#fff' }} name="Valuation ($B)" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #8b5cf6', color: '#8b5cf6' }}
                formatter={(value, name) => [`${value}${name === 'users_m' ? 'M' : name === 'valuation_b' ? 'B' : ''}`, name]}
                labelFormatter={(label) => `Bank: ${leadingNeobanks.find(item => item.users_m === label)?.neobank || ''}`}
              />
              <Scatter dataKey="ai_features" fill="#8b5cf6" name="AI Features Score" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Blockchain Adoption & Digital Payment Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">⛓️ BLOCKCHAIN ADOPTION IN FINANCE</h2>
          <div className="space-y-3">
            {blockchainAdoption.map((blockchain, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-orange-400 font-bold text-sm">{blockchain.application}</span>
                  <span className="text-green-400">${blockchain.volume_b}B Volume</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Adoption</div>
                    <div className="text-cyan-400">{blockchain.adoption_rate}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cost Reduction</div>
                    <div className="text-green-400">{blockchain.cost_reduction}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Time Reduction</div>
                    <div className="text-yellow-400">{blockchain.transaction_time_reduction}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">💳 DIGITAL PAYMENT METHOD TRENDS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={digitalPaymentTrends}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="payment_method" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #ef4444', color: '#ef4444' }} />
              <Area type="monotone" dataKey="market_share" stackId="1" stroke="#ef4444" fill="#ef444433" name="Market Share %" />
              <Line type="monotone" dataKey="growth_rate" stroke="#22c55e" strokeWidth={3} name="Growth Rate %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Advanced Fintech Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-3">🚀 INVESTMENT</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>2026 Investment</span>
              <span className="text-green-400">${fintechMetrics.fintech_investment_2026_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Fintech Unicorns</span>
              <span className="text-cyan-400">{fintechMetrics.fintech_unicorns_count}</span>
            </div>
            <div className="flex justify-between">
              <span>AI Fintech Market</span>
              <span className="text-yellow-400">${fintechMetrics.ai_fintech_market_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Digital Payment Penetration</span>
              <span className="text-purple-400">{fintechMetrics.digital_payment_penetration}%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">🌐 BLOCKCHAIN & CRYPTO</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Cryptocurrency Users</span>
              <span className="text-cyan-400">{fintechMetrics.cryptocurrency_users_m}M</span>
            </div>
            <div className="flex justify-between">
              <span>DeFi Total Value Locked</span>
              <span className="text-green-400">${fintechMetrics.defi_total_value_locked_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Blockchain Tx Volume</span>
              <span className="text-yellow-400">${fintechMetrics.blockchain_transaction_volume_t}T</span>
            </div>
            <div className="flex justify-between">
              <span>Cross-Border Cost Reduction</span>
              <span className="text-purple-400">{fintechMetrics.cross_border_payment_reduction_cost}%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">🏛️ NEOBANKS & AI</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Neobank Users Global</span>
              <span className="text-green-400">{fintechMetrics.neobank_users_global_m}M</span>
            </div>
            <div className="flex justify-between">
              <span>Mobile Banking Users</span>
              <span className="text-cyan-400">{fintechMetrics.mobile_banking_users_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>RegTech Automation</span>
              <span className="text-yellow-400">{fintechMetrics.regtech_compliance_automation}%</span>
            </div>
            <div className="flex justify-between">
              <span>AI Banking Adoption</span>
              <span className="text-purple-400">{fintechMetrics.ai_banking_adoption_rate}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 FINTECH & AI BANKING INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">${fintechMetrics.global_fintech_market_b}B</div>
            <div className="text-gray-400">Global Fintech Market</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">{fintechMetrics.ai_banking_adoption_rate}%</div>
            <div className="text-gray-400">AI Banking Adoption</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">${fintechMetrics.digital_payments_market_t}T</div>
            <div className="text-gray-400">Digital Payments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{fintechMetrics.cryptocurrency_users_m}M</div>
            <div className="text-gray-400">Crypto Users</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-green-500 text-center text-gray-400">
        <p>💳 2026 Fintech Command Center | AI Banking | Digital Payments | Neobanks | Blockchain | DeFi | Financial Innovation</p>
        <p className="text-green-400">Research Sources: Fortune Business Insights, Mordor Intelligence, BDO, QED Investors, Innowise, M2P Fintech</p>
      </div>
    </div>
  );
};

export default FintechAIBankingIntelligenceCenter;