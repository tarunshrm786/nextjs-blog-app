import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Sidebar from './Sidebar'; // Adjust path if necessary
import Header from './Header'; // Adjust path if necessary
import Footer from './Footer'; // Adjust path if necessary

const MainLayout = ({ children }) => {
  const router = useRouter();
  const isAuthPage = router.pathname === '/login' || router.pathname === '/register';
  const [recentPosts, setRecentPosts] = useState([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const res = await fetch('/api/posts'); // Adjust API endpoint if necessary
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Fetched posts:', data); // Debugging log
        setRecentPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1, padding: 3 }}>
          {children}
        </Box>
        {!isAuthPage && !isSmallScreen && (
          <Box sx={{ width: '200px', display: 'flex', flexDirection: 'column' }}>
            <Sidebar recentPosts={recentPosts} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MainLayout;
