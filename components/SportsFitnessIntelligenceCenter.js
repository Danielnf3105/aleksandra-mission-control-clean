// Sports & Fitness Intelligence Center - Athletic Performance, Sports Analytics, Fan Engagement & Health Monitoring
import { useState, useEffect } from 'react';
import { Trophy, Activity, Users, TrendingUp, TrendingDown, Star, AlertTriangle, CheckCircle, Target, BarChart3, Heart } from 'lucide-react';

export default function SportsFitnessIntelligenceCenter() {
  const [sportsData, setSportsData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalSportsMarket: 456789012345, // EUR
      dailyEngagement: 234567890,
      totalAthletes: 12345678,
      professionalLeagues: 1234,
      sportsEvents: 45678,
      viewership: 3456789012,
      merchandiseSales: 23456789,
      ticketRevenue: 12345678,
      mediaRights: 345678901,
      sponsorshipValue: 234567890,
      fitnessAppUsers: 567890123,
      wearableDevices: 234567890,
      avgWorkoutTime: 45.6 // minutes
    },
    sportsLeagues: [
      {
        league: 'UEFA Champions League',
        sport: 'Football',
        teams: 32,
        matches: 125,
        viewership: 1234567890,
        revenue: 2345678901,
        sponsorship: 456789012,
        avgAttendance: 45678,
        socialFollowers: 234567890,
        broadcastCountries: 200,
        marketValue: 12345678901,
        playerSalaries: 2345678901
      },
      {
        league: 'Premier League',
        sport: 'Football',
        teams: 20,
        matches: 380,
        viewership: 987654321,
        revenue: 5432109876,
        sponsorship: 876543210,
        avgAttendance: 38765,
        socialFollowers: 345678901,
        broadcastCountries: 188,
        marketValue: 9876543210,
        playerSalaries: 3456789012
      },
      {
        league: 'NBA',
        sport: 'Basketball',
        teams: 30,
        matches: 1230,
        viewership: 765432109,
        revenue: 8765432109,
        sponsorship: 1234567890,
        avgAttendance: 17500,
        socialFollowers: 567890123,
        broadcastCountries: 215,
        marketValue: 7654321098,
        playerSalaries: 4567890123
      },
      {
        league: 'Formula 1',
        sport: 'Motor Racing',
        teams: 10,
        matches: 24,
        viewership: 543210987,
        revenue: 2109876543,
        sponsorship: 987654321,
        avgAttendance: 89567,
        socialFollowers: 456789012,
        broadcastCountries: 190,
        marketValue: 8765432109,
        playerSalaries: 234567890
      }
    ],
    athleticPerformance: {
      professionalAthletes: [
        {
          athlete: 'Cristiano Ronaldo',
          sport: 'Football',
          team: 'Al Nassr',
          performance: {
            goals: 34,
            assists: 12,
            matches: 28,
            minutesPlayed: 2456,
            fitnessScore: 94.7,
            injuryDays: 0,
            marketValue: 25000000, // EUR
            socialMedia: 567890123
          },
          biometrics: {
            heartRate: 45, // resting BPM
            maxSpeed: 32.5, // km/h
            distanceCovered: 10.2, // km avg per match
            jumpHeight: 78, // cm
            bodyFat: 7.2, // percentage
            vo2Max: 67.8
          }
        },
        {
          athlete: 'LeBron James',
          sport: 'Basketball',
          team: 'LA Lakers',
          performance: {
            points: 25.7, // per game average
            rebounds: 7.3,
            assists: 8.3,
            minutes: 35.3,
            fitnessScore: 89.4,
            injuryDays: 12,
            marketValue: 44000000,
            socialMedia: 234567890
          },
          biometrics: {
            heartRate: 50,
            maxSpeed: 28.3,
            jumpHeight: 89,
            bodyFat: 6.8,
            vo2Max: 62.1,
            recoveryTime: 18.4 // hours
          }
        },
        {
          athlete: 'Max Verstappen',
          sport: 'Formula 1',
          team: 'Red Bull Racing',
          performance: {
            wins: 15,
            podiums: 18,
            poles: 12,
            points: 489,
            fitnessScore: 92.1,
            injuryDays: 0,
            marketValue: 15000000,
            socialMedia: 12345678
          },
          biometrics: {
            heartRate: 42,
            reactionTime: 0.187, // seconds
            gForce: 5.2, // max sustained
            bodyFat: 8.1,
            vo2Max: 71.2,
            focus: 96.8 // concentration score
          }
        }
      ],
      teamPerformance: {
        topTeams: [
          { team: 'Manchester City', sport: 'Football', wins: 28, draws: 5, losses: 5, points: 89, value: 1200000000 },
          { team: 'Boston Celtics', sport: 'Basketball', wins: 52, losses: 14, winPct: 78.8, value: 4700000000 },
          { team: 'Red Bull Racing', sport: 'F1', wins: 15, podiums: 28, points: 860, value: 2300000000 }
        ]
      }
    },
    fitnessMetrics: {
      globalFitness: {
        activeUsers: 567890123,
        dailyWorkouts: 234567890,
        averageSteps: 8765,
        caloriesBurned: 2345678901, // daily total
        workoutMinutes: 34567890, // daily total
        fitnessGoalsMet: 67.8, // percentage
        wearableAdoption: 34.6,
        gymMemberships: 123456789
      },
      popularWorkouts: [
        { workout: 'Running', participants: 123456789, avgDuration: 32.4, caloriesPerMin: 10.2 },
        { workout: 'Strength Training', participants: 98765432, avgDuration: 45.7, caloriesPerMin: 8.9 },
        { workout: 'Yoga', participants: 87654321, avgDuration: 52.3, caloriesPerMin: 3.2 },
        { workout: 'Cycling', participants: 76543210, avgDuration: 47.8, caloriesPerMin: 9.8 },
        { workout: 'Swimming', participants: 65432109, avgDuration: 38.9, caloriesPerMin: 11.4 }
      ],
      wearableData: {
        devices: [
          { brand: 'Apple Watch', marketShare: 34.7, users: 78654321, avgSteps: 9234, satisfaction: 8.7 },
          { brand: 'Fitbit', marketShare: 23.4, users: 54321098, avgSteps: 8567, satisfaction: 8.2 },
          { brand: 'Garmin', marketShare: 18.9, users: 43210987, avgSteps: 9876, satisfaction: 8.9 },
          { brand: 'Samsung Galaxy Watch', marketShare: 12.6, users: 32109876, avgSteps: 8234, satisfaction: 7.8 }
        ],
        metrics: {
          heartRateTracking: 89.7,
          sleepTracking: 78.9,
          gpsAccuracy: 94.2,
          batteryLife: 2.3, // days average
          dataAccuracy: 87.6
        }
      }
    },
    fanEngagement: {
      digitalEngagement: {
        socialMediaFollowers: 2345678901,
        dailyInteractions: 234567890,
        liveStreamViewers: 123456789,
        mobileAppUsers: 345678901,
        fantasyPlayers: 87654321,
        bettingUsers: 54321098,
        merchandisePurchases: 12345678,
        ticketsSold: 23456789
      },
      platforms: [
        {
          platform: 'Instagram',
          followers: 567890123,
          engagement: 34567890,
          posts: 234567,
          stories: 456789,
          avgLikes: 123456,
          demographics: { '18-24': 34.6, '25-34': 28.9, '35-44': 19.7, '45+': 16.8 }
        },
        {
          platform: 'TikTok',
          followers: 345678901,
          engagement: 56789012,
          videos: 123456,
          views: 2345678901,
          avgShares: 45678,
          demographics: { '16-24': 56.7, '25-34': 23.4, '35-44': 12.8, '45+': 7.1 }
        },
        {
          platform: 'Twitter/X',
          followers: 234567890,
          engagement: 23456789,
          tweets: 345678,
          retweets: 234567,
          avgLikes: 34567,
          demographics: { '18-24': 28.9, '25-34': 34.6, '35-44': 23.7, '45+': 12.8 }
        }
      ],
      fanBehavior: {
        avgGameAttendance: 78.9, // percentage of capacity
        seasonTicketHolders: 23.4,
        merchandiseSpending: 234, // EUR per fan per year
        concessionSpending: 45, // EUR per visit
        loyaltyPrograms: 67.8,
        watchParties: 34.6,
        fantasyParticipation: 28.9
      }
    },
    sportsEconomics: {
      revenue: {
        mediaRights: 23456789012, // EUR
        sponsorships: 12345678901,
        ticketing: 8765432109,
        merchandise: 5432109876,
        betting: 3456789012,
        concessions: 2345678901,
        licensing: 1876543210
      },
      investments: {
        facilityUpgrades: 4567890123,
        playerSalaries: 34567890123,
        technology: 1234567890,
        marketing: 2345678901,
        coaching: 987654321,
        analytics: 567890123,
        youthDevelopment: 789012345
      },
      marketTrends: {
        esportsGrowth: 234.6, // percentage
        streamingRevenue: 156.8,
        wearableTech: 189.4,
        virtualReality: 98.7,
        nftCollectibles: 67.3,
        cryptoSponsorship: 45.2
      }
    },
    healthWellness: {
      populationHealth: {
        activeAdults: 67.8, // percentage
        obesityRate: 23.4,
        cardiovascularHealth: 76.9,
        mentalWellness: 72.1,
        sleepQuality: 68.4,
        stressLevels: 32.7, // lower is better
        hydrationLevels: 81.3,
        nutritionScore: 74.6
      },
      corporateWellness: {
        programParticipation: 45.6,
        fitnessSubsidies: 67.8,
        mentalHealthSupport: 78.9,
        workplaceGyms: 34.2,
        healthScreenings: 89.3,
        wellnessChallenges: 56.7,
        ergonomicAssessments: 78.4
      }
    },
    sportsAlerts: [
      {
        type: 'CRITICAL',
        category: 'Player Injury',
        message: 'Star player suffers ACL injury during training - 6-9 months recovery expected, €50M impact',
        league: 'Premier League',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '03:28',
        recommendations: ['Medical evaluation', 'Replacement strategy', 'Insurance claim', 'Fan communication']
      },
      {
        type: 'WARNING',
        category: 'Fan Safety',
        message: 'Stadium crowd capacity at 98% - implement additional security measures for high-risk match',
        league: 'UEFA Champions League',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '03:25',
        recommendations: ['Security deployment', 'Crowd control', 'Emergency protocols', 'Medical standby']
      },
      {
        type: 'SUCCESS',
        category: 'Performance Achievement',
        message: 'Team breaks franchise record - 15 consecutive wins, fan engagement up 340%',
        league: 'NBA',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '03:20',
        recommendations: ['Marketing campaign', 'Merchandise push', 'Media interviews', 'Celebration events']
      },
      {
        type: 'INFO',
        category: 'Technology Innovation',
        message: 'New AR fan experience launches - 67% adoption rate in first week',
        league: 'Formula 1',
        impact: 'LOW',
        actionRequired: false,
        timestamp: '03:15',
        recommendations: ['User feedback collection', 'Feature optimization', 'Expansion planning', 'Partnership opportunities']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSportsData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        industryOverview: {
          ...prev.industryOverview,
          dailyEngagement: Math.max(200000000, Math.min(300000000, prev.industryOverview.dailyEngagement + Math.floor((Math.random() - 0.5) * 20000000))),
          viewership: Math.max(3000000000, Math.min(4000000000, prev.industryOverview.viewership + Math.floor((Math.random() - 0.5) * 100000000)))
        },
        fitnessMetrics: {
          ...prev.fitnessMetrics,
          globalFitness: {
            ...prev.fitnessMetrics.globalFitness,
            dailyWorkouts: Math.max(200000000, Math.min(300000000, prev.fitnessMetrics.globalFitness.dailyWorkouts + Math.floor((Math.random() - 0.5) * 10000000)))
          }
        }
      }));
    }, 25000);

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

  const getSportColor = (sport) => {
    switch (sport) {
      case 'Football': return 'text-green-400 bg-green-400/20';
      case 'Basketball': return 'text-orange-400 bg-orange-400/20';
      case 'Motor Racing': return 'text-red-400 bg-red-400/20';
      case 'Tennis': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000000) {
      return `${(num / 1000000000000).toFixed(1)}T`;
    }
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
    if (amount >= 1000000000000) {
      return `€${(amount / 1000000000000).toFixed(1)}T`;
    }
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
    <div className="h-full bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-green-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Sports & Fitness Intelligence Center</h1>
              <p className="text-green-300">Athletic performance, sports analytics, fan engagement & health monitoring</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-green-400">{sportsData.currentTime}</div>
            <div className="text-green-300">Sports Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Trophy className="w-5 h-5 text-green-400 mr-2" />
                Market Value
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(sportsData.industryOverview.globalSportsMarket)}</div>
            <div className="text-green-300 text-sm">Leagues: {formatNumber(sportsData.industryOverview.professionalLeagues)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                Daily Engagement
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(sportsData.industryOverview.dailyEngagement)}</div>
            <div className="text-blue-300 text-sm">Athletes: {formatNumber(sportsData.industryOverview.totalAthletes)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-purple-400 mr-2" />
                Global Viewership
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(sportsData.industryOverview.viewership)}</div>
            <div className="text-purple-300 text-sm">Events: {formatNumber(sportsData.industryOverview.sportsEvents)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                Media Rights
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatCurrency(sportsData.industryOverview.mediaRights)}</div>
            <div className="text-yellow-300 text-sm">Sponsorship: {formatCurrency(sportsData.industryOverview.sponsorshipValue)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-orange-400 mr-2" />
                Fitness Users
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(sportsData.industryOverview.fitnessAppUsers)}</div>
            <div className="text-orange-300 text-sm">Wearables: {formatNumber(sportsData.industryOverview.wearableDevices)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Heart className="w-5 h-5 text-red-400 mr-2" />
                Avg Workout
              </h3>
            </div>
            <div className="text-3xl font-bold text-red-400">{sportsData.industryOverview.avgWorkoutTime.toFixed(1)}min</div>
            <div className="text-red-300 text-sm">Daily Sessions: {formatNumber(sportsData.fitnessMetrics.globalFitness.dailyWorkouts)}</div>
          </div>
        </div>

        {/* Sports Leagues Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Trophy className="w-5 h-5 text-green-400 mr-2" />
            Major Sports Leagues Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">League</th>
                  <th className="text-center p-3 text-slate-300">Sport</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Viewership</th>
                  <th className="text-center p-3 text-slate-300">Market Value</th>
                  <th className="text-center p-3 text-slate-300">Attendance</th>
                  <th className="text-center p-3 text-slate-300">Social</th>
                </tr>
              </thead>
              <tbody>
                {sportsData.sportsLeagues.map((league, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{league.league}</div>
                      <div className="text-slate-400 text-xs">{league.teams} teams • {league.matches} matches • {league.broadcastCountries} countries</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getSportColor(league.sport)}`}>
                        {league.sport}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(league.revenue)}</td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(league.viewership)}</td>
                    <td className="p-3 text-center text-purple-400">{formatCurrency(league.marketValue)}</td>
                    <td className="p-3 text-center text-orange-400">{formatNumber(league.avgAttendance)}</td>
                    <td className="p-3 text-center text-pink-400">{formatNumber(league.socialFollowers)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Athletic Performance & Fitness Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              Elite Athletic Performance
            </h3>
            <div className="space-y-4">
              {sportsData.athleticPerformance.professionalAthletes.map((athlete, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{athlete.athlete}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getSportColor(athlete.sport)}`}>
                        {athlete.sport}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">★{athlete.performance.fitnessScore.toFixed(1)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Team: {athlete.team}</div>
                      <div className="text-green-400">Value: {formatCurrency(athlete.performance.marketValue)}</div>
                      <div className="text-purple-400">Heart Rate: {athlete.biometrics.heartRate} BPM</div>
                    </div>
                    <div>
                      <div className="text-orange-400">Body Fat: {formatPercentage(athlete.biometrics.bodyFat)}</div>
                      <div className="text-cyan-400">VO2 Max: {athlete.biometrics.vo2Max}</div>
                      <div className="text-slate-300">Injury Days: {athlete.performance.injuryDays}</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">
                    Social Media: {formatNumber(athlete.performance.socialMedia)} followers
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-red-400 mr-2" />
              Global Fitness Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatNumber(sportsData.fitnessMetrics.globalFitness.activeUsers)}</div>
                <div className="text-red-300 text-sm">Active Users</div>
                <div className="text-gray-400 text-xs mt-1">Avg Steps: {formatNumber(sportsData.fitnessMetrics.globalFitness.averageSteps)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(sportsData.fitnessMetrics.globalFitness.fitnessGoalsMet)}</div>
                <div className="text-green-300 text-sm">Goals Met</div>
                <div className="text-gray-400 text-xs mt-1">Wearable Adoption: {formatPercentage(sportsData.fitnessMetrics.globalFitness.wearableAdoption)}</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Popular Workouts</h4>
              {sportsData.fitnessMetrics.popularWorkouts.slice(0, 4).map((workout, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{workout.workout}</div>
                    <div className="text-slate-400 text-xs">{formatNumber(workout.participants)} participants</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-blue-400">{workout.avgDuration.toFixed(1)} min</div>
                    <div className="text-orange-400">{workout.caloriesPerMin.toFixed(1)} cal/min</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <h4 className="text-white text-sm font-medium mb-2">Wearable Devices</h4>
              {sportsData.fitnessMetrics.wearableData.devices.slice(0, 3).map((device, index) => (
                <div key={index} className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 text-sm">{device.brand}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{formatPercentage(device.marketShare)}</span>
                    <span className="text-green-400">{formatNumber(device.avgSteps)} steps</span>
                    <span className="text-yellow-400">★{device.satisfaction.toFixed(1)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fan Engagement & Sports Economics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-cyan-400 mr-2" />
              Fan Engagement Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatNumber(sportsData.fanEngagement.digitalEngagement.socialMediaFollowers)}</div>
                <div className="text-cyan-300 text-sm">Social Followers</div>
                <div className="text-gray-400 text-xs mt-1">Daily Interactions: {formatNumber(sportsData.fanEngagement.digitalEngagement.dailyInteractions)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatNumber(sportsData.fanEngagement.digitalEngagement.liveStreamViewers)}</div>
                <div className="text-purple-300 text-sm">Live Stream</div>
                <div className="text-gray-400 text-xs mt-1">Mobile Users: {formatNumber(sportsData.fanEngagement.digitalEngagement.mobileAppUsers)}</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Platform Performance</h4>
              {sportsData.fanEngagement.platforms.map((platform, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{platform.platform}</div>
                    <div className="text-slate-400 text-xs">{formatNumber(platform.followers)} followers</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-green-400">{formatNumber(platform.engagement)} engage</div>
                    <div className="text-blue-400">{formatNumber(platform.posts || platform.videos || platform.tweets)} posts</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Fan Behavior</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Game Attendance</span>
                  <span className="text-green-400">{formatPercentage(sportsData.fanEngagement.fanBehavior.avgGameAttendance)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Season Tickets</span>
                  <span className="text-blue-400">{formatPercentage(sportsData.fanEngagement.fanBehavior.seasonTicketHolders)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Fantasy Players</span>
                  <span className="text-purple-400">{formatPercentage(sportsData.fanEngagement.fanBehavior.fantasyParticipation)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Loyalty Programs</span>
                  <span className="text-orange-400">{formatPercentage(sportsData.fanEngagement.fanBehavior.loyaltyPrograms)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-emerald-400 mr-2" />
              Sports Economics Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatCurrency(sportsData.sportsEconomics.revenue.mediaRights)}</div>
                <div className="text-emerald-300 text-sm">Media Rights</div>
                <div className="text-gray-400 text-xs mt-1">Annual Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{formatCurrency(sportsData.sportsEconomics.revenue.sponsorships)}</div>
                <div className="text-yellow-300 text-sm">Sponsorships</div>
                <div className="text-gray-400 text-xs mt-1">Brand Partnerships</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Revenue Streams</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Ticketing</span>
                  <span className="text-green-400">{formatCurrency(sportsData.sportsEconomics.revenue.ticketing)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Merchandise</span>
                  <span className="text-blue-400">{formatCurrency(sportsData.sportsEconomics.revenue.merchandise)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Betting</span>
                  <span className="text-purple-400">{formatCurrency(sportsData.sportsEconomics.revenue.betting)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Licensing</span>
                  <span className="text-orange-400">{formatCurrency(sportsData.sportsEconomics.revenue.licensing)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Market Trends</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Esports Growth</span>
                  <span className="text-green-400">+{formatPercentage(sportsData.sportsEconomics.marketTrends.esportsGrowth)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Streaming Revenue</span>
                  <span className="text-blue-400">+{formatPercentage(sportsData.sportsEconomics.marketTrends.streamingRevenue)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Wearable Tech</span>
                  <span className="text-purple-400">+{formatPercentage(sportsData.sportsEconomics.marketTrends.wearableTech)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Virtual Reality</span>
                  <span className="text-cyan-400">+{formatPercentage(sportsData.sportsEconomics.marketTrends.virtualReality)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sports Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Sports & Fitness Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {sportsData.sportsAlerts.map((alert, index) => (
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
                    <div className="text-slate-300">League: {alert.league}</div>
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

        {/* Health & Wellness */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Heart className="w-5 h-5 text-red-400 mr-2" />
            Health & Wellness Intelligence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">{formatPercentage(sportsData.healthWellness.populationHealth.activeAdults)}</div>
                  <div className="text-red-300 text-sm">Active Adults</div>
                  <div className="text-gray-400 text-xs mt-1">Population Health</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{formatPercentage(sportsData.healthWellness.populationHealth.cardiovascularHealth)}</div>
                  <div className="text-green-300 text-sm">Cardiovascular</div>
                  <div className="text-gray-400 text-xs mt-1">Health Score</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-sm font-medium">Population Health Metrics</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Mental Wellness</span>
                    <span className="text-green-400">{formatPercentage(sportsData.healthWellness.populationHealth.mentalWellness)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Sleep Quality</span>
                    <span className="text-blue-400">{formatPercentage(sportsData.healthWellness.populationHealth.sleepQuality)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Nutrition Score</span>
                    <span className="text-purple-400">{formatPercentage(sportsData.healthWellness.populationHealth.nutritionScore)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Hydration</span>
                    <span className="text-cyan-400">{formatPercentage(sportsData.healthWellness.populationHealth.hydrationLevels)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{formatPercentage(sportsData.healthWellness.corporateWellness.programParticipation)}</div>
                  <div className="text-blue-300 text-sm">Program Participation</div>
                  <div className="text-gray-400 text-xs mt-1">Corporate Wellness</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{formatPercentage(sportsData.healthWellness.corporateWellness.mentalHealthSupport)}</div>
                  <div className="text-purple-300 text-sm">Mental Health Support</div>
                  <div className="text-gray-400 text-xs mt-1">Employee Programs</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-sm font-medium">Corporate Wellness</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Fitness Subsidies</span>
                    <span className="text-green-400">{formatPercentage(sportsData.healthWellness.corporateWellness.fitnessSubsidies)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Health Screenings</span>
                    <span className="text-blue-400">{formatPercentage(sportsData.healthWellness.corporateWellness.healthScreenings)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Workplace Gyms</span>
                    <span className="text-purple-400">{formatPercentage(sportsData.healthWellness.corporateWellness.workplaceGyms)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Wellness Challenges</span>
                    <span className="text-orange-400">{formatPercentage(sportsData.healthWellness.corporateWellness.wellnessChallenges)}</span>
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