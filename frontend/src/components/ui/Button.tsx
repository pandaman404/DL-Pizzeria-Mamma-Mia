import styled from 'styled-components';
import Flex from './Flex';

const Button = styled.button`
  ${Flex}
  color: ${({ theme }) => theme.white};
  padding: 8px 10px;
  border-radius: 5px;
  gap: 3px;
  font-size: 14px;
  min-width: 90px;
  cursor: pointer;
  border: 0;
  text-decoration: none;
`;

export default Button;
