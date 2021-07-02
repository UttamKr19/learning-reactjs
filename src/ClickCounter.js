import React, { Component } from 'react'
import withCounter from './withCounter';

class ClickCounter extends Component {

    render() {
        return (
            <div>
                <button className="btn-block body-light" 
                    onClick={this.props.incrementCount}>
                        Clicked {this.props.count} times
                </button>
            </div>
        )
    }
}

export default withCounter(ClickCounter);