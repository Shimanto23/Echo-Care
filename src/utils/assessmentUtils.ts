import { AssessmentQuestion, CategoryScore } from '../types/assessment';

export const calculateCategoryScores = (
  questions: AssessmentQuestion[],
  answers: Record<number, number>
): CategoryScore[] => {
  const categoryScores: Record<string, { score: number; count: number }> = {};

  questions.forEach(question => {
    if (!categoryScores[question.category]) {
      categoryScores[question.category] = { score: 0, count: 0 };
    }
    if (answers[question.id] !== undefined) {
      categoryScores[question.category].score += answers[question.id];
      categoryScores[question.category].count++;
    }
  });

  return Object.entries(categoryScores).map(([category, data]) => ({
    category,
    score: data.score,
    maxScore: data.count * 3,
    percentage: (data.score / (data.count * 3)) * 100
  }));
};

export const getAssessmentLevel = (score: number, maxScore: number): string => {
  const percentage = (score / maxScore) * 100;
  if (percentage <= 25) return "Low Risk";
  if (percentage <= 50) return "Mild Risk";
  if (percentage <= 75) return "Moderate Risk";
  return "High Risk";
};

export const getCategoryRecommendations = (categoryScores: CategoryScore[]): string[] => {
  const recommendations: string[] = [];

  categoryScores.forEach(({ category, percentage }) => {
    if (percentage > 50) {
      switch (category) {
        case "Depression":
          recommendations.push("Consider speaking with a mental health professional about depression symptoms");
          break;
        case "Anxiety":
          recommendations.push("Practice daily relaxation techniques and consider anxiety management therapy");
          break;
        case "Sleep":
          recommendations.push("Establish a consistent sleep schedule and practice good sleep hygiene");
          break;
        case "Energy":
          recommendations.push("Focus on physical activity and maintaining a balanced diet");
          break;
        case "Stress":
          recommendations.push("Learn and practice stress management techniques");
          break;
        case "Social Connection":
          recommendations.push("Actively seek social support and consider joining support groups");
          break;
      }
    }
  });

  return recommendations;
};