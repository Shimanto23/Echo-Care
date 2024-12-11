import { Card } from '../../components/shared/Card';
import { PresetSelector } from './components/PresetSelector';
import { TimerDisplay } from './components/TimerDisplay';
import { MeditationBenefits } from './components/MeditationBenefits';
import { useMeditationTimer } from '../../hooks/useMeditationTimer';

export const MeditationTimer = () => {
  const {
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
  } = useMeditationTimer();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Meditation Timer</h1>
      
      <div className="max-w-4xl mx-auto">
        <PresetSelector
          selectedPreset={selectedPreset}
          onSelectPreset={setSelectedPreset}
        />

        <TimerDisplay
          timeLeft={timeLeft}
          isActive={isActive}
          isPaused={isPaused}
          selectedPreset={selectedPreset}
          currentGuidanceIndex={currentGuidanceIndex}
          showGuidance={showGuidance}
          onToggleGuidance={() => setShowGuidance(!showGuidance)}
          onStart={startMeditation}
          onPause={pauseMeditation}
          onStop={stopMeditation}
        />

        <MeditationBenefits />
      </div>
    </div>
  );
};