import React, { Component } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import './../App.css';
import { Jumbotron, Button, Navbar, Nav, NavItem, MenuItem, NavDropdown, Grid, Row, Col } from 'react-bootstrap';
import Title from './Title';
import { tween } from 'popmotion';

/**
 * MainPage Component
 * 
 * The MainPage component contains the general information for the
 * front page of the website. 
 * 
 * 
 */
class MainPage extends Component {
  state = { hovering: false, hovering1: false, hovering2: false };
  render() {
    return (
      <div className="MainPage">
        <header>
          <Jumbotron className="jumbo">
            <img src="Swiftionary Text.png" alt="Swiftionary" />
            <p>A simple way to search and learn.</p>
            <Button variant="outline-primary" size="large">Download</Button>
          </Jumbotron>
          <Jumbotron className="info-jumbo">
            <Grid>
              <Row>
                <Col xs={12} md={4}>
                  <img src="descriptor1.png" alt="book" className="info-image" />
                  <h1 className="info-title">Smart</h1>
                  <hr />
                  <div className="container">
                    <p className="info-text">Swiftionary allows you to search smart while cluttering up your browser with tabs. Learn and understand words, phrases and more within your own webpage.</p>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <img src="descriptor2.png" alt="lightning bolt" className="info-image" />
                  <h1 className="info-title">Swift</h1>
                  <hr />
                  <div className="container">
                    <p className="info-text">Opening and searching for definitions can be slow when opening up new tabs. Instead, look up the definition fast and return back to reading!</p>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <img src="descriptor3.png" alt="sparkles" className="info-image" />
                  <h1 className="info-title">Superb</h1>
                  <hr />
                  <div className="container">
                    <p>With many different search options from definitions, slang definitions, and translations, Swiftionary's customizability and variety allow you to search the way you want.</p>
                  </div>
                </Col>
              </Row>
            </Grid>
          </Jumbotron>
          <div className="container how-it-works">
            <Title title='See how it works.' />
            <p>Swiftionary works in a simple fashion to simplify trivial searches. No typing,
              no search bars, just instant results.
                  </p>
            <p>With a plethora of features for users to explore, Swiftionary
                allows you to learn different things about the unknown in different
                ways.
            </p>
          </div>
          <Grid>
            <Row>
              <Col xs={12} md={4}>
                <StyledLogo
                  pose={this.state.hovering ? "hovered" : "idle"}
                  onMouseEnter={() => this.setState({ hovering: true })}
                  onMouseLeave={() => this.setState({ hovering: false })}
                >
                  <div className="PopupBox">
                    <h2>burlesque</h2>
                    <hr />
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
                  onMouseEnter={() => this.setState({ hovering1: true })}
                  onMouseLeave={() => this.setState({ hovering1: false })}
                >
                  <div className="PopupBox">
                    <h2>moonstruck</h2>
                    <hr />
                    <p>/ˈmo͞onˌstrək/</p>
                    <i>adjective</i>
                    <p>unable to think or act normally, especially because of being in love.</p>
                  </div></StyledLogo>
                {/* <InfoTable/> */}
              </Col>
              <Col xs={12} md={4}>
                <StyledLogo
                  pose={this.state.hovering2 ? "hovered" : "idle"}
                  onMouseEnter={() => this.setState({ hovering2: true })}
                  onMouseLeave={() => this.setState({ hovering2: false })}
                >
                  <div className="PopupBox">
                    <h2>sibilate</h2>
                    <hr />
                    <p>/ˈsibəˌlāt/</p>
                    <i>verb</i>
                    <p>to utter or pronounce with a hissing sound.</p>
                  </div>
                </StyledLogo>
              </Col>
            </Row>
          </Grid>
          <Col xs={12} md={6}>

          </Col>
          <div className="MainGrid" >

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

              </Row>
            </Grid>
            {/* Paragraph information.
                  Most of this information isn't well formatted Needs editing via CSS
                  TODO: Create CS and stylize this part better (put it back in center of page
                  or make smaller) */}
            
          </div>
        </header>
      </div >
    );
  }
}

const SwiftionaryLogo = posed.div({

  idle: {
    scale: 1,
    opacity: 0.75,
    transition: props => tween({ ...props, duration: 2000 }),
    background: "#6297b6"
  },
  hovered: {
    scale: 1.25,
    opacity: 1,
    transition: props => tween({ ...props, duration: 1000 }),
    background: "#ffffff"
  }
})

var w = (-(window.innerWidth / 15)).toString() + "%";
console.log(w)

const StyledLogo = styled(SwiftionaryLogo)`
  border-radius:25px;
  padding:10px;
`;


export default MainPage;