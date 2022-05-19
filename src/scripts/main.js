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
  const domString = `<div class="intro-text">
  <h1>How does that song go?</h1>
  <h4>Mumbling those few lines of a song while in the car?</h4>
  <h5>Well, search the lyrics of your favorite song and sing to your heart's content</h5>
  </div>
  <div id="songSearchForm"></div>
  <div id="lyrics-container" class="lyrics"></div>`;
  renderToDom('#app', domString);
};

const songSearchForm = () => {
  const domString = `<form>
  <div class="row">
  <div class="col">
    <label for="artist" class="form-label">Artist or Band</label>
    <input type="text" id="artist" class="form-control input-box" placeholder="twenty one pilots" aria-label="twenty one pilots" required>
  </div>
  <div class="col">
    <label for="song" class="form-label">Song</label>
    <input type="text" id="song" class="form-control input-box" placeholder="Redecorate" aria-label="Redecorate" required>
  </div>
  </div>
  <div class="on-the-right">
   <button type="submit" id="song-search-btn" class="btn btn-info">Search for Song</button>
  </div>
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
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const artist = document.querySelector('#artist').value;
    const song = document.querySelector('#song').value;
    lyricsOnDom(artist, song);
    form.reset();
  });
};

const startApp = () => {
  htmlStructure();
  songSearchForm();
  eventListener();
};

startApp();
