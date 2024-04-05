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
        <Route path="/reset" element={<Reset />} />
      </Routes>

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
