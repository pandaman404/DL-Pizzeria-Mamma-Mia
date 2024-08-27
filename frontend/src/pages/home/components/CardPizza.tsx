import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import type { Pizza } from '@/types/Pizza';
import { PiEyesFill } from 'react-icons/pi';

import Flex from '@/components/ui/Flex';
import Button from '@/components/ui/Button';

import PizzaTitle from '@/components/pizza/PizzaTitle';
import PizzaIngredients from '@/components/pizza/PizzaIngredients';
import PizzaPrice from '@/components/pizza/PizzaPrice';
import PizzaImage from '@/components/pizza/PizzaImage';
import AddToCartButton from '@/components/pizza/AddToCartButton';

interface CardPizzaProps {
  pizza: Pizza;
}

const CardPizza = ({ pizza }: CardPizzaProps) => {
  const { id, name, price, ingredients, img } = pizza;

  return (
    <Wrapper>
      <PizzaImage src={img} />
      <PizzaTitle name={name} />
      <div className='ingredients-container'>
        <PizzaIngredients items={ingredients} />
      </div>
      <PriceContainer>
        <PizzaPrice price={price} />
        <div>
          <GoToDetailsButton as={NavLink} to={`/pizza/${id}`}>
            Ver Más <PiEyesFill size={15} />
          </GoToDetailsButton>
          <AddToCartButton />
        </div>
      </PriceContainer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  ${Flex}
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  .ingredients-container {
    padding: 0 2rem;
  }
`;

const PriceContainer = styled.div`
  ${Flex}
  width: 100%;
  padding: 20px;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid ${({ theme }) => theme.lightGray};

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

const GoToDetailsButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.lightGray};
  background-color: transparent;
  color: ${({ theme }) => theme.deepBlue};
`;

export default CardPizza;
