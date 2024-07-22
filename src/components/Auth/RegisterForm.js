import { useState } from 'react';
import { TextField, Button, Typography, Box, CircularProgress, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      setLoading(false);
      if (res.ok) {
        toast.success('Registration successful');
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || 'Registration failed');
      }
    } catch (error) {
      setLoading(false);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        marginLeft: isSmallScreen ? 'auto' : '450px',
        marginRight: isSmallScreen ? 'auto' : '0',
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
        error={!!errors.name}
        helperText={errors.name}
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
        error={!!errors.email}
        helperText={errors.email}
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
        error={!!errors.password}
        helperText={errors.password}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={loading}
        sx={{
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
      >
        {loading ? <CircularProgress size={24} /> : 'Register'}
      </Button>
      <ToastContainer />
    </Box>
  );
};

export default RegisterForm;
