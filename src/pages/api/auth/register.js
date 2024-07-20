import bcrypt from 'bcryptjs';
import connectDB from '../../../utils/db';
import User from '../../../models/user';

connectDB();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'POST':
      const { name, email, password } = req.body;
      const hashedPassword = bcrypt.hashSync(password, 10);

      try {
        const newUser = new User({
          name,
          email,
          password: hashedPassword,
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        res.status(400).json({ message: 'User registration failed', error });
      }
      break;

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
