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
  isPassword,
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
              {width: width},
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
  },
});

// import { View, TextInput, Text } from 'react-native';
// import React from 'react';

// import { styles } from './style';

// import {useDispatch, useSelector} from 'react-redux';
// import {setEmployDescription} from '../../store/DataStore';
// import {RootState} from '../../store/Reducers';

// const JobDescriptionTextarea = () => {

//   const [value, onChangeText] = React.useState('');

//   const dispatch = useDispatch();

//   const {employDescription} = useSelector(
//     (state: RootState) => state.data,
//   );

//   return (
//     <View style={styles.container}>
//         <Text style={styles.nameInput}>Describe tu oficio y experiencia</Text>
//     <View
//       style={{
//         backgroundColor: value,
//         borderRadius: 10,
//         borderColor: '#D9D9D9',
//         borderWidth: 2,
//       }}>
//       <TextInput
//         editable
//         multiline
//         numberOfLines={4}
//         maxLength={250}
//         value={employDescription}
//         onChange={value => {
//             dispatch(setEmployDescription(value));
//         }}
//         // onChangeText={text => onChangeText(text)}
//         // value={value}
//         placeholder="Añade una Descripción"
//         style={{padding: 5, textAlign:'left', color:'black',}}
//       />
//     </View>
//     </View>
//   );
// };


export default JobDescriptionTextarea;