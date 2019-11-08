import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom'; 
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import './index.css';
import App from './App';

const theme = createMuiTheme({
   palette: {
      primary: {
         main: 'hsl(98, 19%, 58%)',
      },
      secondary: {
        main: 'hsl(60,60%,60%)',
        // light: 'blue'
      },
   },
//    typography: { 
//       useNextVariants: true
//    }
});

ReactDOM.render(
   <MuiThemeProvider theme = { theme }>
      <App />
   </MuiThemeProvider>, 
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
