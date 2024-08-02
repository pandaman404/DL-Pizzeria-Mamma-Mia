import styled from 'styled-components';
import Flex from './Flex';

const StyledLink = styled(Flex)`
  color: ${({ theme }) => theme.white};
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.white};
  gap: 5px;
  font-size: 12px;
  min-width: 90px;
  cursor: pointer;
`;

export default StyledLink;
