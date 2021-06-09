import { orange } from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: orange[900],
            contrastText: 'white'
        },
      
    },
})

export default theme;