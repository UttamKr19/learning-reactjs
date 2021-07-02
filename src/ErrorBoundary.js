import React from 'react';

export default class ErrorBoundary extends React.Component{
    constructor(props){
        super();
        this.state={
            error:false
        }
    }

    static getDerivedStateFromError(){
        return {error:true}
    }

    componentDidCatch(error,info){
        console.log(error,info);
    }

    render(){
        
        if(this.state.error){
            return <>Something went wrong</>
        }
        return(
            this.props.children
        )
    }
}