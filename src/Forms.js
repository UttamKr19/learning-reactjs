import React from 'react';
//forms
export default class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
                        name:'',
                        password:'' ,
                        nameError:'',
                        passwordError:''
                    };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    valid(){
        if(!this.state.name.includes('@')){
            this.setState({
                            nameError:'Invalid name'
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
            nameError:'',
            passwordError:''
        });

        if(this.valid()){
            event.target[2].className="btn btn-block btn-success";
            console.log(this.state);
        }
        else{
            console.log('Validation problem',this.state.nameError,this.state.passwordError);
        }
    }

    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}} />
                    <p className="formError">{this.state.nameError}</p>
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