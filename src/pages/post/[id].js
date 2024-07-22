// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import DOMPurify from 'dompurify';
// import { Typography, Container, CircularProgress } from '@mui/material';

// const PostPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       const res = await fetch(`/api/posts/${id}`);
//       const data = await res.json();
//       setPost(data);
//     };

//     if (id) fetchPost();
//   }, [id]);

//   if (!post) return (
//     <Container>
//       <CircularProgress />
//     </Container>
//   );

//   return (
//     <Container>
//       <Typography variant="h3" component="h1" gutterBottom>
//         {post.title}
//       </Typography>
//       <div
//         dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
//       ></div>
//     </Container>
//   );
// };

// export default PostPage;



import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { Typography, Container, CircularProgress, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/posts/${id}`);
      const data = await res.json();
      setPost(data);
    };

    if (id) fetchPost();
  }, [id]);

  if (!post) return (
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

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
      ></div>
    </Container>
  );
};

export default PostPage;
