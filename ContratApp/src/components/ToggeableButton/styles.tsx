import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  name: {
    fontWeight: 'bold',
  },
});
