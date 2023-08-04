/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
 * import { faBed, faMapLocationDot, faToilet, faRulerCombined, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
 * <FontAwesomeIcon size={25} icon={faStar} style={styles.starIcon} />
 * @format
 */

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import WelcomeScreen from './src/screens/FormEmployeeScreen/WelcomeScreen/WelcomeScreen'
import TellAboutYouScreen from './src/screens/FormEmployeeScreen/TellAboutYouScreen/TellAboutYouScreen';
import FinishFormRegisterScreen from './src/screens/FormEmployerScreen/FinishFormRegisterScreen/FinishFormRegisterScreen';
import UploadPicEmployScreen from './src/screens/FormEmployeeScreen/UploadPicEmployScreen/UploadPicEmployScreen';
import UploadFilesScreen from './src/screens/FormEmployeeScreen/UploadFilesScreen/UploadFilesScreen';
import WelcomeScreenEmployer from './src/screens/FormEmployerScreen/WelcomeScreenEmployer/WelcomeScreenEmployer';


const App = () => {
  return (
    <View>
      <WelcomeScreen />
    </View>
  );
};


export default App;
