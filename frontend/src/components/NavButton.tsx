import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BiSolidHome, BiSolidLock, BiSolidLockOpen } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import Flex from './ui/Flex';
import Button from './ui/Button';
import { useUserContext } from '@/context/UserContext';

interface NavButtonProps {
  pathName: string;
  text: string;
}

const NavButton = ({ pathName, text }: NavButtonProps) => {
  const { logout } = useUserContext();

  const renderIcon = () => {
    switch (pathName) {
      case '/home':
        return <BiSolidHome />;
      case '/login':
      case '/register':
        return <BiSolidLock />;
      case '/profile':
        return <BsFillPersonFill />;
      default:
        return <BiSolidHome />;
    }
  };

  if (pathName === '/logout') {
    return (
      <LogoutButton onClick={logout}>
        <BiSolidLockOpen />
        Logout
      </LogoutButton>
    );
  }

  return (
    <NavLinkItem to={pathName} className={({ isActive }) => (isActive ? 'active' : '')}>
      {renderIcon()}
      {text}
    </NavLinkItem>
  );
};

const NavLinkItem = styled(NavLink)`
  ${Flex}
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  font-size: 14px;
  gap: 3px;

  &.active {
    color: ${({ theme }) => theme.softBeige};
  }
`;

const LogoutButton = styled(Button)`
  background-color: transparent;
  padding: 0;
  min-width: auto;
`;

export default NavButton;
