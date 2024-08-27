import styled from 'styled-components';
import Flex from './Flex';
import { getCurrentYear } from '@/utils/getCurrentYear';

const Footer = () => {
  return (
    <Wrapper>
      <p>© {getCurrentYear()} - Pizzería Mamma Mia! - Todos los derechos reservados</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  ${Flex}
  background-color: ${({ theme }) => theme.lightYellow};
  color: ${({ theme }) => theme.deepBlue};
  min-height: 10dvh;
  font-weight: 500;
  width: 100%;
  text-align: center;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export default Footer;
