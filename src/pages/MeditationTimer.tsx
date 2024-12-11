import { useState, useEffect } from 'react';
import { Button } from '../components/shared/Button';
import { Card, CardHeader, CardBody } from '../components/shared/Card';

const MeditationTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [selectedTime, setSelectedTime] = useState(5);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startTimer = () => {
    setTimeLeft(selectedTime * 60);
    setIsActive(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Meditation Timer</h1>
      
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900">
                {isActive ? formatTime(timeLeft) : 'Ready to meditate?'}
              </h2>
            </div>
          </CardHeader>
          <CardBody>
            {!isActive && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Duration (minutes)
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(Number(e.target.value))}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  >
                    <option value={5}>5 minutes</option>
                    <option value={10}>10 minutes</option>
                    <option value={15}>15 minutes</option>
                    <option value={20}>20 minutes</option>
                  </select>
                </div>
                <Button onClick={startTimer} className="w-full">
                  Start Meditation
                </Button>
              </div>
            )}
            {isActive && (
              <div className="space-y-4">
                <p className="text-center text-gray-600">
                  Focus on your breath and let your thoughts pass by
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsActive(false)} 
                  className="w-full"
                >
                  End Session
                </Button>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default MeditationTimer;