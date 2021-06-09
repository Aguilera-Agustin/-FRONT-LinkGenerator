import { makeStyles, Paper, Typography } from "@material-ui/core"
import { orange } from "@material-ui/core/colors"

const useStyles = makeStyles({
    paper:{
        width:'50vw',
        height:'17rem',
        position:'relative',
        top:100,
        margin:'auto',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },
    mainText:{
        fontWeight:'bold'
    },
    span:{
        color:orange[900]
    }
})


export const NotFound = () => {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.paper} elevation={9}>
                <Typography variant='h1' align='center' className={classes.mainText}>
                    4
                    <span className={classes.span}>0</span>
                    4
                </Typography>
                <Typography color='textSecondary'>The page you requested could not found.</Typography>
            </Paper>
        </div>
    )
}
