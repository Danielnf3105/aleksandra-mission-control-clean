// MobileResponsiveLayout.js - Mobile-first responsive design enhancements for Mission Control
import { useState, useEffect } from 'react';

const MobileResponsiveLayout = ({ children, currentView, setCurrentView, missionViews }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orientation, setOrientation] = useState('portrait');
  const [touchSupport, setTouchSupport] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setOrientation(height > width ? 'portrait' : 'landscape');
      setTouchSupport('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    window.addEventListener('orientationchange', checkDeviceType);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
      window.removeEventListener('orientationchange', checkDeviceType);
    };
  }, []);

  // Close mobile menu when view changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentView]);

  const handleViewChange = (viewId) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
  };

  const getCurrentViewInfo = () => {
    return missionViews.find(view => view.id === currentView) || missionViews[0];
  };

  const currentViewInfo = getCurrentViewInfo();

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Mobile Header */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black border-b-2 border-green-400/50 shadow-lg">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white p-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>
                <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-mono">
                  🦾 ALEKSANDRA
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xs text-green-400 font-mono">LIVE</div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Current View Indicator */}
            <div className="mt-2">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{currentViewInfo.icon}</span>
                <span className="text-sm font-bold text-white">{currentViewInfo.name}</span>
              </div>
              <div className="text-xs text-gray-400">{currentViewInfo.description}</div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="bg-gray-800 border-t border-gray-700 max-h-96 overflow-y-auto">
              <div className="py-2">
                {missionViews.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => handleViewChange(view.id)}
                    className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-700 transition-colors ${
                      currentView === view.id ? 'bg-gray-700 border-r-4 border-green-400' : ''
                    }`}
                  >
                    <span className="text-xl">{view.icon}</span>
                    <div>
                      <div className={`text-sm font-bold ${currentView === view.id ? view.color : 'text-white'}`}>
                        {view.name}
                      </div>
                      <div className="text-xs text-gray-400">{view.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Content */}
        <div className="p-4">
          {/* Touch-optimized content wrapper */}
          <div className="space-y-4" style={{ WebkitOverflowScrolling: 'touch' }}>
            {children}
          </div>
        </div>

        {/* Mobile Quick Actions Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 px-4 py-2">
          <div className="flex justify-around">
            <button className="flex flex-col items-center py-1 px-2 rounded text-xs text-gray-400 hover:text-white">
              <span className="text-lg mb-1">🚀</span>
              <span>Mission</span>
            </button>
            <button className="flex flex-col items-center py-1 px-2 rounded text-xs text-gray-400 hover:text-white">
              <span className="text-lg mb-1">📊</span>
              <span>Data</span>
            </button>
            <button className="flex flex-col items-center py-1 px-2 rounded text-xs text-gray-400 hover:text-white">
              <span className="text-lg mb-1">🤝</span>
              <span>Team</span>
            </button>
            <button className="flex flex-col items-center py-1 px-2 rounded text-xs text-gray-400 hover:text-white">
              <span className="text-lg mb-1">🛡️</span>
              <span>Security</span>
            </button>
          </div>
        </div>

        {/* Mobile spacing for bottom bar */}
        <div className="h-16"></div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Tablet Header */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black border-b-2 border-green-400/50 shadow-lg">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-mono flex items-center">
                🦾 ALEKSANDRA MISSION CONTROL
                <div className="ml-3 flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <div className="text-xs text-green-400 font-bold tracking-wider">LIVE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Navigation */}
        <div className="bg-gray-800 border-b border-gray-700">
          <div className="px-6">
            <div className="flex overflow-x-auto py-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {missionViews.map((view) => (
                <button
                  key={view.id}
                  onClick={() => setCurrentView(view.id)}
                  className={`flex-shrink-0 py-3 px-4 border-b-4 text-sm font-bold font-mono transition-all duration-300 hover:bg-gray-700 ${
                    currentView === view.id
                      ? `border-green-500 bg-gray-700 ${view.color}`
                      : 'border-transparent text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{view.icon}</span>
                    <span className="whitespace-nowrap">{view.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet Content */}
        <div className="px-6 py-6">
          {children}
        </div>
      </div>
    );
  }

  // Desktop layout (return original)
  return children;
};

// Mobile-optimized components
export const MobileCard = ({ title, children, className = "" }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`bg-gray-800 rounded-lg border border-gray-700 ${className}`}>
      <div 
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h3 className="text-sm font-bold text-white font-mono">{title}</h3>
        <svg 
          className={`w-4 h-4 text-gray-400 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {!isCollapsed && (
        <div className="px-4 pb-4">
          {children}
        </div>
      )}
    </div>
  );
};

export const MobileGrid = ({ children, cols = 1 }) => {
  return (
    <div className={`grid grid-cols-${cols} gap-4`}>
      {children}
    </div>
  );
};

export const TouchButton = ({ onClick, children, className = "", variant = "primary" }) => {
  const baseClasses = "px-4 py-3 rounded-lg font-medium transition-colors touch-manipulation";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    warning: "bg-yellow-600 hover:bg-yellow-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={{ minHeight: '44px', minWidth: '44px' }} // iOS touch targets
    >
      {children}
    </button>
  );
};

export const MobileMetricCard = ({ title, value, subtitle, icon, color = "blue" }) => {
  return (
    <div className={`bg-gradient-to-br from-${color}-900 to-${color}-800 rounded-lg p-4 border border-${color}-500/30`}>
      <div className="flex items-center justify-between">
        <div>
          <div className={`text-xs text-${color}-200`}>{title}</div>
          <div className={`text-xl font-bold text-${color}-100`}>{value}</div>
          {subtitle && <div className={`text-xs text-${color}-300`}>{subtitle}</div>}
        </div>
        {icon && <div className="text-2xl opacity-60">{icon}</div>}
      </div>
    </div>
  );
};

export default MobileResponsiveLayout;