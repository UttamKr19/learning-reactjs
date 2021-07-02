import React from 'react';
import {Button,Modal} from 'react-bootstrap'

export default class ReactModal extends React.Component{
    constructor(){
        super();
        this.state={
            show:true
        }
    }

    handleModal(){
        this.setState({
            show:!this.state.show
        })
    }

    render(){
        
        return(
            
            <div>
                <h1> Modal in React</h1>
                <Button onClick={()=>this.handleModal()} className="btn-block">Click Me</Button>
                <Modal show={this.state.show} onHide={()=>this.handleModal()} animation={false}>
                    <Modal.Header closeButton> Modal Heading</Modal.Header>
                    <Modal.Body>
                        Hello world
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>this.handleModal()}>Close</Button>
                        <Button onClick={()=>this.handleModal()}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
