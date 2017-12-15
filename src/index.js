import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './helpers/registerServiceWorker';


const theme = createMuiTheme();

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
