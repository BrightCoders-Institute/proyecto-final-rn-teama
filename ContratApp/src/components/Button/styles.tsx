import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  btn__container: {
    padding: wp('3%'),
    marginHorizontal: wp('5%'),
    borderRadius: 15,
  },
  btn__text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  btn__disabled: {
    backgroundColor: 'gray',
  },
  btn__active: {
    backgroundColor: colors.mainBlue,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
