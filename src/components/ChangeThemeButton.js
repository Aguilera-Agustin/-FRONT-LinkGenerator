import { IconButton } from '@material-ui/core'
import {  makeStyles } from '@material-ui/core'
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import { useDispatch } from 'react-redux';
import {changeDarkMode} from '../redux/actions/uiActions'
const useStyles = makeStyles({
    button:{
        position:'absolute',
        right:15,
        top: 15,
        zIndex:100,
    }
})


export const ChangeThemeButton = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    return (
        <IconButton aria-label="delete" variant='contained' className={classes.button} onClick={()=>dispatch(changeDarkMode())}>
            <InvertColorsIcon />
        </IconButton>
    )
}
