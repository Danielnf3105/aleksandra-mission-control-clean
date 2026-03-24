// Supply Chain & Logistics Operations Center - 2026 Fulfillment Intelligence
// Based on FedEx/UPS tracking, Amazon fulfillment, modern supply chain visibility
import { useState, useEffect } from 'react';
import { 
  Package, Truck, MapPin, Clock, CheckCircle, AlertTriangle, Zap,
  BarChart3, TrendingUp, TrendingDown, Activity, RefreshCw, Search,
  ArrowRight, ArrowLeft, Plus, Minus, Play, Pause, StopCircle,
  Eye, Settings, Info, Target, Users, Monitor, Server, Network,
  Database, HardDrive, Cpu, MemoryStick, Layers, FileCode, Globe,
  Radar, Navigation, Car, Plane, Ship, Train, Warehouse, Box,
  ShoppingCart, CreditCard, DollarSign, Calendar, Flag, Route,
  Building, Factory, Store, Home, Phone, Mail, UserCheck, Wifi,
  Signal, Battery, Download, Upload, Timer, Gauge, Building2
} from 'lucide-react';

export default function SupplyChainLogisticsCenter() {
  const [logisticsData, setLogisticsData] = useState({
    currentTime: new Date().toISOString(),
    globalShipments: 2847293,
    activeFulfillmentCenters: 847,
    dailyPackagesProcessed: 18642357,
    onTimeDeliveryRate: 96.7,
    averageDeliveryTime: 2.3, // days
    networkEfficiency: 94.8,
    fulfillmentCenters: [
      {
        name: 'Amazon BWI2',
        location: 'Baltimore, MD',
        type: 'Fulfillment',
        packages: 45789,
        capacity: 65000,
        efficiency: 97.2,
        workers: 2450,
        roboticSystems: 1247,
        avgProcessTime: 1.7, // hours
        onTimeRate: 98.3,
        status: 'OPTIMAL',
        temperature: 22.4,
        energyUsage: 85.7 // percentage
      },
      {
        name: 'FedEx Memphis',
        location: 'Memphis, TN',
        type: 'Sort Facility',
        packages: 123567,
        capacity: 150000,
        efficiency: 95.8,
        workers: 3200,
        roboticSystems: 2100,
        avgProcessTime: 0.8,
        onTimeRate: 97.1,
        status: 'OPTIMAL',
        temperature: 21.8,
        energyUsage: 78.4
      },
      {
        name: 'UPS Worldport',
        location: 'Louisville, KY',
        type: 'Air Hub',
        packages: 178234,
        capacity: 200000,
        efficiency: 93.4,
        workers: 4100,
        roboticSystems: 1867,
        avgProcessTime: 1.2,
        onTimeRate: 96.7,
        status: 'MAINTENANCE',
        temperature: 23.1,
        energyUsage: 82.3
      },
      {
        name: 'DHL Cincinnati',
        location: 'Cincinnati, OH',
        type: 'Air Gateway',
        packages: 67432,
        capacity: 80000,
        efficiency: 94.7,
        workers: 1850,
        roboticSystems: 945,
        avgProcessTime: 1.5,
        onTimeRate: 95.8,
        status: 'OPTIMAL',
        temperature: 22.7,
        energyUsage: 79.6
      }
    ],
    carrierPerformance: [
      {
        carrier: 'FedEx',
        shipments: 834567,
        onTimeRate: 97.8,
        avgDeliveryDays: 2.1,
        customerSat: 92.4,
        costPerShipment: 12.45,
        trackingAccuracy: 99.2,
        claims: 234,
        status: 'EXCELLENT'
      },
      {
        carrier: 'UPS',
        shipments: 756234,
        onTimeRate: 96.3,
        avgDeliveryDays: 2.4,
        customerSat: 89.7,
        costPerShipment: 11.89,
        trackingAccuracy: 98.8,
        claims: 312,
        status: 'GOOD'
      },
      {
        carrier: 'USPS',
        shipments: 623489,
        onTimeRate: 94.1,
        avgDeliveryDays: 3.2,
        customerSat: 85.3,
        costPerShipment: 8.67,
        trackingAccuracy: 96.4,
        claims: 456,
        status: 'FAIR'
      },
      {
        carrier: 'DHL',
        shipments: 345678,
        onTimeRate: 98.2,
        avgDeliveryDays: 1.8,
        customerSat: 94.1,
        costPerShipment: 18.23,
        trackingAccuracy: 99.1,
        claims: 178,
        status: 'EXCELLENT'
      },
      {
        carrier: 'Amazon Logistics',
        shipments: 1234567,
        onTimeRate: 95.7,
        avgDeliveryDays: 1.9,
        customerSat: 88.9,
        costPerShipment: 9.34,
        trackingAccuracy: 97.6,
        claims: 567,
        status: 'GOOD'
      }
    ],
    realtimeShipments: [
      {
        id: 'FX234567890',
        carrier: 'FedEx',
        origin: 'Los Angeles, CA',
        destination: 'New York, NY',
        status: 'IN_TRANSIT',
        progress: 73,
        estimatedDelivery: '2026-03-21T14:30:00Z',
        currentLocation: 'Memphis, TN Hub',
        priority: 'OVERNIGHT',
        value: '$2,450.00',
        weight: '15.4 lbs',
        lastUpdate: '2m ago'
      },
      {
        id: 'UP987654321',
        carrier: 'UPS',
        origin: 'Chicago, IL',
        destination: 'Miami, FL',
        status: 'OUT_FOR_DELIVERY',
        progress: 95,
        estimatedDelivery: '2026-03-20T16:00:00Z',
        currentLocation: 'Miami Local Facility',
        priority: 'GROUND',
        value: '$890.50',
        weight: '8.2 lbs',
        lastUpdate: '15m ago'
      },
      {
        id: 'AMZ123456789',
        carrier: 'Amazon Logistics',
        origin: 'Seattle, WA',
        destination: 'Portland, OR',
        status: 'DELIVERED',
        progress: 100,
        estimatedDelivery: '2026-03-20T11:45:00Z',
        currentLocation: 'Delivered to Doorstep',
        priority: 'PRIME',
        value: '$124.99',
        weight: '3.1 lbs',
        lastUpdate: '2h ago'
      },
      {
        id: 'DH456789012',
        carrier: 'DHL',
        origin: 'Frankfurt, Germany',
        destination: 'Boston, MA',
        status: 'CUSTOMS',
        progress: 85,
        estimatedDelivery: '2026-03-21T09:00:00Z',
        currentLocation: 'Boston Customs',
        priority: 'EXPRESS',
        value: '$3,200.00',
        weight: '22.7 lbs',
        lastUpdate: '45m ago'
      }
    ],
    inventoryMetrics: [
      {
        category: 'Electronics',
        stockLevel: 87.3,
        turnoverRate: 12.4, // per year
        reorderPoint: 78,
        leadTime: 14, // days
        value: '$45.6M',
        trend: 'stable',
        forecastAccuracy: 94.2,
        stockouts: 3
      },
      {
        category: 'Clothing & Accessories',
        stockLevel: 62.1,
        turnoverRate: 8.7,
        reorderPoint: 45,
        leadTime: 21,
        value: '$28.9M',
        trend: 'declining',
        forecastAccuracy: 89.6,
        stockouts: 12
      },
      {
        category: 'Home & Garden',
        stockLevel: 91.8,
        turnoverRate: 6.3,
        reorderPoint: 85,
        leadTime: 18,
        value: '$33.2M',
        trend: 'improving',
        forecastAccuracy: 92.1,
        stockouts: 1
      },
      {
        category: 'Health & Beauty',
        stockLevel: 74.5,
        turnoverRate: 15.2,
        reorderPoint: 65,
        leadTime: 10,
        value: '$19.7M',
        trend: 'stable',
        forecastAccuracy: 96.8,
        stockouts: 0
      }
    ],
    routeOptimization: [
      {
        route: 'Route A-47',
        driver: 'John M.',
        vehicle: 'Truck-4567',
        stops: 23,
        completedStops: 18,
        estimatedCompletion: '17:30',
        efficiency: 96.7,
        fuelUsage: 78.4, // %
        packages: 89,
        totalDistance: 145.7, // miles
        status: 'ON_TIME'
      },
      {
        route: 'Route B-12',
        driver: 'Sarah L.',
        vehicle: 'Van-8923',
        stops: 31,
        completedStops: 29,
        estimatedCompletion: '16:15',
        efficiency: 94.3,
        fuelUsage: 82.1,
        packages: 67,
        totalDistance: 98.3,
        status: 'AHEAD'
      },
      {
        route: 'Route C-88',
        driver: 'Mike R.',
        vehicle: 'Truck-2341',
        stops: 19,
        completedStops: 12,
        estimatedCompletion: '18:45',
        efficiency: 89.2,
        fuelUsage: 85.7,
        packages: 134,
        totalDistance: 187.9,
        status: 'DELAYED'
      }
    ],
    supplyChainAlerts: [
      {
        id: 'alert-sc001',
        timestamp: '15:18',
        priority: 'HIGH',
        type: 'INVENTORY',
        location: 'Los Angeles Distribution Center',
        message: 'Electronics inventory below reorder point',
        category: 'Smartphones & Tablets',
        currentStock: 127,
        reorderPoint: 150,
        leadTime: '14 days',
        impact: 'Potential stockout risk',
        action: 'Purchase order initiated',
        status: 'RESPONDING'
      },
      {
        id: 'alert-sc002',
        timestamp: '15:12',
        priority: 'MEDIUM',
        type: 'DELIVERY',
        location: 'Route C-88',
        message: 'Delivery route experiencing delays',
        cause: 'Traffic congestion on I-95',
        affectedPackages: 134,
        expectedDelay: '45 minutes',
        customerNotifications: 67,
        action: 'Rerouting initiated',
        status: 'MITIGATING'
      },
      {
        id: 'alert-sc003',
        timestamp: '15:05',
        priority: 'LOW',
        type: 'SYSTEM',
        location: 'Memphis Sort Facility',
        message: 'Robotic sorting system efficiency decrease',
        currentEfficiency: 95.8,
        normalEfficiency: 97.2,
        affectedThroughput: '2.3%',
        maintenanceScheduled: 'Tonight 11:00 PM',
        action: 'Monitoring performance',
        status: 'SCHEDULED'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLogisticsData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        globalShipments: prev.globalShipments + Math.floor(Math.random() * 100),
        dailyPackagesProcessed: prev.dailyPackagesProcessed + Math.floor(Math.random() * 50),
        onTimeDeliveryRate: Math.max(94, Math.min(98, prev.onTimeDeliveryRate + (Math.random() - 0.5) * 0.2)),
        networkEfficiency: Math.max(90, Math.min(98, prev.networkEfficiency + (Math.random() - 0.5) * 0.3)),
        fulfillmentCenters: prev.fulfillmentCenters?.map(center => ({
          ...center,
          packages: Math.max(1000, Math.min(center?.capacity || 50000, (center?.packages || 30000) + Math.floor((Math.random() - 0.5) * 500))),
          efficiency: Math.max(85, Math.min(99, (center?.efficiency || 95) + (Math.random() - 0.5) * 0.5)),
          avgProcessTime: Math.max(0.5, Math.min(3, (center?.avgProcessTime || 1.5) + (Math.random() - 0.5) * 0.1))
        })) || prev.fulfillmentCenters,
        realtimeShipments: prev.realtimeShipments?.map(shipment => ({
          ...shipment,
          progress: shipment?.status === 'DELIVERED' ? 100 : Math.min(99, Math.max(0, (shipment?.progress || 50) + Math.floor(Math.random() * 3)))
        })) || prev.realtimeShipments
      }));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPTIMAL': case 'EXCELLENT': case 'DELIVERED': case 'ON_TIME': case 'AHEAD': return 'text-green-400';
      case 'GOOD': case 'IN_TRANSIT': case 'OUT_FOR_DELIVERY': case 'RESPONDING': case 'MITIGATING': return 'text-blue-400';
      case 'MAINTENANCE': case 'FAIR': case 'DELAYED': case 'CUSTOMS': case 'SCHEDULED': return 'text-yellow-400';
      case 'CRITICAL': case 'FAILED': case 'LOST': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'OPTIMAL': case 'EXCELLENT': case 'DELIVERED': case 'ON_TIME': case 'AHEAD': return 'bg-green-400/20';
      case 'GOOD': case 'IN_TRANSIT': case 'OUT_FOR_DELIVERY': case 'RESPONDING': case 'MITIGATING': return 'bg-blue-400/20';
      case 'MAINTENANCE': case 'FAIR': case 'DELAYED': case 'CUSTOMS': case 'SCHEDULED': return 'bg-yellow-400/20';
      case 'CRITICAL': case 'FAILED': case 'LOST': return 'bg-red-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'declining': return <TrendingDown className="w-4 h-4 text-red-400" />;
      case 'stable': return <Minus className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getCarrierIcon = (carrier) => {
    const iconClass = "w-4 h-4";
    switch (carrier) {
      case 'FedEx': return <Plane className={`${iconClass} text-purple-400`} />;
      case 'UPS': return <Truck className={`${iconClass} text-brown-400`} />;
      case 'USPS': return <Package className={`${iconClass} text-blue-400`} />;
      case 'DHL': return <Plane className={`${iconClass} text-yellow-400`} />;
      case 'Amazon Logistics': return <Box className={`${iconClass} text-orange-400`} />;
      default: return <Package className={`${iconClass} text-gray-400`} />;
    }
  };

  const getShipmentStatusIcon = (status) => {
    const iconClass = "w-4 h-4";
    switch (status) {
      case 'DELIVERED': return <CheckCircle className={`${iconClass} text-green-400`} />;
      case 'OUT_FOR_DELIVERY': return <Truck className={`${iconClass} text-blue-400`} />;
      case 'IN_TRANSIT': return <Navigation className={`${iconClass} text-purple-400`} />;
      case 'CUSTOMS': return <Flag className={`${iconClass} text-yellow-400`} />;
      default: return <Package className={`${iconClass} text-gray-400`} />;
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatCurrency = (num) => {
    if (num >= 1000000) return '$' + (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return '$' + (num / 1000).toFixed(1) + 'K';
    return '$' + num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Supply Chain Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Warehouse className="w-8 h-8 text-blue-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Supply Chain & Logistics Operations Center</h2>
              <div className="text-sm text-gray-400">FedEx • UPS • Amazon • DHL • Real-Time Fulfillment Intelligence</div>
            </div>
            <div className="flex items-center space-x-2">
              <Wifi className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm font-semibold">TRACKING ACTIVE</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Network Efficiency</div>
            <div className={`text-2xl font-mono font-bold ${getStatusColor('OPTIMAL')}`}>
              {(logisticsData.networkEfficiency || 94.8).toFixed(1)}%
            </div>
            <div className="text-xs text-emerald-400">
              {formatNumber(logisticsData.globalShipments || 2847293)} shipments active
            </div>
          </div>
        </div>
        
        {/* Global Logistics Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Daily Packages</span>
              <Package className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {formatNumber(logisticsData.dailyPackagesProcessed || 18642357)}<span className="text-sm text-gray-400 ml-1">processed</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-blue-400 transition-all duration-300"
                style={{ width: `${Math.min(100, ((logisticsData.dailyPackagesProcessed || 18642357) / 20000000) * 100)}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">24h volume</div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">On-Time Rate</span>
              <CheckCircle className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {(logisticsData.onTimeDeliveryRate || 96.7).toFixed(1)}<span className="text-sm text-gray-400 ml-1">%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-green-400 transition-all duration-300"
                style={{ width: `${Math.min(100, logisticsData.onTimeDeliveryRate || 96.7)}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">delivery performance</div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Avg Delivery Time</span>
              <Clock className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {(logisticsData.averageDeliveryTime || 2.3).toFixed(1)}<span className="text-sm text-gray-400 ml-1">days</span>
            </div>
            <div className="text-xs text-purple-400 mt-1">
              {logisticsData.activeFulfillmentCenters || 847} facilities active
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Carriers Active</span>
              <Truck className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {logisticsData.carrierPerformance?.length || 5}<span className="text-sm text-gray-400 ml-1">providers</span>
            </div>
            <div className="text-xs text-cyan-400 mt-1">
              {logisticsData.carrierPerformance?.filter(c => c?.status === 'EXCELLENT').length || 2} excellent rated
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fulfillment Centers */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Building2 className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Fulfillment Centers</h3>
            <div className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs font-semibold rounded">
              REAL-TIME
            </div>
          </div>
          
          <div className="space-y-4">
            {logisticsData.fulfillmentCenters?.map((center, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Warehouse className="w-5 h-5 text-blue-400" />
                    <div>
                      <h4 className="text-white font-medium">{center?.name || 'Unknown Facility'}</h4>
                      <div className="text-xs text-gray-400">{center?.location || 'Unknown Location'} • {center?.type || 'Facility'}</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(center?.status)} ${getStatusBg(center?.status)}`}>
                      {center?.status || 'UNKNOWN'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-mono text-white">
                      {(center?.efficiency || 0).toFixed(1)}%
                    </div>
                    <div className="text-xs text-gray-400">efficiency</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-3">
                  <div>
                    <span className="text-xs text-gray-400">Packages:</span>
                    <div className="text-white font-mono">{formatNumber(center?.packages || 0)}</div>
                    <div className="text-xs text-blue-400">/ {formatNumber(center?.capacity || 0)} capacity</div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">Workers:</span>
                    <div className="text-white font-mono">{formatNumber(center?.workers || 0)}</div>
                    <div className="text-xs text-green-400">active staff</div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">Robots:</span>
                    <div className="text-white font-mono">{formatNumber(center?.roboticSystems || 0)}</div>
                    <div className="text-xs text-purple-400">automated</div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">Process Time:</span>
                    <div className="text-white font-mono">{(center?.avgProcessTime || 0).toFixed(1)}h</div>
                    <div className="text-xs text-cyan-400">average</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-full bg-slate-700 rounded-full h-2 mr-4">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        center?.status === 'OPTIMAL' ? 'bg-green-400' : 
                        center?.status === 'MAINTENANCE' ? 'bg-yellow-400' : 'bg-blue-400'
                      }`}
                      style={{ width: `${Math.min(100, ((center?.packages || 0) / (center?.capacity || 1)) * 100)}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 whitespace-nowrap">
                    On-Time: {(center?.onTimeRate || 0).toFixed(1)}%
                  </div>
                </div>
              </div>
            )) || <div className="text-gray-400">No fulfillment centers data available</div>}
          </div>
        </div>

        {/* Carrier Performance */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Truck className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Carrier Performance</h3>
          </div>
          
          <div className="space-y-3">
            {logisticsData.carrierPerformance?.map((carrier, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getCarrierIcon(carrier?.carrier)}
                    <span className="text-white font-medium text-sm">{carrier?.carrier || 'Unknown'}</span>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(carrier?.status)} ${getStatusBg(carrier?.status)}`}>
                    {carrier?.status || 'UNKNOWN'}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Shipments:</span>
                    <span className="text-blue-400 ml-1">{formatNumber(carrier?.shipments || 0)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">On-Time:</span>
                    <span className="text-green-400 ml-1">{(carrier?.onTimeRate || 0).toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Avg Days:</span>
                    <span className="text-purple-400 ml-1">{(carrier?.avgDeliveryDays || 0).toFixed(1)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Cost:</span>
                    <span className="text-yellow-400 ml-1">${(carrier?.costPerShipment || 0).toFixed(2)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Satisfaction:</span>
                    <span className="text-cyan-400 ml-1">{(carrier?.customerSat || 0).toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Claims:</span>
                    <span className="text-red-400 ml-1">{carrier?.claims || 0}</span>
                  </div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      carrier?.status === 'EXCELLENT' ? 'bg-green-400' :
                      carrier?.status === 'GOOD' ? 'bg-blue-400' : 'bg-yellow-400'
                    }`}
                    style={{ width: `${Math.min(100, carrier?.onTimeRate || 0)}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-gray-400">Tracking: {(carrier?.trackingAccuracy || 0).toFixed(1)}%</span>
                </div>
              </div>
            )) || <div className="text-gray-400">No carrier data available</div>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Real-Time Shipments */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Navigation className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Real-Time Shipments</h3>
          </div>
          
          <div className="space-y-3">
            {logisticsData.realtimeShipments?.map((shipment, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getCarrierIcon(shipment?.carrier)}
                    <span className="text-white font-mono text-sm">{shipment?.id || 'Unknown ID'}</span>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(shipment?.status)} ${getStatusBg(shipment?.status)}`}>
                    {shipment?.status?.replace('_', ' ') || 'UNKNOWN'}
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">
                  {shipment?.origin || 'Unknown'} → {shipment?.destination || 'Unknown'}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getShipmentStatusIcon(shipment?.status)}
                    <span className="text-sm text-gray-300">{shipment?.currentLocation || 'Location Unknown'}</span>
                  </div>
                  <div className="text-xs text-blue-400">{shipment?.lastUpdate || 'No Update'}</div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      shipment?.status === 'DELIVERED' ? 'bg-green-400' :
                      shipment?.status === 'OUT_FOR_DELIVERY' ? 'bg-blue-400' :
                      shipment?.status === 'IN_TRANSIT' ? 'bg-purple-400' : 'bg-yellow-400'
                    }`}
                    style={{ width: `${Math.min(100, shipment?.progress || 0)}%` }}
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Priority:</span>
                    <span className="text-orange-400 ml-1">{shipment?.priority || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Value:</span>
                    <span className="text-green-400 ml-1">{shipment?.value || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Weight:</span>
                    <span className="text-cyan-400 ml-1">{shipment?.weight || 'N/A'}</span>
                  </div>
                </div>
              </div>
            )) || <div className="text-gray-400">No shipment data available</div>}
          </div>
        </div>

        {/* Supply Chain Alerts */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Supply Chain Alerts</h3>
          </div>
          
          <div className="space-y-3">
            {logisticsData.supplyChainAlerts?.map((alert, index) => (
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

          {/* Route Optimization Summary */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30 mt-4">
            <div className="text-sm text-gray-400 mb-2">Active Delivery Routes</div>
            <div className="space-y-2">
              {logisticsData.routeOptimization?.map((route, index) => (
                <div key={index} className="flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-2">
                    <Car className="w-3 h-3 text-blue-400" />
                    <span className="text-gray-300">{route?.route || 'Unknown'}</span>
                    <span className="text-gray-400">({route?.completedStops || 0}/{route?.stops || 0})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400">{(route?.efficiency || 0).toFixed(1)}%</span>
                    <div className={`px-1 py-0.5 text-xs rounded ${getStatusColor(route?.status)} ${getStatusBg(route?.status)}`}>
                      {route?.status?.replace('_', ' ') || 'UNKNOWN'}
                    </div>
                  </div>
                </div>
              )) || <div className="text-gray-400">No route data available</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}