import styled from 'styled-components';

import Logo from './ui/Logo';
import Flex from './ui/Flex';
import CartButton from './CartButton';
import NavButton from './NavButton';

const Navbar = () => {
  const token = false;
  const total = 25000;

  return (
    <Wrapper as='nav'>
      <RootContainer>
        <Logo />
        <Buttons>
          <LinksContainer>
            <NavButton pathName='/home' text='Home' />
            {token ? (
              <>
                <NavButton pathName='/profile' text='Profile' />
                <NavButton pathName='/logout' text='Logout' />
              </>
            ) : (
              <>
                <NavButton pathName='/login' text='Login' />
                <NavButton pathName='/register' text='Register' />
              </>
            )}
          </LinksContainer>
          <CartButton total={total} />
        </Buttons>
      </RootContainer>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  ${Flex}
  width: 100%;
  background-color: ${({ theme }) => theme.brightRed};
  color: ${({ theme }) => theme.white};
`;

const RootContainer = styled.div`
  ${Flex}
  padding: 25px;
  width: 100%;
  max-width: 1360px;

  @media (min-width: 1200px) {
    justify-content: space-between;
  }

  @media (min-width: 1360px) {
    padding: 25px 0;
  }
`;

const LinksContainer = styled.div`
  ${Flex}
  gap: 15px;
`;

const Buttons = styled.div`
  ${Flex}
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    gap: 40px;
  }
`;

export default Navbar;
