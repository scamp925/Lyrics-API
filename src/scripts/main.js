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
  const domString = `<div id="songSearchForm"></div>
  <div id="lyrics-container"></div>`;
  renderToDom('#app', domString);
};

const songSearchForm = () => {
  const domString = `<form>
  <div class="row">
  <div class="col">
    <label for="formGroupExampleInput" class="form-label">Artist or Band</label>
    <input type="text" class="form-control" placeholder="twenty one pilots" aria-label="twenty one pilots">
  </div>
  <div class="col">
    <label for="formGroupExampleInput" class="form-label">Song</label>
    <input type="text" class="form-control" placeholder="Redecorate" aria-label="Redecorate">
  </div>
  </div>
   <button type="submit" id="song-search-btn" class="btn btn-info">Search for Song</button>
  </form>`;
  renderToDom('#songSearchForm', domString);
};

const lyricsOnDom = (artist, song) => {
  // Below is a promise, so I have to use .then with the promise
  getLyrics(artist, song).then((response) => {
    // console.warn(response.lyrics);
    renderToDom('#lyrics-container', response.lyrics);
  });
};

const eventListener = () => {
  document.querySelector('#song-search-btn').addEventListener('click', (e) => {
    e.preventDefault();
  });
};

const startApp = () => {
  htmlStructure();
  songSearchForm();
  lyricsOnDom();
  eventListener();
};

startApp();
