import React, { useState, useEffect } from 'react';
import { Factory, Gauge, Cog, AlertTriangle, TrendingUp, TrendingDown, Clock, Wrench, Users, Zap, Target, Eye } from 'lucide-react';

const IndustrialManufacturingOperationsCenter = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [factoryStatus, setFactoryStatus] = useState({
    operationMode: 'PRODUCTION',
    shift: '2ND SHIFT',
    overallEfficiency: 87.3,
    plantAvailability: 94.2,
    qualityRate: 96.8,
    safetyStatus: 'GREEN',
    energyConsumption: 78.5,
    activePlantLines: 8,
    totalPlantLines: 10
  });

  const [productionLines, setProductionLines] = useState([
    {
      id: 'LINE-01',
      name: 'Assembly Line Alpha',
      status: 'RUNNING',
      efficiency: 92.4,
      currentRate: 1847,
      targetRate: 2000,
      quality: 98.2,
      downtime: '0 min',
      operator: 'Team Leader Johnson',
      lastMaintenance: '2 days ago',
      nextMaintenance: '3 days',
      temperature: 24.5,
      vibration: 'NORMAL'
    },
    {
      id: 'LINE-02', 
      name: 'Packaging Line Beta',
      status: 'RUNNING',
      efficiency: 89.7,
      currentRate: 3240,
      targetRate: 3600,
      quality: 97.8,
      downtime: '0 min',
      operator: 'Supervisor Williams',
      lastMaintenance: '1 day ago',
      nextMaintenance: '4 days',
      temperature: 22.1,
      vibration: 'NORMAL'
    },
    {
      id: 'LINE-03',
      name: 'Welding Station Gamma',
      status: 'MAINTENANCE',
      efficiency: 0,
      currentRate: 0,
      targetRate: 1500,
      quality: 0,
      downtime: '45 min',
      operator: 'Maintenance Crew',
      lastMaintenance: 'NOW',
      nextMaintenance: 'Complete',
      temperature: 45.2,
      vibration: 'HIGH'
    },
    {
      id: 'LINE-04',
      name: 'Quality Control Delta',
      status: 'RUNNING',
      efficiency: 95.1,
      currentRate: 890,
      targetRate: 950,
      quality: 99.4,
      downtime: '0 min',
      operator: 'QC Inspector Martinez',
      lastMaintenance: '5 days ago',
      nextMaintenance: '2 days',
      temperature: 21.8,
      vibration: 'NORMAL'
    }
  ]);

  const [kpiMetrics, setKpiMetrics] = useState({
    oee: 87.3, // Overall Equipment Effectiveness
    availability: 94.2,
    performance: 89.7,
    quality: 96.8,
    unitsProduced: 12847,
    unitsTargeted: 14500,
    defectRate: 3.2,
    energyPerUnit: 0.47,
    costPerUnit: 12.34,
    cycleTime: 45.6
  });

  const [alarms, setAlarms] = useState([
    {
      id: 'ALM-001',
      priority: 'HIGH',
      line: 'LINE-03',
      type: 'EQUIPMENT FAULT',
      message: 'Welding temperature exceeds normal range - maintenance required',
      timestamp: '21:42:15',
      status: 'ACTIVE',
      acknowledged: false
    },
    {
      id: 'ALM-002',
      priority: 'MEDIUM',
      line: 'LINE-02',
      type: 'PERFORMANCE',
      message: 'Packaging rate below target - efficiency drop detected',
      timestamp: '21:38:22',
      status: 'INVESTIGATING',
      acknowledged: true
    },
    {
      id: 'ALM-003',
      priority: 'LOW',
      line: 'LINE-01',
      type: 'PREVENTIVE',
      message: 'Scheduled maintenance due in 3 days',
      timestamp: '21:30:05',
      status: 'SCHEDULED',
      acknowledged: true
    }
  ]);

  const [inventory, setInventory] = useState({
    rawMaterials: { level: 78.5, status: 'OK', reorderPoint: 30, daysOfSupply: 12 },
    wip: { level: 45.2, status: 'OK', optimization: 'BALANCED', flowRate: 98.3 },
    finishedGoods: { level: 89.7, status: 'HIGH', shippingReady: 456, backlog: 23 },
    consumables: { level: 34.8, status: 'LOW', critical: 3, reorderToday: 8 }
  });

  const [qualityMetrics, setQualityMetrics] = useState({
    currentBatch: {
      batchId: 'BATCH-2024-0347',
      product: 'Industrial Widget Type-A',
      size: 2500,
      tested: 2134,
      passed: 2087,
      failed: 47,
      inProgress: 366,
      passRate: 97.8
    },
    dailyStats: {
      totalTested: 12847,
      totalPassed: 12435,
      totalFailed: 412,
      dailyPassRate: 96.8,
      defectTypes: [
        { type: 'Dimensional', count: 156, percentage: 37.9 },
        { type: 'Surface', count: 134, percentage: 32.5 },
        { type: 'Functional', count: 89, percentage: 21.6 },
        { type: 'Material', count: 33, percentage: 8.0 }
      ]
    }
  });

  const [energyMonitoring, setEnergyMonitoring] = useState({
    totalConsumption: 2847.5, // kWh
    peakDemand: 425.7,
    averageDemand: 378.3,
    efficiency: 89.4,
    costToday: 847.23,
    co2Emissions: 1234.5,
    renewablePercentage: 23.4,
    powerFactor: 0.94
  });

  const [maintenance, setMaintenance] = useState({
    scheduledToday: [
      { equipment: 'LINE-03', type: 'Corrective', time: '22:00', duration: '2h', crew: 'Team-A' },
      { equipment: 'HVAC-02', type: 'Preventive', time: '23:30', duration: '1h', crew: 'Team-B' }
    ],
    mtbf: 847.2, // Mean Time Between Failures (hours)
    mttr: 2.3, // Mean Time To Repair (hours) 
    availabilityTarget: 95.0,
    currentAvailability: 94.2,
    maintenanceBacklog: 12,
    spareParts: { critical: 23, low: 8, adequate: 156 }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());

      // Update factory status
      setFactoryStatus(prev => ({
        ...prev,
        overallEfficiency: Math.max(75, Math.min(98, prev.overallEfficiency + (Math.random() - 0.5) * 2)),
        plantAvailability: Math.max(85, Math.min(99, prev.plantAvailability + (Math.random() - 0.5) * 1)),
        energyConsumption: Math.max(65, Math.min(85, prev.energyConsumption + (Math.random() - 0.5) * 3))
      }));

      // Update production lines
      setProductionLines(prev => prev.map(line => {
        if (line.status === 'RUNNING') {
          return {
            ...line,
            efficiency: Math.max(75, Math.min(98, line.efficiency + (Math.random() - 0.5) * 1.5)),
            currentRate: Math.max(line.targetRate * 0.7, Math.min(line.targetRate * 1.05, 
              line.currentRate + (Math.random() - 0.5) * 100)),
            quality: Math.max(94, Math.min(99.8, line.quality + (Math.random() - 0.5) * 0.5))
          };
        }
        return line;
      }));

      // Update KPI metrics
      setKpiMetrics(prev => ({
        ...prev,
        oee: Math.max(75, Math.min(98, prev.oee + (Math.random() - 0.5) * 1.2)),
        unitsProduced: prev.unitsProduced + Math.floor(Math.random() * 15),
        energyPerUnit: Math.max(0.3, Math.min(0.6, prev.energyPerUnit + (Math.random() - 0.5) * 0.02))
      }));

      // Occasionally add new alarms
      if (Math.random() > 0.9) {
        const alarmTypes = [
          { priority: 'MEDIUM', type: 'PERFORMANCE', message: 'Production rate variance detected' },
          { priority: 'LOW', type: 'SENSOR', message: 'Temperature sensor calibration required' },
          { priority: 'HIGH', type: 'SAFETY', message: 'Emergency stop activated on production line' }
        ];

        const newAlarm = alarmTypes[Math.floor(Math.random() * alarmTypes.length)];
        const alarmId = `ALM-${String(Date.now()).slice(-3)}`;

        setAlarms(prev => [
          {
            id: alarmId,
            ...newAlarm,
            line: `LINE-${String(Math.floor(Math.random() * 4) + 1).padStart(2, '0')}`,
            timestamp: new Date().toLocaleTimeString(),
            status: 'ACTIVE',
            acknowledged: false
          },
          ...prev.slice(0, 9)
        ]);
      }

      // Update energy consumption
      setEnergyMonitoring(prev => ({
        ...prev,
        totalConsumption: prev.totalConsumption + (Math.random() * 2),
        averageDemand: Math.max(300, Math.min(450, prev.averageDemand + (Math.random() - 0.5) * 10)),
        efficiency: Math.max(80, Math.min(95, prev.efficiency + (Math.random() - 0.5) * 1))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status.toUpperCase()) {
      case 'RUNNING':
      case 'OK':
      case 'GREEN':
      case 'NORMAL': return 'text-green-400';
      case 'MAINTENANCE':
      case 'INVESTIGATING':
      case 'SCHEDULED': return 'text-yellow-400';
      case 'FAULT':
      case 'HIGH':
      case 'CRITICAL': return 'text-red-400';
      case 'LOW': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toUpperCase()) {
      case 'HIGH': return 'text-red-400 bg-red-900/30 border-red-500';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500';
      case 'LOW': return 'text-blue-400 bg-blue-900/30 border-blue-500';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500';
    }
  };

  const getEfficiencyColor = (efficiency) => {
    if (efficiency >= 90) return 'text-green-400';
    if (efficiency >= 80) return 'text-yellow-400';
    if (efficiency >= 70) return 'text-orange-400';
    return 'text-red-400';
  };

  const formatRate = (rate) => {
    return rate >= 1000 ? `${(rate / 1000).toFixed(1)}K` : rate.toString();
  };

  return (
    <div className="bg-black text-white p-6 font-mono">
      <div className="mb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-blue-400">INDUSTRIAL MANUFACTURING OPERATIONS CENTER</h1>
          <div className="flex items-center text-sm text-gray-400">
            <span className="mr-4">SHIFT: {factoryStatus.shift}</span>
            <span className="mr-4">MODE: {factoryStatus.operationMode}</span>
            <span>{new Date(timestamp).toLocaleTimeString()} LOCAL</span>
          </div>
        </div>

        {/* Plant Status Strip */}
        <div className="bg-blue-900/30 border border-blue-500 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Factory className="w-6 h-6 text-blue-400 mr-3" />
              <div>
                <span className="text-blue-400 font-bold text-lg">MANUFACTURING PLANT STATUS</span>
                <div className={`text-sm font-bold ${getStatusColor(factoryStatus.safetyStatus)}`}>
                  SAFETY: {factoryStatus.safetyStatus} | OEE: {factoryStatus.overallEfficiency.toFixed(1)}%
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-gray-400">AVAILABILITY</div>
                <div className="text-green-400 font-bold text-xl">{factoryStatus.plantAvailability.toFixed(1)}%</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">QUALITY RATE</div>
                <div className="text-cyan-400 font-bold text-xl">{factoryStatus.qualityRate.toFixed(1)}%</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">ACTIVE LINES</div>
                <div className="text-yellow-400 font-bold text-xl">{factoryStatus.activePlantLines}/{factoryStatus.totalPlantLines}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">ENERGY USE</div>
                <div className="text-orange-400 font-bold text-xl">{factoryStatus.energyConsumption.toFixed(1)}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Production Lines Overview */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Production Lines Status */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Cog className="w-5 h-5 mr-2 text-blue-400" />
                PRODUCTION LINE STATUS
              </h3>
            </div>
            <div className="p-4 space-y-4">
              {productionLines.map((line) => (
                <div key={line.id} className="bg-gray-800 p-4 rounded">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <span className="text-cyan-400 font-bold">{line.id}</span>
                      <div className="text-white text-sm">{line.name}</div>
                    </div>
                    <div className="text-right">
                      <span className={`font-bold ${getStatusColor(line.status)}`}>{line.status}</span>
                      <div className="text-gray-400 text-xs">{line.operator}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-3 text-xs">
                    <div className="text-center">
                      <div className="text-gray-400">EFFICIENCY</div>
                      <div className={`font-bold ${getEfficiencyColor(line.efficiency)}`}>
                        {line.efficiency.toFixed(1)}%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400">RATE</div>
                      <div className="text-white font-bold">
                        {formatRate(line.currentRate)}/{formatRate(line.targetRate)}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400">QUALITY</div>
                      <div className="text-green-400 font-bold">{line.quality.toFixed(1)}%</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-gray-400">Temp:</span>
                      <span className="text-white ml-1">{line.temperature.toFixed(1)}°C</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Vibration:</span>
                      <span className={`ml-1 ${getStatusColor(line.vibration)}`}>{line.vibration}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Downtime:</span>
                      <span className="text-yellow-400 ml-1">{line.downtime}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Next Maint:</span>
                      <span className="text-blue-400 ml-1">{line.nextMaintenance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KPI Metrics */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Gauge className="w-5 h-5 mr-2 text-green-400" />
                KEY PERFORMANCE INDICATORS
              </h3>
            </div>
            <div className="p-4">
              {/* OEE Display */}
              <div className="bg-gray-800 p-4 rounded mb-4 text-center">
                <div className="text-gray-400 text-sm mb-2">OVERALL EQUIPMENT EFFECTIVENESS</div>
                <div className={`text-4xl font-bold ${getEfficiencyColor(kpiMetrics.oee)}`}>
                  {kpiMetrics.oee.toFixed(1)}%
                </div>
                <div className="grid grid-cols-3 gap-4 mt-3 text-xs">
                  <div className="text-center">
                    <div className="text-gray-400">AVAILABILITY</div>
                    <div className="text-green-400 font-bold">{kpiMetrics.availability.toFixed(1)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">PERFORMANCE</div>
                    <div className="text-yellow-400 font-bold">{kpiMetrics.performance.toFixed(1)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">QUALITY</div>
                    <div className="text-cyan-400 font-bold">{kpiMetrics.quality.toFixed(1)}%</div>
                  </div>
                </div>
              </div>

              {/* Production Metrics */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Units Produced:</span>
                  <span className="text-white">{kpiMetrics.unitsProduced.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Target Units:</span>
                  <span className="text-gray-300">{kpiMetrics.unitsTargeted.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Defect Rate:</span>
                  <span className="text-orange-400">{kpiMetrics.defectRate.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Energy/Unit:</span>
                  <span className="text-blue-400">{kpiMetrics.energyPerUnit.toFixed(2)} kWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cost/Unit:</span>
                  <span className="text-green-400">${kpiMetrics.costPerUnit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cycle Time:</span>
                  <span className="text-cyan-400">{kpiMetrics.cycleTime.toFixed(1)}s</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operations Grid */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Active Alarms */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                ACTIVE ALARMS
              </h3>
            </div>
            <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
              {alarms.map((alarm) => (
                <div key={alarm.id} className={`p-3 rounded border ${getPriorityColor(alarm.priority)}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold">{alarm.id}</span>
                    <span className="text-xs">{alarm.line}</span>
                  </div>
                  <div className="text-sm font-bold mb-1">{alarm.type}</div>
                  <div className="text-xs text-gray-300 mb-2">{alarm.message}</div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">{alarm.timestamp}</span>
                    <span className={getStatusColor(alarm.status)}>{alarm.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Status */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Target className="w-5 h-5 mr-2 text-purple-400" />
                INVENTORY STATUS
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {Object.entries(inventory).map(([type, data]) => (
                <div key={type} className="bg-gray-800 p-3 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-cyan-400 font-bold text-sm capitalize">
                      {type.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className={`text-xs ${getStatusColor(data.status)}`}>{data.status}</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Level:</span>
                      <span className="text-white">{data.level.toFixed(1)}%</span>
                    </div>
                    {data.daysOfSupply && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Supply:</span>
                        <span className="text-green-400">{data.daysOfSupply} days</span>
                      </div>
                    )}
                    {data.shippingReady && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Ready:</span>
                        <span className="text-blue-400">{data.shippingReady}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Control */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Eye className="w-5 h-5 mr-2 text-green-400" />
                QUALITY CONTROL
              </h3>
            </div>
            <div className="p-4">
              <div className="bg-gray-800 p-3 rounded mb-3">
                <div className="text-yellow-400 font-bold text-sm mb-2">CURRENT BATCH</div>
                <div className="text-xs space-y-1">
                  <div className="text-cyan-400">{qualityMetrics.currentBatch.batchId}</div>
                  <div className="text-gray-300">{qualityMetrics.currentBatch.product}</div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tested:</span>
                    <span className="text-white">{qualityMetrics.currentBatch.tested}/{qualityMetrics.currentBatch.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Pass Rate:</span>
                    <span className="text-green-400">{qualityMetrics.currentBatch.passRate.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
              
              <div className="text-sm">
                <div className="text-yellow-400 font-bold mb-2">DAILY STATISTICS</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Tested:</span>
                    <span className="text-white">{qualityMetrics.dailyStats.totalTested.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Daily Pass Rate:</span>
                    <span className="text-green-400">{qualityMetrics.dailyStats.dailyPassRate.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Failed Units:</span>
                    <span className="text-red-400">{qualityMetrics.dailyStats.totalFailed}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Energy Monitoring */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                ENERGY MONITORING
              </h3>
            </div>
            <div className="p-4">
              <div className="text-center mb-4">
                <div className="text-gray-400 text-xs">TOTAL CONSUMPTION</div>
                <div className="text-yellow-400 font-bold text-xl">{energyMonitoring.totalConsumption.toFixed(1)} kWh</div>
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Peak Demand:</span>
                  <span className="text-red-400">{energyMonitoring.peakDemand.toFixed(1)} kW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Demand:</span>
                  <span className="text-white">{energyMonitoring.averageDemand.toFixed(1)} kW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Efficiency:</span>
                  <span className="text-green-400">{energyMonitoring.efficiency.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cost Today:</span>
                  <span className="text-orange-400">${energyMonitoring.costToday.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CO2 Emissions:</span>
                  <span className="text-red-400">{energyMonitoring.co2Emissions.toFixed(1)} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Renewable:</span>
                  <span className="text-blue-400">{energyMonitoring.renewablePercentage.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Power Factor:</span>
                  <span className="text-cyan-400">{energyMonitoring.powerFactor.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Maintenance Schedule */}
        <div className="bg-gray-900 rounded border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-bold text-white flex items-center">
              <Wrench className="w-5 h-5 mr-2 text-orange-400" />
              MAINTENANCE SCHEDULE & RELIABILITY METRICS
            </h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-yellow-400 font-bold text-sm mb-3">TODAY'S SCHEDULE</h4>
                {maintenance.scheduledToday.map((task, index) => (
                  <div key={index} className="bg-gray-800 p-3 rounded mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-cyan-400 font-bold text-sm">{task.equipment}</span>
                      <span className="text-white text-xs">{task.time}</span>
                    </div>
                    <div className="text-xs space-y-1">
                      <div className="text-gray-300">{task.type} Maintenance</div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-yellow-400">{task.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Crew:</span>
                        <span className="text-blue-400">{task.crew}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-yellow-400 font-bold text-sm mb-3">RELIABILITY METRICS</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-800 p-3 rounded">
                    <div className="flex justify-between">
                      <span className="text-gray-400">MTBF:</span>
                      <span className="text-green-400">{maintenance.mtbf.toFixed(1)} hrs</span>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <div className="flex justify-between">
                      <span className="text-gray-400">MTTR:</span>
                      <span className="text-yellow-400">{maintenance.mttr.toFixed(1)} hrs</span>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className={maintenance.currentAvailability >= maintenance.availabilityTarget ? 
                        'text-green-400' : 'text-orange-400'}>
                        {maintenance.currentAvailability.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Backlog:</span>
                      <span className="text-red-400">{maintenance.maintenanceBacklog} items</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-yellow-400 font-bold text-sm mb-3">SPARE PARTS INVENTORY</h4>
                <div className="space-y-2">
                  <div className="bg-red-900/30 p-3 rounded text-center">
                    <div className="text-red-400 text-xs">CRITICAL</div>
                    <div className="text-white font-bold text-xl">{maintenance.spareParts.critical}</div>
                  </div>
                  <div className="bg-orange-900/30 p-3 rounded text-center">
                    <div className="text-orange-400 text-xs">LOW STOCK</div>
                    <div className="text-white font-bold text-xl">{maintenance.spareParts.low}</div>
                  </div>
                  <div className="bg-green-900/30 p-3 rounded text-center">
                    <div className="text-green-400 text-xs">ADEQUATE</div>
                    <div className="text-white font-bold text-xl">{maintenance.spareParts.adequate}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialManufacturingOperationsCenter;