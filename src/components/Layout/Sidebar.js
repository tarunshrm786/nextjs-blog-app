// const Sidebar = () => {
//     return (
//       <aside>
//         <h2>Sidebar</h2>
//         {/* Add additional sidebar content here */}
//       </aside>
//     );
//   };
  
//   export default Sidebar;
  
// import { Box,Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';

// const Sidebar = () => {
//   return (
//     <Box component="aside" sx={{ width: '200px', padding: 2, backgroundColor: '#f0f0f0', borderRight: '1px solid #ddd' }}>
//       <Typography variant="h6" component="h2">
//         Sidebar
//       </Typography>
      

//       <Divider sx={{ marginY: 2 }} />
//       <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
//         Recent Posts
//       </Typography>
//       <List>
//         {/* Replace with dynamic content */}
//         <ListItem>
//           <ListItemText primary="Post Title 1" />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Post Title 2" />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Post Title 3" />
//         </ListItem>
//       </List>
//       <Divider sx={{ marginY: 2 }} />
//       <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
//         Categories
//       </Typography>
//       <List>
//         {/* Replace with dynamic content */}
//         <ListItem>
//           <ListItemText primary="Category 1" />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Category 2" />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Category 3" />
//         </ListItem>
//       </List>


//     </Box>
//   );
// };

// export default Sidebar;



// import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
// import Link from 'next/link';

// const Sidebar = ({ recentPosts }) => {
//   return (
//     <Box component="aside" sx={{ width: '200px', padding: 2, backgroundColor: '#f0f0f0', borderRight: '1px solid #ddd' }}>
//       <Typography variant="h6" component="h2">
//         Sidebar
//       </Typography>
//       <Divider sx={{ marginY: 2 }} />
//       <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
//         Recent Posts
//       </Typography>
//       <List>
//         {recentPosts && recentPosts.length > 0 ? (
//           recentPosts.map((post) => (
//             <ListItem key={post._id}>
//               <Link href={`/post/${post._id}`}>
//                 <a>
//                   <ListItemText primary={post.title} />
//                 </a>
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
//       <List>
//         {/* Replace with dynamic content */}
//         <ListItem>
//           <ListItemText primary="Category 1" />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Category 2" />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Category 3" />
//         </ListItem>
//       </List>
//     </Box>
//   );
// };

// export default Sidebar;

// import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
// import Link from 'next/link';

// const Sidebar = ({ recentPosts }) => {
//   console.log('Received recent posts:', recentPosts); // Debugging log

//   return (
//     <Box component="aside" sx={{ width: '200px', padding: 2, backgroundColor: '#f0f0f0', borderRight: '1px solid #ddd' }}>
//       <Typography variant="h6" component="h2">
//         Sidebar
//       </Typography>
//       <Divider sx={{ marginY: 2 }} />
//       <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
//         Recent Posts
//       </Typography>
//       <List>
//         {recentPosts && recentPosts.length > 0 ? (
//           recentPosts.map((post) => (
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

//       {/* <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
//         Categories
//       </Typography> */}
//       {/* <List>
    
//         <ListItem>
//           <ListItemText primary="Category 1" />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Category 2" />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Category 3" />
//         </ListItem>
//       </List> */}

//     </Box>
//   );
// };

// export default Sidebar;

// import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
// import Link from 'next/link';

// const Sidebar = ({ recentPosts }) => {
//   console.log('Received recent posts:', recentPosts); // Debugging log

//   // Filter posts with titles containing the word "React"
//   const reactPosts = recentPosts.filter(post => post.title.toLowerCase().includes('react'));
//   const aiPosts = recentPosts.filter(post => post.title.toLowerCase().includes('ai'));


//   return (
//     <Box component="aside" sx={{ width: '200px', padding: 2, backgroundColor: '#f0f0f0', borderRight: '1px solid #ddd' }}>
//       <Typography variant="h6" component="h2">
//         Sidebar
//       </Typography>
//       <Divider sx={{ marginY: 2 }} />
//       <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
//         Recent Posts
//       </Typography>
//       <List>
//         {recentPosts && recentPosts.length > 0 ? (
//           recentPosts.map((post) => (
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
//       <Typography variant="subtitle1" component="h3" sx={{ marginTop: 2 }}>
//         React
//       </Typography>
//       <List>
//         {reactPosts && reactPosts.length > 0 ? (
//           reactPosts.map((post) => (
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

//       <Typography variant="subtitle1" component="h3" sx={{ marginTop: 0 }}>
//         AI
//       </Typography>
//       <List>
//         {aiPosts && aiPosts.length > 0 ? (
//           aiPosts.map((post) => (
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
  console.log('Received recent posts:', recentPosts); // Debugging log

  // Filter posts with titles containing the word "React"
  const reactPosts = recentPosts.filter(post => post.title.toLowerCase().includes('react'));
  // Filter posts with titles containing the word "AI"
  const aiPosts = recentPosts.filter(post => post.title.toLowerCase().includes('ai'));

  // Get the most recent 3 posts
  const recentThreePosts = recentPosts.slice(0, 3);
  const recentTwoReactPosts = recentPosts.slice(0, 1);
  const recentTwoaiPosts = aiPosts.slice(0, 2);

  return (
    <Box component="aside" sx={{ width: '170px', padding: 2, backgroundColor: '#f0f0f0', borderRight: '1px solid #ddd' }}>
      <Typography variant="h6" component="h2">
        Latest Updates
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
        {recentTwoaiPosts && recentTwoaiPosts.length > 0 ? (
          recentTwoaiPosts.map((post) => (
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
