import styled from 'styled-components';
import Background from '@/assets/background.webp';
import Flex from '@/components/ui/Flex';

const Header = () => {
  return (
    <Wrapper>
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${Background});
  background-size: cover;
  background-position: center;
  height: 30dvh;
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
  padding: 0 20px;
  gap: 10px;

  @media (min-width: 1200px) {
    height: 40dvh;
  }

  h1 {
    color: ${({ theme }) => theme.lightYellow};
    font-size: 30px;
    letter-spacing: 1px;
    line-height: 1;
    text-transform: uppercase;

    @media (min-width: 1200px) {
      font-size: 50px;
    }
  }

  p {
    color: ${({ theme }) => theme.white};
  }
`;

export default Header;
