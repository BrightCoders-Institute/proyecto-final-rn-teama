import React, {useState} from 'react';
import {TextInput, Text, StyleSheet, View} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';  
import { faSquarePhone, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import {styles} from './style';

interface InputProps {
  titlePhone: string;
  hintPhone: string;
  titleLocation: string;
  hintLocation: string;
  value: string;
  handleChange: (text: string) => void;
  isShowError?: boolean;
  errorMessage?: string;
  width: number;
  isPassword?: boolean;
}

export const Input: React.FC<InputProps> = ({
  titlePhone, titleLocation,
  hintPhone, hintLocation, 
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
    <View>
    <View style={styles.column}>
      <Text style={styles.nameInput}>{titlePhone}</Text>
      <TextInput
        onBlur={handleBlur}
        onChangeText={handleChange}
        onFocus={handleFocus}
        placeholder={hintPhone}
        style={[styles.input, 
          isFocused ? focusedStyle.inputFocused : null,
          {width: width}
        ]}
        value={value}
        secureTextEntry={isPassword ? true : false}
      />
      {isShowError && <Text>{errorMessage}</Text>}
      <FontAwesomeIcon size={20} icon={faPhone} style={styles.icon} />
    </View>
    <View style={styles.column}>
      <Text style={styles.nameInput}>{titleLocation}</Text>
      <TextInput
        onBlur={handleBlur}
        onChangeText={handleChange}
        onFocus={handleFocus}
        placeholder={hintLocation}
        style={[styles.input, 
          isFocused ? focusedStyle.inputFocused : null,
          {width: width}
        ]}
        value={value}
        secureTextEntry={isPassword ? true : false}
      />
      {isShowError && <Text>{errorMessage}</Text>}
      <FontAwesomeIcon size={20} icon={faLocationDot} style={styles.icon} />
    </View>
  </View>
  );
};

const focusedStyle = StyleSheet.create({
  inputFocused: {
    borderColor: '#0096C7',
  },
});
