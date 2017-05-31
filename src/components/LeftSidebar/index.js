import React from 'react';
import './leftSidebar.scss';

/*
Sidebar Options:
A. Top Trending
  1. Music
  2. Audio
B. New and Hot
  1. Music
  2. Audio
C. Explore Genre
  1. Music
  2. Audio
*/

const LeftSidebar = () => {
  return (
    <div className="leftsidebar-wrap" id="leftsidebar">
      {/*<select className="musicOrAudio">
        <option>Music</option>
        <option>Audio</option>
      </select>*/}
      <div className="main-cat">Music</div>
      <div className="category active">
        <img src={require('./img/top.png')}/>
        <span>Top 50</span>
      </div>
      <div className="category">
        <img src={require('./img/hot.png')}/>
        <span>Hot & New</span>
      </div>
      <div className="main-cat">Audio</div>
      <div className="category">
        <img src={require('./img/top.png')}/>
        <span>Top 50</span>
      </div>
      <div className="category">
        <img src={require('./img/hot.png')}/>
        <span>Hot & New</span>
      </div>
    </div>
  );
};

export default LeftSidebar;