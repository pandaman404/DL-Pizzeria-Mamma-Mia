import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import RootLayout from '@/components/ui/RootLayout';
import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
  return (
    <RootLayout>
      <Navbar />
      <RegisterForm />
      <Footer />
    </RootLayout>
  );
};

export default RegisterPage;
