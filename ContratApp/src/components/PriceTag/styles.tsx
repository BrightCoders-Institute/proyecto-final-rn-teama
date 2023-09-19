import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        backgroundColor: colors.mainBlue,
    },
    container2: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        backgroundColor: colors.mainBlue,
    },
    text: {
        color: colors.white,
        fontWeight: '800',
        fontSize: 24,
    },
    title: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 18,
    },
    row: {
        flexDirection: 'row',
    }
});
