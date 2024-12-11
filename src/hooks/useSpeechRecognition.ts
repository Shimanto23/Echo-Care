import { useState, useEffect, useCallback } from 'react';
import { createSpeechRecognition, requestMicrophonePermission } from '../utils/speechUtils';
import { SpeechRecognitionStatus, SpeechRecognitionEvent } from '../types/speech';

export const useSpeechRecognition = () => {
  const [status, setStatus] = useState<SpeechRecognitionStatus>('idle');
  const [transcript, setTranscript] = useState('');
  const [isSupported, setIsSupported] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsSupported('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
  }, []);

  const startListening = useCallback(async () => {
    if (!isSupported) {
      setError('Speech recognition is not supported in your browser');
      return;
    }

    try {
      const hasPermission = await requestMicrophonePermission();
      if (!hasPermission) {
        setError('Microphone permission denied');
        return;
      }

      const recognition = createSpeechRecognition();

      recognition.onstart = () => {
        setStatus('listening');
        setTranscript('');
        setError(null);
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setTranscript(transcript);
      };

      recognition.onerror = (event: { error: string }) => {
        setStatus('error');
        setError(event.error);
      };

      recognition.onend = () => {
        setStatus('idle');
      };

      recognition.start();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Failed to start speech recognition');
    }
  }, [isSupported]);

  const stopListening = useCallback(() => {
    const recognition = createSpeechRecognition();
    recognition.stop();
    setStatus('idle');
  }, []);

  return {
    isListening: status === 'listening',
    startListening,
    stopListening,
    transcript,
    isSupported,
    error
  };
};