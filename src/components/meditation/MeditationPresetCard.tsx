import { Card, CardBody } from '../shared/Card';
import { MeditationPreset } from '../../types/meditation';

interface MeditationPresetCardProps {
  preset: MeditationPreset;
  isSelected: boolean;
  onSelect: (preset: MeditationPreset) => void;
}

export const MeditationPresetCard = ({ preset, isSelected, onSelect }: MeditationPresetCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all hover:-translate-y-1 ${
        isSelected ? 'border-2 border-teal-500 bg-teal-50' : ''
      }`}
      onClick={() => onSelect(preset)}
    >
      <CardBody>
        <h3 className="text-lg font-semibold mb-2">{preset.name}</h3>
        <p className="text-gray-600 mb-2">{preset.description}</p>
        <div className="text-sm text-teal-600 font-medium">
          Duration: {preset.duration} minutes
        </div>
      </CardBody>
    </Card>
  );
};