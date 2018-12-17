import axios from 'axios';

const KEY = 'AIzaSyAT4wbcYIiKM24hOGA4J8DBkEWwmr_Xqu0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});