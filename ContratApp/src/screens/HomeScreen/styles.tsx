import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    backgroundColor: colors.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: '25%',
  },
  filtersContainer: {
    marginLeft: '15%',
    marginTop: 50,
  },
  dropdownContainer: {
    height: 0,
  },
});
