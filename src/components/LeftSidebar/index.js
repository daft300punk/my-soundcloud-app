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
    <div className="leftsidebar-wrap">
      <select className="musicOrAudio">
        <option>Music</option>
        <option>Audio</option>
      </select>
    </div>
  );
}

export default LeftSidebar;