import React,{useEffect} from 'react'
import Custom1 from '../../components/Custom1/Custom1';
import Custom2 from '../../components/Custom2/Custom2';
import Custom4 from '../../components/Custom4/Custom4';
import Custom3 from '../../components/Custom3/Custom3';
import CostDetail from '../../components/CostDetail/CostDetail';
import CostHeader from '../../components/Custom2header/Custom2header';
import Custom2header from '../../components/Custom2header/Custom2header';
import Custom3header from '../../components/Custom3header/Custom3header';
function DetailPage() {
  useEffect(()=>{
window.scrollTo(0,0);
  })

  return (
    <div>
        <Custom1/>
  <Custom2header/> 
     <Custom2/> 
       <Custom3header/> 
   <Custom3/> 
 <CostHeader/> 
   <CostDetail/>  
   <Custom4/> 
    </div>
  )
}

export default DetailPage