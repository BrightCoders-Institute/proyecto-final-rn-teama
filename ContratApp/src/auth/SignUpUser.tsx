import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {colors} from '../../constants/colors';

interface SignUpProps {
  email: string;
  password: string;
}

export const signUp = async ({email, password}: SignUpProps) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    return true;
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      Snackbar.show({
        text: 'Email already taken',
        backgroundColor: colors.red,
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: 'Aceptar',
          textColor: colors.white,
          onPress: () => {
            Snackbar.dismiss();
          },
        },
      });
    }

    if (error.code === 'auth/invalid-email') {
      Snackbar.show({
        text: 'The email is invalid',
        backgroundColor: colors.red,
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: 'Aceptar',
          textColor: colors.white,
          onPress: () => {
            Snackbar.dismiss();
          },
        },
      });
    }
    return false;
  }
};
