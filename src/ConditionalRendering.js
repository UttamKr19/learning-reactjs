import React from 'react';

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
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
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

export default LoginControl;