// import { useContext, useEffect, useState } from 'react';
// import { Box, Divider, Button, TextField, Typography, CircularProgress } from '@mui/material';
// import PostContext from '../../context/PostContext';
// import Post from './Post';

// const PostList = () => {
//   const { posts, fetchPosts } = useContext(PostContext);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);
//   const postsPerPage = 4;

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       await fetchPosts();
//       setLoading(false);
//     };
//     fetchData();
//   }, [fetchPosts]);

//   useEffect(() => {
//     if (posts.length > 0) {
//       setLoading(false);
//     }
//     //console.log('Posts in PostList:', posts);
//   }, [posts]);

//   // Sort posts by createdAt in descending order
//   const sortedPosts = posts ? [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : [];

//   // Filter posts by search term
//   const filteredPosts = sortedPosts.filter(post =>
//     post.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Get the posts for the current page
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     setCurrentPage(1); // Reset to first page on search
//   };

//   return (
//     <Box>
//       <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
//         <TextField
//           label="Search Posts"
//           variant="outlined"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           fullWidth
//         />
//       </Box>
//       {loading ? (
//         <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
//           <CircularProgress sx={{ color: 'black' }} />
//         </Box>
//       ) : (
//         <>
//           {currentPosts.length > 0 ? (
//             currentPosts.map((post, index) => (
//               <Box key={post._id}>
//                 <Post post={post} />
//                 {index < currentPosts.length - 1 && <Divider sx={{ marginY: 2 }} />}
//               </Box>
//             ))
//           ) : (
//             <Typography>No posts available</Typography>
//           )}
//           <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
//             {Array.from({ length: totalPages }, (_, index) => (
//               <Button
//                 key={index + 1}
//                 onClick={() => handlePageChange(index + 1)}
//                 variant={currentPage === index + 1 ? 'contained' : 'outlined'}
//                 sx={{
//                   margin: 0.5,
//                   marginBottom: '20px',
//                   color: 'white',
//                   borderColor: 'black',
//                   backgroundColor: 'black',
//                   '&:hover': {
//                     backgroundColor: 'black',
//                     color: 'white',
//                   },
//                 }}
//               >
//                 {index + 1}
//               </Button>
//             ))}
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };

// export default PostList;

import { useContext, useEffect, useState } from 'react';
import { Box, Divider, Button, TextField, Typography, CircularProgress } from '@mui/material';
import PostContext from '../../context/PostContext';
import Post from './Post';

const PostList = () => {
  const { posts, fetchPosts } = useContext(PostContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const postsPerPage = 4;
  const maxPageNumbersToShow = 2;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchPosts();
      setLoading(false);
    };
    fetchData();
  }, [fetchPosts]);

  useEffect(() => {
    if (posts.length > 0) {
      setLoading(false);
    }
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

  // Determine the range of page numbers to display
  const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

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
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <CircularProgress sx={{ color: 'black' }} />
        </Box>
      ) : (
        <>
          {currentPosts.length > 0 ? (
            currentPosts.map((post, index) => (
              <Box key={post._id}>
                <Post post={post} />
                {index < currentPosts.length - 1 && <Divider sx={{ marginY: 2 }} />}
              </Box>
            ))
          ) : (
            <Typography>No posts available</Typography>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              sx={{
                margin: 0.5,
                color: 'white',
                backgroundColor: 'white',
                color: 'black',
                '&:hover': {
                  backgroundColor: 'black',
                  color: 'white',
                },
              }}
            >
              &lt;
            </Button>
            {pageNumbers.map((pageNumber) => (
              <Button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                variant={currentPage === pageNumber ? 'contained' : 'outlined'}
                sx={{
                  margin: 0.5,
                  color: 'white',
                  borderColor: 'black',
                  backgroundColor: 'black',
                  '&:hover': {
                    backgroundColor: 'black',
                    color: 'white',
                  },
                }}
              >
                {pageNumber}
              </Button>
            ))}
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              sx={{
                margin: 0.5,
                color: 'white',
                borderColor: 'black',
                backgroundColor: 'white',
                color: 'black',
                '&:hover': {
                  backgroundColor: 'black',
                  color: 'white',
                },
              }}
            >
              &gt;
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default PostList;
