import React from 'react';
import './topbar.scss';

const Topbar = () => {
  return (
    <div className="topbar-wrap">
      <div className="logo-wrap">
        <img className="logo" src={require('./img/logo.png')} alt="logo" />
      </div>
      <div className="input-wrap">
        <input />
        <img  alt="search" src={require('./img/search.png')}/>
      </div>
      <div className="playlist-title">
        <img src={require('./img/Icon.png')} />
        <h2>PLAYLIST</h2>
      </div>
    </div>
  );
}

export default Topbar;
