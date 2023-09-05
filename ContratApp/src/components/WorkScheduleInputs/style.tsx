import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    color: '#676E76',
    fontWeight: '500',
    height: 50,
    paddingLeft: 40,
    marginVertical: -20,
    backgroundColor: 'transparent',
    padding: 5, 
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
    paddingLeft: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#676E76',
    fontWeight: '400',
  },
  icon: {
    color: '#676E76',
    position: 'absolute',
    zIndex: 100,
    left: '3%',
    top: '65%',
  },
});

