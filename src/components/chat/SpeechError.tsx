interface SpeechErrorProps {
  error: string;
}

export const SpeechError = ({ error }: SpeechErrorProps) => {
  const getErrorMessage = (error: string): string => {
    switch (error) {
      case 'not-allowed':
        return 'Please allow microphone access to use voice input';
      case 'no-speech':
        return 'No speech was detected. Please try again';
      case 'network':
        return 'Network error occurred. Please check your connection';
      default:
        return 'An error occurred with speech recognition';
    }
  };

  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4">
      <div className="flex">
        <div className="flex-1">
          <p className="text-sm text-red-700">
            {getErrorMessage(error)}
          </p>
        </div>
      </div>
    </div>
  );
};