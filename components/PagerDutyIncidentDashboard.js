// PagerDuty Incident Management Dashboard - March 2026
// Comprehensive PagerDuty-inspired incident management dashboard for enterprise operations and response coordination
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, RadialBarChart, RadialBar } from 'recharts';

export default function PagerDutyIncidentDashboard() {
  const [incidentMetrics, setIncidentMetrics] = useState({
    openIncidents: 23,
    criticalIncidents: 3,
    acknowledgedIncidents: 12,
    resolvedToday: 45,
    meanTimeToAcknowledge: 2.3,
    meanTimeToResolve: 18.7,
    escalationRate: 12.4,
    incidentVolume: 156,
    servicesAffected: 8,
    teamsInvolved: 12,
    onCallEngineers: 24,
    scheduleCompliance: 94.7
  });

  const [activeIncidents, setActiveIncidents] = useState([
    {
      id: 'INC-2026-001',
      title: 'High CPU usage on aleksandra-ai-engine production cluster',
      status: 'triggered',
      urgency: 'high',
      priority: 'P1',
      service: 'aleksandra-ai-engine',
      assignedTo: 'Daniel F.',
      createdAt: '06:02:15',
      acknowledgedAt: '06:02:45',
      escalationPolicy: 'Critical Infrastructure',
      impactedUsers: 4567,
      lastUpdate: '06:01:30'
    },
    {
      id: 'INC-2026-002',
      title: 'Database connection pool exhaustion in content-processor',
      status: 'acknowledged',
      urgency: 'high',
      priority: 'P1',
      service: 'content-processor',
      assignedTo: 'SOC Team',
      createdAt: '06:01:20',
      acknowledgedAt: '06:01:35',
      escalationPolicy: 'Database Team',
      impactedUsers: 2345,
      lastUpdate: '06:01:50'
    },
    {
      id: 'INC-2026-003',
      title: 'Instagram API rate limiting causing service degradation',
      status: 'investigating',
      urgency: 'medium',
      priority: 'P2',
      service: 'instagram-analyzer',
      assignedTo: 'Aleksandra AI',
      createdAt: '06:00:10',
      acknowledgedAt: '06:00:25',
      escalationPolicy: 'API Services',
      impactedUsers: 1234,
      lastUpdate: '06:01:15'
    },
    {
      id: 'INC-2026-004',
      title: 'Transcription service timeout errors increasing',
      status: 'monitoring',
      urgency: 'medium',
      priority: 'P2',
      service: 'transcription-service',
      assignedTo: 'Auto-Assignment',
      createdAt: '05:58:45',
      acknowledgedAt: '05:59:00',
      escalationPolicy: 'ML Services',
      impactedUsers: 567,
      lastUpdate: '06:00:30'
    },
    {
      id: 'INC-2026-005',
      title: 'CDN cache hit ratio below threshold',
      status: 'resolved',
      urgency: 'low',
      priority: 'P3',
      service: 'cdn-service',
      assignedTo: 'Infrastructure Team',
      createdAt: '05:45:20',
      acknowledgedAt: '05:45:35',
      escalationPolicy: 'CDN Operations',
      impactedUsers: 0,
      lastUpdate: '05:58:10'
    }
  ]);

  const [onCallSchedule, setOnCallSchedule] = useState([
    {
      level: 'Level 1',
      engineer: 'Daniel F.',
      contact: '+351 938 229 707',
      status: 'on-call',
      nextRotation: '2026-03-25 08:00',
      escalationPolicy: 'Primary On-Call',
      skills: ['Backend', 'Database', 'AI/ML'],
      availability: 'available'
    },
    {
      level: 'Level 2',
      engineer: 'Aleksandra AI',
      contact: 'system-alerts@aleksandra.ai',
      status: 'backup',
      nextRotation: '2026-03-25 08:00',
      escalationPolicy: 'Secondary Escalation',
      skills: ['Full-Stack', 'DevOps', 'Monitoring'],
      availability: 'available'
    },
    {
      level: 'Manager',
      engineer: 'SOC Team Lead',
      contact: 'soc-manager@aleksandra.ai',
      status: 'escalation-only',
      nextRotation: '2026-03-26 08:00',
      escalationPolicy: 'Management Escalation',
      skills: ['Leadership', 'Crisis Management'],
      availability: 'available'
    },
    {
      level: 'Executive',
      engineer: 'CTO',
      contact: 'cto@aleksandra.ai',
      status: 'executive',
      nextRotation: '2026-03-30 08:00',
      escalationPolicy: 'Executive Escalation',
      skills: ['Strategic', 'Crisis Communication'],
      availability: 'available'
    }
  ]);

  const [serviceHealth, setServiceHealth] = useState([
    {
      service: 'aleksandra-ai-engine',
      status: 'major_outage',
      incidents: 3,
      lastIncident: '06:02:15',
      uptime: 99.1,
      responseTime: 567.8,
      errorRate: 8.3,
      escalationPolicy: 'Critical Infrastructure'
    },
    {
      service: 'content-processor',
      status: 'partial_outage',
      incidents: 2,
      lastIncident: '06:01:20',
      uptime: 99.5,
      responseTime: 234.5,
      errorRate: 4.2,
      escalationPolicy: 'Database Team'
    },
    {
      service: 'instagram-analyzer',
      status: 'degraded_performance',
      incidents: 1,
      lastIncident: '06:00:10',
      uptime: 99.7,
      responseTime: 156.3,
      errorRate: 2.1,
      escalationPolicy: 'API Services'
    },
    {
      service: 'transcription-service',
      status: 'degraded_performance',
      incidents: 1,
      lastIncident: '05:58:45',
      uptime: 99.3,
      responseTime: 789.1,
      errorRate: 5.6,
      escalationPolicy: 'ML Services'
    },
    {
      service: 'api-gateway',
      status: 'operational',
      incidents: 0,
      lastIncident: '2026-03-23 14:30',
      uptime: 99.9,
      responseTime: 45.6,
      errorRate: 0.3,
      escalationPolicy: 'Gateway Team'
    },
    {
      service: 'database-service',
      status: 'operational',
      incidents: 0,
      lastIncident: '2026-03-23 11:15',
      uptime: 99.8,
      responseTime: 78.9,
      errorRate: 0.8,
      escalationPolicy: 'Database Team'
    }
  ]);

  const [incidentTrends, setIncidentTrends] = useState([
    { time: '06:02', incidents: 5, acknowledged: 3, resolved: 2, critical: 2, high: 2, medium: 1, low: 0 },
    { time: '06:01', incidents: 8, acknowledged: 6, resolved: 4, critical: 1, high: 3, medium: 3, low: 1 },
    { time: '06:00', incidents: 6, acknowledged: 4, resolved: 3, critical: 0, high: 2, medium: 3, low: 1 },
    { time: '05:59', incidents: 12, acknowledged: 9, resolved: 7, critical: 2, high: 4, medium: 4, low: 2 },
    { time: '05:58', incidents: 9, acknowledged: 7, resolved: 5, critical: 1, high: 3, medium: 3, low: 2 }
  ]);

  const [escalationPolicies, setEscalationPolicies] = useState([
    {
      name: 'Critical Infrastructure',
      steps: 4,
      currentStep: 1,
      timeouts: ['5 min', '15 min', '30 min', '60 min'],
      targets: ['Primary On-Call', 'Secondary On-Call', 'Manager', 'CTO'],
      activeIncidents: 2,
      lastEscalation: '06:02:45'
    },
    {
      name: 'Database Team',
      steps: 3,
      currentStep: 1,
      timeouts: ['10 min', '20 min', '45 min'],
      targets: ['DB On-Call', 'DB Manager', 'Infrastructure Lead'],
      activeIncidents: 1,
      lastEscalation: '06:01:35'
    },
    {
      name: 'API Services',
      steps: 3,
      currentStep: 1,
      timeouts: ['15 min', '30 min', '60 min'],
      targets: ['API On-Call', 'Backend Team', 'Engineering Manager'],
      activeIncidents: 1,
      lastEscalation: '06:00:25'
    },
    {
      name: 'ML Services',
      steps: 3,
      currentStep: 1,
      timeouts: ['10 min', '25 min', '45 min'],
      targets: ['ML Engineer', 'AI Team Lead', 'CTO'],
      activeIncidents: 1,
      lastEscalation: '05:59:00'
    }
  ]);

  const [responseMetrics, setResponseMetrics] = useState([
    { metric: 'Mean Time to Acknowledge', value: 2.3, unit: 'minutes', trend: '-15%', target: 5 },
    { metric: 'Mean Time to Resolve', value: 18.7, unit: 'minutes', trend: '+8%', target: 30 },
    { metric: 'Escalation Rate', value: 12.4, unit: '%', trend: '+3%', target: 10 },
    { metric: 'Schedule Compliance', value: 94.7, unit: '%', trend: '+2%', target: 95 },
    { metric: 'Response Rate', value: 98.2, unit: '%', trend: '+1%', target: 95 },
    { metric: 'Customer Satisfaction', value: 4.2, unit: '/5', trend: '-0.1', target: 4.5 }
  ]);

  const [alertSources, setAlertSources] = useState([
    { source: 'Prometheus', alerts: 45, incidents: 12, reliability: 92.3, lastAlert: '06:02:30' },
    { source: 'Grafana', alerts: 23, incidents: 8, reliability: 89.7, lastAlert: '06:01:45' },
    { source: 'New Relic', alerts: 34, incidents: 15, reliability: 94.1, lastAlert: '06:02:15' },
    { source: 'Sentry', alerts: 67, incidents: 23, reliability: 87.5, lastAlert: '06:01:55' },
    { source: 'CloudWatch', alerts: 28, incidents: 9, reliability: 91.8, lastAlert: '06:00:20' },
    { source: 'Datadog', alerts: 19, incidents: 6, reliability: 95.2, lastAlert: '05:59:30' }
  ]);

  const [incidentPostmortems, setIncidentPostmortems] = useState([
    {
      id: 'POST-2026-001',
      title: 'Database Connection Pool Exhaustion',
      date: '2026-03-23',
      duration: '45 minutes',
      impact: 'High',
      rootCause: 'Connection pool misconfiguration',
      actionItems: 5,
      completed: 3,
      assignee: 'Database Team'
    },
    {
      id: 'POST-2026-002',
      title: 'API Gateway Timeout Issues',
      date: '2026-03-22',
      duration: '23 minutes',
      impact: 'Medium',
      rootCause: 'Upstream service latency',
      actionItems: 3,
      completed: 3,
      assignee: 'Backend Team'
    },
    {
      id: 'POST-2026-003',
      title: 'ML Model Inference Failures',
      date: '2026-03-21',
      duration: '67 minutes',
      impact: 'Critical',
      rootCause: 'Model deployment configuration error',
      actionItems: 8,
      completed: 6,
      assignee: 'AI Team'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update incident metrics
      setIncidentMetrics(prev => ({
        ...prev,
        openIncidents: Math.max(5, prev.openIncidents + Math.floor((Math.random() - 0.7) * 5)),
        criticalIncidents: Math.max(0, prev.criticalIncidents + Math.floor((Math.random() - 0.8) * 2)),
        acknowledgedIncidents: Math.max(0, Math.min(prev.openIncidents, prev.acknowledgedIncidents + Math.floor((Math.random() - 0.3) * 3))),
        resolvedToday: prev.resolvedToday + Math.floor(Math.random() * 5) + 1,
        meanTimeToAcknowledge: Math.max(1, Math.min(10, prev.meanTimeToAcknowledge + (Math.random() - 0.5) * 0.5)),
        meanTimeToResolve: Math.max(10, Math.min(60, prev.meanTimeToResolve + (Math.random() - 0.5) * 3)),
        escalationRate: Math.max(5, Math.min(25, prev.escalationRate + (Math.random() - 0.5) * 2)),
        incidentVolume: prev.incidentVolume + Math.floor(Math.random() * 10) + 3,
        scheduleCompliance: Math.max(85, Math.min(100, prev.scheduleCompliance + (Math.random() - 0.5) * 1))
      }));

      // Update incident trends
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setIncidentTrends(prev => {
        const newData = {
          time: currentTime,
          incidents: Math.floor(Math.random() * 12) + 3,
          acknowledged: Math.floor(Math.random() * 8) + 2,
          resolved: Math.floor(Math.random() * 6) + 1,
          critical: Math.floor(Math.random() * 3),
          high: Math.floor(Math.random() * 4) + 1,
          medium: Math.floor(Math.random() * 5) + 1,
          low: Math.floor(Math.random() * 3)
        };
        
        return [...prev.slice(-19), newData]; // Keep last 20 points
      });

      // Update active incidents
      setActiveIncidents(prev => prev.map(incident => {
        const statusProgression = ['triggered', 'acknowledged', 'investigating', 'monitoring', 'resolved'];
        const currentIndex = statusProgression.indexOf(incident.status);
        
        if (Math.random() < 0.1 && currentIndex < statusProgression.length - 1) {
          return {
            ...incident,
            status: statusProgression[currentIndex + 1],
            lastUpdate: currentTime
          };
        }
        
        return {
          ...incident,
          impactedUsers: Math.max(0, incident.impactedUsers + Math.floor((Math.random() - 0.8) * 100))
        };
      }));

      // Update service health
      setServiceHealth(prev => prev.map(service => ({
        ...service,
        uptime: Math.max(95, Math.min(100, service.uptime + (Math.random() - 0.3) * 0.1)),
        responseTime: Math.max(20, service.responseTime + (Math.random() - 0.5) * 50),
        errorRate: Math.max(0.1, Math.min(15, service.errorRate + (Math.random() - 0.5) * 1))
      })));

      // Update response metrics
      setResponseMetrics(prev => prev.map(metric => ({
        ...metric,
        value: Math.max(0, metric.value + (Math.random() - 0.5) * (metric.value * 0.1))
      })));
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'triggered': return 'text-red-500';
      case 'acknowledged': return 'text-yellow-500';
      case 'investigating': return 'text-blue-500';
      case 'monitoring': return 'text-purple-500';
      case 'resolved': return 'text-green-500';
      case 'major_outage': return 'text-red-500';
      case 'partial_outage': return 'text-orange-500';
      case 'degraded_performance': return 'text-yellow-500';
      case 'operational': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch(urgency.toLowerCase()) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'P1': return 'text-red-500';
      case 'P2': return 'text-orange-500';
      case 'P3': return 'text-yellow-500';
      case 'P4': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getAvailabilityColor = (availability) => {
    switch(availability.toLowerCase()) {
      case 'available': return 'text-green-400';
      case 'busy': return 'text-yellow-400';
      case 'unavailable': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendColor = (trend) => {
    if (trend.startsWith('-')) return 'text-green-400';
    if (trend.startsWith('+')) return 'text-red-400';
    return 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-orange-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* PagerDuty Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🚨 PagerDuty Incident Management
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>OPEN: <span className="text-red-400 font-mono">{incidentMetrics.openIncidents}</span></div>
                <div>CRITICAL: <span className="text-red-500 font-bold">{incidentMetrics.criticalIncidents}</span></div>
                <div>ACK: <span className="text-yellow-400">{incidentMetrics.acknowledgedIncidents}</span></div>
                <div>RESOLVED: <span className="text-green-400">{incidentMetrics.resolvedToday}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-orange-400">{incidentMetrics.meanTimeToAcknowledge.toFixed(1)}</div>
              <div className="text-sm text-gray-300">MTTA (minutes)</div>
              <div className="text-xs text-orange-300">MTTR: {incidentMetrics.meanTimeToResolve.toFixed(1)}min</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Incident Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Open Incidents</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{incidentMetrics.openIncidents}</div>
            <div className="text-xs text-gray-400">Active incidents</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">MTTA</span>
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-1">{incidentMetrics.meanTimeToAcknowledge.toFixed(1)}m</div>
            <div className="text-xs text-gray-400">Mean time to acknowledge</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">MTTR</span>
              <span className="text-2xl">🔧</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{incidentMetrics.meanTimeToResolve.toFixed(1)}m</div>
            <div className="text-xs text-gray-400">Mean time to resolve</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">On-Call</span>
              <span className="text-2xl">👨‍💻</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{incidentMetrics.onCallEngineers}</div>
            <div className="text-xs text-gray-400">Engineers available</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Incident Trends Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Incident Volume & Response Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={incidentTrends.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#f97316" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#f97316" />
                <YAxis yAxisId="right" orientation="right" stroke="#f97316" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #f97316' }}
                  labelStyle={{ color: '#f97316' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="incidents" fill="#f97316" fillOpacity={0.3} stroke="#f97316" name="Total Incidents" />
                <Bar yAxisId="left" dataKey="critical" fill="#dc2626" name="Critical" />
                <Bar yAxisId="left" dataKey="high" fill="#f59e0b" name="High" />
                <Line yAxisId="right" type="monotone" dataKey="acknowledged" stroke="#22c55e" strokeWidth={2} name="Acknowledged" />
                <Line yAxisId="right" type="monotone" dataKey="resolved" stroke="#10b981" strokeWidth={2} name="Resolved" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Service Health Overview */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🏥 Service Health Status
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {serviceHealth.map((service, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{service.service}</span>
                    <span className={`text-xs font-bold ${getStatusColor(service.status)}`}>
                      {service.status.replace(/_/g, ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-1">
                    <div className="text-green-400">{service.uptime.toFixed(1)}% uptime</div>
                    <div className="text-yellow-400">{service.responseTime.toFixed(0)}ms</div>
                    <div className="text-red-400">{service.errorRate.toFixed(1)}% errors</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-orange-400">{service.incidents} incidents</span>
                    <span className="text-gray-400">Last: {service.lastIncident}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Active Incidents */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔥 Active Incidents
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {activeIncidents.slice(0, 5).map((incident, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{incident.id}</span>
                    <span className={`text-xs font-bold ${getPriorityColor(incident.priority)}`}>{incident.priority}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1 truncate">{incident.title}</div>
                  <div className="text-xs text-orange-300 mb-1">{incident.service}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className={getStatusColor(incident.status)}>{incident.status}</div>
                    <div className={getUrgencyColor(incident.urgency)}>{incident.urgency}</div>
                    <div className="text-blue-400">{incident.assignedTo}</div>
                    <div className="text-gray-400">{incident.createdAt}</div>
                  </div>
                  <div className="text-xs text-purple-300">Users: {incident.impactedUsers.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>

          {/* On-Call Schedule */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              👨‍💻 On-Call Schedule
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {onCallSchedule.map((person, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{person.engineer}</span>
                    <span className={`text-xs font-bold ${getAvailabilityColor(person.availability)}`}>{person.availability}</span>
                  </div>
                  <div className="text-xs text-orange-300 mb-1">{person.level} • {person.status}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className="text-blue-400 truncate">{person.contact}</div>
                    <div className="text-gray-400">Next: {person.nextRotation.slice(5, 16)}</div>
                  </div>
                  <div className="text-xs text-purple-300">Skills: {person.skills.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Escalation Policies */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Escalation Policies
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {escalationPolicies.map((policy, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{policy.name}</span>
                    <span className="text-xs text-red-400">{policy.activeIncidents} active</span>
                  </div>
                  <div className="text-xs text-orange-300 mb-1">Step {policy.currentStep}/{policy.steps}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className="text-blue-400">Timeout: {policy.timeouts[policy.currentStep - 1]}</div>
                    <div className="text-gray-400">Last: {policy.lastEscalation}</div>
                  </div>
                  <div className="text-xs text-purple-300">Target: {policy.targets[policy.currentStep - 1]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Response Metrics & Alert Sources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Response Metrics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Response Performance Metrics
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {responseMetrics.map((metric, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-1">{metric.metric}</div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg font-bold text-orange-400">{metric.value.toFixed(1)}{metric.unit}</span>
                    <span className={`text-sm ${getTrendColor(metric.trend)}`}>{metric.trend}</span>
                  </div>
                  <div className="text-xs text-gray-400">Target: {metric.target}{metric.unit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Alert Sources */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔔 Alert Sources & Integration
            </h3>
            <div className="space-y-3">
              {alertSources.map((source, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{source.source}</span>
                    <span className="text-xs text-green-400">{source.reliability.toFixed(1)}%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-yellow-400">{source.alerts} alerts</div>
                    <div className="text-red-400">{source.incidents} incidents</div>
                    <div className="text-gray-400">{source.lastAlert}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Incident Postmortems */}
        <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            📋 Recent Incident Postmortems
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {incidentPostmortems.map((postmortem, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-white">{postmortem.id}</span>
                  <span className="text-xs text-orange-400">{postmortem.impact}</span>
                </div>
                <div className="text-sm text-white mb-2 truncate">{postmortem.title}</div>
                <div className="grid grid-cols-2 gap-1 text-xs mb-2">
                  <div className="text-gray-400">{postmortem.date}</div>
                  <div className="text-red-400">{postmortem.duration}</div>
                  <div className="text-blue-400">Actions: {postmortem.completed}/{postmortem.actionItems}</div>
                  <div className="text-purple-400">{postmortem.assignee}</div>
                </div>
                <div className="text-xs text-yellow-300">{postmortem.rootCause}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            PAGERDUTY INCIDENT MANAGEMENT | ALEKSANDRA AI OPERATIONS | ENTERPRISE INCIDENT RESPONSE
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Incident Response | On-Call Management | Escalation Policies | Service Health | Response Metrics | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}