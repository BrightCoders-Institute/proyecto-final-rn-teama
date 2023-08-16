import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//SCREENS
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import {HomeScreen as Home} from '../screens/HomeScreen/HomeScreen';
import TabNavigator from './TabNavigator';

//REGISTER_EMPLOYEE_SCREENS
import WelcomeScreen from '../screens/FormEmployeeScreen/WelcomeScreen/WelcomeScreen';
import TellAboutYouScreen from '../screens/FormEmployeeScreen/TellAboutYouScreen/TellAboutYouScreen';
import UploadFilesScreen from '../screens/FormEmployeeScreen/UploadFilesScreen/UploadFilesScreen';
import UploadPicEmployScreen from '../screens/FormEmployeeScreen/UploadPicEmployScreen/UploadPicEmployScreen';
//REGISTER_EMPLOYER_SCREENS
import WelcomeScreenEmployer from '../screens/FormEmployerScreen/WelcomeScreenEmployer/WelcomeScreenEmployer';
import FinishFormRegisterScreen from '../screens/FormEmployerScreen/FinishFormRegisterScreen/FinishFormRegisterScreen';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Profile: undefined;
  WelcomeScreen: undefined;
  WelcomeScreenEmployer: undefined;
  TellAboutYouScreen: undefined;
  UploadFilesScreen: undefined;
  UploadPicEmployScreen: undefined;
  FinishFormRegisterScreen: undefined;
};

const SignUpNavigator = createNativeStackNavigator();

const UserNavigator = createNativeStackNavigator();

const isLogged = false;

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
          <SignUpNavigator.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
          />
          <SignUpNavigator.Screen
            name="WelcomeScreenEmployer"
            component={WelcomeScreenEmployer}
          />
          <SignUpNavigator.Screen
            name="TellAboutYouScreen"
            component={TellAboutYouScreen}
          />
          <SignUpNavigator.Screen
            name="UploadFilesScreen"
            component={UploadFilesScreen}
          />
          <SignUpNavigator.Screen
            name="UploadPicEmployScreen"
            component={UploadPicEmployScreen}
          />
          <SignUpNavigator.Screen
            name="FinishFormRegisterScreen"
            component={FinishFormRegisterScreen}
          />
        </SignUpNavigator.Navigator>
      )}
    </NavigationContainer>
  );
};
