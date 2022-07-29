import React from 'react'
import { useRef } from 'react'
import { filteredProducts } from '../features/tasks/tasksSlice';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const inputRef = useRef('');
  const disptach = useDispatch() ;
  const filterProducts =() => {
  disptach(filteredProducts(inputRef.current.value));
  console.log(inputRef.current.value);
  }
  return (
    <div>
       <input type="text"  ref={inputRef} onChange={filterProducts} placeholder='search for products' className='mb-2 text-white pl-4 py-2 rounded-md outline  bg-gray-700 w-full border-2 border-gray-200'  />
    </div>
  )
}

export default SearchBar