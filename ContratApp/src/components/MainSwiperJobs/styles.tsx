import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../constants/colors';
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  cardContainer: {
    width: width,
    height: height - 450,
    paddingHorizontal: '10%'
  },
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 15,
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    color: '#fff',
  },
  infoText: {
    justifyContent: 'center',
    display: 'flex',
    zIndex: -100,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '5%',
  },
});
