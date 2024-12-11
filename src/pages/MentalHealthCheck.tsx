import { useState } from 'react';
import { Card, CardHeader, CardBody } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { MentalHealthAssessment } from '../components/assessment/MentalHealthAssessment';
import { BeakerIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

const MentalHealthCheck = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'assessment',
      title: 'Mental Health Assessment',
      description: 'Take a comprehensive assessment to understand your mental well-being',
      icon: BeakerIcon,
      color: 'bg-purple-100 text-purple-700'
    },
    {
      id: 'daily-check',
      title: 'Daily Check-in',
      description: 'Quick check-in to track your daily mental state',
      icon: HeartIcon,
      color: 'bg-teal-100 text-teal-700'
    },
    {
      id: 'progress',
      title: 'Progress Tracking',
      description: 'View your mental health journey over time',
      icon: SparklesIcon,
      color: 'bg-blue-100 text-blue-700'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Mental Health Check</h1>

      {!selectedSection ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Card 
              key={section.id}
              className="cursor-pointer transform transition-all hover:-translate-y-1"
              onClick={() => setSelectedSection(section.id)}
            >
              <CardBody>
                <div className={`rounded-lg p-3 w-12 h-12 ${section.color} mb-4 flex items-center justify-center`}>
                  <section.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </CardBody>
            </Card>
          ))}
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

          {selectedSection === 'assessment' && (
            <div className="animate-fade-in">
              <MentalHealthAssessment />
            </div>
          )}

          {selectedSection === 'daily-check' && (
            <Card className="animate-fade-in">
              <CardHeader>
                <h2 className="text-xl font-semibold">Daily Check-in</h2>
                <p className="text-gray-600 text-sm mt-1">
                  Take a moment to reflect on your day
                </p>
              </CardHeader>
              <CardBody>
                {/* Daily check-in content */}
                <p className="text-gray-600">Daily check-in feature coming soon...</p>
              </CardBody>
            </Card>
          )}

          {selectedSection === 'progress' && (
            <Card className="animate-fade-in">
              <CardHeader>
                <h2 className="text-xl font-semibold">Progress Tracking</h2>
                <p className="text-gray-600 text-sm mt-1">
                  Monitor your mental health journey
                </p>
              </CardHeader>
              <CardBody>
                {/* Progress tracking content */}
                <p className="text-gray-600">Progress tracking feature coming soon...</p>
              </CardBody>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};

export default MentalHealthCheck;