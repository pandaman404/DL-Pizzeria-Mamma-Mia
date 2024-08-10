import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import RootLayout from '@/components/ui/RootLayout';

const LoginPage = () => {
  return (
    <RootLayout>
      <Navbar />
      <div>Login</div>
      <Footer />
    </RootLayout>
  );
};

export default LoginPage;
