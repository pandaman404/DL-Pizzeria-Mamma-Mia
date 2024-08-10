import Grid from '@/components/ui/Grid';
import styled from 'styled-components';
import CardPizza from './CardPizza';
import { pizzas } from '@/mocks/pizzas';
import Container from '@/components/ui/Container';

const Home = () => {
  return (
    <Wrapper>
      {pizzas.map((pizza) => {
        return <CardPizza key={crypto.randomUUID()} pizza={pizza} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  ${Grid}
  background-color: ${({ theme }) => theme.white};
  border-radius: 5px;
  padding: 20px 30px;
  margin: 50px auto;

  @media (min-width: 1360px) {
    padding: 20px 0;
  }
`;

export default Home;
