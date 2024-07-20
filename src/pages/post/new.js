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


import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import PostForm from '../../components/Blog/PostForm';
import { Box, Typography } from '@mui/material';
import AuthContext from '../../context/AuthContext';

const NewPostPage = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

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
