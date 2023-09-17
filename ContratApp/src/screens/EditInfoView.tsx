import React, {useEffect, useState} from 'react';
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
import {fetchUserData} from '../db/fetchCollections';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

export const EditInfoView: React.FC<ProfileScreenProps> = ({navigation}) => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  const handleLogOut = (isLoggedIn: boolean) => {
    dispatch(setLoggedIn(isLoggedIn));
    auth().signOut();
  };

  useEffect(() => {
    const data = fetchUserData();
    setUserData(data);
    console.log(data);
  }, []);

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
