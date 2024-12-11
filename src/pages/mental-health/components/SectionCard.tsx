import { Card, CardBody } from '../../../components/shared/Card';
import { BeakerIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface SectionCardProps {
  id: string;
  title: string;
  description: string;
  onClick: () => void;
}

const icons = {
  assessment: BeakerIcon,
  'daily-check': HeartIcon,
  progress: SparklesIcon
};

const colors = {
  assessment: 'bg-purple-100 text-purple-700',
  'daily-check': 'bg-teal-100 text-teal-700',
  progress: 'bg-blue-100 text-blue-700'
};

export const SectionCard = ({ id, title, description, onClick }: SectionCardProps) => {
  const Icon = icons[id as keyof typeof icons];
  const colorClass = colors[id as keyof typeof colors];

  return (
    <Card 
      className="cursor-pointer transform transition-all hover:-translate-y-1"
      onClick={onClick}
    >
      <CardBody>
        <div className={`rounded-lg p-3 w-12 h-12 ${colorClass} mb-4 flex items-center justify-center`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardBody>
    </Card>
  );
};