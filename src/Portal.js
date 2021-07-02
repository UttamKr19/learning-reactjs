import React, { Component } from 'react'
import { ReactDOM } from 'react-dom';


export default function Portal() {
    return ReactDOM.createPortal( 
        <div>
            portal
        </div>,
        document.getElementById('portal-root')
    )
}
