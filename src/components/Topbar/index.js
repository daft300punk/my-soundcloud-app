import React from 'react';
import './topbar.css';

const Topbar = () => {
  return (
    <div className="topbar-wrap">
      <div className="logo-wrap"><img className="logo" src={require("./logo.png")}></img></div>
    </div>
  );
}

export default Topbar;