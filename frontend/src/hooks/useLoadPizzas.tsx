import { getPizzas } from '@/services/api/PizzaService';
import { Pizza } from '@/types/Pizza';
import { useEffect, useState } from 'react';

export function useLoadPizzas() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getPizzas()
      .then((data) => {
        setPizzas(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    pizzas,
    isLoading,
  };
}
