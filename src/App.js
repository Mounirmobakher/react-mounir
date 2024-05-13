// import logo from './logo.svg';
// import { Nav } from 'react-bootstrap';
import './App.css';
// import Header from './componant/Home.js/Header';
import Home from './componant/Home.js/home';
import Navs from './componant/Navs/Navs';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Navs />
      <Home />
    </Fragment>
  );
}

export default App;
