import React, {useState} from 'react';
import {
  TextInput,
  View,
  KeyboardTypeOptions,
  TouchableOpacity,
} from 'react-native';
import {styles} from './InputStyles';

interface props {
  kboardType: KeyboardTypeOptions;
  isPassword?: boolean;
  value: string;
  onChange: (text: string) => void;
}

export const Input = ({
  kboardType,
  isPassword = false,
  onChange,
  value,
}: props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [hidePasswordValue, setHidePasswordValue] = useState<boolean>(true);
  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleIcon = () => {
    if (hidePasswordValue === true) {
      setHidePasswordValue(false);
    } else {
      setHidePasswordValue(true);
    }
  };
  return (
    <View>
      <TextInput
        style={isFocus ? styles.onFocusInput : styles.input}
        onChangeText={onChange}
        value={value}
        keyboardType={kboardType}
        secureTextEntry={hidePasswordValue && isPassword}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};
