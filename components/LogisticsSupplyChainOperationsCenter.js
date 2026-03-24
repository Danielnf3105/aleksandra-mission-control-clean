// Logistics & Supply Chain Operations Center - 2026 Real-Time Monitoring & AI Agents
// Inspired by supply chain control towers, real-time tracking, predictive insights, autonomous operations
import { useState, useEffect } from 'react';
import { 
  Truck, Package, MapPin, Clock, TrendingUp, TrendingDown,
  AlertTriangle, CheckCircle, Eye, Target, Activity, Zap,
  Globe, Warehouse, Ship, Plane, Train, BarChart3, PieChart,
  Navigation, Shield, Bell, Settings, Database, Network,
  Bot, Cpu, Monitor, Radio, Satellite, Users, Calendar
} from 'lucide-react';

export default function LogisticsSupplyChainOperationsCenter() {
  const [supplyChainMetrics, setSupplyChainMetrics] = useState({
    totalShipments: 15678,
    activeRoutes: 234,
    onTimeDelivery: 94.7,
    inventoryTurnover: 12.3,
    costEfficiency: 87.6,
    supplierCompliance: 96.4,
    sustainabilityScore: 89.2,
    networkUtilization: 78.9
  });

  const [activeShipments, setActiveShipments] = useState([
    {
      id: 'SHIP-001',
      origin: 'Distribution Center A',
      destination: 'Regional Hub B',
      status: 'IN_TRANSIT',
      progress: 67.8,
      eta: '14:30',
      carrier: 'Express Logistics',
      mode: 'TRUCK',
      priority: 'HIGH',
      value: 45678,
      weight: '12.4 tons',
      temperature: '2-8°C',
      lastUpdate: '15m ago'
    },
    {
      id: 'SHIP-002',
      origin: 'Port Terminal C',
      destination: 'Warehouse D',
      status: 'DELAYED',
      progress: 45.2,
      eta: '16:45 (+2h)',
      carrier: 'Ocean Freight Co',
      mode: 'CONTAINER',
      priority: 'MEDIUM',
      value: 123456,
      weight: '45.7 tons',
      temperature: 'Ambient',
      lastUpdate: '32m ago'
    },
    {
      id: 'SHIP-003',
      origin: 'Manufacturing Plant E',
      destination: 'Customer Location F',
      status: 'DELIVERED',
      progress: 100,
      eta: 'COMPLETED',
      carrier: 'Air Express',
      mode: 'AIR',
      priority: 'CRITICAL',
      value: 234567,
      weight: '2.1 tons',
      temperature: 'Controlled',
      lastUpdate: '8m ago'
    }
  ]);

  const [aiSupplyChainAgents, setAiSupplyChainAgents] = useState({
    demandForecasting: {
      status: 'ACTIVE',
      accuracy: 93.7,
      predictions: 156,
      timeHorizon: '90 days',
      algorithmsRunning: 8,
      lastUpdate: '10m ago'
    },
    routeOptimization: {
      status: 'OPTIMIZING',
      activeSolutions: 45,
      fuelSavings: 15.3,
      timeReduction: 23.7,
      routesAnalyzed: 1247,
      lastUpdate: '5m ago'
    },
    supplierRiskManagement: {
      status: 'MONITORING',
      suppliersTracked: 456,
      riskAssessments: 23,
      alertsGenerated: 7,
      complianceScore: 96.4,
      lastUpdate: '2m ago'
    },
    inventoryOptimization: {
      status: 'BALANCED',
      locationsManaged: 67,
      stockoutPrevention: 98.7,
      carryingCostReduction: 12.8,
      turnoverRate: 12.3,
      lastUpdate: '20m ago'
    }
  });

  const [supplyChainAlerts, setSupplyChainAlerts] = useState([
    {
      id: 'SCM-001',
      type: 'DELIVERY_DELAY',
      severity: 'HIGH',
      title: 'Critical Shipment Delayed',
      description: 'SHIP-002 delayed by 2 hours due to port congestion',
      impact: 'Customer SLA breach risk, potential penalty $12K',
      recommendation: 'Activate backup route via air freight, notify customer',
      affectedShipments: 1,
      estimatedResolution: '4 hours',
      timestamp: '32m ago'
    },
    {
      id: 'SCM-002',
      type: 'SUPPLIER_RISK',
      severity: 'MEDIUM',
      title: 'Supplier Compliance Alert',
      description: 'Supplier X missed quality certification deadline',
      impact: 'Production risk for 3 product lines',
      recommendation: 'Activate secondary supplier, conduct audit',
      affectedSuppliers: 1,
      estimatedResolution: '2 days',
      timestamp: '1h ago'
    },
    {
      id: 'SCM-003',
      type: 'INVENTORY_LOW',
      severity: 'LOW',
      title: 'Inventory Threshold Alert',
      description: 'Component ABC-123 below safety stock at Warehouse D',
      impact: 'Potential stockout in 5 days if not replenished',
      recommendation: 'Trigger emergency procurement, expedite delivery',
      affectedSKUs: 1,
      estimatedResolution: '24 hours',
      timestamp: '45m ago'
    }
  ]);

  const [controlTowerSystems, setControlTowerSystems] = useState({
    visibility: {
      networkCoverage: 98.7,
      realTimeTracking: 'ENABLED',
      predictiveInsights: 'ACTIVE',
      dataIntegration: 94.3,
      dashboardViews: 12,
      alertsActive: 23
    },
    automation: {
      autonomousAgents: 15,
      processesAutomated: 67,
      decisionAccuracy: 96.8,
      interventionRate: 3.2,
      efficiencyGains: 34.7,
      costReduction: 18.9
    },
    connectivity: {
      carriersConnected: 156,
      suppliersIntegrated: 234,
      warehousesLinked: 45,
      ediTransactions: 12456,
      apiCalls: 234567,
      dataLatency: '12ms'
    }
  });

  const [warehouseOperations, setWarehouseOperations] = useState([
    {
      facilityId: 'WH-001',
      name: 'Distribution Center North',
      location: 'Chicago, IL',
      capacity: 85.7,
      throughput: '2,450 units/hr',
      automation: 'AUTOMATED',
      staffing: 45,
      systems: 'WMS v3.2',
      lastShipment: '12m ago'
    },
    {
      facilityId: 'WH-002',
      name: 'Regional Hub West',
      location: 'Los Angeles, CA',
      capacity: 67.3,
      throughput: '1,890 units/hr',
      automation: 'HYBRID',
      staffing: 67,
      systems: 'WMS v3.2',
      lastShipment: '8m ago'
    },
    {
      facilityId: 'WH-003',
      name: 'Cross-dock Terminal',
      location: 'Dallas, TX',
      capacity: 92.1,
      throughput: '3,120 units/hr',
      automation: 'MANUAL',
      staffing: 89,
      systems: 'WMS v2.9',
      lastShipment: '3m ago'
    }
  ]);

  const [sustainabilityMetrics, setSustainabilityMetrics] = useState({
    carbonFootprint: {
      currentEmissions: '2,450 tons CO2',
      reductionTarget: '25% by 2027',
      progress: 12.7,
      offsetPrograms: 'ACTIVE'
    },
    greenLogistics: {
      electricVehicles: 23,
      biofuelUsage: '15.7%',
      routeEfficiency: 89.4,
      packagingRecycling: '78.9%'
    },
    circularSupplyChain: {
      returnProcessing: '94.3%',
      materialsRecovered: '67.8%',
      wasteReduction: '23.4%',
      sustainableSuppliers: 156
    }
  });

  useEffect(() => {
    // Supply chain real-time updates
    const interval = setInterval(() => {
      // Update supply chain metrics
      setSupplyChainMetrics(prev => ({
        ...prev,
        totalShipments: prev.totalShipments + Math.floor(Math.random() * 5),
        onTimeDelivery: Math.max(90, Math.min(98, prev.onTimeDelivery + (Math.random() - 0.3) * 1.5)),
        networkUtilization: Math.max(60, Math.min(90, prev.networkUtilization + (Math.random() - 0.5) * 3))
      }));

      // Update shipment progress
      setActiveShipments(prev => prev.map(shipment => {
        if (shipment.status === 'IN_TRANSIT') {
          const newProgress = Math.min(100, shipment.progress + Math.random() * 3);
          return {
            ...shipment,
            progress: newProgress,
            status: newProgress >= 100 ? 'DELIVERED' : shipment.status
          };
        }
        return shipment;
      }));

      // Update AI agent performance
      setAiSupplyChainAgents(prev => ({
        ...prev,
        demandForecasting: {
          ...prev.demandForecasting,
          accuracy: Math.max(85, Math.min(98, prev.demandForecasting.accuracy + (Math.random() - 0.3) * 1))
        },
        routeOptimization: {
          ...prev.routeOptimization,
          fuelSavings: Math.max(10, Math.min(25, prev.routeOptimization.fuelSavings + (Math.random() - 0.5) * 1))
        }
      }));

      // Update warehouse capacity
      setWarehouseOperations(prev => prev.map(warehouse => ({
        ...warehouse,
        capacity: Math.max(50, Math.min(95, warehouse.capacity + (Math.random() - 0.5) * 3))
      })));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'DELIVERED': case 'ACTIVE': case 'ENABLED': return 'text-green-400';
      case 'IN_TRANSIT': case 'OPTIMIZING': case 'MONITORING': return 'text-blue-400';
      case 'DELAYED': case 'BALANCED': return 'text-yellow-400';
      case 'FAILED': case 'CRITICAL': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'HIGH': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'LOW': return 'text-green-400 bg-green-900/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getModeIcon = (mode) => {
    switch(mode) {
      case 'TRUCK': return <Truck className="w-4 h-4" />;
      case 'AIR': return <Plane className="w-4 h-4" />;
      case 'CONTAINER': return <Ship className="w-4 h-4" />;
      case 'RAIL': return <Train className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'CRITICAL': return 'text-red-500';
      case 'HIGH': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* Supply Chain Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-cyan-400 flex items-center">
            <Globe className="w-8 h-8 mr-3" />
            Logistics & Supply Chain Operations Center
          </h1>
          <div className="text-sm text-gray-400 flex items-center space-x-4">
            <div className="flex items-center">
              <Package className="w-4 h-4 mr-2" />
              <span>{supplyChainMetrics.totalShipments.toLocaleString()} shipments</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>OTD: {supplyChainMetrics.onTimeDelivery.toFixed(1)}%</span>
            </div>
            <div className="flex items-center">
              <Bot className="w-4 h-4 mr-2" />
              <span>AI Agents: {Object.keys(aiSupplyChainAgents).length}</span>
            </div>
            <div>Real-Time: {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        <p className="text-gray-300">Supply chain control tower with AI agents, real-time tracking, predictive insights & autonomous operations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Main Supply Chain Dashboard */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Supply Chain Overview Metrics */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Supply Chain Performance Overview
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Active Routes</span>
                  <Navigation className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {supplyChainMetrics.activeRoutes}
                </div>
                <div className="text-sm text-gray-400">live tracking</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">On-Time Delivery</span>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {supplyChainMetrics.onTimeDelivery.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">performance</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Cost Efficiency</span>
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {supplyChainMetrics.costEfficiency.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">optimization</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Network Utilization</span>
                  <Activity className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-cyan-400">
                  {supplyChainMetrics.networkUtilization.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">capacity</div>
              </div>
            </div>

            {/* Active Shipments Tracking */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-3">Active Shipment Tracking</h3>
              {activeShipments.map((shipment, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div>
                      <div className="font-bold text-white">{shipment.id}</div>
                      <div className="text-sm text-gray-400">{shipment.carrier}</div>
                      <div className={`text-sm font-semibold flex items-center ${getStatusColor(shipment.status)}`}>
                        {getModeIcon(shipment.mode)}
                        <span className="ml-1">{shipment.status}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Route</div>
                      <div className="text-white text-sm">{shipment.origin}</div>
                      <div className="text-white text-sm">→ {shipment.destination}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Progress</div>
                      <div className="text-white font-mono">{shipment.progress.toFixed(1)}%</div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-400 h-2 rounded-full transition-all duration-300" 
                          style={{width: `${shipment.progress}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">ETA</div>
                      <div className="text-white font-mono">{shipment.eta}</div>
                      <div className={`text-xs font-semibold ${getPriorityColor(shipment.priority)}`}>
                        {shipment.priority}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Cargo</div>
                      <div className="text-white text-sm">${(shipment.value/1000).toFixed(0)}K</div>
                      <div className="text-gray-400 text-xs">{shipment.weight}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Conditions</div>
                      <div className="text-white text-sm">{shipment.temperature}</div>
                      <div className="text-gray-400 text-xs">{shipment.lastUpdate}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Supply Chain Agents */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
              <Cpu className="w-5 h-5 mr-2" />
              AI Supply Chain Agents
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(aiSupplyChainAgents).map(([agent, data]) => (
                <div key={agent} className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 capitalize">
                    {agent.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Status:</span>
                      <span className={getStatusColor(data.status)}>{data.status}</span>
                    </div>
                    
                    {data.accuracy && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Accuracy:</span>
                        <span className="text-green-400">{data.accuracy.toFixed(1)}%</span>
                      </div>
                    )}
                    
                    {data.fuelSavings && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Fuel Savings:</span>
                        <span className="text-green-400">{data.fuelSavings.toFixed(1)}%</span>
                      </div>
                    )}
                    
                    {data.complianceScore && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Compliance:</span>
                        <span className="text-blue-400">{data.complianceScore.toFixed(1)}%</span>
                      </div>
                    )}
                    
                    {data.stockoutPrevention && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Stockout Prevention:</span>
                        <span className="text-green-400">{data.stockoutPrevention.toFixed(1)}%</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Last Update:</span>
                      <span>{data.lastUpdate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-4">
          
          {/* Supply Chain Alerts */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Supply Chain Alerts
            </h2>
            
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {supplyChainAlerts.map((alert) => (
                <div key={alert.id} className={`border rounded p-3 ${getSeverityColor(alert.severity)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">{alert.title}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {alert.severity}
                    </span>
                  </div>
                  
                  <div className="text-xs text-gray-300 mb-2">{alert.description}</div>
                  <div className="text-xs text-blue-400 mb-2">
                    <strong>Impact:</strong> {alert.impact}
                  </div>
                  <div className="text-xs text-green-400 mb-2">
                    <strong>Action:</strong> {alert.recommendation}
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{alert.timestamp}</span>
                    <span>ETA: {alert.estimatedResolution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warehouse Operations */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
              <Warehouse className="w-5 h-5 mr-2" />
              Warehouse Operations
            </h2>
            
            <div className="space-y-3">
              {warehouseOperations.map((warehouse, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white font-medium">{warehouse.name}</span>
                    <span className={warehouse.capacity > 90 ? 'text-red-400' : warehouse.capacity > 75 ? 'text-yellow-400' : 'text-green-400'}>
                      {warehouse.capacity.toFixed(1)}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">{warehouse.location}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Throughput:</span>
                      <span className="text-white">{warehouse.throughput}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Staff:</span>
                      <span className="text-white">{warehouse.staffing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Automation:</span>
                      <span className={getStatusColor(warehouse.automation)}>{warehouse.automation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Ship:</span>
                      <span className="text-gray-400">{warehouse.lastShipment}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Control Tower Systems */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <Monitor className="w-5 h-5 mr-2" />
              Control Tower
            </h2>
            
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Visibility</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Network Coverage:</span>
                    <span className="text-green-400">{controlTowerSystems.visibility.networkCoverage}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Real-time Tracking:</span>
                    <span className={getStatusColor(controlTowerSystems.visibility.realTimeTracking)}>
                      {controlTowerSystems.visibility.realTimeTracking}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Active Alerts:</span>
                    <span className="text-yellow-400">{controlTowerSystems.visibility.alertsActive}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Automation</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">AI Agents:</span>
                    <span className="text-purple-400">{controlTowerSystems.automation.autonomousAgents}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Efficiency Gains:</span>
                    <span className="text-green-400">{controlTowerSystems.automation.efficiencyGains.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cost Reduction:</span>
                    <span className="text-green-400">{controlTowerSystems.automation.costReduction.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sustainability Metrics */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Sustainability
            </h2>
            
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Carbon Footprint:</span>
                    <span className="text-yellow-400">{sustainabilityMetrics.carbonFootprint.currentEmissions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">EV Fleet:</span>
                    <span className="text-green-400">{sustainabilityMetrics.greenLogistics.electricVehicles}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Route Efficiency:</span>
                    <span className="text-green-400">{sustainabilityMetrics.greenLogistics.routeEfficiency}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Waste Reduction:</span>
                    <span className="text-green-400">{sustainabilityMetrics.circularSupplyChain.wasteReduction}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}