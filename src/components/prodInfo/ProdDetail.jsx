import React from 'react';

const ProdDetail   = ({product}) => {
  return (
    <div>
      <span>{}</span>
      <h3>{}</h3>
      <p>{}</p>
      <div>
        <ul>
          <li>Price</li>
          <li>$ {}</li>
        </ul>
        <div>
          <span>Quantity</span>
          <button>-</button>
          <span></span>
          <button>+</button>
        </div>
      </div>
      <button>Add to cart</button>
    </div>
  )
}

export default ProdDetail;