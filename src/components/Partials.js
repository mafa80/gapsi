
import Navbar from './Navbar'


import React from 'react'

const Partials = ({children})=> {
    
    return (
        <>
            <Navbar></Navbar>
            {children}
            
        </>
    )
}


export default Partials
