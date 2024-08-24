import styled from 'styled-components';

import { Pizza } from '@/types/Pizza';

import Container from '@/components/ui/Container';
import Flex from '@/components/ui/Flex';

import PizzaImage from '@/components/pizza/PizzaImage';
import PizzaTitle from '@/components/pizza/PizzaTitle';
import PizzaDescription from '@/components/pizza/PizzaDescription';
import PizzaIngredients from '@/components/pizza/PizzaIngredients';
import PizzaPrice from '@/components/pizza/PizzaPrice';
import AddToCartButton from '@/components/pizza/AddToCartButton';

interface PizzaDetailsProps extends Pizza {}

const PizzaDetails = ({ img, name, desc, price, ingredients }: PizzaDetailsProps) => {
  return (
    <Wrapper>
      <PizzaImage src={img} />
      <PizzaTitle name={name} />
      <PizzaDescription desc={desc} />
      <PizzaIngredients items={ingredients} />
      <div>
        <PizzaPrice price={price} />
        <AddToCartButton />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  /* ${Flex} */
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 1rem;
  margin: 2rem;
`;

export default PizzaDetails;
