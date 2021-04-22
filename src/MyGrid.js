import React from 'react'
import { Grid, Paper } from '@material-ui/core'

function MyGrid() {
    return (
        <>
            <div className='divStyle'>
                <Grid container spacing={10}>
                    <Grid item xs={4}>
                        <Paper className='paper'>1</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper  className='paper'>2</Paper>
                    </Grid>
                    <Grid item xs ={4}>
                        <Paper className='paper'>3</Paper>
                    </Grid>
                    <Grid item xs ={4}>
                        <Paper className='paper'>4</Paper>
                    </Grid>
                    <Grid item xs = {4}>
                        <Paper className='paper'>5</Paper>
                    </Grid>
                    <Grid item xs ={4}>
                        <Paper className='paper'>6</Paper>
                    </Grid>
                    <Grid item xs ={4}>
                        <Paper className='paper'>7</Paper>
                    </Grid>
                    <Grid item xs ={4}>
                        <Paper className='paper'>8</Paper>
                    </Grid>
                    <Grid item xs ={4}>
                        <Paper className='paper'>9</Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default MyGrid
