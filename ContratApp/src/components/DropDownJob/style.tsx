import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  dropdown: {
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginVertical: 5,
    marginBottom: 150,
    color: colors.black,
  },
  nameInput: {
    fontSize: 16,
    color: colors.gray,
    fontWeight: '500',
  },
  icon: {
    marginRight: 5,
    color: '#676E76',
    marginStart: 10,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#676E76',
    fontWeight: '500',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.black,
  },
  iconStyle: {
    tintColor: '#676E76',
    width: 20,
    height: 20,
    marginEnd: 5,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
