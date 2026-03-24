// Energy Grid Management & Renewable Monitoring Center - 2026 Smart Grid Intelligence
// Based on SCADA systems, smart grid monitoring, renewable energy integration
import { useState, useEffect } from 'react';
import { 
  Zap, Sun, Wind, Battery, Gauge, Activity, AlertTriangle, CheckCircle,
  TrendingUp, TrendingDown, BarChart3, RefreshCw, Settings, Monitor,
  MapPin, Clock, Info, Target, Eye, Search, Play, Pause, StopCircle,
  ArrowRight, ArrowLeft, Plus, Minus, Users, Globe, Network, Server,
  Database, HardDrive, Cpu, MemoryStick, Layers, FileCode, Building,
  Factory, Home, Car, Truck, Plane, Ship, Thermometer, Droplets,
  Wifi, Signal, Radio, Tower, Radar, Navigation, Route, Flag,
  Calendar, Timer, DollarSign, CreditCard, ShoppingCart, Package,
  Warehouse, Box, Store, Phone, Mail, UserCheck, Download, Upload
} from 'lucide-react';

export default function EnergyGridManagementCenter() {
  const [energyData, setEnergyData] = useState({
    currentTime: new Date().toISOString(),
    gridFrequency: 60.02, // Hz
    totalGeneration: 847.6, // GW
    totalDemand: 823.4, // GW
    renewablePercentage: 42.8,
    gridStability: 98.7,
    carbonIntensity: 234, // g CO2/kWh
    powerPlants: [
      {
        name: 'Ivanpah Solar',
        location: 'California, USA',
        type: 'SOLAR_CSP',
        capacity: 392, // MW
        currentOutput: 356.7,
        efficiency: 91.0,
        status: 'OPTIMAL',
        carbonOffset: 45.7, // tons CO2/day
        maintenance: 'SCHEDULED',
        temperature: 32.4,
        windSpeed: 12.7,
        solarIrradiance: 987.2 // W/m²
      },
      {
        name: 'Hornsea Wind Farm',
        location: 'North Sea, UK',
        type: 'WIND_OFFSHORE',
        capacity: 1218,
        currentOutput: 1087.3,
        efficiency: 89.2,
        status: 'OPTIMAL',
        carbonOffset: 189.4,
        maintenance: 'NONE',
        temperature: 8.9,
        windSpeed: 28.3,
        solarIrradiance: 0
      },
      {
        name: 'Three Gorges Dam',
        location: 'Hubei, China',
        type: 'HYDRO',
        capacity: 22500,
        currentOutput: 18750.0,
        efficiency: 83.3,
        status: 'OPTIMAL',
        carbonOffset: 2847.5,
        maintenance: 'NONE',
        temperature: 15.6,
        windSpeed: 4.2,
        solarIrradiance: 0
      },
      {
        name: 'Tesla Megapack',
        location: 'Victoria, Australia',
        type: 'BATTERY_STORAGE',
        capacity: 450,
        currentOutput: -123.7, // negative = charging
        efficiency: 94.5,
        status: 'CHARGING',
        carbonOffset: 0,
        maintenance: 'NONE',
        temperature: 22.1,
        windSpeed: 0,
        solarIrradiance: 0,
        stateOfCharge: 67.8
      },
      {
        name: 'Palo Verde Nuclear',
        location: 'Arizona, USA',
        type: 'NUCLEAR',
        capacity: 3937,
        currentOutput: 3754.2,
        efficiency: 95.4,
        status: 'OPTIMAL',
        carbonOffset: 567.8,
        maintenance: 'NONE',
        temperature: 42.8,
        windSpeed: 8.9,
        solarIrradiance: 1123.4
      }
    ],
    transmissionLines: [
      {
        name: 'Pacific DC Intertie',
        from: 'Oregon',
        to: 'California',
        voltage: '±500 kV DC',
        capacity: 3100, // MW
        currentFlow: 2756.8,
        utilization: 88.9,
        losses: 2.3, // %
        status: 'NORMAL',
        temperature: 45.2,
        distance: 1362 // km
      },
      {
        name: 'Eastern Interconnection',
        from: 'Texas',
        to: 'New York',
        voltage: '765 kV AC',
        capacity: 4500,
        currentFlow: 3967.5,
        utilization: 88.2,
        losses: 4.1,
        status: 'NORMAL',
        temperature: 38.7,
        distance: 2145
      },
      {
        name: 'Quebec-New England',
        from: 'Quebec',
        to: 'Boston',
        voltage: '±450 kV DC',
        capacity: 2000,
        currentFlow: 1623.4,
        utilization: 81.2,
        losses: 3.2,
        status: 'MAINTENANCE',
        temperature: 12.4,
        distance: 1087
      }
    ],
    distributionNetworks: [
      {
        region: 'California ISO',
        demand: 45.7, // GW
        supply: 47.2,
        reserves: 3.3, // %
        frequency: 60.01,
        voltage: 'NORMAL',
        outages: 23,
        customers: 39000000,
        renewables: 52.4, // %
        status: 'STABLE'
      },
      {
        region: 'ERCOT Texas',
        demand: 67.8,
        supply: 69.1,
        reserves: 1.9,
        frequency: 60.03,
        voltage: 'NORMAL',
        outages: 45,
        customers: 26000000,
        renewables: 38.2,
        status: 'STABLE'
      },
      {
        region: 'PJM Interconnection',
        demand: 89.3,
        supply: 91.7,
        reserves: 2.7,
        frequency: 59.99,
        voltage: 'HIGH',
        outages: 67,
        customers: 65000000,
        renewables: 28.7,
        status: 'ALERT'
      }
    ],
    renewableMetrics: [
      {
        type: 'Solar PV',
        capacity: 127.4, // GW
        generation: 89.6,
        efficiency: 70.3,
        capacityFactor: 23.4, // %
        carbonOffset: 567.8, // tons CO2/day
        installations: 3400000,
        growth: '+12.8%',
        trend: 'increasing'
      },
      {
        type: 'Wind Power',
        capacity: 142.7,
        generation: 134.2,
        efficiency: 94.0,
        capacityFactor: 42.1,
        carbonOffset: 845.3,
        installations: 68400,
        growth: '+8.7%',
        trend: 'increasing'
      },
      {
        type: 'Hydroelectric',
        capacity: 102.7,
        generation: 87.3,
        efficiency: 85.0,
        capacityFactor: 85.0,
        carbonOffset: 534.6,
        installations: 2700,
        growth: '+1.2%',
        trend: 'stable'
      },
      {
        type: 'Biomass',
        capacity: 16.2,
        generation: 13.8,
        efficiency: 85.2,
        capacityFactor: 67.8,
        carbonOffset: 89.4,
        installations: 1240,
        growth: '+3.4%',
        trend: 'increasing'
      }
    ],
    gridAlerts: [
      {
        id: 'alert-grid001',
        timestamp: '15:23',
        priority: 'HIGH',
        type: 'FREQUENCY',
        location: 'PJM Interconnection',
        message: 'Frequency deviation detected',
        currentValue: 59.99,
        threshold: 60.0,
        deviation: -0.01,
        impact: 'Grid stability concern',
        action: 'Automatic frequency regulation activated',
        affectedCustomers: 65000000,
        status: 'RESPONDING'
      },
      {
        id: 'alert-grid002',
        timestamp: '15:18',
        priority: 'MEDIUM',
        type: 'TRANSMISSION',
        location: 'Quebec-New England Line',
        message: 'Transmission line maintenance window',
        capacity: 2000,
        reducedCapacity: 1200,
        duration: '4 hours',
        impact: 'Reduced import capacity',
        action: 'Load redistribution in progress',
        affectedCustomers: 8500000,
        status: 'SCHEDULED'
      },
      {
        id: 'alert-grid003',
        timestamp: '15:12',
        priority: 'LOW',
        type: 'RENEWABLE',
        location: 'California Solar Farms',
        message: 'Partial cloud coverage reducing solar output',
        expectedReduction: 15.7, // %
        duration: '2 hours',
        impact: 'Temporary generation decrease',
        action: 'Backup generation activated',
        affectedCustomers: 0,
        status: 'MITIGATED'
      }
    ],
    marketData: [
      {
        market: 'California ISO',
        price: 45.67, // $/MWh
        priceChange: '+2.3%',
        volume: 47234, // MWh
        congestion: 'NONE',
        ancillaryServices: 234.5, // $
        renewableCredits: 12.45
      },
      {
        market: 'ERCOT Texas',
        price: 38.92,
        priceChange: '-1.2%',
        volume: 69123,
        congestion: 'LIGHT',
        ancillaryServices: 189.7,
        renewableCredits: 8.76
      },
      {
        market: 'PJM',
        price: 52.34,
        priceChange: '+4.7%',
        volume: 91456,
        congestion: 'HEAVY',
        ancillaryServices: 345.8,
        renewableCredits: 15.23
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        gridFrequency: Math.max(59.95, Math.min(60.05, (prev.gridFrequency || 60.02) + (Math.random() - 0.5) * 0.02)),
        totalDemand: Math.max(800, Math.min(900, (prev.totalDemand || 823.4) + (Math.random() - 0.5) * 10)),
        renewablePercentage: Math.max(35, Math.min(50, (prev.renewablePercentage || 42.8) + (Math.random() - 0.5) * 1)),
        gridStability: Math.max(95, Math.min(99.5, (prev.gridStability || 98.7) + (Math.random() - 0.5) * 0.3)),
        powerPlants: prev.powerPlants?.map(plant => ({
          ...plant,
          currentOutput: plant?.type === 'BATTERY_STORAGE' 
            ? Math.max(-450, Math.min(450, (plant?.currentOutput || 0) + (Math.random() - 0.5) * 50))
            : Math.max(0, Math.min(plant?.capacity || 1000, (plant?.currentOutput || 500) + (Math.random() - 0.5) * (plant?.capacity || 1000) * 0.05)),
          efficiency: Math.max(70, Math.min(98, (plant?.efficiency || 90) + (Math.random() - 0.5) * 1)),
          temperature: Math.max(-10, Math.min(50, (plant?.temperature || 20) + (Math.random() - 0.5) * 2))
        })) || prev.powerPlants,
        transmissionLines: prev.transmissionLines?.map(line => ({
          ...line,
          currentFlow: Math.max(0, Math.min(line?.capacity || 1000, (line?.currentFlow || 500) + (Math.random() - 0.5) * (line?.capacity || 1000) * 0.1)),
          utilization: Math.max(50, Math.min(95, (line?.utilization || 80) + (Math.random() - 0.5) * 5))
        })) || prev.transmissionLines
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPTIMAL': case 'NORMAL': case 'STABLE': case 'NONE': return 'text-green-400';
      case 'CHARGING': case 'SCHEDULED': case 'MITIGATED': case 'RESPONDING': case 'LIGHT': return 'text-blue-400';
      case 'MAINTENANCE': case 'ALERT': case 'HEAVY': case 'MEDIUM': return 'text-yellow-400';
      case 'CRITICAL': case 'EMERGENCY': case 'FAILED': case 'HIGH': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'OPTIMAL': case 'NORMAL': case 'STABLE': case 'NONE': return 'bg-green-400/20';
      case 'CHARGING': case 'SCHEDULED': case 'MITIGATED': case 'RESPONDING': case 'LIGHT': return 'bg-blue-400/20';
      case 'MAINTENANCE': case 'ALERT': case 'HEAVY': case 'MEDIUM': return 'bg-yellow-400/20';
      case 'CRITICAL': case 'EMERGENCY': case 'FAILED': case 'HIGH': return 'bg-red-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'decreasing': return <TrendingDown className="w-4 h-4 text-red-400" />;
      case 'stable': return <Activity className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPlantIcon = (type) => {
    const iconClass = "w-4 h-4";
    switch (type) {
      case 'SOLAR_CSP': case 'SOLAR_PV': return <Sun className={`${iconClass} text-yellow-400`} />;
      case 'WIND_OFFSHORE': case 'WIND_ONSHORE': return <Wind className={`${iconClass} text-blue-400`} />;
      case 'HYDRO': return <Droplets className={`${iconClass} text-cyan-400`} />;
      case 'NUCLEAR': return <Zap className={`${iconClass} text-purple-400`} />;
      case 'BATTERY_STORAGE': return <Battery className={`${iconClass} text-green-400`} />;
      default: return <Factory className={`${iconClass} text-gray-400`} />;
    }
  };

  const getFrequencyColor = (frequency) => {
    if (frequency >= 59.98 && frequency <= 60.02) return 'text-green-400';
    if (frequency >= 59.95 && frequency <= 60.05) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Energy Grid Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Zap className="w-8 h-8 text-yellow-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Energy Grid Management & Renewable Monitoring Center</h2>
              <div className="text-sm text-gray-400">SCADA Systems • Smart Grid • Renewable Integration • Real-Time Control</div>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-semibold">GRID STABLE</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Grid Frequency</div>
            <div className={`text-2xl font-mono font-bold ${getFrequencyColor(energyData.gridFrequency || 60.02)}`}>
              {(energyData.gridFrequency || 60.02).toFixed(3)} Hz
            </div>
            <div className="text-xs text-emerald-400">
              {(energyData.gridStability || 98.7).toFixed(1)}% stability
            </div>
          </div>
        </div>
        
        {/* Global Grid Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Total Generation</span>
              <Zap className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {(energyData.totalGeneration || 847.6).toFixed(1)}<span className="text-sm text-gray-400 ml-1">GW</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-yellow-400 transition-all duration-300"
                style={{ width: `${Math.min(100, ((energyData.totalGeneration || 847.6) / 1000) * 100)}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">system capacity</div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Current Demand</span>
              <Activity className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {(energyData.totalDemand || 823.4).toFixed(1)}<span className="text-sm text-gray-400 ml-1">GW</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-blue-400 transition-all duration-300"
                style={{ width: `${Math.min(100, ((energyData.totalDemand || 823.4) / (energyData.totalGeneration || 847.6)) * 100)}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">load factor</div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Renewables</span>
              <Sun className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {(energyData.renewablePercentage || 42.8).toFixed(1)}<span className="text-sm text-gray-400 ml-1">%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-green-400 transition-all duration-300"
                style={{ width: `${Math.min(100, energyData.renewablePercentage || 42.8)}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">of total mix</div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Carbon Intensity</span>
              <Globe className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {energyData.carbonIntensity || 234}<span className="text-sm text-gray-400 ml-1">g/kWh</span>
            </div>
            <div className="text-xs text-purple-400 mt-1">
              CO₂ emissions rate
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Power Plants */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Factory className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">Power Generation Facilities</h3>
            <div className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-semibold rounded">
              REAL-TIME
            </div>
          </div>
          
          <div className="space-y-4">
            {energyData.powerPlants?.map((plant, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getPlantIcon(plant?.type)}
                    <div>
                      <h4 className="text-white font-medium">{plant?.name || 'Unknown Plant'}</h4>
                      <div className="text-xs text-gray-400">{plant?.location || 'Unknown Location'} • {plant?.type?.replace('_', ' ') || 'Unknown Type'}</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(plant?.status)} ${getStatusBg(plant?.status)}`}>
                      {plant?.status || 'UNKNOWN'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-mono text-white">
                      {(plant?.efficiency || 0).toFixed(1)}%
                    </div>
                    <div className="text-xs text-gray-400">efficiency</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-3">
                  <div>
                    <span className="text-xs text-gray-400">Output:</span>
                    <div className="text-white font-mono">
                      {plant?.type === 'BATTERY_STORAGE' && (plant?.currentOutput || 0) < 0 ? 'Charging' : 'Generating'}
                    </div>
                    <div className="text-xs text-blue-400">
                      {Math.abs(plant?.currentOutput || 0).toFixed(1)} MW
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">Capacity:</span>
                    <div className="text-white font-mono">{plant?.capacity || 0} MW</div>
                    <div className="text-xs text-green-400">
                      {plant?.type === 'BATTERY_STORAGE' ? `${plant?.stateOfCharge || 0}% SOC` : 'max output'}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">CO₂ Offset:</span>
                    <div className="text-white font-mono">{(plant?.carbonOffset || 0).toFixed(1)}</div>
                    <div className="text-xs text-green-400">tons/day</div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">Temperature:</span>
                    <div className="text-white font-mono">{(plant?.temperature || 0).toFixed(1)}°C</div>
                    <div className="text-xs text-cyan-400">ambient</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-full bg-slate-700 rounded-full h-2 mr-4">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        plant?.status === 'OPTIMAL' ? 'bg-green-400' : 
                        plant?.status === 'CHARGING' ? 'bg-blue-400' :
                        plant?.status === 'MAINTENANCE' ? 'bg-yellow-400' : 'bg-gray-400'
                      }`}
                      style={{ 
                        width: `${Math.min(100, Math.abs((plant?.currentOutput || 0) / (plant?.capacity || 1)) * 100)}%` 
                      }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 whitespace-nowrap">
                    {plant?.type === 'SOLAR_CSP' || plant?.type === 'SOLAR_PV' ? 
                      `${(plant?.solarIrradiance || 0).toFixed(0)} W/m²` :
                      plant?.type?.includes('WIND') ? 
                      `${(plant?.windSpeed || 0).toFixed(1)} m/s` :
                      `${(plant?.temperature || 0).toFixed(1)}°C`
                    }
                  </div>
                </div>
              </div>
            )) || <div className="text-gray-400">No power plant data available</div>}
          </div>
        </div>

        {/* Transmission & Distribution */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Network className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Grid Networks</h3>
          </div>
          
          <div className="space-y-4 mb-4">
            <div className="text-sm text-gray-400 mb-2">High Voltage Transmission</div>
            {energyData.transmissionLines?.slice(0, 2).map((line, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{line?.name || 'Unknown Line'}</span>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(line?.status)} ${getStatusBg(line?.status)}`}>
                    {line?.status || 'UNKNOWN'}
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{line?.from || 'Unknown'} → {line?.to || 'Unknown'} • {line?.voltage || 'Unknown'}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Flow:</span>
                    <span className="text-blue-400 ml-1">{(line?.currentFlow || 0).toFixed(0)} MW</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Capacity:</span>
                    <span className="text-green-400 ml-1">{line?.capacity || 0} MW</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Utilization:</span>
                    <span className="text-purple-400 ml-1">{(line?.utilization || 0).toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Losses:</span>
                    <span className="text-red-400 ml-1">{(line?.losses || 0).toFixed(1)}%</span>
                  </div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      line?.status === 'NORMAL' ? 'bg-green-400' : 'bg-yellow-400'
                    }`}
                    style={{ width: `${Math.min(100, line?.utilization || 0)}%` }}
                  />
                </div>
              </div>
            )) || <div className="text-gray-400">No transmission data</div>}
          </div>

          <div className="space-y-3">
            <div className="text-sm text-gray-400 mb-2">Regional Distribution</div>
            {energyData.distributionNetworks?.slice(0, 2).map((network, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{network?.region || 'Unknown Region'}</span>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(network?.status)} ${getStatusBg(network?.status)}`}>
                    {network?.status || 'UNKNOWN'}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Demand:</span>
                    <span className="text-blue-400 ml-1">{(network?.demand || 0).toFixed(1)} GW</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Supply:</span>
                    <span className="text-green-400 ml-1">{(network?.supply || 0).toFixed(1)} GW</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Reserves:</span>
                    <span className="text-purple-400 ml-1">{(network?.reserves || 0).toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Renewables:</span>
                    <span className="text-yellow-400 ml-1">{(network?.renewables || 0).toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="text-xs text-cyan-400 mt-1">
                  {formatNumber(network?.customers || 0)} customers • {network?.outages || 0} outages
                </div>
              </div>
            )) || <div className="text-gray-400">No distribution data</div>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Renewable Energy */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Sun className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Renewable Energy Sources</h3>
          </div>
          
          <div className="space-y-3">
            {energyData.renewableMetrics?.map((renewable, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {renewable?.type === 'Solar PV' ? <Sun className="w-4 h-4 text-yellow-400" /> :
                     renewable?.type === 'Wind Power' ? <Wind className="w-4 h-4 text-blue-400" /> :
                     renewable?.type === 'Hydroelectric' ? <Droplets className="w-4 h-4 text-cyan-400" /> :
                     <Factory className="w-4 h-4 text-green-400" />}
                    <span className="text-white font-medium text-sm">{renewable?.type || 'Unknown Type'}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {getTrendIcon(renewable?.trend)}
                    <span className="text-green-400 text-xs">{renewable?.growth || '+0%'}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Capacity:</span>
                    <div className="text-white font-mono">{(renewable?.capacity || 0).toFixed(1)} GW</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Generation:</span>
                    <div className="text-blue-400 font-mono">{(renewable?.generation || 0).toFixed(1)} GW</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Efficiency:</span>
                    <div className="text-green-400 font-mono">{(renewable?.efficiency || 0).toFixed(1)}%</div>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Capacity Factor: {(renewable?.capacityFactor || 0).toFixed(1)}%</span>
                    <span className="text-green-400">{formatNumber(renewable?.installations || 0)} installations</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="h-full rounded-full bg-green-400 transition-all duration-300"
                      style={{ width: `${Math.min(100, renewable?.efficiency || 0)}%` }}
                    />
                  </div>
                </div>

                <div className="text-xs text-emerald-400">
                  CO₂ Offset: {(renewable?.carbonOffset || 0).toFixed(1)} tons/day
                </div>
              </div>
            )) || <div className="text-gray-400">No renewable data available</div>}
          </div>
        </div>

        {/* Grid Alerts & Market */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Grid Alerts & Market Data</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            {energyData.gridAlerts?.map((alert, index) => (
              <div key={index} className={`border rounded p-3 transition-all ${
                alert?.priority === 'HIGH' ? 'border-red-400/50 bg-red-400/10' :
                alert?.priority === 'MEDIUM' ? 'border-yellow-400/50 bg-yellow-400/10' :
                'border-blue-400/50 bg-blue-400/10'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-gray-400 font-mono">{alert?.timestamp || 'No Time'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(alert?.priority)} ${getStatusBg(alert?.priority)}`}>
                      {alert?.priority || 'UNKNOWN'}
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(alert?.status)} ${getStatusBg(alert?.status)}`}>
                      {alert?.status?.replace('_', ' ') || 'UNKNOWN'}
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 mb-1">{alert?.message || 'No message'}</div>
                <div className="text-xs text-blue-400 mb-1"><strong>Location:</strong> {alert?.location || 'Unknown'}</div>
                <div className="text-xs text-green-400"><strong>Action:</strong> {alert?.action || 'No action'}</div>
              </div>
            )) || <div className="text-gray-400">No alerts available</div>}
          </div>

          {/* Market Data Summary */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">Energy Market Prices</div>
            <div className="space-y-2">
              {energyData.marketData?.map((market, index) => (
                <div key={index} className="flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-3 h-3 text-green-400" />
                    <span className="text-gray-300">{market?.market || 'Unknown Market'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-mono">${(market?.price || 0).toFixed(2)}/MWh</span>
                    <span className={market?.priceChange?.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                      {market?.priceChange || '0%'}
                    </span>
                  </div>
                </div>
              )) || <div className="text-gray-400">No market data available</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}