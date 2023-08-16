import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
    backgroundColor: '#0096C7',
    height: 220,
    textAlign: 'center',
    borderBottomEndRadius: 80,
    borderBottomStartRadius: 80,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    maxWidth: 300,
    alignSelf: 'center',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  backBtn: {
    position: 'absolute',
    zIndex: 100,
  },
});
