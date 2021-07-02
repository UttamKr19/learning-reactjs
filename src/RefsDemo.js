import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.handleOnClick=this.handleOnClick.bind(this);

        this.inputRef=React.createRef();
        this.paraRef=React.createRef();
        
    }
    
    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }

    handleOnClick(){
        this.paraRef.current.innerText=this.inputRef.current.value;
        // alert(this.inputRef.current.value);
    }

    render() {
        return (
            <div className="text-center" style={this.customStyle}>
                <input className="btn-danger" type="text" ref={this.inputRef}/>
                <button  className="btn-success" onClick={this.handleOnClick}>Click</button>

                <p ref={this.paraRef}></p>
            </div>
        )
    }
}

export default RefsDemo
