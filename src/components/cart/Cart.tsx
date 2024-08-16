import styled from 'styled-components';
import Flex from '../ui/Flex';
import Container from '../ui/Container';
import CartItem from './CartItem';

import Button from '../ui/Button';
import NoItems from './NoItems';
import { useCart } from '@/hooks/useCart';

const Cart = () => {
  const { cart, calculateTotal, addItemToCart, removeItemFromCart } = useCart();

  return (
    <Wrapper>
      {cart.length === 0 && <NoItems />}
      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <CartItem key={item.id} {...item} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />
          );
        })}
      <CheckoutButton onClick={() => console.log(calculateTotal())}>Pagar {calculateTotal()}</CheckoutButton>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  ${Flex}
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  background-color: ${({ theme }) => theme.white};
  border-left: 1px solid ${({ theme }) => theme.lightGray};
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 300px;
  padding: 20px;
  overflow-y: scroll;
  gap: 20px;
`;

const CheckoutButton = styled(Button)`
  background-color: ${({ theme }) => theme.brightRed};
  width: calc(100% - 40px);
  position: absolute;
  bottom: 20px;
  font-weight: 600;
`;

export default Cart;
