// import bcrypt from 'bcryptjs';
// import connectDB from '../../utils/db';
// import User from '../../models/user';
// import { sign } from 'jsonwebtoken';
// import cookie from 'cookie';

// connectDB();

// export default async (req, res) => {
//   const { method } = req;
//   switch (method) {
//     case 'POST':
//       const { email, password } = req.body;
//       const user = await User.findOne({ email });

//       if (!user || !bcrypt.compareSync(password, user.password)) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//       }

//       const token = sign({ userId: user._id }, process.env.NEXTAUTH_SECRET, { expiresIn: '1h' });

//       res.setHeader('Set-Cookie', cookie.serialize('token', token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV !== 'development',
//         maxAge: 3600,
//         sameSite: 'strict',
//         path: '/',
//       }));
//       res.status(200).json({ message: 'Login successful' });
//       break;

//     default:
//       res.setHeader('Allow', ['POST']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//       break;
//   }
// };

import bcrypt from 'bcryptjs';
import connectDB from '../../utils/db';
import User from '../../models/user';
import { sign } from 'jsonwebtoken';
import cookie from 'cookie';

connectDB();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'POST':
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = sign({ userId: user._id }, process.env.NEXTAUTH_SECRET, { expiresIn: '1h' });

      //console.log('Generated token:', token);  // Debugging line

      res.setHeader('Set-Cookie', cookie.serialize('token', token, {
        httpOnly: false, // Change to false to access it via js-cookie on the client side
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 3600,
        sameSite: 'strict',
        path: '/',
      }));

      res.status(200).json({ message: 'Login successful', user });
      break;

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
