import { ReactNode } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/constants/colors';
import { AppContextProvider } from '@/context/AppContext';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AppContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppContextProvider>
  );
};

export default AppProvider;
