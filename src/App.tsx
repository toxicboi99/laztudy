import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthGuard from './components/AuthGuard';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Notes from './pages/Notes';
import Unicode from './pages/Unicode';
import Tools from './pages/Tools';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/*"
          element={
            <AuthGuard>
              <div className="min-h-screen bg-gray-50">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/notes" element={<Notes />} />
                  <Route path="/unicode" element={<Unicode />} />
                  <Route path="/tools" element={<Tools />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </AuthGuard>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;