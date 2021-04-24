import React, {useState} from 'react'
import { Grid, Paper, ThemeProvider, makeStyles} from '@material-ui/core'



const useStyles = makeStyles({
    paper1: {
        color: '#55390C',
        backgroundColor: '#D1993E',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        fontSize: '7vw',
        elevation: '12'
    }
})
function MyGrid() {

    const classes = useStyles()
    const [ele0, updateEle0] = useState(true)
    const [ele1, updateEle1] = useState(true)
    const [ele2, updateEle2] = useState(true)
    const [ele3, updateEle3] = useState(true)
    const [ele4, updateEle4] = useState(true)
    const [ele5, updateEle5] = useState(true)
    const [ele6, updateEle6] = useState(true)
    const [ele7, updateEle7] = useState(true)
    const [ele8, updateEle8] = useState(true)

    function changeEle0(){
        updateEle0(prevEle0 => !prevEle0)
    }
    function changeEle1(){
        updateEle1(prevEle1 => !prevEle1)
    }
    function changeEle2(){
        updateEle2(prevEle2 => !prevEle2)
    }
    function changeEle3(){
        updateEle3(prevEle3 => !prevEle3)
    }
    function changeEle4(){
        updateEle4(prevEle4 => !prevEle4)
    }
    function changeEle5(){
        updateEle5(prevEle5 => !prevEle5)
    }
    function changeEle6(){
        updateEle6(prevEle6 => !prevEle6)
    }
    function changeEle7(){
        updateEle7(prevEle7 => !prevEle7)
    }
    function changeEle8(){
        updateEle8(prevEle8 => !prevEle8)
    }
    return (
        <>
            <div className='divStyle'>
                <ThemeProvider >
                    <Grid container spacing={2}>
                        <Grid item xs={4} >
                            <Paper onClick={changeEle0} className={classes.paper1} square elevation={ele0? 12:0}>{ele0? '_':'X'}</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper onClick={changeEle1} className={classes.paper1} square elevation={ele1? 12:0}>{ele1? '_':'X'}</Paper>
                        </Grid>
                        <Grid item xs={4} >
                            <Paper onClick={changeEle2} className={classes.paper1} square elevation={ele2? 12:0}>{ele2? '_':'X'}</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper onClick={changeEle3} className={classes.paper1} square elevation={ele3? 12:0}>{ele3? '_':'X'}</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper onClick={changeEle4} className={classes.paper1} square elevation={ele4? 12:0}>{ele4? '_':'X'}</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper onClick={changeEle5} className={classes.paper1} square elevation={ele5? 12:0}>{ele5? '_':'X'}</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper onClick={changeEle6} className={classes.paper1} square elevation={ele6? 12:0}>{ele6? '_':'X'}</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper onClick={changeEle7} className={classes.paper1} square elevation={ele7? 12:0}>{ele7? '_':'X'}</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper onClick={changeEle8} className={classes.paper1} square elevation={ele8? 12:0}>{ele8? '_':'X'}</Paper>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </>
    )
}

export default MyGrid
