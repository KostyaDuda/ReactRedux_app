import React, { Component } from 'react';
import Main_coins from './components/Coins';
import Head from './components/header'
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore'
const store = configureStore();


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <Head/>
            <Main_coins/>
          </div>  
        </Provider>

    );
  }
}

export default App;
