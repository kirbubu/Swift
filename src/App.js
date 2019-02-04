import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Jumbotron,Button,Navbar,Nav,NavItem,MenuItem,NavDropdown,Grid,Row,Col} from 'react-bootstrap';
import Title from './Components/Title';
import InfoTable from './Components/InfoTable';
import MainNav from './Components/MainNav';
import DownloadPage from './Components/DownloadPage';
import MainPage from './Components/MainPage';
import {BrowserRouter, Route} from 'react-router-dom';
import Routes from './Components/Routing';

class App extends Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <MainNav></MainNav>
            <Routes/>
          </div>
        </body>
      </html>
    );
  }
}

export default App;
