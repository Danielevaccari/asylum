import React from 'react'
import { Grid, Paper, ThemeProvider, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    paper1: {
        color: '#55390C',
        backgroundColor: '#D1993E',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '150px',
        fontSize: '10em'
    }
})
function MyGrid() {
    const classes = useStyles()

    return (
        <>
            <div className='divStyle'>
                <ThemeProvider >
                    <Grid container spacing={0}>
                        <Grid item xs={4} >
                            <Paper className={classes.paper1} square >X</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper1} square >O</Paper>
                        </Grid>
                        <Grid item xs={4} >
                            <Paper className={classes.paper1} square >3</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper1} square >4</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper1} square >5</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper1} square >6</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper1} square >7</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper1} square >8</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper1} square >9</Paper>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </>
    )
}

export default MyGrid
