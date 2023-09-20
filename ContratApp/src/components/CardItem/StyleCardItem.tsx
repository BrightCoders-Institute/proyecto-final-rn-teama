import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderColor: 'red',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    margin: 15,
  },
  image: {
    marginStart: 10,
    flex: 1,
    justifyContent: 'center',
    width: 80,
    height: 80,
    maxWidth: 80,
  },
  textName: {
    color: 'black',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'left',
  },
  text: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    width: 220,
  },
});
