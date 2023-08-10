import React from 'react';
import {SafeAreaView} from 'react-native';
import Register from './src/screens/Register/Register';
import Login from './src/screens/Login/Login';
import {store} from './src/store/Store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Login></Login>
        {/* <Register></Register> */}
      </SafeAreaView>
    </Provider>
  );
}

export default App;
