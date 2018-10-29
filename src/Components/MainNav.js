import React, { Component } from 'react';
import {Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';
import {Router, Route,Link,hashHistory,BrowserRouter} from 'react-router-dom';
import DownloadPage from './../DownloadPage';
class MainNav extends Component{
    render() {
        return(
        <Navbar>
            <Navbar.Header>
            <a href="#home" class="navbar-brand">
                    <img src="Swiftionary Logo.png" width="25" height="25" alt="Swiftionary"/>
            </a>
            <Navbar.Brand>
                <a href="index.html" className="Montserrat navbar-padding">
                Swiftionary</a>
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
            <NavItem eventKey={1}>
                <Link to="/download">
                    Download
                </Link>
                
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
            <div className="links">
                <Route path="/download" component={DownloadPage}/>
            </div>
        </Navbar>
        )
    }
}

export default MainNav;