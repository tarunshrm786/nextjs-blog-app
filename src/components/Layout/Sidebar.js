
// import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
// import Link from 'next/link';

// const Sidebar = ({ recentPosts }) => {
//   //console.log('Received recent posts:', recentPosts); // Debugging log

//   // Filter posts with titles containing the word "React"
//   const reactPosts = recentPosts.filter(post => post.title.toLowerCase().includes('react'));
//   // Filter posts with titles containing the word "AI"
//   const aiPosts = recentPosts.filter(post => post.title.toLowerCase().includes('ai'));

//   // Get the most recent 3 posts
//   const recentThreePosts = recentPosts.slice(0, 3);
//   const recentTwoReactPosts = recentPosts.slice(0, 1);
//   const recentTwoaiPosts = aiPosts.slice(0, 1);

//   return (
//     <Box component="aside" sx={{ width: '170px', padding: 2, backgroundColor: '#f0f0f0', borderRight: '1px solid #ddd' }}>
//       <Typography variant="h6" component="h2">
//         Latest Blogs
//       </Typography>
//       <Divider sx={{ marginY: 2 }} />
//       <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
//         Recent Posts
//       </Typography>
//       <List>
//         {recentThreePosts && recentThreePosts.length > 0 ? (
//           recentThreePosts.map((post) => (
//             <ListItem key={post._id}>
//               <Link href={`/post/${post._id}`} passHref>
//                 <ListItemText primary={post.title} />
//               </Link>
//             </ListItem>
//           ))
//         ) : (
//           <ListItem>
//             <ListItemText primary="No recent posts available" />
//           </ListItem>
//         )}
//       </List>
//       <Divider sx={{ marginY: 2 }} />
//       <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
//         Categories
//       </Typography>
      
//       {/* React Category */}
//       <Typography variant="subtitle1" component="h3" sx={{ marginTop: 2 }}>
//         React
//       </Typography>
//       <List>
//         {recentTwoReactPosts && recentTwoReactPosts.length > 0 ? (
//           recentTwoReactPosts.map((post) => (
//             <ListItem key={post._id}>
//               <Link href={`/post/${post._id}`} passHref>
//                 <ListItemText primary={post.title} />
//               </Link>
//             </ListItem>
//           ))
//         ) : (
//           <ListItem>
//             <ListItemText primary="No React posts available" />
//           </ListItem>
//         )}
//       </List>

//       {/* AI Category */}
//       <Typography variant="subtitle1" component="h3" sx={{ marginTop: 1 }}>
//         AI
//       </Typography>
//       <List>
//         {recentTwoaiPosts && recentTwoaiPosts.length > 0 ? (
//           recentTwoaiPosts.map((post) => (
//             <ListItem key={post._id}>
//               <Link href={`/post/${post._id}`} passHref>
//                 <ListItemText primary={post.title} />
//               </Link>
//             </ListItem>
//           ))
//         ) : (
//           <ListItem>
//             <ListItemText primary="No AI posts available" />
//           </ListItem>
//         )}
//       </List>
//     </Box>
//   );
// };

// export default Sidebar;


import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import Link from 'next/link';

const Sidebar = ({ recentPosts }) => {
  // Sort posts by createdAt in descending order
  const sortedPosts = recentPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // Filter posts with titles containing the word "React"
  const reactPosts = sortedPosts.filter(post => post.title.toLowerCase().includes('react'));
  // Filter posts with titles containing the word "AI"
  const aiPosts = sortedPosts.filter(post => post.title.toLowerCase().includes('ai'));

  // Get the most recent 3 posts
  const recentThreePosts = sortedPosts.slice(0, 3);
  const recentTwoReactPosts = reactPosts.slice(0, 2);
  const recentTwoAiPosts = aiPosts.slice(0, 1);

  return (
    <Box component="aside" sx={{ width: '170px', padding: 2, backgroundColor: '#f0f0f0', borderRight: '1px solid #ddd' }}>
      <Typography variant="h6" component="h2">
        Latest Blogs
      </Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
        Recent Posts
      </Typography>
      <List>
        {recentThreePosts && recentThreePosts.length > 0 ? (
          recentThreePosts.map((post) => (
            <ListItem key={post._id}>
              <Link href={`/post/${post._id}`} passHref>
                <ListItemText primary={post.title} />
              </Link>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No recent posts available" />
          </ListItem>
        )}
      </List>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
        Categories
      </Typography>
      
      {/* React Category */}
      <Typography variant="subtitle1" component="h3" sx={{ marginTop: 2 }}>
        React
      </Typography>
      <List>
        {recentTwoReactPosts && recentTwoReactPosts.length > 0 ? (
          recentTwoReactPosts.map((post) => (
            <ListItem key={post._id}>
              <Link href={`/post/${post._id}`} passHref>
                <ListItemText primary={post.title} />
              </Link>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No React posts available" />
          </ListItem>
        )}
      </List>

      {/* AI Category */}
      <Typography variant="subtitle1" component="h3" sx={{ marginTop: 1 }}>
        AI
      </Typography>
      <List>
        {recentTwoAiPosts && recentTwoAiPosts.length > 0 ? (
          recentTwoAiPosts.map((post) => (
            <ListItem key={post._id}>
              <Link href={`/post/${post._id}`} passHref>
                <ListItemText primary={post.title} />
              </Link>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No AI posts available" />
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default Sidebar;
