import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Jumbotron,Button,Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';
import Title from './Components/Title';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header> 
          <Navbar>
            <Navbar.Header>
              <a href="#home" class="navbar-brand">
                    <img src="Swiftionary Logo.png" width="25" height="25" alt="Swiftionary"/>
              </a>
              <Navbar.Brand>
                <a href="#home" className="Montserrat navbar-padding">
                Swiftionary</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#">
                Download
              </NavItem>
              <NavItem eventKey={2} href="#">
                About
              </NavItem>
              <NavDropdown eventKey={3} title="Help" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Frequently Asked Questions</MenuItem>
                <MenuItem eventKey={3.2}>Features</MenuItem>
                <MenuItem eventKey={3.3}>Customization</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Contact Information</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
          <Jumbotron className="App-header Container-Fluid">
          <img src="Swiftionary Text.png" alt="Swiftionary Text" class="Swiftionary"/>
          <p>
            A simple way to conveniently search
          </p>
          <p>
            <Button bsStyle='info' className="Montserrat">Learn more</Button>
          </p>
          </Jumbotron>
          
          <p>
            Swiftionary allows you to search without hassle. No more opening tabs, 
            losing concentration, or skipping over words.
          </p>
          <p>
            <Title title='What should I put here?'/>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      
    );
  }
}

export default App;
