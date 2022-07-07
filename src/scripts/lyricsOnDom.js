import renderToDom from './helpers/renderToDom';
import getLyrics from '../api/getLyrics';
import { spinner } from './components/htmlComponents';

const lyricsOnDom = (artist, song) => {
  // Below is a promise, so I have to use .then with the promise
  spinner();
  getLyrics(artist, song).then((response) => {
    renderToDom('#lyrics-container', response.lyrics);
  })
    .catch((error) => {
      if (error.error === undefined) {
        const domString = '<h2 style="color: red;">Sorry, lyrics not found. Please try another search</h2>';
        renderToDom('#lyrics-container', domString);
      }
    });
};

export default lyricsOnDom;
