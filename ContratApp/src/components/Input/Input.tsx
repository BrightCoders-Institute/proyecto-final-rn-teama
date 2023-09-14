import React, {useState} from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  KeyboardTypeOptions,
  TouchableOpacity,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {styles} from './style';
import {colors} from '../../../constants/colors';

interface InputProps {
  titlePhone?: string;
  hintPhone?: string;
  titleLocation?: string;
  hintLocation?: string;
  value: string;
  onChange: (text: string) => void;
  isShowError?: boolean;
  errorMessage?: string;
  width?: number;
  isPassword?: boolean;
  kboardType?: KeyboardTypeOptions;
}

export const Input: React.FC<InputProps> = ({
  titlePhone,
  titleLocation,
  hintPhone,
  hintLocation,
  width,
  onChange,
  value,
  isShowError = false,
  errorMessage = '',
  isPassword = false,
  kboardType = 'default',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHide, setIsHide] = useState(true);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handlePassInput = () => {
    setIsHide(!isHide);
  };

  return (
    <View>
      <View style={styles.column}>
        {titleLocation ? (
          <Text style={styles.nameInput}>{titleLocation}</Text>
        ) : (
          <View></View>
        )}
        <View>
          {isPassword ? (
            <TextInput
              keyboardType={kboardType}
              onBlur={handleBlur}
              onChangeText={onChange}
              onFocus={handleFocus}
              placeholder={hintLocation}
              placeholderTextColor="#676E76"
              autoCapitalize="none"
              style={[
                styles.input,
                isFocused ? focusedStyle.inputFocused : null,
                {width: width},
              ]}
              value={value}
              secureTextEntry={isHide}
            />
          ) : (
            <TextInput
              keyboardType={kboardType}
              onBlur={handleBlur}
              onChangeText={onChange}
              onFocus={handleFocus}
              placeholder={hintLocation}
              placeholderTextColor="#676E76"
              autoCapitalize="none"
              style={[
                styles.input,
                isFocused ? focusedStyle.inputFocused : null,
                {width: width},
              ]}
              value={value}
              secureTextEntry={false}
            />
          )}

          {isPassword ? (
            <TouchableOpacity
              style={styles.passwordIcon}
              onPress={handlePassInput}>
              <FontAwesomeIcon
                icon={isHide ? faEyeSlash : faEye}
                size={24}
                color={colors.gray}
              />
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
        </View>
        {isShowError && <Text>{errorMessage}</Text>}
      </View>
    </View>
  );
};

const focusedStyle = StyleSheet.create({
  inputFocused: {
    borderColor: '#0096C7',
  },
});
