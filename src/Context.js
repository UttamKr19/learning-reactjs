import React, { Component } from 'react'
import CompC from './CompC'
import { UserProvider } from './userContext';

export default class Context extends Component {
    render() {
        return (
            <UserProvider value="uttam">
                <CompC/>
            </UserProvider>
        )
    }
}
