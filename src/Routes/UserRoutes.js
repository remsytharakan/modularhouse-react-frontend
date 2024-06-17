import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';

import DetailPage from '../pages/Detail/DetailPage';
function UserRoutes() {
    return (
      <div>
            
         <Routes>
        
         <Route path="/" element={<Home/>} /> 
         <Route path="/details" element={<DetailPage/>} /> 
        
        
  
         
  
        </Routes> 
  
         
   
  
  
  
  
   
      
      </div>
    );
  }
  
  export default UserRoutes;