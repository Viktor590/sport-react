import React from "react";
import { Link } from "react-router-dom";
import './singleTeam.scss';

const SingleTeam = (props) => {

  const ViewTop = (props) => {
    if (props === undefined) return
    const res = props.map((item) => {
      const { id, founded, name, capacity, country, stadium, logo } = item;
      return (
        <div key={id} className="singleTeam__top ">
          <div
            className="singleTeam__img-wrapper">
            <img
              className="singleTeam__img"
              src={logo}
              alt={name} />
          </div>

          <div className="singleTeam__content-wrapper">
            <h2 className="singleTeam__content-title">
              {name}
            </h2>

            <ul className="singleTeam__content-list">
              <li className="singleTeam__content-item">
                Year of foundation<span>{founded}</span>
              </li>
              <li className="singleTeam__content-item">
                Country<span>{country}</span>
              </li>
              <li className="singleTeam__content-item">
                Stadium <span>{stadium}</span>
              </li>
              <li className="singleTeam__content-item">
                Capacity <span>{capacity}</span>
              </li>
            </ul>
          </div>
        </div>
      )

    })
    return res
  }

  const ViewRoster = (props) => {
    if (props === undefined) return
    const res = props.map((item) => {
      return item.map((el) => {
        return (
          <li
            key={el.id}
            className="singleTeam__bottom-list">
            <Link to={`/singlePlayer/${el.id}`} className="singleTeam__bottom-link">
              <div className="singleTeam__bottom-list__left">
                <p className="singleTeam__bottom-num">{el.number}</p>
                <div className="singleTeam__player-img__wrapper">
                  <img className="singleTeam__player-img" src={el.photo} alt={el.name} />
                  <h4 className="singleTeam__img-title">{el.name}</h4>
                </div>
              </div>
              <div className="singleTeam__list-right">
                <h4 className="singleTeam__bottom-list__dscr">{el.position}</h4>
                <h4 className="singleTeam__bottom-list__dscr">{el.age}</h4>
              </div>
            </Link>
          </li>
        )
      })

    })
    return res
  }




  return (
    <div className="singleTeam">
      <>
        {ViewTop(props.team)}
      </>
      <div className="singleTeam__bottom">

        <h3 className="singleTeam__bottom-title">
          Roster
        </h3>
        <ul className="singleTeam__bottom-item">
          <li className="singleTeam__bottom-list">
            <div className="singleTeam__bottom-list__left">
              <p className="singleTeam__bottom-list__par">#</p>
              <h4 className="singleTeam__bottom-list__title">Player</h4>
            </div>
            <div className="singleTeam__bottom-list__right">
              <h4 className="singleTeam__bottom-list__dscr">Position</h4>
              <h4 className="singleTeam__bottom-list__dscr">Age</h4>
            </div>
          </li>
          <>
            {ViewRoster(props.roster)}
          </>
        </ul>

      </div>
    </div>
  )
}
export default SingleTeam;