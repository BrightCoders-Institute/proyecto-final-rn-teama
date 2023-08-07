import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  btn__container: {
    padding: wp('3%'),
    marginHorizontal: wp('5%'),
    borderRadius: 10,
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
    backgroundColor: '#0096C7',
  },
  icon: {
    width: '8%',
    height: '100%',
    marginRight: '5%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
