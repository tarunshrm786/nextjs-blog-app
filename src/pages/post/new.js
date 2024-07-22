import { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PostForm from '../../components/Blog/PostForm';
import AuthContext from '../../context/AuthContext';

const NewPostPage = () => {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const checkUser = async () => {
      const token = Cookies.get('token');
      //console.log('Token from cookies inside NewPostPage useEffect:', token); // Debugging line

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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          marginLeft: isSmallScreen ? '150px' : '600px',
        }}
      >
        <CircularProgress sx={{ color: 'black' }} />
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
