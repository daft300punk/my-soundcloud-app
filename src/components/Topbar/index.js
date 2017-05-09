import React from 'react';
import './topbar.scss';

import logo from './logo.png'
import search from './search.png';

const Topbar = () => {
  return (
    <div className="topbar-wrap">
      <div className="logo-wrap">
        <img className="logo" src={require('./logo.png')} alt="logo" />
      </div>
      <div className="input-wrap">
        <input />
        <img  alt="search" src={require('./search.png')}/>
      </div>
      <div className="playlist-title">
        <img src={require('./Icon.png')} />
        <h2>PLAYLIST</h2>
      </div>
    </div>
  );
}

export default Topbar;