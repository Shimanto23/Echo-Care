import { MeditationPreset } from '../../../types/meditation';
import { MeditationPresetCard } from './MeditationPresetCard';
import { meditationPresets } from '../../../data/meditationPresets';

interface PresetSelectorProps {
  selectedPreset: MeditationPreset | null;
  onSelectPreset: (preset: MeditationPreset) => void;
}

export const PresetSelector = ({ selectedPreset, onSelectPreset }: PresetSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {meditationPresets.map(preset => (
        <MeditationPresetCard
          key={preset.id}
          preset={preset}
          isSelected={selectedPreset?.id === preset.id}
          onSelect={() => onSelectPreset(preset)}
        />
      ))}
    </div>
  );
};