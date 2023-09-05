import React from 'react';
import {View, ScrollView} from 'react-native';
import ImgProfile from '../components/ImgProfile/ImgProfile';
import FormEmpleado from '../components/form/formEmpleado/FormEmpleado';
import BtnLogout from '../components/BtnLogout/BtnLogout';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/Navigator';
import {useDispatch} from 'react-redux';
import {setLoggedIn} from '../store/DataStore';
//FIREBASE
import auth from '@react-native-firebase/auth';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

export const EditInfoView: React.FC<ProfileScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogOut = (isLoggedIn: boolean) => {
    dispatch(setLoggedIn(isLoggedIn));
    auth().signOut();
  };

  return (
    <View>
      <ScrollView>
        <ImgProfile />
        {/* <FormEmpleado /> */}
        {/* <FormEmpleador /> */}
        <BtnLogout onPress={() => handleLogOut(false)} />
      </ScrollView>
    </View>
  );
};
export default EditInfoView;
