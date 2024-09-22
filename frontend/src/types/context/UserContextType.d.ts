import type { User } from '../User';

export interface UserContextType {
  token: string | null;
  user: User;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
