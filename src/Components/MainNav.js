import React, { Component } from 'react';
import {Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';
import {Router, Route,Link,hashHistory,BrowserRouter, Switch} from 'react-router-dom';
import DownloadPage from './../DownloadPage';
import App from './../App';
import Routes from './Routes';
class MainNav extends Component{
    render() {
        return(
        <div>
        <Routes></Routes>
        <Navbar>
            <Navbar.Header>
            <a href="#home" class="navbar-brand">
                    <img src="Swiftionary Logo.png" width="25" height="25" alt="Swiftionary"/>
            </a>
            <Navbar.Brand>
                <a href="/" className="Montserrat navbar-padding">
                 Swiftionary</a>
                 {/* <Link to="/" className="Montserrat navbar-padding">
                    Swiftionary
                </Link>  */}
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
            <NavItem eventKey={1} href="/downloads">
                Downloads
                
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
        </div>
        )
    }
}

export default MainNav;