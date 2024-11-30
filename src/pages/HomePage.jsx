import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import ProdCard from '../components/homePage/ProdCard';
import './styes/homePage.css'
import FilterPrice from '../components/homePage/FilterPrice';
import FilterSelect from '../components/homePage/FilterSelect';

const HomePage = () => {

  const [inputValue, setInputValue] = useState('')
  const [inputPrice, setInputPrice] = useState({
    min: 0,
    max: Infinity
  })
  const [categoryValue, setCategoryValue] = useState('')

  const products = useSelector((store) => store.products); 

  const dispatch = useDispatch();

  // console.log(typeof(categoryValue));

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [])
  
    const textInput = useRef();

    const handleChange = () => {
      setInputValue(textInput.current.value.trim().toLowerCase());
    }

    const cbFilter = (prod) => {
      const name = prod.title.toLowerCase().includes(inputValue);
      const price = +prod.price <= +inputPrice.max && +prod.price >= +inputPrice.min
      const category = categoryValue==='' ? true : prod.categoryId === +categoryValue
      return name && price && category;
    }

  return (
    <div className='homepage'>
      
      <div className='homepage__filters'>
        <div>
          <input ref={textInput} onChange={handleChange} type="text" />
          <button>🔍</button>
        </div>
        <FilterPrice 
          setInputPrice={setInputPrice}
        />
        <FilterSelect
            setCategoryValue={setCategoryValue}
        />
      </div>
      <div className='homepage__container'>
        {
          products?.filter(cbFilter).map((prod) => (
            <ProdCard
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomePage;