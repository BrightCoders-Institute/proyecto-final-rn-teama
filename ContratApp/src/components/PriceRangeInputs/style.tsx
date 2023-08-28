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

// import {StyleSheet} from 'react-native';

// export const styles = StyleSheet.create({
//     input: {
//         color: 'black',
//         fontSize: 16,
//         fontWeight: '500',
//         height: 35,
//         paddingLeft: 34,
//         borderWidth: 2,
//         borderColor: '#D9D9D9',
//         borderRadius: 10,
//         padding: 10,
//         paddingHorizontal: 90,
//         marginRight: 10, // Espacio entre los inputs
//     },
//     column: {
//         paddingBottom: 80,
//         marginVertical: 14,
//         marginLeft: 10,
//         marginRight: 140,
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     row: {
//         flexDirection: 'row', // Coloca los elementos en fila horizontal
//         alignItems: 'center', // Alinea verticalmente los elementos en el centro
//       },
//     nameInput: {
//         // fontSize: 12, 
//         // color: '#676E76',
//         // fontWeight: '300',
//     },
//     icon: {
//         size: 25,
//         color: '#676E76',
//         position: 'absolute', 
//         left: 10, 
//         top: 6,
//     },
// });