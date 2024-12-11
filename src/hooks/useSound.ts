import { useState, useCallback, useRef, useEffect } from 'react';

export const useSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const bellAudioRef = useRef<HTMLAudioElement | null>(null);

  const initializeAudio = useCallback(() => {
    if (!bellAudioRef.current) {
      bellAudioRef.current = new Audio('/sounds/meditation-bell.mp3');
      bellAudioRef.current.volume = 0.5;
    }
  }, []);

  const playBell = useCallback(() => {
    initializeAudio();
    if (bellAudioRef.current) {
      bellAudioRef.current.currentTime = 0;
      bellAudioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  }, [initializeAudio]);

  const stopBell = useCallback(() => {
    if (bellAudioRef.current) {
      bellAudioRef.current.pause();
      bellAudioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, []);

  // Cleanup function
  const cleanup = useCallback(() => {
    stopBell();
    bellAudioRef.current = null;
  }, [stopBell]);

  // Ensure audio is cleaned up on unmount
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  return {
    playBell,
    stopBell,
    cleanup,
    isPlaying
  };
};