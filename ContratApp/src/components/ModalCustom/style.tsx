import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: '15%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btns_row: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 26,
  },
  message: {
    fontWeight: 'normal',
    color: colors.gray,
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 25,
  },
});
