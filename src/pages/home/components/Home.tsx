import Grid from '@/components/ui/Grid';
import styled from 'styled-components';
import CardPizza from './CardPizza';
import { pizzas } from '@/mocks/pizzas';

const Home = () => {
  return (
    <Wrapper>
      {pizzas.map((pizza) => {
        return <CardPizza key={crypto.randomUUID()} pizza={pizza} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled(Grid)`
  background-color: ${({ theme }) => theme.white};
  flex: 1;
  width: 100%;
  max-width: 1366px;
  border-radius: 5px;
  padding: 20px 30px;
  margin: 50px auto;
`;

export default Home;
