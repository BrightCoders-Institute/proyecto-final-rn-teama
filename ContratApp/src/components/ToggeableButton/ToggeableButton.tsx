import React, {useState} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import {styles} from './styles';

import {colors} from '../../../constants/colors';

interface ToggeableButtonProps {
  name: string;
  onPress: () => void;
}

export const ToggeableButton: React.FC<ToggeableButtonProps> = ({
  name,
  onPress,
}) => {
  const [color, setColor] = useState(colors.white);
  const [textColor, setTextColor] = useState(colors.black);
  const [active, setActive] = useState(true);

  const handleColor = () => {
    setActive(!active);
    active ? setColor(colors.mainBlue) : setColor(colors.white);
    active ? setTextColor(colors.white) : setTextColor(colors.black);
  };

  return (
    <TouchableHighlight
      activeOpacity={0.8}
      style={[styles.button, {backgroundColor: color}]}
      onPress={() => {
        handleColor();
        onPress;
      }}>
      <Text style={[styles.name, {color: textColor}]}>{name}</Text>
    </TouchableHighlight>
  );
};
