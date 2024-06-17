import React from 'react'

import DetailFirstSection  from '../../components/DetailSection/DetailFirstSection';
import ModuleDetails from '../../components/DetailSection/ModuleDetails';
import Customize from '../../components/DetailSection/Customize';
import CostDetails from '../../components/DetailSection/CostDetails';
import ProductDetails from '../../components/DetailSection/ProductDetails';
import Navbar from '../../components/Navbar/Navbar';
function DetailPage() {


  return (
    <div>
          <Navbar />
        

  
  <DetailFirstSection/>
<ModuleDetails/>
 <Customize/>
 
 <CostDetails/>

<ProductDetails/>     
    </div>
  )
}

export default DetailPage;