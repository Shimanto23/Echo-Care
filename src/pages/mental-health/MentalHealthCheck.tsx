import { useState } from 'react';
import { AssessmentSection } from './components/AssessmentSection';
import { DailyCheckIn } from './components/DailyCheckIn';
import { ProgressTracking } from './components/ProgressTracking';
import { SectionCard } from './components/SectionCard';
import { Button } from '../../components/shared/Button';

export const MentalHealthCheck = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Mental Health Check</h1>

      {!selectedSection ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SectionCard
            id="assessment"
            title="Mental Health Assessment"
            description="Take a comprehensive assessment to understand your mental well-being"
            onClick={() => setSelectedSection('assessment')}
          />
          <SectionCard
            id="daily-check"
            title="Daily Check-in"
            description="Quick check-in to track your daily mental state"
            onClick={() => setSelectedSection('daily-check')}
          />
          <SectionCard
            id="progress"
            title="Progress Tracking"
            description="View your mental health journey over time"
            onClick={() => setSelectedSection('progress')}
          />
        </div>
      ) : (
        <div>
          <Button
            variant="outline"
            onClick={() => setSelectedSection(null)}
            className="mb-6"
          >
            ← Back to Sections
          </Button>

          {selectedSection === 'assessment' && <AssessmentSection />}
          {selectedSection === 'daily-check' && <DailyCheckIn />}
          {selectedSection === 'progress' && <ProgressTracking />}
        </div>
      )}
    </div>
  );
};