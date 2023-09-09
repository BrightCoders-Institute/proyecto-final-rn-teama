import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {styles} from './styles';

interface Props {
  title: string;
  onPress?: () => void;
  isDisabled?: boolean;
  isSecondary?: boolean;
}

export const Button = (props: Props) => {
  return (
    <TouchableOpacity
      style={[
        props.isDisabled ? styles.btn__disabled : styles.btn__active,
        styles.btn__container,
        ,
        props.isSecondary ? styles.btn__secondary : styles.btn__active,
      ]}
      onPress={props.onPress}
      activeOpacity={0.6}
      disabled={props.isDisabled}>
      <View style={styles.row}>
        <Text
          style={[
            props.isSecondary ? styles.btn__text_secondary : styles.btn__text,
          ]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
