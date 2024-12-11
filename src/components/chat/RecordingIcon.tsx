import { MicrophoneIcon } from '@heroicons/react/24/outline';
import './styles/recording.css';

interface RecordingIconProps {
  isRecording: boolean;
}

export const RecordingIcon = ({ isRecording }: RecordingIconProps) => {
  if (!isRecording) {
    return <MicrophoneIcon className="w-5 h-5" />;
  }

  return (
    <div className="relative flex items-center justify-center">
      <MicrophoneIcon className="w-5 h-5 text-white z-10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="recording-wave" />
        <div className="recording-wave delay-150" />
        <div className="recording-wave delay-300" />
      </div>
    </div>
  );
};