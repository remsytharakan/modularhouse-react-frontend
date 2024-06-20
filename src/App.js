
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

import DetailPage from './pages/Detail/DetailPage';
import AuthShield from './shields/AuthShield';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './Services/AdminServices';
import { useEffect } from 'react';
import { finishLoadingUser } from './redux/slices/userLoadingSlice';
import { setUser } from './redux/slices/userSlice';



function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem("authtoken")) {
      getCurrentUser()
        .then((response) => {
          dispatch(setUser(response?.data));
          dispatch(finishLoadingUser());
        }).catch((err) => {
          sessionStorage.removeItem("authtoken");
          dispatch(finishLoadingUser());
        });
    } else {
      dispatch(finishLoadingUser());
    }
  }, [dispatch]);

  return (
    <div>
         
   <div>
   {/* <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/verify" element={<Verify />} />
        <Route
                path="/admin"
                element={
                    <AuthShield>
                        <Outlet />
                    </AuthShield>
                }
            >
        <Route path="/edit-category/:catId" element={<NewCategory />} /> 
        <Route path="/category" element={<Category />} />
        <Route path="/newcategory" element={<NewCategory />} />
        <Route path="/newmodules" element={<NewModules />} />
        <Route path="/modules" element={<Modules />} />
        </Route>

        <Route path="/" element={<Home/>} /> 
         <Route path="/details" element={<DetailPage/>} /> 
      </Routes> */}
      <Routes>
    {/* Public routes */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/reset" element={<Reset />} />
    <Route path="/forget" element={<ForgetPassword />} />
    <Route path="/verify/:id" element={<Verify />} />

    {/* Protected routes under /admin */}
    <Route
      path="/admin"
      element={
        <AuthShield>
          {/* <Dashboard /> */}
          <Outlet /> {/* This renders child routes */}
        </AuthShield>
      }
    >
        <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/edit-category/:catId" element={<NewCategory />} />
      <Route path="/admin/category" element={<Category />} />
      <Route path="/admin/newcategory" element={<NewCategory />} />
      <Route path="/admin/newmodule" element={<NewModules />} />
      <Route path="/admin/modules" element={<Modules />} />
    </Route>

    {/* Other routes */}
    <Route path="/" element={<Home />} />
    <Route path="/details" element={<DetailPage />} />
  </Routes>
   </div>
 
   
 
 



 
    
    </div>
  );
}

export default App;
