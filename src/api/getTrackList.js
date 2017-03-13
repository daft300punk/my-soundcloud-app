import SC from 'soundcloud';

export default function getTrackListApi() {
  return new Promise(function(resolve, reject) {
    SC.get('/tracks')
    .then(function (tracks) {
      console.log('tracks', tracks);
      //Only return the required data
      tracks = tracks.filter(function(track){
        if(track.title == null || track.stream_url == null || track.artwork_url == null) {
          return false;
        }
        return true;
      }).map((track) => {
        return {
          artwork_url: track.artwork_url,
          stream_url: track.stream_url,
          title: track.title
        };
      });
      resolve(tracks);
    });
  });
};