import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

interface ButtonIconProps {
  icon: IconDefinition;
  color: string;
  onPress: () => void;
  isTransparent?: boolean;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  color,
  onPress,
  isTransparent = false,
}) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: isTransparent ? 'transparent' : '#FFFFFF',
            shadowColor: isTransparent ? 'transparent' : '#000000',
          },
        ]}
        onPress={onPress}
        activeOpacity={0.8}>
        <FontAwesomeIcon icon={icon} size={30} style={{color: color}} />
      </TouchableOpacity>
    </>
  );
};
