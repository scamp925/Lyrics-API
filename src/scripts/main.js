// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import { htmlStructure, songSearchForm } from './components/htmlComponents';
import eventListener from './events';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const startApp = () => {
  htmlStructure();
  songSearchForm();
  eventListener();
};

startApp();
