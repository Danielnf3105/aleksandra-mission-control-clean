// ManufacturingOperations.js - Manufacturing Operations Control Center & Production Line Monitoring Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const ManufacturingOperations = () => {
  const [productionLines, setProductionLines] = useState([
    {
      id: 'line_001',
      name: 'Assembly Line A1',
      location: 'Building 1 - Floor 2',
      status: 'RUNNING',
      product: 'Electric Motor XR-250',
      shift: 'Day Shift',
      targetRate: 120, // units per hour
      currentRate: 118,
      efficiency: 98.3, // percentage
      quality: 99.1, // percentage
      uptime: 97.8, // percentage
      oee: 96.2, // Overall Equipment Effectiveness
      cycleTime: 30.5, // seconds
      targetCycleTime: 30.0,
      unitsProduced: 2847,
      targetUnits: 2880,
      defectRate: 0.9, // percentage
      downtime: 12, // minutes today
      lastDowntime: Date.now() - 45 * 60 * 1000,
      nextMaintenance: Date.now() + 3 * 24 * 60 * 60 * 1000,
      operators: 4,
      temperature: 22.5,
      humidity: 45.2,
      vibration: 0.8, // mm/s
      energy: 145.2, // kWh today
      lastUpdate: Date.now() - 15 * 1000
    },
    {
      id: 'line_002',
      name: 'Packaging Line B1',
      location: 'Building 2 - Floor 1',
      status: 'WARNING',
      product: 'Consumer Electronics Bundle',
      shift: 'Day Shift',
      targetRate: 200,
      currentRate: 185,
      efficiency: 92.5,
      quality: 97.8,
      uptime: 94.6,
      oee: 87.9,
      cycleTime: 19.4,
      targetCycleTime: 18.0,
      unitsProduced: 4441,
      targetUnits: 4800,
      defectRate: 2.2,
      downtime: 32,
      lastDowntime: Date.now() - 2 * 60 * 60 * 1000,
      nextMaintenance: Date.now() + 1 * 24 * 60 * 60 * 1000,
      operators: 3,
      temperature: 24.1,
      humidity: 41.8,
      vibration: 1.2,
      energy: 198.7,
      lastUpdate: Date.now() - 8 * 1000
    },
    {
      id: 'line_003',
      name: 'Quality Control QC-1',
      location: 'Building 1 - Floor 1',
      status: 'RUNNING',
      product: 'Final Inspection',
      shift: 'Day Shift',
      targetRate: 150,
      currentRate: 148,
      efficiency: 98.7,
      quality: 99.8,
      uptime: 99.1,
      oee: 97.6,
      cycleTime: 24.3,
      targetCycleTime: 24.0,
      unitsProduced: 3552,
      targetUnits: 3600,
      defectRate: 0.2,
      downtime: 5,
      lastDowntime: Date.now() - 6 * 60 * 60 * 1000,
      nextMaintenance: Date.now() + 7 * 24 * 60 * 60 * 1000,
      operators: 2,
      temperature: 21.8,
      humidity: 43.5,
      vibration: 0.3,
      energy: 89.4,
      lastUpdate: Date.now() - 5 * 1000
    },
    {
      id: 'line_004',
      name: 'CNC Machining M1',
      location: 'Building 3 - Floor 1',
      status: 'MAINTENANCE',
      product: 'Precision Components',
      shift: 'Day Shift',
      targetRate: 80,
      currentRate: 0,
      efficiency: 0,
      quality: 100,
      uptime: 0,
      oee: 0,
      cycleTime: 0,
      targetCycleTime: 45.0,
      unitsProduced: 1920,
      targetUnits: 1920,
      defectRate: 0,
      downtime: 120,
      lastDowntime: Date.now() - 30 * 1000,
      nextMaintenance: Date.now() + 6 * 60 * 60 * 1000,
      operators: 0,
      temperature: 19.2,
      humidity: 38.7,
      vibration: 0.1,
      energy: 0,
      lastUpdate: Date.now() - 30 * 1000
    },
    {
      id: 'line_005',
      name: 'Robot Assembly R1',
      location: 'Building 2 - Floor 2',
      status: 'CRITICAL',
      product: 'Automotive Parts',
      shift: 'Day Shift',
      targetRate: 100,
      currentRate: 76,
      efficiency: 76.0,
      quality: 94.2,
      uptime: 80.7,
      oee: 61.3,
      cycleTime: 47.4,
      targetCycleTime: 36.0,
      unitsProduced: 1824,
      targetUnits: 2400,
      defectRate: 5.8,
      downtime: 115,
      lastDowntime: Date.now() - 15 * 60 * 1000,
      nextMaintenance: Date.now() + 2 * 24 * 60 * 60 * 1000,
      operators: 2,
      temperature: 26.3,
      humidity: 47.9,
      vibration: 2.1,
      energy: 234.8,
      lastUpdate: Date.now() - 12 * 1000
    }
  ]);

  const [machines, setMachines] = useState([
    {
      id: 'machine_001',
      name: 'CNC Lathe TL-5000',
      line: 'CNC Machining M1',
      status: 'MAINTENANCE',
      location: 'Building 3 - Station 5',
      type: 'CNC Lathe',
      model: 'Haas TL-5000',
      serialNumber: 'HL5K-2023-0847',
      efficiency: 0,
      utilizationRate: 0,
      spindle: {
        speed: 0, // RPM
        load: 0, // percentage
        temperature: 32.1 // Celsius
      },
      vibration: 0.1,
      powerConsumption: 0, // kW
      cyclesCompleted: 4823,
      hoursRun: 1247.5,
      nextMaintenance: Date.now() + 6 * 60 * 60 * 1000,
      lastMaintenance: Date.now() - 15 * 24 * 60 * 60 * 1000,
      alerts: 1,
      toolWear: 15.2, // percentage
      coolantLevel: 87.5, // percentage
      operator: null,
      program: 'PART_5047_REV3',
      lastUpdate: Date.now() - 30 * 1000
    },
    {
      id: 'machine_002',
      name: 'Industrial Robot ABB-6700',
      line: 'Robot Assembly R1',
      status: 'CRITICAL',
      location: 'Building 2 - Station 12',
      type: '6-Axis Robot',
      model: 'ABB IRB 6700',
      serialNumber: 'AB6700-2024-1203',
      efficiency: 76.0,
      utilizationRate: 80.7,
      joints: {
        j1: { position: 45.2, load: 23.4, temperature: 34.7 },
        j2: { position: -12.8, load: 67.8, temperature: 41.2 },
        j3: { position: 78.9, load: 45.1, temperature: 38.9 }
      },
      vibration: 2.1,
      powerConsumption: 12.8,
      cyclesCompleted: 18247,
      hoursRun: 5823.2,
      nextMaintenance: Date.now() + 2 * 24 * 60 * 60 * 1000,
      lastMaintenance: Date.now() - 30 * 24 * 60 * 60 * 1000,
      alerts: 3,
      toolWear: 78.4,
      operator: 'Mike Thompson',
      program: 'WELD_SEQUENCE_A7',
      lastUpdate: Date.now() - 12 * 1000
    },
    {
      id: 'machine_003',
      name: 'Conveyor System C1',
      line: 'Assembly Line A1',
      status: 'RUNNING',
      location: 'Building 1 - Main Line',
      type: 'Belt Conveyor',
      model: 'FlexMove FM-2000',
      serialNumber: 'FM2K-2023-5672',
      efficiency: 98.3,
      utilizationRate: 97.8,
      motor: {
        speed: 1.2, // m/s
        load: 34.7,
        temperature: 28.5,
        current: 5.2 // Amps
      },
      vibration: 0.8,
      powerConsumption: 3.4,
      items: 2847,
      hoursRun: 2847.3,
      nextMaintenance: Date.now() + 3 * 24 * 60 * 60 * 1000,
      lastMaintenance: Date.now() - 7 * 24 * 60 * 60 * 1000,
      alerts: 0,
      beltTension: 92.3, // percentage
      operator: 'Sarah Martinez',
      lastUpdate: Date.now() - 15 * 1000
    },
    {
      id: 'machine_004',
      name: 'Quality Scanner QS-1',
      line: 'Quality Control QC-1',
      status: 'RUNNING',
      location: 'Building 1 - QC Station',
      type: 'Vision System',
      model: 'Cognex In-Sight 9902L',
      serialNumber: 'CG9902-2024-3451',
      efficiency: 98.7,
      utilizationRate: 99.1,
      camera: {
        resolution: '2048x1536',
        frameRate: 60, // fps
        exposure: 2.5, // ms
        lighting: 85.2 // percentage
      },
      vibration: 0.3,
      powerConsumption: 0.8,
      inspections: 3552,
      hoursRun: 8945.1,
      nextMaintenance: Date.now() + 7 * 24 * 60 * 60 * 1000,
      lastMaintenance: Date.now() - 14 * 24 * 60 * 60 * 1000,
      alerts: 0,
      defectsDetected: 7,
      operator: 'Alex Chen',
      algorithm: 'DEEP_LEARNING_V3',
      lastUpdate: Date.now() - 5 * 1000
    }
  ]);

  const [inventory, setInventory] = useState([
    {
      id: 'mat_001',
      name: 'Steel Sheets 2mm',
      category: 'Raw Materials',
      currentStock: 847,
      minStock: 200,
      maxStock: 1200,
      unit: 'sheets',
      cost: 45.50,
      supplier: 'MetalWorks Inc',
      location: 'Warehouse A - Section 3',
      lastDelivery: Date.now() - 2 * 24 * 60 * 60 * 1000,
      nextDelivery: Date.now() + 5 * 24 * 60 * 60 * 1000,
      consumption: 124, // per day
      status: 'NORMAL'
    },
    {
      id: 'mat_002',
      name: 'Electronics Components Kit',
      category: 'Components',
      currentStock: 89,
      minStock: 150,
      maxStock: 500,
      unit: 'kits',
      cost: 178.20,
      supplier: 'TechParts Ltd',
      location: 'Warehouse B - Section 1',
      lastDelivery: Date.now() - 7 * 24 * 60 * 60 * 1000,
      nextDelivery: Date.now() + 1 * 24 * 60 * 60 * 1000,
      consumption: 45,
      status: 'LOW'
    },
    {
      id: 'mat_003',
      name: 'Packaging Materials',
      category: 'Packaging',
      currentStock: 2340,
      minStock: 500,
      maxStock: 3000,
      unit: 'units',
      cost: 2.80,
      supplier: 'PackPro Solutions',
      location: 'Warehouse C - Section 2',
      lastDelivery: Date.now() - 1 * 24 * 60 * 60 * 1000,
      nextDelivery: Date.now() + 10 * 24 * 60 * 60 * 1000,
      consumption: 187,
      status: 'NORMAL'
    },
    {
      id: 'mat_004',
      name: 'Hydraulic Oil ISO 46',
      category: 'Consumables',
      currentStock: 23,
      minStock: 50,
      maxStock: 200,
      unit: 'liters',
      cost: 12.40,
      supplier: 'IndustrialFluids Corp',
      location: 'Maintenance Shop',
      lastDelivery: Date.now() - 14 * 24 * 60 * 60 * 1000,
      nextDelivery: Date.now() + 2 * 24 * 60 * 60 * 1000,
      consumption: 8,
      status: 'CRITICAL'
    }
  ]);

  const [qualityMetrics, setQualityMetrics] = useState([
    {
      id: 'qm_001',
      testName: 'Dimensional Accuracy',
      specification: '±0.05mm',
      measured: '±0.03mm',
      result: 'PASS',
      sampleSize: 50,
      defects: 1,
      defectRate: 2.0,
      timestamp: Date.now() - 30 * 60 * 1000,
      inspector: 'Alex Chen',
      equipment: 'CMM Zeiss Contura G2'
    },
    {
      id: 'qm_002',
      testName: 'Surface Finish',
      specification: 'Ra ≤ 3.2μm',
      measured: 'Ra 2.8μm',
      result: 'PASS',
      sampleSize: 25,
      defects: 0,
      defectRate: 0.0,
      timestamp: Date.now() - 45 * 60 * 1000,
      inspector: 'Maria Rodriguez',
      equipment: 'Profilometer Mitutoyo SJ-210'
    },
    {
      id: 'qm_003',
      testName: 'Electrical Continuity',
      specification: 'R < 0.1Ω',
      measured: 'R = 0.07Ω',
      result: 'PASS',
      sampleSize: 100,
      defects: 3,
      defectRate: 3.0,
      timestamp: Date.now() - 15 * 60 * 1000,
      inspector: 'John Smith',
      equipment: 'Fluke 1587 Multimeter'
    },
    {
      id: 'qm_004',
      testName: 'Pressure Test',
      specification: '150-200 PSI',
      measured: '195 PSI',
      result: 'PASS',
      sampleSize: 30,
      defects: 0,
      defectRate: 0.0,
      timestamp: Date.now() - 60 * 60 * 1000,
      inspector: 'Lisa Wong',
      equipment: 'Pressure Tester PT-300'
    }
  ]);

  const [productionTrends, setProductionTrends] = useState([]);
  const [efficiencyTrends, setEfficiencyTrends] = useState([]);

  const generateProductionTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        production: Math.floor(Math.random() * 100) + 350, // 350-450 units
        target: 400,
        oee: Math.floor(Math.random() * 20) + 80, // 80-100%
        quality: Math.floor(Math.random() * 5) + 95, // 95-100%
        efficiency: Math.floor(Math.random() * 15) + 85, // 85-100%
        defects: Math.floor(Math.random() * 10) + 2, // 2-12 defects
        downtime: Math.floor(Math.random() * 15) + 0, // 0-15 minutes
        energy: Math.floor(Math.random() * 50) + 200 // 200-250 kWh
      });
    }
    return data;
  };

  const generateEfficiencyTrends = () => {
    return [
      { line: 'Assembly A1', oee: 96.2, availability: 97.8, performance: 98.3, quality: 99.1 },
      { line: 'Packaging B1', oee: 87.9, availability: 94.6, performance: 92.5, quality: 97.8 },
      { line: 'QC-1', oee: 97.6, availability: 99.1, performance: 98.7, quality: 99.8 },
      { line: 'CNC M1', oee: 0, availability: 0, performance: 0, quality: 100 },
      { line: 'Robot R1', oee: 61.3, availability: 80.7, performance: 76.0, quality: 94.2 }
    ];
  };

  useEffect(() => {
    setProductionTrends(generateProductionTrends());
    setEfficiencyTrends(generateEfficiencyTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update production lines
      setProductionLines(prev => prev.map(line => {
        if (line.status === 'MAINTENANCE') return line;
        
        let newCurrentRate = line.currentRate;
        let newEfficiency = line.efficiency;
        let newQuality = line.quality;
        
        if (line.status === 'CRITICAL') {
          newCurrentRate = Math.max(0, line.currentRate + (Math.random() - 0.7) * 10);
          newEfficiency = Math.max(50, line.efficiency + (Math.random() - 0.7) * 5);
          newQuality = Math.max(85, line.quality + (Math.random() - 0.6) * 3);
        } else if (line.status === 'WARNING') {
          newCurrentRate = Math.max(0, line.currentRate + (Math.random() - 0.5) * 8);
          newEfficiency = Math.max(75, line.efficiency + (Math.random() - 0.5) * 3);
          newQuality = Math.max(90, line.quality + (Math.random() - 0.5) * 2);
        } else {
          newCurrentRate = Math.max(0, line.currentRate + (Math.random() - 0.5) * 5);
          newEfficiency = Math.max(85, Math.min(100, line.efficiency + (Math.random() - 0.5) * 2));
          newQuality = Math.max(95, Math.min(100, line.quality + (Math.random() - 0.5) * 1));
        }
        
        const newUptime = (newCurrentRate / line.targetRate) * 100;
        const newOee = (newEfficiency * newUptime * newQuality) / 10000;
        const newCycleTime = line.targetCycleTime * (line.targetRate / Math.max(1, newCurrentRate));
        const newUnitsProduced = line.unitsProduced + Math.floor(newCurrentRate / 12); // assuming 5-second intervals
        
        return {
          ...line,
          currentRate: newCurrentRate,
          efficiency: newEfficiency,
          quality: newQuality,
          uptime: newUptime,
          oee: newOee,
          cycleTime: newCycleTime,
          unitsProduced: newUnitsProduced,
          defectRate: Math.max(0.1, Math.min(10, 100 - newQuality)),
          temperature: Math.max(18, Math.min(30, line.temperature + (Math.random() - 0.5) * 2)),
          humidity: Math.max(35, Math.min(55, line.humidity + (Math.random() - 0.5) * 3)),
          vibration: Math.max(0.1, Math.min(5.0, line.vibration + (Math.random() - 0.5) * 0.3)),
          energy: line.energy + (newCurrentRate / line.targetRate) * 5, // energy accumulation
          lastUpdate: Date.now()
        };
      }));

      // Update machines
      setMachines(prev => prev.map(machine => {
        if (machine.status === 'MAINTENANCE') return machine;
        
        let newEfficiency = machine.efficiency;
        let newUtilizationRate = machine.utilizationRate;
        
        if (machine.status === 'CRITICAL') {
          newEfficiency = Math.max(50, machine.efficiency + (Math.random() - 0.7) * 5);
          newUtilizationRate = Math.max(60, machine.utilizationRate + (Math.random() - 0.6) * 8);
        } else {
          newEfficiency = Math.max(85, Math.min(100, machine.efficiency + (Math.random() - 0.5) * 2));
          newUtilizationRate = Math.max(90, Math.min(100, machine.utilizationRate + (Math.random() - 0.5) * 3));
        }

        return {
          ...machine,
          efficiency: newEfficiency,
          utilizationRate: newUtilizationRate,
          spindle: machine.spindle ? {
            ...machine.spindle,
            speed: machine.status === 'RUNNING' ? Math.max(0, machine.spindle.speed + (Math.random() - 0.5) * 100) : 0,
            load: machine.status === 'RUNNING' ? Math.max(0, Math.min(100, machine.spindle.load + (Math.random() - 0.5) * 10)) : 0,
            temperature: Math.max(20, Math.min(60, machine.spindle.temperature + (Math.random() - 0.5) * 3))
          } : undefined,
          motor: machine.motor ? {
            ...machine.motor,
            speed: machine.status === 'RUNNING' ? Math.max(0, machine.motor.speed + (Math.random() - 0.5) * 0.1) : 0,
            load: machine.status === 'RUNNING' ? Math.max(0, Math.min(100, machine.motor.load + (Math.random() - 0.5) * 5)) : 0,
            temperature: Math.max(20, Math.min(50, machine.motor.temperature + (Math.random() - 0.5) * 2)),
            current: machine.status === 'RUNNING' ? Math.max(0, machine.motor.current + (Math.random() - 0.5) * 0.5) : 0
          } : undefined,
          vibration: Math.max(0.1, Math.min(5.0, machine.vibration + (Math.random() - 0.5) * 0.2)),
          powerConsumption: machine.status === 'RUNNING' ? Math.max(0, machine.powerConsumption + (Math.random() - 0.5) * 2) : 0,
          cyclesCompleted: machine.status === 'RUNNING' ? machine.cyclesCompleted + Math.floor(Math.random() * 3) : machine.cyclesCompleted,
          toolWear: machine.toolWear ? Math.max(0, Math.min(100, machine.toolWear + Math.random() * 0.5)) : undefined,
          coolantLevel: machine.coolantLevel ? Math.max(0, Math.min(100, machine.coolantLevel - Math.random() * 0.2)) : undefined,
          beltTension: machine.beltTension ? Math.max(80, Math.min(100, machine.beltTension + (Math.random() - 0.5) * 2)) : undefined,
          lastUpdate: Date.now()
        };
      }));

      // Update inventory consumption
      setInventory(prev => prev.map(item => ({
        ...item,
        currentStock: Math.max(0, item.currentStock - Math.random() * 2), // gradual consumption
        status: item.currentStock <= item.minStock ? 'LOW' : 
                item.currentStock <= item.minStock * 0.5 ? 'CRITICAL' : 'NORMAL'
      })));

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getLineStatusColor = (status) => {
    switch (status) {
      case 'RUNNING': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MAINTENANCE': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'OFFLINE': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getInventoryStatusColor = (status) => {
    switch (status) {
      case 'NORMAL': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'LOW': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPerformanceColor = (value, threshold1 = 85, threshold2 = 95) => {
    if (value >= threshold2) return 'text-green-400';
    if (value >= threshold1) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatDuration = (minutes) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🏭 MANUFACTURING OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {productionLines.filter(l => l.status === 'RUNNING').length}/{productionLines.length} Running
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {Math.floor(productionLines.reduce((sum, line) => sum + line.oee, 0) / productionLines.length)}% OEE
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Tulip Manufacturing Intelligence
          </div>
        </div>
      </div>

      {/* Production Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">UNITS PRODUCED</div>
              <div className="text-2xl font-bold text-green-100">
                {productionLines.reduce((sum, line) => sum + line.unitsProduced, 0).toLocaleString()}
              </div>
              <div className="text-xs text-green-300">
                Target: {productionLines.reduce((sum, line) => sum + line.targetUnits, 0).toLocaleString()}
              </div>
            </div>
            <div className="text-3xl opacity-60">📦</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">OVERALL OEE</div>
              <div className="text-2xl font-bold text-blue-100">
                {(productionLines.reduce((sum, line) => sum + line.oee, 0) / productionLines.length).toFixed(1)}%
              </div>
              <div className="text-xs text-blue-300">
                Target: 85%
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">QUALITY RATE</div>
              <div className="text-2xl font-bold text-purple-100">
                {(productionLines.reduce((sum, line) => sum + line.quality, 0) / productionLines.length).toFixed(1)}%
              </div>
              <div className="text-xs text-purple-300">
                Target: 99%
              </div>
            </div>
            <div className="text-3xl opacity-60">✅</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">ENERGY CONSUMPTION</div>
              <div className="text-2xl font-bold text-orange-100">
                {Math.floor(productionLines.reduce((sum, line) => sum + line.energy, 0))} kWh
              </div>
              <div className="text-xs text-orange-300">
                Today's total
              </div>
            </div>
            <div className="text-3xl opacity-60">🔋</div>
          </div>
        </div>
      </div>

      {/* Production Lines and Machine Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Production Lines */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏭 PRODUCTION LINES STATUS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {productionLines.map((line) => (
              <div key={line.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getLineStatusColor(line.status)}`}>
                      {line.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {line.shift}
                    </span>
                    {line.alerts > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                        {line.alerts} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(line.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{line.name}</div>
                <div className="text-xs text-purple-400 mb-2">{line.location}</div>
                <div className="text-xs text-cyan-400 mb-3">{line.product}</div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Current Rate</div>
                    <div className="text-blue-400">{line.currentRate} u/h</div>
                    <div className="text-gray-500">Target: {line.targetRate}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">OEE</div>
                    <div className={getPerformanceColor(line.oee)}>{line.oee.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Quality</div>
                    <div className={getPerformanceColor(line.quality, 95, 99)}>{line.quality.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Efficiency</div>
                    <div className={getPerformanceColor(line.efficiency)}>{line.efficiency.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Uptime</div>
                    <div className={getPerformanceColor(line.uptime)}>{line.uptime.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Defect Rate</div>
                    <div className="text-orange-400">{line.defectRate.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Cycle Time</div>
                    <div className="text-green-400">{line.cycleTime.toFixed(1)}s</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Units Produced</div>
                    <div className="text-yellow-400">{line.unitsProduced.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Operators</div>
                    <div className="text-indigo-400">{line.operators}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-gray-400">Temperature</div>
                    <div className="text-red-400">{line.temperature.toFixed(1)}°C</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Downtime Today</div>
                    <div className="text-purple-400">{formatDuration(line.downtime)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Energy</div>
                    <div className="text-pink-400">{line.energy.toFixed(1)} kWh</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Machine Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🤖 MACHINE STATUS & DIAGNOSTICS
          </h3>
          <div className="space-y-3">
            {machines.map((machine) => (
              <div key={machine.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getLineStatusColor(machine.status)}`}>
                      {machine.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {machine.type}
                    </span>
                    {machine.alerts > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                        {machine.alerts} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(machine.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{machine.name}</div>
                <div className="text-xs text-purple-400 mb-2">{machine.location}</div>
                <div className="text-xs text-cyan-400 mb-3">{machine.model} | {machine.serialNumber}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Efficiency</div>
                    <div className={getPerformanceColor(machine.efficiency)}>{machine.efficiency.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Utilization</div>
                    <div className={getPerformanceColor(machine.utilizationRate)}>{machine.utilizationRate.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Power</div>
                    <div className="text-yellow-400">{machine.powerConsumption.toFixed(1)} kW</div>
                  </div>
                </div>

                {machine.spindle && (
                  <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                    <div>
                      <div className="text-gray-400">Spindle Speed</div>
                      <div className="text-blue-400">{machine.spindle.speed.toFixed(0)} RPM</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Spindle Load</div>
                      <div className="text-orange-400">{machine.spindle.load.toFixed(1)}%</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Tool Wear</div>
                      <div className="text-red-400">{machine.toolWear?.toFixed(1)}%</div>
                    </div>
                  </div>
                )}

                {machine.motor && (
                  <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                    <div>
                      <div className="text-gray-400">Belt Speed</div>
                      <div className="text-green-400">{machine.motor.speed.toFixed(1)} m/s</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Motor Load</div>
                      <div className="text-orange-400">{machine.motor.load.toFixed(1)}%</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Belt Tension</div>
                      <div className="text-indigo-400">{machine.beltTension?.toFixed(1)}%</div>
                    </div>
                  </div>
                )}

                {machine.camera && (
                  <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                    <div>
                      <div className="text-gray-400">Frame Rate</div>
                      <div className="text-cyan-400">{machine.camera.frameRate} fps</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Lighting</div>
                      <div className="text-yellow-400">{machine.camera.lighting.toFixed(1)}%</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Defects Found</div>
                      <div className="text-red-400">{machine.defectsDetected || 0}</div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="text-gray-400">Vibration</div>
                    <div className="text-pink-400">{machine.vibration.toFixed(1)} mm/s</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Operator</div>
                    <div className="text-purple-400">{machine.operator || 'None'}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inventory and Quality Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📦 INVENTORY MANAGEMENT
          </h3>
          <div className="space-y-3">
            {inventory.map((item) => (
              <div key={item.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getInventoryStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{item.name}</div>
                <div className="text-xs text-cyan-400 mb-3">{item.location}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Current Stock</div>
                    <div className={getInventoryStatusColor(item.status).split(' ')[0]}>
                      {item.currentStock.toFixed(0)} {item.unit}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Min/Max</div>
                    <div className="text-orange-400">{item.minStock}/{item.maxStock}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Daily Usage</div>
                    <div className="text-purple-400">{item.consumption} {item.unit}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Unit Cost</div>
                    <div className="text-green-400">${item.cost.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Total Value</div>
                    <div className="text-yellow-400">${(item.currentStock * item.cost).toFixed(0)}</div>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">Supplier: </span>
                  <span className="text-blue-400">{item.supplier}</span>
                </div>
                <div className="text-xs mt-1">
                  <span className="text-gray-400">Next Delivery: </span>
                  <span className="text-indigo-400">{formatTime(item.nextDelivery)}</span>
                </div>

                {/* Stock level bar */}
                <div className="mt-3">
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        item.status === 'CRITICAL' ? 'bg-red-400' :
                        item.status === 'LOW' ? 'bg-yellow-400' :
                        'bg-green-400'
                      }`}
                      style={{ width: `${Math.min(100, (item.currentStock / item.maxStock) * 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {((item.currentStock / item.maxStock) * 100).toFixed(1)}% capacity
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ✅ QUALITY CONTROL METRICS
          </h3>
          <div className="space-y-3">
            {qualityMetrics.map((qm) => (
              <div key={qm.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${
                      qm.result === 'PASS' ? 'text-green-400 bg-green-400/20 border-green-400/30' :
                      'text-red-400 bg-red-400/20 border-red-400/30'
                    }`}>
                      {qm.result}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      n={qm.sampleSize}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(qm.timestamp)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{qm.testName}</div>
                <div className="text-xs text-cyan-400 mb-1">Inspector: {qm.inspector}</div>
                <div className="text-xs text-purple-400 mb-3">{qm.equipment}</div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Specification</div>
                    <div className="text-orange-400">{qm.specification}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Measured</div>
                    <div className="text-blue-400">{qm.measured}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-gray-400">Sample Size</div>
                    <div className="text-green-400">{qm.sampleSize}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Defects</div>
                    <div className="text-red-400">{qm.defects}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Defect Rate</div>
                    <div className="text-yellow-400">{qm.defectRate.toFixed(1)}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Production Trends and OEE Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Production Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 PRODUCTION TRENDS (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={productionTrends}>
              <defs>
                <linearGradient id="productionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={12}/>
              <YAxis stroke="#9CA3AF" fontSize={12}/>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="production" 
                stroke="#10B981" 
                fill="url(#productionGradient)" 
                name="Production (units)"
              />
              <Area 
                type="monotone" 
                dataKey="target" 
                stroke="#3B82F6" 
                fill="url(#targetGradient)" 
                name="Target (units)"
              />
              <Line 
                type="monotone" 
                dataKey="oee" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="OEE %"
              />
              <Bar 
                dataKey="defects" 
                fill="#EF4444" 
                name="Defects"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* OEE Analysis */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚡ OEE ANALYSIS BY PRODUCTION LINE
          </h3>
          
          <div className="space-y-4">
            {/* OEE Overview */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Overall Equipment Effectiveness</h4>
              <div className="space-y-2">
                {efficiencyTrends.map((eff, index) => (
                  <div key={index} className="bg-gray-700 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white">{eff.line}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400">OEE:</span>
                        <span className={`text-sm font-bold ${getPerformanceColor(eff.oee)}`}>
                          {eff.oee.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-3 mb-2">
                      <div 
                        className={`h-3 rounded-full ${
                          eff.oee >= 85 ? 'bg-green-400' :
                          eff.oee >= 70 ? 'bg-yellow-400' :
                          'bg-red-400'
                        }`}
                        style={{ width: `${Math.max(0, eff.oee)}%` }}
                      ></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-gray-400">Availability: </span>
                        <span className="text-blue-400">{eff.availability.toFixed(1)}%</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Performance: </span>
                        <span className="text-green-400">{eff.performance.toFixed(1)}%</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Quality: </span>
                        <span className="text-purple-400">{eff.quality.toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Manufacturing KPIs */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Manufacturing KPIs</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Production Rate</div>
                  <div className="text-white font-bold text-lg">
                    {Math.floor(productionLines.reduce((sum, line) => sum + line.currentRate, 0))} u/h
                  </div>
                  <div className="text-blue-400">
                    Target: {productionLines.reduce((sum, line) => sum + line.targetRate, 0)} u/h
                  </div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">First Pass Yield</div>
                  <div className="text-white font-bold text-lg">
                    {(100 - productionLines.reduce((sum, line) => sum + line.defectRate, 0) / productionLines.length).toFixed(1)}%
                  </div>
                  <div className="text-green-400">Industry avg: 96%</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Planned Downtime</div>
                  <div className="text-white font-bold text-lg">45 min</div>
                  <div className="text-yellow-400">Maintenance scheduled</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Unplanned Downtime</div>
                  <div className="text-white font-bold text-lg">
                    {Math.floor(productionLines.reduce((sum, line) => sum + line.downtime, 0))} min
                  </div>
                  <div className="text-orange-400">Target: &lt;30 min</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Throughput</div>
                  <div className="text-white font-bold text-lg">
                    {((productionLines.reduce((sum, line) => sum + line.unitsProduced, 0) / 8) * 100 / 
                      productionLines.reduce((sum, line) => sum + line.targetUnits, 0)).toFixed(1)}%
                  </div>
                  <div className="text-purple-400">vs target capacity</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Energy Efficiency</div>
                  <div className="text-white font-bold text-lg">
                    {(productionLines.reduce((sum, line) => sum + line.unitsProduced, 0) / 
                      productionLines.reduce((sum, line) => sum + line.energy, 0)).toFixed(1)}
                  </div>
                  <div className="text-cyan-400">units/kWh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingOperations;