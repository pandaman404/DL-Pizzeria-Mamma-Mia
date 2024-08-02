import styled from 'styled-components';
import { IoCart } from 'react-icons/io5';
import Button from '@/components/ui/Button';

const CartButton = () => {
  return (
    <Wrapper as='button' onClick={() => console.log('Total: $25.000')}>
      <IoCart />
      Total: $25.000
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

export default CartButton;
