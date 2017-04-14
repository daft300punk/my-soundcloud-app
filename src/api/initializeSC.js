import SC from 'node-soundcloud';

export default () => SC.init({
  client_id: 'MmZKx4l7fDwXdlL3KJZBiJZ8fLonINga',
  redirect_uri: 'http://localhost:3000/'
});