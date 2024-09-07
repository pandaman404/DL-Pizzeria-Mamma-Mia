import styled from 'styled-components';

import { HiPlus, HiMinus } from 'react-icons/hi';
import Flex from '@/components/ui/Flex';
import Button from '@/components/ui/Button';
import { PizzaCartItem } from '@/types/PizzaCartItem';

interface CartItemCounterProps {
  pizzaCartItem: PizzaCartItem;
  addItemToCart: (pizzaCartItem: PizzaCartItem) => void;
  removeItemFromCart: (pizzaId: string) => void;
}

const CartItemCounter = ({ pizzaCartItem, addItemToCart, removeItemFromCart }: CartItemCounterProps) => {
  return (
    <Wrapper>
      <CountButton onClick={() => addItemToCart(pizzaCartItem)}>
        <HiPlus />
      </CountButton>
      <span>{pizzaCartItem.count}</span>
      <CountButton onClick={() => removeItemFromCart(pizzaCartItem.id)}>
        <HiMinus />
      </CountButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Flex}
  flex-direction: column;

  span {
    padding: 5px;
  }
`;

const CountButton = styled(Button)`
  min-width: 1px;
  background-color: ${({ theme }) => theme.lightGray};
  color: ${({ theme }) => theme.black};
  padding: 5px;
  font-size: 10px;
`;

export default CartItemCounter;
