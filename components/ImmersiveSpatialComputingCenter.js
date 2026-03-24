// Immersive Spatial Computing Command Center (2026 Enterprise XR Trends)
// Inspired by 2026 AR/VR monitoring, spatial workflows, and control tower design
import { useState, useEffect } from 'react';

export default function ImmersiveSpatialComputingCenter() {
  const [spatialData, setSpatialData] = useState({
    // Enterprise XR Infrastructure (2026 Trends)
    xrInfrastructure: {
      spatialComputingActive: true,
      vrHeadsetsConnected: 12,
      arDevicesActive: 8,
      mixedRealityWorkflows: 23,
      spatialCollaborationSessions: 45,
      immersiveWorkflowEfficiency: 94.7,
      spatialAccuracy: 99.2,
      hapticFeedbackEnabled: true,
      eyeTrackingPrecision: 97.8,
      gestureRecognitionAccuracy: 96.4
    },

    // Immersive Real-Time Monitoring (AR/VR Growing Use)
    immersiveMonitoring: {
      virtualControlTowerActive: 'ENABLED',
      arDataOverlaysLive: 156,
      vrEnvironmentFidelity: 'HIGH_DEFINITION',
      realTimeVisualizationAccuracy: 98.6,
      spatialDataStreams: 67,
      immersiveAlertsActive: 34,
      threedDashboardElements: 89,
      volumetricDataDisplays: 23,
      spatialNavigationEfficiency: 94.8,
      immersiveFeedbackLatency: '12ms'
    },

    // Spatial Computing Workflows (From Meetings to Workflows)
    spatialWorkflows: [
      {
        workflowId: 'SPATIAL-001',
        workflowName: 'Immersive Data Analysis',
        participantsConnected: 6,
        spatialAssets: 23,
        collaborationEfficiency: 96.8,
        decisionsCaptured: 12,
        actionsCompleted: 89,
        workflowType: 'ASSET_MANIPULATION',
        spatialPrecision: 98.7,
        immersiveQuality: 'PRODUCTION_READY'
      },
      {
        workflowId: 'SPATIAL-002', 
        workflowName: 'Virtual Infrastructure Review',
        participantsConnected: 4,
        spatialAssets: 45,
        collaborationEfficiency: 94.3,
        decisionsCaptured: 8,
        actionsCompleted: 67,
        workflowType: 'VISUALIZATION_REVIEW',
        spatialPrecision: 97.2,
        immersiveQuality: 'HIGH_FIDELITY'
      },
      {
        workflowId: 'SPATIAL-003',
        workflowName: 'Real-Time System Monitoring',
        participantsConnected: 8,
        spatialAssets: 78,
        collaborationEfficiency: 98.1,
        decisionsCaptured: 15,
        actionsCompleted: 123,
        workflowType: 'LIVE_MONITORING',
        spatialPrecision: 99.4,
        immersiveQuality: 'ULTRA_DEFINITION'
      }
    ],

    // Control Tower Layout Design (2026 Command Center Standard)
    controlTowerDesign: {
      displayWallConfiguration: '5x3_CURVED_ARRAY',
      simultaneousDataFeeds: 15,
      liveDataOverlayAccuracy: 98.9,
      venueMapIntegration: 'REAL_TIME',
      multiScreenCoordination: 'SEAMLESS',
      operatorStationsActive: 12,
      ergonomicDesignScore: 96.7,
      visualFieldOptimization: 94.8,
      ambientLightingControl: 'ADAPTIVE',
      acousticEnvironmentQuality: 97.3
    },

    // Dynamic Data Visualization (Beyond Static Displays)
    dynamicVisualization: {
      staticDisplaysReplaced: 89, // % of traditional displays replaced
      dynamicElementsActive: 234,
      realTimeDataTransformation: 'CONTINUOUS',
      interactiveVisualizationElements: 67,
      adaptiveDisplayConfiguration: 'INTELLIGENT',
      contextAwareVisualization: 94.6,
      predictiveDataPresentation: 91.8,
      visualIntelligenceEngine: 'ACTIVE',
      userAdaptiveInterface: 97.2,
      cognitiveLoadOptimization: 87.3
    },

    // Immersive Training Modules Integration
    immersiveTraining: {
      trainingModulesActive: 23,
      vrSimulationAccuracy: 99.1,
      skillTransferEfficiency: 94.7,
      trainingCompletionRate: 96.8,
      emergencyScenarioSimulations: 45,
      realWorldApplicability: 97.3,
      trainingEffectivenessScore: 95.4,
      virtualHandsOnExperience: 'COMPREHENSIVE',
      safetyTrainingCompliance: 99.2,
      costReductionVsPhysical: 78.9
    },

    // Live Immersive Command Operations
    liveOperations: [
      {
        operationId: 'IMM-001',
        operationType: 'Spatial Data Monitoring',
        status: 'ACTIVE_IMMERSIVE',
        participants: 6,
        spatialAssets: 34,
        realTimeAccuracy: 98.7,
        immersiveQuality: 'ULTRA_HD',
        collaborationEfficiency: 96.4,
        spatialPrecision: '0.1mm',
        lastUpdate: 'Live',
        criticalityLevel: 'HIGH'
      },
      {
        operationId: 'IMM-002',
        operationType: 'AR Infrastructure Overlay',
        status: 'MONITORING',
        participants: 4,
        spatialAssets: 67,
        realTimeAccuracy: 97.2,
        immersiveQuality: 'HIGH_DEF',
        collaborationEfficiency: 94.8,
        spatialPrecision: '0.3mm',
        lastUpdate: 'Live',
        criticalityLevel: 'MEDIUM'
      },
      {
        operationId: 'IMM-003',
        operationType: 'VR Emergency Simulation',
        status: 'TRAINING_ACTIVE',
        participants: 12,
        spatialAssets: 156,
        realTimeAccuracy: 99.4,
        immersiveQuality: 'PHOTOREALISTIC',
        collaborationEfficiency: 98.9,
        spatialPrecision: '0.05mm',
        lastUpdate: 'Live',
        criticalityLevel: 'CRITICAL'
      }
    ],

    // Spatial Computing Device Integration
    spatialDevices: [
      {
        deviceId: 'HTC_VIVE_PRO_2_01',
        deviceType: 'VR Headset',
        status: 'ACTIVE',
        userConnected: 'Operator_Alpha',
        fidelityLevel: 'PRODUCTION_READY',
        trackingAccuracy: 99.2,
        batteryLevel: 87,
        latency: '8ms',
        spatialResolution: '4896x2448',
        refreshRate: '120Hz',
        lastCalibration: '2 hours ago'
      },
      {
        deviceId: 'META_QUEST_PRO_02',
        deviceType: 'Mixed Reality',
        status: 'ACTIVE',
        userConnected: 'Operator_Beta',
        fidelityLevel: 'HIGH_DEFINITION',
        trackingAccuracy: 97.8,
        batteryLevel: 73,
        latency: '12ms',
        spatialResolution: '1800x1920',
        refreshRate: '90Hz',
        lastCalibration: '1 hour ago'
      },
      {
        deviceId: 'APPLE_VISION_PRO_03',
        deviceType: 'Spatial Computer',
        status: 'STANDBY',
        userConnected: null,
        fidelityLevel: 'ULTRA_DEFINITION',
        trackingAccuracy: 99.8,
        batteryLevel: 92,
        latency: '6ms',
        spatialResolution: '4000x4000',
        refreshRate: '90Hz',
        lastCalibration: '30 minutes ago'
      }
    ],

    // Immersive Alerts & Spatial Notifications
    immersiveAlerts: [
      {
        alertId: 'SPATIAL_ALERT_001',
        type: 'SPATIAL_ANOMALY',
        title: 'Spatial Calibration Drift Detected',
        description: 'VR tracking accuracy decreased by 2.3% in zone Charlie-7',
        immersiveVisualization: 'HIGHLIGHTED_IN_SPACE',
        spatialLocation: 'Zone C-7, Grid 234.567',
        severity: 'MEDIUM',
        autoCorrection: 'INITIATED',
        estimatedResolution: '4.2 minutes',
        affectedUsers: 3
      },
      {
        alertId: 'SPATIAL_ALERT_002',
        type: 'COLLABORATION_OPTIMIZATION',
        title: 'Enhanced Spatial Workflow Available',
        description: 'New gesture recognition patterns improve efficiency by 12%',
        immersiveVisualization: 'GESTURE_DEMONSTRATION',
        spatialLocation: 'All Active Zones',
        severity: 'INFO',
        autoCorrection: 'LEARNING_SUGGESTED',
        estimatedResolution: 'Continuous',
        affectedUsers: 12
      },
      {
        alertId: 'SPATIAL_ALERT_003',
        type: 'IMMERSIVE_PERFORMANCE',
        title: 'Spatial Computing Performance Optimized',
        description: 'AI-driven spatial optimization achieved 15% latency reduction',
        immersiveVisualization: 'PERFORMANCE_OVERLAY',
        spatialLocation: 'System-Wide',
        severity: 'SUCCESS',
        autoCorrection: 'APPLIED',
        estimatedResolution: 'Complete',
        affectedUsers: 18
      }
    ],

    // Spatial Analytics & Performance Metrics
    spatialAnalytics: {
      spatialAccuracyScore: 98.9,
      immersiveEngagementRate: 94.7,
      spatialCollaborationEfficiency: 96.8,
      gestureRecognitionSuccess: 97.3,
      eyeTrackingPrecision: 98.6,
      hapticFeedbackQuality: 95.4,
      spatialMemoryRetention: 91.7,
      immersiveTaskCompletion: 96.2,
      spatialNavigationSpeed: '2.3x faster',
      cognitiveLoadReduction: 67.8
    },

    // System Performance & Infrastructure
    systemPerformance: {
      overallSpatialHealth: 97.8,
      renderingLatency: '8ms average',
      spatialTrackingAccuracy: 99.2,
      networkThroughput: '25.6 Gbps',
      processingPowerUtilization: 78.9,
      memoryUsageOptimization: 94.3,
      thermalManagement: 'OPTIMAL',
      powerEfficiency: 91.6,
      scalabilityIndex: 187.4,
      futureReadiness: 'NEXT_GENERATION'
    }
  });

  const [liveMetrics, setLiveMetrics] = useState({
    spatialWorkflows: 23,
    immersiveUsers: 18,
    spatialAccuracy: 98.9,
    collaborationEfficiency: 96.8,
    spatialLatency: 8.2
  });

  // Real-time spatial computing updates (2026 requirement)
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        spatialWorkflows: Math.max(15, Math.min(35, prev.spatialWorkflows + (Math.random() - 0.5) * 2)),
        immersiveUsers: Math.max(10, Math.min(25, prev.immersiveUsers + (Math.random() > 0.8 ? (Math.random() > 0.5 ? 1 : -1) : 0))),
        spatialAccuracy: Math.max(95, Math.min(99.9, prev.spatialAccuracy + (Math.random() - 0.5) * 0.3)),
        collaborationEfficiency: Math.max(90, Math.min(99, prev.collaborationEfficiency + (Math.random() - 0.5) * 0.5)),
        spatialLatency: Math.max(5, Math.min(15, prev.spatialLatency + (Math.random() - 0.5) * 0.5))
      }));

      setSpatialData(prev => ({
        ...prev,
        xrInfrastructure: {
          ...prev.xrInfrastructure,
          mixedRealityWorkflows: liveMetrics.spatialWorkflows,
          spatialCollaborationSessions: Math.max(30, Math.min(60, prev.xrInfrastructure.spatialCollaborationSessions + (Math.random() - 0.5) * 2))
        }
      }));
    }, 2500);

    return () => clearInterval(interval);
  }, [liveMetrics.spatialWorkflows]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': case 'ACTIVE_IMMERSIVE': return 'text-green-400';
      case 'MONITORING': case 'STANDBY': return 'text-blue-400';
      case 'TRAINING_ACTIVE': return 'text-yellow-400';
      case 'ERROR': case 'FAILED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getAccuracyColor = (score) => {
    if (score >= 98) return 'text-green-400';
    if (score >= 95) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'border-l-red-500 bg-red-900/20';
      case 'HIGH': return 'border-l-orange-500 bg-orange-900/20';
      case 'MEDIUM': return 'border-l-yellow-500 bg-yellow-900/20';
      case 'LOW': case 'INFO': return 'border-l-blue-500 bg-blue-900/20';
      case 'SUCCESS': return 'border-l-green-500 bg-green-900/20';
      default: return 'border-l-gray-500 bg-gray-900/20';
    }
  };

  const getFidelityColor = (fidelity) => {
    switch (fidelity) {
      case 'ULTRA_DEFINITION': case 'PHOTOREALISTIC': return 'text-purple-400';
      case 'HIGH_DEFINITION': case 'PRODUCTION_READY': return 'text-green-400';
      case 'HIGH_DEF': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 min-h-screen text-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          🥽🚀 Immersive Spatial Computing Command Center
        </h1>
        <p className="text-gray-300 text-lg">
          2026 Enterprise XR Trends • AR/VR Real-Time Monitoring • Spatial Workflows • Control Tower Design
        </p>
      </div>

      {/* Live Spatial Computing Metrics (2026 XR Infrastructure) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-cyan-400 mb-2">🌐 Spatial Workflows</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.spatialWorkflows}</div>
          <div className="text-sm text-gray-300">immersive active</div>
        </div>
        <div className="bg-black/40 border border-purple-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-400 mb-2">👥 Immersive Users</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.immersiveUsers}</div>
          <div className="text-sm text-gray-300">in spatial sessions</div>
        </div>
        <div className="bg-black/40 border border-green-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-400 mb-2">🎯 Spatial Accuracy</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.spatialAccuracy.toFixed(1)}%</div>
          <div className="text-sm text-gray-300">tracking precision</div>
        </div>
        <div className="bg-black/40 border border-blue-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-400 mb-2">🤝 Collaboration</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.collaborationEfficiency.toFixed(1)}%</div>
          <div className="text-sm text-gray-300">efficiency rate</div>
        </div>
        <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">⚡ Spatial Latency</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.spatialLatency.toFixed(0)}ms</div>
          <div className="text-sm text-gray-300">response time</div>
        </div>
      </div>

      {/* Enterprise XR Infrastructure & Immersive Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black/40 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">🥽 Enterprise XR Infrastructure (2026)</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-white">Spatial Computing</span>
              <span className="px-2 py-1 bg-green-600/30 rounded text-green-400 text-sm">ACTIVE</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-300">VR Headsets Connected</div>
                <div className="text-xl font-bold text-cyan-400">{spatialData.xrInfrastructure.vrHeadsetsConnected}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">AR Devices Active</div>
                <div className="text-xl font-bold text-blue-400">{spatialData.xrInfrastructure.arDevicesActive}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Mixed Reality Workflows</div>
                <div className="text-xl font-bold text-purple-400">{spatialData.xrInfrastructure.mixedRealityWorkflows}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Collaboration Sessions</div>
                <div className="text-xl font-bold text-green-400">{spatialData.xrInfrastructure.spatialCollaborationSessions}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Workflow Efficiency</div>
                <div className={`text-xl font-bold ${getAccuracyColor(spatialData.xrInfrastructure.immersiveWorkflowEfficiency)}`}>
                  {spatialData.xrInfrastructure.immersiveWorkflowEfficiency}%
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Spatial Accuracy</div>
                <div className={`text-xl font-bold ${getAccuracyColor(spatialData.xrInfrastructure.spatialAccuracy)}`}>
                  {spatialData.xrInfrastructure.spatialAccuracy}%
                </div>
              </div>
            </div>
            <div className="border-t border-gray-600/30 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Haptic Feedback</span>
                <span className="text-green-400">ENABLED</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Eye Tracking Precision</span>
                <span className={getAccuracyColor(spatialData.xrInfrastructure.eyeTrackingPrecision)}>{spatialData.xrInfrastructure.eyeTrackingPrecision}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Immersive Real-Time Monitoring */}
        <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">👁️ Immersive Real-Time Monitoring</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-white">Virtual Control Tower</span>
              <span className="px-2 py-1 bg-green-600/30 rounded text-green-400 text-sm">ENABLED</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-300">AR Data Overlays</div>
                <div className="text-xl font-bold text-blue-400">{spatialData.immersiveMonitoring.arDataOverlaysLive}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">VR Environment</div>
                <div className="text-xl font-bold text-purple-400">HIGH_DEF</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Visualization Accuracy</div>
                <div className={`text-xl font-bold ${getAccuracyColor(spatialData.immersiveMonitoring.realTimeVisualizationAccuracy)}`}>
                  {spatialData.immersiveMonitoring.realTimeVisualizationAccuracy}%
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Spatial Data Streams</div>
                <div className="text-xl font-bold text-cyan-400">{spatialData.immersiveMonitoring.spatialDataStreams}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">Immersive Alerts</div>
                <div className="text-xl font-bold text-yellow-400">{spatialData.immersiveMonitoring.immersiveAlertsActive}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300">3D Dashboard Elements</div>
                <div className="text-xl font-bold text-green-400">{spatialData.immersiveMonitoring.threedDashboardElements}</div>
              </div>
            </div>
            <div className="border-t border-gray-600/30 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Spatial Navigation</span>
                <span className={getAccuracyColor(spatialData.immersiveMonitoring.spatialNavigationEfficiency)}>{spatialData.immersiveMonitoring.spatialNavigationEfficiency}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Feedback Latency</span>
                <span className="text-green-400">{spatialData.immersiveMonitoring.immersiveFeedbackLatency}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Immersive Operations */}
      <div className="bg-black/40 border border-green-500/30 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-green-400 mb-4">🚀 Live Immersive Operations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {spatialData.liveOperations.map((operation, index) => (
            <div key={operation.operationId} className="border border-gray-600/30 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-semibold text-white">{operation.operationType}</h4>
                <div className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(operation.status)}`}>
                  {operation.status}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-gray-300">Participants</div>
                  <div className="text-cyan-400 font-bold">{operation.participants}</div>
                </div>
                <div>
                  <div className="text-gray-300">Spatial Assets</div>
                  <div className="text-purple-400 font-bold">{operation.spatialAssets}</div>
                </div>
                <div>
                  <div className="text-gray-300">Real-Time Accuracy</div>
                  <div className={`font-bold ${getAccuracyColor(operation.realTimeAccuracy)}`}>{operation.realTimeAccuracy}%</div>
                </div>
                <div>
                  <div className="text-gray-300">Immersive Quality</div>
                  <div className={`font-bold ${getFidelityColor(operation.immersiveQuality)}`}>{operation.immersiveQuality.replace('_', ' ')}</div>
                </div>
                <div>
                  <div className="text-gray-300">Collaboration</div>
                  <div className={`font-bold ${getAccuracyColor(operation.collaborationEfficiency)}`}>{operation.collaborationEfficiency}%</div>
                </div>
                <div>
                  <div className="text-gray-300">Spatial Precision</div>
                  <div className="text-green-400 font-bold">{operation.spatialPrecision}</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-400">
                Criticality: <span className={`${
                  operation.criticalityLevel === 'CRITICAL' ? 'text-red-400' :
                  operation.criticalityLevel === 'HIGH' ? 'text-orange-400' : 'text-yellow-400'
                }`}>{operation.criticalityLevel}</span> • Last Update: {operation.lastUpdate}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spatial Computing Device Integration & Immersive Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">🥽 Spatial Computing Devices</h3>
          <div className="space-y-4">
            {spatialData.spatialDevices.map((device, index) => (
              <div key={device.deviceId} className="border border-gray-600/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-white">{device.deviceType}</h4>
                  <div className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(device.status)}`}>
                    {device.status}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="text-gray-300">User</div>
                    <div className="text-cyan-400">{device.userConnected || 'Available'}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Tracking</div>
                    <div className={getAccuracyColor(device.trackingAccuracy)}>{device.trackingAccuracy}%</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Battery</div>
                    <div className={`${device.batteryLevel > 70 ? 'text-green-400' : device.batteryLevel > 30 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {device.batteryLevel}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-300">Resolution</div>
                    <div className="text-white">{device.spatialResolution}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Refresh Rate</div>
                    <div className="text-purple-400">{device.refreshRate}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Latency</div>
                    <div className="text-green-400">{device.latency}</div>
                  </div>
                </div>
                <div className="mt-2 text-sm">
                  <div className="text-gray-400">Fidelity: <span className={getFidelityColor(device.fidelityLevel)}>{device.fidelityLevel.replace('_', ' ')}</span></div>
                  <div className="text-gray-400">Last Calibration: <span className="text-white">{device.lastCalibration}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Immersive Alerts & Spatial Notifications */}
        <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">🚨 Immersive Alerts & Spatial Notifications</h3>
          <div className="space-y-4">
            {spatialData.immersiveAlerts.map((alert, index) => (
              <div key={alert.alertId} className={`border-l-4 p-4 rounded ${getSeverityColor(alert.severity)}`}>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold text-white">{alert.title}</h4>
                  <div className={`px-2 py-1 rounded text-xs font-bold ${
                    alert.severity === 'CRITICAL' ? 'text-red-400' :
                    alert.severity === 'HIGH' || alert.severity === 'MEDIUM' ? 'text-yellow-400' : 
                    alert.severity === 'SUCCESS' ? 'text-green-400' : 'text-blue-400'
                  }`}>
                    {alert.severity}
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-3">{alert.description}</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-gray-400">Visualization</div>
                    <div className="text-cyan-400">{alert.immersiveVisualization.replace('_', ' ')}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Spatial Location</div>
                    <div className="text-purple-400">{alert.spatialLocation}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Auto Correction</div>
                    <div className="text-green-400">{alert.autoCorrection.replace('_', ' ')}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Affected Users</div>
                    <div className="text-white">{alert.affectedUsers}</div>
                  </div>
                </div>
                <div className="mt-3 text-sm">
                  <div className="text-gray-400">Estimated Resolution</div>
                  <div className="text-blue-400">{alert.estimatedResolution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Control Tower Design & Spatial Analytics Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black/40 border border-indigo-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">🏗️ Control Tower Design (2026)</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-300">Display Configuration</span>
              <span className="text-cyan-400 font-bold">{spatialData.controlTowerDesign.displayWallConfiguration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Simultaneous Data Feeds</span>
              <span className="text-green-400 font-bold">{spatialData.controlTowerDesign.simultaneousDataFeeds}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Data Overlay Accuracy</span>
              <span className={getAccuracyColor(spatialData.controlTowerDesign.liveDataOverlayAccuracy)}>{spatialData.controlTowerDesign.liveDataOverlayAccuracy}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Venue Map Integration</span>
              <span className="text-blue-400">{spatialData.controlTowerDesign.venueMapIntegration.replace('_', ' ')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Multi-Screen Coordination</span>
              <span className="text-purple-400">{spatialData.controlTowerDesign.multiScreenCoordination}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Operator Stations</span>
              <span className="text-white font-bold">{spatialData.controlTowerDesign.operatorStationsActive}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Ergonomic Design</span>
              <span className={getAccuracyColor(spatialData.controlTowerDesign.ergonomicDesignScore)}>{spatialData.controlTowerDesign.ergonomicDesignScore}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Ambient Lighting</span>
              <span className="text-green-400">{spatialData.controlTowerDesign.ambientLightingControl}</span>
            </div>
          </div>
        </div>

        {/* Spatial Analytics & Performance */}
        <div className="bg-black/40 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">📊 Spatial Analytics & Performance</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-300">Spatial Accuracy Score</span>
              <span className={getAccuracyColor(spatialData.spatialAnalytics.spatialAccuracyScore)}>{spatialData.spatialAnalytics.spatialAccuracyScore}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Immersive Engagement</span>
              <span className={getAccuracyColor(spatialData.spatialAnalytics.immersiveEngagementRate)}>{spatialData.spatialAnalytics.immersiveEngagementRate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Collaboration Efficiency</span>
              <span className={getAccuracyColor(spatialData.spatialAnalytics.spatialCollaborationEfficiency)}>{spatialData.spatialAnalytics.spatialCollaborationEfficiency}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Gesture Recognition</span>
              <span className={getAccuracyColor(spatialData.spatialAnalytics.gestureRecognitionSuccess)}>{spatialData.spatialAnalytics.gestureRecognitionSuccess}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Eye Tracking Precision</span>
              <span className={getAccuracyColor(spatialData.spatialAnalytics.eyeTrackingPrecision)}>{spatialData.spatialAnalytics.eyeTrackingPrecision}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Task Completion</span>
              <span className={getAccuracyColor(spatialData.spatialAnalytics.immersiveTaskCompletion)}>{spatialData.spatialAnalytics.immersiveTaskCompletion}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Navigation Speed</span>
              <span className="text-green-400">{spatialData.spatialAnalytics.spatialNavigationSpeed}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Cognitive Load Reduction</span>
              <span className="text-blue-400">{spatialData.spatialAnalytics.cognitiveLoadReduction}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Live Status */}
      <div className="text-center text-gray-400 text-sm">
        <div className="flex justify-center items-center space-x-4">
          <span className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Spatial Computing: ACTIVE
          </span>
          <span className="flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            XR Infrastructure: {spatialData.xrInfrastructure.vrHeadsetsConnected + spatialData.xrInfrastructure.arDevicesActive} devices
          </span>
          <span className="flex items-center">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
            Immersive Workflows: {liveMetrics.spatialWorkflows} active
          </span>
        </div>
        <div className="mt-2">
          🚀 Immersive Spatial Computing Command Center • 2026 Enterprise XR Trends • Last Updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}