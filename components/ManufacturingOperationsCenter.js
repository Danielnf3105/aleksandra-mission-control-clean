// ManufacturingOperationsCenter.js - Manufacturing Operations Center & Production Monitoring Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ManufacturingOperationsCenter = () => {
  const [operationsStatus, setOperationsStatus] = useState({
    operationalStatus: 'PRODUCTION_ACTIVE',
    totalLines: 12,
    activeLlines: 11,
    maintenanceLines: 1,
    overallOEE: 87.3, // percentage
    plannedProduction: 15000,
    actualProduction: 13156,
    qualityRate: 94.7, // percentage
    onTimeDelivery: 96.2, // percentage
    inventoryTurnover: 8.4,
    energyEfficiency: 89.1, // percentage
    lastUpdate: Date.now()
  });

  const [productionLines, setProductionLines] = useState([
    {
      line_id: 'ASSEMBLY_LINE_01',
      line_name: 'Main Assembly Line A',
      product: 'Electric Motor Model X1',
      status: 'RUNNING',
      shift: 'DAY_SHIFT',
      operator: 'Maria Santos',
      oee: {
        overall: 91.2,
        availability: 96.8,
        performance: 94.1,
        quality: 95.3
      },
      production: {
        target_units: 1200,
        actual_units: 1095,
        completion_rate: 91.3,
        cycle_time: 2.3, // minutes
        standard_cycle_time: 2.1
      },
      quality: {
        total_units: 1095,
        good_units: 1043,
        defective_units: 52,
        first_pass_yield: 95.3,
        scrap_rate: 4.7
      },
      downtime: {
        planned_downtime: 45, // minutes today
        unplanned_downtime: 23,
        major_downtime_reason: 'Material Shortage',
        maintenance_due: Date.now() + 3 * 24 * 60 * 60 * 1000
      }
    },
    {
      line_id: 'PACKAGING_LINE_02',
      line_name: 'Automated Packaging B',
      product: 'Consumer Electronics Package',
      status: 'RUNNING',
      shift: 'DAY_SHIFT',
      operator: 'John Chen',
      oee: {
        overall: 84.6,
        availability: 89.2,
        performance: 92.3,
        quality: 97.1
      },
      production: {
        target_units: 2400,
        actual_units: 2031,
        completion_rate: 84.6,
        cycle_time: 0.8,
        standard_cycle_time: 0.75
      },
      quality: {
        total_units: 2031,
        good_units: 1973,
        defective_units: 58,
        first_pass_yield: 97.1,
        scrap_rate: 2.9
      },
      downtime: {
        planned_downtime: 60,
        unplanned_downtime: 89,
        major_downtime_reason: 'Equipment Malfunction',
        maintenance_due: Date.now() + 7 * 24 * 60 * 60 * 1000
      }
    },
    {
      line_id: 'MACHINING_LINE_03',
      line_name: 'CNC Machining Center C',
      product: 'Precision Metal Components',
      status: 'RUNNING',
      shift: 'DAY_SHIFT',
      operator: 'David Kim',
      oee: {
        overall: 79.8,
        availability: 85.4,
        performance: 88.7,
        quality: 92.9
      },
      production: {
        target_units: 800,
        actual_units: 638,
        completion_rate: 79.8,
        cycle_time: 12.4,
        standard_cycle_time: 11.2
      },
      quality: {
        total_units: 638,
        good_units: 593,
        defective_units: 45,
        first_pass_yield: 92.9,
        scrap_rate: 7.1
      },
      downtime: {
        planned_downtime: 30,
        unplanned_downtime: 156,
        major_downtime_reason: 'Tool Replacement',
        maintenance_due: Date.now() + 1 * 24 * 60 * 60 * 1000
      }
    },
    {
      line_id: 'WELDING_LINE_04',
      line_name: 'Robotic Welding Station D',
      product: 'Automotive Frame Parts',
      status: 'MAINTENANCE',
      maintenance_type: 'PREVENTIVE_MAINTENANCE',
      maintenance_start: Date.now() - 2 * 60 * 60 * 1000,
      eta_completion: Date.now() + 1.5 * 60 * 60 * 1000,
      maintenance_crew: 'Team Alpha',
      estimated_downtime_cost: 15000 // USD
    }
  ]);

  const [qualityMetrics, setQualityMetrics] = useState({
    overall_quality: {
      total_production: 13156,
      passed_inspection: 12434,
      failed_inspection: 722,
      first_pass_yield: 94.5, // percentage
      defect_rate: 5.5,
      customer_returns: 23,
      customer_complaints: 8
    },
    defect_categories: [
      { category: 'Dimensional Defects', count: 289, percentage: 40.0 },
      { category: 'Surface Finish', count: 187, percentage: 25.9 },
      { category: 'Material Defects', count: 144, percentage: 19.9 },
      { category: 'Assembly Issues', count: 72, percentage: 10.0 },
      { category: 'Electrical Faults', count: 30, percentage: 4.2 }
    ],
    quality_control_stations: [
      {
        station: 'Incoming Material Inspection',
        batches_tested: 89,
        batches_passed: 84,
        batches_rejected: 5,
        pass_rate: 94.4
      },
      {
        station: 'In-Process Quality Check',
        units_tested: 2456,
        units_passed: 2323,
        units_failed: 133,
        pass_rate: 94.6
      },
      {
        station: 'Final Product Inspection',
        units_tested: 13156,
        units_passed: 12434,
        units_failed: 722,
        pass_rate: 94.5
      }
    ],
    six_sigma_metrics: {
      process_capability: 1.34,
      defects_per_million: 55000,
      sigma_level: 3.2
    }
  });

  const [inventoryManagement, setInventoryManagement] = useState({
    raw_materials: [
      {
        material: 'Steel Sheets',
        current_stock: 2847,
        unit: 'tons',
        safety_stock: 500,
        reorder_point: 800,
        supplier: 'SteelCorp Industries',
        lead_time: 7, // days
        status: 'OPTIMAL'
      },
      {
        material: 'Electrical Components',
        current_stock: 15647,
        unit: 'units',
        safety_stock: 5000,
        reorder_point: 8000,
        supplier: 'ElectroTech Solutions',
        lead_time: 14,
        status: 'LOW_STOCK'
      },
      {
        material: 'Copper Wire',
        current_stock: 894,
        unit: 'km',
        safety_stock: 200,
        reorder_point: 400,
        supplier: 'CopperMax Ltd',
        lead_time: 5,
        status: 'CRITICAL'
      }
    ],
    finished_goods: {
      warehouse_capacity: 50000,
      current_inventory: 38456,
      utilization: 76.9, // percentage
      pending_shipments: 234,
      ready_to_ship: 12456,
      in_quality_hold: 567
    },
    work_in_progress: {
      total_wip_value: 2847392, // USD
      units_in_process: 1847,
      average_wip_time: 4.7, // days
      bottleneck_stations: ['CNC Machining', 'Quality Inspection']
    }
  });

  const [maintenanceOperations, setMaintenanceOperations] = useState({
    maintenance_schedule: {
      preventive_maintenance_due: 8,
      predictive_maintenance_alerts: 3,
      emergency_repairs: 1,
      completed_maintenance: 156,
      maintenance_compliance: 94.7 // percentage
    },
    equipment_health: [
      {
        equipment: 'CNC Machine #1',
        health_score: 87.3,
        vibration_level: 'NORMAL',
        temperature: 'NORMAL',
        next_maintenance: Date.now() + 2 * 24 * 60 * 60 * 1000,
        operating_hours: 2847.3,
        maintenance_cost_mtd: 15600
      },
      {
        equipment: 'Conveyor System A',
        health_score: 92.1,
        vibration_level: 'NORMAL',
        temperature: 'NORMAL',
        next_maintenance: Date.now() + 7 * 24 * 60 * 60 * 1000,
        operating_hours: 5234.7,
        maintenance_cost_mtd: 8900
      },
      {
        equipment: 'Welding Robot #3',
        health_score: 76.8,
        vibration_level: 'ELEVATED',
        temperature: 'HIGH',
        next_maintenance: Date.now() + 1 * 24 * 60 * 60 * 1000,
        operating_hours: 3456.2,
        maintenance_cost_mtd: 23400
      }
    ],
    spare_parts_inventory: {
      critical_parts: 156,
      parts_below_minimum: 23,
      parts_on_order: 89,
      avg_lead_time: 12.3 // days
    }
  });

  const [energyEnvironmental, setEnergyEnvironmental] = useState({
    energy_consumption: {
      total_consumption_today: 15647, // kWh
      cost_today: 2347.89, // USD
      efficiency_score: 89.1,
      renewable_percentage: 34.7,
      peak_demand: 2847.3, // kW
      carbon_footprint: 12.4 // tons CO2
    },
    environmental_metrics: {
      water_usage: 2847, // liters
      waste_generated: 567, // kg
      recycled_materials: 89.3, // percentage
      hazardous_waste: 23.4, // kg
      air_emissions: 'COMPLIANT',
      noise_levels: 'WITHIN_LIMITS'
    },
    sustainability_goals: {
      energy_reduction_target: 15.0, // percentage
      current_reduction: 8.7,
      waste_reduction_target: 25.0,
      current_waste_reduction: 18.9,
      carbon_neutrality_progress: 34.7
    }
  });

  const [operationsHistory, setOperationsHistory] = useState([]);

  const generateOperationsHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(6, 0, 0, 0); // Manufacturing starts at 6 AM
    
    for (let i = 0; i <= 16; i++) { // 16 hours from 6 AM to 10 PM
      const time = new Date(startOfDay.getTime() + i * 60 * 60 * 1000);
      
      // Simulate realistic manufacturing patterns
      const hour = time.getHours();
      let productionMultiplier = 0.8; // Base production
      
      if (hour >= 7 && hour <= 17) productionMultiplier = 1.0; // Day shift peak
      if (hour >= 18 && hour <= 22) productionMultiplier = 0.9; // Evening shift
      if (hour === 12) productionMultiplier = 0.6; // Lunch break
      if (hour >= 23 || hour <= 5) productionMultiplier = 0.3; // Night shift
      
      data.push({
        time: time.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        production_rate: Math.floor(800 + productionMultiplier * 400 + Math.random() * 100),
        oee: 75 + productionMultiplier * 15 + Math.random() * 8,
        quality_rate: 90 + Math.random() * 8,
        downtime_minutes: Math.floor((1 - productionMultiplier) * 30 + Math.random() * 15),
        energy_consumption: Math.floor(800 + productionMultiplier * 600 + Math.random() * 200),
        defect_count: Math.floor((1 - productionMultiplier + 0.1) * 20 + Math.random() * 10),
        inventory_level: Math.floor(35000 + productionMultiplier * 5000 + Math.random() * 2000)
      });
    }
    return data;
  };

  useEffect(() => {
    setOperationsHistory(generateOperationsHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update operations status
      setOperationsStatus(prev => ({
        ...prev,
        actualProduction: prev.actualProduction + Math.floor(Math.random() * 50),
        overallOEE: Math.max(70.0, Math.min(95.0, prev.overallOEE + (Math.random() - 0.5) * 2.0)),
        qualityRate: Math.max(85.0, Math.min(98.0, prev.qualityRate + (Math.random() - 0.5) * 1.5)),
        onTimeDelivery: Math.max(90.0, Math.min(99.0, prev.onTimeDelivery + (Math.random() - 0.5) * 1.0)),
        energyEfficiency: Math.max(80.0, Math.min(95.0, prev.energyEfficiency + (Math.random() - 0.5) * 1.5)),
        lastUpdate: Date.now()
      }));

      // Update production lines
      setProductionLines(prev => prev.map(line => {
        if (line.status === 'RUNNING') {
          return {
            ...line,
            production: {
              ...line.production,
              actual_units: line.production.actual_units + Math.floor(Math.random() * 10),
              completion_rate: Math.min(100, (line.production.actual_units / line.production.target_units) * 100)
            },
            oee: {
              ...line.oee,
              overall: Math.max(60.0, Math.min(95.0, line.oee.overall + (Math.random() - 0.5) * 3.0))
            }
          };
        }
        return line;
      }));

      // Update energy consumption
      setEnergyEnvironmental(prev => ({
        ...prev,
        energy_consumption: {
          ...prev.energy_consumption,
          total_consumption_today: prev.energy_consumption.total_consumption_today + Math.floor(Math.random() * 100),
          cost_today: prev.energy_consumption.cost_today + Math.random() * 10
        }
      }));

    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'PRODUCTION_ACTIVE':
      case 'RUNNING':
      case 'OPTIMAL':
      case 'NORMAL':
      case 'COMPLIANT':
      case 'WITHIN_LIMITS': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'LOW_STOCK':
      case 'ELEVATED':
      case 'HIGH': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'CRITICAL': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MAINTENANCE':
      case 'DOWN': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatNumber = (num, decimals = 0) => {
    return num.toFixed(decimals);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toString();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    const diff = timestamp - Date.now();
    if (Math.abs(diff) < 60000) return 'now';
    if (diff > 0) {
      if (diff < 3600000) return `in ${Math.floor(diff / 60000)}min`;
      if (diff < 86400000) return `in ${Math.floor(diff / 3600000)}h`;
      return `in ${Math.floor(diff / 86400000)}d`;
    } else {
      const absDiff = Math.abs(diff);
      if (absDiff < 3600000) return `${Math.floor(absDiff / 60000)}m ago`;
      if (absDiff < 86400000) return `${Math.floor(absDiff / 3600000)}h ago`;
      return `${Math.floor(absDiff / 86400000)}d ago`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🏭 MANUFACTURING OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {formatNumber(operationsStatus.overallOEE, 1)}% OEE
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatLargeNumber(operationsStatus.actualProduction)} Units
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatNumber(operationsStatus.qualityRate, 1)}% Quality
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Production Monitoring & Quality Control
          </div>
        </div>
      </div>

      {/* Operations Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">OVERALL OEE</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatNumber(operationsStatus.overallOEE, 1)}%
              </div>
              <div className="text-xs text-blue-300">
                {operationsStatus.activeLlines}/{operationsStatus.totalLines} lines active
              </div>
            </div>
            <div className="text-3xl opacity-60">⚙️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">PRODUCTION TODAY</div>
              <div className="text-2xl font-bold text-green-100">
                {formatLargeNumber(operationsStatus.actualProduction)}
              </div>
              <div className="text-xs text-green-300">
                of {formatLargeNumber(operationsStatus.plannedProduction)} planned ({formatNumber((operationsStatus.actualProduction / operationsStatus.plannedProduction) * 100, 1)}%)
              </div>
            </div>
            <div className="text-3xl opacity-60">📦</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">QUALITY RATE</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(operationsStatus.qualityRate, 1)}%
              </div>
              <div className="text-xs text-purple-300">
                First Pass Yield
              </div>
            </div>
            <div className="text-3xl opacity-60">✅</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">ON-TIME DELIVERY</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(operationsStatus.onTimeDelivery, 1)}%
              </div>
              <div className="text-xs text-orange-300">
                Customer Satisfaction
              </div>
            </div>
            <div className="text-3xl opacity-60">🚚</div>
          </div>
        </div>
      </div>

      {/* Production Lines OEE */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📊 PRODUCTION LINES OEE & PERFORMANCE
        </h3>
        <div className="space-y-3">
          {productionLines.map((line) => (
            <div key={line.line_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{line.line_name}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(line.status)}`}>
                    {line.status}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {line.shift?.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  Operator: {line.operator}
                </div>
              </div>

              <div className="text-sm font-bold text-white mb-2">
                Product: {line.product}
              </div>

              {line.status === 'RUNNING' && (
                <>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                    <div className="bg-gray-600 rounded p-3">
                      <div className="text-xs text-gray-400">Overall OEE</div>
                      <div className={`text-lg font-bold ${line.oee.overall >= 85 ? 'text-green-400' : line.oee.overall >= 75 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {formatNumber(line.oee.overall, 1)}%
                      </div>
                    </div>
                    <div className="bg-gray-600 rounded p-3">
                      <div className="text-xs text-gray-400">Availability</div>
                      <div className="text-lg font-bold text-blue-400">
                        {formatNumber(line.oee.availability, 1)}%
                      </div>
                    </div>
                    <div className="bg-gray-600 rounded p-3">
                      <div className="text-xs text-gray-400">Performance</div>
                      <div className="text-lg font-bold text-purple-400">
                        {formatNumber(line.oee.performance, 1)}%
                      </div>
                    </div>
                    <div className="bg-gray-600 rounded p-3">
                      <div className="text-xs text-gray-400">Quality</div>
                      <div className="text-lg font-bold text-cyan-400">
                        {formatNumber(line.oee.quality, 1)}%
                      </div>
                    </div>
                  </div>

                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Production: </span>
                    <span className="text-green-400">{formatLargeNumber(line.production.actual_units)}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-blue-400">{formatLargeNumber(line.production.target_units)}</span>
                    <span className="text-gray-400"> ({formatNumber(line.production.completion_rate, 1)}%)</span>
                    <span className="text-gray-400"> | Cycle Time: </span>
                    <span className="text-orange-400">{formatNumber(line.production.cycle_time, 1)}min</span>
                    <span className="text-gray-400"> vs </span>
                    <span className="text-purple-400">{formatNumber(line.production.standard_cycle_time, 1)}min std</span>
                  </div>

                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Quality: </span>
                    <span className="text-green-400">{formatLargeNumber(line.quality.good_units)} good</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-red-400">{line.quality.defective_units} defective</span>
                    <span className="text-gray-400"> | FPY: </span>
                    <span className="text-cyan-400">{formatNumber(line.quality.first_pass_yield, 1)}%</span>
                    <span className="text-gray-400"> | Scrap Rate: </span>
                    <span className="text-yellow-400">{formatNumber(line.quality.scrap_rate, 1)}%</span>
                  </div>

                  <div className="text-xs">
                    <span className="text-gray-400">Downtime: </span>
                    <span className="text-blue-400">{line.downtime.planned_downtime}min planned</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-red-400">{line.downtime.unplanned_downtime}min unplanned</span>
                    <span className="text-gray-400"> | Reason: </span>
                    <span className="text-orange-400">{line.downtime.major_downtime_reason}</span>
                    <span className="text-gray-400"> | Next Maintenance: </span>
                    <span className="text-purple-400">{formatTime(line.downtime.maintenance_due)}</span>
                  </div>
                </>
              )}

              {line.status === 'MAINTENANCE' && (
                <div className="text-xs">
                  <span className="text-gray-400">Maintenance Type: </span>
                  <span className="text-orange-400">{line.maintenance_type?.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | Started: </span>
                  <span className="text-yellow-400">{formatTime(line.maintenance_start)}</span>
                  <span className="text-gray-400"> | ETA: </span>
                  <span className="text-blue-400">{formatTime(line.eta_completion)}</span>
                  <span className="text-gray-400"> | Crew: </span>
                  <span className="text-cyan-400">{line.maintenance_crew}</span>
                  <span className="text-gray-400"> | Cost Impact: </span>
                  <span className="text-red-400">{formatCurrency(line.estimated_downtime_cost)}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quality Control and Inventory */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quality Control */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔍 QUALITY CONTROL & DEFECT ANALYSIS
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Overall Quality Metrics</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Production:</span>
                <span className="text-blue-400">{formatLargeNumber(qualityMetrics.overall_quality.total_production)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Passed Inspection:</span>
                <span className="text-green-400">{formatLargeNumber(qualityMetrics.overall_quality.passed_inspection)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">First Pass Yield:</span>
                <span className="text-cyan-400">{formatNumber(qualityMetrics.overall_quality.first_pass_yield, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Defect Rate:</span>
                <span className="text-red-400">{formatNumber(qualityMetrics.overall_quality.defect_rate, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Customer Returns:</span>
                <span className="text-orange-400">{qualityMetrics.overall_quality.customer_returns}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Defect Categories</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {qualityMetrics.defect_categories.map((category, index) => (
                <div key={index} className="flex items-center justify-between text-xs">
                  <span className="text-white">{category.category}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">{category.count}</span>
                    <span className="text-gray-400">({formatNumber(category.percentage, 1)}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Six Sigma Metrics</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Process Capability (Cpk):</span>
                <span className="text-purple-400">{formatNumber(qualityMetrics.six_sigma_metrics.process_capability, 2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Defects per Million:</span>
                <span className="text-red-400">{formatLargeNumber(qualityMetrics.six_sigma_metrics.defects_per_million)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sigma Level:</span>
                <span className="text-green-400">{formatNumber(qualityMetrics.six_sigma_metrics.sigma_level, 1)}σ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📦 INVENTORY MANAGEMENT & MATERIALS
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Raw Materials</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {inventoryManagement.raw_materials.map((material, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{material.material}</span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(material.status)}`}>
                      {material.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Stock: </span>
                    <span className="text-cyan-400">{formatLargeNumber(material.current_stock)} {material.unit}</span>
                    <span className="text-gray-400"> | Reorder: </span>
                    <span className="text-yellow-400">{formatLargeNumber(material.reorder_point)} {material.unit}</span>
                    <span className="text-gray-400"> | Lead Time: </span>
                    <span className="text-orange-400">{material.lead_time} days</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Supplier: </span>
                    <span className="text-purple-400">{material.supplier}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Finished Goods</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Current Inventory:</span>
                <span className="text-blue-400">{formatLargeNumber(inventoryManagement.finished_goods.current_inventory)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Warehouse Utilization:</span>
                <span className="text-green-400">{formatNumber(inventoryManagement.finished_goods.utilization, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Ready to Ship:</span>
                <span className="text-cyan-400">{formatLargeNumber(inventoryManagement.finished_goods.ready_to_ship)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Quality Hold:</span>
                <span className="text-yellow-400">{inventoryManagement.finished_goods.in_quality_hold}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Work in Progress</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">WIP Value:</span>
                <span className="text-green-400">{formatCurrency(inventoryManagement.work_in_progress.total_wip_value)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Units in Process:</span>
                <span className="text-blue-400">{formatLargeNumber(inventoryManagement.work_in_progress.units_in_process)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg WIP Time:</span>
                <span className="text-orange-400">{formatNumber(inventoryManagement.work_in_progress.average_wip_time, 1)} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Bottlenecks:</span>
                <span className="text-red-400">{inventoryManagement.work_in_progress.bottleneck_stations.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 MANUFACTURING OPERATIONS TRENDS (TODAY)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={operationsHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="time" stroke="#9CA3AF" fontSize={10}/>
            <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12}/>
            <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12}/>
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
              yAxisId="left"
              type="monotone"
              dataKey="production_rate"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Production Rate (units/h)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="oee" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="OEE %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="quality_rate" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Quality Rate %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="downtime_minutes" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Downtime (min)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="energy_consumption" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Energy Consumption (kWh)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="defect_count" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Defect Count"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="inventory_level" 
              stroke="#F97316" 
              strokeWidth={2}
              name="Inventory Level"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Maintenance and Energy Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Maintenance Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔧 MAINTENANCE OPERATIONS & EQUIPMENT HEALTH
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Maintenance Schedule</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Preventive Due:</span>
                <span className="text-yellow-400">{maintenanceOperations.maintenance_schedule.preventive_maintenance_due}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Predictive Alerts:</span>
                <span className="text-orange-400">{maintenanceOperations.maintenance_schedule.predictive_maintenance_alerts}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Emergency Repairs:</span>
                <span className="text-red-400">{maintenanceOperations.maintenance_schedule.emergency_repairs}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Compliance:</span>
                <span className="text-green-400">{formatNumber(maintenanceOperations.maintenance_schedule.maintenance_compliance, 1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Equipment Health</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {maintenanceOperations.equipment_health.map((equipment, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{equipment.equipment}</span>
                    <span className={`text-xs ${equipment.health_score >= 85 ? 'text-green-400' : equipment.health_score >= 75 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {formatNumber(equipment.health_score, 1)}%
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Vibration: </span>
                    <span className={`${getStatusColor(equipment.vibration_level).split(' ')[0]}`}>
                      {equipment.vibration_level}
                    </span>
                    <span className="text-gray-400"> | Temp: </span>
                    <span className={`${getStatusColor(equipment.temperature).split(' ')[0]}`}>
                      {equipment.temperature}
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Hours: </span>
                    <span className="text-purple-400">{formatLargeNumber(equipment.operating_hours)}h</span>
                    <span className="text-gray-400"> | Cost MTD: </span>
                    <span className="text-red-400">{formatCurrency(equipment.maintenance_cost_mtd)}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Next Maintenance: </span>
                    <span className="text-cyan-400">{formatTime(equipment.next_maintenance)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Energy & Environmental */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚡ ENERGY & ENVIRONMENTAL MONITORING
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Energy Consumption</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Consumption Today:</span>
                <span className="text-blue-400">{formatLargeNumber(energyEnvironmental.energy_consumption.total_consumption_today)} kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cost Today:</span>
                <span className="text-red-400">{formatCurrency(energyEnvironmental.energy_consumption.cost_today)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Efficiency Score:</span>
                <span className="text-green-400">{formatNumber(energyEnvironmental.energy_consumption.efficiency_score, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Renewable:</span>
                <span className="text-cyan-400">{formatNumber(energyEnvironmental.energy_consumption.renewable_percentage, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Carbon Footprint:</span>
                <span className="text-orange-400">{formatNumber(energyEnvironmental.energy_consumption.carbon_footprint, 1)} tons CO₂</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Environmental Metrics</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Water Usage:</span>
                <span className="text-blue-400">{formatLargeNumber(energyEnvironmental.environmental_metrics.water_usage)} L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Waste Generated:</span>
                <span className="text-orange-400">{formatLargeNumber(energyEnvironmental.environmental_metrics.waste_generated)} kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Recycled Materials:</span>
                <span className="text-green-400">{formatNumber(energyEnvironmental.environmental_metrics.recycled_materials, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Air Emissions:</span>
                <span className={`${getStatusColor(energyEnvironmental.environmental_metrics.air_emissions).split(' ')[0]}`}>
                  {energyEnvironmental.environmental_metrics.air_emissions}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Sustainability Goals</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Energy Reduction:</span>
                <span className="text-yellow-400">{formatNumber(energyEnvironmental.sustainability_goals.current_reduction, 1)}%</span>
                <span className="text-gray-400">/</span>
                <span className="text-blue-400">{formatNumber(energyEnvironmental.sustainability_goals.energy_reduction_target, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Waste Reduction:</span>
                <span className="text-green-400">{formatNumber(energyEnvironmental.sustainability_goals.current_waste_reduction, 1)}%</span>
                <span className="text-gray-400">/</span>
                <span className="text-purple-400">{formatNumber(energyEnvironmental.sustainability_goals.waste_reduction_target, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Carbon Neutrality:</span>
                <span className="text-cyan-400">{formatNumber(energyEnvironmental.sustainability_goals.carbon_neutrality_progress, 1)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingOperationsCenter;