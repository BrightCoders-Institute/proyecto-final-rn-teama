import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    color: '#676E76',
    fontWeight: '500',
    height: 50,
    marginVertical: 5,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    borderRadius: 10,
    textAlign: 'left',
    borderWidth: 2,
    borderColor: '#D9D9D9',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 16,
  },
  nameInput: {
    fontSize: 16,
    color: '#676E76',
    fontWeight: '800',
  },
  passwordIcon: {
    position: 'absolute',
    zIndex: 100,
    left: '90%',
    top: '30%',
  },
});
