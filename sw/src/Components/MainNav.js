import React, { Component } from 'react';
import {Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';
import {Router, Route,Link,hashHistory,BrowserRouter, Switch} from 'react-router-dom';
import DownloadPage from './DownloadPage';
import App from './../App';
import Routes from './Routes';

/**
 * MainNav Component
 * 
 * MainNav is navbar at the top of the screen that serves 
 * as a way for users to click on links to different areas of the webpage.
 * All of the routes to the different webpages are defined in Routes.js
 * Most formatting contained within this file.
 * 
 * TODO: Transfer some of the hmtl code to CSS to reduce clutter.
 * 
 * Explanations of the code below
 */
class MainNav extends Component{
    render() {
        return(
        // Render only returns one component. You cannot return multiple components,
        // if you want to send a multi-faceted component, wrap it within a <div> tag!
        <div className="fixed-top">
        {/* This is an inline comment. Use Ctrl+/ to easily write
        Javascript comments within html code. Essentially the brackets
        allow you to write Javascript within html code. */}
        <Navbar>
            {/* Navbar is a bootstrap component */}
            <Navbar.Header>
                {/*Wrap the image within a link for home page*/}
                <a href={process.env.PUBLIC_URL + "/"} class="navbar-brand">
                    <img src="Swiftionary Logo.png" width="25" height="25" alt="Swiftionary"/>
                </a>
                <Navbar.Brand>
                    {/* Wrap Swiftioanry text within link for home page */}
                    <a href= {process.env.PUBLIC_URL + "/"} className="Montserrat navbar-padding">
                    Swiftionary</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            {/* New Header created, for Downloads */}
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
                {/* Wrap the Downloads text for the download page */}
                <NavItem eventKey={1} href= { process.env.PUBLIC_URL + "/downloads"} className="Montserrat">
                    Download
                </NavItem>
                <NavItem eventKey={2} href="#" className="Montserrat">
                    About
                </NavItem>
                {/* Nav Dropdown Menu for a NavItem option that requires multiple things */}
                <NavDropdown eventKey={3} title="Help" id="basic-nav-dropdown" className="Montserrat">
                    <MenuItem eventKey={3.1} href={process.env.PUBLIC_URL+'/user-guide'}>Use Guide</MenuItem>
                    <MenuItem eventKey={3.2}>Features</MenuItem>
                    <MenuItem eventKey={3.3}>Customization</MenuItem>
                    <MenuItem divider/>
                    <MenuItem eventKey={3.4}>Contact Information</MenuItem>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        )
    }
}

// Make the default export MainNav.
export default MainNav;