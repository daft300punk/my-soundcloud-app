import React from 'react';
import initializeSC from '../api/initializeSC';
import TrackListContainer from './TrackListContainer';

initializeSC();

const App = function () {
  return (
    <div>
      <h2>SoundCloud Remake</h2>
      <TrackListContainer />
    </div>
  );
};

export default App;