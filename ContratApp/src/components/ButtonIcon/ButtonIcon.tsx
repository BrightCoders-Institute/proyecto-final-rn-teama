import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

interface ButtonIconProps {
  icon: IconDefinition;
  color: string;
  onPress: () => void;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  color,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.8}>
        <FontAwesomeIcon icon={icon} size={30} style={{color: color}} />
      </TouchableOpacity>
    </>
  );
};
