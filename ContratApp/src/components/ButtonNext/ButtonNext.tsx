import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { styles } from './style';

interface ButtonNextProps {
    text: string;
    onPress: () => void;
}

export const ButtonNext: React.FC<ButtonNextProps> = ({ text, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};