import LoadingSpinner from '@/components/LoadingSpinner';
import RootLayout from '@/components/ui/RootLayout';
import { useLoadPizzaDetails } from '@/hooks/useLoadPizzaDetails';
import PizzaDetails from './components/PizzaDetails';

const PizzaPage = () => {
  const { pizza, isLoading } = useLoadPizzaDetails();
  return (
    <RootLayout>
      {isLoading && <LoadingSpinner />}
      {!isLoading && pizza && <PizzaDetails {...pizza} />}
    </RootLayout>
  );
};

export default PizzaPage;
