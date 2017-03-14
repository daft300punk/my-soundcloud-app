export default function getTop50() {
  return new Promise(function(resolve, reject) {
    let urlParams = {
      kind: 'top',
      genre: 'soundcloud%3Agenres%3Aall-music',
      high_tier_only: 'false',
      client_id: 'MmZKx4l7fDwXdlL3KJZBiJZ8fLonINga',
      limit: '50',
      offset: '0',
      linked_partitioning: '1',
      app_version: '1489155300'
    };
    
    let baseUrl = 'https://api-v2.soundcloud.com/charts';
    let url  = baseUrl + '?';
    for (let param in urlParams) {
      url += param + '=' + urlParams[param] + '&';
    }

    //Remove & from end
    url = url.slice(0, url.length - 1);

    fetch(url)
    .then(res => res.json())
    .then(res => {
      return res.collection.map((item) => {
        return {
          artwork_url: item.track.artwork_url != null ? item.track.artwork_url.replace('large.jpg', 't500x500.jpg') : null,
          streamUrl: '/tracks/' + item.track.id,
          title: item.track.title
        }
      });
    })
    .then(res => resolve(res))
    .catch(err => reject(err));
  });
}