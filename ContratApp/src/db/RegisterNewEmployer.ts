import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import { colors } from '../../constants/colors';

interface NewEmployer {
  userType: number;
  address: string;
  phone: string;
  companyName: string;
}

const currentUser = auth().currentUser;

function generarID(): string {
  const caracteres =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const longitud = 8;
  let id = '';

  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    id += caracteres.charAt(indiceAleatorio);
  }

  return id;
}

const addUserInfo = ({ uid }: FirebaseAuthTypes.User, employer: NewEmployer) => {
  firestore()
    .collection('Users')
    .doc(uid)
    .set({
      employer: employer,
      uid: uid,
    })
    .catch(error => console.log(error));
};

export const registerEmployer = async (props: NewEmployer) => {
  const employerData = {
    userType: props.userType || 0,
    address: props.address || '',
    phone: props.phone || '',
    companyName: props.companyName || '',
    identifier: generarID() || '',
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
