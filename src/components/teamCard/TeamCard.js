import React from 'react';

import './teamCard.scss';

const TeamCard = () => {
  return (
    <li className='teamCard'>
      <a className='teamCard__link' href="#">
        <img className='teamCard__img' src="https://media.api-sports.io/football/teams/33.png" alt="" />
        <div className='teamCard__content'>
          <h2 className='teamCard__content-title'>Рудд</h2>
          <p className='teamCard__content-dscr'>fdsgf</p>
        </div>
      </a>
    </li>
  )
}
export default TeamCard;