import React from 'react';
//forms
export default class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
                        email:'',
                        password:'' ,
                        emailError:'',
                        passwordError:''
                    };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    valid(){
        if(!this.state.email.includes('@')){
            this.setState({
                            emailError:'Invalid email'
                        });
            return false;
        }
        if(this.state.password.length<3){
            this.setState({
                passwordError:'Invalid password: less than 3 letters'
            })
            return false;
        }
        return true;
    }
    

    handleSubmit(event) {
        event.preventDefault();
        
        this.setState({
            emailError:'',
            passwordError:''
        });

        if(this.valid()){
            event.target[2].className="btn btn-block btn-success";
            console.log(this.state);
        }
        else{
            console.log('Validation problem',this.state.emailError,this.state.passwordError);
        }
    }

    // handleOnChange(event){
    //     const name = target.name;
    //     this.setState({
    //         [name]:event.target.value
    //     });
    // }

    render() {
        const formStyle={
            fontSize:"20px",
            textAlign:"center",
            margin:"20px"
        }
        return (
            <form style={formStyle} onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input type="text" onChange={(event)=>{this.setState({email:event.target.value})}} />
                    <p className="formError">{this.state.emailError}</p>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}} />
                    <p className="formError">{this.state.passwordError}</p>
                </label>
                <br/>
                <button className="btn btn-block btn-info" type="submit">Submit</button>
            </form>
        );
    }
}