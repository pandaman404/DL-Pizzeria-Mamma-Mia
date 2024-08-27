import { ReactNode } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';
import Flex from './Flex';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <Wrapper>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Flex}
  min-height: 100dvh;
  width: 100%;
  flex-direction: column;
  position: relative;
`;

const Content = styled.div`
  ${Flex}
  flex: 1;
  width: inherit;
  flex-direction: column;
`;

export default RootLayout;
