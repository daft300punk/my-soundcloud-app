import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Track from '../../src/components/Track/index';

describe('Component: Track', () => {
  const props = {
    artworkUrl: '',
    title: '',
    id: 5,
    startPlay: () => {},
    playState: '',
    playingTrackId: 4,
    pause: () => {}
  }

  it('renders without error', () => {
    expect(
      shallow(
        <Track {...props} />
      ).length
    ).toEqual(1);
  });
});
