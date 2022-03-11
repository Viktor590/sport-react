import React, { useState } from 'react';
import searchSvg from '../../resources/img/search.svg';
import './search.scss';

const Search = (props) => {

  const [inputValue, setInputValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    props.onAdd(inputValue);
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <input
        className='search'
        type="text"
        placeholder='Search...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='search__button'>
        <img className='search__button-img' src={searchSvg} alt="search" />
      </button>
    </form>
  )
}
export default Search;