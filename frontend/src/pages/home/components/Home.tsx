import Grid from '@/components/ui/Grid';
import styled from 'styled-components';
import CardPizza from './CardPizza';
import Container from '@/components/ui/Container';
import { useLoadPizzas } from '@/hooks/useLoadPizzas';
import LoadingSpinner from '@/components/LoadingSpinner';

const Home = () => {
  const { pizzas, isLoading, errorMessage } = useLoadPizzas();
  return (
    <Wrapper>
      {isLoading && !errorMessage && <LoadingSpinner />}
      {!isLoading && errorMessage && <span>Ups! intentalo de nuevo más tarde.</span>}
      {!isLoading &&
        !errorMessage &&
        pizzas.map((pizza) => {
          return <CardPizza key={pizza.id} pizza={pizza} />;
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

  span {
    margin: 0 auto;
    align-self: center;
    color: ${({ theme }) => theme.brightRed};
    font-size: 16px;
    font-weight: 500;
  }
`;

export default Home;
