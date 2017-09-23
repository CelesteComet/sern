import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import logger from 'redux-logger';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('.wrapper')
);