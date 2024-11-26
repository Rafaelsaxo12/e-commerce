import React from 'react';
import './styles/prodCard.css';
import { useNavigate } from 'react-router-dom';

const ProdCard = ({prod}) => {

    const navigate = useNavigate();

    const handleDetail = () => {
        navigate(`/product/${prod.id}`)
    }    

  return (
    <article className='prodcard'>
        <figure className='prodcard__img'>
            <img src={prod.images[0].url} alt="product image" />
        </figure>
        <hr className='prodcard__div'/>
        <ul className='prodcard__list'>
            <li className='prodcard__item'><span>{prod.brand}</span><span>{prod.title}</span></li>
            <li className='prodcard__item'><span>Price</span><span>{prod.price}</span></li>
        </ul>
        <div className='prodcard__buttons'>
            <button onClick={handleDetail}>Detail</button>
            <button>Add to cart</button>
        </div>
    </article>
  )
}

export default ProdCard;