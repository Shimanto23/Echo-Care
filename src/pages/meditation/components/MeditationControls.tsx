import { Button } from '../../../components/shared/Button';
import { PlayIcon, PauseIcon, StopIcon } from '@heroicons/react/24/outline';

interface MeditationControlsProps {
  isActive: boolean;
  isPaused: boolean;
  isPresetSelected: boolean;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}

export const MeditationControls = ({
  isActive,
  isPaused,
  isPresetSelected,
  onStart,
  onPause,
  onStop
}: MeditationControlsProps) => {
  return (
    <div className="flex justify-center gap-4">
      {!isActive ? (
        <Button
          onClick={onStart}
          disabled={!isPresetSelected}
          className="w-32"
        >
          <PlayIcon className="w-5 h-5 mr-2" />
          Start
        </Button>
      ) : (
        <>
          <Button
            onClick={onPause}
            variant="outline"
            className="w-32"
          >
            {isPaused ? (
              <>
                <PlayIcon className="w-5 h-5 mr-2" />
                Resume
              </>
            ) : (
              <>
                <PauseIcon className="w-5 h-5 mr-2" />
                Pause
              </>
            )}
          </Button>
          <Button
            onClick={onStop}
            variant="outline"
            className="w-32"
          >
            <StopIcon className="w-5 h-5 mr-2" />
            Stop
          </Button>
        </>
      )}
    </div>
  );
};