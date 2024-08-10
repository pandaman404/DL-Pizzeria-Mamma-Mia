import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import RootLayout from '@/components/ui/RootLayout';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  return (
    <RootLayout>
      <Navbar />
      <LoginForm />
      <Footer />
    </RootLayout>
  );
};

export default LoginPage;
