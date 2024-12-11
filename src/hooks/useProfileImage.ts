import { useState } from 'react';

export const useProfileImage = () => {
  const [isUploading, setIsUploading] = useState(false);

  const uploadImage = async (file: File): Promise<string> => {
    setIsUploading(true);
    try {
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create object URL for preview
      const imageUrl = URL.createObjectURL(file);
      
      return imageUrl;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    isUploading,
    uploadImage
  };
};