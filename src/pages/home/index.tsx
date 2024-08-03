import RootLayout from '@/components/ui/RootLayout';
import Navbar from '@/components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <RootLayout>
      <Navbar />
      <Header />
      <Home />
      <Footer />
    </RootLayout>
  );
};

export default HomePage;
