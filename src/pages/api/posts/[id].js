import connectDB from '../../../utils/db';
import Post from '../../../models/post';
import { verify } from 'jsonwebtoken';
import cookie from 'cookie';

connectDB();

export default async (req, res) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const post = await Post.findById(id).populate('author');
        if (!post) {
          return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching post' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
