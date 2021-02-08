import React from 'react';
import {MainPage} from '../pages';
import {Route, Switch} from 'react-router-dom';

import './app.css';

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route path='/' exact component={MainPage}/>
            </Switch>
        </div>
        
    )
    
}

export default App;