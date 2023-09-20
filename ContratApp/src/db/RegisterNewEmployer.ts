import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import { colors } from '../../constants/colors';
import { generarID } from './generarId';

interface NewEmployer {
  userType: number;
  address: string;
  phone: string;
  companyName: string;
  email: string;
}

const currentUser = auth().currentUser;

const addUserInfo = ({ uid }: FirebaseAuthTypes.User, userData: NewEmployer) => {
  firestore()
    .collection('Users')
    .doc(uid)
    .set({
      userData: userData,
      uid: uid,
    })
    .catch(error => console.log(error));
};

export const registerEmployer = async (props: NewEmployer) => {
  const employerData = {
    userType: props.userType,
    address: props.address || '',
    phone: props.phone || '',
    companyName: props.companyName || '',
    identifier: generarID() || '',
    email: currentUser?.email || ''
  };

  try {
    if (currentUser)
      addUserInfo(currentUser, employerData);
    Snackbar.show({
      text: 'Account created',
      backgroundColor: 'green',
      duration: Snackbar.LENGTH_LONG,
    });
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      Snackbar.show({
        text: 'Email already taken',
        backgroundColor: colors.red,
        duration: Snackbar.LENGTH_LONG,
      });
    }

    if (error.code === 'auth/invalid-email') {
      Snackbar.show({
        text: 'The email is invalid',
        backgroundColor: colors.red,
        duration: Snackbar.LENGTH_LONG,
      });
    }
  }
};
