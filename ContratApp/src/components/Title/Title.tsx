import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

interface Props {
  title: string;
  isSubTitle?: boolean;
}

export const Title = ({title, isSubTitle = false}: Props) => {
  return (
    <Text style={isSubTitle ? styles.subTitle : styles.titleText}>{title}</Text>
  );
};
