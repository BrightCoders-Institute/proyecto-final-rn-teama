import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  background: {
    alignSelf: 'center',
    marginVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    width: 300,
    height: 400,
  },
  checkBox: {
    marginVertical: 10,
  },
  nameInput: {
    marginBottom: -10,
    marginLeft: 20,
    fontSize: 16,
    color: '#676E76',
    fontWeight: '800',
  },
  icon1: {
    marginRight: 5,
    color: '#0096C7',
    marginStart: 10,
  },
  backgroundIcon: {
    color: '#FFFFFF',
    borderRadius: 100,
    backgroundColor: '#D9D9D9',
    padding: '5%',
    width: 100,
    height: 100,
    marginBottom: '2%',
  },
  info: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.gray,
    marginBottom: 15,
  },
});
