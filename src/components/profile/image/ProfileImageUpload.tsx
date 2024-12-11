import { useRef } from 'react';
import { CameraIcon } from '@heroicons/react/24/outline';
import { ProfileImageProps } from '../../../types/profile';
import { ImagePreview } from './ImagePreview';
import { UploadButton } from './UploadButton';

export const ProfileImageUpload = ({ imageUrl, onImageUpload, isUploading = false }: ProfileImageProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative">
      <ImagePreview imageUrl={imageUrl} />
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        className="hidden"
        aria-label="Upload profile picture"
      />

      <UploadButton
        onClick={handleButtonClick}
        isUploading={isUploading}
      />
    </div>
  );
};