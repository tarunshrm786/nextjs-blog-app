// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import DOMPurify from 'dompurify';

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

//   if (!post) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       {/* <p>{post.content}</p> */}
//       <div
//         dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
//       ></div>
//     </div>
//   );
// };

// export default PostPage;


import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { Typography, Container, CircularProgress } from '@mui/material';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/posts/${id}`);
      const data = await res.json();
      setPost(data);
    };

    if (id) fetchPost();
  }, [id]);

  if (!post) return (
    <Container>
      <CircularProgress />
    </Container>
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
