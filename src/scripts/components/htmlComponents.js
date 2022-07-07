// UI Presentation (HTML on the DOM)
import renderToDom from '../helpers/renderToDom';

const htmlStructure = () => {
  const domString = `<div class="intro-text">
  <h1>The Lyrics Finder You've Been Waiting For!</h1>
  <h4>Got a song stuck in your head, but can't remember all the lyrics?</h4>
  <h5>Well, search the artist or band and the name of the song, find the lyrics and sing until your lungs give out!</h5>
  <p>Warning: Singing until your lungs give out is not safe. Please sing responsibly ;)</p>
  </div>
  <div id="songSearchForm"></div>
  <div id="loader"></div>
  <div id="lyrics-container" class="lyrics"></div>`;
  renderToDom('#app', domString);
};

const spinner = () => {
  const domString = `<div id="spinner" class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`;
  renderToDom('#lyrics-container', domString);
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

export { htmlStructure, spinner, songSearchForm };
