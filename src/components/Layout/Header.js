// import Link from 'next/link';
// import { useState, useContext } from 'react';
// import AuthContext from '../../context/AuthContext';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';

// const CustomAppBar = styled(AppBar)({
//   backgroundColor: '#fff',
//   color: '#000',
// });

// const CustomButton = styled(Button)({
//   color: '#000',
//   '&:hover': {
//     backgroundColor: 'rgba(0, 0, 0, 0.08)',
//   },
// });

// const Header = () => {
//   const { user, logout } = useContext(AuthContext);
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const drawerContent = (
//     <List>
//       <Link href="/" passHref>
//         <ListItem button component="a">
//           <ListItemText primary="Tech Blogs" />
//         </ListItem>
//       </Link>
//       <Link href="/" passHref>
//         <ListItem button component="a">
//           <ListItemText primary="Home" />
//         </ListItem>
//       </Link>
//       <Link href="/" passHref>
//         <ListItem button component="a">
//           <ListItemText primary="About Us" />
//         </ListItem>
//       </Link>
//       <Link href="/" passHref>
//         <ListItem button component="a">
//           <ListItemText primary="Write with Us" />
//         </ListItem>
//       </Link>
//       {user ? (
//         <>
//           <Link href="/post/new" passHref>
//             <ListItem button component="a">
//               <ListItemText primary="New Post" />
//             </ListItem>
//           </Link>
          
//           <ListItem button onClick={logout}>
//             <ListItemText primary="Logout" />
//           </ListItem>
//         </>
//       ) : (
//         <>
//           <Link href="/login" passHref>
//             <ListItem button component="a">
//               <ListItemText primary="Login" />
//             </ListItem>
//           </Link>
//           <Link href="/register" passHref>
//             <ListItem button component="a">
//               <ListItemText primary="Register" />
//             </ListItem>
//           </Link>
//         </>
//       )}
//     </List>
//   );

//   return (
//     <>
//       <CustomAppBar position="static">
//         <Toolbar>
//           {isSmallScreen ? (
//             <>
//               <IconButton
//                 edge="start"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={toggleDrawer(true)}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Drawer
//                 anchor="left"
//                 open={drawerOpen}
//                 onClose={toggleDrawer(false)}
//               >
//                 {drawerContent}
//               </Drawer>
//             </>
//           ) : (
//             <>
//               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                 <Link href="/" passHref>
//                   <CustomButton>Tech Blogs</CustomButton>
//                 </Link>
//                 <Link href="/" passHref>
//                   <CustomButton>Home</CustomButton>
//                 </Link>
//                 <Link href="/" passHref>
//                   <CustomButton>About Us</CustomButton>
//                 </Link>
//                 <Link href="/" passHref>
//                   <CustomButton>Write with Us</CustomButton>
//                 </Link>
//               </Typography>
//               {user ? (
//                 <>
//                   <Link href="/post/new" passHref>
//                     <CustomButton>New Post</CustomButton>
//                   </Link>
//                   <CustomButton onClick={logout}>Logout</CustomButton>
//                 </>
//               ) : (
//                 <>
//                   <Link href="/login" passHref>
//                     <CustomButton>Login</CustomButton>
//                   </Link>
//                   <Link href="/register" passHref>
//                     <CustomButton>Register</CustomButton>
//                   </Link>
//                 </>
//               )}
//             </>
//           )}
//         </Toolbar>
//       </CustomAppBar>
//     </>
//   );
// };

// export default Header;

import Link from 'next/link';
import { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const CustomAppBar = styled(AppBar)({
  backgroundColor: '#fff',
  color: '#000',
});

const CustomButton = styled(Button)({
  color: '#000',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
});

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <List>
      <Link href="/" passHref>
        <ListItem button component="a">
          <ListItemText primary="Tech Blogs" />
        </ListItem>
      </Link>
      <Link href="/" passHref>
        <ListItem button component="a">
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link href="/" passHref>
        <ListItem button component="a">
          <ListItemText primary="About Us" />
        </ListItem>
      </Link>
      <Link href="/" passHref>
        <ListItem button component="a">
          <ListItemText primary="Write with Us" />
        </ListItem>
      </Link>
      {user ? (
        <>
          <Link href="/post/new" passHref>
            <ListItem button component="a">
              <ListItemText primary="New Post" />
            </ListItem>
          </Link>
          <Link href="/account" passHref>
            <ListItem button component="a">
              <ListItemText primary="My Account" />
            </ListItem>
          </Link>
          <ListItem button onClick={logout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </>
      ) : (
        <>
          <Link href="/login" passHref>
            <ListItem button component="a">
              <ListItemText primary="Login" />
            </ListItem>
          </Link>
          <Link href="/register" passHref>
            <ListItem button component="a">
              <ListItemText primary="Register" />
            </ListItem>
          </Link>
        </>
      )}
    </List>
  );

  return (
    <>
      <CustomAppBar position="static">
        <Toolbar>
          {isSmallScreen ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawerContent}
              </Drawer>
            </>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link href="/" passHref>
                  <CustomButton>Tech Blogs</CustomButton>
                </Link>
                <Link href="/" passHref>
                  <CustomButton>Home</CustomButton>
                </Link>
                <Link href="/" passHref>
                  <CustomButton>About Us</CustomButton>
                </Link>
                <Link href="/" passHref>
                  <CustomButton>Write with Us</CustomButton>
                </Link>
              </Typography>
              {user ? (
                <>
                  <Link href="/post/new" passHref>
                    <CustomButton>New Post</CustomButton>
                  </Link>
                  <Link href="/account" passHref>
                    <CustomButton>My Account</CustomButton>
                  </Link>
                  <CustomButton onClick={logout}>Logout</CustomButton>
                </>
              ) : (
                <>
                  <Link href="/login" passHref>
                    <CustomButton>Login</CustomButton>
                  </Link>
                  <Link href="/register" passHref>
                    <CustomButton>Register</CustomButton>
                  </Link>
                </>
              )}
            </>
          )}
        </Toolbar>
      </CustomAppBar>
    </>
  );
};

export default Header;
