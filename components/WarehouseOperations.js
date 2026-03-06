// WarehouseOperations.js - Warehouse Operations Center & Distribution Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WarehouseOperations = () => {
  const [warehouseStatus, setWarehouseStatus] = useState({
    operationalStatus: 'OPTIMAL',
    totalSKUs: 45732,
    activeSKUs: 44891,
    inventoryValue: 8947230, // USD
    inventoryAccuracy: 99.7, // percentage
    ordersFulfilled: 2847, // today
    ordersInProgress: 456,
    ordersPending: 234,
    pickingAccuracy: 99.2,
    shippingAccuracy: 98.9,
    averagePickTime: 4.2, // minutes per order
    warehouseUtilization: 87.4, // percentage
    lastInventoryCount: Date.now() - 24 * 60 * 60 * 1000,
    lastUpdate: Date.now()
  });

  const [zones, setZones] = useState([
    {
      id: 'receiving_dock_a',
      name: 'Receiving Dock A',
      type: 'RECEIVING',
      status: 'ACTIVE',
      current_activity: 'UNLOADING',
      truck_assignments: 3,
      truck_capacity: 6,
      pallets_received_today: 187,
      pending_putaway: 23,
      staff_assigned: 8,
      equipment_status: 'ALL_OPERATIONAL',
      safety_incidents: 0,
      productivity_rate: 94.2, // percentage of target
      last_truck_arrival: Date.now() - 45 * 60 * 1000,
      next_truck_eta: Date.now() + 90 * 60 * 1000
    },
    {
      id: 'storage_zone_1',
      name: 'Storage Zone 1 - Fast Movers',
      type: 'STORAGE',
      status: 'OPTIMAL',
      current_activity: 'PUTAWAY_PICKING',
      storage_utilization: 92.3, // percentage
      total_locations: 8450,
      occupied_locations: 7798,
      available_locations: 652,
      putaway_queue: 156,
      pick_queue: 89,
      staff_assigned: 12,
      equipment_status: 'ALL_OPERATIONAL',
      cycle_count_due: 23, // locations
      last_cycle_count: Date.now() - 7 * 24 * 60 * 60 * 1000,
      replenishment_required: 45 // SKUs
    },
    {
      id: 'storage_zone_2',
      name: 'Storage Zone 2 - Bulk Items',
      type: 'STORAGE',
      status: 'MAINTENANCE',
      current_activity: 'RACK_MAINTENANCE',
      storage_utilization: 78.9,
      total_locations: 2340,
      occupied_locations: 1846,
      available_locations: 494,
      maintenance_type: 'RACK_INSPECTION',
      eta_completion: Date.now() + 4 * 60 * 60 * 1000,
      maintenance_crew: 4,
      affected_locations: 156,
      safety_isolation: true
    },
    {
      id: 'picking_zone_express',
      name: 'Express Picking Zone',
      type: 'PICKING',
      status: 'HIGH_ACTIVITY',
      current_activity: 'ORDER_PICKING',
      orders_assigned: 234,
      orders_completed: 178,
      orders_in_progress: 56,
      pick_rate: 156, // picks per hour
      target_pick_rate: 180,
      staff_assigned: 15,
      equipment_status: 'RF_SCANNER_MAINTENANCE',
      pick_accuracy: 99.7,
      average_pick_time: 2.8, // minutes per order
      priority_orders: 23
    },
    {
      id: 'packing_station_alpha',
      name: 'Packing Station Alpha',
      type: 'PACKING',
      status: 'ACTIVE',
      current_activity: 'ORDER_PACKING',
      orders_packed_today: 891,
      orders_in_queue: 67,
      packing_rate: 45, // orders per hour
      target_packing_rate: 50,
      staff_assigned: 6,
      equipment_status: 'ALL_OPERATIONAL',
      packing_accuracy: 99.1,
      shipping_damage_rate: 0.3, // percentage
      packaging_supplies: 'ADEQUATE'
    },
    {
      id: 'shipping_dock_central',
      name: 'Shipping Dock Central',
      type: 'SHIPPING',
      status: 'ACTIVE',
      current_activity: 'LOADING',
      trucks_scheduled: 8,
      trucks_loaded: 5,
      trucks_loading: 2,
      trucks_waiting: 1,
      orders_shipped_today: 1823,
      pending_shipments: 178,
      staff_assigned: 10,
      equipment_status: 'ALL_OPERATIONAL',
      on_time_departure: 96.8, // percentage
      dock_utilization: 87.5
    }
  ]);

  const [inventoryMovements, setInventoryMovements] = useState([
    {
      id: 'INV_001',
      sku: 'ELEC-LAPTOP-DEL-001',
      product_name: 'Dell Inspiron 15 3000',
      category: 'Electronics',
      movement_type: 'RECEIPT',
      quantity: 50,
      location: 'A-12-B-03',
      timestamp: Date.now() - 2 * 60 * 60 * 1000,
      reference_number: 'PO-2026-001847',
      operator: 'Rodriguez, M.',
      current_stock: 127,
      min_stock: 25,
      max_stock: 200,
      value_per_unit: 450.00,
      supplier: 'Dell Technologies',
      expiry_date: null,
      lot_number: 'DT240305A'
    },
    {
      id: 'INV_002',
      sku: 'HOME-CHAIR-ERG-002',
      product_name: 'Ergonomic Office Chair Pro',
      category: 'Furniture',
      movement_type: 'PICK',
      quantity: -3,
      location: 'B-08-A-14',
      timestamp: Date.now() - 1 * 60 * 60 * 1000,
      reference_number: 'SO-2026-004523',
      operator: 'Johnson, L.',
      current_stock: 42,
      min_stock: 15,
      max_stock: 75,
      value_per_unit: 289.99,
      supplier: 'Office Furniture Plus',
      expiry_date: null,
      lot_number: null
    },
    {
      id: 'INV_003',
      sku: 'FOOD-SNACK-ORG-003',
      product_name: 'Organic Trail Mix 12oz',
      category: 'Food & Beverages',
      movement_type: 'ADJUSTMENT',
      quantity: -2,
      location: 'C-15-C-07',
      timestamp: Date.now() - 45 * 60 * 1000,
      reference_number: 'ADJ-2026-000234',
      operator: 'Chen, W.',
      reason: 'DAMAGED_PACKAGING',
      current_stock: 234,
      min_stock: 50,
      max_stock: 500,
      value_per_unit: 8.99,
      supplier: 'Healthy Snacks Co',
      expiry_date: Date.now() + 180 * 24 * 60 * 60 * 1000,
      lot_number: 'HSC240301B'
    },
    {
      id: 'INV_004',
      sku: 'CLOTH-SHIRT-COT-004',
      product_name: 'Cotton T-Shirt Blue Medium',
      category: 'Clothing',
      movement_type: 'TRANSFER',
      quantity: 25,
      from_location: 'D-05-B-12',
      to_location: 'A-03-A-08',
      timestamp: Date.now() - 30 * 60 * 1000,
      reference_number: 'TRF-2026-000891',
      operator: 'Garcia, S.',
      current_stock: 89,
      min_stock: 20,
      max_stock: 150,
      value_per_unit: 24.99,
      supplier: 'Cotton Basics Ltd',
      expiry_date: null,
      lot_number: null
    }
  ]);

  const [automatationSystems, setAutomationSystems] = useState([
    {
      id: 'AGV_001',
      type: 'AUTONOMOUS_GUIDED_VEHICLE',
      name: 'AGV Alpha-7',
      status: 'ACTIVE',
      current_task: 'PALLET_TRANSPORT',
      battery_level: 87,
      location: 'Transit from A-12 to B-08',
      payload: 'Pallet ID: PLT-2847',
      tasks_completed_today: 23,
      operational_hours: 14.5,
      next_maintenance: Date.now() + 72 * 60 * 60 * 1000,
      efficiency_rating: 94.2 // percentage
    },
    {
      id: 'ROBOT_001',
      type: 'PICKING_ROBOT',
      name: 'PickBot Delta-3',
      status: 'ACTIVE',
      current_task: 'ITEM_PICKING',
      pick_location: 'C-07-B-15',
      items_picked_today: 1847,
      pick_accuracy: 99.8,
      operational_hours: 16.2,
      next_maintenance: Date.now() + 168 * 60 * 60 * 1000,
      efficiency_rating: 97.6
    },
    {
      id: 'CONVEYOR_001',
      type: 'CONVEYOR_SYSTEM',
      name: 'Main Conveyor Line 1',
      status: 'OPERATIONAL',
      current_throughput: 234, // items per hour
      target_throughput: 300,
      total_items_today: 8947,
      operational_hours: 18.0,
      motor_temperature: 42, // celsius
      belt_condition: 'GOOD',
      last_jam: Date.now() - 8 * 60 * 60 * 1000,
      efficiency_rating: 92.1
    },
    {
      id: 'SORTER_001',
      type: 'AUTOMATED_SORTER',
      name: 'High-Speed Package Sorter',
      status: 'MAINTENANCE',
      maintenance_type: 'SENSOR_CALIBRATION',
      eta_completion: Date.now() + 2 * 60 * 60 * 1000,
      items_sorted_today: 12456,
      sort_accuracy: 99.4,
      technician: 'Maintenance Team Beta',
      last_error: 'SENSOR_ALIGNMENT_DRIFT'
    },
    {
      id: 'AS_RS_001',
      type: 'AUTOMATED_STORAGE_RETRIEVAL',
      name: 'AS/RS Tower 1',
      status: 'ACTIVE',
      current_operation: 'RETRIEVAL',
      storage_utilization: 94.6,
      retrievals_today: 456,
      putaways_today: 234,
      operational_hours: 22.0,
      crane_position: 'Row 12, Level 8',
      efficiency_rating: 96.8
    }
  ]);

  const [orderFulfillment, setOrderFulfillment] = useState([
    {
      id: 'ORD_001',
      order_number: 'WO-2026-008947',
      customer: 'TechCorp Solutions',
      priority: 'STANDARD',
      status: 'PICKING',
      order_value: 2847.50,
      items_count: 15,
      items_picked: 12,
      items_pending: 3,
      picker_assigned: 'Johnson, L.',
      estimated_completion: Date.now() + 45 * 60 * 1000,
      order_date: Date.now() - 4 * 60 * 60 * 1000,
      promised_ship_date: Date.now() + 2 * 24 * 60 * 60 * 1000,
      shipping_method: 'STANDARD_GROUND',
      pick_location: 'A-07-B-12'
    },
    {
      id: 'ORD_002',
      order_number: 'WO-2026-008948',
      customer: 'Global Retail Inc',
      priority: 'EXPEDITED',
      status: 'PACKING',
      order_value: 1234.99,
      items_count: 8,
      items_picked: 8,
      items_packed: 6,
      items_pending: 2,
      packer_assigned: 'Rodriguez, M.',
      estimated_completion: Date.now() + 20 * 60 * 1000,
      order_date: Date.now() - 6 * 60 * 60 * 1000,
      promised_ship_date: Date.now() + 24 * 60 * 60 * 1000,
      shipping_method: 'EXPRESS_OVERNIGHT',
      packing_station: 'Pack-Alpha-03'
    },
    {
      id: 'ORD_003',
      order_number: 'WO-2026-008949',
      customer: 'Healthcare Supplies Co',
      priority: 'URGENT',
      status: 'SHIPPING',
      order_value: 4567.23,
      items_count: 25,
      items_picked: 25,
      items_packed: 25,
      truck_assigned: 'TRUCK-007',
      shipper_assigned: 'Garcia, S.',
      estimated_departure: Date.now() + 15 * 60 * 1000,
      order_date: Date.now() - 8 * 60 * 60 * 1000,
      promised_ship_date: Date.now() + 12 * 60 * 60 * 1000,
      shipping_method: 'SAME_DAY_DELIVERY',
      dock_location: 'Dock-C-05'
    },
    {
      id: 'ORD_004',
      order_number: 'WO-2026-008950',
      customer: 'Small Business Outlet',
      priority: 'STANDARD',
      status: 'ON_HOLD',
      hold_reason: 'INVENTORY_SHORTAGE',
      order_value: 892.45,
      items_count: 6,
      items_available: 4,
      items_backordered: 2,
      eta_stock_replenishment: Date.now() + 48 * 60 * 60 * 1000,
      order_date: Date.now() - 12 * 60 * 60 * 1000,
      promised_ship_date: Date.now() + 3 * 24 * 60 * 60 * 1000,
      shipping_method: 'STANDARD_GROUND'
    }
  ]);

  const [qualityMetrics, setQualityMetrics] = useState({
    inventory_accuracy: {
      current: 99.7,
      target: 99.5,
      last_cycle_count: 99.8,
      variance_percentage: 0.1,
      discrepancies_found: 23,
      discrepancies_resolved: 20
    },
    order_accuracy: {
      picking_accuracy: 99.2,
      packing_accuracy: 99.1,
      shipping_accuracy: 98.9,
      customer_complaints: 12, // this month
      returns_due_to_error: 8,
      error_types: {
        wrong_item: 5,
        wrong_quantity: 3,
        damaged_goods: 4
      }
    },
    productivity_metrics: {
      picks_per_hour: 156,
      target_picks_per_hour: 180,
      packs_per_hour: 45,
      target_packs_per_hour: 50,
      dock_utilization: 87.5,
      equipment_utilization: 92.3,
      labor_efficiency: 89.7
    },
    safety_metrics: {
      incidents_this_month: 2,
      near_misses: 8,
      safety_training_compliance: 98.4, // percentage
      ppe_compliance: 99.2,
      equipment_safety_checks: 'CURRENT',
      emergency_drills_completed: 6 // this quarter
    }
  });

  const [operationsHistory, setOperationsHistory] = useState([]);

  const generateOperationsHistory = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const hour = new Date();
      hour.setHours(hour.getHours() - i);
      
      data.push({
        time: hour.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        orders_fulfilled: Math.floor(80 + Math.random() * 60),
        picking_rate: Math.floor(140 + Math.random() * 50),
        packing_rate: Math.floor(35 + Math.random() * 20),
        inventory_movements: Math.floor(200 + Math.random() * 150),
        warehouse_utilization: 80 + Math.random() * 15,
        order_accuracy: 98 + Math.random() * 2
      });
    }
    return data;
  };

  useEffect(() => {
    setOperationsHistory(generateOperationsHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update warehouse status
      setWarehouseStatus(prev => ({
        ...prev,
        ordersFulfilled: prev.ordersFulfilled + Math.floor(Math.random() * 5),
        ordersInProgress: Math.max(400, Math.min(500, prev.ordersInProgress + Math.floor((Math.random() - 0.5) * 10))),
        averagePickTime: Math.max(3.5, Math.min(5.0, prev.averagePickTime + (Math.random() - 0.5) * 0.2)),
        warehouseUtilization: Math.max(85.0, Math.min(95.0, prev.warehouseUtilization + (Math.random() - 0.5) * 1.0)),
        lastUpdate: Date.now()
      }));

      // Update automation systems
      setAutomationSystems(prev => prev.map(system => {
        if (system.type === 'AUTONOMOUS_GUIDED_VEHICLE') {
          return {
            ...system,
            battery_level: Math.max(20, Math.min(100, system.battery_level + (Math.random() - 0.6) * 5)),
            tasks_completed_today: system.tasks_completed_today + (Math.random() < 0.3 ? 1 : 0)
          };
        }
        return system;
      }));

    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPTIMAL':
      case 'ACTIVE':
      case 'OPERATIONAL':
      case 'GOOD':
      case 'CURRENT':
      case 'PICKING':
      case 'PACKING':
      case 'SHIPPING': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'HIGH_ACTIVITY':
      case 'EXPEDITED':
      case 'STANDARD': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'MAINTENANCE':
      case 'ON_HOLD':
      case 'URGENT': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'DOWN':
      case 'ERROR':
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'URGENT': return 'text-red-400';
      case 'EXPEDITED': return 'text-orange-400';
      case 'STANDARD': return 'text-green-400';
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
      currency: 'USD'
    }).format(amount);
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    const diff = timestamp - Date.now();
    if (Math.abs(diff) < 60000) return 'now';
    if (diff > 0) {
      if (diff < 3600000) return `in ${Math.floor(diff / 60000)}min`;
      return `in ${Math.floor(diff / 3600000)}h ${Math.floor((diff % 3600000) / 60000)}min`;
    } else {
      const absDiff = Math.abs(diff);
      if (absDiff < 3600000) return `${Math.floor(absDiff / 60000)}m ago`;
      return `${Math.floor(absDiff / 3600000)}h ago`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          📦 WAREHOUSE OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {formatNumber(warehouseStatus.inventoryAccuracy, 1)}% Accuracy
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {warehouseStatus.ordersFulfilled} Orders
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatNumber(warehouseStatus.averagePickTime, 1)}min Pick
          </div>
          <div className="text-sm text-gray-400 font-mono">
            WMS & Automation Systems
          </div>
        </div>
      </div>

      {/* Warehouse Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">INVENTORY VALUE</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatLargeNumber(warehouseStatus.inventoryValue)}
              </div>
              <div className="text-xs text-blue-300">
                USD Total Value
              </div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">ORDERS FULFILLED</div>
              <div className="text-2xl font-bold text-green-100">
                {warehouseStatus.ordersFulfilled}
              </div>
              <div className="text-xs text-green-300">
                Orders Today
              </div>
            </div>
            <div className="text-3xl opacity-60">📋</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">PICKING ACCURACY</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(warehouseStatus.pickingAccuracy, 1)}%
              </div>
              <div className="text-xs text-purple-300">
                Quality Rate
              </div>
            </div>
            <div className="text-3xl opacity-60">🎯</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">UTILIZATION</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(warehouseStatus.warehouseUtilization, 1)}%
              </div>
              <div className="text-xs text-orange-300">
                Warehouse Capacity
              </div>
            </div>
            <div className="text-3xl opacity-60">🏭</div>
          </div>
        </div>
      </div>

      {/* Zone Operations */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🏭 ZONE OPERATIONS & WORKFLOW MANAGEMENT
        </h3>
        <div className="space-y-3">
          {zones.map((zone) => (
            <div key={zone.id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{zone.name}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(zone.status)}`}>
                    {zone.status.replace(/_/g, ' ')}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {zone.type.replace(/_/g, ' ')}
                  </span>
                  {zone.safety_incidents === 0 && (
                    <span className="text-xs px-2 py-1 rounded bg-green-500 text-white">
                      ZERO INCIDENTS
                    </span>
                  )}
                </div>
              </div>

              <div className="text-xs mb-3">
                <span className="text-gray-400">Activity: </span>
                <span className="text-cyan-400">{zone.current_activity?.replace(/_/g, ' ')}</span>
                <span className="text-gray-400"> | Staff: </span>
                <span className="text-green-400">{zone.staff_assigned}</span>
                <span className="text-gray-400"> | Equipment: </span>
                <span className={zone.equipment_status === 'ALL_OPERATIONAL' ? 'text-green-400' : 'text-yellow-400'}>
                  {zone.equipment_status.replace(/_/g, ' ')}
                </span>
              </div>

              {zone.type === 'RECEIVING' && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Trucks: </span>
                  <span className="text-purple-400">{zone.truck_assignments}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-400">{zone.truck_capacity}</span>
                  <span className="text-gray-400"> | Pallets Received: </span>
                  <span className="text-orange-400">{zone.pallets_received_today}</span>
                  <span className="text-gray-400"> | Pending Putaway: </span>
                  <span className="text-yellow-400">{zone.pending_putaway}</span>
                </div>
              )}

              {zone.type === 'STORAGE' && !zone.maintenance_type && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Utilization: </span>
                  <span className="text-purple-400">{formatNumber(zone.storage_utilization, 1)}%</span>
                  <span className="text-gray-400"> | Locations: </span>
                  <span className="text-green-400">{zone.occupied_locations}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-400">{zone.total_locations}</span>
                  <span className="text-gray-400"> | Available: </span>
                  <span className="text-orange-400">{zone.available_locations}</span>
                </div>
              )}

              {zone.type === 'STORAGE' && zone.maintenance_type && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Maintenance: </span>
                  <span className="text-orange-400">{zone.maintenance_type.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | ETA: </span>
                  <span className="text-yellow-400">{formatTime(zone.eta_completion)}</span>
                  <span className="text-gray-400"> | Crew: </span>
                  <span className="text-blue-400">{zone.maintenance_crew}</span>
                </div>
              )}

              {zone.type === 'PICKING' && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Orders: </span>
                  <span className="text-green-400">{zone.orders_completed}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-400">{zone.orders_assigned}</span>
                  <span className="text-gray-400"> | Rate: </span>
                  <span className="text-purple-400">{zone.pick_rate}</span>
                  <span className="text-gray-400"> (target {zone.target_pick_rate})/hr</span>
                  <span className="text-gray-400"> | Accuracy: </span>
                  <span className="text-cyan-400">{formatNumber(zone.pick_accuracy, 1)}%</span>
                </div>
              )}

              {zone.type === 'PACKING' && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Packed Today: </span>
                  <span className="text-green-400">{zone.orders_packed_today}</span>
                  <span className="text-gray-400"> | Queue: </span>
                  <span className="text-yellow-400">{zone.orders_in_queue}</span>
                  <span className="text-gray-400"> | Rate: </span>
                  <span className="text-purple-400">{zone.packing_rate}</span>
                  <span className="text-gray-400"> (target {zone.target_packing_rate})/hr</span>
                </div>
              )}

              {zone.type === 'SHIPPING' && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Trucks: </span>
                  <span className="text-green-400">{zone.trucks_loaded} loaded</span>
                  <span className="text-gray-400">, </span>
                  <span className="text-blue-400">{zone.trucks_loading} loading</span>
                  <span className="text-gray-400">, </span>
                  <span className="text-yellow-400">{zone.trucks_waiting} waiting</span>
                  <span className="text-gray-400"> | Shipped: </span>
                  <span className="text-purple-400">{zone.orders_shipped_today}</span>
                </div>
              )}

              {zone.productivity_rate && (
                <div className="text-xs">
                  <span className="text-gray-400">Productivity: </span>
                  <span className={zone.productivity_rate >= 90 ? 'text-green-400' : 
                                   zone.productivity_rate >= 80 ? 'text-yellow-400' : 'text-orange-400'}>
                    {formatNumber(zone.productivity_rate, 1)}%
                  </span>
                  <span className="text-gray-400"> of target</span>
                  {zone.next_truck_eta && (
                    <>
                      <span className="text-gray-400"> | Next Truck: </span>
                      <span className="text-cyan-400">{formatTime(zone.next_truck_eta)}</span>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Automation Systems and Order Fulfillment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Automation Systems */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🤖 AUTOMATION SYSTEMS & ROBOTICS
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {automatationSystems.map((system) => (
              <div key={system.id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">{system.name}</span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(system.status)}`}>
                      {system.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {system.type.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>

                {system.current_task && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Task: </span>
                    <span className="text-cyan-400">{system.current_task.replace(/_/g, ' ')}</span>
                    {system.location && (
                      <>
                        <span className="text-gray-400"> | Location: </span>
                        <span className="text-green-400">{system.location}</span>
                      </>
                    )}
                  </div>
                )}

                {system.battery_level && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Battery: </span>
                    <span className={system.battery_level > 50 ? 'text-green-400' : 
                                     system.battery_level > 25 ? 'text-yellow-400' : 'text-red-400'}>
                      {system.battery_level}%
                    </span>
                    {system.payload && (
                      <>
                        <span className="text-gray-400"> | Payload: </span>
                        <span className="text-purple-400">{system.payload}</span>
                      </>
                    )}
                  </div>
                )}

                {system.items_picked_today && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Picked Today: </span>
                    <span className="text-blue-400">{system.items_picked_today}</span>
                    <span className="text-gray-400"> | Accuracy: </span>
                    <span className="text-green-400">{formatNumber(system.pick_accuracy, 1)}%</span>
                  </div>
                )}

                {system.current_throughput && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Throughput: </span>
                    <span className="text-purple-400">{system.current_throughput}</span>
                    <span className="text-gray-400">/{system.target_throughput}/hr</span>
                    <span className="text-gray-400"> | Today: </span>
                    <span className="text-orange-400">{formatLargeNumber(system.total_items_today)}</span>
                  </div>
                )}

                {system.maintenance_type && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Maintenance: </span>
                    <span className="text-orange-400">{system.maintenance_type.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | ETA: </span>
                    <span className="text-yellow-400">{formatTime(system.eta_completion)}</span>
                  </div>
                )}

                <div className="text-xs">
                  <span className="text-gray-400">Efficiency: </span>
                  <span className={system.efficiency_rating >= 95 ? 'text-green-400' : 
                                   system.efficiency_rating >= 90 ? 'text-yellow-400' : 'text-orange-400'}>
                    {formatNumber(system.efficiency_rating, 1)}%
                  </span>
                  <span className="text-gray-400"> | Hours: </span>
                  <span className="text-cyan-400">{formatNumber(system.operational_hours, 1)}h</span>
                  {system.next_maintenance && !system.maintenance_type && (
                    <>
                      <span className="text-gray-400"> | Next Service: </span>
                      <span className="text-blue-400">{formatTime(system.next_maintenance)}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Fulfillment */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📋 ORDER FULFILLMENT & PROCESSING
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {orderFulfillment.map((order) => (
              <div key={order.id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">{order.order_number}</span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(order.status)}`}>
                      {order.status.replace(/_/g, ' ')}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono ${getPriorityColor(order.priority)}`}>
                      {order.priority}
                    </span>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Customer: </span>
                  <span className="text-cyan-400">{order.customer}</span>
                  <span className="text-gray-400"> | Value: </span>
                  <span className="text-green-400">{formatCurrency(order.order_value)}</span>
                  <span className="text-gray-400"> | Items: </span>
                  <span className="text-purple-400">{order.items_count}</span>
                </div>

                {order.status === 'PICKING' && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Progress: </span>
                    <span className="text-green-400">{order.items_picked}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-blue-400">{order.items_count}</span>
                    <span className="text-gray-400"> | Picker: </span>
                    <span className="text-cyan-400">{order.picker_assigned}</span>
                    <span className="text-gray-400"> | ETA: </span>
                    <span className="text-orange-400">{formatTime(order.estimated_completion)}</span>
                  </div>
                )}

                {order.status === 'PACKING' && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Packed: </span>
                    <span className="text-green-400">{order.items_packed}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-blue-400">{order.items_count}</span>
                    <span className="text-gray-400"> | Packer: </span>
                    <span className="text-cyan-400">{order.packer_assigned}</span>
                    <span className="text-gray-400"> | Station: </span>
                    <span className="text-purple-400">{order.packing_station}</span>
                  </div>
                )}

                {order.status === 'SHIPPING' && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Truck: </span>
                    <span className="text-green-400">{order.truck_assigned}</span>
                    <span className="text-gray-400"> | Shipper: </span>
                    <span className="text-cyan-400">{order.shipper_assigned}</span>
                    <span className="text-gray-400"> | Departure: </span>
                    <span className="text-orange-400">{formatTime(order.estimated_departure)}</span>
                  </div>
                )}

                {order.status === 'ON_HOLD' && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Hold Reason: </span>
                    <span className="text-red-400">{order.hold_reason.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | Available: </span>
                    <span className="text-green-400">{order.items_available}</span>
                    <span className="text-gray-400"> | Backordered: </span>
                    <span className="text-yellow-400">{order.items_backordered}</span>
                  </div>
                )}

                <div className="text-xs">
                  <span className="text-gray-400">Shipping: </span>
                  <span className="text-blue-400">{order.shipping_method.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | Promise: </span>
                  <span className="text-cyan-400">{formatTime(order.promised_ship_date)}</span>
                  <span className="text-gray-400"> | Age: </span>
                  <span className="text-purple-400">{formatTime(order.order_date)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Warehouse Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 WAREHOUSE OPERATIONS TRENDS (24 HOURS)
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
              dataKey="orders_fulfilled"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Orders Fulfilled/hr"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="picking_rate" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Picking Rate/hr"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="packing_rate" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Packing Rate/hr"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="inventory_movements" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Inventory Moves/hr"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="warehouse_utilization" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Warehouse Utilization %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="order_accuracy" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Order Accuracy %"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Quality Metrics and Performance KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 WAREHOUSE PERFORMANCE KPIs & QUALITY METRICS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Inventory Accuracy</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(qualityMetrics.inventory_accuracy.current, 1)}%
            </div>
            <div className="text-green-400 text-xs">vs {qualityMetrics.inventory_accuracy.target}% target</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Pick Accuracy</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(qualityMetrics.order_accuracy.picking_accuracy, 1)}%
            </div>
            <div className="text-blue-400 text-xs">order accuracy</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Labor Efficiency</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(qualityMetrics.productivity_metrics.labor_efficiency, 1)}%
            </div>
            <div className="text-purple-400 text-xs">productivity rate</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Pick Rate</div>
            <div className="text-white font-bold text-lg">
              {qualityMetrics.productivity_metrics.picks_per_hour}
            </div>
            <div className="text-orange-400 text-xs">vs {qualityMetrics.productivity_metrics.target_picks_per_hour} target</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Safety Incidents</div>
            <div className="text-white font-bold text-lg">
              {qualityMetrics.safety_metrics.incidents_this_month}
            </div>
            <div className="text-cyan-400 text-xs">this month</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Utilization</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(warehouseStatus.warehouseUtilization, 1)}%
            </div>
            <div className="text-yellow-400 text-xs">warehouse capacity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseOperations;