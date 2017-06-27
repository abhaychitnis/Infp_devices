import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import { Header } from './components/common';
import TopDashboard from './components/TopDashboard';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Header headerText={'Infinite Devices'} />
        <TopDashboard />
      </View>
    </Provider>
  );
};

export default App;
