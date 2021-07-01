import React from 'react';

export default class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state={
            error:false
        }
    }

    static getDerivedStateFromError(){
        return {error:true}
    }

    handleOnClick(e){
        this.setState({
            error:!this.state.error
        })
        
    }

    render(){
        
        return(
            
            <div>
                <h1>Error Boundary</h1>
                <button className="btn btn-block btn-danger" onClick={this.handleOnClick.bind(this)}> Create Error </button>

                {
                    this.state.error?  new Error("Custorm eror")   : <div> fine </div>
                }
            </div>
        )
    }
}