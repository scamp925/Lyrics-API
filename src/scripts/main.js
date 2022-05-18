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
const getLyrics = () => new Promise((resolve, reject) => {
  axios.get('https://api.lyrics.ovh/v1/twenty one pilots/redecorate')
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
  const domString = '<button type="button" class="btn btn-info">Search for Song</button.';
  renderToDom('#btn', domString);
};

const lyricsOnDom = () => {
  // Below is a promise, so I have to use .then with the promise
  getLyrics().then((response) => {
    renderToDom('#lyrics-container', response.lyrics);
  });
};

const startApp = () => {
  htmlStructure();
  btn();
  lyricsOnDom();
};

startApp();
