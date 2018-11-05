import React, { Component } from 'react';
import logo from './../logo.svg';
import './Component CSS/DownloadPage.css';
import {Panel,Navbar,Nav,NavItem,MenuItem,NavDropdown,Grid,Row,Col} from 'react-bootstrap';
import Title from './Title';
import InfoTable from './InfoTable';
import MainNav from './MainNav';

// Currently under construction contains all the information for the downloadpage
// all will eventually include download links.
class GuidePage extends Component{  
    render(){
        return(
            <div>
                <header> 
                    
                    <Grid  className="UserGuideGrid">
                        <Row>
                            <h1>Swiftionary User Guide</h1>
                            <Col xs={12} md={4}>
                                <Panel>
                                    <Grid>
                                            <Row>
                                                <Col xs={3} md={3}><p className="PanelHeader">Contents</p></Col>
                                            </Row>
                                            <InfoRow index={1}title="Foreword" href="#foreword"/>
                                            <InfoRow index={2}title="Setup" href="#setup"/>
                                            <InfoRow index={3}title="Right Click Feature" href="#rightclick"/>
                                    </Grid>
                                    
                                </Panel>
                            </Col>
                            <div>
                                <h3 id='#foreword'className="Header">Foreword</h3>
                                <hr/>
                                <p>
                                Many people face a problem whenever they see a word that they do not recognize. 
                                We live in an age where the Internet is used heavily. 
                                An increasing amount of people are using the Internet to learn new information. 
                                With many pages being visited every day by a single person, 
                                they are bound to encounter words that they do not recognize. The information age we 
                                live in relies a lot on the Internet. When people find a word they do not know the meaning of, 
                                a phrase, or name that they do not recognize, they have to open another tab in order to search for 
                                the meaning of what they are interested in. The rate at which we transfer requests from our brains to 
                                computers needs to be sped up and this project will help us move one step further towards this goal. 
                                </p>
                            </div>
                            <div>
                                <h3 id="#setup">Setup</h3>
                                <hr/>
                                <p >
                                To get started, the user will need to find Swiftionary on the Google Chrome web store. 
                                They can use the search bar on the Google Chrome web store and type in “Swiftionary” 
                                to find the page for the extension. Once they find the web extension, they must click install so 
                                they can install the extension for their browser. When the extension is installed, the user can click on
                                the Swiftionary logo on the taskbar and go to the preferences menu. They can choose which features they 
                                would like to remove so the features that are not relevant to them will not appear. This will make it
                                easier for them to not feel overwhelmed when they right click on a word or phrase since they won’t be
                                seeing every single option that may not be relevant to them. After they are finished with their
                                preferences, they can now see the options provided from Swiftionary when they highlight a word or
                                phrase and right click on it.
                                </p>
                            </div>
                            <div>
                                <h3 id="#rightclick">Right Click Feature</h3>
                                <hr/>
                                <p >
                                Billy decides to do some personal research on frogs and comes across a word that he does not understand. 
                                Frustrated with having to constantly open separate tabs when he wants to learn something about a word, 
                                so he decides to look for an extension to help with this issue.
                                </p>
                                <p >
                                After a while Billy comes across the the extension Swiftionary and decides to download it and try it out. 
                                After he downloads it he heads back to the website to give it a test run.
                                </p>
                                <p>
                                Billy highlights the word that he was originally unsure about with his hopes held high. 
                                Next he right clicks the highlighted word to bring up the right click menu.
                                </p>
                                <p>
                                Billy now sees that he has a new option to pick from on his right click menu. 
                                He moves his cursor over the new Swiftionary option and a new menu will appear to the 
                                right of that with the settings that Billy has set into his Swiftionary preferences.
                                </p>
                                <p>
                                Billy could have chosen to see less options for a single word highlight but has chosen to see how many options he has to work with. 
                                From the option menu that has appeared Billy can select from a total of six different functions. 
                                To find out more on what the word means Billy decides to select the definition option.
                                </p>
                                <p>
                                A small window opens onto the window and tab that Billy was currently in and gives him the definition of the 
                                word that he wanted to know. The window was small and the result fast so 
                                Billy could continue with his research on frogs without any additional hassle.
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


export default GuidePage;