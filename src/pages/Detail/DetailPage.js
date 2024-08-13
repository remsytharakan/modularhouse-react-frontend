import React from 'react'

import DetailFirstSection  from '../../components/DetailSection/DetailFirstSection';
import ModuleDetails from '../../components/DetailSection/ModuleDetails';
import Customize from '../../components/DetailSection/Customize';
import CostDetails from '../../components/DetailSection/CostDetails';
import ProductDetails from '../../components/DetailSection/ProductDetails';

function DetailPage() {


  return (
    <div>
       
        

  
  <DetailFirstSection/>
<ModuleDetails/>
 <Customize/>
 
 <CostDetails/>

<ProductDetails/>     
    </div>
  )
}

export default DetailPage;