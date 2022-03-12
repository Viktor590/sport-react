import React from 'react';
import { Link } from 'react-router-dom';
import './teamCard.scss';

const TeamCard = (props) => {
  console.log(props.team);
  function View(arr) {
    if (arr.team === undefined || arr.team === [] || arr.team === "") return;

    const res = arr.team.map((item) => {
      return (
        <li
          key={item.id}
          className='teamCard'>
          <Link to="" className='teamCard__link'>
            <img className='teamCard__img' src={item.photo} alt={item.name} />
            <div className='teamCard__content'>
              <h2 className='teamCard__content-title'>{item.name}</h2>
              <p className='teamCard__content-dscr'>{item.city}</p>
              <p className='teamCard__content-dscr'>foundation: {item.founded}</p>
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
    // <li className='teamCard'>
    //   <a className='teamCard__link' href="#">
    //     <img className='teamCard__img' src="https://media.api-sports.io/football/teams/33.png" alt="" />
    //     <div className='teamCard__content'>
    //       <h2 className='teamCard__content-title'>Рудд</h2>
    //       <p className='teamCard__content-dscr'>fdsgf</p>
    //     </div>
    //   </a>
    // </li>
  )
}
export default TeamCard;