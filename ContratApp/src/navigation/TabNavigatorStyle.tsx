import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    padding: 0,
    left: 16,
    right: 16,
    bottom: 32,
    height: 56,
    borderTopColor: 'transparent',
    elevation: 2,
    borderRadius: 15,
    backgroundColor: colors.mainBlue,
    color: colors.white,
  },
});
