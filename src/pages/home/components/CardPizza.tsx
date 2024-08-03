import type { Pizza } from '@/types/Pizza';
import { formatNumber } from '@/utils/formatNumber';

import { GiPizzaSlice } from 'react-icons/gi';
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc';
import { PiEyesFill } from 'react-icons/pi';
import { IoCart } from 'react-icons/io5';

import Flex from '@/components/ui/Flex';
import Title from '@/components/ui/Title';
import styled from 'styled-components';
import Button from '@/components/ui/Button';

interface CardPizzaProps {
  pizza: Pizza;
}

const CardPizza = ({ pizza }: CardPizzaProps) => {
  const { name, price, ingredients, img } = pizza;
  return (
    <Wrapper as='article'>
      <PizzaImage src={img} />
      <PizzaTitle as='h2'>
        <GiPizzaSlice size={30} />
        Pizza {name}
      </PizzaTitle>
      <IngredientsContainer>
        <h3>Ingredientes:</h3>
        <div>
          {ingredients.map((ingredient) => {
            return (
              <article key={crypto.randomUUID()}>
                <VscDebugBreakpointLogUnverified />
                {ingredient}
              </article>
            );
          })}
        </div>
      </IngredientsContainer>
      <PriceContainer>
        <span>${formatNumber(price)}</span>
        <div>
          <GoToDetailsButton as='button'>
            Ver Más <PiEyesFill size={15} />
          </GoToDetailsButton>
          <AddToCartButton as='button'>
            Añadir <IoCart size={15} />
          </AddToCartButton>
        </div>
      </PriceContainer>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 5px;
  align-items: flex-start;
  flex-direction: column;
`;

const PizzaImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const PizzaTitle = styled(Title)`
  color: ${({ theme }) => theme.brightRed};
  padding: 20px;
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
`;

const IngredientsContainer = styled(Flex)`
  min-height: 100px;
  width: 100%;
  padding: 20px;
  justify-content: flex-start;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};

  h3 {
    color: ${({ theme }) => theme.deepBlue};
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    width: 100%;
  }

  div {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 5px;

    article {
      display: flex;
      align-items: center;
      font-size: 12px;
      text-transform: capitalize;
      gap: 1px;
      color: ${({ theme }) => theme.deepBlue};
    }
  }
`;

const PriceContainer = styled(Flex)`
  width: 100%;
  padding: 20px;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.deepBlue};
  }

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

const AddToCartButton = styled(Button)`
  border: 0;
  background-color: ${({ theme }) => theme.brightRed};
`;

export default CardPizza;
