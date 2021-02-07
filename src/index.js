import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import InstService from './services/inst-service';
import InstServiceContext from './components/resto-service-context';
import store from './store';


import './index.css';

const instService = new InstService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <InstServiceContext.Provider value={instService}>
                <Router>
                    <App/>
                </Router>
            </InstServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));
