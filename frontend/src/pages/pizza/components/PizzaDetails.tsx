import styled from 'styled-components';

import { Pizza } from '@/types/Pizza';

import PizzaImage from '@/components/pizza/PizzaImage';
import PizzaTitle from '@/components/pizza/PizzaTitle';
import PizzaDescription from '@/components/pizza/PizzaDescription';
import PizzaIngredients from '@/components/pizza/PizzaIngredients';
import PizzaPrice from '@/components/pizza/PizzaPrice';
import AddToCartButton from '@/components/pizza/AddToCartButton';
import Flex from '@/components/ui/Flex';
import { PizzaCartItem } from '@/types/PizzaCartItem';

interface PizzaDetailsProps extends Pizza {}

const PizzaDetails = ({ id, img, name, desc, price, ingredients }: PizzaDetailsProps) => {
  const pizzaCartItem: PizzaCartItem = {
    id,
    name,
    price,
    img,
    count: 1,
  };

  return (
    <Wrapper>
      <PizzaImage src={img} className='pizza-details-img' />
      <div className='pizza-details-text'>
        <PizzaTitle name={name} />
        <PizzaDescription desc={desc} />
        <PizzaIngredients items={ingredients} />
        <div className='price-container'>
          <PizzaPrice price={price} />
          <AddToCartButton pizzaCartItem={pizzaCartItem} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Flex}
  max-width: 1366px;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 1rem;
  padding: 2rem;
  gap: 2rem;
  margin: 20px 20px;

  @media (min-width: 1200px) {
    align-items: flex-start;
    flex-direction: row;
    max-height: 500px;
  }

  .pizza-details-img {
    flex: 1;
    border-radius: 1rem;
    border-right: 10px solid ${({ theme }) => theme.softBeige};
    max-height: 450px;
  }

  .pizza-details-text {
    flex: 1;

    .price-container {
      ${Flex}
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export default PizzaDetails;
