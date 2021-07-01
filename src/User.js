import React from 'react';

export default class User extends React.Component{
    constructor(){
        super();
        this.state={
            show:true
        }
    }

    render(){
        if(true){
            throw new Error("Custom error")
        }
        
        return(
            
            <div>
                <h1>Error Boundary</h1>
            </div>
        )
    }
}