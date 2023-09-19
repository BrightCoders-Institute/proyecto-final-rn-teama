import React from 'react';
import { styles } from './styles';
import { View, Text, StyleProp } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocation, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../constants/colors';

interface PriceTagProps {
    price?: string;
    location?: string;
    isEmployee: boolean;
}

const PriceTag: React.FC<PriceTagProps> = ({ price, location, isEmployee }) => {
    return (
        <>
            {isEmployee ?
                <View style={styles.container}>
                    <Text style={styles.title}>Presupuesto: </Text>
                    <Text style={styles.text}>{`${price}.00 MXN`}</Text>
                </View> :
                <View style={styles.container2}>
                    <View style={styles.row}>
                        <FontAwesomeIcon icon={faLocationPin} color={colors.white} size={30} />
                        <Text style={styles.text}>: {location}</Text>
                    </View>
                </View>
            }
        </>
    );
};

export default PriceTag;
