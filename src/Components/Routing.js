import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import DownloadPage from './DownloadPage';
import GuidePage from './GuidePage';
import MainPage from './MainPage';
import DeveloperPage from './DeveloperPage';
import AboutPage from './AboutPage';

/**
 * Routes Component 
 * 
 * Routes is a BrowserRouter Component that contains all of the available routes
 * to the different webpages. It renders new components on the screen instead of
 * loading up completely different html files, which is a hassle to code.
 * 
 * The BrowserRouter class encapsulates different routes, whose paths determine
 * what the url extension to the original webpage needs to be. 
 * 
 * For example, localhost:3000 would load the MainPage component, while
 * localhost:3000/downloads would load the DownloadPage component.
 * 
 * Instantiating this module in a different app will render the components whenever
 * the url is defined. <Routes/> is called in App.cs before MainNav. 
 */
class Routes extends Component{
    render(){
        return(
    
        <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div>
                {/* Create the paths */}
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/downloads' component={DownloadPage}/>
                <Route exact path='/user-guide' component={GuidePage}/>
                <Route exact path='/developer-guide' component={DeveloperPage}/>
                <Route exact path='/about' component={AboutPage}/>
                </div>
        </BrowserRouter>
        );
    }
};

export default Routes;