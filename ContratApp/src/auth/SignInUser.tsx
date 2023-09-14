import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {colors} from '../../constants/colors';

interface SignInProps {
  email: string;
  password: string;
}

export const signIn = async ({email, password}: SignInProps) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    return true;
  } catch (error: any) {
    if (error.code === 'auth/user-not-found') {
      Snackbar.show({
        text: 'User not found',
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

    if (error.code === 'auth/wrong-password') {
      Snackbar.show({
        text: 'Wrong password',
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
