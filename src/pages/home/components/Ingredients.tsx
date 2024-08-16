import Flex from '@/components/ui/Flex';
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc';
import styled from 'styled-components';

interface IngredientsProps {
  items: string[];
}

const Ingredients = ({ items }: IngredientsProps) => {
  return (
    <Wrapper>
      {items.map((ingredient) => {
        return (
          <li key={crypto.randomUUID()}>
            <VscDebugBreakpointLogUnverified />
            {ingredient}
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
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
`;

export default Ingredients;
