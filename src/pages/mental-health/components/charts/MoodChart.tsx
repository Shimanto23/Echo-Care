import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface MoodChartProps {
  timeRange: 'week' | 'month' | 'year';
}

const demoData = [
  { date: '2024-01-01', mood: 4 },
  { date: '2024-01-02', mood: 3 },
  { date: '2024-01-03', mood: 5 },
  { date: '2024-01-04', mood: 4 },
  { date: '2024-01-05', mood: 4 },
  { date: '2024-01-06', mood: 3 },
  { date: '2024-01-07', mood: 5 },
];

export const MoodChart = ({ timeRange }: MoodChartProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Mood Trends</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={demoData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="mood" 
              stroke="#0D9488" 
              strokeWidth={2} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};