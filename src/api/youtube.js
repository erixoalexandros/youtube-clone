import axios from 'axios';

const KEY = 'AIzaSyBzDv7MVuQh57EADxMHO_B8LQTIhUuFU00';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});
