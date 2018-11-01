import React, {Component} from 'react';
import {Route, Router, Switch,BrowserRouter} from 'react-router-dom';

import App from './../App';
import DownloadPage from './../DownloadPage';
import MainPage from './MainPage';


class Routes extends Component{
    render(){
        return(
    
    <BrowserRouter>
            <div>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/downloads' component={DownloadPage}/>
            </div>
    </BrowserRouter>
        );
    }
};

export default Routes;