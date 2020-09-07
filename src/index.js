import * as React from "react";
import * as ReactDOM from 'react-dom';
import App from './App.js';

//MSWJS
const { worker } = require('./mocks/brower');
worker.start();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);



