// import { useState, useCallback, useRef, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { TextField, Button, Box, useMediaQuery, CircularProgress } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import dynamic from 'next/dynamic';
// import 'react-quill/dist/quill.snow.css';

// // Dynamically import react-quill to avoid SSR issues
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// const PostForm = ({ post }) => {
//   const [title, setTitle] = useState(post ? post.title : '');
//   const [content, setContent] = useState(post ? post.content : '');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const router = useRouter();
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const quillRef = useRef(null);

//   const handleSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     if (isSubmitting) return; // Prevent multiple submissions

//     setIsSubmitting(true);
//     try {
//       const res = await fetch(`/api/posts${post ? `/${post._id}` : ''}`, {
//         method: post ? 'PUT' : 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title, content }),
//       });
//       if (res.ok) {
//         router.push('/');
//       } else {
//         alert('Error saving post');
//       }
//     } catch (error) {
//       alert('Error saving post');
//     } finally {
//       setIsSubmitting(false);
//     }
//   }, [title, content, post, router, isSubmitting]);

//   const modules = {
//     toolbar: [
//       [{ header: '1' }, { header: '2' }, { font: [] }],
//       [{ size: [] }],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
//       ['link', 'image', 'video'],
//       ['clean'],
//       [{ align: [] }],
//     ],
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: isSmallScreen ? '100%' : '1200px', margin: 'auto' }}
//     >
//       <TextField
//         label="Title"
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//         required
//         fullWidth
//       />
//       <ReactQuill
//         ref={quillRef}
//         value={content}
//         onChange={setContent}
//         placeholder="Content"
//         modules={modules}
//         style={{ height: isSmallScreen ? '200px' : '400px', marginBottom: '20px' }}
//       />
//       <Button
//         type="submit"
//         variant="contained"
//         disabled={isSubmitting} // Disable button while submitting
//         sx={{
//           backgroundColor: 'black',
//           marginTop: '40px',
//           color: 'white',
//           '&:hover': {
//             backgroundColor: 'black',
//             color: 'white',
//           },
//         }}
//       >
//         {post ? 'Update' : 'Create'} Post
//       </Button>
  
//       {isSubmitting && (
//           <CircularProgress
//             size={24}
//             sx={{
//               color: 'black',
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               marginTop: '-12px',
//               marginLeft: '-12px',
//             }}
//           />
//         )}

//     </Box>
//   );
// };

// export default PostForm;



import { useState, useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Box, useMediaQuery, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

// Dynamically import react-quill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const PostForm = ({ post }) => {
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const quillRef = useRef(null);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);
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
    } finally {
      setIsSubmitting(false);
    }
  }, [title, content, post, router, isSubmitting]);

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
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting} // Disable button while submitting
          fullWidth
          sx={{
            backgroundColor: 'black',
            marginTop: '40px',
            color: 'white',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          {post ? 'Update' : 'Create'} Post
          {isSubmitting && (
            <CircularProgress
              size={24}
              sx={{
                color: 'white',
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default PostForm;
