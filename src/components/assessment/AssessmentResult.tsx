import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import { ChartBarIcon, ExclamationTriangleIcon, HeartIcon } from '@heroicons/react/24/outline';

interface AssessmentResultProps {
  score: number;
  assessment: {
    level: string;
    message: string;
    color: string;
    recommendations: string[];
  };
}

export const AssessmentResult = ({ score, assessment }: AssessmentResultProps) => {
  const isHighRisk = assessment.level === "High Risk";

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
          isHighRisk ? 'bg-red-100' : 'bg-teal-100'
        } mb-4`}>
          {isHighRisk ? (
            <ExclamationTriangleIcon className="w-8 h-8 text-red-600" />
          ) : (
            <HeartIcon className="w-8 h-8 text-teal-600" />
          )}
        </div>
        <h3 className={`text-2xl font-bold ${assessment.color}`}>
          {assessment.level}
        </h3>
        <p className="mt-2 text-gray-600">{assessment.message}</p>
      </div>

      <Card>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <ChartBarIcon className="w-5 h-5 text-teal-600" />
            <h4 className="font-medium">Assessment Score: {score}</h4>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Recommended Actions:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {assessment.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {isHighRisk && (
        <div className="bg-red-50 p-6 rounded-lg">
          <h4 className="flex items-center gap-2 font-medium text-red-700 mb-4">
            <ExclamationTriangleIcon className="w-5 h-5" />
            Important Notice
          </h4>
          <p className="text-red-600 mb-4">
            Your responses indicate significant distress. We strongly recommend seeking professional help immediately.
          </p>
          <div className="space-y-3">
            <Button variant="secondary" className="w-full">
              Find a Therapist Now
            </Button>
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-medium text-red-700 mb-2">24/7 Crisis Support:</h5>
              <ul className="space-y-2 text-red-600">
                <li>• National Crisis Hotline: 988</li>
                <li>• Crisis Text Line: Text HOME to 741741</li>
                <li>• Emergency: 911</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};