import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {colors} from '../../constants/colors';

interface SignInProps {
  email: string;
  password: string;
}

export const signIn = async ({email, password}: SignInProps) => {
  try {
    const {user} = await auth().signInWithEmailAndPassword(email, password);
    Snackbar.show({
      text: 'Login succesful!',
      backgroundColor: colors.mainBlue,
    });
    return true;
  } catch (error: any) {
    console.log(error);
    Snackbar.show({
      text: error.message,
      backgroundColor: colors.mainBlue,
      duration: Snackbar.LENGTH_LONG,
    });
    return false;
  }
};
