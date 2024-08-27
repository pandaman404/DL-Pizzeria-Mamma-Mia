import styled from 'styled-components';
import Title from '../ui/Title';
import { GiPizzaSlice } from 'react-icons/gi';

interface PizzaTitleProps {
  name: string;
}

const PizzaTitle = ({ name }: PizzaTitleProps) => {
  return (
    <Wrapper>
      <GiPizzaSlice size={30} className='icon' />
      Pizza {name}
    </Wrapper>
  );
};

export const Wrapper = styled(Title)`
  color: ${({ theme }) => theme.brightRed};
  padding: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 5px;
`;

export default PizzaTitle;
