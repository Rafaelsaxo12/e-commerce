import React from 'react';
import { useForm } from 'react-hook-form';
import './styles/filterPrice.css'

const FilterPrice = ({setInputPrice}) => {

    const { handleSubmit, register } = useForm(); 

    const submit = (data) => {
        setInputPrice({
            min: data.min,
            max: data.max || Infinity
        })    
    }

  return (
    <form className='filterprice' onSubmit={handleSubmit(submit)}>
        <h3 className='filterprice__title'>Price</h3>
        <hr />
        <div className='filterprice__prices'>
            <label htmlFor="min">From</label>
            <input {...register('min')} id='min' type="text" />
        </div>
        <div className='filterprice__prices'>
            <label htmlFor="max">To</label>
            <input {...register('max')} id='max' type="text" />
        </div>
        <button className='filterprice__btn'>Filter price</button>
    </form>
  )
}

export default FilterPrice;