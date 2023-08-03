import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styleBtnNavigate';
export const BtnNavigate = () => {
  return (
    <View style={styles.containerBtn}>
      <TouchableOpacity style={styles.btnActivity}>
        <Text style={styles.textBtn}>Empleos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btndisabled}>
        <Text style={styles.textBtn}>Historial</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BtnNavigate;
