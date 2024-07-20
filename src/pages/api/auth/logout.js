import cookie from 'cookie';

export default (req, res) => {
  res.setHeader('Set-Cookie', cookie.serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: -1,
    sameSite: 'strict',
    path: '/',
  }));
  res.status(200).json({ message: 'Logout successful' });
};
