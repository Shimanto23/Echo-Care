import { useState, useMemo } from 'react';
import { Card, CardHeader, CardBody } from '../../../components/shared/Card';
import { ActivityStats } from './charts/ActivityStats';
import { SleepChart } from './charts/SleepChart';
import { TimeRangeSelector } from './charts/TimeRangeSelector';

export const ProgressTracking = () => {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('week');

  const activityData = useMemo(() => [
    { name: 'Exercise', count: 12 },
    { name: 'Meditation', count: 10 },
    { name: 'Reading', count: 8 },
    { name: 'Social Activity', count: 6 }
  ], []);

  return (
    <div className="space-y-6 animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Progress Tracking</h2>
            <TimeRangeSelector value={timeRange} onChange={setTimeRange} />
          </div>
        </CardHeader>
        <CardBody>
          <div className="space-y-8">
            <SleepChart />
            <ActivityStats data={activityData} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};