const client_id = 'MmZKx4l7fDwXdlL3KJZBiJZ8fLonINga';

export function getPlayer(track) {
  return new Promise(function (resolve, reject) {
    const url = 'http://api.soundcloud.com' + track + '/stream?client_id=' + client_id;
    const player = new Audio(url);
    resolve(player);
  });
}
