import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// class based component equivalent of function based component HELLO 
// class Hello extends React.Component {
//   render() {
//     return <div>Hello {this.props.toWhat}</div>;
//   }
// }


// Function based component
function Hello(props){
  return <div>
           <h1>Hello,  {props.toWhat} </h1>
        </div>
}


// Class based component
class Main extends React.Component{
  render(){
    return <div>
      bello <hr/>
      <Hello toWhat="world "/>
    </div>;
  }
}

// Use of componentDidMount, componentDidUpdate, this.state, this.setState()
class Clock extends React.Component {
  constructor(props) {
    super(props); //always called in top of class based component constructor
    this.val=0;

    //initializing state with some values
    this.state = { 
                    date: new Date(),
                    val:0
                };
  }


  // called every time there is any update in component (i.e, the state here)
  componentDidUpdate(){
    //console.log('did update',this.state.val);
  }

  // called one time, at the time of mounting of component
  componentDidMount() {
    console.log('did Mount');
    //calling tick() function after every 1 second again and again
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // In case we unmount the component, this mthd will clear out the timer running bcz of setInterval() mthd
  // called right before the unmounting 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  tick() {
    console.log('tick() called')
    
    //updating state of component using setState() method
    //if we set the same values {date:this.state.date, val:this.state.val} then componentDidUpdate will not be called
    //also simply using this.state.date=new value will not re-render, we have to use setState() to update the UI  
    this.setState({
      date: new Date(),
      val:this.state.val+1
    });

    // // for asynchronous behaviour in code, it's better to pass fxn in the setState() args instead of this.state
    // // here state is previous state and props is properties
    // this.setState((state, props) => ({
    //   counter: state.counter + props.increment
    // }));
    
  }

// render method returning JSX - JavaScript Syntax Extension
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


class Toggle extends React.Component {
  //constructor and super can also be called without args
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    //binding handleClick variable with handleClick()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //console.log('button clicked',this.state.isToggleOn?"ON":"OFF");
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    
    return (
      <button className="btn btn-primary btn-block" onClick={this.handleClick}> 
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

// conditional rendering =============================
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button className="btn btn-block btn-success" onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button className="btn btn-block btn-danger" onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    // using ternary operator
    // <div>
    //   {isLoggedIn
    //     ? <LogoutButton onClick={this.handleLogoutClick} />
    //     : <LoginButton onClick={this.handleLoginClick} />
    //   }
    // </div>
    

    // return null to hide component, it will only hide it but won't unmount it
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
//=============================================================================


// list and keys
//-- looping through elements using map()
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];


//forms
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

// first argument- JSX element that is to be rendered, second argument- where to render
ReactDOM.render(
  <>
  <Main/>
  {/* <Clock/> */}
  <Toggle/>
  <LoginControl/>
  {/* <NumberList numbers={numbers}/> */}
  <NameForm/>
  <Reservation/>
  </>,
  document.getElementById('root')
);
