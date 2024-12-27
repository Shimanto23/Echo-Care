export const saveImageLocally = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      if (event.target?.result) {
        const imageData = event.target.result as string;
        try {
          // Store image data in localStorage
          localStorage.setItem('profileImage', imageData);
          resolve(imageData);
        } catch (error) {
          reject(new Error('Failed to save image locally'));
        }
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read image file'));
    };

    reader.readAsDataURL(file);
  });
};