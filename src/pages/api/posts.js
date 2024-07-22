// import connectDB from '../../utils/db';
// import Post from '../../models/post';
// import { verify } from 'jsonwebtoken';

// connectDB();

// export default async (req, res) => {
//   const { method } = req;

//   switch (method) {
//     case 'GET':
//       // Allow public access to fetch posts
//       try {
//         const posts = await Post.find({}).populate('author');
//         res.status(200).json(posts);
//       } catch (error) {
//         res.status(500).json({ message: 'Failed to fetch posts' });
//       }
//       break;

//     case 'POST':
//     case 'PUT':
//     case 'DELETE':
//       // Require authentication for these methods
//       const token = req.cookies.token;
//       if (!token) return res.status(401).json({ message: 'Not authenticated' });

//       try {
//         const { userId } = verify(token, process.env.NEXTAUTH_SECRET);

//         if (method === 'POST') {
//           const { title, content } = req.body;
//           const newPost = new Post({ title, content, author: userId });
//           await newPost.save();
//           res.status(201).json(newPost);
//         } else if (method === 'PUT') {
//           const { id } = req.query;
//           const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
//           res.status(200).json(updatedPost);
//         } else if (method === 'DELETE') {
//           const { id: deleteId } = req.query;
//           await Post.findByIdAndDelete(deleteId);
//           res.status(204).end();
//         }
//       } catch (error) {
//         res.status(500).json({ message: 'Failed to process request' });
//       }
//       break;

//     default:
//       res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//       break;
//   }
// };

// //wordked
// import connectDB from '../../utils/db';
// import Post from '../../models/post';
// import { verify } from 'jsonwebtoken';
// import cookie from 'cookie';

// connectDB();

// export default async (req, res) => {
//   const { method } = req;

//   switch (method) {
//     case 'GET':
//       // Allow public access to fetch posts
//       try {
//         const cookies = cookie.parse(req.headers.cookie || '');
//         const token = cookies.token;
//         if (!token) return res.status(401).json({ message: 'Not authenticated' });

//         const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
//         const posts = await Post.find({ author: userId }).populate('author');
//         res.status(200).json(posts);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//         res.status(500).json({ message: 'Failed to fetch posts' });
//       }
//       break;

//     case 'POST':
//       try {
//         const cookies = cookie.parse(req.headers.cookie || '');
//         const token = cookies.token;
//         if (!token) return res.status(401).json({ message: 'Not authenticated' });

//         const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
//         const { title, content } = req.body;
//         const newPost = new Post({ title, content, author: userId });
//         await newPost.save();
//         res.status(201).json(newPost);
//       } catch (error) {
//         console.error('Error creating post:', error);
//         res.status(500).json({ message: 'Failed to create post' });
//       }
//       break;

//     case 'PUT':
//       try {
//         const cookies = cookie.parse(req.headers.cookie || '');
//         const token = cookies.token;
//         if (!token) return res.status(401).json({ message: 'Not authenticated' });

//         const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
//         const { id } = req.query;
//         const post = await Post.findById(id);
//         if (!post) return res.status(404).json({ message: 'Post not found' });

//         if (post.author.toString() !== userId) {
//           return res.status(403).json({ message: 'Not authorized' });
//         }

//         const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
//         res.status(200).json(updatedPost);
//       } catch (error) {
//         console.error('Error updating post:', error);
//         res.status(500).json({ message: 'Failed to update post' });
//       }
//       break;

//     case 'DELETE':
//       try {
//         const cookies = cookie.parse(req.headers.cookie || '');
//         const token = cookies.token;
//         if (!token) return res.status(401).json({ message: 'Not authenticated' });

//         const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
//         const { id } = req.query;
//         const post = await Post.findById(id);
//         if (!post) return res.status(404).json({ message: 'Post not found' });

//         if (post.author.toString() !== userId) {
//           return res.status(403).json({ message: 'Not authorized' });
//         }

//         await Post.findByIdAndDelete(id);
//         res.status(204).end();
//       } catch (error) {
//         console.error('Error deleting post:', error);
//         res.status(500).json({ message: 'Failed to delete post' });
//       }
//       break;

//     default:
//       res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//       break;
//   }
// };



// //worked posts:
// //latest code
// import connectDB from '../../utils/db';
// import Post from '../../models/post';
// import { verify } from 'jsonwebtoken';
// import cookie from 'cookie';

// connectDB();

// export default async (req, res) => {
//   const { method } = req;

//   switch (method) {
//     case 'GET':
//       //Allow public access to fetch posts
//       // try {
//       //   const posts = await Post.find().populate('author');
//       //   res.status(200).json(posts);
//       // } catch (error) {
//       //   console.error('Error fetching posts:', error);
//       //   res.status(500).json({ message: 'Failed to fetch posts' });
//       // }
//       // break;
//       // try {
//       //   const cookies = cookie.parse(req.headers.cookie || '');
//       //   const token = cookies.token;
//       //   if (!token) return res.status(401).json({ message: 'Not authenticated' });

//       //   const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
//       //   const posts = await Post.find({ author: userId }).populate('author');
//       //   res.status(200).json(posts);
//       // } catch (error) {
//       //   console.error('Error fetching posts:', error);
//       //   res.status(500).json({ message: 'Failed to fetch posts' });
//       // }
//       // break;
//       try {
//         let userId = null;
//         const cookies = cookie.parse(req.headers.cookie || '');
//         const token = cookies.token;

//         if (token) {
//           try {
//             const decoded = verify(token, process.env.NEXTAUTH_SECRET);
//             userId = decoded.userId;
//           } catch (err) {
//             console.error('Invalid token:', err);
//           }
//         }

//         let posts;
//         if (userId) {
//           posts = await Post.find({ author: userId }).populate('author');
//         } else {
//           posts = await Post.find().populate('author'); // Return all posts if not authenticated
//         }
        
//         res.status(200).json(posts);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//         res.status(500).json({ message: 'Failed to fetch posts' });
//       }
//       break;


//     case 'POST':
//       try {
//         const cookies = cookie.parse(req.headers.cookie || '');
//         const token = cookies.token;
//         if (!token) return res.status(401).json({ message: 'Not authenticated' });

//         const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
//         const { title, content } = req.body;
//         const newPost = new Post({ title, content, author: userId });
//         await newPost.save();
//         res.status(201).json(newPost);
//       } catch (error) {
//         console.error('Error creating post:', error);
//         res.status(500).json({ message: 'Failed to create post' });
//       }
//       break;

//     case 'PUT':
//       try {
//         const cookies = cookie.parse(req.headers.cookie || '');
//         const token = cookies.token;
//         if (!token) return res.status(401).json({ message: 'Not authenticated' });

//         const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
//         const { id } = req.query;
//         const post = await Post.findById(id);
//         if (!post) return res.status(404).json({ message: 'Post not found' });

//         if (post.author.toString() !== userId) {
//           return res.status(403).json({ message: 'Not authorized' });
//         }

//         const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
//         res.status(200).json(updatedPost);
//       } catch (error) {
//         console.error('Error updating post:', error);
//         res.status(500).json({ message: 'Failed to update post' });
//       }
//       break;

//     case 'DELETE':
//       try {
//         const cookies = cookie.parse(req.headers.cookie || '');
//         const token = cookies.token;
//         if (!token) return res.status(401).json({ message: 'Not authenticated' });

//         const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
//         const { id } = req.query;
//         const post = await Post.findById(id);
//         if (!post) return res.status(404).json({ message: 'Post not found' });

//         if (post.author.toString() !== userId) {
//           return res.status(403).json({ message: 'Not authorized' });
//         }

//         await Post.findByIdAndDelete(id);
//         res.status(204).end();
//       } catch (error) {
//         console.error('Error deleting post:', error);
//         res.status(500).json({ message: 'Failed to delete post' });
//       }
//       break;

//     default:
//       res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//       break;
//   }
// };


// import connectDB from '../../utils/db';
// import Post from '../../models/post';
// import { verify } from 'jsonwebtoken';
// import cookie from 'cookie';

// connectDB();

// export default async (req, res) => {
//   const { method } = req;

//   switch (method) {
//     case 'GET':
//       try {
//         let userId = null;
//         const cookies = cookie.parse(req.headers.cookie || '');
//         const token = cookies.token;

//         if (token) {
//           try {
//             const decoded = verify(token, process.env.NEXTAUTH_SECRET);
//             userId = decoded.userId;
//           } catch (err) {
//             console.error('Invalid token:', err);
//           }
//         }

//         let posts;
//         if (userId) {
//           console.log(`Fetching posts for user: ${userId}`);
//           posts = await Post.find({ author: userId }).populate('author');
//         } else {
//           console.log('Fetching all posts as user is not authenticated');
//           posts = await Post.find().populate('author'); // Return all posts if not authenticated
//         } 

//         res.status(200).json(posts);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//         res.status(500).json({ message: 'Failed to fetch posts' });
//       }
//       break;

//     case 'POST':
//       try {
//         const cookies = cookie.parse(req.headers.cookie || '');
//         const token = cookies.token;
//         if (!token) return res.status(401).json({ message: 'Not authenticated' });

//         const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
//         const { title, content } = req.body;
//         const newPost = new Post({ title, content, author: userId });
//         await newPost.save();
//         res.status(201).json(newPost);
//       } catch (error) {
//         console.error('Error creating post:', error);
//         res.status(500).json({ message: 'Failed to create post' });
//       }
//       break;

//     case 'PUT':
//       try {
//         const cookies = cookie.parse(req.headers.cookie || '');
//         const token = cookies.token;
//         if (!token) return res.status(401).json({ message: 'Not authenticated' });

//         const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
//         const { id } = req.query;
//         const post = await Post.findById(id);
//         if (!post) return res.status(404).json({ message: 'Post not found' });

//         if (post.author.toString() !== userId) {
//           return res.status(403).json({ message: 'Not authorized' });
//         }

//         const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
//         res.status(200).json(updatedPost);
//       } catch (error) {
//         console.error('Error updating post:', error);
//         res.status(500).json({ message: 'Failed to update post' });
//       }
//       break;

//     case 'DELETE':
//       try {
//         const cookies = cookie.parse(req.headers.cookie || '');
//         const token = cookies.token;
//         if (!token) return res.status(401).json({ message: 'Not authenticated' });

//         const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
//         const { id } = req.query;
//         const post = await Post.findById(id);
//         if (!post) return res.status(404).json({ message: 'Post not found' });

//         if (post.author.toString() !== userId) {
//           return res.status(403).json({ message: 'Not authorized' });
//         }

//         await Post.findByIdAndDelete(id);
//         res.status(204).end();
//       } catch (error) {
//         console.error('Error deleting post:', error);
//         res.status(500).json({ message: 'Failed to delete post' });
//       }
//       break;

//     default:
//       res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//       break;
//   }
// };


import connectDB from '../../utils/db';
import Post from '../../models/post';
import User from '../../models/user'; // Ensure User model is imported
import { verify } from 'jsonwebtoken';
import cookie from 'cookie';

connectDB();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        let userId = null;
        const cookies = cookie.parse(req.headers.cookie || '');
        const token = cookies.token;

        console.log('Cookies:', cookies);  // Log cookies
        console.log('Token:', token);      // Log token

        if (token) {
          try {
            const decoded = verify(token, process.env.NEXTAUTH_SECRET);
            userId = decoded.userId;
            console.log('User ID from token:', userId);  // Log decoded userId
          } catch (err) {
            console.error('Invalid token:', err);
          }
        }

        let posts;
        if (userId) {
          console.log(`Fetching posts for user: ${userId}`);
          posts = await Post.find({ author: userId }).populate('author');
        } else {
          console.log('Fetching all posts as user is not authenticated');
          posts = await Post.find().populate('author');
        }

        console.log('Fetched posts:', posts);  // Log fetched posts
        res.status(200).json(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ message: 'Failed to fetch posts' });
      }
      break;

    case 'POST':
      try {
        const cookies = cookie.parse(req.headers.cookie || '');
        const token = cookies.token;
        if (!token) return res.status(401).json({ message: 'Not authenticated' });

        const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
        const { title, content } = req.body;
        const newPost = new Post({ title, content, author: userId });
        await newPost.save();
        res.status(201).json(newPost);
      } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: 'Failed to create post' });
      }
      break;

    case 'PUT':
      try {
        const cookies = cookie.parse(req.headers.cookie || '');
        const token = cookies.token;
        if (!token) return res.status(401).json({ message: 'Not authenticated' });

        const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
        const { id } = req.query;
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        if (post.author.toString() !== userId) {
          return res.status(403).json({ message: 'Not authorized' });
        }

        const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedPost);
      } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ message: 'Failed to update post' });
      }
      break;

    case 'DELETE':
      try {
        const cookies = cookie.parse(req.headers.cookie || '');
        const token = cookies.token;
        if (!token) return res.status(401).json({ message: 'Not authenticated' });

        const { userId } = verify(token, process.env.NEXTAUTH_SECRET);
        const { id } = req.query;
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        if (post.author.toString() !== userId) {
          return res.status(403).json({ message: 'Not authorized' });
        }

        await Post.findByIdAndDelete(id);
        res.status(204).end();
      } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ message: 'Failed to delete post' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
