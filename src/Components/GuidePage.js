import React, { Component } from "react";
import logo from "./../logo.svg";
import "./Component CSS/DownloadPage.css";
import {
  Panel,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import Title from "./Title";
import InfoTable from "./InfoTable";
import MainNav from "./MainNav";

// Currently under construction contains all the information for the downloadpage
// all will eventually include download links.
class GuidePage extends Component {
  render() {
    return (
      <div>
        <header>
          <Grid className="UserGuideGrid">
            <Row>
              <h1>Swiftionary User Guide</h1>
              <Col xs={12} md={4}>
                <Panel>
                  <Grid>
                    <Row>
                      <Col xs={3} md={3}>
                        <p className="PanelHeader">Contents</p>
                      </Col>
                    </Row>
                    <InfoRow index={1} title="Problem" href="#Problem" />
                    <InfoRow index={2} title="Goal" href="#Goal" />
                    <InfoRow index={3} title="Setup" href="#Setup" />
                    <InfoRow index={4} title="How to Use" href="#HowToUse" />
                    <InfoRow
                      index={5}
                      title="Preferences"
                      href="#Preferences"
                    />
                  </Grid>
                </Panel>
              </Col>
              <div>
                <h3 id="#Problem" className="Header">
                  Problem
                </h3>
                <hr />
                <p>
                  Many people face a problem whenever they see a word that they
                  do not recognize. We live in an age where the Internet is used
                  heavily. An increasing amount of people are using the Internet
                  to learn new information. With many pages being visited every
                  day by a single person, they are bound to encounter words that
                  they do not recognize. The information age we live in relies a
                  lot on the Internet. When people find a word they do not know
                  the meaning of, a phrase, or name that they do not recognize,
                  they have to open another tab in order to search for the
                  meaning of what they are interested in. The rate at which we
                  transfer requests from our brains to computers needs to be
                  sped up and this project will help us move one step further
                  towards this goal.
                </p>
              </div>
              <div>
                <h3 id="#Goal">Goal</h3>
                <hr />
                <p>
                  The goal of Swiftionary is to help people find the meaning of
                  words faster without having to open another tab. It is for
                  people who want to learn new information at a faster rate.
                  Swiftionary has many features for its users. They can find the
                  definition of a word. They may want to go more in depth, and
                  find the antonym/synonym. If a name is highlighted, the three
                  most popular results with that name will be presented to the
                  user. If a phrase is highlighted, the user will be presented
                  with the meaning of that phrase. If a foreign word or phrase
                  is highlighted, it will be translated to English. If an
                  incorrect word or phrase is highlighted, it will be spell
                  checked to find how to spell it correctly.
                </p>
              </div>
              <div>
                <h3 id="#Setup">Setup</h3>
                <hr />
                <p>
                  To get started, the user will need to go to the Swiftionary
                  website at{" "}
                  <a href="https://swiftionary-website.appspot.com/">here</a>,
                  go to Downloads, and it’ll redirect the user to the Chrome Web
                  Store. The user can must click install so they can install the
                  extension for their browser. When the extension is installed,
                  the user can click on the Swiftionary logo on the taskbar and
                  go to the preferences menu. They can choose which features
                  they would like to remove so the features that are not
                  relevant to them will not appear. This will make it easier for
                  them to not feel overwhelmed when they right click on a word
                  or phrase since they won’t be seeing every single option that
                  may not be relevant to them. After they are finished with
                  their preferences, they can now see the options provided from
                  Swiftionary when they highlight a word or phrase and right
                  click on it.
                </p>
              </div>
              <div>
                <h3 id="$HowToUse">How To Use</h3>
                <hr />
                <p>
                  The way to use this project will be through the use of
                  highlighting and right clicking. First, the user needs to use
                  their mouse to highlight the word or phrase that they are
                  interested in. The user must now right click on the word or
                  phrase for the relevant options from the extension to appear.
                  Once an option is clicked on from the list, a box will appear
                  that shows the relevant information needed to answer the users
                  request. This information will be presented to the user all
                  within the same tab that they are currently viewing; they do
                  not need to deviate from the page that they are viewing. A new
                  tab will not need to be opened in order for them to attain the
                  relevant information that they desire. This is a core concept
                  of the project. The project will be built with efficiency in
                  mind. The project needs to be as efficient as possible since
                  accuracy and speed are ways to measure the usefulness of the
                  project.
                </p>
                <img src="userg1.png" className="ImageAlign" />
                <p>
                  Billy decides to do some personal research on frogs and comes
                  across a word that he does not understand. Frustrated with
                  having to constantly open separate tabs when he wants to learn
                  something about a word, so he decides to look for an extension
                  to help with this issue.
                </p>
                <img src="userg2.png" className="ImageAlign" />
                <p>
                  After a while Billy comes across the the extension Swiftionary
                  and decides to try it out. He makes sure to look at the on
                  site tutorials and examples to make sure it is the kind of
                  extension he wants. After he is sure he downloads it and he
                  heads back to the website to give it a test run.
                </p>
                <img src="userg3.png" className="ImageAlign" />
                <p>
                  Billy highlights the word that he was originally unsure about
                  with his hopes held high. Next he right clicks the highlighted
                  word to bring up the right click menu.
                </p>
                <img src="userg4.png" className="ImageAlign" />
                <p>
                  Billy now sees that he has a new option to pick from on his
                  right click menu. He moves his cursor over the new Swiftionary
                  option and a new menu will appear to the right of that with
                  the settings that Billy has set into his Swiftionary
                  preferences.
                </p>
                <img src="userg5.png" className="ImageAlign" />
                <p>
                  Billy could have chosen to see less options for a single word
                  highlight but has chosen to see how many options he has to
                  work with. From the option menu that has appeared Billy can
                  select from a total of six different functions. To find out
                  more on what the word means Billy decides to select the
                  definition option.
                </p>
                <img src="userg6.png" className="ImageAlign" />
                <p>
                  A small window opens onto the window and tab that Billy was
                  currently in and gives him the definition of the word that he
                  wanted to know. The window was small and the result fast so
                  Billy could continue with his research on frogs without any
                  additional hassle. Happy at this Billy told all his frogs of
                  his new discovery.
                </p>
              </div>
              <div>
                <h3 id="#Preferences">Preferences</h3>
                <hr />
                <p>
                  The preferences panel is where the user can filter out the
                  different options the user has when highlighting a
                  word/phrase. Simply checkmark the desired option to have the
                  option available when right clicking, and uncheck the desired
                  option to not see the option.
                </p>
                <img src="userg7.png" className="ImageAlignB" />
              </div>
              {/* TODO: Add rows and columns for formatting parts
                        of the webpage */}
            </Row>
          </Grid>
        </header>
      </div>
    );
  }
}

function InfoRow(props) {
  return (
    <Row>
      <Col xs={3} md={3}>
        {props.index + ". "}
        <a href={props.href}>{props.title}</a>
      </Col>
    </Row>
  );
}

export default GuidePage;
