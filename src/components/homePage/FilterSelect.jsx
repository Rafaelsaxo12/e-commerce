import React, { useEffect, useRef } from 'react';
import useFetch from '../hooks/useFetch';
import './styles/filterSelect.css'
const FilterSelect = ({setCategoryValue}) => {

   const [categories, getCategories] = useFetch();

   useEffect(() => {
    getCategories('/categories');
   }, [])

   const itemSelect = useRef();

   const handleChange = () => {
    setCategoryValue(itemSelect.current.value);
   }
   
  return (
  <div className="filterselect-container">
    <select className="filterselect" ref={itemSelect} onChange={handleChange}>
      <option value="">Category</option>
      {categories?.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  </div>
  )
}

export default FilterSelect;