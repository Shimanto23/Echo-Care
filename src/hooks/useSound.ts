import { useState, useCallback, useRef } from 'react';

export const useSound = () => {
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const bellAudioRef = useRef<HTMLAudioElement | null>(null);
  const ambientAudioRef = useRef<HTMLAudioElement | null>(null);

  const initializeAudio = useCallback(() => {
    if (!bellAudioRef.current) {
      bellAudioRef.current = new Audio('/sounds/meditation-bell.mp3');
      bellAudioRef.current.volume = 0.5;
    }
    
    if (!ambientAudioRef.current) {
      ambientAudioRef.current = new Audio('/sounds/ambient-meditation.mp3');
      ambientAudioRef.current.loop = true;
      ambientAudioRef.current.volume = 0.3;
    }
  }, []);

  const playBell = useCallback(() => {
    initializeAudio();
    if (bellAudioRef.current) {
      bellAudioRef.current.currentTime = 0;
      bellAudioRef.current.play();
    }
  }, [initializeAudio]);

  const playAmbient = useCallback(() => {
    initializeAudio();
    if (ambientAudioRef.current) {
      ambientAudioRef.current.play();
      setIsAmbientPlaying(true);
    }
  }, [initializeAudio]);

  const pauseAmbient = useCallback(() => {
    if (ambientAudioRef.current) {
      ambientAudioRef.current.pause();
      setIsAmbientPlaying(false);
    }
  }, []);

  const stopAmbient = useCallback(() => {
    if (ambientAudioRef.current) {
      ambientAudioRef.current.pause();
      ambientAudioRef.current.currentTime = 0;
      setIsAmbientPlaying(false);
    }
  }, []);

  const toggleAmbient = useCallback(() => {
    if (isAmbientPlaying) {
      pauseAmbient();
    } else {
      playAmbient();
    }
  }, [isAmbientPlaying, pauseAmbient, playAmbient]);

  return {
    playBell,
    playAmbient,
    pauseAmbient,
    stopAmbient,
    toggleAmbient,
    isAmbientPlaying
  };
};