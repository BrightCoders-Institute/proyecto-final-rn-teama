import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../../constants/colors';
import { UserData } from '../interfaces/UserData';
//FIREBASE
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

//REDUX
import { useSelector } from 'react-redux';
import { RootState } from '../types/types';

//SCREENS
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import { HomeScreen as Home } from '../screens/HomeScreen/HomeScreen';
import TabNavigator from './TabNavigator';
import MoreDetailsScreen from '../screens/MoreDetailsScreen/MoreDetailsScreen';
import { JobDetailsScreen } from '../screens/MoreDetailsScreen/JobDetailsScreen';
import CreateJobScreen from '../screens/CreateJobScreen/CreateJobScreen';

//REGISTER_EMPLOYEE_SCREENS
import WelcomeScreen from '../screens/FormEmployeeScreen/WelcomeScreen/WelcomeScreen';
import TellAboutYouScreen from '../screens/FormEmployeeScreen/TellAboutYouScreen/TellAboutYouScreen';
import UploadFilesScreen from '../screens/FormEmployeeScreen/UploadFilesScreen/UploadFilesScreen';
import UploadPicEmployScreen from '../screens/FormEmployeeScreen/UploadPicEmployScreen/UploadPicEmployScreen';
//REGISTER_EMPLOYER_SCREENS
import WelcomeScreenEmployer from '../screens/FormEmployerScreen/WelcomeScreenEmployer/WelcomeScreenEmployer';
import FinishFormRegisterScreen from '../screens/FormEmployerScreen/FinishFormRegisterScreen/FinishFormRegisterScreen';
import { MoreDetailsData } from '../interfaces/MoreDetailsData';
import { JobData } from '../interfaces/JobData';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  ProfileScreen: undefined;
  WelcomeScreen: undefined;
  WelcomeScreenEmployer: undefined;
  TellAboutYouScreen: undefined;
  UploadFilesScreen: undefined;
  UploadPicEmployScreen: undefined;
  FinishFormRegisterScreen: undefined;
  MoreDetailsScreen: UserData;
  JobDetailsScreen: JobData;
  CreateJobScreen: undefined;
};

const SignUpNavigator = createNativeStackNavigator();

const UserNavigator = createNativeStackNavigator();

export const Navigator = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.data);
  const [currentUser, setCurrentUser] = useState<FirebaseAuthTypes.User | null>(
    null,
  );

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <UserNavigator.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <UserNavigator.Screen name="TabNavigator" component={TabNavigator} />
          <UserNavigator.Screen
            name="MoreDetailsScreen"
            component={MoreDetailsScreen}
            options={{
              title: 'Más información',
              headerBackVisible: true,
              headerShown: true,
              headerTitleAlign: 'center',
              headerTintColor: colors.white,
              headerStyle: {
                backgroundColor: colors.mainBlue,
              },
            }}
          />
          <UserNavigator.Screen
            name="JobDetailsScreen"
            component={JobDetailsScreen}
            options={{
              title: 'Más información',
              headerBackVisible: true,
              headerShown: true,
              headerTitleAlign: 'center',
              headerTintColor: colors.white,
              headerStyle: {
                backgroundColor: colors.mainBlue,
              },
            }}
          />
          <UserNavigator.Screen
            name="CreateJobScreen"
            component={CreateJobScreen}
            options={{
              title: 'Crear un empleo',
              headerBackVisible: true,
              headerShown: true,
              headerTitleAlign: 'center',
              headerTintColor: colors.white,
              headerStyle: {
                backgroundColor: colors.mainBlue,
              },
            }}
          />
        </UserNavigator.Navigator>
      ) : (
        <SignUpNavigator.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}>
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
