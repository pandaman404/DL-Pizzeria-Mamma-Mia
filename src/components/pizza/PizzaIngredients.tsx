import styled from 'styled-components';
import Flex from '../ui/Flex';
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc';

interface PizzaIngredientsProps {
  items: string[];
}

const PizzaIngredients = ({ items }: PizzaIngredientsProps) => {
  return (
    <Wrapper>
      <h3>Ingredientes:</h3>
      <ul>
        {items.map((ingredient) => {
          return (
            <li key={crypto.randomUUID()}>
              <VscDebugBreakpointLogUnverified />
              {ingredient}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Flex}
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

  ul {
    ${Flex}
    width: 100%;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: flex-start;

    li {
      display: flex;
      align-items: center;
      font-size: 12px;
      text-transform: capitalize;
      gap: 1px;
      color: ${({ theme }) => theme.deepBlue};
    }
  }
`;

export default PizzaIngredients;
