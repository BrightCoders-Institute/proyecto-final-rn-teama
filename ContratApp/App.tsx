import React from 'react';
import {SafeAreaView} from 'react-native';
import Register from './src/screens/Register/Register';
import Login from './src/screens/Login/Login';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Login></Login>
      {/* <Register></Register> */}
    </SafeAreaView>
  );
}

export default App;
