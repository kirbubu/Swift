import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import DownloadPage from './DownloadPage';
import GuidePage from './GuidePage';
import MainPage from './MainPage';


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
    
        <BrowserRouter>
                <div>
                {/* Create the paths */}
                <Route path= {process.env.PUBLIC_URL + '/'} component={MainPage}/>
                <Route path= {process.env.PUBLIC_URL + '/downloads'} component={DownloadPage}/>
                <Route path= {process.env.PUBLIC_URL+'/user-guide'} component={GuidePage}/>
                </div>
        </BrowserRouter>
        );
    }
};

export default Routes;