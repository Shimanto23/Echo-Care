import { useState, useEffect, useCallback, useRef } from 'react';
import { MeditationPreset } from '../types/meditation';
import { useSound } from './useSound';

export const useMeditationTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<MeditationPreset | null>(null);
  const [currentGuidanceIndex, setCurrentGuidanceIndex] = useState(0);
  const [showGuidance, setShowGuidance] = useState(true);
  const timerRef = useRef<NodeJS.Timeout>();

  const { playBell, stopBell, cleanup, isPlaying } = useSound();

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
  }, []);

  const startMeditation = useCallback(() => {
    if (selectedPreset) {
      setTimeLeft(selectedPreset.duration * 60);
      setIsActive(true);
      setIsPaused(false);
      setCurrentGuidanceIndex(0);
      playBell();
    }
  }, [selectedPreset, playBell]);

  const pauseMeditation = useCallback(() => {
    setIsPaused(prev => !prev);
    if (!isPaused) {
      clearTimer();
    }
  }, [clearTimer, isPaused]);

  const stopMeditation = useCallback(() => {
    clearTimer();
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(0);
    setCurrentGuidanceIndex(0);
    stopBell();
  }, [clearTimer, stopBell]);

  useEffect(() => {
    if (isActive && !isPaused && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            stopMeditation();
            return 0;
          }
          return time - 1;
        });

        // Update guidance message every 20 seconds
        if (timeLeft % 20 === 0) {
          setCurrentGuidanceIndex(index => 
            (index + 1) % (selectedPreset?.guidance.length || 1)
          );
        }
      }, 1000);

      return () => clearTimer();
    }
  }, [isActive, isPaused, timeLeft, selectedPreset, stopMeditation, clearTimer]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimer();
      cleanup();
    };
  }, [clearTimer, cleanup]);

  return {
    timeLeft,
    isActive,
    isPaused,
    selectedPreset,
    currentGuidanceIndex,
    showGuidance,
    isPlaying,
    setSelectedPreset,
    setShowGuidance,
    startMeditation,
    pauseMeditation,
    stopMeditation
  };
};