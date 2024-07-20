// import { useContext } from 'react';
// import PostList from '../components/Blog/PostList';
// import PostContext from '../context/PostContext';

// const HomePage = () => {
//   const { posts } = useContext(PostContext);

//   return (
//     <div>
//       <h1>Blog Posts</h1>
//       <PostList posts={posts} />
//     </div>
//   );
// };

// export default HomePage;

// import { useContext } from 'react';
// import PostList from '../components/Blog/PostList';
// import PostContext from '../context/PostContext';
// import { Box, Typography } from '@mui/material';

// const HomePage = () => {
//   const { posts } = useContext(PostContext);

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Blog Posts
//       </Typography>
//       <PostList posts={posts} />
//     </Box>
//   );
// };

// export default HomePage;

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
