import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    input: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        height: 35,
        paddingLeft: 34,
        borderWidth: 2,
        borderColor: '#D9D9D9',
        borderRadius: 10,
        padding: 5,
        marginRight: 10, // Espacio entre los inputs
    },
    column: {
        marginVertical: 18,
        marginLeft: 100,
        marginRight: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row', // Coloca los elementos en fila horizontal
        alignItems: 'center', // Alinea verticalmente los elementos en el centro
      },
    nameInput: {
        marginLeft: 20,
        fontSize: 16,
        color: '#676E76',
        fontWeight: '500',
    },
    icon: {
        // size: 25,
        color: '#676E76',
        position: 'absolute', 
        left: 10, 
        top: 8,
    },
});