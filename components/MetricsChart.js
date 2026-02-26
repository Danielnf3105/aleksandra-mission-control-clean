import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

export function ProcessingTimeChart() {
  const data = [
    { time: '18:00', avgTime: 45, count: 2 },
    { time: '18:15', avgTime: 38, count: 3 },
    { time: '18:30', avgTime: 35, count: 4 },
    { time: '18:45', avgTime: 32, count: 2 },
    { time: '19:00', avgTime: 35, count: 1 }
  ];

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
      <h3 className="text-lg font-bold mb-4 text-white">Processing Performance</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="time" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '6px',
                color: '#F3F4F6'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="avgTime" 
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function ContentTypeChart() {
  const data = [
    { name: 'Facebook Ads', value: 4, color: '#3B82F6' },
    { name: 'AI Tools', value: 3, color: '#10B981' },
    { name: 'Business Strategy', value: 2, color: '#F59E0B' },
    { name: 'SEO/Technical', value: 1, color: '#EF4444' },
    { name: 'Other', value: 1, color: '#8B5CF6' }
  ];

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
      <h3 className="text-lg font-bold mb-4 text-white">Content Distribution</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '6px',
                color: '#F3F4F6'
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function SystemHealthChart() {
  const data = [
    { system: 'Content', uptime: 100, status: 'Operational' },
    { system: 'Email', uptime: 98, status: 'Operational' },
    { system: 'Directory', uptime: 100, status: 'Operational' },
    { system: 'Notion', uptime: 85, status: 'Development' },
    { system: 'LinkedIn', uptime: 0, status: 'Paused' }
  ];

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
      <h3 className="text-lg font-bold mb-4 text-white">System Health</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="system" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '6px',
                color: '#F3F4F6'
              }} 
            />
            <Bar dataKey="uptime" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}