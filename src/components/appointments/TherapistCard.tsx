import { Card, CardBody } from '../shared/Card';
import { Button } from '../shared/Button';
import { Therapist } from '../../types/appointments';

interface TherapistCardProps {
  therapist: Therapist;
  onSelect: () => void;
}

export const TherapistCard = ({ therapist, onSelect }: TherapistCardProps) => {
  return (
    <Card>
      <CardBody>
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 mb-4">
            <img
              src={therapist.image}
              alt={therapist.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold">{therapist.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{therapist.title}</p>
          <div className="space-y-2 mb-4">
            <p className="text-sm text-gray-600">{therapist.specialties.join(', ')}</p>
            <p className="text-sm text-gray-600">{therapist.experience} years experience</p>
          </div>
          <Button onClick={onSelect} className="w-full">
            Book Appointment
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};