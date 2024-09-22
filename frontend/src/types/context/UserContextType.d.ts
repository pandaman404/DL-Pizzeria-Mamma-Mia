import type { User } from '../User';

export interface UserContextType {
  token: boolean;
  user: User;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
