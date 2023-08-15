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
    color: colors.mainBlue,
  },
  text: {textAlign: 'center', marginVertical: 30, color: 'black'},
  title: {
    color: '#575757',
    fontFamily: 'Audiowide',
    fontSize: 48,
    fontWeight: '400',
  },
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
