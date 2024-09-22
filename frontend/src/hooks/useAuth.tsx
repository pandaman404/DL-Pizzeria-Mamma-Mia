import { authLogin } from '@/services/api/AuthService';
import type { User } from '@/types/User';
import { useEffect, useState } from 'react';

export function useAuth() {
  const [token, setToken] = useState<boolean>(false);
  const [user, setUser] = useState<User>({} as User);

  const login = async (email: string, password: string) => {
    try {
      const result = await authLogin(email, password);
      if ('token' in result) {
        console.log(result);
        setUser(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setToken(false);
  };

  const register = () => {};

  useEffect(() => {
    // authLogin('test@test.com', '123123');
  }, []);

  return {
    token,
    user,
    login,
    logout,
  };
}
