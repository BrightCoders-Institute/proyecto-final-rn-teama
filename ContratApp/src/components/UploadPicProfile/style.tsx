import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // bottom: 10,
        alignSelf: 'center',
        marginTop: 40,
        color: '#FFFFFF',
        borderRadius: 120,
        backgroundColor: '#D9D9D9',
        padding: '3%',
        width: 220,
        height: 220,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginRight: 5,
        color: '#676E76',
        marginStart: 10,
      },
    text: {
        color: '#676E76',
        fontSize: 18,
        fontWeight: '300',
    },
    containerEdit: {
        position: 'absolute',
        bottom: -12,
        alignSelf: 'flex-end',
        borderWidth: 3,
        borderColor: 'white',
        marginVertical: 10,
        color: '#FFFFFF',
        borderRadius: 30,
        backgroundColor: '#D9D9D9',
        padding: '3%',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconEdit: {
        marginRight: 5,
        color: '#676E76',
        marginStart: 10,
      },
});