import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('8%'),
    backgroundColor: colors.white,
  },
  containerLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  containerTitle: {
    alignItems: 'center',
    marginVertical: wp('5%'),
  },
  textLogin: {
    textDecorationLine: 'underline',
    marginLeft: 5,
    fontWeight: 'bold',
    color: colors.mainBlue,
    fontSize: 16,
  },
  text: {textAlign: 'center', marginVertical: 30, color: 'black', fontSize: 16},
  containerImage: {
    height: wp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
});
