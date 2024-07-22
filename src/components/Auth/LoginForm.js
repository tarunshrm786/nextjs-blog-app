// import { useState, useContext } from 'react';
// import AuthContext from '../../context/AuthContext';
// import { TextField, Button, Typography, Box, CircularProgress, useMediaQuery } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import Link from 'next/link';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { login } = useContext(AuthContext);
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTabletScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const result = await login(email, password);
//       if (result.success) {
//         toast.success('Login successful!');
//       } else {
//         toast.error(result.message || 'Invalid email or password');
//       }
//     } catch (err) {
//       toast.error('Invalid email or password');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         maxWidth: 400,
//         margin: '80px auto',
//         padding: 2,
//         border: '1px solid #ddd',
//         borderRadius: 2,
//         backgroundColor: '#f9f9f9',
//         ...(isSmallScreen && {
//           margin: '20px auto',
//           padding: '16px',
//         }),
//         ...(isTabletScreen && {
//           margin: '40px auto',
//           padding: '24px',
//           marginLeft: '100px',  // Add left margin for tablet screens
//         }),
//         ...(isLargeScreen && {
//           marginLeft: '450px', // Center form on large screens
//         }),
//       }}
//     >
//       <Typography variant="h4" component="h2" gutterBottom>
//         Login
//       </Typography>
//       <TextField
//         label="Email"
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//         fullWidth
//         margin="normal"
//       />
//       <Button
//         type="submit"
//         variant="contained"
//         fullWidth
//         sx={{
//           backgroundColor: 'black',
//           color: 'white',
//           '&:hover': {
//             backgroundColor: 'black',
//             color: 'white',
//           },
//         }}
//         disabled={loading}
//       >
//         {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Login'}
//       </Button>
//       <Typography variant="body2" sx={{ marginTop: 2, textAlign: 'center' }}>
//         Don't have an account?{' '}
//         <Link href="/register" legacyBehavior>
//           <a>
//             <Button variant="text" color="primary">
//               Register
//             </Button>
//           </a>
//         </Link>
//       </Typography>
//       <ToastContainer />
//     </Box>
//   );
// };

// export default LoginForm;

import { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { TextField, Button, Typography, Box, CircularProgress, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isTabletScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await login(email, password);
      if (result.success) {
        toast.success('Login successful!');
      } else {
        toast.error(result.message || 'Invalid email or password');
      }
    } catch (err) {
      toast.error('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        margin: '80px auto',
        padding: 2,
        border: '1px solid #ddd',
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
        ...(isSmallScreen && {
          margin: '20px auto',
          padding: '16px',
        }),
        ...(isTabletScreen && {
          margin: '40px auto',
          padding: '24px',
          marginLeft: '100px',  // Add left margin for tablet screens
        }),
        ...(isLargeScreen && {
          marginLeft: '450px', // Center form on large screens
        }),
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        fullWidth
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Login'}
      </Button>
      <Typography variant="body2" sx={{ marginTop: 2, textAlign: 'center' }}>
        Don&apos;t have an account?{' '}
        <Link href="/register" legacyBehavior>
          <a>
            <Button variant="text" color="primary">
              Register
            </Button>
          </a>
        </Link>
      </Typography>
      <ToastContainer />
    </Box>
  );
};

export default LoginForm;
