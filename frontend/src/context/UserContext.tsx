import { createContext, useContext } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { UserContextType } from '@/types/context/UserContextType';

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { token, logout } = useAuth();
  console.log('hola desde user context');

  return <UserContext.Provider value={{ token, logout }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
