import { getPizzas } from '@/services/api/PizzaService';
import { Pizza } from '@/types/Pizza';
import { useEffect, useState } from 'react';

export function useLoadPizzas() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage(null);

    getPizzas()
      .then((response) => {
        if ('error' in response) {
          setErrorMessage(response.error);
          return;
        }
        setPizzas(response);
      })
      .catch((error) => {
        setErrorMessage(error.error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    pizzas,
    isLoading,
    errorMessage,
  };
}
