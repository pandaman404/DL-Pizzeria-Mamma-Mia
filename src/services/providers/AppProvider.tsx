import { ReactNode } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/constants/colors';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
