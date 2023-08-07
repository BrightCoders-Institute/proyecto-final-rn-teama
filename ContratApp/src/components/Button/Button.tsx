import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {styles} from './styles';

interface Props {
  title: string;
  onPress?: () => void;
  isDisabled?: boolean;
  isGoogle?: boolean;
}

export const Button = (props: Props) => {
  // const google_img = '../../assets/google-logo.png';
  return (
    <TouchableOpacity
      style={[
        props.isDisabled ? styles.btn__disabled : styles.btn__active,
        styles.btn__container,
      ]}
      onPress={props.onPress}
      activeOpacity={0.6}
      disabled={props.isDisabled}>
      <View style={styles.row}>
        <Text style={styles.btn__text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
