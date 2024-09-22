import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { authLogin, authRegister, authMe } from '@/services/api/AuthService';
import type { User } from '@/types/User';

export function useAuth() {
  const [token, setToken] = useState<string | null>(Cookies.get('token') || null);
  const [user, setUser] = useState<User>({} as User);

  const login = async (email: string, password: string) => {
    try {
      const result = await authLogin(email, password);
      if ('token' in result) {
        console.log(result);
        Cookies.set('token', result.token, { expires: 7 });
        setToken(result.token);
        setUser((user) => {
          user.email = result.email;
          return user;
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setToken(null);
    setUser({} as User);
  };

  const register = async (email: string, password: string) => {
    try {
      const result = await authRegister(email, password);
      if ('token' in result) {
        console.log(result);
        Cookies.set('token', result.token, { expires: 7 });
        setToken(result.token);
        setUser((user) => {
          user.email = result.email;
          return user;
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProfile = async (token: string) => {
    try {
      const loggedUser = await authMe(token);
      if ('id' in loggedUser) {
        setUser(loggedUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedToken = Cookies.get('token');
    if (storedToken) {
      setToken(storedToken);
      getProfile(storedToken);
    }
  }, []);

  return {
    token,
    user,
    login,
    register,
    logout,
  };
}
