  import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f8f8f8', padding: 2, borderTop: '1px solid #e7e7e7', textAlign: 'center',
        bottom: 0 }}>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Developed By Tarun Sharma
      </Typography>
    </Box>
  );
};

export default Footer;
