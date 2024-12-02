import React from 'react';
import './styles/prodCard.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { postProductsThunk } from '../../store/slices/cart.slice';

const ProdCard = ({ prod }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDetail = () => {
        navigate(`/product/${prod.id}`);
    };

    const handleAddCart = () => {
        dispatch(postProductsThunk({
            quantity: 1,
            productId: prod.id
        }));
    };

    return (
        <article className='prodcard'>
            <figure onClick={handleDetail} className='prodcard__img'>
                <img src={prod.images[0].url} alt="product image" />
                <img src={prod.images[1].url} alt="product image" />
            </figure>
            <hr className='prodcard__div' />
            <ul className='prodcard__list'>
                <li className='prodcard__item'><span className='brand'>{prod.brand}</span><span>{prod.title}</span></li>
                <li className='prodcard__item'><span>Price</span><span>$ {prod.price}</span></li>
            </ul>
            <div className='prodcard__buttons'>
                <button onClick={handleDetail}>Detail</button>
                <button className='prodcard__icon' onClick={handleAddCart}>
                    <ShoppingCartIcon />
                </button>
            </div>
        </article>
    );
};

export default ProdCard;
