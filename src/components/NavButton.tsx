import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BiSolidHome, BiSolidLock, BiSolidLockOpen } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';

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
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 3px;

  &.active {
    color: ${({ theme }) => theme.softBeige};
  }
`;

export default NavButton;
