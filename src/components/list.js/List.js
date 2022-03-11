import React from 'react';
import './list.scss';

const List = (props) => {
  return (
    <ul className='list'>
      {props.content}
    </ul>
  )
}
export default List;