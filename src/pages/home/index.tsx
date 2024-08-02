import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Header from './components/Header';
import RootLayout from '@/components/RootLayout';

const HomePage = () => {
  return (
    <RootLayout>
      <Navbar />
      <Header />
      <Footer />
    </RootLayout>
  );
};

export default HomePage;
