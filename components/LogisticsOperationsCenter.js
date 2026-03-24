import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Truck, Package, MapPin, Clock, TrendingUp, AlertTriangle, CheckCircle, Zap, Activity, Eye, Navigation } from 'lucide-react';

const LogisticsOperationsCenter = () => {
  const [logisticsStatus, setLogisticsStatus] = useState({
    totalShipments: 8247,
    inTransit: 2847,
    delivered: 5234,
    delayed: 166,
    onTimeDelivery: 94.8,
    warehouseUtilization: 87.3,
    fleetUtilization: 89.6,
    avgDeliveryTime: 2.4 // days
  });

  const [warehouseOperations, setWarehouseOperations] = useState([
    {
      id: 'WH-001',
      name: 'Distribution Center East',
      location: 'New York, NY',
      status: 'operational',
      capacity: 50000,
      currentStock: 43567,
      utilization: 87.1,
      inbound: 234,
      outbound: 456,
      picking: 89,
      packing: 67,
      staff: 45,
      roboticSystems: 12,
      temperature: 22.5
    },
    {
      id: 'WH-002',
      name: 'Distribution Center West',
      location: 'Los Angeles, CA',
      status: 'operational',
      capacity: 45000,
      currentStock: 38923,
      utilization: 86.5,
      inbound: 189,
      outbound: 378,
      picking: 74,
      packing: 52,
      staff: 38,
      roboticSystems: 10,
      temperature: 21.8
    },
    {
      id: 'WH-003',
      name: 'Distribution Center Central',
      location: 'Chicago, IL',
      status: 'operational',
      capacity: 40000,
      currentStock: 35612,
      utilization: 89.0,
      inbound: 167,
      outbound: 323,
      picking: 68,
      packing: 49,
      staff: 34,
      roboticSystems: 8,
      temperature: 22.1
    },
    {
      id: 'WH-004',
      name: 'Distribution Center South',
      location: 'Atlanta, GA',
      status: 'maintenance',
      capacity: 35000,
      currentStock: 28457,
      utilization: 81.3,
      inbound: 98,
      outbound: 156,
      picking: 32,
      packing: 24,
      staff: 28,
      roboticSystems: 6,
      temperature: 23.2
    },
    {
      id: 'WH-005',
      name: 'Distribution Center North',
      location: 'Minneapolis, MN',
      status: 'operational',
      capacity: 30000,
      currentStock: 26789,
      utilization: 89.3,
      inbound: 143,
      outbound: 267,
      picking: 58,
      packing: 42,
      staff: 29,
      roboticSystems: 7,
      temperature: 20.9
    }
  ]);

  const [fleetTracking, setFleetTracking] = useState([
    {
      id: 'TRK-1001',
      driver: 'Michael Johnson',
      route: 'NYC → Boston',
      status: 'in-transit',
      location: 'Hartford, CT',
      progress: 78,
      eta: '14:30',
      cargo: 'Electronics',
      weight: 8500, // kg
      fuelLevel: 67,
      speed: 65, // mph
      mileage: 287
    },
    {
      id: 'TRK-1002',
      driver: 'Sarah Williams',
      route: 'LA → San Francisco',
      status: 'loading',
      location: 'Los Angeles, CA',
      progress: 5,
      eta: '18:45',
      cargo: 'Fashion Items',
      weight: 12000,
      fuelLevel: 95,
      speed: 0,
      mileage: 0
    },
    {
      id: 'TRK-1003',
      driver: 'Robert Chen',
      route: 'Chicago → Detroit',
      status: 'delivered',
      location: 'Detroit, MI',
      progress: 100,
      eta: 'Completed',
      cargo: 'Automotive Parts',
      weight: 9800,
      fuelLevel: 42,
      speed: 0,
      mileage: 284
    },
    {
      id: 'TRK-1004',
      driver: 'Amanda Rodriguez',
      route: 'Atlanta → Miami',
      status: 'in-transit',
      location: 'Gainesville, FL',
      progress: 65,
      eta: '16:15',
      cargo: 'Medical Supplies',
      weight: 6700,
      fuelLevel: 58,
      speed: 72,
      mileage: 298
    },
    {
      id: 'TRK-1005',
      driver: 'David Thompson',
      route: 'Minneapolis → Denver',
      status: 'delayed',
      location: 'Omaha, NE',
      progress: 45,
      eta: '19:30',
      cargo: 'Food Products',
      weight: 11200,
      fuelLevel: 34,
      speed: 0,
      mileage: 367
    }
  ]);

  const [supplyChainMetrics, setSupplyChainMetrics] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      shipments: 8234,
      onTime: 94.2,
      warehouse: 86.8,
      fleet: 88.9
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      shipments: 8241,
      onTime: 94.5,
      warehouse: 87.1,
      fleet: 89.2
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      shipments: 8245,
      onTime: 94.7,
      warehouse: 87.0,
      fleet: 89.4
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      shipments: 8246,
      onTime: 94.6,
      warehouse: 87.2,
      fleet: 89.3
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      shipments: 8247,
      onTime: 94.8,
      warehouse: 87.3,
      fleet: 89.6
    },
    {
      time: new Date().toLocaleTimeString(),
      shipments: 8247,
      onTime: 94.8,
      warehouse: 87.3,
      fleet: 89.6
    }
  ]);

  const [logisticsAlerts, setLogisticsAlerts] = useState([
    {
      id: 'LOG-001',
      severity: 'warning',
      type: 'Delivery Delay',
      message: 'TRK-1005 experiencing traffic delays - ETA extended by 2 hours',
      timestamp: new Date(),
      status: 'active',
      location: 'Omaha, NE',
      impact: 'medium'
    },
    {
      id: 'LOG-002',
      severity: 'caution',
      type: 'Warehouse Capacity',
      message: 'Distribution Center North approaching 90% capacity - consider redistribution',
      timestamp: new Date(Date.now() - 180000),
      status: 'monitoring',
      location: 'Minneapolis, MN',
      impact: 'low'
    },
    {
      id: 'LOG-003',
      severity: 'info',
      type: 'Maintenance Complete',
      message: 'Distribution Center South maintenance window completed successfully',
      timestamp: new Date(Date.now() - 360000),
      status: 'resolved',
      location: 'Atlanta, GA',
      impact: 'none'
    }
  ]);

  const [inventoryLevels, setInventoryLevels] = useState([
    {
      category: 'Electronics',
      current: 12450,
      target: 15000,
      status: 'low',
      value: 2.4, // million USD
      turnover: 8.2
    },
    {
      category: 'Fashion',
      current: 8967,
      target: 9000,
      status: 'optimal',
      value: 1.8,
      turnover: 12.1
    },
    {
      category: 'Automotive',
      current: 6234,
      target: 6000,
      status: 'high',
      value: 3.2,
      turnover: 6.7
    },
    {
      category: 'Medical',
      current: 4567,
      target: 4500,
      status: 'optimal',
      value: 1.9,
      turnover: 15.3
    },
    {
      category: 'Food',
      current: 7890,
      target: 8000,
      status: 'optimal',
      value: 1.1,
      turnover: 24.6
    }
  ]);

  const [deliveryZones, setDeliveryZones] = useState([
    {
      zone: 'Northeast',
      orders: 1847,
      delivered: 1756,
      inTransit: 67,
      delayed: 24,
      performance: 95.1
    },
    {
      zone: 'West Coast',
      orders: 1634,
      delivered: 1542,
      inTransit: 78,
      delayed: 14,
      performance: 94.3
    },
    {
      zone: 'Midwest',
      orders: 1456,
      delivered: 1378,
      inTransit: 65,
      delayed: 13,
      performance: 94.6
    },
    {
      zone: 'Southeast',
      orders: 1298,
      delivered: 1201,
      inTransit: 89,
      delayed: 8,
      performance: 92.5
    },
    {
      zone: 'Southwest',
      orders: 1123,
      delivered: 1067,
      inTransit: 48,
      delayed: 8,
      performance: 95.0
    }
  ]);

  const [logisticsTeam, setLogisticsTeam] = useState([
    {
      name: 'Operations Manager Chen',
      position: 'Logistics Operations Manager',
      shift: 'Day Shift',
      status: 'on-duty',
      location: 'Control Center',
      experience: '12 years'
    },
    {
      name: 'Fleet Coordinator Williams',
      position: 'Fleet Operations Coordinator',
      shift: 'Day Shift',
      status: 'on-duty',
      location: 'Dispatch Center',
      experience: '8 years'
    },
    {
      name: 'Warehouse Supervisor Johnson',
      position: 'Warehouse Operations Supervisor',
      shift: 'Day Shift',
      status: 'on-floor',
      location: 'Distribution Center East',
      experience: '10 years'
    },
    {
      name: 'Supply Chain Analyst Rodriguez',
      position: 'Supply Chain Analyst',
      shift: 'Day Shift',
      status: 'analyzing',
      location: 'Analytics Center',
      experience: '6 years'
    }
  ]);

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update logistics status
      setLogisticsStatus(prev => ({
        ...prev,
        inTransit: Math.max(2500, Math.min(3200, prev.inTransit + Math.floor((Math.random() - 0.5) * 20))),
        delivered: Math.max(5000, Math.min(5500, prev.delivered + Math.floor(Math.random() * 10))),
        delayed: Math.max(100, Math.min(300, prev.delayed + Math.floor((Math.random() - 0.7) * 5))),
        onTimeDelivery: Math.max(92, Math.min(97, prev.onTimeDelivery + (Math.random() - 0.5) * 0.5)),
        warehouseUtilization: Math.max(82, Math.min(92, prev.warehouseUtilization + (Math.random() - 0.5) * 1)),
        fleetUtilization: Math.max(85, Math.min(95, prev.fleetUtilization + (Math.random() - 0.5) * 1))
      }));

      // Update warehouse operations
      setWarehouseOperations(prev => prev.map(warehouse => {
        if (warehouse.status === 'operational') {
          return {
            ...warehouse,
            currentStock: Math.max(warehouse.capacity * 0.7, Math.min(warehouse.capacity * 0.95, warehouse.currentStock + Math.floor((Math.random() - 0.5) * 100))),
            inbound: Math.max(50, Math.min(300, warehouse.inbound + Math.floor((Math.random() - 0.5) * 20))),
            outbound: Math.max(100, Math.min(500, warehouse.outbound + Math.floor((Math.random() - 0.5) * 30))),
            picking: Math.max(30, Math.min(120, warehouse.picking + Math.floor((Math.random() - 0.5) * 10))),
            packing: Math.max(20, Math.min(80, warehouse.packing + Math.floor((Math.random() - 0.5) * 8)))
          };
        }
        return warehouse;
      }));

      // Update fleet tracking
      setFleetTracking(prev => prev.map(truck => {
        if (truck.status === 'in-transit') {
          return {
            ...truck,
            progress: Math.max(truck.progress, Math.min(100, truck.progress + Math.random() * 2)),
            fuelLevel: Math.max(20, truck.fuelLevel - Math.random() * 0.5),
            speed: Math.max(45, Math.min(75, truck.speed + (Math.random() - 0.5) * 10)),
            mileage: truck.mileage + Math.random() * 2
          };
        }
        return truck;
      }));

      // Update supply chain metrics
      const newMetrics = {
        time: new Date().toLocaleTimeString(),
        shipments: logisticsStatus.totalShipments,
        onTime: logisticsStatus.onTimeDelivery,
        warehouse: logisticsStatus.warehouseUtilization,
        fleet: logisticsStatus.fleetUtilization
      };
      
      setSupplyChainMetrics(prev => [...prev.slice(1), newMetrics]);

      // Occasionally add new logistics alerts
      if (Math.random() > 0.96) {
        const alertTypes = ['Delivery Delay', 'Route Optimization', 'Warehouse Alert', 'Fleet Status'];
        const severities = ['info', 'caution', 'warning', 'critical'];
        const locations = ['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Atlanta, GA', 'Minneapolis, MN'];
        
        const newAlert = {
          id: `LOG-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time logistics operations alert',
          timestamp: new Date(),
          status: 'active',
          location: locations[Math.floor(Math.random() * locations.length)],
          impact: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)]
        };
        
        setLogisticsAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [logisticsStatus.totalShipments, logisticsStatus.onTimeDelivery, logisticsStatus.warehouseUtilization, logisticsStatus.fleetUtilization]);

  const getWarehouseStatusColor = (status) => {
    switch (status) {
      case 'operational': return '#10B981';
      case 'maintenance': return '#8B5CF6';
      case 'warning': return '#F59E0B';
      case 'offline': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getFleetStatusColor = (status) => {
    switch (status) {
      case 'in-transit': return '#3B82F6';
      case 'delivered': return '#10B981';
      case 'loading': return '#8B5CF6';
      case 'delayed': return '#F59E0B';
      case 'maintenance': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getInventoryStatusColor = (status) => {
    switch (status) {
      case 'optimal': return '#10B981';
      case 'low': return '#F59E0B';
      case 'high': return '#3B82F6';
      case 'critical': return '#EF4444';
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

  const shipmentStatusDistribution = [
    { name: 'Delivered', value: 63, color: '#10B981' },
    { name: 'In Transit', value: 35, color: '#3B82F6' },
    { name: 'Delayed', value: 2, color: '#F59E0B' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Truck className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">LOGISTICS OPERATIONS CENTER</h1>
            <p className="text-gray-400">Real-time supply chain monitoring, warehouse automation, and fleet management</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{logisticsStatus.onTimeDelivery.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">ON-TIME DELIVERY</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{logisticsStatus.inTransit.toLocaleString()}</div>
            <div className="text-xs text-gray-400">IN TRANSIT</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{logisticsStatus.warehouseUtilization.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">WAREHOUSE</div>
          </div>
        </div>
      </div>

      {/* Logistics KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Package className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">SHIPMENTS</span>
          </div>
          <div className="text-xl font-bold text-white">{logisticsStatus.totalShipments.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Total</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">DELIVERED</span>
          </div>
          <div className="text-xl font-bold text-white">{logisticsStatus.delivered.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Completed</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">DELAYED</span>
          </div>
          <div className="text-xl font-bold text-white">{logisticsStatus.delayed}</div>
          <div className="text-xs text-gray-400">Shipments</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Truck className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">FLEET</span>
          </div>
          <div className="text-xl font-bold text-white">{logisticsStatus.fleetUtilization.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Utilization</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">DELIVERY TIME</span>
          </div>
          <div className="text-xl font-bold text-white">{logisticsStatus.avgDeliveryTime}</div>
          <div className="text-xs text-gray-400">Days Avg</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">EFFICIENCY</span>
          </div>
          <div className="text-xl font-bold text-white">{((logisticsStatus.delivered / logisticsStatus.totalShipments) * 100).toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Completion</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Warehouse Operations */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Package className="w-5 h-5 mr-2 text-green-400" />
            WAREHOUSE OPERATIONS
          </h3>
          <div className="space-y-3">
            {warehouseOperations.map(warehouse => (
              <div key={warehouse.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getWarehouseStatusColor(warehouse.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{warehouse.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getWarehouseStatusColor(warehouse.status)}20`, 
                      color: getWarehouseStatusColor(warehouse.status) 
                    }}>
                      {warehouse.status.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">{((warehouse.currentStock / warehouse.capacity) * 100).toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  Location: <span className="text-blue-400">{warehouse.location}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stock</span>
                    <span className="text-green-400">{warehouse.currentStock.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Capacity</span>
                    <span className="text-blue-400">{warehouse.capacity.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Inbound</span>
                    <span className="text-purple-400">{warehouse.inbound}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Outbound</span>
                    <span className="text-white">{warehouse.outbound}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">Robots: {warehouse.roboticSystems}</span>
                  <span className="text-gray-500">Staff: {warehouse.staff}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet Tracking */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Truck className="w-5 h-5 mr-2 text-blue-400" />
            FLEET TRACKING
          </h3>
          <div className="space-y-3">
            {fleetTracking.map(truck => (
              <div key={truck.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getFleetStatusColor(truck.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{truck.id}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getFleetStatusColor(truck.status)}20`, 
                      color: getFleetStatusColor(truck.status) 
                    }}>
                      {truck.status.toUpperCase().replace('-', ' ')}
                    </span>
                    <span className="text-xs text-gray-400">{truck.progress}%</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  Driver: <span className="text-blue-400">{truck.driver.split(' ')[0]}</span>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{truck.route}</div>
                
                <div className="bg-gray-700 rounded-full h-1.5 mb-2">
                  <div 
                    className="bg-blue-500 rounded-full h-1.5 transition-all duration-500" 
                    style={{ width: `${truck.progress}%` }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fuel</span>
                    <span className="text-green-400">{truck.fuelLevel.toFixed(0)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Speed</span>
                    <span className="text-purple-400">{truck.speed.toFixed(0)} mph</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cargo</span>
                    <span className="text-white">{truck.cargo.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">ETA</span>
                    <span className="text-blue-400">{truck.eta}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">Weight: {truck.weight}kg</span>
                  <span className="text-gray-500">{truck.location.split(',')[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory & Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            INVENTORY & ALERTS
          </h3>
          <div className="space-y-3 mb-4">
            {inventoryLevels.slice(0, 4).map((inventory, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{inventory.category}</span>
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: getInventoryStatusColor(inventory.status) }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current</span>
                    <span className="text-blue-400">{inventory.current.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target</span>
                    <span className="text-green-400">{inventory.target.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-purple-400">${inventory.value.toFixed(1)}M</span>
                  <span className="text-gray-500">Turnover: {inventory.turnover}x</span>
                </div>
              </div>
            ))}
          </div>

          {/* Logistics Alerts */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">Logistics Alerts</div>
            <div className="space-y-2">
              {logisticsAlerts.slice(0, 3).map(alert => (
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
                    <span className="text-blue-400">{alert.location}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Supply Chain Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Supply Chain Metrics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME SUPPLY CHAIN METRICS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={supplyChainMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
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
                type="monotone" 
                dataKey="onTime" 
                stroke="#10B981" 
                strokeWidth={3}
                name="On-Time Delivery %"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="warehouse" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Warehouse Util %"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="fleet" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Fleet Util %"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Delivery Zones & Shipment Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">DELIVERY ZONES & SHIPMENT STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={shipmentStatusDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {shipmentStatusDistribution.map((entry, index) => (
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
                  formatter={(value) => [`${value}%`, 'Shipment Status']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-4">
              {shipmentStatusDistribution.map((status, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: status.color }}
                    />
                    <span className="text-gray-400 text-sm">{status.name}</span>
                  </div>
                  <span className="text-white font-semibold">{status.value}%</span>
                </div>
              ))}
              
              {/* Delivery Zones Summary */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">Zone Performance</div>
                <div className="space-y-1 text-xs">
                  {deliveryZones.slice(0, 3).map((zone, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-400">{zone.zone}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white">{zone.performance.toFixed(1)}%</span>
                        <span className="text-green-400">✓</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Logistics Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Logistics Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Navigation className="w-3 h-3 inline mr-1" />
                  Route Optimization
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Package className="w-3 h-3 inline mr-1" />
                  Inventory Control
                </button>
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors">
                  <Eye className="w-3 h-3 inline mr-1" />
                  Fleet Monitoring
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsOperationsCenter;