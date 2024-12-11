import { Card, CardHeader, CardBody } from '../shared/Card';

export const MeditationBenefits = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Meditation Benefits</h2>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Mental Benefits</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Reduces stress and anxiety</li>
              <li>Improves focus and concentration</li>
              <li>Enhances emotional well-being</li>
              <li>Promotes better sleep quality</li>
              <li>Increases self-awareness</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Physical Benefits</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Lowers blood pressure</li>
              <li>Reduces chronic pain</li>
              <li>Strengthens immune system</li>
              <li>Improves cardiovascular health</li>
              <li>Reduces inflammation</li>
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};