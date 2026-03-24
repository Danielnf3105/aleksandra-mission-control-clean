// Computer Vision Monitoring - Real-time Visual Infrastructure Analysis
// Phase 5: WebRTC + TensorFlow.js for Mission Control Visual Monitoring
import React, { useState, useEffect, useRef } from 'react';

const ComputerVisionMonitoring = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  
  const [cvStatus, setCvStatus] = useState({
    cameraActive: false,
    modelsLoaded: false,
    analysisRunning: false,
    frameRate: 0
  });
  
  const [cameraFeeds] = useState([
    { id: 'datacenter-1', name: 'Data Center Main Floor', location: 'Building A', status: 'active' },
    { id: 'server-rack-1', name: 'Server Rack Alpha', location: 'DC-A-R001', status: 'active' },
    { id: 'cooling-unit-1', name: 'Cooling Unit Primary', location: 'DC-A-HVAC', status: 'active' },
    { id: 'power-distribution', name: 'Power Distribution Panel', location: 'DC-A-PWR', status: 'maintenance' },
    { id: 'network-backbone', name: 'Network Backbone', location: 'DC-A-NET', status: 'active' },
    { id: 'security-entrance', name: 'Security Entrance', location: 'Building A Entry', status: 'active' }
  ]);
  
  const [selectedFeed, setSelectedFeed] = useState('datacenter-1');
  
  const [detections, setDetections] = useState({
    objects: [],
    anomalies: [],
    healthScore: 0.95,
    lastAnalysis: null
  });
  
  const [analysisMetrics, setAnalysisMetrics] = useState({
    totalFrames: 0,
    detectionsCount: 0,
    anomaliesFound: 0,
    processingTime: 0,
    accuracy: 0.94
  });

  const [cvModels] = useState([
    { 
      name: 'Infrastructure Object Detection', 
      type: 'COCO-SSD', 
      status: 'loaded',
      description: 'Detects servers, cables, people, equipment',
      accuracy: 0.92
    },
    { 
      name: 'Thermal Anomaly Detection', 
      type: 'Custom CNN', 
      status: 'loaded',
      description: 'Identifies overheating equipment and hotspots',
      accuracy: 0.89
    },
    { 
      name: 'Posture & Safety Analysis', 
      type: 'PoseNet', 
      status: 'loaded',
      description: 'Monitors personnel safety and compliance',
      accuracy: 0.87
    },
    { 
      name: 'Equipment Health Classifier', 
      type: 'MobileNet', 
      status: 'loading',
      description: 'Classifies equipment condition and wear',
      accuracy: 0.91
    }
  ]);

  // Simulated camera initialization
  const initializeCamera = async () => {
    try {
      // In a real implementation, this would use getUserMedia
      // navigator.mediaDevices.getUserMedia({ video: true })
      
      // Simulated camera activation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setCvStatus(prev => ({ ...prev, cameraActive: true, modelsLoaded: true }));
      
      // Simulate video feed with a colored rectangle (placeholder)
      if (videoRef.current) {
        videoRef.current.style.background = 'linear-gradient(45deg, #1a365d, #2d3748, #1a202c)';
        videoRef.current.style.border = '2px solid #4ade80';
      }
      
      // Start analysis simulation
      startVisualAnalysis();
      
    } catch (error) {
      console.error('Camera initialization failed:', error);
    }
  };

  // Simulated visual analysis
  const startVisualAnalysis = () => {
    setCvStatus(prev => ({ ...prev, analysisRunning: true }));
    
    const analysisInterval = setInterval(() => {
      performAnalysisFrame();
    }, 2000); // Analyze every 2 seconds

    return () => clearInterval(analysisInterval);
  };

  // Simulated frame analysis
  const performAnalysisFrame = () => {
    const startTime = performance.now();
    
    // Simulate object detection
    const objects = [];
    const numObjects = Math.floor(Math.random() * 8) + 2;
    
    for (let i = 0; i < numObjects; i++) {
      const objectTypes = ['server', 'cable', 'person', 'equipment', 'screen', 'rack', 'cooling_unit'];
      const confidence = 0.7 + Math.random() * 0.3;
      
      objects.push({
        id: `obj_${Date.now()}_${i}`,
        class: objectTypes[Math.floor(Math.random() * objectTypes.length)],
        confidence: confidence,
        bbox: {
          x: Math.random() * 400,
          y: Math.random() * 300,
          width: 50 + Math.random() * 100,
          height: 50 + Math.random() * 100
        }
      });
    }

    // Simulate anomaly detection
    const anomalies = [];
    if (Math.random() > 0.7) {
      anomalies.push({
        id: `anomaly_${Date.now()}`,
        type: Math.random() > 0.5 ? 'thermal' : 'equipment',
        description: Math.random() > 0.5 ? 
          'Temperature anomaly detected in server rack' : 
          'Unusual equipment positioning detected',
        severity: Math.random() > 0.6 ? 'medium' : 'low',
        confidence: 0.75 + Math.random() * 0.2,
        location: { x: Math.random() * 400, y: Math.random() * 300 }
      });
    }

    const endTime = performance.now();
    const processingTime = endTime - startTime;

    // Update detections
    setDetections({
      objects,
      anomalies,
      healthScore: 0.88 + Math.random() * 0.12,
      lastAnalysis: new Date().toLocaleTimeString()
    });

    // Update metrics
    setAnalysisMetrics(prev => ({
      ...prev,
      totalFrames: prev.totalFrames + 1,
      detectionsCount: prev.detectionsCount + objects.length,
      anomaliesFound: prev.anomaliesFound + anomalies.length,
      processingTime: processingTime.toFixed(1),
      accuracy: 0.88 + Math.random() * 0.08
    }));

    setCvStatus(prev => ({
      ...prev,
      frameRate: (1000 / Math.max(processingTime, 100)).toFixed(1)
    }));
  };

  // Initialize on mount
  useEffect(() => {
    initializeCamera();
  }, []);

  // Camera Feed Component
  const CameraFeed = () => (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between bg-gray-900 px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${cvStatus.cameraActive ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
          <span className="text-white font-medium">
            {cameraFeeds.find(f => f.id === selectedFeed)?.name || 'Camera Feed'}
          </span>
        </div>
        <div className="text-xs text-gray-400">
          {cvStatus.frameRate} FPS • {detections.objects.length} objects
        </div>
      </div>
      
      <div className="relative">
        <div
          ref={videoRef}
          className="w-full h-64 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center"
        >
          {!cvStatus.cameraActive ? (
            <div className="text-gray-400">Initializing camera feed...</div>
          ) : (
            <div className="relative w-full h-full">
              {/* Simulated camera view */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-800/50 to-green-900/20">
                {/* Simulate detected objects */}
                {detections.objects.map((obj, index) => (
                  <div
                    key={obj.id}
                    className="absolute border-2 border-green-400 bg-green-400/10"
                    style={{
                      left: `${(obj.bbox.x / 500) * 100}%`,
                      top: `${(obj.bbox.y / 400) * 100}%`,
                      width: `${(obj.bbox.width / 500) * 100}%`,
                      height: `${(obj.bbox.height / 400) * 100}%`,
                    }}
                  >
                    <div className="absolute -top-6 left-0 text-xs bg-green-400 text-black px-1 rounded">
                      {obj.class} ({(obj.confidence * 100).toFixed(0)}%)
                    </div>
                  </div>
                ))}
                
                {/* Simulate anomalies */}
                {detections.anomalies.map((anomaly) => (
                  <div
                    key={anomaly.id}
                    className="absolute w-6 h-6 border-2 border-red-400 bg-red-400/20 rounded-full animate-pulse"
                    style={{
                      left: `${(anomaly.location.x / 500) * 100}%`,
                      top: `${(anomaly.location.y / 400) * 100}%`,
                    }}
                  >
                    <div className="absolute -top-8 -left-10 text-xs bg-red-400 text-white px-2 py-1 rounded whitespace-nowrap">
                      {anomaly.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
      </div>
    </div>
  );

  // Camera Selection Panel
  const CameraSelection = () => (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3 text-blue-300">📹 Camera Feeds</h3>
      <div className="space-y-2">
        {cameraFeeds.map((feed) => (
          <button
            key={feed.id}
            onClick={() => setSelectedFeed(feed.id)}
            className={`w-full text-left p-3 rounded-lg border transition-all ${
              selectedFeed === feed.id
                ? 'border-blue-500 bg-blue-900/20 text-blue-300'
                : 'border-gray-700 bg-gray-900/50 text-gray-300 hover:border-gray-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{feed.name}</div>
                <div className="text-sm text-gray-400">{feed.location}</div>
              </div>
              <div className={`px-2 py-1 rounded text-xs ${
                feed.status === 'active' ? 'bg-green-900/30 text-green-400' :
                feed.status === 'maintenance' ? 'bg-yellow-900/30 text-yellow-400' :
                'bg-red-900/30 text-red-400'
              }`}>
                {feed.status}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  // Analysis Results
  const AnalysisResults = () => (
    <div className="space-y-4">
      {/* Detection Summary */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3 text-green-300">🎯 Detection Results</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{detections.objects.length}</div>
            <div className="text-xs text-gray-400">Objects Detected</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">{detections.anomalies.length}</div>
            <div className="text-xs text-gray-400">Anomalies Found</div>
          </div>
        </div>
        
        <div className="space-y-2">
          {detections.objects.slice(0, 5).map((obj) => (
            <div key={obj.id} className="flex justify-between items-center text-sm">
              <span className="text-gray-300 capitalize">{obj.class}</span>
              <span className="text-green-400 font-mono">{(obj.confidence * 100).toFixed(0)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Anomaly Alerts */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3 text-red-300">🚨 Visual Anomalies</h3>
        {detections.anomalies.length > 0 ? (
          <div className="space-y-3">
            {detections.anomalies.map((anomaly) => (
              <div key={anomaly.id} className="bg-red-900/20 border border-red-500/50 rounded p-3">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-red-400 font-medium capitalize">{anomaly.type}</span>
                  <span className="text-xs text-red-400">{(anomaly.confidence * 100).toFixed(0)}%</span>
                </div>
                <p className="text-sm text-gray-300">{anomaly.description}</p>
                <div className="text-xs text-gray-400 mt-1">
                  Severity: <span className="capitalize">{anomaly.severity}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-4">
            No visual anomalies detected
          </div>
        )}
      </div>
    </div>
  );

  // Model Status
  const ModelStatus = () => (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3 text-purple-300">🤖 CV Models</h3>
      <div className="space-y-3">
        {cvModels.map((model, index) => (
          <div key={index} className="bg-gray-900/50 rounded p-3">
            <div className="flex justify-between items-start mb-2">
              <span className="text-white font-medium">{model.name}</span>
              <span className={`px-2 py-1 rounded text-xs ${
                model.status === 'loaded' ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-400'
              }`}>
                {model.status}
              </span>
            </div>
            <div className="text-xs text-gray-400 mb-1">{model.description}</div>
            <div className="text-xs text-purple-400">
              Accuracy: {(model.accuracy * 100).toFixed(1)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              👁️ Computer Vision Infrastructure Monitoring
            </h1>
            <p className="text-gray-400 mt-1">
              Real-time visual analysis • Object detection • Anomaly monitoring • WebRTC + TensorFlow.js
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Health Score: <span className="text-green-400 font-mono">
                {(detections.healthScore * 100).toFixed(1)}%
              </span>
            </div>
            <div className="text-sm text-gray-400">
              Processing: <span className="text-blue-400 font-mono">{analysisMetrics.processingTime}ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Metrics Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-lg font-bold text-green-400">{analysisMetrics.totalFrames}</div>
          <div className="text-xs text-gray-400">Frames Analyzed</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{analysisMetrics.detectionsCount}</div>
          <div className="text-xs text-gray-400">Total Detections</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-lg font-bold text-red-400">{analysisMetrics.anomaliesFound}</div>
          <div className="text-xs text-gray-400">Anomalies Found</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{(analysisMetrics.accuracy * 100).toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Model Accuracy</div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Camera Feed */}
        <div className="lg:col-span-2 space-y-6">
          <CameraFeed />
          <CameraSelection />
        </div>

        {/* Right Column - Analysis & Controls */}
        <div className="space-y-6">
          <ModelStatus />
          <AnalysisResults />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
        🎥 Phase 5: Computer Vision Integration • Real-time Infrastructure Monitoring • WebRTC + TensorFlow.js
      </div>
    </div>
  );
};

export default ComputerVisionMonitoring;