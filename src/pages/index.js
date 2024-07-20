import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import PostList from '../components/Blog/PostList';
import PostContext from '../context/PostContext';

const HomePage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Blog Posts
      </Typography>
      <PostList />
    </Box>
  );
};

export default HomePage;
