import connectDB from '../../../utils/db';
import { verify } from 'jsonwebtoken';
import cookie from 'cookie';
import User from '../../../models/user';

connectDB();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      const cookies = cookie.parse(req.headers.cookie || '');
      const token = cookies.token;

      if (!token) {
        return res.status(401).json({ message: 'Not authenticated' });
      }

      try {
        const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
        const user = await User.findById(userId).select('-password');
        if (!user) {
          return res.status(401).json({ message: 'User not found' });
        }
        res.status(200).json({ user });
      } catch (error) {
        res.status(401).json({ message: 'Not authenticated' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
