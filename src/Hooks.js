import React from 'react';
import { useState } from 'react';

//hooks
export default function Hooks(props) {

    let [count, setCount] = useState(0);
  
    return (
      <div>
        <h1> Hooks in React</h1>
        <button className="btn-block btn-dark" onClick={() => { setCount(count + 1) }}>Count by Hooks</button>
        <p className="text-center">{count}</p>
        <Count/>
      </div>
    );
  }

  
class Count extends React.Component {
    constructor(){
      super();
      this.state={
        count:0
      }
    }

    incCount(){
      this.setState({
        count:this.state.count+1
      },
      ()=>{console.log("callback value after inc",this.state.count)}
      );

      console.log("async val",this.state.count);
    }


    render() {
      return (
        <div>
          <button className="btn-block btn-dark" onClick={() => this.incCount()}>Count by setState</button>
          <p className="text-center">{this.state.count}</p>
        </div>
      )
    }
  }
  