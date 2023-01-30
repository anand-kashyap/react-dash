import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Common } from './components/molecules/Common';
import { ProtectedRoute } from './components/molecules/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export function Router() {
  return (
    <BrowserRouter>
      <Common>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Common>
    </BrowserRouter>
  );
}
