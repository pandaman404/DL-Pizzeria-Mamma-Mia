import styled from 'styled-components';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Flex from '@/components/ui/Flex';

import CartItem from './CartItem';
import NoItems from './NoItems';

import { useAppContext } from '@/context/AppContext';

const Cart = () => {
  const { cart, calculateTotal, addItemToCart, removeItemFromCart } = useAppContext();

  return (
    <Wrapper>
      {cart.length === 0 && <NoItems />}
      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              pizzaCartItem={item}
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
            />
          );
        })}
      <CheckoutButton onClick={() => console.log(calculateTotal())}>Pagar {calculateTotal()}</CheckoutButton>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  ${Flex}
  margin: 3rem 0;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.white};
  min-height: 300px;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  gap: 20px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 1rem;
`;

const CheckoutButton = styled(Button)`
  background-color: ${({ theme }) => theme.brightRed};
  font-weight: 600;
  margin-top: auto;
`;

export default Cart;
