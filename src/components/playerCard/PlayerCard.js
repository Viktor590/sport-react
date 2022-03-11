import React from 'react';
import { Link } from 'react-router-dom';
import './playerCard.scss';

const PlayerCard = (props) => {
  console.log(props);
  function View(arr) {
    if (arr.players === undefined || arr.players.length < 1) return
    const res = arr.topPlayers.map((item) => {
      return (
        <li
          key={item.id}
          className='playerCard'>
          <Link to="" className='playerCard__link'>
            <img className='playerCard__img' src={item.photo} alt={item.name} />
            <div className='playerCard__content'>
              <h2 className='playerCard__content-title'>{item.name}</h2>
              <p className='playerCard__content-age'>{item.age} Years / {item.nationality}</p>
            </div>
          </Link>
        </li>
      )
    })
    return res
  }

  return (
    <>
      {/* <div></div> */}
      {View(props)}
    </>

  )
}
export default PlayerCard;