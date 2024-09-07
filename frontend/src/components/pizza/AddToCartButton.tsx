import styled from 'styled-components';
import Button from '../ui/Button';
import { IoCart } from 'react-icons/io5';
import { useAppContext } from '@/context/AppContext';
import { PizzaCartItem } from '@/types/PizzaCartItem';

interface addToCartButtonProps {
  pizzaCartItem: PizzaCartItem;
}

const AddToCartButton = ({ pizzaCartItem }: addToCartButtonProps) => {
  const { addItemToCart } = useAppContext();

  return (
    <Wrapper as='button' onClick={() => addItemToCart(pizzaCartItem)}>
      Añadir <IoCart size={15} />
    </Wrapper>
  );
};

const Wrapper = styled(Button)`
  border: 0;
  background-color: ${({ theme }) => theme.brightRed};
`;

export default AddToCartButton;
