import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export default class CompF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username)=>{
                        return <div> hello {username} </div>
                    }
                }
            </UserConsumer>
        )
    }
}
