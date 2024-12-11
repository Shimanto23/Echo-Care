// Add to existing types
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  phone: string;
  location: string;
  timezone: string;
  bio: string;
}

export interface ProfileImageProps {
  imageUrl: string | null;
  onImageUpload: (file: File) => void;
  isUploading?: boolean;
}