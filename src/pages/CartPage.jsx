import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProdsThunk } from '../store/slices/cart.slice';
import ItemCart from '../components/cartPage/ItemCart';

const CartPage = () => {

  const cart = useSelector((store) => store.cartSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProdsThunk());
  }, []);

  // console.log(cart);
  
  return (
    <div>
      {
        cart.map(prod => (
          <ItemCart
            key={prod.id}
            prod={prod}
          />
        ))
      }
    </div>
  )
}

export default CartPage;