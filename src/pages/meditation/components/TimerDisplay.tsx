import { Card, CardHeader, CardBody } from '../../../components/shared/Card';
import { MeditationControls } from './MeditationControls';
import { MeditationPreset } from '../../../types/meditation';
import { formatTime } from '../../../utils/timeUtils';

interface TimerDisplayProps {
  timeLeft: number;
  isActive: boolean;
  isPaused: boolean;
  selectedPreset: MeditationPreset | null;
  currentGuidanceIndex: number;
  showGuidance: boolean;
  onToggleGuidance: () => void;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}

export const TimerDisplay = ({
  timeLeft,
  isActive,
  isPaused,
  selectedPreset,
  currentGuidanceIndex,
  showGuidance,
  onToggleGuidance,
  onStart,
  onPause,
  onStop
}: TimerDisplayProps) => {
  return (
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
            onStart={onStart}
            onPause={onPause}
            onStop={onStop}
          />

          {isActive && (
            <div className="flex justify-center">
              <button
                onClick={onToggleGuidance}
                className="text-sm text-teal-600 hover:text-teal-700"
              >
                {showGuidance ? 'Hide' : 'Show'} Guidance
              </button>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};