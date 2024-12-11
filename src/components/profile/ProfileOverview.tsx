import { CameraIcon, PencilIcon } from '@heroicons/react/24/outline';

interface ProfileOverviewProps {
  name: string;
  email: string;
  location: string;
}

export const ProfileOverview = ({ name, email, location }: ProfileOverviewProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-teal-100 flex items-center justify-center">
            <CameraIcon className="w-12 h-12 text-teal-700" />
          </div>
          <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-sm border border-gray-200">
            <PencilIcon className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <h2 className="mt-4 text-xl font-semibold">{name}</h2>
        <p className="text-gray-500">{email}</p>
        <p className="mt-2 text-sm text-gray-600">{location}</p>
      </div>
    </div>
  );
};