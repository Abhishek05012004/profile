import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import employees from './data/employees.json';
import './index.css';

function App() {
  const defaultEmployeeId = employees.employees[0]?.id || 'not-found';

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
        <Routes>
          <Route path="/:id" element={<ProfilePage />} />
          {/* Default route to open the first employee in the JSON file */}
          <Route path="/" element={<Navigate to={`/${defaultEmployeeId}`} replace />} />
          <Route path="*" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;