import '../styles/globals.css';
import { AuthProvider } from '../context/AuthContext';
import { PostProvider } from '../context/PostContext';
import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';
import Footer from '../components/Layout/Footer';
import MainLayout from '../components/Layout/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
           <Header />
        <MainLayout>
      <PostProvider>
        {/* <Header /> */}
        <div className="main-content">
          {/* <Sidebar /> */}
          <Component {...pageProps} />
          {/* <Sidebar /> */}
        </div>
        {/* <Footer /> */}
      </PostProvider>
      </MainLayout>
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;
