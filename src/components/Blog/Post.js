import React from 'react';
import DOMPurify from 'dompurify';
import Link from 'next/link';
import { Button, Box, Typography } from '@mui/material';

const Post = ({ post }) => {
  const getContentPreview = (content) => {
    const plainTextContent = DOMPurify.sanitize(content, { ALLOWED_TAGS: [] });
    const previewLength = 200; // Number of characters to show in the preview
    if (plainTextContent.length <= previewLength) {
      return plainTextContent;
    }
    return plainTextContent.substring(0, previewLength) + '...';
  };

  return (
    <Box className="post" sx={{ marginBottom: 4 }}>
      <Typography variant="h5" component="h2">
        {post.title}
      </Typography>
      
      <Box
        className="post-content"
        dangerouslySetInnerHTML={{ __html: getContentPreview(post.content) }}
        sx={{ marginBottom: 2 }}
      ></Box>
      <Link href={`/post/${post._id}`} passHref>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '8px',
            padding: '4px 12px',
            '&:hover': {
              backgroundColor: 'darkgray',
            },
          }}
        >
          Read More
        </Button>
      </Link>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        Author: {post.author.name}
      </Typography>
      <Typography variant="body2">
        Created At: {new Date(post.createdAt).toLocaleString()}
      </Typography>
    </Box>
  );
};

export default Post;

