import { ProfileImageUpload } from './image/ProfileImageUpload';
import { useProfileImage } from '../../hooks/useProfileImage';

interface ProfileOverviewProps {
  name: string;
  email: string;
  location: string;
  avatarUrl: string | null;
  onImageChange: (url: string) => void;
}

export const ProfileOverview = ({ 
  name, 
  email, 
  location, 
  avatarUrl,
  onImageChange 
}: ProfileOverviewProps) => {
  const { isUploading, uploadImage } = useProfileImage();

  const handleImageUpload = async (file: File) => {
    try {
      const url = await uploadImage(file);
      onImageChange(url);
    } catch (error) {
      console.error('Failed to upload image:', error);
      // Handle error (show notification, etc.)
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-col items-center">
        <ProfileImageUpload
          imageUrl={avatarUrl}
          onImageUpload={handleImageUpload}
          isUploading={isUploading}
        />
        <h2 className="mt-4 text-xl font-semibold">{name}</h2>
        <p className="text-gray-500">{email}</p>
        <p className="mt-2 text-sm text-gray-600">{location}</p>
      </div>
    </div>
  );
};