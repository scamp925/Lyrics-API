import { spinner } from './components/htmlComponents';
import lyricsOnDom from './lyricsOnDom';

const eventListener = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    spinner();
    const artist = document.querySelector('#artist').value;
    const song = document.querySelector('#song').value;
    lyricsOnDom(artist, song);
    form.reset();
  });
};

export default eventListener;
