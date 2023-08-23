import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

interface NewEmployer {
  email: string;
  password: string;
  address: string;
  phone: string;
  companyName: string;
}

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

const addUserInfo = ({uid}: FirebaseAuthTypes.User, employer: NewEmployer) => {
  firestore()
    .collection('Users')
    .doc(uid)
    .set({
      employer: employer,
      uid: uid,
    })
    .then(() => {
      Alert.alert('User added succesfully');
    })
    .catch(error => console.log(error));
};

export const registerEmployer = async (props: NewEmployer) => {
  const employerData = {
    email: props.email || '',
    password: props.password || '',
    address: props.address || '',
    phone: props.phone || '',
    companyName: props.companyName || '',
    identifier: generarID() || '',
  };

  try {
    const {user} = await auth().createUserWithEmailAndPassword(
      props.email,
      props.password,
    );
    addUserInfo(user, employerData);
    Alert.alert('Employer added successfully');
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('The email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert('The email address is invalid!');
    }
  }
};
