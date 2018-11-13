import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MainLeft from './MainLeft';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<MainLeft />, document.getElementById('mainleft'));
serviceWorker.unregister();
