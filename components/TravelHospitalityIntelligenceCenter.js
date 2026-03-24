// Travel & Hospitality Intelligence Center - Tourism Analytics, Hotel Management, Airline Operations & Guest Experience Tracking
import { useState, useEffect } from 'react';
import { Plane, Hotel, MapPin, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Compass } from 'lucide-react';

export default function TravelHospitalityIntelligenceCenter() {
  const [travelData, setTravelData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalTravelers: 123456789,
      dailyBookings: 2345678,
      totalRevenue: 45678901234, // EUR daily
      occupancyRate: 78.9,
      averageSpend: 234, // EUR per traveler
      destinations: 23456,
      accommodations: 1234567,
      flightRoutes: 45678,
      tourismGrowth: 12.4, // percentage YoY
      seasonalIndex: 89.7,
      sustainabilityScore: 67.8,
      digitalBookings: 89.3, // percentage
      mobilePenetration: 67.4
    },
    accommodations: [
      {
        property: 'Pestana Palace Hotel Lisbon',
        type: 'Luxury Hotel',
        location: 'Lisbon',
        rooms: 193,
        occupancy: 92.4,
        adr: 345, // Average Daily Rate EUR
        revpar: 318.8, // Revenue per Available Room EUR
        rating: 9.2,
        reviews: 3456,
        bookingChannels: {
          direct: 34.6,
          ota: 45.7, // Online Travel Agency
          corporate: 19.7
        },
        amenities: ['Spa', 'Restaurant', 'Pool', 'Gym', 'Conference'],
        sustainability: 'Green Key Gold'
      },
      {
        property: 'Vila Vita Parc Algarve',
        type: 'Resort',
        location: 'Algarve',
        rooms: 254,
        occupancy: 89.7,
        adr: 278,
        revpar: 249.4,
        rating: 8.9,
        reviews: 2987,
        bookingChannels: {
          direct: 42.3,
          ota: 38.9,
          corporate: 18.8
        },
        amenities: ['Beach', 'Golf', 'Spa', 'Kids Club', 'Marina'],
        sustainability: 'EarthCheck Silver'
      },
      {
        property: 'The Yeatman Porto',
        type: 'Wine Hotel',
        location: 'Porto',
        rooms: 82,
        occupancy: 95.1,
        adr: 289,
        revpar: 274.9,
        rating: 9.5,
        reviews: 1876,
        bookingChannels: {
          direct: 56.7,
          ota: 32.4,
          corporate: 10.9
        },
        amenities: ['Wine Cellar', 'Spa', 'Restaurant', 'View', 'Library'],
        sustainability: 'Biosphere Certified'
      },
      {
        property: 'Quinta do Lago Resort',
        type: 'Golf Resort',
        location: 'Algarve',
        rooms: 141,
        occupancy: 87.3,
        adr: 456,
        revpar: 398.2,
        rating: 8.7,
        reviews: 2234,
        bookingChannels: {
          direct: 48.9,
          ota: 35.6,
          corporate: 15.5
        },
        amenities: ['Golf', 'Beach', 'Tennis', 'Spa', 'Restaurant'],
        sustainability: 'ISO 14001'
      }
    ],
    flightOperations: {
      airlines: [
        {
          airline: 'TAP Air Portugal',
          routes: 234,
          dailyFlights: 456,
          passengers: 12345678, // annual
          onTimePerformance: 87.9,
          loadFactor: 82.4,
          fleet: 102,
          destinations: 89,
          revenue: 2345678901,
          satisfaction: 7.8,
          sustainabilityRating: 'IATA Level 2'
        },
        {
          airline: 'Ryanair Portugal',
          routes: 187,
          dailyFlights: 312,
          passengers: 8765432,
          onTimePerformance: 91.2,
          loadFactor: 94.7,
          fleet: 67,
          destinations: 134,
          revenue: 1876543210,
          satisfaction: 6.9,
          sustainabilityRating: 'CORSIA Compliant'
        },
        {
          airline: 'easyJet Portugal',
          routes: 156,
          dailyFlights: 289,
          passengers: 6543210,
          onTimePerformance: 89.4,
          loadFactor: 88.9,
          fleet: 45,
          destinations: 78,
          revenue: 1234567890,
          satisfaction: 7.2,
          sustainabilityRating: 'Net Zero 2050'
        }
      ],
      airports: [
        {
          airport: 'Lisbon Portela',
          code: 'LIS',
          passengers: 23456789, // annual
          flights: 187654,
          onTime: 84.7,
          satisfaction: 8.1,
          capacity: 22000000,
          utilization: 106.6,
          terminals: 2,
          runways: 2
        },
        {
          airport: 'Porto Francisco Sá Carneiro',
          code: 'OPO',
          passengers: 12345678,
          flights: 98765,
          onTime: 89.3,
          satisfaction: 8.4,
          capacity: 11000000,
          utilization: 112.2,
          terminals: 1,
          runways: 1
        },
        {
          airport: 'Faro',
          code: 'FAO',
          passengers: 8765432,
          flights: 67890,
          onTime: 91.7,
          satisfaction: 7.9,
          capacity: 7000000,
          utilization: 125.2,
          terminals: 1,
          runways: 1
        }
      ]
    },
    destinations: [
      {
        destination: 'Lisbon',
        visitors: 4567890, // annual
        avgStay: 3.4, // days
        spendPerDay: 156, // EUR
        seasonality: 'Year-round',
        satisfaction: 8.7,
        accommodation: 234,
        attractions: 89,
        restaurants: 1234,
        sustainabilityIndex: 78.9,
        crowdingIndex: 67.3
      },
      {
        destination: 'Porto',
        visitors: 2987654,
        avgStay: 2.8,
        spendPerDay: 134,
        seasonality: 'Year-round',
        satisfaction: 8.9,
        accommodation: 189,
        attractions: 67,
        restaurants: 876,
        sustainabilityIndex: 82.1,
        crowdingIndex: 54.6
      },
      {
        destination: 'Algarve',
        visitors: 3456789,
        avgStay: 7.2,
        spendPerDay: 123,
        seasonality: 'Summer Peak',
        satisfaction: 8.2,
        accommodation: 456,
        attractions: 123,
        restaurants: 987,
        sustainabilityIndex: 71.4,
        crowdingIndex: 89.7
      },
      {
        destination: 'Madeira',
        visitors: 1876543,
        avgStay: 5.6,
        spendPerDay: 145,
        seasonality: 'Winter Peak',
        satisfaction: 9.1,
        accommodation: 123,
        attractions: 45,
        restaurants: 234,
        sustainabilityIndex: 85.3,
        crowdingIndex: 43.2
      }
    ],
    bookingPlatforms: {
      onlineTravel: [
        {
          platform: 'Booking.com',
          marketShare: 34.7,
          bookings: 234567, // daily
          revenue: 12345678,
          commission: 15.2, // percentage
          properties: 23456,
          satisfaction: 8.3,
          mobileShare: 67.8
        },
        {
          platform: 'Expedia',
          marketShare: 23.4,
          bookings: 156789,
          revenue: 8765432,
          commission: 18.7,
          properties: 18976,
          satisfaction: 7.9,
          mobileShare: 62.4
        },
        {
          platform: 'Airbnb',
          marketShare: 18.9,
          bookings: 123456,
          revenue: 6543210,
          commission: 12.5,
          properties: 45678,
          satisfaction: 8.1,
          mobileShare: 78.9
        },
        {
          platform: 'Hotels.com',
          marketShare: 12.6,
          bookings: 98765,
          revenue: 4321098,
          commission: 16.8,
          properties: 12345,
          satisfaction: 7.6,
          mobileShare: 59.3
        }
      ],
      directBookings: {
        percentage: 34.6,
        growth: 8.7, // YoY
        conversionRate: 3.4,
        averageValue: 287, // EUR
        loyaltyPrograms: 89,
        memberPenetration: 45.7
      }
    },
    guestExperience: {
      satisfaction: {
        overall: 8.2, // out of 10
        checkin: 8.6,
        rooms: 8.1,
        service: 8.4,
        amenities: 7.9,
        cleanliness: 8.8,
        value: 7.6,
        location: 8.3
      },
      digitalServices: {
        mobileCheckin: 67.8, // percentage adoption
        keylessEntry: 45.3,
        inRoomTech: 56.7,
        conciergeApp: 34.9,
        voiceAssistant: 23.1,
        smartTV: 78.9,
        wifiSatisfaction: 7.8
      },
      preferences: {
        sustainability: 67.8, // percentage who care
        wellness: 54.3,
        localExperience: 78.9,
        workation: 34.6,
        petFriendly: 23.4,
        familyFriendly: 45.7,
        adultOnly: 18.9
      }
    },
    sustainabilityMetrics: {
      certifiedProperties: 2345, // Green certified
      carbonFootprint: 123456, // tons CO2/year
      wasteReduction: 23.4, // percentage
      energyEfficiency: 18.7, // improvement percentage
      localSourcing: 67.8, // percentage
      communityImpact: 8.3, // score out of 10
      biodiversityProjects: 89,
      sustainableTourism: 78.9 // percentage adoption
    },
    marketTrends: {
      emergingDestinations: [
        { destination: 'Azores', growth: 34.6, visitors: 456789 },
        { destination: 'Beiras Region', growth: 28.9, visitors: 234567 },
        { destination: 'Alentejo', growth: 22.1, visitors: 345678 },
        { destination: 'Minho', growth: 19.7, visitors: 189076 }
      ],
      travelPurpose: {
        leisure: 67.8,
        business: 23.4,
        visiting_family: 5.6,
        medical: 2.1,
        education: 1.1
      },
      bookingWindow: {
        sameDay: 12.3, // percentage
        within7days: 23.4,
        within30days: 45.7,
        advance: 18.6
      }
    },
    travelAlerts: [
      {
        type: 'CRITICAL',
        category: 'Flight Operations',
        message: 'Lisbon Airport experiencing severe weather delays - 45 flight cancellations, 200+ passengers affected',
        location: 'Lisbon Portela Airport',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '03:15',
        recommendations: ['Passenger rebooking', 'Hotel accommodations', 'Ground transportation', 'Communication updates']
      },
      {
        type: 'WARNING',
        category: 'Hotel Occupancy',
        message: 'Algarve region hotels at 95%+ occupancy - limited availability for walk-in guests',
        location: 'Algarve Region',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '03:12',
        recommendations: ['Dynamic pricing activation', 'Oversold management', 'Partner hotel coordination', 'Guest expectations']
      },
      {
        type: 'SUCCESS',
        category: 'Sustainability Achievement',
        message: 'Pestana Hotels achieves 25% carbon reduction target ahead of 2025 goal',
        location: 'All Pestana Properties',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '03:08',
        recommendations: ['Press release', 'Marketing campaign', 'Awards submission', 'Best practice sharing']
      },
      {
        type: 'INFO',
        category: 'Market Intelligence',
        message: 'Summer 2026 bookings up 18% YoY - strong recovery continues in leisure segment',
        location: 'Portugal Tourism',
        impact: 'LOW',
        actionRequired: false,
        timestamp: '03:05',
        recommendations: ['Capacity planning', 'Staffing adjustments', 'Marketing optimization', 'Revenue strategy update']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTravelData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        industryOverview: {
          ...prev.industryOverview,
          dailyBookings: Math.max(2000000, Math.min(3000000, prev.industryOverview.dailyBookings + Math.floor((Math.random() - 0.5) * 100000))),
          occupancyRate: Math.max(70.0, Math.min(95.0, prev.industryOverview.occupancyRate + (Math.random() - 0.5) * 3))
        },
        flightOperations: {
          ...prev.flightOperations,
          airports: prev.flightOperations.airports.map(airport => ({
            ...airport,
            onTime: Math.max(75.0, Math.min(95.0, airport.onTime + (Math.random() - 0.5) * 5))
          }))
        }
      }));
    }, 22000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'SUCCESS': return 'border-green-500 bg-green-900/30 text-green-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'POSITIVE': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 80, excellent = 90) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSeasonalityColor = (seasonality) => {
    switch (seasonality) {
      case 'Year-round': return 'text-green-400 bg-green-400/20';
      case 'Summer Peak': return 'text-orange-400 bg-orange-400/20';
      case 'Winter Peak': return 'text-blue-400 bg-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000000) {
      return `€${(amount / 1000000000).toFixed(1)}B`;
    }
    if (amount >= 1000000) {
      return `€${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `€${(amount / 1000).toFixed(0)}K`;
    }
    return `€${amount.toLocaleString()}`;
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-sky-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-sky-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-xl">
              <Plane className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Travel & Hospitality Intelligence Center</h1>
              <p className="text-sky-300">Tourism analytics, hotel management, airline operations & guest experience tracking</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-sky-400">{travelData.currentTime}</div>
            <div className="text-sky-300">Travel Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-sky-400 mr-2" />
                Global Travelers
              </h3>
            </div>
            <div className="text-3xl font-bold text-sky-400">{formatNumber(travelData.industryOverview.globalTravelers)}</div>
            <div className="text-sky-300 text-sm">Daily Bookings: {formatNumber(travelData.industryOverview.dailyBookings)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Daily Revenue
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(travelData.industryOverview.totalRevenue)}</div>
            <div className="text-green-300 text-sm">Avg Spend: €{travelData.industryOverview.averageSpend}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Hotel className="w-5 h-5 text-purple-400 mr-2" />
                Occupancy Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(travelData.industryOverview.occupancyRate)}</div>
            <div className="text-purple-300 text-sm">Accommodations: {formatNumber(travelData.industryOverview.accommodations)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <MapPin className="w-5 h-5 text-orange-400 mr-2" />
                Destinations
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(travelData.industryOverview.destinations)}</div>
            <div className="text-orange-300 text-sm">Flight Routes: {formatNumber(travelData.industryOverview.flightRoutes)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                Tourism Growth
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">+{formatPercentage(travelData.industryOverview.tourismGrowth)}</div>
            <div className="text-cyan-300 text-sm">Seasonal Index: {formatPercentage(travelData.industryOverview.seasonalIndex)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                Digital Bookings
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatPercentage(travelData.industryOverview.digitalBookings)}</div>
            <div className="text-emerald-300 text-sm">Mobile: {formatPercentage(travelData.industryOverview.mobilePenetration)}</div>
          </div>
        </div>

        {/* Accommodations Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Hotel className="w-5 h-5 text-purple-400 mr-2" />
            Hotel & Resort Performance Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Property</th>
                  <th className="text-center p-3 text-slate-300">Type</th>
                  <th className="text-center p-3 text-slate-300">Occupancy</th>
                  <th className="text-center p-3 text-slate-300">ADR</th>
                  <th className="text-center p-3 text-slate-300">RevPAR</th>
                  <th className="text-center p-3 text-slate-300">Rating</th>
                  <th className="text-center p-3 text-slate-300">Direct %</th>
                </tr>
              </thead>
              <tbody>
                {travelData.accommodations.map((property, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{property.property}</div>
                      <div className="text-slate-400 text-xs">{property.location} • {property.rooms} rooms • {property.sustainability}</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {property.type}
                      </span>
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(property.occupancy, 75, 85)}`}>
                      {formatPercentage(property.occupancy)}
                    </td>
                    <td className="p-3 text-center text-green-400">€{property.adr}</td>
                    <td className="p-3 text-center text-blue-400">€{property.revpar.toFixed(1)}</td>
                    <td className="p-3 text-center text-yellow-400">★{property.rating.toFixed(1)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(property.bookingChannels.direct, 30, 40)}`}>
                      {formatPercentage(property.bookingChannels.direct)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Flight Operations & Destinations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Plane className="w-5 h-5 text-sky-400 mr-2" />
              Flight Operations Intelligence
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Airlines</h4>
                {travelData.flightOperations.airlines.map((airline, index) => (
                  <div key={index} className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-white text-sm font-medium">{airline.airline}</div>
                      <div className="text-slate-400 text-xs">{airline.routes} routes • {airline.fleet} aircraft</div>
                    </div>
                    <div className="text-right text-xs">
                      <div className={`${getPerformanceColor(airline.onTimePerformance, 80, 90)}`}>
                        {formatPercentage(airline.onTimePerformance)} OTP
                      </div>
                      <div className="text-green-400">{formatPercentage(airline.loadFactor)} Load</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Airports</h4>
                {travelData.flightOperations.airports.map((airport, index) => (
                  <div key={index} className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-white text-sm font-medium">{airport.airport} ({airport.code})</div>
                      <div className="text-slate-400 text-xs">{formatNumber(airport.passengers)} pax • {airport.terminals}T {airport.runways}R</div>
                    </div>
                    <div className="text-right text-xs">
                      <div className={`${getPerformanceColor(airport.onTime, 80, 90)}`}>
                        {formatPercentage(airport.onTime)} OTP
                      </div>
                      <div className="text-yellow-400">★{airport.satisfaction.toFixed(1)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <MapPin className="w-5 h-5 text-orange-400 mr-2" />
              Top Destinations Intelligence
            </h3>
            <div className="space-y-4">
              {travelData.destinations.map((destination, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{destination.destination}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getSeasonalityColor(destination.seasonality)}`}>
                        {destination.seasonality}
                      </span>
                    </div>
                    <span className="text-yellow-400 text-sm">★{destination.satisfaction.toFixed(1)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-sky-400">Visitors: {formatNumber(destination.visitors)}</div>
                      <div className="text-green-400">Avg Stay: {destination.avgStay.toFixed(1)} days</div>
                      <div className="text-purple-400">Daily Spend: €{destination.spendPerDay}</div>
                    </div>
                    <div>
                      <div className="text-orange-400">Hotels: {destination.accommodation}</div>
                      <div className="text-cyan-400">Attractions: {destination.attractions}</div>
                      <div className="text-slate-300">Restaurants: {formatNumber(destination.restaurants)}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-400">Sustainability: {formatPercentage(destination.sustainabilityIndex)}</span>
                    <span className={`${destination.crowdingIndex > 75 ? 'text-red-400' : destination.crowdingIndex > 50 ? 'text-yellow-400' : 'text-green-400'}`}>
                      Crowding: {formatPercentage(destination.crowdingIndex)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Platforms & Guest Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Compass className="w-5 h-5 text-indigo-400 mr-2" />
              Booking Platform Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400">{formatPercentage(travelData.bookingPlatforms.directBookings.percentage)}</div>
                <div className="text-indigo-300 text-sm">Direct Bookings</div>
                <div className="text-gray-400 text-xs mt-1">Growth: +{formatPercentage(travelData.bookingPlatforms.directBookings.growth)} YoY</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">€{travelData.bookingPlatforms.directBookings.averageValue}</div>
                <div className="text-green-300 text-sm">Avg Direct Value</div>
                <div className="text-gray-400 text-xs mt-1">Conversion: {formatPercentage(travelData.bookingPlatforms.directBookings.conversionRate)}</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white text-sm font-medium">OTA Performance</h4>
              {travelData.bookingPlatforms.onlineTravel.map((platform, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{platform.platform}</div>
                    <div className="text-slate-400 text-xs">{formatNumber(platform.properties)} properties</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-blue-400">{formatPercentage(platform.marketShare)} share</div>
                    <div className="text-green-400">{formatNumber(platform.bookings)} daily</div>
                    <div className="text-yellow-400">★{platform.satisfaction.toFixed(1)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              Guest Experience Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{travelData.guestExperience.satisfaction.overall.toFixed(1)}</div>
                <div className="text-yellow-300 text-sm">Overall Satisfaction</div>
                <div className="text-gray-400 text-xs mt-1">Scale: 1-10</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(travelData.guestExperience.digitalServices.mobileCheckin)}</div>
                <div className="text-cyan-300 text-sm">Mobile Check-in</div>
                <div className="text-gray-400 text-xs mt-1">Keyless: {formatPercentage(travelData.guestExperience.digitalServices.keylessEntry)}</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Satisfaction Breakdown</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cleanliness</span>
                  <span className="text-green-400">{travelData.guestExperience.satisfaction.cleanliness.toFixed(1)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Check-in</span>
                  <span className="text-green-400">{travelData.guestExperience.satisfaction.checkin.toFixed(1)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Service</span>
                  <span className="text-blue-400">{travelData.guestExperience.satisfaction.service.toFixed(1)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Value</span>
                  <span className="text-yellow-400">{travelData.guestExperience.satisfaction.value.toFixed(1)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Guest Preferences</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Local Experience</span>
                  <span className="text-green-400">{formatPercentage(travelData.guestExperience.preferences.localExperience)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sustainability</span>
                  <span className="text-emerald-400">{formatPercentage(travelData.guestExperience.preferences.sustainability)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Wellness</span>
                  <span className="text-blue-400">{formatPercentage(travelData.guestExperience.preferences.wellness)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Workation</span>
                  <span className="text-purple-400">{formatPercentage(travelData.guestExperience.preferences.workation)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Travel & Hospitality Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {travelData.travelAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                  <div>
                    <div className="text-slate-300">Location: {alert.location}</div>
                    <div className="text-slate-300">Action: {alert.actionRequired ? 'Required' : 'Monitoring'}</div>
                  </div>
                  <div>
                    <div className={`${getImpactColor(alert.impact).split(' ')[0]} text-xs`}>
                      Impact: {alert.impact}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {alert.recommendations.map((rec, recIndex) => (
                    <span key={recIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Trends & Sustainability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Market Trends Intelligence
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Emerging Destinations</h4>
                {travelData.marketTrends.emergingDestinations.map((dest, index) => (
                  <div key={index} className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm">{dest.destination}</span>
                    <div className="text-xs space-x-2">
                      <span className="text-green-400">+{formatPercentage(dest.growth)}</span>
                      <span className="text-blue-400">{formatNumber(dest.visitors)} visitors</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Travel Purpose</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Leisure</span>
                    <span className="text-green-400">{formatPercentage(travelData.marketTrends.travelPurpose.leisure)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Business</span>
                    <span className="text-blue-400">{formatPercentage(travelData.marketTrends.travelPurpose.business)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Visiting Family</span>
                    <span className="text-purple-400">{formatPercentage(travelData.marketTrends.travelPurpose.visiting_family)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Medical</span>
                    <span className="text-orange-400">{formatPercentage(travelData.marketTrends.travelPurpose.medical)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Booking Window</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Same Day</span>
                    <span className="text-red-400">{formatPercentage(travelData.marketTrends.bookingWindow.sameDay)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Within 7 Days</span>
                    <span className="text-yellow-400">{formatPercentage(travelData.marketTrends.bookingWindow.within7days)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Within 30 Days</span>
                    <span className="text-green-400">{formatPercentage(travelData.marketTrends.bookingWindow.within30days)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Advance</span>
                    <span className="text-blue-400">{formatPercentage(travelData.marketTrends.bookingWindow.advance)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
              Sustainability Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatNumber(travelData.sustainabilityMetrics.certifiedProperties)}</div>
                <div className="text-emerald-300 text-sm">Certified Properties</div>
                <div className="text-gray-400 text-xs mt-1">Green certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(travelData.sustainabilityMetrics.energyEfficiency)}</div>
                <div className="text-blue-300 text-sm">Energy Efficiency</div>
                <div className="text-gray-400 text-xs mt-1">Improvement YoY</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Environmental Impact</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Carbon Footprint: {formatNumber(travelData.sustainabilityMetrics.carbonFootprint)} tons CO2/year</div>
                    <div className="text-slate-300">Waste Reduction: {formatPercentage(travelData.sustainabilityMetrics.wasteReduction)}</div>
                    <div className="text-slate-300">Local Sourcing: {formatPercentage(travelData.sustainabilityMetrics.localSourcing)}</div>
                  </div>
                  <div>
                    <div className="text-green-400">Community Impact: {travelData.sustainabilityMetrics.communityImpact.toFixed(1)}/10</div>
                    <div className="text-blue-400">Biodiversity Projects: {travelData.sustainabilityMetrics.biodiversityProjects}</div>
                    <div className="text-purple-400">Sustainable Tourism: {formatPercentage(travelData.sustainabilityMetrics.sustainableTourism)}</div>
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