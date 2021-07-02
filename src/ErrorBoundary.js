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

    componentDidCatch(){
        
    }

    handleOnClick=(e)=>{
        this.setState({
            error:!this.state.error
        })
        
    }

    generateError=()=>{
        console.log('error generated');
        throw new Error('custom error ABCD');
    }
    
    render(){
        
        return(
            
            <div>
                <h1>Error Boundary</h1>
                <button className="btn-block btn-danger" onClick={this.handleOnClick}> Create Error </button>
                {
                    this.state.error? this.generateError() : <div> Click button to generate error </div>
                }
            </div>
        )
    }
}