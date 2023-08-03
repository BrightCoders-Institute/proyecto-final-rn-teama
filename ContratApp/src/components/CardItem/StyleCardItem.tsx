import {StyleSheet} from 'react-native';
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
    flex: 1,
    justifyContent: 'center',
    width: 80,
    height: 80,
    maxWidth: 80,
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
  },
});
