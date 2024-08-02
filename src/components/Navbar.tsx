import styled from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';
import { BiSolidLock } from 'react-icons/bi';

import Logo from './ui/Logo';
import FlexWrapper from './ui/FlexWrapper';
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

const Wrapper = styled(FlexWrapper)`
  background-color: ${({ theme }) => theme.brightRed};
  color: ${({ theme }) => theme.white};
`;

const RootContainer = styled(FlexWrapper)`
  padding: 25px;
  max-width: 1200px;
  justify-content: center;

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

const LinksContainer = styled(FlexWrapper)`
  gap: 10px;
`;

const Buttons = styled(FlexWrapper)`
  display: none;
  max-width: max-content;

  @media (min-width: 1200px) {
    display: flex;
    gap: 40px;
  }
`;

export default Navbar;
