// Innovation Lab Center - R&D, Experimentation & Future Technology Development
import { useState, useEffect } from 'react';
import { Lightbulb, Zap, Rocket, Brain, Target, TrendingUp, Clock, Star, Beaker, Cpu, Database, Globe } from 'lucide-react';

export default function InnovationLabCenter() {
  const [innovationData, setInnovationData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    labOverview: {
      activeProjects: 24,
      completedProjects: 67,
      researchersActive: 18,
      patentsPending: 12,
      innovationScore: 94.7,
      rdBudget: 2450000,
      rdSpent: 1876000,
      timeToMarket: 147 // days average
    },
    researchProjects: [
      {
        id: 'ai-quantum',
        title: 'Quantum-Enhanced AI Processing',
        category: 'Artificial Intelligence',
        stage: 'PROTOTYPE',
        progress: 78.4,
        priority: 'CRITICAL',
        timeline: '8 months',
        budget: 450000,
        spent: 287000,
        team: 'Quantum AI Lab',
        breakthrough: true,
        marketPotential: 'REVOLUTIONARY',
        description: 'Hybrid quantum-classical AI systems for exponential processing improvements'
      },
      {
        id: 'neural-interface',
        title: 'Neural-Computer Interface Protocol',
        category: 'Neurotechnology',
        stage: 'RESEARCH',
        progress: 45.8,
        priority: 'HIGH',
        timeline: '18 months',
        budget: 680000,
        spent: 234000,
        team: 'BioTech Division',
        breakthrough: false,
        marketPotential: 'HIGH',
        description: 'Direct brain-computer communication for seamless human-AI collaboration'
      },
      {
        id: 'edge-ai',
        title: 'Autonomous Edge AI Networks',
        category: 'Edge Computing',
        stage: 'TESTING',
        progress: 89.2,
        priority: 'HIGH',
        timeline: '4 months',
        budget: 320000,
        spent: 298000,
        team: 'Edge Computing Lab',
        breakthrough: true,
        marketPotential: 'HIGH',
        description: 'Self-organizing AI networks that operate independently at network edge'
      },
      {
        id: 'predictive-maintenance',
        title: 'Predictive System Maintenance AI',
        category: 'Machine Learning',
        stage: 'DEPLOYMENT',
        progress: 96.7,
        priority: 'MEDIUM',
        timeline: '2 months',
        budget: 180000,
        spent: 167000,
        team: 'ML Operations',
        breakthrough: false,
        marketPotential: 'MEDIUM',
        description: 'AI that predicts and prevents system failures before they occur'
      },
      {
        id: 'holographic-ui',
        title: 'Holographic User Interfaces',
        category: 'User Experience',
        stage: 'CONCEPT',
        progress: 23.4,
        priority: 'LOW',
        timeline: '24 months',
        budget: 420000,
        spent: 87000,
        team: 'UX Innovation',
        breakthrough: true,
        marketPotential: 'REVOLUTIONARY',
        description: 'Three-dimensional holographic interfaces for immersive data interaction'
      },
      {
        id: 'bio-computing',
        title: 'Biological Computing Systems',
        category: 'Biocomputing',
        stage: 'RESEARCH',
        progress: 34.6,
        priority: 'LOW',
        timeline: '36 months',
        budget: 890000,
        spent: 156000,
        team: 'BioComputing Lab',
        breakthrough: true,
        marketPotential: 'REVOLUTIONARY',
        description: 'Living biological systems engineered to perform computational tasks'
      }
    ],
    emergingTechnologies: [
      {
        technology: 'Quantum Computing',
        maturity: 'EARLY',
        adoption: 15.7,
        impact: 'REVOLUTIONARY',
        timeframe: '2-5 years',
        investment: 890000,
        applications: ['Cryptography', 'Optimization', 'Simulation', 'Machine Learning']
      },
      {
        technology: 'Neural Interfaces',
        maturity: 'RESEARCH',
        adoption: 8.3,
        impact: 'HIGH',
        timeframe: '5-10 years',
        investment: 567000,
        applications: ['Accessibility', 'Gaming', 'Medical', 'Productivity']
      },
      {
        technology: 'Synthetic Biology',
        maturity: 'EMERGING',
        adoption: 12.4,
        impact: 'HIGH',
        timeframe: '3-7 years',
        investment: 423000,
        applications: ['Medicine', 'Manufacturing', 'Agriculture', 'Environment']
      },
      {
        technology: 'Extended Reality',
        maturity: 'DEVELOPING',
        adoption: 34.8,
        impact: 'MEDIUM',
        timeframe: '1-3 years',
        investment: 298000,
        applications: ['Training', 'Collaboration', 'Entertainment', 'Design']
      },
      {
        technology: 'Edge AI',
        maturity: 'MATURE',
        adoption: 67.2,
        impact: 'HIGH',
        timeframe: '0-2 years',
        investment: 189000,
        applications: ['IoT', 'Autonomous Systems', 'Real-time Analytics', 'Privacy']
      },
      {
        technology: 'Blockchain 3.0',
        maturity: 'DEVELOPING',
        adoption: 28.9,
        impact: 'MEDIUM',
        timeframe: '2-4 years',
        investment: 234000,
        applications: ['Identity', 'Supply Chain', 'Governance', 'Finance']
      }
    ],
    experimentResults: [
      {
        experiment: 'AI-Human Collaboration Protocol',
        hypothesis: 'Structured AI-human interaction increases productivity by 40%',
        status: 'VALIDATED',
        confidence: 94.7,
        impact: 'HIGH',
        results: '+47% productivity, +23% satisfaction, -15% error rate',
        nextSteps: 'Scale to production environment'
      },
      {
        experiment: 'Quantum Error Correction',
        hypothesis: 'New error correction reduces quantum decoherence by 60%',
        status: 'PROMISING',
        confidence: 78.3,
        impact: 'REVOLUTIONARY',
        results: '67% decoherence reduction, stable for 2.3 seconds',
        nextSteps: 'Extend coherence time to 10+ seconds'
      },
      {
        experiment: 'Predictive Interface Adaptation',
        hypothesis: 'AI that adapts UI in real-time improves user efficiency',
        status: 'VALIDATED',
        confidence: 89.4,
        impact: 'MEDIUM',
        results: '+31% task completion speed, +28% user satisfaction',
        nextSteps: 'Integrate into main product line'
      },
      {
        experiment: 'Distributed Learning Networks',
        hypothesis: 'Peer-to-peer AI learning outperforms centralized training',
        status: 'INCONCLUSIVE',
        confidence: 56.7,
        impact: 'MEDIUM',
        results: 'Mixed results, 23% faster but 12% less accurate',
        nextSteps: 'Refine algorithms and test hybrid approach'
      }
    ],
    intellectualProperty: {
      totalPatents: 89,
      pendingPatents: 12,
      approvedPatents: 67,
      trademarks: 23,
      copyrights: 156,
      tradeSecrets: 34,
      patentValue: 12450000,
      licensingRevenue: 567000,
      recentFilings: [
        {
          title: 'Quantum-Enhanced Machine Learning Architecture',
          filed: '2026-03-15',
          status: 'PENDING',
          category: 'AI/Quantum',
          value: 2300000
        },
        {
          title: 'Adaptive Neural Interface Protocol',
          filed: '2026-03-10',
          status: 'PENDING',
          category: 'Neurotechnology',
          value: 1800000
        },
        {
          title: 'Self-Healing Edge Computing Network',
          filed: '2026-03-05',
          status: 'APPROVED',
          category: 'Edge Computing',
          value: 1200000
        }
      ]
    },
    collaborations: [
      {
        partner: 'MIT Quantum Research Lab',
        type: 'ACADEMIC',
        project: 'Quantum AI Algorithms',
        duration: '24 months',
        investment: 450000,
        status: 'ACTIVE',
        outcomes: ['2 joint patents', '5 research papers', '1 prototype']
      },
      {
        partner: 'Google Quantum AI',
        type: 'CORPORATE',
        project: 'Quantum Error Correction',
        duration: '18 months',
        investment: 890000,
        status: 'ACTIVE',
        outcomes: ['Shared IP', 'Technology exchange', 'Joint development']
      },
      {
        partner: 'Stanford Human-Computer Interaction Lab',
        type: 'ACADEMIC',
        project: 'Neural Interface Standards',
        duration: '30 months',
        investment: 320000,
        status: 'PLANNING',
        outcomes: ['Industry standards', 'Safety protocols', 'Ethics framework']
      },
      {
        partner: 'European Space Agency',
        type: 'GOVERNMENT',
        project: 'Space-Based Computing',
        duration: '48 months',
        investment: 1200000,
        status: 'ACTIVE',
        outcomes: ['Space-qualified systems', 'Radiation hardening', 'Remote operations']
      }
    ],
    innovationMetrics: {
      ideaGeneration: 247,
      ideasImplemented: 89,
      implementationRate: 36.0,
      timeToMarket: 147,
      marketSuccessRate: 78.4,
      roiInnovation: 234.7,
      patentsPerResearcher: 4.9,
      researchEfficiency: 91.3
    },
    futureRoadmap: [
      {
        quarter: 'Q2 2026',
        focus: 'Quantum AI Integration',
        milestones: [
          'Complete quantum-classical hybrid prototype',
          'Achieve 10x processing speedup',
          'File 3 additional patents'
        ],
        budget: 680000,
        expectedOutcomes: 'Revolutionary AI capabilities'
      },
      {
        quarter: 'Q3 2026',
        focus: 'Neural Interface Development',
        milestones: [
          'Complete safety protocols',
          'Begin human trials',
          'Establish ethical guidelines'
        ],
        budget: 890000,
        expectedOutcomes: 'Direct brain-computer communication'
      },
      {
        quarter: 'Q4 2026',
        focus: 'Edge AI Deployment',
        milestones: [
          'Deploy autonomous networks',
          'Achieve 99.9% uptime',
          'Scale to 1000+ edge nodes'
        ],
        budget: 450000,
        expectedOutcomes: 'Self-managing infrastructure'
      },
      {
        quarter: 'Q1 2027',
        focus: 'Holographic Interfaces',
        milestones: [
          'Working prototype demonstration',
          'User experience validation',
          'Manufacturing partnership'
        ],
        budget: 1200000,
        expectedOutcomes: 'Next-generation user interfaces'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setInnovationData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        labOverview: {
          ...prev.labOverview,
          innovationScore: Math.max(90, Math.min(98, prev.labOverview.innovationScore + (Math.random() - 0.5) * 1)),
          rdSpent: Math.min(prev.labOverview.rdBudget, prev.labOverview.rdSpent + Math.floor(Math.random() * 5000))
        },
        innovationMetrics: {
          ...prev.innovationMetrics,
          ideaGeneration: prev.innovationMetrics.ideaGeneration + Math.floor(Math.random() * 3),
          researchEfficiency: Math.max(85, Math.min(96, prev.innovationMetrics.researchEfficiency + (Math.random() - 0.5) * 2))
        }
      }));
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const getStageColor = (stage) => {
    switch (stage) {
      case 'CONCEPT': return 'text-purple-400 bg-purple-400/20';
      case 'RESEARCH': return 'text-blue-400 bg-blue-400/20';
      case 'PROTOTYPE': return 'text-cyan-400 bg-cyan-400/20';
      case 'TESTING': return 'text-yellow-400 bg-yellow-400/20';
      case 'DEPLOYMENT': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'REVOLUTIONARY': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getMaturityColor = (maturity) => {
    switch (maturity) {
      case 'MATURE': return 'text-green-400 bg-green-400/20';
      case 'DEVELOPING': return 'text-cyan-400 bg-cyan-400/20';
      case 'EMERGING': return 'text-yellow-400 bg-yellow-400/20';
      case 'RESEARCH': return 'text-orange-400 bg-orange-400/20';
      case 'EARLY': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'VALIDATED': return 'text-green-400 bg-green-400/20';
      case 'PROMISING': return 'text-cyan-400 bg-cyan-400/20';
      case 'INCONCLUSIVE': return 'text-yellow-400 bg-yellow-400/20';
      case 'FAILED': return 'text-red-400 bg-red-400/20';
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20';
      case 'PLANNING': return 'text-purple-400 bg-purple-400/20';
      case 'PENDING': return 'text-orange-400 bg-orange-400/20';
      case 'APPROVED': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Innovation Lab Center</h1>
              <p className="text-purple-300">R&D projects, emerging technologies & future innovation development</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{innovationData.currentTime}</div>
            <div className="text-purple-300">Innovation Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Lab Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Beaker className="w-5 h-5 text-purple-400 mr-2" />
                Active Projects
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{innovationData.labOverview.activeProjects}</div>
            <div className="text-purple-300 text-sm">{innovationData.labOverview.researchersActive} researchers</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                Innovation Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{innovationData.labOverview.innovationScore.toFixed(1)}%</div>
            <div className="text-yellow-300 text-sm">{innovationData.labOverview.patentsPending} patents pending</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                R&D Investment
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(innovationData.labOverview.rdSpent)}</div>
            <div className="text-green-300 text-sm">of {formatCurrency(innovationData.labOverview.rdBudget)} budget</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-cyan-400 mr-2" />
                Time to Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{innovationData.labOverview.timeToMarket}</div>
            <div className="text-cyan-300 text-sm">days average</div>
          </div>
        </div>

        {/* Research Projects & Emerging Technologies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Rocket className="w-5 h-5 text-blue-400 mr-2" />
              Active Research Projects
            </h3>
            <div className="space-y-4">
              {innovationData.researchProjects.map((project, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-medium text-white text-sm">{project.title}</h4>
                      {project.breakthrough && (
                        <Zap className="w-4 h-4 text-yellow-400" title="Breakthrough Technology" />
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStageColor(project.stage)}`}>
                        {project.stage}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                        {project.priority}
                      </span>
                    </div>
                    <span className="text-white text-sm">{project.progress.toFixed(1)}%</span>
                  </div>
                  <div className="mb-3">
                    <div className="w-full bg-slate-600/50 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          project.progress >= 90 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          project.progress >= 70 ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                          project.progress >= 50 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                          project.progress >= 30 ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                          'bg-gradient-to-r from-purple-500 to-blue-500'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-slate-300 text-xs mb-2">{project.description}</div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Budget: {formatCurrency(project.budget)}</span>
                    <span>Spent: {formatCurrency(project.spent)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Team: {project.team}</span>
                    <span>Timeline: {project.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-slate-400 text-xs">Category: {project.category}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(project.marketPotential)}`}>
                      {project.marketPotential}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cpu className="w-5 h-5 text-orange-400 mr-2" />
              Emerging Technologies
            </h3>
            <div className="space-y-3">
              {innovationData.emergingTechnologies.map((tech, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-white text-sm">{tech.technology}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMaturityColor(tech.maturity)}`}>
                        {tech.maturity}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(tech.impact)}`}>
                      {tech.impact}
                    </span>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">Adoption Rate</span>
                      <span className="text-white text-xs">{tech.adoption.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-slate-600/50 rounded-full h-1">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full transition-all duration-300"
                        style={{ width: `${tech.adoption}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 mb-2">
                    <span>Timeline: {tech.timeframe}</span>
                    <span>Investment: {formatCurrency(tech.investment)}</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Applications: {tech.applications.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experiment Results & IP Portfolio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              Experiment Results
            </h3>
            <div className="space-y-4">
              {innovationData.experimentResults.map((experiment, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-white text-sm">{experiment.experiment}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(experiment.status)}`}>
                        {experiment.status}
                      </span>
                      <span className="text-slate-400 text-xs">{experiment.confidence.toFixed(1)}%</span>
                    </div>
                  </div>
                  <div className="text-slate-300 text-sm mb-2">{experiment.hypothesis}</div>
                  <div className="text-cyan-400 text-sm mb-2">{experiment.results}</div>
                  <div className="text-slate-400 text-xs">Next Steps: {experiment.nextSteps}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Database className="w-5 h-5 text-green-400 mr-2" />
              Intellectual Property
            </h3>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{innovationData.intellectualProperty.totalPatents}</div>
                  <div className="text-green-300 text-sm">Total Patents</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{formatCurrency(innovationData.intellectualProperty.patentValue)}</div>
                  <div className="text-cyan-300 text-sm">Patent Value</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-400">{innovationData.intellectualProperty.pendingPatents}</div>
                  <div className="text-orange-300 text-sm">Pending</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">{formatCurrency(innovationData.intellectualProperty.licensingRevenue)}</div>
                  <div className="text-purple-300 text-sm">Licensing Revenue</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white text-sm mb-3">Recent Patent Filings</h4>
              <div className="space-y-2">
                {innovationData.intellectualProperty.recentFilings.map((filing, index) => (
                  <div key={index} className="bg-slate-700/30 rounded p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-medium text-white text-sm">{filing.title}</h5>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(filing.status)}`}>
                        {filing.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Category: {filing.category}</span>
                      <span>Value: {formatCurrency(filing.value)}</span>
                    </div>
                    <div className="text-xs text-slate-400">Filed: {filing.filed}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Collaborations & Innovation Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 text-blue-400 mr-2" />
              Research Collaborations
            </h3>
            <div className="space-y-3">
              {innovationData.collaborations.map((collab, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-white text-sm">{collab.partner}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-400 text-xs">{collab.type}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(collab.status)}`}>
                        {collab.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-slate-300 text-sm mb-2">{collab.project}</div>
                  <div className="flex justify-between text-xs text-slate-400 mb-2">
                    <span>Duration: {collab.duration}</span>
                    <span>Investment: {formatCurrency(collab.investment)}</span>
                  </div>
                  <div className="text-xs text-cyan-400">
                    Outcomes: {collab.outcomes.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-purple-400 mr-2" />
              Innovation Metrics
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Idea Generation</span>
                <span className="text-purple-400 font-medium">{innovationData.innovationMetrics.ideaGeneration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Implementation Rate</span>
                <span className="text-cyan-400 font-medium">{innovationData.innovationMetrics.implementationRate.toFixed(1)}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Market Success Rate</span>
                <span className="text-green-400 font-medium">{innovationData.innovationMetrics.marketSuccessRate.toFixed(1)}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">ROI on Innovation</span>
                <span className="text-orange-400 font-medium">{innovationData.innovationMetrics.roiInnovation.toFixed(1)}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Patents per Researcher</span>
                <span className="text-yellow-400 font-medium">{innovationData.innovationMetrics.patentsPerResearcher.toFixed(1)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Research Efficiency</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-slate-700 rounded-full h-2">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                      style={{ width: `${innovationData.innovationMetrics.researchEfficiency}%` }}
                    ></div>
                  </div>
                  <span className="text-purple-400 font-medium text-sm">{innovationData.innovationMetrics.researchEfficiency.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Rocket className="w-5 h-5 text-orange-400 mr-2" />
            Innovation Roadmap
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {innovationData.futureRoadmap.map((roadmap, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="font-medium text-white mb-2">{roadmap.quarter}</h4>
                <div className="text-lg font-bold text-purple-400 mb-2">{roadmap.focus}</div>
                <div className="text-sm text-slate-300 mb-3">{roadmap.expectedOutcomes}</div>
                <div className="space-y-1 mb-3">
                  {roadmap.milestones.map((milestone, mIndex) => (
                    <div key={mIndex} className="text-xs text-slate-400">• {milestone}</div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-green-400 font-medium text-sm">{formatCurrency(roadmap.budget)}</div>
                  <div className="text-slate-400 text-xs">Budget Allocation</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}