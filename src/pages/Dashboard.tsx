import { format } from 'date-fns';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BeakerIcon, HeartIcon, MoonIcon } from '@heroicons/react/24/outline';

const moodData = [
  { date: '2024-01-01', mood: 4 },
  { date: '2024-01-02', mood: 3 },
  { date: '2024-01-03', mood: 5 },
  { date: '2024-01-04', mood: 4 },
  { date: '2024-01-05', mood: 4 },
  { date: '2024-01-06', mood: 3 },
  { date: '2024-01-07', mood: 5 },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back!</h1>
        <p className="text-gray-500">{format(new Date(), 'EEEE, MMMM do')}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-teal-100 rounded-lg">
              <BeakerIcon className="w-6 h-6 text-teal-700" />
            </div>
            <h2 className="text-lg font-semibold">Mental Wellness</h2>
          </div>
          <p className="text-3xl font-bold text-teal-700">85%</p>
          <p className="text-sm text-gray-500 mt-1">Based on your recent activities</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <HeartIcon className="w-6 h-6 text-purple-700" />
            </div>
            <h2 className="text-lg font-semibold">Mood Score</h2>
          </div>
          <p className="text-3xl font-bold text-purple-700">4.2/5</p>
          <p className="text-sm text-gray-500 mt-1">Weekly average</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <MoonIcon className="w-6 h-6 text-blue-700" />
            </div>
            <h2 className="text-lg font-semibold">Sleep Quality</h2>
          </div>
          <p className="text-3xl font-bold text-blue-700">7.5h</p>
          <p className="text-sm text-gray-500 mt-1">Last night's sleep</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <h2 className="text-xl font-semibold mb-4">Mood Trends</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Line type="monotone" dataKey="mood" stroke="#0D9488" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Today's Tasks</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span>5-minute meditation</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span>Journal entry</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span>Evening walk</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Therapy Session</p>
                <p className="text-sm text-gray-500">Dr. Sarah Johnson</p>
              </div>
              <p className="text-sm text-teal-700">Tomorrow, 2:00 PM</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Group Support</p>
                <p className="text-sm text-gray-500">Anxiety Management</p>
              </div>
              <p className="text-sm text-teal-700">Friday, 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;