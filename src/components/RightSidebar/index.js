import React from 'react';
import './rightSidebar.scss';
import PropTypes from 'prop-types';

const RightSidebar = ({
  trackList,
  playlist
}) => {
  let list = [];
  for (let i = 0; i < playlist.length; i++) {
    const element = (
      <div className="playlist-item" key={i}>
        <img src={trackList[playlist[i]].artworkUrl} />
        <div className="playlist-info">
          <h4>{trackList[playlist[i]].title}</h4>
          <span>{trackList[playlist[i]].artist || ' '}</span>
        </div>
      </div>
    );
    list.push(element);
  }
  return (
    <div className="rightsidebar-wrap" id="rightsidebar">
      {list}
    </div>
  );
};

RightSidebar.propTypes = {
  trackList: PropTypes.array.isRequired,
  playlist: PropTypes.array.isRequired
};

export default RightSidebar;