import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import BottomBar from '../../src/components/BottomBar/index';

describe('Component: BottomBar', () => {
  const props = {
    artworkUrl: '',
    artist: '',
    title: '',
    currentTimeInSec: 0,
    endTimeInSec: 20,
    playState: '',
    playingTrackId: 4,
    startPlay: () => {},
    pause: () => {}
  }

  it('renders without error', () => {
    expect(
      shallow(
        <BottomBar {...props} />
      ).length
    ).toEqual(1);
  });
});
