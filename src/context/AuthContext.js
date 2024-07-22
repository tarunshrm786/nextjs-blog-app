// import { createContext, useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import cookie from 'js-cookie';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const checkUserLoggedIn = async () => {
//       const res = await fetch('/api/auth/user');
//       if (res.ok) {
//         const data = await res.json();
//         setUser(data.user);
//       } else {
//         setUser(null);
//       }
//     };

//     checkUserLoggedIn();
//   }, []);

//   const login = async (email, password) => {
//     const res = await fetch('/api/auth', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });
//     if (res.ok) {
//       setUser(await res.json());
//       router.push('/');
//     }
//   };

//   const logout = async () => {
//     const res = await fetch('/api/auth/logout', {
//       method: 'POST',
//     });
//     if (res.ok) {
//       cookie.remove('token', { path: '/' });
//       setUser(null);
//       router.push('/login');
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;

// import { createContext, useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import cookie from 'js-cookie';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const checkUserLoggedIn = async () => {
//       const token = cookie.get('token');
//       //('Token from cookies inside AuthContext useEffect:', token);  // Debugging line
//       if (token) {
//         const res = await fetch('/api/auth/user', {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         if (res.ok) {
//           const data = await res.json();
//           setUser({ ...data.user, token });
//         } else {
//           setUser(null);
//         }
//       }
//     };

//     checkUserLoggedIn();
//   }, []);

//   const login = async (email, password) => {
//     const res = await fetch('/api/auth', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });
//     if (res.ok) {
//       const data = await res.json();
//       const token = cookie.get('token');
//       //console.log('Token from cookies after login:', token);  // Debugging line
//       setUser({ ...data.user, token });
//       router.push('/');
//     }
//   };

//   const logout = async () => {
//     const res = await fetch('/api/auth/logout', {
//       method: 'POST',
//     });
//     if (res.ok) {
//       cookie.remove('token', { path: '/' });
//       setUser(null);
//       router.push('/login');
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;


import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const token = cookie.get('token');
      if (token) {
        const res = await fetch('/api/auth/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          setUser({ ...data.user, token });
        } else {
          setUser(null);
        }
      }
    };

    checkUserLoggedIn();
  }, []);

  const login = async (email, password) => {
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      const data = await res.json();
      const token = cookie.get('token');
      setUser({ ...data.user, token });
      router.push('/');
      return { success: true };
    } else {
      const errorData = await res.json();
      return { success: false, message: errorData.message || 'Login failed' };
    }
  };

  const logout = async () => {
    const res = await fetch('/api/auth/logout', {
      method: 'POST',
    });
    if (res.ok) {
      cookie.remove('token', { path: '/' });
      setUser(null);
      router.push('/login');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
