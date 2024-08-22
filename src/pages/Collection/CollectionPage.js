import React from 'react'
import HouseCollection from '../../components/CollectionSection/HouseCollection';
import PremiumHouses from '../../components/CollectionSection/PremiumHouses';
import Navbar from '../../components/Navbar/Navbar';
import FooterBox from '../../components/CollectionSection/FooterBox';




function CollectionPage() {
  return (
    <div>




       <div>
<HouseCollection/>
</div>

<div>
<PremiumHouses/>
 </div>
  <div>
<FooterBox/>
 </div>
    </div>
  )
}

export default CollectionPage
