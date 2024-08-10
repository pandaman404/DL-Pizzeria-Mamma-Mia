import styled from 'styled-components';
import Flex from './Flex';

const FormField = styled.div`
  ${Flex}
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 90%;

  label,
  input {
    font-size: 14px;
  }

  label {
    color: ${({ theme }) => theme.deepBlue};
  }

  input {
    outline: none;
    padding: 10px 10px;
    border: 0;
    border: 1px solid ${({ theme }) => theme.lightGray};
    color: ${({ theme }) => theme.deepBlue};
    border-radius: 5px;
    width: 100%;

    &::placeholder {
      color: gray;
      font-size: 14px;
    }
  }

  .error {
    color: ${({ theme }) => theme.brightRed};
    font-size: 12px;
  }
`;

export default FormField;
