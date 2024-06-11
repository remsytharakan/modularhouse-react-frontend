import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Navbar from '../components/Navbar/Navbar';
function UserRoutes() {
    return (
      <div>
          <div>
          <Navbar />
        </div>  
         <Routes>
        
         <Route path="/home" element={<Home/>} /> 
         
        
        
  
         
  
        </Routes> 
  
         {/* <div>
          <Footer />
        </div>  */}
   
  
  
  
  
   
      
      </div>
    );
  }
  
  export default UserRoutes;