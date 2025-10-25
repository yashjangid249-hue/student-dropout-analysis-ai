import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages (to be created)
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import DataUpload from './pages/DataUpload';
// import RiskAnalysis from './pages/RiskAnalysis';
// import ReportBuilder from './pages/ReportBuilder';
// import StudentManagement from './pages/StudentManagement';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes here */}
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/upload" element={<DataUpload />} /> */}
          {/* <Route path="/risk-analysis" element={<RiskAnalysis />} /> */}
          {/* <Route path="/reports" element={<ReportBuilder />} /> */}
          {/* <Route path="/students" element={<StudentManagement />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
