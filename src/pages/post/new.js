import PostForm from '../../components/Blog/PostForm';
import { Box, Typography } from '@mui/material';

const NewPostPage = () => {
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
