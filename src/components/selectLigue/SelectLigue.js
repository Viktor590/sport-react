import React, { useState } from 'react';
import './selectLigue.scss';

const SelectLigue = (props) => {

  const [selectOne, setSelectOne] = useState(2)
  const [selectTwo, setSelectTwo] = useState(2)

  const onSend = (e) => {
    e.preventDefault();
    props.onSelectLigue(selectOne)
    props.onSelectSeason(selectTwo)
  }

  // console.log(props.countries, props.season);

  const selectLigue = (arr) => {
    if (arr === undefined || arr.length < 1) return
    const res = arr.map((item) => {
      return (
        <option
          key={item.id}
          value={item.id}>{item.name}
        </option>
      )
    })
    return res
  }

  const selectSeason = (arr) => {
    if (arr === undefined || arr.length < 1) return
    const res = arr.map((item) => {
      return (
        <option
          key={item}
          value={item}>
          {item}
        </option>
      )
    })
    return res
  }


  return (
    <form className='selectLigue' onSubmit={onSend}>
      <label
        className='selectLigue__label'
        htmlFor="ligue">Select Ligue
      </label>

      <select
        className='selectLigue__select'
        onChange={(e) => setSelectOne(e.target.value)}
        name="ligue">
        {selectLigue(props.countries)}
      </select>
      <label
        className='selectLigue__label'
        htmlFor="season">Select Season
      </label>
      <select
        className='selectLigue__select'
        onChange={(e) => setSelectTwo(e.target.value)}
        name="season">
        {selectSeason(props.season)}
      </select>
      <button className='selectLigue__button'>Search</button>
    </form>
  )
}
export default SelectLigue;