import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Overview from './components/Overview/Overview'
import Budget from './components/Budget/Budget';

export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/overview' component={Overview}/>
        <Route path='/budget' component={Budget}/>
        <Route path='/' render={() => <h1>404 Page not found.</h1>} />

    </Switch>
)