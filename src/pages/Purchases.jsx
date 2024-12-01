import React, { useEffect, useState } from 'react';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import { useDispatch, useSelector } from 'react-redux';
import ItemPurchases from '../components/purchases/ItemPurchases';

const Purchases = () => {

  const [buy, setBuy] = useState()

  const purchasesSlice = useSelector(store => store.purchasesSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, [])
  
useEffect(() => {
  if (purchasesSlice[0]) {
    setBuy(true)
  }
}, [purchasesSlice])
  
  return (
    <>
      <div>
        {
          buy?
            <div>
              {
                purchasesSlice.map(purchase => (
                  <ItemPurchases
                    key={purchase.id}
                    purchase={purchase}
                  />
                ) )
              }
            </div>
            :
            <div>

            </div>
        }
      </div>
    </>
  )
}

export default Purchases;