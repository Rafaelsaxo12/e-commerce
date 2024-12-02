import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import ProdCard from '../components/homePage/ProdCard';
import './styes/homePage.css'
import FilterPrice from '../components/homePage/FilterPrice';
import FilterSelect from '../components/homePage/FilterSelect';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';

const body = document.querySelector('body')

const HomePage = () => {

  const [inputValue, setInputValue] = useState('')
  const [inputPrice, setInputPrice] = useState({
    min: 0,
    max: Infinity
  });
  const [menu, setMenu] = useState(false)

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

    const handleMenu = () => {
        setMenu(!menu)
    }

    const handleMode = () => {
      body.classList.toggle('dark');
    }
  return (
    <div className='homepage'>
      
      <div className={`homepage__filters ${menu && 'active'}`}>
        <button className={`classnew ${menu && 'active'}`} onClick={handleMenu}>X</button>
        <FilterPrice 
          setInputPrice={setInputPrice}
        />
        <FilterSelect
            setCategoryValue={setCategoryValue}
        />
        {/* <button onClick={handleMode}>Change mode</button> */}
      </div>
      <div className='homepage__search'>
        <input ref={textInput} onChange={handleChange} type="text" placeholder='What are you looking for?'/>
        <button>
          <SearchIcon/>
        </button>
      </div>
      <button className='homepage__filter' onClick={handleMenu}><FilterAltIcon/>Filters</button>
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