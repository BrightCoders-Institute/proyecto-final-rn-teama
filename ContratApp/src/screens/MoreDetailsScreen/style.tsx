import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  background: {
    alignSelf: 'center',
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    paddingHorizontal: '25%',
    height: '80%'
  },
  checkBox: {
    marginVertical: 10,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.gray,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 15,
  },
  info: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.gray,
    marginBottom: 15,
  },
});
