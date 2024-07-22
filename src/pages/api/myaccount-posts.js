import connectDB from '../../utils/db';
import Post from '../../models/post';
import { verify } from 'jsonwebtoken';
import cookie from 'cookie';

connectDB();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const cookies = cookie.parse(req.headers.cookie || '');
        const token = cookies.token;

        if (!token) {
          return res.status(401).json({ message: 'Not authenticated' });
        }

        let userId;
        try {
          const decoded = verify(token, process.env.NEXTAUTH_SECRET);
          userId = decoded.userId;
        } catch (err) {
          console.error('Invalid token:', err);
          return res.status(401).json({ message: 'Invalid token' });
        }

        //console.log(`Fetching posts for user: ${userId}`);
        const posts = await Post.find({ author: userId }).populate('author');
        //console.log('Fetched posts:', posts);  // Log fetched posts
        res.status(200).json(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ message: 'Failed to fetch posts' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
