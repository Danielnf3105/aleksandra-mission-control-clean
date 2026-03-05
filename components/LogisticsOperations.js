// LogisticsOperations.js - Logistics Operations Control Center & Supply Chain Monitoring Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const LogisticsOperations = () => {
  const [shipments, setShipments] = useState([
    {
      id: 'ship_001',
      trackingNumber: 'TRK2026030501',
      origin: 'Hamburg, Germany',
      destination: 'Rotterdam, Netherlands',
      status: 'IN_TRANSIT',
      mode: 'Sea Freight',
      carrier: 'Maersk Line',
      vessel: 'Ever Given',
      containerType: '40ft HC',
      weight: 28500, // kg
      value: 450000, // EUR
      priority: 'HIGH',
      expectedDelivery: Date.now() + 2 * 24 * 60 * 60 * 1000,
      actualDelivery: null,
      currentLocation: 'North Sea',
      progress: 67.3, // percentage
      delay: 0, // hours
      customer: 'BMW Group',
      commodity: 'Automotive Parts',
      temperature: null,
      humidity: null,
      lastUpdate: Date.now() - 45 * 60 * 1000,
      route: ['Hamburg', 'North Sea', 'Rotterdam'],
      milestones: [
        { name: 'Departure', completed: true, timestamp: Date.now() - 18 * 60 * 60 * 1000 },
        { name: 'In Transit', completed: true, timestamp: Date.now() - 12 * 60 * 60 * 1000 },
        { name: 'Arrival', completed: false, timestamp: null }
      ]
    },
    {
      id: 'ship_002',
      trackingNumber: 'TRK2026030502',
      origin: 'Shanghai, China',
      destination: 'Los Angeles, USA',
      status: 'DELAYED',
      mode: 'Air Freight',
      carrier: 'Lufthansa Cargo',
      vessel: 'LH8405',
      containerType: 'Air Container',
      weight: 1250,
      value: 890000,
      priority: 'URGENT',
      expectedDelivery: Date.now() + 8 * 60 * 60 * 1000,
      actualDelivery: null,
      currentLocation: 'Frankfurt Airport',
      progress: 45.8,
      delay: 4.5,
      customer: 'Apple Inc',
      commodity: 'Electronics',
      temperature: -18.5, // Celsius (controlled)
      humidity: 35.2,
      lastUpdate: Date.now() - 20 * 60 * 1000,
      route: ['Shanghai', 'Frankfurt', 'Los Angeles'],
      milestones: [
        { name: 'Departure', completed: true, timestamp: Date.now() - 8 * 60 * 60 * 1000 },
        { name: 'Transit Hub', completed: true, timestamp: Date.now() - 2 * 60 * 60 * 1000 },
        { name: 'Final Leg', completed: false, timestamp: null }
      ]
    },
    {
      id: 'ship_003',
      trackingNumber: 'TRK2026030503',
      origin: 'Barcelona, Spain',
      destination: 'Milan, Italy',
      status: 'DELIVERED',
      mode: 'Road Freight',
      carrier: 'DHL Supply Chain',
      vessel: 'Truck-EU4578',
      containerType: 'Refrigerated',
      weight: 15600,
      value: 125000,
      priority: 'STANDARD',
      expectedDelivery: Date.now() - 2 * 60 * 60 * 1000,
      actualDelivery: Date.now() - 1 * 60 * 60 * 1000,
      currentLocation: 'Delivered - Milan DC',
      progress: 100,
      delay: -1, // delivered early
      customer: 'Nestlé',
      commodity: 'Food Products',
      temperature: 4.2,
      humidity: 78.5,
      lastUpdate: Date.now() - 1 * 60 * 60 * 1000,
      route: ['Barcelona', 'Toulouse', 'Lyon', 'Milan'],
      milestones: [
        { name: 'Departure', completed: true, timestamp: Date.now() - 14 * 60 * 60 * 1000 },
        { name: 'Border Crossing', completed: true, timestamp: Date.now() - 8 * 60 * 60 * 1000 },
        { name: 'Delivered', completed: true, timestamp: Date.now() - 1 * 60 * 60 * 1000 }
      ]
    },
    {
      id: 'ship_004',
      trackingNumber: 'TRK2026030504',
      origin: 'New York, USA',
      destination: 'São Paulo, Brazil',
      status: 'CUSTOMS_HOLD',
      mode: 'Sea Freight',
      carrier: 'MSC',
      vessel: 'MSC Gülsün',
      containerType: '20ft Dry',
      weight: 18900,
      value: 320000,
      priority: 'STANDARD',
      expectedDelivery: Date.now() + 5 * 24 * 60 * 60 * 1000,
      actualDelivery: null,
      currentLocation: 'Santos Port',
      progress: 85.2,
      delay: 18, // hours
      customer: 'Petrobras',
      commodity: 'Industrial Equipment',
      temperature: null,
      humidity: null,
      lastUpdate: Date.now() - 6 * 60 * 60 * 1000,
      route: ['New York', 'Santos', 'São Paulo'],
      milestones: [
        { name: 'Departure', completed: true, timestamp: Date.now() - 15 * 24 * 60 * 60 * 1000 },
        { name: 'Port Arrival', completed: true, timestamp: Date.now() - 1 * 24 * 60 * 60 * 1000 },
        { name: 'Customs Clearance', completed: false, timestamp: null }
      ]
    },
    {
      id: 'ship_005',
      trackingNumber: 'TRK2026030505',
      origin: 'Dubai, UAE',
      destination: 'Mumbai, India',
      status: 'LOADING',
      mode: 'Sea Freight',
      carrier: 'COSCO Shipping',
      vessel: 'COSCO Pacific',
      containerType: '40ft Reefer',
      weight: 22300,
      value: 680000,
      priority: 'HIGH',
      expectedDelivery: Date.now() + 3 * 24 * 60 * 60 * 1000,
      actualDelivery: null,
      currentLocation: 'Jebel Ali Port',
      progress: 12.5,
      delay: 0,
      customer: 'Tata Group',
      commodity: 'Pharmaceuticals',
      temperature: 2.8,
      humidity: 45.1,
      lastUpdate: Date.now() - 15 * 60 * 1000,
      route: ['Dubai', 'Mumbai'],
      milestones: [
        { name: 'Loading', completed: false, timestamp: null },
        { name: 'Departure', completed: false, timestamp: null },
        { name: 'Arrival', completed: false, timestamp: null }
      ]
    }
  ]);

  const [warehouses, setWarehouses] = useState([
    {
      id: 'wh_001',
      name: 'Amsterdam Distribution Center',
      location: 'Amsterdam, Netherlands',
      type: 'Distribution Center',
      status: 'OPERATIONAL',
      capacity: 50000, // m²
      utilization: 78.5, // percentage
      temperature: 18.2,
      humidity: 42.8,
      staff: 156,
      shiftsActive: 2,
      dailyOrders: 2847,
      targetOrders: 3200,
      pickingEfficiency: 94.3, // percentage
      shippingAccuracy: 99.1,
      inventoryTurnover: 12.4, // annual
      avgPickTime: 8.7, // minutes
      automationLevel: 65, // percentage
      robotsActive: 23,
      robotsTotal: 35,
      inbound: 127, // trucks today
      outbound: 143,
      lastUpdate: Date.now() - 5 * 60 * 1000,
      zones: [
        { name: 'Receiving', utilization: 67.2, capacity: 'Normal' },
        { name: 'Storage', utilization: 82.1, capacity: 'High' },
        { name: 'Picking', utilization: 91.5, capacity: 'Critical' },
        { name: 'Packing', utilization: 74.8, capacity: 'Normal' },
        { name: 'Shipping', utilization: 69.3, capacity: 'Normal' }
      ]
    },
    {
      id: 'wh_002',
      name: 'Frankfurt Logistics Hub',
      location: 'Frankfurt, Germany',
      type: 'Logistics Hub',
      status: 'PEAK_HOURS',
      capacity: 75000,
      utilization: 89.2,
      temperature: 19.8,
      humidity: 38.5,
      staff: 234,
      shiftsActive: 3,
      dailyOrders: 4523,
      targetOrders: 4800,
      pickingEfficiency: 97.8,
      shippingAccuracy: 99.7,
      inventoryTurnover: 15.2,
      avgPickTime: 6.4,
      automationLevel: 82,
      robotsActive: 47,
      robotsTotal: 52,
      inbound: 198,
      outbound: 212,
      lastUpdate: Date.now() - 8 * 60 * 1000,
      zones: [
        { name: 'Receiving', utilization: 95.3, capacity: 'Critical' },
        { name: 'Storage', utilization: 87.6, capacity: 'High' },
        { name: 'Picking', utilization: 96.8, capacity: 'Critical' },
        { name: 'Packing', utilization: 88.9, capacity: 'High' },
        { name: 'Shipping', utilization: 92.4, capacity: 'Critical' }
      ]
    },
    {
      id: 'wh_003',
      name: 'London Cold Storage',
      location: 'London, UK',
      type: 'Cold Storage',
      status: 'MAINTENANCE',
      capacity: 25000,
      utilization: 45.2,
      temperature: -18.5,
      humidity: 85.2,
      staff: 67,
      shiftsActive: 1,
      dailyOrders: 567,
      targetOrders: 1200,
      pickingEfficiency: 78.5,
      shippingAccuracy: 98.2,
      inventoryTurnover: 8.7,
      avgPickTime: 15.3,
      automationLevel: 35,
      robotsActive: 3,
      robotsTotal: 12,
      inbound: 23,
      outbound: 34,
      lastUpdate: Date.now() - 2 * 60 * 60 * 1000,
      zones: [
        { name: 'Receiving', utilization: 34.2, capacity: 'Low' },
        { name: 'Storage', utilization: 48.7, capacity: 'Normal' },
        { name: 'Picking', utilization: 52.1, capacity: 'Normal' },
        { name: 'Packing', utilization: 41.8, capacity: 'Low' },
        { name: 'Shipping', utilization: 38.9, capacity: 'Low' }
      ]
    }
  ]);

  const [vehicles, setVehicles] = useState([
    {
      id: 'veh_001',
      vehicleNumber: 'EU-4578-DHL',
      type: 'Refrigerated Truck',
      carrier: 'DHL Supply Chain',
      driver: 'Marco Rossi',
      status: 'EN_ROUTE',
      currentLocation: 'A1 Highway, France',
      origin: 'Barcelona, Spain',
      destination: 'Milan, Italy',
      progress: 78.5,
      eta: Date.now() + 3 * 60 * 60 * 1000,
      fuel: 67.2, // percentage
      speed: 85, // km/h
      temperature: 4.2,
      cargo: [
        { item: 'Dairy Products', quantity: '15.6 tons', temperature: 4.2 },
        { item: 'Meat Products', quantity: '8.4 tons', temperature: 2.1 }
      ],
      route: ['Barcelona', 'Toulouse', 'Lyon', 'Milan'],
      mileage: 1247,
      lastUpdate: Date.now() - 10 * 60 * 1000
    },
    {
      id: 'veh_002',
      vehicleNumber: 'DE-9823-LOG',
      type: 'Standard Truck',
      carrier: 'DB Schenker',
      driver: 'Anna Schmidt',
      status: 'LOADING',
      currentLocation: 'Frankfurt Distribution Center',
      origin: 'Frankfurt, Germany',
      destination: 'Prague, Czech Republic',
      progress: 5.2,
      eta: Date.now() + 8 * 60 * 60 * 1000,
      fuel: 98.5,
      speed: 0,
      temperature: 19.8,
      cargo: [
        { item: 'Electronics', quantity: '12.3 tons', temperature: null },
        { item: 'Textiles', quantity: '6.7 tons', temperature: null }
      ],
      route: ['Frankfurt', 'Nuremberg', 'Prague'],
      mileage: 89456,
      lastUpdate: Date.now() - 5 * 60 * 1000
    },
    {
      id: 'veh_003',
      vehicleNumber: 'NL-5647-TNT',
      type: 'Express Van',
      carrier: 'FedEx Express',
      driver: 'Jan de Vries',
      status: 'DELAYED',
      currentLocation: 'A2 Highway, Netherlands',
      origin: 'Amsterdam, Netherlands',
      destination: 'Brussels, Belgium',
      progress: 42.1,
      eta: Date.now() + 4 * 60 * 60 * 1000,
      fuel: 45.8,
      speed: 72,
      temperature: null,
      cargo: [
        { item: 'Documents', quantity: '234 parcels', temperature: null },
        { item: 'Small Electronics', quantity: '1.2 tons', temperature: null }
      ],
      route: ['Amsterdam', 'Utrecht', 'Brussels'],
      mileage: 234567,
      lastUpdate: Date.now() - 25 * 60 * 1000,
      delay: 1.5 // hours
    }
  ]);

  const [supplyChainAlerts, setSupplyChainAlerts] = useState([
    {
      id: 'alert_001',
      timestamp: Date.now() - 20 * 60 * 1000,
      severity: 'HIGH',
      type: 'SHIPMENT_DELAY',
      entity: 'TRK2026030502 - Apple Electronics',
      description: 'Air freight delayed 4.5 hours due to weather conditions at Frankfurt',
      impact: 'Customer delivery SLA at risk',
      estimatedResolution: '6 hours',
      status: 'ACTIVE',
      assignedTo: 'Air Freight Team',
      affectedCustomers: ['Apple Inc'],
      mitigation: 'Alternative routing via Paris hub being arranged'
    },
    {
      id: 'alert_002',
      timestamp: Date.now() - 6 * 60 * 60 * 1000,
      severity: 'CRITICAL',
      type: 'CUSTOMS_HOLD',
      entity: 'TRK2026030504 - Petrobras Equipment',
      description: 'Shipment held at Santos customs for documentation review',
      impact: 'Delivery delayed by 18+ hours, customer production impact',
      estimatedResolution: '24 hours',
      status: 'ESCALATED',
      assignedTo: 'Customs Broker',
      affectedCustomers: ['Petrobras'],
      mitigation: 'Legal team engaged, expedited processing requested'
    },
    {
      id: 'alert_003',
      timestamp: Date.now() - 2 * 60 * 60 * 1000,
      severity: 'MEDIUM',
      type: 'CAPACITY_CONSTRAINT',
      entity: 'Frankfurt Logistics Hub - Picking Zone',
      description: 'Picking zone utilization reached 96.8%, approaching capacity limits',
      impact: 'Order processing delays possible during peak hours',
      estimatedResolution: '4 hours',
      status: 'MONITORING',
      assignedTo: 'Warehouse Operations',
      affectedCustomers: ['Multiple'],
      mitigation: 'Additional staff allocated, overflow protocols activated'
    },
    {
      id: 'alert_004',
      timestamp: Date.now() - 45 * 60 * 1000,
      severity: 'LOW',
      type: 'VEHICLE_MAINTENANCE',
      entity: 'NL-5647-TNT Express Van',
      description: 'Vehicle fuel level below 50%, driver notified for refueling',
      impact: 'Potential delivery delay if not addressed',
      estimatedResolution: '1 hour',
      status: 'ACKNOWLEDGED',
      assignedTo: 'Fleet Operations',
      affectedCustomers: ['Local delivery customers'],
      mitigation: 'Nearest fuel station identified, refueling in progress'
    }
  ]);

  const [performanceTrends, setPerformanceTrends] = useState([]);
  const [deliveryTrends, setDeliveryTrends] = useState([]);

  const generatePerformanceTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        shipmentsProcessed: Math.floor(Math.random() * 50) + 150, // 150-200 shipments
        onTimeDelivery: Math.floor(Math.random() * 10) + 90, // 90-100%
        warehouseUtilization: Math.floor(Math.random() * 20) + 70, // 70-90%
        vehiclesActive: Math.floor(Math.random() * 20) + 80, // 80-100 vehicles
        customerSatisfaction: Math.floor(Math.random() * 5) + 95, // 95-100%
        costPerShipment: Math.floor(Math.random() * 10) + 45, // 45-55 EUR
        carbonEmissions: Math.floor(Math.random() * 5) + 15 // 15-20 kg CO2
      });
    }
    return data;
  };

  const generateDeliveryTrends = () => {
    return [
      { mode: 'Road Freight', onTime: 94.2, delayed: 4.8, cancelled: 1.0 },
      { mode: 'Sea Freight', onTime: 87.6, delayed: 11.2, cancelled: 1.2 },
      { mode: 'Air Freight', onTime: 91.8, delayed: 7.4, cancelled: 0.8 },
      { mode: 'Rail Freight', onTime: 89.3, delayed: 9.7, cancelled: 1.0 },
      { mode: 'Express', onTime: 97.1, delayed: 2.6, cancelled: 0.3 }
    ];
  };

  useEffect(() => {
    setPerformanceTrends(generatePerformanceTrends());
    setDeliveryTrends(generateDeliveryTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update shipments
      setShipments(prev => prev.map(shipment => {
        if (shipment.status === 'DELIVERED' || shipment.status === 'CUSTOMS_HOLD' || shipment.status === 'LOADING') {
          return shipment;
        }
        
        let newProgress = shipment.progress;
        let newDelay = shipment.delay;
        
        if (shipment.status === 'IN_TRANSIT') {
          newProgress = Math.min(95, shipment.progress + Math.random() * 2);
        } else if (shipment.status === 'DELAYED') {
          newProgress = Math.min(90, shipment.progress + Math.random() * 0.5);
          newDelay = Math.max(0, shipment.delay + (Math.random() - 0.7) * 0.5);
        }

        return {
          ...shipment,
          progress: newProgress,
          delay: newDelay,
          lastUpdate: Date.now(),
          currentLocation: newProgress > 90 ? `Approaching ${shipment.destination.split(',')[0]}` : shipment.currentLocation
        };
      }));

      // Update warehouses
      setWarehouses(prev => prev.map(warehouse => {
        if (warehouse.status === 'MAINTENANCE') {
          return warehouse;
        }

        const newUtilization = Math.max(50, Math.min(95, warehouse.utilization + (Math.random() - 0.5) * 5));
        const newDailyOrders = warehouse.dailyOrders + Math.floor((Math.random() - 0.3) * 10);
        
        return {
          ...warehouse,
          utilization: newUtilization,
          dailyOrders: Math.max(0, newDailyOrders),
          pickingEfficiency: Math.max(75, Math.min(99, warehouse.pickingEfficiency + (Math.random() - 0.5) * 2)),
          temperature: warehouse.type === 'Cold Storage' ? 
            Math.max(-20, Math.min(-15, warehouse.temperature + (Math.random() - 0.5) * 1)) :
            Math.max(15, Math.min(25, warehouse.temperature + (Math.random() - 0.5) * 2)),
          robotsActive: Math.max(0, Math.min(warehouse.robotsTotal, warehouse.robotsActive + Math.floor((Math.random() - 0.5) * 3))),
          lastUpdate: Date.now(),
          zones: warehouse.zones.map(zone => ({
            ...zone,
            utilization: Math.max(20, Math.min(98, zone.utilization + (Math.random() - 0.5) * 8)),
            capacity: zone.utilization > 90 ? 'Critical' : zone.utilization > 75 ? 'High' : zone.utilization > 50 ? 'Normal' : 'Low'
          }))
        };
      }));

      // Update vehicles
      setVehicles(prev => prev.map(vehicle => {
        if (vehicle.status === 'LOADING') {
          return vehicle;
        }

        let newProgress = vehicle.progress;
        let newSpeed = vehicle.speed;
        let newFuel = vehicle.fuel;

        if (vehicle.status === 'EN_ROUTE') {
          newProgress = Math.min(100, vehicle.progress + Math.random() * 3);
          newSpeed = Math.max(0, vehicle.speed + (Math.random() - 0.5) * 10);
          newFuel = Math.max(10, vehicle.fuel - Math.random() * 0.5);
        } else if (vehicle.status === 'DELAYED') {
          newProgress = Math.min(95, vehicle.progress + Math.random() * 1);
          newSpeed = Math.max(0, vehicle.speed + (Math.random() - 0.5) * 5);
          newFuel = Math.max(10, vehicle.fuel - Math.random() * 0.3);
        }

        return {
          ...vehicle,
          progress: newProgress,
          speed: newSpeed,
          fuel: newFuel,
          mileage: vehicle.mileage + (newSpeed / 60) * (6 / 60), // update mileage based on speed
          lastUpdate: Date.now()
        };
      }));

      // Occasionally generate new alerts
      if (Math.random() > 0.98) {
        const alertTypes = ['INVENTORY_LOW', 'ROUTE_OPTIMIZATION', 'WEATHER_DELAY', 'CAPACITY_WARNING'];
        const severities = ['LOW', 'MEDIUM', 'HIGH'];
        
        const newAlert = {
          id: `alert_${Date.now()}`,
          timestamp: Date.now(),
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          entity: 'Automated monitoring system',
          description: 'Automated logistics monitoring alert',
          impact: 'Operational efficiency optimization required',
          estimatedResolution: '2 hours',
          status: 'NEW',
          assignedTo: 'Operations Team',
          affectedCustomers: ['Multiple'],
          mitigation: 'Analyzing optimization options'
        };
        
        setSupplyChainAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }

    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getShipmentStatusColor = (status) => {
    switch (status) {
      case 'DELIVERED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'IN_TRANSIT': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'DELAYED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'CUSTOMS_HOLD': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'LOADING': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getWarehouseStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'PEAK_HOURS': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MAINTENANCE': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'CAPACITY_FULL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getVehicleStatusColor = (status) => {
    switch (status) {
      case 'EN_ROUTE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'LOADING': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'DELAYED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'BREAKDOWN': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'URGENT': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'STANDARD': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getUtilizationColor = (percentage) => {
    if (percentage >= 90) return 'text-red-400';
    if (percentage >= 75) return 'text-yellow-400';
    if (percentage >= 50) return 'text-green-400';
    return 'text-blue-400';
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatETA = (timestamp) => {
    const diff = timestamp - Date.now();
    if (diff < 60000) return 'imminent';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h`;
    return `${Math.floor(diff / 86400000)}d`;
  };

  const formatCurrency = (amount) => {
    return `€${amount.toLocaleString()}`;
  };

  const formatWeight = (kg) => {
    if (kg >= 1000) return `${(kg / 1000).toFixed(1)} tons`;
    return `${kg} kg`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🚛 LOGISTICS OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {shipments.filter(s => s.status === 'IN_TRANSIT').length}/{shipments.length} In Transit
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {((shipments.filter(s => s.delay <= 0).length / shipments.length) * 100).toFixed(0)}% On Time
          </div>
          <div className="text-sm text-gray-400 font-mono">
            EPG TIMESQUARE Control Tower
          </div>
        </div>
      </div>

      {/* Logistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">ACTIVE SHIPMENTS</div>
              <div className="text-2xl font-bold text-green-100">
                {shipments.filter(s => s.status !== 'DELIVERED').length}
              </div>
              <div className="text-xs text-green-300">
                Total value: {formatCurrency(shipments.reduce((sum, s) => sum + s.value, 0))}
              </div>
            </div>
            <div className="text-3xl opacity-60">📦</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">WAREHOUSE UTILIZATION</div>
              <div className="text-2xl font-bold text-blue-100">
                {(warehouses.reduce((sum, w) => sum + w.utilization, 0) / warehouses.length).toFixed(1)}%
              </div>
              <div className="text-xs text-blue-300">
                {warehouses.filter(w => w.status === 'OPERATIONAL' || w.status === 'PEAK_HOURS').length}/{warehouses.length} operational
              </div>
            </div>
            <div className="text-3xl opacity-60">🏭</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">FLEET STATUS</div>
              <div className="text-2xl font-bold text-purple-100">
                {vehicles.filter(v => v.status === 'EN_ROUTE').length}/{vehicles.length}
              </div>
              <div className="text-xs text-purple-300">
                vehicles active
              </div>
            </div>
            <div className="text-3xl opacity-60">🚚</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">ACTIVE ALERTS</div>
              <div className="text-2xl font-bold text-orange-100">
                {supplyChainAlerts.filter(a => a.status === 'ACTIVE' || a.status === 'ESCALATED').length}
              </div>
              <div className="text-xs text-orange-300">
                {supplyChainAlerts.filter(a => a.severity === 'CRITICAL' || a.severity === 'HIGH').length} high priority
              </div>
            </div>
            <div className="text-3xl opacity-60">🚨</div>
          </div>
        </div>
      </div>

      {/* Shipments and Warehouses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Shipments */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📦 ACTIVE SHIPMENTS TRACKING
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {shipments.map((shipment) => (
              <div key={shipment.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getShipmentStatusColor(shipment.status)}`}>
                      {shipment.status.replace('_', ' ')}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(shipment.priority)} bg-gray-600`}>
                      {shipment.priority}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {shipment.mode}
                    </span>
                    {shipment.delay > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                        +{shipment.delay.toFixed(1)}h delay
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(shipment.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{shipment.trackingNumber}</div>
                <div className="text-xs text-cyan-400 mb-2">{shipment.customer} | {shipment.commodity}</div>
                <div className="text-xs text-purple-400 mb-3">
                  {shipment.origin} → {shipment.destination}
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Progress</div>
                    <div className="text-blue-400">{shipment.progress.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Weight</div>
                    <div className="text-green-400">{formatWeight(shipment.weight)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Value</div>
                    <div className="text-yellow-400">{formatCurrency(shipment.value)}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Carrier</div>
                    <div className="text-indigo-400">{shipment.carrier}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Vessel/Flight</div>
                    <div className="text-pink-400">{shipment.vessel}</div>
                  </div>
                </div>

                {shipment.temperature && (
                  <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                    <div>
                      <div className="text-gray-400">Temperature</div>
                      <div className="text-orange-400">{shipment.temperature}°C</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Humidity</div>
                      <div className="text-blue-400">{shipment.humidity}%</div>
                    </div>
                  </div>
                )}

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Current Location: </span>
                  <span className="text-green-400">{shipment.currentLocation}</span>
                </div>

                {shipment.expectedDelivery && (
                  <div className="text-xs">
                    <span className="text-gray-400">ETA: </span>
                    <span className="text-yellow-400">{formatETA(shipment.expectedDelivery)}</span>
                  </div>
                )}

                {/* Progress bar */}
                <div className="mt-3">
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        shipment.status === 'DELAYED' ? 'bg-yellow-400' :
                        shipment.status === 'CUSTOMS_HOLD' ? 'bg-red-400' :
                        shipment.status === 'DELIVERED' ? 'bg-green-400' :
                        'bg-blue-400'
                      }`}
                      style={{ width: `${Math.min(100, shipment.progress)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warehouse Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏭 WAREHOUSE OPERATIONS
          </h3>
          <div className="space-y-3">
            {warehouses.map((warehouse) => (
              <div key={warehouse.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getWarehouseStatusColor(warehouse.status)}`}>
                      {warehouse.status.replace('_', ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {warehouse.type}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(warehouse.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{warehouse.name}</div>
                <div className="text-xs text-cyan-400 mb-3">{warehouse.location}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Utilization</div>
                    <div className={getUtilizationColor(warehouse.utilization)}>{warehouse.utilization.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Daily Orders</div>
                    <div className="text-green-400">{warehouse.dailyOrders.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Efficiency</div>
                    <div className="text-blue-400">{warehouse.pickingEfficiency.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Staff Active</div>
                    <div className="text-purple-400">{warehouse.staff} ({warehouse.shiftsActive} shifts)</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Robots</div>
                    <div className="text-orange-400">{warehouse.robotsActive}/{warehouse.robotsTotal}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Automation</div>
                    <div className="text-indigo-400">{warehouse.automationLevel}%</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Temperature</div>
                    <div className="text-red-400">{warehouse.temperature}°C</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Trucks (In/Out)</div>
                    <div className="text-yellow-400">{warehouse.inbound}/{warehouse.outbound}</div>
                  </div>
                </div>

                {/* Zone status */}
                <div className="text-xs">
                  <div className="text-gray-400 mb-1">Zone Status:</div>
                  <div className="grid grid-cols-5 gap-1">
                    {warehouse.zones.map((zone, index) => (
                      <div key={index} className="text-center">
                        <div className="text-gray-300">{zone.name}</div>
                        <div className={getUtilizationColor(zone.utilization)}>
                          {zone.utilization.toFixed(0)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fleet Management and Supply Chain Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fleet Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚚 FLEET MANAGEMENT & TRACKING
          </h3>
          <div className="space-y-3">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getVehicleStatusColor(vehicle.status)}`}>
                      {vehicle.status.replace('_', ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {vehicle.type}
                    </span>
                    {vehicle.delay && (
                      <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                        +{vehicle.delay}h delay
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(vehicle.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{vehicle.vehicleNumber}</div>
                <div className="text-xs text-cyan-400 mb-2">{vehicle.carrier} | {vehicle.driver}</div>
                <div className="text-xs text-purple-400 mb-3">
                  {vehicle.origin} → {vehicle.destination}
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Progress</div>
                    <div className="text-blue-400">{vehicle.progress.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Speed</div>
                    <div className="text-green-400">{vehicle.speed} km/h</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Fuel</div>
                    <div className={vehicle.fuel < 30 ? 'text-red-400' : vehicle.fuel < 50 ? 'text-yellow-400' : 'text-green-400'}>
                      {vehicle.fuel.toFixed(1)}%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Current Location</div>
                    <div className="text-indigo-400">{vehicle.currentLocation}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">ETA</div>
                    <div className="text-yellow-400">{formatETA(vehicle.eta)}</div>
                  </div>
                </div>

                {vehicle.temperature && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Cargo Temp: </span>
                    <span className="text-orange-400">{vehicle.temperature}°C</span>
                  </div>
                )}

                {/* Cargo details */}
                <div className="text-xs">
                  <div className="text-gray-400 mb-1">Cargo:</div>
                  {vehicle.cargo.map((item, index) => (
                    <div key={index} className="text-pink-400">
                      • {item.item} ({item.quantity})
                      {item.temperature && ` @ ${item.temperature}°C`}
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-3">
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        vehicle.status === 'DELAYED' ? 'bg-yellow-400' :
                        vehicle.status === 'EN_ROUTE' ? 'bg-green-400' :
                        'bg-blue-400'
                      }`}
                      style={{ width: `${Math.min(100, vehicle.progress)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supply Chain Alerts */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 SUPPLY CHAIN ALERTS & INCIDENTS
          </h3>
          
          {supplyChainAlerts.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-green-400 text-lg mb-2">✅</div>
              <div className="text-green-400 font-bold">NO ACTIVE ALERTS</div>
              <div className="text-gray-400 text-sm mt-2">All logistics operations running smoothly</div>
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {supplyChainAlerts.map((alert) => (
                <div key={alert.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-mono border ${getAlertSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                        {alert.type.replace(/_/g, ' ')}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        alert.status === 'ESCALATED' ? 'bg-red-500 text-white' :
                        alert.status === 'ACTIVE' ? 'bg-orange-500 text-white' :
                        alert.status === 'ACKNOWLEDGED' ? 'bg-blue-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {alert.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {formatTime(alert.timestamp)}
                    </div>
                  </div>
                  
                  <div className="text-sm text-white mb-2">{alert.description}</div>
                  <div className="text-xs text-cyan-400 mb-1">📊 {alert.entity}</div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                    <div>
                      <div className="text-gray-400">Impact</div>
                      <div className="text-orange-400">{alert.impact}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Resolution ETA</div>
                      <div className="text-green-400">{alert.estimatedResolution}</div>
                    </div>
                  </div>

                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Assigned to: </span>
                    <span className="text-yellow-400">{alert.assignedTo}</span>
                  </div>

                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Affected Customers: </span>
                    <span className="text-red-400">{alert.affectedCustomers.join(', ')}</span>
                  </div>
                  
                  <div className="text-xs">
                    <span className="text-gray-400">Mitigation: </span>
                    <span className="text-blue-400">{alert.mitigation}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Performance Trends and Delivery Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 LOGISTICS PERFORMANCE TRENDS (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceTrends}>
              <defs>
                <linearGradient id="shipmentsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="onTimeGradient" x1="0" y1="0" x2="0" y2="1">
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
                dataKey="shipmentsProcessed" 
                stroke="#10B981" 
                fill="url(#shipmentsGradient)" 
                name="Shipments Processed"
              />
              <Area 
                type="monotone" 
                dataKey="onTimeDelivery" 
                stroke="#3B82F6" 
                fill="url(#onTimeGradient)" 
                name="On-Time Delivery %"
              />
              <Line 
                type="monotone" 
                dataKey="warehouseUtilization" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Warehouse Util %"
              />
              <Line 
                type="monotone" 
                dataKey="customerSatisfaction" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Customer Satisfaction %"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Delivery Analytics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 DELIVERY PERFORMANCE BY MODE
          </h3>
          
          <div className="space-y-4">
            {/* Delivery Mode Performance */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">On-Time Delivery by Transportation Mode</h4>
              <div className="space-y-2">
                {deliveryTrends.map((mode, index) => (
                  <div key={index} className="bg-gray-700 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white">{mode.mode}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400">On-Time:</span>
                        <span className={`text-sm font-bold ${mode.onTime >= 95 ? 'text-green-400' : mode.onTime >= 90 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {mode.onTime.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-3 mb-2">
                      <div 
                        className="h-3 rounded-l-full bg-green-400"
                        style={{ width: `${mode.onTime}%` }}
                      ></div>
                      <div 
                        className="h-3 bg-yellow-400 -mt-3"
                        style={{ width: `${mode.delayed}%`, marginLeft: `${mode.onTime}%` }}
                      ></div>
                      <div 
                        className="h-3 bg-red-400 rounded-r-full -mt-3"
                        style={{ width: `${mode.cancelled}%`, marginLeft: `${mode.onTime + mode.delayed}%` }}
                      ></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-green-400">On-Time: {mode.onTime.toFixed(1)}%</span>
                      </div>
                      <div>
                        <span className="text-yellow-400">Delayed: {mode.delayed.toFixed(1)}%</span>
                      </div>
                      <div>
                        <span className="text-red-400">Cancelled: {mode.cancelled.toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supply Chain KPIs */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Supply Chain KPIs</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Order Fulfillment Rate</div>
                  <div className="text-white font-bold text-lg">98.7%</div>
                  <div className="text-green-400">Target: 95%</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Inventory Turnover</div>
                  <div className="text-white font-bold text-lg">12.4x</div>
                  <div className="text-blue-400">Annual rate</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Lead Time</div>
                  <div className="text-white font-bold text-lg">3.2 days</div>
                  <div className="text-yellow-400">Average</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Perfect Order Rate</div>
                  <div className="text-white font-bold text-lg">96.8%</div>
                  <div className="text-purple-400">Complete & on-time</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Cost per Shipment</div>
                  <div className="text-white font-bold text-lg">€47</div>
                  <div className="text-orange-400">Avg. all modes</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Carbon Footprint</div>
                  <div className="text-white font-bold text-lg">17.2 kg</div>
                  <div className="text-green-400">CO₂ per shipment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsOperations;