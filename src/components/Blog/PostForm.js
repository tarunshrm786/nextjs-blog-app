// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// const PostForm = ({ post }) => {
//   const [title, setTitle] = useState(post ? post.title : '');
//   const [content, setContent] = useState(post ? post.content : '');
//   const router = useRouter();

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

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//         required
//       />
//       <textarea
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         placeholder="Content"
//         required
//       />
//       <button type="submit">{post ? 'Update' : 'Create'} Post</button>
//     </form>
//   );
// };

// export default PostForm;

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { TextField, Button, Box } from '@mui/material';

// const PostForm = ({ post }) => {
//   const [title, setTitle] = useState(post ? post.title : '');
//   const [content, setContent] = useState(post ? post.content : '');
//   const router = useRouter();

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
//         sx={{ minWidth: '1200px' }} 
//       />
//       <TextField
//         label="Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         placeholder="Content"
//         required
//         fullWidth
//         multiline
//         rows={20}
//       />
//       <Button type="submit" variant="contained" color="primary">
//         {post ? 'Update' : 'Create'} Post
//       </Button>
//     </Box>
//   );
// };

// export default PostForm;


// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { TextField, Button, Box } from '@mui/material';

// const PostForm = ({ post }) => {
//   const [title, setTitle] = useState(post ? post.title : '');
//   const [content, setContent] = useState(post ? post.content : '');
//   const router = useRouter();

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
//         sx={{ minWidth: '1200px' }} 
//       />
//       <textarea
//         label="Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         placeholder="Content"
//         required
//         rows={20}
//         style={{ width: '100%', padding: '10px', boxSizing: 'border-box', fontSize: '16px' }}
//       />
//       <Button type="submit" variant="contained" color="primary">
//         {post ? 'Update' : 'Create'} Post
//       </Button>
//     </Box>
//   );
// };

// export default PostForm;

// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { TextField, Button, Box } from '@mui/material';
// import dynamic from 'next/dynamic';
// import 'react-quill/dist/quill.snow.css';

// // Dynamically import react-quill to avoid SSR issues
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// const PostForm = ({ post }) => {
//   const [title, setTitle] = useState(post ? post.title : '');
//   const [content, setContent] = useState(post ? post.content : '');
//   const router = useRouter();

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
//         sx={{ minWidth: '1200px' }} 
//       />
//       <ReactQuill
//         value={content}
//         onChange={setContent}
//         placeholder="Content"
//         modules={modules}
//         style={{ height: '400px', marginBottom: '20px' }}
//       />
//       <Button type="submit" variant="contained" color="primary">
//         {post ? 'Update' : 'Create'} Post
//       </Button>
//     </Box>
//   );
// };

// export default PostForm;


import { useState } from 'react';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean'],
      [{ 'align': [] }],
    ],
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        fullWidth
        sx={{ minWidth: isSmallScreen ? 'auto' : '1200px' }} 
      />
      <ReactQuill
        value={content}
        onChange={setContent}
        placeholder="Content"
        modules={modules}
        style={{ height: isSmallScreen ? '200px' : '400px', marginBottom: '20px' }}
      />
      <Button type="submit" variant="contained" color="primary">
        {post ? 'Update' : 'Create'} Post
      </Button>
    </Box>
    
  );
};

export default PostForm;
