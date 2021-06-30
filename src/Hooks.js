import React from 'react';
import { useState } from 'react';

//hooks
export default function Hooks(props) {

    let [count, setCount] = useState(0);
  
    return (
      <div>
        <button className="btn btn-block btn-info" onClick={() => { setCount(count + 1) }}>Count</button>
        <p className="text-center">{count}</p>
      </div>
    );
  }