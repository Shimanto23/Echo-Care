import { useState } from 'react';
import { Card, CardHeader, CardBody } from '../shared/Card';
import { Button } from '../shared/Button';

const questions = [
  {
    id: 1,
    text: "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
    options: [
      { value: 0, text: "Not at all" },
      { value: 1, text: "Several days" },
      { value: 2, text: "More than half the days" },
      { value: 3, text: "Nearly every day" }
    ]
  },
  {
    id: 2,
    text: "How often have you had little interest or pleasure in doing things?",
    options: [
      { value: 0, text: "Not at all" },
      { value: 1, text: "Several days" },
      { value: 2, text: "More than half the days" },
      { value: 3, text: "Nearly every day" }
    ]
  },
  {
    id: 3,
    text: "How often have you had trouble falling or staying asleep, or sleeping too much?",
    options: [
      { value: 0, text: "Not at all" },
      { value: 1, text: "Several days" },
      { value: 2, text: "More than half the days" },
      { value: 3, text: "Nearly every day" }
    ]
  },
  {
    id: 4,
    text: "How often have you felt tired or had little energy?",
    options: [
      { value: 0, text: "Not at all" },
      { value: 1, text: "Several days" },
      { value: 2, text: "More than half the days" },
      { value: 3, text: "Nearly every day" }
    ]
  },
  {
    id: 5,
    text: "How often have you felt nervous, anxious, or on edge?",
    options: [
      { value: 0, text: "Not at all" },
      { value: 1, text: "Several days" },
      { value: 2, text: "More than half the days" },
      { value: 3, text: "Nearly every day" }
    ]
  }
];

export const MentalHealthAssessment = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

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
    if (score <= 4) {
      return {
        level: "Low Risk",
        message: "Your responses suggest minimal symptoms. Continue monitoring your mental health and practice self-care.",
        color: "text-green-600"
      };
    } else if (score <= 9) {
      return {
        level: "Moderate Risk",
        message: "Your responses suggest mild symptoms. Consider talking to a mental health professional.",
        color: "text-yellow-600"
      };
    } else {
      return {
        level: "High Risk",
        message: "Your responses suggest significant symptoms. We strongly recommend seeking professional help.",
        color: "text-red-600"
      };
    }
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setShowResults(true);
    }
  };

  const resetAssessment = () => {
    setAnswers({});
    setShowResults(false);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <h2 className="text-xl font-semibold">Mental Health Assessment</h2>
        <p className="text-gray-600 text-sm mt-1">
          This quick assessment can help identify potential mental health concerns.
        </p>
      </CardHeader>
      <CardBody>
        {!showResults ? (
          <div className="space-y-6">
            {questions.map(question => (
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
            <Button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length !== questions.length}
              className="w-full"
            >
              Submit Assessment
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {(() => {
              const score = calculateScore();
              const { level, message, color } = getAssessment(score);
              return (
                <>
                  <div className="text-center">
                    <h3 className={`text-2xl font-bold ${color}`}>{level}</h3>
                    <p className="mt-2 text-gray-600">{message}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Next Steps:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Practice regular self-care and mindfulness</li>
                      <li>Maintain a consistent sleep schedule</li>
                      <li>Stay connected with friends and family</li>
                      <li>Consider speaking with a mental health professional</li>
                    </ul>
                  </div>
                  <Button onClick={resetAssessment} variant="outline" className="w-full">
                    Take Assessment Again
                  </Button>
                </>
              );
            })()}
          </div>
        )}
      </CardBody>
    </Card>
  );
};