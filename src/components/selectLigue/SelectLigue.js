import React, { useState } from 'react';
import './selectLigue.scss';

const SelectLigue = (props) => {

  const [selectOne, setSelectOne] = useState('')
  const [selectTwo, setSelectTwo] = useState('')

  const onSend = (e) => {
    e.preventDefault();
    props.onSelectLigue(selectOne)
    props.onSelectSeason(selectTwo)
  }

  // console.log(selectOne, selectTwo);
  // console.log(props.countries, props.season);

  // const selectLigue = (arr) => {
  //   if (arr === undefined) return
  //   const res = arr.map((item) => {
  //     <option value={item.name}>{props.name}</option>
  //   })
  //   return res
  // }

  // const selectSeason = (arr) => {
  //   if (arr === undefined) return
  //   const res = arr.countries.map((item) => {
  //     <option
  //       value={item.code}>
  //       {item.name}
  //       {item.flag}
  //     </option>
  //   })
  //   return res
  // }


  return (
    <form onSubmit={onSend}>
      <label htmlFor="ligue">Select Ligue</label>
      <select
        onChange={(e) => setSelectOne(e.target.value)}
        name="ligue">
        <option value='19'>19</option>
        <option value='62'>62</option>
        <option value='65'>65</option>

        {/* {selectLigue(props.countries)} */}

      </select>
      <label
        htmlFor="season">Select Season</label>

      <select
        onChange={(e) => setSelectTwo(e.target.value)}
        name="season">
        <option value='10'>10</option>
        <option value='2018'>2018</option>
        <option value='2017'>2017</option>
        {/* {selectSeason(props.season)} */}
      </select>
      <button>Search</button>
    </form>
  )
}
export default SelectLigue;