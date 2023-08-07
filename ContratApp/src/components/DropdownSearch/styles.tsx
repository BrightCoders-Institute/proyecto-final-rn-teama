import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
  },
  dropdown: {
    height: 50,
    backgroundColor: colors.lightGray,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    left: 40,
    bottom: -15,
    zIndex: 999,
    fontSize: 16,
  },
  placeholderStyle: {
    left: 50,
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    left: 40,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
