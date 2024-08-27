import Container from '@/components/ui/Container';
import svgNotFound from '@/assets/404_NOT_FOUND.svg';
import styled from 'styled-components';
import Flex from '@/components/ui/Flex';
import Button from '@/components/ui/Button';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <img src={svgNotFound} alt='404' />
      <NavButton as={NavLink} to='/'>
        Regresar al sitio
      </NavButton>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  ${Flex}
  flex-direction: column;
  height: 100dvh;
  gap: 2rem;

  img {
    width: 100%;
    max-width: 500px;
  }
`;

const NavButton = styled(Button)`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.brightRed};
`;

export default NotFoundPage;
