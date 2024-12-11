export type SpeechRecognitionStatus = 'idle' | 'listening' | 'error';

export interface SpeechRecognitionEvent {
  resultIndex: number;
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  };
}

export interface SpeechRecognitionState {
  status: SpeechRecognitionStatus;
  transcript: string;
  error: string | null;
}