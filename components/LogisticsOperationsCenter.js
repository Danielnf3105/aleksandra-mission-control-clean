// LogisticsOperationsCenter.js - Logistics Operations Center & Supply Chain Visibility Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LogisticsOperationsCenter = () => {
  const [logisticsStatus, setLogisticsStatus] = useState({
    operationalStatus: 'ACTIVE_SHIPPING',
    totalShipments: 2847,
    inTransitShipments: 1247,
    deliveredToday: 896,
    delayedShipments: 89,
    onTimeDeliveryRate: 94.7, // percentage
    averageDeliveryTime: 2.3, // days
    warehouseUtilization: 78.9, // percentage
    inventoryTurnover: 6.8,
    transportationCosts: 284739, // USD today
    lastUpdate: Date.now()
  });

  const [shipmentTracking, setShipmentTracking] = useState([
    {
      shipment_id: 'SHP-2026-030501',
      order_number: 'ORD-2847392',
      customer: 'TechCorp Industries',
      destination: 'New York, NY',
      origin: 'Distribution Center A',
      status: 'IN_TRANSIT',
      carrier: 'Express Logistics',
      tracking_number: 'EL1234567890',
      shipped_date: Date.now() - 1.5 * 24 * 60 * 60 * 1000,
      estimated_delivery: Date.now() + 0.5 * 24 * 60 * 60 * 1000,
      actual_delivery: null,
      current_location: 'Philadelphia, PA',
      transit_time: 2.5, // days
      delivery_priority: 'STANDARD',
      weight: 156.7, // kg
      value: 15647, // USD
      temperature_controlled: false,
      route_progress: 78.5 // percentage
    },
    {
      shipment_id: 'SHP-2026-030502',
      order_number: 'ORD-2847393',
      customer: 'MedDevice Solutions',
      destination: 'Chicago, IL',
      origin: 'Distribution Center B',
      status: 'DELIVERED',
      carrier: 'Premium Freight',
      tracking_number: 'PF9876543210',
      shipped_date: Date.now() - 3 * 24 * 60 * 60 * 1000,
      estimated_delivery: Date.now() - 1 * 24 * 60 * 60 * 1000,
      actual_delivery: Date.now() - 0.8 * 24 * 60 * 60 * 1000,
      current_location: 'Chicago, IL',
      transit_time: 2.2,
      delivery_priority: 'EXPRESS',
      weight: 89.3,
      value: 23456,
      temperature_controlled: true,
      route_progress: 100,
      delivery_performance: 'EARLY'
    },
    {
      shipment_id: 'SHP-2026-030503',
      order_number: 'ORD-2847394',
      customer: 'Global Manufacturing',
      destination: 'Los Angeles, CA',
      origin: 'Distribution Center A',
      status: 'DELAYED',
      carrier: 'Cross Country Transport',
      tracking_number: 'CCT5555666777',
      shipped_date: Date.now() - 4 * 24 * 60 * 60 * 1000,
      estimated_delivery: Date.now() - 1 * 24 * 60 * 60 * 1000,
      actual_delivery: null,
      current_location: 'Denver, CO',
      delay_reason: 'WEATHER_CONDITIONS',
      new_estimated_delivery: Date.now() + 1 * 24 * 60 * 60 * 1000,
      transit_time: 6.0,
      delivery_priority: 'STANDARD',
      weight: 234.5,
      value: 8765,
      temperature_controlled: false,
      route_progress: 65.2
    },
    {
      shipment_id: 'SHP-2026-030504',
      order_number: 'ORD-2847395',
      customer: 'Retail Chain Plus',
      destination: 'Miami, FL',
      origin: 'Distribution Center C',
      status: 'PREPARING',
      carrier: 'Southern Express',
      tracking_number: 'SE1111222333',
      shipped_date: null,
      estimated_ship_date: Date.now() + 0.5 * 24 * 60 * 60 * 1000,
      estimated_delivery: Date.now() + 3 * 24 * 60 * 60 * 1000,
      current_location: 'Distribution Center C',
      delivery_priority: 'OVERNIGHT',
      weight: 67.8,
      value: 12890,
      temperature_controlled: false,
      preparation_progress: 87.5 // percentage
    }
  ]);

  const [warehouseOperations, setWarehouseOperations] = useState([
    {
      warehouse_id: 'DC_EAST_001',
      location: 'Distribution Center East',
      address: 'Newark, NJ',
      type: 'FULFILLMENT_CENTER',
      status: 'OPERATIONAL',
      manager: 'Sarah Johnson',
      capacity: 50000, // units
      current_inventory: 38456,
      utilization: 76.9, // percentage
      inbound_shipments: 23,
      outbound_shipments: 156,
      picking_orders: 89,
      packing_orders: 67,
      staff_on_shift: 34,
      automation_level: 'HIGH',
      technologies: ['AGV', 'AS/RS', 'WMS'],
      daily_throughput: 2847,
      accuracy_rate: 99.7 // percentage
    },
    {
      warehouse_id: 'DC_WEST_002',
      location: 'Distribution Center West',
      address: 'Los Angeles, CA',
      type: 'CROSS_DOCK',
      status: 'OPERATIONAL',
      manager: 'Mike Chen',
      capacity: 75000,
      current_inventory: 52341,
      utilization: 69.8,
      inbound_shipments: 45,
      outbound_shipments: 234,
      picking_orders: 156,
      packing_orders: 123,
      staff_on_shift: 56,
      automation_level: 'MEDIUM',
      technologies: ['WMS', 'RFID', 'Conveyor'],
      daily_throughput: 4523,
      accuracy_rate: 98.9
    },
    {
      warehouse_id: 'DC_CENTRAL_003',
      location: 'Distribution Center Central',
      address: 'Chicago, IL',
      type: 'RETURNS_PROCESSING',
      status: 'MAINTENANCE',
      maintenance_type: 'CONVEYOR_UPGRADE',
      maintenance_start: Date.now() - 4 * 60 * 60 * 1000,
      eta_completion: Date.now() + 2 * 60 * 60 * 1000,
      capacity: 30000,
      current_inventory: 18765,
      utilization: 62.6,
      estimated_downtime_cost: 25000 // USD
    }
  ]);

  const [inventoryManagement, setInventoryManagement] = useState({
    total_sku_count: 15647,
    total_inventory_value: 8967432, // USD
    stock_levels: [
      {
        category: 'Electronics',
        total_units: 8947,
        available_units: 7834,
        reserved_units: 1113,
        reorder_alerts: 23,
        stock_out_risk: 'LOW'
      },
      {
        category: 'Automotive Parts',
        total_units: 15647,
        available_units: 12456,
        reserved_units: 3191,
        reorder_alerts: 89,
        stock_out_risk: 'MEDIUM'
      },
      {
        category: 'Industrial Equipment',
        total_units: 2847,
        available_units: 1567,
        reserved_units: 1280,
        reorder_alerts: 156,
        stock_out_risk: 'HIGH'
      },
      {
        category: 'Consumer Goods',
        total_units: 23456,
        available_units: 19234,
        reserved_units: 4222,
        reorder_alerts: 45,
        stock_out_risk: 'LOW'
      }
    ],
    abc_analysis: {
      'A_items': { count: 1564, value_percentage: 78.9, inventory_percentage: 15.2 },
      'B_items': { count: 4692, value_percentage: 15.6, inventory_percentage: 32.1 },
      'C_items': { count: 9391, value_percentage: 5.5, inventory_percentage: 52.7 }
    },
    demand_forecasting: {
      accuracy: 87.3, // percentage
      forecast_horizon: 90, // days
      seasonal_adjustment: 'ENABLED',
      ai_enhanced: true
    }
  });

  const [carrierPerformance, setCarrierPerformance] = useState([
    {
      carrier: 'Express Logistics',
      total_shipments: 1247,
      on_time_deliveries: 1182,
      on_time_rate: 94.8,
      average_transit_time: 2.1, // days
      cost_per_shipment: 45.67,
      damage_rate: 0.3,
      customer_rating: 4.6,
      preferred_status: 'PRIMARY'
    },
    {
      carrier: 'Premium Freight',
      total_shipments: 892,
      on_time_deliveries: 856,
      on_time_rate: 96.0,
      average_transit_time: 1.8,
      cost_per_shipment: 67.89,
      damage_rate: 0.1,
      customer_rating: 4.8,
      preferred_status: 'PRIMARY'
    },
    {
      carrier: 'Cross Country Transport',
      total_shipments: 567,
      on_time_deliveries: 512,
      on_time_rate: 90.3,
      average_transit_time: 3.4,
      cost_per_shipment: 38.92,
      damage_rate: 0.7,
      customer_rating: 4.1,
      preferred_status: 'SECONDARY'
    },
    {
      carrier: 'Regional Delivery Co',
      total_shipments: 234,
      on_time_deliveries: 198,
      on_time_rate: 84.6,
      average_transit_time: 1.5,
      cost_per_shipment: 29.34,
      damage_rate: 1.2,
      customer_rating: 3.8,
      preferred_status: 'BACKUP'
    }
  ]);

  const [supplyChainRisk, setSupplyChainRisk] = useState({
    risk_level: 'MODERATE',
    active_disruptions: 3,
    supplier_risks: [
      {
        supplier: 'Global Components Ltd',
        risk_level: 'HIGH',
        risk_factors: ['Single Source', 'Geopolitical'],
        mitigation_plan: 'ALTERNATIVE_SOURCING',
        impact_assessment: 'CRITICAL'
      },
      {
        supplier: 'Regional Materials Inc',
        risk_level: 'MEDIUM',
        risk_factors: ['Quality Issues', 'Capacity'],
        mitigation_plan: 'QUALITY_AUDIT',
        impact_assessment: 'MODERATE'
      },
      {
        supplier: 'Tech Solutions Pro',
        risk_level: 'LOW',
        risk_factors: ['Price Volatility'],
        mitigation_plan: 'CONTRACT_HEDGING',
        impact_assessment: 'LOW'
      }
    ],
    geographic_risks: {
      weather_alerts: 2,
      port_congestion: 1,
      infrastructure_issues: 0,
      regulatory_changes: 1
    },
    contingency_plans: {
      alternative_routes: 'ACTIVATED',
      backup_suppliers: 'STANDBY',
      emergency_inventory: 'ADEQUATE'
    }
  });

  const [operationsHistory, setOperationsHistory] = useState([]);

  const generateOperationsHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    
    for (let i = 0; i <= 23; i++) { // 24 hours
      const time = new Date(startOfDay.getTime() + i * 60 * 60 * 1000);
      
      // Simulate realistic logistics patterns
      const hour = time.getHours();
      let activityMultiplier = 0.6; // Base activity
      
      if (hour >= 6 && hour <= 18) activityMultiplier = 1.0; // Business hours peak
      if (hour >= 19 && hour <= 22) activityMultiplier = 0.8; // Evening operations
      if (hour >= 23 || hour <= 5) activityMultiplier = 0.3; // Night hours
      
      data.push({
        time: time.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        shipments_processed: Math.floor(150 + activityMultiplier * 200 + Math.random() * 50),
        delivery_rate: 85 + activityMultiplier * 10 + Math.random() * 5,
        warehouse_throughput: Math.floor(300 + activityMultiplier * 400 + Math.random() * 100),
        inventory_movements: Math.floor(500 + activityMultiplier * 800 + Math.random() * 200),
        transportation_cost: Math.floor(8000 + activityMultiplier * 12000 + Math.random() * 3000),
        delays: Math.floor((1 - activityMultiplier + 0.1) * 15 + Math.random() * 5),
        accuracy_rate: 95 + activityMultiplier * 3 + Math.random() * 2
      });
    }
    return data;
  };

  useEffect(() => {
    setOperationsHistory(generateOperationsHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update logistics status
      setLogisticsStatus(prev => ({
        ...prev,
        deliveredToday: prev.deliveredToday + Math.floor(Math.random() * 5),
        onTimeDeliveryRate: Math.max(85.0, Math.min(98.0, prev.onTimeDeliveryRate + (Math.random() - 0.5) * 1.5)),
        averageDeliveryTime: Math.max(1.5, Math.min(5.0, prev.averageDeliveryTime + (Math.random() - 0.5) * 0.3)),
        warehouseUtilization: Math.max(65.0, Math.min(90.0, prev.warehouseUtilization + (Math.random() - 0.5) * 2.0)),
        transportationCosts: prev.transportationCosts + Math.floor(Math.random() * 1000),
        lastUpdate: Date.now()
      }));

      // Update shipment tracking
      setShipmentTracking(prev => prev.map(shipment => {
        if (shipment.status === 'IN_TRANSIT') {
          return {
            ...shipment,
            route_progress: Math.min(100, shipment.route_progress + Math.random() * 5)
          };
        }
        if (shipment.status === 'PREPARING') {
          return {
            ...shipment,
            preparation_progress: Math.min(100, shipment.preparation_progress + Math.random() * 3)
          };
        }
        return shipment;
      }));

      // Update warehouse operations
      setWarehouseOperations(prev => prev.map(warehouse => {
        if (warehouse.status === 'OPERATIONAL') {
          return {
            ...warehouse,
            picking_orders: Math.max(0, warehouse.picking_orders + Math.floor((Math.random() - 0.5) * 10)),
            packing_orders: Math.max(0, warehouse.packing_orders + Math.floor((Math.random() - 0.5) * 8)),
            daily_throughput: warehouse.daily_throughput + Math.floor(Math.random() * 50)
          };
        }
        return warehouse;
      }));

    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE_SHIPPING':
      case 'OPERATIONAL':
      case 'DELIVERED':
      case 'PRIMARY':
      case 'LOW':
      case 'ADEQUATE':
      case 'ACTIVATED':
      case 'STANDBY': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'IN_TRANSIT':
      case 'PREPARING':
      case 'SECONDARY':
      case 'MEDIUM':
      case 'MODERATE': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'DELAYED':
      case 'BACKUP':
      case 'HIGH':
      case 'CRITICAL': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MAINTENANCE':
      case 'CANCELLED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'OVERNIGHT': return 'text-red-400';
      case 'EXPRESS': return 'text-orange-400';
      case 'STANDARD': return 'text-blue-400';
      default: return 'text-gray-400';
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
          🚚 LOGISTICS OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {formatNumber(logisticsStatus.onTimeDeliveryRate, 1)}% On-Time
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {logisticsStatus.inTransitShipments} In Transit
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatNumber(logisticsStatus.averageDeliveryTime, 1)}d Avg
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Supply Chain Visibility & Tracking
          </div>
        </div>
      </div>

      {/* Logistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">TOTAL SHIPMENTS</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatLargeNumber(logisticsStatus.totalShipments)}
              </div>
              <div className="text-xs text-blue-300">
                {logisticsStatus.inTransitShipments} in transit | {logisticsStatus.deliveredToday} delivered today
              </div>
            </div>
            <div className="text-3xl opacity-60">📦</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">ON-TIME DELIVERY</div>
              <div className="text-2xl font-bold text-green-100">
                {formatNumber(logisticsStatus.onTimeDeliveryRate, 1)}%
              </div>
              <div className="text-xs text-green-300">
                {logisticsStatus.delayedShipments} delayed shipments
              </div>
            </div>
            <div className="text-3xl opacity-60">✅</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">AVG DELIVERY TIME</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(logisticsStatus.averageDeliveryTime, 1)}d
              </div>
              <div className="text-xs text-purple-300">
                Transit Performance
              </div>
            </div>
            <div className="text-3xl opacity-60">⏱️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">TRANSPORT COSTS</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatCurrency(logisticsStatus.transportationCosts)}
              </div>
              <div className="text-xs text-orange-300">
                Today's Total
              </div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>
      </div>

      {/* Shipment Tracking */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📍 REAL-TIME SHIPMENT TRACKING & STATUS
        </h3>
        <div className="space-y-3">
          {shipmentTracking.map((shipment) => (
            <div key={shipment.shipment_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{shipment.shipment_id}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(shipment.status)}`}>
                    {shipment.status.replace(/_/g, ' ')}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-mono ${getPriorityColor(shipment.delivery_priority)}`}>
                    {shipment.delivery_priority}
                  </span>
                  {shipment.temperature_controlled && (
                    <span className="text-xs px-2 py-1 rounded bg-blue-500 text-white">
                      TEMP CONTROLLED
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-400">
                  {shipment.carrier}
                </div>
              </div>

              <div className="text-sm mb-2">
                <span className="text-gray-400">Customer: </span>
                <span className="text-cyan-400">{shipment.customer}</span>
                <span className="text-gray-400"> | Order: </span>
                <span className="text-blue-400">{shipment.order_number}</span>
              </div>

              <div className="text-xs mb-2">
                <span className="text-gray-400">Route: </span>
                <span className="text-green-400">{shipment.origin}</span>
                <span className="text-gray-400"> → </span>
                <span className="text-purple-400">{shipment.destination}</span>
                <span className="text-gray-400"> | Current: </span>
                <span className="text-orange-400">{shipment.current_location}</span>
              </div>

              <div className="text-xs mb-2">
                <span className="text-gray-400">Tracking: </span>
                <span className="text-yellow-400">{shipment.tracking_number}</span>
                <span className="text-gray-400"> | Weight: </span>
                <span className="text-pink-400">{formatNumber(shipment.weight, 1)} kg</span>
                <span className="text-gray-400"> | Value: </span>
                <span className="text-green-400">{formatCurrency(shipment.value)}</span>
              </div>

              {shipment.status === 'IN_TRANSIT' && (
                <>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Shipped: </span>
                    <span className="text-blue-400">{formatTime(shipment.shipped_date)}</span>
                    <span className="text-gray-400"> | ETA: </span>
                    <span className="text-green-400">{formatTime(shipment.estimated_delivery)}</span>
                    <span className="text-gray-400"> | Transit Time: </span>
                    <span className="text-purple-400">{formatNumber(shipment.transit_time, 1)} days</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
                    <div 
                      className="h-2 rounded-full bg-blue-400"
                      style={{ width: `${Math.min(shipment.route_progress, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Route Progress: {formatNumber(shipment.route_progress, 1)}%
                  </div>
                </>
              )}

              {shipment.status === 'DELIVERED' && (
                <div className="text-xs">
                  <span className="text-gray-400">Delivered: </span>
                  <span className="text-green-400">{formatTime(shipment.actual_delivery)}</span>
                  <span className="text-gray-400"> | Performance: </span>
                  <span className={shipment.delivery_performance === 'EARLY' ? 'text-green-400' : shipment.delivery_performance === 'ON_TIME' ? 'text-blue-400' : 'text-red-400'}>
                    {shipment.delivery_performance}
                  </span>
                  <span className="text-gray-400"> | Transit: </span>
                  <span className="text-purple-400">{formatNumber(shipment.transit_time, 1)} days</span>
                </div>
              )}

              {shipment.status === 'DELAYED' && (
                <>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Delay Reason: </span>
                    <span className="text-red-400">{shipment.delay_reason?.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | New ETA: </span>
                    <span className="text-yellow-400">{formatTime(shipment.new_estimated_delivery)}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
                    <div 
                      className="h-2 rounded-full bg-orange-400"
                      style={{ width: `${Math.min(shipment.route_progress, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Route Progress: {formatNumber(shipment.route_progress, 1)}%
                  </div>
                </>
              )}

              {shipment.status === 'PREPARING' && (
                <>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Est Ship Date: </span>
                    <span className="text-blue-400">{formatTime(shipment.estimated_ship_date)}</span>
                    <span className="text-gray-400"> | Est Delivery: </span>
                    <span className="text-green-400">{formatTime(shipment.estimated_delivery)}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
                    <div 
                      className="h-2 rounded-full bg-yellow-400"
                      style={{ width: `${Math.min(shipment.preparation_progress, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Preparation: {formatNumber(shipment.preparation_progress, 1)}%
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Warehouse Operations and Inventory */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Warehouse Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏭 WAREHOUSE OPERATIONS & FULFILLMENT
          </h3>
          
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {warehouseOperations.map((warehouse) => (
              <div key={warehouse.warehouse_id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-bold text-white">{warehouse.location}</div>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(warehouse.status)}`}>
                      {warehouse.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {warehouse.type?.replace(/_/g, ' ')}
                    </span>
                  </div>
                  {warehouse.manager && (
                    <div className="text-xs text-gray-400">
                      Manager: {warehouse.manager}
                    </div>
                  )}
                </div>

                <div className="text-sm mb-2">
                  <span className="text-gray-400">Address: </span>
                  <span className="text-cyan-400">{warehouse.address}</span>
                </div>

                {warehouse.status === 'OPERATIONAL' && (
                  <>
                    <div className="text-xs mb-2">
                      <span className="text-gray-400">Capacity: </span>
                      <span className="text-blue-400">{formatLargeNumber(warehouse.current_inventory)}</span>
                      <span className="text-gray-400">/</span>
                      <span className="text-purple-400">{formatLargeNumber(warehouse.capacity)}</span>
                      <span className="text-gray-400"> ({formatNumber(warehouse.utilization, 1)}%)</span>
                      <span className="text-gray-400"> | Staff: </span>
                      <span className="text-green-400">{warehouse.staff_on_shift}</span>
                    </div>

                    <div className="text-xs mb-2">
                      <span className="text-gray-400">Inbound: </span>
                      <span className="text-green-400">{warehouse.inbound_shipments}</span>
                      <span className="text-gray-400"> | Outbound: </span>
                      <span className="text-orange-400">{warehouse.outbound_shipments}</span>
                      <span className="text-gray-400"> | Picking: </span>
                      <span className="text-yellow-400">{warehouse.picking_orders}</span>
                      <span className="text-gray-400"> | Packing: </span>
                      <span className="text-pink-400">{warehouse.packing_orders}</span>
                    </div>

                    <div className="text-xs mb-2">
                      <span className="text-gray-400">Throughput: </span>
                      <span className="text-blue-400">{formatLargeNumber(warehouse.daily_throughput)}/day</span>
                      <span className="text-gray-400"> | Accuracy: </span>
                      <span className="text-green-400">{formatNumber(warehouse.accuracy_rate, 1)}%</span>
                      <span className="text-gray-400"> | Automation: </span>
                      <span className="text-purple-400">{warehouse.automation_level}</span>
                    </div>

                    <div className="text-xs">
                      <span className="text-gray-400">Technologies: </span>
                      <span className="text-cyan-400">{warehouse.technologies?.join(', ')}</span>
                    </div>
                  </>
                )}

                {warehouse.status === 'MAINTENANCE' && (
                  <div className="text-xs">
                    <span className="text-gray-400">Maintenance: </span>
                    <span className="text-orange-400">{warehouse.maintenance_type?.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | Started: </span>
                    <span className="text-yellow-400">{formatTime(warehouse.maintenance_start)}</span>
                    <span className="text-gray-400"> | ETA: </span>
                    <span className="text-blue-400">{formatTime(warehouse.eta_completion)}</span>
                    <span className="text-gray-400"> | Cost Impact: </span>
                    <span className="text-red-400">{formatCurrency(warehouse.estimated_downtime_cost)}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 INVENTORY MANAGEMENT & STOCK LEVELS
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Inventory Overview</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Total SKUs:</span>
                <span className="text-blue-400">{formatLargeNumber(inventoryManagement.total_sku_count)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Inventory Value:</span>
                <span className="text-green-400">{formatCurrency(inventoryManagement.total_inventory_value)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Forecast Accuracy:</span>
                <span className="text-purple-400">{formatNumber(inventoryManagement.demand_forecasting.accuracy, 1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Stock Levels by Category</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {inventoryManagement.stock_levels.map((category, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{category.category}</span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(category.stock_out_risk)}`}>
                      {category.stock_out_risk} RISK
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Available: </span>
                    <span className="text-green-400">{formatLargeNumber(category.available_units)}</span>
                    <span className="text-gray-400"> | Reserved: </span>
                    <span className="text-yellow-400">{formatLargeNumber(category.reserved_units)}</span>
                    <span className="text-gray-400"> | Reorder Alerts: </span>
                    <span className="text-red-400">{category.reorder_alerts}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">ABC Analysis</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">A Items (High Value):</span>
                <span className="text-red-400">{formatLargeNumber(inventoryManagement.abc_analysis.A_items.count)} ({formatNumber(inventoryManagement.abc_analysis.A_items.value_percentage, 1)}% value)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">B Items (Medium Value):</span>
                <span className="text-yellow-400">{formatLargeNumber(inventoryManagement.abc_analysis.B_items.count)} ({formatNumber(inventoryManagement.abc_analysis.B_items.value_percentage, 1)}% value)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">C Items (Low Value):</span>
                <span className="text-green-400">{formatLargeNumber(inventoryManagement.abc_analysis.C_items.count)} ({formatNumber(inventoryManagement.abc_analysis.C_items.value_percentage, 1)}% value)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logistics Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 LOGISTICS OPERATIONS TRENDS (24 HOURS)
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
              dataKey="shipments_processed"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Shipments Processed"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="delivery_rate" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Delivery Rate %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="warehouse_throughput" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Warehouse Throughput"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="inventory_movements" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Inventory Movements"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="transportation_cost" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Transportation Cost ($)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="delays" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Delays"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="accuracy_rate" 
              stroke="#F97316" 
              strokeWidth={2}
              name="Accuracy Rate %"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Carrier Performance and Supply Chain Risk */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Carrier Performance */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚛 CARRIER PERFORMANCE & ANALYTICS
          </h3>
          
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {carrierPerformance.map((carrier, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">{carrier.carrier}</span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(carrier.preferred_status)}`}>
                      {carrier.preferred_status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatNumber(carrier.customer_rating, 1)}/5 ⭐
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Shipments: </span>
                  <span className="text-blue-400">{formatLargeNumber(carrier.total_shipments)}</span>
                  <span className="text-gray-400"> | On-Time: </span>
                  <span className="text-green-400">{formatLargeNumber(carrier.on_time_deliveries)}</span>
                  <span className="text-gray-400"> ({formatNumber(carrier.on_time_rate, 1)}%)</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Avg Transit: </span>
                  <span className="text-purple-400">{formatNumber(carrier.average_transit_time, 1)} days</span>
                  <span className="text-gray-400"> | Cost/Shipment: </span>
                  <span className="text-orange-400">{formatCurrency(carrier.cost_per_shipment)}</span>
                  <span className="text-gray-400"> | Damage Rate: </span>
                  <span className="text-red-400">{formatNumber(carrier.damage_rate, 1)}%</span>
                </div>

                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${carrier.on_time_rate >= 95 ? 'bg-green-400' : 
                                                     carrier.on_time_rate >= 90 ? 'bg-yellow-400' : 'bg-orange-400'}`}
                    style={{ width: `${Math.min(carrier.on_time_rate, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supply Chain Risk */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚠️ SUPPLY CHAIN RISK MANAGEMENT
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Risk Overview</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Risk Level:</span>
                <span className={`${getStatusColor(supplyChainRisk.risk_level).split(' ')[0]}`}>
                  {supplyChainRisk.risk_level}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Disruptions:</span>
                <span className="text-orange-400">{supplyChainRisk.active_disruptions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Weather Alerts:</span>
                <span className="text-yellow-400">{supplyChainRisk.geographic_risks.weather_alerts}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Port Congestion:</span>
                <span className="text-red-400">{supplyChainRisk.geographic_risks.port_congestion}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Supplier Risks</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {supplyChainRisk.supplier_risks.map((supplier, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{supplier.supplier}</span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(supplier.risk_level)}`}>
                      {supplier.risk_level}
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Factors: </span>
                    <span className="text-yellow-400">{supplier.risk_factors.join(', ')}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Mitigation: </span>
                    <span className="text-blue-400">{supplier.mitigation_plan.replace(/_/g, ' ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Contingency Status</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Alternative Routes:</span>
                <span className={`${getStatusColor(supplyChainRisk.contingency_plans.alternative_routes).split(' ')[0]}`}>
                  {supplyChainRisk.contingency_plans.alternative_routes}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Backup Suppliers:</span>
                <span className={`${getStatusColor(supplyChainRisk.contingency_plans.backup_suppliers).split(' ')[0]}`}>
                  {supplyChainRisk.contingency_plans.backup_suppliers}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Emergency Inventory:</span>
                <span className={`${getStatusColor(supplyChainRisk.contingency_plans.emergency_inventory).split(' ')[0]}`}>
                  {supplyChainRisk.contingency_plans.emergency_inventory}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsOperationsCenter;