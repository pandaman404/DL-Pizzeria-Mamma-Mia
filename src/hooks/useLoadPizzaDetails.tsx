import { getPizzaById } from '@/services/api/PizzaService';
import { Pizza } from '@/types/Pizza';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function useLoadPizzaDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState<Pizza | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) {
      navigate('/');
      return;
    }

    setIsLoading(true);
    getPizzaById(id)
      .then((data) => {
        setPizza(data);
      })
      .catch(() => {
        setPizza(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    pizza,
    isLoading,
  };
}
