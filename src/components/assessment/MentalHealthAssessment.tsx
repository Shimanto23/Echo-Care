import { useState } from 'react';
import { Card, CardHeader, CardBody } from '../shared/Card';
import { Button } from '../shared/Button';
import { assessmentQuestions } from '../../data/assessmentQuestions';
import { AssessmentResult } from './AssessmentResult';
import { ResourceRecommendations } from './ResourceRecommendations';

export const MentalHealthAssessment = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, value) => sum + value, 0);
  };

  const getAssessment = (score: number) => {
    const maxScore = assessmentQuestions.length * 3; // Maximum possible score
    const percentage = (score / maxScore) * 100;

    if (percentage <= 30) {
      return {
        level: "Low Risk",
        message: "Your responses suggest minimal symptoms. While your mental health appears stable, it's important to continue monitoring and practicing self-care.",
        color: "text-green-600",
        recommendations: ["Maintain healthy habits", "Practice mindfulness", "Regular exercise"]
      };
    } else if (percentage <= 60) {
      return {
        level: "Moderate Risk",
        message: "Your responses indicate moderate levels of distress. Consider talking to a mental health professional for guidance and support.",
        color: "text-yellow-600",
        recommendations: ["Schedule a consultation", "Join support groups", "Learn stress management techniques"]
      };
    } else {
      return {
        level: "High Risk",
        message: "Your responses suggest significant symptoms. We strongly recommend seeking professional help as soon as possible.",
        color: "text-red-600",
        recommendations: ["Seek immediate professional help", "Contact crisis support", "Reach out to trusted friends or family"]
      };
    }
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === assessmentQuestions.length) {
      setShowResults(true);
    }
  };

  const resetAssessment = () => {
    setAnswers({});
    setShowResults(false);
    setCurrentSection(0);
  };

  const currentQuestions = assessmentQuestions.slice(
    currentSection * 5,
    (currentSection + 1) * 5
  );

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <h2 className="text-xl font-semibold">Comprehensive Mental Health Assessment</h2>
        <p className="text-gray-600 text-sm mt-1">
          This assessment helps identify potential mental health concerns and provides personalized recommendations.
        </p>
      </CardHeader>
      <CardBody>
        {!showResults ? (
          <div className="space-y-6">
            <div className="mb-4 bg-teal-50 p-4 rounded-lg">
              <h3 className="text-teal-700 font-medium mb-2">Important Note:</h3>
              <p className="text-sm text-teal-600">
                This assessment is not a diagnostic tool. It's designed to help you understand your mental well-being and determine if you might benefit from professional support.
              </p>
            </div>

            {currentQuestions.map(question => (
              <div key={question.id} className="space-y-3">
                <p className="font-medium">{question.text}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {question.options.map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(question.id, option.value)}
                      className={`p-3 rounded-lg border transition-colors ${
                        answers[question.id] === option.value
                          ? 'bg-teal-50 border-teal-500 text-teal-700'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex justify-between mt-6">
              {currentSection > 0 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentSection(prev => prev - 1)}
                >
                  Previous
                </Button>
              )}
              {currentSection < Math.ceil(assessmentQuestions.length / 5) - 1 ? (
                <Button
                  onClick={() => setCurrentSection(prev => prev + 1)}
                  disabled={currentQuestions.some(q => !answers[q.id])}
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={assessmentQuestions.some(q => !answers[q.id])}
                >
                  Complete Assessment
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <AssessmentResult
              score={calculateScore()}
              assessment={getAssessment(calculateScore())}
            />
            <ResourceRecommendations
              riskLevel={getAssessment(calculateScore()).level}
            />
            <Button onClick={resetAssessment} variant="outline" className="w-full">
              Take Assessment Again
            </Button>
          </div>
        )}
      </CardBody>
    </Card>
  );
};