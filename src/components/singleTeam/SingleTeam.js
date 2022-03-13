import React from "react";
import './singleTeam.scss';

const SingleTeam = (props) => {
  return (
    <div className="singleTeam">
      <div className="singleTeam__top ">
        <div
          className="singleTeam__img-wrapper">
          <img
            className="singleTeam__img"
            src="https://media.api-sports.io/football/teams/33.png"
            alt="" />
        </div>

        <div className="singleTeam__content-wrapper">
          <h2 className="singleTeam__content-title">
            MAnchester
          </h2>

          <ul className="singleTeam__content-list">
            <li className="singleTeam__content-item">
              Year of foundation<span>1878</span>
            </li>
            <li className="singleTeam__content-item">
              Country<span>England</span>
            </li>
            <li className="singleTeam__content-item">
              Stadium <span>Old Trafford</span>
            </li>
            <li className="singleTeam__content-item">
              Capacity <span>76212</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="singleTeam__bottom">

        <h3 className="singleTeam__bottom-title">
          Roster
        </h3>
        <ul className="singleTeam__bottom-item">
          <li className="singleTeam__bottom-list">
            <div className="singleTeam__bottom-list__left">
              <p2 className="singleTeam__bottom-list__par">#</p2>
              <h4 className="singleTeam__bottom-list__title">Player</h4>
            </div>
            <div className="singleTeam__bottom-list__right">
              <h4 className="singleTeam__bottom-list__dscr">Position</h4>
              <h4 className="singleTeam__bottom-list__dscr">Age</h4>
            </div>
          </li>
          <li className="singleTeam__bottom-list">
            <a className="singleTeam__bottom-link" href="#">
              <div className="singleTeam__bottom-list__left">
                <p2 className="singleTeam__bottom-num">10</p2>
                <div className="singleTeam__player-img__wrapper">
                  <img className="singleTeam__player-img" src="https://media.api-sports.io/football/players/882.png" alt="" />
                  <h4 className="singleTeam__img-title">David de jea</h4>
                </div>
              </div>
              <div className="singleTeam__list-right">
                <h4 className="singleTeam__bottom-list__dscr">attacker</h4>
                <h4 className="singleTeam__bottom-list__dscr">22</h4>
              </div>
            </a>
          </li>
        </ul>

      </div>
    </div>
  )
}
export default SingleTeam;