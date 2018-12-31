import axios from 'axios';

const KEY = 'AIzaSyDHcN5D3B4YSpjwX97SgDgtsPu5NhPNEIc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    key:KEY
  }
});

