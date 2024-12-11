interface ImagePreviewProps {
  imageUrl: string | null;
}

export const ImagePreview = ({ imageUrl }: ImagePreviewProps) => {
  return (
    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-teal-100">
          <span className="text-4xl text-teal-700">
            {/* Placeholder initials or icon */}
            👤
          </span>
        </div>
      )}
    </div>
  );
};