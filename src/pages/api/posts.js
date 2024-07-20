import connectDB from '../../utils/db';
import Post from '../../models/post';
import { verify } from 'jsonwebtoken';

connectDB();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Allow public access to fetch posts
      try {
        const posts = await Post.find({}).populate('author');
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ message: 'Failed to fetch posts' });
      }
      break;

    case 'POST':
    case 'PUT':
    case 'DELETE':
      // Require authentication for these methods
      const token = req.cookies.token;
      if (!token) return res.status(401).json({ message: 'Not authenticated' });

      try {
        const { userId } = verify(token, process.env.NEXTAUTH_SECRET);

        if (method === 'POST') {
          const { title, content } = req.body;
          const newPost = new Post({ title, content, author: userId });
          await newPost.save();
          res.status(201).json(newPost);
        } else if (method === 'PUT') {
          const { id } = req.query;
          const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
          res.status(200).json(updatedPost);
        } else if (method === 'DELETE') {
          const { id: deleteId } = req.query;
          await Post.findByIdAndDelete(deleteId);
          res.status(204).end();
        }
      } catch (error) {
        res.status(500).json({ message: 'Failed to process request' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
