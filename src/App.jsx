import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import PageGuard from './components/PageGuard';
import Login from './pages/Login';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import './App.css';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        
        {/* Learning Pages - Sequential */}
        <Route
          path="/page/1"
          element={
            <ProtectedRoute>
              <PageGuard pageNumber={1}>
                <Page1 />
              </PageGuard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/page/2"
          element={
            <ProtectedRoute>
              <PageGuard pageNumber={2}>
                <Page2 />
              </PageGuard>
            </ProtectedRoute>
          }
        />
        {/* Default route - redirect to first page */}
        <Route path="/" element={<Navigate to="/page/1" replace />} />
        <Route path="*" element={<Navigate to="/page/1" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div 
          className="min-h-screen"
          style={{
            backgroundImage: 'url(/background1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <Navbar />
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
