import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DownloadPage from './DownloadPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<DownloadPage/>, document.getElementById('download'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
