import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
// import axios from 'axios';
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = `*`;
// axios.defaults.headers.common["Access-Control-Allow-Methods"] = `GET, POST, PUT, DELETE, PATCH, OPTIONS`;
// axios.defaults.headers.common["Access-Control-Allow-Headers"] = `X-Requested-With, content-type, Authorization`;
// import * as serviceWorker from './serviceWorker';

const RootComponent = () => (
	<Routes />
)

ReactDOM.render(
    <RootComponent />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
