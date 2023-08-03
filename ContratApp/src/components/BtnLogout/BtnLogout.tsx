import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './StyleBtnLogout';

export const BtnLogout = () => {
  return (
    <View>
      <TouchableOpacity style={styles.btnCerrar}>
        <Text style={styles.textBtn}>Cerar sesion</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BtnLogout;
