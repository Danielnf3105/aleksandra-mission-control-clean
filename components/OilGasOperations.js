// OilGasOperations.js - Oil & Gas Operations Control Center & Integrated Energy Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const OilGasOperations = () => {
  const [upstreamAssets, setUpstreamAssets] = useState([
    {
      id: 'upstream_001',
      name: 'Eagle Ford Shale - Block 247',
      location: 'Texas, USA',
      type: 'ONSHORE_UNCONVENTIONAL',
      operator: 'North Star Energy',
      status: 'PRODUCING',
      wells: {
        total: 42,
        producing: 38,
        shutIn: 2,
        drilling: 2,
        workover: 0
      },
      production: {
        oil: 8450, // barrels per day
        gas: 12.5, // million cubic feet per day
        water: 2890 // barrels per day
      },
      reserves: {
        oil: 15.7, // million barrels
        gas: 89.4, // billion cubic feet
        estimatedLife: 18 // years
      },
      operations: {
        rigCount: 2,
        frackingStages: 156,
        completedStages: 134,
        avgPressure: 4250, // psi
        avgTemperature: 165 // fahrenheit
      },
      economics: {
        opex: 34.50, // $/barrel
        capex: 8.2, // $MM this month
        netback: 67.85, // $/barrel
        roi: 24.7 // percentage
      },
      safety: {
        daysWithoutIncident: 487,
        hseScore: 9.2,
        environmentalCompliance: 100.0,
        lastInspection: Date.now() - 12 * 24 * 60 * 60 * 1000
      },
      lastUpdate: Date.now() - 8 * 60 * 1000,
      alerts: ['Well EF-247-023 needs workover']
    },
    {
      id: 'upstream_002',
      name: 'Offshore Platform Alpha',
      location: 'Gulf of Mexico',
      type: 'OFFSHORE_PLATFORM',
      operator: 'Deep Sea Drilling Corp',
      status: 'PRODUCING',
      wells: {
        total: 18,
        producing: 16,
        shutIn: 1,
        drilling: 0,
        workover: 1
      },
      production: {
        oil: 15600,
        gas: 8.9,
        water: 4560
      },
      reserves: {
        oil: 89.2,
        gas: 245.8,
        estimatedLife: 12
      },
      operations: {
        rigCount: 0,
        waterDepth: 4850, // feet
        platformHeight: 325, // feet
        avgPressure: 6850,
        avgTemperature: 180
      },
      economics: {
        opex: 52.75,
        capex: 12.8,
        netback: 58.90,
        roi: 18.3
      },
      safety: {
        daysWithoutIncident: 234,
        hseScore: 8.9,
        environmentalCompliance: 98.5,
        lastInspection: Date.now() - 7 * 24 * 60 * 60 * 1000
      },
      lastUpdate: Date.now() - 15 * 60 * 1000,
      alerts: ['Hurricane season monitoring active', 'Platform Alpha-W07 workover in progress']
    },
    {
      id: 'upstream_003',
      name: 'Bakken Formation - Sector 8',
      location: 'North Dakota, USA',
      type: 'ONSHORE_UNCONVENTIONAL',
      operator: 'Prairie Oil & Gas',
      status: 'PRODUCING',
      wells: {
        total: 67,
        producing: 59,
        shutIn: 5,
        drilling: 3,
        workover: 0
      },
      production: {
        oil: 11750,
        gas: 18.4,
        water: 6890
      },
      reserves: {
        oil: 34.9,
        gas: 127.6,
        estimatedLife: 15
      },
      operations: {
        rigCount: 3,
        frackingStages: 234,
        completedStages: 198,
        avgPressure: 3950,
        avgTemperature: 155
      },
      economics: {
        opex: 38.90,
        capex: 15.6,
        netback: 62.40,
        roi: 22.1
      },
      safety: {
        daysWithoutIncident: 892,
        hseScore: 9.5,
        environmentalCompliance: 99.2,
        lastInspection: Date.now() - 18 * 24 * 60 * 60 * 1000
      },
      lastUpdate: Date.now() - 12 * 60 * 1000,
      alerts: ['Winter operations precautions active']
    }
  ]);

  const [midstreamAssets, setMidstreamAssets] = useState([
    {
      id: 'pipeline_001',
      name: 'Texas Gulf Coast Pipeline',
      type: 'CRUDE_OIL_PIPELINE',
      operator: 'Continental Pipeline Co',
      status: 'OPERATIONAL',
      route: 'Houston, TX → Beaumont, TX',
      specifications: {
        length: 127, // miles
        diameter: 36, // inches
        capacity: 450000, // barrels per day
        pressure: 1450, // psi
        material: 'API 5L X70 Steel'
      },
      operations: {
        currentFlow: 387450, // barrels per day
        utilization: 86.1, // percentage
        stations: 4,
        activeStations: 4,
        pumpEfficiency: 94.2
      },
      integrity: {
        lastInspection: Date.now() - 45 * 24 * 60 * 60 * 1000,
        nextInspection: Date.now() + 120 * 24 * 60 * 60 * 1000,
        integrityScore: 9.1,
        anomalies: 0,
        corrosionRate: 0.02 // mils per year
      },
      batch: {
        currentBatch: 'CRUDE-WTI-2026-047',
        batchVolume: 125000, // barrels
        origin: 'Eagle Ford',
        destination: 'Beaumont Refinery',
        estimatedArrival: Date.now() + 14 * 60 * 60 * 1000
      },
      economics: {
        tariff: 2.85, // $/barrel
        revenue: 1104132, // $ this month
        opex: 0.65, // $/barrel
        margin: 77.2 // percentage
      },
      lastUpdate: Date.now() - 6 * 60 * 1000,
      alerts: ['Station 3 pump running at 98% capacity']
    },
    {
      id: 'pipeline_002',
      name: 'Rocky Mountain Gas Transmission',
      type: 'NATURAL_GAS_PIPELINE',
      operator: 'Western Gas Transport',
      status: 'OPERATIONAL',
      route: 'Colorado → California',
      specifications: {
        length: 485,
        diameter: 42,
        capacity: 2.8, // billion cubic feet per day
        pressure: 1200,
        material: 'API 5L X80 Steel'
      },
      operations: {
        currentFlow: 2.34, // billion cubic feet per day
        utilization: 83.6,
        stations: 12,
        activeStations: 11,
        compressorEfficiency: 91.8
      },
      integrity: {
        lastInspection: Date.now() - 67 * 24 * 60 * 60 * 1000,
        nextInspection: Date.now() + 98 * 24 * 60 * 60 * 1000,
        integrityScore: 8.7,
        anomalies: 1,
        corrosionRate: 0.01
      },
      batch: {
        currentBatch: 'NAT-GAS-2026-089',
        batchVolume: 125, // million cubic feet
        origin: 'Piceance Basin',
        destination: 'Los Angeles Hub',
        estimatedArrival: Date.now() + 8 * 60 * 60 * 1000
      },
      economics: {
        tariff: 0.45, // $/MCF
        revenue: 1053000,
        opex: 0.12,
        margin: 73.3
      },
      lastUpdate: Date.now() - 4 * 60 * 1000,
      alerts: ['Station 7 compressor offline for maintenance']
    },
    {
      id: 'storage_001',
      name: 'Cushing Terminal Complex',
      type: 'CRUDE_OIL_STORAGE',
      operator: 'Strategic Storage LLC',
      status: 'OPERATIONAL',
      location: 'Cushing, OK',
      specifications: {
        totalCapacity: 76500000, // barrels
        tankCount: 127,
        maxReceiptRate: 2800000, // barrels per day
        maxDeliveryRate: 2650000
      },
      operations: {
        currentInventory: 45890000, // barrels
        utilization: 60.0,
        receiptsToday: 1890000,
        deliveriesToday: 2150000,
        netChange: -260000
      },
      quality: {
        apiGravity: 39.6,
        sulfurContent: 0.24, // percentage
        waterContent: 0.08,
        temperature: 67 // fahrenheit
      },
      economics: {
        storageRate: 0.55, // $/barrel/month
        revenue: 25,
        demurrage: 145000,
        operatingCosts: 890000
      },
      safety: {
        fireSuppressionStatus: 'OPERATIONAL',
        leakDetectionStatus: 'ACTIVE',
        lastSafetyDrill: Date.now() - 15 * 24 * 60 * 60 * 1000,
        emergencyResponseTime: '3.2 minutes'
      },
      lastUpdate: Date.now() - 10 * 60 * 1000,
      alerts: ['Tank 47 scheduled for inspection next week']
    }
  ]);

  const [downstreamAssets, setDownstreamAssets] = useState([
    {
      id: 'refinery_001',
      name: 'Port Arthur Refinery',
      location: 'Texas, USA',
      operator: 'Coastal Refining Corp',
      type: 'INTEGRATED_REFINERY',
      status: 'OPERATIONAL',
      capacity: {
        crude: 385000, // barrels per day
        utilization: 89.4, // percentage
        throughput: 344290
      },
      units: {
        cdu: { capacity: 180000, utilization: 92.1, status: 'OPERATIONAL' }, // Crude Distillation Unit
        vdu: { capacity: 85000, utilization: 88.7, status: 'OPERATIONAL' }, // Vacuum Distillation Unit
        fcc: { capacity: 95000, utilization: 91.3, status: 'OPERATIONAL' }, // Fluid Catalytic Cracking
        hydrocracker: { capacity: 65000, utilization: 87.9, status: 'OPERATIONAL' },
        reformer: { capacity: 45000, utilization: 94.2, status: 'OPERATIONAL' },
        alkylation: { capacity: 28000, utilization: 85.6, status: 'OPERATIONAL' }
      },
      products: {
        gasoline: { production: 145600, margin: 18.45 }, // barrels per day, $/barrel margin
        diesel: { production: 89400, margin: 22.90 },
        jetFuel: { production: 34500, margin: 15.75 },
        fuelOil: { production: 28900, margin: 8.30 },
        petrochemicals: { production: 18700, margin: 45.60 }
      },
      economics: {
        crackSpread: 28.75, // $/barrel
        opex: 6.85,
        energyCosts: 4.20,
        maintenance: 2.15,
        grossMargin: 22.50
      },
      operations: {
        steamProduction: 1250, // thousand pounds per hour
        powerGeneration: 185, // megawatts
        waterUsage: 2.8, // million gallons per day
        wasteGeneration: 145 // tons per day
      },
      safety: {
        daysWithoutIncident: 156,
        processAlarms: 23,
        emergencyShutdowns: 0,
        hseScore: 8.8,
        environmentalCompliance: 97.2
      },
      lastUpdate: Date.now() - 5 * 60 * 1000,
      alerts: ['FCC Unit catalyst regeneration scheduled', '2 process alarms active']
    },
    {
      id: 'refinery_002',
      name: 'California Coastal Refinery',
      location: 'California, USA',
      operator: 'Pacific Energy Systems',
      type: 'CONVERSION_REFINERY',
      status: 'OPERATIONAL',
      capacity: {
        crude: 275000,
        utilization: 82.3,
        throughput: 226325
      },
      units: {
        cdu: { capacity: 150000, utilization: 85.4, status: 'OPERATIONAL' },
        vdu: { capacity: 75000, utilization: 81.2, status: 'MAINTENANCE' },
        fcc: { capacity: 85000, utilization: 89.7, status: 'OPERATIONAL' },
        hydrocracker: { capacity: 55000, utilization: 78.9, status: 'OPERATIONAL' },
        reformer: { capacity: 42000, utilization: 92.1, status: 'OPERATIONAL' },
        alkylation: { capacity: 22000, utilization: 88.4, status: 'OPERATIONAL' }
      },
      products: {
        gasoline: { production: 98700, margin: 19.85 },
        diesel: { production: 67800, margin: 24.10 },
        jetFuel: { production: 28900, margin: 16.45 },
        fuelOil: { production: 15600, margin: 9.75 },
        petrochemicals: { production: 12400, margin: 48.90 }
      },
      economics: {
        crackSpread: 31.20,
        opex: 7.45,
        energyCosts: 5.60,
        maintenance: 3.80,
        grossMargin: 21.35
      },
      operations: {
        steamProduction: 985,
        powerGeneration: 142,
        waterUsage: 2.1,
        wasteGeneration: 98
      },
      safety: {
        daysWithoutIncident: 89,
        processAlarms: 31,
        emergencyShutdowns: 1,
        hseScore: 8.2,
        environmentalCompliance: 95.8
      },
      lastUpdate: Date.now() - 8 * 60 * 1000,
      alerts: ['VDU Unit in maintenance mode', '1 emergency shutdown yesterday', '5 process alarms active']
    },
    {
      id: 'terminal_001',
      name: 'Houston Ship Channel Terminal',
      location: 'Houston, TX',
      operator: 'Gulf Coast Terminals Inc',
      type: 'MARINE_TERMINAL',
      status: 'OPERATIONAL',
      specifications: {
        berths: 8,
        maxVesselSize: 300000, // deadweight tons
        storageCapacity: 12500000, // barrels
        loadingRate: 65000 // barrels per hour
      },
      operations: {
        vesselsInPort: 3,
        vesselsScheduled: 7,
        currentInventory: 8950000,
        utilization: 71.6,
        loadingOperations: 2,
        dischargingOperations: 1
      },
      vessels: [
        {
          name: 'MT Nordic Star',
          type: 'VLCC',
          dwt: 285000,
          cargo: 'Crude Oil - WTI',
          volume: 1950000, // barrels
          status: 'LOADING',
          eta: null,
          etd: Date.now() + 18 * 60 * 60 * 1000,
          berth: 'B-1'
        },
        {
          name: 'Coral Princess',
          type: 'Product Tanker',
          dwt: 115000,
          cargo: 'Gasoline - RBOB',
          volume: 745000,
          status: 'DISCHARGING',
          eta: null,
          etd: Date.now() + 6 * 60 * 60 * 1000,
          berth: 'B-4'
        },
        {
          name: 'Energy Transporter',
          type: 'Aframax',
          dwt: 120000,
          cargo: 'Crude Oil - Brent',
          volume: 850000,
          status: 'BERTHED',
          eta: null,
          etd: Date.now() + 32 * 60 * 60 * 1000,
          berth: 'B-6'
        }
      ],
      economics: {
        berthingFees: 245000, // $ this month
        handlingFees: 1890000,
        storageRevenue: 450000,
        totalRevenue: 2585000
      },
      lastUpdate: Date.now() - 7 * 60 * 1000,
      alerts: ['Berth 3 under maintenance until Friday']
    }
  ]);

  const [marketData, setMarketData] = useState({
    commodityPrices: {
      wti: { price: 82.45, change: +1.25, percentage: +1.5 },
      brent: { price: 85.90, change: +0.85, percentage: +1.0 },
      naturalGas: { price: 3.67, change: -0.12, percentage: -3.2 },
      gasoline: { price: 2.48, change: +0.03, percentage: +1.2 },
      diesel: { price: 2.89, change: +0.07, percentage: +2.5 },
      heatingOil: { price: 2.67, change: +0.04, percentage: +1.5 }
    },
    crackSpreads: {
      gasoline: 28.75,
      diesel: 24.80,
      jetFuel: 18.90,
      heatingOil: 22.35
    },
    basis: {
      wtiBrent: -3.45, // WTI discount to Brent
      cushing: +0.15, // Cushing vs WTI
      gulfCoast: -0.35 // Gulf Coast vs WTI
    },
    inventories: {
      crude: 485.2, // million barrels
      gasoline: 234.8,
      distillates: 156.9,
      change: {
        crude: -2.1, // million barrel change
        gasoline: +1.8,
        distillates: -0.7
      }
    },
    lastUpdate: Date.now() - 15 * 60 * 1000
  });

  const [performanceTrends, setPerformanceTrends] = useState([]);

  const generatePerformanceTrends = () => {
    const data = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}),
        oilProduction: Math.floor(Math.random() * 5000) + 32000, // barrels/day
        gasProduction: Math.floor(Math.random() * 5) + 35, // MMcf/day
        refineryUtilization: Math.floor(Math.random() * 15) + 80, // percentage
        crackSpread: Math.floor(Math.random() * 8) + 25, // $/barrel
        pipelineFlow: Math.floor(Math.random() * 100000) + 350000, // barrels/day
        storageUtilization: Math.floor(Math.random() * 20) + 55, // percentage
        safetyIndex: Math.floor(Math.random() * 100) + 850 // incidents per million hours
      });
    }
    return data;
  };

  useEffect(() => {
    setPerformanceTrends(generatePerformanceTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update upstream production
      setUpstreamAssets(prev => prev.map(asset => ({
        ...asset,
        production: {
          ...asset.production,
          oil: Math.max(0, asset.production.oil + (Math.random() - 0.5) * 200),
          gas: Math.max(0, asset.production.gas + (Math.random() - 0.5) * 1.0),
          water: Math.max(0, asset.production.water + (Math.random() - 0.5) * 100)
        },
        operations: {
          ...asset.operations,
          avgPressure: Math.max(1000, asset.operations.avgPressure + (Math.random() - 0.5) * 100),
          avgTemperature: Math.max(120, asset.operations.avgTemperature + (Math.random() - 0.5) * 10)
        },
        lastUpdate: Date.now()
      })));

      // Update pipeline flows
      setMidstreamAssets(prev => prev.map(asset => {
        let flowChange = (Math.random() - 0.5) * 10000;
        if (asset.type === 'NATURAL_GAS_PIPELINE') {
          flowChange = (Math.random() - 0.5) * 0.1;
        }
        
        let newFlow = asset.operations.currentFlow + flowChange;
        if (asset.type === 'NATURAL_GAS_PIPELINE') {
          newFlow = Math.max(1.0, Math.min(asset.specifications.capacity, newFlow));
        } else {
          newFlow = Math.max(0, Math.min(asset.specifications.capacity, newFlow));
        }
        
        return {
          ...asset,
          operations: {
            ...asset.operations,
            currentFlow: newFlow,
            utilization: (newFlow / asset.specifications.capacity) * 100
          },
          lastUpdate: Date.now()
        };
      }));

      // Update refinery throughput
      setDownstreamAssets(prev => prev.map(asset => {
        if (asset.type && asset.type.includes('REFINERY')) {
          const utilizationChange = (Math.random() - 0.5) * 3;
          const newUtilization = Math.max(70, Math.min(95, asset.capacity.utilization + utilizationChange));
          
          return {
            ...asset,
            capacity: {
              ...asset.capacity,
              utilization: newUtilization,
              throughput: (asset.capacity.crude * newUtilization) / 100
            },
            safety: {
              ...asset.safety,
              processAlarms: Math.max(0, asset.safety.processAlarms + Math.floor((Math.random() - 0.8) * 3))
            },
            lastUpdate: Date.now()
          };
        }
        return { ...asset, lastUpdate: Date.now() };
      }));

      // Update commodity prices
      setMarketData(prev => ({
        ...prev,
        commodityPrices: {
          ...prev.commodityPrices,
          wti: {
            ...prev.commodityPrices.wti,
            price: Math.max(70, Math.min(100, prev.commodityPrices.wti.price + (Math.random() - 0.5) * 2)),
            change: (Math.random() - 0.5) * 3
          },
          brent: {
            ...prev.commodityPrices.brent,
            price: Math.max(72, Math.min(105, prev.commodityPrices.brent.price + (Math.random() - 0.5) * 2)),
            change: (Math.random() - 0.5) * 3
          },
          naturalGas: {
            ...prev.commodityPrices.naturalGas,
            price: Math.max(2.0, Math.min(6.0, prev.commodityPrices.naturalGas.price + (Math.random() - 0.5) * 0.3)),
            change: (Math.random() - 0.5) * 0.5
          }
        },
        lastUpdate: Date.now()
      }));

    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL':
      case 'PRODUCING': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'MAINTENANCE':
      case 'WORKOVER': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'SHUTDOWN':
      case 'SHUTIN': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'DRILLING':
      case 'LOADING':
      case 'DISCHARGING': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getUtilizationColor = (utilization) => {
    if (utilization >= 90) return 'text-red-400';
    if (utilization >= 80) return 'text-yellow-400';
    if (utilization >= 60) return 'text-green-400';
    return 'text-blue-400';
  };

  const getPriceChangeColor = (change) => {
    if (change > 0) return 'text-green-400';
    if (change < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toFixed(2)}`;
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return `${Math.floor(diff / 86400000)}d ago`;
  };

  const formatNumber = (num, decimals = 0) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(decimals)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(decimals)}K`;
    }
    return num.toLocaleString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🛢️ OIL & GAS OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {upstreamAssets.filter(a => a.status === 'PRODUCING').length}/{upstreamAssets.length} Producing
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            WTI: ${marketData.commodityPrices.wti.price.toFixed(2)}
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Integrated Energy Command Center
          </div>
        </div>
      </div>

      {/* Energy Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">OIL PRODUCTION</div>
              <div className="text-2xl font-bold text-green-100">
                {formatNumber(upstreamAssets.reduce((sum, a) => sum + a.production.oil, 0), 1)}
              </div>
              <div className="text-xs text-green-300">
                bbls/day | Wells: {upstreamAssets.reduce((sum, a) => sum + a.wells.producing, 0)}
              </div>
            </div>
            <div className="text-3xl opacity-60">🛢️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">GAS PRODUCTION</div>
              <div className="text-2xl font-bold text-blue-100">
                {upstreamAssets.reduce((sum, a) => sum + a.production.gas, 0).toFixed(1)}
              </div>
              <div className="text-xs text-blue-300">
                MMcf/day | Price: ${marketData.commodityPrices.naturalGas.price.toFixed(2)}
              </div>
            </div>
            <div className="text-3xl opacity-60">🔥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">REFINERY THROUGHPUT</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(downstreamAssets.filter(a => a.capacity).reduce((sum, a) => sum + a.capacity.throughput, 0), 1)}
              </div>
              <div className="text-xs text-purple-300">
                bbls/day | Utilization: {Math.floor(downstreamAssets.filter(a => a.capacity).reduce((sum, a) => sum + a.capacity.utilization, 0) / downstreamAssets.filter(a => a.capacity).length)}%
              </div>
            </div>
            <div className="text-3xl opacity-60">🏭</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">CRACK SPREAD</div>
              <div className="text-2xl font-bold text-orange-100">
                ${marketData.crackSpreads.gasoline.toFixed(2)}
              </div>
              <div className="text-xs text-orange-300">
                $/bbl Gasoline | Diesel: ${marketData.crackSpreads.diesel.toFixed(2)}
              </div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>
      </div>

      {/* Upstream and Midstream */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upstream Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⛽ UPSTREAM OPERATIONS & PRODUCTION ASSETS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {upstreamAssets.map((asset) => (
              <div key={asset.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(asset.status)}`}>
                      {asset.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {asset.type.replace(/_/g, ' ')}
                    </span>
                    {asset.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                        {asset.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(asset.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{asset.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{asset.location} | Operator: {asset.operator}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Oil Production</div>
                    <div className="text-green-400">{formatNumber(asset.production.oil)} bbl/day</div>
                    <div className="text-gray-500">Netback: ${asset.economics.netback.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Gas Production</div>
                    <div className="text-blue-400">{asset.production.gas.toFixed(1)} MMcf/day</div>
                    <div className="text-gray-500">Water: {formatNumber(asset.production.water)} bbl/day</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Wells Status</div>
                    <div className="text-purple-400">{asset.wells.producing}/{asset.wells.total}</div>
                    <div className="text-gray-500">Drilling: {asset.wells.drilling}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Pressure</div>
                    <div className="text-orange-400">{asset.operations.avgPressure.toFixed(0)} psi</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Temperature</div>
                    <div className="text-red-400">{asset.operations.avgTemperature.toFixed(0)}°F</div>
                  </div>
                  <div>
                    <div className="text-gray-400">ROI</div>
                    <div className="text-yellow-400">{asset.economics.roi.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Economics: </span>
                  <span className="text-green-400">OPEX: ${asset.economics.opex.toFixed(2)}/bbl</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">CAPEX: ${asset.economics.capex.toFixed(1)}MM</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Reserves: </span>
                  <span className="text-cyan-400">Oil: {asset.reserves.oil.toFixed(1)}MM bbl</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-purple-400">Gas: {asset.reserves.gas.toFixed(1)}Bcf</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-orange-400">Life: {asset.reserves.estimatedLife}y</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Safety: </span>
                  <span className="text-green-400">{asset.safety.daysWithoutIncident} days incident-free</span>
                  <span className="text-gray-400"> | HSE: </span>
                  <span className="text-blue-400">{asset.safety.hseScore.toFixed(1)}/10</span>
                  <span className="text-gray-400"> | Compliance: </span>
                  <span className="text-purple-400">{asset.safety.environmentalCompliance.toFixed(1)}%</span>
                </div>

                {asset.operations.rigCount > 0 && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Drilling: </span>
                    <span className="text-yellow-400">{asset.operations.rigCount} rigs active</span>
                    {asset.operations.frackingStages && (
                      <>
                        <span className="text-gray-400"> | Fracking: </span>
                        <span className="text-indigo-400">{asset.operations.completedStages}/{asset.operations.frackingStages} stages</span>
                      </>
                    )}
                  </div>
                )}

                {asset.operations.waterDepth && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Water Depth: </span>
                    <span className="text-cyan-400">{asset.operations.waterDepth.toLocaleString()}ft</span>
                    <span className="text-gray-400"> | Platform Height: </span>
                    <span className="text-orange-400">{asset.operations.platformHeight}ft</span>
                  </div>
                )}

                {asset.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {asset.alerts.map((alert, index) => (
                      <div key={index} className="text-yellow-400">⚠️ {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Midstream Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚰 MIDSTREAM OPERATIONS & PIPELINE SYSTEMS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {midstreamAssets.map((asset) => (
              <div key={asset.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(asset.status)}`}>
                      {asset.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {asset.type.replace(/_/g, ' ')}
                    </span>
                    {asset.alerts && asset.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {asset.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(asset.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{asset.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{asset.route} | Operator: {asset.operator}</div>
                
                {asset.specifications && (
                  <div className="text-xs text-purple-400 mb-3">
                    {asset.specifications.length} miles | {asset.specifications.diameter}" diameter | {asset.specifications.material}
                  </div>
                )}

                {asset.operations && (
                  <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                    <div>
                      <div className="text-gray-400">Current Flow</div>
                      <div className="text-blue-400">
                        {asset.type.includes('GAS') ? 
                          `${asset.operations.currentFlow.toFixed(2)} Bcf/d` : 
                          `${formatNumber(asset.operations.currentFlow)} bbl/d`}
                      </div>
                      <div className="text-gray-500">
                        Capacity: {asset.type.includes('GAS') ? 
                          `${asset.specifications.capacity.toFixed(1)} Bcf/d` : 
                          `${formatNumber(asset.specifications.capacity)} bbl/d`}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400">Utilization</div>
                      <div className={getUtilizationColor(asset.operations.utilization)}>
                        {asset.operations.utilization.toFixed(1)}%
                      </div>
                      <div className="text-gray-500">
                        Stations: {asset.operations.activeStations}/{asset.operations.stations}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400">Efficiency</div>
                      <div className="text-green-400">
                        {(asset.operations.pumpEfficiency || asset.operations.compressorEfficiency).toFixed(1)}%
                      </div>
                      <div className="text-gray-500">
                        Pressure: {asset.specifications.pressure} psi
                      </div>
                    </div>
                  </div>
                )}

                {asset.batch && (
                  <div className="text-xs mb-2">
                    <div className="text-gray-400">Current Batch:</div>
                    <div className="text-white">{asset.batch.currentBatch}</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-gray-400">Volume: </span>
                        <span className="text-cyan-400">
                          {asset.type.includes('GAS') ? 
                            `${asset.batch.batchVolume} MMcf` : 
                            `${formatNumber(asset.batch.batchVolume)} bbl`}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400">ETA: </span>
                        <span className="text-yellow-400">{Math.ceil((asset.batch.estimatedArrival - Date.now()) / (60 * 60 * 1000))}h</span>
                      </div>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Route: </span>
                      <span className="text-indigo-400">{asset.batch.origin}</span>
                      <span className="text-gray-400"> → </span>
                      <span className="text-pink-400">{asset.batch.destination}</span>
                    </div>
                  </div>
                )}

                {asset.economics && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Economics: </span>
                    <span className="text-green-400">Tariff: ${asset.economics.tariff.toFixed(2)}/{asset.type.includes('GAS') ? 'MCF' : 'bbl'}</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-blue-400">Revenue: {formatCurrency(asset.economics.revenue)}</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-purple-400">Margin: {asset.economics.margin.toFixed(1)}%</span>
                  </div>
                )}

                {asset.integrity && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Integrity: </span>
                    <span className="text-green-400">Score: {asset.integrity.integrityScore.toFixed(1)}/10</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-yellow-400">Anomalies: {asset.integrity.anomalies}</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-orange-400">Corrosion: {asset.integrity.corrosionRate.toFixed(2)} mils/yr</span>
                  </div>
                )}

                {/* Storage Terminal Specific Info */}
                {asset.specifications && asset.specifications.totalCapacity && (
                  <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                    <div>
                      <div className="text-gray-400">Inventory</div>
                      <div className="text-blue-400">{formatNumber(asset.operations.currentInventory)} bbl</div>
                      <div className="text-gray-500">Capacity: {formatNumber(asset.specifications.totalCapacity)} bbl</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Utilization</div>
                      <div className={getUtilizationColor(asset.operations.utilization)}>
                        {asset.operations.utilization.toFixed(1)}%
                      </div>
                      <div className="text-gray-500">Tanks: {asset.specifications.tankCount}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Net Change</div>
                      <div className={asset.operations.netChange < 0 ? 'text-red-400' : 'text-green-400'}>
                        {asset.operations.netChange > 0 ? '+' : ''}{formatNumber(asset.operations.netChange)} bbl
                      </div>
                      <div className="text-gray-500">Today</div>
                    </div>
                  </div>
                )}

                {asset.quality && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Quality: </span>
                    <span className="text-green-400">API: {asset.quality.apiGravity}</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-yellow-400">Sulfur: {asset.quality.sulfurContent}%</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-blue-400">Water: {asset.quality.waterContent}%</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-orange-400">Temp: {asset.quality.temperature}°F</span>
                  </div>
                )}

                {asset.alerts && asset.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {asset.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">🚨 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Downstream and Market Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Downstream Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏭 DOWNSTREAM OPERATIONS & REFINERIES
          </h3>
          <div className="space-y-3">
            {downstreamAssets.map((asset) => (
              <div key={asset.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(asset.status)}`}>
                      {asset.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {asset.type ? asset.type.replace(/_/g, ' ') : 'TERMINAL'}
                    </span>
                    {asset.alerts && asset.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                        {asset.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(asset.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{asset.name}</div>
                <div className="text-xs text-cyan-400 mb-3">{asset.location} | Operator: {asset.operator}</div>

                {/* Refinery Specific */}
                {asset.capacity && (
                  <>
                    <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                      <div>
                        <div className="text-gray-400">Throughput</div>
                        <div className="text-blue-400">{formatNumber(asset.capacity.throughput)} bbl/day</div>
                        <div className="text-gray-500">Capacity: {formatNumber(asset.capacity.crude)} bbl/day</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Utilization</div>
                        <div className={getUtilizationColor(asset.capacity.utilization)}>
                          {asset.capacity.utilization.toFixed(1)}%
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400">Crack Spread</div>
                        <div className="text-green-400">${asset.economics.crackSpread.toFixed(2)}/bbl</div>
                        <div className="text-gray-500">Margin: ${asset.economics.grossMargin.toFixed(2)}</div>
                      </div>
                    </div>

                    {asset.units && (
                      <div className="text-xs mb-3">
                        <div className="text-gray-400">Processing Units:</div>
                        <div className="grid grid-cols-3 gap-1">
                          {Object.entries(asset.units).map(([unit, data]) => (
                            <div key={unit} className="text-center">
                              <div className="text-purple-400">{unit.toUpperCase()}</div>
                              <div className={getUtilizationColor(data.utilization)}>{data.utilization.toFixed(1)}%</div>
                              <div className={`text-xs ${getStatusColor(data.status).split(' ')[0]}`}>
                                {data.status === 'OPERATIONAL' ? 'OK' : 'MAINT'}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {asset.products && (
                      <div className="text-xs mb-2">
                        <div className="text-gray-400">Product Output (bbl/day):</div>
                        <div className="grid grid-cols-2 gap-1">
                          {Object.entries(asset.products).map(([product, data]) => (
                            <div key={product}>
                              <span className="text-cyan-400">{product}: </span>
                              <span className="text-white">{formatNumber(data.production)}</span>
                              <span className="text-green-400"> (${data.margin.toFixed(2)})</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="text-xs mb-2">
                      <span className="text-gray-400">Economics: </span>
                      <span className="text-orange-400">OPEX: ${asset.economics.opex.toFixed(2)}/bbl</span>
                      <span className="text-gray-400"> | </span>
                      <span className="text-red-400">Energy: ${asset.economics.energyCosts.toFixed(2)}/bbl</span>
                      <span className="text-gray-400"> | </span>
                      <span className="text-yellow-400">Maint: ${asset.economics.maintenance.toFixed(2)}/bbl</span>
                    </div>

                    <div className="text-xs mb-2">
                      <span className="text-gray-400">Utilities: </span>
                      <span className="text-blue-400">Steam: {asset.operations.steamProduction}K lb/hr</span>
                      <span className="text-gray-400"> | </span>
                      <span className="text-purple-400">Power: {asset.operations.powerGeneration}MW</span>
                      <span className="text-gray-400"> | </span>
                      <span className="text-cyan-400">Water: {asset.operations.waterUsage}MGD</span>
                    </div>

                    <div className="text-xs mb-2">
                      <span className="text-gray-400">Safety: </span>
                      <span className="text-green-400">{asset.safety.daysWithoutIncident} days incident-free</span>
                      <span className="text-gray-400"> | </span>
                      <span className="text-orange-400">Alarms: {asset.safety.processAlarms}</span>
                      <span className="text-gray-400"> | </span>
                      <span className="text-red-400">Shutdowns: {asset.safety.emergencyShutdowns}</span>
                      <span className="text-gray-400"> | </span>
                      <span className="text-blue-400">HSE: {asset.safety.hseScore.toFixed(1)}</span>
                    </div>
                  </>
                )}

                {/* Terminal Specific */}
                {asset.specifications && asset.specifications.berths && (
                  <>
                    <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                      <div>
                        <div className="text-gray-400">Vessels in Port</div>
                        <div className="text-blue-400">{asset.operations.vesselsInPort}</div>
                        <div className="text-gray-500">Scheduled: {asset.operations.vesselsScheduled}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Inventory</div>
                        <div className="text-purple-400">{formatNumber(asset.operations.currentInventory)} bbl</div>
                        <div className="text-gray-500">Capacity: {formatNumber(asset.specifications.storageCapacity)} bbl</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Utilization</div>
                        <div className={getUtilizationColor(asset.operations.utilization)}>
                          {asset.operations.utilization.toFixed(1)}%
                        </div>
                        <div className="text-gray-500">Berths: {asset.specifications.berths}</div>
                      </div>
                    </div>

                    {asset.vessels && asset.vessels.length > 0 && (
                      <div className="text-xs mb-2">
                        <div className="text-gray-400">Active Vessels:</div>
                        {asset.vessels.slice(0, 3).map((vessel, index) => (
                          <div key={index} className="grid grid-cols-4 gap-1 mb-1">
                            <div className="text-white">{vessel.name}</div>
                            <div className="text-cyan-400">{vessel.type}</div>
                            <div className={getStatusColor(vessel.status).split(' ')[0]}>
                              {vessel.status}
                            </div>
                            <div className="text-purple-400">{vessel.berth}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="text-xs mb-2">
                      <span className="text-gray-400">Operations: </span>
                      <span className="text-green-400">Loading: {asset.operations.loadingOperations}</span>
                      <span className="text-gray-400"> | </span>
                      <span className="text-blue-400">Discharging: {asset.operations.dischargingOperations}</span>
                      <span className="text-gray-400"> | </span>
                      <span className="text-yellow-400">Rate: {formatNumber(asset.specifications.loadingRate)} bbl/hr</span>
                    </div>

                    <div className="text-xs mb-2">
                      <span className="text-gray-400">Revenue: </span>
                      <span className="text-green-400">Total: {formatCurrency(asset.economics.totalRevenue)}</span>
                      <span className="text-gray-400"> | </span>
                      <span className="text-blue-400">Berthing: {formatCurrency(asset.economics.berthingFees)}</span>
                      <span className="text-gray-400"> | </span>
                      <span className="text-purple-400">Handling: {formatCurrency(asset.economics.handlingFees)}</span>
                    </div>
                  </>
                )}

                {asset.alerts && asset.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {asset.alerts.map((alert, index) => (
                      <div key={index} className="text-red-400">🚨 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Market Data & Commodity Prices */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 COMMODITY MARKETS & ENERGY TRADING
          </h3>
          
          {/* Crude Oil Prices */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Crude Oil Benchmarks</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-gray-400 text-xs">WTI Crude</div>
                <div className="text-white font-bold text-xl">${marketData.commodityPrices.wti.price.toFixed(2)}</div>
                <div className={`text-sm ${getPriceChangeColor(marketData.commodityPrices.wti.change)}`}>
                  {marketData.commodityPrices.wti.change > 0 ? '+' : ''}{marketData.commodityPrices.wti.change.toFixed(2)}
                  ({marketData.commodityPrices.wti.percentage > 0 ? '+' : ''}{marketData.commodityPrices.wti.percentage.toFixed(1)}%)
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 text-xs">Brent Crude</div>
                <div className="text-white font-bold text-xl">${marketData.commodityPrices.brent.price.toFixed(2)}</div>
                <div className={`text-sm ${getPriceChangeColor(marketData.commodityPrices.brent.change)}`}>
                  {marketData.commodityPrices.brent.change > 0 ? '+' : ''}{marketData.commodityPrices.brent.change.toFixed(2)}
                  ({marketData.commodityPrices.brent.percentage > 0 ? '+' : ''}{marketData.commodityPrices.brent.percentage.toFixed(1)}%)
                </div>
              </div>
            </div>
            
            <div className="mt-3 text-xs">
              <span className="text-gray-400">Brent-WTI Spread: </span>
              <span className={getPriceChangeColor(marketData.basis.wtiBrent)}>
                ${Math.abs(marketData.basis.wtiBrent).toFixed(2)}
              </span>
              <span className="text-gray-400"> | Cushing Basis: </span>
              <span className={getPriceChangeColor(marketData.basis.cushing)}>
                ${marketData.basis.cushing > 0 ? '+' : ''}{marketData.basis.cushing.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Natural Gas & Products */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Natural Gas & Refined Products</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Natural Gas</div>
                <div className="text-blue-400 font-bold">${marketData.commodityPrices.naturalGas.price.toFixed(2)}/MMBtu</div>
                <div className={getPriceChangeColor(marketData.commodityPrices.naturalGas.change)}>
                  {marketData.commodityPrices.naturalGas.change > 0 ? '+' : ''}{marketData.commodityPrices.naturalGas.change.toFixed(2)}
                  ({marketData.commodityPrices.naturalGas.percentage > 0 ? '+' : ''}{marketData.commodityPrices.naturalGas.percentage.toFixed(1)}%)
                </div>
              </div>
              <div>
                <div className="text-gray-400">Gasoline (RBOB)</div>
                <div className="text-green-400 font-bold">${marketData.commodityPrices.gasoline.price.toFixed(2)}/gal</div>
                <div className={getPriceChangeColor(marketData.commodityPrices.gasoline.change)}>
                  {marketData.commodityPrices.gasoline.change > 0 ? '+' : ''}{marketData.commodityPrices.gasoline.change.toFixed(2)}
                  ({marketData.commodityPrices.gasoline.percentage > 0 ? '+' : ''}{marketData.commodityPrices.gasoline.percentage.toFixed(1)}%)
                </div>
              </div>
              <div>
                <div className="text-gray-400">Diesel (ULSD)</div>
                <div className="text-purple-400 font-bold">${marketData.commodityPrices.diesel.price.toFixed(2)}/gal</div>
                <div className={getPriceChangeColor(marketData.commodityPrices.diesel.change)}>
                  {marketData.commodityPrices.diesel.change > 0 ? '+' : ''}{marketData.commodityPrices.diesel.change.toFixed(2)}
                  ({marketData.commodityPrices.diesel.percentage > 0 ? '+' : ''}{marketData.commodityPrices.diesel.percentage.toFixed(1)}%)
                </div>
              </div>
              <div>
                <div className="text-gray-400">Heating Oil</div>
                <div className="text-orange-400 font-bold">${marketData.commodityPrices.heatingOil.price.toFixed(2)}/gal</div>
                <div className={getPriceChangeColor(marketData.commodityPrices.heatingOil.change)}>
                  {marketData.commodityPrices.heatingOil.change > 0 ? '+' : ''}{marketData.commodityPrices.heatingOil.change.toFixed(2)}
                  ({marketData.commodityPrices.heatingOil.percentage > 0 ? '+' : ''}{marketData.commodityPrices.heatingOil.percentage.toFixed(1)}%)
                </div>
              </div>
            </div>
          </div>

          {/* Crack Spreads */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Refinery Crack Spreads ($/barrel)</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center">
                <div className="text-gray-400">Gasoline 3:2:1</div>
                <div className="text-green-400 font-bold">${marketData.crackSpreads.gasoline.toFixed(2)}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">Diesel 3:2:1</div>
                <div className="text-blue-400 font-bold">${marketData.crackSpreads.diesel.toFixed(2)}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">Jet Fuel</div>
                <div className="text-purple-400 font-bold">${marketData.crackSpreads.jetFuel.toFixed(2)}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">Heating Oil</div>
                <div className="text-orange-400 font-bold">${marketData.crackSpreads.heatingOil.toFixed(2)}</div>
              </div>
            </div>
          </div>

          {/* Inventory Data */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">US Petroleum Inventories (Million Barrels)</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Crude Oil:</span>
                <span className="text-blue-400">{marketData.inventories.crude.toFixed(1)}MM bbl</span>
                <span className={getPriceChangeColor(marketData.inventories.change.crude)}>
                  ({marketData.inventories.change.crude > 0 ? '+' : ''}{marketData.inventories.change.crude.toFixed(1)})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Gasoline:</span>
                <span className="text-green-400">{marketData.inventories.gasoline.toFixed(1)}MM bbl</span>
                <span className={getPriceChangeColor(marketData.inventories.change.gasoline)}>
                  ({marketData.inventories.change.gasoline > 0 ? '+' : ''}{marketData.inventories.change.gasoline.toFixed(1)})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Distillates:</span>
                <span className="text-purple-400">{marketData.inventories.distillates.toFixed(1)}MM bbl</span>
                <span className={getPriceChangeColor(marketData.inventories.change.distillates)}>
                  ({marketData.inventories.change.distillates > 0 ? '+' : ''}{marketData.inventories.change.distillates.toFixed(1)})
                </span>
              </div>
            </div>
            
            <div className="mt-3 text-xs text-gray-400">
              Last updated: {formatTime(marketData.lastUpdate)}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📊 OIL & GAS OPERATIONS PERFORMANCE TRENDS (30 DAYS)
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={performanceTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12}/>
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
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="oilProduction" 
              stroke="#10B981" 
              strokeWidth={2}
              name="Oil Production (bbl/day)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="gasProduction" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Gas Production (MMcf/day)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="refineryUtilization" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Refinery Utilization (%)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="crackSpread" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Crack Spread ($/bbl)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Oil & Gas KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          ⚡ OIL & GAS OPERATIONS KPIs & INTEGRATED ENERGY METRICS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Total Oil Production</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(upstreamAssets.reduce((sum, a) => sum + a.production.oil, 0), 1)}
            </div>
            <div className="text-green-400 text-xs">bbl/day</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Gas Production</div>
            <div className="text-white font-bold text-lg">
              {upstreamAssets.reduce((sum, a) => sum + a.production.gas, 0).toFixed(1)}
            </div>
            <div className="text-blue-400 text-xs">MMcf/day</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Pipeline Utilization</div>
            <div className="text-white font-bold text-lg">
              {Math.floor(midstreamAssets.filter(a => a.operations).reduce((sum, a) => sum + a.operations.utilization, 0) / midstreamAssets.filter(a => a.operations).length)}%
            </div>
            <div className="text-purple-400 text-xs">avg capacity</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Refinery Throughput</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(downstreamAssets.filter(a => a.capacity).reduce((sum, a) => sum + a.capacity.throughput, 0), 1)}
            </div>
            <div className="text-cyan-400 text-xs">bbl/day</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">WTI Oil Price</div>
            <div className="text-white font-bold text-lg">
              ${marketData.commodityPrices.wti.price.toFixed(2)}
            </div>
            <div className={`text-xs ${getPriceChangeColor(marketData.commodityPrices.wti.change)}`}>
              {marketData.commodityPrices.wti.change > 0 ? '+' : ''}{marketData.commodityPrices.wti.change.toFixed(2)}
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Safety Performance</div>
            <div className="text-white font-bold text-lg">
              {Math.floor(upstreamAssets.reduce((sum, a) => sum + a.safety.daysWithoutIncident, 0) / upstreamAssets.length)}
            </div>
            <div className="text-yellow-400 text-xs">avg days incident-free</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OilGasOperations;