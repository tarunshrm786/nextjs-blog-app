import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import AuthContext from '../../context/AuthContext';

const MyAccount = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
    };

    if (user) {
      fetchPosts();
    } else {
      router.push('/login');
    }
  }, [user]);

  const handleEdit = (id) => {
    router.push(`/post/edit/${id}`);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      setPosts(posts.filter((post) => post._id !== id));
    } else {
      alert('Error deleting post');
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Blog Posts
      </Typography>
      <List>
        {posts.map((post) => (
          <Box key={post._id} sx={{ marginBottom: 2 }}>
            <ListItem>
              <ListItemText primary={post.title} secondary={new Date(post.createdAt).toLocaleString()} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(post._id)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(post._id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default MyAccount;
