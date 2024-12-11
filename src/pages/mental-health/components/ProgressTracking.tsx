import { useState } from 'react';
import { Card, CardHeader, CardBody } from '../../../components/shared/Card';
import { MoodChart } from './charts/MoodChart';
import { ActivityStats } from './charts/ActivityStats';
import { SleepChart } from './charts/SleepChart';
import { TimeRangeSelector } from './charts/TimeRangeSelector';

export const ProgressTracking = () => {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('week');

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
            <MoodChart timeRange={timeRange} />
            <SleepChart timeRange={timeRange} />
            <ActivityStats timeRange={timeRange} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};