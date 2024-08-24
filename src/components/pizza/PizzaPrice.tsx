import styled from 'styled-components';
import { formatNumber } from '@/utils/formatNumber';

interface PizzaPriceProps {
  price: number;
}

const PizzaPrice = ({ price }: PizzaPriceProps) => {
  return <Wrapper>${formatNumber(price)}</Wrapper>;
};

const Wrapper = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.deepBlue};
`;

export default PizzaPrice;
