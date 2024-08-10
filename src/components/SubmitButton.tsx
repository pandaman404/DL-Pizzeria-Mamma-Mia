import styled from 'styled-components';
import Button from './ui/Button';

const SubmitButton = styled(Button)`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.brightRed};
  border: 0;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 5px;
`;

export default SubmitButton;
