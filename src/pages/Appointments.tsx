import { useState } from 'react';
import { TherapistCard } from '../components/appointments/TherapistCard';
import { AppointmentForm } from '../components/appointments/AppointmentForm';
import { Button } from '../components/shared/Button';
import { therapists } from '../data/therapists';
import { Therapist } from '../types/appointments';

const Appointments = () => {
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleTherapistSelect = (therapist: Therapist) => {
    setSelectedTherapist(therapist);
    setShowForm(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Book an Appointment</h1>

      {!showForm ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapists.map(therapist => (
              <TherapistCard
                key={therapist.id}
                therapist={therapist}
                onSelect={() => handleTherapistSelect(therapist)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <Button
            variant="outline"
            onClick={() => setShowForm(false)}
            className="mb-6"
          >
            ← Back to Therapists
          </Button>
          {selectedTherapist && (
            <AppointmentForm
              therapist={selectedTherapist}
              onSubmit={(data) => {
                console.log('Appointment booked:', data);
                setShowForm(false);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Appointments;