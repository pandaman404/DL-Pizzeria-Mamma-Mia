import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home';
import LoginPage from '@/pages/auth/login';
import RegisterPage from '@/pages/auth/register';
import CartPage from '@/pages/cart';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
