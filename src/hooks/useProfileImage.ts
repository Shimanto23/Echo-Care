import { useState } from 'react';
import { saveImageLocally } from '../utils/imageUtils';

export const useProfileImage = () => {
  const [isUploading, setIsUploading] = useState(false);

  const uploadImage = async (file: File): Promise<string> => {
    setIsUploading(true);
    try {
      // Save image locally and get the data URL
      const imageUrl = await saveImageLocally(file);
      return imageUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    isUploading,
    uploadImage
  };
};