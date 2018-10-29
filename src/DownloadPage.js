import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Jumbotron,Button,Navbar,Nav,NavItem,MenuItem,NavDropdown,Grid,Row,Col} from 'react-bootstrap';
import Title from './Components/Title';
import InfoTable from './Components/InfoTable';
import MainNav from './Components/MainNav';

class DownloadPage extends Component{
    render(){
        return(
            <div className="DownloadPage">
                <header> 
                    <MainNav/>
                </header>
                
            </div>
        )
    }
}

export default DownloadPage;