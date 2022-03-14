import React from "react";
import { Link } from 'react-router-dom';
import './singlePlayer.scss';

const SinglePlayer = (props) => {

  const View = (props) => {
    const res = props.map((item) => {
      return (
        <div className="singlePlayer">
          <div className="singlePlayer__img-wrapper" >
            <img
              className="singlePlayer__img"
              src={item.photo}
              alt={item.name} />
          </div>

          <div className="singlePlayer__content-wrapper">
            <div className="singlePlayer__content-top">
              <h2 className="singlePlayer__content-title">
                {item.name}
              </h2>
              <Link to={`/singleTeam/${item.teamId[0]}`}>
                <img
                  className="singlePlayer__content-img"
                  src={item.teamLogo[0]}
                  alt="logo" />
              </Link>
            </div>
            <ul className="singlePlayer__content-list">
              <li className="singlePlayer__content-item">
                Position <span>{item.position[0]}</span>
              </li>
              <li className="singlePlayer__content-item">
                Height <span>{item.height}</span>
              </li>
              <li className="singlePlayer__content-item">
                Age <span>{item.age}</span>
              </li>
              <li className="singlePlayer__content-item">
                Weight <span>{item.weight}</span>
              </li>
              <li className="singlePlayer__content-item">
                Nationality <span>{item.nationality}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    })
    return res
  }

  return (

    <>
      {View(props.player)}
    </>
  )
}
export default SinglePlayer;