import React, { useEffect } from 'react';
import ProdSlider from '../components/prodInfo/ProdSlider';
import ProdSimilar from '../components/prodInfo/ProdSimilar';
import ProdDetail from '../components/prodInfo/ProdDetail';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import './styes/prodInfo.css'

const ProdInfo = () => {

  const {id} = useParams();
  
  const dispatch = useDispatch();
  
  const products = useSelector(store => store.products);

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])
  
  const product = products?.filter(prod => prod.id ===+id)[0]

  return (
    <div className='prodinfo'>
      <ProdSlider
        product={product}
      />
      <ProdDetail
        product={product}
      />
      <ProdSimilar
        product={product}
      />
    </div>
  )
}

export default ProdInfo;