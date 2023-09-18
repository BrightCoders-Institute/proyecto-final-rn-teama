import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import ImgProfile from '../components/ImgProfile/ImgProfile';
import FormEmpleado from '../components/form/formEmpleado/FormEmpleado';
import FormEmpleador from '../components/form/formEmpleado/FormEmpleado';
import BtnLogout from '../components/BtnLogout/BtnLogout';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/Navigator';
import {useDispatch} from 'react-redux';
import {setLoggedIn} from '../store/DataStore';
//FIREBASE
import auth from '@react-native-firebase/auth';
import RequestServiceEmployerScreen from './RequestServiceEmployerScreen/RequestServiceEmployerScreen';

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

  // const [documentData, setDocumentData] = useState<any | null>(null);
  // const [loading, setLoading] = useState(true);

  // const fetchUserInfo = async () => {
  //   const uid = auth().currentUser?.uid;
  //   const documentRef = firestore().collection('Employees').doc(uid);

  //   documentRef
  //     .get()
  //     .then(documentSnapshot => {
  //       if (documentSnapshot.exists) {
  //         const data = documentSnapshot.data();
  //         setDocumentData(data);
  //       } else {
  //         console.log('Document does not exist');
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching document:', error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //       console.log(documentData);
  //     });
  // };

  return (
    <View>
      {/* <ScrollView>
        <ImgProfile />
        {/* <FormEmpleado /> */}
      {/* <FormEmpleador />
        <BtnLogout onPress={() => handleLogOut(false)} /> */}
      {/* </ScrollView> */}
    </View>
  );
};
export default EditInfoView;
