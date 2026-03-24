// Terraform Infrastructure Dashboard - March 2026
// Comprehensive Terraform-inspired infrastructure as code monitoring dashboard for cloud resource management and automation
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart, Treemap, Sankey } from 'recharts';

export default function TerraformInfrastructureDashboard() {
  const [infraMetrics, setInfraMetrics] = useState({
    totalResources: 1247,
    managedResources: 1198,
    unmanagedResources: 49,
    activeWorkspaces: 23,
    pendingChanges: 8,
    appliedChanges: 156,
    failedDeployments: 3,
    estimatedCost: 2847.93,
    driftDetected: 7,
    complianceScore: 94.2,
    securityScore: 89.7,
    stateFileSize: 2.3
  });

  const [terraformPlans, setTerraformPlans] = useState([
    {
      id: 'plan-12345',
      workspace: 'aleksandra-production',
      status: 'pending_apply',
      changes: { add: 3, change: 5, destroy: 1 },
      cost: '+$45.67/month',
      createdBy: 'Daniel F.',
      createdAt: '06:17:15',
      appliedAt: null,
      duration: null,
      resources: ['aws_instance', 'aws_security_group', 'aws_lb'],
      environment: 'production'
    },
    {
      id: 'plan-12344',
      workspace: 'aleksandra-staging',
      status: 'applied',
      changes: { add: 8, change: 2, destroy: 0 },
      cost: '+$23.45/month',
      createdBy: 'Aleksandra AI',
      createdAt: '06:15:30',
      appliedAt: '06:16:45',
      duration: '1m 15s',
      resources: ['aws_instance', 'aws_rds_instance', 'aws_s3_bucket'],
      environment: 'staging'
    },
    {
      id: 'plan-12343',
      workspace: 'aleksandra-development',
      status: 'planning',
      changes: { add: 12, change: 7, destroy: 3 },
      cost: '+$12.34/month',
      createdBy: 'terraform-automation',
      createdAt: '06:14:20',
      appliedAt: null,
      duration: null,
      resources: ['aws_instance', 'aws_lambda_function', 'aws_dynamodb_table'],
      environment: 'development'
    },
    {
      id: 'plan-12342',
      workspace: 'aleksandra-infrastructure',
      status: 'failed',
      changes: { add: 2, change: 1, destroy: 0 },
      cost: '+$67.89/month',
      createdBy: 'Daniel F.',
      createdAt: '06:12:10',
      appliedAt: '06:13:25',
      duration: '2m 34s',
      resources: ['aws_eks_cluster', 'aws_iam_role'],
      environment: 'infrastructure'
    },
    {
      id: 'plan-12341',
      workspace: 'aleksandra-monitoring',
      status: 'applied',
      changes: { add: 5, change: 3, destroy: 2 },
      cost: '-$8.92/month',
      createdBy: 'Aleksandra AI',
      createdAt: '06:10:00',
      appliedAt: '06:11:30',
      duration: '1m 30s',
      resources: ['aws_cloudwatch_dashboard', 'aws_sns_topic', 'aws_lambda_function'],
      environment: 'monitoring'
    }
  ]);

  const [workspaces, setWorkspaces] = useState([
    {
      name: 'aleksandra-production',
      environment: 'production',
      resources: 234,
      state: 'locked',
      lastRun: '06:16:45',
      status: 'healthy',
      cost: 1247.89,
      drift: 2,
      compliance: 97.3,
      terraform_version: '1.7.4'
    },
    {
      name: 'aleksandra-staging',
      environment: 'staging',
      resources: 189,
      state: 'unlocked',
      lastRun: '06:16:45',
      status: 'healthy',
      cost: 567.23,
      drift: 1,
      compliance: 94.8,
      terraform_version: '1.7.4'
    },
    {
      name: 'aleksandra-development',
      environment: 'development',
      resources: 156,
      state: 'planning',
      lastRun: '06:14:20',
      status: 'planning',
      cost: 234.56,
      drift: 0,
      compliance: 91.2,
      terraform_version: '1.7.3'
    },
    {
      name: 'aleksandra-infrastructure',
      environment: 'infrastructure',
      resources: 345,
      state: 'error',
      lastRun: '06:13:25',
      status: 'error',
      cost: 789.12,
      drift: 4,
      compliance: 89.7,
      terraform_version: '1.7.4'
    },
    {
      name: 'aleksandra-monitoring',
      environment: 'monitoring',
      resources: 67,
      state: 'unlocked',
      lastRun: '06:11:30',
      status: 'healthy',
      cost: 123.45,
      drift: 0,
      compliance: 96.1,
      terraform_version: '1.7.4'
    },
    {
      name: 'aleksandra-security',
      environment: 'security',
      resources: 89,
      state: 'unlocked',
      lastRun: '06:08:15',
      status: 'healthy',
      cost: 345.67,
      drift: 0,
      compliance: 98.4,
      terraform_version: '1.7.4'
    }
  ]);

  const [resourceInventory, setResourceInventory] = useState([
    {
      type: 'aws_instance',
      count: 45,
      cost: 567.89,
      regions: ['us-east-1', 'eu-west-1'],
      managed: 43,
      unmanaged: 2,
      compliance: 92.3,
      lastModified: '06:16:45'
    },
    {
      type: 'aws_rds_instance',
      count: 12,
      cost: 234.56,
      regions: ['us-east-1'],
      managed: 12,
      unmanaged: 0,
      compliance: 97.8,
      lastModified: '06:15:30'
    },
    {
      type: 'aws_s3_bucket',
      count: 89,
      cost: 123.45,
      regions: ['us-east-1', 'eu-west-1', 'ap-southeast-1'],
      managed: 87,
      unmanaged: 2,
      compliance: 89.4,
      lastModified: '06:14:20'
    },
    {
      type: 'aws_lambda_function',
      count: 156,
      cost: 67.89,
      regions: ['us-east-1', 'eu-west-1'],
      managed: 154,
      unmanaged: 2,
      compliance: 94.7,
      lastModified: '06:13:10'
    },
    {
      type: 'aws_security_group',
      count: 234,
      cost: 0,
      regions: ['us-east-1', 'eu-west-1'],
      managed: 228,
      unmanaged: 6,
      compliance: 87.6,
      lastModified: '06:12:00'
    },
    {
      type: 'aws_iam_role',
      count: 78,
      cost: 0,
      regions: ['global'],
      managed: 75,
      unmanaged: 3,
      compliance: 95.1,
      lastModified: '06:11:45'
    }
  ]);

  const [providerMetrics, setProviderMetrics] = useState([
    {
      provider: 'AWS',
      resources: 987,
      cost: 2345.67,
      regions: 3,
      services: 25,
      compliance: 93.4,
      drift: 5,
      version: '5.42.0'
    },
    {
      provider: 'Azure',
      resources: 123,
      cost: 234.56,
      regions: 1,
      services: 8,
      compliance: 91.2,
      drift: 1,
      version: '3.95.0'
    },
    {
      provider: 'GCP',
      resources: 89,
      cost: 123.45,
      regions: 2,
      services: 12,
      compliance: 89.7,
      drift: 1,
      version: '5.15.0'
    },
    {
      provider: 'Kubernetes',
      resources: 45,
      cost: 67.89,
      regions: 1,
      services: 5,
      compliance: 94.8,
      drift: 0,
      version: '2.25.2'
    }
  ]);

  const [costAnalysis, setCostAnalysis] = useState([
    { service: 'EC2 Instances', cost: 567.89, percentage: 24.3, trend: '+5.2%', budget: 600.00, forecast: 589.45 },
    { service: 'RDS Databases', cost: 234.56, percentage: 10.1, trend: '+2.1%', budget: 250.00, forecast: 245.67 },
    { service: 'Lambda Functions', cost: 123.45, percentage: 5.3, trend: '-3.2%', budget: 150.00, forecast: 119.87 },
    { service: 'S3 Storage', cost: 89.23, percentage: 3.8, trend: '+8.7%', budget: 100.00, forecast: 97.12 },
    { service: 'Load Balancers', cost: 156.78, percentage: 6.7, trend: '+1.5%', budget: 160.00, forecast: 159.34 },
    { service: 'CloudWatch', cost: 67.34, percentage: 2.9, trend: '+12.3%', budget: 80.00, forecast: 75.67 },
    { service: 'VPC/Networking', cost: 45.23, percentage: 1.9, trend: '-1.8%', budget: 50.00, forecast: 44.45 }
  ]);

  const [securityFindings, setSecurityFindings] = useState([
    {
      resource: 'aws_security_group.web',
      finding: 'Overly permissive ingress rules',
      severity: 'high',
      rule: 'CKV_AWS_260',
      workspace: 'aleksandra-production',
      remediation: 'Restrict source IP ranges',
      status: 'open',
      detected: '06:15:30'
    },
    {
      resource: 'aws_s3_bucket.data',
      finding: 'Bucket versioning disabled',
      severity: 'medium',
      rule: 'CKV_AWS_21',
      workspace: 'aleksandra-staging',
      remediation: 'Enable bucket versioning',
      status: 'acknowledged',
      detected: '06:14:20'
    },
    {
      resource: 'aws_iam_role.lambda_exec',
      finding: 'Excessive IAM permissions',
      severity: 'medium',
      rule: 'CKV_AWS_62',
      workspace: 'aleksandra-development',
      remediation: 'Apply principle of least privilege',
      status: 'remediated',
      detected: '06:13:10'
    },
    {
      resource: 'aws_instance.web_server',
      finding: 'Unencrypted EBS volume',
      severity: 'high',
      rule: 'CKV_AWS_8',
      workspace: 'aleksandra-production',
      remediation: 'Enable EBS encryption',
      status: 'open',
      detected: '06:12:00'
    }
  ]);

  const [driftDetection, setDriftDetection] = useState([
    {
      resource: 'aws_instance.web_01',
      workspace: 'aleksandra-production',
      property: 'instance_type',
      expected: 't3.medium',
      actual: 't3.large',
      drift_type: 'configuration_changed',
      detected: '06:16:30',
      status: 'pending_fix'
    },
    {
      resource: 'aws_security_group.api',
      workspace: 'aleksandra-staging',
      property: 'ingress_rules',
      expected: '2 rules',
      actual: '3 rules',
      drift_type: 'manual_modification',
      detected: '06:15:15',
      status: 'investigating'
    },
    {
      resource: 'aws_s3_bucket.logs',
      workspace: 'aleksandra-infrastructure',
      property: 'lifecycle_policy',
      expected: 'configured',
      actual: 'missing',
      drift_type: 'resource_modified',
      detected: '06:14:45',
      status: 'acknowledged'
    }
  ]);

  const [moduleRegistry, setModuleRegistry] = useState([
    {
      name: 'aleksandra/vpc',
      version: 'v3.2.1',
      downloads: 156,
      workspaces: 8,
      lastUpdated: '2026-03-20',
      maintainer: 'Infrastructure Team',
      resources: ['aws_vpc', 'aws_subnet', 'aws_route_table'],
      verified: true
    },
    {
      name: 'aleksandra/eks-cluster',
      version: 'v2.1.4',
      downloads: 89,
      workspaces: 4,
      lastUpdated: '2026-03-18',
      maintainer: 'Platform Team',
      resources: ['aws_eks_cluster', 'aws_eks_node_group'],
      verified: true
    },
    {
      name: 'aleksandra/rds-instance',
      version: 'v1.8.2',
      downloads: 67,
      workspaces: 6,
      lastUpdated: '2026-03-15',
      maintainer: 'Database Team',
      resources: ['aws_rds_instance', 'aws_db_subnet_group'],
      verified: true
    },
    {
      name: 'aleksandra/monitoring',
      version: 'v1.5.3',
      downloads: 234,
      workspaces: 12,
      lastUpdated: '2026-03-22',
      maintainer: 'Monitoring Team',
      resources: ['aws_cloudwatch_dashboard', 'aws_sns_topic'],
      verified: false
    }
  ]);

  const [infraTimeline, setInfraTimeline] = useState([
    { time: '06:17', resources: 1247, cost: 2847.93, changes: 8, drift: 7, compliance: 94.2, deployments: 3 },
    { time: '06:16', resources: 1239, cost: 2823.47, changes: 12, drift: 5, compliance: 93.8, deployments: 2 },
    { time: '06:15', resources: 1227, cost: 2798.12, changes: 15, drift: 6, compliance: 94.1, deployments: 4 },
    { time: '06:14', resources: 1212, cost: 2756.89, changes: 18, drift: 8, compliance: 93.5, deployments: 1 },
    { time: '06:13', resources: 1194, cost: 2734.56, changes: 21, drift: 9, compliance: 93.2, deployments: 5 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update infrastructure metrics
      setInfraMetrics(prev => ({
        ...prev,
        totalResources: prev.totalResources + Math.floor((Math.random() - 0.3) * 10),
        managedResources: prev.totalResources - prev.unmanagedResources,
        pendingChanges: Math.max(0, prev.pendingChanges + Math.floor((Math.random() - 0.6) * 5)),
        appliedChanges: prev.appliedChanges + Math.floor(Math.random() * 5) + 1,
        failedDeployments: Math.max(0, prev.failedDeployments + Math.floor((Math.random() - 0.8) * 2)),
        estimatedCost: Math.max(2000, prev.estimatedCost + (Math.random() - 0.5) * 100),
        driftDetected: Math.max(0, prev.driftDetected + Math.floor((Math.random() - 0.7) * 3)),
        complianceScore: Math.max(85, Math.min(98, prev.complianceScore + (Math.random() - 0.5) * 2)),
        securityScore: Math.max(80, Math.min(95, prev.securityScore + (Math.random() - 0.5) * 1.5)),
        stateFileSize: Math.max(1.5, prev.stateFileSize + (Math.random() - 0.5) * 0.3)
      }));

      // Update infrastructure timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setInfraTimeline(prev => {
        const newData = {
          time: currentTime,
          resources: prev[prev.length - 1]?.resources + Math.floor((Math.random() - 0.3) * 10) || 1247,
          cost: Math.max(2000, prev[prev.length - 1]?.cost + (Math.random() - 0.5) * 100) || 2847.93,
          changes: Math.floor(Math.random() * 20) + 5,
          drift: Math.max(0, Math.floor(Math.random() * 12) + 2),
          compliance: Math.max(85, Math.min(98, prev[prev.length - 1]?.compliance + (Math.random() - 0.5) * 2)) || 94.2,
          deployments: Math.floor(Math.random() * 6) + 1
        };
        
        return [...prev.slice(-19), newData]; // Keep last 20 points
      });

      // Update workspace status
      setWorkspaces(prev => prev.map(workspace => ({
        ...workspace,
        resources: Math.max(50, workspace.resources + Math.floor((Math.random() - 0.5) * 5)),
        cost: Math.max(100, workspace.cost + (Math.random() - 0.5) * 50),
        drift: Math.max(0, workspace.drift + Math.floor((Math.random() - 0.8) * 2)),
        compliance: Math.max(85, Math.min(100, workspace.compliance + (Math.random() - 0.5) * 1))
      })));

      // Update resource inventory
      setResourceInventory(prev => prev.map(resource => ({
        ...resource,
        count: Math.max(resource.count * 0.9, resource.count + Math.floor((Math.random() - 0.5) * 3)),
        cost: Math.max(0, resource.cost + (Math.random() - 0.5) * 20),
        unmanaged: Math.max(0, resource.unmanaged + Math.floor((Math.random() - 0.9) * 1)),
        compliance: Math.max(80, Math.min(100, resource.compliance + (Math.random() - 0.5) * 2))
      })));

      // Update cost analysis
      setCostAnalysis(prev => prev.map(service => ({
        ...service,
        cost: Math.max(service.cost * 0.8, service.cost + (Math.random() - 0.5) * 20),
        forecast: Math.max(service.forecast * 0.8, service.forecast + (Math.random() - 0.5) * 15)
      })));

      // Update Terraform plans occasionally
      if (Math.random() < 0.2) { // 20% chance to update plan status
        setTerraformPlans(prev => prev.map(plan => {
          if (plan.status === 'pending_apply' && Math.random() < 0.5) {
            return {
              ...plan,
              status: 'applied',
              appliedAt: currentTime,
              duration: `${Math.floor(Math.random() * 5) + 1}m ${Math.floor(Math.random() * 60)}s`
            };
          }
          if (plan.status === 'planning' && Math.random() < 0.3) {
            return {
              ...plan,
              status: Math.random() < 0.8 ? 'pending_apply' : 'failed'
            };
          }
          return plan;
        }));
      }
    }, 28000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'healthy': case 'applied': case 'unlocked': return 'text-green-400';
      case 'error': case 'failed': return 'text-red-400';
      case 'planning': case 'pending_apply': case 'locked': return 'text-yellow-400';
      case 'acknowledged': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'high': case 'critical': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getComplianceColor = (score) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 90) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCostTrendColor = (trend) => {
    if (trend.startsWith('+')) return 'text-red-400';
    if (trend.startsWith('-')) return 'text-green-400';
    return 'text-gray-400';
  };

  const getDriftStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'pending_fix': return 'text-red-400';
      case 'investigating': return 'text-yellow-400';
      case 'acknowledged': return 'text-blue-400';
      case 'fixed': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-gray-900 to-purple-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Terraform Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🏗️ Terraform Infrastructure Dashboard
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>RESOURCES: <span className="text-violet-400 font-mono">{infraMetrics.totalResources}</span></div>
                <div>MANAGED: <span className="text-green-400">{infraMetrics.managedResources}</span></div>
                <div>DRIFT: <span className="text-yellow-400">{infraMetrics.driftDetected}</span></div>
                <div>COMPLIANCE: <span className="text-blue-400">{infraMetrics.complianceScore.toFixed(1)}%</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-violet-400">${infraMetrics.estimatedCost.toFixed(2)}</div>
              <div className="text-sm text-gray-300">Monthly Cost</div>
              <div className="text-xs text-violet-300">Workspaces: {infraMetrics.activeWorkspaces}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Infrastructure Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-violet-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Compliance Score</span>
              <span className="text-2xl">📋</span>
            </div>
            <div className="text-2xl font-bold text-violet-400 mb-1">{infraMetrics.complianceScore.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Infrastructure compliance</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Pending Changes</span>
              <span className="text-2xl">📝</span>
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-1">{infraMetrics.pendingChanges}</div>
            <div className="text-xs text-gray-400">Awaiting apply</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Drift Detected</span>
              <span className="text-2xl">⚠️</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{infraMetrics.driftDetected}</div>
            <div className="text-xs text-gray-400">Configuration drift</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Security Score</span>
              <span className="text-2xl">🔒</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{infraMetrics.securityScore.toFixed(1)}</div>
            <div className="text-xs text-gray-400">Security posture</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Infrastructure Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-violet-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Infrastructure Growth & Cost Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={infraTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#8b5cf6" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#8b5cf6" />
                <YAxis yAxisId="right" orientation="right" stroke="#8b5cf6" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #8b5cf6' }}
                  labelStyle={{ color: '#8b5cf6' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="resources" fill="#8b5cf6" fillOpacity={0.3} stroke="#8b5cf6" name="Resources" />
                <Line yAxisId="right" type="monotone" dataKey="cost" stroke="#f59e0b" strokeWidth={2} name="Cost ($)" />
                <Line yAxisId="right" type="monotone" dataKey="compliance" stroke="#22c55e" strokeWidth={2} name="Compliance %" />
                <Bar yAxisId="left" dataKey="drift" fill="#ef4444" name="Drift" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Cost Analysis */}
          <div className="bg-gray-800 rounded-xl p-6 border border-violet-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              💰 Infrastructure Cost Breakdown
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {costAnalysis.map((service, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{service.service}</span>
                    <span className={`text-sm font-bold ${getCostTrendColor(service.trend)}`}>{service.trend}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-1">
                    <div className="text-violet-400">${service.cost.toFixed(2)}</div>
                    <div className="text-blue-400">{service.percentage.toFixed(1)}%</div>
                    <div className="text-green-400">${service.forecast.toFixed(2)} proj</div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className="bg-violet-400 h-2 rounded-full" 
                      style={{ width: `${Math.min(100, (service.cost / service.budget) * 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Budget: ${service.budget.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Recent Terraform Plans */}
          <div className="bg-gray-800 rounded-xl p-6 border border-violet-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📋 Recent Terraform Plans
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {terraformPlans.map((plan, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-purple-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{plan.id}</span>
                    <span className={`text-xs font-bold ${getStatusColor(plan.status)}`}>{plan.status}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1 truncate">{plan.workspace}</div>
                  <div className="text-xs text-violet-300 mb-1">{plan.environment}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className="text-green-400">+{plan.changes.add}</div>
                    <div className="text-yellow-400">~{plan.changes.change}</div>
                    <div className="text-red-400">-{plan.changes.destroy}</div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-blue-400">{plan.cost}</span>
                    <span className="text-gray-400">{plan.createdAt}</span>
                  </div>
                  <div className="text-xs text-purple-300 mt-1">By: {plan.createdBy}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Workspace Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-violet-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🏢 Workspace Status
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {workspaces.map((workspace, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{workspace.name}</span>
                    <span className={`text-xs font-bold ${getStatusColor(workspace.status)}`}>{workspace.status}</span>
                  </div>
                  <div className="text-xs text-violet-300 mb-1">{workspace.environment}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="text-blue-400">{workspace.resources} resources</div>
                    <div className="text-green-400">${workspace.cost.toFixed(2)}</div>
                    <div className={getComplianceColor(workspace.compliance)}>{workspace.compliance.toFixed(1)}% compliance</div>
                    <div className="text-yellow-400">{workspace.drift} drift</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">TF: {workspace.terraform_version}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Findings */}
          <div className="bg-gray-800 rounded-xl p-6 border border-violet-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔒 Security Findings
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {securityFindings.map((finding, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{finding.rule}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(finding.severity)}`}>{finding.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1 truncate">{finding.finding}</div>
                  <div className="text-xs text-violet-300 mb-1">{finding.resource}</div>
                  <div className="text-xs text-blue-300 mb-1">{finding.workspace}</div>
                  <div className="text-xs text-yellow-300 truncate">{finding.remediation}</div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className={getStatusColor(finding.status)}>{finding.status}</span>
                    <span className="text-gray-400">{finding.detected}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resource Inventory & Drift Detection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Resource Inventory */}
          <div className="bg-gray-800 rounded-xl p-6 border border-violet-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📦 Resource Type Inventory
            </h3>
            <div className="space-y-3">
              {resourceInventory.map((resource, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{resource.type}</span>
                    <span className="text-xs text-green-400">${resource.cost.toFixed(2)}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-1">
                    <div className="text-violet-400">{resource.count} total</div>
                    <div className="text-green-400">{resource.managed} managed</div>
                    <div className="text-red-400">{resource.unmanaged} unmanaged</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={getComplianceColor(resource.compliance)}>{resource.compliance.toFixed(1)}% compliant</span>
                    <span className="text-gray-400">{resource.lastModified}</span>
                  </div>
                  <div className="text-xs text-blue-300 mt-1">Regions: {resource.regions.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Drift Detection */}
          <div className="bg-gray-800 rounded-xl p-6 border border-violet-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              ⚠️ Configuration Drift Detection
            </h3>
            <div className="space-y-3">
              {driftDetection.map((drift, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-yellow-500">
                  <div className="text-sm font-bold text-white mb-1 truncate">{drift.resource}</div>
                  <div className="text-xs text-violet-300 mb-1">{drift.workspace}</div>
                  <div className="text-xs text-yellow-300 mb-2">Property: {drift.property}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-green-400">Expected: {drift.expected}</div>
                    <div className="text-red-400">Actual: {drift.actual}</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={getDriftStatusColor(drift.status)}>{drift.status}</span>
                    <span className="text-gray-400">{drift.detected}</span>
                  </div>
                  <div className="text-xs text-blue-300 mt-1">Type: {drift.drift_type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Provider Metrics & Module Registry */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Provider Metrics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-violet-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              ☁️ Provider Distribution & Metrics
            </h3>
            <div className="space-y-3">
              {providerMetrics.map((provider, index) => (
                <div key={index} className="p-4 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-white">{provider.provider}</span>
                    <span className="text-violet-400 text-lg">${provider.cost.toFixed(2)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-blue-400">{provider.resources} resources</div>
                    <div className="text-green-400">{provider.regions} regions</div>
                    <div className="text-yellow-400">{provider.services} services</div>
                    <div className={getComplianceColor(provider.compliance)}>{provider.compliance.toFixed(1)}% compliant</div>
                  </div>
                  <div className="flex justify-between text-xs mt-2">
                    <span className="text-purple-300">v{provider.version}</span>
                    <span className="text-red-400">{provider.drift} drift</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Module Registry */}
          <div className="bg-gray-800 rounded-xl p-6 border border-violet-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📚 Module Registry
            </h3>
            <div className="space-y-3">
              {moduleRegistry.map((module, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{module.name}</span>
                    <span className={`text-xs px-2 py-1 rounded ${module.verified ? 'bg-green-600' : 'bg-gray-600'}`}>
                      {module.verified ? 'VERIFIED' : 'UNVERIFIED'}
                    </span>
                  </div>
                  <div className="text-xs text-violet-300 mb-1">{module.version} • {module.maintainer}</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-blue-400">{module.downloads} downloads</div>
                    <div className="text-green-400">{module.workspaces} workspaces</div>
                    <div className="text-yellow-400">{module.lastUpdated}</div>
                  </div>
                  <div className="text-xs text-purple-300 mt-1">Resources: {module.resources.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            TERRAFORM INFRASTRUCTURE | ALEKSANDRA AI CLOUD | INFRASTRUCTURE AS CODE MANAGEMENT
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Infrastructure Automation | Cost Optimization | Drift Detection | Security Compliance | State Management | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}