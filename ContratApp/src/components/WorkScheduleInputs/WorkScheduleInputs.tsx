import React, {useState} from 'react';
import {TextInput, Text, StyleSheet, View} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';  
import { faClock } from '@fortawesome/free-solid-svg-icons';

import { styles } from './style';

interface InputProps {
  titleHourAM: string;
  hintHourAM: string;
  titleHourPM: string;
  hintHourPM: string;
  value: string;
  handleChange: (text: string) => void;
  isShowError?: boolean;
  errorMessage?: string;
  width: number;
  isPassword?: boolean;
}

export const WorkScheduleInputs: React.FC<InputProps> = ({
  titleHourAM, titleHourPM,
  hintHourAM, hintHourPM, 
  width,
  handleChange,
  value,
  isShowError = false,
  errorMessage = '',
  isPassword
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.column}>
    <View style={styles.row}>
    <View>
      <TextInput
        onBlur={handleBlur}
        onChangeText={handleChange}
        onFocus={handleFocus}
        placeholder={hintHourAM}
        style={[styles.input, 
          isFocused ? focusedStyle.inputFocused : null,
          {width: width}
        ]}
        value={value}
        secureTextEntry={isPassword ? true : false}
      />
      {isShowError && <Text>{errorMessage}</Text>}
      <FontAwesomeIcon size={20} icon={faClock} style={styles.icon} />
    </View>
    <View>
      <TextInput
        onBlur={handleBlur}
        onChangeText={handleChange}
        onFocus={handleFocus}
        placeholder={hintHourPM}
        style={[styles.input, 
          isFocused ? focusedStyle.inputFocused : null,
          {width: width}
        ]}
        value={value}
        secureTextEntry={isPassword ? true : false}
      />
      {isShowError && <Text>{errorMessage}</Text>}
      <FontAwesomeIcon size={20} icon={faClock} style={styles.icon} />
      </View>
    </View>
  </View>
  );
};

const focusedStyle = StyleSheet.create({
  inputFocused: {
    borderColor: '#0096C7',
  },
});