import { useState } from 'react';
import { Card, CardHeader, CardBody } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { TherapistCard } from '../components/appointments/TherapistCard';
import { AppointmentForm } from '../components/appointments/AppointmentForm';
import { therapists } from '../data/therapists';

const Appointments = () => {
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [showForm, setShowForm] = useState(false);

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
                onSelect={() => {
                  setSelectedTherapist(therapist);
                  setShowForm(true);
                }}
              />
            ))}
          </div>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Why Choose Our Therapists?</h2>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Licensed Professionals</h3>
                  <p className="text-gray-600">
                    All our therapists are licensed and have extensive experience in various mental health areas.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">
                    Choose from various time slots that work best for your schedule.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Specialized Care</h3>
                  <p className="text-gray-600">
                    Get matched with therapists who specialize in your specific needs.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
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
          <AppointmentForm
            therapist={selectedTherapist}
            onSubmit={(data) => {
              console.log('Appointment booked:', data);
              // Handle appointment booking
              setShowForm(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Appointments;