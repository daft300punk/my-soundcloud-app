import React from 'react';
import './topbar.css';

const Topbar = () => {
  return (
    <div className="topbar-wrap">
      <div className="logo-wrap"><img className="logo" src={require("./logo.png")} alt="logo"></img></div>
      <div className="input-wrap">
        <input hint="Search songs, artists, audio"></input>
        <img src={require('./search.png')} alt="search"></img>
      </div>
    </div>
  );
}

export default Topbar;