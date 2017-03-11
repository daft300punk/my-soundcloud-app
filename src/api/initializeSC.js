import SC from 'soundcloud';
import dotenv from 'dotenv';

dotenv.load();

export default () => SC.initialize({
  client_id: 'MmZKx4l7fDwXdlL3KJZBiJZ8fLonINga',
  redirect_uri: 'http://localhost:3000/'
});