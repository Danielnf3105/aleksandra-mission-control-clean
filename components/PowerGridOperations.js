// PowerGridOperations.js - Power Grid Operations Control Center & Smart Grid Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const PowerGridOperations = () => {
  const [gridStatus, setGridStatus] = useState({
    systemFrequency: 60.02,
    systemVoltage: 345.7,
    totalLoad: 28450,
    totalGeneration: 28690,
    stability: 'STABLE'
  });

  const [transmissionLines, setTransmissionLines] = useState([
    {
      id: 'line_001',
      name: 'North-Central 765kV',
      voltage: 765.2,
      current: 2340,
      power: 2890,
      capacity: 3200,
      utilization: 90.3,
      status: 'ENERGIZED',
      temperature: 67.3
    }
  ]);

  const [powerPlants, setPowerPlants] = useState([
    {
      id: 'plant_001',
      name: 'Nuclear Station Alpha',
      type: 'NUCLEAR',
      status: 'OPERATIONAL',
      capacity: 2400,
      output: 2385,
      efficiency: 99.4
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update grid status
      setGridStatus(prev => ({
        ...prev,
        systemFrequency: Math.max(59.95, Math.min(60.05, prev.systemFrequency + (Math.random() - 0.5) * 0.02)),
        totalLoad: Math.max(25000, Math.min(35000, prev.totalLoad + (Math.random() - 0.5) * 500))
      }));

      // Update transmission lines
      setTransmissionLines(prev => prev.map(line => ({
        ...line,
        voltage: Math.max(line.voltage * 0.95, Math.min(line.voltage * 1.05, 
          line.voltage + (Math.random() - 0.5) * 5)),
        current: Math.max(0, Math.min(line.capacity * 1.2, 
          line.current + (Math.random() - 0.5) * 100))
      })));

      // Update power plants
      setPowerPlants(prev => prev.map(plant => ({
        ...plant,
        output: Math.max(plant.capacity * 0.7, Math.min(plant.capacity, 
          plant.output + (Math.random() - 0.5) * 50))
      })));

    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL':
      case 'ENERGIZED':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatNumber = (num, decimals = 0) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(decimals)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(decimals)}K`;
    }
    return num.toFixed(decimals);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          ⚡ POWER GRID OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {gridStatus.systemFrequency.toFixed(2)} Hz
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatNumber(gridStatus.totalLoad)} MW Load
          </div>
        </div>
      </div>

      {/* Power Grid Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SYSTEM FREQUENCY</div>
              <div className="text-2xl font-bold text-green-100">
                {gridStatus.systemFrequency.toFixed(2)}
              </div>
              <div className="text-xs text-green-300">
                Hz (Nominal 60.00)
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">TOTAL LOAD</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatNumber(gridStatus.totalLoad)}
              </div>
              <div className="text-xs text-blue-300">
                MW System Demand
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">STATUS</div>
              <div className="text-2xl font-bold text-purple-100">
                {gridStatus.stability}
              </div>
              <div className="text-xs text-purple-300">
                Grid Stability
              </div>
            </div>
            <div className="text-3xl opacity-60">🎯</div>
          </div>
        </div>
      </div>

      {/* Transmission Lines */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🔌 TRANSMISSION LINES & POWER FLOW
        </h3>
        <div className="space-y-3">
          {transmissionLines.map((line) => (
            <div key={line.id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(line.status)}`}>
                    {line.status}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {line.voltage}kV
                  </span>
                </div>
              </div>
              
              <div className="text-sm font-bold text-white mb-1">{line.name}</div>
              
              <div className="text-xs mb-2">
                <span className="text-gray-400">Power: </span>
                <span className="text-purple-400">{formatNumber(line.power)} MW</span>
                <span className="text-gray-400"> | Capacity: </span>
                <span className="text-blue-400">{formatNumber(line.capacity)} MW</span>
                <span className="text-gray-400"> | Utilization: </span>
                <span className="text-green-400">{line.utilization.toFixed(1)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Power Plants */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🏭 POWER GENERATION FACILITIES
        </h3>
        <div className="space-y-3">
          {powerPlants.map((plant) => (
            <div key={plant.id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(plant.status)}`}>
                    {plant.status}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {plant.type.replace(/_/g, ' ')}
                  </span>
                </div>
              </div>
              
              <div className="text-sm font-bold text-white mb-1">{plant.name}</div>
              
              <div className="text-xs mb-2">
                <span className="text-gray-400">Output: </span>
                <span className="text-green-400">{formatNumber(plant.output)} MW</span>
                <span className="text-gray-400"> / </span>
                <span className="text-blue-400">{formatNumber(plant.capacity)} MW</span>
                <span className="text-gray-400"> | Efficiency: </span>
                <span className="text-purple-400">{plant.efficiency.toFixed(1)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PowerGridOperations;