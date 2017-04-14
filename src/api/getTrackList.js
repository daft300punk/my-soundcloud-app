import SC from 'soundcloud';

SC.init({
  client_id: 'MmZKx4l7fDwXdlL3KJZBiJZ8fLonINga',
  redirect_uri: 'http://localhost:3000/'
});

export default function getTrackListApi() {
  return new Promise(function(resolve, reject) {
    SC.get('/tracks')
    .then(function (tracks) {
      //Only return the required data
      tracks = tracks.filter(function(track){
        if(track.title == null || track.streamUrl == null || track.artwork_url == null) {
          return false;
        }
        return true;
      }).map((track) => {
        return {
          artwork_url: track.artwork_url,
          streamUrl: track.streamUrl,
          title: track.title
        };
      });
      resolve(tracks);
    });
  });
};