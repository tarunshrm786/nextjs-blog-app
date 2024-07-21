// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { TextField, Button, Box, useMediaQuery } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import dynamic from 'next/dynamic';
// import 'react-quill/dist/quill.snow.css';

// // Dynamically import react-quill to avoid SSR issues
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// const PostForm = ({ post }) => {
//   const [title, setTitle] = useState(post ? post.title : '');
//   const [content, setContent] = useState(post ? post.content : '');
//   const router = useRouter();
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch(`/api/posts${post ? `/${post._id}` : ''}`, {
//       method: post ? 'PUT' : 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title, content }),
//     });
//     if (res.ok) {
//       router.push('/');
//     } else {
//       alert('Error saving post');
//     }
//   };

//   const modules = {
//     toolbar: [
//       [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
//       [{size: []}],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
//       ['link', 'image', 'video'],
//       ['clean'],
//       [{ 'align': [] }],
//     ],
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//       <TextField
//         label="Title"
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//         required
//         fullWidth
//         sx={{ minWidth: isSmallScreen ? 'auto' : '1200px' }} 
//       />
//       <ReactQuill
//         value={content}
//         onChange={setContent}
//         placeholder="Content"
//         modules={modules}
//         style={{ height: isSmallScreen ? '200px' : '400px', marginBottom: '20px' }}
//       />
//       <Button type="submit" variant="contained" color="primary">
//         {post ? 'Update' : 'Create'} Post
//       </Button>
//     </Box>
    
//   );
// };

// export default PostForm;
import { useState, useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

// Dynamically import react-quill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const PostForm = ({ post }) => {
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  const router = useRouter();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const quillRef = useRef(null);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/posts${post ? `/${post._id}` : ''}`, {
        method: post ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });
      if (res.ok) {
        router.push('/');
      } else {
        alert('Error saving post');
      }
    } catch (error) {
      alert('Error saving post');
    }
  }, [title, content, post, router]);

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
      [{ align: [] }],
    ],
  };

  useEffect(() => {
    const shareButton = document.getElementById('share-button');
    if (shareButton) {
      shareButton.addEventListener('click', handleShareClick);
    }

    return () => {
      if (shareButton) {
        shareButton.removeEventListener('click', handleShareClick);
      }
    };
  }, []);

  const handleShareClick = () => {
    console.log('Share button clicked');
    // Your share logic here
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: isSmallScreen ? '100%' : '1200px', margin: 'auto' }}
    >
      <TextField
        label="Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        fullWidth
      />
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={setContent}
        placeholder="Content"
        modules={modules}
        style={{ height: isSmallScreen ? '200px' : '400px', marginBottom: '20px' }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
      >
        {post ? 'Update' : 'Create'} Post
      </Button>
      <Button
        id="share-button"
        variant="contained"
        sx={{
          backgroundColor: 'grey',
          color: 'white',
          '&:hover': {
            backgroundColor: 'darkgrey',
            color: 'white',
          },
        }}
      >
        Share
      </Button>
    </Box>
  );
};

export default PostForm;
