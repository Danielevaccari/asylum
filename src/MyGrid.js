import React, { useState } from 'react'
import { Grid, Paper, makeStyles } from '@material-ui/core'

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
    //Defines if gridcomponent is elevated
    const [ele0, updateEle0] = useState(true)
    const [ele1, updateEle1] = useState(true)
    const [ele2, updateEle2] = useState(true)
    const [ele3, updateEle3] = useState(true)
    const [ele4, updateEle4] = useState(true)
    const [ele5, updateEle5] = useState(true)
    const [ele6, updateEle6] = useState(true)
    const [ele7, updateEle7] = useState(true)
    const [ele8, updateEle8] = useState(true)
    //Sets O||X in gridcomponents
    const [sign0, setSign0] = useState('_')
    const [sign1, setSign1] = useState('_')
    const [sign2, setSign2] = useState('_')
    const [sign3, setSign3] = useState('_')
    const [sign4, setSign4] = useState('_')
    const [sign5, setSign5] = useState('_')
    const [sign6, setSign6] = useState('_')
    const [sign7, setSign7] = useState('_')
    const [sign8, setSign8] = useState('_')
    //Defines if O||X is set
    const [xo, updateXo] = useState(true)
    const [w, updateW] = useState(false)

    function changeEle0() {
        changeSign0()
        changeXo()
        updateEle0(prevEle0 => !prevEle0)
        checkVictory()
        console.log(w)
    }
    function changeEle1() {
        changeSign1()
        changeXo()
        updateEle1(prevEle1 => !prevEle1)
        checkVictory()
        console.log(w)
    }
    function changeEle2() {
        changeSign2()
        changeXo()
        updateEle2(prevEle2 => !prevEle2)
        checkVictory()
        console.log(w)
    }
    function changeEle3() {
        changeSign3()
        changeXo()
        updateEle3(prevEle3 => !prevEle3)
        checkVictory()
        console.log(w)
    }
    function changeEle4() {
        changeSign4()
        changeXo()
        updateEle4(prevEle4 => !prevEle4)
        checkVictory()
        console.log(w)
    }
    function changeEle5() {
        changeSign5()
        changeXo()
        updateEle5(prevEle5 => !prevEle5)
        checkVictory()
        console.log(w)
    }
    function changeEle6() {
        changeSign6()
        changeXo()
        updateEle6(prevEle6 => !prevEle6)
        checkVictory()
        console.log(w)
    }
    function changeEle7() {
        changeSign7()
        changeXo()
        updateEle7(prevEle7 => !prevEle7)
        checkVictory()
        console.log(w)
    }
    function changeEle8() {
        changeSign8()
        changeXo()
        updateEle8(prevEle8 => !prevEle8)
        checkVictory()
        console.log(w)
    }
    function changeSign0() {
        xo ? setSign0('X') : setSign0('O')
    }
    function changeSign1() {
        xo ? setSign1('X') : setSign1('O')
    }
    function changeSign2() {
        xo ? setSign2('X') : setSign2('O')
    }
    function changeSign3() {
        xo ? setSign3('X') : setSign3('O')
    }
    function changeSign4() {
        xo ? setSign4('X') : setSign4('O')
    }
    function changeSign5() {
        xo ? setSign5('X') : setSign5('O')
    }
    function changeSign6() {
        xo ? setSign6('X') : setSign6('O')
    }
    function changeSign7() {
        xo ? setSign7('X') : setSign7('O')
    }
    function changeSign8() {
        xo ? setSign8('X') : setSign8('O')
    }
    function changeXo() {
        updateXo(prevXo => !prevXo)
    }
    function changeW() {
        updateW(prevW => true)
    }
    //These check if victory is achieved HAS FAULT
    function checkVictory() {
        if (sign0 === 'X' && sign1 === 'X' && sign2 === 'X') {
            changeW()
        }
        if (sign3 === 'X' && sign4 === 'X' && sign5 === 'X') {
            changeW()
        }
        if (sign6 === 'X' && sign7 === 'X' && sign8 === 'X') {
            changeW()
        }
        if (sign0 === 'X' && sign3 === 'X' && sign6 === 'X') {
            changeW()
        }
        if (sign2 === 'X' && sign4 === 'X' && sign7 === 'X') {
            changeW()
        }
        if (sign2 === 'X' && sign5 === 'X' && sign8 === 'X') {
            changeW()
        }
        if (sign0 === 'X' && sign4 === 'X' && sign8 === 'X') {
            changeW()
        }
        if (sign6 === 'X' && sign4 === 'X' && sign2 === 'X') {
            changeW()
        }
        if (sign0 === 'O' && sign1 === 'O' && sign2 === 'O') {
            changeW()
        }
        if (sign3 === 'O' && sign4 === 'O' && sign5 === 'O') {
            changeW()
        }
        if (sign6 === 'O' && sign7 === 'O' && sign8 === 'O') {
            changeW()
        }
        if (sign0 === 'O' && sign3 === 'O' && sign6 === 'O') {
            changeW()
        }
        if (sign2 === 'O' && sign4 === 'O' && sign7 === 'O') {
            changeW()
        }
        if (sign2 === 'O' && sign5 === 'O' && sign8 === 'O') {
            changeW()
        }
        if (sign0 === 'O' && sign4 === 'O' && sign8 === 'O') {
            changeW()
        }
        if (sign6 === 'O' && sign4 === 'O' && sign2 === 'O') {
            changeW()
        }
    }
    return (
        <>
            <div className='divStyle'>
                <Grid container spacing={2}>
                    <Grid item xs={4} >
                        <Paper onClick={changeEle0} className={classes.paper1} square elevation={ele0 ? 12 : 0}>{sign0}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper onClick={changeEle1} className={classes.paper1} square elevation={ele1 ? 12 : 0}>{sign1}</Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper onClick={changeEle2} className={classes.paper1} square elevation={ele2 ? 12 : 0}>{sign2}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper onClick={changeEle3} className={classes.paper1} square elevation={ele3 ? 12 : 0}>{sign3}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper onClick={changeEle4} className={classes.paper1} square elevation={ele4 ? 12 : 0}>{sign4}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper onClick={changeEle5} className={classes.paper1} square elevation={ele5 ? 12 : 0}>{sign5}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper onClick={changeEle6} className={classes.paper1} square elevation={ele6 ? 12 : 0}>{sign6}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper onClick={changeEle7} className={classes.paper1} square elevation={ele7 ? 12 : 0}>{sign7}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper onClick={changeEle8} className={classes.paper1} square elevation={ele8 ? 12 : 0}>{sign8}</Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default MyGrid