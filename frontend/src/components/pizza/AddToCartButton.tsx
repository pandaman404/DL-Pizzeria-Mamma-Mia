import styled from 'styled-components';
import Button from '../ui/Button';
import { IoCart } from 'react-icons/io5';

const AddToCartButton = () => {
  return (
    <Wrapper as='button' onClick={() => console.log('añadir al carrito')}>
      Añadir <IoCart size={15} />
    </Wrapper>
  );
};

const Wrapper = styled(Button)`
  border: 0;
  background-color: ${({ theme }) => theme.brightRed};
`;

export default AddToCartButton;
