
import { Route, Routes } from 'react-router-dom';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import ForgetPassword from '../Auth/ForgetPassword';
import Verify from '../Auth/Verify';
import Reset from '../Auth/Reset';



 
import Dashboard from '../../src/Dashboard/Dashboard';

import Categories from '../components/AdminPage/Categories';
import NewCategories from '../components/AdminPage/NewCategory';
import NewModules from '../components/AdminPage/NewModule';
import Modules from '../components/AdminPage/Modules';

function App() {
  return (
    <div>
        
       <Routes>
      
       <Route path="/admin" element={<Dashboard/>} /> 
      
       <Route path="/login" element={<Login />} />
      
        
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/verify" element={<Verify />} />
        
        <Route path="/categories" element={<Categories />} />
        <Route path="/newcategory" element={<NewCategories/>} />
        <Route path="/newmodules" element={<NewModules/>} />
        <Route path="/modules" element={<Modules />} />
        
        
      
      
      

       

      </Routes> 

      
 




 
    
    </div>
  );
}

export default App;
