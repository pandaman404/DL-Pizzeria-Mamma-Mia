import styled from 'styled-components';
import Title from '../ui/Title';
import { GiPizzaSlice } from 'react-icons/gi';

interface PizzaTitleProps {
  name: string;
}

const PizzaTitle = ({ name }: PizzaTitleProps) => {
  return (
    <Wrapper>
      <GiPizzaSlice size={30} />
      Pizza {name}
    </Wrapper>
  );
};

export const Wrapper = styled(Title)`
  color: ${({ theme }) => theme.brightRed};
  padding: 20px;
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
`;

export default PizzaTitle;
