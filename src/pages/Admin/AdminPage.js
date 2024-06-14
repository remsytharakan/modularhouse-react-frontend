import React,{useEffect} from 'react'
import Categories from '../AdminPage/Categories';
 import NewCategory from '../AdminPage/NewCategory';
 import Modules from '../AdminPage/Modules';
 import NewModule from '../AdminPage/NewModule';
function AdminPage() {
  useEffect(()=>{
window.scrollTo(0,0);
  })

  return (
    <div>
       <Categories/>   
    <NewCategory/>    
     <Modules/> 
  

 <NewModule/> 
    </div>
  )
}

export default AdminPage