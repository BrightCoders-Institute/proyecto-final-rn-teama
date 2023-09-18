import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../constants/colors';
const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  card: {
    height: height - 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'absolute',
    width: '100%',
    resizeMode: 'cover',
  },
  image: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 15,
  },
  columnBottom: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  descriptionContainer: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    padding: 10,
    zIndex: 100,
  },
  detailsContainer: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 15,
  },
  cardText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    textShadowColor: colors.black,
    textShadowRadius: 10,
  },
  fileIcon: {
    color: colors.gray,
    flex: 1,
    width: '100%',
  },
  ellipsisIcon: {
    color: colors.black,
    alignSelf: 'center',
    fontSize: 16,
  },
  gradientContainer: {
    position: 'absolute',
    height: '50%',
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
