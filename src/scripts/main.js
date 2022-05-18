// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import axios from 'axios';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

// API call
const getLyrics = () => new Promise((resolve, reject) => {
  axios.get('https://api.lyrics.ovh/v1/twenty one pilots/redecorate')
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// UI Presentation (HTML on the DOM)
const lyricsOnDom = () => {
  // Below is a promise, so I have to use .then with the promise
  getLyrics().then((response) => {
    document.querySelector('#app').innerHTML = response.lyrics;
  });
};

const startApp = () => {
  lyricsOnDom();
};

startApp();
