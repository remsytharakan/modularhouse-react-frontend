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
import Custom2 from './components/Custom2/Custom2';
import Custom2header from './components/Custom2header/Custom2header';
import Custom3header from './components/Custom3header/Custom3header';
import Custom3 from './components/Custom3/Custom3';
import Custom1 from './components/Custom1/Custom1';
import CostHeader from './components/CostHeader/CostHeader';
import CostDetail from './components/CostDetail/CostDetail';
import Custom4 from './components/Custom4/Custom4';
 import DetailPage from './pages/Home/DetailPage';
function App() {
  return (
    <div>
        <div>
        <Navbar />
      </div> 
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/DetailPage" element={<DetailPage />} />
      </Routes> 
{/* 
       <div>
        <Footer />
      </div>  */}
 
 
    </div>
  );
}

export default App;
