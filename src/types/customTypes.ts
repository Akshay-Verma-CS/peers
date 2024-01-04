import { Request } from 'express';

interface CustomRequest extends Request {
  user: {
    id: string;
    // Other user-related properties
  };
}

export { CustomRequest };
