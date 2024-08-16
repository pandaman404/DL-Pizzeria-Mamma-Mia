import styled from 'styled-components';
import { IoCart } from 'react-icons/io5';
import Button from '@/components/ui/Button';
import { formatNumber } from '@/utils/formatNumber';

interface CartButtonProps {
  total: number;
}

const CartTotalButton = ({ total }: CartButtonProps) => {
  return (
    <Wrapper as='button' onClick={() => console.log(`Total: $${total}`)}>
      <IoCart />
      Total: ${formatNumber(total)}
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
