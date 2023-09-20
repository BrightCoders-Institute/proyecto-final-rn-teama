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
import { fetchUserData, fetchUserJobs } from '../../db/fetchCollections';
import { styles } from './styles';
import { colors } from '../../../constants/colors';
import CreateServiceScreen from '../CreateJobScreen/CreateJobScreen';
import { Button } from '../../components/Button/Button';
import { LoadingScreen } from '../LoadingScreen';
import BtnLogout from '../../components/BtnLogout/BtnLogout';
import { JobData } from '../../interfaces/JobData';
import EmptySwiperMessage from '../../components/EmptySwiperMsg/EmptySwiperMessage';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProfileScreen'
>;

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const [userData, setUserData] = useState<UserData>();
  const [isEmpty, setIsEmpty] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  // const uid = auth().currentUser?.uid;

  const handleLogOut = (isLoggedIn: boolean) => {
    dispatch(setLoggedIn(isLoggedIn));
    auth().signOut();
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchUser = async () => {
      try {
        const res = await fetchUserData();
        const userJobs = await fetchUserJobs();
        setIsEmpty(userJobs);
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
        <View>
          <View style={styles.row}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', color: colors.black }}>
              Nombre:
            </Text>
            {isLoading ? <LoadingScreen /> : <Text
              style={{ fontSize: 20, fontWeight: 'normal', color: colors.gray }}>
              {userData?.name || userData?.companyName}
            </Text>}

          </View>
          <View style={styles.row}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', color: colors.black }}>
              Teléfono:
            </Text>
            {isLoading ? <LoadingScreen /> : <Text
              style={{ fontSize: 20, fontWeight: 'normal', color: colors.gray }}>
              {userData?.phone}
            </Text>}
          </View>
        </View>
        <BtnLogout title="Cerrar sesión" onPress={() => handleLogOut(false)} />
        {handleUserType() ? (
          isEmpty ? <Button title='Crear un empleo' onPress={() => navigation.navigate('CreateJobScreen')} /> : <Text style={{ fontWeight: 'bold' }}>Por el momento sólo se puede crear un empleo por cuenta</Text>
        ) : (
          <View></View>
        )}
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;
