import React from 'react';
import Search from '../search/Search';
import Navigation from '../navigation/Navigation';
import Header from '../header/Header';
import List from '../list.js/List';
import './contentList.scss';

const ContentList = (props) => {
  return (
    <>
      <Header />
      <div className='content'>
        <Navigation />
        <div className="content__wrapper">
          <Search />
          <List content={props.content} />
        </div>
      </div>
    </>
  )
}
export default ContentList;