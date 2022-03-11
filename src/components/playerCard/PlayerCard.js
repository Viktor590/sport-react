import React from 'react';
import './playerCard.scss';

const PlayerCard = () => {
  return (
    <li className='playerCard'>
      <a className='playerCard__link' href="#">
        <img className='playerCard__img' src="https://media.api-sports.io/football/players/276.png" alt="" />
        <div className='playerCard__content'>
          <h2 className='playerCard__content-title'>Рудд</h2>
          <p className='playerCard__content-age'>fdsgf</p>
        </div>
      </a>
    </li>
  )
}
export default PlayerCard;