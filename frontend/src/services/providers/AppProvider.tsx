import { ReactNode } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/constants/colors';
import { CartContextProvider } from '@/context/CartContext';
import { UserContextProvider } from '@/context/UserContext';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
};

export default AppProvider;
