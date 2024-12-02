import React, { useEffect, useState } from 'react';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import { useDispatch, useSelector } from 'react-redux';
import ItemPurchases from '../components/purchases/ItemPurchases';
import './styes/purchases.css'
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
    <div className='purchases__fixingcontainer'>
      <div className='purchases__fixing'>
    🙏 We are fixing some problems, the page will be available soon🔧
      </div>
    </div>
      {/* <div>
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
      </div> */}
    </>
  )
}

export default Purchases;