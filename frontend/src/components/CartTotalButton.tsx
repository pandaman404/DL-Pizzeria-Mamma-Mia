import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { IoCart } from 'react-icons/io5';

import Button from '@/components/ui/Button';
import { useCartContext } from '@/context/CartContext';

const CartTotalButton = () => {
  const { calculateTotal } = useCartContext();
  return (
    <Wrapper as={NavLink} to='/cart'>
      <IoCart />
      Total: {calculateTotal()}
    </Wrapper>
  );
};

const Wrapper = styled(Button)`
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.softBeige};
  border: 0;
  font-size: 14px;
  font-weight: 600;
`;

export default CartTotalButton;
