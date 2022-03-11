import React, { useState } from 'react';
import searchSvg from '../../resources/img/search.svg';
import './search.scss';

const Search = () => {
  return (
    <form className='form' action="">
      <input className='search' type="text" placeholder='Search...' />
      <button className='search__button'>
        <img className='search__button-img' src={searchSvg} alt="search" />
      </button>
    </form>
  )
}
export default Search;