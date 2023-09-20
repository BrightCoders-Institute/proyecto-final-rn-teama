import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ImgProfile from '../../components/ImgProfile/ImgProfile';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Navigator';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../store/DataStore';
import { UserData } from '../../interfaces/UserData';
//FIREBASE
import auth from '@react-native-firebase/auth';
import { fetchUserData } from '../../db/fetchCollections';
import { styles } from './styles';
import { colors } from '../../../constants/colors';
import CreateServiceScreen from '../CreateJobScreen/CreateJobScreen';
import { Button } from '../../components/Button/Button';
import { LoadingScreen } from '../LoadingScreen';
import BtnLogout from '../../components/BtnLogout/BtnLogout';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProfileScreen'
>;

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const [userData, setUserData] = useState<UserData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const handleLogOut = (isLoggedIn: boolean) => {
    dispatch(setLoggedIn(isLoggedIn));
    auth().signOut();
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchUser = async () => {
      try {
        const res = await fetchUserData();
        setUserData(res);
      } catch (error) {
        console.error('An error happened:', error);
      }
    };
    fetchUser();
    setIsLoading(false);
  }, []);

  const handleUserType = () => {
    if (userData?.userType === 1) {
      return true;
    }
    return false;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImgProfile />
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <View>
            <View style={styles.row}>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: colors.black }}>
                Nombre:
              </Text>
              <Text
                style={{ fontSize: 20, fontWeight: 'normal', color: colors.gray }}>
                {userData?.name || userData?.companyName}
              </Text>
            </View>
            <View style={styles.row}>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: colors.black }}>
                Teléfono:
              </Text>
              <Text
                style={{ fontSize: 20, fontWeight: 'normal', color: colors.gray }}>
                {userData?.phone}
              </Text>
            </View>
          </View>
        )}
        <BtnLogout title="Cerrar sesión" onPress={() => handleLogOut(false)} />
        {handleUserType() ? (
          <CreateServiceScreen navigation={navigation} />
        ) : (
          <View></View>
        )}
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;
