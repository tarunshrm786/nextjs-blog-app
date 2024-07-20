import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PostForm from '../../../components/Blog/PostForm';

const EditPostPage = () => {
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

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Post</h1>
      <PostForm post={post} />
    </div>
  );
};

export default EditPostPage;
