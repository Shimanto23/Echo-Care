import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const demoData = [
  { date: '2025-03-01', hours: 7.5 },
  { date: '2025-03-02', hours: 6.5 },
  { date: '2025-03-03', hours: 8 },
  { date: '2025-03-04', hours: 7 },
  { date: '2025-03-05', hours: 7.5 },
  { date: '2025-03-06', hours: 6 },
  { date: '2025-03-07', hours: 8.5 },
];

export const SleepChart = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Sleep Patterns</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={demoData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 12]} />
            <Tooltip />
            <Bar 
              dataKey="hours" 
              fill="#8B5CF6" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};