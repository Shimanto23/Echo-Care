import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import MentalHealthCheck from './pages/MentalHealthCheck';
import EchoAssistant from './pages/AIChat';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import Appointments from './pages/Appointments';
import Notifications from './pages/Notifications';
import MeditationTimer from './pages/MeditationTimer';
import Journal from './pages/Journal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/*"
          element={
            <div className="flex h-screen bg-gray-100">
              <Sidebar />
              <main className="flex-1 overflow-y-auto">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/mental-health-check" element={<MentalHealthCheck />} />
                  <Route path="/chat" element={<EchoAssistant />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/appointments" element={<Appointments />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/meditation" element={<MeditationTimer />} />
                  <Route path="/journal" element={<Journal />} />
                </Routes>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;