import { Card, CardHeader, CardBody } from '../components/shared/Card';
import { MeditationPresetCard } from '../components/meditation/MeditationPresetCard';
import { MeditationControls } from '../components/meditation/MeditationControls';
import { MeditationBenefits } from '../components/meditation/MeditationBenefits';
import { useMeditationTimer } from '../hooks/useMeditationTimer';
import { formatTime } from '../utils/timeUtils';
import { meditationPresets } from '../data/meditationPresets';

const MeditationTimer = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {meditationPresets.map(preset => (
            <MeditationPresetCard
              key={preset.id}
              preset={preset}
              isSelected={selectedPreset?.id === preset.id}
              onSelect={setSelectedPreset}
            />
          ))}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="text-center">
              <h2 className="text-2xl font-semibold">
                {isActive 
                  ? formatTime(timeLeft)
                  : selectedPreset
                    ? `${selectedPreset.name} - ${selectedPreset.duration} minutes`
                    : 'Select a meditation preset to begin'
                }
              </h2>
            </div>
          </CardHeader>
          <CardBody>
            <div className="space-y-6">
              {isActive && showGuidance && selectedPreset && (
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <p className="text-teal-700">
                    {selectedPreset.guidance[currentGuidanceIndex]}
                  </p>
                </div>
              )}

              <MeditationControls
                isActive={isActive}
                isPaused={isPaused}
                isPresetSelected={!!selectedPreset}
                onStart={startMeditation}
                onPause={pauseMeditation}
                onStop={stopMeditation}
              />

              {isActive && (
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowGuidance(!showGuidance)}
                    className="text-sm text-teal-600 hover:text-teal-700"
                  >
                    {showGuidance ? 'Hide' : 'Show'} Guidance
                  </button>
                </div>
              )}
            </div>
          </CardBody>
        </Card>

        <MeditationBenefits />
      </div>
    </div>
  );
};

export default MeditationTimer;