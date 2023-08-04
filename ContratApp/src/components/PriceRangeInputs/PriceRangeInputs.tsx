import React, {useState} from 'react';
import {TextInput, Text, StyleSheet, View} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';  
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

import {styles} from './style';

interface InputProps {
  titleRangeMax: string;
  hintRangeMax: string;
  titleRangeMin: string;
  hintRangeMin: string;
  value: string;
  handleChange: (text: string) => void;
  isShowError?: boolean;
  errorMessage?: string;
  width: number;
  isPassword?: boolean;
}

export const PriceRangeInputs: React.FC<InputProps> = ({
  titleRangeMax, titleRangeMin,
  hintRangeMax, hintRangeMin, 
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
      {/* <Text style={styles.nameInput}>{titleRangeMax}</Text> */}
      <TextInput
        onBlur={handleBlur}
        onChangeText={handleChange}
        onFocus={handleFocus}
        placeholder={hintRangeMax}
        style={[styles.input, 
          isFocused ? focusedStyle.inputFocused : null,
          {width: width}
        ]}
        value={value}
        secureTextEntry={isPassword ? true : false}
      />
      {isShowError && <Text>{errorMessage}</Text>}
      <FontAwesomeIcon size={20} icon={faDollarSign} style={styles.icon} />
    </View>
    <View>
      {/* <Text style={styles.nameInput}>{titleRangeMin}</Text> */}
      <TextInput
        onBlur={handleBlur}
        onChangeText={handleChange}
        onFocus={handleFocus}
        placeholder={hintRangeMin}
        style={[styles.input, 
          isFocused ? focusedStyle.inputFocused : null,
          {width: width}
        ]}
        value={value}
        secureTextEntry={isPassword ? true : false}
      />
      {isShowError && <Text>{errorMessage}</Text>}
      <FontAwesomeIcon size={20} icon={faDollarSign} style={styles.icon} />
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