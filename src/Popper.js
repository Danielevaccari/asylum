import React from 'react'
import Modal from '@material-ui/core/Modal'
import MyGrid from './MyGrid'

function popper() {
    return (
        <>
            <Modal open={MyGrid.w}>
                <h1>
                    victory !
                </h1>
            </Modal>
        </>
    )
}

export default popper
