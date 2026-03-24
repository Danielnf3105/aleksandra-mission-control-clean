// Document Management Intelligence Center - Document Lifecycle & Collaboration Analytics
import { useState, useEffect } from 'react';
import { FileText, TrendingUp, Users, Shield, Archive, BarChart3, CheckCircle, AlertTriangle, Target, Settings, Activity, Eye } from 'lucide-react';

export default function DocumentManagementCenter() {
  const [documentData, setDocumentData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    documentOverview: {
      totalDocuments: 567890,
      activeDocuments: 512340,
      archivedDocuments: 45123,
      draftDocuments: 10427,
      totalStorage: 2340567,
      monthlyUploads: 12345,
      monthlyDownloads: 89012,
      collaborators: 4567,
      shareLinks: 23456,
      versionHistory: 156789,
      storageUtilization: 73.4,
      accessCompliance: 96.8,
      securityScore: 91.7,
      collaborationScore: 87.3,
      documentHealth: 89.6
    },
    documentCategories: [
      {
        category: 'Contracts & Legal',
        documents: 45678,
        storage: 234567,
        views: 89012,
        downloads: 12345,
        collaborators: 234,
        avgSecurity: 98.7,
        compliance: 99.2,
        retention: '7 years',
        encryption: 'AES-256',
        accessLevel: 'RESTRICTED',
        versionControl: 'STRICT',
        lastAccess: '2026-03-18',
        alerts: 2,
        expiring: 12,
        formats: ['PDF', 'DOCX', 'TXT'],
        avgFileSize: '2.3 MB',
        shareRatio: 23.4,
        editFrequency: 'LOW',
        riskLevel: 'HIGH',
        backupStatus: 'CURRENT',
        auditTrail: 'COMPLETE'
      },
      {
        category: 'Product Documentation',
        documents: 78901,
        storage: 345678,
        views: 123456,
        downloads: 23456,
        collaborators: 456,
        avgSecurity: 89.4,
        compliance: 94.7,
        retention: '5 years',
        encryption: 'AES-256',
        accessLevel: 'INTERNAL',
        versionControl: 'STANDARD',
        lastAccess: '2026-03-18',
        alerts: 5,
        expiring: 34,
        formats: ['PDF', 'DOCX', 'MD', 'HTML'],
        avgFileSize: '1.8 MB',
        shareRatio: 67.8,
        editFrequency: 'HIGH',
        riskLevel: 'MEDIUM',
        backupStatus: 'CURRENT',
        auditTrail: 'PARTIAL'
      },
      {
        category: 'Marketing Materials',
        documents: 123456,
        storage: 567890,
        views: 234567,
        downloads: 45678,
        collaborators: 789,
        avgSecurity: 82.1,
        compliance: 87.3,
        retention: '3 years',
        encryption: 'AES-128',
        accessLevel: 'PUBLIC',
        versionControl: 'FLEXIBLE',
        lastAccess: '2026-03-18',
        alerts: 8,
        expiring: 67,
        formats: ['PDF', 'PPTX', 'JPG', 'PNG', 'MP4'],
        avgFileSize: '5.7 MB',
        shareRatio: 89.2,
        editFrequency: 'HIGH',
        riskLevel: 'LOW',
        backupStatus: 'PENDING',
        auditTrail: 'BASIC'
      },
      {
        category: 'Financial Reports',
        documents: 23456,
        storage: 123456,
        views: 45678,
        downloads: 6789,
        collaborators: 123,
        avgSecurity: 97.3,
        compliance: 98.9,
        retention: '10 years',
        encryption: 'AES-256',
        accessLevel: 'CONFIDENTIAL',
        versionControl: 'STRICT',
        lastAccess: '2026-03-18',
        alerts: 1,
        expiring: 5,
        formats: ['PDF', 'XLSX', 'CSV'],
        avgFileSize: '3.2 MB',
        shareRatio: 12.7,
        editFrequency: 'MONTHLY',
        riskLevel: 'HIGH',
        backupStatus: 'CURRENT',
        auditTrail: 'COMPLETE'
      },
      {
        category: 'HR & Personnel',
        documents: 34567,
        storage: 178901,
        views: 56789,
        downloads: 7890,
        collaborators: 167,
        avgSecurity: 95.8,
        compliance: 97.6,
        retention: '50 years',
        encryption: 'AES-256',
        accessLevel: 'RESTRICTED',
        versionControl: 'STANDARD',
        lastAccess: '2026-03-17',
        alerts: 3,
        expiring: 8,
        formats: ['PDF', 'DOCX', 'JPG'],
        avgFileSize: '1.4 MB',
        shareRatio: 8.9,
        editFrequency: 'LOW',
        riskLevel: 'HIGH',
        backupStatus: 'CURRENT',
        auditTrail: 'COMPLETE'
      }
    ],
    documentActivity: [
      {
        document: 'Q4-2025-Financial-Report.pdf',
        id: 'DOC-FIN-2025-Q4',
        category: 'Financial Reports',
        size: '4.2 MB',
        owner: 'Finance Team',
        created: '2026-01-15',
        modified: '2026-03-17',
        version: '3.2',
        status: 'PUBLISHED',
        security: 'CONFIDENTIAL',
        views: 1234,
        downloads: 234,
        collaborators: ['CFO', 'Finance Manager', 'Auditor'],
        shares: 12,
        comments: 23,
        location: '/Financial/Reports/2025/',
        encryption: 'AES-256',
        retention: '2036-01-15',
        lastAccess: '2026-03-18 09:45',
        accessBy: 'Finance Manager',
        activityType: 'VIEW',
        compliance: 98.9,
        riskScore: 2.1
      },
      {
        document: 'Product-Roadmap-2026-v2.docx',
        id: 'DOC-PROD-2026-RM',
        category: 'Product Documentation',
        size: '2.8 MB',
        owner: 'Product Team',
        created: '2026-02-01',
        modified: '2026-03-18',
        version: '2.7',
        status: 'DRAFT',
        security: 'INTERNAL',
        views: 567,
        downloads: 89,
        collaborators: ['Product Manager', 'Engineering Lead', 'Designer'],
        shares: 45,
        comments: 78,
        location: '/Product/Roadmaps/2026/',
        encryption: 'AES-256',
        retention: '2031-02-01',
        lastAccess: '2026-03-18 09:52',
        accessBy: 'Product Manager',
        activityType: 'EDIT',
        compliance: 94.7,
        riskScore: 3.4
      },
      {
        document: 'Marketing-Campaign-Spring.pptx',
        id: 'DOC-MKT-2026-SPR',
        category: 'Marketing Materials',
        size: '12.4 MB',
        owner: 'Marketing Team',
        created: '2026-02-15',
        modified: '2026-03-18',
        version: '1.9',
        status: 'REVIEW',
        security: 'PUBLIC',
        views: 890,
        downloads: 145,
        collaborators: ['Marketing Manager', 'Creative Director', 'Copywriter'],
        shares: 67,
        comments: 34,
        location: '/Marketing/Campaigns/2026/',
        encryption: 'AES-128',
        retention: '2029-02-15',
        lastAccess: '2026-03-18 09:48',
        accessBy: 'Creative Director',
        activityType: 'COMMENT',
        compliance: 87.3,
        riskScore: 1.8
      },
      {
        document: 'Employee-Handbook-2026.pdf',
        id: 'DOC-HR-2026-HB',
        category: 'HR & Personnel',
        size: '3.7 MB',
        owner: 'HR Department',
        created: '2026-01-01',
        modified: '2026-03-10',
        version: '2.1',
        status: 'PUBLISHED',
        security: 'RESTRICTED',
        views: 2345,
        downloads: 456,
        collaborators: ['HR Manager', 'Legal Counsel', 'Operations'],
        shares: 234,
        comments: 12,
        location: '/HR/Policies/2026/',
        encryption: 'AES-256',
        retention: '2076-01-01',
        lastAccess: '2026-03-18 08:30',
        accessBy: 'New Employee',
        activityType: 'DOWNLOAD',
        compliance: 97.6,
        riskScore: 2.7
      },
      {
        document: 'Master-Service-Agreement.docx',
        id: 'DOC-LEG-MSA-001',
        category: 'Contracts & Legal',
        size: '1.9 MB',
        owner: 'Legal Department',
        created: '2025-11-20',
        modified: '2026-03-15',
        version: '4.6',
        status: 'EXECUTED',
        security: 'RESTRICTED',
        views: 456,
        downloads: 78,
        collaborators: ['Legal Counsel', 'Business Development', 'CFO'],
        shares: 8,
        comments: 45,
        location: '/Legal/Contracts/Active/',
        encryption: 'AES-256',
        retention: '2033-11-20',
        lastAccess: '2026-03-17 16:22',
        accessBy: 'Legal Counsel',
        activityType: 'VERSION_UPDATE',
        compliance: 99.2,
        riskScore: 1.3
      }
    ],
    collaborationMetrics: [
      {
        period: 'Last 30 Days',
        documentsAccessed: 45678,
        uniqueCollaborators: 2345,
        totalViews: 123456,
        downloads: 23456,
        shares: 4567,
        comments: 8901,
        edits: 12345,
        versionsCreated: 5678,
        avgCollabTime: '24.7 min',
        peakActivity: '14:00-16:00',
        mostActiveUsers: ['Product Team', 'Marketing', 'Engineering'],
        topDocuments: ['Product Roadmap', 'Marketing Campaign', 'API Documentation'],
        collaborationScore: 87.3,
        responseTime: '2.4 hours',
        trends: {
          activity: '+12.8%',
          collaboration: '+8.9%',
          productivity: '+15.3%'
        }
      },
      {
        period: 'Last 90 Days',
        documentsAccessed: 134567,
        uniqueCollaborators: 3456,
        totalViews: 356789,
        downloads: 67890,
        shares: 13456,
        comments: 24567,
        edits: 34567,
        versionsCreated: 16789,
        avgCollabTime: '22.3 min',
        peakActivity: '10:00-12:00',
        mostActiveUsers: ['Engineering', 'Product Team', 'Sales'],
        topDocuments: ['Technical Specs', 'Sales Playbook', 'User Manual'],
        collaborationScore: 84.7,
        responseTime: '3.1 hours',
        trends: {
          activity: '+18.4%',
          collaboration: '+11.7%',
          productivity: '+22.6%'
        }
      },
      {
        period: 'Last 12 Months',
        documentsAccessed: 567890,
        uniqueCollaborators: 4567,
        totalViews: 1234567,
        downloads: 234567,
        shares: 45678,
        comments: 89012,
        edits: 123456,
        versionsCreated: 56789,
        avgCollabTime: '19.8 min',
        peakActivity: '09:00-17:00',
        mostActiveUsers: ['All Departments'],
        topDocuments: ['Company Handbook', 'Product Documentation', 'Process Guides'],
        collaborationScore: 81.2,
        responseTime: '4.2 hours',
        trends: {
          activity: '+28.7%',
          collaboration: '+19.4%',
          productivity: '+31.2%'
        }
      }
    ],
    documentAlerts: [
      {
        type: 'CRITICAL',
        category: 'Security',
        message: 'Unauthorized access attempt detected on confidential financial documents',
        document: 'Q4-2025-Financial-Report.pdf',
        documentId: 'DOC-FIN-2025-Q4',
        severity: 'HIGH',
        riskScore: 8.9,
        impact: 'Data breach risk, regulatory compliance violation',
        timestamp: '09:51',
        detectedBy: 'Security Monitoring',
        accessAttempt: {
          user: 'Unknown User',
          ip: '192.168.1.xxx',
          location: 'External',
          method: 'Direct Link'
        },
        recommendation: 'Revoke all share links, audit access permissions, notify security team',
        urgency: 'IMMEDIATE',
        escalation: 'SECURITY_TEAM',
        actionRequired: 'IMMEDIATE_INVESTIGATION'
      },
      {
        type: 'HIGH',
        category: 'Retention',
        message: 'Document retention period expiring for 23 legal documents in next 30 days',
        document: 'Multiple Legal Documents',
        documentId: 'BATCH-LEG-EXP-001',
        severity: 'MEDIUM',
        riskScore: 6.7,
        impact: 'Legal compliance risk, potential document loss',
        timestamp: '09:50',
        detectedBy: 'Retention Policy Monitor',
        expiringDocuments: 23,
        categories: ['Contracts', 'NDAs', 'Employment Agreements'],
        recommendation: 'Review retention policies, extend or archive documents as needed',
        urgency: 'HIGH',
        escalation: 'LEGAL_TEAM',
        dueDate: '2026-04-17'
      },
      {
        type: 'WARNING',
        category: 'Storage',
        message: 'Document storage approaching 75% capacity - optimization needed',
        document: 'All Categories',
        documentId: 'SYS-STORAGE-001',
        severity: 'MEDIUM',
        riskScore: 4.3,
        impact: 'Performance degradation, potential service disruption',
        timestamp: '09:49',
        detectedBy: 'Storage Monitor',
        currentUsage: '73.4%',
        growthRate: '+2.8% monthly',
        projectedFull: '2026-06-15',
        recommendation: 'Archive old documents, implement compression, consider storage upgrade',
        urgency: 'MEDIUM',
        escalation: 'IT_OPERATIONS',
        targetCapacity: '< 70%'
      },
      {
        type: 'INFO',
        category: 'Collaboration',
        message: 'Marketing team showing exceptional document collaboration - 89.2% share ratio',
        document: 'Marketing Materials Category',
        documentId: 'CAT-MKT-PERF-001',
        severity: 'POSITIVE',
        riskScore: 0.5,
        impact: 'Enhanced team productivity, improved workflow efficiency',
        timestamp: '09:48',
        detectedBy: 'Collaboration Analytics',
        shareRatio: '89.2%',
        collaborationIncrease: '+15.3%',
        topContributors: ['Marketing Manager', 'Creative Director', 'Content Team'],
        recommendation: 'Document and share best practices with other departments',
        priority: 'LOW',
        opportunity: 'BEST_PRACTICE_SHARING'
      }
    ],
    securityMetrics: [
      {
        level: 'CONFIDENTIAL',
        documents: 23456,
        percentage: 20.8,
        encryption: 'AES-256',
        accessControls: 'STRICT',
        breachAttempts: 12,
        successfulBlocks: '99.9%',
        avgAccessTime: '3.2 sec',
        complianceScore: 98.7,
        auditFrequency: 'DAILY',
        lastAudit: '2026-03-18',
        riskLevel: 'HIGH_PROTECTION'
      },
      {
        level: 'RESTRICTED',
        documents: 78901,
        percentage: 35.4,
        encryption: 'AES-256',
        accessControls: 'STANDARD',
        breachAttempts: 34,
        successfulBlocks: '98.7%',
        avgAccessTime: '2.1 sec',
        complianceScore: 96.4,
        auditFrequency: 'WEEKLY',
        lastAudit: '2026-03-15',
        riskLevel: 'MEDIUM_PROTECTION'
      },
      {
        level: 'INTERNAL',
        documents: 134567,
        percentage: 32.1,
        encryption: 'AES-256',
        accessControls: 'MODERATE',
        breachAttempts: 56,
        successfulBlocks: '94.2%',
        avgAccessTime: '1.4 sec',
        complianceScore: 89.3,
        auditFrequency: 'MONTHLY',
        lastAudit: '2026-03-01',
        riskLevel: 'STANDARD_PROTECTION'
      },
      {
        level: 'PUBLIC',
        documents: 56789,
        percentage: 11.7,
        encryption: 'AES-128',
        accessControls: 'BASIC',
        breachAttempts: 78,
        successfulBlocks: '87.9%',
        avgAccessTime: '0.8 sec',
        complianceScore: 82.1,
        auditFrequency: 'QUARTERLY',
        lastAudit: '2026-01-15',
        riskLevel: 'LOW_PROTECTION'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDocumentData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        documentOverview: {
          ...prev.documentOverview,
          storageUtilization: Math.max(70.0, Math.min(76.0, prev.documentOverview.storageUtilization + (Math.random() - 0.5) * 0.8)),
          securityScore: Math.max(89.0, Math.min(95.0, prev.documentOverview.securityScore + (Math.random() - 0.5) * 0.6)),
          collaborationScore: Math.max(85.0, Math.min(92.0, prev.documentOverview.collaborationScore + (Math.random() - 0.5) * 1.0))
        }
      }));
    }, 71000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getSecurityColor = (level) => {
    switch (level) {
      case 'CONFIDENTIAL': return 'text-red-400 bg-red-400/20';
      case 'RESTRICTED': return 'text-orange-400 bg-orange-400/20';
      case 'INTERNAL': return 'text-yellow-400 bg-yellow-400/20';
      case 'PUBLIC': return 'text-green-400 bg-green-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'PUBLISHED': return 'text-green-400 bg-green-400/20';
      case 'DRAFT': return 'text-yellow-400 bg-yellow-400/20';
      case 'REVIEW': return 'text-blue-400 bg-blue-400/20';
      case 'EXECUTED': return 'text-purple-400 bg-purple-400/20';
      case 'ARCHIVED': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-cyan-400 bg-cyan-400/20';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'IMMEDIATE': return 'text-red-500';
      case 'HIGH': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-blue-400';
    }
  };

  const getScoreColor = (score, good = 70, excellent = 85) => {
    if (score >= excellent) return 'text-green-400';
    if (score >= good) return 'text-blue-400';
    if (score >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatBytes = (bytes) => {
    if (bytes >= 1000000000) {
      return `${(bytes / 1000000000).toFixed(1)} GB`;
    }
    if (bytes >= 1000000) {
      return `${(bytes / 1000000).toFixed(1)} MB`;
    }
    if (bytes >= 1000) {
      return `${(bytes / 1000).toFixed(0)} KB`;
    }
    return `${bytes} B`;
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Document Management Intelligence Center</h1>
              <p className="text-blue-300">Document lifecycle & collaboration analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{documentData.currentTime}</div>
            <div className="text-blue-300">Document Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Document Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <FileText className="w-5 h-5 text-blue-400 mr-2" />
                Documents
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(documentData.documentOverview.activeDocuments)}</div>
            <div className="text-blue-300 text-sm">{formatNumber(documentData.documentOverview.totalDocuments)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Archive className="w-5 h-5 text-purple-400 mr-2" />
                Storage
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatBytes(documentData.documentOverview.totalStorage * 1000000)}</div>
            <div className="text-purple-300 text-sm">{formatPercentage(documentData.documentOverview.storageUtilization)} Used</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-green-400 mr-2" />
                Collaborators
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(documentData.documentOverview.collaborators)}</div>
            <div className="text-green-300 text-sm">Active</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-red-400 mr-2" />
                Security
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(documentData.documentOverview.securityScore)}`}>
              {formatPercentage(documentData.documentOverview.securityScore)}
            </div>
            <div className="text-red-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-orange-400 mr-2" />
                Compliance
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(documentData.documentOverview.accessCompliance)}`}>
              {formatPercentage(documentData.documentOverview.accessCompliance)}
            </div>
            <div className="text-orange-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-cyan-400 mr-2" />
                Collaboration
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(documentData.documentOverview.collaborationScore)}`}>
              {formatPercentage(documentData.documentOverview.collaborationScore)}
            </div>
            <div className="text-cyan-300 text-sm">Score</div>
          </div>
        </div>

        {/* Document Categories */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
            Document Category Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Documents</th>
                  <th className="text-center p-3 text-slate-300">Storage</th>
                  <th className="text-center p-3 text-slate-300">Security</th>
                  <th className="text-center p-3 text-slate-300">Access</th>
                  <th className="text-center p-3 text-slate-300">Risk</th>
                </tr>
              </thead>
              <tbody>
                {documentData.documentCategories.map((category, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{category.category}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        {category.collaborators} collaborators • {category.retention} retention
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-blue-400 font-medium">{formatNumber(category.documents)}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(category.views)} views</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-purple-400 font-medium">{formatBytes(category.storage * 1000)}</div>
                      <div className="text-slate-400 text-xs">{category.avgFileSize}</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className={`text-sm px-2 py-1 rounded ${getSecurityColor(category.accessLevel)}`}>
                        {category.accessLevel}
                      </div>
                      <div className="text-slate-400 text-xs mt-1">{formatPercentage(category.avgSecurity)}</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-green-400 text-sm">{formatPercentage(category.shareRatio)}%</div>
                      <div className="text-slate-400 text-xs">{category.editFrequency}</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getRiskColor(category.riskLevel)}`}>
                        {category.riskLevel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Document Activity & Collaboration Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-green-400 mr-2" />
              Recent Document Activity
            </h3>
            <div className="space-y-4">
              {documentData.documentActivity.map((activity, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{activity.document}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(activity.status)}`}>
                        {activity.status}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getSecurityColor(activity.security)}`}>
                        {activity.security}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Size: {activity.size}</div>
                    <div className="text-green-400">Version: {activity.version}</div>
                    <div className="text-purple-400">Views: {formatNumber(activity.views)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Owner: {activity.owner}</div>
                    <div className="text-yellow-400">Modified: {activity.modified}</div>
                    <div className={`${getScoreColor(activity.compliance)}`}>Compliance: {formatPercentage(activity.compliance)}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Location:</strong> {activity.location} • <strong>Activity:</strong> {activity.activityType}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Last Access:</strong> {activity.lastAccess} by {activity.accessBy}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Collaborators:</strong> {activity.collaborators.slice(0, 2).join(', ')}{activity.collaborators.length > 2 ? '...' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-cyan-400 mr-2" />
              Collaboration Performance Metrics
            </h3>
            <div className="space-y-4">
              {documentData.collaborationMetrics.map((metrics, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{metrics.period}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getScoreColor(metrics.collaborationScore)}`}>
                        {formatPercentage(metrics.collaborationScore)} Score
                      </span>
                      <span className="text-cyan-400 text-xs">{formatNumber(metrics.uniqueCollaborators)} users</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Docs: {formatNumber(metrics.documentsAccessed)}</div>
                    <div className="text-green-400">Views: {formatNumber(metrics.totalViews)}</div>
                    <div className="text-purple-400">Edits: {formatNumber(metrics.edits)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Downloads: {formatNumber(metrics.downloads)}</div>
                    <div className="text-orange-400">Shares: {formatNumber(metrics.shares)}</div>
                    <div className="text-pink-400">Comments: {formatNumber(metrics.comments)}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Peak Activity:</strong> {metrics.peakActivity} • <strong>Response:</strong> {metrics.responseTime}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Top Teams:</strong> {metrics.mostActiveUsers.slice(0, 2).join(', ')}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-green-400">Activity: {metrics.trends.activity}</div>
                    <div className="text-blue-400">Collab: {metrics.trends.collaboration}</div>
                    <div className="text-purple-400">Productivity: {metrics.trends.productivity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Metrics & Document Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              Document Security Analytics
            </h3>
            <div className="space-y-4">
              {documentData.securityMetrics.map((security, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm px-2 py-1 rounded font-medium ${getSecurityColor(security.level)}`}>
                      {security.level}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getScoreColor(security.complianceScore)}`}>
                        {formatPercentage(security.complianceScore)} Compliance
                      </span>
                      <span className="text-slate-400 text-xs">{formatPercentage(security.percentage)} of docs</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Docs: {formatNumber(security.documents)}</div>
                    <div className="text-green-400">Blocks: {security.successfulBlocks}</div>
                    <div className="text-red-400">Attempts: {security.breachAttempts}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Encryption: {security.encryption}</div>
                    <div className="text-cyan-400">Access: {security.avgAccessTime}</div>
                    <div className="text-yellow-400">Audit: {security.auditFrequency}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Last Audit:</strong> {security.lastAudit} • <strong>Protection:</strong> {security.riskLevel.replace('_', ' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              Document Management Alerts
            </h3>
            <div className="space-y-4">
              {documentData.documentAlerts.map((alert, index) => (
                <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{alert.type}</span>
                      <span className="text-slate-300 text-xs">{alert.category}</span>
                      <span className={`text-xs ${getUrgencyColor(alert.urgency)}`}>
                        {alert.urgency}
                      </span>
                    </div>
                    <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                  </div>
                  <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                  <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                    <div className="text-slate-300">Document: {alert.document}</div>
                    {alert.documentId && <div className="text-slate-300">ID: {alert.documentId}</div>}
                    {alert.riskScore && <div className="text-slate-300">Risk Score: {alert.riskScore.toFixed(1)}</div>}
                    {alert.expiringDocuments && <div className="text-slate-300">Expiring: {alert.expiringDocuments} docs</div>}
                  </div>
                  <div className="text-slate-300 text-xs mb-2">
                    <strong>Impact:</strong> {alert.impact}
                  </div>
                  <div className="text-slate-300 text-xs">
                    <strong>Action:</strong> {alert.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}