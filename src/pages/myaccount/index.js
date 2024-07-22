// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Cookies from 'js-cookie';
// import { Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider, CircularProgress } from '@mui/material';
// import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

// const MyAccount = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const checkUser = async () => {
//       const token = Cookies.get('token');
//       console.log('Token from cookies inside MyAccount useEffect:', token); // Debugging line

//       if (token) {
//         await fetchUser(token);
//       } else {
//         router.push('/login');
//       }
//     };

//     checkUser();
//   }, [router]);

//   const fetchUser = async (token) => {
//     try {
//       const res = await fetch('/api/auth/user', {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       if (res.ok) {
//         const data = await res.json();
//         setUser(data.user);
//         await fetchPosts(token);
//       } else {
//         router.push('/login');
//       }
//     } catch (error) {
//       console.error('Error fetching user:', error);
//       router.push('/login');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchPosts = async (token) => {
//     try {
//       const res = await fetch('/api/posts', {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       if (res.ok) {
//         const data = await res.json();
//         setPosts(data);
//       } else {
//         console.error('Failed to fetch posts');
//       }
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const handleEdit = (id) => {
//     router.push(`/post/edit/${id}`);
//   };

//   const handleDelete = async (id) => {
//     const token = Cookies.get('token');
//     try {
//       const res = await fetch(`/api/posts/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       if (res.ok) {
//         setPosts(posts.filter((post) => post._id !== id));
//       } else {
//         alert('Error deleting post');
//       }
//     } catch (error) {
//       console.error('Error deleting post:', error);
//       alert('Error deleting post');
//     }
//   };

//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!user) {
//     console.log('User is not authenticated:', user);
//     return null;
//   }

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         My Blog Posts
//       </Typography>
//       <List>
//         {posts.map((post) => (
//           <Box key={post._id} sx={{ marginBottom: 2 }}>
//             <ListItem>
//               <ListItemText primary={post.title} secondary={new Date(post.createdAt).toLocaleString()} />
//               <ListItemSecondaryAction>
//                 <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(post._id)}>
//                   <EditIcon />
//                 </IconButton>
//                 <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(post._id)}>
//                   <DeleteIcon />
//                 </IconButton>
//               </ListItemSecondaryAction>
//             </ListItem>
//             <Divider />
//           </Box>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default MyAccount;

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider, CircularProgress } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const MyAccount = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const checkUser = async () => {
      const token = Cookies.get('token');
      console.log('Token from cookies inside MyAccount useEffect:', token); // Debugging line

      if (token) {
        await fetchUser(token);
      } else {
        router.push('/login');
      }
    };

    checkUser();
  }, [router]);

  const fetchUser = async (token) => {
    try {
      const res = await fetch('/api/auth/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        await fetchPosts(token);
      } else {
        router.push('/login');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async (token) => {
    try {
      const res = await fetch('/api/posts', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        console.error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleEdit = (id) => {
    router.push(`/post/edit/${id}`);
  };

  const handleDelete = async (id) => {
    const token = Cookies.get('token');
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (res.ok) {
        setPosts(posts.filter((post) => post._id !== id));
      } else {
        alert('Error deleting post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Error deleting post');
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          marginLeft: isSmallScreen ? '150px' : '400px',
        }}
      >
        <CircularProgress sx={{ color: 'black' }} />
      </Box>
    );
  }

  if (!user) {
    console.log('User is not authenticated:', user);
    return null;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Blog Posts
      </Typography>
      <List>
        {posts.map((post) => (
          <Box key={post._id} sx={{ marginBottom: 2 }}>
            <ListItem>
              <ListItemText primary={post.title} secondary={new Date(post.createdAt).toLocaleString()} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(post._id)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(post._id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default MyAccount;
