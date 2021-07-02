import React, { Component } from 'react'

function Columns(props){
    return (
        <React.Fragment>
            <td>{props.name} </td>
            <td>{props.name} </td>
        </React.Fragment>
        
    )
}
export default class Fragment extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody> 
                        <tr>
                            <Columns name="uttam"/>
                        </tr>
                        <tr>
                            <Columns name="Kumar"/>
                        </tr>
                    </tbody>
                    
                </table>
                
            </div>
        )
    }
}
