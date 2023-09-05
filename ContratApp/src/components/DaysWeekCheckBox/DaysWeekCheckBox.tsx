import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { styles } from './style';

interface CheckBoxProps {
  description: string;
  handleChange: (value: boolean) => void;
}

export const DaysWeekCheckBox: React.FC<CheckBoxProps> = ({description, handleChange}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <>
        <View style={styles.checkboxContainer}>
            <BouncyCheckbox
                size={22}
                onPress={() => {
                  setToggleCheckBox(!toggleCheckBox)
                }}
                bounceEffectIn={0.8}
                fillColor="#0096C7"
                unfillColor="#0096C7"
                style={{marginVertical: '1%'}}
            />
            <Text style={styles.label}>{description}</Text>
        </View>
        </>
    );
};