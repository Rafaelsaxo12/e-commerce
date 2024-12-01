import React, { useEffect } from 'react';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import { useDispatch, useSelector } from 'react-redux';

const Purchases = () => {

  const purchasesSlice = useSelector(store => store.purchasesSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, [])
  console.log(purchasesSlice); 
  
  return (
    <div>Purchases</div>
  )
}

export default Purchases;