import React from 'react';
import {View, ScrollView} from 'react-native';
import ImgProfile from '../components/ImgProfile/ImgProfile';
import FormEmpleado from '../components/form/formEmpleado/FormEmpleado';
import BtnLogout from '../components/BtnLogout/BtnLogout';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/Navigator';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

export const EditInfoView: React.FC<ProfileScreenProps> = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <ImgProfile />
        {/* <FormEmpleado /> */}
        {/* <FormEmpleador /> */}
        <BtnLogout />
      </ScrollView>
    </View>
  );
};
export default EditInfoView;
