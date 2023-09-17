import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../constants/colors';
const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  buttonsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '15%',
  },
  copyright: {
    textAlign: 'center',
    fontSize: 10,
    color: 'black',
    paddingBottom: 20,
    fontFamily: 'Avenir',
  },
  overlayWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginLeft: -30,
  },
  cardContainer: {
    width: '70%',
    height: height - 500,
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
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: '25%',
  },
});
