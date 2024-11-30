import React from 'react';
import ProdSlider from '../components/hooks/prodInfo/prodSlider';
import ProdDetail from '../components/hooks/prodInfo/prodDetail';

const ProdInfo = () => {
  return (
    <div>
      <ProdSlider/>
      <ProdDetail/>
      <ProdSimilar/>
    </div>
  )
}

export default ProdInfo;