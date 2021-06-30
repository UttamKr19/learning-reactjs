import React from 'react';
import Home from './Home';
import Hooks from './Hooks';
import Forms from './Forms';
import LoginControl from './ConditionalRendering';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


export default class Routing extends React.Component{
    render(){
        return (
            <div>
                <Router>
                    <Link to="/">Home</Link>
                    <Link to="/forms">Forms</Link>
                    <Link to="/hooks">Hooks</Link>
                    <Link to="/login">Login</Link>

                    <Route exact path="/" component={Home}/>
                    <Route path="/forms" component={Forms}/>
                    <Route path="/hooks" component={Hooks}/>
                    <Route path="/login" component={LoginControl}/>

                </Router>
            </div>


        )
    }
}