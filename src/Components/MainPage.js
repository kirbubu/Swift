import React, { Component } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import logo from './../logo.svg';
import './../App.css';
import {Jumbotron,Button,Navbar,Nav,NavItem,MenuItem,NavDropdown,Grid,Row,Col} from 'react-bootstrap';
import Title from './Title';
import InfoTable from './InfoTable';
import MainNav from './MainNav';
import DownloadPage from './DownloadPage';
import { tween } from 'popmotion';

/**
 * MainPage Component
 * 
 * The MainPage component contains the general information for the
 * front page of the website. 
 * 
 * 
 */

 
class MainPage extends Component{
  state = {hovering:false, hovering1:false, hovering2: false};
  render(){
    return(
      <div className="MainPage">
              <header>      
                {/* Create a jumbotron component (from bootstrap) */}
                <Jumbotron className="App-header Jumbotron-Container Container-Fluid">
                {/* Add the swiftionary logo text.
                    alt is a string that will display if the image can't be loaded
                    the class Swiftionary in CSS allows the image to resize as 
                    the screen resolution changes
                */}
                <img src="Swiftionary Text.png" alt="Swiftionary Text" class="Swiftionary"/>
                {/* Text */}
                <p>
                  A simple way to conveniently search
                </p>
                {/* Creating a button
                      bsStyle is an automatic styling through bootstrap
                      Works fine for now but in future might look better
                      to write on custom CSS to better fit the theme of the webpage.
                    */}
                <p>
                  <Button bsStyle='info' className="Montserrat">Learn more</Button>
                </p>
                </Jumbotron>
                {/* Grid is also a bootstrap component That allows you to place
                  components on a dynamic grid. Good for spacing out elements and
                  making the website look well formatted instead of just all the 
                  components on top of each other */}
                <div className="MainGrid" >
                <p className="MainText">
                  Swiftionary allows you to search without hassle. No more opening tabs, 
                  losing concentration, or skipping over words.
                </p>
                <p className="MainText">
                  <Title title='See how it works.'/>
                  <p>Swiftionary works in a simple fashion to simplify trivial searches. No typing,
                    no search bars, just instant results.
                  </p>
                  <p>With a plethora of features for users to explore, Swiftionary
                      allows you to learn different things about the unknown in different
                      ways.
                  </p>
                  
                </p>
                <Grid className="MainGrid">
                  {/* Creating a row */}
                  <Row>
                    {/* Column size is actually the row width, or the column width I guess?
                        You want to initialize xs as {12} as that's a default size for most
                        webpages and a standard. md refers how big the column will. So if
                        xs={12}, 12 is the maximum components can take up in that horizontal
                        plane. when md=4, your taking up 4 out of the 12 spaces in the row,
                        meaning there's 8 left.
                      */}
                      <Col xs={12} md={4}>
                        <StyledLogo 
                        pose={this.state.hovering ? "hovered" : "idle"}
                        onMouseEnter={()=> this.setState({hovering:true})}
                        onMouseLeave={()=> this.setState({hovering:false})}
                        >
                        <div className="PopupBox">
                            <h2>burlesque</h2>
                            <hr/>
                            <p>/ˌbərˈlesk/</p>
                            <i>noun</i>
                            <p>an absurd or comically exaggerated imitation of something, especially in a literary or dramatic work; a parody.</p>
                        </div></StyledLogo>
                      {/* <img src="Swiftionary Logo.png" width="100" height="100"/> */}
                      </Col>
                      {/* Use up the other eight spaces in the row with a table. It will
                      appear to the right of the logo when wide enough, or below it on mobile
                      due to the lack of space (tables are huge) */}
                      <Col xs={12} md={4}>
                      <StyledLogo 
                        pose={this.state.hovering1 ? "hovered" : "idle"}
                        onMouseEnter={()=> this.setState({hovering1:true})}
                        onMouseLeave={()=> this.setState({hovering1:false})}
                        >
                        <div className="PopupBox">
                            <h2>moonstruck</h2>
                            <hr/>
                            <p>/ˈmo͞onˌstrək/</p>
                            <i>adjective</i>
                            <p>unable to think or act normally, especially because of being in love.</p>
                        </div></StyledLogo>
                        {/* <InfoTable/> */}
                      </Col>
                      <Col xs={12} md={4}>
                      <StyledLogo 
                        pose={this.state.hovering2 ? "hovered" : "idle"}
                        onMouseEnter={()=> this.setState({hovering2:true})}
                        onMouseLeave={()=> this.setState({hovering2:false})}
                        >
                        <div className="PopupBox">
                            <h2>sibilate</h2>
                            <hr/>
                            <p>/ˈsibəˌlāt/</p>
                            <i>verb</i>
                            <p>to utter or pronounce with a hissing sound.</p>
                        </div></StyledLogo>
                      </Col>
                  </Row>
                </Grid>
                {/* Paragraph information.
                  Most of this information isn't well formatted Needs editing via CSS
                  TODO: Create CS and stylize this part better (put it back in center of page
                  or make smaller) */}
                <p className="MainText"> 
                  <Title title='Choose what you want.'/>
                  <p>Don't like highlighting? Right click on the word to select options.
                    Don't like all the options Swifitonary provides? Choose which ones you 
                    like the best.
                  </p>
                  <p>
                    Choose what features you've been looking for when you initally download
                    Swiftionary. If you grow tired of one, or are looking for something new,
                    you can always change it up in the settings.
                  </p>
                </p>
                <p className="MainText">
                  <Title title ='Swift Results, No Distractions.'/>
                  <p>Swiftionary removes the need of cluttering your browser with tabs when writing
                     in Google Docs or reading articles online. Instantely on your screen, results
                     for your searches will appear and go, removing any hassle.
                  </p>
                </p>
                </div>
              </header>
            </div>
          );
  }
}

const SwiftionaryLogo = posed.div({
  
  idle: {
    scale: 1,
    opacity: 0.75,
    transition: props=>tween({...props, duration:2000}),
    background: "#61dafb"
  },
  hovered: {
    scale: 1.25,
    opacity: 1,
    transition: props=> tween({...props, duration:1000}),
    background: "#ffffff"
  }
})

var w = (-(window.innerWidth/15)).toString() + "%";
console.log(w)
const Hermit = posed.div({
  
  draggable: 'x',
  dragBounds:{left: w, right:'0%' },
  init: {scale: 0.95},
  hover: {scale: 1.1},
  drag: {scale:1.0},
  dragEnd: {
    x:0,
    y:0,
    transition: {type : 'spring'}
    }
  }
)

const HermitImg = styled(Hermit)`
  border-radius:25px;
  padding:10px;
`;

const StyledLogo = styled(SwiftionaryLogo)`
  border-radius:25px;
  padding:10px;
`;


export default MainPage;