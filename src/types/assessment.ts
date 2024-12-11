export interface AssessmentOption {
  value: number;
  text: string;
}

export interface AssessmentQuestion {
  id: number;
  text: string;
  options: AssessmentOption[];
  category: string;
}

export interface AssessmentResult {
  level: string;
  message: string;
  color: string;
  recommendations: string[];
}

export interface CategoryScore {
  category: string;
  score: number;
  maxScore: number;
  percentage: number;
}