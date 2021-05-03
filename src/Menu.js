import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import Menu2 from './Menu2'

function Menu() {

    const [show, setShow] = useState(false)

    const changeShow = () => {
        setShow(prevShow => !prevShow)
    }


    return (
        <>
            
            < Button size= 'small' variant='outlined' onClick={changeShow}>Menu</Button>
            {show && <Menu2 />}
        </>
    )
}

export default Menu
