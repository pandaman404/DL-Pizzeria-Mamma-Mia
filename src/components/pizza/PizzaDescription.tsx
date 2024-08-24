import styled from 'styled-components';

interface PizzaDescriptionProps {
  desc: string;
}

const PizzaDescription = ({ desc }: PizzaDescriptionProps) => {
  return <Wrapper>{desc}</Wrapper>;
};

const Wrapper = styled.p`
  color: ${({ theme }) => theme.gray};
  margin-bottom: 2rem;
  font-size: 14px;
`;

export default PizzaDescription;
