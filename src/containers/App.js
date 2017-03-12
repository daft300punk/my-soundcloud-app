import React from 'react';
import initializeSC from '../api/initializeSC';
import TrackListContainer from './TrackListContainer/';
import './App.css';

initializeSC();

const App = function () {
  return (
    <div className="app">
      <TrackListContainer />
    </div>
  );
};

export default App;