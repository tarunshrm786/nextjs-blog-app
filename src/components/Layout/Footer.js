// const Footer = () => {
//     return (
//       <footer>
//         <p>&copy; {new Date().getFullYear()} Lightning Leap Analytics</p>
//       </footer>
//     );
//   };
  
//   export default Footer;
  
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f8f8f8', padding: 2, borderTop: '1px solid #e7e7e7', textAlign: 'center', position: 'sticky',
        bottom: 0 }}>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Lightning Leap Analytics
      </Typography>
    </Box>
  );
};

export default Footer;
