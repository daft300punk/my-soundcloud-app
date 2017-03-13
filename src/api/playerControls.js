import SC from 'soundcloud';

export function playTrack(track) {
  return new Promise(function (resolve, reject) {
    SC.stream(track)
      .then(function (player) {
        if(player.options.protocols[0] === 'rtmp') 
          player.options.protocols.splice(0, 1);
        player.play();
        resolve();
      })
      .catch(err => reject(err));
  });
}

export function pauseTrack(track) {
  return new Promise(function(resolve, reject) {
    SC.stream(track)
    .then(function(player) {
      player.pause();
      resolve();
    })
    .catch(err => reject(err));
  });
}