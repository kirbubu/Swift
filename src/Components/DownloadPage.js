import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import './Component CSS/DownloadPage.css';
import {Panel,Navbar,Nav,NavItem,MenuItem,NavDropdown,Grid,Row,Col} from 'react-bootstrap';
import Title from './Title';
import InfoTable from './InfoTable';
import MainNav from './MainNav';

// Currently under construction contains all the information for the downloadpage
// all will eventually include download links.
class DownloadPage extends Component{  
    render(){
        return(
            <div>
                <header> 
                    <Grid className="DownloadGrid">
                        <Row>
                            <Col xs={12} md={2}/>
                            <Col xs={12} md={4}>
                                <h1 className="center-justified">Download on <br/> Firefox</h1>
                                <img src="firefox.svg" className="logo"/>
                            </Col>
                            <Col xs={12} md={4}>
                                <h1 className="center-justified">Download on <br/>Google Chrome</h1>
                                <img src="google chrome.svg" className="logo"/>
                            </Col>
                            <Col xs={12} md={2}/>
                        </Row>
                        {/* TODO: Add rows and columns for formatting parts
                        of the webpage */}
                    </Grid>
                </header>
                
            </div>
        )
    }
}



export default DownloadPage;