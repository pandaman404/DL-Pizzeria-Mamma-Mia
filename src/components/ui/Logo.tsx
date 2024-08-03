import styled from 'styled-components';
import Title from './Title';

const Logo = () => {
  return <Wrapper>Pizzeria Mamma Mia</Wrapper>;
};

const Wrapper = styled(Title)`
  color: ${({ theme }) => theme.white};
  font-size: 30px;
  white-space: nowrap;
`;

export default Logo;
