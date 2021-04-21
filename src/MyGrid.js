import React from 'react'
import { Grid, Paper } from '@material-ui/core'

function MyGrid() {
    return (
        <>
            <div className='divStyle'>
                <Grid container spacing={2} className='gridStyle'>
                    <Grid item xs={2}>
                        <Paper className='paper'>1</Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper className='paper'>2</Paper>
                    </Grid>
                    <Grid item xs ={2}>
                        <Paper className='paper'>3</Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default MyGrid
