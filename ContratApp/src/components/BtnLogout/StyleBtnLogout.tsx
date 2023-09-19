import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
export const styles = StyleSheet.create({
  btnCerrar: {
    backgroundColor: colors.lightGray,
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 15,
  },
  textBtn: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.red,
    fontSize: 20,
  },
});
