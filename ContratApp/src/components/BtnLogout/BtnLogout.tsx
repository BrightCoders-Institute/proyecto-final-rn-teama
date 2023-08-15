import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './StyleBtnLogout';

interface BtnLogoutProps {
  onPress?: () => void;
}

export const BtnLogout: React.FC<BtnLogoutProps> = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnCerrar} onPress={onPress}>
        <Text style={styles.textBtn}>Cerar sesion</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BtnLogout;
