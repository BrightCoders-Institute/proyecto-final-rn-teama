import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import { colors } from '../../constants/colors';

interface NewEmployee {
  userType: number;
  employeeName: string;
  employeePhone: string;
  employeeAddress: string;
  employeeService: string;
  employeeDescription: string;
  employeeDaysWork: string;
  employeeTimeAM: string;
  employeeTimePM: string;
  employeePriceMin: string;
  employeePriceMax: string;
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
    identifier: generarID() || '',
    name: props.employeeName || '',
    phone: props.employeePhone || '',
    address: props.employeeAddress || '',
    service: props.employeeService || '',
    description: props.employeeDescription || '',
    daysWork: props.employeeDaysWork || '',
    timeAM: props.employeeTimeAM || '',
    timePM: props.employeeTimePM || '',
    priceMin: props.employeePriceMin || '',
    priceMax: props.employeePriceMax || '',
    userType: props.userType || 0,
  };

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
