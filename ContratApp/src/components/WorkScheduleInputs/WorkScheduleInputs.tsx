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
import {faClock} from '@fortawesome/free-solid-svg-icons';
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

export const WorkScheduleInputs: React.FC<InputProps> = ({
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
        <FontAwesomeIcon size={25} icon={faClock} style={styles.icon} />
      </View>
    </View>
  );
};

const focusedStyle = StyleSheet.create({
  inputFocused: {
    borderColor: '#0096C7',
  },
});

export default WorkScheduleInputs;


// import React, {useState} from 'react';
// import {TextInput, Text, StyleSheet, View} from 'react-native';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';  
// import { faClock } from '@fortawesome/free-solid-svg-icons';

// import { styles } from './style';

// interface InputProps {
//   titleHourAM: string;
//   hintHour: string;
//   titleHourPM: string;
//   hintHourPM: string;
//   value: string;
//   handleChange: (text: string) => void;
//   isShowError?: boolean;
//   errorMessage?: string;
//   width: number;
//   isPassword?: boolean;
// }

// export const WorkScheduleInputs: React.FC<InputProps> = ({
//   titleHourAM, titleHourPM,
//   hintHour, hintHourPM, 
//   width,
//   handleChange,
//   value,
//   isShowError = false,
//   errorMessage = '',
//   isPassword
// }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//   };

//   return (
//     <View style={styles.column}>
//     <View style={styles.row}>
//     <View>
//       <TextInput
//         onBlur={handleBlur}
//         onChangeText={handleChange}
//         onFocus={handleFocus}
//         placeholder={hintHour}
//         style={[styles.input, 
//           isFocused ? focusedStyle.inputFocused : null,
//           {width: width}
//         ]}
//         value={value}
//         secureTextEntry={isPassword ? true : false}
//       />
//       {isShowError && <Text>{errorMessage}</Text>}
//       <FontAwesomeIcon size={20} icon={faClock} style={styles.icon} />
//     </View>
//     {/* <View>
//       <TextInput
//         onBlur={handleBlur}
//         onChangeText={handleChange}
//         onFocus={handleFocus}
//         placeholder={hintHourPM}
//         style={[styles.input, 
//           isFocused ? focusedStyle.inputFocused : null,
//           {width: width}
//         ]}
//         value={value}
//         secureTextEntry={isPassword ? true : false}
//       />
//       {isShowError && <Text>{errorMessage}</Text>}
//       <FontAwesomeIcon size={20} icon={faClock} style={styles.icon} />
//       </View> */}
//     </View>
//   </View>
//   );
// };

// const focusedStyle = StyleSheet.create({
//   inputFocused: {
//     borderColor: '#0096C7',
//   },
// });