import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home';
import LoginPage from '@/pages/auth/login';
import RegisterPage from '@/pages/auth/register';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
