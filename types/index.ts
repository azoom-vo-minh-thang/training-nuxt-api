import { JwtPayload } from 'jsonwebtoken';

export interface UserPayload extends JwtPayload {
  id: number;
  email: string;
  name: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
