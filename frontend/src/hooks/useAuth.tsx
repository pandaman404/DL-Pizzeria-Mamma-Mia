import { useState } from 'react';

export function useAuth() {
  const [token, setToken] = useState<boolean>(true);

  const logout = () => {
    setToken(false);
  };

  return {
    token,
    logout,
  };
}
