// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import axios from 'axios';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

// UTILITY FUNCTION
const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
};

// API call
const getLyrics = (artist, song) => new Promise((resolve, reject) => {
  axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// UI Presentation (HTML on the DOM)
const htmlStructure = () => {
  const domString = `<div id="btn"></div>
  <div id="lyrics-container"></div>`;
  renderToDom('#app', domString);
};

const btn = () => {
  const domString = '<button type="button" id="song-search-btn" class="btn btn-info">Search for Song</button.';
  renderToDom('#btn', domString);
};

const lyricsOnDom = (artist, song) => {
  // Below is a promise, so I have to use .then with the promise
  getLyrics(artist, song).then((response) => {
    console.warn(response.lyrics);
  });
};

const eventListener = () => {
  document.querySelector('#song-search-btn').addEventListener('click', () => {
    console.warn(lyricsOnDom('twenty one pilots', 'redecorate'));
  });
};

const startApp = () => {
  htmlStructure();
  btn();
  lyricsOnDom();
  eventListener();
};

startApp();
