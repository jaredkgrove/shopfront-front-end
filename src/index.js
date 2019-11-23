import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom'; 
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import listingReducer from './reducers/listingReducer.js'; 
import postsReducer from './reducers/postsReducer.js';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({listings: listingReducer, posts: postsReducer})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const theme = createMuiTheme({
   palette: {
      primary: {
        main: 'hsl(187, 52%, 80%)',
        grey: 'hsl(187, 5%, 90%)',
      },
      secondary: {
        main: 'hsl(57, 52%, 75%)',
      },
   },
   typography: { 
      useNextVariants: true
   }
});

ReactDOM.render(
   <Provider store={store}>
      <Router >
         <MuiThemeProvider theme = { theme }>
               <App />
         </MuiThemeProvider>
      </Router >,
   </Provider>,

   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
