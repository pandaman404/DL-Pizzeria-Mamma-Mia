import { ReactNode } from 'react';
import styled from 'styled-components';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-flow: column;
`;

export default RootLayout;
