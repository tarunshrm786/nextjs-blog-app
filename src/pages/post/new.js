// import PostForm from '../../components/Blog/PostForm';
// import { Box, Typography } from '@mui/material';

// const NewPostPage = () => {
//   return (
//     <Box sx={{ padding: 2 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         New Post
//       </Typography>
//       <PostForm />
//     </Box>
//   );
// };

// export default NewPostPage;


// import { useEffect, useContext } from 'react';
// import { useRouter } from 'next/router';
// import PostForm from '../../components/Blog/PostForm';
// import { Box, Typography } from '@mui/material';
// import AuthContext from '../../context/AuthContext';

// const NewPostPage = () => {
//   const { user } = useContext(AuthContext);
//   const router = useRouter();

//   useEffect(() => {
//     if (!user) {
//       router.push('/login');
//     }
//     else {
//       router.push('/post/new');
//     }
//   }, [user, router]);

//   if (!user) {
//     return null; 
//   }

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         New Post
//       </Typography>
//       <PostForm />
//     </Box>
//   );
// };

// export default NewPostPage;


// import { useEffect, useContext } from 'react';
// import { useRouter } from 'next/router';
// import { Box, Typography } from '@mui/material';
// import PostForm from '../../components/Blog/PostForm';
// import AuthContext from '../../context/AuthContext';

// const NewPostPage = () => {
//   const { user } = useContext(AuthContext);
//   const router = useRouter();

//   useEffect(() => {
//     if (!user) {
//       router.replace('/login'); // Use replace to avoid adding to history stack
//     }
//   }, [user, router]);


//   if (!user) {
//     return null;
//   }

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         New Post
//       </Typography>
//       <PostForm />
//     </Box>
//   );
// };

// export default NewPostPage;


import { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Box, Typography, CircularProgress } from '@mui/material';
import PostForm from '../../components/Blog/PostForm';
import AuthContext from '../../context/AuthContext';

const NewPostPage = () => {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const token = Cookies.get('token');
      console.log('Token from cookies inside NewPostPage useEffect:', token); // Debugging line

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

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        New Post
      </Typography>
      <PostForm />
    </Box>
  );
};

export default NewPostPage;
