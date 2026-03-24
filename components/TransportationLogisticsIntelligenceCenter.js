// Transportation & Logistics Intelligence Center - Fleet Management, Shipping, Delivery & Supply Chain Operations
import { useState, useEffect } from 'react';
import { Truck, Package, MapPin, TrendingUp, TrendingDown, Clock, Fuel, Navigation, AlertTriangle, CheckCircle, BarChart3, PieChart } from 'lucide-react';

export default function TransportationLogisticsIntelligenceCenter() {
  const [logisticsData, setLogisticsData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    logisticsOverview: {
      overallEfficiency: 91.2,
      onTimeDeliveryRate: 94.7,
      fleetUtilization: 87.9,
      shippingCosts: 234567,
      deliveryVolume: 12847, // packages today
      averageDeliveryTime: 2.3, // days
      customerSatisfaction: 93.4,
      fuelEfficiency: 8.9, // km per liter
      carbonEmissions: 145.7, // tons CO2 weekly
      warehouseUtilization: 78.9,
      inventoryAccuracy: 97.2,
      orderFulfillmentRate: 96.8,
      shippingDamageRate: 0.7, // percentage
      costPerShipment: 18.45
    },
    fleetManagement: {
      totalVehicles: 156,
      activeVehicles: 134,
      maintenanceVehicles: 12,
      idleVehicles: 10,
      fleetTypes: [
        { type: 'Delivery Vans', count: 67, active: 59, efficiency: 91.2, fuelConsumption: 9.1, mileage: 234567 },
        { type: 'Cargo Trucks', count: 45, active: 39, efficiency: 87.4, fuelConsumption: 15.6, mileage: 456789 },
        { type: 'Refrigerated Trucks', count: 23, active: 21, efficiency: 89.7, fuelConsumption: 18.2, mileage: 189456 },
        { type: 'Pickup Trucks', count: 12, active: 10, efficiency: 94.2, fuelConsumption: 11.3, mileage: 123456 },
        { type: 'Box Trucks', count: 9, active: 5, efficiency: 86.8, fuelConsumption: 13.7, mileage: 78945 }
      ],
      driverManagement: {
        totalDrivers: 189,
        activeDrivers: 167,
        driverUtilization: 88.4,
        driverSatisfaction: 87.9,
        safetyScore: 94.7,
        trainingCompliance: 92.4,
        violations: 3,
        accidents: 2,
        avgHoursPerWeek: 42.7,
        overtimeHours: 234
      },
      maintenanceSchedule: {
        scheduledMaintenance: 23,
        overdueMaintenance: 4,
        maintenanceCosts: 67890,
        avgMaintenanceCost: 2952,
        vehicleDowntime: 5.3, // percentage
        maintenanceEfficiency: 91.6
      }
    },
    shippingOperations: {
      dailyShipments: 12847,
      targetShipments: 13500,
      shippingZones: [
        { zone: 'Local (0-50km)', shipments: 4567, avgTime: 4.2, cost: 8.50, onTime: 97.8 },
        { zone: 'Regional (50-200km)', shipments: 3456, avgTime: 12.6, cost: 15.80, onTime: 94.2 },
        { zone: 'National (200-500km)', shipments: 2847, avgTime: 36.4, cost: 28.90, onTime: 91.7 },
        { zone: 'Long Distance (500km+)', shipments: 1977, avgTime: 72.8, cost: 45.60, onTime: 89.3 }
      ],
      carrierPerformance: [
        { carrier: 'Express Logistics', shipments: 3456, onTime: 96.4, cost: 22.50, rating: 4.7 },
        { carrier: 'Fast Track Delivery', shipments: 2847, onTime: 94.2, cost: 19.80, rating: 4.5 },
        { carrier: 'Swift Transport', shipments: 2134, onTime: 91.8, cost: 17.90, rating: 4.3 },
        { carrier: 'Prime Shipping', shipments: 1789, onTime: 93.7, cost: 24.10, rating: 4.4 },
        { carrier: 'Elite Courier', shipments: 1456, onTime: 97.1, cost: 26.80, rating: 4.8 },
        { carrier: 'Regional Express', shipments: 1165, onTime: 89.4, cost: 16.70, rating: 4.1 }
      ],
      shippingMethods: [
        { method: 'Same Day', volume: 1234, percentage: 9.6, cost: 35.60, satisfaction: 96.8 },
        { method: 'Next Day', volume: 4567, percentage: 35.5, cost: 18.90, satisfaction: 94.2 },
        { method: 'Standard (2-3 days)', volume: 5689, percentage: 44.3, cost: 12.40, satisfaction: 92.7 },
        { method: 'Economy (5-7 days)', volume: 1357, percentage: 10.6, cost: 8.20, satisfaction: 87.9 }
      ]
    },
    warehouseOperations: {
      warehouseCount: 12,
      totalCapacity: 456789, // cubic meters
      currentUtilization: 359834, // cubic meters
      utilizationPercentage: 78.9,
      inventoryValue: 12456789,
      pickingAccuracy: 98.7,
      packingEfficiency: 91.4,
      receivingEfficiency: 94.2,
      shippingEfficiency: 92.8,
      warehouses: [
        { warehouse: 'Main Distribution Center', location: 'Lisbon', capacity: 123456, utilization: 89.7, efficiency: 94.2 },
        { warehouse: 'Northern Hub', location: 'Porto', capacity: 89456, utilization: 76.4, efficiency: 91.8 },
        { warehouse: 'Southern Depot', location: 'Faro', capacity: 67890, utilization: 82.3, efficiency: 89.7 },
        { warehouse: 'Central Warehouse', location: 'Coimbra', capacity: 45678, utilization: 71.2, efficiency: 92.4 },
        { warehouse: 'Eastern Facility', location: 'Évora', capacity: 34567, utilization: 68.9, efficiency: 88.6 },
        { warehouse: 'Coastal Terminal', location: 'Setúbal', capacity: 28945, utilization: 84.7, efficiency: 93.1 }
      ],
      warehouseMetrics: {
        orderProcessingTime: 2.7, // hours
        inventoryTurns: 8.4,
        cycleTime: 15.6, // minutes
        laborProductivity: 89.7,
        spaceUtilization: 78.9,
        equipmentUptime: 94.2
      }
    },
    routeOptimization: {
      routesOptimized: 234,
      fuelSavings: 12.7, // percentage
      timeSavings: 18.9, // percentage
      distanceReduction: 15.4, // percentage
      optimizationScore: 89.7,
      routingAlgorithm: 'AI-Enhanced Dynamic',
      trafficIntegration: 94.2, // percentage accuracy
      realTimeUpdates: 'Active',
      routeCompliance: 91.8, // drivers following optimized routes
      routeMetrics: {
        avgStopsPerRoute: 12.4,
        avgRouteDistance: 87.9, // km
        avgRouteTime: 6.7, // hours
        routeEfficiency: 92.4,
        customerDensity: 2.8, // customers per km
        fuelConsumptionPerRoute: 9.8 // liters
      }
    },
    deliveryTracking: {
      trackingAccuracy: 98.9,
      realTimeVisibility: 96.7,
      customerNotifications: 94.2, // percentage receiving notifications
      deliveryUpdates: 12847, // sent today
      trackingEvents: 89456, // total events today
      proofOfDelivery: 97.8, // percentage with POD
      signatureCapture: 94.2,
      photoConfirmation: 89.7,
      deliveryStatus: [
        { status: 'In Transit', packages: 4567, percentage: 35.5 },
        { status: 'Out for Delivery', packages: 2847, percentage: 22.2 },
        { status: 'Delivered', packages: 4231, percentage: 32.9 },
        { status: 'Failed Delivery', packages: 789, percentage: 6.1 },
        { status: 'Pending Pickup', packages: 413, percentage: 3.3 }
      ],
      deliveryTimeSlots: [
        { slot: '8:00-10:00', bookings: 1567, success: 94.7, preference: 18.9 },
        { slot: '10:00-12:00', bookings: 2134, success: 96.2, preference: 25.7 },
        { slot: '12:00-14:00', bookings: 1789, success: 92.4, preference: 21.6 },
        { slot: '14:00-16:00', bookings: 1456, success: 91.8, preference: 17.5 },
        { slot: '16:00-18:00', bookings: 2456, success: 89.3, preference: 29.6 },
        { slot: '18:00-20:00', bookings: 1234, success: 87.9, preference: 14.9 }
      ]
    },
    logisticsAlerts: [
      {
        type: 'CRITICAL',
        category: 'Fleet Management',
        message: 'Vehicle breakdown on Route 7 - 23 packages affected, estimated delay 3 hours',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'Dispatch Team',
        timestamp: '01:50',
        recommendations: ['Deploy backup vehicle', 'Reroute affected packages', 'Notify customers']
      },
      {
        type: 'WARNING',
        category: 'Warehouse Operations',
        message: 'Main Distribution Center approaching 90% capacity - may impact processing speed',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Warehouse Management',
        timestamp: '01:45',
        recommendations: ['Expedite outbound shipments', 'Activate overflow facility', 'Review inventory levels']
      },
      {
        type: 'SUCCESS',
        category: 'Delivery Performance',
        message: 'On-time delivery rate achieved 94.7% - exceeding 94% target for 5th consecutive day',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'Operations Team',
        timestamp: '01:40',
        recommendations: ['Document success factors', 'Share best practices', 'Maintain performance']
      },
      {
        type: 'INFO',
        category: 'Route Optimization',
        message: 'AI routing algorithm generated 18.9% time savings and 12.7% fuel reduction today',
        impact: 'LOW',
        actionRequired: false,
        assignedTo: 'Logistics Analytics Team',
        timestamp: '01:35',
        recommendations: ['Monitor optimization performance', 'Gather driver feedback', 'Refine algorithms']
      }
    ],
    sustainabilityMetrics: {
      carbonFootprint: 145.7, // tons CO2 weekly
      fuelConsumption: 23456, // liters weekly
      electricVehicles: 12, // count
      hybridVehicles: 23,
      conventionalVehicles: 121,
      averageFuelEfficiency: 8.9, // km/L
      emissionReduction: 15.4, // percentage vs baseline
      greenRoutes: 67, // percentage of routes optimized for emissions
      sustainabilityScore: 78.9,
      renewableEnergy: 34.7, // percentage of warehouse energy
      recyclingRate: 89.7, // packaging materials
      sustainabilityInitiatives: [
        { initiative: 'Electric Vehicle Rollout', progress: 34.7, target: 50.0, timeline: '2024' },
        { initiative: 'Route Optimization for Emissions', progress: 67.0, target: 80.0, timeline: '2024' },
        { initiative: 'Warehouse Solar Installation', progress: 45.8, target: 60.0, timeline: '2025' },
        { initiative: 'Packaging Reduction Program', progress: 78.9, target: 85.0, timeline: '2024' }
      ]
    },
    customerSatisfaction: {
      overallSatisfaction: 93.4,
      deliveryRating: 94.2,
      communicationRating: 92.7,
      packagingRating: 89.4,
      speedRating: 95.1,
      reliabilityRating: 93.8,
      customerComplaints: 67,
      complaintResolution: 91.8, // percentage resolved
      avgResolutionTime: 4.2, // hours
      nps: 72.4, // Net Promoter Score
      customerRetention: 94.7,
      satisfactionByRegion: [
        { region: 'Lisbon Metro', rating: 95.2, volume: 4567, complaints: 12 },
        { region: 'Porto Metro', rating: 93.7, volume: 3456, complaints: 18 },
        { region: 'Central Portugal', rating: 91.4, volume: 2134, complaints: 15 },
        { region: 'Southern Portugal', rating: 92.8, volume: 1789, complaints: 11 },
        { region: 'Northern Portugal', rating: 90.6, volume: 901, complaints: 11 }
      ]
    },
    costAnalysis: {
      totalLogisticsCosts: 2456789,
      costPerDelivery: 18.45,
      fuelCosts: 567890,
      laborCosts: 1234567,
      vehicleCosts: 456789,
      warehouseCosts: 345678,
      insuranceCosts: 123456,
      maintenanceCosts: 89456,
      costBreakdown: [
        { category: 'Labor', amount: 1234567, percentage: 50.3, trend: 'stable' },
        { category: 'Fuel', amount: 567890, percentage: 23.1, trend: 'increasing' },
        { category: 'Vehicle Operations', amount: 456789, percentage: 18.6, trend: 'stable' },
        { category: 'Warehouse Operations', amount: 345678, percentage: 14.1, trend: 'decreasing' },
        { category: 'Insurance', amount: 123456, percentage: 5.0, trend: 'stable' },
        { category: 'Maintenance', amount: 89456, percentage: 3.6, trend: 'decreasing' }
      ],
      costOptimization: {
        potentialSavings: 123456,
        optimizationOpportunities: 15,
        implementedSavings: 89456,
        roi: 234.7 // percentage
      }
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLogisticsData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        logisticsOverview: {
          ...prev.logisticsOverview,
          overallEfficiency: Math.max(85, Math.min(95, prev.logisticsOverview.overallEfficiency + (Math.random() - 0.5) * 2)),
          onTimeDeliveryRate: Math.max(90, Math.min(98, prev.logisticsOverview.onTimeDeliveryRate + (Math.random() - 0.5) * 1.5)),
          deliveryVolume: Math.max(11000, Math.min(14000, prev.logisticsOverview.deliveryVolume + Math.floor(Math.random() * 100) - 50))
        },
        fleetManagement: {
          ...prev.fleetManagement,
          activeVehicles: Math.max(120, Math.min(145, prev.fleetManagement.activeVehicles + Math.floor(Math.random() * 6) - 3)),
          driverManagement: {
            ...prev.fleetManagement.driverManagement,
            activeDrivers: Math.max(150, Math.min(180, prev.fleetManagement.driverManagement.activeDrivers + Math.floor(Math.random() * 6) - 3))
          }
        }
      }));
    }, 17000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'SUCCESS': return 'border-green-500 bg-green-900/30 text-green-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getPerformanceColor = (value, good = 80, excellent = 90, reverse = false) => {
    if (reverse) {
      if (value <= excellent / 3) return 'text-green-400';
      if (value <= good / 2) return 'text-blue-400';
      if (value <= good) return 'text-yellow-400';
      return 'text-red-400';
    } else {
      if (value >= excellent) return 'text-green-400';
      if (value >= good) return 'text-blue-400';
      if (value >= good * 0.8) return 'text-yellow-400';
      return 'text-red-400';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="w-3 h-3 text-red-400" />;
      case 'decreasing': return <TrendingDown className="w-3 h-3 text-green-400" />;
      default: return <span className="w-3 h-3 text-gray-400">→</span>;
    }
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Transportation & Logistics Intelligence Center</h1>
              <p className="text-indigo-300">Fleet management, shipping operations, delivery tracking & supply chain logistics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-indigo-400">{logisticsData.currentTime}</div>
            <div className="text-indigo-300">Logistics Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Logistics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Truck className="w-5 h-5 text-indigo-400 mr-2" />
                Overall Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{formatPercentage(logisticsData.logisticsOverview.overallEfficiency)}</div>
            <div className="text-indigo-300 text-sm">Fleet: {formatPercentage(logisticsData.logisticsOverview.fleetUtilization)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                On-Time Delivery
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(logisticsData.logisticsOverview.onTimeDeliveryRate)}</div>
            <div className="text-green-300 text-sm">Avg: {logisticsData.logisticsOverview.averageDeliveryTime.toFixed(1)} days</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Package className="w-5 h-5 text-blue-400 mr-2" />
                Daily Volume
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(logisticsData.logisticsOverview.deliveryVolume)}</div>
            <div className="text-blue-300 text-sm">Fulfillment: {formatPercentage(logisticsData.logisticsOverview.orderFulfillmentRate)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Fuel className="w-5 h-5 text-yellow-400 mr-2" />
                Fuel Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{logisticsData.logisticsOverview.fuelEfficiency.toFixed(1)}</div>
            <div className="text-yellow-300 text-sm">km/L avg</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <MapPin className="w-5 h-5 text-purple-400 mr-2" />
                Customer Satisfaction
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(logisticsData.logisticsOverview.customerSatisfaction)}</div>
            <div className="text-purple-300 text-sm">NPS: {logisticsData.customerSatisfaction.nps.toFixed(1)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-cyan-400 mr-2" />
                Cost per Shipment
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">${logisticsData.logisticsOverview.costPerShipment}</div>
            <div className="text-cyan-300 text-sm">Total: {formatCurrency(logisticsData.logisticsOverview.shippingCosts)}</div>
          </div>
        </div>

        {/* Fleet Management & Shipping Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Truck className="w-5 h-5 text-cyan-400 mr-2" />
              Fleet Management Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{logisticsData.fleetManagement.activeVehicles}</div>
                <div className="text-cyan-300 text-sm">Active Vehicles</div>
                <div className="text-gray-400 text-xs mt-1">Total: {logisticsData.fleetManagement.totalVehicles}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{logisticsData.fleetManagement.driverManagement.activeDrivers}</div>
                <div className="text-green-300 text-sm">Active Drivers</div>
                <div className="text-gray-400 text-xs mt-1">Safety: {formatPercentage(logisticsData.fleetManagement.driverManagement.safetyScore)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Fleet Types</h4>
              {logisticsData.fleetManagement.fleetTypes.map((fleet, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{fleet.type}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm">{fleet.active}</span>
                      <span className={`${getPerformanceColor(fleet.efficiency, 85, 90)}`}>
                        {formatPercentage(fleet.efficiency)}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Fuel: {fleet.fuelConsumption.toFixed(1)}L/100km</span>
                    <span className="text-blue-400">Miles: {formatNumber(fleet.mileage)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{logisticsData.fleetManagement.maintenanceVehicles}</div>
                <div className="text-slate-400">Maintenance</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-gray-400 font-medium">{logisticsData.fleetManagement.idleVehicles}</div>
                <div className="text-slate-400">Idle</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{logisticsData.fleetManagement.driverManagement.violations}</div>
                <div className="text-slate-400">Violations</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Package className="w-5 h-5 text-blue-400 mr-2" />
              Shipping Operations Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatNumber(logisticsData.shippingOperations.dailyShipments)}</div>
                <div className="text-blue-300 text-sm">Daily Shipments</div>
                <div className="text-gray-400 text-xs mt-1">Target: {formatNumber(logisticsData.shippingOperations.targetShipments)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{logisticsData.shippingOperations.carrierPerformance.length}</div>
                <div className="text-purple-300 text-sm">Active Carriers</div>
                <div className="text-gray-400 text-xs mt-1">Avg Rating: 4.5</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Shipping Zones</h4>
              {logisticsData.shippingOperations.shippingZones.map((zone, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{zone.zone}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{formatNumber(zone.shipments)}</span>
                    <span className={`${getPerformanceColor(zone.onTime, 85, 92)}`}>
                      {formatPercentage(zone.onTime)}
                    </span>
                    <span className="text-green-400">${zone.cost}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{formatPercentage(logisticsData.shippingOperations.shippingMethods[1].percentage)}</div>
                <div className="text-slate-400">Next Day</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-blue-400 font-medium">{formatPercentage(logisticsData.shippingOperations.shippingMethods[2].percentage)}</div>
                <div className="text-slate-400">Standard</div>
              </div>
            </div>
          </div>
        </div>

        {/* Warehouse Operations & Route Optimization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Package className="w-5 h-5 text-green-400 mr-2" />
              Warehouse Operations Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(logisticsData.warehouseOperations.utilizationPercentage)}</div>
                <div className="text-green-300 text-sm">Utilization</div>
                <div className="text-gray-400 text-xs mt-1">Capacity: {formatNumber(logisticsData.warehouseOperations.totalCapacity)}m³</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(logisticsData.warehouseOperations.pickingAccuracy)}</div>
                <div className="text-blue-300 text-sm">Picking Accuracy</div>
                <div className="text-gray-400 text-xs mt-1">Efficiency: {formatPercentage(logisticsData.warehouseOperations.packingEfficiency)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Warehouse Locations</h4>
              {logisticsData.warehouseOperations.warehouses.slice(0, 4).map((warehouse, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{warehouse.warehouse}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{warehouse.location}</span>
                    <span className={`${getPerformanceColor(warehouse.utilization, 70, 80)}`}>
                      {formatPercentage(warehouse.utilization)}
                    </span>
                    <span className={`${getPerformanceColor(warehouse.efficiency, 85, 90)}`}>
                      {formatPercentage(warehouse.efficiency)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-cyan-400 font-medium">{logisticsData.warehouseOperations.warehouseMetrics.orderProcessingTime.toFixed(1)}h</div>
                <div className="text-slate-400">Processing Time</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{logisticsData.warehouseOperations.warehouseMetrics.inventoryTurns.toFixed(1)}</div>
                <div className="text-slate-400">Inventory Turns</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-purple-400 font-medium">{formatPercentage(logisticsData.warehouseOperations.warehouseMetrics.equipmentUptime)}</div>
                <div className="text-slate-400">Equipment Uptime</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Navigation className="w-5 h-5 text-purple-400 mr-2" />
              Route Optimization Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{logisticsData.routeOptimization.routesOptimized}</div>
                <div className="text-purple-300 text-sm">Routes Optimized</div>
                <div className="text-gray-400 text-xs mt-1">Score: {formatPercentage(logisticsData.routeOptimization.optimizationScore)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(logisticsData.routeOptimization.fuelSavings)}</div>
                <div className="text-green-300 text-sm">Fuel Savings</div>
                <div className="text-gray-400 text-xs mt-1">Time: {formatPercentage(logisticsData.routeOptimization.timeSavings)}</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Route Metrics</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Avg Stops: {logisticsData.routeOptimization.routeMetrics.avgStopsPerRoute.toFixed(1)}</div>
                    <div className="text-slate-300">Avg Distance: {logisticsData.routeOptimization.routeMetrics.avgRouteDistance.toFixed(1)} km</div>
                    <div className="text-slate-300">Avg Time: {logisticsData.routeOptimization.routeMetrics.avgRouteTime.toFixed(1)} hours</div>
                  </div>
                  <div>
                    <div className="text-blue-400">Efficiency: {formatPercentage(logisticsData.routeOptimization.routeMetrics.routeEfficiency)}</div>
                    <div className="text-green-400">Density: {logisticsData.routeOptimization.routeMetrics.customerDensity.toFixed(1)}/km</div>
                    <div className="text-yellow-400">Fuel: {logisticsData.routeOptimization.routeMetrics.fuelConsumptionPerRoute.toFixed(1)}L</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-blue-400 font-medium">{formatPercentage(logisticsData.routeOptimization.routeCompliance)}</div>
                <div className="text-slate-400">Route Compliance</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{formatPercentage(logisticsData.routeOptimization.trafficIntegration)}</div>
                <div className="text-slate-400">Traffic Integration</div>
              </div>
            </div>
          </div>
        </div>

        {/* Logistics Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Transportation & Logistics Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {logisticsData.logisticsAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="text-slate-400 text-xs mb-2">Assigned: {alert.assignedTo}</div>
                {alert.actionRequired && (
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded text-xs">Action Required</span>
                  </div>
                )}
                <div className="mt-2 flex flex-wrap gap-1">
                  {alert.recommendations.map((rec, recIndex) => (
                    <span key={recIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Tracking & Customer Satisfaction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <MapPin className="w-5 h-5 text-emerald-400 mr-2" />
              Delivery Tracking Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatPercentage(logisticsData.deliveryTracking.trackingAccuracy)}</div>
                <div className="text-emerald-300 text-sm">Tracking Accuracy</div>
                <div className="text-gray-400 text-xs mt-1">Visibility: {formatPercentage(logisticsData.deliveryTracking.realTimeVisibility)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(logisticsData.deliveryTracking.proofOfDelivery)}</div>
                <div className="text-blue-300 text-sm">Proof of Delivery</div>
                <div className="text-gray-400 text-xs mt-1">Signature: {formatPercentage(logisticsData.deliveryTracking.signatureCapture)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Delivery Status</h4>
              {logisticsData.deliveryTracking.deliveryStatus.map((status, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{status.status}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{formatNumber(status.packages)}</span>
                    <span className="text-purple-400">{formatPercentage(status.percentage)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-cyan-400 font-medium">{formatNumber(logisticsData.deliveryTracking.deliveryUpdates)}</div>
                <div className="text-slate-400">Updates Sent</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{formatNumber(logisticsData.deliveryTracking.trackingEvents)}</div>
                <div className="text-slate-400">Tracking Events</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-orange-400 mr-2" />
              Customer Satisfaction Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{formatPercentage(logisticsData.customerSatisfaction.overallSatisfaction)}</div>
                <div className="text-orange-300 text-sm">Overall Satisfaction</div>
                <div className="text-gray-400 text-xs mt-1">NPS: {logisticsData.customerSatisfaction.nps.toFixed(1)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(logisticsData.customerSatisfaction.deliveryRating)}</div>
                <div className="text-green-300 text-sm">Delivery Rating</div>
                <div className="text-gray-400 text-xs mt-1">Retention: {formatPercentage(logisticsData.customerSatisfaction.customerRetention)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Regional Performance</h4>
              {logisticsData.customerSatisfaction.satisfactionByRegion.slice(0, 4).map((region, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{region.region}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{formatNumber(region.volume)}</span>
                    <span className={`${getPerformanceColor(region.rating, 85, 92)}`}>
                      {formatPercentage(region.rating)}
                    </span>
                    <span className="text-red-400">{region.complaints}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-red-400 font-medium">{logisticsData.customerSatisfaction.customerComplaints}</div>
                <div className="text-slate-400">Complaints</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{formatPercentage(logisticsData.customerSatisfaction.complaintResolution)}</div>
                <div className="text-slate-400">Resolution</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{logisticsData.customerSatisfaction.avgResolutionTime.toFixed(1)}h</div>
                <div className="text-slate-400">Avg Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}