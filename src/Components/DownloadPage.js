import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import {Jumbotron,Button,Navbar,Nav,NavItem,MenuItem,NavDropdown,Grid,Row,Col} from 'react-bootstrap';
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
                    <Grid>
                        {/* TODO: Add rows and columns for formatting parts
                        of the webpage */}
                    </Grid>
                </header>
                
            </div>
        )
    }
}

export default DownloadPage;