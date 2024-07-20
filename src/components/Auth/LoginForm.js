// import { useState, useContext } from 'react';
// import AuthContext from '../../context/AuthContext';
// import { TextField, Button, Typography, Box } from '@mui/material';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useContext(AuthContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     login(email, password);
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: '0 auto', marginLeft:'470px',  marginTop:'80px', padding: 2, border: '1px solid #ddd', borderRadius: 2, backgroundColor: '#f9f9f9' }}>
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
//       <Button type="submit" variant="contained" color="primary" fullWidth>
//         Login
//       </Button>
//     </Box>
//   );
// };

// export default LoginForm;


import { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { TextField, Button, Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        margin: '0 auto',
        marginTop: '80px',
        padding: 2,
        border: '1px solid #ddd',
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
        ...(isSmallScreen && {
          margin: '20px auto',
          padding: '16px',
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
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
