import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgetPassword from './Auth/ForgetPassword';
import Verify from './Auth/Verify';
import Reset from './Auth/Reset';
import { AppRegistrationRounded } from '@mui/icons-material';
import AdminPage from './pages/Home/AdminPage';
 import DetailPage from './pages/Home/DetailPage';
 
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
        <div>
        <Navbar />
      </div> 
       <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/" element={<Dashboard/>} />
       <Route path="/Admin" element={<AdminPage />} />
       <Route path="/DetailPage" element={<DetailPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/verify" element={<Verify />} />
       
       

      </Routes> 

       <div>
        <Footer />
      </div> 
 




 
    
    </div>
  );
}

export default App;
