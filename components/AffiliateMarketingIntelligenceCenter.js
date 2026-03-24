// Affiliate Marketing Intelligence Center - Partner Analytics, Commission Tracking & Performance Monitoring
import { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Users, Target, Award, BarChart3, LinkIcon, Percent, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

export default function AffiliateMarketingIntelligenceCenter() {
  const [affiliateData, setAffiliateData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    programOverview: {
      totalAffiliates: 2847,
      activeAffiliates: 1456,
      newAffiliates: 156, // this month
      totalCommissions: 567890,
      pendingCommissions: 89012,
      avgCommissionRate: 12.5,
      totalRevenue: 2345678,
      affiliateRevenue: 1678901,
      avgOrderValue: 156.78,
      conversionRate: 4.2,
      clickThroughRate: 8.9,
      cookieDuration: 30,
      totalClicks: 2345678,
      totalConversions: 98765,
      networkFees: 45678,
      activeCampaigns: 34,
      topPerformingNiche: 'Technology',
      monthlyGrowth: 23.4,
      customerLifetimeValue: 278.90
    },
    topAffiliates: [
      {
        id: 'AFF001',
        name: 'TechReview Pro',
        handle: '@techreviewpro',
        type: 'Content Creator',
        tier: 'Diamond',
        joinDate: '2024-08-15',
        totalEarnings: 89012,
        monthlyEarnings: 12456,
        commissionRate: 15.0,
        conversions: 567,
        clicks: 12345,
        conversionRate: 4.6,
        avgOrderValue: 189.45,
        status: 'ACTIVE',
        performanceScore: 94.7,
        reliability: 96.8,
        trafficQuality: 92.3,
        topProducts: ['AI Marketing Suite', 'Analytics Pro', 'Automation Tools'],
        trafficSources: ['Blog (45%)', 'YouTube (35%)', 'Social Media (20%)'],
        demographics: '25-44 Tech Professionals',
        paymentMethod: 'Bank Transfer',
        lastActivity: '2 hours ago',
        fraudRisk: 'LOW'
      },
      {
        id: 'AFF002',
        name: 'Digital Marketing Hub',
        handle: '@digitalmhub',
        type: 'Website',
        tier: 'Platinum',
        joinDate: '2024-09-22',
        totalEarnings: 67890,
        monthlyEarnings: 9876,
        commissionRate: 12.0,
        conversions: 423,
        clicks: 8901,
        conversionRate: 4.8,
        avgOrderValue: 167.82,
        status: 'ACTIVE',
        performanceScore: 89.4,
        reliability: 94.2,
        trafficQuality: 87.6,
        topProducts: ['Email Marketing Pro', 'SEO Tools', 'Content Planner'],
        trafficSources: ['Organic Search (60%)', 'Direct (25%)', 'Referral (15%)'],
        demographics: '30-50 Business Owners',
        paymentMethod: 'PayPal',
        lastActivity: '1 hour ago',
        fraudRisk: 'LOW'
      },
      {
        id: 'AFF003',
        name: 'Sarah Johnson',
        handle: '@sarahjmarketing',
        type: 'Influencer',
        tier: 'Gold',
        joinDate: '2025-01-10',
        totalEarnings: 45678,
        monthlyEarnings: 7890,
        commissionRate: 10.0,
        conversions: 289,
        clicks: 6789,
        conversionRate: 4.3,
        avgOrderValue: 178.90,
        status: 'ACTIVE',
        performanceScore: 86.9,
        reliability: 91.7,
        trafficQuality: 84.2,
        topProducts: ['Social Media Suite', 'Influencer Tools', 'Content Creator'],
        trafficSources: ['Instagram (50%)', 'TikTok (30%)', 'Email List (20%)'],
        demographics: '18-35 Content Creators',
        paymentMethod: 'Stripe',
        lastActivity: '30 minutes ago',
        fraudRisk: 'LOW'
      },
      {
        id: 'AFF004',
        name: 'Business Growth Network',
        handle: '@bizgrowthnet',
        type: 'Network',
        tier: 'Silver',
        joinDate: '2025-02-28',
        totalEarnings: 34567,
        monthlyEarnings: 5432,
        commissionRate: 8.0,
        conversions: 234,
        clicks: 4567,
        conversionRate: 5.1,
        avgOrderValue: 145.67,
        status: 'REVIEW',
        performanceScore: 78.3,
        reliability: 82.4,
        trafficQuality: 79.8,
        topProducts: ['Business Analytics', 'Growth Tools', 'CRM Suite'],
        trafficSources: ['Newsletter (40%)', 'LinkedIn (35%)', 'Website (25%)'],
        demographics: '35-55 Executives',
        paymentMethod: 'Bank Transfer',
        lastActivity: '1 day ago',
        fraudRisk: 'MEDIUM'
      }
    ],
    affiliatePrograms: [
      {
        name: 'AI Marketing Suite Affiliate Program',
        status: 'ACTIVE',
        affiliates: 456,
        commissionRate: 15.0,
        cookieDuration: 45,
        totalRevenue: 567890,
        totalCommissions: 85184,
        conversions: 3456,
        conversionRate: 4.8,
        avgOrderValue: 164.32,
        topAffiliates: 123,
        payoutFrequency: 'Monthly',
        minimumPayout: 50,
        creativeAssets: 67,
        landingPages: 12,
        promoCodesActive: 23,
        seasonalBonus: 'Q2 Spring: +2% commission',
        performanceScore: 92.4
      },
      {
        name: 'Email Marketing Pro Affiliate Program',
        status: 'ACTIVE',
        affiliates: 334,
        commissionRate: 12.0,
        cookieDuration: 30,
        totalRevenue: 423567,
        totalCommissions: 50828,
        conversions: 2345,
        conversionRate: 5.2,
        avgOrderValue: 180.56,
        topAffiliates: 89,
        payoutFrequency: 'Bi-weekly',
        minimumPayout: 25,
        creativeAssets: 45,
        landingPages: 8,
        promoCodesActive: 18,
        seasonalBonus: 'Summer Sale: +3% commission',
        performanceScore: 89.7
      },
      {
        name: 'Analytics Pro Affiliate Program',
        status: 'ACTIVE',
        affiliates: 289,
        commissionRate: 10.0,
        cookieDuration: 60,
        totalRevenue: 345678,
        totalCommissions: 34568,
        conversions: 1890,
        conversionRate: 3.9,
        avgOrderValue: 183.02,
        topAffiliates: 67,
        payoutFrequency: 'Monthly',
        minimumPayout: 100,
        creativeAssets: 34,
        landingPages: 6,
        promoCodesActive: 15,
        seasonalBonus: 'Black Friday: +5% commission',
        performanceScore: 87.2
      },
      {
        name: 'SEO Tools Affiliate Program',
        status: 'PAUSED',
        affiliates: 234,
        commissionRate: 8.0,
        cookieDuration: 30,
        totalRevenue: 234567,
        totalCommissions: 18765,
        conversions: 1456,
        conversionRate: 4.1,
        avgOrderValue: 161.23,
        topAffiliates: 45,
        payoutFrequency: 'Monthly',
        minimumPayout: 50,
        creativeAssets: 28,
        landingPages: 4,
        promoCodesActive: 0,
        seasonalBonus: 'None',
        performanceScore: 73.8
      }
    ],
    networkPerformance: [
      {
        network: 'Impact',
        affiliates: 567,
        revenue: 234567,
        commissions: 28148,
        conversionRate: 4.5,
        avgOrderValue: 167.89,
        clickThroughRate: 9.2,
        fraudRate: 0.8,
        networkFees: 2.5,
        topGeos: ['US', 'CA', 'UK'],
        integration: 'API',
        status: 'ACTIVE',
        dataQuality: 96.7,
        paymentReliability: 98.2
      },
      {
        network: 'ShareASale',
        affiliates: 423,
        revenue: 189012,
        commissions: 22681,
        conversionRate: 4.2,
        avgOrderValue: 156.78,
        clickThroughRate: 8.7,
        fraudRate: 1.2,
        networkFees: 2.0,
        topGeos: ['US', 'AU', 'NZ'],
        integration: 'API',
        status: 'ACTIVE',
        dataQuality: 94.3,
        paymentReliability: 96.8
      },
      {
        network: 'CJ Affiliate',
        affiliates: 334,
        revenue: 145678,
        commissions: 17481,
        conversionRate: 3.8,
        avgOrderValue: 172.45,
        clickThroughRate: 7.9,
        fraudRate: 0.6,
        networkFees: 3.0,
        topGeos: ['US', 'DE', 'FR'],
        integration: 'Pixel',
        status: 'ACTIVE',
        dataQuality: 91.8,
        paymentReliability: 97.4
      },
      {
        network: 'PartnerStack',
        affiliates: 278,
        revenue: 123456,
        commissions: 14815,
        conversionRate: 5.1,
        avgOrderValue: 198.34,
        clickThroughRate: 6.8,
        fraudRate: 0.4,
        networkFees: 1.5,
        topGeos: ['US', 'UK', 'SE'],
        integration: 'SDK',
        status: 'TESTING',
        dataQuality: 89.7,
        paymentReliability: 94.2
      }
    ],
    trafficSources: [
      {
        source: 'Organic Search',
        clicks: 567890,
        conversions: 23456,
        conversionRate: 4.1,
        revenue: 456789,
        commissions: 54815,
        topKeywords: ['ai marketing tools', 'email automation', 'seo software'],
        avgPosition: 3.2,
        quality: 'HIGH',
        fraudRisk: 'LOW',
        seasonalTrend: '+12% Q2 growth'
      },
      {
        source: 'Social Media',
        clicks: 423567,
        conversions: 18901,
        conversionRate: 4.5,
        revenue: 334567,
        commissions: 40148,
        topKeywords: ['marketing tips', 'business growth', 'digital tools'],
        platforms: ['Instagram (35%)', 'LinkedIn (30%)', 'TikTok (25%)', 'Twitter (10%)'],
        quality: 'HIGH',
        fraudRisk: 'LOW',
        seasonalTrend: '+18% social commerce growth'
      },
      {
        source: 'Paid Advertising',
        clicks: 334567,
        conversions: 16789,
        conversionRate: 5.0,
        revenue: 289012,
        commissions: 34681,
        topKeywords: ['marketing software', 'business tools', 'automation'],
        platforms: ['Google Ads (60%)', 'Facebook Ads (25%)', 'LinkedIn Ads (15%)'],
        quality: 'MEDIUM',
        fraudRisk: 'MEDIUM',
        seasonalTrend: '+8% paid performance'
      },
      {
        source: 'Email Marketing',
        clicks: 245678,
        conversions: 14567,
        conversionRate: 5.9,
        revenue: 234567,
        commissions: 28148,
        topKeywords: ['newsletter', 'product updates', 'special offers'],
        listSize: 89012,
        openRate: 24.3,
        quality: 'HIGH',
        fraudRisk: 'VERY LOW',
        seasonalTrend: '+15% email engagement'
      },
      {
        source: 'Content Marketing',
        clicks: 189012,
        conversions: 11234,
        conversionRate: 5.9,
        revenue: 189012,
        commissions: 22681,
        topKeywords: ['how to guides', 'tutorials', 'reviews'],
        contentTypes: ['Blog Posts (50%)', 'Videos (30%)', 'Podcasts (20%)'],
        quality: 'HIGH',
        fraudRisk: 'VERY LOW',
        seasonalTrend: '+22% content consumption'
      }
    ],
    commissionStructures: [
      {
        tier: 'Diamond',
        requirements: '$50K+ monthly sales',
        commissionRate: 15.0,
        bonusRate: 2.0,
        affiliates: 23,
        avgMonthlyEarnings: 8945,
        paymentTerms: 'Net 15',
        perks: ['Priority support', 'Custom creatives', 'Direct account manager'],
        performance: 'EXCELLENT'
      },
      {
        tier: 'Platinum',
        requirements: '$25K+ monthly sales',
        commissionRate: 12.0,
        bonusRate: 1.5,
        affiliates: 67,
        avgMonthlyEarnings: 4567,
        paymentTerms: 'Net 30',
        perks: ['Priority support', 'Performance bonuses'],
        performance: 'EXCELLENT'
      },
      {
        tier: 'Gold',
        requirements: '$10K+ monthly sales',
        commissionRate: 10.0,
        bonusRate: 1.0,
        affiliates: 145,
        avgMonthlyEarnings: 2234,
        paymentTerms: 'Net 30',
        perks: ['Performance bonuses', 'Marketing materials'],
        performance: 'GOOD'
      },
      {
        tier: 'Silver',
        requirements: '$2.5K+ monthly sales',
        commissionRate: 8.0,
        bonusRate: 0.5,
        affiliates: 289,
        avgMonthlyEarnings: 567,
        paymentTerms: 'Net 45',
        perks: ['Marketing materials', 'Training resources'],
        performance: 'FAIR'
      },
      {
        tier: 'Bronze',
        requirements: 'New affiliates',
        commissionRate: 6.0,
        bonusRate: 0,
        affiliates: 932,
        avgMonthlyEarnings: 123,
        paymentTerms: 'Net 60',
        perks: ['Basic support', 'Getting started guide'],
        performance: 'DEVELOPING'
      }
    ],
    performanceAlerts: [
      {
        type: 'SUCCESS',
        category: 'Affiliate Performance',
        message: 'TechReview Pro achieved 156% above monthly target - $12.4K vs $8K target',
        metric: 'Monthly Earnings',
        value: '$12.4K',
        change: '+156% above target',
        impact: 'MAJOR',
        timestamp: '07:42',
        affiliate: 'TechReview Pro (AFF001)',
        tier: 'Diamond',
        recommendation: 'Offer exclusive products, negotiate higher tier benefits',
        urgency: 'HIGH',
        opportunity: 'REWARD_TOP_PERFORMER'
      },
      {
        type: 'WARNING',
        category: 'Fraud Detection',
        message: 'Business Growth Network showing unusual click patterns - investigating',
        metric: 'Click Quality Score',
        value: '79.8%',
        change: '-8.2% from baseline',
        impact: 'MODERATE',
        timestamp: '07:40',
        affiliate: 'Business Growth Network (AFF004)',
        affectedRevenue: '$5.4K',
        recommendation: 'Pause affiliate pending investigation, review traffic sources',
        urgency: 'MEDIUM',
        technicalAction: 'INVESTIGATE_TRAFFIC'
      },
      {
        type: 'CRITICAL',
        category: 'Payment Processing',
        message: 'ShareASale payment integration failing - 234 affiliates affected',
        metric: 'Payment Success Rate',
        value: '67%',
        change: '-31% from normal',
        impact: 'HIGH',
        timestamp: '07:43',
        network: 'ShareASale',
        affectedAffiliates: 234,
        pendingPayouts: '$89K',
        recommendation: 'Immediate technical support, manual payment processing if needed',
        urgency: 'CRITICAL',
        escalation: 'TECHNICAL_TEAM'
      },
      {
        type: 'INFO',
        category: 'Program Growth',
        message: 'AI Marketing Suite program gained 23 new affiliates this week (+5.3%)',
        metric: 'Affiliate Recruitment',
        value: '+23',
        change: '+5.3% week over week',
        impact: 'POSITIVE',
        timestamp: '07:38',
        program: 'AI Marketing Suite',
        totalAffiliates: 456,
        projectedRevenue: '+$12K monthly',
        recommendation: 'Scale onboarding resources, prepare additional creative assets',
        urgency: 'LOW',
        opportunity: 'SCALE_ONBOARDING'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAffiliateData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        programOverview: {
          ...prev.programOverview,
          activeAffiliates: Math.max(1400, Math.min(1500, prev.programOverview.activeAffiliates + Math.floor((Math.random() - 0.5) * 10))),
          totalRevenue: Math.max(2300000, Math.min(2400000, prev.programOverview.totalRevenue + Math.floor((Math.random() - 0.5) * 5000))),
          conversionRate: Math.max(4.0, Math.min(4.5, prev.programOverview.conversionRate + (Math.random() - 0.5) * 0.1))
        }
      }));
    }, 18000);

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

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Diamond': return 'text-cyan-400 bg-cyan-400/20';
      case 'Platinum': return 'text-gray-300 bg-gray-300/20';
      case 'Gold': return 'text-yellow-400 bg-yellow-400/20';
      case 'Silver': return 'text-gray-400 bg-gray-400/20';
      case 'Bronze': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Content Creator': return 'text-purple-400 bg-purple-400/20';
      case 'Website': return 'text-blue-400 bg-blue-400/20';
      case 'Influencer': return 'text-pink-400 bg-pink-400/20';
      case 'Network': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400';
      case 'REVIEW': return 'text-yellow-400';
      case 'PAUSED': return 'text-orange-400';
      case 'SUSPENDED': return 'text-red-400';
      case 'TESTING': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'GOOD': return 'text-blue-400 bg-blue-400/20';
      case 'FAIR': return 'text-yellow-400 bg-yellow-400/20';
      case 'POOR': return 'text-red-400 bg-red-400/20';
      case 'DEVELOPING': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getScoreColor = (score, good = 70, excellent = 85) => {
    if (score >= excellent) return 'text-green-400';
    if (score >= good) return 'text-blue-400';
    if (score >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'CRITICAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-blue-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => `$${formatNumber(amount)}`;

  return (
    <div className="h-full bg-gradient-to-br from-green-900 via-slate-900 to-teal-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-green-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl">
              <LinkIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Affiliate Marketing Intelligence Center</h1>
              <p className="text-green-300">Partner analytics, commission tracking & performance monitoring</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-green-400">{affiliateData.currentTime}</div>
            <div className="text-green-300">Affiliate Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Program Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-green-400 mr-2" />
                Affiliates
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(affiliateData.programOverview.activeAffiliates)}</div>
            <div className="text-green-300 text-sm">{formatNumber(affiliateData.programOverview.totalAffiliates)} Total • +{formatNumber(affiliateData.programOverview.newAffiliates)} This Month</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <DollarSign className="w-5 h-5 text-teal-400 mr-2" />
                Revenue
              </h3>
            </div>
            <div className="text-3xl font-bold text-teal-400">{formatCurrency(affiliateData.programOverview.totalRevenue)}</div>
            <div className="text-teal-300 text-sm">{formatCurrency(affiliateData.programOverview.affiliateRevenue)} Affiliate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Percent className="w-5 h-5 text-cyan-400 mr-2" />
                Conversion
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(affiliateData.programOverview.conversionRate, 3, 5)}`}>
              {formatPercentage(affiliateData.programOverview.conversionRate)}
            </div>
            <div className="text-cyan-300 text-sm">{formatNumber(affiliateData.programOverview.totalConversions)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-blue-400 mr-2" />
                Commission
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatCurrency(affiliateData.programOverview.totalCommissions)}</div>
            <div className="text-blue-300 text-sm">{formatPercentage(affiliateData.programOverview.avgCommissionRate)} Avg Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
                AOV
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatCurrency(affiliateData.programOverview.avgOrderValue)}</div>
            <div className="text-purple-300 text-sm">Avg Order Value</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-orange-400 mr-2" />
                CTR
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(affiliateData.programOverview.clickThroughRate, 6, 10)}`}>
              {formatPercentage(affiliateData.programOverview.clickThroughRate)}
            </div>
            <div className="text-orange-300 text-sm">Click Through Rate</div>
          </div>
        </div>

        {/* Top Affiliates */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Award className="w-5 h-5 text-green-400 mr-2" />
            Top Performing Affiliates
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Affiliate</th>
                  <th className="text-center p-3 text-slate-300">Earnings</th>
                  <th className="text-center p-3 text-slate-300">Conversion</th>
                  <th className="text-center p-3 text-slate-300">Commission</th>
                  <th className="text-center p-3 text-slate-300">AOV</th>
                  <th className="text-center p-3 text-slate-300">Performance</th>
                </tr>
              </thead>
              <tbody>
                {affiliateData.topAffiliates.map((affiliate, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{affiliate.name}</div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-slate-400 text-sm">{affiliate.handle}</span>
                        <span className={`px-2 py-1 rounded text-xs ${getTypeColor(affiliate.type)}`}>
                          {affiliate.type}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${getTierColor(affiliate.tier)}`}>
                          {affiliate.tier}
                        </span>
                      </div>
                      <div className="text-slate-400 text-xs mt-1">
                        ID: {affiliate.id} • Since {affiliate.joinDate}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-green-400 font-medium">{formatCurrency(affiliate.monthlyEarnings)}</div>
                      <div className="text-slate-400 text-xs">{formatCurrency(affiliate.totalEarnings)} Total</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(affiliate.conversionRate, 3, 5)}`}>
                      {formatPercentage(affiliate.conversionRate)}
                      <div className="text-slate-400 text-xs">{affiliate.conversions} conv</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-blue-400 font-medium">{formatPercentage(affiliate.commissionRate)}</div>
                      <div className="text-slate-400 text-xs">Rate</div>
                    </td>
                    <td className="p-3 text-center text-purple-400">{formatCurrency(affiliate.avgOrderValue)}</td>
                    <td className="p-3 text-center">
                      <div className={`text-sm font-medium ${getScoreColor(affiliate.performanceScore, 70, 85)}`}>
                        {affiliate.performanceScore.toFixed(1)}
                      </div>
                      <span className={`text-xs ${getStatusColor(affiliate.status)}`}>
                        {affiliate.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Affiliate Programs & Network Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-teal-400 mr-2" />
              Affiliate Program Intelligence
            </h3>
            <div className="space-y-4">
              {affiliateData.affiliatePrograms.map((program, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">{program.name}</span>
                      <span className={`text-sm ${getStatusColor(program.status)}`}>{program.status}</span>
                    </div>
                    <span className={`text-sm ${getScoreColor(program.performanceScore, 70, 85)}`}>
                      {program.performanceScore.toFixed(1)} Score
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Affiliates: {program.affiliates}</div>
                    <div className="text-teal-400">Revenue: {formatCurrency(program.totalRevenue)}</div>
                    <div className="text-blue-400">Commission: {formatPercentage(program.commissionRate)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Conv Rate: {formatPercentage(program.conversionRate)}</div>
                    <div className="text-cyan-400">AOV: {formatCurrency(program.avgOrderValue)}</div>
                    <div className="text-orange-400">Cookie: {program.cookieDuration}d</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Payout:</strong> {program.payoutFrequency} (${program.minimumPayout} min) • <strong>Assets:</strong> {program.creativeAssets}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
              Network Performance Analytics
            </h3>
            <div className="space-y-4">
              {affiliateData.networkPerformance.map((network, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">{network.network}</span>
                      <span className={`text-sm ${getStatusColor(network.status)}`}>{network.status}</span>
                    </div>
                    <span className={`text-sm ${getScoreColor(network.dataQuality, 80, 90)}`}>
                      {formatPercentage(network.dataQuality)} Quality
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Affiliates: {network.affiliates}</div>
                    <div className="text-teal-400">Revenue: {formatCurrency(network.revenue)}</div>
                    <div className="text-blue-400">Conv Rate: {formatPercentage(network.conversionRate)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">CTR: {formatPercentage(network.clickThroughRate)}</div>
                    <div className="text-orange-400">Fraud: {formatPercentage(network.fraudRate)}</div>
                    <div className="text-cyan-400">Fees: {formatPercentage(network.networkFees)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Top Geos:</strong> {network.topGeos.join(', ')} • <strong>Integration:</strong> {network.integration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traffic Sources & Commission Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
              Traffic Source Intelligence
            </h3>
            <div className="space-y-4">
              {affiliateData.trafficSources.map((source, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{source.source}</span>
                    <span className={`text-sm ${getScoreColor(source.conversionRate, 3, 5)}`}>
                      {formatPercentage(source.conversionRate)} Conv
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Clicks: {formatNumber(source.clicks)}</div>
                    <div className="text-teal-400">Conv: {formatNumber(source.conversions)}</div>
                    <div className="text-blue-400">Revenue: {formatCurrency(source.revenue)}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Commissions: {formatCurrency(source.commissions)}</div>
                    <div className={`${source.quality === 'HIGH' ? 'text-green-400' : source.quality === 'MEDIUM' ? 'text-yellow-400' : 'text-red-400'}`}>
                      Quality: {source.quality}
                    </div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Trend:</strong> {source.seasonalTrend}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Award className="w-5 h-5 text-gold-400 mr-2" />
              Commission Structure Analytics
            </h3>
            <div className="space-y-4">
              {affiliateData.commissionStructures.map((tier, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getTierColor(tier.tier)}`}>
                        {tier.tier}
                      </span>
                      <span className="text-white text-sm">{tier.affiliates} affiliates</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${getPerformanceColor(tier.performance)}`}>
                      {tier.performance}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Rate: {formatPercentage(tier.commissionRate)}</div>
                    <div className="text-blue-400">Bonus: {formatPercentage(tier.bonusRate)}</div>
                    <div className="text-purple-400">Avg: {formatCurrency(tier.avgMonthlyEarnings)}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Requirements:</strong> {tier.requirements}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Perks:</strong> {tier.perks.join(', ')} • <strong>Terms:</strong> {tier.paymentTerms}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Affiliate Marketing Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {affiliateData.performanceAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                    <span className={`text-xs ${getUrgencyColor(alert.urgency)}`}>
                      {alert.urgency}
                    </span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-3">
                  <div>
                    <div className="text-slate-300">Metric: {alert.metric}</div>
                    <div className="text-slate-300">Value: {alert.value}</div>
                    <div className="text-slate-300">Change: {alert.change}</div>
                  </div>
                  <div>
                    <div className="text-slate-300">Impact: {alert.impact}</div>
                    {alert.affiliate && <div className="text-slate-300">Affiliate: {alert.affiliate}</div>}
                    {alert.network && <div className="text-slate-300">Network: {alert.network}</div>}
                    {alert.program && <div className="text-slate-300">Program: {alert.program}</div>}
                  </div>
                </div>
                <div className="text-slate-300 text-xs">
                  <strong>Action:</strong> {alert.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}