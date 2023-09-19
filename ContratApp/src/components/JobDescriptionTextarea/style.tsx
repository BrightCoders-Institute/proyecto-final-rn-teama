import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  input: {
    color: '#676E76',
    fontWeight: '500',
    height: 100,
    marginVertical: 5,
    backgroundColor: colors.lightGray,
    paddingHorizontal: 20,
    borderRadius: 10,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#D9D9D9'
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 16,
  },
  nameInput: {
    fontSize: 16,
    color: '#676E76',
    fontWeight: '500',
  },
});
