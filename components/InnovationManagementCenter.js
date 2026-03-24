// Innovation Management Intelligence Center - R&D Analytics & Innovation Portfolio Management
import { useState, useEffect } from 'react';
import { Lightbulb, TrendingUp, Target, Zap, Users, BarChart3, Rocket, Brain, Settings, Star, Award, ChevronRight } from 'lucide-react';

export default function InnovationManagementCenter() {
  const [innovationData, setInnovationData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    innovationOverview: {
      totalProjects: 156,
      activeProjects: 134,
      pipelineValue: 45670000,
      avgTimeToMarket: 8.7,
      innovationIndex: 87.4,
      patentsFiled: 23,
      breakthroughsAchieved: 7,
      rdSpend: 12500000,
      roiInnovation: 234.5,
      ideaSubmissions: 1247,
      successRate: 18.6,
      collaborationScore: 92.3
    },
    innovationPortfolio: [
      {
        category: 'Artificial Intelligence',
        projects: 28,
        investment: 8900000,
        stage: 'Development',
        timeline: '18 months',
        riskLevel: 'MEDIUM',
        expectedRoi: 345.7,
        breakthrough: true,
        marketPotential: 150000000,
        patentsTarget: 12,
        patentsFiled: 8,
        keyBreakthroughs: ['Neural Architecture Search', 'Quantum ML Algorithms', 'Edge AI Optimization'],
        competitiveAdvantage: 'HIGH',
        commercialization: '2026-Q3',
        status: 'ON_TRACK',
        priority: 'CRITICAL'
      },
      {
        category: 'Quantum Computing',
        projects: 12,
        investment: 12300000,
        stage: 'Research',
        timeline: '36 months',
        riskLevel: 'HIGH',
        expectedRoi: 567.8,
        breakthrough: true,
        marketPotential: 250000000,
        patentsTarget: 25,
        patentsFiled: 15,
        keyBreakthroughs: ['Quantum Error Correction', '1000-Qubit Processor', 'Quantum Networking'],
        competitiveAdvantage: 'FIRST_MOVER',
        commercialization: '2027-Q4',
        status: 'AHEAD',
        priority: 'STRATEGIC'
      },
      {
        category: 'Sustainable Technology',
        projects: 34,
        investment: 6700000,
        stage: 'Pilot',
        timeline: '12 months',
        riskLevel: 'LOW',
        expectedRoi: 189.4,
        breakthrough: false,
        marketPotential: 78000000,
        patentsTarget: 8,
        patentsFiled: 6,
        keyBreakthroughs: ['Carbon Capture Innovation', 'Green Energy Storage', 'Biodegradable Materials'],
        competitiveAdvantage: 'MEDIUM',
        commercialization: '2026-Q2',
        status: 'ON_TRACK',
        priority: 'HIGH'
      },
      {
        category: 'Biotechnology',
        projects: 19,
        investment: 9800000,
        stage: 'Development',
        timeline: '24 months',
        riskLevel: 'HIGH',
        expectedRoi: 423.6,
        breakthrough: true,
        marketPotential: 180000000,
        patentsTarget: 18,
        patentsFiled: 11,
        keyBreakthroughs: ['Gene Therapy Platform', 'Personalized Medicine', 'Biomarker Discovery'],
        competitiveAdvantage: 'HIGH',
        commercialization: '2027-Q1',
        status: 'AT_RISK',
        priority: 'CRITICAL'
      },
      {
        category: 'Robotics & Automation',
        projects: 23,
        investment: 5600000,
        stage: 'Testing',
        timeline: '15 months',
        riskLevel: 'MEDIUM',
        expectedRoi: 256.3,
        breakthrough: false,
        marketPotential: 95000000,
        patentsTarget: 14,
        patentsFiled: 10,
        keyBreakthroughs: ['Autonomous Navigation', 'Human-Robot Collaboration', 'Adaptive Manufacturing'],
        competitiveAdvantage: 'MEDIUM',
        commercialization: '2026-Q4',
        status: 'ON_TRACK',
        priority: 'MEDIUM'
      }
    ],
    rdMetrics: [
      {
        metric: 'Innovation Velocity',
        value: 87.4,
        target: 85.0,
        trend: '+12.3%',
        benchmark: 'ABOVE_INDUSTRY',
        description: 'Speed from idea to prototype',
        unit: 'score',
        status: 'EXCELLENT'
      },
      {
        metric: 'Patent Efficiency',
        value: 2.8,
        target: 2.5,
        trend: '+15.7%',
        benchmark: 'TOP_QUARTILE',
        description: 'Patents per $M invested',
        unit: 'patents/$M',
        status: 'EXCELLENT'
      },
      {
        metric: 'Time to Market',
        value: 8.7,
        target: 12.0,
        trend: '-18.9%',
        benchmark: 'BEST_IN_CLASS',
        description: 'Average development timeline',
        unit: 'months',
        status: 'EXCELLENT'
      },
      {
        metric: 'Innovation ROI',
        value: 234.5,
        target: 200.0,
        trend: '+23.4%',
        benchmark: 'ABOVE_INDUSTRY',
        description: 'Return on R&D investment',
        unit: '%',
        status: 'EXCELLENT'
      },
      {
        metric: 'Idea Conversion',
        value: 18.6,
        target: 15.0,
        trend: '+8.7%',
        benchmark: 'ABOVE_AVERAGE',
        description: 'Ideas to viable projects',
        unit: '%',
        status: 'GOOD'
      },
      {
        metric: 'Collaboration Index',
        value: 92.3,
        target: 80.0,
        trend: '+6.4%',
        benchmark: 'TOP_DECILE',
        description: 'Cross-functional collaboration',
        unit: 'score',
        status: 'EXCELLENT'
      }
    ],
    technologyTrends: [
      {
        technology: 'Generative AI',
        maturity: 'EMERGING',
        relevance: 'HIGH',
        adoptionRate: 67.8,
        marketSize: 89000000,
        competitorActivity: 'INTENSE',
        patentLandscape: 'ACTIVE',
        timeToImpact: '6 months',
        strategicPriority: 'CRITICAL',
        investmentRecommendation: 'ACCELERATE',
        threatLevel: 'MEDIUM',
        opportunityScore: 94.7,
        rdFocus: ['Large Language Models', 'Multimodal AI', 'AI Safety']
      },
      {
        technology: 'Quantum Computing',
        maturity: 'EARLY',
        relevance: 'HIGH',
        adoptionRate: 23.4,
        marketSize: 125000000,
        competitorActivity: 'MODERATE',
        patentLandscape: 'BUILDING',
        timeToImpact: '24 months',
        strategicPriority: 'STRATEGIC',
        investmentRecommendation: 'MAINTAIN',
        threatLevel: 'LOW',
        opportunityScore: 87.3,
        rdFocus: ['Error Correction', 'Quantum Algorithms', 'Hardware Scaling']
      },
      {
        technology: 'Edge Computing',
        maturity: 'GROWTH',
        relevance: 'MEDIUM',
        adoptionRate: 89.2,
        marketSize: 45000000,
        competitorActivity: 'HIGH',
        patentLandscape: 'MATURE',
        timeToImpact: '3 months',
        strategicPriority: 'HIGH',
        investmentRecommendation: 'OPTIMIZE',
        threatLevel: 'HIGH',
        opportunityScore: 76.8,
        rdFocus: ['5G Integration', 'AI at Edge', 'Power Efficiency']
      },
      {
        technology: 'Synthetic Biology',
        maturity: 'EMERGING',
        relevance: 'MEDIUM',
        adoptionRate: 34.6,
        marketSize: 67000000,
        competitorActivity: 'MODERATE',
        patentLandscape: 'DEVELOPING',
        timeToImpact: '18 months',
        strategicPriority: 'MEDIUM',
        investmentRecommendation: 'EXPLORE',
        threatLevel: 'LOW',
        opportunityScore: 82.1,
        rdFocus: ['Protein Engineering', 'Metabolic Pathways', 'Biocomputing']
      },
      {
        technology: 'Digital Twins',
        maturity: 'GROWTH',
        relevance: 'HIGH',
        adoptionRate: 56.7,
        marketSize: 78000000,
        competitorActivity: 'MODERATE',
        patentLandscape: 'ACTIVE',
        timeToImpact: '9 months',
        strategicPriority: 'HIGH',
        investmentRecommendation: 'ACCELERATE',
        threatLevel: 'MEDIUM',
        opportunityScore: 88.9,
        rdFocus: ['Real-time Simulation', 'IoT Integration', 'Predictive Maintenance']
      }
    ],
    innovationPipeline: [
      {
        stage: 'Ideation',
        projects: 234,
        value: 2300000,
        averageTime: '2 weeks',
        conversionRate: 34.7,
        keyMetrics: {
          submissions: 1247,
          evaluations: 892,
          approvals: 234,
          rejections: 658
        },
        bottlenecks: ['Evaluation Capacity', 'Technical Feasibility Assessment'],
        improvements: ['AI-powered screening', 'Expert panel automation']
      },
      {
        stage: 'Concept Development',
        projects: 89,
        value: 8900000,
        averageTime: '8 weeks',
        conversionRate: 67.8,
        keyMetrics: {
          prototypes: 89,
          validations: 67,
          pivots: 15,
          advances: 67
        },
        bottlenecks: ['Resource Allocation', 'Technical Validation'],
        improvements: ['Rapid prototyping tools', 'Virtual validation']
      },
      {
        stage: 'Development',
        projects: 45,
        value: 23400000,
        averageTime: '18 months',
        conversionRate: 78.9,
        keyMetrics: {
          milestones: 187,
          completed: 145,
          delayed: 28,
          cancelled: 14
        },
        bottlenecks: ['Regulatory Approval', 'Market Validation'],
        improvements: ['Agile development', 'Early customer engagement']
      },
      {
        stage: 'Testing & Validation',
        projects: 23,
        value: 15600000,
        averageTime: '6 months',
        conversionRate: 89.3,
        keyMetrics: {
          testCycles: 156,
          passed: 139,
          failed: 17,
          retesting: 23
        },
        bottlenecks: ['Compliance Testing', 'Scale Validation'],
        improvements: ['Automated testing', 'Simulation environments']
      },
      {
        stage: 'Commercialization',
        projects: 12,
        value: 45600000,
        averageTime: '12 months',
        conversionRate: 94.7,
        keyMetrics: {
          launches: 12,
          successful: 11,
          struggling: 1,
          withdrawn: 0
        },
        bottlenecks: ['Market Education', 'Supply Chain'],
        improvements: ['Go-to-market optimization', 'Partner ecosystem']
      }
    ],
    patentIntelligence: [
      {
        domain: 'Machine Learning',
        filed: 45,
        granted: 23,
        pending: 22,
        citationIndex: 4.7,
        competitiveStrength: 'STRONG',
        freedomToOperate: 'CLEAR',
        keyInventions: ['Neural Architecture Search', 'Federated Learning', 'Model Compression'],
        licensing: {
          revenue: 2340000,
          agreements: 8,
          royaltyRate: 5.2
        },
        threats: ['Big Tech Patents', 'University Research'],
        opportunities: ['Cross-licensing', 'Patent Pools']
      },
      {
        domain: 'Quantum Technology',
        filed: 23,
        granted: 12,
        pending: 11,
        citationIndex: 6.8,
        competitiveStrength: 'EMERGING',
        freedomToOperate: 'CAUTION',
        keyInventions: ['Quantum Error Correction', 'Qubit Scaling', 'Quantum Algorithms'],
        licensing: {
          revenue: 890000,
          agreements: 3,
          royaltyRate: 7.5
        },
        threats: ['IBM Patents', 'Google Research'],
        opportunities: ['Government Partnerships', 'Quantum Ecosystem']
      },
      {
        domain: 'Biotechnology',
        filed: 18,
        granted: 15,
        pending: 3,
        citationIndex: 8.3,
        competitiveStrength: 'STRONG',
        freedomToOperate: 'CLEAR',
        keyInventions: ['Gene Therapy Vectors', 'Biomarker Platforms', 'Protein Engineering'],
        licensing: {
          revenue: 5670000,
          agreements: 12,
          royaltyRate: 12.8
        },
        threats: ['Pharma Giants', 'Academic Institutions'],
        opportunities: ['Pharma Partnerships', 'Diagnostic Licensing']
      }
    ],
    innovationAlerts: [
      {
        type: 'BREAKTHROUGH',
        category: 'Technology Achievement',
        message: 'Quantum ML Algorithm achieved 10x performance improvement - breakthrough milestone',
        technology: 'Quantum Computing',
        impact: 'TRANSFORMATIONAL',
        commercialPotential: 250000000,
        timestamp: '09:01',
        team: 'Quantum Research Lab',
        nextSteps: 'Patent filing, prototype development, strategic partnerships',
        urgency: 'CRITICAL',
        stakeholders: 'C-SUITE'
      },
      {
        type: 'COMPETITIVE_THREAT',
        category: 'Market Intelligence',
        message: 'Major competitor filed 12 patents in AI safety - potential blocking patents',
        technology: 'Artificial Intelligence',
        impact: 'HIGH',
        threatLevel: 'MEDIUM',
        timestamp: '09:00',
        affectedProjects: ['AI Safety Framework', 'Neural Architecture'],
        recommendation: 'Accelerate patent filing, evaluate design-around options',
        urgency: 'HIGH',
        response: 'IP_STRATEGY'
      },
      {
        type: 'MILESTONE',
        category: 'Project Progress',
        message: 'Biotechnology gene therapy platform completed Phase I trials successfully',
        technology: 'Biotechnology',
        impact: 'POSITIVE',
        commercialValue: 45000000,
        timestamp: '08:59',
        project: 'Gene Therapy Platform',
        nextPhase: 'Phase II clinical trials',
        timeline: '18 months',
        urgency: 'MEDIUM',
        action: 'FUNDING_APPROVAL'
      },
      {
        type: 'OPPORTUNITY',
        category: 'Strategic Partnership',
        message: 'Leading automotive OEM seeking quantum computing partnership - $50M opportunity',
        technology: 'Quantum Computing',
        impact: 'STRATEGIC',
        value: 50000000,
        timestamp: '08:58',
        partner: 'Automotive OEM',
        timeline: '6 months negotiation',
        requirements: ['Quantum simulation', 'Materials optimization'],
        urgency: 'HIGH',
        action: 'BUSINESS_DEVELOPMENT'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setInnovationData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        innovationOverview: {
          ...prev.innovationOverview,
          ideaSubmissions: Math.max(1240, Math.min(1255, prev.innovationOverview.ideaSubmissions + Math.floor((Math.random() - 0.5) * 4))),
          innovationIndex: Math.max(85.0, Math.min(90.0, prev.innovationOverview.innovationIndex + (Math.random() - 0.5) * 0.8)),
          collaborationScore: Math.max(90.0, Math.min(95.0, prev.innovationOverview.collaborationScore + (Math.random() - 0.5) * 0.6))
        }
      }));
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'BREAKTHROUGH': return 'border-green-500 bg-green-900/30 text-green-400';
      case 'COMPETITIVE_THREAT': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'MILESTONE': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      case 'OPPORTUNITY': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getStageColor = (stage) => {
    switch (stage) {
      case 'Research': return 'text-purple-400 bg-purple-400/20';
      case 'Development': return 'text-blue-400 bg-blue-400/20';
      case 'Testing': return 'text-yellow-400 bg-yellow-400/20';
      case 'Pilot': return 'text-orange-400 bg-orange-400/20';
      case 'Production': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'AHEAD': return 'text-green-400 bg-green-400/20';
      case 'ON_TRACK': return 'text-blue-400 bg-blue-400/20';
      case 'AT_RISK': return 'text-yellow-400 bg-yellow-400/20';
      case 'DELAYED': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'STRATEGIC': return 'text-purple-400 bg-purple-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getMetricStatusColor = (status) => {
    switch (status) {
      case 'EXCELLENT': return 'text-green-400';
      case 'GOOD': return 'text-blue-400';
      case 'FAIR': return 'text-yellow-400';
      case 'POOR': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getMaturityColor = (maturity) => {
    switch (maturity) {
      case 'EMERGING': return 'text-purple-400 bg-purple-400/20';
      case 'EARLY': return 'text-blue-400 bg-blue-400/20';
      case 'GROWTH': return 'text-green-400 bg-green-400/20';
      case 'MATURE': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getRelevanceColor = (relevance) => {
    switch (relevance) {
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
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

  const formatCurrency = (amount) => `$${formatNumber(amount)}`;
  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Innovation Management Intelligence Center</h1>
              <p className="text-purple-300">R&D analytics & innovation portfolio management</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{innovationData.currentTime}</div>
            <div className="text-purple-300">Innovation Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Innovation Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Rocket className="w-5 h-5 text-purple-400 mr-2" />
                Projects
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{innovationData.innovationOverview.activeProjects}</div>
            <div className="text-purple-300 text-sm">{innovationData.innovationOverview.totalProjects} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Pipeline
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(innovationData.innovationOverview.pipelineValue)}</div>
            <div className="text-green-300 text-sm">Total Value</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                Innovation
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{innovationData.innovationOverview.innovationIndex.toFixed(1)}</div>
            <div className="text-yellow-300 text-sm">Index Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Award className="w-5 h-5 text-orange-400 mr-2" />
                Patents
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{innovationData.innovationOverview.patentsFiled}</div>
            <div className="text-orange-300 text-sm">This Year</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                ROI
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{innovationData.innovationOverview.roiInnovation.toFixed(1)}%</div>
            <div className="text-cyan-300 text-sm">Innovation</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Lightbulb className="w-5 h-5 text-blue-400 mr-2" />
                Ideas
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{innovationData.innovationOverview.ideaSubmissions}</div>
            <div className="text-blue-300 text-sm">Submitted</div>
          </div>
        </div>

        {/* Innovation Portfolio */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Rocket className="w-5 h-5 text-purple-400 mr-2" />
            Innovation Portfolio Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Investment</th>
                  <th className="text-center p-3 text-slate-300">Projects</th>
                  <th className="text-center p-3 text-slate-300">Stage</th>
                  <th className="text-center p-3 text-slate-300">Risk</th>
                  <th className="text-center p-3 text-slate-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {innovationData.innovationPortfolio.map((portfolio, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{portfolio.category}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        Market: {formatCurrency(portfolio.marketPotential)} • Timeline: {portfolio.timeline}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-green-400 font-medium">{formatCurrency(portfolio.investment)}</div>
                      <div className="text-slate-400 text-xs">ROI: {formatPercentage(portfolio.expectedRoi)}</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-cyan-400 font-medium">{portfolio.projects}</div>
                      <div className="text-slate-400 text-xs">Patents: {portfolio.patentsFiled}/{portfolio.patentsTarget}</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getStageColor(portfolio.stage)}`}>
                        {portfolio.stage}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getRiskColor(portfolio.riskLevel)}`}>
                        {portfolio.riskLevel}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs ${getStatusColor(portfolio.status)}`}>
                          {portfolio.status.replace('_', ' ')}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(portfolio.priority)}`}>
                          {portfolio.priority}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* R&D Metrics & Technology Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
              R&D Performance Metrics
            </h3>
            <div className="space-y-4">
              {innovationData.rdMetrics.map((metric, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{metric.metric}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm font-bold ${getMetricStatusColor(metric.status)}`}>
                        {metric.value}{metric.unit === 'score' ? '' : metric.unit === 'months' ? 'm' : metric.unit === '%' ? '%' : metric.unit}
                      </span>
                      <span className="text-green-400 text-xs">{metric.trend}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="text-slate-400">Target: {metric.target}{metric.unit === 'score' ? '' : metric.unit === 'months' ? 'm' : metric.unit === '%' ? '%' : metric.unit}</div>
                    <div className="text-slate-400">Benchmark: {metric.benchmark.replace('_', ' ')}</div>
                  </div>
                  <div className="text-slate-400 text-xs mt-2">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Technology Trend Analysis
            </h3>
            <div className="space-y-4">
              {innovationData.technologyTrends.map((trend, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{trend.technology}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getMaturityColor(trend.maturity)}`}>
                        {trend.maturity}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getRelevanceColor(trend.relevance)}`}>
                        {trend.relevance}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Adoption: {formatPercentage(trend.adoptionRate)}</div>
                    <div className="text-green-400">Market: {formatCurrency(trend.marketSize)}</div>
                    <div className="text-orange-400">Impact: {trend.timeToImpact}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div className="text-slate-400">Competition: {trend.competitorActivity}</div>
                    <div className="text-slate-400">Opportunity: {formatPercentage(trend.opportunityScore)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Focus:</strong> {trend.rdFocus.slice(0, 2).join(', ')}{trend.rdFocus.length > 2 ? '...' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Innovation Pipeline & Patent Intelligence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-orange-400 mr-2" />
              Innovation Pipeline Analysis
            </h3>
            <div className="space-y-4">
              {innovationData.innovationPipeline.map((stage, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{stage.stage}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-cyan-400 text-xs">{stage.projects} projects</span>
                      <span className="text-green-400 text-xs">{formatCurrency(stage.value)}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Time: {stage.averageTime}</div>
                    <div className="text-blue-400">Conversion: {formatPercentage(stage.conversionRate)}</div>
                    <div className="text-purple-400">Efficiency: High</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Bottlenecks:</strong> {stage.bottlenecks.join(', ')}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Improvements:</strong> {stage.improvements.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Award className="w-5 h-5 text-yellow-400 mr-2" />
              Patent Intelligence Dashboard
            </h3>
            <div className="space-y-4">
              {innovationData.patentIntelligence.map((patent, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{patent.domain}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-xs">{patent.granted} granted</span>
                      <span className="text-yellow-400 text-xs">{patent.pending} pending</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Filed: {patent.filed}</div>
                    <div className="text-orange-400">Citations: {patent.citationIndex}</div>
                    <div className="text-purple-400">Revenue: {formatCurrency(patent.licensing.revenue)}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Key Inventions:</strong> {patent.keyInventions.slice(0, 2).join(', ')}{patent.keyInventions.length > 2 ? '...' : ''}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="text-slate-400">Strength: {patent.competitiveStrength}</div>
                    <div className="text-slate-400">FTO: {patent.freedomToOperate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Innovation Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Zap className="w-5 h-5 text-yellow-400 mr-2" />
            Innovation Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {innovationData.innovationAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type.replace('_', ' ')}</span>
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
                    <div className="text-slate-300">Technology: {alert.technology}</div>
                    <div className="text-slate-300">Impact: {alert.impact}</div>
                    {alert.commercialPotential && <div className="text-slate-300">Potential: {formatCurrency(alert.commercialPotential)}</div>}
                    {alert.value && <div className="text-slate-300">Value: {formatCurrency(alert.value)}</div>}
                  </div>
                  <div>
                    {alert.team && <div className="text-slate-300">Team: {alert.team}</div>}
                    {alert.project && <div className="text-slate-300">Project: {alert.project}</div>}
                    {alert.partner && <div className="text-slate-300">Partner: {alert.partner}</div>}
                    {alert.timeline && <div className="text-slate-300">Timeline: {alert.timeline}</div>}
                  </div>
                </div>
                <div className="text-slate-300 text-xs">
                  <strong>Next Steps:</strong> {alert.nextSteps || alert.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}