import React from 'react'
import Modal from '@material-ui/core/Modal'
import './Styles.css'

const popper= (props) => {
    return (
        <>
            <Modal open={true}>
                <div className='pUp'>
                    Victory !
                    <h2 className='rStart' onClick={props.c}>
                        [Restart]
                    </h2>
                </div>
            </Modal>
        </>
    )
}

export default popper
