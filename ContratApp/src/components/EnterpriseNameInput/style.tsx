import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    input: {
        color: 'black',
        fontWeight: '500',
        height: 50,
        marginVertical: 5,
        marginBottom: 140,
        backgroundColor: '#D9D9D9',
        padding: 10,
        paddingLeft: 38,
        borderRadius: 10,
        textAlign: 'left',
        borderWidth: 1,
        borderColor: 'transparent'
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: 16,
    },
    nameInput: {
        fontSize: 16, 
        color: '#676E76',
        fontWeight: '500',
    },
    icon: {
        size: 30,
        color: '#676E76',
        position: 'absolute', 
        left: 10, 
        top: 40,
    },
});