import React from 'react';
import './leftSidebar.scss';
import { MAIN_CATEGORIES as MCT } from '../../constants/Categories';
import PropTypes from 'prop-types';

const LeftSidebar = ({
  changeCategory,
  trackType,
  kind
}) => {
  const isActive = (k, t) => {
    if(t == trackType && k == kind)
      return 'active';
  };
  return (
    <div className="leftsidebar-wrap" id="leftsidebar">
      <div className="main-cat">Music</div>
      <div className={'category ' + isActive('top', 'music')}
        onClick={() => {
          changeCategory(MCT.music.kind.top, MCT.music.genre['all-music'], 'music');
        }}
      >
        <img src={require('./img/top.png')} />
        <span>Top 50</span>
      </div>
      <div className={'category ' + isActive('trending', 'music')}
        onClick={() => {
          changeCategory(MCT.music.kind.trending, MCT.music.genre['all-music'], 'music');
        }}
      >
        <img src={require('./img/hot.png')} />
        <span>Hot & New</span>
      </div>
      <div className="main-cat">Audio</div>
      <div className={'category ' + isActive('top', 'audio')}
        onClick={() => {
          changeCategory(MCT.audio.kind.top, MCT.audio.genre['all-audio'], 'audio');
        }}
      >
        <img src={require('./img/top.png')} />
        <span>Top 50</span>
      </div>
      <div className={'category ' + isActive('trending', 'audio')}
        onClick={() => {
          changeCategory(MCT.audio.kind.trending, MCT.audio.genre['all-audio'], 'audio');
        }}
      >
        <img src={require('./img/hot.png')} />
        <span>Hot & New</span>
      </div>
    </div>
  );
};

LeftSidebar.propTypes = {
  changeCategory: PropTypes.func.isRequired,
  trackType: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired
};

export default LeftSidebar;