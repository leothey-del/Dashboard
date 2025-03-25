import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Users from './pages/users/Users';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import './styles/global.scss'
function App() {
  // Layout component for shared UI structure
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet /> {/* Renders child routes */}
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  // Router configuration
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/users',
          element: <Users />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/users/:id',
          element: <User />,
        },
        {
          path: '/products/:id',
          element: <Product />,
        },
      ],
    },
    {
      path:'/login',
      element:<Login/>
    }
  ]);

  // Render the RouterProvider with the router
  return <RouterProvider router={router} />;
}

export default App;