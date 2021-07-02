import React from 'react';
import Home from './Home';
import Hooks from './Hooks';
import Forms from './Forms';
import LoginControl from './ConditionalRendering';
import Api from './Api';
import ReactModal from './ReactModal';
import Error from './Error';
import Fragment from './Fragment';
import './routing.css';
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import RefsDemo from './RefsDemo';
import Portal from './Portal';
import HOC from './HOC';
import Context from './Context';



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
                        {/* <li> <Link to="/modal">Modal</Link> </li> */}
                        <li> <Link to="/error">Error</Link> </li>
                        <li> <Link to="/fragment">Fragments</Link> </li>
                        <li> <Link to="/refs">Refs</Link> </li>
                        {/* <li> <Link to="/portal">Portal</Link> </li> */}
                        <li> <Link to="/hoc">HOC</Link> </li>
                        <li> <Link to="/context">Context</Link> </li>
                        
                        

                        <li className="themeButton"> <Button>Light</Button></li>
                    </ul>
                    
                    <Route exact path="/" component={Home}/>
                    <Route path="/forms" component={Forms}/>
                    <Route path="/hooks" component={Hooks}/>
                    <Route path="/login" component={LoginControl}/>
                    <Route path="/api" component={Api}/>
                    <Route path="/modal" component={ReactModal}/>
                    <Route path="/error" component={Error}/>
                    <Route path="/fragment" component={Fragment}/>
                    <Route path="/refs" component={RefsDemo}/>
                    <Route path="/portal" component={Portal}/>
                    <Route path="/hoc" component={HOC}/>
                    <Route path="/context" component={Context}/>
                    

                </Router>
                
            </div>


        )
    }
}