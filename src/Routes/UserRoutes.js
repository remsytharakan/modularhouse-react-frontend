import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import DetailPage from '../pages/Detail/DetailPage';
function UserRoutes() {
    return (
      <div>
          <div>
          <Navbar />
        </div>  
         <Routes>
        
         <Route path="/" element={<Home/>} /> 
         <Route path="/details" element={<DetailPage/>} /> 
        
        
  
         
  
        </Routes> 
  
         {/* <div>
          <Footer />
        </div>  */}
   
  
  
  
  
   
      
      </div>
    );
  }
  
  export default UserRoutes;