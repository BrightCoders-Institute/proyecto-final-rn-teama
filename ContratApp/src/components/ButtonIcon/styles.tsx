import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    width: 70,
    height: 70,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
    padding: 15,
    marginHorizontal: 26,
  },
});
