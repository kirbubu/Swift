import React, { Component } from 'react';
import logo from './../logo.svg';
import './Component CSS/DownloadPage.css';
import {Panel,Navbar,Nav,NavItem,MenuItem,NavDropdown,Grid,Row,Col} from 'react-bootstrap';
import Title from './Title';
import InfoTable from './InfoTable';
import MainNav from './MainNav';

// Currently under construction contains all the information for the downloadpage
// all will eventually include download links.
class DeveloperPage extends Component{  
    render(){
        return(
            <div>
                <header> 
                    
                    <Grid  className="UserGuideGrid">
                        <Row>
                            <h1>Swiftionary Developer Guide</h1>
                            <Col xs={12} md={4}>
                                <Panel>
                                    <Grid>
                                            <Row>
                                                <Col xs={3} md={3}><p className="PanelHeader">Contents</p></Col>
                                            </Row>
                                            <InfoRow index={1}title="Swiftionary" href="#Swiftionary"/>
                                            <InfoRow index={2}title="Features" href="#Features"/>
                                            <InfoRow index={3}title="Installation" href="#Installation"/>
                                            <InfoRow index={4}title="Components" href="#Components"/>
                                            <InfoRow index={5}title="Contribute" href="#Contribute"/>
                                            <InfoRow index={6}title="Support" href="#Support"/>
                                    </Grid>
                                    
                                </Panel>
                            </Col>
                            <div>
                                <h3 id='#Swiftionary'className="Header">Swiftionary</h3>
                                <hr/>
                                <p>
                                Swiftionary is a web extension to find a word or 
                                phrase that isn’t well recognized and gives information
                                </p>
                                <p>
                                How to use:
                                </p>
                                <p>
                                Users can Highlight and Right Click on a word or phrase
                                or choose a separate option of just Highlighting and searching
                                for whatever default search method they choose.
                                <br/>
                                Users can choose from a multitude of options such as search for
                                definition, synonym, antonym, or search a phrase and receive spell check feedback,
                                translation, or extended meaning of a phrase
                                </p>
                            </div>
                            <div>
                                <h3 id="#Features" className="Header">Features</h3>
                                <hr/>
                                <p>
                                   <ul>
                                        <li>Words: finds the definition and antonym/synonym</li>
                                        <li>Names: three of the most relevant people/searches will be presented</li>
                                        <li>Phrases: meaning of the phrase</li>
                                        <li>Foreign Words: translated to English</li>
                                        <li>Incorrect Words: autocorrect</li>
                                   </ul>
                                </p>
                            </div>
                            <div>
                                <h3 id="#Installation" className="Header">Installation</h3>
                                <hr/>
                                <ol>
                                    <li>Go on the Swifitonary Website</li>
                                    <li>Go to Downloads Tab</li>
                                    <li>Go to Install Extension</li>
                                    <li>Install the Swifitonary Extension</li>
                                </ol>
                            </div>
                            <div>
                                <h3 id="#Components" className="Header">Components</h3>
                                <hr/>
                                <p>Swifitonary Website Components</p>
                                <ul>
                                    <li>react-bootstrap</li>
                                    <li>react-pose</li>
                                    <li>styled-components</li>
                                </ul>
                                <p>Swiftionary Web Extension Components</p>
                                <ul>
                                    <li>Chrome Debugger</li>
                                    <li>Dictionary API</li>
                                    <li>Urban Dictionary API</li>
                                    <li>Search API</li>
                                    <li>Translation API</li>
                                    <li>Spell Check API</li>
                                    <li>Chrome API</li>
                                    <li>Firefox API</li>
                                    <li>Wikipedia API</li>
                                </ul>
                            </div>
                            <div>
                                <h3 id="#Contribute" className="Header">Contribute</h3>
                                <hr/>
                                <p>Issue Tracker: Swiftionary Website
                                    <br/>
                                    Source Code: <a href="https://github.com/kirbubu/sw">
                                    https://github.com/kirbubu/sw
                                    </a>
                                    <br/>
                                    Website: <a href="https://swiftionary.herokuapp.com">
                                    https://swiftionary.herokuapp.com
                                    </a>
                                </p>
                            </div>
                            <div>
                                <h3 id="#Support" className="Header">Support</h3>
                                <hr/>
                                <p>
                                    If you are having issues, please let us know.
                                    We have a mailing list located at <a href="https://swiftionary.herokuapp.com">
                                    https://swiftionary.herokuapp.com
                                    </a>
                                </p>
                            </div>
                        {/* TODO: Add rows and columns for formatting parts
                        of the webpage */}
                        </Row>
                    </Grid>
                </header>
                
            </div>
        )
    }
}

function InfoRow(props){
    return(
        <Row>
            <Col xs={3} md={3}>
            {props.index + ". "}
                <a href={props.href}>
                    {props.title}
                </a>
            </Col>
        </Row>
    )
};


export default DeveloperPage;