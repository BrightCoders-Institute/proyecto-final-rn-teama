import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from './styles';

interface Props {
  title: string;
  onPress?: () => void;
  isDisabled?: boolean;
}

export const ButtonSecondary = (props: Props) => {
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
