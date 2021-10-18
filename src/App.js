import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';
import Home from './Components/pages/Home'
import Alert from './Components/Layout/Alert';
import { About } from './Components/pages/About';
import User from './Components/users/User';
import   NotFound   from './Components/pages/NotFound';

const App = () => {
    
    return (
        <GithubState>
            <AlertState>
            <Router>
            <div className='App'>
                <Navbar />
                <div className="container">
                    <Alert />
                    <Switch>
                            <Route exact path='/' component = {Home} />
                            <Route exact path='/about' component={About} />
                                <Route exact path='/user/:login' component={User} />
                                <Route component={NotFound} />
                 </Switch>
                </div>
            </div>
            </Router>
            </AlertState>
            </GithubState>
        )
    
}

export default App
