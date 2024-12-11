interface ActivityStatsProps {
  timeRange: 'week' | 'month' | 'year';
}

export const ActivityStats = ({ timeRange }: ActivityStatsProps) => {
  const topActivities = [
    { name: 'Exercise', count: 12 },
    { name: 'Meditation', count: 10 },
    { name: 'Reading', count: 8 },
    { name: 'Social Activity', count: 6 }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Most Common Activities</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topActivities.map(activity => (
          <div 
            key={activity.name}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{activity.name}</span>
              <span className="text-teal-600">{activity.count} times</span>
            </div>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-teal-600 h-2 rounded-full"
                style={{ width: `${(activity.count / 14) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};