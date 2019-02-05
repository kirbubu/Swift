import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import './Component CSS/DownloadPage.css';
import {Panel,Navbar,Nav,NavItem,MenuItem,NavDropdown,Grid,Row,Col} from 'react-bootstrap';
import Title from './Title';
import InfoTable from './InfoTable';
import MainNav from './MainNav';

class AboutPage extends Component{
    render(){
        return(
<div>
    <div>
    <link href="https://fonts.googleapis.com/css?family=BioRhyme" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro" rel="stylesheet"></link>
<h1 className ="aboutTitle">About
</h1>
<p></p>
<p className ="aboutPara1"> 
Swiftionary was created in August, 2018. Four friends discussed how they hated 
having to open another tab to search for the meanings of words when browsing the internet.
They came with the brilliant idea of creating a versatile Google Chrome Web Extension that would solve this problem. Web extensions are a fast way 
to enhance the web browsing experience and that is why they decided to make this project as a web extension.</p>  
<img src ="Swiftionary Logo.png" width="200" height ="200" className="csulbLogo" alt="logo"></img>
</div>  

</div>

        );
    }
};
export default AboutPage;