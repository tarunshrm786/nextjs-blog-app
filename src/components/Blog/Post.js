import React from 'react';
import DOMPurify from 'dompurify';
import Link from 'next/link';

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
    <div className="post">
      <h2>{post.title}</h2>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: getContentPreview(post.content) }}
      ></div>
      <Link href={`/post/${post._id}`}>
        Read More
      </Link>
      <p>Author: {post.author.name}</p>
      <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default Post;
