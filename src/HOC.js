import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCount from './HoverCount'


export default class HOC extends Component {
    render() {
        return (
            <div>
                <ClickCounter/>
                <HoverCount/>
            </div>
        )
    }
}
