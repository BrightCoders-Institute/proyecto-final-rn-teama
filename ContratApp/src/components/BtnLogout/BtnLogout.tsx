import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './StyleBtnLogout';

interface BtnLogoutProps {
  title: string;
  onPress?: () => void;
}

export const BtnLogout: React.FC<BtnLogoutProps> = ({ onPress, title }) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnCerrar} onPress={onPress}>
        <Text style={styles.textBtn}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BtnLogout;
