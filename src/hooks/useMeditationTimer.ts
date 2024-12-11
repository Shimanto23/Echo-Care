import { useState, useEffect, useCallback } from 'react';
import { MeditationPreset } from '../types/meditation';
import { useSound } from './useSound';

export const useMeditationTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<MeditationPreset | null>(null);
  const [currentGuidanceIndex, setCurrentGuidanceIndex] = useState(0);
  const [showGuidance, setShowGuidance] = useState(true);

  const { playBell, playAmbient, pauseAmbient, stopAmbient } = useSound();

  const startMeditation = useCallback(() => {
    if (selectedPreset) {
      setTimeLeft(selectedPreset.duration * 60);
      setIsActive(true);
      setIsPaused(false);
      setCurrentGuidanceIndex(0);
      playBell();
      playAmbient();
    }
  }, [selectedPreset, playBell, playAmbient]);

  const pauseMeditation = useCallback(() => {
    setIsPaused(prev => {
      if (prev) {
        playAmbient();
      } else {
        pauseAmbient();
      }
      return !prev;
    });
  }, [playAmbient, pauseAmbient]);

  const stopMeditation = useCallback(() => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(0);
    setCurrentGuidanceIndex(0);
    stopAmbient();
    playBell();
  }, [stopAmbient, playBell]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && !isPaused && timeLeft > 0) {
      interval = setInterval(() => {
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
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused, timeLeft, selectedPreset, stopMeditation]);

  return {
    timeLeft,
    isActive,
    isPaused,
    selectedPreset,
    currentGuidanceIndex,
    showGuidance,
    setSelectedPreset,
    setShowGuidance,
    startMeditation,
    pauseMeditation,
    stopMeditation
  };
};