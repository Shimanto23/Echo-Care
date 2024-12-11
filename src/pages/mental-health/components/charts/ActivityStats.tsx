interface ActivityStatsProps {
  data: Array<{
    name: string;
    count: number;
  }>;
}

export const ActivityStats = ({ data }: ActivityStatsProps) => {
  const maxCount = Math.max(...data.map(activity => activity.count));

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Most Common Activities</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map(activity => (
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
                style={{ width: `${(activity.count / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};