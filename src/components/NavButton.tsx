import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BiSolidHome, BiSolidLock, BiSolidLockOpen } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import Flex from './ui/Flex';

interface NavButtonProps {
  pathName: string;
  text: string;
}

const NavButton = ({ pathName, text }: NavButtonProps) => {
  const renderIcon = () => {
    switch (pathName) {
      case '/home':
        return <BiSolidHome />;
      case '/login':
      case '/register':
        return <BiSolidLock />;
      case '/logout':
        return <BiSolidLockOpen />;
      case '/profile':
        return <BsFillPersonFill />;
      default:
        return <BiSolidHome />;
    }
  };

  return (
    <Wrapper to={pathName} className={({ isActive }) => (isActive ? 'active' : '')}>
      {renderIcon()}
      {text}
    </Wrapper>
  );
};

const Wrapper = styled(NavLink)`
  ${Flex}
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  font-size: 14px;
  gap: 3px;

  &.active {
    color: ${({ theme }) => theme.softBeige};
  }
`;

export default NavButton;
