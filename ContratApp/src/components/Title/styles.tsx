import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    padding: wp('5%'),
  },
  titleText: {
    fontSize: 25,
    fontWeight: '900',
    color: 'black',
    padding: wp('5%'),
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#949494',
    marginLeft: 12,
  },
});
