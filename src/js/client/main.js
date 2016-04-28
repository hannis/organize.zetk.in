/**
 * This is the main entry point of the client-side instance of the application.
 * The server will have already rendered the HTML and prepared initial dataset
 * in the bootstrap-data script element.
*/
import FluxComponent from 'flummox/component';
import cookie from 'cookie-cutter';
import React from 'react';
import ReactDOM from 'react-dom';
import Z from 'zetkin';

import polyfills from '../utils/polyfills';
import App from '../components/App';
import Flux from '../flux';

window.onload = function() {
    var flux = new Flux();

    // Configure API to use server
    Z.configure({
        base: '/api',
        host: location.hostname,
        port: location.port,
        ssl: false
    });

    if (cookie.get('apitoken')) {
        Z.setToken(cookie.get('apitoken'));
    }

    var dataElement = document.getElementById('bootstrap-data');
    flux.deserialize(dataElement.innerText || dataElement.textContent);

    ReactDOM.render(React.createElement(FluxComponent, { flux: flux },
        React.createElement(App)), document);

    // TODO: Remove once stored queries are on server
    flux.getActions('query').loadQueriesFromLocalStorage();
};
