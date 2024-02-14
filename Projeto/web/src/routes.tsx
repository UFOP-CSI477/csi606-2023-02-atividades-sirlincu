import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Companies from './pages/Companies';
import JobDetails from './pages/JobDetails';
import LoginPage from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;