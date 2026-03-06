import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Factory, Cog, TrendingUp, AlertTriangle, CheckCircle, Zap, Activity, Clock, Target, Eye, Settings, Wrench } from 'lucide-react';

const ManufacturingOperationsCenter = () => {
  const [productionStatus, setProductionStatus] = useState({
    overallOEE: 87.3, // Overall Equipment Effectiveness
    plannedProduction: 15000,
    actualProduction: 13847,
    defectRate: 1.2,
    downtimeMinutes: 47,
    energyEfficiency: 89.6,
    safetyIncidents: 0,
    activeWorkOrders: 24
  });

  const [productionLines, setProductionLines] = useState([
    {
      id: 'LINE-001',
      name: 'Assembly Line A',
      status: 'running',
      oee: 91.2,
      speed: 98.7, // % of target speed
      quality: 98.9, // % good parts
      availability: 94.1, // % uptime
      target: 850, // units/hour
      actual: 823,
      product: 'Widget Pro',
      operator: 'John Martinez',
      lastMaintenance: new Date(Date.now() - 86400000 * 3)
    },
    {
      id: 'LINE-002',
      name: 'Assembly Line B',
      status: 'running',
      oee: 88.7,
      speed: 95.2,
      quality: 97.4,
      availability: 95.7,
      target: 720,
      actual: 689,
      product: 'Widget Standard',
      operator: 'Sarah Kim',
      lastMaintenance: new Date(Date.now() - 86400000 * 1)
    },
    {
      id: 'LINE-003',
      name: 'Packaging Line 1',
      status: 'maintenance',
      oee: 0,
      speed: 0,
      quality: 100,
      availability: 0,
      target: 1200,
      actual: 0,
      product: 'N/A',
      operator: 'Maintenance Team',
      lastMaintenance: new Date()
    },
    {
      id: 'LINE-004',
      name: 'Quality Control',
      status: 'running',
      oee: 95.4,
      speed: 102.1,
      quality: 99.8,
      availability: 93.7,
      target: 500,
      actual: 478,
      product: 'All Products',
      operator: 'Lisa Rodriguez',
      lastMaintenance: new Date(Date.now() - 86400000 * 5)
    },
    {
      id: 'LINE-005',
      name: 'Material Handling',
      status: 'warning',
      oee: 76.8,
      speed: 85.3,
      quality: 100,
      availability: 90.1,
      target: 300,
      actual: 234,
      product: 'Raw Materials',
      operator: 'Mike Thompson',
      lastMaintenance: new Date(Date.now() - 86400000 * 7)
    }
  ]);

  const [equipmentStatus, setEquipmentStatus] = useState([
    {
      id: 'CNC-001',
      name: 'CNC Machining Center 1',
      type: 'CNC Machine',
      status: 'running',
      utilization: 94.2,
      temperature: 68.5, // Celsius
      vibration: 2.1, // mm/s
      spindle: 8500, // RPM
      nextMaintenance: '2026-03-10',
      alerts: 0,
      location: 'Zone A'
    },
    {
      id: 'ROBOT-001',
      name: 'Welding Robot #3',
      type: 'Industrial Robot',
      status: 'running',
      utilization: 87.6,
      temperature: 45.2,
      vibration: 0.8,
      spindle: 0,
      nextMaintenance: '2026-03-08',
      alerts: 0,
      location: 'Zone B'
    },
    {
      id: 'CONV-001',
      name: 'Main Conveyor System',
      type: 'Conveyor',
      status: 'running',
      utilization: 98.1,
      temperature: 32.1,
      vibration: 1.2,
      spindle: 0,
      nextMaintenance: '2026-03-12',
      alerts: 1,
      location: 'Zone C'
    },
    {
      id: 'PRESS-001',
      name: 'Hydraulic Press #2',
      type: 'Press',
      status: 'warning',
      utilization: 82.3,
      temperature: 78.9,
      vibration: 4.2,
      spindle: 0,
      nextMaintenance: '2026-03-07',
      alerts: 2,
      location: 'Zone A'
    },
    {
      id: 'INSPECT-001',
      name: 'Vision Inspection System',
      type: 'Quality Control',
      status: 'running',
      utilization: 96.7,
      temperature: 28.4,
      vibration: 0.3,
      spindle: 0,
      nextMaintenance: '2026-03-15',
      alerts: 0,
      location: 'Zone D'
    }
  ]);

  const [qualityMetrics, setQualityMetrics] = useState([
    {
      product: 'Widget Pro',
      totalProduced: 8234,
      defective: 98,
      defectRate: 1.19,
      reworked: 34,
      scrapped: 64,
      firstPassYield: 98.81,
      category: 'A-Grade'
    },
    {
      product: 'Widget Standard',
      totalProduced: 5613,
      defective: 67,
      defectRate: 1.19,
      reworked: 28,
      scrapped: 39,
      firstPassYield: 98.81,
      category: 'A-Grade'
    },
    {
      product: 'Widget Compact',
      totalProduced: 2847,
      defective: 45,
      defectRate: 1.58,
      reworked: 19,
      scrapped: 26,
      firstPassYield: 98.42,
      category: 'B-Grade'
    }
  ]);

  const [productionMetrics, setProductionMetrics] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      production: 13456,
      oee: 85.2,
      quality: 98.1,
      energy: 2847 // kWh
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      production: 13523,
      oee: 86.7,
      quality: 98.3,
      energy: 2892
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      production: 13678,
      oee: 87.1,
      quality: 98.6,
      energy: 2913
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      production: 13734,
      oee: 86.9,
      quality: 98.4,
      energy: 2931
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      production: 13798,
      oee: 87.8,
      quality: 98.7,
      energy: 2956
    },
    {
      time: new Date().toLocaleTimeString(),
      production: 13847,
      oee: 87.3,
      quality: 98.9,
      energy: 2978
    }
  ]);

  const [manufactringAlerts, setManufacturingAlerts] = useState([
    {
      id: 'MFG-001',
      severity: 'warning',
      type: 'Predictive Maintenance',
      message: 'Hydraulic Press #2 vibration levels elevated - maintenance recommended',
      timestamp: new Date(),
      status: 'active',
      equipment: 'PRESS-001',
      impact: 'medium'
    },
    {
      id: 'MFG-002',
      severity: 'caution',
      type: 'Quality Alert',
      message: 'Widget Compact defect rate trending upward - investigate cause',
      timestamp: new Date(Date.now() - 180000),
      status: 'investigating',
      equipment: 'LINE-001',
      impact: 'low'
    },
    {
      id: 'MFG-003',
      severity: 'info',
      type: 'Maintenance Complete',
      message: 'Packaging Line 1 scheduled maintenance completed successfully',
      timestamp: new Date(Date.now() - 360000),
      status: 'resolved',
      equipment: 'LINE-003',
      impact: 'none'
    }
  ]);

  const [workOrders, setWorkOrders] = useState([
    {
      id: 'WO-2847',
      product: 'Widget Pro',
      quantity: 500,
      priority: 'high',
      status: 'in-progress',
      progress: 78,
      line: 'Assembly Line A',
      startTime: new Date(Date.now() - 14400000),
      estimatedCompletion: new Date(Date.now() + 3600000),
      operator: 'John Martinez'
    },
    {
      id: 'WO-2848',
      product: 'Widget Standard',
      quantity: 750,
      priority: 'normal',
      status: 'in-progress',
      progress: 45,
      line: 'Assembly Line B',
      startTime: new Date(Date.now() - 10800000),
      estimatedCompletion: new Date(Date.now() + 7200000),
      operator: 'Sarah Kim'
    },
    {
      id: 'WO-2849',
      product: 'Widget Compact',
      quantity: 300,
      priority: 'low',
      status: 'scheduled',
      progress: 0,
      line: 'Assembly Line A',
      startTime: new Date(Date.now() + 7200000),
      estimatedCompletion: new Date(Date.now() + 21600000),
      operator: 'TBD'
    },
    {
      id: 'WO-2850',
      product: 'Widget Pro',
      quantity: 1000,
      priority: 'high',
      status: 'scheduled',
      progress: 0,
      line: 'Assembly Line B',
      startTime: new Date(Date.now() + 14400000),
      estimatedCompletion: new Date(Date.now() + 32400000),
      operator: 'TBD'
    }
  ]);

  const [plantOperators, setPlantOperators] = useState([
    {
      name: 'Plant Manager Rodriguez',
      position: 'Plant Manager',
      shift: 'Day Shift',
      status: 'on-duty',
      location: 'Control Room',
      experience: '15 years'
    },
    {
      name: 'Supervisor Martinez',
      position: 'Production Supervisor',
      shift: 'Day Shift',
      status: 'on-floor',
      location: 'Zone A',
      experience: '8 years'
    },
    {
      name: 'Operator Kim',
      position: 'Line Operator',
      shift: 'Day Shift',
      status: 'on-duty',
      location: 'Assembly Line B',
      experience: '6 years'
    },
    {
      name: 'Technician Thompson',
      position: 'Maintenance Tech',
      shift: 'Day Shift',
      status: 'maintenance',
      location: 'Zone C',
      experience: '12 years'
    }
  ]);

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update production status
      setProductionStatus(prev => ({
        ...prev,
        actualProduction: Math.max(12000, Math.min(15000, prev.actualProduction + Math.floor(Math.random() * 20))),
        overallOEE: Math.max(80, Math.min(95, prev.overallOEE + (Math.random() - 0.5) * 2)),
        defectRate: Math.max(0.5, Math.min(3, prev.defectRate + (Math.random() - 0.5) * 0.1)),
        downtimeMinutes: Math.max(30, Math.min(120, prev.downtimeMinutes + Math.floor((Math.random() - 0.7) * 5))),
        energyEfficiency: Math.max(85, Math.min(95, prev.energyEfficiency + (Math.random() - 0.5) * 1))
      }));

      // Update production lines
      setProductionLines(prev => prev.map(line => {
        if (line.status === 'running') {
          return {
            ...line,
            actual: Math.max(line.target * 0.7, Math.min(line.target * 1.1, line.actual + Math.floor((Math.random() - 0.5) * 20))),
            oee: Math.max(75, Math.min(98, line.oee + (Math.random() - 0.5) * 2)),
            speed: Math.max(85, Math.min(105, line.speed + (Math.random() - 0.5) * 2)),
            quality: Math.max(95, Math.min(100, line.quality + (Math.random() - 0.5) * 0.5)),
            availability: Math.max(85, Math.min(100, line.availability + (Math.random() - 0.5) * 1))
          };
        }
        return line;
      }));

      // Update equipment status
      setEquipmentStatus(prev => prev.map(equipment => {
        if (equipment.status === 'running') {
          return {
            ...equipment,
            utilization: Math.max(70, Math.min(100, equipment.utilization + (Math.random() - 0.5) * 2)),
            temperature: Math.max(equipment.temperature - 10, Math.min(equipment.temperature + 20, equipment.temperature + (Math.random() - 0.5) * 2)),
            vibration: Math.max(0.1, Math.min(5, equipment.vibration + (Math.random() - 0.5) * 0.2))
          };
        }
        return equipment;
      }));

      // Update production metrics
      const newMetrics = {
        time: new Date().toLocaleTimeString(),
        production: productionStatus.actualProduction,
        oee: productionStatus.overallOEE,
        quality: 96 + Math.random() * 4,
        energy: 2800 + Math.random() * 400
      };
      
      setProductionMetrics(prev => [...prev.slice(1), newMetrics]);

      // Occasionally add new manufacturing alerts
      if (Math.random() > 0.96) {
        const alertTypes = ['Predictive Maintenance', 'Quality Alert', 'Equipment Status', 'Energy Efficiency'];
        const severities = ['info', 'caution', 'warning', 'critical'];
        
        const newAlert = {
          id: `MFG-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time manufacturing operations alert',
          timestamp: new Date(),
          status: 'active',
          equipment: equipmentStatus[Math.floor(Math.random() * equipmentStatus.length)].id,
          impact: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)]
        };
        
        setManufacturingAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [productionStatus.actualProduction, productionStatus.overallOEE]);

  const getLineStatusColor = (status) => {
    switch (status) {
      case 'running': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'maintenance': return '#8B5CF6';
      case 'stopped': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getEquipmentStatusColor = (status) => {
    switch (status) {
      case 'running': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'maintenance': return '#8B5CF6';
      case 'fault': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'caution': return '#3B82F6';
      case 'info': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getWorkOrderPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#EF4444';
      case 'normal': return '#3B82F6';
      case 'low': return '#10B981';
      default: return '#6B7280';
    }
  };

  const productionBreakdown = [
    { name: 'Widget Pro', value: 60, color: '#3B82F6' },
    { name: 'Widget Standard', value: 30, color: '#10B981' },
    { name: 'Widget Compact', value: 10, color: '#8B5CF6' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Factory className="w-8 h-8 text-green-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">MANUFACTURING OPERATIONS CENTER</h1>
            <p className="text-gray-400">Real-time production monitoring, industrial automation, and Manufacturing Execution System (MES)</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{productionStatus.overallOEE.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">OVERALL OEE</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{productionStatus.actualProduction.toLocaleString()}</div>
            <div className="text-xs text-gray-400">UNITS PRODUCED</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{productionStatus.defectRate.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">DEFECT RATE</div>
          </div>
        </div>
      </div>

      {/* Manufacturing KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">PLANNED</span>
          </div>
          <div className="text-xl font-bold text-white">{productionStatus.plannedProduction.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Units Target</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">DOWNTIME</span>
          </div>
          <div className="text-xl font-bold text-white">{productionStatus.downtimeMinutes}</div>
          <div className="text-xs text-gray-400">Minutes</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">ENERGY</span>
          </div>
          <div className="text-xl font-bold text-white">{productionStatus.energyEfficiency.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Efficiency</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">SAFETY</span>
          </div>
          <div className="text-xl font-bold text-white">{productionStatus.safetyIncidents}</div>
          <div className="text-xs text-gray-400">Incidents</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Cog className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">WORK ORDERS</span>
          </div>
          <div className="text-xl font-bold text-white">{productionStatus.activeWorkOrders}</div>
          <div className="text-xs text-gray-400">Active</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">EFFICIENCY</span>
          </div>
          <div className="text-xl font-bold text-white">{((productionStatus.actualProduction / productionStatus.plannedProduction) * 100).toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Target vs Actual</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Production Lines */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Factory className="w-5 h-5 mr-2 text-green-400" />
            PRODUCTION LINES
          </h3>
          <div className="space-y-3">
            {productionLines.map(line => (
              <div key={line.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getLineStatusColor(line.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{line.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getLineStatusColor(line.status)}20`, 
                      color: getLineStatusColor(line.status) 
                    }}>
                      {line.status.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">OEE: {line.oee.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  Product: <span className="text-blue-400">{line.product}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Speed</span>
                    <span className="text-green-400">{line.speed.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Quality</span>
                    <span className="text-blue-400">{line.quality.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Availability</span>
                    <span className="text-purple-400">{line.availability.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Output</span>
                    <span className="text-white">{line.actual}/{line.target}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">Operator: {line.operator.split(' ')[0]}</span>
                  <span className="text-gray-500">
                    Maint: {Math.floor((Date.now() - line.lastMaintenance) / (1000 * 60 * 60 * 24))}d ago
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Cog className="w-5 h-5 mr-2 text-blue-400" />
            EQUIPMENT STATUS
          </h3>
          <div className="space-y-3">
            {equipmentStatus.map(equipment => (
              <div key={equipment.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getEquipmentStatusColor(equipment.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{equipment.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getEquipmentStatusColor(equipment.status)}20`, 
                      color: getEquipmentStatusColor(equipment.status) 
                    }}>
                      {equipment.status.toUpperCase()}
                    </span>
                    {equipment.alerts > 0 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-red-900 text-red-400">
                        {equipment.alerts} Alert{equipment.alerts > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">{equipment.type}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Utilization</span>
                    <span className="text-green-400">{equipment.utilization.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Temp</span>
                    <span className="text-blue-400">{equipment.temperature.toFixed(1)}°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Vibration</span>
                    <span className="text-purple-400">{equipment.vibration.toFixed(1)} mm/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location</span>
                    <span className="text-white">{equipment.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">Next Maint: {equipment.nextMaintenance}</span>
                  <span className="text-gray-500">{equipment.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Orders & Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            WORK ORDERS & ALERTS
          </h3>
          <div className="space-y-3 mb-4">
            {workOrders.slice(0, 3).map(order => (
              <div key={order.id} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{order.id}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getWorkOrderPriorityColor(order.priority)}20`, 
                      color: getWorkOrderPriorityColor(order.priority) 
                    }}>
                      {order.priority.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">{order.quantity} units</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  Product: <span className="text-blue-400">{order.product}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white">{order.progress}%</span>
                </div>
                
                <div className="bg-gray-700 rounded-full h-1.5 mb-2">
                  <div 
                    className="bg-green-500 rounded-full h-1.5 transition-all duration-500" 
                    style={{ width: `${order.progress}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-purple-400">{order.line}</span>
                  <span className="text-gray-500">{order.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Manufacturing Alerts */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">Manufacturing Alerts</div>
            <div className="space-y-2">
              {manufactringAlerts.slice(0, 3).map(alert => (
                <div key={alert.id} className="bg-gray-800 rounded-lg p-2 border-l-2" style={{ borderLeftColor: getAlertSeverityColor(alert.severity) }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-white">{alert.type}</span>
                    <span className="text-xs px-1 py-0.5 rounded-full" style={{ 
                      backgroundColor: `${getAlertSeverityColor(alert.severity)}20`, 
                      color: getAlertSeverityColor(alert.severity) 
                    }}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mb-1">{alert.message}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400">{alert.equipment}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Production Metrics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME PRODUCTION METRICS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={productionMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="production" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="Production (Units)"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="oee" 
                stroke="#10B981" 
                strokeWidth={2}
                name="OEE %"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="quality" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Quality %"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Production Mix & Quality Analysis */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">PRODUCTION MIX & QUALITY ANALYSIS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={productionBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {productionBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value) => [`${value}%`, 'Production Mix']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-4">
              {productionBreakdown.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: product.color }}
                    />
                    <span className="text-gray-400 text-sm">{product.name}</span>
                  </div>
                  <span className="text-white font-semibold">{product.value}%</span>
                </div>
              ))}
              
              {/* Quality Summary */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">Quality Summary</div>
                <div className="space-y-1 text-xs">
                  {qualityMetrics.slice(0, 3).map((metric, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-400">{metric.product.split(' ')[1]}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white">{metric.firstPassYield.toFixed(1)}%</span>
                        <span className="text-green-400">FPY</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Manufacturing Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Manufacturing Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Factory className="w-3 h-3 inline mr-1" />
                  Production Control
                </button>
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Wrench className="w-3 h-3 inline mr-1" />
                  Maintenance
                </button>
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors">
                  <Eye className="w-3 h-3 inline mr-1" />
                  Quality Control
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingOperationsCenter;