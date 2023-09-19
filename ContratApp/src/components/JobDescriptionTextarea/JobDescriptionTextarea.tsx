import React, { useState } from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  KeyboardTypeOptions
} from 'react-native';

import { styles } from './style';
import { colors } from '../../../constants/colors';

interface InputProps {
  titleDescription?: string;
  hintDescription?: string;
  value: string;
  onChange: (text: string) => void;
  isShowError?: boolean;
  errorMessage?: string;
  width?: number;
  isPassword?: boolean;
  kboardType: KeyboardTypeOptions;
}

export const JobDescriptionTextarea: React.FC<InputProps> = ({
  titleDescription,
  hintDescription,
  width,
  onChange,
  value,
  isShowError = false,
  errorMessage = '',
  kboardType = 'default',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHide, setIsHide] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      <View style={styles.column}>
        {titleDescription ? (
          <Text style={styles.nameInput}>{titleDescription}</Text>
        ) : (
          <View></View>
        )}
        <View>
          <TextInput
            editable
            multiline
            numberOfLines={5}
            maxLength={500}
            keyboardType={kboardType}
            onBlur={handleBlur}
            onChangeText={onChange}
            onFocus={handleFocus}
            placeholder={hintDescription}
            placeholderTextColor="#676E76"
            style={[
              styles.input,
              isFocused ? focusedStyle.inputFocused : null,
              { width: width, color: colors.black },
            ]}
            value={value}
            secureTextEntry={isHide}
          />
        </View>
        {isShowError && <Text>{errorMessage}</Text>}
      </View>
    </View>
  );
};

const focusedStyle = StyleSheet.create({
  inputFocused: {
    borderColor: '#0096C7',
    backgroundColor: colors.lightGray
  },
});

export default JobDescriptionTextarea;