import React from 'react';
import Home from './Home';
import Hooks from './Hooks';
import Forms from './Forms';
import LoginControl from './ConditionalRendering';
import Api from './Api';
import ReactModal from './ReactModal';
import User from './User'
import ErrorBoundary from './ErrorBoundary';
import './routing.css';
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'



export default class Routing extends React.Component{

    constructor(){
        super();

    }

    changeTheme(e){
        
    }


    render(){
        return (
            <div className="routing">
                <Router>
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/forms">Forms</Link> </li>
                        <li> <Link to="/hooks">Hooks</Link> </li>
                        <li> <Link to="/login">Conditional</Link> </li>
                        <li> <Link to="/api">API</Link> </li>
                        <li> <Link to="/modal">Modal</Link> </li>
                        <li> <Link to="/error">ErrorBoundary</Link> </li>
                        

                        <li className="themeButton"> <Button>Light</Button></li>
                    </ul>
                    
                    <Route exact path="/" component={Home}/>
                    <Route path="/forms" component={Forms}/>
                    <Route path="/hooks" component={Hooks}/>
                    <Route path="/login" component={LoginControl}/>
                    <Route path="/api" component={Api}/>
                    <Route path="/modal" component={ReactModal}/>
                    <Route path="/error" component={ErrorBoundary}/>

                </Router>
            </div>


        )
    }
}