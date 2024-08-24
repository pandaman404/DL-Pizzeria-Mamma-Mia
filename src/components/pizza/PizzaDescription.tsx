import styled from 'styled-components';

interface PizzaDescriptionProps {
  desc: string;
}

const PizzaDescription = ({ desc }: PizzaDescriptionProps) => {
  return <Wrapper>{desc}</Wrapper>;
};

const Wrapper = styled.p``;

export default PizzaDescription;
