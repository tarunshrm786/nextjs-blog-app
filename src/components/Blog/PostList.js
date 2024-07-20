// import { useContext } from 'react';
// import PostContext from '../../context/PostContext';
// import Post from './Post';

// const PostList = () => {
//   const { posts } = useContext(PostContext);

//   return (
//     <div>
//       {posts.map((post) => (
//         <Post key={post._id} post={post} />
//       ))}
//     </div>
//   );
// };

// export default PostList;


// import { useContext, useEffect } from 'react';
// import PostContext from '../../context/PostContext';
// import Post from './Post';

// const PostList = () => {
//   const { posts } = useContext(PostContext);

//   useEffect(() => {
//     console.log('Posts in PostList:', posts);
//   }, [posts]);

//   return (
//     <div>
//       {posts && posts.length > 0 ? (
//         posts.map((post) => <Post key={post._id} post={post} />)
//       ) : (
//         <p>No posts available</p>
//       )}
//     </div>
//   );
// };

// export default PostList;



// import { useContext, useEffect } from 'react';
// import { Box, Divider } from '@mui/material';
// import PostContext from '../../context/PostContext';
// import Post from './Post';

// const PostList = () => {
//   const { posts } = useContext(PostContext);

//   useEffect(() => {
//     console.log('Posts in PostList:', posts);
//   }, [posts]);

//   return (
//     <Box>
//       {posts && posts.length > 0 ? (
//         posts.map((post, index) => (
//           <Box key={post._id}>
//             <Post post={post} />
//             {index < posts.length - 1 && <Divider sx={{ marginY: 2 }} />}
//           </Box>
//         ))
//       ) : (
//         <p>No posts available</p>
//       )}
//     </Box>
//   );
// };

// export default PostList;


// import { useContext, useEffect } from 'react';
// import { Box, Divider } from '@mui/material';
// import PostContext from '../../context/PostContext';
// import Post from './Post';

// const PostList = () => {
//   const { posts } = useContext(PostContext);

//   useEffect(() => {
//     console.log('Posts in PostList:', posts);
//   }, [posts]);

//   // Sort posts by createdAt in descending order
//   const sortedPosts = posts ? [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : [];

//   return (
//     <Box>
//       {sortedPosts.length > 0 ? (
//         sortedPosts.map((post, index) => (
//           <Box key={post._id}>
//             <Post post={post} />
//             {index < sortedPosts.length - 1 && <Divider sx={{ marginY: 2 }} />}
//           </Box>
//         ))
//       ) : (
//         <p>No posts available</p>
//       )}
//     </Box>
//   );
// };

// export default PostList;

// import { useContext, useEffect, useState } from 'react';
// import { Box, Divider, Button } from '@mui/material';
// import PostContext from '../../context/PostContext';
// import Post from './Post';

// const PostList = () => {
//   const { posts } = useContext(PostContext);
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 3;

//   useEffect(() => {
//     console.log('Posts in PostList:', posts);
//   }, [posts]);

//   // Sort posts by createdAt in descending order
//   const sortedPosts = posts ? [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : [];

//   // Get the posts for the current page
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <Box>
//       {currentPosts.length > 0 ? (
//         currentPosts.map((post, index) => (
//           <Box key={post._id}>
//             <Post post={post} />
//             {index < currentPosts.length - 1 && <Divider sx={{ marginY: 2 }} />}
//           </Box>
//         ))
//       ) : (
//         <p>No posts available</p>
//       )}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
//         <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
//           Previous
//         </Button>
//         <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Next
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default PostList;

// import { useContext, useEffect, useState } from 'react';
// import { Box, Divider, Button, Typography } from '@mui/material';
// import PostContext from '../../context/PostContext';
// import Post from './Post';

// const PostList = () => {
//   const { posts } = useContext(PostContext);
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 4;

//   useEffect(() => {
//     console.log('Posts in PostList:', posts);
//   }, [posts]);

//   // Sort posts by createdAt in descending order
//   const sortedPosts = posts ? [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : [];

//   // Get the posts for the current page
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <Box>
//       {currentPosts.length > 0 ? (
//         currentPosts.map((post, index) => (
//           <Box key={post._id}>
//             <Post post={post} />
//             {index < currentPosts.length - 1 && <Divider sx={{ marginY: 2 }} />}
//           </Box>
//         ))
//       ) : (
//         <p>No posts available</p>
//       )}
//       <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <Button
//             key={index + 1}
//             onClick={() => handlePageChange(index + 1)}
//             variant={currentPage === index + 1 ? 'contained' : 'outlined'}
//             sx={{ margin: 0.2 }}
//           >
//             {index + 1}
//           </Button>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default PostList;


import { useContext, useEffect, useState } from 'react';
import { Box, Divider, Button, TextField, Typography } from '@mui/material';
import PostContext from '../../context/PostContext';
import Post from './Post';

const PostList = () => {
  const { posts } = useContext(PostContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const postsPerPage = 3;

  useEffect(() => {
    console.log('Posts in PostList:', posts);
  }, [posts]);

  // Sort posts by createdAt in descending order
  const sortedPosts = posts ? [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : [];

  // Filter posts by search term
  const filteredPosts = sortedPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get the posts for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <TextField
          label="Search Posts"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
        />
      </Box>
      {currentPosts.length > 0 ? (
        currentPosts.map((post, index) => (
          <Box key={post._id}>
            <Post post={post} />
            {index < currentPosts.length - 1 && <Divider sx={{ marginY: 2 }} />}
          </Box>
        ))
      ) : (
        <p>No posts available</p>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            variant={currentPage === index + 1 ? 'contained' : 'outlined'}
            sx={{ margin: 0.5 }}
          >
            {index + 1}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default PostList;


