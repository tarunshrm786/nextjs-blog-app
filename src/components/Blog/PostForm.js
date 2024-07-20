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
