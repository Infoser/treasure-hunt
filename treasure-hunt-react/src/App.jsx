import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { dbApi } from './firebase';
import Login from './components/Login';
import Round1 from './components/Round1';
import Round2 from './components/Round2';
import Round3 from './components/Round3';

function ProtectedRoute({ children }) {
  if (!dbApi.isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/round1" element={
          <ProtectedRoute>
            <Round1 />
          </ProtectedRoute>
        } />
        <Route path="/round2" element={
          <ProtectedRoute>
            <Round2 />
          </ProtectedRoute>
        } />
        <Route path="/round3" element={
          <ProtectedRoute>
            <Round3 />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
