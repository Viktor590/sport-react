import React from 'react';
import errorImg from '../../resources/img/404.png'
import './error.scss';


const Error = () => {
  return (
    <div className='error'>

      <img className='error__img' src={errorImg} alt="error" />

      <h2 className='error__dscr'>
        Page not found
      </h2>
      <h3>Sorry, we cant find what youre looking for</h3>
    </div>
  )
}
export default Error;