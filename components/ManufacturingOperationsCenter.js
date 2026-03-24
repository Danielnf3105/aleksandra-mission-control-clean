// Manufacturing Operations Center (MOC) - Industry 4.0 SCADA/MES Integration 2026
// Inspired by distributed SCADA systems, MES-ERP integration, and industrial automation
import { useState, useEffect } from 'react';
import { 
  Activity, AlertTriangle, Cog, Factory, Gauge, Settings, 
  Target, TrendingUp, TrendingDown, Zap, CheckCircle, XCircle,
  BarChart3, PieChart, LineChart, Monitor, Database, Network,
  Thermometer, Droplets, Wind, Battery, Power, Cpu, HardDrive,
  Eye, Users, Clock, Calendar, Package, Truck, Archive,
  Play, Pause, Square, RotateCcw, RefreshCw, Wrench, 
  Shield, Lock, Unlock, Bell, MessageCircle, Phone,
  MapPin, Navigation, Globe, Wifi, Bluetooth, Radio,
  FileText, Clipboard, BarChart as BarChartIcon, PieChart as PieIcon,
  Server, Router, Cloud, Link, Layers, Boxes, Workflow
} from 'lucide-react';
import { LineChart as RechartsLineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, RadialBarChart, RadialBar } from 'recharts';

export default function ManufacturingOperationsCenter() {
  const [mocStatus, setMocStatus] = useState({
    overallEquipmentEffectiveness: 87.3, // OEE
    totalProductionLines: 12,
    activeLines: 11,
    plannedDowntime: 1,
    unplannedDowntime: 0,
    currentShift: 'Night Shift',
    shiftProduction: 8945,
    targetProduction: 10000,
    qualityRate: 98.7,
    availabilityRate: 94.2,
    performanceRate: 93.1,
    scrapRate: 1.3,
    energyEfficiency: 89.4
  });

  const [productionLines, setProductionLines] = useState([
    {
      lineId: 'LINE-A01',
      name: 'Assembly Line Alpha',
      status: 'RUNNING',
      product: 'Motor Assembly Unit',
      currentSpeed: 245, // units/hour
      targetSpeed: 250,
      efficiency: 98.0,
      availability: 99.2,
      quality: 98.9,
      oee: 97.1,
      temperature: 24.5,
      vibration: 0.8, // mm/s
      pressure: 6.2, // bar
      operatorCount: 4,
      cycleTime: 14.7, // seconds
      lastMaintenance: '2026-03-10',
      nextMaintenance: '2026-03-20'
    },
    {
      lineId: 'LINE-B02',
      name: 'Fabrication Line Beta',
      status: 'RUNNING',
      product: 'Housing Component',
      currentSpeed: 189,
      targetSpeed: 200,
      efficiency: 94.5,
      availability: 97.8,
      quality: 96.7,
      oee: 89.6,
      temperature: 26.8,
      vibration: 1.2,
      pressure: 5.8,
      operatorCount: 3,
      cycleTime: 19.1,
      lastMaintenance: '2026-03-08',
      nextMaintenance: '2026-03-18'
    },
    {
      lineId: 'LINE-C03',
      name: 'Packaging Line Charlie',
      status: 'RUNNING',
      product: 'Final Package',
      currentSpeed: 456,
      targetSpeed: 480,
      efficiency: 95.0,
      availability: 98.5,
      quality: 99.2,
      oee: 92.8,
      temperature: 22.1,
      vibration: 0.6,
      pressure: 4.9,
      operatorCount: 2,
      cycleTime: 7.9,
      lastMaintenance: '2026-03-12',
      nextMaintenance: '2026-03-22'
    },
    {
      lineId: 'LINE-D04',
      name: 'Testing Line Delta',
      status: 'MAINTENANCE',
      product: 'Quality Inspection',
      currentSpeed: 0,
      targetSpeed: 120,
      efficiency: 0,
      availability: 0,
      quality: 100,
      oee: 0,
      temperature: 23.4,
      vibration: 0.0,
      pressure: 0.0,
      operatorCount: 1,
      cycleTime: 30.0,
      lastMaintenance: 'In Progress',
      nextMaintenance: '2026-04-01'
    },
    {
      lineId: 'LINE-E05',
      name: 'Welding Line Echo',
      status: 'RUNNING',
      product: 'Frame Welding',
      currentSpeed: 67,
      targetSpeed: 75,
      efficiency: 89.3,
      availability: 95.2,
      quality: 97.8,
      oee: 83.1,
      temperature: 28.9,
      vibration: 1.8,
      pressure: 7.3,
      operatorCount: 5,
      cycleTime: 53.7,
      lastMaintenance: '2026-03-05',
      nextMaintenance: '2026-03-25'
    },
    {
      lineId: 'LINE-F06',
      name: 'Paint Line Foxtrot',
      status: 'WARNING',
      product: 'Surface Coating',
      currentSpeed: 89,
      targetSpeed: 100,
      efficiency: 89.0,
      availability: 92.4,
      quality: 95.6,
      oee: 78.7,
      temperature: 25.6,
      vibration: 1.4,
      pressure: 6.8,
      operatorCount: 3,
      cycleTime: 40.4,
      lastMaintenance: '2026-03-01',
      nextMaintenance: '2026-03-16'
    }
  ]);

  const [scadaSystems, setScadaSystems] = useState({
    primaryPLC: {
      name: 'Primary PLC Controller',
      model: 'Siemens S7-1500',
      status: 'ONLINE',
      cpuUsage: 34.7,
      memoryUsage: 45.2,
      ioModules: 24,
      activeConnections: 156,
      scanTime: '2.3ms',
      diagnosticsStatus: 'HEALTHY',
      firmwareVersion: 'V2.9.4',
      lastUpdate: '2026-02-15'
    },
    backupPLC: {
      name: 'Backup PLC Controller',
      model: 'Siemens S7-1500',
      status: 'STANDBY',
      cpuUsage: 12.1,
      memoryUsage: 23.8,
      ioModules: 24,
      activeConnections: 0,
      scanTime: '2.1ms',
      diagnosticsStatus: 'HEALTHY',
      firmwareVersion: 'V2.9.4',
      lastUpdate: '2026-02-15'
    },
    hmiStations: [
      {
        stationId: 'HMI-01',
        location: 'Control Room Central',
        status: 'ACTIVE',
        operator: 'Shift Supervisor Johnson',
        activeScreens: 4,
        alarmCount: 2,
        connectionStatus: 'CONNECTED'
      },
      {
        stationId: 'HMI-02',
        location: 'Line Floor Station A',
        status: 'ACTIVE',
        operator: 'Operator Williams',
        activeScreens: 2,
        alarmCount: 0,
        connectionStatus: 'CONNECTED'
      },
      {
        stationId: 'HMI-03',
        location: 'Line Floor Station B',
        status: 'ACTIVE',
        operator: 'Operator Chen',
        activeScreens: 3,
        alarmCount: 1,
        connectionStatus: 'CONNECTED'
      },
      {
        stationId: 'HMI-04',
        location: 'Maintenance Office',
        status: 'IDLE',
        operator: 'Maintenance Taylor',
        activeScreens: 1,
        alarmCount: 5,
        connectionStatus: 'CONNECTED'
      }
    ],
    communicationProtocols: {
      ethernet: { status: 'ACTIVE', devices: 89, bandwidth: '85%' },
      modbus: { status: 'ACTIVE', devices: 156, bandwidth: '67%' },
      profinet: { status: 'ACTIVE', devices: 234, bandwidth: '72%' },
      canbus: { status: 'ACTIVE', devices: 45, bandwidth: '34%' },
      opcua: { status: 'ACTIVE', clients: 12, bandwidth: '23%' }
    }
  });

  const [mesIntegration, setMesIntegration] = useState({
    productionOrders: {
      active: 23,
      completed: 156,
      planned: 45,
      urgent: 3,
      onTime: 94.7,
      qualityPassed: 98.2
    },
    inventoryManagement: {
      rawMaterials: 'ADEQUATE',
      workInProgress: 2340,
      finishedGoods: 8945,
      criticalShortages: 2,
      reorderAlerts: 5,
      warehouseUtilization: 78.9
    },
    qualityControl: {
      inspectionStations: 8,
      testsPerformed: 1567,
      passRate: 98.7,
      defectRate: 1.3,
      rejectedLots: 2,
      qualityTrends: 'IMPROVING'
    },
    maintenance: {
      scheduledTasks: 12,
      completedTasks: 8,
      overdueTasks: 1,
      emergencyRepairs: 0,
      mtbf: '156 hours', // Mean Time Between Failures
      mttr: '2.4 hours', // Mean Time To Repair
      maintenanceEfficiency: 92.4
    },
    energyManagement: {
      totalConsumption: '2.4 MWh',
      peakDemand: '456 kW',
      efficiency: 89.4,
      costPerUnit: '$0.12/kWh',
      renewablePercentage: 34.7,
      carbonFootprint: '1.2 tons CO2/day'
    }
  });

  const [productionMetrics, setProductionMetrics] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      oee: 86.8,
      production: 8734,
      quality: 98.4,
      efficiency: 87.2,
      availability: 93.8
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      oee: 87.1,
      production: 8812,
      quality: 98.6,
      efficiency: 87.5,
      availability: 94.1
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      oee: 87.0,
      production: 8856,
      quality: 98.5,
      efficiency: 87.3,
      availability: 94.0
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      oee: 87.2,
      production: 8889,
      quality: 98.7,
      efficiency: 87.4,
      availability: 94.2
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      oee: 87.3,
      production: 8912,
      quality: 98.7,
      efficiency: 87.6,
      availability: 94.2
    },
    {
      time: new Date().toLocaleTimeString(),
      oee: 87.3,
      production: 8945,
      quality: 98.7,
      efficiency: 87.6,
      availability: 94.2
    }
  ]);

  const [alarmManagement, setAlarmManagement] = useState([
    {
      alarmId: 'ALM-2026-001847',
      severity: 'WARNING',
      source: 'LINE-F06',
      description: 'Paint booth temperature exceeding optimal range',
      timestamp: new Date(Date.now() - 180000),
      status: 'ACTIVE',
      operator: 'Operator Chen',
      actionTaken: 'Adjusting cooling system setpoint',
      acknowledgedBy: 'Supervisor Johnson',
      category: 'PROCESS_DEVIATION'
    },
    {
      alarmId: 'ALM-2026-001848',
      severity: 'HIGH',
      source: 'LINE-E05',
      description: 'Welding torch pressure below minimum threshold',
      timestamp: new Date(Date.now() - 420000),
      status: 'ACKNOWLEDGED',
      operator: 'Operator Martinez',
      actionTaken: 'Gas supply inspection initiated',
      acknowledgedBy: 'Supervisor Johnson',
      category: 'EQUIPMENT_FAULT'
    },
    {
      alarmId: 'ALM-2026-001849',
      severity: 'CRITICAL',
      source: 'UTILITIES',
      description: 'Compressed air pressure drop detected',
      timestamp: new Date(Date.now() - 600000),
      status: 'RESOLVED',
      operator: 'Maintenance Taylor',
      actionTaken: 'Compressor restart completed, pressure restored',
      acknowledgedBy: 'Plant Manager Davis',
      category: 'UTILITY_SYSTEM'
    },
    {
      alarmId: 'ALM-2026-001850',
      severity: 'WARNING',
      source: 'LINE-A01',
      description: 'Conveyor belt speed variance detected',
      timestamp: new Date(Date.now() - 780000),
      status: 'ACKNOWLEDGED',
      operator: 'Operator Williams',
      actionTaken: 'Belt tension adjustment in progress',
      acknowledgedBy: 'Supervisor Johnson',
      category: 'MECHANICAL'
    }
  ]);

  const [operationsTeam, setOperationsTeam] = useState([
    {
      name: 'Plant Manager Davis',
      position: 'Plant Manager',
      shift: 'Day Shift (06:00-18:00)',
      status: 'ON_DUTY',
      location: 'Executive Office',
      experience: '20 years',
      certifications: ['Six Sigma Black Belt', 'Lean Manufacturing'],
      responsibilities: 'Overall plant operations oversight'
    },
    {
      name: 'Supervisor Johnson',
      position: 'Production Supervisor',
      shift: 'Night Shift (18:00-06:00)',
      status: 'ACTIVE_MONITORING',
      location: 'Control Room',
      experience: '12 years',
      certifications: ['PLC Programming', 'Safety Management'],
      responsibilities: 'Real-time production oversight, alarm management'
    },
    {
      name: 'Operator Williams',
      position: 'Line Operator',
      shift: 'Night Shift (18:00-06:00)',
      status: 'LINE_OPERATION',
      location: 'Assembly Line Alpha',
      experience: '8 years',
      certifications: ['HMI Operation', 'Quality Control'],
      responsibilities: 'Line A01 operation and quality monitoring'
    },
    {
      name: 'Operator Chen',
      position: 'Line Operator',
      shift: 'Night Shift (18:00-06:00)',
      status: 'LINE_OPERATION',
      location: 'Paint Line Foxtrot',
      experience: '6 years',
      certifications: ['Paint Systems', 'Environmental Safety'],
      responsibilities: 'Paint line operation and environmental compliance'
    },
    {
      name: 'Maintenance Taylor',
      position: 'Maintenance Technician',
      shift: 'On-Call',
      status: 'MAINTENANCE_TASK',
      location: 'Testing Line Delta',
      experience: '15 years',
      certifications: ['Electrical Systems', 'Mechanical Repair'],
      responsibilities: 'Preventive maintenance and emergency repairs'
    },
    {
      name: 'QA Rodriguez',
      position: 'Quality Assurance',
      shift: 'Night Shift (18:00-06:00)',
      status: 'INSPECTION',
      location: 'Quality Lab',
      experience: '10 years',
      certifications: ['ISO 9001', 'Statistical Process Control'],
      responsibilities: 'Quality control and process validation'
    }
  ]);

  // Real-time manufacturing updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update MOC status
      setMocStatus(prev => ({
        ...prev,
        overallEquipmentEffectiveness: Math.max(75, Math.min(95, prev.overallEquipmentEffectiveness + (Math.random() - 0.5) * 2)),
        shiftProduction: Math.max(7000, Math.min(11000, prev.shiftProduction + Math.floor((Math.random() - 0.3) * 50))),
        qualityRate: Math.max(95, Math.min(99.5, prev.qualityRate + (Math.random() - 0.5) * 0.5)),
        energyEfficiency: Math.max(80, Math.min(95, prev.energyEfficiency + (Math.random() - 0.5) * 1))
      }));

      // Update production lines
      setProductionLines(prev => prev.map(line => {
        if (line.status === 'RUNNING') {
          return {
            ...line,
            currentSpeed: Math.max(line.targetSpeed * 0.8, Math.min(line.targetSpeed * 1.05, line.currentSpeed + (Math.random() - 0.5) * 10)),
            efficiency: Math.max(80, Math.min(99, line.efficiency + (Math.random() - 0.5) * 2)),
            temperature: Math.max(20, Math.min(35, line.temperature + (Math.random() - 0.5) * 1)),
            vibration: Math.max(0.1, Math.min(3.0, line.vibration + (Math.random() - 0.5) * 0.2))
          };
        }
        return line;
      }));

      // Update SCADA systems
      setScadaSystems(prev => ({
        ...prev,
        primaryPLC: {
          ...prev.primaryPLC,
          cpuUsage: Math.max(20, Math.min(60, prev.primaryPLC.cpuUsage + (Math.random() - 0.5) * 5)),
          memoryUsage: Math.max(30, Math.min(70, prev.primaryPLC.memoryUsage + (Math.random() - 0.5) * 3))
        }
      }));

      // Update production metrics
      const newMetrics = {
        time: new Date().toLocaleTimeString(),
        oee: mocStatus.overallEquipmentEffectiveness,
        production: mocStatus.shiftProduction,
        quality: mocStatus.qualityRate,
        efficiency: mocStatus.performanceRate,
        availability: mocStatus.availabilityRate
      };
      
      setProductionMetrics(prev => [...prev.slice(1), newMetrics]);

      // Occasionally add new alarms
      if (Math.random() > 0.95) {
        const severities = ['WARNING', 'HIGH', 'CRITICAL'];
        const sources = ['LINE-A01', 'LINE-B02', 'LINE-C03', 'LINE-E05', 'LINE-F06', 'UTILITIES'];
        const categories = ['PROCESS_DEVIATION', 'EQUIPMENT_FAULT', 'UTILITY_SYSTEM', 'MECHANICAL'];
        const descriptions = [
          'Temperature variance detected',
          'Pressure deviation from setpoint',
          'Vibration levels exceeding threshold',
          'Speed optimization required',
          'Utility system check needed'
        ];
        
        const newAlarm = {
          alarmId: `ALM-2026-${Date.now().toString().slice(-6)}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          source: sources[Math.floor(Math.random() * sources.length)],
          description: descriptions[Math.floor(Math.random() * descriptions.length)],
          timestamp: new Date(),
          status: 'ACTIVE',
          operator: 'System Auto-Detection',
          actionTaken: 'Awaiting operator response',
          acknowledgedBy: 'Pending',
          category: categories[Math.floor(Math.random() * categories.length)]
        };
        
        setAlarmManagement(prev => [newAlarm, ...prev.slice(0, 9)]);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [mocStatus.overallEquipmentEffectiveness, mocStatus.shiftProduction, mocStatus.qualityRate, mocStatus.performanceRate, mocStatus.availabilityRate]);

  const getStatusColor = (status) => {
    switch(status?.toUpperCase()) {
      case 'RUNNING': case 'ONLINE': case 'ACTIVE': case 'HEALTHY': case 'CONNECTED': return 'text-green-400';
      case 'WARNING': case 'STANDBY': case 'IDLE': case 'ADEQUATE': return 'text-yellow-400';
      case 'CRITICAL': case 'MAINTENANCE': case 'OFFLINE': case 'FAILED': return 'text-red-400';
      case 'ACKNOWLEDGED': case 'RESOLVED': case 'IMPROVING': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity?.toUpperCase()) {
      case 'CRITICAL': return 'bg-red-900/30 border-red-500/50 text-red-300';
      case 'HIGH': return 'bg-orange-900/30 border-orange-500/50 text-orange-300';
      case 'WARNING': return 'bg-yellow-900/30 border-yellow-500/50 text-yellow-300';
      case 'INFO': return 'bg-blue-900/30 border-blue-500/50 text-blue-300';
      default: return 'bg-gray-900/30 border-gray-500/50 text-gray-300';
    }
  };

  const getLineStatusIcon = (status) => {
    switch(status) {
      case 'RUNNING': return <Play className="w-4 h-4 text-green-400" />;
      case 'MAINTENANCE': return <Wrench className="w-4 h-4 text-orange-400" />;
      case 'WARNING': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'STOPPED': return <Square className="w-4 h-4 text-red-400" />;
      case 'PAUSED': return <Pause className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getEfficiencyColor = (efficiency) => {
    if (efficiency >= 95) return 'text-green-400';
    if (efficiency >= 90) return 'text-blue-400';
    if (efficiency >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const productionDistribution = [
    { name: 'On Schedule', value: 83, color: '#10B981' },
    { name: 'Ahead', value: 12, color: '#3B82F6' },
    { name: 'Behind', value: 5, color: '#F59E0B' }
  ];

  const qualityDistribution = [
    { name: 'Pass', value: 98.7, color: '#10B981' },
    { name: 'Rework', value: 1.0, color: '#F59E0B' },
    { name: 'Scrap', value: 0.3, color: '#EF4444' }
  ];

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* MOC Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-blue-400 flex items-center">
            <Factory className="w-8 h-8 mr-3" />
            Manufacturing Operations Center
          </h1>
          <div className="text-sm text-gray-400 flex items-center space-x-4">
            <div className="flex items-center">
              <Gauge className="w-4 h-4 mr-2" />
              <span>OEE: {mocStatus.overallEquipmentEffectiveness.toFixed(1)}%</span>
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              <span>Production: {mocStatus.shiftProduction.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Quality: {mocStatus.qualityRate.toFixed(1)}%</span>
            </div>
            <div>Shift: {mocStatus.currentShift}</div>
          </div>
        </div>
        <p className="text-gray-300">Industry 4.0 SCADA/MES integration with distributed control systems, real-time analytics & predictive maintenance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Main Manufacturing Dashboard */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Manufacturing Overview */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Production Operations Overview
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">OEE</span>
                  <Gauge className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {mocStatus.overallEquipmentEffectiveness.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">overall efficiency</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Active Lines</span>
                  <Factory className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {mocStatus.activeLines}/{mocStatus.totalProductionLines}
                </div>
                <div className="text-sm text-gray-400">production lines</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Shift Output</span>
                  <Package className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {(mocStatus.shiftProduction / 1000).toFixed(1)}K
                </div>
                <div className="text-sm text-gray-400">
                  Target: {(mocStatus.targetProduction / 1000).toFixed(0)}K
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Quality Rate</span>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {mocStatus.qualityRate.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">pass rate</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Availability</span>
                  <Activity className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-cyan-400">
                  {mocStatus.availabilityRate.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">uptime</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Energy Efficiency</span>
                  <Zap className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">
                  {mocStatus.energyEfficiency.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">efficiency</div>
              </div>
            </div>

            {/* Production Lines Status */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-3">Production Lines</h3>
              {productionLines.map((line, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
                    <div>
                      <div className="flex items-center mb-1">
                        {getLineStatusIcon(line.status)}
                        <span className="ml-2 font-bold text-white text-sm">{line.lineId}</span>
                      </div>
                      <div className="text-sm text-gray-400">{line.name}</div>
                      <div className="text-xs text-gray-500">{line.product}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Status</div>
                      <div className={`font-semibold ${getStatusColor(line.status)}`}>
                        {line.status}
                      </div>
                      <div className="text-xs text-gray-500">Operators: {line.operatorCount}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Speed</div>
                      <div className="text-white font-mono">
                        {line.currentSpeed.toFixed(0)} u/h
                      </div>
                      <div className="text-xs text-gray-500">
                        Target: {line.targetSpeed}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">OEE</div>
                      <div className={`font-mono ${getEfficiencyColor(line.oee)}`}>
                        {line.oee.toFixed(1)}%
                      </div>
                      <div className="text-xs text-gray-500">
                        Cycle: {line.cycleTime}s
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Efficiency</div>
                      <div className={`font-mono ${getEfficiencyColor(line.efficiency)}`}>
                        {line.efficiency.toFixed(1)}%
                      </div>
                      <div className="text-xs text-gray-500">
                        Avail: {line.availability.toFixed(1)}%
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Temperature</div>
                      <div className={`font-mono ${line.temperature > 30 ? 'text-red-400' : line.temperature > 25 ? 'text-yellow-400' : 'text-green-400'}`}>
                        {line.temperature.toFixed(1)}°C
                      </div>
                      <div className="text-xs text-gray-500">
                        Vib: {line.vibration.toFixed(1)}mm/s
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Quality</div>
                      <div className="text-green-400 font-mono">{line.quality.toFixed(1)}%</div>
                      <div className="text-xs text-gray-500">
                        Pressure: {line.pressure.toFixed(1)}bar
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Maintenance</div>
                      <div className="text-blue-400 text-xs">{line.nextMaintenance}</div>
                      <div className="text-xs text-gray-500">
                        Last: {line.lastMaintenance}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          line.oee > 90 ? 'bg-green-400' :
                          line.oee > 80 ? 'bg-blue-400' :
                          line.oee > 70 ? 'bg-yellow-400' :
                          'bg-red-400'
                        }`}
                        style={{width: `${line.oee}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SCADA Systems & Real-Time Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SCADA Systems */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-orange-400 mb-4 flex items-center">
                <Cpu className="w-5 h-5 mr-2" />
                SCADA Systems
              </h2>
              
              {/* PLC Controllers */}
              <div className="space-y-4 mb-4">
                <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-white text-sm">Primary PLC</span>
                    <span className={`text-sm font-semibold ${getStatusColor(scadaSystems.primaryPLC.status)}`}>
                      {scadaSystems.primaryPLC.status}
                    </span>
                  </div>
                  
                  <div className="text-sm text-blue-300 mb-2">{scadaSystems.primaryPLC.model}</div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">CPU:</span>
                      <span className={getEfficiencyColor(100 - scadaSystems.primaryPLC.cpuUsage)}>
                        {scadaSystems.primaryPLC.cpuUsage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Memory:</span>
                      <span className={getEfficiencyColor(100 - scadaSystems.primaryPLC.memoryUsage)}>
                        {scadaSystems.primaryPLC.memoryUsage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">I/O Modules:</span>
                      <span className="text-green-400">{scadaSystems.primaryPLC.ioModules}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Scan Time:</span>
                      <span className="text-blue-400">{scadaSystems.primaryPLC.scanTime}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-400">
                    Connections: <span className="text-white">{scadaSystems.primaryPLC.activeConnections}</span>
                  </div>
                </div>

                <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-white text-sm">Backup PLC</span>
                    <span className={`text-sm font-semibold ${getStatusColor(scadaSystems.backupPLC.status)}`}>
                      {scadaSystems.backupPLC.status}
                    </span>
                  </div>
                  
                  <div className="text-sm text-blue-300 mb-2">{scadaSystems.backupPLC.model}</div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">CPU:</span>
                      <span className="text-green-400">{scadaSystems.backupPLC.cpuUsage.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Scan Time:</span>
                      <span className="text-blue-400">{scadaSystems.backupPLC.scanTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* HMI Stations */}
              <div className="border-t border-gray-700 pt-4">
                <div className="text-sm text-white font-semibold mb-2">HMI Stations</div>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {scadaSystems.hmiStations.map((station, index) => (
                    <div key={index} className="bg-gray-800 rounded p-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-xs font-medium">{station.stationId}</span>
                        <span className={`text-xs ${getStatusColor(station.status)}`}>
                          {station.status}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400 mb-1">{station.operator}</div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Screens: {station.activeScreens}</span>
                        <span className="text-red-400">Alarms: {station.alarmCount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Real-Time Production Analytics */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Real-Time Analytics
              </h2>
              
              <ResponsiveContainer width="100%" height={200}>
                <RechartsLineChart data={productionMetrics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" fontSize={10} />
                  <YAxis stroke="#9CA3AF" fontSize={10} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px'
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="oee" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    name="OEE %"
                    dot={false}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="quality" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    name="Quality %"
                    dot={false}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="efficiency" 
                    stroke="#F59E0B" 
                    strokeWidth={2}
                    name="Performance %"
                    dot={false}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>

              {/* MES Integration Summary */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-3">MES Integration</div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-gray-800 p-2 rounded">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Active Orders:</span>
                      <span className="text-blue-400">{mesIntegration.productionOrders.active}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">On-Time Rate:</span>
                      <span className="text-green-400">{mesIntegration.productionOrders.onTime}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Quality Pass:</span>
                      <span className="text-green-400">{mesIntegration.productionOrders.qualityPassed}%</span>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">WIP Units:</span>
                      <span className="text-purple-400">{mesIntegration.inventoryManagement.workInProgress.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Maintenance:</span>
                      <span className="text-orange-400">{mesIntegration.maintenance.scheduledTasks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Energy:</span>
                      <span className="text-yellow-400">{mesIntegration.energyManagement.totalConsumption}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOC Control Panel */}
        <div className="space-y-4">
          
          {/* Active Alarms */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Active Alarms
            </h2>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {alarmManagement.slice(0, 4).map((alarm) => (
                <div key={alarm.alarmId} className={`border rounded p-3 ${getSeverityColor(alarm.severity)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">{alarm.source}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {alarm.severity}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">{alarm.description}</div>
                  <div className="text-xs text-blue-400 mb-1">
                    <strong>Action:</strong> {alarm.actionTaken}
                  </div>
                  <div className="text-xs text-gray-400 mb-1">
                    <strong>Operator:</strong> {alarm.operator}
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={`${getStatusColor(alarm.status)}`}>{alarm.status}</span>
                    <span className="text-gray-400">{alarm.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Production Team */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Operations Team
            </h2>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {operationsTeam.map((member, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{member.name}</span>
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(member.status)}`}>
                      {member.status.replace('_', ' ')}
                    </span>
                  </div>
                  
                  <div className="text-xs text-blue-300 mb-1">{member.position}</div>
                  <div className="text-xs text-gray-500 mb-2">{member.location}</div>
                  
                  <div className="text-xs text-gray-400 mb-1">
                    <strong>Shift:</strong> {member.shift}
                  </div>
                  <div className="text-xs text-gray-500">
                    Experience: {member.experience}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Production & Quality Distribution */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
              <PieChart className="w-5 h-5 mr-2" />
              Production Status
            </h2>
            
            <ResponsiveContainer width="100%" height={120}>
              <RechartsPieChart>
                <Pie
                  data={productionDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={20}
                  outerRadius={50}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {productionDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                  formatter={(value) => [`${value}%`, 'Production']}
                />
              </RechartsPieChart>
            </ResponsiveContainer>
            
            <div className="space-y-1 mt-2">
              {productionDistribution.map((status, index) => (
                <div key={index} className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <div 
                      className="w-2 h-2 rounded-full mr-2" 
                      style={{ backgroundColor: status.color }}
                    />
                    <span className="text-gray-400">{status.name}</span>
                  </div>
                  <span className="text-white font-semibold">{status.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Protocols */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <Network className="w-5 h-5 mr-2" />
              Communication
            </h2>
            
            <div className="space-y-2">
              {Object.entries(scadaSystems.communicationProtocols).map(([protocol, data]) => (
                <div key={protocol} className="bg-gray-800 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white text-xs font-medium uppercase">{protocol}</span>
                    <span className={`text-xs ${getStatusColor(data.status)}`}>
                      {data.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Devices: {data.devices}</span>
                    <span className="text-blue-400">Load: {data.bandwidth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}