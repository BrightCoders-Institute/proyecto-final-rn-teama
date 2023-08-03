import {StyleSheet, Dimensions} from 'react-native';
export const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    alignItems: 'center',
    position: 'relative',
  },
  btnLike: {
    position: 'absolute',
    zIndex: 99,
    right: 15,
    top: 15,
  },
  image: {
    width: (screenWidth - 20) / numColumns,
    height: (screenWidth - 10) / numColumns,
    borderRadius: 8,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  containertText: {
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
});
