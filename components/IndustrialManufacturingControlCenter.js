// Industrial Manufacturing Control Center - 2026 SCADA & HMI Evolution
// Inspired by operational excellence, AI analytics, IIoT connectivity, enhanced cybersecurity
import { useState, useEffect } from 'react';
import { 
  Factory, Cpu, Cog, Thermometer, Gauge, Activity, AlertTriangle,
  TrendingUp, TrendingDown, Power, Wrench, Shield, Database,
  Clock, Eye, Target, Zap, Settings, Bell, CheckCircle,
  Monitor, Network, Cloud, Bot, BarChart3, PieChart
} from 'lucide-react';

export default function IndustrialManufacturingControlCenter() {
  const [plantMetrics, setPlantMetrics] = useState({
    overallEquipmentEffectiveness: 87.6,
    totalProductionUnits: 12456,
    qualityRate: 96.8,
    availabilityRate: 91.3,
    throughput: 245.7
  });

  const [productionLines, setProductionLines] = useState([
    {
      lineId: 'LINE-A1',
      product: 'Component Series X',
      status: 'RUNNING',
      oeeScore: 92.1,
      currentSpeed: 145,
      targetSpeed: 150,
      quality: 97.8,
      temperature: 72.4
    },
    {
      lineId: 'LINE-B2',
      product: 'Assembly Module Y',
      status: 'RUNNING',
      oeeScore: 89.5,
      currentSpeed: 67,
      targetSpeed: 75,
      quality: 95.2,
      temperature: 68.9
    },
    {
      lineId: 'LINE-C3',
      product: 'Precision Parts Z',
      status: 'MAINTENANCE',
      oeeScore: 0,
      currentSpeed: 0,
      targetSpeed: 200,
      quality: 0,
      temperature: 23.1
    }
  ]);

  const [industrialAlerts, setIndustrialAlerts] = useState([
    {
      id: 'ALERT-001',
      severity: 'HIGH',
      equipment: 'LINE-A1 Hydraulic System',
      description: 'Pressure reading exceeds normal range',
      timestamp: '6m ago'
    },
    {
      id: 'ALERT-002',
      severity: 'MEDIUM',
      equipment: 'LINE-B2 Temperature Sensor',
      description: 'Preventive maintenance window approaching',
      timestamp: '23m ago'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlantMetrics(prev => ({
        ...prev,
        overallEquipmentEffectiveness: Math.max(75, Math.min(95, prev.overallEquipmentEffectiveness + (Math.random() - 0.5) * 2)),
        totalProductionUnits: prev.totalProductionUnits + Math.floor(Math.random() * 10),
        throughput: Math.max(200, Math.min(280, prev.throughput + (Math.random() - 0.5) * 8))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'RUNNING': return 'text-green-400';
      case 'WARNING': return 'text-yellow-400';
      case 'MAINTENANCE': return 'text-blue-400';
      case 'ERROR': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'HIGH': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'LOW': return 'text-green-400 bg-green-900/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getOEEColor = (oee) => {
    if (oee >= 85) return 'text-green-400';
    if (oee >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* Industrial Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-blue-400 flex items-center">
            <Factory className="w-8 h-8 mr-3" />
            Industrial Manufacturing Control Center
          </h1>
          <div className="text-sm text-gray-400 flex items-center space-x-4">
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              <span>OEE: {plantMetrics.overallEquipmentEffectiveness.toFixed(1)}%</span>
            </div>
            <div className="flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              <span>{plantMetrics.throughput.toFixed(0)} units/hr</span>
            </div>
            <div>Real-Time: {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        <p className="text-gray-300">SCADA/HMI with AI analytics, IIoT connectivity, predictive maintenance & operational excellence</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Main Manufacturing Dashboard */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Plant Overview Metrics */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Plant Operations Overview
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Production Today</span>
                  <Factory className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {plantMetrics.totalProductionUnits.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">units</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">OEE Score</span>
                  <Target className="w-4 h-4 text-green-400" />
                </div>
                <div className={`text-2xl font-bold ${getOEEColor(plantMetrics.overallEquipmentEffectiveness)}`}>
                  {plantMetrics.overallEquipmentEffectiveness.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">efficiency</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Quality Rate</span>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {plantMetrics.qualityRate.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">first pass</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Throughput</span>
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {plantMetrics.throughput.toFixed(0)}
                </div>
                <div className="text-sm text-gray-400">units/hour</div>
              </div>
            </div>

            {/* Production Lines Status */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-3">Production Line Status</h3>
              {productionLines.map((line, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div>
                      <div className="font-bold text-white">{line.lineId}</div>
                      <div className="text-sm text-gray-400">{line.product}</div>
                      <div className={`text-sm font-semibold ${getStatusColor(line.status)}`}>
                        {line.status}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">OEE Score</div>
                      <div className={`text-lg font-bold ${getOEEColor(line.oeeScore)}`}>
                        {line.oeeScore.toFixed(1)}%
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Speed</div>
                      <div className="text-white font-mono">
                        {line.currentSpeed.toFixed(0)}/{line.targetSpeed}
                      </div>
                      <div className="text-xs text-gray-500">units/hr</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Quality</div>
                      <div className="text-white font-mono">{line.quality.toFixed(1)}%</div>
                      <div className="text-xs text-gray-500">pass rate</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Temperature</div>
                      <div className="text-white font-mono">{line.temperature.toFixed(1)}°C</div>
                      <div className="text-xs text-gray-500">operating temp</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Analytics Dashboard */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
              <Cpu className="w-5 h-5 mr-2" />
              AI Analytics & Predictive Intelligence
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-3 flex items-center">
                  <Wrench className="w-4 h-4 mr-2" />
                  Predictive Maintenance
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Algorithms Active:</span>
                    <span className="text-white">8</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Accuracy:</span>
                    <span className="text-green-400">94.7%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Cost Savings:</span>
                    <span className="text-green-400">$234K</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-3 flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Quality Intelligence
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Defect Prediction:</span>
                    <span className="text-green-400">96.8%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Anomaly Detection:</span>
                    <span className="text-blue-400">ACTIVE</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Quality Trends:</span>
                    <span className="text-green-400">IMPROVING</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-3 flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Process Optimization
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Energy Optimization:</span>
                    <span className="text-yellow-400">89.4%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Efficiency Gains:</span>
                    <span className="text-green-400">+12.3%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Waste Reduction:</span>
                    <span className="text-green-400">15.7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-4">
          
          {/* Industrial Alerts */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Industrial Alerts
            </h2>
            
            <div className="space-y-3">
              {industrialAlerts.map((alert) => (
                <div key={alert.id} className={`border rounded p-3 ${getSeverityColor(alert.severity)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">{alert.equipment}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {alert.severity}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">{alert.description}</div>
                  <div className="text-xs text-gray-400">{alert.timestamp}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SCADA Systems */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <Monitor className="w-5 h-5 mr-2" />
              SCADA Systems
            </h2>
            
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Connectivity</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">PLCs:</span>
                    <span className="text-green-400">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">HMI Stations:</span>
                    <span className="text-green-400">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">IoT Sensors:</span>
                    <span className="text-blue-400">234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cloud Uplink:</span>
                    <span className="text-green-400">98.7%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Cybersecurity</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Security Score:</span>
                    <span className="text-green-400">96.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Threats Detected:</span>
                    <span className="text-green-400">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Encryption:</span>
                    <span className="text-green-400">AES-256</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Energy Management */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center">
              <Power className="w-5 h-5 mr-2" />
              Energy Management
            </h2>
            
            <div className="bg-gray-800 p-3 rounded">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Load:</span>
                  <span className="text-yellow-400">1,248 kW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Efficiency:</span>
                  <span className="text-green-400">89.4%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Renewable:</span>
                  <span className="text-green-400">34.7%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cost Savings:</span>
                  <span className="text-green-400">12.8%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Robotic Systems */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
              <Bot className="w-5 h-5 mr-2" />
              Robotic Systems
            </h2>
            
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white font-medium">ROB-001</span>
                  <span className="text-green-400">OPERATIONAL</span>
                </div>
                <div className="text-xs text-gray-400">Articulated Arm - LINE-A1</div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-gray-400">Accuracy: 99.7%</span>
                  <span className="text-white">Cycle: 23.4s</span>
                </div>
              </div>
              
              <div className="bg-gray-800 p-3 rounded">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white font-medium">ROB-002</span>
                  <span className="text-green-400">OPERATIONAL</span>
                </div>
                <div className="text-xs text-gray-400">SCARA Assembly - LINE-B2</div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-gray-400">Accuracy: 99.9%</span>
                  <span className="text-white">Cycle: 18.9s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}