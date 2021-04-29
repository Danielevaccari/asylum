import React from 'react'
import Modal from '@material-ui/core/Modal'
import './Styles.css'

const popper= (props) => {
    return (
        <>
            <Modal open={true}>
                <h1 className='pUp'>
                    Victory !
                    <h1 className='rStart'>
                        [Restart]
                    </h1>
                </h1>
            </Modal>
        </>
    )
}

export default popper
