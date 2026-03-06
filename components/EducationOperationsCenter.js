import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { GraduationCap, Users, BookOpen, TrendingUp, AlertTriangle, Activity, Eye, Shield, Clock, MapPin, Settings, Target } from 'lucide-react';

const EducationOperationsCenter = () => {
  const [campusMetrics, setCampusMetrics] = useState({
    totalStudents: 14782,
    activeEnrollments: 13947,
    facultyMembers: 847,
    coursesOffered: 2145,
    graduationRate: 87.3, // %
    studentRetention: 92.4, // %
    campusSafetyIncidents: 3,
    digitalEngagement: 94.7 // %
  });

  const [studentAnalytics, setStudentAnalytics] = useState([
    {
      id: 'STU-45789',
      name: 'Sarah Johnson',
      year: 'Junior',
      major: 'Computer Science',
      gpa: 3.78,
      creditsCompleted: 89,
      attendanceRate: 94.2,
      riskScore: 2.1,
      status: 'on_track',
      advisorAlert: false,
      lastLogin: new Date(Date.now() - 3600000),
      engagementLevel: 'high'
    },
    {
      id: 'STU-23456',
      name: 'Michael Chen',
      year: 'Sophomore',
      major: 'Engineering',
      gpa: 2.89,
      creditsCompleted: 54,
      attendanceRate: 78.6,
      riskScore: 6.7,
      status: 'at_risk',
      advisorAlert: true,
      lastLogin: new Date(Date.now() - 172800000),
      engagementLevel: 'low'
    },
    {
      id: 'STU-67890',
      name: 'Emma Davis',
      year: 'Senior',
      major: 'Business Admin',
      gpa: 3.45,
      creditsCompleted: 118,
      attendanceRate: 91.7,
      riskScore: 3.2,
      status: 'on_track',
      advisorAlert: false,
      lastLogin: new Date(Date.now() - 7200000),
      engagementLevel: 'moderate'
    },
    {
      id: 'STU-12345',
      name: 'David Wilson',
      year: 'Freshman',
      major: 'Pre-Med',
      gpa: 2.45,
      creditsCompleted: 12,
      attendanceRate: 67.3,
      riskScore: 8.9,
      status: 'critical_risk',
      advisorAlert: true,
      lastLogin: new Date(Date.now() - 259200000),
      engagementLevel: 'very_low'
    },
    {
      id: 'STU-98765',
      name: 'Lily Martinez',
      year: 'Senior',
      major: 'Psychology',
      gpa: 3.92,
      creditsCompleted: 124,
      attendanceRate: 97.8,
      riskScore: 1.2,
      status: 'excellent',
      advisorAlert: false,
      lastLogin: new Date(Date.now() - 1800000),
      engagementLevel: 'very_high'
    }
  ]);

  const [academicPrograms, setAcademicPrograms] = useState([
    {
      id: 'PROG-CS',
      name: 'Computer Science',
      department: 'Engineering & Technology',
      totalStudents: 1847,
      facultyCount: 45,
      avgGPA: 3.42,
      graduationRate: 89.7,
      employmentRate: 94.3,
      avgSalary: 78500,
      status: 'thriving'
    },
    {
      id: 'PROG-BUS',
      name: 'Business Administration',
      department: 'Business School',
      totalStudents: 2456,
      facultyCount: 67,
      avgGPA: 3.18,
      graduationRate: 85.2,
      employmentRate: 87.6,
      avgSalary: 65200,
      status: 'stable'
    },
    {
      id: 'PROG-ENG',
      name: 'Engineering',
      department: 'Engineering & Technology',
      totalStudents: 1923,
      facultyCount: 89,
      avgGPA: 3.27,
      graduationRate: 91.3,
      employmentRate: 96.1,
      avgSalary: 82400,
      status: 'thriving'
    },
    {
      id: 'PROG-PREMED',
      name: 'Pre-Medicine',
      department: 'Sciences',
      totalStudents: 856,
      facultyCount: 34,
      avgGPA: 3.67,
      graduationRate: 78.9,
      employmentRate: 92.4,
      avgSalary: 95600,
      status: 'competitive'
    },
    {
      id: 'PROG-PSY',
      name: 'Psychology',
      department: 'Liberal Arts',
      totalStudents: 1234,
      facultyCount: 28,
      avgGPA: 3.31,
      graduationRate: 82.7,
      employmentRate: 79.3,
      avgSalary: 52800,
      status: 'needs_attention'
    }
  ]);

  const [campusOperations, setCampusOperations] = useState([
    {
      facility: 'Library System',
      status: 'operational',
      capacity: 2400,
      currentOccupancy: 1876,
      todayUsage: 94.7,
      digitalAccess: 98.9,
      maintenanceScore: 96.2
    },
    {
      facility: 'Student Housing',
      status: 'operational',
      capacity: 8950,
      currentOccupancy: 8456,
      todayUsage: 94.5,
      digitalAccess: 87.3,
      maintenanceScore: 89.4
    },
    {
      facility: 'Dining Services',
      status: 'operational',
      capacity: 3200,
      currentOccupancy: 2847,
      todayUsage: 89.0,
      digitalAccess: 92.1,
      maintenanceScore: 93.7
    },
    {
      facility: 'Recreation Center',
      status: 'maintenance',
      capacity: 1500,
      currentOccupancy: 0,
      todayUsage: 0,
      digitalAccess: 85.6,
      maintenanceScore: 72.3
    },
    {
      facility: 'Academic Buildings',
      status: 'operational',
      capacity: 12500,
      currentOccupancy: 9847,
      todayUsage: 78.8,
      digitalAccess: 95.4,
      maintenanceScore: 91.8
    }
  ]);

  const [learningManagement, setLearningManagement] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      activeUsers: 8947,
      coursesInSession: 423,
      assignmentsSubmitted: 2847,
      digitalEngagement: 93.2
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      activeUsers: 9123,
      coursesInSession: 445,
      assignmentsSubmitted: 2956,
      digitalEngagement: 93.8
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      activeUsers: 9234,
      coursesInSession: 467,
      assignmentsSubmitted: 3012,
      digitalEngagement: 94.1
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      activeUsers: 9345,
      coursesInSession: 478,
      assignmentsSubmitted: 3089,
      digitalEngagement: 94.3
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      activeUsers: 9456,
      coursesInSession: 489,
      assignmentsSubmitted: 3134,
      digitalEngagement: 94.5
    },
    {
      time: new Date().toLocaleTimeString(),
      activeUsers: 9521,
      coursesInSession: 495,
      assignmentsSubmitted: 3178,
      digitalEngagement: 94.7
    }
  ]);

  const [educationAlerts, setEducationAlerts] = useState([
    {
      id: 'EDU-001',
      severity: 'critical',
      type: 'Student at Risk',
      message: 'David Wilson (Pre-Med) - critical risk score 8.9, requires immediate intervention',
      timestamp: new Date(),
      status: 'active',
      department: 'Academic Affairs',
      impact: 'immediate'
    },
    {
      id: 'EDU-002',
      severity: 'warning',
      type: 'Facility Issue',
      message: 'Recreation Center closed for maintenance - HVAC system repairs in progress',
      timestamp: new Date(Date.now() - 120000),
      status: 'investigating',
      department: 'Campus Operations',
      impact: 'medium'
    },
    {
      id: 'EDU-003',
      severity: 'info',
      type: 'Academic Achievement',
      message: 'Computer Science program achieves 94.3% employment rate - exceeding target',
      timestamp: new Date(Date.now() - 300000),
      status: 'resolved',
      department: 'Engineering & Technology',
      impact: 'positive'
    }
  ]);

  const [safetyAndCompliance, setSafetyAndCompliance] = useState([
    {
      area: 'Campus Security',
      status: 'optimal',
      incidentsToday: 1,
      avgResponseTime: 3.4, // minutes
      staffOnDuty: 12,
      emergencyAlerts: 0,
      score: 96.8
    },
    {
      area: 'Fire Safety',
      status: 'compliant',
      incidentsToday: 0,
      avgResponseTime: 2.1,
      staffOnDuty: 8,
      emergencyAlerts: 0,
      score: 98.9
    },
    {
      area: 'Health Services',
      status: 'operational',
      incidentsToday: 4,
      avgResponseTime: 8.7,
      staffOnDuty: 6,
      emergencyAlerts: 0,
      score: 94.2
    },
    {
      area: 'Environmental Safety',
      status: 'compliant',
      incidentsToday: 0,
      avgResponseTime: 15.3,
      staffOnDuty: 4,
      emergencyAlerts: 0,
      score: 97.6
    }
  ]);

  const [facultyMetrics, setFacultyMetrics] = useState([
    {
      department: 'Engineering & Technology',
      totalFaculty: 134,
      studentTeacherRatio: 18.2,
      avgClassSize: 28.4,
      researchGrants: 12,
      publicationCount: 89,
      studentRating: 4.3
    },
    {
      department: 'Business School',
      totalFaculty: 78,
      studentTeacherRatio: 24.1,
      avgClassSize: 35.7,
      researchGrants: 6,
      publicationCount: 34,
      studentRating: 4.1
    },
    {
      department: 'Sciences',
      totalFaculty: 156,
      studentTeacherRatio: 16.8,
      avgClassSize: 24.3,
      researchGrants: 23,
      publicationCount: 134,
      studentRating: 4.5
    },
    {
      department: 'Liberal Arts',
      totalFaculty: 89,
      studentTeacherRatio: 22.7,
      avgClassSize: 31.2,
      researchGrants: 8,
      publicationCount: 67,
      studentRating: 4.2
    }
  ]);

  const [systemMetrics, setSystemMetrics] = useState({
    lmsUptime: 99.94, // %
    sisUptime: 99.87,
    campusWifi: 98.7,
    studentPortal: 99.6,
    avgPageLoad: 1.234, // seconds
    mobileAppRating: 4.7, // /5.0
    helpDeskTickets: 47,
    systemIntegration: 96.8 // %
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update campus metrics
      setCampusMetrics(prev => ({
        ...prev,
        activeEnrollments: Math.max(13000, Math.min(15000, prev.activeEnrollments + Math.floor((Math.random() - 0.5) * 20))),
        graduationRate: Math.max(80, Math.min(95, prev.graduationRate + (Math.random() - 0.5) * 0.2)),
        studentRetention: Math.max(85, Math.min(98, prev.studentRetention + (Math.random() - 0.5) * 0.1)),
        campusSafetyIncidents: Math.max(0, Math.min(10, prev.campusSafetyIncidents + Math.floor((Math.random() - 0.8) * 2))),
        digitalEngagement: Math.max(90, Math.min(98, prev.digitalEngagement + (Math.random() - 0.5) * 0.3))
      }));

      // Update student analytics
      setStudentAnalytics(prev => prev.map(student => {
        let newRiskScore = student.riskScore;
        let newStatus = student.status;
        
        // Simulate risk score changes based on current status
        if (student.status === 'critical_risk') {
          newRiskScore = Math.max(6, Math.min(10, student.riskScore + (Math.random() - 0.7) * 0.5));
        } else if (student.status === 'at_risk') {
          newRiskScore = Math.max(4, Math.min(8, student.riskScore + (Math.random() - 0.6) * 0.3));
        } else {
          newRiskScore = Math.max(1, Math.min(6, student.riskScore + (Math.random() - 0.5) * 0.2));
        }
        
        // Update status based on risk score
        if (newRiskScore >= 8) newStatus = 'critical_risk';
        else if (newRiskScore >= 6) newStatus = 'at_risk';
        else if (newRiskScore >= 4) newStatus = 'needs_attention';
        else if (newRiskScore >= 2) newStatus = 'on_track';
        else newStatus = 'excellent';

        return {
          ...student,
          gpa: Math.max(1.0, Math.min(4.0, student.gpa + (Math.random() - 0.5) * 0.05)),
          attendanceRate: Math.max(60, Math.min(100, student.attendanceRate + (Math.random() - 0.5) * 1)),
          riskScore: newRiskScore,
          status: newStatus,
          advisorAlert: newRiskScore >= 6,
          lastLogin: Math.random() > 0.9 ? new Date() : student.lastLogin
        };
      }));

      // Update academic programs
      setAcademicPrograms(prev => prev.map(program => ({
        ...program,
        totalStudents: Math.max(program.totalStudents * 0.95, Math.min(program.totalStudents * 1.05, program.totalStudents + Math.floor((Math.random() - 0.5) * 10))),
        avgGPA: Math.max(2.5, Math.min(4.0, program.avgGPA + (Math.random() - 0.5) * 0.02)),
        graduationRate: Math.max(70, Math.min(98, program.graduationRate + (Math.random() - 0.5) * 0.3)),
        employmentRate: Math.max(75, Math.min(100, program.employmentRate + (Math.random() - 0.5) * 0.2))
      })));

      // Update campus operations
      setCampusOperations(prev => prev.map(facility => ({
        ...facility,
        currentOccupancy: facility.status === 'operational' ? 
          Math.max(Math.floor(facility.capacity * 0.3), Math.min(facility.capacity, facility.currentOccupancy + Math.floor((Math.random() - 0.5) * 50))) : 0,
        todayUsage: facility.status === 'operational' ? 
          Math.max(60, Math.min(100, facility.todayUsage + (Math.random() - 0.5) * 2)) : 0,
        maintenanceScore: Math.max(70, Math.min(100, facility.maintenanceScore + (Math.random() - 0.5) * 1))
      })));

      // Update learning management
      const newLearningData = {
        time: new Date().toLocaleTimeString(),
        activeUsers: Math.max(8000, Math.min(12000, campusMetrics.activeEnrollments * 0.7)),
        coursesInSession: Math.floor(campusMetrics.coursesOffered * 0.23),
        assignmentsSubmitted: Math.floor(Math.random() * 500) + 2800,
        digitalEngagement: campusMetrics.digitalEngagement
      };
      
      setLearningManagement(prev => [...prev.slice(1), newLearningData]);

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        lmsUptime: Math.max(99.5, Math.min(100, prev.lmsUptime + (Math.random() - 0.3) * 0.01)),
        sisUptime: Math.max(99.5, Math.min(100, prev.sisUptime + (Math.random() - 0.3) * 0.01)),
        avgPageLoad: Math.max(0.5, Math.min(3.0, prev.avgPageLoad + (Math.random() - 0.5) * 0.1)),
        helpDeskTickets: Math.max(20, Math.min(100, prev.helpDeskTickets + Math.floor((Math.random() - 0.5) * 5))),
        mobileAppRating: Math.max(4.0, Math.min(5.0, prev.mobileAppRating + (Math.random() - 0.5) * 0.02))
      }));

      // Occasionally add new education alerts
      if (Math.random() > 0.94) {
        const alertTypes = ['Student at Risk', 'Facility Issue', 'Academic Achievement', 'System Alert', 'Safety Concern'];
        const severities = ['info', 'warning', 'critical'];
        const departments = ['Academic Affairs', 'Campus Operations', 'Student Services', 'IT Services'];
        
        const newAlert = {
          id: `EDU-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time education operations alert generated',
          timestamp: new Date(),
          status: 'active',
          department: departments[Math.floor(Math.random() * departments.length)],
          impact: ['low', 'medium', 'high', 'immediate', 'positive'][Math.floor(Math.random() * 5)]
        };
        
        setEducationAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [campusMetrics.activeEnrollments, campusMetrics.coursesOffered, campusMetrics.digitalEngagement]);

  const getStudentStatusColor = (status) => {
    switch (status) {
      case 'excellent': return '#8B5CF6';
      case 'on_track': return '#10B981';
      case 'needs_attention': return '#3B82F6';
      case 'at_risk': return '#F59E0B';
      case 'critical_risk': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getProgramStatusColor = (status) => {
    switch (status) {
      case 'thriving': return '#10B981';
      case 'stable': return '#3B82F6';
      case 'competitive': return '#8B5CF6';
      case 'needs_attention': return '#F59E0B';
      case 'declining': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getFacilityStatusColor = (status) => {
    switch (status) {
      case 'operational': return '#10B981';
      case 'maintenance': return '#F59E0B';
      case 'offline': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'info': return '#10B981';
      default: return '#6B7280';
    }
  };

  const studentDistribution = [
    { name: 'Freshman', value: 28.4, color: '#3B82F6' },
    { name: 'Sophomore', value: 26.7, color: '#10B981' },
    { name: 'Junior', value: 23.9, color: '#8B5CF6' },
    { name: 'Senior', value: 21.0, color: '#F59E0B' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <GraduationCap className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">EDUCATION OPERATIONS CENTER</h1>
            <p className="text-gray-400">Student analytics, learning management systems, campus operations, academic performance & safety monitoring</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">
              {campusMetrics.totalStudents.toLocaleString()}
            </div>
            <div className="text-xs text-gray-400">STUDENTS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              {campusMetrics.graduationRate.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400">GRADUATION</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{campusMetrics.digitalEngagement.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">ENGAGEMENT</div>
          </div>
        </div>
      </div>

      {/* Education KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">ENROLLMENT</span>
          </div>
          <div className="text-xl font-bold text-white">{campusMetrics.activeEnrollments.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Active</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <BookOpen className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">COURSES</span>
          </div>
          <div className="text-xl font-bold text-white">{campusMetrics.coursesOffered.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Offered</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">FACULTY</span>
          </div>
          <div className="text-xl font-bold text-white">{campusMetrics.facultyMembers}</div>
          <div className="text-xs text-gray-400">Members</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">RETENTION</span>
          </div>
          <div className="text-xl font-bold text-white">{campusMetrics.studentRetention.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Rate</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">SAFETY</span>
          </div>
          <div className="text-xl font-bold text-white">{campusMetrics.campusSafetyIncidents}</div>
          <div className="text-xs text-gray-400">Incidents</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span className="text-xs text-gray-400">LMS UPTIME</span>
          </div>
          <div className="text-xl font-bold text-white">{systemMetrics.lmsUptime.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">System</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Student Analytics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-400" />
            STUDENT ANALYTICS
          </h3>
          <div className="space-y-3">
            {studentAnalytics.map(student => (
              <div key={student.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getStudentStatusColor(student.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{student.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getStudentStatusColor(student.status)}20`, 
                      color: getStudentStatusColor(student.status) 
                    }}>
                      {student.status.toUpperCase().replace('_', ' ')}
                    </span>
                    {student.advisorAlert && (
                      <span className="text-xs px-2 py-1 rounded-full bg-red-900 text-red-400">
                        ADVISOR ALERT
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  ID: <span className="text-blue-400">{student.id}</span> • 
                  Year: <span className="text-purple-400">{student.year}</span> • 
                  Major: <span className="text-green-400">{student.major}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">GPA</span>
                    <span className="text-green-400">{student.gpa.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Credits</span>
                    <span className="text-blue-400">{student.creditsCompleted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Attendance</span>
                    <span className="text-purple-400">{student.attendanceRate.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Risk Score</span>
                    <span className="text-white">{student.riskScore.toFixed(1)}/10</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Engagement: {student.engagementLevel.toUpperCase().replace('_', ' ')}
                  </span>
                  <span className="text-gray-500">
                    Last Login: {student.lastLogin.toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Programs */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-green-400" />
            ACADEMIC PROGRAMS
          </h3>
          <div className="space-y-3">
            {academicPrograms.map(program => (
              <div key={program.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getProgramStatusColor(program.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{program.name}</span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ 
                    backgroundColor: `${getProgramStatusColor(program.status)}20`, 
                    color: getProgramStatusColor(program.status) 
                  }}>
                    {program.status.toUpperCase().replace('_', ' ')}
                  </span>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">{program.department}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Students</span>
                    <span className="text-blue-400">{program.totalStudents.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Faculty</span>
                    <span className="text-purple-400">{program.facultyCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg GPA</span>
                    <span className="text-green-400">{program.avgGPA.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Grad Rate</span>
                    <span className="text-white">{program.graduationRate.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Employment: {program.employmentRate.toFixed(1)}%
                  </span>
                  <span className="text-gray-500">
                    Avg Salary: ${(program.avgSalary / 1000).toFixed(0)}K
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Operations & Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-orange-400" />
            CAMPUS OPERATIONS & ALERTS
          </h3>
          <div className="space-y-3 mb-4">
            {campusOperations.slice(0, 4).map((facility, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{facility.facility}</span>
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: getFacilityStatusColor(facility.status) }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Occupancy</span>
                    <span className="text-blue-400">{Math.round((facility.currentOccupancy/facility.capacity)*100)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Capacity</span>
                    <span className="text-purple-400">{facility.currentOccupancy}/{facility.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Usage</span>
                    <span className="text-green-400">{facility.todayUsage.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Maintenance</span>
                    <span className="text-white">{facility.maintenanceScore.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="text-xs text-yellow-400">
                  Digital Access: {facility.digitalAccess.toFixed(1)}%
                </div>
              </div>
            ))}
          </div>

          {/* Education Alerts */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">Campus Alerts</div>
            <div className="space-y-2">
              {educationAlerts.slice(0, 3).map(alert => (
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
                    <span className="text-blue-400">{alert.department}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Learning Management */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME LEARNING MANAGEMENT</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={learningManagement}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12} />
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
                yAxisId="left"
                type="monotone" 
                dataKey="activeUsers" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="Active Users"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="coursesInSession" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Courses in Session"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="assignmentsSubmitted" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Assignments Submitted"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="digitalEngagement" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Digital Engagement %"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Student Distribution & System Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">STUDENT DISTRIBUTION & SYSTEM STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={studentDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {studentDistribution.map((entry, index) => (
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
                  formatter={(value) => [`${value}%`, 'Class Year']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-2">
              {studentDistribution.map((year, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: year.color }}
                    />
                    <span className="text-gray-400 text-sm">{year.name}</span>
                  </div>
                  <span className="text-white font-semibold">{year.value}%</span>
                </div>
              ))}
              
              {/* System Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">System Status</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">LMS Uptime</span>
                    <span className="text-green-400">{systemMetrics.lmsUptime.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">SIS Uptime</span>
                    <span className="text-blue-400">{systemMetrics.sisUptime.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Page Load</span>
                    <span className="text-purple-400">{systemMetrics.avgPageLoad.toFixed(2)}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mobile App</span>
                    <span className="text-green-400">{systemMetrics.mobileAppRating.toFixed(1)}/5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Safety & Compliance Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-white font-semibold">Campus Safety & Compliance</span>
              <span className="text-xs text-blue-400">Real-time Monitoring</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {safetyAndCompliance.slice(0, 4).map((area, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-blue-400">{area.area}</span>
                    <span className="text-xs text-green-400">{area.score.toFixed(1)}%</span>
                  </div>
                  <div className="text-xs text-gray-300">
                    {area.incidentsToday} incidents • {area.staffOnDuty} staff on duty
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Education Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <GraduationCap className="w-3 h-3 inline mr-1" />
                  Student Portal
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <BookOpen className="w-3 h-3 inline mr-1" />
                  LMS Console
                </button>
                <button className="px-3 py-1 bg-orange-600 hover:bg-orange-700 rounded text-xs transition-colors">
                  <Shield className="w-3 h-3 inline mr-1" />
                  Campus Safety
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationOperationsCenter;