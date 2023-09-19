import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import { colors } from '../../constants/colors';
import { generarID } from './generarId';

interface NewEmployee {
  userType: number;
  name: string;
  phone: string;
  address: string;
  service: string;
  description: string;
  daysWork: string;
  location: string;
}

const currentUser = auth().currentUser;

const addUserInfo = ({ uid }: FirebaseAuthTypes.User, userData: NewEmployee) => {
  firestore()
    .collection('Users')
    .doc(uid)
    .set({
      userData: userData,
      uid: uid,
    })
    .catch(error => console.log(error));
};

export const registerEmployee = async (props: NewEmployee) => {
  const employeeData = {
    userType: props.userType || 0,
    name: props.name || '',
    phone: props.phone || '',
    address: props.address || '',
    service: props.service || '',
    description: props.description || '',
    daysWork: props.daysWork || '',
    location: props.location || '',
    identifier: generarID() || ''
  }


  console.log(employeeData);

  try {
    if (currentUser) {
      addUserInfo(currentUser, employeeData);
    }
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
