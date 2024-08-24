import styled from 'styled-components';
import Flex from '@/components/ui/Flex';

const NoItems = () => {
  return (
    <Wrapper>
      <p>Carrito vacio</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Flex}
  height: 100%;

  p {
    color: ${({ theme }) => theme.lightGray};
    font-weight: 800;
    font-size: 20px;
  }
`;

export default NoItems;
