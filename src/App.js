import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './components/Login';
import './styles.scss';
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';

function App() {

    const logout = async () => {
        window.localStorage.removeItem('authToken');
        window.location.href = '/login';
    }

    return (
        <Router>
            <div className="App">
                <header>
                    Color Picker Sprint Challenge
                    <a onClick={logout} data-testid="logoutButton" href="#" >logout</a>
                </header>

                <Switch>
                    <Route path="/login" exact>
                        <Login/>
                    </Route>
                    <PrivateRoute path="/bubbles" component={BubblePage} exact/>
                    <Route path="/" exact>
                        <Login/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;

//Task List:
//1. Add in two routes for the Login Component, one for the default path '/' and one for the '/login.'
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
