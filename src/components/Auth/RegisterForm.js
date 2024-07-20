// // import { useState } from 'react';

// // const RegisterForm = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const res = await fetch('/api/auth/register', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ name, email, password }),
// //     });
// //     if (res.ok) {
// //       alert('Registration successful');
// //     } else {
// //       alert('Registration failed');
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <h2>Register</h2>
// //       <input
// //         type="text"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //         placeholder="Name"
// //         required
// //       />
// //       <input
// //         type="email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //         placeholder="Email"
// //         required
// //       />
// //       <input
// //         type="password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //         placeholder="Password"
// //         required
// //       />
// //       <button type="submit">Register</button>
// //     </form>
// //   );
// // };

// // export default RegisterForm;

// import { useState } from 'react';
// import { TextField, Button, Typography, Box } from '@mui/material';

// const RegisterForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/auth/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name, email, password }),
//     });
//     if (res.ok) {
//       alert('Registration successful');
//     } else {
//       alert('Registration failed');
//     }
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: '0 auto', marginLeft:'470px',  marginTop:'80px', padding: 2, border: '1px solid #ddd', borderRadius: 2, backgroundColor: '#f9f9f9' }}>
//       <Typography variant="h4" component="h2" gutterBottom>
//         Register
//       </Typography>
//       <TextField
//         label="Name"
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//         required
//         fullWidth
//         margin="normal"
//       />
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
//         Register
//       </Button>
//     </Box>
//   );
// };

// export default RegisterForm;

import { useState } from 'react';
import { TextField, Button, Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    if (res.ok) {
      alert('Registration successful');
    } else {
      alert('Registration failed');
    }
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
        Register
      </Typography>
      <TextField
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        fullWidth
        margin="normal"
      />
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
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;
