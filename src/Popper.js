import React from 'react'
import Modal from '@material-ui/core/Modal'
import './Styles.css'

function popper() {
    return (
        <>
            <Modal open={true}>
                <h1 className='pUp'>
                    Victory !
                </h1>
            </Modal>
        </>
    )
}

export default popper
