import styled from 'styled-components';

const Logo = () => {
  return <Wrapper>Pizzeria Mamma Mia</Wrapper>;
};

const Wrapper = styled.h1`
  color: ${({ theme }) => theme.white};
  font-weight: 800;
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
`;

export default Logo;
