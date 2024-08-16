import RootLayout from '@/components/ui/RootLayout';
import Navbar from '@/components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Footer from '@/components/Footer';
import Cart from '@/components/cart/Cart';

const HomePage = () => {
  return (
    <RootLayout>
      <Navbar />
      <Header />
      <Home />
      <Cart />
      <Footer />
    </RootLayout>
  );
};

export default HomePage;
