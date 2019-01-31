import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
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
                    <h1>Swiftionary </h1>
                    <Grid>
                        <Panel>
                            <Grid>
                                <InfoRow index={1}title="Setup"/>
                            </Grid>
                            
                        </Panel>
                        {/* TODO: Add rows and columns for formatting parts
                        of the webpage */}
                    </Grid>
                </header>
                
            </div>
        )
    }
}

function InfoRow(props){
    return(
        <Row>
            <Col xs={3} md={1}>
                {props.index + ". " + props.title}
            </Col>
        </Row>
    )
};


export default DownloadPage;