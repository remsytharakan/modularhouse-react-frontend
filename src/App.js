import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgetPassword from './Auth/ForgetPassword';
import Verify from './Auth/Verify';
import Reset from './Auth/Reset';
import Dashboard from '../src/Dashboard/Dashboard';
import Category from './components/AdminPage/Category';
import NewCategory from './components/AdminPage/NewCategory';
import NewModules from './components/AdminPage/NewModule';
import Modules from './components/AdminPage/Modules';
import Home from './pages/Home/Home';
import Checkout from './components/DetailSection/Checkout';
import DetailPage from './pages/Detail/DetailPage';
import AuthShield from './shields/AuthShield';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './Services/AdminServices';
import { useEffect } from 'react';
import { finishLoadingUser } from './redux/slices/userLoadingSlice';
import { setUser } from './redux/slices/userSlice';
import CollectionPage from './pages/Collection/CollectionPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './components/HomeSections/ContactUs';
import Navbar from './components/Navbar/Navbar';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem("authtoken")) {
      getCurrentUser()
        .then((response) => {
          dispatch(setUser(response?.data));
          dispatch(finishLoadingUser());
        })
        .catch((err) => {
          sessionStorage.removeItem("authtoken");
          dispatch(finishLoadingUser());
        });
    } else {
      dispatch(finishLoadingUser());
    }
  }, [dispatch]);

  // Check if the current route should display the Navbar
  const showNavbar = !(
    location.pathname.startsWith('/login') ||
    location.pathname.startsWith('/register') ||
    location.pathname.startsWith('/reset') ||
    location.pathname.startsWith('/forget') ||
    location.pathname.startsWith('/verify') ||
    location.pathname.startsWith('/admin')
  );

  return (
    <div>
      {showNavbar && <Navbar />} {/* Conditionally render Navbar based on the route */}

      <main>
        <Routes>
          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/verify/:id" element={<Verify />} />

          {/* Admin routes */}
          <Route
            path="/admin"
            element={
              <AuthShield>
                <Outlet /> {/* Nested routes will be rendered here */}
              </AuthShield>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="edit-category/:catId" element={<NewCategory />} />
            <Route path="category" element={<Category />} />
            <Route path="newcategory" element={<NewCategory />} />
            <Route path="edit-house/:houseId" element={<NewModules />} />
            <Route path="newmodule" element={<NewModules />} />
            <Route path="modules" element={<Modules />} />
          </Route>

          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/housedetails/:houseId" element={<DetailPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
