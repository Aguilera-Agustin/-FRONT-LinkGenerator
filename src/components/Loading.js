import { CircularProgress } from "@material-ui/core"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
    pageContainer:{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },
    spinner:{
        marginBottom:'1rem'
    }
})

export const Loading = () => {
    const classes = useStyles()
    return (
        <div className={classes.pageContainer}>
            <CircularProgress className={classes.spinner}/>

            <Typography>Cargando...</Typography>
        </div>
    )
}
