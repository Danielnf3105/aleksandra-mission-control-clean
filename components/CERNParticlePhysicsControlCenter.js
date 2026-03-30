import React, { useState, useEffect } from 'react';
import { Zap, Activity, Target, Eye, TrendingUp, AlertTriangle, Atom, Gauge, BarChart3, Layers, Radar, Settings } from 'lucide-react';

const CERNParticlePhysicsControlCenter = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [beamStatus, setBeamStatus] = useState({
    beam1Energy: 6800, // GeV
    beam2Energy: 6800,
    luminosity: 1.34e34, // cm^-2 s^-1
    collisionRate: 40000000, // Hz
    beamIntensity: 1.15e11,
    fillNumber: 8234,
    stableBeams: true,
    beamMode: 'STABLE_BEAMS',
    uptime: '14h 23m'
  });

  const [detectorStatus, setDetectorStatus] = useState({
    atlas: { status: 'READY', efficiency: 98.7, events: 1847362, triggers: 75000 },
    cms: { status: 'READY', efficiency: 97.9, events: 1923847, triggers: 78500 },
    lhcb: { status: 'READY', efficiency: 96.4, events: 987654, triggers: 42000 },
    alice: { status: 'MAINTENANCE', efficiency: 0, events: 0, triggers: 0 }
  });

  const [particleEvents, setParticleEvents] = useState([
    { id: 1, detector: 'ATLAS', type: 'Higgs → γγ', energy: 125.1, confidence: 5.2, timestamp: Date.now() - 1200 },
    { id: 2, detector: 'CMS', type: 'Z → μ⁺μ⁻', energy: 91.2, confidence: 8.7, timestamp: Date.now() - 2400 },
    { id: 3, detector: 'LHCb', type: 'B⁰ → J/ψKₛ', energy: 5.28, confidence: 6.3, timestamp: Date.now() - 3600 },
    { id: 4, detector: 'ATLAS', type: 'W⁺ → e⁺νₑ', energy: 80.4, confidence: 7.1, timestamp: Date.now() - 4800 }
  ]);

  const [systemMetrics, setSystemMetrics] = useState({
    cpuLoad: 67.3,
    dataRate: 45.7, // GB/s
    storageUsage: 82.1,
    networkLatency: 0.23, // ms
    temperature: 18.5, // °C
    magneticField: 3.8, // Tesla
    vacuum: 1.2e-10, // mbar
    rfPower: 16 // MW
  });

  const [eventDisplay, setEventDisplay] = useState({
    trackCount: 47,
    calorimeterHits: 234,
    muonHits: 12,
    missingEnergy: 78.3,
    invariantMass: 125.09,
    transverseMomentum: 187.5,
    pseudorapidity: 2.1,
    azimuthalAngle: 1.57
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());
      
      // Update beam status
      setBeamStatus(prev => ({
        ...prev,
        luminosity: prev.luminosity * (1 + (Math.random() - 0.5) * 0.02),
        collisionRate: Math.floor(prev.collisionRate * (1 + (Math.random() - 0.5) * 0.05)),
        beamIntensity: prev.beamIntensity * (1 + (Math.random() - 0.5) * 0.01)
      }));

      // Update detector efficiencies
      setDetectorStatus(prev => ({
        ...prev,
        atlas: {
          ...prev.atlas,
          efficiency: Math.max(95, Math.min(99.5, prev.atlas.efficiency + (Math.random() - 0.5) * 0.5)),
          events: prev.atlas.events + Math.floor(Math.random() * 100),
          triggers: prev.atlas.triggers + Math.floor(Math.random() * 50)
        },
        cms: {
          ...prev.cms,
          efficiency: Math.max(95, Math.min(99.5, prev.cms.efficiency + (Math.random() - 0.5) * 0.5)),
          events: prev.cms.events + Math.floor(Math.random() * 120),
          triggers: prev.cms.triggers + Math.floor(Math.random() * 60)
        }
      }));

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        cpuLoad: Math.max(40, Math.min(90, prev.cpuLoad + (Math.random() - 0.5) * 5)),
        dataRate: Math.max(20, Math.min(60, prev.dataRate + (Math.random() - 0.5) * 3)),
        temperature: Math.max(16, Math.min(22, prev.temperature + (Math.random() - 0.5) * 0.5))
      }));

      // Simulate new particle events
      if (Math.random() > 0.7) {
        const eventTypes = ['Higgs → γγ', 'Z → e⁺e⁻', 'W⁻ → μ⁻ν̄ₘ', 'tt̄ → bW⁺b̄W⁻', 'γγ → e⁺e⁻'];
        const detectors = ['ATLAS', 'CMS', 'LHCb'];
        
        setParticleEvents(prev => [
          {
            id: Date.now(),
            detector: detectors[Math.floor(Math.random() * detectors.length)],
            type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
            energy: Math.random() * 200 + 10,
            confidence: Math.random() * 10 + 3,
            timestamp: Date.now()
          },
          ...prev.slice(0, 19) // Keep last 20 events
        ]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'READY': return 'text-green-400';
      case 'WARNING': return 'text-yellow-400';
      case 'MAINTENANCE': return 'text-orange-400';
      case 'ERROR': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatScientific = (num) => {
    return num.toExponential(2);
  };

  return (
    <div className="bg-black text-white p-6 font-mono">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-blue-300">CERN LHC CONTROL CENTER</h1>
          <div className="flex items-center text-sm text-gray-400">
            <span className="mr-4">RUN: {beamStatus.fillNumber}</span>
            <span className="mr-4">FILL TIME: {beamStatus.uptime}</span>
            <span>{new Date(timestamp).toISOString().split('T')[1].split('.')[0]} UTC</span>
          </div>
        </div>

        {/* Beam Status Header */}
        <div className="bg-blue-900/30 border border-blue-500 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Atom className="w-8 h-8 text-blue-400 mr-3 animate-spin" />
              <div>
                <h2 className="text-lg font-bold text-blue-400">BEAM STATUS</h2>
                <span className={`text-sm uppercase font-bold ${beamStatus.stableBeams ? 'text-green-400' : 'text-yellow-400'}`}>
                  {beamStatus.beamMode}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-gray-400">LUMINOSITY</div>
                <div className="text-white font-bold">{formatScientific(beamStatus.luminosity)} cm⁻²s⁻¹</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">COLLISION RATE</div>
                <div className="text-white font-bold">{(beamStatus.collisionRate / 1000000).toFixed(1)}M Hz</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">BEAM ENERGY</div>
                <div className="text-white font-bold">{beamStatus.beam1Energy} GeV + {beamStatus.beam2Energy} GeV</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Detector Status */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Radar className="w-5 h-5 mr-2 text-green-400" />
                DETECTOR STATUS
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {Object.entries(detectorStatus).map(([detector, status]) => (
                <div key={detector} className="bg-gray-800 p-3 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white uppercase">{detector}</span>
                    <span className={`text-xs uppercase font-bold ${getStatusColor(status.status)}`}>
                      {status.status}
                    </span>
                  </div>
                  {status.status === 'READY' && (
                    <>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Efficiency:</span>
                        <span className="text-green-400">{status.efficiency.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Events:</span>
                        <span className="text-blue-400">{status.events.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Triggers/s:</span>
                        <span className="text-purple-400">{status.triggers.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                          style={{ width: `${status.efficiency}%` }}
                        ></div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Event Display */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Eye className="w-5 h-5 mr-2 text-purple-400" />
                REAL-TIME EVENT DISPLAY
              </h3>
            </div>
            <div className="p-4 space-y-2">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Tracks:</div>
                  <div className="text-cyan-400 font-bold">{eventDisplay.trackCount}</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Cal Hits:</div>
                  <div className="text-orange-400 font-bold">{eventDisplay.calorimeterHits}</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Muon Hits:</div>
                  <div className="text-red-400 font-bold">{eventDisplay.muonHits}</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Missing ET:</div>
                  <div className="text-yellow-400 font-bold">{eventDisplay.missingEnergy.toFixed(1)} GeV</div>
                </div>
              </div>
              
              {/* Simulated Event Display */}
              <div className="bg-black border border-gray-600 rounded h-40 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="100%" height="100%" viewBox="0 0 200 200">
                    {/* Detector rings */}
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#334155" strokeWidth="1" />
                    <circle cx="100" cy="100" r="60" fill="none" stroke="#334155" strokeWidth="1" />
                    <circle cx="100" cy="100" r="40" fill="none" stroke="#334155" strokeWidth="1" />
                    
                    {/* Particle tracks */}
                    <line x1="100" y1="100" x2="160" y2="140" stroke="#06b6d4" strokeWidth="2" />
                    <line x1="100" y1="100" x2="40" y2="60" stroke="#06b6d4" strokeWidth="2" />
                    <line x1="100" y1="100" x2="130" y2="50" stroke="#f59e0b" strokeWidth="3" />
                    <line x1="100" y1="100" x2="70" y2="150" stroke="#f59e0b" strokeWidth="3" />
                    
                    {/* Calorimeter deposits */}
                    <rect x="155" y="135" width="8" height="12" fill="#ef4444" opacity="0.8" />
                    <rect x="35" y="55" width="8" height="12" fill="#ef4444" opacity="0.8" />
                    <rect x="125" y="45" width="10" height="15" fill="#f97316" opacity="0.9" />
                    
                    {/* Collision point */}
                    <circle cx="100" cy="100" r="3" fill="#22d3ee" />
                  </svg>
                </div>
                <div className="absolute bottom-2 left-2 text-xs text-gray-400">
                  Event #{timestamp % 1000000} | η: {eventDisplay.pseudorapidity.toFixed(1)} | φ: {eventDisplay.azimuthalAngle.toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          {/* System Metrics */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Gauge className="w-5 h-5 mr-2 text-yellow-400" />
                SYSTEM TELEMETRY
              </h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">CPU Load:</div>
                  <div className="text-cyan-400 font-bold">{systemMetrics.cpuLoad.toFixed(1)}%</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Data Rate:</div>
                  <div className="text-green-400 font-bold">{systemMetrics.dataRate.toFixed(1)} GB/s</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Storage:</div>
                  <div className="text-orange-400 font-bold">{systemMetrics.storageUsage.toFixed(1)}%</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Latency:</div>
                  <div className="text-purple-400 font-bold">{systemMetrics.networkLatency.toFixed(2)} ms</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Temp:</div>
                  <div className="text-blue-400 font-bold">{systemMetrics.temperature.toFixed(1)}°C</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">B-Field:</div>
                  <div className="text-pink-400 font-bold">{systemMetrics.magneticField.toFixed(1)} T</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Vacuum:</div>
                  <div className="text-indigo-400 font-bold">{formatScientific(systemMetrics.vacuum)} mbar</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">RF Power:</div>
                  <div className="text-yellow-400 font-bold">{systemMetrics.rfPower} MW</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Physics Events Log */}
        <div className="bg-gray-900 rounded border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-bold text-white flex items-center">
              <Activity className="w-5 h-5 mr-2 text-pink-400" />
              PHYSICS EVENTS LOG
            </h3>
          </div>
          <div className="p-4 max-h-60 overflow-y-auto">
            <div className="space-y-2">
              {particleEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between bg-gray-800 p-3 rounded text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse"></span>
                    <span className="text-cyan-400 font-mono mr-3">[{event.detector}]</span>
                    <span className="text-white mr-3">{event.type}</span>
                    <span className="text-gray-400">
                      {Math.round((Date.now() - event.timestamp) / 1000)}s ago
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-green-400">{event.energy.toFixed(1)} GeV</span>
                    <span className="text-yellow-400">{event.confidence.toFixed(1)}σ</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CERNParticlePhysicsControlCenter;