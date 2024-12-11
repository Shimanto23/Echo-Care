import { CameraIcon } from '@heroicons/react/24/outline';

interface UploadButtonProps {
  onClick: () => void;
  isUploading: boolean;
}

export const UploadButton = ({ onClick, isUploading }: UploadButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isUploading}
      className="absolute bottom-0 right-0 p-2 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
      title={isUploading ? 'Uploading...' : 'Change profile picture'}
    >
      {isUploading ? (
        <div className="w-4 h-4 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" />
      ) : (
        <CameraIcon className="w-4 h-4 text-gray-600" />
      )}
    </button>
  );
};