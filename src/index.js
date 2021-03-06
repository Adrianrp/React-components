import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './helpers/registerServiceWorker';
import 'typeface-roboto';


const theme = createMuiTheme();

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}><App /></MuiThemeProvider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
