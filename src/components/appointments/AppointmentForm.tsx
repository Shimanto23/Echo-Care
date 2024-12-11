import { useState } from 'react';
import { Card, CardHeader, CardBody } from '../shared/Card';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import { Therapist } from '../../types/appointments';

interface AppointmentFormProps {
  therapist: Therapist;
  onSubmit: (data: any) => void;
}

export const AppointmentForm = ({ therapist, onSubmit }: AppointmentFormProps) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    type: 'video',
    reason: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      therapist,
      ...formData
    });
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Book Appointment with {therapist.name}</h2>
        <p className="text-gray-600 mt-1">Please fill in the details below</p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="date"
              label="Preferred Date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
            <Input
              type="time"
              label="Preferred Time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Appointment Type
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full rounded-lg border-gray-300"
              required
            >
              <option value="video">Video Call</option>
              <option value="audio">Audio Call</option>
              <option value="in-person">In-Person</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reason for Visit
            </label>
            <textarea
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full rounded-lg border-gray-300 h-24"
              placeholder="Please briefly describe your reason for seeking therapy"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full rounded-lg border-gray-300 h-24"
              placeholder="Any additional information you'd like to share"
            />
          </div>

          <Button type="submit" className="w-full">
            Confirm Appointment
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};