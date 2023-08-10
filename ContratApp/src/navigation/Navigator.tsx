import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//SCREENS
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import {HomeScreen as Home} from '../screens/HomeScreen/HomeScreen';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Profile: undefined;
};

const SignUpNavigator = createNativeStackNavigator();

const UserNavigator = createNativeStackNavigator();

const isLogged = true;

export const Navigator = () => {
  return (
    <NavigationContainer>
      {isLogged ? (
        <UserNavigator.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <UserNavigator.Screen name="TabNavigator" component={TabNavigator} />
        </UserNavigator.Navigator>
      ) : (
        <SignUpNavigator.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <SignUpNavigator.Screen name="Login" component={Login} />
          <SignUpNavigator.Screen name="Register" component={Register} />
          <SignUpNavigator.Screen name="Home" component={Home} />
        </SignUpNavigator.Navigator>
      )}
    </NavigationContainer>
  );
};
