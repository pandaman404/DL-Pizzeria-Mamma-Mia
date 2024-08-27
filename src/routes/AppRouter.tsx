import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home';
import LoginPage from '@/pages/auth/login';
import RegisterPage from '@/pages/auth/register';
import CartPage from '@/pages/cart';
import PizzaPage from '@/pages/pizza';
import NotFoundPage from '@/pages/404';
import ProfilePage from '@/pages/auth/profile';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/pizza/:id' element={<PizzaPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
