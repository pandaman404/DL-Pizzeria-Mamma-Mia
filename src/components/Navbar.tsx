import styled from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';
import { BiSolidLock } from 'react-icons/bi';

import Logo from './ui/Logo';
import Flex from './ui/Flex';
import Button from './ui/Button';
import CartButton from './CartButton';

const Navbar = () => {
  return (
    <Wrapper as='nav'>
      <RootContainer>
        <Logo />
        <Buttons>
          <LinksContainer>
            <Button as='a' onClick={() => console.log('Home')}>
              <FaPizzaSlice /> Home
            </Button>
            <Button as='a' onClick={() => console.log('Login')}>
              <BiSolidLock /> Login
            </Button>
            <Button as='a' onClick={() => console.log('Register')}>
              <BiSolidLock /> Register
            </Button>
          </LinksContainer>
          <CartButton />
        </Buttons>
      </RootContainer>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  width: 100%;
  background-color: ${({ theme }) => theme.brightRed};
  color: ${({ theme }) => theme.white};
`;

const RootContainer = styled(Flex)`
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

const LinksContainer = styled(Flex)`
  gap: 10px;
`;

const Buttons = styled(Flex)`
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    gap: 40px;
  }
`;

export default Navbar;
