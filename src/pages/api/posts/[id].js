import connectDB from '../../../utils/db';
import Post from '../../../models/post';

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

    case 'PUT':
      try {
        const { title, content } = req.body;
        const post = await Post.findByIdAndUpdate(
          id,
          { title, content },
          { new: true, runValidators: true }
        );
        if (!post) {
          return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({ message: 'Error updating post' });
      }
      break;

    case 'DELETE':
      try {
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
          return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting post' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};

