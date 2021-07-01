import { orange } from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles'
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';

export const CustomTheme = ({children}) => {
    const darkMode = useSelector(state => state.ui.darkMode)
    const theme = createMuiTheme({
        palette: {
            type: darkMode?('dark'):('light'),
            primary: {
                main: orange[900],
                contrastText: 'white'
            },
          
        },
    })

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}


