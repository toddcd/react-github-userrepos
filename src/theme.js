import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    //palette.text.secondary
    palette: {
        primary: {
            main: '#499EBF',
        },
        secondary: {
            main: '#024873',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
       
    },
    spacing: 8,
    ratingStar: {
        color: '#898C1F'
    }
});

export default theme;