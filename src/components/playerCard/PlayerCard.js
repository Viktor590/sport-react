import React from 'react';
import { Link } from 'react-router-dom';
import './playerCard.scss';

const PlayerCard = (props) => {

  function View(arr) {
    if (arr.players === undefined) return
    const res = arr.players.map((item) => {
      return (
        <li
          key={item.id}
          className='playerCard'>
          <Link to={`/singlePlayer/${item.id}`} className='playerCard__link'>
            <img className='playerCard__img' src={item.photo} alt={item.name} />
            <div className='playerCard__content'>
              <h2 className='playerCard__content-title'>{item.name}</h2>
              <p className='playerCard__content-age'>{item.age} Years / {item.team[0]}</p>
            </div>
          </Link>
        </li>
      )
    })
    return res
  }

  return (
    <>
      {View(props)}
    </>

  )
}
export default PlayerCard;